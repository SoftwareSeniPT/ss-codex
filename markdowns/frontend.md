# Frontend Dev
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi odio quas soluta error perspiciatis quisquam asperiores laboriosam nihil, quo illum suscipit consectetur vel, saepe ad. Dolore excepturi dolores perferendis, assumenda.


## General Guidelines

### Avoid Multiple Files
A lot of web development seems to be about splitting things up into manageable chunks or “components”. For each discrete bit of javascript functionality or each HTML partial I might make a dedicated file, then organize related files into folders named javascript and html or controllers and templates. Whatever you like. This way, you can easily dip into the file system and focus on just the file containing the code you want to edit at the time.

This doesn’t work so well for CSS. Javascript function definitions can go either before or after where they are called and HTML modules can be inserted wherever you see fit in the flow of the document. CSS, on the other hand, is a chronology. It matters a great deal in what order you declare styles. Heeding the language features of inheritance and specificity, you should start with generic styles (like a font-family set on body) and progress to more specific definitions.

CSS is an ordered, exception based language and there is no easy way for a file listing (which is typically organised alphabetically) to represent it coherently. It gives you the impression that each CSS file is autonomous, which it is not.

```
- buttons.css 
- reset.css
```

So you have two choices: You can either live in denial, grumbling that “specificity shouldn’t be part of CSS” as you try to force a square peg into a round hole, or you can work in one, well-commented file that clearly represents the arc of your inheritance-harnessing cascade. Specificity should never be a problem because the most specific selectors should be the last ones you write.

### Nesting
If it possible, always avoid writing too much selectors for referencing on CSS. 3 depths selector is fine. But always keep on mind to not make it too general. It will cause problems with other selectors.

Good:
```css
#header .navbar .navbar-menu {
  ...
}
```

Bad (too specific):
```css
#header .top .navbar .navbar-left .navbar-menu {
  ...
}

```

Bad (too general):
``````css
.navbar-menu {
  ...
}
```

### Commenting
The most important thing when it comes to code etiquette is commenting. Comment everything, even if it seems obvious to you it needs to be commented. This is especially true for the main javascript file.

Code is written and maintained by people. Ensure your code is descriptive, well commented, and approachable by others. Great code comments convey context or purpose. Do not simply reiterate a component or class name.

Be sure to write in complete sentences for larger comments and succinct phrases for general notes.

Good:
```css
/* Modal header */
.modal-header {
  ...
}
```

Bad:
```css
/* Wrapping element for .modal-title and .modal-close */
.modal-header {
  ...
}
```

### Reduce image file size 

Reduce image file size is by using the "Save for Web" command in Adobe Photoshop. When using this command, you want to adjust the image to the lowest file size acceptable while keeping an eye out for image quality.

A good rule of thumb for ecommerce images is to try to keep your image file size below 70kb. That can be difficult sometimes, especially for larger images, so you can use larger file size no more than 200kb.

## HTML

### Readjust HTML
You FrontEnds are allowed to readjust the HTML whenever you think the mockup of the new site has a different layout with the template. Believe me, the good structure will save your time on styling, moreover while facing IE.

### Reducing Markup
Whenever possible, avoid superfluous parent elements when writing HTML. Many times this requires iteration and refactoring, but produces less HTML.

Good:
```html
<span class="avatar">
  <img src="...">
</span>
```

Bad:
```html
<img class="avatar" src="..."> 
```
### JS Generated Markup
Writing markup in a JavaScript file makes the content harder to find, harder to edit, and less performant. Avoid it whenever possible.

### Setting the Viewport

HTML5 introduced a method to let web designers take control over the viewport, through the <meta> tag.

You should include the following <meta> viewport element in all your web pages:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

A <meta> viewport element gives the browser instructions on how to control the page's dimensions and scaling.

The width=device-width part sets the width of the page to follow the screen-width of the device (which will vary depending on the device).

The initial-scale=1.0 part sets the initial zoom level when the page is first loaded by the browser.

Users are used to scroll websites vertically on both desktop and mobile devices - but not horizontally!

So, if the user is forced to scroll horizontally, or zoom out, to see the whole web page it results in a poor user experience.

Some additional rules to follow:

1. Do NOT use large fixed width elements - For example, if an image is displayed at a width wider than the viewport it can cause the viewport to scroll horizontally. Remember to adjust this content to fit within the width of the viewport.

2. Do NOT let the content rely on a particular viewport width to render well - Since screen dimensions and width in CSS pixels vary widely between devices, content should not rely on a particular viewport width to render well.

3. Use CSS media queries to apply different styling for small and large screens - Setting large absolute CSS widths for page elements, will cause the element to be too wide for the viewport on a smaller device. Instead, consider using relative width values, such as width: 100%. Also, be careful of using large absolute positioning values. It may cause the element to fall outside the viewport on small devices.

## Naming
Always use a semantic approach to CSS or JS up to a certain point. The idea is for you to be able to read them and get some idea of what the HTML would look like.

### CSS Selectors
Class names should all be lower case, with hyphens as spaces. So use work-grid, not WorkGrid or work_grid.

Good:
```css
  .block-slideshow { 
    font-size: 22px; 
    margin-top: 33px; 
  } 
