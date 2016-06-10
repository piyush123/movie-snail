# Slalom Silicon Valley Technology Enablement Front-End Engineer Code Exercise

## Overview

At Slalom, we love to solve problems.
In this exercise, you'll be solving the following problem:

A client has approached us to build a web application for them. It's a full-stack job, and Slalom TE Software Engineering is up to the task. To do it, though, we're going to need some help! We need:

* **A strong engineer:** Practices good coding habits, writes unit tests
* **An application architect:** Creates elegant APIs and data models, thinks carefully about how they'll be used by clients
* **A team leader:** Writes good documentation, explains decisions well, and thinks about the skillset of the team when making architectural decisions
* **A champion for users:** Builds interfaces that are beautiful and functional, and thinks carefully about how a feature will be used before writing a line of code

We'll be looking for all of these things in the solution that you ultimately submit to us. We believe that our consultants should have a point of view on everything related to application development, and this exercise provides us with your point of view on these things. Of course, building new applications can be a lot of fun, too! You have a lot of freedom in the decisions that you make, but there are some ground rules:

1. The code that you provide must be submitted via GitHub or Bitbucket.
2. Code alone doesn't always tell the whole story, particularly when it comes to application design. When you submit your code, be sure to include any documentation about your design process to help us understand your approach.
3. I -- that is, the consultant who emailed you this document-- am available to answer any questions that you have about the application that you're building. For example, if you're thinking about writing the API part in COBOL, then... let's coordinate to agree upon an optimal alternative. And if you're stuck while thinking about how a particular feature should work, let's talk it through together!

## The Application

Capitalism, Inc. has amassed an enormous collection of digital movies, and wants a web application that folks can use to manage their movie libraries. It's a big project, and over time they'll want to add more functionality to it-- but in this first release, the functionality that they need is focused around library management.

Desired features include:

1. The homepage will show movies that have been recently added to Capitalism, Inc's database. Users can see this page without creating an account.
2. Users can select a title and see all information about it-- description, year of release, etc. This is the Detailed Item View. Users can see this without creating an account.
3. Users can create an account. Users who do this are Registered Users.
4. Users can sign in to their accounts.
5. Signed-in users can sign out of their accounts.
6. Registered Users have access to a Movie Library page. This lists any movies that the user has added to her library.
7. A Registered User can add any title to her library from either the homepage or the Detailed Item View.
8. From the Movie Library page, a Registered User can remove a title from her library.
9. The order of items listed in the Movie Library page is significant, and users can change this order from within the Movie Library page.

The design of these features is up to you-- after all, we want to know how you think about user experience. That said, Capitalism, Inc. did bring in our UX team for a brief research engagement, and they've categorized our expected users into a few different categories:

* **Adam:** This guy loves movies! He collects movie posters and even has a podcast talking about the design of movie posters. High-quality movie artwork is one of his favorite things, which is why he'll primarily be using it from a high-res desktop browser. Eventually, our client wants to use this application to sell movies to folks like Adam, but that's out of scope for this exercise.
* **Cheryl:** She's highly-organized, and wants to use the application to keep track of the movies that she owns. Getting in and out of the application quickly is her priority, and when she uses the application, she's usually browsing it from her iPhone 6. Touch is the primary way that she expects to interface with a web application.
* **Gorg:** He is an octopus, and is unable to use the application. One day, he hopes to grow human arms and legs, emerge from the ocean, find an available laptop, and start organizing his media library. However, that's out of scope for this exercise.

## Data

In this repository, you'll find a "data" directory containing JSON with some rough data about movies, as well as poster images for each of those movies. You can use this data as a starting point for the application you'll build. Each JSON file in "items" is a movie, each of those movies has an ID, and each file in the poster images directory is named [id].jpg where [id] is the ID from the movie's JSON.

## Conclusion

Good luck! Have fun! And remember, you can email us with any questions that you have while working on this.
