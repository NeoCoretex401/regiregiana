// function generateWhatsAppLink() {
//     const form = document.getElementById('contactForm');
//     const formData = new FormData(form);

//     var name = document.getElementById('name');
//     var email = document.getElementById('email');
//     var subject = document.getElementById('subject');
//     var message = document.getElementById('message');


//     // Generate WhatsApp Message
//     const messageNew = `Nama: ${name}\nEmail: ${email}\nSubjek: ${subject}\nPesan: ${message}`;

// Kirim nilai lewat url
function generateWhatsAppLink() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    // Hasilkan Pesan WhatsApp
    const messageNew = `Nama: ${name}\nEmail: ${email}\nSubjek: ${subject}\nPesan: ${message}`;

    // Nomor tujuan WhatsApp
    const phoneNumber = '6285718796800';

    // Hasilkan URL WhatsApp
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(messageNew)}`;

    // Buka WhatsApp di jendela atau tab baru
    window.open(whatsappUrl, '_blank');
}
