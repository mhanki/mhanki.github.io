import ProjectPreview, { Props } from "./ProjectPreview";

const projects: Props[] = [
  {
    title: "Selenite (Desktop App)",
    url: "/#",
    img: "./images/selenite.png"
  },
  {
    title: "Treasure Trove (API)",
    url: "/#",
    img: "./images/treasure-api.png"
  },
  {
    title: "Zen Focus (Web App)",
    url: "/#/zen-focus",
    img: "./images/zen-focus.png"
  },
  {
    title: "Isue Tracker (Web App)",
    url: "/#",
    img: "./images/issue-tracker.jpg"
  },
  {
    title: "Clean React (CLI)",
    url: "/#",
    img: "./images/clean-react.png"
  },
  {
    title: "LVL UP (API)",
    url: "/#",
    img: "./images/lvlup-api.png"
  }
]

function Portfolio() {
  return (
    <section>
      <h1>Portfolio</h1>
      <hr></hr>
      {projects.map(({title, url, img}) => 
        <ProjectPreview title={title} url={url} img={img} />)}
    </section>
  )
};

export default Portfolio;