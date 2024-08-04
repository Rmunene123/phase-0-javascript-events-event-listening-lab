function addingEventListener() {
        // Select the button element by its ID
        const input = document.getElementById('button');
        
        // Add a click event listener to the button
        input.addEventListener('click', clickAlert);
    }
    
    // Function to display an alert when the button is clicked
    function clickAlert() {
        alert('I was clicked!');
    }
    
    // Call the function to set up the event listener
    addingEventListener();
    

    
