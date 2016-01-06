# Spotzer Project


## Design System
The Design System reflects the things that need to be taken care of when we taking the customer’s vision for their website, and realizing its design through the site. You will be working from mockup and then using prebuilt wordpress theme __ss-theme__, modifying them to fit the look and feel of the customer’s brand requested. 


### Principles
For every project remember to return to our four design principles — clarity, efficiency, consistency, and beauty —  repeatedly. They help us prioritize and make tough calls. They can save literally hundreds of collective hours of deliberation.

#### CLARITY
Clarity is a job. No.1 job. Eliminate ambiguity. Enable people to see, understand, and act with confidence.

#### EFFICIENCY
Streamline and optimize workflows. Intelligently anticipate needs to help people work better, smarter, and faster. Choose smart organization that would reduce cognitive load. Provide natural next step.

#### CONSISTENCY
Create familiarity and strengthen intuition by applying the same solution to the same problem. Keep primary action primary, and keep secondary action secondary. 

#### BEAUTY
Demonstrate respect for people’s time and attention through thoughtful and elegant craftsmanship. 

### Color
It’s important that our products meet all web accessibility standards, including the minimum contrast ratios that the WCAG 2.0 specifies for text and background color combinations. This adherence helps users who are colorblind or have low vision to better interact with Salesforce, but it also improves usability and readability for all users.

You can find some of the most common text and background color combinations in the CSS Framework Themes section. They are all vetted to pass the minimum contrast ratios, including both normal text and link text styles.

![Color Contrast](http://cl.ly/050k0i0Z183M/img-accessibility.svg)

### Layout
Before selecting a layout, review these guidelines:
* Know your use case. Understand how the information on the page will be used.
* Prioritize your content. Organize your content to highlight the most important information.
* Group related content together. Make it efficient for users to work with the content.

### Hero 
The Hero content area on the homepage should always be designed and optimized for Conversion. The CTA should be clear and have contrast, the USPs should stand out and the image should be properly selected, cropped and relevant for the business.

![Hero Content](http://cl.ly/1T1A14450X2R/Screen%20Shot%202016-01-07%20at%2012.13.38%20AM.png)



### Imagery
No matter what your business does, the imagery on your site should make a human connection. Attractive, happy faces work best for engaging users. If you can engage users through photos, your conversion rate will bene t.
![Imagery](http://cl.ly/3W2c223G1H29/Screen%20Shot%202016-01-07%20at%2012.15.41%20AM.png)

For Logo
• Make sure the logo is of good quality and placed prominently on the header.
• Give the logo enough space around it to stand out. 
• A tall header area accommodates the logo better.

![Screen Shot](http://cl.ly/0K0V1f1E452W/Screen%20Shot%202016-01-07%20at%2012.57.54%20AM.png)

### Typography
Text is the primary way that users digest content and accomplish work, so it’s important to use good typographic principles to establish a clear visual hierarchy and to maximize legibility.

#### Picking Typeface
At the heart of good typography is a good typeface. Pick a typeface that already optimized for screen, properly hinted, and has a true italic and more than one weight. Usually a typeface that has large x-height would be working work for web. This is some example of the typeface that you can use as a reference when looking for the body copy:
* FF Meta Serif (Typekit)
* [Proxima Nova](https://typekit.com/fonts/proxima-nova)
* [Chaparral Pro](https://typekit.com/fonts/chaparral-pro)
* [Adelle](https://typekit.com/fonts/adelle-web)
* [Rooney Sans Web](https://typekit.com/fonts/rooney-sans)
* [Source Sans Pro](https://typekit.com/fonts/source-sans-pro)
* [Open Sans (Google)](http://www.google.com/webfonts/specimen/Open+Sans)
* [Josefin Slab](http://www.google.com/webfonts/specimen/Josefin+Slab)
* [Arvo](http://www.google.com/webfonts/specimen/Arvo)
* [Lato](http://www.google.com/webfonts/specimen/Lato)
* [Aller](http://www.fontsquirrel.com/fonts/Aller)


#### Size
So, what’s a good font size? Is there a universal sweet spot, or is everything circumstantial? As we learned with the em box, numerical sizes can be deceiving since they don’t always react what a typeface actually looks like. 

The best way to approach sizing is to consider the reader and the reading distance. Most people sit about 18–24 inches away from their screens when it comes to a desktop; for mobile de- vices, it’s a bit less. Put simply: the farther we are from our device, the larger the a ordance of type size.

Considering the typical distance and common text sizes in printed matter—about 10 points or roughly 13 pixels, which reflects shorter reading distances — then the ideal typeface is between 16px and 18px.

#### Measure & Line Height
Conventional wisdom is to aim for a 45–75 character measure (the length of a line of text) on average in your running text, depending on the particular font, size, and setting. While you can go above or below that range—some news websites capably accommodate measures in the 80s—it’s a good yardstick.

Awareness of line-height is especially important when dealing with responsive websites. As blocks of content expand and contract, you may need to adjust line-height values along with the font-size to ensure the type remains at a comfortable measure. We’ll touch on responsive design and the e ects on measure and line-height in the next chapter.

A good starting point with line-height is about 1.2–1.8. It’s best to omit units for line-height, as its values can get messy by dint of CSS’s cascading properties.

It takes some trial and error to see what’s right for a given typeface at a given size in a given situation. We find it useful to declare a line-height and see how it feels to read text at that setting. Do letter ascenders and descenders crash into one another or run a little too close be- tween lines? If so, more line-height is needed. Are the spaces between the lines more prominent than the lines themselves? If so, try reducing the line-height. When you find an appropriate line-height, the text will seem to fall into a natural rhythm, feeling neither too far apart nor too close.

#### Headline
Headlines are the attention grabbers. People skim them to decide whether or not to keep reading. Headlines come in a variety of forms, from straightforward article headings and subheadings to big marketing taglines and everything in between.

The headline marks the starting line for a text. It orients read- ers and serves as a kind of handshake and smile. It’s your  rst chance to make an impression. A headline should not only distinguish itself from other text on the page (so as not to confuse the eye), but also help anchor the page as a whole.

A headline is typically set at some ratio larger than the body text. I usually work in simple math, doubling or tripling the body text size to  nd a potential headline size. So, I may try a body text size of 12 pixels and a headline size of 32 pixels. We can even split some of the di erence to get a subhead size of 16 pixels. Take these numbers as rough starters; you always need to scrutinize how they look when typeset.

![Headline](http://cl.ly/0u161K203W13/Screen%20Shot%202016-01-07%20at%2012.52.37%20AM.png)

### Checklist
#### Header
As this is the most important portion of your page, prominently place the logo in the left. For sites with lots of top level navigation pages, use a full width navigation with the logo above or below.

#### Call to Action
In header this must be coded and styled.

#### Footer
Use for business information and partner links. This must be coded and styled.

#### Margins, Padding, Spacing
Ensure there is enough white space and that identical widgets have the same margins and padding. The spacing is not correct in the editor, and the site must be previewed to check the spacing.

#### Other Brand colors are incorporated into background, headlines, subtitles, menu, dividers, etc. #### Logo is clickable to home
#### Hierarchy of elements is well-defined by placement, typeface, size and color
#### Social icons are properly linked (if available)
#### Links across entire site are working
#### Call to Action is in header, and repeated below the fold (except on contact) #### Alignment is correct (verified with cross-browser previewing)
#### Content has left and right padding
#### Email address has been added and is correct
#### Site favicon is uploaded
#### All images have alt-text