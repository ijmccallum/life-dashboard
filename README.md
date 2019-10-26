# life-dashboard

## Structure

This is (will be) a federated / decentralized collection of app instances that sync with each other. Eg, you have the app installed on your desktop and on your phone, each running independently of the other _but_ with the ability to update each other.

It's a dashboard composing multiple small apps. Which keep their own data / communication rules using a shared lib

 - apps (eg "myLibrary", "myRecipies", "tournament tracker", "pocketIntegration", "podcast integration", "IFTTT integration"...)
    - myLibrary
 - dashboard (the UI for holding each app, eg fpr-ui-ee-app)
 - conflictResolution (the shared lib for detecting / resolving conflicts.)
 - sync (to handle making connections)
 - eventLog (for writing events)
 - protocal (the communication standards?)


### The Data

Keep it chunked as small as possible, and immutable. Any update you make creates a copy with metadata including the instance of the app in which that edit was made. Hopefully keep conflict resolution to chunks no bigger than a sentence / check list item.

## UI / Design / UX

