# life-dashboard

Software to help visualise & organise things... but it's really about how to:

- Use 1 codebase to build to native desktop, native mobile, and web. 
- Build app instances that can talk to other instances without needing a central server.
- Generate basic CRUD endpoints from a spec file of some kind.

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

## Install / dev set up

- (cmake)[https://cmake.org/] (`brew install cmake`) _required for the nodegui projects_
- (lerna)[https://lerna.js.org/](`npm install --global lerna`) 

cd into a project and do your thing!

## Lerna Packages / repo organisation

- `./packages/build-expo` the build config for react -> native Android, native iOS, and web apps
- `./packages/build-react-nodegui` the build config for react -> native Windows, and native Mac
- `./packages/ui-lib` React UI components
