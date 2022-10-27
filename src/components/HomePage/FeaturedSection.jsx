import React from 'react';
import ColumTextContent from '../Common/ColumTextContent';

export const FeaturedSection = () => {
  return (
    <section>
      <div className='max-w-[1200px] mx-auto py-36 flex'>
        <div className='max-w-[540px]'>
          <ColumTextContent />
        </div>

        <picture>
          <img src='/assets/images/featured_photo_grid.png' alt='' />
        </picture>
      </div>
    </section>
  );
};
