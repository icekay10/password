import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>About Our Password Generator</h1>
        <p className={styles.subtitle}>Your security is our priority</p>

        <div className={styles.content}>
          {/* Section 1: Why Use a Strong Password? */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Why Use a Strong Password?</h2>
            <p className={styles.paragraph}>
              In today's digital world, weak passwords are one of the most common security vulnerabilities.
              Our password generator helps you create strong, unique passwords for all your online accounts,
              protecting your personal information from hackers and cyber threats.
            </p>
          </div>

          {/* Section 2: How Our Generator Works */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>How Our Generator Works</h2>
            <p className={styles.paragraph}>
              Our tool creates cryptographically strong passwords using a combination of uppercase letters,
              lowercase letters, numbers, and symbols. The passwords are generated locally in your browser
              and never transmitted over the internet, ensuring complete privacy.
            </p>
          </div>

          {/* Section 3: Privacy Commitment */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Our Commitment to Privacy</h2>
            <p className={styles.paragraph}>
              We believe in complete transparency when it comes to your data. Our password generator:
            </p>
            <ul className={styles.list}>
              <li className={styles.listItem}>Does not store any passwords you generate</li>
              <li className={styles.listItem}>Does not track your usage patterns</li>
              <li className={styles.listItem}>Does not require any personal information</li>
              <li className={styles.listItem}>Works entirely in your browser</li>
            </ul>
          </div>

          {/* Section 4: Features */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Features</h2>
            <div className={styles.featuresGrid}>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>🔒</div>
                <h3 className={styles.featureTitle}>Secure Generation</h3>
                <p className={styles.featureDesc}>
                  Uses browser-based cryptography for maximum security
                </p>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>🎚️</div>
                <h3 className={styles.featureTitle}>Customizable Length</h3>
                <p className={styles.featureDesc}>
                  Choose password length from 4 to 32 characters
                </p>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>⚙️</div>
                <h3 className={styles.featureTitle}>Flexible Options</h3>
                <p className={styles.featureDesc}>
                  Include/exclude character types as needed
                </p>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>💪</div>
                <h3 className={styles.featureTitle}>Strength Indicator</h3>
                <p className={styles.featureDesc}>
                  Visual feedback on your password's strength
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;