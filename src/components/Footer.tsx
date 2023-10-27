const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <footer>
      <p>Copyright &copy; {year}</p>
    </footer>
  );
};
export default Footer;
