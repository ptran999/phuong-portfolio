/* 
    Title:  Navbar
    File Name: navbar.js
    Author: Phuong Tran - 
    Date: 12/07/2023
    Description: Personal portfolio with school's projects.
    Resources: https://github.com/buwebdev/web-330/blob/master/week-5/houses/header-component.js
*/

class HeaderComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <header>        
            <div class="container">
            <nav>
                <ul>
                    <li><a href="index.html" aria-label="Phuong Tran Portfolio Home Page" >Home</a></li>
                    <li><a href="about.html" aria-label="About Page">About</a></li>
                    <li><a href="projects.html" aria-label="Projects Page">Projects</a></li>
                    <li><a href="database-diagram.html" aria-label="Database Diagram Page">Database Diagram</a></li>
                    <li><a href="api-unit-test.html" aria-label="API Unit Test Page">API Unit Test</a></li>
                    <li><a href="resume.html" aria-label="Resume Page">Resume</a></li>
                    <li><a href="devops-presentations.html" aria-label="DevOps Page">DevOps</a></li>
                </ul>
            </nav>
            </div>
        </header> 
        `;
    }
}

customElements.define('header-component', HeaderComponent);
