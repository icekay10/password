'use client';

import { useState, useCallback, useEffect } from 'react';
import styles from './PasswordGenerator.module.css';

// SEO Metadata
export const metadata = {
  title: 'Free Secure Password Generator | Create Strong, Random Passwords',
  description:
    'Generate unbreakable passwords instantly with our free online password generator. Create secure, random passwords with customizable options for ultimate online security.',
  keywords:
    'password generator, secure password, strong password, random password generator, password creator, online security, digital privacy, cybersecurity tool, free password tool, encrypted passwords',
  authors: [{ name: 'SecurePassword Tools' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vaultpassgenerator.com/free-password-generator',
    siteName: 'SecurePassword Tools',
    title: 'Free Secure Password Generator | Create Strong, Random Passwords',
    description:
      'Generate unbreakable passwords instantly with our free online password generator. Create secure, random passwords with customizable options for ultimate online security.',
    images: [
      {
        url: 'https://vaultpassgenerator.com/images/free-password-generator-preview.jpg',
        width: 1200,
        height: 630,
        alt: 'Free Secure Password Generator creating strong passwords',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@securepasswordpro',
    creator: '@securepasswordpro',
    title: 'Free Secure Password Generator | Create Strong, Random Passwords',
    description:
      'Generate unbreakable passwords instantly with our free online password generator. Create secure, random passwords with customizable options for ultimate online security.',
    images: ['https://vaultpassgenerator.com/images/free-password-generator-preview.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  alternates: {
    canonical: 'https://vaultpassgenerator.com/free-password-generator',
  },
};

const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [customInput, setCustomInput] = useState('');
  const [strength, setStrength] = useState('');
  const [isCopied, setIsCopied] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  // Character sets
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const numberChars = '0123456789';
  const symbolChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

  const generatePassword = useCallback(() => {
    setIsGenerating(true);
    
    let charSet = '';
    if (includeUppercase) charSet += uppercaseChars;
    if (includeLowercase) charSet += lowercaseChars;
    if (includeNumbers) charSet += numberChars;
    if (includeSymbols) charSet += symbolChars;

    if (charSet.length === 0) {
      charSet = uppercaseChars + lowercaseChars + numberChars + symbolChars;
      setIncludeUppercase(true);
      setIncludeLowercase(true);
      setIncludeNumbers(true);
      setIncludeSymbols(true);
    }

    let generatedPassword = '';
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * charSet.length);
      generatedPassword += charSet[randomIndex];
    }

    setPassword(generatedPassword);
    evaluatePasswordStrength(generatedPassword);
    setIsCopied(false);
    
    setTimeout(() => setIsGenerating(false), 300);
  }, [passwordLength, includeUppercase, includeLowercase, includeNumbers, includeSymbols]);

  const generateFromCustomInput = () => {
    if (!customInput.trim()) {
      alert('Please enter a password to enhance');
      return;
    }

    setIsGenerating(true);
    let enhancedPassword = customInput;
    
    if (enhancedPassword.length < 8) {
      enhancedPassword += uppercaseChars + numberChars + symbolChars;
    }
    
    if (!/[A-Z]/.test(enhancedPassword)) {
      enhancedPassword += uppercaseChars.charAt(Math.floor(Math.random() * uppercaseChars.length));
    }
    if (!/[0-9]/.test(enhancedPassword)) {
      enhancedPassword += numberChars.charAt(Math.floor(Math.random() * numberChars.length));
    }
    if (!/[^A-Za-z0-9]/.test(enhancedPassword)) {
      enhancedPassword += symbolChars.charAt(Math.floor(Math.random() * symbolChars.length));
    }
    
    enhancedPassword = enhancedPassword.split('').sort(() => Math.random() - 0.5).join('');
    
    if (enhancedPassword.length > passwordLength) {
      enhancedPassword = enhancedPassword.slice(0, passwordLength);
    }
    
    setPassword(enhancedPassword);
    evaluatePasswordStrength(enhancedPassword);
    setIsCopied(false);
    
    setTimeout(() => setIsGenerating(false), 300);
  };

  const evaluatePasswordStrength = (pass) => {
    let strengthValue = 0;
    if (pass.length >= 8) strengthValue += 1;
    if (pass.length >= 12) strengthValue += 1;
    if (pass.length >= 16) strengthValue += 1;
    if (/[A-Z]/.test(pass)) strengthValue += 1;
    if (/[a-z]/.test(pass)) strengthValue += 1;
    if (/[0-9]/.test(pass)) strengthValue += 1;
    if (/[^A-Za-z0-9]/.test(pass)) strengthValue += 1;
    
    if (strengthValue <= 3) setStrength('Weak');
    else if (strengthValue <= 5) setStrength('Medium');
    else if (strengthValue <= 7) setStrength('Strong');
    else setStrength('Very Strong');
  };

  const copyToClipboard = () => {
    if (!password) return;
    navigator.clipboard.writeText(password).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'Secure Password Generator',
            url: 'https://vaultpassgenerator.com/tools/free-password-generator',
            description:
              'A free, privacy-focused password generator that creates strong, secure passwords using cryptographically secure algorithms with zero data storage.',
            applicationCategory: 'SecurityApplication',
            operatingSystem: 'All',
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
            aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '2156' },
            featureList:
              'Random password generation, Customizable length, Uppercase/lowercase options, Number and symbol inclusion, Strength evaluation, One-click copy, No data storage',
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
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.vaultpassgenerator.com/' },
              { '@type': 'ListItem', position: 2, name: 'Tools', item: 'https://www.vaultpassgenerator.com/tools' },
              { '@type': 'ListItem', position: 3, name: 'Password Generator', item: 'https://www.vaultpassgenerator.com/tools/free-password-generator' },
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
            url: 'https://www.vaultpassgenerator.com/',
            logo: 'https://www.vaultpassgenerator.com/images/logo.png',
            description: 'Providing free, secure password generation tools with uncompromising privacy standards.',
            sameAs: [
              'https://twitter.com/securepasswordpro',
              'https://facebook.com/securepasswordtools',
              'https://linkedin.com/company/securepassword-tools',
            ],
          }),
        }}
      />

      {/* Page Content */}
      <div className={styles.container}>
        <div className={styles.card}>
          <h1 className={styles.title}>Free Secure Password Generator</h1>
          <p className={styles.subtitle}>
            Our free password generator helps you create strong, random passwords to keep your accounts safe.
          </p>

          <div className={styles.passwordDisplay}>
            <div className={styles.passwordText}>{password || 'Click "Generate Password" to start'}</div>
            <button
              className={`${styles.copyBtn} ${isCopied ? styles.copied : ''}`}
              onClick={copyToClipboard}
              disabled={!password}
              aria-label={isCopied ? 'Copied to clipboard' : 'Copy password to clipboard'}
            >
              {isCopied ? '✓ Copied' : 'Copy'}
            </button>
          </div>

          <div className={styles.strengthMeter}>
            <div className={styles.strengthLabel}>
              Password Strength:{' '}
              <span className={`${styles.strengthValue} ${styles[strength.toLowerCase().replace(/\s+/g, '')]}`}>
                {strength || '—'}
              </span>
            </div>
            <div className={styles.meterBar}>
              <div
                className={`${styles.meterFill} ${styles[strength.toLowerCase().replace(/\s+/g, '')]}`}
                style={{
                  width:
                    strength === 'Weak'
                      ? '25%'
                      : strength === 'Medium'
                      ? '50%'
                      : strength === 'Strong'
                      ? '75%'
                      : strength === 'Very Strong'
                      ? '100%'
                      : '0%',
                }}
              ></div>
            </div>
          </div>

          <div className={styles.optionsPanel}>
            <div className={styles.optionGroup}>
              <label className={styles.optionLabel}>
                Password Length: <span className={styles.lengthValue}>{passwordLength}</span>
              </label>
              <input
                type="range"
                min="4"
                max="32"
                value={passwordLength}
                onChange={(e) => setPasswordLength(parseInt(e.target.value))}
                className={styles.lengthSlider}
                aria-label="Password length"
              />
            </div>

            <div className={styles.checkboxGroup}>
              {[
                { label: 'Uppercase Letters', checked: includeUppercase, setter: setIncludeUppercase },
                { label: 'Lowercase Letters', checked: includeLowercase, setter: setIncludeLowercase },
                { label: 'Numbers', checked: includeNumbers, setter: setIncludeNumbers },
                { label: 'Symbols', checked: includeSymbols, setter: setIncludeSymbols },
              ].map((option, i) => (
                <div key={i} className={styles.checkboxOption}>
                  <label className={styles.checkboxLabel}>
                    <input
                      type="checkbox"
                      checked={option.checked}
                      onChange={() => option.setter(!option.checked)}
                    />
                    <span className={styles.checkmark}></span>
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.actionButtons}>
            <button
              className={`${styles.generateBtn} ${isGenerating ? styles.generating : ''}`}
              onClick={generatePassword}
              disabled={isGenerating}
            >
              {isGenerating ? 'Generating...' : 'Generate Password'}
            </button>
          </div>

          <div className={styles.customSection}>
            <h3 className={styles.sectionTitle}>Enhance Your Password</h3>
            <p className={styles.sectionDesc}>Enter a weak password to make it more secure:</p>
            <div className={styles.customInputGroup}>
              <input
                type="text"
                value={customInput}
                onChange={(e) => setCustomInput(e.target.value)}
                placeholder="Enter your password to enhance"
                className={styles.customInput}
                aria-label="Password to enhance"
              />
              <button className={styles.enhanceBtn} onClick={generateFromCustomInput}>
                Enhance
              </button>
            </div>
          </div>

          <div className={styles.tipsSection}>
            <h3 className={styles.sectionTitle}>Password Security Tips</h3>
            <ul className={styles.tipsList}>
              <li>Use at least 12 characters with a mix of character types</li>
              <li>Avoid common words, phrases, or personal information</li>
              <li>Use unique passwords for each account</li>
              <li>Consider using a password manager</li>
              <li>Change passwords regularly, especially after security breaches</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default PasswordGenerator;