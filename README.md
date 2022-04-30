# Pawsibly

Finding someone to look after your pet can be challenging. Search for a local pet sitter with this app. 
Pawsibly is a CRUD RESTful API application that utilizes the Django and React frameworks. Django handles the server, React to create the frontend of the application and  PostgresQL database hosted using AWS to save data.<br>
___
<p align="center">
  <img width="700" height="450" src="./build/static/images/gif.gif">
</p>


## Technologies
---
* React/Javascript
* Django/Python
* PostgresQL
* Materialize
* Bootstrap calendar
* AWS

## User flows
---
As a user, I want to...<br>
* find pet sitters by zipcode or city
* view a detailed page of a pet sitter's information(name, location, photos, contact information, rating and reviews)
* log-in/sign up to create a listing to be a pet sitter
* create a profile and upload my photo.
* schedule a booking using a calendar interface
* leave a review 
* rate the service
* have the option to be a sitter


## Wireframes
---
![Wireframes](static/images/pawsibly_wireframe.png)

## Moodboard
---
![Moodboard](static/images/pawsibly_moodboard.png)

## Collaboration and Management
---
![Trello](static/images/pawsibly_trello.png)


## Routes
___

| Method | Path | Purpose |
| ------ | -------------- | -------------------------------- |
| GET | `/` |Home page |
| GET | `/searchpage/:url` | display results for seearched listings  |
| GET | `/sitterlisting/id` | display sitter information |
| GET | `/profile` | display profile page |
| GET | `/contact/:id` | display sitter contact page |
| GET | `/mybookings` | user booking's page |
| GET | `/myreviews` | user review's page |
| GET | `/pets` | user pet's page |
| POST | `/sign-in` | sign-in a user|
| POST | `/sign-up` | sign-up a user to create an account|
| POST | `/hostapet` |create a listing|
| PUT | `/pets/id` | edit  pet information |
| PUT | `/editlisting` | edit a listing|
| PUT | `/change-password` | change a user's password|
| DELETE | `/sign-out` | change a user's password|
| DELETE | `/pets/id` | delete a user's pet|
| DELETE | `/hostapet` | delete a user's listing|


## Entity Relationship Diagram
___

![ERD](static/images/pawsibly_erd.png)

## Usage
---
1. Fork and clone this [repository](https://github.com/lawrencesalinas/pawsibly-production) then run the following command in your terminal
    * ```pip install``` on the root folder to install Django dependencies.
    * run ```pipenv shell```  after installation to activate the project envorinment.
    * ```python manage.py runserver``` to start the server...
2. Once the server is up and running,  run the following commands
    * cd into frontend-Pawsibly and run 
    * ```npm install``` to install dependencies.
    *  ```npm start``` to launch the app in your browser.
  

## Cloud Deployment
The app is deployed on Heroku and can be accessed [here](https://pawsibly.herokuapp.com/)

## Contributors

- [Lawrence Salinas](https://github.com/lawrencesalinas)
- [Kely Larea](https://github.com/kellylarrea)
- [Galyver Asi](https://github.com/galyverasi)