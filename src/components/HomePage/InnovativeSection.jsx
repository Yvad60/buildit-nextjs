import InnovativeCard from './InnovativeCard';

export default function InnovativeSection() {
  const cardsData = [
    {
      title: 'Featured Listing',
      iconSrc: '/assets/icons/Icon.png',
    },
    {
      title: 'Featured Listing',
      iconSrc: '/assets/icons/Icon.png',
    },
    {
      title: 'Featured Listing',
      iconSrc: '/assets/icons/Icon.png',
    },
  ];
  return (
    <section className='bg-white'>
      <div className='max-w-[1200px] mx-auto py-[100px]'>
        <div className='py-5 px-2'>
          <div className='grid grid-cols-3'>
            {cardsData.map((card, index) => (
              <InnovativeCard
                title={card.title}
                iconSrc={card.iconSrc}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
