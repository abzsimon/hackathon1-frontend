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

// const departureInput = document.querySelector("#departureInput");
// const departureValue = departureInput.value;

// const arrivalInput = document.querySelector("#arrivalInput");
// const arrivalValue = arrivalInput.value;

// const dateInput = document.querySelector("#dateInput");
// const dateValue = dateInput.value;

// fetch(`https://hackathon1-backend.vercel.app/trips?departure=${departureValue}&arrival=${arrivalValue}&date=${dateValue}`, {
document.querySelector("#searchButton").addEventListener("click", function () {
    const departureInput = document.querySelector("#departureInput");
    const departureValue = departureInput.value;

    const arrivalInput = document.querySelector("#arrivalInput");
    const arrivalValue = arrivalInput.value;

    const dateInput = document.querySelector("#dateInput");
    const dateValue = dateInput.value;

    const premierMessage = document.querySelector("#premierMessage");
    const deuxiemeMessage = document.querySelector("#deuxiemeMessage");
    const troisiemeMessage= document.querySelector("#troisiemeMessage");

    fetch("https://hackathon1-backend.vercel.app/trips", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            departure: departureValue, 
            arrival: arrivalValue, 
            date: new Date(dateValue) })
    })
    .then(response => response.json())
    .then(data => {
        if(data) {
        // if(data && data.length > 0) {
            premierMessage.style.display = "none"
            troisiemeMessage.style.display ="flex";
            // premierMessage.style.display = "none";
            // deuxiemeMessage.style.display = "flex";
        } else if(!data) {
            premierMessage.style.display = "none";
            deuxiemeMessage.style.display = "flex";
            // premierMessage.style.display = "none"
            // troisiemeMessage.style.display ="flex";
            // troisiemeMessage = res.json({data})
        }
    })
})

// troisiemeMessage.innerHTML += ""


    // fetch method post