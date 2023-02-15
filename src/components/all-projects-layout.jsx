import '../styles/all-projects-layout.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { decode } from "blurhash";

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





function AllProjectsLayout() {

  // const liamImages = [liam1, liam2, liam3, liam4, liam5, liam6, liam7, liam8, liam9];
  // const blissImages = [bliss1, bliss2, bliss3, bliss4, bliss5, bliss6, bliss7, bliss8, bliss9];
  // const linhImages = [linh1, linh2, linh3, linh4, linh5, linh6, linh7, linh8, linh9];
  // const justinImages = [justin1, justin2, justin3, justin4, justin5, justin6, justin7, justin8, justin9];
  const readHash = () => {
    const pixels = decode("LKLgw#$|^*I9_NS5kDt8%2Rk9GWB", 32, 32);

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const imageData = ctx.createImageData(4, 4);
    imageData.data.set(pixels);
    ctx.putImageData(imageData, 0, 0);
    document.body.append(canvas);
  }
  readHash();


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
      <div className='entire-grid-container'>
        <div className='grid-container-main'>

          <LazyLoadImage className='grid-item-main' key={1} src={liam1} placeholderSrc='blur' effect='blur' alt='Liam' />
          <LazyLoadImage className='grid-item-main' key={2} src={liam2} effect='blur' alt='Liam' />
          <LazyLoadImage className='grid-item-main' key={3} src={liam3} effect='blur' alt='Liam' />
          <LazyLoadImage className='grid-item-main' key={4} src={liam4} effect='blur' alt='Liam' />
          <LazyLoadImage className='grid-item-main' key={5} src={liam5} effect='blur' alt='Liam' />
          <LazyLoadImage className='grid-item-main' key={6} src={liam6} effect='blur' alt='Liam' />
          <LazyLoadImage className='grid-item-main' key={7} src={liam7} effect='blur' alt='Liam' />
          <LazyLoadImage className='grid-item-main' key={8} src={liam8} effect='blur' alt='Liam' />
          <LazyLoadImage className='grid-item-main' key={9} src={liam9} effect='blur' alt='Liam' />

          <LazyLoadImage className='grid-item-main' key={10} src={justin1} effect='blur' alt='Justin' />
          <LazyLoadImage className='grid-item-main' key={11} src={justin2} effect='blur' alt='Justin' />
          <LazyLoadImage className='grid-item-main' key={12} src={justin3} effect='blur' alt='Justin' />
          <LazyLoadImage className='grid-item-main' key={13} src={justin4} effect='blur' alt='Justin' />
          <LazyLoadImage className='grid-item-main' key={14} src={justin5} effect='blur' alt='Justin' />
          <LazyLoadImage className='grid-item-main' key={15} src={justin6} effect='blur' alt='Justin' />
          <LazyLoadImage className='grid-item-main' key={16} src={justin7} effect='blur' alt='Justin' />
          <LazyLoadImage className='grid-item-main' key={17} src={justin8} effect='blur' alt='Justin' />
          <LazyLoadImage className='grid-item-main' key={18} src={justin9} effect='blur' alt='Justin' />
        </div>

        <div className='grid-container-main'>
          <LazyLoadImage className='grid-item-main' key={19} src={bliss1} effect='blur' alt='Bliss' />
          <LazyLoadImage className='grid-item-main' key={20} src={bliss2} effect='blur' alt='Bliss' />
          <LazyLoadImage className='grid-item-main' key={21} src={bliss3} effect='blur' alt='Bliss' />
          <LazyLoadImage className='grid-item-main' key={22} src={bliss4} effect='blur' alt='Bliss' />
          <LazyLoadImage className='grid-item-main' key={23} src={bliss5} effect='blur' alt='Bliss' />
          <LazyLoadImage className='grid-item-main' key={24} src={bliss6} effect='blur' alt='Bliss' />
          <LazyLoadImage className='grid-item-main' key={25} src={bliss7} effect='blur' alt='Bliss' />
          <LazyLoadImage className='grid-item-main' key={26} src={bliss8} effect='blur' alt='Bliss' />
          <LazyLoadImage className='grid-item-main' key={27} src={bliss9} effect='blur' alt='Bliss' />
        </div>

        <div className='grid-container-main'>
          <LazyLoadImage className='grid-item-main' key={28} src={linh1} effect='blur' alt='Linh' />
          <LazyLoadImage className='grid-item-main' key={29} src={linh2} effect='blur' alt='Linh' />
          <LazyLoadImage className='grid-item-main' key={30} src={linh3} effect='blur' alt='Linh' />
          <LazyLoadImage className='grid-item-main' key={31} src={linh4} effect='blur' alt='Linh' />
          <LazyLoadImage className='grid-item-main' key={32} src={linh5} effect='blur' alt='Linh' />
          <LazyLoadImage className='grid-item-main' key={33} src={linh6} effect='blur' alt='Linh' />
          <LazyLoadImage className='grid-item-main' key={34} src={linh7} effect='blur' alt='Linh' />
          <LazyLoadImage className='grid-item-main' key={35} src={linh8} effect='blur' alt='Linh' />
          <LazyLoadImage className='grid-item-main' key={36} src={linh9} effect='blur' alt='Linh' />
        </div>
      </div>

    </>
  )
}

export default AllProjectsLayout;
