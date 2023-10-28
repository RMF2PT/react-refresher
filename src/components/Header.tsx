type HeaderProps = {
  title?: string;
};

const Header = ({ title = "Default Title" }: HeaderProps) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};
export default Header;
