# Ippuku Berkeley website (made in 2015)

HTML5 + Bootstrap Sass + jQuery application, built with [Brunch](http://brunch.io)

## Getting started
1. Install via Terminal.app (if you didn't install Node.js & Brunch).:
    * [Node.js](http://nodejs.org): `brew install node` on OS X
    * [Brunch](http://brunch.io): `npm install -g brunch@1.8.5`
2. Install node packages, which are required by Ippuku Berkeley website (if you didn't install them).
    * Move to '~/Desktop/ipp15/' directory: `cd ~/Desktop/ipp15` (assuming you have downloaded this 'ipp15' directory in your Desktop directory.)
    * Install node packages into 'node_modules/' directory: `npm install`
3. Build & assemble files in 'app/' directory into 'public/' directory as finished files:
    * Move to '~/Desktop/ipp15/' directory: `cd ~/Desktop/ipp15` (assuming you have downloaded this 'ipp15' directory in your Desktop directory.)
    * `brunch watch --server` — watches the project with continuous rebuild. This will also launch HTTP server with [pushState](https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Manipulating_the_browser_history).
    * `brunch build --production` — builds minified files for production
## Learn:
    * `public/` dir is fully auto-generated and served by HTTP server.  Write your code in `app/` dir.
    * Place static files you want to be copied from `app/assets/` to `public/`.
    * Place styles in `app/scss/` to be compiled to `public/css/app.css`
    * Place javascripts in `app/scripts` to be concatenated to `public/js/app.js`
    * Static site generation is supported by [this Brunch plugin.](https://github.com/devinus/static-site-brunch)  Add Handlebars templates to app/ and they will be automatically compiled and placed in your `public/` directory.
    * [Brunch site](http://brunch.io)
    * [Sass site](http://sass-lang.com)
    * [Bootstrap site](http://getbootstrap.com)
