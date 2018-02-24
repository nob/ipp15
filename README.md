# Ippuku Berkeley website (made in 2015)

HTML5 + Bootstrap Sass + jQuery application, built with [Brunch](http://brunch.io)

## Getting started
1. Open 'Terminal.app' in your Mac OS
2. Install Node.js & Brunch via 'Terminal.app' (if you didn't install).:
    * [Node.js](http://nodejs.org): `brew install node` on Mac OS
    * [Brunch](http://brunch.io): `npm install -g brunch@1.8.5`
3. Install node packages, which are required by Ippuku Berkeley website (if you didn't install them).
    * Move to '~/Desktop/ipp15/' directory: `cd ~/Desktop/ipp15` (assuming you have downloaded this 'ipp15' directory in your Desktop directory.)
    * Install node packages into 'node_modules/' directory: `npm install`
    * Confirm node_modules/ directory was newly generated in 'ipp15' directory.
4. Build & assemble all files under 'app/' directory into 'public/' directory as finished files:
    * Move to '~/Desktop/ipp15/' directory: `cd ~/Desktop/ipp15` (assuming you have downloaded this 'ipp15' directory in your Desktop directory.)
    * `brunch watch --server` — watches the project with continuous rebuild. This will also launch HTTP server with [pushState](https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Manipulating_the_browser_history).
    * `brunch build --production` — builds minified files for production
    
## Learn
 * `public/` dir is fully auto-generated and served by HTTP server.  Write and edit all your code in `app/` directory.
 * Place styles(.scss files) in `app/scss/` to be compiled to `public/css/app.css`.
 * Place javascript files(.js) in `app/scripts` to be concatenated to `public/js/app.js`.
 * Place Handlebars templates to app/ and they will be automatically compiled and placed in your `public/` directory.
 * Place other files (image files, font files or movies) in `app/assets/` to be copied from  to `public/` directory.
 * [Sass site](http://sass-lang.com)
 * [Bootstrap site](http://getbootstrap.com)
