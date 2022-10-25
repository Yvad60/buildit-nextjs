import Header from '../components/Common/Header';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className='font-noto_sans'>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
