document.querySelector("#homeButton").addEventListener("click", function () {
    window.location.assign('index.html');
})

document.querySelector("#cartButton").addEventListener("click", function () {
    window.location.assign('cart.html');
})

document.querySelector("#bookingsButton").addEventListener("click", function () {
    window.location.assign('bookings.html');
})



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
        
    //     let tripTrouve = false;
        
    //     troisiemeMessage.innerHTML = "";

    //     fetch("https://hackathon1-backend.vercel.app/trips", { // Effectue une requête `fetch` pour envoyer les informations de trajet à l'API
    //         method: "POST", // Utilise la méthode HTTP POST pour envoyer des données
    //         headers: { 'Content-Type': 'application/json' }, // Définit l'en-tête pour indiquer que le corps de la requête est au format JSON
    //         body: JSON.stringify({  // Envoie le corps de la requête, qui est une chaîne JSON
    //             departure: departureValue, 
    //             arrival: arrivalValue, 
    //             date: new Date(dateValue) })
    //     })
    //     .then(response => response.json()) // Lorsque la réponse arrive, la transforme en JSON
    //     .then(data => { // Une fois la réponse transformée en JSON, on passe à la logique de traitement des données
    //         for(let e in data.allTrains) { // Parcourt chaque élément dans le tableau `allTrains` retourné par l'API
    //             console.log(data.allTrains[e].date); // Les trajets sont bien trouvés et affichés dans la console
    //             if(data.allTrains[e].departure && data.allTrains[e].arrival && data.allTrains[e].date) { // Si l'élément `e` dans `allTrains` a des propriétés 'departure', 'arrival' et 'date' non vides
                    
    //                 const dataDate = new Date(data.allTrains[e].date)

    //                 const heureAuBonFormat = dataDate.toLocaleTimeString("fr-FR", {
    //                     hour: "2-digit",
    //                     minute: "2-digit"
    //                 })

    //                 troisiemeMessage.innerHTML += `
    //                     <div id="resultatsObtenus">
    //                         <p>${data.allTrains[e].departure} > ${data.allTrains[e].arrival} &nbsp; ${heureAuBonFormat} &nbsp; ${data.allTrains[e].price}€ &nbsp; <button id="bookButton">Book</button> </p>
    //                     </div>
    //                     `;
    //                     tripTrouve = true;
    //             }
    //         }
    //         if(tripTrouve) {
    //             deuxiemeMessage.style.display = "none"
    //             premierMessage.style.display = "none";
    //             troisiemeMessage.style.display = "flex"; 
            
    //         } else {             
    //             premierMessage.style.display = "none";
    //             deuxiemeMessage.style.display = "flex";
    //             troisiemeMessage.style.display ="none"
    //         };                  
    //     });
    // });



    
//LES TENTATIVES RATEES
    // const cartDivSupp = document.querySelector("#cartDivSupp");
    // const cartContainer = document.querySelector("#cartContainer");
    // const cartMessage1 = document.querySelector("#cartMessage1");

    // const bookButton = document.querySelector("#bookButton")
    // bookButton.addEventListener("click", function () {
    //     window.location.assign('cart.html');
    //     cartContainer.innerHTML += "";
        
    // });


    //Si je n'ai pas de voyages dedans, afficher les 2 <p> de base
    //Il faut que quand je clique sur book, le voyage s'ajoute dans ma page cart.html
    //Si il y'a au moins un voyage booké dans le cart,
    //
// const bookButton = document.querySelector("#bookButton")
// const cartContainer = document.querySelector("#cartContainer");

// bookButton.addEventListener("click", function () {

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
    
    let tripTrouve = false;
    
    troisiemeMessage.innerHTML = "";

    const bookButton = document.querySelector("#bookButton");

    fetch("https://hackathon1-backend.vercel.app/trips", { // Effectue une requête `fetch` pour envoyer les informations de trajet à l'API
        method: "POST", // Utilise la méthode HTTP POST pour envoyer des données
        headers: { 'Content-Type': 'application/json' }, // Définit l'en-tête pour indiquer que le corps de la requête est au format JSON
        body: JSON.stringify({  // Envoie le corps de la requête, qui est une chaîne JSON
            departure: departureValue, 
            arrival: arrivalValue, 
            date: new Date(dateValue) })
    })
    .then(response => response.json()) // Lorsque la réponse arrive, la transforme en JSON
    .then(data => { // Une fois la réponse transformée en JSON, on passe à la logique de traitement des données
        for(let e in data.allTrains) { // Parcourt chaque élément dans le tableau `allTrains` retourné par l'API
            console.log(data.allTrains[e].date); // Les trajets sont bien trouvés et affichés dans la console
            if(data.allTrains[e].departure && data.allTrains[e].arrival && data.allTrains[e].date) { // Si l'élément `e` dans `allTrains` a des propriétés 'departure', 'arrival' et 'date' non vides
                
                const dataDate = new Date(data.allTrains[e].date)
                const heureAuBonFormat = dataDate.toLocaleTimeString("fr-FR", {
                    hour: "2-digit",
                    minute: "2-digit"
                })

                troisiemeMessage.innerHTML += `
                    <div id="resultatsObtenus">
                        <p>${data.allTrains[e].departure} > ${data.allTrains[e].arrival} &nbsp; ${heureAuBonFormat} &nbsp; ${data.allTrains[e].price}€ &nbsp; <button id="bookButton">Book</button> </p>
                    </div>
                    `;

                tripTrouve = true;
                

            }
        }
        if(tripTrouve) {
            deuxiemeMessage.style.display = "none"
            premierMessage.style.display = "none";
            troisiemeMessage.style.display = "flex"; 
        
        } else {             
            premierMessage.style.display = "none";
            deuxiemeMessage.style.display = "flex";
            troisiemeMessage.style.display ="none"
        };                  
    });
});