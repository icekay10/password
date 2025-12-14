'use client';
import Head from 'next/head';
import Link from 'next/link';
import styles from './Custom404.module.css';

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>Page Not Found | Password Generator</title>
        <meta 
          name="description" 
          content="The page you're looking for doesn't exist. Return to our homepage to generate secure passwords." 
        />
        <meta name="robots" content="noindex, follow" />
      </Head>

      <div className={styles.container}>
        <div className={styles.card}>
          <h1 className={styles.title}>404 - Page Not Found</h1>
          <p className={styles.subtitle}>Oops! The page you're looking for seems to have gone missing</p>

          <div className={styles.content}>
            {/* Section 1: What Happened? */}
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>What Happened?</h2>
              <p className={styles.paragraph}>
                The page you're trying to access doesn't exist or may have been moved. 
                This could be due to a mistyped URL, an outdated bookmark, or a broken link.
              </p>
            </div>

            {/* Section 2: How to Get Back */}
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>How to Get Back on Track</h2>
              <p className={styles.paragraph}>
                Don't worry! Here are some helpful links to guide you back to where you need to be:
              </p>
            </div>

            {/* Section 3: Quick Actions */}
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Quick Actions</h2>
              <div className={styles.actionButtons}>
                <Link href="/" className={styles.primaryButton}>
                  🏠 Return to Homepage
                </Link>
                <Link href="/free-password-generator" className={styles.secondaryButton}>
                  🔒 Generate Password
                </Link>
              </div>
            </div>

            {/* Section 4: Helpful Links */}
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Helpful Links</h2>
              <div className={styles.featuresGrid}>
                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>🔐</div>
                  <h3 className={styles.featureTitle}>Password Generator</h3>
                  <p className={styles.featureDesc}>
                    Create strong, secure passwords for all your accounts
                  </p>
                  <Link href="/free-password-generator" className={styles.featureLink}>
                    Get Started →
                  </Link>
                </div>
                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>📚</div>
                  <h3 className={styles.featureTitle}>Security Guide</h3>
                  <p className={styles.featureDesc}>
                    Learn about us
                  </p>
                  <Link href="/about" className={styles.featureLink}>
                    Learn More →
                  </Link>
                </div>
                
                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>📞</div>
                  <h3 className={styles.featureTitle}>Contact Support</h3>
                  <p className={styles.featureDesc}>
                    Need help? Reach out to our support team
                  </p>
                  <Link href="/contact" className={styles.featureLink}>
                    Contact Us →
                  </Link>
                </div>
              </div>
            </div>

            {/* Section 5: Tips to Avoid 404 Errors */}
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Custom404;