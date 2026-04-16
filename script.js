async function verifyCertificate() {
    const userInput = document.getElementById('cert-number').value.trim();

    if (!userInput) {
        alert("Please enter a document number.");
        return;
    }

    try {
        const response = await fetch('./data.json');

        if (!response.ok) {
            throw new Error("File not found");
        }

        const data = await response.json();

        const found = data.find(item => item.id === userInput);

        if (found) {
            document.getElementById('search-section').classList.add('hidden');
            document.getElementById('result-section').classList.remove('hidden');

            document.getElementById('result-data').innerHTML = `
                <div class="data-item"><span class="data-label">Deliverable Id:</span><span>${found.id}</span></div>
                <div class="data-item"><span class="data-label">Published:</span><span>${found.published}</span></div>
                <div class="data-item"><span class="data-label">Status:</span><span style="color:green;font-weight:bold;">Validated</span></div>
                <div class="data-item"><span class="data-label">Name:</span><span>${found.name}</span></div>
                <div class="data-item"><span class="data-label">ID:</span><span>${found.user_id}</span></div>
                <div class="data-item"><span class="data-label">Valid Until:</span><span>${found.valid_until}</span></div>
                <div class="data-item"><span class="data-label">Type:</span><span>${found.type}</span></div>
            `;
        } else {
            alert("Certificate not found!");
        }

    } catch (error) {
        alert("Error loading data.json");
        console.error(error);
    }
}

// ENTER press support
document.getElementById("cert-number").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        verifyCertificate();
    }
});
