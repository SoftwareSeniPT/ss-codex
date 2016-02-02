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


## PM Process
### Preparing Collateral Files
1. Check the email from your Manager about your new project (ask the Manager if you don’t get it yet)
2. Open the Data & Assignment spreadsheet here (ask the manager if you don’t have the access to edit this page.)
* Check if your new project already listed there or not (ask the Manager about the project code name - usually only 3 letters)
* Search for the dropbox link from the mail that sent by your Manager (at step 1)
* Fill the Data & Assignment spreadsheet (on step 2) with the dropbox link that provided from the mail (from step 4)
* Back to the dropbox folder that you get from the mail, download these important 3 files : 
  * Wordpress Brief (usually has a name like : [project name] Wordpress Brief.pdf
  * Sitemap
  * Text assets / document that will be the content of the site
* Open Spotzer share folder on gDrive here (ask the Manager if you don’t have access to edit this share folder).
* Navigate to Spotzer > Projects > YPNZ > then create new project folder here (don’t forget also put project code name at the end of your project name)
* Create folder called “Collateral” inside your project folder.
* Put all the 3 files (from step 6)  that you downloaded from the dropbox above (step 6) to the Collateral folder (from step 9)
* Get the gDrive link of your project that you just created on step 8, then put the gDrive link into the Data & Assignment spreadsheet (on step 2)

### Preparing Design Overview
1. Open the Spotzer gDrive share folder, Navigate to Spotzer > Collateral
2. Notice the file “Design Overview [TEMPLATE]” and “[Name of Project - Date of test] QA Spotzer Checklist”, copy this two files into your new project folder.
3. Go to your project folder and fill the needed info on Design Overview file on all tabs (including Site Map, Wordpress Brief, text content)

### Sign up to Project Management Tools
#### Phabricator
1. Open the phabricator here, or maybe you need to do something on old / ongoing project, you can access old phabricator here
2. Register new account on phabricator

#### FlexiTool


### Creating Project on Project Management Tool
The steps to be followed once brief is received from Spotzer.

1. Create a folder in the relevant sub folder in “Projects” with project name and 3 letter abbreviation.
2. Download the materials from Dropbox and add them to a folder called “Collateral”
3. Copy the QA Checkllist Template and Design Overview files from the Spotzer Collateral folder here. Make sure you update the name of the files
4. Have HR create the project code in SSHUB for time allocation. 
5. Chat to the Heryno and the team around any aspects in the Design Overview or quotes that are needed.
6. Reply to the Spotzer PM with any feedback, questions, quotes and a link to the Design Overview document 
7. Begin with creating the first tickets.

## QA Process

## Quote Process
### Process Diagram
![alt text](/images/Quote Diagram process.png "Quote Diagram process")
### Detailed Process
#### Starter Quote Process
1. Before starting a new project, the client will contact SoftwareSeni PIC to discuss about it.
2. From the discussion it will be decided whether or not a new project needs a quote. The process continues with...
 * If the project needs a quote, then the client will create the quote using a special form which will be sent to SoftwareSeni for tech and design evaluation, including estimated time of delivery.
 * If not, then the process will continue to no. 4
* Tech evaluation will then be sent back to the client for approval.
 * If the client approves, then the process will continue to no. 4
 * If the client doesn’t approve it then the client must create a new quote and send it back to SS for tech evaluation again; this process will repeat until the client approves the quote.
* Project—the one that doesn't need a quote and the one which quote is approved—is then created or modified on the Project Management Document.
* The PMs create tickets using the PM Tool. (→proceed to Invoicing a Quote)

#### Update Quote Process
1. At the beginning of a project, the client will contact SoftwareSeni PIC to discuss about it.
2. From the discussion it will be decided whether or not a new project needs a quote.
 * SoftwareSeni will create/adjust the quote using a special form which is based on the new work provided; including the Estimated Time of Delivery.
 * If not, then the process will continue to no. 4
* Tech evaluation will then be sent back to the client for approval.
 * If approved then the process will continue to no. 4
 * If not approved then the client must create a new quote and send it back to SS for tech evaluation again; this process will repeat until the client approves the quote.
* The project—the one that doesn't need a quote and the one which quote is approved—is then created or modified on the Project Management Document.
* The PMs create tickets using the PM Tool. (→proceed to Invoicing a Quote)

#### Invoicing a Quote
In order to invoice a quote, the project types are divided into three: New Project, Existing Project, and Maintenance/Revision. Each project type has its own flow.
1. New Project
Based on the tickets made by the PMs, the new project is added to actual month invoices after a link status. It is then be sent to the client.
2. Existing (In Production Add-ons)
Based on the tickets made by the PMs, details of work is added to a specific document to keep its track. In production add-ons' extra work is added to the actual month invoice. It is then be sent to the client.
3. Maintenance/Revision
Extra work for the adjustments of live sites is added to the actual month invoice. It is then be sent to the client.


## Invoice Process
### Introduction
What we invoice to client:
* New site
 * This is added to the invoice on the first site draft delivery. We call it (LINK)
* Full time resources
 * If staff is requested for specific work, outside In production work.
* Add-ons
 * Based on Quote request from Client. Using this <a href="https://docs.google.com/spreadsheets/d/1hEBwBKLb-iD5bb2z0GqFmUXoR1-Ot4iTf7A5-lZKdmI/edit?usp=sharing" target="_blank">Form</a>
 * It could be also extra work for a project in Production
* Adjustments to Live Sites
 * Based on Quote request from Client. Using this <a href="https://docs.google.com/spreadsheets/d/1hEBwBKLb-iD5bb2z0GqFmUXoR1-Ot4iTf7A5-lZKdmI/edit?usp=sharing" target="_blank">Form</a>
* Hosting / Migration
 * If a site is hosted on one of our server, we start charging them from the moment the A Record redirection is done.
 * Migration is an action of moving one site from a server to another.
 
### The process for Invoices
#### When a site is “linked” to the client (first draft delivered to client)

* SDM can then add the project to the Invoice Document (for access, ask the SDM or GM). (A “link” site is the first draft delivered to client). Data can be retrieved from the Document <a href="https://docs.google.com/spreadsheets/d/1URxbCmZH_8cMSj0yeG6ZhRDdn56eW5eLsAJ7dkJsIPQ/edit#gid=54380997" target="_blank">here</a>. You will need to create 1 Document for 1 month (just duplicate the latest month).
* Careful not to change to much, as it is using predefined scripts.
![alt text](/images/invoice.png "Invoice template")
* SDM can update it later, if any new work is done within the same month, otherwise, add it on the next month as an Add-ons.
* On the Out of Scope are (also known as Supplements). If you need to add extra rows, make sure that the total (AUD) catch the new cells as well.
* There are about 30 project slots. If you need to add more, remember to add the cell ID to the calculation scripts on C2 and D2.

#### When the project is finished (Live)
* SDM to ask the Managers, which projects had some extra work, and add it to the Project invoice. This could also happen within the project development, so make sure the Managers keep you informed.
* Make sure to check the actual number of pages, that was created for the project by logging in on the WP-Admin of  the site. And add the extra pages on the Out of Scope. (OoS are Extra pages from the original brief, or extra layout from the original basic package)
 * PMs need to make sure to look for the Published pages, and that no test pages are still published.
 * If the project has e-Commerce, PMs need to see how many categories were created, and add that quantity to the number of pages on the site.
PMs to Talk to the FE Manager, to find out if Extra Layout were created. But it should be also located in the <a href="https://docs.google.com/spreadsheets/d/1URxbCmZH_8cMSj0yeG6ZhRDdn56eW5eLsAJ7dkJsIPQ/edit#gid=1254666119" target="_blank">Project Timeline Extra Work sheet/tab</a>.

#### At the end of the month
* SDM to ask Lyle how many Days she worked on Spotzer. And add the number of days on G3.
* Add any Out-of-Scope work from a site in Production, and the cost based on time, work on it. you can find those information from the <a href="https://docs.google.com/spreadsheets/d/1URxbCmZH_8cMSj0yeG6ZhRDdn56eW5eLsAJ7dkJsIPQ/edit#gid=1254666119" target="_blank">Project Timeline Extra Work sheet/tab</a>. Remember to ask PMs if anything is missing.
* Add any Adjustments, Maintenance or Revision made on a Live site, based on the approved quote, delivered to Spotzer, or from the <a href="https://docs.google.com/spreadsheets/d/1URxbCmZH_8cMSj0yeG6ZhRDdn56eW5eLsAJ7dkJsIPQ/edit#gid=1254666119" target="_blank">Project Timeline Extra Work sheet/tab</a>.
* Adjust the Monthly Hosting / Migration based on the status of the site in this <a href="https://docs.google.com/spreadsheets/d/1GrHx4QYoT-4fcbdj7WgiEwcGFmiUBft2Z6pAMULNlp0/edit#gid=0" target="_blank">document</a> from the “Status” column. Migration is AU$11 (30min), and Hosting is AU$8. If any changes were made with the site (Migration or hosting) please change the Action status. You can ask PMs or Helmy (Server support) to make sure nothing is missing.
 * Hosted = We host the site on one of our server, but we didn’t develop it.
 * Live = We host the site on one of our server, and we DID develop it
 * Migration = We migrate the site from one server to another.
 * 3rd Party = When a site is hosted on a 3rd party server.
* Inform Ryan, when you are done compiling all projects, so he can send the invoice to Spotzer. Make sure to finalized this before the 3rd of the month.
