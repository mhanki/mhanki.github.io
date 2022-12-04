function Project() {
  return (
    <section>

      <h1>Zen Focus</h1>
        <p>
          <a href="https://zen-focus.netlify.app/" rel="noreferrer" target="_blank">
            Live Demo
          </a>
          <a style={{ marginLeft: '15px' }} href="https://github.com/Zen-Focus/Zen-Focus-Web"  rel="noreferrer" target="_blank">
            Repository
          </a>
        </p>
        <hr/>
        <p>
          <strong>A Minimalistic Pomodoro Timer with Breathing Meditation Support and Soundscapes</strong>
        </p>
      
        <p>Zen Focus is a pomodoro timer created with the intention of promoting concentration and flow. It offers a small selection of soundscapes to stay focused during work, as well as a breathing meditation feature that can help lower stress and anxiety and keep you in the present moment.</p>

        <h3>Pomodoro Timer</h3>
        
        <p>
          The interval and break lengths of the pomodoro timer can be freely adjusted in the settings. If you change the time of the currently running interval or break, the change will automatically apply to the next iteration as to not interrupt your original work flow. If you want the changes to take effect immediately, simply click the reset button in the app's navigation bar. This will start the current interval over in its new length.
        </p>
        <p>
          Zen Focus is designed to be as unintrusive as possible to not interrupt your flow or meditation while still providing structure. For this reason, the app will indicate the end of any interval or break with a chime sound, but only start running the next interval or break once you confirm you are ready to move on.
        </p>
      
        <p>If you want to skip to the next interval or break, you can find a skip button in the bottom right corner of the screen.
        </p>
      
      <img src="/images/zen_focus.png" alt=""/>
      
      <br/><br/>

      <h3>Meditation</h3>
      
      <p>
        For every break, the timer will prompt you with the choice of taking a few minutes for a breathing meditation. The meditation is visually guided, inviting you to adjust your breathing to the expansion and conctraction of a circle on screen. The length of each inhalation, exhalation, and breath hold can be adjusted in the settings. The app will soon offer a selection of default options to choose from, until then you might want to experiment with different breathing techniques. Here are some examples to get you started:

        <ul>
          <li><b>Box Breathing</b>: Inhale 4s, hold 4s, exhale 4s, hold 4s</li>
          <li><b>Triangle Breathing</b>: Inhale 4s, hold 4s, exhale 4s</li>
          <li><b>4-7-8 Method</b>: Inhale 4s, hold 7s, exhale 8s</li>
        </ul>
      </p>
      
      <p>
        Of course the meditation option is also accessible through the navigation bar whenever you need it. 
      </p>
        
      <br/>
      
      <h3>Soundscapes</h3>
      
      <p>
      Another feature Zen Focus offers (that will still be expanded) are soundscapes. You can layer each sound on top of each other and adjust the individual volume to create a unique ambient that is tailored to your needs and preferences.
      </p>
        
    </section>
  );
}

export default Project;