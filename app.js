const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");




// Write code to use inquirer to gather information about the development team members,


function newManager() {
     inquirer.prompt([
        {
            type: "list",
            name: "position",
            message: "What is your position?",
            choices: ["Manager"]
        },
        {
            type: "input",
            name: "name",
            message: "Please enter Manager's Name: ",
        },
        {
            type: "input",
            name: "ID",
            message: "Please enter ID: ",
        },
        {
            type: "input",
            name: "number",
            message: "Please enter office Number: ",
        },
        {
            type: "input",
            name: "email",
            message: "What is your Email address : ",
            validate: function (values) {
                let pass = values.match(
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                );
                if (pass) {
                    return true;
                } return "Please enter a valid email"
            }
        }
    ]);
};


//put promise 

function newEngineer (){
    inquirer.prompt([
        {
            type: "list",
            name: "position",
            message: "What is your position?",
            choices: ["Engineer"]
        },
        {
            type: "input",
            name: "name",
            message: "Please enter Engineer's Name: ",
        },
        {
            type: "input",
            name: "ID",
            message: "Please enter ID: ",
        },
        {
            type: "input",
            name: "GitHub",
            message: "Please enter GitHub username: ",
        },
        {
            type: "input",
            name: "email",
            message: "What is your Email address : ",
            validate: function (values) {
                let pass = values.match(
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                );
                if (pass) {
                    return true;
                } return "Please enter a valid email"
            }
        }
    ]);
};

// put promise


function newInter (){
    inquirer.prompt ([
        {
            type: "list",
            name: "position",
            message: "What is your position?",
            choices: ["Intern"]
        },
        {
            type: "input",
            name: "name",
            message: "Please enter Intern's Name: ",
        },
        {
            type: "input",
            name: "School",
            message: "Please enter Intern's School: ",
        },
        {
            type: "input",
            name: "email",
            message: "What is your Email address : ",
            validate: function (values) {
                let pass = values.match(
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                );
                if (pass) {
                    return true;
                } return "Please enter a valid email"
            }
        }
    ]);
};


// put promise






// After the user has input all employees desired, call the `render` function (required


// Call redner function "G" explanation

const employees = [
    new Manager(),
    new Engineer(),
    new intern(),
    ]
    
    //employee.push(new Intern());
    
    const html = render(employees);
    
    fs.writeFile("ajkdfasfj.html",html);





// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
