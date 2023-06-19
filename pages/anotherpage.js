import React, { Fragment } from "react";
import {Fireworks} from '@fireworks-js/react';
import { Nav } from "../components/Navbar";
import { navigation, SEO } from "../config/config";
import { Header } from "../components/Header";
import { Footer } from '../components/Footer';

export default function AnotherPage() {
  return (
    <Fragment>
      <Header seo={SEO} />
      <Nav title={navigation.name} links={navigation.links} />
      <div className="container py-2 px-5" style={{ minHeight: 'calc(100vh - 100px)' }}>
        <h1 className= 'text-primary text-center'>Félicitations !</h1>
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
              height: '20vh',
              position: 'relative',
              background: '#FFF'
            }}
          />
        </div>
        <p className='text-primary mt-5'>Vous avez trouvé la page cachée. </p>
        <p className= 'text-primary'>
          Étant donné que la attestation de ma langue maternelle est le chinois, il
          s'agit de ma carte d'identité, on sait que la carte d'identité
          ne peut pas être placée sur Internet.
        </p>
        <p className= 'text-primary'>Veuillez me contacter pour vérifier la carte d'identité et toutes mes compétences. 🖖</p>
      </div>
      <Footer />
    </Fragment>
  );
}
