var ip = '';
var webcams = [];
var baseUrls = [];

window.onload = function() {
    myFunction();
};

function myFunction() {
    ip = prompt("請輸入固定IP位置: ");
    if (ip != null) {
        document.getElementById("staticIP").src = `http://${ip}`;
        document.getElementById("staticIP").onload = loadWebcams;
    }else{
        alert("請輸入有效IP位置");
    }
}     

const container = document.getElementById('image-row');

function loadWebcams() {
    container.innerHTML = ''; // Clear the container
    baseUrls = []; // Reset baseUrls on each load

    // Loop to create image elements
    for (let i = 0; i < 6; i++) {
        // Create a column div
        const colDiv = document.createElement('div');
        colDiv.className = 'col-lg-6 col-xl-4';

        // Create an img element
        const img = document.createElement('img');
        img.className = 'webcamImg w-100 mb-1 border shadow';
        img.src = `http://${ip}/cgi-bin/web_jpg.cgi?ch=${i}`;
        baseUrls.push(img.src); // Store the base URL for refreshing

        // Create a paragraph for the channel label
        const p = document.createElement('p');
        p.className = 'border p-1 text-center';
        p.textContent = `ch${i + 1}`; // ch1, ch2, ..., ch6

        // Append img and p to colDiv
        colDiv.appendChild(img);
        colDiv.appendChild(p);

        // Append colDiv to the container
        container.appendChild(colDiv);
    }

    // Once webcams are loaded, populate the webcams array
    webcams = Array.from(document.querySelectorAll('.webcamImg'));

    // Start refreshing webcams only after they are loaded
    setInterval(refreshWebcams, 500);
}

function refreshWebcams() {
    const timestamp = new Date().getTime();
    webcams.forEach((webcam, index) => {
        // Append a timestamp to prevent caching for each image
        webcam.src = `${baseUrls[index]}&_=${timestamp}`;
    });
}
