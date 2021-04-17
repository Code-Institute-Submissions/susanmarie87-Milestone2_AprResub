[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/susanmarie87/MS2-Game)

Sit, relax, and Align The Chakras in this simple memory game. This game is desgined to be challenging yet relaxing 
all in one. This game is desgined to fit all screens so enjoy on your desktop, tablet, or mobile phone. 

Image

Live site hosted on Github pages HERE

UX
As a user, I want to play a rousing matching game.

As a user I want the game to be able to keep my attention.

As a user I want the game to be a good challenge

As a user choosing a card matching game, I want the memory game to sharpen my mind.

As a user, I want this game to function properly.

As a user, I want this game to be mobile first responsive.

Wireframes
Basic Wireframes
![Image]('assets/MS2-WireFrame/images.jpg')

Final Wireframes

Existing Features

Technologies Used
HTML5

CSS

Bootstrap

Github

Git

JavaScript

W3C validation

Testing
Each page on the website was tested for screen resposiveness to ensure breakpoints.

The code was ran through each specific validator to make sure it passed.


Ran HTML code through WS3 Markdown validator. Minor warnings appeared regarding button element not permitted in the "a" element. Resolved this by replacing button element with div element

Removed unnecessary code that was flagged in HTML validator.

Ran CSS through WS3 validator- PASSED.

Ran JavaScript through JSHint. First pass returned 15 errors.

Tested game on each mobile device. 

#Bugs & errors
Originally I could not stop the hover effect over the cards. This extremely painful and month long issue was resolved with the help
of my mentor Gerard McBride by adding an Onclick event to each card and putting the hover effect into a  JavaScript function. 
This victory did not last long and the cards would not flip back over no matter what. I ended up removing the card elements from html and created a card array in JAvascript. I then went on to rebuild my entire code.
The game works properly now.

Testing
The W3C Markup Validator and W3C CSS Validator Services were used to validate every page of the project to ensure there were no syntax errors in the project.

W3C Markup Validator - Results
W3C CSS Validator - Results
Testing User Stories from User Experience (UX) Section
First Time Visitor Goals
As a First Time Visitor, I want to easily understand the main purpose of the site and learn more about the organisation.

Upon entering the site, users are automatically greeted with a clean and easily readable navigation bar to go to the page of their choice. Underneath there is a Hero Image with Text and a "Learn More" Call to action button.
The main points are made immediately with the hero image
The user has two options, click the call to action buttons or scroll down, both of which will lead to the same place, to learn more about the organisation.
As a First Time Visitor, I want to be able to easily be able to navigate throughout the site to find content.

The site has been designed to be fluid and never to entrap the user. At the top of each page there is a clean navigation bar, each link describes what the page they will end up at clearly.
At the bottom of the first 3 pages there is a redirection call to action to ensure the user always has somewhere to go and doesn't feel trapped as they get to the bottom of the page.
On the Contact Us Page, after a form response is submitted, the page refreshes and the user is brought to the top of the page where the navigation bar is.
As a First Time Visitor, I want to look for testimonials to understand what their users think of them and see if they are trusted. I also want to locate their social media links to see their following on social media to determine how trusted and known they are.

Once the new visitor has read the About Us and What We Do text, they will notice the Why We are Loved So Much section.
The user can also scroll to the bottom of any page on the site to locate social media links in the footer.
At the bottom of the Contact Us page, the user is told underneath the form, that alternatively they can contact the organisation on social media which highlights the links to them.
Returning Visitor Goals
As a Returning Visitor, I want to get straight to the point and play the game. A "How To Play" Modal and start button would be nice to have.

The game board works properly, meaning each cards clicks and flips over smoothly. I would like to have enough time to mentally calcuate the displayed image and remember the proper placement for future matching. 

The Facebook Page can be found at the footer of every page and will open a new tab for the user and more information can be found on the Facebook page.
Alternatively, the user can scroll to the bottom of the Home page to find the Facebook Group redirect card and can easily join by clicking the "Join Now!" button which like any external link, will open in a new tab to ensure they can get back to the website easily.
If the user is on the "Our Favourites" page they will also be greeted with a call to action button to invite the user to the Facebook group. The user is incentivized as they are told there is a weekly favourite product posted in the group.
Frequent User Goals
As a Frequent User, I want to check to see if there are any newly added challenges or hackathons.

