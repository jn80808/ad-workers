let greetingData = {};

fetch('functions/greetings.json')
    .then(response => response.json())
    .then(data => {
        greetingData = data;
    })
    .catch(error => console.error('Error loading GreatingJSON:', error));

function changeMessage() {
    const greetings = Object.keys(greetingData);
    const greeting = document.getElementById('greeting');
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    greeting.textContent = randomGreeting;

    // Display associated countries
    displayCountries(greetingData[randomGreeting]);
}

function displayCountries(countries) {
    const countriesList = document.getElementById('countries-list') || createCountriesList();
    countriesList.innerHTML = '';
    
    countries.forEach(country => {
        const li = document.createElement('li');
        li.textContent = country.name;
        countriesList.appendChild(li);
    });
}

function createCountriesList() {
    const ul = document.createElement('ul');
    ul.id = 'countries-list';
    ul.classList.add('countries-list');

    // Locate the container and insert the list inside it
    const container = document.querySelector('.container');
    container.appendChild(ul);

    return ul;
}
