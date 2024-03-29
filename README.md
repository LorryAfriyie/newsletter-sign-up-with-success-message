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
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

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

### Desktop view:

[Desktop Image 1](./public/images/newsletter-sign-up-with-success-message-desktop.jpeg)

[Desktop Image 2](./public/images/newsletter-sign-up-with-success-message-desktop-2.jpeg)

[Desktop Image 3](./public/images/newsletter-sign-up-with-success-message-desktop-3.jpeg)

[Desktop Image 4](./public/images/newsletter-sign-up-with-success-message-desktop-4.jpeg)

[Desktop Image 5](./public/images/newsletter-sign-up-with-success-message-desktop-5.jpeg)

### Mobile view:

[Mobile Image 1](./public/images/newsletter-sign-up-with-success-message-mobile.jpeg)

[Mobile Image 2](./public/images/newsletter-sign-up-with-success-message-mobile-2.jpeg)

[Mobile Image 3](./public/images/newsletter-sign-up-with-success-message-mobile-3.jpeg)

### Links

- Solution URL: [newsletter-sign-up-with-success-message repository link](https://github.com/LorryAfriyie/newsletter-sign-up-with-success-message)
- Live Site URL: [newsletter-sign-up-with-success-message live website](https://lorryafriyie.github.io/newsletter-sign-up-with-success-message/)

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

The following JavaScript code below shows how to test whether an email is in the correct format.

```js
function emailIsValid(email) {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email,
  );
}

console.log(emailIsValid("law@gmail.com"));
console.log(emailIsValid("law#gmail.com"));
```

### Continued development

- Through this challenge, my focus would be to correctly position elements such as buttons in desired positions on the screen and not let it conform to the position of the content.

- Improving on the mobile first development aspect where HTML elements are positioned appropriately for mobile devices.

### Useful resources

- [Replace list bullets with images](https://ivan-lim.com/custom-image-bullet-point-css) - This article assisted me with being able to replace the default bullet icons that is used with lists and incorporating an image to be able to enhance the aesthetic of the unordered list, along with the use of pseudo elements to be able to add the icons supplied by this challenge.

- [CSS Order property](https://www.w3schools.com/cssref/css3_pr_order.php) - I was able to learn about the use of the order property on flexible elements to enable the change of positions of html elements on a webpage through the use of css.

- [Adding an image into a div using pseudo elements](https://stackoverflow.com/questions/10829675/how-to-put-an-image-in-div-with-css) - This post had an answer that solved an issue of being able to effectively add an image into a div using pseudo elements and not using the semantic way of adding an image through the img selector.

- [Email validation and testing using JavaScript](https://ui.dev/validate-email-address-javascript) - This post contains useful information with regards to being able to validate the format of an email address as well as being able to test whether the string passed into the function is in a valid email format.

- [Email validation using JavaScript](https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript) - This forum contains a discussion of solutions tackling email validation.

## Author

- Frontend Mentor - [@LorryAfriyie](https://www.frontendmentor.io/profile/LorryAfriyie)
