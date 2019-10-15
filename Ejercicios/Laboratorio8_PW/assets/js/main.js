var rows = [];
var counterId = 0;

var parseLate_Switch = value => {
    if(value){
        return "Tarde :(";
    }
    return "A tiempo :)";
}

function addRow(carnet,schedule,late,tbody){
    var newRow = document.createElement("tr");
    var date = new Date();

    rows.push({
        "id": counterId,
        "carnet":carnet,
        "schedule": schedule,
        "late":late
    });

    console.log(rows);

    newRow.innerHTML = `
            <td><b>${carnet}</b></td>
            <td>${schedule}</td>
            <td>${date.toLocaleString()}</td>
            <td>${late}</td>`

    var cellContainer = document.createElement("td");
    var deleteButton = document.createElement("button");

    
    deleteButton.classList.add("btn", "btn-danger");
    
    deleteButton.innerText = "Eliminar";
    deleteButton.value =counterId;

    //Nuevo
    var Confirmacion = document.createElement("input");
    var cellContainer2 = document.createElement("td");

    Confirmacion.classList.add("input");

    Confirmacion.innerText = "Carnet";

    deleteButton.addEventListener("click", event =>{
        var idElement = event.srcElement.value;
        var trToDelete = document.querySelector(`button[value='${idElement}']`).parentElement.parentElement;
        var elementoCarnet= Confirmacion.value;
        var elementoOriginal = querySelector(`button[value='${idElement}']`).parentElement.parentElement.childNodes[1].innerText;
        tbody.removeChild(trToDelete);
        tbody.removeChild();

        if(elementoCarnet==elementoOriginal){
            tbody.removeChild(trToDelete);
            rows.forEach((item,index)=>{
            if(item.id==idElement){
                rows.splice(index,1);
            }
        });     
        } else{
            alert("Carnet no coincide");
        }
    });

    cellContainer.appendChild(deleteButton);
    newRow.appendChild(cellContainer);

    cellContainer2.appendChild(Confirmacion);
    newRow.appendChild(cellContainer2);

    tbody.appendChild(newRow);

    counterId++;
};

window.onload = function(){
    
    var submit_btn = document.querySelector("#submit_btn");
    var carnet_field = document.querySelector("#carnet_field");
    var schedule_field = document.querySelector("#schedule_field");
    var late_switch = document.querySelector("#late_switch");
    var tbody = document.querySelector("#table_body");

    var carnetRegex = new RegExp(`[0-9]{8}`);

    submit_btn.addEventListener("click",()=>{
        var carnet = carnet_field.value;
        var schedule = schedule_field.options[schedule_field.selectedIndex].text;
        var late = parseLate_Switch(late_switch.checked);

        if(carnetRegex.test(carnet)){
            addRow(carnet,schedule,late,tbody);
        }
        else{
            alert("Formato no valido");
    }
        
    });
    
    carnet_field.addEventListener("keyup",(event)=>{
        //console.log(event.keyCode);
        var carnet = carnet_field.value;
        if(carnetRegex.test(carnet)){
            console.log("Pase la materia");
            submit_btn.disabled = false;
        }
        else{
            console.log("Deje la materia");
            submit_btn.disabled = true;
    }
    });

}

