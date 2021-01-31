import React, { useEffect, useState } from 'react';
// import ReactDOM from "react-dom";
import { Formik, Field, Form, useField } from 'formik';
import MaskedInput from 'react-text-mask';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

// Constants
// eslint-disable-next-line no-useless-escape
const phoneRegExp = /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i;

const nameRegExp = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{1,25}$/;

const phoneInputMask = [
  '(',
  /[1-9]/,
  /\d/,
  /\d/,
  ')',
  ' ',
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];

// Component(s)
const CharacterCount = ({ characterLimit, currentCharCount }) => {
  return (
    <p className='text-xs align-right'>{characterLimit - currentCharCount} characters remaining.</p>
  );
};

const InputWithLiveFeedback = ({ label, helpText, ...props }) => {
  const [field, meta] = useField(props);
  const [didFocus, setDidFocus] = React.useState(false);
  const handleFocus = () => setDidFocus(true);
  const showFeedback = (!!didFocus && field.value.trim().length > 2) || meta.touched;
  return (
    // eslint-disable-next-line no-nested-ternary
    <div className={`form-control ${showFeedback ? (meta.error ? 'invalid' : 'valid') : ''}`}>
      <label htmlFor={props.id}>{label}</label>
      {showFeedback ? (
        <div id={`${props.id}-feedback`} aria-live='polite' className='feedback'>
          {meta.error ? meta.error : 'Looks good!'}
        </div>
      ) : null}
      {props.type === 'tel' ? (
        <Field name={props.name}>{({ field }) => <MaskedInput {...field} {...props} />}</Field>
      ) : (
        <Field
          {...props}
          {...field}
          aria-describedby={`${props.id}-feedback ${props.id}-help`}
          onFocus={handleFocus}
        />
      )}
      <div className='text-xs' id={`${props.id}-help`} tabIndex='-1'>
        {helpText}
      </div>
      {props.characterLimit ? (
        <CharacterCount
          characterLimit={props.characterLimit}
          currentCharCount={field.value.length}
        />
      ) : null}
    </div>
  );
};

// Form component
const SignupForm = () => {
  return (
    <div className='form-container'>
      <h1>Interested in working with us? Get in touch:</h1>
      <Formik
        initialValues={{
          fullName: '',
          email: '',
          phoneNumber: '',
          preferredContact: 'phone',
          description: '',
        }}
        validationSchema={Yup.object({
          fullName: Yup.string()
            .required('Required')
            .min(1, 'Too short!')
            .max(50, 'Too long!')
            .matches(nameRegExp, 'Please use only letters - no special characters.'),
          email: Yup.string().required('Required').email('Invalid email address'),
          phoneNumber: Yup.string()
            .required('Required')
            .matches(phoneRegExp, 'Phone number is not valid'),
          description: Yup.string()
            .required('Required')
            .max(750, 'Please limit your description to 750 characters)'),
          preferredContact: Yup.string().required('Required'),
          characterLimit: Yup.number(),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <InputWithLiveFeedback
            label='Your Name:'
            id='fullName'
            name='fullName'
            helpText='50 characters max. Cannot be empty.'
            type='text'
          />
          <div className='form-control'>
            <label htmlFor='preferredContact'>How do you prefer to be contacted?</label>
            <Field name='preferredContact' as='select'>
              <option value='phone'>Phone</option>
              <option value='email'>Email</option>
            </Field>
          </div>
          <InputWithLiveFeedback
            label='Your Phone Number:'
            id='phoneNumber'
            name='phoneNumber'
            helpText='Please enter a North-American phone number.'
            mask={phoneInputMask}
            placeholder='(123)456-7890'
            type='tel'
          />
          <InputWithLiveFeedback
            label='Your Email:'
            id='email'
            name='email'
            helpText='Please enter your email address.'
            type='email'
            placeholder='your_name@domain.com'
          />
          <InputWithLiveFeedback
            label='Brief project description:'
            id='description'
            name='description'
            as='textarea'
            helpText='750 characters max.'
            placeholder='(750 characters max)'
            rows='5'
            characterLimit={750}
          />
          <div className='button-container'>
            <button type='submit'>Submit</button>
            <button type='reset'>Reset</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default SignupForm;
