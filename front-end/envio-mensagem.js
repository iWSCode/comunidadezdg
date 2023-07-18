checkoutForm.addEventListener('submit', function (e) {
    e.preventDefault();
    let phoneNumber = document.getElementById('phoneNumber').value;
    let caption = document.getElementById('caption').value;
    let fileUrl = document.getElementById('fileUrl').value;
    if (fileUrl || caption) {
        sendMedia(phoneNumber, caption, fileUrl);
    } else {
        sendMessage(phoneNumber, caption);
    }
});

function sendMedia(phoneNumber, caption, fileUrl) {
    fetch('http://localhost:8000/zdg-media', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            number: phoneNumber,
            caption: caption,
            file: fileUrl,
        }),
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch((error) => {
            console.error('Error:', error);
        });
}
