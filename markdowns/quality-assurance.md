# Quality Assurance

## Agentpoint

### New QA document

**A. Add PMs, Managers, and team to your Gtalk list**

you can find out contact list in http://accounts.agentpoint.com.au/staff/ 

**B. Understand the workflow in New Development Department**
![flow](https://cloud.githubusercontent.com/assets/15761212/11056467/b365eaa6-87b4-11e5-9de2-bccc2e0856c9.png)

Since we are creating new website for new clients, so all initial request should come from PM first. 
1. Pm will assign Setup #1 - #6 tickets to Setup Team, and we need to QA all the tickets. Check on SS Hub Documentation on step by step QAing setup ticket.

2. Once Setup done, PM will assign Design tickets to designer (front-end developer), and we need to QA the design as per client requirements.

3. Once the design ticket done, QA will received full test ticket.  Check on SS Hub Documentation for elements need to be checked on website.

4. After all done, PM will show the demo site to clients, and if client wish to have further adjustments, tickets will be sent to developer / designer that QA need to check later one. 

5. This cycle will occur until PM stated that the site is ready to launch.

6. There will be different checklist for launch websites.

**C. Understand the Zoo System**

Zoo system is quite complicated, but new QA should know that property listings appear in our website come from Zoo. 
Please ask your manager to give short introduction to zoo, and then you can learn from time to time.

**D. Useful link**

For checking your ticket: http://accounts.agentpoint.com.au/todo-list/

**E. Ticket and Comment format**

When creating ticket on APhub, we need to follow some format to make the ticket more effective, it means the ticket will easy to understand from every side ( developer, designer, QA ).
here is the format sample:

![untitled](https://cloud.githubusercontent.com/assets/15761212/11201375/3448f338-8d10-11e5-91ca-a33c973b40d1.png)

The ticket standard template:

**Title** : Title should reflect the main problem, instead just “ Please complete ASAP” or “ issue on homepage”. But there are some exception if the ticket are from client feedback which is usually contain several issue on several section and pages, we can use number behind the title to make it easy if we want track the ticket, eg: “ client feedback #1 “

**Ticket description:**

Please mention the name, so we can identify to whom the ticket assigned to.

Please give the issues location ( the page link, section, or element )

Tell the issue, if possible tell the step how we can found the issue, or what is the effect of issue.

give the solution, there are 2 kind of solution, based on client request or we’ll leave it to developer.

If there is a attachment, please mention it on the comment, and thanks them.

**Note:**

If there is a different platform issue ( dekstop, windows or mac / responsive ) please mention the device detail eg: “ occurs on iphone 6 IOS v. 9.1 landscape”  This additional information would help developer and designer to make the work quicker.

Please give attachment name same with the issues, or page.

please give the attachment, when the issue occurs so developer, designer or QA can compare the result ( especially for display issue)

please give a mark ( square or arrow ) on attachment on the issue occurs, instead of just attach with no explanation.



**Here is some suggestion from developer:**

in ticket description, if the order need to add something, please give ( + ) mark on the beginning of the section.

in ticket description, if the order need to remove something, please give ( - ) mark on the beginning of the section.

in ticket description, if the order need to modify/update something, please give ( * ) mark on the beginning of the section.


**And here is the comment format:**

![new comment](https://cloud.githubusercontent.com/assets/15761212/11202446/e34b1d34-8d1a-11e5-8f97-fa4770df47c1.png)

1. Please mention the name, so we can identify to whom the ticket assigned to.

2. Please give the issues location ( the page link, section, or element )

3. Tell the issue, if possible tell the step how we can found the issue, or what is the effect of issue.

4. give the solution, there are 2 kind of solution, based on client request or we’ll leave it to developer.

5. Please give the issues location ( the page link, section, or element )

6. If there is a attachment, please mention it on the comment, and thanks them.


### First day training

Before we start the real project,  let’s start with training project.

Let’s start with open this link: http://demo.thatid.com/lillytheme/  please create separate ticket for designer and developer on this link: http://accounts.agentpoint.com.au/project/training-project-129228755/

![new qa](https://cloud.githubusercontent.com/assets/15761212/11433064/0700096a-94eb-11e5-84f2-8e9cc919bbbe.png)

using the ticket format on “New QA document”  and please assign the ticket to the correct developer and designer ( please ask your superior ) 

please check all the function and display, including:

check all the form, make sure all email received and logo displayed. ( how to check form can find on setup 4 or launch 2 document )

You may use this checklist as reference: http://hub.softwareseni.co.id/#!/documentation/62 


### Setup document

#### Setup 1

First thing first, before we start checking, we need to login to WP-Admin.
From ticket, click on Company Name. And then go to LOGINS tab. Access Website Logins.
Expand the demo site url. Access wp admin using that username and password.


**1. Please copy demo.thatid.com/chase and setup demo site**

Note: this is the theme we will be using:
+ Leave this to Setup team. We just need to make sure that the theme requested is the same as the theme now appear.


**2. Always install wp latest version.  **

Please grab the Location Info, visit trackers, subscription managers plugins, zoo api plugin from master plugin ( demo/chase)
+ On Dashboard, the version will be informed. If there appear WP need to be updated, it means that the wordpress not in latest version.d
+ Go to Plugins. Make sure Agentpoint Updater, Akismet, All in One SEO pack, Fave Property, Google XML Sitemap Agentpoint, Gravity Forms, Language Translator, Location Info New, Subscription Manager NEW, User Role Editor, Visit’s Tracker New, Zoo Analytics New, Zoo Google Maps, Zoo Realty New, Zoo Remittance New, Zoo Super API plug ins appear there. ( please refer to this web as latest version plugin http://demo.thatid.com/chase/wp-admin/plugins.php  admin pass: xteH-Vz1FS&D  )


**3. Remove any themes and plugins from the site that are not relevant to the site**

+ Confirm with Setup team if there is any strange plug in.
+ we usually have Zoo Realty, Zoo Subscribers, Zoo Remmitance, Zoo Super API.


**4. Change the theme to the correct name e.g. Site Name Theme**

+ Go to APPEARANCE > THEMES and make sure the theme name is the client name.


**5. User Permission Plugin – – Please make sure the plugin needed for a user** 

= Editor to have access to Appearance and Zoo Subscribers tab has been added. Please then make sure a user is added with client first name = username = password. Do not send a notification to client about this.
+ Go to USER > USER ROLE EDITOR
+ Select Role to `Editor`, tick `edit theme options`, then click `update` button


**6. Please test the site to make sure properties appear and that all widgets are in the correct sections for homepage**, 

search results, property pages, team results, blog page and team pages.
+ On demo site, access specific pages like SEARCH RESULTS, PROPERTY DETAILS PAGE, TEAM PAGE, TEAM DETAILS PAGE.
+ If the site have Testimonial page, please make sure the testimonial is inputted from APPEARANCE > THEME SETTINGS > Testimonial tab.


**7. Create a sample page**

similar with : http://demo.thatid.com/inferno/sample-page-2/ and add that in the first menu tab as a dropdown so we/client can locate it.
+ Leave it to setup team.


**Zoo**
**8. Please send through test data from office = 26**

+ Go to ZOO REALTY > GENERAL SETTINGS and then please make sure on Office Id there appear ID 26.


**9. Please create a Zoo office and enable the API**

+ From ticket, click the Company Name. And then click LOGIN tab. On ZOO PROPERTY tab, click Agent System. If the Zoo are there, means that the Zoo Office is already created.
+ From the same ZOO PROPERTY TAB, click on API Section. Click "Client Centre".
Search the Client's name, and then click "Filter". Once found, click "View". And then click API.
At Zoo Super API section, mnake sure the demo site URL is there and "Enable" is ticked.


**10. Please put in both offices in wordpress->zoo realty -> general settings**

+ Go to ZOO REALTY > GENERAL SETTINGS and then please make sure on Office Id there appear ID 26 and Client Zoo ID.




**AP Hub**

**11. Please update APhub if needed**

+ From ticket, click the Company Name. On OVERVIEW tab, please make sure the Status is Production and Creation Date appear.


SEO Plugin
Disable `all in one seo pack` on property page
1. go to wp page manager
2. edit `property` page
3. tick `Disable on this page/post` on `all in one seo pack` section
4. save
+ Go to PAGES and then search "Property". Click edit on Property page. And then make sure "Disable on this page/post" is ticked.

**12. Additional: Please make sure in client zoo office, under TOOLS tab appear CSV and Stocklist section**

![setup 1](https://cloud.githubusercontent.com/assets/15761212/11085798/05365500-887d-11e5-8970-b8eb1628691a.png)

#### Setup 2

First thing first, before we start checking, we need to login to WP-Admin.
From ticket, click on Company Name. And then go to LOGINS tab. Access Website Logins.
Expand the demo site url. Access wp admin using that username and password.


**1. Please add the sitemap as per the attached or below**

 OR

1. Please add generic sitemap attached
1. Please add the sitemap and all content from the website
+ Choose one. make sure whether the sitemap will follow on whats attached in ticket or according to the theme site or even client's previous site.


**2. Please then check all pages have the appropriate short codes are displaying correct information. This includes alerts and property appraisal forms**

+ Make sure the pages of Properties for Sale are for Sale properties. Recent Sale shows SOLD Properties only. The same with Lease and Leased.
+ Make sure the Appraisal form is trully Appraisal, not subscription form.
+ Check all pages and make sure there is no page with "Page not found" page.


**3. If there are any general content pages that relate to the previous client then please delete them**

+ Browse through all pages and make sure all pages have no other client's name.
For example the site of Ray White should not contain the name of Ray Black


**4. Make sure there are Privacy and Terms & Conditions pages and that content has been copied from the client's previous site**

+ If client has previous site and have Privacy and Terms & Conditions pages, make sure the demo site has those two pages.


**5. Make sure all contacts have been removed from the Subscriptions Manager plugin**

+ Go to WP Admin, and then go to ZOO SUBSCRIBER > SUBSCRIBERS and then make sure there is no subscriber listed there.


**6. Make sure all template information has been removed and only content belonging to the customer is on the site. Please make sure you review Posts - all posts, categories, tags, media Library and pages**

+ Go to WP Admin, then go to All Posts, make sure there is no posts that belong to previous clients. Leave it empty or just Hello World! post.
+ then go to Categories, make sure there is no categories that belong to previous clients. Leave it empty or just Uncategorized.
+ Then go to Tags, make sure there is no tags appear.
+ Then go to MEDIA LIBRARY and make sure no content that belong to previous clients. Leave it empty or check whether the content belongs to client or not.
+ Then go to PAGES, if there is suspicious number of pages, please cross check with the setup team.


**7. Please advise any necessary follow up with the customers including blank pages**

+ List all the empty pages and then put comment to PM to advise for the empty pages.


**8. Please put any tickets up to the developer and designer if necessary**

+ Leave this.


#### Setup 3

First thing first, before we start checking, we need to login to WP-Admin.
From ticket, click on Company Name. And then go to LOGINS tab. Access Website Logins.
Expand the demo site url. Access wp admin using that username and password.


Go to APPEARANCE > THEME SETTING

**1) make sure theme settings are set.**

+ Go to APPEARANCE > THEME SETTING and make sure the Theme setting name is set to clients name.


**2) make sure logo can be uploaded through theme settings**

+ Go to APPEARANCE > THEME SETTING, and then check that we can change the logo appear there.


**3) remove any fields in theme options which are not used in that theme**

Theme options will appear as tabs. Please cross check to developer if there appear suspicious fields.

**4) Please allow google analytics to be added in theme settings**

Please make sure there appear google analytics field so we can manually add the google analytics code later.

**5) Please allow mobile redirect to be added in theme settings - same for ipad if applicable**

Mobile redirect code is when user open the site on iPad and mobile devices, it will automatically linked to their mobile site.
If the site is responsive, leave the field empty.

![setup3](https://cloud.githubusercontent.com/assets/15761212/11086240/a605342a-8881-11e5-92d4-5469bd2f039c.png)


#### Setup 4

**1) make sure all content from forms feed through to zoo**

Go to WP ADMIN > PLUGINS > INSTALLED PLUGINS and then please make sure the Zoo Remmitance is active.

**2) make sure logo and colour is in brochure**

