import { useState, useEffect } from "react";

import filmsList from "./data/filmList";

const allGenres = filmsList.map(film => {
  return film.genre;
});

const uniqueGenres = [...new Set(allGenres)];

function App() {
  const [searchInput, setSearchInput] = useState('');
  const [searchGenre, setSearchGenre] = useState('');
  const [allFilmsList, setAllFilmList] = useState(filmsList);
  const [allFilmsFiltered, setAllFilmsFiltered] = useState(allFilmsList);

  const [addAFilm, setAddAFilm] = useState('');
  const [addGenre, setAddGenre] = useState('');

  useEffect(() => {

    const filmsGenreFiltered = allFilmsList.filter(film => {
      return film.genre.toLowerCase().includes(searchGenre.toLowerCase())
        &&
        film.title.toLowerCase().includes(searchInput.toLowerCase());
    });

    setAllFilmsFiltered(filmsGenreFiltered);

  }, [searchInput, searchGenre, allFilmsList]);

  const submitHandler = (event) => {
    event.preventDefault();
    const newFilmsList = [...allFilmsList, { title: addAFilm, genre: addGenre }];
    setAllFilmList(newFilmsList);
    setAddAFilm('');
  };

  return (
    <div className="container">
      <header>
        <h1>Scegli il tuo film preferito</h1>
      </header>
      <main>
        <div className="container">
          <div className="row">
            <form className="col-4">

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

            <div className="lista col-8 d-flex flex-column align-items-center">
              <h3>Lista Film Tutti</h3>
              <ul className="lista-film">
                {allFilmsFiltered.map((film, index) => {
                  return (
                    <li key={index}>
                      <div className="card mb-3">
                        <div className="card-body">
                          <h5 className="card-title text-center">
                            {film.title}
                          </h5>
                          <hr />
                          <p className="card-text">
                            genere: {film.genre}
                          </p>
                        </div>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>

          <div>
            <form onSubmit={submitHandler}>
              <div className="mb-3">
                <label
                  htmlFor="add-film-input"
                  className="form-label"
                >
                  Inserisci un film che ti piace
                </label>
                <input
                  className="form-control"
                  id="add-film-input"
                  name="addFilm"
                  value={addAFilm}
                  onChange={(event) => setAddAFilm(event.target.value)}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="add-select-genre"
                >
                  Scegli il genere
                </label>
                <select
                  className="form-select"
                  aria-label="Default select"
                  name="films"
                  id="add-select-genre"
                  value={addGenre}
                  onChange={(event) => setAddGenre(event.target.value)}
                >
                  <option value="">scegli un genere</option>
                  {uniqueGenres.map((film, index) => {
                    return (
                      <option key={index} value={film}>{film}</option>
                    )
                  })}
                </select>
              </div>
              <button className="btn btn-primary">Aggiungi Film</button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
export default App;
