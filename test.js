import filmsList from "./src/data/filmList.js";

/*
const genres = filmsList.reduce((scatolina, current) => {
    const { genre } = current;

    if (!scatolina.includes(genre)) {
        scatolina.push(genre);
    }

    return scatolina;
}, []);
*/

const genres = new Set();

filmsList.forEach(film => {
    genres.add(film.genre);
});

console.log([...genres]);
