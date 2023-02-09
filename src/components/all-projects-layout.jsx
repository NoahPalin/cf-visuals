import '../styles/all-projects-layout.css'
import liam1 from './images/photoshoots/liam-photoshoot/DSC_0044.jpg';
import liam2 from './images/photoshoots/liam-photoshoot/DSC_0052.jpg';
import liam3 from './images/photoshoots/liam-photoshoot/DSC_0080.jpg';
import liam4 from './images/photoshoots/liam-photoshoot/DSC_0170.jpg';
import liam5 from './images/photoshoots/liam-photoshoot/DSC_0200.jpg';


function AllProjectsLayout() {

  return (
    <>
      <div className='grid-container-main'>
        <img className='grid-item-main grid-item-1-main' src={liam1} alt='Liam' />
        <img className='grid-item-main grid-item-2-main' src={liam2} alt='Liam' />
        <img className='grid-item-main grid-item-3-main' src={liam3} alt='Liam' />
        <img className='grid-item-main grid-item-4-main' src={liam4} alt='Liam' />
        <img className='grid-item-main grid-item-5-main' src={liam5} alt='Liam' />

      </div>
    </>
  )
}

export default AllProjectsLayout;
