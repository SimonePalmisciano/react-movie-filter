import { useState, useEffect } from "react";

const filmsList = [
  { title: 'Inception', genre: 'Fantascienza' },
  { title: 'Il Padrino', genre: 'Thriller' },
  { title: 'Titanic', genre: 'Romantico' },
  { title: 'Batman', genre: 'Azione' },
  { title: 'Interstellar', genre: 'Fantascienza' },
  { title: 'Pulp Fiction', genre: 'Thriller' },
  { title: 'The Shawshank Redemption', genre: 'Thriller' },
  { title: 'The Godfather Part II', genre: 'Thriller' },
  { title: 'The Dark Knight', genre: 'Azione' },
  { title: 'Schindler\'s List', genre: 'Dramma' },
  { title: 'Avatar', genre: 'Fantascienza' },
  { title: 'Avengers: Endgame', genre: 'Azione' },
  { title: 'The Matrix', genre: 'Fantascienza' },
  { title: 'Forrest Gump', genre: 'Commedia' },
  { title: 'Fight Club', genre: 'Thriller' },
  { title: 'The Lord of the Rings: The Fellowship of the Ring', genre: 'Fantasia' },
  { title: 'Star Wars: A New Hope', genre: 'Fantascienza' },
  { title: 'The Silence of the Lambs', genre: 'Thriller' },
  { title: 'Saving Private Ryan', genre: 'Azione' },
  { title: 'Gladiator', genre: 'Azione' },
  { title: 'The Lion King', genre: 'Animazione' },
  { title: 'Jurassic Park', genre: 'Fantascienza' },
  { title: 'Terminator 2: Judgment Day', genre: 'Fantascienza' },
  { title: 'The Departed', genre: 'Thriller' },
  { title: 'Braveheart', genre: 'Azione' },
  { title: 'The Prestige', genre: 'Thriller' },
  { title: 'Shutter Island', genre: 'Thriller' },
  { title: 'The Social Network', genre: 'Dramma' },
  { title: 'Black Swan', genre: 'Thriller' },
  { title: 'The King\'s Speech', genre: 'Dramma' },
  { title: 'Toy Story', genre: 'Animazione' },
];

const allGenres = filmsList.map(film => {
  return film.genre;
});

const uniqueGenres = [...new Set(allGenres)];

const allTitle = filmsList.map(film => {
  return film.title;
});

function App() {
  const [searchInput, setSearchInput] = useState('');
  const [searchGenre, setSearchGenre] = useState('');
  const [filmsTitleList, setFilmsTitleList] = useState(allTitle);
  const [filmsTitleFiltered, setFilmsTitleFiltered] = useState(filmsTitleList);
  const [filmsAllGenre, setFilmsAllGenre] = useState(allGenres);
  const [filmsAllGenreFilteres, setFilmsAllGenreFilteres] = useState(filmsAllGenre);

  useEffect(() => {
    console.log('sei riuscito a cambiare : ' + searchInput + ' ' + searchGenre);


    
  }, [searchInput, searchGenre])

  return (
    <div className="container">
      <header>
        <h1>Scegli il tuo film preferito</h1>
      </header>
      <main>
        <div>
          <form>

            <div className="mb-3">
              <label
                htmlFor="search-input"
                className="form-label"
              >
                Cerca il Film
              </label>
              <input
                type="text"
                id="search-input"
                className="form-control"
                onChange={(event) => setSearchInput(event.target.value)}
                name="search"
                value={searchInput}
              />
            </div>

            <div className="mb-3">
              <label
                htmlFor="select-genre"
              >
                Scegli il genere
              </label>
              <select
                className="form-select"
                aria-label="Default select"
                name="films"
                id="select-genre"
                value={searchGenre}
                onChange={(event) => setSearchGenre(event.target.value)}
              >
                <option value="">generi</option>
                {uniqueGenres.map((film, index) => {
                  return (
                    <option key={index} value={film}>{film}</option>
                  )
                })}
              </select>

            </div>
          </form>

        </div>
        <div className="lista">
          <h3>Lista Film Tutti</h3>
          <ul className="lista-film">
            {filmsList.map((film, index) => {
              return (
                <li key={index}>{film.title}</li>
              )
            })}
          </ul>
        </div>
      </main>
    </div>
  );
}
export default App;
