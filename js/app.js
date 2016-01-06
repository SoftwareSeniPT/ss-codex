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
    // Define all the markdown files here
    markdowns: [{
        name: 'Getting Started',
        file: 'getting-started.md'
    }, {
        name: 'Frontend Dev',
        file: 'frontend.md'
    }, {
        name: 'Graphic Design',
        file: 'graphic-design.md'
    }, {
        name: 'Quality Assurance',
        file: 'quality-assurance.md'
    }, {
        name: 'Wordpress',
        file: 'wordpress.md'
    }, {
        name: 'PHP',
        file: 'php.md'
    }, {
        name: 'CodeIgniter',
        file: 'codeigniter.md'
    }, {
        name: 'Ruby',
        file: 'ruby.md'
    }, {
        name: 'Project Spotzer',
        file: 'project-spotzer.md'
    }, {
        name: 'Contribute',
        link: 'https://github.com/SoftwareSeniPT/ss-codex'
    }],
    savedData: [], // keep the data after all markdowns are compiled
    template: {}, // keep template HTML
    checkList: [], // store the items in array
    init: function($) {
        app.dataLoadingAnimation();
        app.animateCheckIconOnHover();
        app.initTemplate();
        app.changeTopic();
        app.parseMarkDown();
        app.readMoreDescription();
        app.searchHandler();
        app.showHideSubmenu();
        app.updateMenuOnChecklistEvent();
        app.menuScrollBarInit();
        app.mobileHamburgerInit();
    },
    onResize: function() {

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
                $('.main-category[data-id="' + i + '"]').find('.progress span').css({
                    width: percentage + "%"
                });
            });
        });
    },
    initTemplate: function() {
        var template = {
            content: $('[data-template=content]'),
            sideMenuTitle: $('[data-template=side-menu-title]'),
            sideMenu: $('[data-template=side-menu]'),
            sideMenuChildren: $('[data-template=side-menu-children]'),
            searchResult: $('[data-template=search-result]')
        };

        // Init template for main content
        app.template['mainContentTemplate'] = template.content.html();
        template.content.html('');

        // Init side menu children first
        app.template['sideMenuChildrenTemplate'] = template.sideMenuChildren.html()
        template.sideMenuChildren.html('{{ children }}');

        // Init side menu
        app.template['sideMenuTitleTemplate'] = template.sideMenuTitle.html()
        template.sideMenuTitle.html('{{ titles }}');

        // Init sidemenu wrapper template
        app.template['sideMenuTemplate'] = template.sideMenu.html();
        template.sideMenu.html('');

        // Init the search template
        app.template['searchResultTemplate'] = template.searchResult.html();
        template.searchResult.html('');
    },
    dataLoadingAnimation: function() {
        var loader = new SVGLoader(document.getElementById('loader'), {
            speedIn: 600,
            easingIn: mina.easeinout
        });

        loader.show();

        $(document).on('contentInitiated', function() {

            $('#loader').removeClass('opening');
            loader.hide();

            setTimeout(function() {
                $(document).trigger("pageAnimationDone");
                // $('#loader').removeClass('pageload-loading');
            }, 600);
        });
    },
    initContentHandler: function(data) {
        jQuery.each(data, function(index) {
            if (this.link !== undefined) {
                var categoryResult = '<div class="main-category">' +
                    '<h3 class="category-title"><a href="' + this.link + '" target="_blank">' + this.title + '</a></h3></div>'
                $(categoryResult).appendTo('[data-template=side-menu]');
            } else {
                // Init the title
                var mainTitle = this.title;

                var title = this.categories[0]['name'],
                    description = this.categories[0]['description'],
                    items = this.categories[0]['items'];

                jQuery('body').addClass('on-first-page');

                var contentHTML = app.contentLinkInit('desc', 0, index);

                if (description !== undefined) {
                    // Check if there is any description
                    var tmpl = app.template['mainContentTemplate'],
                        content = description;

                    tmpl = tmpl.replace('{{ title }}', title);
                    tmpl = tmpl.replace('{{ content }}', content + contentHTML);
                    tmpl = tmpl.replace('{{ id }}', 'desc-0');
                    tmpl = tmpl.replace('{{ class }}', 'no-check');
                    tmpl = '<div class="content-desc-0-' + index + '" data-id="desc-0-' + index + '">' + tmpl + '</div>';

                    $(tmpl).appendTo('[data-template=content]');

                } else if (items.length > 0) {
                    // If there is no description, show the first item
                    var tmpl = app.template['mainContentTemplate'],
                        title = $(items[0]['title']).text(),
                        content = items[0]['content'];

                    tmpl = tmpl.replace('{{ title }}', title);
                    tmpl = tmpl.replace('{{ content }}', content + contentHTML);
                    tmpl = tmpl.replace('{{ id }}', '0-0');
                    tmpl = tmpl.replace('{{ class }}', '');
                    tmpl = '<div class="content-0-0' + index + '" data-id="0-0' + index + '">' + tmpl + '</div>';

                    $(tmpl).appendTo('[data-template=content]');
                }

                // Init side menu
                var categoryHTML = [];

                $.each(this.categories, function(i, o) {
                    var tmpl = app.template['sideMenuTitleTemplate'],
                        category = o.name,
                        titles = [];

                    $.each(o.items, function(id, ob) {

                        var titleTmpl = app.template['sideMenuChildrenTemplate'];

                        titleTmpl = titleTmpl.replace('{{ title }}', ob.title);
                        titleTmpl = titleTmpl.replace(/{{ id }}/g, id + '-' + i + '-' + index);
                        titles.push(titleTmpl);
                    });

                    tmpl = tmpl.replace('{{ id }}', 'desc-' + i + '-' + index);
                    tmpl = tmpl.replace('{{ title }}', category);
                    tmpl = tmpl.replace('{{ children }}', titles.join('\n\r'));

                    categoryHTML.push(tmpl);
                });

                var categoryResult = '<div class="main-category" data-id="' + index + '"><span class="progress"><span></span></span>' +
                    '<h3 class="category-title">' + mainTitle + '</h3><ul>' +
                    categoryHTML.join('\n\r') + '</ul></div>'
                $(categoryResult).appendTo('[data-template=side-menu]');

                app.initSVG();
            }
        });

        jQuery(document).trigger('contentInitiated');
    },
    showHideSubmenu: function() {
        jQuery(document).on('click', '.main-category > h3', function() {
            // Open the menu
            jQuery('.main-category').not(jQuery(this).parent()).removeClass('opened');
            jQuery('.main-category > ul').slideUp();
            if (!jQuery(this).parent().hasClass('opened')) {
                jQuery(this).parent().addClass('opened');
                jQuery(this).parent().find('> ul').slideDown();
            } else {
                jQuery(this).parent().removeClass('opened');
                jQuery(this).parent().find('> ul').slideUp();
            }
        });

        jQuery(document).on('click', '.main-category > ul > li span', function() {
            // Open the menu
            jQuery('.main-category > ul > li').not(jQuery(this).parent()).removeClass('opened');
            jQuery('.main-category > ul > li ul').slideUp();
            var $list = jQuery(this).parent().find('ul');
            if (!jQuery(this).parent().hasClass('opened')) {
                if ($list.find('li').length) {
                    jQuery(this).parent().addClass('opened');
                    jQuery(this).parent().find('ul').slideDown();
                }
            } else {
                if ($list.find('li').length) {
                    jQuery(this).parent().removeClass('opened');
                    jQuery(this).parent().find('ul').slideUp();
                }
            }
        })
    },
    changeTopic: function() {
        function setToActive(id) {
            if (id == "desc-0-0") {
                jQuery('body').addClass('on-first-page')
            } else {
                jQuery('body').removeClass('on-first-page')
            }


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
            var grandParentID = id.split('-')[2];

            if ($('.desc .content-' + id).length) {
                setToActive(id);
            } else {
                var tmpl = app.template['mainContentTemplate'];

                if (itemID == 'desc') {
                    // If the selected item is category title
                    var title = app.savedData[grandParentID].categories[parentID]['name'],
                        content = app.savedData[grandParentID].categories[parentID]['description'],
                        classes = 'no-check';
                } else {
                    var title = app.savedData[grandParentID].categories[parentID]['items'][itemID]['title'],
                        content = app.savedData[grandParentID].categories[parentID]['items'][itemID]['content'],
                        classes = '';
                }

                var contentHTML = app.contentLinkInit(itemID, parentID, grandParentID);

                tmpl = tmpl.replace('{{ title }}', title);
                tmpl = tmpl.replace('{{ content }}', content + contentHTML);
                tmpl = tmpl.replace('{{ id }}', id);
                tmpl = tmpl.replace('{{ class }}', classes);

                $('<div class="content-' + id + '" data-id="' + id + '">' + tmpl + '</div>').appendTo('[data-template=content]');

                setToActive(id);
                app.initSVG();
            }
        });
    },
    contentLinkInit: function(itemID, parentID, grandParentID) {
        var contentHTML = "";
        if (jQuery.isArray(app.savedData[grandParentID].categories[parentID]['items']) && app.savedData[grandParentID].categories[parentID]['items'].length > 0 && itemID == 'desc') {

            var contentArr = [];
            jQuery.each(app.savedData[grandParentID].categories[parentID]['items'], function(index) {
                var title = '<li><span data-id="'+index+'-'+parentID+'-'+grandParentID+'" data-item-select>' + this.title + '</span></li>';
                contentArr.push(title);
            });

            if (contentArr.length > 0) {
                contentHTML = "<ul class='bottom-links'>" + contentArr.join('') + "</ul>";
            }
        }
        return contentHTML;
    },
    parseMarkDown: function() {
        // set ajax to sync
        jQuery.ajaxSetup({
            async: false,
            cache: true
        });

        // get the total markdown;
        var markdownLength = app.markdowns.length;

        // Looping the markdowns array
        jQuery.each(app.markdowns, function(index, o) {
            var mainCategory = [];
            var mainTitle = '';
            var mainDescription = '';

            app.savedData[index] = {
                categories: null,
                description: null,
                title: null
            };

            // Seed checklist parent
            app.checkList[index] = [];

            if (o.file === undefined) {
                app.savedData[index] = {
                    title: o.name,
                    link: o.link
                }
            } else {
                $.get('./markdowns/' + o.file).done(function(data) {
                    // Convert the markdown to HTML
                    var $html = $('<div class="html"></div>').append(marked(data));

                    // Store the main title of the markdown
                    var $title = $html.find('> h1').eq(0);

                    if ($title.length) {
                        mainTitle = o.name;
                    } else {
                        mainTitle = "Untitled Documentation"
                    }

                    // Get the main description
                    $html.find('> h1').eq(0).nextUntil('.html > h2').wrapAll('<div class="main-description"></div>');

                    var $mainDescription = $html.find('.main-description');

                    if ($mainDescription.length) {
                        mainDescription = $mainDescription[0].innerText || $mainDescription[0].textContent;
                    } else {
                        mainDescription = "Just another awesome documentation";
                    }

                    // Loop the html to explode the h2 into categories
                    var $categories = $html.find('> h2'),
                        lastID = $categories.length - 1;

                    $categories.each(function(i, o) {

                        $(o).nextUntil('.html > h2').wrapAll('<div class="category"></div>');

                        // Prepend a div so we can select the description
                        $(o).next('.category').prepend('<div class="desc-node"></div>');
                        $(o).next('.category').find('.desc-node').nextUntil('.category > h3').wrapAll('<div class="description"></div>');

                        var $description = $(o).next('.category').find('.description');

                        var desc;
                        if ($description.length) {
                            desc = $description[0].innerHTML;
                        } else {
                            desc = "";
                        }

                        // Check if is there any h3 heading
                        $titles = $(o).next('.category').find('> h3');

                        var itemArr = [];
                        if ($titles.length > 0) {
                            // Find h3s of each category
                            $titles.each(function(id, ob) {
                                $(ob).nextUntil('.category > h3').wrapAll('<div class="item"></div>');

                                // Store the item title and content
                                if ($(ob).next('.item').length) {
                                    var $content = $(ob).next('.item')[0].outerHTML;
                                } else {
                                    var $content = "";
                                }


                                // Push data
                                var itemObj = {
                                    title: $(ob)[0].innerText || $(ob)[0].textContent,
                                    content: app.syntaxHighlightingFixes($content)
                                };

                                itemArr.push(itemObj);

                                // Seed data for checklist
                                app.checkList[index].push({
                                    ID: id + "-" + i + "-" + index,
                                    checked: false
                                });
                            });
                        }

                        var categoryObj = {
                            items: itemArr,
                            name: $(o)[0].innerText || $(o)[0].textContent,
                            description: desc
                        };

                        mainCategory.push(categoryObj);
                    });

                    app.savedData[index].categories = mainCategory;
                    app.savedData[index].description = mainDescription;
                    app.savedData[index].title = mainTitle;
                });
            }
            if (index == (markdownLength - 1)) {
                app.initContentHandler(app.savedData);
            }
        });
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
    searchHandler: function() {
        $(document).on('propertychange change click keyup input paste', '[data-search-input]', function() {
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

            $.each(app.savedData, function(index, obj) {
                if (obj.link === undefined) {
                    $.each(obj.categories, function(i, o) {
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
                                            ID: id + "-" + i + "-" + index
                                        }
                                    });
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
    menuScrollBarInit: function() {
        jQuery(".nano").nanoScroller();
    },
    mobileHamburgerInit: function() {
        function closeOffcanvas() {
            jQuery('body')
                .removeClass('hamburger-open')
                .addClass('hamburger-close');

            jQuery('.move-left').eq(0).one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
                jQuery('body').removeClass('hamburger-close')
            });
        }

        jQuery(document).on('touchstart', '#hamburger', function() {
            if (!jQuery('body').hasClass('hamburger-open')) {
                jQuery('body').addClass('hamburger-open')
            } else {
                closeOffcanvas()
            }
        });

        // close the hamburger when choosing menu
        jQuery('.main-category > ul > li span').click(function() {
            if (!jQuery(this).parent().find('ul li').length) {
                closeOffcanvas();
            }
        });

        jQuery('.main-category > ul > li > ul > li').click(function() {
            closeOffcanvas();
        });
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
