## Install

`npm install`

`bower install`

## Run the app

Run the app like this:

`gulp`

The gulp task reloads the node.js app, so you don't have to restart the node server manually. You have to refresh the browser yourself, though.

## The lab

Look at the timestamp at the top-left of the screen. One overall goal is that that timestamp should never change between user interactions.

This lab will focus on learning and get experience with pjax.

Check out the example here: [http://pjax.herokuapp.com/](http://pjax.herokuapp.com/)

[jquery-pjax](https://github.com/defunkt/jquery-pjax) is already installed with bower, but you really want to read the docs before getting started

On the server side for pjax to work well, the web server needs to understand the `X-PJAX` header - if that header is present, the layout is not included in the response. Here is a Ruby example of that mechanism.

    def index
      if request.headers['X-PJAX']
        render :layout => false
      end
    end

There is an npm module called [express-pjax](https://github.com/dakatsuka/express-pjax) that does this for you. You have to install this module yourself!

Note that the `render` function in a route handler needs to be replaced with `renderPjax` in order for pjax to be used.

Here's how you find/replace all occurences of a word in the files versioned by git, if you need it:

`git grep -l 'original_text' | xargs sed -i 's/original_text/new_text/g'`

### Challenges

#### Tab navigation

Be able to click the navigation links (Search, Dynamic form, etc), without reloading the whole page.

#### Search

Implement [incremental search](https://en.wikipedia.org/wiki/Incremental_search), displaying the search results below the search box as the user types.

#### Dynamic form

Oh no, the developer implementing the form had to do something more important. Now, you're responsible for finishing it. The challenge here is the ["cascading dropdown"](http://www.ajaxcontroltoolkit.com/CascadingDropDown/CascadingDropDown.aspx): the dropdown containing cities changes when the country dropdown is changed. The problem is that it reloads the whole page now, throwing away the user's name and email. This feature should have been out yesterday, please hurry!

#### Shopping cart

When the user adds items to the shopping cart, the whole page is refreshed. Internal studies have shown that this decreases profit with 70% and the share holders are not happy with this.

Bonus: the server engineers are afraid that performence will be bad if you reload the whole tab on each addition to the shopping cart. Please fix so that only the shopping cart gets updated, not the whole tab.

#### Nested forms

In this challenge we are already able to add contacts to different lists. However, there is also a possibility that we'd like to create a new contact before adding him/her to a list. Users have complained that they would like to do this on the same page, by showing the "Add new user" form on the same page and updating the list of users on submit.

## Further exploration

The possibilities are endless! :) Some things you can experiment with:

* Adding a progress bar on (some?) pjax navigations: [https://github.com/rstacruz/nprogress#pjax](https://github.com/rstacruz/nprogress#pjax)
* How would a modal popup work with pjax?
* Investigate: if a pjax fragment needs JavaScript, how is that handled by jquery-pjax?
* Widgets: a user can add widgets to the a dashboard. Each widget contains three tabs. Clicking a widget tab should only update the "widget body". Is this possible with jquery-pjax?
* Experiment with pjax and animations
* The is [a demo](https://turbo-react.herokuapp.com/) that combines Turbolinks (a generic version of pjax) with React. Try to mimic the demo to fit pjax instead of Turbolinks.
* Is it possible to do some form of optimistic updates using server-side techniques? E.g. the server could send a `HTTP 202 Accepted` with a response body that the client could use. If so, how should the client know that the request actually succeeded?