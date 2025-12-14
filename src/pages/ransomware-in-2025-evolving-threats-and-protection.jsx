import styles from './Ransomware2025.module.css';

const Ransomware2025 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Ransomware in 2025: Evolving Threats and Protection</h1>
        <p className={styles.subtitle}>
          A comprehensive guide to understanding, preventing, and recovering from modern ransomware attacks
        </p>

        <div className={styles.content}>
          {/* Section 1: Introduction */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>The Ransomware Landscape in 2025</h2>
            <p className={styles.paragraph}>
              Ransomware continues to be one of the most destructive cyber threats facing organizations worldwide. 
              As we move into 2025, attackers are employing more sophisticated techniques, targeting critical 
              infrastructure, and demanding increasingly higher ransoms. The average ransomware payment has increased 
              by 300% since 2020, with attacks becoming more targeted and devastating.
            </p>
            <div className={styles.statisticsGrid}>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>$2.3M</div>
                <div className={styles.statLabel}>Average Ransom Demand</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>78%</div>
                <div className={styles.statLabel}>Of Attacks Target Businesses</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>24 hrs</div>
                <div className={styles.statLabel}>Average Downtime</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>65%</div>
                <div className={styles.statLabel}>Increase in RaaS Attacks</div>
              </div>
            </div>
          </div>

          {/* Section 2: Top Ransomware Variants */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Top Ransomware Variants Businesses Must Watch Out For</h2>
            <p className={styles.paragraph}>
              Understanding the specific characteristics of different ransomware families is crucial for effective defense:
            </p>
            
            <div className={styles.variantsGrid}>
              <div className={styles.variantItem}>
                <div className={styles.variantHeader}>
                  <div className={styles.variantIcon}>🟥</div>
                  <h3 className={styles.variantTitle}>LockBit 4.0</h3>
                </div>
                <div className={styles.variantDetails}>
                  <p><strong>Primary Target:</strong> Large Enterprises & Government</p>
                  <p><strong>Method:</strong> Triple Extortion (Encryption + Data Theft + DDoS)</p>
                  <p><strong>Demand Range:</strong> $1M - $50M</p>
                  <p><strong>Unique Feature:</strong> Self-spreading capabilities via network shares</p>
                </div>
              </div>

              <div className={styles.variantItem}>
                <div className={styles.variantHeader}>
                  <div className={styles.variantIcon}>🟦</div>
                  <h3 className={styles.variantTitle}>Cl0p Ransomware</h3>
                </div>
                <div className={styles.variantDetails}>
                  <p><strong>Primary Target:</strong> Finance & Healthcare</p>
                  <p><strong>Method:</strong> Exploits zero-day vulnerabilities in file transfer tools</p>
                  <p><strong>Demand Range:</strong> $500K - $10M</p>
                  <p><strong>Unique Feature:</strong> Uses legitimate security tools to evade detection</p>
                </div>
              </div>

              <div className={styles.variantItem}>
                <div className={styles.variantHeader}>
                  <div className={styles.variantIcon}>🟪</div>
                  <h3 className={styles.variantTitle}>BlackCat/ALPHV</h3>
                </div>
                <div className={styles.variantDetails}>
                  <p><strong>Primary Target:</strong> Critical Infrastructure</p>
                  <p><strong>Method:</strong> Ransomware-as-a-Service (RaaS) written in Rust</p>
                  <p><strong>Demand Range:</strong> $400K - $8M</p>
                  <p><strong>Unique Feature:</strong> Multi-platform capabilities (Windows, Linux, ESXi)</p>
                </div>
              </div>

              <div className={styles.variantItem}>
                <div className={styles.variantHeader}>
                  <div className={styles.variantIcon}>🟨</div>
                  <h3 className={styles.variantTitle}>Royal Ransomware</h3>
                </div>
                <div className={styles.variantDetails}>
                  <p><strong>Primary Target:</strong> Manufacturing & Logistics</p>
                  <p><strong>Method:</strong> Human-operated, manual encryption</p>
                  <p><strong>Demand Range:</strong> $250K - $5M</p>
                  <p><strong>Unique Feature:</strong> Uses legitimate remote administration tools</p>
                </div>
              </div>
            </div>

            <div className={styles.section}>
              <h3 className={styles.subSectionTitle}>Emerging Trends in 2025</h3>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <strong>AI-Enhanced Ransomware:</strong> Using machine learning to identify valuable data and optimize encryption patterns
                </li>
                <li className={styles.listItem}>
                  <strong>Quantum-Resistant Encryption:</strong> Attackers adopting post-quantum cryptography to make decryption impossible
                </li>
                <li className={styles.listItem}>
                  <strong>Supply Chain Attacks:</strong> Targeting software vendors to infect thousands of customers simultaneously
                </li>
                <li className={styles.listItem}>
                  <strong>IoT Ransomware:</strong> Targeting connected devices in industrial control systems
                </li>
                <li className={styles.listItem}>
                  <strong>Ransomware-as-a-Service (RaaS):</strong> Making sophisticated attacks accessible to less technical criminals
                </li>
              </ul>
            </div>
          </div>

          {/* Section 3: Prevention Best Practices */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Best Practices for Ransomware Prevention</h2>
            <p className={styles.paragraph}>
              A multi-layered defense strategy is essential to protect against modern ransomware threats:
            </p>

            <div className={styles.practicesGrid}>
              <div className={styles.practiceItem}>
                <div className={styles.practiceIcon}>🔐</div>
                <h3 className={styles.practiceTitle}>Endpoint Protection</h3>
                <ul className={styles.miniList}>
                  <li>Next-gen antivirus with behavioral analysis</li>
                  <li>Application whitelisting</li>
                  <li>Regular patch management</li>
                  <li>Privilege access management</li>
                </ul>
              </div>

              <div className={styles.practiceItem}>
                <div className={styles.practiceIcon}>💾</div>
                <h3 className={styles.practiceTitle}>Backup Strategy</h3>
                <ul className={styles.miniList}>
                  <li>3-2-1 Backup Rule (3 copies, 2 media types, 1 offsite)</li>
                  <li>Immutable/air-gapped backups</li>
                  <li>Regular restoration testing</li>
                  <li>Version-controlled backups</li>
                </ul>
              </div>

              <div className={styles.practiceItem}>
                <div className={styles.practiceIcon}>👁️</div>
                <h3 className={styles.practiceTitle}>Network Security</h3>
                <ul className={styles.miniList}>
                  <li>Network segmentation and micro-segmentation</li>
                  <li>Intrusion detection/prevention systems</li>
                  <li>Email filtering and web gateways</li>
                  <li>Zero Trust architecture implementation</li>
                </ul>
              </div>

              <div className={styles.practiceItem}>
                <div className={styles.practiceIcon}>👥</div>
                <h3 className={styles.practiceTitle}>Human Factor</h3>
                <ul className={styles.miniList}>
                  <li>Regular security awareness training</li>
                  <li>Phishing simulation exercises</li>
                  <li>Incident response team training</li>
                  <li>Clear reporting procedures</li>
                </ul>
              </div>
            </div>

            <div className={styles.section}>
              <h3 className={styles.subSectionTitle}>Critical Prevention Measures</h3>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <strong>Implement Multi-Factor Authentication (MFA):</strong> Require MFA for all remote access and privileged accounts
                </li>
                <li className={styles.listItem}>
                  <strong>Disable RDP When Not Needed:</strong> Remote Desktop Protocol is a common attack vector
                </li>
                <li className={styles.listItem}>
                  <strong>Email Security:</strong> Implement advanced email filtering and sandboxing
                </li>
                <li className={styles.listItem}>
                  <strong>Regular Vulnerability Scanning:</strong> Identify and patch vulnerabilities before attackers exploit them
                </li>
                <li className={styles.listItem}>
                  <strong>Incident Response Plan:</strong> Develop and regularly test a comprehensive response plan
                </li>
              </ul>
            </div>
          </div>

          {/* Section 4: Case Studies */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Case Studies: How Companies Recovered from Attacks</h2>

            <div className={styles.caseStudy}>
              <h3 className={styles.caseTitle}>Case Study 1: Global Logistics Company</h3>
              <div className={styles.caseDetails}>
                <p><strong>Attack Type:</strong> LockBit 3.0 via compromised vendor credentials</p>
                <p><strong>Impact:</strong> 48-hour operational shutdown, $4.2M ransom demand</p>
                <p><strong>Recovery Actions:</strong></p>
                <ul className={styles.miniList}>
                  <li>Immediately isolated affected systems</li>
                  <li>Activated immutable backup restoration</li>
                  <li>Engaged cybersecurity insurance provider</li>
                  <li>Coordinated with law enforcement</li>
                </ul>
                <p><strong>Lessons Learned:</strong> Implemented stricter vendor access controls and enhanced backup verification processes</p>
              </div>
            </div>

            <div className={styles.caseStudy}>
              <h3 className={styles.caseTitle}>Case Study 2: Regional Hospital Network</h3>
              <div className={styles.caseDetails}>
                <p><strong>Attack Type:</strong> Cl0p ransomware via zero-day vulnerability</p>
                <p><strong>Impact:</strong> Patient record system encryption, emergency diversions</p>
                <p><strong>Recovery Actions:</strong></p>
                <ul className={styles.miniList}>
                  <li>Activated paper-based emergency procedures</li>
                  <li>Used isolated backup servers not connected to network</li>
                  <li>Hired specialized ransomware negotiators</li>
                  <li>Complete network segmentation rebuild</li>
                </ul>
                <p><strong>Lessons Learned:</strong> Invested in air-gapped backups and implemented regular zero-day patch testing</p>
              </div>
            </div>

            <div className={styles.caseStudy}>
              <h3 className={styles.caseTitle}>Case Study 3: Manufacturing Corporation</h3>
              <div className={styles.caseDetails}>
                <p><strong>Attack Type:</strong> Royal ransomware via phishing email</p>
                <p><strong>Impact:</strong> Production line shutdown, intellectual property theft</p>
                <p><strong>Recovery Actions:</strong></p>
                <ul className={styles.miniList}>
                  <li>Declined ransom payment and notified authorities</li>
                  <li>Restored from validated, encrypted backups</li>
                  <li>Conducted full forensic investigation</li>
                  <li>Implemented comprehensive employee retraining</li>
                </ul>
                <p><strong>Lessons Learned:</strong> Enhanced email security with AI-based filtering and regular phishing simulations</p>
              </div>
            </div>
          </div>

          {/* Section 5: Recovery Framework */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Ransomware Recovery Framework</h2>
            <div className={styles.recoverySteps}>
              <div className={styles.step}>
                <div className={styles.stepNumber}>1</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Immediate Response</h4>
                  <p>Isolate affected systems, preserve evidence, and activate incident response team</p>
                </div>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNumber}>2</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Assessment & Communication</h4>
                  <p>Determine scope, notify stakeholders, and engage legal/insurance teams</p>
                </div>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNumber}>3</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Containment & Eradication</h4>
                  <p>Remove ransomware, close attack vectors, and verify complete removal</p>
                </div>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNumber}>4</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Recovery & Restoration</h4>
                  <p>Restore systems from clean backups and validate integrity before production</p>
                </div>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNumber}>5</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Post-Incident Analysis</h4>
                  <p>Conduct root cause analysis, implement improvements, and update response plan</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 6: Key Takeaways */}
          <div className={styles.section}>
            <div className={styles.takeawayBox}>
              <h3 className={styles.takeawayTitle}>Essential Takeaways for 2025</h3>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <strong>Prevention is cheaper than recovery:</strong> Invest in security before an attack occurs
                </li>
                <li className={styles.listItem}>
                  <strong>Backups are your lifeline:</strong> Ensure they are immutable, tested, and isolated
                </li>
                <li className={styles.listItem}>
                  <strong>Assume breach mentality:</strong> Prepare for when, not if, an attack will occur
                </li>
                <li className={styles.listItem}>
                  <strong>Employee training is critical:</strong> Humans remain the weakest link in security
                </li>
                <li className={styles.listItem}>
                  <strong>Have a tested response plan:</strong> Minutes matter during a ransomware incident
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ransomware2025;