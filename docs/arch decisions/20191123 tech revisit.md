# Which tech to use

The goal is to have the least number of technologies that will allow a project to run on native desktop, native mobile, and web. Ideally without hybrid apps (eg the whole webview thing). 

## Technologie notes

- **electron** & **react-native-web** Mobile: native, Web: native, Desktop: webview
  - can this work for native desktop or would that need the electron treatment? <<<<<<<<<<<<<<<<<<< ?
- **lerna** & **nodegui** Mobile: ???, Web: native, Desktop: native
  - lerna handling monorepos, maximising shared code.
  - different packages for each platform, common packages shared.
  - Cant the UI be in react-native for mobile _and_ nodegui for desktop _and_ plain js for web? <<< ?
  - platform specific code in their own packages
  - business logic in plain js packages
  - **nodegui** universal desktop native apps
    - JS to Native Desktop with Qt, internals are in c++
    - it's a WIP, very young. Many dragons! Hell of a learning opportunity though.
- **lerna** & **react-nodegui** & **react-native-web**
  - 2 builds, set build time vars for components to use either react-native-web wrappers for web & mobile
- **ionic**, creating hybrid apps in web views
  - works with plain JS, so we can use svelte or preact
  - has a prebuilt component lib
  - capacitor / cordova give the webview access to native mobile APIS
- **svelte-native** https://docs.nativescript.org/core-concepts/technical-overview
    - it does output native mobile GUIs, nice!
    - 
## Choices

**lerna** & **react-nodegui** & **react-native-web**

Lerna coordinates the multiple packages that divide the codebase. Within that, 2 seperate builds will generate builds as detailed in the bullets below. At build time set env variables to switch component wrappers: one wrapper for the react-nodegui Qt components and another wrapper for the react-native-web wrappers. 

2 builds:

- react-native-web build
    - Outputs html, css, js GUI for the web
    - Outputs Android GUI build
    - Outputs iOS GUI build
- react-nodegui build
    - Outputs Windows GUI build
    - Outputs Linux GUI build
    - Outputs Mac GUI build

**lerna** & **nodegui** & **svelte-native**

Again Lerna coordinates the packages. Within that, 2 seperate builds will generate builds as detailed in the bullets below. At build time set env variables to switch component wrappers: one wrapper for the nodegui Qt components and another wrapper for the svelte-native wrappers. 

2 builds:

- nodegui
    - Outputs Windows GUI build
    - Outputs Linux GUI build
    - Outputs Mac GUI build
- svelte-native
    - Outputs Windows GUI build
    - Outputs Linux GUI build
    - Outputs Mac GUI build

## Decision

1. Set up a hello world for each type of build
    - nodegui
    - svelte-native
    - react-native-web
    - react-nodegui
2. create a common "hello world" component to try and share between each of the two options.

