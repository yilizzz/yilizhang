import React, { Fragment } from "react";
import  {useContext} from "react";
import {Fireworks} from '@fireworks-js/react';
import { Nav } from "../components/Navbar";
import { navigation, SEO } from "../config/config";
import { navigation_en, SEO_en } from "../config/config_en";
import { MyHead } from "../components/MyHead";
import { Footer } from '../components/Footer';
import { LanguageContext } from '../components/LanguageContext';

export default function AnotherPage() {
  const { language } = useContext(LanguageContext);
  const content =
     language === 'fr' ?
    {
      navigation:navigation,
      SEO:SEO,
      pageTitle:"Félicitations !",
      pageText1:"Vous avez trouvé la page cachée.🖖",
      pageText2:"Veuillez me contacter pour vérifier ma carte d'identité chinoise et toutes mes compétences.😉"
      
    }
    :
    {
      navigation:navigation_en,
      SEO:SEO_en,
      pageTitle:"Congratulations !",
      pageText1:"You've found the hidden page.🖖",
      pageText2:"Please contact me to verify my Chinese identity card and all my skills.😉"
    }
  return (
    <Fragment>
      <MyHead seo={content.SEO} />
      <Nav title={content.navigation.name} links={content.navigation.links} />
      <div className="container-fluid m-0 p-0 pageCenter" style={{ minHeight: 'calc(100vh - 100px)' }}>
        <h1 className= 'text-secondary text-center pt-5'>{content.pageTitle}</h1>
        <div>
          <Fireworks
            options={{
              rocketsPoint: {
                min: 0,
                max: 50
              },
              hue: {
                min: 130,
                max: 360
              },
            }}
            style={{
              top: 0,
              left: 0,
              width: '100%',
              height: '30vh',
              position: 'relative',
              background: 'transparent'
            }}
          />
          
        </div>
        <p className='text-secondary text-center fs-5'>{content.pageText1} </p>
        <p className= 'text-secondary text-center fs-5'>{content.pageText2}</p>
        <div className="pageFoot"></div>
      </div>
      <Footer />
    </Fragment>
  );
}
