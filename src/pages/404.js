import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { headData } from '../static-data/data';
import '../style/main.scss';

const FourOhFour = () => {
  const { lang } = headData;

  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Page Not Found</title>
        <html lang={lang || 'en'} />
        <meta name='description' content='Page not found' />
      </Helmet>
      <section id='hero' className='jumbotron'>
        <Container>
          <h1 className='hero-title text-center'>Sorry, this path does not exist</h1>
          <p className='hero-cta justify-content-center'>
            <Link className='cta-btn cta-btn--hero' to='/'>
              Go back
            </Link>
          </p>
        </Container>
      </section>
    </>
  );
};

export default FourOhFour;
