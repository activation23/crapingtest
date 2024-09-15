// server.js
const puppeteer = require('puppeteer');

// Fonction pour scraper et afficher le contenu de la page
async function fetchPageContent() {
    // Lancement du navigateur en mode headless (sans interface)
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    // Aller sur l'URL
    await page.goto('https://example.com', { waitUntil: 'networkidle2' });

    // Récupérer le contenu de la page
    const content = await page.content();

    // Afficher le contenu dans le shell
    console.log("Contenu de la page :\n");
    console.log(content);

    // Fermer le navigateur
    await browser.close();
}

// Appeler la fonction
fetchPageContent();
