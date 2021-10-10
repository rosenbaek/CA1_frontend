import {SERVER_URL} from '../constants'
//const for prood environment must be created

function getPersonById(id){
    return fetch(SERVER_URL+"/"+id)
    .then(handleHttpErrors);
};

function getPersonByPhoneNumber(phoneNumber){
  return fetch(SERVER_URL+"/byPhoneNumber/"+phoneNumber)
  .then(handleHttpErrors);
};

function getPersonsByZip(zip){
  return fetch(SERVER_URL+"/byZip/"+zip)
  .then(handleHttpErrors);
};

function countPersonsWithHobby(hobby){
  return fetch(SERVER_URL+"/hobbyCount/"+hobby)
  .then(handleHttpErrors);
};

function addPerson(person){
  const options = makeOptions("POST",person);
  return fetch(SERVER_URL+"/addperson",options)
  .then(handleHttpErrors);
};

function editPerson(person){
  const options = makeOptions("PUT",person);
  return fetch(SERVER_URL+"/editperson",options)
  .then(handleHttpErrors);
};

function getHobbyList(){
  return fetch(SERVER_URL+"/hobbyList")
  .then(handleHttpErrors);
};


function handleHttpErrors(res){
    if(!res.ok){
      return Promise.reject({status: res.status, fullError: res.json() })
    }
    return res.json();
}

function makeOptions(method, body) {
    var opts =  {
      method: method,
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json"
      }
    }
    if(body){
      opts.body = JSON.stringify(body);
    }
    return opts;
   }


   const personFacade = {
    getPersonById,
    getPersonByPhoneNumber,
    getPersonsByZip,
    countPersonsWithHobby,
    addPerson,
    getHobbyList,
    editPerson
};

   export default personFacade;