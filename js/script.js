// Dummy property data (replace with real data)
const properties = [
    { id: 1, title: "Beautiful Villa", price: "$500,000", location: "City, State", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: 2, title: "Luxury Apartment", price: "$300,000", location: "City, State", description: "Sed ac dui ut velit sollicitudin ultrices." },
    { id: 3, title: "Cozy Bungalow", price: "$200,000", location: "City, State", description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas." }
];

// Function to display property listings
function displayPropertyListings(properties) {
    const listingsContainer = document.querySelector('.property-listings');
    listingsContainer.innerHTML = '';
    properties.forEach(property => {
        const card = document.createElement('div');
        card.classList.add('property-card');
        card.innerHTML = `
            <h2>${property.title}</h2>
            <p>Price: ${property.price}</p>
            <p>Location: ${property.location}</p>
            <p>Description: ${property.description}</p>
        `;
        listingsContainer.appendChild(card);
    });
}

// Function to search properties
function search() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const filteredProperties = properties.filter(property => {
        return property.title.toLowerCase().includes(input) || property.location.toLowerCase().includes(input) || property.description.toLowerCase().includes(input);
    });
    displayPropertyListings(filteredProperties);
}

// Display all properties on page load
window.onload = function() {
    displayPropertyListings(properties);
};
