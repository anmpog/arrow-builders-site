import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta, cta2, cta3 } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id='hero' className='jumbotron'>
      <Container>
        <h1 className='hero-title'>
          <span className='text-color-main'>{name}</span>
          <br />
          {subtitle}
        </h1>
        <p className='hero-cta'>
          <span className='cta-btn cta-btn--hero'>
            <Link to='about' smooth duration={1000}>
              {cta2 || 'About us'}
            </Link>
          </span>
        </p>
        <p className='hero-cta'>
          <span className='cta-btn cta-btn--hero'>
            <Link to='projects' smooth duration={1000}>
              {cta || 'Know more'}
            </Link>
          </span>
        </p>
        <p className='hero-cta'>
          <span className='cta-btn cta-btn--hero'>
            <Link to='contact' smooth duration={1000}>
              {cta3 || 'Get in touch'}
            </Link>
          </span>
        </p>
      </Container>
    </section>
  );
};

export default Header;
