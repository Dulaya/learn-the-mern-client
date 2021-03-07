import React from "react";

const CreateReactApp = () => {
  return (
    <>
      <h1>Create React App:</h1>
      <h4>What is create-react-app?</h4>
      <p>
        create-react-app is a Node package made by facebook that helps to
        generate a boilerplate version of react
      </p>
      <br />
      <h4>Installation:</h4>
      <p>
        Install node{" "}
        <a href="https://nodejs.org/en/" target="_blank">
          here
        </a>
        , the latest version will come with a command to generate a quick React
        application with the CLI (command line interface). Node is an
        environment for executing javascript outside of a browser, it includes
        npm on windows, which gives us access to our npx boilerplate.
      </p>
      <br />
      <h4>Node/npm Version Commands</h4>
      node -v
      <br />
      npm -v
      <p>
        Ensure Node installs properly by being able to run the following 2
        commands successfully
      </p>
      <br />
      <h4>Node/npm Scaffold Commands</h4>
      npx create-react-app .
      <br />
      npx create-react-app [dirname]
      <p>
        create-react-app comes with 2 basic options for selecting the output
        directory of the generated project. Choose option 2 if you want to make
        a new directory in the current working directory.
      </p>
      <br />
      <h4>Create React App Project Structure</h4>
      node_modules/ <br />
      public/
      <br />
      index.html
      <br />
      src/
      <br />
      App.css
      <br />
      App.js <br />
      index.css <br />
      index.js <br />
      .gitignore <br />
      package-lock.json
      <br />
      package.json <br />
      README.md
      <p>
        By default, index.js renders the App component to index.html. Index.js
        is the main script that is called to contain the root component, in this
        case App.js, which contains all the child components.
      </p>
    </>
  );
};

export default CreateReactApp;
