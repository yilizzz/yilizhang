import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import styles from '../styles/ContactForm.module.css';
function ContactForm() {
  const [state, handleSubmit] = useForm("xayzrklj");
  if (state.succeeded) {
      return <p>Merci pour votre message!</p>;
  }
  return (
  <div className='px-sm-5'>
    <h1 className="text-primary fw-bold">
      Laissez un message
    </h1>
    <form onSubmit={handleSubmit} className={styles.messageform}>
      <label htmlFor="email">
        Votre Email : 
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
        Votre message : 
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
        Envoyer
      </button>
    </form>
    </div>
  );
}

export default ContactForm;