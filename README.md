# life-dashboard

Software to help visualise & organise things... but it's really about how to:

- Use 1 codebase to build to native desktop, native mobile, and web. 
- Build app instances that can talk to other instances without needing a central server.
- Generate basic CRUD endpoints from a spec file of some kind.


---

## How to setup this repo to develop it locally

- NodeJS 12.x and up (Installing and switching node versions is easier with a (node version manager)[http://npm.github.io/installation-setup-docs/installing/using-a-node-version-manager.html])
- (cmake)[https://cmake.org/] (`brew install cmake`) _required for the nodegui projects: the builds for mac and windows_
- (lerna)[https://lerna.js.org/](`npm install --global lerna`) _manages local dependencies_
- (Expo CLI)[https://docs.expo.io/versions/latest/workflow/expo-cli/](`npm install --global expo-cli`) _runs the native mobile and web builds_
- For mac users, (Watchman)[https://facebook.github.io/watchman/docs/install.html] is recommended by expo.
- (Expo client app)[https://docs.expo.io/versions/latest/get-started/installation/#2-mobile-app-expo-client-for-ios] for your Android / iOS

cd into a project and do your thing!

---

## Tech choices

**For 1 codebase to multiple platforms:**

- (Expo)[https://expo.io/] for building web, iOS, and android.
- (react-nodegui)[https://github.com/nodegui/react-nodegui] for building desktop.
- (lerna)[https://lerna.js.org/] for managing the repo / all the projects within it.

_see `./docs/arch decisions/20191123 tech revisit.md` for the decision process_

**For connecting app instances directly:**

TODO

**For generating CRUD endpoints from a spec file:**

TODO

* swagger-py-codegen (Flask)
* Connexion (Flask)
* bottle-swagger (Bottle)
* fastapi
http://www.hygen.io/express <<< looks like this might do the trick for code generation...

---

## Lerna Packages / repo organisation

- `./packages/build-expo` the build config for react -> native Android, native iOS, and web apps
- `./packages/build-react-nodegui` the build config for react -> native Windows, and native Mac
  - Builds the UI using Qt, it has a series of native UI components
- `./packages/ui-lib` React UI components

## UI

Expo uses react-native components. react-nodegui uses it's own components. The UI lib will contain all the app components but needs to be able to swap between the two native systems depending on which one is being built.