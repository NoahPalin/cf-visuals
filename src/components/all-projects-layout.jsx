import '../styles/all-projects-layout.css'
import liam1 from './images/photoshoots/liam-photoshoot/DSC_0044.jpg';
import liam2 from './images/photoshoots/liam-photoshoot/DSC_0052.jpg';
import liam3 from './images/photoshoots/liam-photoshoot/DSC_0080.jpg';
import liam4 from './images/photoshoots/liam-photoshoot/DSC_0170.jpg';
import liam5 from './images/photoshoots/liam-photoshoot/DSC_0200.jpg';
import liam6 from './images/photoshoots/liam-photoshoot/DSC_0598.jpg';
import liam7 from './images/photoshoots/liam-photoshoot/DSC_0622.jpg';
import liam8 from './images/photoshoots/liam-photoshoot/DSC_0635.jpg';
import liam9 from './images/photoshoots/liam-photoshoot/DSC_0350.jpg';



function AllProjectsLayout() {

  return (
    <>
      <div className='flex-container'>
        <div className='text-area'>
          <div className='page-title'>Portfolio</div>
          <div className='text-area-paragraph'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor id aliquet lectus proin nibh nisl condimentum id venenatis. Purus semper eget duis at tellus at urna condimentum. Pharetra massa massa ultricies mi quis. Euismod in pellentesque massa placerat duis ultricies lacus sed.
          </div>
        </div>
      </div>
      <div className='grid-container-main'>
        <img className='grid-item-main grid-item-1-main' src={liam1} alt='Liam' />
        <img className='grid-item-main grid-item-2-main' src={liam2} alt='Liam' />
        <img className='grid-item-main grid-item-3-main' src={liam3} alt='Liam' />
        <img className='grid-item-main grid-item-4-main' src={liam4} alt='Liam' />
        <img className='grid-item-main grid-item-5-main' src={liam5} alt='Liam' />
        <img className='grid-item-main grid-item-6-main' src={liam6} alt='Liam' />
        <img className='grid-item-main grid-item-7-main' src={liam7} alt='Liam' />
        <img className='grid-item-main grid-item-8-main' src={liam8} alt='Liam' />
        <img className='grid-item-main grid-item-9-main' src={liam9} alt='Liam' />
      </div>
    </>
  )
}

export default AllProjectsLayout;
