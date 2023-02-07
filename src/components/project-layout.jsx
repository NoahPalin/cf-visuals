import '../styles/project-layout.css'
import liam1 from './images/home-images/DSC_0044.jpg';
import liam2 from './images/home-images/DSC_0052.jpg';
import liam3 from './images/home-images/DSC_0080.jpg';


function ProjectLayout() {

  return (
    <div className='grid-container'>
      <div className='grid-item grid-item-1'>
        image1
        <img src={liam1}></img>
      </div>
      <div className='grid-item grid-item-2'>
        paragraph1
      </div>
      <div className='grid-item grid-item-3'>
        image2
        <img src={liam2}></img>
      </div>
      <div className='grid-item grid-item-4'>
        paragraph2
      </div>
      <div className='grid-item grid-item-5'>
        image3
        <img src={liam3}></img>
      </div>
      <div className='grid-item grid-item-6'>
        paragraph3
      </div>
    </div>
  )
}

export default ProjectLayout;
