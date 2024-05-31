const Navbar = () => {
  return (
    <nav className="navbar flex justify-between">
      <h3>Logo</h3>
      <div className="flex gap-3">
        <a href="/">Home</a>
        <a href="/create">Create</a>
      </div>
    </nav>
  );
};

export default Navbar;
