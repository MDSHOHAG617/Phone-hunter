const loadSearch = () => {
    const searcInput = document.getElementById('searchInput');
    const input = searcInput.value;
    searcInput.value = "";
    // console.log(input)
    if (input == "") {
        alert("no result found")
    }
    else if (input == "samsung" || input == "iphone" || input == "oppo") {
        const url = `https://openapi.programming-hero.com/api/phones?search=${input}`;
        fetch(url)
            .then(res => res.json())
            .then(data => displayResults(data.data.slice(0, 20)))


        const displayResults = phones => {
            // console.log(phones)

            const searchResult = document.getElementById('searchResult');
            searchResult.innerHTML = "";
            for (const phone of phones) {


                const div = document.createElement('div');
                div.innerHTML = ` <div class="col">
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
    else {
        alert("Please Enter a valid Name (Brand)");
    }

}

const loadDetails = phoneId => {
    console.log(phoneId);
    const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`
    fetch(url)
        .then(res => res.json())
        .then(data => displsyDetails(data.data))
}

const displsyDetails = phoneDetail => {
    // console.table(phoneDetail);
    console.log(phoneDetail.image);
    const phoneDetails = document.getElementById('phone-detailes');
    const div = document.createElement('div');
    div.classList.add('card');
    // if (`${phoneDetail.releaseDate}== "")` {
    //     document.getElementById('realesedate').style.display = "block"
    // }
    div.innerHTML = `
    <img  class="w-50 text-center mx-auto my-2" src="${phoneDetail.image}" class="card-img-top" alt="...">
    <p class="mx-auto">Release Date: ${phoneDetail.releaseDate}</p>
    <h5 class="card-title ms-4"> Model Name: ${phoneDetail.name}</h5>
    <p class="p-2 ms-3 mx-auto "><span class="fw-bold">Main Features:</span> ${phoneDetail.mainFeatures.storage},${phoneDetail.mainFeatures.displaySize},${phoneDetail.mainFeatures.chipSet} </p>
    <p class="ms-4 mx-auto "><span class="fw-bold">Sensors:</span> ${phoneDetail.mainFeatures.sensors} </p>
    <p class="ms-3 p-2 mx-auto "><span class="fw-bold">Other's:</span><br>
   <span class="fw-bold">WLAN:</span> ${phoneDetail.others.WLAN}, 
   <span class="fw-bold">Bluetooth:</span> ${phoneDetail.others.Bluetooth},<span class="fw-bold"> GPS:</span> ${phoneDetail.others.GPS},<span class="fw-bold"> NFC:</span> ${phoneDetail.others.NFC},<span class="fw-bold"> Radio:</span> ${phoneDetail.others.Radio},<span class="fw-bold"> USB:</span> ${phoneDetail.others.USB} </p>
 
    
    `;
    phoneDetails.appendChild(div);
}
