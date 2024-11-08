function changeMessage() {
    const greetingData = {
        "Hello World!": [
            { country: 1, name: "USA" },
            { country: 2, name: "Philippines" },
            { country: 3, name: "UK" }
        ],
        "¡Hola Mundo!": [
            { country: 1, name: "Spain" },
            { country: 2, name: "Mexico" },
            { country: 3, name: "Argentina" }
        ],
        "Bonjour le Monde!": [
            { country: 1, name: "France" },
            { country: 2, name: "Canada" },
            { country: 3, name: "Belgium" }
        ],
        "Hallo Welt!": [
            { country: 1, name: "Germany" },
            { country: 2, name: "Austria" },
            { country: 3, name: "Switzerland" }
        ],
        "你好，世界！": [
            { country: 1, name: "China" },
            { country: 2, name: "Taiwan" },
            { country: 3, name: "Singapore" }
        ],
        "こんにちは世界！": [
            { country: 1, name: "Japan" }
        ]
    };

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
    document.body.appendChild(ul);
    return ul;
} 