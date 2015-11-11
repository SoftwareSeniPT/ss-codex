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


### Setup document

#### Setup 1

First thing first, before we start checking, we need to login to WP-Admin.
From ticket, click on Company Name. And then go to LOGINS tab. Access Website Logins.
Expand the demo site url. Access wp admin using that username and password.


**1. Please copy demo.thatid.com/chase and setup demo site**

Note: this is the theme we will be using:
+ Leave this to Setup team. We just need to make sure that the theme requested is the same as the theme now appear.


**2. Always install wp latest version.**

Please grab the Location Info, visit trackers, subscription managers plugins, zoo api plugin from master plugin ( demo/chase)
+ On Dashboard, the version will be informed. If there appear WP need to be updated, it means that the wordpress not in latest version.
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



By default, the template contains extra boilerplate structure to account for Woocommerce pages and functionality. Every time a new site is started, make sure you determine whether or not the store/Woocommerce components will be needed. If you won't be needing them (most sites), follow these steps:
