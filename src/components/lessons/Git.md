# Git

## What are Git and Github?

Git is an open source code management system. The basic idea of git is to keep track of different versions of code or text and to check what has changed. Github allows developers to host their files in a repository so that other people can collaborate on projects with them. More info about Git and Github and how to set it up can be found [here](https://www.codecademy.com/articles/f1-u3-git-setup).

## Installation: 

In order for you to push or update in your code in a repository. First is you need to  [install git]("https://git-scm.com/downloads") on our local machine.

After your computer finish installation, run the following command to make sure that Git is install properly:

```
git --version
```

## Terms:

Lets get familiar with some of the terms we will be using or that are good to know going forward.

Directory- a folder
Terminal or command line- Interface for text commands
CLI- Command line Interface. 
Cd- change directory
Repository- Project, or folder where project is kept

## Commands:

Below are some of the commands we will be learning :

git add
git commit
git push
git branch
git checkout
git status
git diff
git pull
git merge
git reset
git log


## Lets get started

So now we have git installed it is time to start using it. We have a few ways we can use GitHub on our machine. We can use GitHub desktop or we can use it in the terminal. We will be using the terminal for this tutorial. First we navigate to www.github.com and create a profile.  We can then go ahead and create a new repository. You can name this anything you like. It is good to have a README file in your repository as it can give information on what technologies you are using and what you are trying to do with you project.

Now you have created a new repo (short for repository) we will clone it on to our local machine. We first need the address for our repository which we can get by clicking on the new repo and on the green Code button. You should be able to copy the address from there. Once we have that we can do in to our text editor and open up our terminal. 

## git clone

To clone our repo we will type git clone (paste the address or your repo hero) and then press enter e.g :

git clone https://github.com:Your-Name-Here/your-project.git

This will create a copy of your repo . From here once we are in the folder You can go ahead and create and edit all you like. Once we are ready to save some changes we move on to git add.

## git add

If we type:

“Git add .”

It will tell git to track all of the files that are listed in the project. Alternatively we could just add the name of the file or folder we want it to track e.g:

“git add index.html”

Would tell it to add the index file.

Once we have added files we then want to commit.

## git commit

Git commit is serious. It means we want to save our code here locally. Once we have added files in order to commit we will need to add a commit message. A commit message tells people what work you have done, its like a note. You can leave up to two messages here, the first of which is more like a heading and the second a more detailed explination. We add a message by using -m 'your message here'. So an example commit might look like:

git commit -m 'fixed spelling mistakes ' -m 'this is the secondary message which is not required'

## git push 

 In order to make it live we must use another git command “git push” which means i want to push this live to a remote repository where my project is hosted. In order to push we need to have committed so once that is done we can go ahead. So in order to publish this properly we need to say :
 git push origin main
 
 Origin is a word that stands for the location of our repository and main is the branch we want to push to.


## branching in git

So here we are currently using the master/main which is the default branch in a repo. All of our contributions will go to that branch. We can also use another branch like if we wanted to add features to an app. So at the point of creation of the branch it is basically like a copy of the code but any changes made to either branch after that will not affect or be visible to one another . Any commits made will be made to that specific branch.

This is useful when adding features to already established code that we have not finished working on yet(maybe bugs or not finished). Once it is ready to join the main code base, we can merge them together ! It is also common to have additional branches for quick bug fixes and so on. 

While in our directory if we type 'git branch' it will show us which branch we are on. Also it shows us here that there are no other branches yet. So in order to create another branch we type:

git checkout -b new-branch-name

So checkout can also be used to switch branches but we will discuss this later. But here in combination with -b followed by the name of the new branch we are able to create a new branch. If we typed git branch now it would show ud there are two branches. The main one and the second one we just created. It will also have a little star which will indicate which branch we are in. 

# switching branches

In order to switch branches we would use the command:

 git checkout main

 This will switch us back to the main branch. So if we move back over to our newly created branch in order to start working here we need to tell git what files to add. If we are only making changes to one file we can add that specificaly as mentioned before or else we can use git add . as we did before. From here we can commit and if we would like to add this to github we would use :

 git push origin new-branch-name-here

If we are working on someone elses repo it is important we are given the permissions to contribute else we will get errors once we attempt to do so.

## getting updates

to get the latest version including all of the updates for a project you are working on we use the following:

git pull

## Pull requests

If we don't own the repo like if we are contributing to someone else's repo or we need someone to review the code before adding their repo we create a pull request. This is also what we do if we don't have write access and want to contribute. Before we merge the code we create a pull request. This can be done manualy with the graphical interface of github. After we make a pr, we can still update the code just by making additional commits and pushing them up to github, as long as its on the same branch that you are making the pr with. Once the pull request is merged, that secondary branch is generally deleted and we switch back to the master branch. Then when we want to make additional changes, we create another branch and start the process over. 



## undoing in git

One of the best things about git is that we can undo changes when we make a mess of things. if we want to undo everything since the last commit and also clear the changes from out text editor we would use :

git reset --hard

if we have staged files and would like to undo that we would use :

git reset 

This can be used on its own or we could add the filename after it if required. 

If we wanted to undo a commit we would use:

git reset HEAD~1

The head is the pointer to the last commit, the ~1 points us to go up past the last commit and use the previous version now as the last commit therefore deleting the one we wanted to remove. 

To look back at all of our commit we can use :

git log

This will show us a list of our changes . The changes are arranged in reverse chronological order. Also, we can see what appropriate comments are very important as it will be easier to know where we want to go. The yellow number after commit (hash)can be used to reset back to that version, using the reset method. We will give an example of that below. We copy the hash reference of where we want to go. (we can use spacebar to get to the bottom.  We use q  to quit in the log .)

git reset 83e0b75gs7897f7878fsd78s9fd7s897f89sd7f8s9d7fs8d9f78sd7f

this will move us back to that commit but will not delete what we have done since then in our text editor. If we need to do so we will use the --hard followed by the hash key e.g:

git reset --hard 83e0b75gs7897f7878fsd78s9fd7s897f89sd7f8s9d7fs8d9f78sd7f

This will also reset our text editor. 


## Forking

Is used when we want access to code that we dont have the permissions to edit and so on. It is good because it makes a complete copy of it and copies it over to our personal github where we can do what we like with it! If we wanted to send info back to the original project we could then create a pull request. 

