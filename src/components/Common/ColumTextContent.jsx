import React from 'react';

function ColumTextContent() {
  return (
    <div className='flex flex-col gap-5'>
      <h4 className='text-[#5BCCDE] font-medium leading-8'>About us</h4>
      <h3 className='text-4xl text-[#486A6F] leading-[48px] font-bold'>
        Owner and investor with a reputations
      </h3>
      <div>
        <p className='leading-8 font-medium text-primary_text'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit
          sem, vestibulum sed leo eu, malesuada pharetra mauris. Integer
          rhoncus, eros vel euismod tempor, ipsum magna tristique nisi, quis
          ullamcorper enim magna eu orci. Sed semper ex quis semper aliquet.
          Cras hendrerit molestie sapien sed fermentum. Mauris dui tortor,
          viverra vel ultrices in, congue sed ex.
        </p>
        <button className='mt-10 py-[15px] px-[71.5px] bg-[#4397A4] text-[#F4F7FF] font-bold rounded-sm'>
          Explore
        </button>
      </div>
    </div>
  );
}

export default ColumTextContent;
