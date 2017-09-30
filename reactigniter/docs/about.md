# Business Expendature Report Terminal
###BERT * Web Application * Database Concept

#The Basics

So, you need a running tally on purchases made for quartarly reports and you don't want to buy the software available because.... Don't worry I can't can't think of only one reason either. Most of the software available is for tracking the entire business which gives you more menus, switches and graphs that a NASA Control Tower. And all you wanted to know was what you spent money on last quarter! This is why you hire a good freelancer for software that is tailored to your needs.

What makes my modules better and ultimately separates me from the mainstream developer is that I still develop in PHP. If you check out other developers like any smart person should you will likely find that some developers will tell you this is not a selling point. That's because they want to do it all in a JavaScript environment using either Google's AngularJS or Facebook's React in combination with JSX on a Node.JS HTTP server which is, quite honestly pretty cool. It's so cool, in fact, that I've got it working in tandum with PHP. So while a Node.JS server with MongoDB (or MySQL if they had the patience to set that up) will have to be hosted on a cloud platform due to the need for replication space, I'll be running anywhere I please. So if I seem a little smug towards the JavaScript developers it's a little hard not to be. They did tell me it couldn't be done, after all.

For this module we need to accomplish 4 objectives to achieve the User Experience we want to have when we use it.

* `Receipt recording` via phone camera snapshot

* Automatic `image to text` data processeing

* Information storage in web accessible database

* Database schema designed to be flexible to offer custom reports from the same data.

###Buckle your seatbelt Dorothy,
#####'Cause Access is going bye-bye!
No, seriously. This is the first and last time `MS ACCESS` is going to be discussed.
We don't use it. So when we talk databases forget everything you know about
`MS ACCESS` it will not help you. I usually use `MySQL` but ultimately it comes down to
which on is right for the job.

##Databse Tables:

####Table: Excursions

|id | receipt_id |timestamp | sales_tax | store | location | phone | receipt_img|
|----:|:-------------------------------------:|:------------:|:------:|------------|------------------|:------------:|-------------|
| 0   | 6557 57 17152 - **01/14/2014** - 8422 | 1389748260 | 0.079% | Home Depot | Irving TX, 73063 | 972-506-3006 | ![Demo Receipt][demoreceipt] |

*Data is from the very real receipt in the image. Please do not use it*

####Table: Purchased Items
id | receipt_id | item | price
-- |------------|------|---------
0 | 1234567890 | Nails | 80.49
1 | 1234567890 | Tape  | 48.82
2 | 1234567890 | Calking | 63.28
3 | 1234567890 | Zip Ties | 30.45


##So... Whats the plan?
####U/X is the plan! Has been and will always be!
If you're unfamiliar with User Experience Design then I know of a club you can join and it's full of developers and designers. Don't mind them, they have no idea they are in it. Everyone is putting U/X on their resume these days because by creating a website and getting live traffic, technically one has created an experience for the viewer-in-question. It's a little like calling party catered and putting out a bunch of burgers on a paper plate. I'm not trained to just give you an experience. I'm trained to look at your situation and see what is being accomplished and where your discomforts seem to be. I'm trained to
eves-drop (not like CIA) and catch the words that people are saying about the product and understand it as constructive feedback. You wouldn't be surprised at how often people try out an idea and expect the impossible. But what might surprise you is how often we've made just made the wrong idea! Sometimes, the man who makes millions is the one that doesn't hear complaining, but new schematics. That's what true UX development is about. Putting yourself aside and what you wanted for the user and listening to the collective user's frustrations and make a product for the advanced, opprable for the novice.

####I'll put it on a bumper sticker. So where do we start?
Simple. We start, simple. A little interface within a framework. And we're not even going to build it because I'm willing to bet someone already has and it's sitting somewhere with an open source license. I'm all for custom builds. But I don't feel the need to charge the client to build something that exists for free unless they're really against putting a credit in the back of the documentation. We'll import a bunch of modules for each function we need:

* `Image text extraction` or `Phone Camera Document Scanner` - Idealy we would want one that we can easily alter from functioning independently to operation within the app's environment and outputting to the app itself.

* `Data Formatter` - This would best be in JSON or YAML format but if we get it in either CVS or "Tab-Delimited" format we really don't need to spend the time doing the conversion into JSON or YAML. Though it will be a future necessity for compatibility but it will be a simple adjustment that shouldn't be implemented at the expense of prolonging the initial release.

* `Database Integration` - Depending on the route we choose to take we will be using either MariaDB or Aria, Engines within the MySQL Database that are most compatible with responsive web apps but can be used by non-responsive platforms as well.

* `Grid` - We'll need to select our favorite grid system among the many available. You may better understand this as a "Data Table" as it will look the same but it's construction is vastly different and more adaptable than the old HTML tables.

