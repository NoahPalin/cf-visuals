import { useParams } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import React, { useState, useEffect } from 'react';

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
import { faBreadSlice } from '@fortawesome/free-solid-svg-icons';

function ProjectLayout() {
  const { projectID } = useParams();
  const [projectIDState, setProjectID] = useState(projectID);

  useEffect(() => {
    setProjectID(projectIDState);
  }, []);

  const liamImages = [liam1, liam2, liam3, liam4, liam5, liam6, liam7, liam8, liam9];
  const blissImages = [bliss1, bliss2, bliss3, bliss4, bliss5, bliss6, bliss7, bliss8, bliss9];
  const linhImages = [linh1, linh2, linh3, linh4, linh5, linh6, linh7, linh8, linh9];
  const justinImages = [justin1, justin2, justin3, justin4, justin5, justin6, justin7, justin8, justin9];

  const getImages = function (name, id, altText) {
    // const allImages = name.map((image) =>
    //   <div className={`grid-item grid-item-${name.indexOf(image) + 1}`}>
    //     <LazyLoadImage className='grid-item-main' key={name.indexOf(image)} src={image} placeholderSrc='blur' effect='blur' alt={altText} />
    //   </div>
    // );
    // return allImages;
    switch (altText) {
      case 'Liam':
        return (
          <>
            <div className='project-text-area'>
              <div className='project-title'>Liam Photoshoot</div>
              <div className='project-text-area-paragraph'>
                Photographer - Stylist - Set Design
              </div>
            </div>
            <div className='liam-grid-container'>
              <div className='grid-item liam-grid-item-1'>
                <LazyLoadImage key={1} src={liam1} placeholderSrc='blur' effect='blur' alt='Liam' />
              </div>
              <div className='grid-item liam-grid-item-2'>
                <LazyLoadImage key={2} src={liam2} placeholderSrc='blur' effect='blur' alt='Liam' />
              </div>
              <div className='grid-item liam-grid-item-3'>
                <LazyLoadImage key={3} src={liam3} placeholderSrc='blur' effect='blur' alt='Liam' />
              </div>
              <div className='grid-item liam-grid-item-4'>
                <LazyLoadImage key={4} src={liam4} placeholderSrc='blur' effect='blur' alt='Liam' />
              </div>
              <div className='grid-item liam-grid-item-5'>
                <LazyLoadImage key={5} src={liam5} placeholderSrc='blur' effect='blur' alt='Liam' />
              </div>
              <div className='grid-item liam-grid-item-6'>
                <LazyLoadImage key={6} src={liam6} placeholderSrc='blur' effect='blur' alt='Liam' />
              </div>
              <div className='grid-item liam-grid-item-7'>
                <LazyLoadImage key={7} src={liam7} placeholderSrc='blur' effect='blur' alt='Liam' />
              </div>
              <div className='grid-item liam-grid-item-8'>
                <LazyLoadImage key={8} src={liam8} placeholderSrc='blur' effect='blur' alt='Liam' />
              </div>
              <div className='grid-item liam-grid-item-9'>
                <LazyLoadImage key={9} src={liam9} placeholderSrc='blur' effect='blur' alt='Liam' />
              </div>
            </div>
          </>
        )
      case 'Justin':
        return (
          <>
            <div className='project-text-area'>
              <div className='project-title'>Justin Photoshoot</div>
              <div className='project-text-area-paragraph'>
                Photographer - Stylist - Set Design
              </div>
            </div>
            <div className='justin-grid-container'>
              <div className='grid-item justin-grid-item-1'>
                <LazyLoadImage key={1} src={justin1} placeholderSrc='blur' effect='blur' alt='Justin' />
              </div>
              <div className='grid-item justin-grid-item-2'>
                <LazyLoadImage key={2} src={justin2} placeholderSrc='blur' effect='blur' alt='Justin' />
              </div>
              <div className='grid-item justin-grid-item-3'>
                <LazyLoadImage key={3} src={justin3} placeholderSrc='blur' effect='blur' alt='Justin' />
              </div>
              <div className='grid-item justin-grid-item-4'>
                <LazyLoadImage key={4} src={justin4} placeholderSrc='blur' effect='blur' alt='Justin' />
              </div>
              <div className='grid-item justin-grid-item-5'>
                <LazyLoadImage key={5} src={justin5} placeholderSrc='blur' effect='blur' alt='Justin' />
              </div>
              <div className='grid-item justin-grid-item-6'>
                <LazyLoadImage key={6} src={justin6} placeholderSrc='blur' effect='blur' alt='Justin' />
              </div>
              <div className='grid-item justin-grid-item-7'>
                <LazyLoadImage key={7} src={justin7} placeholderSrc='blur' effect='blur' alt='Justin' />
              </div>
              <div className='grid-item justin-grid-item-8'>
                <LazyLoadImage key={8} src={justin8} placeholderSrc='blur' effect='blur' alt='Justin' />
              </div>
              <div className='grid-item justin-grid-item-9'>
                <LazyLoadImage key={9} src={justin9} placeholderSrc='blur' effect='blur' alt='Justin' />
              </div>
            </div>
          </>
        )
      case 'Bliss':
        return (
          <>
            <div className='project-text-area'>
              <div className='project-title'>Bliss Photoshoot</div>
              <div className='project-text-area-paragraph'>
                Photographer - Stylist - Set Design
              </div>
            </div>
            <div className='bliss-grid-container'>
              <div className='grid-item bliss-grid-item-1'>
                <LazyLoadImage key={1} src={bliss1} placeholderSrc='blur' effect='blur' alt='Bliss' />
              </div>
              <div className='grid-item bliss-grid-item-2'>
                <LazyLoadImage key={2} src={bliss2} placeholderSrc='blur' effect='blur' alt='Bliss' />
              </div>
              <div className='grid-item bliss-grid-item-3'>
                <LazyLoadImage key={3} src={bliss3} placeholderSrc='blur' effect='blur' alt='Bliss' />
              </div>
              <div className='grid-item bliss-grid-item-4'>
                <LazyLoadImage key={4} src={bliss4} placeholderSrc='blur' effect='blur' alt='Bliss' />
              </div>
              <div className='grid-item bliss-grid-item-5'>
                <LazyLoadImage key={5} src={bliss5} placeholderSrc='blur' effect='blur' alt='Bliss' />
              </div>
              <div className='grid-item bliss-grid-item-6'>
                <LazyLoadImage key={6} src={bliss6} placeholderSrc='blur' effect='blur' alt='Bliss' />
              </div>
              <div className='grid-item bliss-grid-item-7'>
                <LazyLoadImage key={7} src={bliss7} placeholderSrc='blur' effect='blur' alt='Bliss' />
              </div>
              <div className='grid-item bliss-grid-item-8'>
                <LazyLoadImage key={8} src={bliss8} placeholderSrc='blur' effect='blur' alt='Bliss' />
              </div>
              <div className='grid-item bliss-grid-item-9'>
                <LazyLoadImage key={9} src={bliss9} placeholderSrc='blur' effect='blur' alt='Bliss' />
              </div>
            </div>
          </>
        )
      case 'Linh':
        return (
          <>
            <div className='project-text-area'>
              <div className='project-title'>Linh Photoshoot</div>
              <div className='project-text-area-paragraph'>
                Photographer - Stylist - Set Design
              </div>
            </div>

            <div className='linh-flex-container'>
              <div className='linh-grid-container linh-grid-container-1'>
                <div className='grid-item linh-grid-item-1'>
                  <LazyLoadImage key={1} src={linh1} placeholderSrc='blur' effect='blur' alt='Bliss' />
                </div>
                <div className='grid-item linh-grid-item-2'>
                  <LazyLoadImage key={2} src={linh2} placeholderSrc='blur' effect='blur' alt='Linh' />
                </div>
                <div className='grid-item linh-grid-item-3'>
                  <LazyLoadImage key={3} src={linh3} placeholderSrc='blur' effect='blur' alt='Linh' />
                </div>
              </div>

              <div className='linh-grid-container linh-grid-container-2'>
                <div className='grid-item linh-grid-item-4'>
                  <LazyLoadImage key={4} src={linh4} placeholderSrc='blur' effect='blur' alt='Linh' />
                </div>
                <div className='grid-item linh-grid-item-5'>
                  <LazyLoadImage key={5} src={linh5} placeholderSrc='blur' effect='blur' alt='Linh' />
                </div>
                <div className='grid-item linh-grid-item-6'>
                  <LazyLoadImage key={6} src={linh6} placeholderSrc='blur' effect='blur' alt='Linh' />
                </div>
              </div>

              <div className='linh-grid-container linh-grid-container-3'>
                <div className='grid-item linh-grid-item-7'>
                  <LazyLoadImage key={7} src={linh7} placeholderSrc='blur' effect='blur' alt='Linh' />
                </div>
                <div className='grid-item linh-grid-item-8'>
                  <LazyLoadImage key={8} src={linh8} placeholderSrc='blur' effect='blur' alt='Linh' />
                </div>
                <div className='grid-item linh-grid-item-9'>
                  <LazyLoadImage key={9} src={linh9} placeholderSrc='blur' effect='blur' alt='Linh' />
                </div>
              </div>
            </div>
          </>
        )
    }

  }

  const getInfoFromProjectID = function (id) {
    switch (id) {
      case 1:
        return getImages(liamImages, projectID, 'Liam');
      case 2:
        return getImages(justinImages, projectID, 'Justin');
      case 3:
        return getImages(blissImages, projectID, 'Bliss');
      case 4:
        return getImages(linhImages, projectID, 'Linh');
    }

  }

  return (
    <>
      {getInfoFromProjectID(parseInt(projectIDState))}
    </>
  )
}

export default ProjectLayout;
