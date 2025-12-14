'use client';

import { useState } from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // FormSubmit.co endpoint — replace with your real email
    const formSubmitEndpoint = 'https://formsubmit.co/support@vaultpassgenerator.com';

    // Create FormData object (FormSubmit.co expects form-encoded data)
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('message', formData.message);
    // Optional: auto-response, redirect, etc.
    formDataToSend.append('_subject', 'New Contact Form Submission - VaultPassGenerator');
    formDataToSend.append('_autoresponse', 'Thank you for contacting us! We’ll get back to you soon.');
    // formDataToSend.append('_captcha', 'false'); // disable CAPTCHA if needed

    try {
      const response = await fetch(formSubmitEndpoint, {
        method: 'POST',
        body: formDataToSend,
        // Do NOT set Content-Type — browser sets it with boundary for FormData
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Contact Us</h1>
        <p className={styles.subtitle}>We’d love to hear from you</p>

        <div className={styles.content}>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Get in Touch</h2>
            <p className={styles.paragraph}>
              Have questions, feedback, or need support? Fill out the form below, and we’ll get back to you as soon as possible.
              We’re committed to your privacy — your information will never be shared or stored unnecessarily.
            </p>

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  disabled={isSubmitting}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  disabled={isSubmitting}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className={styles.textarea}
                  disabled={isSubmitting}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`${styles.submitButton} ${isSubmitting ? styles.submitButtonLoading : ''}`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus === 'success' && (
                <p className={styles.successMessage}>
                  ✅ Thank you! Your message has been sent successfully.
                </p>
              )}
              {submitStatus === 'error' && (
                <p className={styles.errorMessage}>
                  ❌ Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Alternative Contact</h2>
            <ul className={styles.infoList}>
              <li className={styles.infoItem}>
                <span className={styles.infoIcon}>📧</span>
                <span>support@vaultpassgenerator.com</span>
              </li>
              <li className={styles.infoItem}>
                <span className={styles.infoIcon}>🔒</span>
                <span>All communications are encrypted and private</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;