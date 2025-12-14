import Link from 'next/link';
import styles from './Homepage.module.css';

// SEO Metadata (Next.js App Router)
export const metadata = {
  title: 'Secure Password Generator | Create Strong, Private Passwords Instantly',
  description:
    'Generate ultra-secure passwords in seconds with our free, privacy-focused password generator. Military-grade security, zero data storage, and local browser generation for maximum protection.',
  keywords:
    // Single keywords
    'password, generator, security, privacy, encryption, cybersecurity, secure, tool, free, online, random, strong, create, maker, manager, protection, safe, digital, account, login, '
    +
    // Double keywords
    'password generator, password creator, password manager, secure password, strong password, random password, password security, password tool, online password, free password, password protection, password strength, password complexity, password length, password requirements, password policy, password safety, digital security, account security, login security, '
    +
    // Treble (Triple) keywords
    'free password generator, online password generator, secure password generator, random password generator, strong password generator, password generator tool, password generator online, password generator free, password generator secure, password generator random, create secure password, generate strong password, make random password, password security tool, digital privacy tool, cybersecurity password tool, account password generator, login password creator, password strength checker, password complexity analyzer, '
    +
    // Long-tail keywords
    'free online password generator, secure random password generator, create strong password online, generate secure passwords free, best password generator 2024, military grade password generator, password generator no storage, local browser password generator, privacy focused password tool, zero data storage password generator, cryptographically secure password generator, password generator for online accounts, strong password creator for websites, random password maker for security, password generator with custom options, password length and complexity tool, generate passwords offline browser, secure password generator for free, trusted password generation tool, password security best practices tool',
  authors: [{ name: 'SecurePassword Tools' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vaultpassgenerator.com/',
    siteName: 'SecurePassword Tools',
    title: 'Secure Password Generator | Create Strong, Private Passwords Instantly',
    description:
      'Generate ultra-secure passwords in seconds with our free, privacy-focused password generator. Military-grade security, zero data storage, and local browser generation for maximum protection.',
    images: [
      {
        url: 'https://vaultpassgenerator.com/images/password-generator-preview.jpg',
        width: 1200,
        height: 630,
        alt: 'Secure Password Generator creating strong passwords',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@securepasswordpro',
    creator: '@securepasswordpro',
    title: 'Secure Password Generator | Create Strong, Private Passwords Instantly',
    description:
      'Generate ultra-secure passwords in seconds with our free, privacy-focused password generator. Military-grade security, zero data storage, and local browser generation for maximum protection.',
    images: ['https://vaultpassgenerator.com/images/password-generator-preview.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  alternates: {
    canonical: 'https://vaultpassgenerator.com/',
  },
};

const Homepage = () => {
  return (
    <>
      {/* Structured Data - JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'Secure Password Generator',
            url: 'https://vaultpassgenerator.com/',
            description:
              'A free, privacy-focused password generator that creates strong, secure passwords using cryptographically secure algorithms with zero data storage.',
            applicationCategory: 'SecurityApplication',
            operatingSystem: 'All',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.9',
              reviewCount: '1842',
            },
            keywords: 'password generator, secure password, strong password, random password, free online tool, cybersecurity, digital privacy, password security, password creator, password manager',
            featureList:
              'Military-grade encryption, Zero data storage, Local browser generation, Customizable password options, Cross-platform compatibility, Free to use',
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://vaultpassgenerator.com/',
              },
            ],
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'SecurePassword Tools',
            url: 'https://vaultpassgenerator.com',
            logo: 'https://vaultpassgenerator.com/images/logo.png',
            description:
              'Providing free, secure password generation tools with uncompromising privacy standards.',
            sameAs: [
              'https://twitter.com/securepasswordpro',
              'https://facebook.com/securepasswordtools',
              'https://linkedin.com/company/securepassword-tools',
            ],
          }),
        }}
      />

      {/* Page Content */}
      <div className={styles.homepage}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>Secure Your Digital Life with Strong Passwords</h1>
              <p className={styles.heroSubtitle}>
                Generate ultra-secure passwords in seconds with our advanced tool that prioritizes your privacy and security
              </p>
              <div className={styles.heroCta}>
                <Link href="/free-password-generator" className={styles.ctaButtonPrimary}>
                  Generate Password Now
                </Link>
                <Link href="/about" className={styles.ctaButtonSecondary}>
                  Learn More
                </Link>
              </div>
              <div className={styles.heroStats}>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>10M+</span>
                  <span className={styles.statLabel}>Passwords Generated</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>100%</span>
                  <span className={styles.statLabel}>Secure & Private</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>0</span>
                  <span className={styles.statLabel}>Data Stored</span>
                </div>
              </div>
            </div>
            <div className={styles.heroVisual}>
              <div className={styles.securityShield}>
                <div className={styles.shieldIcon}>🛡️</div>
                <div className={styles.shieldGlow}></div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className={styles.featuresSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Why Choose Our Password Generator?</h2>
            <p className={styles.sectionSubtitle}>
              We're committed to providing the most secure and user-friendly password generation experience
            </p>
            <div className={styles.featuresGrid}>
              {[
                { icon: '🔒', title: 'Military-Grade Security', desc: 'Our algorithm uses cryptographically secure random number generation to create passwords that are virtually impossible to crack.' },
                { icon: '🚫', title: 'Zero Data Storage', desc: 'We never store, transmit, or have access to your passwords. Everything happens locally in your browser for maximum privacy.' },
                { icon: '⚡', title: 'Lightning Fast', desc: 'Generate complex passwords in milliseconds with our optimized engine. No delays, no waiting, just instant security.' },
                { icon: '🎯', title: 'Customizable Options', desc: 'Tailor your passwords with specific length, character types, and complexity requirements for different services.' },
                { icon: '🌐', title: 'Cross-Platform', desc: 'Works seamlessly on desktop, tablet, and mobile devices. Your security shouldn\'t be limited by your device.' },
                { icon: '💡', title: 'Educational Resources', desc: 'Learn about password security best practices and how to protect your online accounts effectively.' },
              ].map((feature, i) => (
                <div key={i} className={styles.featureCard}>
                  <div className={styles.featureIcon}>{feature.icon}</div>
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                  <p className={styles.featureDesc}>{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className={styles.howItWorksSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>How It Works</h2>
            <p className={styles.sectionSubtitle}>Three simple steps to generate secure passwords</p>
            <div className={styles.stepsContainer}>
              {[
                { num: '1', title: 'Customize Your Preferences', desc: 'Choose password length, character types, and complexity based on your needs.' },
                { num: '2', title: 'Generate Securely', desc: 'Our algorithm creates a strong password locally in your browser—no internet transmission.' },
                { num: '3', title: 'Copy and Use', desc: 'Instantly copy your new password to use across your online accounts securely.' },
              ].map((step, i) => (
                <div key={i} className={styles.step}>
                  <div className={styles.stepNumber}>{step.num}</div>
                  <div className={styles.stepContent}>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <p className={styles.stepDesc}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Section */}
        <section className={styles.securitySection}>
          <div className={styles.container}>
            <div className={styles.securityContent}>
              <div className={styles.securityText}>
                <h2 className={styles.sectionTitle}>Your Security is Our Priority</h2>
                <p className={styles.paragraph}>
                  In an era of increasing cyber threats, we've built our password generator with uncompromising security standards:
                </p>
                <div className={styles.securityFeatures}>
                  {[
                    'No passwords are ever stored on our servers',
                    'All generation happens locally in your browser',
                    'No tracking, analytics, or data collection',
                    'Open-source algorithms for transparency',
                    'Regular security audits and updates',
                  ].map((point, i) => (
                    <div key={i} className={styles.securityPoint}>
                      <span className={styles.checkmark}>✓</span>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
                <Link href="/privacy" className={styles.ctaLink}>
                  Read our Privacy Policy →
                </Link>
              </div>
              <div className={styles.securityVisual}>
                <div className={styles.encryptionAnimation}>
                  <div className={styles.lockIcon}>🔐</div>
                  <div className={styles.encryptionRings}>
                    <div className={styles.ring}></div>
                    <div className={styles.ring}></div>
                    <div className={styles.ring}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className={styles.testimonialsSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Trusted by Thousands of Users</h2>
            <p className={styles.sectionSubtitle}>See what our users say about their experience</p>
            <div className={styles.testimonialsGrid}>
              {[
                {
                  text: 'This password generator has completely changed how I manage my online security. I feel so much safer knowing my passwords are truly secure.',
                  avatar: '👩‍💼',
                  name: 'Sarah Johnson',
                  title: 'Software Engineer',
                },
                {
                  text: 'As someone who\'s been hacked before, I appreciate the peace of mind this tool provides. The local generation is a game-changer for privacy.',
                  avatar: '👨‍💻',
                  name: 'Michael Chen',
                  title: 'IT Consultant',
                },
                {
                  text: 'I\'ve tried many password generators, but this one stands out for its simplicity and robust security features. Highly recommended!',
                  avatar: '👩‍🎓',
                  name: 'Emily Rodriguez',
                  title: 'Cybersecurity Student',
                },
              ].map((t, i) => (
                <div key={i} className={styles.testimonialCard}>
                  <div className={styles.testimonialText}>{t.text}</div>
                  <div className={styles.testimonialAuthor}>
                    <div className={styles.authorAvatar}>{t.avatar}</div>
                    <div className={styles.authorDetails}>
                      <div className={styles.authorName}>{t.name}</div>
                      <div className={styles.authorTitle}>{t.title}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>Ready to Enhance Your Digital Security?</h2>
              <p className={styles.ctaSubtitle}>
                Join thousands of users who trust our password generator to protect their online accounts
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/free-password-generator" className={styles.ctaButtonPrimary}>
                  Start Generating Passwords
                </Link>
                <Link href="/contact" className={styles.ctaButtonSecondary}>
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className={styles.faqSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
            <div className={styles.faqGrid}>
              {[
                {
                  q: 'Is this password generator really free?',
                  a: 'Yes, our password generator is completely free to use with no hidden costs or premium features. We believe everyone deserves access to strong security tools.',
                },
                {
                  q: 'How do I know my passwords are secure?',
                  a: 'We use cryptographically secure algorithms and all generation happens locally in your browser. We never see, store, or transmit your passwords.',
                },
                {
                  q: 'Can I use this on my mobile device?',
                  a: 'Absolutely! Our website is fully responsive and works perfectly on smartphones, tablets, and desktop computers.',
                },
                {
                  q: 'Do I need to create an account?',
                  a: 'No account required! We designed our tool to be completely anonymous and hassle-free. Just visit the site and start generating passwords.',
                },
                {
                  q: 'What makes this better than other password generators?',
                  a: 'Our focus on privacy, local generation, and transparency sets us apart. Plus, we provide educational resources to help you understand password security.',
                },
                {
                  q: 'How often should I change my passwords?',
                  a: 'We recommend changing important passwords every 3-6 months, or immediately if you suspect a service has been compromised.',
                },
              ].map((faq, i) => (
                <div key={i} className={styles.faqItem}>
                  <h3 className={styles.faqQuestion}>{faq.q}</h3>
                  <p className={styles.faqAnswer}>{faq.a}</p>
                </div>
              ))}
            </div>
            <div className={styles.faqCta}>
              <p>
                Still have questions? <Link href="/contact">Contact us</Link> and we'll be happy to help!
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Homepage;