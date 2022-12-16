function Header () {
  return (
    <header>
      <h1><a id="header-title" href="/">Meike Hankewicz</a></h1>
      
      <img style={{ marginTop: '15px', borderRadius: '50%'}}  src="./images/profile.jpg" alt="Logo" />

      <br/><br/>

      <p>Hi! My name is Meike. I'm a web developer from Germany. Here you can see a few of my latest projects.</p>
      <p>If you want to connect, find me on the following platforms:</p>

      <p className="view">
        <a href="https://www.linkedin.com/in/meike-h/" rel="noreferrer" target="_blank">
          LinkedIn
        </a>
      </p>
      <p className="view">
        <a href="https://github.com/mhanki"  rel="noreferrer" target="_blank">
          GitHub
        </a>
      </p>
    </header>
  )
};

export default Header;