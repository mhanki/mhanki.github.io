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
            <Link url="https://github.com/mhanki/Clean-React">
              Repository
            </Link>
          </span>
        </p>
        <hr/>
        <p>
          <strong>A CLI tool to clean out boilerplate code created by Create React App</strong>
        </p>
      
        <p>Clean React is a CLI tool that removes and modifies some of the boilerplate files that are generated when initiating a new project with Create React App.</p>

        <img src="/images/clean-react.png" alt="App screenshot" height="250px" width="100%" style={{ objectFit: "cover" }} />

        <br/><br/>

        <h3>How it works</h3>

        <p>The tool is designed to provide a clean and minimalistic codebase to your new project. It will first check to make sure you actually are in a Create React App project, and then proceed to delete and overwrite some of the files.</p>

        <p>Clean React supports both default Create React App templates (JavaScript and TypeScript). If you already modified any of the template files before running Clean React, the app will give a warning and provide the option to keep those changes.</p>

        <img src="/images/clean.gif" alt="App screenshot" />

        <br/><br/>

        <p>For more details, visit the <Link url="https://github.com/mhanki/Clean-React" >repository</Link></p>
    </section>
  );
}

export default CleanReact;