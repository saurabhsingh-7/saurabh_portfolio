import { Col } from "react-bootstrap";

export const ProjectCard = ({myProject}) => {
  console.log(myProject);
 const printbutton=()=>
            {
              console.log(myProject);
            }
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={myProject.imgUrl} alt="projectimage"/>
        <div className="proj-txtx">
          <h4>{myProject.descriptiontitle}</h4>
          <span>{myProject.description}</span>

          <button variant="primary" onClick={printbutton}>
          <a className="view-project-btn" href={myProject.hostedLink} target="_blank" >View Project</a> 
</button>

        </div>
      </div>
    </Col>
  )
}
