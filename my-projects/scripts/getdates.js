/ Get the current year for the footer
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Get the last modified date for the footer
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;
