const courts = ["A1", "A2", "B1", "B2", "B3"];

const overlap = {
    A1: ["B1", "B2"],
    A2: ["B2", "B3"],
    B1: ["A1"],
    B2: ["A1", "A2"],
    B3: ["A2"]
};

function checkAvailability() {

    const booked = [];

    document.querySelectorAll(".booking").forEach(box => {
        if(box.checked){
            booked.push(box.value);
        }
    });

    const blocked = new Set();

    booked.forEach(court => {
        overlap[court].forEach(overlapCourt => {
            if(!booked.includes(overlapCourt)){
                blocked.add(overlapCourt);
            }
        });
    });

    const available = courts.filter(
        court =>
            !booked.includes(court) &&
            !blocked.has(court)
    );

    display("booked", booked);
    display("available", available);
    display("blocked", [...blocked]);
}

function display(id, data){

    const ul = document.getElementById(id);
    ul.innerHTML = "";

    data.forEach(item => {

        const li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);

    });
}