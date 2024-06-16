document.getElementById('waForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const phoneNumber = document.getElementById('phoneNumber').value.trim();

    // Validate the phone number format
    const phoneRegex = /^08\d{8,11}$/;
    if (!phoneRegex.test(phoneNumber)) {
        alert('Please enter a valid Indonesian phone number starting with 08');
        return;
    }

    // Format the phone number for WhatsApp API (convert to 62 format)
    const waPhoneNumber = '62' + phoneNumber.slice(1);

    // Redirect to WhatsApp API URL
    const waUrl = `https://api.whatsapp.com/send/?phone=${encodeURIComponent(waPhoneNumber)}&text&type=phone_number&app_absent=0`;
    window.location.href = waUrl;
});