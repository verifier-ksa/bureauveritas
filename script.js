async function verifyCertificate() {

    const input = document.getElementById("cert-number").value.trim();

    if (!input) {
        alert("Enter document number");
        return;
    }

    try {
        const res = await fetch("data.json");
        const data = await res.json();

        const found = data.find(item => item.id === input);

        if (found) {

            document.getElementById("search-section").classList.add("hidden");
            document.getElementById("result-section").classList.remove("hidden");

            document.getElementById("result-data").innerHTML = `
                <div class="data-item"><span class="label">Deliverable Id :</span><span>${found.id}</span></div>
                <div class="data-item"><span class="label">Published on :</span><span>${found.published}</span></div>
                <div class="data-item"><span class="label">QR Code Status :</span><span style="color:green;">Validated</span></div>
                <div class="data-item"><span class="label">NAME :</span><span>${found.name}</span></div>
                <div class="data-item"><span class="label">ID :</span><span>${found.user_id}</span></div>
                <div class="data-item"><span class="label">ISSUED ON :</span><span>${found.published}</span></div>
                <div class="data-item"><span class="label">VALID UNTIL :</span><span>${found.valid_until}</span></div>
                <div class="data-item"><span class="label">TYPE :</span><span>${found.type}</span></div>
                <div class="data-item"><span class="label">MODEL :</span><span>${found.model}</span></div>
                <div class="data-item"><span class="label">COMPANY :</span><span>${found.company}</span></div>
                <div class="data-item"><span class="label">TRAINING LOCATION :</span><span>${found.location}</span></div>
                <div class="data-item"><span class="label">TRAINER :</span><span>${found.trainer}</span></div>
            `;

        } else {
            alert("Certificate not found");
        }

    } catch (e) {
        alert("Error loading data.json");
        console.log(e);
    }
}