```

Bad:
```css
  .blockSlideshow { 
    font-size: 22px; 
    margin-top: 33px; 
  } 

  .block_footer { 
    background-color: #000;
  } 
```

### JS Variable
Variables should be camel cased like initMenu or initVideoDetail.

Good:
```javascript
  var headerHTML = jQuery('#header').html(); 
```

Bad:
```javascript
  var header-HTML = jQuery('#header').html();
  var footer_visibility = false; 
```  

### Image Icon Naming
Icons and image assets should be named describing what they are, not what they represent. Use hyphens as spaces, never use underscore or camel cased naming. A logo name should starts with "logo" and and icon name starts with "icon".

Good:
```
logo-small.svg
icon-envelope.svg
icon-arrow-left.svg
```

Bad:
```
icon-email.svg
icon-previous.svg
icon_arrow.svg
logoLarge.svg
``` 

## CSS

### Prefixing
Don't forget to always prefixing the stylesheet to avoid the cross browser issues on the future. There are numbers of CSS auto prefixing tools app or online services that can do that, like:
- Prepos (App, available for windows, linux and OSX)
- http://autoprefixer.github.io

### Indenting
Use soft tabs with four spaces. It will make the code easy to read.

Good:
```css
footer {
    text-align: center;
    padding: 20px;
    font-size: 14px;
    color: #8E8E8E;
}

footer a {
    color: #2e7e83;
}
```

Bad:
```css
footer {
text-align: center;
padding: 20px;
font-size: 14px;
color: #8E8E8E;
}

