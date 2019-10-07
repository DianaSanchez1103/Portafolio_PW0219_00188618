var parseLate_Switch = value => {
    if(value){
        return "Tarde :(";
    }
    return "A tiempo :)";
}

function addRow(carnet,schedule,late,tbody){
    var newRow = document.createElement("tr");
    var date = new Date();

    newRow.innerHTML = `
            <td><b>${carnet}</b></td>
            <td>${schedule}</td>
            <td>${date.toLocaleString()}</td>
            <td>${late}</td>`

    tbody.appendChild(newRow);
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
        console.log(carnet);
        console.log(schedule);
        console.log(late);
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

