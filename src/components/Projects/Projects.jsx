import React, { useContext, useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ProjectImg from '../Image/ProjectImg';

const Projects = () => {
  const { projects } = useContext(PortfolioContext);

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
    <section id='projects'>
      <Container>
        <div className='project-wrapper'>
          <Title title='Projects' />
          {projects.map((project) => {
            const { title, info, info2, url, img, id } = project;

            return (
              <Row key={id}>
                <Col lg={4} sm={12}>
                  <div className='project-wrapper__text'>
                    <h3 className='project-wrapper__text-title'>{title || 'Project Title'}</h3>
                    <div>
                      <p>
                        {info ||
                          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                      </p>
                      <p className='mb-4'>{info2 || ''}</p>
                    </div>
                  </div>
                </Col>
                <Col lg={8} sm={12}>
                  <div className='project-wrapper__image'>
                    <a
                      href={url || '#!'}
                      target='_blank'
                      aria-label='Project Link'
                      rel='noopener noreferrer'
                    >
                      <div data-tilt className='thumbnail rounded'>
                        <ProjectImg alt={title} filename={img} />
                      </div>
                    </a>
                  </div>
                </Col>
              </Row>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
