import { Link } from "react-router-dom";

interface IHeader {
  title: string;
}

function Header({ title }: IHeader) {
  return (
    <header>
      <h1><Link to='/'>{title}</Link></h1>
    </header>
  );
}

export default Header;
