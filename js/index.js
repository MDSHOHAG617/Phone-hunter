/* loading SEarch */
const loadSearch = () => {
    const searcInput = document.getElementById('searchInput');
    const input = (searcInput.value).toLowerCase();
    searcInput.value = "";
    // console.log(input)

    /* Cheaking Input Feild */
    if (input == "") {
        error.innerText = "please enter a Brand name";
    }
    else if (input == "samsung" || input == "iphone" || input == "oppo") {
        error.innerText = "";
        const url = `https://openapi.programming-hero.com/api/phones?search=${input}`;
        fetch(url)
            .then(res => res.json())
            .then(data => displayResults(data.data.slice(0, 20)))
        /* Display Search Results */
        const displayResults = phones => {
            // console.log(phones)
            /* Clearing Displaying results */
            const searchResult = document.getElementById('searchResult');
            searchResult.innerHTML = "";
            const phoneDetails = document.getElementById('phone-detailes');
            phoneDetails.innerHTML = "";
            for (const phone of phones) {
                const div = document.createElement('div');
                div.innerHTML = `
                <div class="col">
                <div class="card">
                <img  class="w-50 text-center mx-auto mt-3" src="${phone.image}" class="card-img-top" alt="...">
                <div class="card-body d-flex justify-content-evenly align-items-center">
                    <div>
                    <h5 class="card-title">${phone.phone_name}</h5>
                    <h5 class="card-title">${phone.brand}</h5>
                    <p class="card-text">${phone.slug}</p>
                    </div>
                    <div>
                    <button onclick="loadDetails('${phone.slug}')" type="button" class="btn btn-warning fw-bold text-dark">Details</button>
                    </div>
                    </div>
                    </div>
                </div>`
                searchResult.appendChild(div)
            }
        }
    }
    /* Chking Errors */
    else {
        error.innerText = "No resuls found";
    }
}
/* Catching Phones Id number */
const loadDetails = phoneId => {
    // console.log(phoneId);
    const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`
    fetch(url)
        .then(res => res.json())
        .then(data => displsyDetails(data.data))
}
/* Displaying Phones Details */
const displsyDetails = phoneDetail => {
    const phoneDetails = document.getElementById('phone-detailes');
    phoneDetail.innerHTML = "";
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `<img  class="w-50 text-center mx-auto my-2" src="${phoneDetail.image}" class="card-img-top" alt="${phoneDetail.name || "No data found"}">
    <p class="mx-auto mx-2">Release Date: ${phoneDetail.releaseDate || "No realease date found"}</p>
    <h5 class="card-title ms-4"> Model Name: ${phoneDetail.name || "No data found"}</h5>
    <p class="p-2 ms-3"><span class="fw-bold">Main Features:</span> ${phoneDetail.mainFeatures.storage},${phoneDetail.mainFeatures.displaySize}${phoneDetail.mainFeatures.chipSet} </p>
    <p class="ms-4  "><span class="fw-bold">Sensors:</span> ${phoneDetail.mainFeatures.sensors || "No data found"}</p>
    <p class="ms-3 p-2 mx-auto "><span class="fw-bold">Other's:</span><br>
   <span class="fw-bold">WLAN:</span> ${phoneDetail.others?.WLAN || "No data found"}, 
   <span class="fw-bold">Bluetooth:</span> ${phoneDetail.others?.Bluetooth || "No data found"},
   <span class="fw-bold"> GPS:</span> ${phoneDetail.others?.GPS || "No data found"},
   <span class="fw-bold"> NFC:</span> ${phoneDetail.others?.NFC || "No data found"},
   <span class="fw-bold"> Radio:</span> ${phoneDetail.others?.Radio || "No data found"},
   <span class="fw-bold"> USB:</span> ${phoneDetail.others?.USB || "No data found"} </p>
    `;
    phoneDetails.appendChild(div);
}


