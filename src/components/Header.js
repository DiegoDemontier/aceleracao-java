export default function Header({ open }) {
  return (
    <header className="header">
      <h1>Scraper</h1>
      <h3>Aceleração Java</h3>
      {open && <span className="notFound">Usuário não encontrado</span>}
    </header>
  );
}