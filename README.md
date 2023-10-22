# Cat Names Challenge

Framework:

- React Typescript

UI Library:

- [Shopify Polaris](https://github.com/Shopify/polaris/tree/main/polaris-react)

Libraries Used:

- Jest
- Axios
- Prettier

VS Code Extensions:

- FT Templates:
  Used for quickly creating templated folders.

## Installation Guide:

1. Clone the Git Repo, then run: `npm install` in your directory to install the necessary NPM Libraries.
2. To make use of the Prettier Extension, ensure that is installed on your IDE
3. To make use of the [FT Templates](https://marketplace.visualstudio.com/items?itemName=Huuums.vscode-fast-folder-structure), install the extension in VS Code

To run the site in your browser, from your terminal in the main directory run:\
`npm start`

## Development Guide

These are the steps I took to build the web app.

### Part 1 - Set up:

- Created the react app with the typescript template
- Installed Axios
- Installed Prettier
- Copied in FT Template files from another project
- Installed Shopify Polaris (following their installation guide)

### Part 2 - App Page:

- Created a useEffect that would trigger the Axios `GET` request on inital load.
- Using Postman, looked at what I would receive from the API endpoint and constructed the types.
- Constructed the filters for the data, and set up the state required.
- Used the console to verify that what I was doing, was returning what I was expecting.
- Added in the Text Component and App Provider component from the Polaris library for the female and male lists.
- Originally mapped the catNames lists to be individual cards.

### Part 3 - Deconstructing:

- Moved the code that was generating the lists into the CatNamesPage page folder.
- Changed the design so that each Gender would have it's own individual Card
- Created the global component CustomList
- Added in loading markup for if the connection's slow

### Part 4 - Error Handling:

- On the App.tsx file added in an errorMessage for wherever there was a console.error.
- Created an ErrorPageMarkup, to gracefully display error messages.

### Part 5 - Testing:

- Wrote a test to check the Female Cat lists were rendering in alphabetical order
- Copied the test for males too.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Two unit tests are in the suite:

1. Female Owner Cat Names are in alphabetical order
2. Male Owner Cat names are in alphabetical order

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
