# What's for dinner?

"What's for dinner?" is a simple web application meant to produce recipe results based on users' input. 
https://denytsjapanov.github.io/What-s-for-dinner--Milestone-Project-2-/

## Motivation

"What's for dinner?" is part of the second Milestone Project from Code Institute, purpose of which is to make use of JavaScript to create an interactive website or web based application. 

## Technology used

The following code languages are used for this project

```
- Custom HTML, CSS and JavaScript
- Bootstrap
- jQuery
- AOS (Animate on scroll - https://michalsnik.github.io/aos/)
- Fontawesome

Code is written with Microsoft VS Code and GitHub is used for full version control.
```

## Usage

The requirements for this project included the optional use of an external API to produce results based on a call from the user. In this case, the user is presented with a single web page and an input field. The user can then provide a search query (ingredients) inside of the input field (e.g. "chicken", "pasta", "pizza", etc.) upon which the external API (api.edamam.com) is being called to get recipe results. The results are then displayed in a Bootstrap card format below the input field and contain of 10 cards. The cards provide some basic information about the specific recipe such as the name of the meal, the publisher of said recipe, some basic nutrition information, as well as an image of the meal. 

## UX/UI

"What's for dinner?" is a simple page with a large hero section containing a search input field. 

![alt text](https://github.com/DenyTsjapanov/What-s-for-dinner--Milestone-Project-2-/blob/master/assets/wireframes/Desktop1.png?raw=true)

The user can type a type of ingredient or food (e.g. "chicken") and either mouse click on the "Let's cook!" button, or simply press "Enter". Upon entry, the user is then provided with a tenfold of recipes generated from the Edamam API and visualized within a Bootstrap card. For better responsiveness and UX, I have added AOS (https://michalsnik.github.io/aos/) for smooth animation of the elements on scroll. Below is the mockup of how the results will look. 
![alt text](https://github.com/DenyTsjapanov/What-s-for-dinner--Milestone-Project-2-/blob/master/assets/wireframes/Desktop2.png?raw=true)


A very similar approach is for mobile devices. Using Bootstrap makes the mobile experience smooth and fluid. 

![alt text](https://github.com/DenyTsjapanov/What-s-for-dinner--Milestone-Project-2-/blob/master/assets/wireframes/Mobile1.png?raw=true)

![alt text](https://github.com/DenyTsjapanov/What-s-for-dinner--Milestone-Project-2-/blob/master/assets/wireframes/Mobile2.png?raw=true)

As for the colors: the main colors are #2a2c39 and "cadetblue". The reason behind these colors is their calm but modern look. The two colors work together well and do not disrupt the user from the content, while also complementing the hero image. The hero-image has been pulled off of pexels.com with full credits to Ella Olsson (https://www.pexels.com/@ella-olsson-572949).


## Testing
Testing was done manually and with the help of user experience. For instance, one user reported that the Bootstrap input field did not support "press enter to sbumit" natively, which made sense to implement this into the input field (thanks to the W3Schools article). A different user complained that when viewing on mobile devices, the placeholder text in the input field was too large and did not fit the input. Thus, I have decided to minimize the text in the placeholder and limit this to "E.g. chicken". Same user complaint about the absence of a 'x' button at the end of the search field where the user can easily clear the current search query and start typing a new one. This was fixed rather quikcly; by simply change the "type" of the input from "text" to "search" (courtesy of stackoverlow, where I found a thread that dealt with this issue).

Further, at the beginning the Bootstrap cards only showed the recipe title, image and source. My mentor Reuben advised me to pull more infomration from the Edamam API to place in the cards. I have asked the 4 users that have helped with the testing, and most of them agreed that adding infomration about health labels and the calorie amount will be most usefull in this scenario. 

## Deployment
For this project, everything was written through VS Code. I find this editor to be more useful than GitPod, which was mostly used during the courses. During the writing process, only one branch was used (master). Since with the last project I received feedback that my version control was not very frequent and informative, I decided to log every major change with this project.

## Credits
- Edamam API. All information in relation to the recipes originate from Edamam;
- Pexels.com/Ella Olsson. The hero-image originates from pexels.com and is shot by Ella Olsson;
- Mr. Reuben Ferrante. Mr. Ferrante is my mentor and has helped me alot in understanding some js codes that I had difficulties with.
- W3School;
- StackOverlow;
- Bootstrap;
- AOS;
- Fontawesome.


