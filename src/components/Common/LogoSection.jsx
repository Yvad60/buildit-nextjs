import React from 'react';

function LogoSection() {
  return (
    <div className='flex gap-10 justify-center py-[41px] border-y-primary_text border-y'>
      <picture>
        <img src='/assets/images/logos/logo1.png' alt='logo1' />
      </picture>
      <picture>
        <img src='/assets/images/logos/logo2.png' alt='logo1' />
      </picture>
      <picture>
        <img src='/assets/images/logos/logo3.png' alt='logo1' />
      </picture>
      <picture>
        <img src='/assets/images/logos/logo4.png' alt='logo1' />
      </picture>
      <picture>
        <img src='/assets/images/logos/logo5.png' alt='logo1' />
      </picture>
    </div>
  );
}

export default LogoSection;
