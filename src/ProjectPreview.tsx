interface Props {
  title: string, 
  url: string, 
  img: string
}

function ProjectPreview({title, url, img}: Props) {
  return (
    <div className="project-item">
      <h2><a href={url}>{title}</a></h2>
      <img src={img} alt="" />
      <hr className="project-separator"/>
    </div>
  )
}

export default ProjectPreview;
export type { Props };