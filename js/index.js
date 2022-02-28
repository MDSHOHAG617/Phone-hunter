const loadSearch = () => {
    const searcInput = document.getElementById('searchInput');
    const input = searcInput.value;
    // input.value = "";
    // console.log(input)


    const url = `https://openapi.programming-hero.com/api/phones?search=${input}`;
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data.data.slice(0, 20)))




}

