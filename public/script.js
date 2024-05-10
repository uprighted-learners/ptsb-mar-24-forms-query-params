let form = document.getElementById("form");
const BASE_URL = "http://localhost:3000"; //Setup base url variable. Holds localhost:3000 so we dont have to constantly write that.

form.addEventListener("submit", async (event) => {
    event.preventDefault(); // prevent form from refreshing after submitting

    // Setup body object as part of our request. We manually setup the keys. The values are grabbed from the form
    const data = {
        name: event.target.name.value,
        password: event.target.password.value
    }

    console.log(data);

    // Making POST request.
    let response = await fetch(`${BASE_URL}/login`, { // This last object is the request object
        method: "POST", // Let the server know what kind of request we are trying to make
        body: JSON.stringify(data), // Server understands json. We want to send our data in the format of JSON. We do this but doing JSON.stringify()
        headers: { // Let the server know we will be sending data in the form of json
            "Content-Type": "application/json"
        }
    })

    let apiData = await response.json(); // Convert json stringified response from server into object that we can use

    console.log(apiData); // Print out data
})