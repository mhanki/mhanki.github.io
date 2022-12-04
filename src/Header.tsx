function Header () {
  return (
    <header>
      <h1><a id="header-title" href="/">Meike Hankewicz</a></h1>
      
      <img style={{ marginTop: '15px', borderRadius: '50%'}}  src="./images/logo.png" alt="Logo" />

      <br/><br/>

      <p>Hi! My name is Meike. I'm a web developer from Germany. Here you can see a few of my latest projects.</p>
      <p>If you want to connect with me, find me on LinkedIn or GitHub:</p>

      <p className="view">
        <a href="https://www.linkedin.com/in/meike-h/" rel="noreferrer" target="_blank">
          View My LinkedIn Profile
        </a>
      </p>
      <p className="view">
        <a href="https://github.com/mhanki"  rel="noreferrer" target="_blank">
          View My GitHub Profile
        </a>
      </p>
    </header>
  )
};

export default Header;