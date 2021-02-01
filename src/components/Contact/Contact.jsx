import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ContactForm from './ContactForm';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta } = contact;

  return (
    <section id='contact'>
      <Container>
        <Title title='Get In Touch' />
        <div className='contact-wrapper'>
          <p className='contact-wrapper__text'>
            {cta || 'Would you like to work with me? Awesome!'}
          </p>
          <ContactForm />
        </div>
      </Container>
    </section>
  );
};

export default Contact;
