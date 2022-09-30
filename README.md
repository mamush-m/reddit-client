# Reddit Client App

- [Reddit Client App](#reddit-client-app)
  - [Description](#description)
  - [Wireframe](#wireframe)
  - [Technologies used](#technologies-used)
  - [Features](#features)
  - [Future Work](#future-work)

## Description

This app was built utilizing the un-official Reddit API. For the purposes of this project, since writing to the server wasn't within the project parameters, the unofficial was used.

The main purpose of the project was to utilize Redux for managing larger pieces of state. Each Reddit post component was programmatically rendered based on live data from the Reddit website.

## Wireframe

<img src='src/Reddit Client Mockup.png'/>

This is a mockup of what the page would like. It takes after Reddit's night mode on their website.

## Technologies used

The technologies used to create this project are as follows:

- **React**- for rendering the content and handling most of the logic
- **Redux**- for managing application state
- **React-Redux**- for connecting the redux store and all state-related logic back to our React components
- **Redux-Toolkit**- for more efficiently managing the slices of state, configuring the **store** and handling asynchronous logic
- **CSS**- for styling the application
- **Jest**- built in React testing library, utilized to check the components rendered properly
- **Git & GitHub**- Version controlling the project
  
## Features

The features for this app are as follows:

- You can see a rendered list of posts when the page first loads, which directly mirrors what would be on the homepage of Reddit if you visited their website
- You can search subreddits in the search bar and their corresponding posts will be displayed
- If you don't want to search manually, you can select one of the *10* predefined popular subreddits on the right side of the page to render their data
- You can see the number of likes and comments on each post, with these stats rendered alongside the individual posts
- You can up-vote or down-vote each individual post
- You can click on a post to render an individual page for it and see all of its post contents corresponding comments
- The comments also display any reply comments if they exist, only up to the first layer of comments
- You can also see the number of votes each individual comment and reply has based on real time data
- You can up-vote or down-vote each individual comment as well as the reply comments
- You can exit out of the rendered individual post page and go back to the page that rendered all the posts before you were redirected

## Future Work

Regarding the future outlook of this app, I hope to build its functionality to be able to also post data to Reddit. To do so, the official Reddit API needs to be used. This requires going through an OAuth workflow. I have already figured out the process for this, but have not implemented it for this project.
