document.addEventListener('DOMContentLoaded', function() {
    // Find the submit button
    let submitButton = document.getElementById('submit_button');

    // Add event listener to the submit button
    submitButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent form submission

        // Get the values from the form fields
        let keyword = document.getElementById('search_input').value;
        let numberOfGifs = document.getElementById('number_input').value;

        // Perform your logic with the keyword and numberOfGifs
        // Make a fetch request to the Giphy API
        let url = `https://api.giphy.com/v1/gifs/search?q=${keyword}&limit=${numberOfGifs}&api_key=R4Gyd0JwudBxeXIQu6TGY0xscNYSSBrv`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                // Access the array of GIF objects from the fetched data
                const gifs = data.data;

                // Get the container element where you want to display the GIFs
                const gifContainer = document.getElementById('gif_container');

                // Clear any existing content in the container
                gifContainer.innerHTML = '';

                // Iterate over the array of GIF objects
                gifs.forEach(gif => {
                    // Create an image element for each GIF
                    const img = document.createElement('img');
                    img.src = gif.images.fixed_height.url; // Assuming you want the fixed_height version of the GIF

                    // Append the image element to the container
                    gifContainer.appendChild(img);
                });
            })
            .catch(error => {
                // Handle errors here
                console.error('Error fetching GIFs:', error);
            });
    });
});


