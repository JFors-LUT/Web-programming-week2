
const myTable = document.getElementById("table");
const uname = document.getElementById("input-username");
const email = document.getElementById("input-email");
const address = document.getElementById("input-address");
const admin = document.getElementById("input-admin");
const submitButton = document.getElementById("submit-data");
const emptyTable = document.getElementById("empty-table");


submitButton.addEventListener("click", function(){
    var numberOfRows = myTable.rows.length;
    var key = 0;
    for (var i = 1; i<numberOfRows; i++){
        if(myTable.rows.item(i).cells.item(0).innerHTML == uname.value){
            var key = 1;
            console.log(myTable.rows.item(i).cells.item(0).id);
            break;
        } else {
            console.log("Number: "+myTable.rows.item(i).cells.item(0).id);
            
        }

    }if (key == 0){
        var newRow = myTable.insertRow();
        var newName = newRow.insertCell();
        var newEmail = newRow.insertCell();
        var newAddress = newRow.insertCell();
        var newAdmin = newRow.insertCell();


        newName.innerHTML = uname.value;
        newName.id = 'name'+i;

        newEmail.innerHTML = email.value
        newEmail.id = 'mail'+i;

        newAddress.innerHTML = address.value;
        newAddress.id = 'str'+i;

        newAdmin.innerHTML = admin.value
        newAdmin.id = 'ad'+i;

        //var nodeName = document.createTextNode(uname.value);
        //var nodeEmail = document.createTextNode(email.value);
        //var nodeAddress = document.createTextNode(address.value);
        //var nodeAdmin = document.createTextNode(admin.value);

        //newName.appendChild(nodeName);
        //newEmail.appendChild(nodeEmail);
        //newAddress.appendChild(nodeAddress);
        //newAdmin.appendChild(nodeAdmin);
        
    } else {
        document.getElementById('mail'+i).innerHTML = email.value; 
        document.getElementById('str'+i).innerHTML = address.value;
        document.getElementById('ad'+i).innerHTML = admin.value;
        
    }

   
    })

emptyTable.addEventListener("click", function(){
    var numberOfRows = myTable.rows.length;
    for (var i = numberOfRows; i>1; i--){
        myTable.deleteRow(1);
    }
})