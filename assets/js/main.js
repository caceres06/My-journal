
var parseAccSwitch = (value) => {
  if(value){
      return "Accidente :(";
  }
  return "No hubo accidente:)";

}

function addRow(schedule,evento,acc,tbody){

  var newRow = document.createElement("tr");
 // var date = new Date();

  newRow.innerHTML = 
          `<td><b>${schedule}</b></td>
          <td>${evento}</td>
          <td>${acc}</td> `;

  tbody.appendChild(newRow);
}

window.onload = function() 
{
  var submit_btn = document.querySelector("#submit_btn");
  var schedule_field = document.querySelector("#schedule_field");
  var evento_field = document.querySelector("#evento_field");
  var acc_switch = document.querySelector("#acc_switch");
  var tBody = document.querySelector("#table_body");

 
  submit_btn.addEventListener("click",()=>{
      var schedule = schedule_field.options[schedule_field.selectedIndex].text;
      var evento = evento_field.value;
      var acc = parseAccSwitch(acc_switch.checked);
      addRow(schedule,evento,acc,tBody);

     console.log(schedule);
      console.log(evento);
      console.log(acc);

  });


  evento_field.addEventListener("keyup",(event) =>{
      var evento =evento_field.value;

  });

};