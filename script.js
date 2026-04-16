async function verifyCertificate() {

    const input = document.getElementById("cert-number").value.trim();

    if (!input) {
        alert("Enter document number");
        return;
    }

    const res = await fetch("data.json");
    const data = await res.json();

    const found = data.find(item => item.id === input);

    if (found) {

        document.getElementById("search-section").classList.add("hidden");
        document.getElementById("result-section").classList.remove("hidden");

        document.getElementById("result-data").innerHTML = `
            <div class="data-item"><span class="label">Deliverable Id :</span>${found.id}</div>
            <div class="data-item"><span class="label">Published on :</span>${found.published}</div>
            <div class="data-item"><span class="label">QR Code Status :</span><span style="color:green;">Validated</span></div>
            <div class="data-item"><span class="label">NAME :</span>${found.name}</div>
            <div class="data-item"><span class="label">ID :</span>${found.user_id}</div>
            <div class="data-item"><span class="label">ISSUED ON :</span>${found.published}</div>
            <div class="data-item"><span class="label">VALID UNTIL :</span>${found.valid_until}</div>
            <div class="data-item"><span class="label">TYPE :</span>${found.type}</div>
            <div class="data-item"><span class="label">MODEL :</span>${found.model}</div>
            <div class="data-item"><span class="label">COMPANY :</span>${found.company}</div>
            <div class="data-item"><span class="label">TRAINING LOCATION :</span>${found.location}</div>
            <div class="data-item"><span class="label">TRAINER :</span>${found.trainer}</div>
        `;

    } else {
        alert("Certificate not found");
    }
}
