document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche l'envoi normal du formulaire

    // Récupération des valeurs
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;

    // Affichage du message de bienvenue
    document.getElementById('message').innerHTML = `Bienvenue, ${username}! Votre compte a été créé avec succès.`;
    
    // Réinitialisation du formulaire
    this.reset();
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;

    // Affichage du message de bienvenue
    document.getElementById('welcomeMessage').innerHTML = `Bienvenue de retour ! Vous êtes connecté avec ${email}.`;

    // Réinitialisation du formulaire
    this.reset();
});
