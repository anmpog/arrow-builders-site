import React, { useContext, useState, useEffect } from 'react';
// import { Link } from 'gatsby';
import { Link } from 'react-scroll';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

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
    <section id='about'>
      <Container>
        <Title title='About Us' />
        <Row className='about-wrapper'>
          <Col md={6} sm={12}>
            <div className='about-wrapper__image'>
              <AboutImg alt='profile picture' filename={img} />
            </div>
          </Col>
          <Col md={6} sm={12}>
            <div className='about-wrapper__info'>
              <p className='about-wrapper__info-text'>
                {paragraphOne ||
                  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
              </p>
              <p className='about-wrapper__info-text'>
                {paragraphTwo ||
                  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
              </p>
              <p className='about-wrapper__info-text'>
                {paragraphThree || 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'}
              </p>
              {resume && (
                <span className='d-flex mt-3'>
                  <Link to='projects' smooth duration={1000}>
                    Examples of Our Work
                  </Link>
                </span>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
