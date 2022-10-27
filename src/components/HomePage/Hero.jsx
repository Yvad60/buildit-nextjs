export default function Hero() {
  return (
    <section className='h-[900px] relative bg-banner overflow-hidden'>
      <div className=' max-w-[1200px] mx-auto'>
        <div className='flex justify-between items-center pt-[180px] z-50 relative'>
          <div className='max-w-[500px]'>
            <h1 className='text-[#486A6F] leading-[72px] font-bold text-[64px]'>
              Development company
            </h1>
            <p className='text-[22px] leading-9 text-primary_text mt-5'>
              Forward-thinking real estate developer, owner and investor with a
              reputation
            </p>
            <div className='space-x-5 mt-[100px]'>
              <button className='py-5 pl-[26px] pr-[29px] bg-[#4397A4] rounded-md'>
                Services
              </button>
              <button className='py-5 pl-[49px] pr-[58px] bg-[#C6DBFF] rounded-md'>
                About the company
              </button>
            </div>
          </div>
          <div>
            <div className='flex gap-9 items-end'>
              <picture>
                <img src='/assets/images/image1.png' alt='' />
              </picture>
              <picture>
                <img src='/assets/images/image2.png' alt='' />
              </picture>
              <picture>
                <img src='/assets/images/image3.png' alt='' />
              </picture>
            </div>
            <div className='flex gap-[33.18px] mt-[41px]'>
              <picture>
                <img src='/assets/images/image4.png' alt='' />
              </picture>
              <picture>
                <img src='/assets/images/image5.png' alt='' />
              </picture>
            </div>
          </div>
        </div>
        <picture>
          <img
            src='/assets/images/Figure.png'
            alt=''
            className='absolute top-0 right-0'
          />
        </picture>
      </div>
    </section>
  );
}
