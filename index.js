


// fetch('https://randomuser.me/api/')
// .then(res => res.json())
// .then(data => {
//     console.log(data)
// }

// )
// Function to fetch user data from the API
function fetchUser() {
    // Fetch data from the Random User API with a query parameter
    fetch('https://randomuser.me/api/')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Extract user information from the JSON response
            const user = data.results[0]; // Access the first user object
            const imageUrl = user.picture.large; // URL for the user's picture
            const name = `${user.name.first} ${user.name.last}`; // Full name
            const email = user.email; // Email address

            // Update the HTML elements with new user data
            document.getElementById('user-image').src = imageUrl; // Set the image source
            document.getElementById('user-name').textContent = name; // Set the name text
            document.getElementById('user-email').textContent = email; // Set the email text
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

// Fetch a user when the page first loads
window.addEventListener('load', fetchUser);