* `CRUD` - Create Read Update Delete. Likely the best system for this type of app. It's purpose is to be a server that retrieves individual requests from the database for various users and presents it in a temporary file made from a template that we will design. That data can be altered at that time provided the user has the authority to do so. After the user is done with their task or disconnects from the server the temporary file is deleted.


####And all this is going to produce what, exactly?
I know in the beginning we said we were going to print out a quarterly report. But its inefficient to record all that data in a way that it will be calculable just to print a single type of report. Using a scraping technique and an entity relational database schema (Overkill now, but you'll thank me later when you want to expand on it with additional features) we can record items as individual lines with pre-tax prices. Why would this be beneficial? Because we're storing the receipt entity in the first table with the sales tax on each sale. So all receipts with identical receipt IDs will be associated with the general receipt information. Using this organization technique the user will have the ability to easily request sales information on specific items throughout any time period they choose. On top of quarterly expenditure reports you will have the capability of viewing total expenditure on individual materials, helping you make decisions on Inventory, Bulk purchase Quantity, Tools,

####And you're just going to do this for free?
Yup! Err... What?! Who gave you that idea?! Have you been talking to Mike? He's the philanthropist but tree houses don't have utility bills. There's a couple ways we can negotiate the creation of this application and while I'm not giving away free programming hours you're not likely to find someone that can produce half the quality for less than me. Typically, I'd be stupid to offer the rates/quotes I do. Typically I'd have overhead like everyone else. So if you find someone willing to work for less, my advice is to take it! Milk it like a rented cow and come see me after she's spurtin' dust and not a moment sooner!

##Contract Options

#####ThINC Investor
Think is my "Garage Project" Ever seen a Dashboard application? Right, so you know how obnoxious it is that every business has one that they want everyone to work from and it's never a, "one-size-fits-all" tool. In fact, the customization options can be so limiting that it's nothing less that an abuse to the word! Well, none-the-less you can bet that developer has U/X Design on his/her/it's resume despite being an example of what not to do. ThINC is `The Interact Network Condenser Console`.  If you have a WordPress, WIX, Weebly, or any of the DIY website building applications then you're familiar with the Dashboards that go on the back of a website as well as how they can integrate with a Content Management System (CMS). But what if you could operate Facebook and Facebook Advertising, Twitter, and other social media accounts for either commercial and promotional or personal use? I, for one, would like to have my web modules even more centralize than it is on my phone. And that's what ThINC is. Using the latest in User Interface (UI) innovation like [Bootstrap](http://getbootstrap.com/) (from the developers of [Twitter](https://twitter.com/?lang=en)), [React](https://facebook.github.io/react/) (from the developers of <i class="fa fa-facebook-official"></i> [Facebook](https://www.facebook.com/)), and the popular Bootstrap administration template [AdminLTE](http://usebootstrap.com/adminlte/) ([preview available here](http://usebootstrap.com/preview/adminlte/)), this console aims to provide a customizable command center that reduces the noise of a standard dashboard but maintains all the benefits. Unlike other's implementations of AdminLTE, which are merely stagnant backend panels to make otherwise standard settings adjustment switches look pretty, it will be taking a more active role as ThINC, while fully capable of integration, has no frontend of it's own.



#####Custom Module purchase
Potential clients who are unable to justify the wait on the ThINC Development project may decide that that AdminLTE is something they would like to use as a stand-alone product on their current website. Because it's what I intend to use for ThINC most of my modules for AdminLTE will compatible outside of the ThINC. It would be possible to acquire my services to create a custom application module. Be advised, exclusivity is not something I in mind however if upon the completion of the app the client wishes to purchase the intellectual rights to the application I would be willing to consider.


#Examples
####CRUD's

* [GroceryCRUD](http://www.grocerycrud.com/) - This is a simple CRUD integration... it's also an ugly one. That's ok because I have full style control or I can swap out the GRID for one that is more aesthetically pleasing.


####GRID's
* [Adazzle React Data Grid](http://adazzle.github.io/) - Simple but flexible just doesn't do it justice.
* [Zippyui](http://zippyui.com/react-datagrid/) - Good for massive amounts of data as demonstrated by the [50,000 entry demo!](http://zippyui.com/react-datagrid/#/examples/large-data-array)
* [Packery](https://packery.metafizzy.co/) - Optional scalability, dragability, Response-ability (just made that up but it works, responsive or static).
* [React Grid Layout](https://strml.github.io/react-grid-layout/examples/0-showcase.html) - we can start from scratch too.

[demoreceipt]: http://toolskool.com/wp-content/uploads/2014/01/Receipt-Screen-Shot.jpg "demo" 