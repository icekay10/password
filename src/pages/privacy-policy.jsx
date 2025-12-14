import Link from 'next/link';
import styles from './PrivacyPolicy.module.css';

const PrivacyPolicy = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Privacy Policy</h1>

        <div className={styles.content}>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Introduction</h2>
            <p className={styles.paragraph}>
              Welcome to our Password Generator. Your privacy is critically important to us, and this policy
              is designed to inform you about how we handle your information when you use our service.
            </p>
            <p className={styles.paragraph}>
              This Privacy Policy applies solely to information processed through our Password Generator
              website and not to any other websites or services that you might access through links.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>No Data Collection</h2>
            <p className={styles.paragraph}>
              We are proud to state that our Password Generator operates with a strict no-data-collection policy:
            </p>

            <div className={styles.highlight}>
              <h3 className={styles.highlightTitle}>What We Don't Collect:</h3>
              <ul className={styles.list}>
                <li className={styles.listItem}>We do not collect any personal information</li>
                <li className={styles.listItem}>We do not store the passwords you generate</li>
                <li className={styles.listItem}>We do not track your usage patterns</li>
                <li className={styles.listItem}>We do not use cookies or tracking technologies</li>
                <li className={styles.listItem}>We do not share any data with third parties</li>
              </ul>
            </div>

            <p className={styles.paragraph}>
              All password generation happens locally in your browser. The passwords you create never leave
              your device and are not transmitted to our servers or any third-party services.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>How Our Service Works</h2>
            <p className={styles.paragraph}>
              Our Password Generator is a client-side application, meaning all operations occur within your web browser:
            </p>

            <ol className={styles.orderedList}>
              <li className={styles.listItem}>You select your password preferences (length, character types)</li>
              <li className={styles.listItem}>Your browser generates a random password using cryptographic functions</li>
              <li className={styles.listItem}>The password is displayed on your screen</li>
              <li className={styles.listItem}>You can copy the password to your clipboard</li>
              <li className={styles.listItem}>Once you leave the page or refresh, the password is gone forever</li>
            </ol>

            <p className={styles.paragraph}>
              We have no access to any passwords generated through our service, nor do we have the technical
              capability to retrieve them.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Browser Storage</h2>
            <p className={styles.paragraph}>
              Our service may use your browser's local storage to remember your preferences (such as password length
              and character types) for your convenience. This information remains on your device and is not accessible to us.
            </p>
            <p className={styles.paragraph}>
              You can clear this data at any time by clearing your browser's local storage for our website.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Third-Party Services</h2>
            <p className={styles.paragraph}>
              Our Password Generator does not integrate with any third-party services that would collect your data.
              We do not use analytics trackers, advertising networks, or any other services that might compromise your privacy.
            </p>
            <p className={styles.paragraph}>
              The only exception is if you choose to contact us through our{' '}
              <Link href="/contact" className={styles.inlineLink}>
                contact form
              </Link>
              , which uses FormSubmit.co to deliver your message to us. In that case, the information you provide in the contact form is subject
              to FormSubmit.co's privacy policy.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Children's Privacy</h2>
            <p className={styles.paragraph}>
              Our service does not address anyone under the age of 13. We do not knowingly collect personal
              identifiable information from children under 13. Since we don't collect any personal information,
              this is inherently enforced.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Changes to This Privacy Policy</h2>
            <p className={styles.paragraph}>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting
              the new Privacy Policy on this page and updating the "Last Updated" date at the top of this Privacy Policy.
            </p>
            <p className={styles.paragraph}>
              You are advised to review this Privacy Policy periodically for any changes. Changes to this
              Privacy Policy are effective when they are posted on this page.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Contact Us</h2>
            <p className={styles.paragraph}>
              If you have any questions about this Privacy Policy, please{' '}
              <Link href="/contact" className={styles.inlineLink}>
                contact us
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;