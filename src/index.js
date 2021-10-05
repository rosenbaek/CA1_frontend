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


  
function getPersonById(id) {
  personFacade.getPerson(id)
      .then(person => {
        console.log(person);
        var personInfo = [{"id" : person.id ,"firstname" : person.firstName, "lastname" : person.lastName, "email" : person.email}];
        utilityFacade.createTable(personInfo,"result");

        var addressInfo = [person.address];
        utilityFacade.createTable(addressInfo,"result");

        var phoneInfo = person.phones;
        utilityFacade.createTable(phoneInfo,"result");
        
        var hobbyInfo = person.hobbies;
        utilityFacade.createTable(hobbyInfo,"result");

      })
      .catch(err => {
          if (err.status) {
              err.fullError.then(e => document.getElementById("error").innerHTML = JSON.stringify(e));
          }
          else { console.log("Network error"); }
      });
}
getPersonById(1);



/* JS For Exercise-2 below */



/* JS For Exercise-3 below */


/* 
Do NOT focus on the code below, UNLESS you want to use this code for something different than
the Period2-week2-day3 Exercises
*/

function hideAllShowOne(idToShow) {
  document.getElementById("about_html").style = "display:none"
  document.getElementById("ex1_html").style = "display:none"
  document.getElementById("ex2_html").style = "display:none"
  document.getElementById("ex3_html").style = "display:none"
  document.getElementById(idToShow).style = "display:block"
}

function menuItemClicked(evt) {
  const id = evt.target.id;
  switch (id) {
    case "ex1": hideAllShowOne("ex1_html"); break
    case "ex2": hideAllShowOne("ex2_html"); break
    case "ex3": hideAllShowOne("ex3_html"); break
    default: hideAllShowOne("about_html"); break
  }
  evt.preventDefault();
}
document.getElementById("menu").onclick = menuItemClicked;
hideAllShowOne("about_html");



