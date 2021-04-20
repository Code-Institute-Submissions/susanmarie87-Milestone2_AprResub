<h1>Align The Chakras</h1>
Sit back, relax, and Align The Chakras in this simple memory game. This game is desgined to be challenging yet relaxing all-in-one. The game is also desgined to fit all screens so enjoy on any device availabe.

Image

Live site hosted on **[Github Pages](http://127.0.0.1:5500/!)**

<h1>User Stories</h1>
  1. First Time Visitor Goals
   
     a. As a First Time Visitor, I want to play a card matching game that helps to keep my memory skills sharp.
     b. As a First Time Visitor, I want to easily understand the game. 
     c. As a First Time Visitor, I want the game to function properly and easily work on all screen sizes. 
     d. As a First Time Visitor, I want the game to be challenging.

   2. Returning Visitor Goals
      a. As a returning visitor, I would like to check and make sure I have kept the high score. 
      b. I want the game to become more challeng as I go. 
      c. I want the game to frequently become updated with new levels and challenges to beat.

<h1>Wireframes</h1>

-**Basic Wireframes**

![Image]('assets/MS2-WireFrame/images.jpg')



<h1>Frameworks, Libraries & Programs Used</h1>

**[HTML5](https://www.html.com)**

**[CSS](https://www.css.com)**

**[Bootstrap](https://www.getbootstrap.com)**

**[Github](https://www.github.com)**

**[Git](https://git-scm.com)**

**[JavaScript](https://www.javascript.com)**

**[Autoprefixer](https://autoprefixer.github.io/)**

**[W3C validation](https://validator.w3.org/)**


<h1>Bugs & Errors</h1>

In an effort to become more familiar with CSS grid, I thought I would forego Bootstrap for my game grid resulting in an almost
impossible breakdown of the grid to be mobile-first responsive. This problem was kind of but not really solved by adding media queries and removing 
two for a total of four card from the card grid.


<h1>Testing</h1>
***
The W3C Markup Validator, W3C CSS Validator, and JSHint Services were used to validate every page of the project to ensure there were no syntax errors in the project.

**W3C Markup Validator** - Results

**W3C CSS Validator** - Results Validator.nu/LV http://validator.w3.org/services

**JSHint Results**

Metrics
There are 11 functions in this file.

Function with the largest signature take 1 arguments, while the median is 1.

Largest function has 21 statements in it, while the median is 3.

The most complex function has a cyclomatic complexity value of 4 while the median is 1.

Two warnings
57	Unnecessary semicolon.
107	Unnecessary semicolon.


<h1>Testing User Stories from User Experience (UX) Section</h1>

**First Time Visitor Goals** 

As a First Time Visitor, I want to easily understand the main purpose of the site and learn more about the organisation.

Upon entering the site, users are automatically greeted with a clean and easily readable navigation bar to go to the page of their choice. Underneath there is a Hero Image with Text and a "Learn More" Call to action button.


The game is very basic. There are no bells and whistles which makes it easier for a user to navigate.

The main points are made immediately with the game grid image and header.

The user only has one option, to click a card which begins the game

<h3>Returning Visitor Goals</h3>

-As a Returning Visitor, I want to get straight to the point and play the game. A "How To Play" Modal and start button would be nice to have.

The game board works properly, meaning each cards clicks and flips over smoothly. I would like to have enough time to mentally calcuate the displayed image and remember the proper placement for future matching. 

The Facebook Page can be found at the footer of every page and will open a new tab for 
As a Frequent User, I want to check to see if there are any newly added challenges or hackathons.

As a Frequent User, I want to check to see if there are any new blog posts.

Upon entering the page, the game is immediately up and the cards are waiting to be clicked. 
Once the cards have all been matched, a victory screen appears letting the user know they have won with a "play again" button. 

<h3>Further Testing</h3>

The Website was tested on Google Chrome, Internet Explorer, Microsoft Edge, Safari, Bing, browsers.
The website was viewed on a variety of devices such as Desktop, Laptop, iPhone7, iPhone 8 & iPhoneX.
The game was tested by friends and family.

<h1>Known Bugs</h1>

On some browsers like Safari, it seems two of the bottom two cards turn blue. 

In some instances, the cards that have already been flippied can be clicked back over which breaks the logic early on and the victory screen appears earlier.

If the game has been won once, the victory screen will not appear a second time.


A white gap can be seen to the right of the footer and navigation bar as a result.
On Microsoft Edge and Internet Explorer Browsers, all links in Navbar are pushed upwards when hovering over them.

<h1>Deployment</h1>
***
**GitHub Pages**

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

<h1>Credits</h1>
***
<h5>Code</h5>
- The full-screen hero image code came from this StackOverflow post

- Bootstrap4: Bootstrap Library used throughout the project mainly to make site responsive using the Bootstrap Grid System.

- MDN Web Docs : For Pattern Validation code. Code was modified to better fit my needs and to match an Irish phone number layout to ensure correct validation. Tutorial Found Here

<h1>Deployment</h1>

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

<h1>Credits:</h1>

**Media:**
Flamethrower Card Image taken from Maxine Ficheux:
<h1>(fix this for proper credit)</h1>


**Chakra images adapted from:**
**[Yoga Practice](https://yogapractice.com/yoga/balancing-7-chakras/)**


<h1>Acknowledgements</h1>

Code Institute

Gerard McBride

Slack and the community for all contributions.





