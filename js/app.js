/*
 * App Name: Sweet Docs
 * App URL: http://diru.io/sweet-docs
 * Author: Rudi Wahyudi
 * Author URI: http://diru.io
 * Description: Client-side based documentation that automatically convert markdown into beautiful and rich-featured documentation
 * Version: 1.0
 * License: GNU General Public License v2 or later
 * License URI: http://www.gnu.org/licenses/gpl-2.0.html

 * This app is licensed under the GPL.
 * Use it to make something cool, have fun, and share what you've learned with others.
*/

var app = {
    template: {},
    baseData: {},
    checkList: [],
    init: function($) {
        app.animateTitle();
        app.animateCheckIconOnHover();
        app.initContent();
        app.changeTopic();
        app.parseMarkDown();
        app.dataLoadingAnimation();
        app.readMoreDescription();
        app.searchHandler();
        app.updateMenuOnChecklistEvent();
    },
    onResize: function() {

    },
    animateTitle: function() {
        $(document).on('pageAnimationDone', function() {
            $('body').removeClass('animate-title');
        });
    },
    animateCheckIconOnHover: function() {

        // Initiate require things to animate an SVG
        $(document).on('svgsLoaded', function() {
            $('.check').each(function(i, o) {
                $(o).find('svg path').each(function(index, object) {
                    var totalLength = object.getTotalLength(); // Total length of path

                    $(object).attr('stroke-dasharray', totalLength + ' ' + totalLength);
                    $(object).attr('stroke-dashoffset', 0);
                    $(object).attr('class', 'path-' + index);

                    // Save toal length data on SVG attribute
                    $(object).attr('data-total', totalLength);
                });
            });
        });

        // Handle when hover
        $(document).on('mouseenter', '.check', function() {
            var elm = $(this);

            if (!elm.hasClass('checked')) {
                if (!elm.hasClass('checked')) {
                    elm.removeClass('animate-unchecking');
                    elm.addClass('animate-checking');
                } else {
                    elm.removeClass('animate-checking');
                    elm.addClass('animate-unchecking');
                }

                setTimeout(function() {
                    elm.addClass('first-animation-done');
                }, 0);
            }

        });

        // Handle when hover
        $(document).on('mouseleave', '.check', function() {
            $(this).removeClass('animate-checking');
            $(this).removeClass('animate-unchecking');
            $(this).removeClass('first-animation-done');
        });

        // If clicked
        $(document).on('click touchstart', '.check', function() {
            var ID = $(this).attr('data-id');

            if ($(this).hasClass('checked')) {
                $(this).removeClass('checked');
                $(this).addClass('unchecked');

                // update the checklist array
                app.updateChecklist(ID, false);
            } else {
                $(this).removeClass('unchecked');
                $(this).addClass('checked');

                // Update the checklist array
                app.updateChecklist(ID, true);
            }
            return false;
        });
    },
    updateChecklist: function(ID, checked) {
        if (checked) {
            $.each(app.checkList, function() {
                $.each(this, function() {
                    if (this.ID == ID) {
                        this.checked = true;
                        $(document).trigger('checkListUpdated')
                    }
                });
            });
        } else {
            $.each(app.checkList, function() {
                $.each(this, function() {
                    if (this.ID == ID) {
                        this.checked = false;
                        $(document).trigger('checkListUpdated')
                    }
                });
            });
        }
    },
    updateMenuOnChecklistEvent: function() {
        $(document).on('checkListUpdated', function() {

            // Reset side link checked state
            $('.side-menu li').removeClass('checked');

            // Update the side menu link
            $.each(app.checkList, function(i, o) {
                var checked = 0;
                $.each(this, function() {
                    // Count the checkk item
                    if (this.checked) {
                        // Update side menu list
                        $('.side-menu li[data-id=' + this.ID + ']').addClass('checked');
                        checked++;
                    }
                });

                var total = this.length,
                    percentage = ((checked / total) * 100);
                // update checklist progress
                $('.category-title').eq(i).find('.checklist-progress').css({
                    width: percentage + "%"
                });
            });
        });
    },
    initContent: function() {
        $(document).on('baseDataInitiated', function() {
            // console.log(app.baseData);

            var template = {
                content: $('[data-template=content]'),
                sideMenuTitle: $('[data-template=side-menu-title]'),
                sideMenu: $('[data-template=side-menu]'),
                searchResult: $('[data-template=search-result]')
            };

            // Init the title
            var title = app.baseData.title;

            $('[data-title]').html(title);

            // Init main description
            var description = app.baseData.description;

            if (description.length > 200) {
                description = app.trimWord(description, 200);
                description = description + " <span data-read-more>Show full description</span>"
            }

            $('[data-description]').html(description);

            // Init first main content
            app.template['mainContentTemplate'] = template.content.html();
            template.content.html('');

            var title = app.baseData.categories[0]['name'],
                description = app.baseData.categories[0]['description'],
                items = app.baseData.categories[0]['items'];

            if (description !== undefined) {
                // Check if there is any description
                var tmpl = app.template['mainContentTemplate'],
                    content = description;

                tmpl = tmpl.replace('{{ title }}', title);
                tmpl = tmpl.replace('{{ content }}', content);
                tmpl = tmpl.replace('{{ id }}', 'desc-0');
                tmpl = tmpl.replace('{{ class }}', 'no-check');
                tmpl = '<div class="content-desc-0" data-id="desc-0">' + tmpl + '</div>';

                $(tmpl).appendTo(template.content);

            } else if (items.length > 0) {
                // If there is no description, show the first item
                var tmpl = app.template['mainContentTemplate'],
                    title = $(items[0]['title']).text(),
                    content = items[0]['content'];

                tmpl = tmpl.replace('{{ title }}', title);
                tmpl = tmpl.replace('{{ content }}', content);
                tmpl = tmpl.replace('{{ id }}', '0-0');
                tmpl = tmpl.replace('{{ class }}', '');
                tmpl = '<div class="content-0-0" data-id="0-0">' + tmpl + '</div>';

                $(tmpl).appendTo(template.content);
            }

            // Init side menu
            app.template['sideMenuTitleTemplate'] = template.sideMenuTitle.html()
            template.sideMenuTitle.html('{{ titles }}');

            app.template['sideMenuTemplate'] = template.sideMenu.html();
            template.sideMenu.html('');

            $.each(app.baseData.categories, function(i, o) {
                var tmpl = app.template['sideMenuTemplate'],
                    category = o.name,
                    titles = [];

                $.each(o.items, function(id, ob) {

                    var titleTmpl = app.template['sideMenuTitleTemplate'];

                    titleTmpl = titleTmpl.replace('{{ title }}', ob.title);
                    titleTmpl = titleTmpl.replace(/{{ id }}/g, id + '-' + i);
                    console.log(titleTmpl, 'hhh');
                    titles.push(titleTmpl);
                });

                tmpl = tmpl.replace('{{ id }}', 'desc-' + i);
                tmpl = tmpl.replace('{{ category }}', category);
                tmpl = tmpl.replace('{{ titles }}', titles.join('\n\r'));

                $(tmpl).appendTo(template.sideMenu);
            });

            // Init the search template
            app.template['searchResultTemplate'] = template.searchResult.html();
            template.searchResult.html('');

            // Convert SVG files
            app.initSVG();

            // fire an event if content is done initiated
            $(document).trigger('contentInitiated');
        });
    },
    changeTopic: function() {
        function setToActive(id) {
            // close search wrapper if visible
            if ($('[data-search-wrapper]').is(':visible')) {
                $('[data-content-wrapper]').show();
                $('[data-search-wrapper]').hide();
            }

            $('.desc > div').not('.content-' + id).hide();
            $('.desc .content-' + id).show();

            // Update side menu item select state
            $('.side-menu li').not('li[data-id=' + id + ']').removeClass('selected')
            $('.side-menu li[data-id=' + id + ']').addClass('selected')
        }

        $(document).on('click', '[data-item-select]', function(event) {
            var id = $(this).attr('data-id');
            var itemID = id.split('-')[0];
            var parentID = id.split('-')[1];

            if ($('.desc .content-' + id).length) {
                setToActive(id);
            } else {
                var tmpl = app.template['mainContentTemplate'];

                if (itemID == 'desc') {
                    // If the selected item is category title
                    var title = app.baseData.categories[parentID]['name'],
                        content = app.baseData.categories[parentID]['description'],
                        classes = 'no-check';
                } else {
                    var title = app.baseData.categories[parentID]['items'][itemID]['title'],
                        content = app.baseData.categories[parentID]['items'][itemID]['content'],
                        classes = '';
                }

                tmpl = tmpl.replace('{{ title }}', title);
                tmpl = tmpl.replace('{{ content }}', content);
                tmpl = tmpl.replace('{{ id }}', id);
                tmpl = tmpl.replace('{{ class }}', classes);

                $('<div class="content-' + id + '" data-id="' + id + '">' + tmpl + '</div>').appendTo('[data-template=content]');

                setToActive(id);
                app.initSVG();
            }
        });
    },
    parseMarkDown: function() {
        app.baseData.categories = [];

        $.get("doc.md").done(function(data) {
            // Convert the markdown to HTML
            var $html = $('<div class="html"></div>').append(marked(data));

            // Store the main title of the markdown
            var $title = $html.find('> h1').eq(0);

            if ($title.length) {
                app.baseData['title'] = $title[0].innerText;
            } else {
                app.baseData['title'] = "Untitled Documentation"
            }

            // Get the main description
            $html.find('> h1').eq(0).nextUntil('.html > h2').wrapAll('<div class="main-description"></div>');

            var $mainDescription = $html.find('.main-description');

            if ($mainDescription.length) {
                app.baseData['description'] = $mainDescription[0].innerText;
            } else {
                app.baseData['description'] = "Just another awesome documentation";
            }

            // Loop the html to explode the h2 into categories
            var $categories = $html.find('> h2'),
                lastID = $categories.length - 1;

            $categories.each(function(i, o) {


                $(o).nextUntil('.html > h2').wrapAll('<div class="category"></div>');

                // Prepend a div so we can select the description
                $(o).next('.category').prepend('<div class="desc-node"></div>');
                $(o).next('.category').find('.desc-node').nextUntil('.category > h3').wrapAll('<div class="description"></div>');

                // Store the category name
                app.baseData.categories[i] = [];
                app.baseData.categories[i]['items'] = [];
                app.baseData.categories[i]['name'] = $(o)[0].innerText;

                var $description = $(o).next('.category').find('.description');
                if ($description.length) {
                    app.baseData.categories[i]['description'] = $description[0].innerHTML;
                }

                // Seed checklist parent
                app.checkList[i] = [];

                // Check if is there any h3 heading
                $titles = $(o).next('.category').find('> h3');

                if ($titles.length > 0) {
                    // Find h3s of each category
                    $titles.each(function(id, ob) {
                        $(ob).nextUntil('.category > h3').wrapAll('<div class="item"></div>');

                        // Store the item title and content
                        var $content = $(ob).next('.item')[0].outerHTML;
                        app.baseData.categories[i]['items'][id] = [];
                        app.baseData.categories[i]['items'][id]['title'] = $(ob)[0].innerText;
                        app.baseData.categories[i]['items'][id]['content'] = app.syntaxHighlightingFixes($content);

                        // Seed data for checklist
                        app.checkList[i].push({
                            ID: id + "-" + i,
                            checked: false
                        });
                    });
                }

                // If finished fire callback
                if (i == lastID) {
                    $(document).trigger('baseDataInitiated', []);
                }
            });
        })

    },
    syntaxHighlightingFixes: function(html) {
        var $code = $(html).wrapAll('<div></div>').parent().find('code');

        $code.each(function(i, o) {
            var before = $(o)[0].innerHTML;

            if ($(o).hasClass('lang-javascript')) {
                Rainbow.color(before, 'javascript', function(highlightedCode) {
                    html = html.replace(before, highlightedCode)
                });
            }

            if ($(o).hasClass('lang-php')) {
                Rainbow.color(before, 'php', function(highlightedCode) {
                    html = html.replace(before, highlightedCode)
                });
            }

            if ($(o).hasClass('lang-html')) {
                Rainbow.color(before, 'html', function(highlightedCode) {
                    html = html.replace(before, highlightedCode)
                });
            }

            if ($(o).hasClass('lang-css')) {
                Rainbow.color(before, 'css', function(highlightedCode) {
                    html = html.replace(before, highlightedCode)
                });
            }
        });


        // $code.each(function(i, o) {
        //     var before = $(o)[0].outerHTML;

        //     if ($(o).hasClass('lang-javascript')) {
        //         html = html.replace(before, $(o).attr('data-language', 'javascript')[0].outerHTML)
        //     }

        //     if ($(o).hasClass('lang-php')) {
        //         html = html.replace(before, $(o).attr('data-language', 'php')[0].outerHTML)
        //     }

        //     if ($(o).hasClass('lang-html')) {
        //         html = html.replace(before, $(o).attr('data-language', 'html')[0].outerHTML)
        //     }

        //     if ($(o).hasClass('lang-css')) {
        //         html = html.replace(before, $(o).attr('data-language', 'css')[0].outerHTML)
        //     }
        // });

        return html;
    },
    readMoreDescription: function() {
        $(document).on('click', '[data-read-more]', function() {
            var description = app.baseData.description;
            description = description + " <span data-read-less>Show less description</span>"
            $('[data-description]').html(description);
        });

        $(document).on('click', '[data-read-less]', function() {
            var description = app.trimWord(app.baseData.description, 200);
            description = description + " <span data-read-more>Show more description</span>"
            $('[data-description]').html(description);
        });
    },
    dataLoadingAnimation: function() {
        var loader = new SVGLoader(document.getElementById('loader'), {
            speedIn: 600,
            easingIn: mina.easeinout
        });

        loader.show();

        $(document).on('contentInitiated', function() {
            setTimeout(function() {
                $('#loader').removeClass('opening');
                loader.hide();

                // Trigger event telling animation is done
                $('#loader').removeClass('pageload-loading');
                setTimeout(function() {
                    $(document).trigger("pageAnimationDone");
                }, 600);

            }, 1000);
        });
    },
    searchHandler: function() {
        $('[data-search-input]').on('propertychange change click keyup input paste', function() {
            var val = $(this).val();
            if (val.length > 0) {
                $('[data-content-wrapper]').hide();
                $('[data-search-wrapper]').show();

                // Update the search value
                $('[data-search-value]').html(val);
            } else {
                $('[data-content-wrapper]').show();
                $('[data-search-wrapper]').hide();

                // Reset the search value
                $('[data-search-value]').html('');
            }

            updateSearchResult()
        });


        function updateSearchResult() {
            var val = $('[data-search-input]').val().toLowerCase(),
                $searchWrapper = $('[data-template=search-result]'),
                searchResult = [];

            $searchWrapper.html('');

            $.each(app.baseData.categories, function(i, o) {
                if (o.items.length > 0) {
                    $.each(o.items, function(id, ob) {
                        var content = ob.content.replace(/(<([^>]+)>)/ig, "").replace(/(&lt;([^>]+)&gt;)/ig, ""),
                            lowerCaseContent = content.toLowerCase();
                        lowerCaseTitle = ob.title.toLowerCase()
                        pos = lowerCaseContent.search(val);

                        if ((pos != -1 || lowerCaseTitle.search(val) != -1) && val != "") {
                            searchResult.push({
                                pos: pos,
                                content: {
                                    title: ob.title,
                                    content: content,
                                    ID: id + "-" + i
                                }
                            });
                        }
                    });
                }
            });

            if (searchResult.length > 0) {
                $.each(searchResult, function(i, o) {
                    if (i < 10) {
                        var tmpl = app.template['searchResultTemplate'];

                        // Description

                        var desc = o.content.content;

                        if ((o.pos - 50) > 0) {
                            desc = "..." + desc.substr((o.pos - 50), 300);
                        }

                        desc = app.trimWord(desc, 200);
                        desc = desc.replace(val, '<span class="bold">' + val + '</span>');

                        tmpl = tmpl.replace('{{ id }}', o.content.ID);
                        tmpl = tmpl.replace('{{ title }}', o.content.title);
                        tmpl = tmpl.replace('{{ description }}', desc);

                        $(tmpl).appendTo($searchWrapper);
                    }
                });
            } else {
                $('<div class="no-result">No result found.</div>').appendTo($searchWrapper);
            }
        }
    },
    trimWord: function(str, length) {
        var delim = " ",
            appendix = "...";

        if (str.length <= length) return str;

        var trimmedStr = str.substr(0, length + delim.length);

        var lastDelimIndex = trimmedStr.lastIndexOf(delim);
        if (lastDelimIndex >= 0) trimmedStr = trimmedStr.substr(0, lastDelimIndex);

        if (trimmedStr) trimmedStr += appendix;
        return trimmedStr;
    },
    initSVG: function() {
        // Set total and counter 
        var $svgs = $('img.svg');
        var total = $svgs.length;
        var count = 0;

        // If no SVGs on page, fire callback event
        if (total === count) $(document).trigger('svgsLoaded', [count]);

        // Convert linked SVG to embedded SVG's
        $svgs.each(function() {
            var $img = $(this);
            var imgID = $img.attr('id');
            var imgClass = $img.attr('class');
            var imgURL = $img.attr('src');

            $.get(imgURL, function(data) {

                // Increment counter
                count++;

                // Get the SVG tag, ignore the rest
                var $svg = $(data).find('svg');

                // Add replaced image's ID to the new SVG
                if (typeof imgID !== 'undefined') {
                    $svg = $svg.attr('id', imgID);
                }
                // Add replaced image's classes to the new SVG
                if (typeof imgClass !== 'undefined') {
                    $svg = $svg.attr('class', imgClass + ' replaced-svg');
                }

                // Remove any invalid XML tags as per http://validator.w3.org
                $svg = $svg.removeAttr('xmlns:a');

                // Replace image with new SVG
                $img.replaceWith($svg);

                // If this is the last svg, fire callback event
                if (total === count) $(document).trigger('svgsLoaded', [count]);
            });

        });

    }
}


jQuery(document).ready(function($) {
    app.init($);
    $(window).resize(function() {
        app.onResize();
    });
});
