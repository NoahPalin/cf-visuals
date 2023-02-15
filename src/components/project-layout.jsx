import '../styles/project-layout.css'
import liam1 from './images/photoshoots/liam-photoshoot/DSC_0044.jpg';
import liam2 from './images/photoshoots/liam-photoshoot/DSC_0052.jpg';
import liam3 from './images/photoshoots/liam-photoshoot/DSC_0080.jpg';
import liam4 from './images/photoshoots/liam-photoshoot/DSC_0170.jpg';
import liam5 from './images/photoshoots/liam-photoshoot/DSC_0200.jpg';

function ProjectLayout() {

  return (
    <>
      <div className='grid-container'>
        <div className='grid-item grid-item-1'>
          <img src={liam1} alt='Liam' />
        </div>
        <div className='grid-item grid-item-2'>
          <img src={liam2} alt='Liam' />
        </div>
        <div className='grid-item grid-item-3'>
          <img src={liam3} alt='Liam' />
        </div>
        <div className='grid-item grid-item-4'>
          <img src={liam4} alt='Liam' />
        </div>
        <div className='grid-item grid-item-5'>
          <img src={liam5} alt='Liam' />
        </div>
      </div>
    </>
  )
}

export default ProjectLayout;
