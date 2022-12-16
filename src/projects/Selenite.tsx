import React from 'react';

interface LinkProps { 
  url: string,
  children: React.ReactNode;
}

const Link = ({url, children}: LinkProps) => (
  <a href={url} target="_blank" rel="noreferrer">{children}</a>
)

const Selenite: React.FC = () => {
  return (
    <section>
      <h1>Selenite</h1>
        <p>
          <Link url="https://github.com/Selenite-Player/Selenite">
            Repository
          </Link>
        </p>
        <hr/>
        <p>
          <strong>A clean and minimalistic desktop player for Spotify</strong>
        </p>
      
        <p>Selenite is a simpler, more minimalistic alternative to navigate your Spotify playback. It supports song as well as podcast playback and allows you to save or remove songs from your "liked songs" library.</p>


        <img src="/images/selenite.png" alt="Selenite screenshot" />

        <br/><br/>

        <h3>How it works</h3>

        <p>
          To make this app available to everyone, it uses Spotify's free <Link url="https://developer.spotify.com/documentation/web-api/">Web API</Link>. This allows the app to run alongside Spotify in your browser or any of the official apps. It won't replace the actual application you are listening with, but adds an extra desktop interface to navigate the Spotify playback of whichever device or app you are using. 
        </p>

        <h3>Usage</h3>

        <p>Upon first launch, Selenite will open a Spotify login page and ask for permission to view your account data (for login and authentication), your activity on Spotify (to retrieve playback information), and to take actions in Spotify on your behalf (to add or remove liked songs). Selenite itself doesn't access any of your account data, it is only needed during the sign-in and authentication process.</p>

        <p>Once you are succsfully logged in, you will be redirected to the app. Open Spotify on a device of your choosing and start playing your music or podcasts. Selenite will pick up which device you are listening on and connect to it. Now you can minimize or let Spotify run in the background and navigate your playback via Selenite.</p>

        <p>You can play, pause and skip tracks, as well as enable or disable shuffle and repeat. You can also jump into the middle of a track using the progress bar. If you want to save or remove a song from your library, simply click the heart icon on the cover image.</p>
    </section>
  );
}

export default Selenite;