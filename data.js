// Données partagées par les 3 pages — modifie-les ici une seule fois.
const DONNEES = {
  album: {
    titre: "Et si j'échoue ??",
    artiste: "Bouss",
    sortie: "30 mai 2025",
    titres: 45,
    duree: "1 h 11",
    label: "Le Grand / Level Up Music",
    deezer: "https://www.deezer.com/"   // remplace par le vrai lien
  },
  singles: [
    { titre: "Pas de rôle", date: "Single · 23 octobre 2026", image: "" },
    { titre: "Différent",   date: "Single · 16 octobre 2026", image: "" },
    { titre: "Merci",       date: "Single · 2 octobre 2026",  image: "" },
    { titre: "L'humain",    date: "Single · 3 juillet 2026",  image: "" }
  ],
  tracklist: [
    "Nowhere", "Bon débarras", "J'béou", "La course", "Comme si ça va",
    "Biff pas d'love", "Juste un soir", "Quasiment tout", "Tout mélanger",
    "Mon amour", "Le dehors", "Masque", "Potion",
    "Los santos", "Printemps", "Et si j'échoue ?", "Chaud", "Félicité",
    "Encore", "Dans ma bulle", "Un vœu", "Pansement", "Laisse tomber",
    "Cote à la hausse", "J'fuis"
  ]
};

// Affiche les derniers singles (présent sur les pages Artiste et Tracklist)
const zoneSingles = document.getElementById("singles");
if (zoneSingles) {
  zoneSingles.innerHTML = DONNEES.singles.map(s => `
    <article class="single">
      <div class="pochette">
        ${s.image ? `<img src="${s.image}" alt="Pochette de ${s.titre}">` : "Pochette"}
      </div>
      <h3>${s.titre}</h3>
      <p>${s.date}</p>
    </article>
  `).join("");
}

// Affiche la tracklist sur 2 colonnes (page Tracklist)
const zoneTracks = document.getElementById("tracklist");
if (zoneTracks) {
  const liste = DONNEES.tracklist;
  const moitie = Math.ceil(liste.length / 2);
  const colonne = (debut, fin) => `
    <ol>
      ${liste.slice(debut, fin).map((t, i) => `
        <li><span class="num">${String(debut + i + 1).padStart(2, "0")}</span>${t}</li>
      `).join("")}
    </ol>`;
  zoneTracks.innerHTML = colonne(0, moitie) + colonne(moitie, liste.length);
}
