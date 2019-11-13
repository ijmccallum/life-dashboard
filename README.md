# life-dashboard

http://www.hygen.io/express <<< looks like this might do the trick for code generation!

A dashboard composing multiple small apps. Each instance you run will be stand alone. If you run multiple instances, they will be able to communicate with each other: syncing / other stuff.

The APIs for each app will be defined as OpenAPI spec files first, the CRUD code will be generated from these spec files. See the root ./openapi.yaml file for the whole spec - it references the child apps for their details.

Still need to choose:
graphQL server to talk to the small sql db thing I forget
will a svelt front end work for desktop, web, mobile? (cordova - hopefully yes)

## Structure

- /public static files for the render process (the "client" side)
- /src development here

- **OpenAPI spec** (Built by pulling together the app spec files)
- CRUD server generated from spec file
- apps
  - myLibrary
  - myRecipies
  - hikeTracker
  - golftracker
    - **OpenAPI.yaml** containing path specs and object schemas for this app
    - gameSchema - swagger file
    - Game list (All the previously saved games, sorting / filtering)
    - Stat view (Pulls from the game list)
    - Add a Game (Putting in the stuff from a scorecard)
      - Form UI generated by a data schema
    - Play (fill in the scores as you go - show club stats from the driving range?)
    - New Driving Range Session (fill in stuff as you play)
    - DrivingRangeSchema - swagger file
    - Driving Range Stats (^ list of the above)
  - pocketIntegration
  - podcastManager
  - IFTTT
- dashboard (the UI for holding each app, eg fpr-ui-ee-app)
- conflictResolution (the shared lib for detecting / resolving conflicts.)
- sync (to handle making connections)
- eventLog (for writing events)
- protocal (the communication standards?)

It'll be a native app with a few parts to work out:

- Storage (& data API) - possibly generated from a swagger file
- Data Entry UI (would be awesome if this was generated by the same swagger file)
- Analytics engine (calling the API will query the data)
- Analytics UI (possibly using some kind of framework... prometheus?)
- Syncing: pulling data from other sources and adding to it's own data store
- Syncing: sending data to other sources (being queried by other sources)
- Syncing: discovery of other sources

* swagger-py-codegen (Flask)
* Connexion (Flask)
* bottle-swagger (Bottle)
* fastapi

### The Data SQLite

Keep it chunked as small as possible, and immutable. Any update you make creates a copy with metadata including the instance of the app in which that edit was made. Hopefully keep conflict resolution to chunks no bigger than a sentence / check list item.

## Beginning

1. Generate a CRUD API from a swagger file - bonus points if it includes the DB
2. Package said CRUD API to run natively somewhere - using the electron runtime!?!?!?
3. Set up a UI using react, electron for the desktop, cordova for the mobile apps.

## TODOs

- automate the release process (starter scripts in ./script)
- automated load / memory leak testing
- automated a11y testing
- lint rc file
