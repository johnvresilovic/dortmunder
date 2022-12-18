# The Dortmunder Store

## Description
The Dortmunder Store is a virtual bookstore.  Users can browse the collection and click on individual listings for more information.  They can create new listings as well as edit and delete existing ones.  Users can also "buy" books by clicking a button.  No e-commerce was involved in the making of this application.

When a user "buys" a book the inventory of that item is decremented by one unit.  If the inventory reaches 0 the book's listing is updated to show that the book is out of stock, and the Buy button is removed.

This store was created using JavaScript, CSS, HTML, Node, Express, React and MongoDB.  

Below are pictures of the root, index and show pages.

[root pic]
[index pic]
[show pic]

## History
The store was created to meet the requirements of a project assignment in a Per Scholas software engineering boot camp.  Knowing that I had to create a store, I quickly decided that it would be a bookstore, because I like bookstores and this is probably as close as I'll ever get to owning one.  And since I'm always trying to get people to read the Dortmunder novels by Donald E. Westlake, I thought it would be fun to make my bookstore a kind of fan site for that series.

Donald Westlake published more than 100 books during a career that spanned five decades and multiple genres.  He is probably best known for the Parker series, hardboiled crime novels written under the pseudonym Richard Stark.  I've read Westlake's work widely but I will always come back to the Dortmunder series, comedic capers full of slapstick, wordplay, satire and clever plotting.  The best three, in my opinion, are Drowned Hopes, Don't Ask and (especially) What's the Worst That Could Happen?  (Read them in that order.)  I also strongly recommend The Hot Rock, Bank Shot, Nobody's Perfect and Why Me?  

This bookstore project is the culmination of our class's second module, which focused on Express, React and MongoDB.  I built the server.js file using class examples of CRUD applications.  The only difficulty I encountered was getting the Update route to work.  The route was slightly more complicated than the ones I'd created earlier due to the need to decrement the inventory of a given book every time the user clicks a Buy button.

The project uses a relatively simple data structure that stores the book's title, a URL for the cover image, the book's price and the number of copies on hand.  A future iteration might include publication information and reviews.

[getting the look right]

## Miscellaneous
To visit the store, navigate to the URL below.  If you want access to the files you can fork and clone this repository to your machine.  You can also watch a video about the making of this project at [YouTube link].

The live site for the store is https://johnvresilovic.github.io/dortmunder

Acknowledgement to powells.com, goodreads.com, wikimedia.org and amazon.com for the book image URLs.  Thanks also to my instructors, Tishana Trainor, Kasper Kain and Chase Van Halen, as well as my classmates.

Contact info: johnvresilovic@protonmail.com