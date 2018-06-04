# Nest Login Page

## Structure

The project includes followinf HTML pages:

* `index.html` - an example of the login page embedded into provided framework's layout

* `origin.html` - just a plain login form, cleared from any extra layouts

* `frame.html` - an example of the form in frame

* `popup.html` - an example of the form in popup window

Every page uses a single CSS file

* `css/styles.css`

and JS file

* `js/script.js`

The main font family is __Lineto Pro Akkurate__ (as like on http://nest.com)

## Trial Behavior

Just for trial demonstration the login form has the following behavior:

1. First login try shows `Your account is not authorized` error
2. Second try accepts the form and shows the redirect screen
3. Each other try will behave alternately from the first step