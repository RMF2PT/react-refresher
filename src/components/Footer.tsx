type FooterProps = {
  length: number;
};

const Footer = ({ length }: FooterProps) => {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <footer>
      <p>{`${length} Item${length === 1 ? "" : "s"}`}</p>
      <p>Copyright &copy; {year}</p>
    </footer>
  );
};
export default Footer;
