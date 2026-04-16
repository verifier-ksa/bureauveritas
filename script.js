async function verifyCertificate() {

    const input = document.getElementById("cert-number").value.trim();

    if (!input) {
        alert("Enter certificate number");
        return;
    }

    try {
        const res = await fetch('./data.json');
        const data = await res.json();

        const found = data.find(item => item.id === input);

        if (found) {

            document.getElementById("search-section").classList.add("hidden");
            document.getElementById("result-section").classList.remove("hidden");

            document.getElementById("result-data").innerHTML = `
                <div class="data-item"><b>Deliverable Id :</b> ${found.id}</div>
                <div class="data-item"><b>Published :</b> ${found.published}</div>
                <div class="data-item"><b>Status :</b> <span style="color:green">Validated</span></div>
                <div class="data-item"><b>Name :</b> ${found.name}</div>
                <div class="data-item"><b>ID :</b> ${found.user_id}</div>
                <div class="data-item"><b>Valid Until :</b> ${found.valid_until}</div>
                <div class="data-item"><b>Type :</b> ${found.type}</div>
            `;

        } else {
            alert("Certificate not found");
        }

    } catch (e) {
        alert("Error loading data.json");
    }
}