Go to property details page and then click “print” to create the PDF brochure. Make sure the client logo appear and the banner color are in line with the logo.

**3) make sure logo and colour is in email responses and alerts**

go to WP ADMIN > FORMS > Edit Notification > and then change “Send to Email” and “From Email” to your agentpoint email address.


![setup 41](https://cloud.githubusercontent.com/assets/15761212/11086773/e1b8e75a-8886-11e5-928e-65a2e1afa022.png)

go to WP ADMIN > ZOO SUBSCRIBER > Setting > and then change the email address to your agentpoint email address.

![setup 42](https://cloud.githubusercontent.com/assets/15761212/11086817/5998cc54-8887-11e5-8a74-7e5bb5ace3cd.png)

We can change the agent email from WP admin > 'zoo realty' > 'The team' and change the agent email.

This feature applied automatically on 'zoo realty' version 3.1 or above but for version bellow 3.1 we can request developer to add 

![zoo realty](https://cloud.githubusercontent.com/assets/15761212/11328524/d8786c24-91be-11e5-8169-38d0e6913628.png)


go to webhost https://webhost.agentpoint.com.au/ , (1) tap “Accounts” tab. (2) Click “T” and then (3) search for domain thatid.com , (4) click “details”. Then (5) Click “open PHPMyAdmin. (6) Click “Database” tab. (7) find the thatid_[client site] and click. (8) Now find user (9) and then change agent’s email into your agentpoint account.
Now go to the demo site and then please perform checking on all forms. Make sure the logo appear on email received.


**4) make sure logo , bed , bath icons have been setup for alerts**

On WP ADMIN > ZOO SUBSCRIBERS > Setting > please make sure the bed bath car icons appear. So later on, the icons will also appear on alert.

![setup 43](https://cloud.githubusercontent.com/assets/15761212/11086873/e80d08d8-8887-11e5-99ce-ebb96531264c.png)

**5) make sure all pop ups are light boxes(email agent eg)**

On Property details page and team details page, there will appear some buttons like “map”, “walkscore”, “email to a friend”, “Email agents” buttons, etc. Please make sure when we click on that buttons, lightbox will appear.  

**6) make sure menu is set through appearance -> menus**

Go to WP ADMIN > APPEARANCE > MENU and then try to switch between menu, and then make sure in the site the menu is swapped.
Don’t forget to revert back the changes you have made.


![setup 44](https://cloud.githubusercontent.com/assets/15761212/11086909/3f7f1246-8888-11e5-8ca5-26745dcf8d0a.png)

**7) make sure all forms are working correctly**

On all forms, check on mandatory fields and the warning appear, also the captcha code.
Please make sure you received email notification in your email inbox.

**8) remove any google analytics code from the theme**

