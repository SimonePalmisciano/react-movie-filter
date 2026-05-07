import { useState, useEffect } from "react";
import './AppProva.css'

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

function AppProva() {
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
        <div className="app">
            <header className="app-header">
                <div className="brand">
                    <span className="brand-mark">🎬</span>
                    <span className="brand-name">MyMovieHub</span>
                </div>
                <nav className="nav-links">
                    <button className="nav-link active">Film</button>
                    <button className="nav-link">Serie</button>
                    <button className="nav-link">Preferiti</button>
                </nav>
            </header>

            <section className="hero">
                <div className="hero-content">
                    <h1 className="hero-title">Scegli il tuo film perfetto</h1>
                    <p className="hero-subtitle">
                        Filtra per titolo, scopri nuovi generi e aggiungi i tuoi film preferiti
                        alla collezione.
                    </p>
                    <div className="hero-search">
                        <input
                            type="text"
                            placeholder="Cerca per titolo..."
                            value={searchInput}
                            onChange={(event) => setSearchInput(event.target.value)}
                        />
                    </div>
                </div>
            </section>

            <main className="app-main">
                {/* Colonna sinistra: filtri generi + lista film */}
                <section className="content-left">
                    <div className="filters">
                        <h2 className="section-title">Filtra per genere</h2>
                        <div className="genre-pills">
                            <button
                                className={`pill ${searchGenre === "" ? "pill-active" : ""}`}
                                onClick={() => setSearchGenre("")}
                            >
                                Tutti
                            </button>
                            {uniqueGenres.map((genre, index) => (
                                <button
                                    key={index}
                                    className={`pill ${searchGenre === genre ? "pill-active" : ""}`}
                                    onClick={() => setSearchGenre(genre)}
                                >
                                    {genre}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="movie-list-section">
                        <div className="section-header">
                            <h2 className="section-title">Catalogo film</h2>
                            <span className="badge-count">{allFilmsFiltered.length} risultati</span>
                        </div>
                        <ul className="movie-grid">
                            {allFilmsFiltered.map((film, index) => (
                                <li key={index} className="movie-card">
                                    <div className="movie-poster-placeholder">
                                        <span className="movie-poster-title">
                                            {film.title.charAt(0)}
                                        </span>
                                    </div>
                                    <div className="movie-info">
                                        <h3 className="movie-title">{film.title}</h3>
                                        <span className="movie-genre">{film.genre}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* Colonna destra: aggiungi film */}
                <aside className="content-right">
                    <h2 className="section-title">Aggiungi un nuovo film</h2>
                    <form className="add-movie-form" onSubmit={submitHandler}>
                        <div className="form-field">
                            <label htmlFor="add-film-input">Titolo del film</label>
                            <input
                                id="add-film-input"
                                name="addFilm"
                                value={addAFilm}
                                onChange={(event) => setAddAFilm(event.target.value)}
                                placeholder="Es. Inception"
                            />
                        </div>

                        <div className="form-field">
                            <label htmlFor="add-select-genre">Genere</label>
                            <select
                                id="add-select-genre"
                                name="films"
                                value={addGenre}
                                onChange={(event) => setAddGenre(event.target.value)}
                            >
                                <option value="">Seleziona un genere</option>
                                {uniqueGenres.map((genre, index) => (
                                    <option key={index} value={genre}>
                                        {genre}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <button className="primary-btn" type="submit">
                            Aggiungi alla lista
                        </button>
                    </form>

                    <div className="hint-box">
                        <h3>Consiglio</h3>
                        <p>
                            Usa un titolo chiaro e seleziona un genere esistente
                            per mantenere il catalogo ordinato. Puoi comunque filtrare
                            per titolo in qualsiasi momento.
                        </p>
                    </div>
                </aside>
            </main>
        </div>
    );
}

export default AppProva;