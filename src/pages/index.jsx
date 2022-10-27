import Head from 'next/head';
import { FeaturedSection } from '../components/HomePage/FeaturedSection';
import Hero from '../components/HomePage/Hero';
import InnovativeSection from '../components/HomePage/InnovativeSection';
import OwnersSection from '../components/HomePage/OwnersSection';

export default function Home() {
  return (
    <>
      <Head>
        <title>BuildIt</title>
      </Head>
      <Hero />
      <InnovativeSection />
      <OwnersSection />
      <FeaturedSection />
    </>
  );
}
