export default function InnovativeCard({ iconSrc, title, description }) {
  return (
    <div className='flex flex-col gap-5 max-w-[366px] p-[50px]'>
      <picture>
        <img src={iconSrc} alt={title} className='w-[70px]' />
      </picture>
      <h3 className='text-[#486A6F] font-bold leading-10 text-2xl'>{title}</h3>
      <p className='text-primary_text font-medium leading-8'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
  );
}
