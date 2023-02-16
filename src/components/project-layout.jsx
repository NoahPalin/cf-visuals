import { useParams } from 'react-router-dom';

import '../styles/project-layout.css';
import liam1 from './images/photoshoots/liam-photoshoot/DSC_0044.jpg';
import liam2 from './images/photoshoots/liam-photoshoot/DSC_0052.jpg';
import liam3 from './images/photoshoots/liam-photoshoot/DSC_0080.jpg';
import liam4 from './images/photoshoots/liam-photoshoot/DSC_0170.jpg';
import liam5 from './images/photoshoots/liam-photoshoot/DSC_0200.jpg';
import liam6 from './images/photoshoots/liam-photoshoot/DSC_0598.jpg';
import liam7 from './images/photoshoots/liam-photoshoot/DSC_0622.jpg';
import liam8 from './images/photoshoots/liam-photoshoot/DSC_0635.jpg';
import liam9 from './images/photoshoots/liam-photoshoot/DSC_0350.jpg';

import bliss1 from './images/photoshoots/bliss-photoshoot/DSC_0031.jpg';
import bliss2 from './images/photoshoots/bliss-photoshoot/DSC_0033.jpg';
import bliss3 from './images/photoshoots/bliss-photoshoot/DSC_0050.jpg';
import bliss4 from './images/photoshoots/bliss-photoshoot/DSC_0069.jpg';
import bliss5 from './images/photoshoots/bliss-photoshoot/DSC_0076.jpg';
import bliss6 from './images/photoshoots/bliss-photoshoot/DSC_0122.jpg';
import bliss7 from './images/photoshoots/bliss-photoshoot/DSC_0151.jpg';
import bliss8 from './images/photoshoots/bliss-photoshoot/DSC_0303.jpg';
import bliss9 from './images/photoshoots/bliss-photoshoot/DSC_0331.jpg';

import linh1 from './images/photoshoots/linh-photoshoot/DSC_0088.jpg';
import linh2 from './images/photoshoots/linh-photoshoot/DSC_0089.jpg';
import linh3 from './images/photoshoots/linh-photoshoot/DSC_0101.jpg';
import linh4 from './images/photoshoots/linh-photoshoot/DSC_0106.jpg';
import linh5 from './images/photoshoots/linh-photoshoot/DSC_0117.jpg';
import linh6 from './images/photoshoots/linh-photoshoot/DSC_0118.jpg';
import linh7 from './images/photoshoots/linh-photoshoot/DSC_0132.jpg';
import linh8 from './images/photoshoots/linh-photoshoot/DSC_0136.jpg';
import linh9 from './images/photoshoots/linh-photoshoot/DSC_0156.jpg';

import justin1 from './images/photoshoots/justin-josh-photoshoot/DSC_001.jpg';
import justin2 from './images/photoshoots/justin-josh-photoshoot/DSC_0003.jpg';
import justin3 from './images/photoshoots/justin-josh-photoshoot/DSC_0060.jpg';
import justin4 from './images/photoshoots/justin-josh-photoshoot/DSC_0073.jpg';
import justin5 from './images/photoshoots/justin-josh-photoshoot/DSC_0093.jpg';
import justin6 from './images/photoshoots/justin-josh-photoshoot/DSC_0125.jpg';
import justin7 from './images/photoshoots/justin-josh-photoshoot/DSC_0995.jpg';
import justin8 from './images/photoshoots/justin-josh-photoshoot/DSC_1003.jpg';
import justin9 from './images/photoshoots/justin-josh-photoshoot/josh2.jpg';

function ProjectLayout() {
  let {projectID} = useParams();

  const liamImages = [liam1, liam2, liam3, liam4, liam5, liam6, liam7, liam8, liam9];
  const blissImages = [bliss1, bliss2, bliss3, bliss4, bliss5, bliss6, bliss7, bliss8, bliss9];
  const linhImages = [linh1, linh2, linh3, linh4, linh5, linh6, linh7, linh8, linh9];
  const justinImages = [justin1, justin2, justin3, justin4, justin5, justin6, justin7, justin8, justin9];

  return (
    <>
      <div className='grid-container'>
        <div className='grid-item grid-item-1'>
          LIAM IMAGES
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
