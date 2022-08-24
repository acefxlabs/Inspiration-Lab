# App On Menu

## Run

If you haven't done so already, install the [Tabris CLI](https://www.npmjs.com/package/tabris-cli) on your machine:

```
npm i tabris-cli -g
```

Then in the project directory, type:

```
npm start
```
Or choose "npm: start" from the Visual Studio Code task runner to make compile errors appear in the "Problems" view.

This will start a Tabris.js code server at a free port and print its URL to the console. The app code can then be [side-loaded](https://docs.tabris.com/3.8/developer-app.html#run-your-app) in the [developer app](https://docs.tabris.com/3.8/developer-app.html) by entering that URL.

Alternatively you can also call the Tabris CLI directly:

```
tabris serve -a -w
```

This the same as running `npm start`. The `-w` switch starts the compiler in watch mode, meaning you do not have to re-start the server after each code change, and `-a` causes the app to reload automatically as well.

## Test

This project includes a ESLint configuration that helps preventing common mistakes in your code. Most IDEs can display ESLint-based hints directly in the editor, but you can also run the tool explicitly via:

```
npm test
```

This will also check for compile errors.

The initial rules defined in `.eslintrc` are supposed to warn against problematic patterns, but not enforce a strict code style. You may want to [adjust them](https://eslint.org/docs/rules/) according to your taste. TypeScript specific rules are documented [here](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin) and JSX-Syntax specific rules [here](https://github.com/yannickcr/eslint-plugin-react). These can only be used in the dedicated `override` section of `.eslintrc`.

## Debugging


### Android

To debug your application running on an Android device, first click the debug icon on the Visual Studio Code activity bar. This opens the debug side bar where you can launch the configuration "Debug Tabris on Android" and enter the device's IP address. More information can be found [here](https://docs.tabris.com/3.8/debug.html#android).

### iOS

On iOS, the Safari developer tools [can be used for debugging](https://docs.tabris.com/3.8/debug.html#ios).
## Build

The app can be built using the online build service at [tabrisjs.com](https://tabrisjs.com) or locally using [Tabris.js CLI](https://www.npmjs.com/package/tabris-cli).

See [Building a Tabris.js App](https://docs.tabris.com/3.8/build.html) for more information.
