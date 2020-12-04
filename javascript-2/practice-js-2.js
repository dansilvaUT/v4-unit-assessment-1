/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE
let gitDefinition = 'Git is a version control system that allows you to track, commit and push changes to your code repo';
//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
let gitHubDefinition = 'GitHub is a cloud software that allows you to store your code repositories and use git to manage them';
//////////////////PROBLEMS 3 - 9////////////////////
/*
    For the next several problems you will be creating objects containing information about different git 
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property 
    will be a string with a description of what that git command does.  The 'code' property should be a 
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/

//CODE HERE
const init = {
    description: gitDefinition,
    code: 'git init'
};
//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties 
    following the guidelines above to describe the clone command.
*/

//CODE HERE
const clone = {
    description: 'Clones a repo to your local machine',
    code: 'git clone'
};
//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties
    following the guidelines above to describe the status command.
*/

//CODE HERE
const status = {
    description: 'Shows you that status of what files have had changes to them in your repo',
    code: 'git status'
};
//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties
    following the guidelines above to describe the add command.
*/

//CODE HERE
const add = {
    description: 'Adds the changed files to the queue to be commited',
    code: 'git add'
};
//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

//CODE HERE
const commit = {
    description: "Commits your changes from your repo",
    code: 'git commit -m ""'
};
//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'addRemote' with 'description' and 'code' properties
    following the guidelines above to describe the command to add a remote location to your git repository.
*/

//CODE HERE
const addRemote = {
    description: "Adds a remote repo",
    code: 'git remote add origin'
};
//////////////////PROBLEM 9////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties
    following the guidelines above to describe the push command.
*/

//CODE HERE
const push = {
    description: 'Pushes the local changes to your cloud repo',
    code: 'git push'
};