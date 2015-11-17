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



By default, the template contains extra boilerplate structure to account for Woocommerce pages and functionality. Every time a new site is started, make sure you determine whether or not the store/Woocommerce components will be needed. If you won't be needing them (most sites), follow these steps:
