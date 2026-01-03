import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <h3 className={styles.brandTitle}>VaultPassGenerator</h3>
            <p className={styles.brandDescription}>
              Create strong, random passwords to keep your accounts secure. Our tool helps you generate passwords locally in your browser with no data stored or transmitted.
            </p>
          </div>

          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Features</h4>
            <ul className={styles.list}>
              <li className={styles.listItem}>🔒 Secure Password Generation</li>
              <li className={styles.listItem}>📏 Customizable Length</li>
              <li className={styles.listItem}>💪 Strength Indicator</li>
              <li className={styles.listItem}>🚫 No Data Storage</li>
              <li className={styles.listItem}>🌐 Browser-Based</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Quick Links</h4>
            <ul className={styles.linkList}>
              <li><Link href="/" className={styles.footerLink}>🔑 VaultPassGenerator</Link></li>
              <li><Link href="/about" className={styles.footerLink}>ℹ️ About Us</Link></li>
              <li><Link href="/contact" className={styles.footerLink}>📞 Contact</Link></li>
              <li><Link href="/privacy-policy" className={styles.footerLink}>🛡️ Privacy Policy</Link></li>
              <li><Link href="/ai-and-cybersecurity-the-double-edged-sword" className={styles.footerLink}>🤖 AI and Cybersecurity</Link></li>
              <li><Link href="/ransomware-in-2026-evolving-threats-and-protection" className={styles.footerLink}>🔒  Ransomware in 2026</Link></li>
              <li><Link href="/cloud-security-challenges-in-the-era-of-remote-work" className={styles.footerLink}>🌐 Cloud Security</Link></li>
              <li><Link href="/identity-and-access-management-iam-trends" className={styles.footerLink}>👥 Identity and Access Management</Link></li>  
               <li><Link href="/cybersecurity-for-critical-infrastructure" className={styles.footerLink}>📧 Cybersecurity for Critical Infrastructure</Link></li>
               <li><Link href="/cybersecurity-in-the-internet-of-things-iot" className={styles.footerLink}>📡 Cybersecurity in the IoT</Link></li>
               <li><Link href="/cybersecurity-skills-and-careers-in-2026" className={styles.footerLink}>🌐 Cybersecurity Skills and Careers-in-2026</Link></li>
               <li><Link href="/cybersecurity-and-blockchain" className={styles.footerLink}>🔑 Cybersecurity and Blockchain</Link></li>
               <li><Link href="/cybersecurity-regulations-and-compliance" className={styles.footerLink}>🛡️ Cybersecurity Regulations and Compliance</Link></li>
               <li><Link href="/future-cybersecurity-trends" className={styles.footerLink}>🌟 Future Cybersecurity Trends</Link></li>
               <li><Link href="/passwordless-authentication-the-future-of-login-security" className={styles.footerLink}>🔑 Passwordless Authentication</Link></li>
               
               
               
            
              
            </ul>
          </div>

          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Security Tips</h4>
            <ul className={styles.list}>
              <li className={styles.listItem}>✅ Use 12+ characters</li>
              <li className={styles.listItem}>✅ Mix character types</li>
              <li className={styles.listItem}>✅ Avoid common words</li>
              <li className={styles.listItem}>✅ Use unique passwords</li>
              <li className={styles.listItem}>✅ Change regularly</li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.bottomContent}>
            <p className={styles.copyright}>&copy; {currentYear} VaultPassGenerator. All rights reserved.</p>
            <div className={styles.legal}>
              <Link href="/privacy-policy" className={styles.legalLink}>Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;