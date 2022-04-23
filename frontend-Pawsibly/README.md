# Pawsibly
### https//pawsibly.herokuapp.com

Finding someone to look after your pet can be challenging.<br>
___
## Technical Requirements
* Use Django, Flask, or Express
* Create an application using at least 2 related models
* Include all major CRUD functions for at least one of your models
    * At least one PUT
    * At least one DELETE
    * At least one POST
    * At least 2 GETs
* Add authentication and authorization to restrict access to the appropriate users
* Manage team contributions and collaboration using a standard Git flow on GitHub
* Layout and style your front-end with clean and well-formatted CSS, with or without a framework
* Deploy your application online so it's publicly accessible.

## Technologies
---
* React
* Django
* PostgresQL
* Materialize

## User Stories
---
As a user, I want to...<br>
* be able to create an account
* list my pets
* schedule a booking
* leave a review
* rate the service
* have the option to be a sitter

## Routes
___

| Method | Path | Purpose |
| ------ | -------------- | -------------------------------- |
| GET | `/allsitters` | display a list of sitters |
| GET | `/sitter/id` | display sitter information |
| POST | `/booking` | set up a booking |
| PUT | `/booking/id` | edit a booking |
| DELETE | `/booking/id` | cancel a booking |
| POST | `/booking/id/review` | create a review |

## Entity Relationship Diagram
___

