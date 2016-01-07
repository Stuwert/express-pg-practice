## Set Up

```
fork/clone
npm install
nodemon
```

## Description

Your mission is to create a CRUD app that allows users to add books to a library database. The basic styles, form, and other templates have been created for you, but you'll need to wire up your database, routes and views.

__Use Knex to interface with your database in your routes.__

__All of your books routes should be in `routes/books.js`__

## Create a database called library

```
psql postgres
create database library;
\l (to confirm creation)
\q
psql library
```

## Create a table called books with the following columns:

* Author
* Title
* Rating
* Description

## Stories

__#1__

```
When I click 'Add a Book'
Then I should see a form to add a new book
```

__#2__

```
When I submit the form for a new book
Then I should return to my list of all books
And I should see my new book listed with all books
```

__#3__

```
When I click on the title of a book
Then I should be taken to a 'show' page
And on that page I should see all of the information for that book
And I should see a link to 'Edit' the book
And I should see a link to 'Delete' the book
```
__#4__

```
When I click 'Edit'
Then I should see a form
And the form should be pre-filled with the current book information
When I change information for that book
And I click "Update"
Then I should see my updated book
```
__#5__

```
When I click 'Delete'
Then I should see a list of all books
And the deleted book should not be listed
```

## STRETCH

* Refactor the views to use the same template for `Edit` and `New`
  * look up Express `include`
* Write validations for form input that ensures:
  * Title length is not longer than 80 characters
  * Author name is not longer than 40 characters
  * Description is not empty
* Extract all database calls out of your routes and use functions that do the work for you instead.
* All validation functions should be written outside of your routes.
