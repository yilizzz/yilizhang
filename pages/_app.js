
import '../styles/custom.global.scss';
import "swiper/css";
import "swiper/css/pagination";
import { useState } from 'react';
import {LanguageContext} from '../components/LanguageContext';


function MyApp({ Component, pageProps }) {
  const [language, setLanguage] = useState('fr');
  return  (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <Component {...pageProps} />
    </LanguageContext.Provider>
  )
}

export default MyApp