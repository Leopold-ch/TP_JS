import Home from './views/pages/Home.js';
import Attackers from './views/pages/Attackers.js';
import Defenders from './views/pages/Defenders.js';
import Operator from './views/pages/Operator.js';
import About from './views/pages/About.js';
import Error404 from './views/pages/Error404.js';

import Utils from './services/Utils.js';

// List of supported routes. Any url other than these routes will throw a 404 error
const routes = {
    '/'                     : Home
    , '/about'              : About
    , '/attackers'           : Attackers
    , '/defenders'           : Defenders
    , '/operators/:id'       : Operator
};

// The router code. Takes a URL, checks against the list of supported routes and then renders the corresponding content page.
const router = async () => {

    // Lazy load view element:
    const content = null || document.getElementById('content');

    // Get the parsed URl from the addressbar
    let request = Utils.parseRequestURL()

    // Parse the URL and if it has an id part, change it with the string ":id"
    let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '')
    // Get the page from our hash of supported routes.
    // If the parsed URL is not in our list of supported routes, select the 404 page instead
    let page = routes[parsedURL] ? new routes[parsedURL] : Error404
    
    content.innerHTML = await page.render();

    // Supposons que op.health contient la valeur de santé

    const healthIndicator = document.querySelector('.health-indicator');

    for (let i = 1; i <= 3; i++) {
        const circle = document.createElement('div');
        circle.classList.add('health-circle');

        if (i <= 2) {//op.health) {
            circle.classList.add('full');
        } else {
            circle.classList.add('empty');
        }

        healthIndicator.appendChild(circle);
    }
}

// Listen on hash change:
window.addEventListener('hashchange', router);
// Listen on page load:
window.addEventListener('load', router);
