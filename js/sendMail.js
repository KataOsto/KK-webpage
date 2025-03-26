document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const subject = encodeURIComponent(`Wiadomość od ${name} ${surname}`);
    const body = encodeURIComponent(
        `Imię: ${name}\nNazwisko: ${surname}\nEmail: ${email}\n\nWiadomość:\n${message}`
    );

    window.location.href = `mailto:recipient@example.com?subject=${subject}&body=${body}`;
});
