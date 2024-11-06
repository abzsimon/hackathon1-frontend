document.querySelector("#homeButton").addEventListener("click", function () {
    window.location.assign('index.html');
})

document.querySelector("#cartButton").addEventListener("click", function () {
    window.location.assign('cart.html');
})

document.querySelector("#bookingsButton").addEventListener("click", function () {
    window.location.assign('bookings.html');
})




// fetch('https://hackathon1-backend.vercel.app/trips')

const departureInput = document.querySelector("#departureInput");
const departureValue = departureInput.value;

const arrivalInput = document.querySelector("#arrivalInput");
const arrivalValue = arrivalInput.value;

const dateInput = document.querySelector("#dateInput");
const dateValue = dateInput.value;

// fetch(`https://hackathon1-backend.vercel.app/trips?departure=${departureValue}&arrival=${arrivalValue}&date=${dateValue}`, {
document.querySelector("#searchButton").addEventListener("click", function () {
    fetch("https://hackathon1-backend.vercel.app/trips", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            departure: departureValue, 
            arrival: arrivalValue, 
            date: dateValue })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
})


    // fetch method post