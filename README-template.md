# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid
- SCSS
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Vite.js](https://vitejs.dev/) - Frontend Tooling

### What I learned

To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
```

The code piece below is an example of what I learned when it comes to replacing the normal bullet points of an unordered list item with an image, the code below was written in sass.
```scss
ul {
  list-style: none;
  padding: 0;
  li {
    margin: 25px 0 25px 0;
    padding-left: 40px;
    position: relative;
  }

  li:before {
    background-image: url("/images/icon-list.svg");
    background-size: cover;
    content: "";
    height: 20px;
    left: 0;
    position: absolute;
    top: 1px;
    width: 20px;
  }
}
```

```js
const proudOfThisFunc = () => {
  console.log("🎉");
};
```


### Useful resources

- [Replace list bullets with images](https://ivan-lim.com/custom-image-bullet-point-css) - This article assisted me with being able to replace the default bullet icons that is used with lists and incorporating an image to be able to enhance the aesthetic of the unordered list, along with the use of pseudo elements to be able to add the icons supplied by this challenge.

- [CSS Order property](https://www.w3schools.com/cssref/css3_pr_order.php) - I was able to learn about the use of the order property on flexible elements to enable the change of positions of html elements on a webpage through the use of css.

- [Adding an image into a div using pseudo elements](https://stackoverflow.com/questions/10829675/how-to-put-an-image-in-div-with-css) - This post had an answer that solved an issue of being able to effectively add an image into a div using pseudo elements and not using the semantic way of adding an image through the img selector.

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**
