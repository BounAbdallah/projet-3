document.querySelector("#generer").addEventListener("click", () => {
    generer();
  });
  
  generer = () => {
    var quotes = {
      "- Oumar Ibn Khattab": '"Se poser les bonnes questions est la moitier de la science Bien gérer son argent est la moitié de la richesse Et se taire est la moitié de la sagesse."',
      "- Ali Ibn Abu Talib": '"Si tu crains une chose et qu\'elle t\'arrive, l\'intensité de la crainte que tu en as eu est pire que ce que tu as craint."',
      "- Imam Ahmad Ibn Hanbal": '"Certes il y a des gens que l\'on ne voit qu\'une fois par an, mais on ne doute pas de leurs amour contrairement à certains que l\'on voit tous le jours."',
      "- Imam Malick": '"He who practices Tasawwuf without learning Sacred Law corrupts his faith, while he who learns Sacred Law without practicing Tasawwuf corrupts himself, Only he who combines the two proves true."',
      "- Imam Al-Shafi'i": '"Mon cœur est à l\'aise en sachant que ce qui m\'était destiné ne me manquera jamais et que ce qui me manque ne m\'a jamais été destiné."',
      "- Le Coran": '"Ne détestez rien car ce que vous détestez pourrait faire votre bonheur."',
      "- Ibn al-Qayyim": '"Perdre le temps est, pour toi, pire que la mort parce que perdre le temps te coupe de ton Seigneur et de l\'Autre monde alors que la mort te coupe de ce bas monde et de ses habitants."',
      "- Le prophète Muhammad (صل الله عليه وسلم) ": '"La vraie richesse d\'un homme en ce monde se mesure au bien qu\'il a fait autour de lui."',
      "-  Ibn'Arabî": '"C\'est par le Nom de Dieu, le Tout-Miséricordieux, le Très-Miséricordieux que je commence, et par Sa Lumière que je me dirige. Et \"il n\'y a de force et de puissance que par Dieu, le Puissant, le Sage.\" Dis : \"Louange à Dieu pour ce qu\'Il a inspiré, et parce qu\'Il nous a enseigné ce que nous ne savions pas, et la faveur de Dieu pour nous fut immense !\" Et que Dieu prie sur le Seigneur le plus noble, à qui furent donnés les sommes des Paroles (jawâmi\' al-kalim) dans la station suprême (al-mawqif al-\'azham), et qu\'Il lui accorde le salut !"',
      "- Ibn Majah": '"Abandonnez le désir de ce monde, et Dieu vous aimera. Abandonnez le désir des biens des autres et les gens vous aimeron."',
      "- ❤️😇❤️ ": '":Merci on se dis à la prochaine IN CHA ALLAH 🤲🏽👋🏽."',
      
    };
  
    var authors = Object.keys(quotes);
    var author = authors[Math.floor(Math.random() * authors.length)];
    var quote = quotes[author]
    document.querySelector("#quote").textContent = quote;
    document.querySelector("#author").textContent = author;
  
  }