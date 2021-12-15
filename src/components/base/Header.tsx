
interface IHeader {
  title: string;
}

function Header({ title }: IHeader) {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
}

export default Header;
