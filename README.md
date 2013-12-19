Personal Travis aka. Personal Raineri is an application to substitute your personal trainer, training diary and workout programme. Personal Travis is a mobile app coded by me as a part of Mobile Product Development Course taught by Tero Karvinen. 

Personal Travis suggests the user a workout routine and weights. Personal Travis remembers the last suggestion, and will suggest the following workout routine based on former routines. Personal Travis also remembers, if the user has reached the goal set by Personal Travis. 

All goals will be the same until the user reaches them. Then Personal Travis will suggest a higher goal, so all user needs to do is to (1) see what to do this time and (2) tick a checkbox if a goal is reached. Everything else happens automagically.

What is the status of this project?

Although the core functionality of Personal Travis is quite stable, the status of the project is still beta. This is because Personal Travis will be quite large application, and lots of features are yet to be implemented. My goal was to implement the core features of Personal Travis before the end of the year 2013, and now the achievements are available to be tested by anyone at Google Play Store.

As Personal Travis is now available only in Finnish with name Personal Raineri, it will be translated in English. After letting the English-speaking world get their hands on Personal Travis, the app will be fully reprogrammed. There are many things that would have been wiser to be done differently, so I will do them differently. I have also used a few unnecessary libraries, and I want to get rid of them to make the software lighter. The changes are so foundational that it's easier to just reprogram everything.

How is it generally built in the technical point of view?

The deepest level of the program is database, which stores information about the last workout routine, and the reps plus weights for every particular excercice. The database solution is HTML5 database (Web SQL) used through html5sql.js. 

The data in database is utilized by the application, which calculates, which workout routine should be the next one, and what are appropriate weight and amount of reps for this particular user. This data is pushed in the UI, which is built using frameworks named MetroUI CSS and MetroJS.

The app consists of seven HTML pages (index.html + 6 subpages). The animations in the main view are made using MetroJS. The general functions have been coded with JavaScript – or JQuery, to be specific. Triggers are mostly coded in the HTML pages between <script> tags, and the triggers call functions defined in training_functions.js and db_functions.js. Most of functions in training_functions.js are dependent of db_functions.js. There is also transition.js, which just includes the transition fade effect triggered when switching page.
