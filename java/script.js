// Seleksi elemen burger menu dan navbar
const burgerMenu = document.getElementById('hamburger-menu');
const navbarNav = document.querySelector('.navbar-nav');

// Tambahkan event listener untuk klik pada burger menu
burgerMenu.addEventListener('click', () => {
    navbarNav.classList.toggle('nav-active'); 
});


document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const submittedMessage = `Nama: ${name}\nEmail: ${email}\nPesan: ${message}`;
    document.getElementById('submittedMessage').value = submittedMessage;
    
    // Set a timeout to refresh the page after 5 seconds
    setTimeout(() => {
        window.location.reload();
    }, 5000);
});
