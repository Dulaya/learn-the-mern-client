# Create React App:

## What is create-react-app?

create-react-app is a Node package made by facebook that helps to generate a boilerplate version of React.

## Installation:

Install Node.js [here](https://nodejs.org/en/), the latest version will come with a command to generate a quick React application with the CLI (command line interface). Node is an environment for executing javascript outside of a browser, it includes npm on windows, which gives us access to our npx boilerplate.

Node/npm Version Commands:

```
node -v
npm -v
```

Ensure Node installs properly by being able to run the following 2 commands successfully.

Node/npm Scaffold Commands

```
npx create-react-app .
npx create-react-app [dirname]
```

create-react-app comes with 2 basic options for selecting the output directory of the generated project. Choose option 2 if you want to make a new directory in the current working directory.

### Create React App Project Structure

```
node_modules/ 
public/
    └── index.html
src/
    └── App.css
    └── App.js 
    └── index.css 
    └── index.js 
.gitignore 
package-lock.json
package.json 
README.md
```

By default, index.js renders the App component to index.html. Index.js is the main script that is called to contain the root component, in this case App.js, which contains all the child components.
