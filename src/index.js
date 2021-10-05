import "./style.css"
import "bootstrap/dist/css/bootstrap.css"
import "./jokeFacade"
import personFacade from "./personFacade"
import utilityFacade from "./utilityFacade"

document.getElementById("all-content").style.display = "block"

/* 
  Add your JavaScript for all exercises Below or in separate js-files, which you must the import above
*/

/* JS For Exercise-1 below */

const SEARCHBYID = document.getElementById("searchById");
const SEARCHBYPHONE = document.getElementById("searchByPhoneNumber");
const SEARCHBYZIP = document.getElementById("searchByZip");
const COUNTPERSONSWITHHOBBY = document.getElementById("countPersonsWithHobby");


function createTableBasedOnSinglePerson (person){
  const div = document.getElementById("result");
  var personInfo = [{"id" : person.id ,"firstname" : person.firstName, "lastname" : person.lastName, "email" : person.email}];
  let table1 = utilityFacade.createTable(personInfo);

  var addressInfo = [person.address];
  let table2 = utilityFacade.createTable(addressInfo);

  let card = document.createElement('div');
  card.className = 'card shadow cursor-pointer';
  card.style = 'width: 40rem; margin: 10px'
  let cardBody = document.createElement('div');
  cardBody.className = 'card-body';

  cardBody.appendChild(table1);
  cardBody.appendChild(table2);

  var phoneInfo = person.phones;
  if(phoneInfo.length != 0){
    let table3 = utilityFacade.createTable(phoneInfo);
    cardBody.appendChild(table3);
  }
   
  
  var hobbyInfo = person.hobbies;
  if(hobbyInfo.length != 0){
    let table4 = utilityFacade.createTable(hobbyInfo);
    cardBody.appendChild(table4);
  }

  //Append card to div
  card.appendChild(cardBody);
  div.appendChild(card);
}

function getPersonById(id) {
  personFacade.getPersonById(id)
      .then(person => {
        createTableBasedOnSinglePerson(person);
      })
      .catch(err => {
          if (err.status) {
              err.fullError.then(e => document.getElementById("error").innerHTML = JSON.stringify(e));
          }
          else { console.log("Network error"); }
      });
}

function getPersonByPhoneNumber(phonenumber) {
  personFacade.getPersonByPhoneNumber(phonenumber)
      .then(person => {
        createTableBasedOnSinglePerson(person);
      })
      .catch(err => {
          if (err.status) {
              err.fullError.then(e => document.getElementById("error").innerHTML = JSON.stringify(e));
          }
          else { console.log("Network error"); }
      });
}

function getPersonsByZip(zip) {
  personFacade.getPersonsByZip(zip)
      .then(data => {
        console.log(data);
        data.all.forEach(person => {
          createTableBasedOnSinglePerson(person);
        });
      })
      .catch(err => {
          if (err.status) {
              err.fullError.then(e => document.getElementById("error").innerHTML = JSON.stringify(e));
          }
          else { console.log("Network error"); }
      });
}

function countPersonsWithHobby(hobby) {
  personFacade.countPersonsWithHobby(hobby)
      .then(data => {
        console.log(data);
        document.getElementById("result").innerHTML = `Number of persons with the hobby ${hobby}: ${data.amount}`;
      })
      .catch(err => {
          if (err.status) {
              err.fullError.then(e => document.getElementById("error").innerHTML = JSON.stringify(e));
          }
          else { console.log("Network error"); }
      });
}





function validateInput (event){
  document.getElementById("error").innerHTML = "";
  document.getElementById("result").innerHTML = "";
  const buttonId = event.target.id;
  const inputData = document.getElementById("inputText").value;
  if(inputData == ""){
    alert("Input type is empty");
  } else if(buttonId == "searchById"){
    getPersonById(inputData);
  } else if(buttonId == "searchByPhoneNumber"){
    getPersonByPhoneNumber(inputData);
  } else if(buttonId == "searchByZip"){
    getPersonsByZip(inputData);
  } else if (buttonId == "countPersonsWithHobby"){
    countPersonsWithHobby(inputData);
  }
}

SEARCHBYID.addEventListener("click", validateInput);
SEARCHBYPHONE.addEventListener("click", validateInput);
SEARCHBYZIP.addEventListener("click", validateInput);
COUNTPERSONSWITHHOBBY.addEventListener("click", validateInput);


/* JS For Exercise-2 below */



/* JS For Exercise-3 below */


/* 
Do NOT focus on the code below, UNLESS you want to use this code for something different than
the Period2-week2-day3 Exercises
*/

function hideAllShowOne(idToShow) {
  //document.getElementById("about_html").style = "display:none"
  document.getElementById("frontpage_html").style = "display:none"
  document.getElementById("ex2_html").style = "display:none"
  document.getElementById("ex3_html").style = "display:none"
  document.getElementById(idToShow).style = "display:block"
}

function menuItemClicked(evt) {
  const id = evt.target.id;
  switch (id) {
    case "ex2": hideAllShowOne("ex2_html"); break
    case "ex3": hideAllShowOne("ex3_html"); break
    default: hideAllShowOne("frontpage_html"); break
  }
  evt.preventDefault();
}
document.getElementById("menu").onclick = menuItemClicked;
hideAllShowOne("frontpage_html");



