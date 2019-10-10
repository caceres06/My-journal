var parseLateSwitch = (value) => {
    if(value){
        return "Sufrí un accidente"
    }
    return "No sufrí ningún accidente"
}

function addRow(evento, accidente, tbody){
    var newRow = document.createElement("tr");
    var date = new Date();


    newRow.innerHTML = 
    `   <td>${date.toLocaleString()}</td>
        <td><b>${evento}</b></td>
        <td>${accidente}</td>`

    tbody.appendChild(newRow);
};

window.onload = function()
{
    var submit_btn = document.querySelector("#submit_btn");
    var event_field = document.querySelector("#event_field");
    var acc_switch = document.querySelector("#acc_switch");
    var tBody = document.querySelector("#table_body");

    
    submit_btn.addEventListener("click", function(){
        var evento = event_field.value;
        var accidente = parseLateSwitch(acc_switch.checked);
     });
}