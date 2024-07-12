document.getElementById('fileInput').addEventListener('change', handleFileSelect, false);

let fileContent;

function handleFileSelect(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.onload = function(event) {
        fileContent = event.target.result;
        document.getElementById('output').textContent = fileContent;
    };
    
    reader.readAsText(file);
}

document.getElementById('editJson').addEventListener('click', editJsonData);

function editJsonData() {
    if (!fileContent) {
        console.error('No file content to edit.');
        return;
    }
    
    // Parse JSON data
    let jsonData = JSON.parse(fileContent);
    
    // Edit JSON data
    jsonData.age = 31; // Update the age, for example
    
    // Convert JSON object to string
    let updatedData = JSON.stringify(jsonData, null, 2);
    
    // Display the updated JSON data
    document.getElementById('output').textContent = updatedData;
    
    // Create a downloadable link for the updated JSON file
    const blob = new Blob([updatedData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'updated_data.json';
    a.textContent = 'Download Updated JSON File';
    
    document.body.appendChild(a);
}
