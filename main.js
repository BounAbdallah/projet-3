document.querySelector("#generer").addEventListener("click", () => {
    generer();
});

generer = () => {
    var quotes = {
        "-Ibn Arabi": [
            "L'homme supérieur est celui qui se fuit soi-même pour obtenir la compagnie de son Seigneur!",
            "La conscience a été donnée à l'homme pour transformer la tragédie de la vie en une comédie."
        ],
        "-Rûmi": [
            "Fais le bien et jette-le dans une rivière : un jour, il te sera rendu dans le désert."
        ],
        "-Claude Aveline": [
            "Fais que chaque jour de ta vie soit beau. Le moindre geste est un souvenir futur."
        ],

        "Olen Steinhauer": [
            "Le fait que demain soit un autre jour ne veut pas dire qu'hier n'a jamais eu lieu."
        ],
        //autres citations  ...
    };

    var authors = Object.keys(quotes);
    var author = authors[Math.floor(Math.random() * authors.length)];
    var randomQuoteIndex = Math.floor(Math.random() * quotes[author].length);
    var quote = quotes[author][randomQuoteIndex];
    document.querySelector("#quote").textContent = quote;
    document.querySelector("#author").textContent = author;
};
