import '../styles/all-projects-layout.css'
import liam1 from './images/home-images/DSC_0044.jpg';
import liam2 from './images/home-images/DSC_0052.jpg';
import liam3 from './images/home-images/DSC_0080.jpg';
import liam4 from './images/home-images/DSC_0170.jpg';
import liam5 from './images/home-images/DSC_0200.jpg';


function AllProjectsLayout() {

  return (
    <>
      <div className='grid-container-main'>
        <div className='grid-item-main grid-item-1-main'>
          <img src={liam1} alt='Liam' />
        </div>
        <div className='grid-item-main grid-item-2-main'>
          <img src={liam2} alt='Liam' />
        </div>
        <div className='grid-item-main grid-item-3-main'>
          <img src={liam3} alt='Liam' />
        </div>
        <div className='grid-item-main grid-item-4-main'>
          <img src={liam4} alt='Liam' />
        </div>
        <div className='grid-item-main grid-item-5-main'>
          <img src={liam5} alt='Liam' />
        </div>
      </div>
    </>
  )
}

export default AllProjectsLayout;
