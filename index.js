btnFind.onclick = findName;

function findName() {
    fetch("https://api.nationalize.io/" + "?name=" + txtName.value)
    .then(response => response.json())
    .then(JSON => showResult(JSON));
}

function showResult(JSON) {
    const countries = JSON.country;
    let ol = document.createElement("ol");

    for (let country of countries) {
        let li = document.createElement("li");
        let countryCode = country.country_id;
        li.innerText = regionName.of(countryCode);
        ol.appendChild(li);
    }

    divResult.innerHTML = "";
    divResult.append(ol);

}

let regionName = new Intl.DisplayNames(['en'],
                            { type: 'region'});
