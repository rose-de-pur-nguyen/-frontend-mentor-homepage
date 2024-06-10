# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![desktop version](results/News%20homepage%20-%20desktop.png)
![mobile version](results/News%20homepage%20-%20mobile.png)
![mobile menu active](results/News%20homepage%20-%20mobile%20-%20menu%20active.png)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Boostrap
- Javascript
- Mobile-first workflow

### What I learned

- navbar collapsed menu: i have been always using bootstrap for this, but this challenge requires a different icon so I tried my first time create the menu with the pure css
- how to make the screen behind darker when the menu slides in: actually doing this is really easy that you only need a div, spreading it all over the screen and for the background color use the rgba code, but it took a while for me to come up with this idea
- being more fluent with the bootstrap grid system

```css
.background-filter {
    background-color: rgba(25, 31, 52, 0.5);
    z-index: 99;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: none;
}

.background-filter.active {}

@keyframes fade {}
```

### Continued development

- Bootstrap grid system

### Useful resources

- Gemini - Google AI tool answering all the questions directly and clearly


## Author

- Frontend Mentor - [@rose-de-pur-nguyen](https://www.frontendmentor.io/profile/rose-de-pur-nguyen)

