
function createTable(objectArray, divId) {
  var fieldTitles = Object.keys(objectArray[0]);
    let body = document.getElementById(divId);
    let tbl = document.createElement('table');
    let thead = document.createElement('thead');
    let thr = document.createElement('tr');
    fieldTitles.forEach((fieldTitle) => {
      let th = document.createElement('th');
      th.appendChild(document.createTextNode(fieldTitle));
      thr.appendChild(th);
    });
    thead.appendChild(thr);
    tbl.appendChild(thead);
  
    let tbdy = document.createElement('tbody');
    let tr = document.createElement('tr');
    objectArray.forEach((object) => {
      let tr = document.createElement('tr');
      Object.values(object).forEach((field) => {
        var td = document.createElement('td');
        td.appendChild(document.createTextNode(field));
        tr.appendChild(td);
      });
      tbdy.appendChild(tr);    
    });
    tbl.appendChild(tbdy);
    body.appendChild(tbl)
    return tbl;
  }


const utilityFacade = {
    createTable
};

export default utilityFacade;