import React from 'react';

interface Props {
  title: string, 
  url: string, 
  img: string
}

function ProjectPreview({title, url, img}: Props) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="project-item">
      <h2><a href={url}>{title}</a></h2>
      <img className="preview-img" src={img} alt="" />
      <hr className="project-separator"/>
    </div>
  )
}

export default ProjectPreview;
export type { Props };