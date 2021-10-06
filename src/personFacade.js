const URL = "http://localhost:8080/ca1/api/person";
//const for prood environment must be created

function getPersonById(id){
    return fetch(URL+"/"+id)
    .then(handleHttpErrors);
};

function getPersonByPhoneNumber(phoneNumber){
  return fetch(URL+"/byPhoneNumber/"+phoneNumber)
  .then(handleHttpErrors);
};

function getPersonsByZip(zip){
  return fetch(URL+"/byZip/"+zip)
  .then(handleHttpErrors);
};

function countPersonsWithHobby(hobby){
  return fetch(URL+"/hobbyCount/"+hobby)
  .then(handleHttpErrors);
};

function addPerson(person){
  const options = makeOptions("POST",person);
  return fetch(URL+"/addperson",options)
  .then(handleHttpErrors);
};

function editPerson(person){
  const options = makeOptions("PUT",person);
  return fetch(URL+"/editperson",options)
  .then(handleHttpErrors);
};

function getHobbyList(){
  return fetch(URL+"/hobbyList")
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