import React from 'react';

interface LinkProps { 
  url: string,
  children: React.ReactNode,
}

const Link = ({url, children}: LinkProps) => (
  <a href={url} target="_blank" rel="noreferrer">{children}</a>
)

const CleanReact: React.FC = () => {
  return (
    <section>
      <h1>Clean React</h1>
        <p>
          <Link url="https://www.npmjs.com/package/@mhanki/clean-react">
            npm
          </Link>
          <span style={{ marginLeft: '15px' }}>
            <Link url="https://github.com/Selenite-Player/Selenite">
              Repository
            </Link>
          </span>
        </p>
        <hr/>
        <p>
          <strong>A CLI tool to clean out boilerplate code created by Create React App</strong>
        </p>
      
        <p>Clean React is a CLI tool that removes and modifies some of the boilerplate files and code that are being generated when initiating a new project with Create React App.</p>

        <img src="/images/clean-react.png" alt="App screenshot" height="250px" width="100%" style={{ objectFit: "cover" }} />

        <br/><br/>

        <h3>How it works</h3>

        <p>The tool is designed to provide a clean and minimalistic code base to your new project. It will first check to make sure you actually are in a Create React App project, and then proceed to delete and overwrite some of the files.</p>

        <p>Clean React supports both default Create React App templates (JavaScript and TypeScript). It tries to first determine the chosen file type for components (.js, .ts, .jsx, .tsx) and adjusts the rewrite process accordingly to keep the files in the same format.</p>

        <img src="/images/clean.gif" alt="App screenshot" />

        <br/><br/>

        <p>For more details, visit the <Link url="https://github.com/mhanki/Clean-React" >repository</Link></p>
    </section>
  );
}

export default CleanReact;