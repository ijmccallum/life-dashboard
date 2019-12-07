# Which tech to use

The goal is to have the least number of technologies that will allow a project to run on native desktop, native mobile, and web. Ideally without hybrid apps (eg the whole webview thing).

## Choices - pros cons

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
- **ionic**, creating hybrid apps in web views
  - works with plain JS, so we can use svelte or preact
  - has a prebuilt component lib
  - capacitor / cordova give the webview access to native mobile APIS
- preact
- vue native?

## Decision

OpenAPI.YAML

Newer spec, yaml is prettier. Simple as!
