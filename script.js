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
    
    //     fetch("https://hackathon1-backend.vercel.app/trips", { // Effectue une requête `fetch` pour envoyer les informations de trajet à l'API
    //         method: "POST",
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({ 
    //             departure: departureValue, 
    //             arrival: arrivalValue, 
    //             date: new Date(dateValue) })
    //     })
    //     .then(response => response.json()) //On passe la reponse obtenue de l'api en format JSON
    //     .then(data => { 
    //         for(let e in data.allTrains) {
    //             console.log(data.allTrains[e].date); // Les trajets sont bien trouvés et affichés dans la console
    //             if(data.allTrains[e].departure && data.allTrains[e].arrival && data.allTrains[e].date) {
    //                 troisiemeMessage.innerHTML += `
    //                     <div id="resultatsObtenus">
    //                     <p>Départ : ${data.allTrains[e].departure}</p>
    //                     <p>Arrivée : ${data.allTrains[e].arrival}</p>
    //                     <p>Date : ${new Date(data.allTrains[e].date)}</p>
    //                     </div>
    //                     `;
    //                     const tripTrouve = true;
    //                 if(tripTrouve) {
    //                     premierMessage.style.display = "none";
    //                     troisiemeMessage.style.display = "flex";
    //                 } else {              
    //                     premierMessage.style.display = "none";
    //                     deuxiemeMessage.style.display = "flex";
    //                 };                  
    //             };
    //         };
    //     });
    // });


    // document.querySelector("#searchButton").addEventListener("click", function () {
    //     const departureValue = document.querySelector("#departureInput").value;
    //     const arrivalValue = document.querySelector("#arrivalInput").value;
    //     const dateValue = document.querySelector("#dateInput").value;
    
    //     const premierMessage = document.querySelector("#premierMessage");
    //     const deuxiemeMessage = document.querySelector("#deuxiemeMessage");
    //     const troisiemeMessage= document.querySelector("#troisiemeMessage");

    //     troisiemeMessage.innerHTML = '' 

    //     let tripTrouve = false;
    
    //     fetch("https://hackathon1-backend.vercel.app/trips", { // Effectue une requête `fetch` pour envoyer les informations de trajet à l'API
    //         method: "POST",
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({ 
    //             departure: departureValue, 
    //             arrival: arrivalValue, 
    //             date: new Date(dateValue) })
    //     })
    //     .then(response => response.json()) //On passe la reponse obtenue de l'api en format JSON
    //     .then(data => { 
    //         for(let e in data.allTrains) {
    //             console.log(data.allTrains[e].price); // Les trajets sont bien trouvés et affichés dans la console
    //             if(data.allTrains[e].departure && data.allTrains[e].arrival && data.allTrains[e].date) {
    //                 troisiemeMessage.innerHTML += `
    //                     <div id="resultatsObtenus">
    //                         <p>${data.allTrains[e].departure} > ${data.allTrains[e].arrival}</p>
    //                         <p>${data.allTrains[e].date.slice(11,-8)}</p>
    //                         <p>${data.allTrains[e].price}</p>
    //                         <p class="book" data-trip-id="${data.allTrains[e]._id}">Book</p>
    //                     </div>
    //                     `;
    //                     tripTrouve = true;
    //                 }
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
    //     })
    //     .then (() => {
    //         troisiemeMessage.addEventListener("click", function () {
    //             let tripID = event.target.getAttribute("data-trip-id");
    //             fetch("https://hackathon1-backend.vercel.app/cart", { 
    //                 method: "POST",
    //                 headers: { 'Content-Type': 'application/json' },
    //                 body: JSON.stringify({ 
    //                     tripID: tripID, 
    //                 })
    //             })
    //             .then(response => response.json()) 
    //             .then(data => {
    //                 console.log(data.data[1])
    //                 document.querySelector("#container").innerHTML += `
    //                     <div id="cart">
    //                         <p>${JSON.stringify(data.data[1], null, 2)}</p>
    //                     </div>`;
    //                 document.querySelector("#cart").style.zIndex = "1";
    //                 window.location.assign('cart.html');

    //             });
    //         });
    //     });
    // });



    document.querySelector("#searchButton").addEventListener("click", function () {
        const departureValue = document.querySelector("#departureInput").value;
        const arrivalValue = document.querySelector("#arrivalInput").value;
        const dateValue = document.querySelector("#dateInput").value;
    
        const premierMessage = document.querySelector("#premierMessage");
        const deuxiemeMessage = document.querySelector("#deuxiemeMessage");
        const troisiemeMessage= document.querySelector("#troisiemeMessage");

        troisiemeMessage.innerHTML = '' 

        let tripTrouve = false;
    
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
                console.log(data.allTrains[e].price); // Les trajets sont bien trouvés et affichés dans la console
                if(data.allTrains[e].departure && data.allTrains[e].arrival && data.allTrains[e].date) {
                    troisiemeMessage.innerHTML += `
                        <div id="resultatsObtenus">
                            <p>${data.allTrains[e].departure} > ${data.allTrains[e].arrival}</p>
                            <p>${data.allTrains[e].date.slice(11,-8)}</p>
                            <p>${data.allTrains[e].price}</p>
                            <p class="book" data-trip-id="${data.allTrains[e]._id}">Book</p>
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
        })
        .then (() => {
            troisiemeMessage.addEventListener("click", function () {
                let tripID = event.target.getAttribute("data-trip-id");
                fetch("https://hackathon1-backend.vercel.app/cart", { 
                    method: "POST",
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ 
                        tripID: tripID, 
                    })
                })
                .then(response => response.json()) 
                .then(data => {
                    console.log(data.data[1])
                    document.querySelector("#cartContainer").innerHTML += `
                        <div id="cart">
                            <p>${data.data}</p>
                        </div>`;
                    // document.querySelector("#cart").style.zIndex = "1";
                    window.location.assign('cart.html');

                });
            });
        });
    });

//L'idee de base qui est de modifier la page principal (index) ne marche pas
//Parcequ'on veut que les infos soient renvoyés dans la page cart et qu'ils y restent
