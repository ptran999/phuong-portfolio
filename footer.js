/* 
    Title: Portfolio Footer
    File Name: footer.js
    Author: Phuong Tran
    Date: 12/04/2023
    Description: Personal portfolio with school's projects.
    Resources: Resources: https://github.com/buwebdev/web-330/blob/master/week-5/houses/header-component.js
*/
class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <footer >
        <div class="container">
        <div class="links-container">
            <a href="https://github.com/buwebdev" target="_blank"><span class="fa fa-github-square"></span>Bellevue's GitHub</a>
            <a href="https://www.youtube.com/c/bellevueuniversity" target="_blank"><span class="fa fa-youtube-play"></span>Bellevue's Youtube</a>
            <a href="https://www.bellevue.edu/degrees/bachelor/web-development-bs/" target="_blank"><span class="fa fa-university"></span>Bellevue's Web Development Degree</a>
        </div>
        <div class="copyright"><br />&copy; Copyright 2023. <span class="author-name"> Phuong Tran</span> </div>
        </div>
      </footer>
        `;
    }
}

customElements.define('footer-component', Footer);