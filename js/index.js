const loadSearch = () => {
    const searcInput = document.getElementById('searchInput');
    const input = searcInput.value;
    // input.value = "";
    // console.log(input)


    const url = `https://openapi.programming-hero.com/api/phones?search=${input}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayResults(data.data.slice(0, 20)))


    const displayResults = phones => {
        // console.log(phones)
        const searchResult = document.getElementById('searchResult');
        for (const phone of phones) {
            console.log(phone)
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
                    <button type="button" class="btn btn-warning fw-bold text-dark">Details</button>
                    </div>
                </div>
            </div>
        </div>`

            searchResult.appendChild(div)
        }
    }

}

