# Coject

## Set up instructions:

* Clone the repo
* Create branch according to feature you are working on

```sh
npm i
npm knex
npx knex migrate:latest
npx knex seed:run
cp .env.example .env
```
To run in development:
```sh
npm run dev
```

To run in production:
```sh
npm start
```
## User Stories

### MVP

* As a developer who is new to the project, I want to see an informative README, so that I can get started with the code right away.
* As a developer, I want the linter and unit tests to run automatically before I make new commits, so that I don't have to remember to run them. (Husky)
* As a user, I want to join an event, so that I can keep track of the events I am participating in in Coject.
* As a user, I want to be added to an event when I click the Join button.

## Stretch

* As a user, once logged in I want to have tabs to navigate the App.

---

## Views (Client Side)
| name | purpose |
| --- | --- |
| Login | View for user to enter their login credentials |
| Register | View for user to sign up for the App |
| Home | Placeholder |
| Create Project | Placeholder |
| Events | Placeholder |

## Reducers (Client Side)

| name | purpose |
  | --- | --- |
  | auth | Store information regarding user logins, auth status and auth errors |
  | Create User | Placeholder |
  | Current Page | Placeholder |
  | Set Events | Placeholder |

  ## Actions (Client Side)

  | type | data (e.g auth)| purpose |
  | --- | --- | --- |
  | CHANGE_PAGE | Placeholder | Enter Purpose |
  | ADD_USER_INFO | Placeholder | Enter Purpose |
  | CHANGE_NAV_STATE | Placeholder | Enter Purpose |
  | SET_EVENTS | Placeholder | Enter Purpose |


  ## API (Client - Server)

| Method | Endpoint | Protected | Usage | Response |
| --- | --- | --- | --- | --- |
| Post | /api/v1/sendRegistrationEmail | Yes | Send Registration Email | Response Placeholder |
| Post | /api/v1/sendReminderEmail | Yes | Send Reminder Email | Response Placeholder |
| Set | application/json | Yes | Accept json Header | Response Placeholder |
| Send | Placeholder | Yes | Send Email | Response Placeholder |
| Send | Placeholder | Yes | Send Info | Response Placeholder |


---

## DB (Server Side)
  
### users

  | Column Name | Data Type | Purpose |
  | --- | --- | --- |
  | id | Integer | Unique identifier for each user |
  | first_name | String | User first name |
  | last_name | String | User last name |
  | email | String | User email |
  | username | String | User login name |
  | image | String | User avatar image |
  | created_at | Timestamp | Time account created |
  | password_hash | String | Hash/Password of user to login |
  | reset_expires_at | Timestamp | Time of reset expiry |
  | reset_password_key | String | Password key for reset |

  ## projects

   | Column Name | Data Type | Purpose |
   | --- | --- | --- |
   | id | Integer | Unique identifier for each project |
   | user_id | Integer | Unique identifier for each user |
   | name | String | User's name |
   | description | 


 ## user projects
 | Column Name | Data Type | Purpose |
 | --- | --- | --- |
 


---

## The Tech

* [React](https://reactjs.org/docs/getting-started.html)
* [Redux](https://redux.js.org/)
* [Express](https://expressjs.com/en/api.html)
* [Knex.js (SQL)](https://knexjs.org/)
* [JWT Auth (Local)](https://jwt.io/)
* [Lint] (https://www.npmjs.com/package/lint)
* [Husky] (https://www.npmjs.com/package/husky)

## Heroku!!!

### Creating your app

Create your app with `heroku create [name]`

You can check that this was successful by running `heroku apps` to view a list of your apps


### Adding postgres

Add postgresql (hobby dev) to your app at `https://dashboard.heroku.com/apps/[APP NAME HERE]/resources`

Check that pg has been added by running `heroku addons` to ensure the postgresql db is on your app


### Deploying!

I have created several npm scripts that will be useful for deploying your app to heroku easily.

To push your local master branch to your heroku app:
```sh
npm run h:deploy
```

Run heroku migrations:
```sh
npm run h:migrate
```

Run heroku seeds:
```sh
npm run h:seed
```

If ever you need to rollback, you can also:
```sh
npm run h:rollback
```


### Ta-Da!
Your app should be deployed!