import React from 'react';
import ColumTextContent from '../Common/ColumTextContent';
import LogoSection from '../Common/LogoSection';

function OwnersSection() {
  return (
    <section className='bg-[#E1EBFA]'>
      <div className='max-w-[1200px] mx-auto pt-10 py-28'>
        <LogoSection />
        <div className='pt-[60px] px-[52px] flex gap-10 items-center'>
          <picture>
            <img
              className='w-full'
              src='/assets/images/photo.png'
              alt='building shot below'
            />
          </picture>
          <div className='max-w-[500px]'>
            <ColumTextContent />
          </div>
        </div>
      </div>
    </section>
  );
}

export default OwnersSection;
