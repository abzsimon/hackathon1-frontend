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





// document.querySelector("#searchButton").addEventListener("click", function () {
//     const departureInput = document.querySelector("#departureInput");
//     const departureValue = departureInput.value;

//     const arrivalInput = document.querySelector("#arrivalInput");
//     const arrivalValue = arrivalInput.value;

//     const dateInput = document.querySelector("#dateInput");
//     const dateValue = dateInput.value;

//     const premierMessage = document.querySelector("#premierMessage");
//     const deuxiemeMessage = document.querySelector("#deuxiemeMessage");
//     const troisiemeMessage= document.querySelector("#troisiemeMessage");

//     fetch("https://hackathon1-backend.vercel.app/trips", {
//         method: "POST",
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ 
//             departure: departureValue, 
//             arrival: arrivalValue, 
//             date: new Date(dateValue) })
//     })
//     .then(response => response.json())
//     .then(data => {
//         // if(data) {
//         console.log(data);
//         if(departureValue || arrivalValue || dateValue) {
//         // if(data && data.length > 0) {
//             premierMessage.style.display = "none"
//             troisiemeMessage.style.display ="flex";
//             // premierMessage.style.display = "none";
//             // deuxiemeMessage.style.display = "flex";
//         } else if(!data) {
//             premierMessage.style.display = "none";
//             deuxiemeMessage.style.display = "flex";
//             // premierMessage.style.display = "none"
//             // troisiemeMessage.style.display ="flex";
//             // troisiemeMessage = res.json({data})
//         }
//     })
// })



    // document.querySelector("#searchButton").addEventListener("click", function () {
    //     const departureInput = document.querySelector("#departureInput");
    //     const departureValue = departureInput.value;
    
    //     const arrivalInput = document.querySelector("#arrivalInput");
    //     const arrivalValue = arrivalInput.value;
    
    //     const dateInput = document.querySelector("#dateInput");
    //     const dateValue = dateInput.value;
    
    //     const premierMessage = document.querySelector("#premierMessage");
    //     const deuxiemeMessage = document.querySelector("#deuxiemeMessage");
    //     const troisiemeMessage= document.querySelector("#troisiemeMessage");
    
    //     fetch("https://hackathon1-backend.vercel.app/trips", {
    //         method: "POST",
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({ 
    //             departure: departureValue, 
    //             arrival: arrivalValue, 
    //             date: new Date(dateValue) })
    //     })
    //     .then(response => response.json())
    //     .then(data => {
    //         // if(data) {
    //         console.log(data);
    //         if(data.departure === departureValue && data.arrival === arrivalValue && data.date === dateValue) {
    //             troisiemeMessage.innerHTML += `
    //             <p>Départ : ${data.departure}</p>
    //             <p>Arrivée : ${data.arrival}</p>
    //             <p>Date : ${data.date}</p>
    //             `;
    //             premierMessage.style.display = "none";
    //             troisiemeMessage.style.display = "flex";            
    //         }
                
    //         })
    // })






    // document.querySelector("#searchButton").addEventListener("click", function () {
    //     const departureInput = document.querySelector("#departureInput");
    //     const departureValue = departureInput.value;
    
    //     const arrivalInput = document.querySelector("#arrivalInput");
    //     const arrivalValue = arrivalInput.value;
    
    //     const dateInput = document.querySelector("#dateInput");
    //     const dateValue = dateInput.value;
    
    //     const premierMessage = document.querySelector("#premierMessage");
    //     const deuxiemeMessage = document.querySelector("#deuxiemeMessage");
    //     const troisiemeMessage= document.querySelector("#troisiemeMessage");
    
    //     fetch("https://hackathon1-backend.vercel.app/trips", {
    //         method: "POST",
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({ 
    //             departure: departureValue, 
    //             arrival: arrivalValue, 
    //             date: new Date(dateValue) })
    //     })
    //     .then(response => response.json())
    //     .then(data => {
    //         // if(data) {
    //         console.log(data);
    //     if (data && data.length > 0) { // Si des trajets sont trouvés
    //         data.forEach(trip => { // Itérer sur chaque trajet trouvé
    //             // Ajouter chaque trajet dans `troisiemeMessage`
    //             troisiemeMessage.innerHTML += `
    //                 <p>Départ : ${trip.departure}</p>
    //                 <p>Arrivée : ${trip.arrival}</p>
    //                 <p>Date : ${new Date(trip.date)}</p>
    //                 <hr>
    //             `;
    //         });
    //         premierMessage.style.display = "none";    // Cache le premier message
    //         deuxiemeMessage.style.display = "none";
    //         troisiemeMessage.style.display = "flex";  // Affiche les trajets trouvés
    //     }else if(!data) {
    //         premierMessage.style.display = "none";
    //         deuxiemeMessage.style.display = "flex";   // Affiche un message si aucun trajet n'est trouvé
    //         troisiemeMessage.style.display = "none";
    //     };
    //     })
    // })


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
    
        fetch("https://hackathon1-backend.vercel.app/trips", { // Effectue une requête `fetch` pour envoyer les informations de trajet à l'API
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                departure: departureValue, 
                arrival: arrivalValue, 
                date: new Date(dateValue) })
        })
        .then(response => response.json()) //On passe la reponse obtenue de l'api en format JSON
        .then(data => { 
            for(let e in data.allTrains) {
                console.log(data.allTrains[e].date); // Les trajets sont bien trouvés et affichés dans la console
            }
            if(data.departure && data.arrival && data.date) {
                troisiemeMessage.innerHTML += `
                    <p>Départ : ${trip.departure}</p>
                    <p>Arrivée : ${trip.arrival}</p>
                    <p>Date : ${new Date(trip.date)}</p>
                    `;
                    premierMessage.style.display = "none";
                    troisiemeMessage.style.display = "flex";
            };
        });
    });