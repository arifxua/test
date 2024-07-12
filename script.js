// Initial JSON data
const initialJson = {
    "name": "John",
    "age": 30,
    "city": "New York"
};

// Save initial JSON data to localStorage if not already present
if (!localStorage.getItem('jsonData')) {
    localStorage.setItem('jsonData', JSON.stringify(initialJson));
}

// Function to read, edit, and update JSON data
function updateJsonData() {
    // Read JSON data from localStorage
    let jsonData = localStorage.getItem('jsonData');
    if (jsonData) {
        // Parse JSON data
        jsonData = JSON.parse(jsonData);
        
        // Edit JSON data
        jsonData.age = 31; // Update the age, for example
        
        // Save updated JSON data back to localStorage
        localStorage.setItem('jsonData', JSON.stringify(jsonData));
        
        console.log('JSON data has been updated:', jsonData);
    } else {
        console.error('No JSON data found in localStorage.');
    }
}

// Add event listener to the button
document.getElementById('updateJson').addEventListener('click', updateJsonData);