Go to WP ADMIN > APPEARANCE > THEME SETTING please make sure the google analytics field empty.

**9) Make sure there is no redirect codes on the site**

Go to WP ADMIN > APPEARANCE > THEME SETTING please make sure the mobile and iPad redirect code field empty

**10) Make sure the footer links work and have correct company**

Go to the site and check on the footer, if there appear links there, please make sure the links working, and the disclaimer show correct company.

**11) Strengthen our plugin security**

Leave it to developer.

**12) Add WP Login Logo**

go to demo.thatid.com/[client]/wp-admin and then make sure in wp login page, there appear client logo. 



#### Setup 6

**1) Please create homepage based on [attachment or link]**

In ticket, please open the homepage mockup attachment.
Make sure the elements on homepage mockup attachment appear on homepage of the demo site.

**2) Please make sure it can all be changed and controlled in theme settings**

Please observe the WP ADMIN > APPEARANCE > THEME SETTING
Make sure that all elements in the homepage can be changed from Theme Setting.

**3a) main slider set in theme settings or zoo feature**

**3b) main slider changes over when page refreshes**

**3c) Main slider is on loop**

in WP ADMIN > APPEARANCE > THEME SETTING user will be given one of those 3 options to controll the main image slider. If the main image sliders is featured listing, than it is first option
for second and third option, the order should be manage from Theme Setting and user can upload the image easily.

