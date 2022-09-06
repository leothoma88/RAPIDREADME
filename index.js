const fs = require('fs');
const inquirer = require('inquirer');
// const {message}=require("statuses")

// const generateHTML = ({ name, location,LinkedIn,GitHub}) =>


inquirer
  .prompt([
    {
      type: 'input',
      message: 'Enter title:',
      name:"title",
      validate: (value)=> {if(value){
          return true} else{return "Please insert value"}}
    },
    {
      type: 'input',
      message: 'Enter description:',
      name:"description",
      validate: (value)=> {if(value){
        return true} else{return "Please insert value"}}
    },
    {
      type: 'input',
      message: 'What are the steps required to install your project?',
      name: 'installation',
      validate: (value)=> {if(value){
        return true} else{return "Please insert value"}}
    },
    {
        type: 'input',
        message: 'Provide instructions and examples for use',
        name: 'usage',
        validate: (value)=> {if(value){
            return true} else{return "Please insert value"}}
      },
      {
        type: 'input',
        message: 'List your collaborators',
        name: 'credits',
        validate: (value)=> {if(value){
            return true} else{return "Please insert value"}}
      },
      {
        type: 'input',
        message: 'Enter Test Instructions',
        name: 'tests',
        validate: (value)=> {if(value){
            return true} else{return "Please insert value"}}
      },
      {
        type: 'input',
        message: 'Enter Contributing Guidelines:',
        name: 'contributing',
        validate: (value)=> {if(value){
            return true} else{return "Please insert value"}}
      },
      {
        type: 'list',
        message: 'License:',
        choices:["GNU AGPLv3","GNU GPLv3","GNU LGPLv3","Mozilla Public License 2.0","Apache License 2.0","MIT License","Boost Software License 1.0","The Unlicense"],
        name: 'license',
        validate: (value)=> {if(value){
            return true} else{return "Please insert value"}}
      },
      {
        type: 'input',
        message: 'Enter Github Username:',
        name: 'gitHub',
        validate: (value)=> {if(value){
            return true} else{return "Please insert value"}}
      },
      {
        type: 'input',
        message: 'Enter Email Address:',
        name: 'email',
        validate: (value)=> {if(value){
            return true} else{return "Please insert value"}}
      }



  ])
  .then(({title,description,installation,usage,credit,test,contributing,license,gitHub,email}) =>{
    const readMe =`# ${title}
    
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [Credits](#credits)
  * [License](#license)
  
  ## Installation
  ${installation}
    
  ## Usage
  ${usage}
    
  ## Description
  ${description}

  ## Credit
  ${credit}
    
  ## Contribution
  ${contributing}

  ## Test
  ${test}

  ## License
  ${license}

  # Contact Info
  * GitHub: ${gitHub}
  * Email: ${email}
  `
 Newfilegenerator(title,readMe);

   } 
   );

   function Newfilegenerator(fileName,data){

  fs.writeFile(`${fileName.toLowerCase().split(' ').join('')}.md`,data,(err)=>{
    if(err){
      console.log(err)
    }else
    console.log("ReadMe Created")
  })
   }