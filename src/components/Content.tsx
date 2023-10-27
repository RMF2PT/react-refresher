const Content = () => {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <main>
      <p>Content</p>
      <button onClick={handleClick}>Click me!</button>
    </main>
  );
};
export default Content;
