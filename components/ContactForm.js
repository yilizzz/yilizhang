import React from 'react';
import { useContext } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { LanguageContext } from './LanguageContext';
import styles from '../styles/ContactForm.module.css';

function ContactForm() {
  const { language } = useContext(LanguageContext);
  const content =
    language === 'en' ?
    {
      formTitle:"Leave a message",
      formButton:"Send"
    }
    :
    {
      formTitle:"Laissez un message",
      formButton:"Envoyer"
    }
  const [state, handleSubmit] = useForm("xayzrklj");
  if (state.succeeded) {
      return <p>Merci pour votre message!</p>;
  }
  return (
  <div className='px-sm-5'>
    <h1 className="text-primary fw-bold">
      {content.formTitle}
    </h1>
    <form onSubmit={handleSubmit} className={styles.messageform}>
      <label htmlFor="email">
        Email : 
      </label>
      <input className='form-control'
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <br />
      <label htmlFor="message">
        Message : 
      </label>
      <textarea  className='form-control'
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <br />
      <button type="submit" disabled={state.submitting} className='btn btn-primary'>
        {content.formButton}
      </button>
    </form>
    </div>
  );
}

export default ContactForm;