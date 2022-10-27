import Link from 'next/link';
export default function Header() {
  return (
  
      <div className='flex justify-between items-center font-medium leading-8 text-primary_text pt-16 py-[60px] w-[1200px] left-0 right-0 mx-auto absolute z-[1000]'>
        <Link href='/'>
          <a>
            <picture>
              <img src='/assets/icons/logo.svg' alt='build it logo' />
            </picture>
          </a>
        </Link>
        <nav className='flex gap-[50px]'>
          <Link href='/about'>
            <a>About</a>
          </Link>
          <Link href='/services'>
            <a>Services</a>
          </Link>
          <Link href='/projects'>
            <a>Projects</a>
          </Link>
          <Link href='/contact'>
            <a>Contact</a>
          </Link>
        </nav>
        <button
          type='button'
          className='px-[25px] rounded-md py-[10px] font-bold text-white bg-[#4397A4]'
        >
          Need a project?
        </button>
      </div>
  );
}
