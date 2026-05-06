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
]

function App() {
  return (
    <div className="container">
      <header>
        <h1>Scegli il tuo film preferito</h1>
      </header>
      <main>
        <div>
          <form>
            <div className="mb-3">
              <label htmlFor="search" className="form-label">Cerca il Film</label>
              <input type="text" id="search" className="form-control" />
            </div>
            <div className="mb-3">
              <label htmlFor="">Scegli il genere</label>
              <select class="form-select" aria-label="Default select" name="films" id="select-genre">
                {filmsList.map((film, index) => {
                  return (
                    <option key={index} value={film.genre}>{film.genre}</option>
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
