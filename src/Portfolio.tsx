import ProjectPreview, { Props } from "./ProjectPreview";

const projects: Props[] = [
  {
    title: "Zen Focus",
    url: "/zen-focus",
    img: "./images/zen_focus.png"
  },
  {
    title: "Selenite",
    url: "/#",
    img: "./images/selenite.jpg"
  },
  {
    title: "Isue Tracker",
    url: "/#",
    img: "./images/issue-tracker.jpg"
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