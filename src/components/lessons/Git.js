import React from "react";

const Git = () => {
  return (
    <>
      <h1>Git</h1>
      <h4>What are Git and Github?</h4>
      <p>
        Git is an open source code management system. The basic idea of git is
        to keep track of different versions of code or text and to check what
        has changed. Github allows developers to host their files in a
        repository so that other people can collaborate on projects with them.
        More info about Git and Github and how to set it up can be found{" "}
        <a href="https://www.codecademy.com/articles/f1-u3-git-setup">here.</a>
      </p>
      <h4>Installation:</h4>
      <p>
        In order for you to push or update in your code in a repository. First
        is you need to{" "}
        <a href="https://git-scm.com/downloads">
          install git on our local machine.
        </a>
      </p>
      <p>git --version</p>
      <p>
        After installing Git, type the command above to check Git's version and
        if it's installed properly
      </p>
    </>
  );
};

export default Git;
