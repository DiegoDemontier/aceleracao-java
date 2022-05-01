export default function Header({ activateError }) {
  return (
    <header className="header">
      <h1>Scraper</h1>
      <h3>Aceleração Java</h3>
      {activateError && <span className="notFound">Usuário não encontrado</span>}
    </header>
  );
}