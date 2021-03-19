# Homework 2: Biography	
You'll be writing a brief bio of yourself. The bio must be between 200-500 characters (2-5 sentences). Use this link to check your character: https://easywordcount.com/

0. You should have [Git](https://git-scm.com/) and [Node.js](https://nodejs.org/en/) install on your machine. For Linux users, you may need to manually install NPM depending on how you install Node.js. 
1. Clone the repo if you haven't already: `git clone https://github.com/Dulaya/learn-the-mern-client.git`
2. CD into the project: `cd learn-the-mern-client`
3. If you've already clone the repo, pull the latest updates by running the command: `git pull`
4. Install the dependencies: `npm install` After the dependencies are finished installing, start the development server by running: `npm start`. Go to `localhost:3000` in your browser.
5. Open VSCode by: `code .`
6. Create a new branch: `git checkout -b YourName-bio` 
	- Example: `git checkout -b Tom-bio`
7. In the VSCode, go to src > Components > biography and create a .md file of your name. For example: Tom.md 
8. Write your biography (200-500 characters) and add your image. If you're not comfortable using your image, use the link for an anonymous image: https://i.imgur.com/AtcBVTM.png Follow Tom's example. 
	- Make sure image's height is exactly 150px (doesn't matter the width dimension)
	- Use tool like http://www.simpleimageresizer.com/ to edit image's dimension
9. Save the file and go to src > Components > About.js 
10. Import your biography. Example: `import Tom from './biography/Tom.md`;
11. In the importedBios array, edit the rray to add your port. 
	- Example: `const importedBios = [Dulaya, Tom, ];`
12. Save About.js. You should be able to see the your bio pops up.
13. Check the Git status: `git status`
14. Add your changes to Git: `git add .`
15. Make your commit: `git commit -m "Your message"`
	- `git commit -m "add Tom bio"`
16. Push to GitHub: `git push origin YourName-bio` (same name as Step 6)
	- Example: `git push origin Tom-bio`
17. Go to GitHub page of the project and make a pull request.