footer a {
color: #2e7e83;
}
```

### Unit sizes

CSS has four different unit sizes you can use for your margins, borders, fonts, etc. These are pixels (px), points (pt), ems (em) and percentages (%).

We can separate these units in two different groups, fixed and relative. Pixels (px) and points (pt) are fixed, whereas em and percents(%) are relative unit sizes. Relative unit sizes are really powerful when creating scalable layouts. Fixed size units are good to use when you always want the same element size no matter where you place it.

CSS3 introduces a few new units, including the rem unit, which stands for “root em”.  The rem unit is relative to the root—or the html—element.  It fixes the problem of sizing relative to the context encountered when using ems.

Point values are only for print! A point is a unit of measurement used for real-life ink-on-paper typography. 72pts = one inch. One inch = one real-life inch like-on-a-ruler. Not an inch on a screen, which is totally arbitrary based on resolution. Point (pt) is not recommended to use in web pages since cross-browser results can be very different.

### Preprocessors
Use your preferred CSS preprocessor. You can use SASS or LESS, but keep in mind that always be consistent. If the last developer was using SASS, please keep using it when you continue the project. 

Keep attention to this list when working with CSS preprocessor:
- Don't use too much nesting. It will make your compiled CSS become too big.
- Don't minify the compiled CSS unless the project is on production stage. 
- Always put variable if possible. Variable could be color code, background color, font name.

### CSS Reset
CSS reset is a must! It will prevent issues with cross browser and make things easier to style. We prefer to use normalize.css to resetting the css.

Don't forget to reset box-sizing to border-box for every element This allows us to more easily assign widths to elements that also have padding and borders

```css
* {
    box-sizing: border-box;
}
```

## Javascript

### Setup
Put all the main JavaScript for the site in one file.

To avoid any namespace issues and keep things simple, all the main logic of the site gets wrapped in one large object. This allows you to turn off entire sections of the code, or change the run order, which makes debugging easier. It has the added benefit of providing a clear way to safely set global values. Look at this example:
```javascript
var app = {
    init: function() {
        // Size things
        app.setWinSize();
    },

    setWinSize: function({
        // Set window size
        app.winHeight = jQuery(window).height();
        app.winWidth = jQuery(window).width();
    }
};
jQuery(document).ready(function($){
    app.init();
    jQuery(window).resize(function(){
        app.onResize();
    });
});
```
## Responsive Web Design

### Responsive width

Setting the width of a block-level element will prevent it from stretching out to the edges of its container to the left and right. Then, you can set the left and right margins to auto to horizontally center that element within its container. The element will take up the width you specify, then the remaining space will be split evenly between the two margins.

The only problem occurs when the browser window is narrower than the width of your element. The browser resolves this by creating a horizontal scrollbar on the page. 

Using max-width instead of width in this situation will improve the browser's handling of small windows. This is important when making a site usable on mobile. Resize this page to check it out!

By the way, max-width is supported by all major browsers including IE7+ so you shouldn't be afraid of using it.

Use percentage as width and give maximum width in pixel

Good:
```css
.wrapper {
   width:100%;
   max-width: 1024px;
   margin: 0 auto;
}
```

Bad:
```css
.wrapper {
   width: 1024px;
   margin: 0 auto;
}

@media (max-width: 1024px) {   
  .wrapper {
    width: 100%;
  }
}
```

### Responsive image

Make sure when you crop ALL images across the sites you DO NOT play with the ratio of the images. NEVER stretch images. You reduce the width of an image so it is the same size as the container and then the height is reduced in the same ratio. If the height is then bigger than the container you hide the top and bottom of the image through the css.

example:

html:
```html
<div class="images">
  <span>
    <img src="...">
  </span>
</div>
```

css:
```css
.image {
  height: 0;
  overflow: hidden;
  padding-bottom: 70%;
  position: relative;
  width: 100%;
}

span {
  height: 200%;
  left: -50%;
  position: absolute;
  top: -50%;
  width: 200%;
}

img {
  bottom: 0;
  left: 0;
  margin: auto;
  min-height: 50%;
  min-width: 50%;
  position: absolute;
  right: 0;
  top: 0;
}
```


### Box sizing

Over the generations, people realized that math is not fun, so a new CSS property called box-sizing was created. When you set box-sizing: border-box; on an element, the padding and border of that element no longer increase its width. Here is the same example as the previous page, but with box-sizing: border-box; on both elements:

sample:
```css
.border-box {
  width: 500px;
  padding: 50px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
```

Since this is so much better, some authors want all elements on all their pages to always work this way. Such authors put the following CSS on their pages:
```css
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
```

This ensures that all elements are always sized in this more intuitive way.

Since box-sizing is pretty new, you should use the -webkit- and -moz- prefixes for now, as I have in these examples. This technique enables experimental features in specific browsers. Also, keep in mind that this one is IE8+.

### Breakpoint

Adding a breakpoint when the content is no longer easy to consume.

With this fundamental shift in thinking we no longer have to fear a new device — a new iPhone width — because we've already fixed our sites to work everywhere.

### PX Unit
Managing sizes using pixels in responsive design is an absolute hog. The lack of relativity between separate elements’ sizes means you have to treat each setting as a separate concern, for each separate breakpoint. In fact, using pixels you even have to manage the font size and margin of single, isolated elements separately. You really don’t want to do that.

Take the following example:
```css
@media (min-width: 400px) { 
  h1 { 
    font-size: 22px; 
    margin-top: 33px; 
  } 
}
```

How would we write that using relative units? We wouldn’t. In fact, we wouldn’t have to address font sizes or margins for any individual elements in any of our @media queries. We’d simply let the browser or user determine the font-size on the root element (<html>) and set all my other dimensions in ems or rems.

```css
h1, h2 { margin-top: 1.5rem; } 
h1 { font-size: 2.5em; } 
h2 { font-size: 2em; } 
/* all your other element styles */
```

Then, when we wanted to scale things up at a min-width breakpoint, we’d just adjust the root font size, upon which everything else is proportionately based. I use a percentage value because this is relative to the user’s preference, if set:

```css
@media (min-width: 400px) { /* "Should be ems too!" - lots of folks :-) */
  html { 
    font-size: 120%; 
  } 
}
```

That’s it. That’s 90% of your responsive design strategy right there. For bonus points, you can set a common margin between all your sibling flow elements using a selector.

```css
body * + * { 
  margin-top: 1.5rem; 
}
```

## Performance
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque atque ipsum omnis explicabo modi iste autem saepe alias natus odit. Perspiciatis aliquam numquam corporis minima fugiat consequatur a sit. Incidunt.

## Testing 
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur autem voluptatum blanditiis in rem. Sapiente id perspiciatis earum mollitia quibusdam, fugit a officia! Eum optio est sed, quaerat quis dolor.

### Basic Checklist
Use your responsive media view in your browser and resize it. If all look good when you resize it, then it would not cause much trouble when QA check it on real devices.

### Code Checklist
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur autem voluptatum blanditiis in rem. Sapiente id perspiciatis earum mollitia quibusdam, fugit a officia! Eum optio est sed, quaerat quis dolor.

### To Do List
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur autem voluptatum blanditiis in rem. Sapiente id perspiciatis earum mollitia quibusdam, fugit a officia! Eum optio est sed, quaerat quis dolor.