**4) Feature properties - heading/title and what it is eg. sold, residential.**

If the homepage have Featured Properties it should be consistent whether it is available for sale, or residential, or Sold or else.

**5) Social media set up in theme settings**

In WP ADMIN > APPEARANCE > THEME SETTING there should appear Social Media section where client can linked their social media icons.


![setup 6](https://cloud.githubusercontent.com/assets/15761212/11086958/c063a318-8888-11e5-8d69-5123e53606f3.png)

**6) All links connected to something even if blank page**

Please open all links and buttons appear on homepage, and make sure the page exist, not showing “Oops file not found page”

**7) Search works**

Please make sure the quick search on homepage is working fine.
Do the test by searching on all values.


### Launch document


#### Launch 1


**1. Adjust office id in wp admin so ONLY those listings from office appear - no test data.**

go to WP ADMIN > Zoo Realty > General Setting, and then on Office Id section, make sure the id 26 not appear.

![launch 1](https://cloud.githubusercontent.com/assets/15761212/11087504/6daf9b40-888d-11e5-8982-2afb2ca56cb3.png)


**2. Check that there is no ipad or mobile redirect code on the theme unless the client has a mobile or ipad site.**

go to WP ADMIN > APPEARANCE > THEME SETTING, and then make sure in section Mobile site Url and Ipad site url not is empty. Unless the client has mobile or iPad site.

Need to check also on iPad and Mobile view, if the site is open properly, means that there is no redirect code.

![launch 12](https://cloud.githubusercontent.com/assets/15761212/11087584/2b1f1da4-888e-11e5-9da7-735af0922292.png)


**3. Add new API Plugin then update a property in zoo and check that the changes and images are being processed on live site.**

go to WP ADMIN > PLUGINS > INSTALLED PLUGINS, and then make sure the Zoo Super API is set as the latest version.

![launch 13](https://cloud.githubusercontent.com/assets/15761212/11087640/9fa78706-888e-11e5-9a0c-f2159dcb79b9.png)

go to Client’s Zoo account, and then try to edit any available listing. On Property Description, at the end of the description, add text “test”. Once you are done, click “Submit” button.


![launch 14](https://cloud.githubusercontent.com/assets/15761212/11087684/fe222b74-888e-11e5-8189-561d6feee872.png)



Now go the site and access that property details page. Take a look at its description, and then notice whether the text “test” you input appear or not. If appear, then the zoo is working perfectly. If not appear, wait for any minutes for zoo need to update the listings. If up to an hour the listing not appear, please contact the developer.

If this testing is success, please make sure to remove the “test” text and click Submit button again.  


**4. Adjust api in zoo and set up so listings from that office are sent and delete any demo API urls for that office in Zoo. Make sure we are using the Websites (NEW) API.**

go to client’s API section.

on Zoo Super API section, please make sure there is no demo site url appear there. If demo site url still appear, please manage with the developer.

![launch 15](https://cloud.githubusercontent.com/assets/15761212/11087887/8d963696-8890-11e5-9f3d-e1a568594b81.png)


**5. Check the same amount of listings appear on the website as Zoo and resend listings if needed.**

go to client’s Zoo Dashboard.

On Office Statistic, there will appear number of A (Available) listings. Make sure the number appear in the same amount as in the websites.

![launch16](https://cloud.githubusercontent.com/assets/15761212/11088027/9bdc0702-8891-11e5-98ab-334ceea2a529.png)


**6. Setup google analytics and add code to header or theme settings.**

go to WP ADMIN > APPEARANCE > THEME SETTING, and on the section “Google Analytics tracking Number* (e.g. UA - 123456-78)” make sure the code appear.

or, go to WP ADMIN > APPEARANCE > EDITOR, and on the right section, click on “Header” / “Footer”  and search for Googleanalytics. If there appear the code, meaning that the analytics code are already there.

or, on the site homepage, right click and then click “View Page Source”, search for Googleanalytics and make sure the code appear there.



![launch 17](https://cloud.githubusercontent.com/assets/15761212/11088122/6bf9ab10-8892-11e5-8347-7a32c11aed9b.png)


**7. Setup sitemaps plugin and create the sitemap. add the website to google.com/webmasters , verify the website and submit the sitemap in there.**

access http://www.google.com/webmasters/ and then sign in as rhinoogrady with password: z00pr00perty

find the site you are checking on and then click. Once you are inside that site, click on tab “Sitemaps” and then you will expected to see the /sitemap.xml. Click on it. You will land on “Sitemap index” page.

On Sitemap index, click on /sitemap.xml again, so it will open new tab. Make sure the url of the new tab appear the same as the live site.

![launch 18](https://cloud.githubusercontent.com/assets/15761212/11108255/e7aae870-8917-11e5-9411-c20122c67f2e.png)


**8. Check that internal links added to pages and posts through wp-page manager have been updated from demo.thatid.com.  Make sure you do a search for demo on all pages and posts**

On live site, please check all the hyperlink and all images. Make sure the link not directed to demosite. This include the PDF file saved.

we can use this tools to check: http://demo.thatid.com/lillytheme/wp-admin/ ( admin pass: VjH833dRKDM ) go to “Qatoolb” plugin,on the left side menu. insert the link on the field and check the 3 option below, then click “go”.

*this tools is not compatible with the portal website yet.

![launch 19](https://cloud.githubusercontent.com/assets/15761212/11108318/8d897b12-8918-11e5-8b85-8948256e7bb2.png)

note: Please also check manual per page to make sure.


**9. Make sure the demo domain is marked as Launched in AgentpointHUB and update the launch date field with the current date and change status of client from Production to Active.**

Check on client’s AP HUB, on Overview > Client Details tab, make sure the Status is updated from Production to Active.


![launch 120](https://cloud.githubusercontent.com/assets/15761212/11108354/db806b50-8918-11e5-9dda-ffee230183ed.png)


**10. Setup, and test the SM Plugin along with the cron in plesk to send alerts once per week on Thursday at 10.00am. Send sample to the PM.**

Access AP Host https://webhost.agentpoint.com.au/ and then find client’s account

Access cronjob button, and then make sure the code appear is 0 10 * * 4

Make sure on the Command tab the client’s live site appear.


![launch 121](https://cloud.githubusercontent.com/assets/15761212/11108554/4421bac8-891a-11e5-9530-f0e25d155a72.png)


**11. Please enable Akismet and add password**

Go to WP ADMIN > PLUGINS > INSTALLED PLUGINS, and then make sure the Akismet is active.


**12. Check Simple 301 Redirects setting**

go to WP ADMIN > PLUGINS > INSTALLED PLUGINS, if there is no 301 redirects plugins appear, you can just leave it.

If there is 301 redirect plugins appear, access Setting, and then please check the url linked to the appropriate page depends on source and destination.


**13. Add SEO plugin to the site and activate.**

Go to WP ADMIN > PLUGINS > INSTALLED PLUGINS, and then make sure the All in One SEO Pack is active.


**14. Please check that “Email me whenever” is unchecked in wp-admin – settings – discussions**

Go to WP ADMIN > SETTINGS > DISCUSSION and then on Email me Whenever, please make sure tick box is unchecked.


![launch 122](https://cloud.githubusercontent.com/assets/15761212/11108772/8a92a146-891c-11e5-909c-c904770566cc.png)


**15. SEO Plugin Check**

Make sure `all in one seo pack` on property page is disabled.

1. go to wp page manager

2. edit `property` page

3. tick `Disable on this page/post` on `all in one seo pack` section

4. save

Go to WP ADMIN > PAGES, and then find Property page, click edit. At the bottom section, please make sure the “Disable on this page/post” are ticked.

![launch 123](https://cloud.githubusercontent.com/assets/15761212/11108794/d2171b46-891c-11e5-9763-f950067ccf77.png)


#### Launch 2

**1.  Put your email and the Project Manager's in all forms and test, make sure you receive all forms and the logo and format is appropriate. If you do not receive an email or the logo is incorrect please put ticket up for developer.**

go to WP ADMIN > FORMS > Edit Notification > and then change “Send to Email” and “From Email” to your agentpoint email address. Add PM’s email so it will be qaemail@agentpoint.com.au, pmemail@agentpoint.com.au

![launch 21](https://cloud.githubusercontent.com/assets/15761212/11109036/f7c559fa-891e-11e5-90bc-4dd0d210bb13.png)

go to WP ADMIN > ZOO SUBSCRIBER > Setting > and then change the email address to your agentpoint email address.

![launch22](https://cloud.githubusercontent.com/assets/15761212/11109081/7057d474-891f-11e5-88f1-639a04a138fd.png)

We can change the agent email from WP admin > 'zoo realty' > 'The team' and change the agent email.

This feature applied automatically on 'zoo realty' version 3.1 or above but for version bellow 3.1 we can request developer to add 

![zoo realty](https://cloud.githubusercontent.com/assets/15761212/11328524/d8786c24-91be-11e5-8169-38d0e6913628.png)

Or we can change it from PHPMyAdmin

go to webhost https://webhost.agentpoint.com.au/ , (1) tap “Accounts” tab. (2) Click by index and then (3) search for domain of the live site , (4) click “details”. Then (5) Click “open PHPMyAdmin. (6) Click “Database” tab. (7) find the live site domain and click. (8) Now find user (9) and then change agent’s email into your agentpoint account.

Now go to the demo site and then please perfrom checking on all forms. Make sure the logo appear on email received and the data correct.


**2. Put your email and the Project Manager's in a property and do a property enquiry.**

On Property details page and Team details page, there appear Email Agent, please check the form twice. One to your email, and one for PM.


**3. Make sure the BCC is the client email in WP.**

Changes your email and PM email into client’s email in Gravity form, Subscription manager, and revert back the agent’s email in web host.

Go to WP ADMIN > ZOO REALTY > GENERAL SETTING, and then change “Email Sent From” into info@clientcompany and “BCC All Mail To” into client’s email.


![launch 23](https://cloud.githubusercontent.com/assets/15761212/11110815/6e374f4e-8933-11e5-9ec4-532fba2c0fab.png)

When you are done, leave a comment stated that all forms have been changed into client’s email clientemail@client.com.au and ask advise if client wish to be different email address. And then assign back ticket to PM.


Reassign ticket to Project Manager

A) PM put in the customer's emails in all forms

B) Enter data in all forms including property enquiries

C) Confirm with customer that form emails have been received.


#### Launch 3


**1. Check there is no php code calling the server. If there is then correct it**


**2. Check the error logs on the server for the site. If there are any errors then please fix the code.**

The best way to check this ticket is the next day after developer completed this task. For example, dev done on Wednesday, you should leave the comment to PM stated that “to make sure that there is no error log appear, the best for us to wait up to the next day. I will hold this ticket”. Don’t assign this ticket to PM. Just make sure the next day you check it as priority.

To check on error logs, go to https://webhost.agentpoint.com.au/home and then find client’s account.


![launch 31](https://cloud.githubusercontent.com/assets/15761212/11111812/53ade046-893f-11e5-867e-c4342d0cefc6.png)

If you find the client account, click on “Logs” button.


![launch 32](https://cloud.githubusercontent.com/assets/15761212/11111819/742168a2-893f-11e5-83f9-3b5fde9d93c2.png)

Once you are inside, there will appear Access Logs and Error Logs. You need to check on the Error Logs section. There are two scenarios here:

If the Error Logs are clear, you can just leave it and close the tickets.

If the Error Logs still appear, please ask the developer whether the logs is only a warning (then we can just leave) or about the bug need developer to fix (then assign the tickets back to developer)



![launch 33](https://cloud.githubusercontent.com/assets/15761212/11111834/9a15a974-893f-11e5-95a3-09eb4f78afb7.png)



### Dummy Social media account 


![facebook-logo](https://cloud.githubusercontent.com/assets/15761212/11330992/174c4254-91e7-11e5-9d0f-2f0331b9de6a.png)


Email:  newdev.ap@gmail.com
Password: M5jyL9B2hO


![twitter-logo-small](https://cloud.githubusercontent.com/assets/15761212/11330999/22a008a2-91e7-11e5-82c1-786d2bdaaf48.png)


email: testagentpoint@gmail.com
password: agentpoint


![linkedin_logo](https://cloud.githubusercontent.com/assets/15761212/11331005/32795242-91e7-11e5-92a6-89ecdd5e38c7.png)

email: testagentpoint@gmail.com
password: agentpoint


![pinterest-icon](https://cloud.githubusercontent.com/assets/15761212/11331013/4dcf5dca-91e7-11e5-9098-655d1dbc33ed.png)

Email: testagentpoint@gmail.com
Password: agentpoint

## Spotzer Team

Welcome to Spotzer Quality Assurance Team. 

**A. Add PMs, Managers, and team to your Gtalk list.**

First thing to do is, add PMs, Managers, and team to your Gtalk list. So, if you are confusing about something, you can ask via Gtalk or directly to the person. And also, you can find out more contact list in http://hub.softwareseni.co.id/ or via Gtalk which you can add from time to time. Here is the list :


| Project Managers/Managers  | SPOTZER Staff              |   Department |
| ------------- | ------------- |----- |
| marc@softwareseni.com | andipurnama@softwareseni.com  | Back End Developer |
| arsyi@softwareseni.com | arham@softwareseni.com | Back End Developer |
| gamma@softwareseni.com | olin@softwareseni.com | Back End Developer |
| adryn@softwareseni.com | lyle@softwareseni.com | Front End Developer |
| heryno@softwareseni.com | bayus@softwareseni.com | Front End Developer |
|                         | faiz@softwareseni.com | Front End Developer |
|                         | alfian@softwareseni.com | Front End Developer |
|                         | lippo@softwareseni.com | Front End Developer |
|                         | pram@softwareseni.com | Quality Assurance |
|                         | okky@softwareseni.com | Quality Assurance |
|                         | nisa@softwareseni.com | Quality Assurance |

**B. Understand the workflow in SPOTZER Team**

Since we are creating new website for new clients, so all initial request should come from PM first. 

![2015-11-10_16h14_30](https://cloud.githubusercontent.com/assets/15763875/11059449/62986a46-87cc-11e5-812a-76fd1cb6a02d.png)

1. PM will assign to BE to setup and content integration. 
2. Once Setup done, PM will assign to FE to style the website.
3. Once the styling done, QA will received full test ticket. Check based on initial request from client. You can check from mockup document (Desktop and Breakpoint). Ask PM for the document.
4. If you find bugs, you need to create the issues on Phabicator and assign to BE/FE. Check again these bugs after BE/FE have already fixed.
5. Do full test if all tickets on Phabicator have already done and need full test again. If all function worked fine, report to PM.
6. After all done, PM will show the demo site to clients, and if client wish to have further adjustments, tickets will be sent to developer / designer that QA need to check later one.
7. This cycle will occur until PM stated that the site is ready to launch.


**C. Understand The Bug Tracking System**

1. Register to phabicator : http://projects.softwareseni.com/ 
2. After registering, ask your manager to give access to the project.
3. Learn how to create and manage the ticket.
4. For checking your ticket: http://projects.softwareseni.com/maniphest/
 

**D. Note For Testing Process**

1. Take a look at the Project Docs first and understand what client want.
2. Also check the Mockups design.
3. While testing, do not forget to fill and update the Checklist.
4. If there are something unclear about the project or anything, ask PM or anyone.

**E. Quality Assurance Role**

Of course the **main task for QA staff is to assure quality standard as requested by client based on tickets and documentation.** 
In other word, QA staff should make sure the works from developers are done exactly as requested by clients to meet the expected delivery date.

On daily basis, some things need to be checked on are:
+ Checking hyperlink in the whole site linked to appropriate pages.
+ Checking for missing content (static text and images)
+ Checking the spelling and grammar of content.
+ Checking the image file size to make sure not too large and not slowing the loading time.
+ Checking for browser compatibility both on desktop and responsive view. 
+ Checking all forms are working correctly and the mandatory warning appear.
+ Checking the vcs calendar to appear correctly on google calendar.
+ Checking the website design appear exactly like the client wants. Always check the overview how the client wish the sites to appear.
+ Maintaining good communication to Developers and Project Managers
+ Give solution to Developers and Project Managers if any requests unable to complete exactly as requested by clients
+ Documenting any new issues with new testing method if any to QA shared document.

**F. Quality Assurance Checklist**

A checklist is needed to reduce failure by compensating for potential limits of our memory and attention. And also, it helps us to ensure consistency and completeness in carrying out a task.

There are two kinds of Checklist for Spotzer Team, *Demo Site Checklist* and *Live Site Checklist*. 

For the *Demo Site Checklist* you can find it in  https://docs.google.com/spreadsheets/d/11vwjHA47iRW_mAmsMkhgdffgr8yxMqg1fxajfe85FaY/edit?ts=563031f7#gid=1530176155

And for the *Live Site Checklist* you can find it in https://docs.google.com/spreadsheets/d/1OgQmV-eeDGkPOThUs2uoUySmtPjJRK-xvQTT3egxVk8/edit#gid=831255455

The checklist is still on developing. So, if you think it need some improvement, dont hesitate to tell your supervisor about it.
