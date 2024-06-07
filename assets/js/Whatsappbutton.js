function openWhatsApp() {
    const phoneNumber = '919452226626'; // Replace with your phone number
    const message = 'Hello, I have a question!';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}
