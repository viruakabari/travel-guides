const places = [
    {
        name: "Eiffel Tower",
        image: "https://via.placeholder.com/200x150?text=Eiffel+Tower",
        description: "A stunning landmark in Paris, France."
    },
    {
        name: "Great Wall of China",
        image: "https://via.placeholder.com/200x150?text=Great+Wall+of+China",
        description: "A historical fortification in China."
    },
    {
        name: "Machu Picchu",
        image: "https://via.placeholder.com/200x150?text=Machu+Picchu",
        description: "An ancient Incan city in the Andes mountains."
    },
    {
        name: "Colosseum",
        image: "https://via.placeholder.com/200x150?text=Colosseum",
        description: "An iconic ancient amphitheater in Rome."
    },
    {
        name: "Statue of Liberty",
        image: "https://via.placeholder.com/200x150?text=Statue+of+Liberty",
        description: "A symbol of freedom in New York City."
    }
];

const placesContainer = document.getElementById('placesContainer');
const bookingSection = document.getElementById('bookingSection');
const placeDetails = document.getElementById('placeDetails');
const bookBtn = document.getElementById('bookBtn');

places.forEach(place => {
    const placeDiv = document.createElement('div');
    placeDiv.className = 'place';
    placeDiv.innerHTML = `
        <img src="${place.image}" alt="${place.name}">
        <h3>${place.name}</h3>
    `;
    placeDiv.addEventListener('click', () => showBookingSection(place));
    placesContainer.appendChild(placeDiv);
});

function showBookingSection(place) {
    placeDetails.innerHTML = `${place.name}: ${place.description}`;
    bookingSection.style.display = 'block';
}

bookBtn.addEventListener('click', () => {
    alert("Your guide for " + placeDetails.innerText + " has been booked!");
    bookingSection.style.display = 'none';
});