The user would already be comfortable with the website layout and can easily click the banner message.
As a Frequent User, I want to check to see if there are any new blog posts.

The user would already be comfortable with the website layout and can easily click the blog link
As a Frequent User, I want to sign up to the Newsletter so that I am emailed any major updates and/or changes to the website or organisation.

At the bottom of every page their is a footer which content is consistent throughout all pages.
To the right hand side of the footer the user can see "Subscribe to our Newsletter" and are prompted to Enter their email address.
There is a "Submit" button to the right hand side of the input field which is located close to the field and can easily be distinguished.
Further Testing
The Website was tested on Google Chrome, Internet Explorer, Microsoft Edge and Safari browsers.
The website was viewed on a variety of devices such as Desktop, Laptop, iPhone7, iPhone 8 & iPhoneX.
A large amount of testing was done to ensure that all pages were linking correctly.
Friends and family members were asked to review the site and documentation to point out any bugs and/or user experience issues.
Known Bugs
On some mobile devices the Hero Image pushes the size of screen out more than any of the other content on the page.
A white gap can be seen to the right of the footer and navigation bar as a result.
On Microsoft Edge and Internet Explorer Browsers, all links in Navbar are pushed upwards when hovering over them.
Deployment
GitHub Pages
The project was deployed to GitHub Pages using the following steps...

Log in to GitHub and locate the GitHub Repository
At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
Alternatively Click Here for a GIF demonstrating the process starting from Step 2.
Scroll down the Settings page until you locate the "GitHub Pages" Section.
Under "Source", click the dropdown called "None" and select "Master Branch".
The page will automatically refresh.
Scroll back down through the page to locate the now published site link in the "GitHub Pages" section.
Forking the GitHub Repository
By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

Log in to GitHub and locate the GitHub Repository
At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
You should now have a copy of the original repository in your GitHub account.
Making a Local Clone
Log in to GitHub and locate the GitHub Repository
Under the repository name, click "Clone or download".
To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
Open Git Bash
Change the current working directory to the location where you want the cloned directory to be made.
Type git clone, and then paste the URL you copied in Step 3.
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
Press Enter. Your local clone will be created.
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
> Cloning into `CI-Clone`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
Click Here to retrieve pictures for some of the buttons and more detailed explanations of the above process.

Credits
Code
The full-screen hero image code came from this StackOverflow post

Bootstrap4: Bootstrap Library used throughout the project mainly to make site responsive using the Bootstrap Grid System.

MDN Web Docs : For Pattern Validation code. Code was modified to better fit my needs and to match an Irish phone number layout to ensure correct validation. Tutorial Found Here

Content
 

Acknowledgements
My Mentor for continuous helpful feedback.

Tutor support at Code Institute for their support.


#Deployment
Align The Chakras has been deployed on GitHub Pages with the following process:

All code was written on Gitpod, a cloud-based IDE.

The code was then pushed to GitHub where it is stored in my Repository.

Under the Settings section of the GitHub repository, scroll down to GitHub Pages section.

Under 'Source' drop-down, the 'Master branch' was selected.

Once selected, this publishes the project to GitHub Pages and displays the site URL.

There is no difference between the deployed version and the development version.

The code can be run locally through clone or download. You can do this by opening the repository, clicking on the green 'Code' button and selecting either 'clone or download'.

The Clone option provides a URL, which you can use on your desktop IDE.

The Download ZIP option provides a link to download a ZIP file which can be unzipped on your local machine or uploaded to your cloud-based IDE workspace.

Credits:

Media:  
Flamethrower Card Image taken from:
https://unsplash.com/@maxineficheux
https://images.unsplash.com/photo-1566745914757-00febc880ff9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjZ8fGxhdmVuZGVyJTIwZmxvd2VyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60

<a href='https://www.freepik.com/photos/flower'>Flower photo created by tawatchai07 - www.freepik.com</a>
Acknowledgements
Code Institute

https://www.shutterstock.com/ja/blog/wp-content/uploads/sites/6/2017/02/shutterstock_438865177.jpg



Chakra images adapted from:
https://yogapractice.com/yoga/balancing-7-chakras/
