Objectives

1 Create a server application with Node, Express, and MongoDB.

2 Create a CRUD API using Express and MongoDB.

3 Create MongoDB indexes.

4 Use MongoDB indexing to make efficient queries.

5 Create MongoDB validation rules.

6 Use MongoDB validation to ensure data consistency.


//////////////////////////////////////////////////////////////////////////////////////
GOAL: To create a database for inspirational quotes that people users can access.
//////////////////////////////////////////////////////////////////////////////////////

RESOURCE CODE:

I used the code for the Grades MongoDB demonstration in class.

I changed the names of the names associated with 'grades' and the routes, connections, and 
included my own connection string link in the .env for security reasons.

//////////////////////////////////////////////////////////////////////////////////////


I have created an application using Express, Node.js, and MongoDB.

I created the server by taking the following steps in the git bash terminal:

git init 
npm init -y 
npm i nodemon --save -y 
npm i express mongo dotenv

to start the server I type 'nodemon run index.js'
//////////////////////////////////////////////////////////////////////////////////////

GIT HUB COMMITS

I uploaded some files and created folders and added files because I was not able to 
push files via Git Bash.

//////////////////////////////////////////////////////////////////////////////////////
EDITING PROCESS: THE SCRIPT WORKS!
//////////////////////////////////////////////////////////////////////////////////////

quoteRoutes.js => I updated the quoteRoutes.js but ran into issues with the original 
aggregate data. I asked Claude for assistance. I commented out my work and placed the
new script beneath it.

//////////////////////////////////////////////////////////////////////////////////////

ADDED to MONGODB
I manually added the list of quotes to my favorite_quotes directory in the quotes collection on MongoDB
I kept getting validation errors when I tried to do it via Postman

I was able to use GET to see the list of quotes I manually added to the MongoDB.
But, I ran into errors when trying to POST, Patch, & DELETE the quotes. 
It indicated that author and text were the required info that was missing.
