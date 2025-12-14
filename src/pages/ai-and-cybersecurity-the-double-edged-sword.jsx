import styles from './AICybersecurity.module.css';

const AICybersecurity = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>AI and Cybersecurity: The Double-Edged Sword</h1>
        <p className={styles.subtitle}>
          Exploring how artificial intelligence transforms both cyber attacks and defenses
        </p>

        <div className={styles.content}>
          {/* Section 1: Introduction */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>The AI Revolution in Cybersecurity</h2>
            <p className={styles.paragraph}>
              Artificial Intelligence has fundamentally transformed cybersecurity, creating both unprecedented 
              opportunities for defense and sophisticated tools for attackers. This technological evolution represents 
              a constant arms race between security professionals and cybercriminals.
            </p>
          </div>

          {/* Section 2: Hackers Using AI */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>How Hackers Use AI to Launch Smarter Attacks</h2>
            <p className={styles.paragraph}>
              Cybercriminals are leveraging AI to create more sophisticated, adaptive, and scalable attacks:
            </p>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <strong>AI-Powered Phishing:</strong> Machine learning algorithms generate highly convincing 
                phishing emails by analyzing writing styles from social media and previous communications
              </li>
              <li className={styles.listItem}>
                <strong>Intelligent Malware:</strong> Self-modifying malware that learns from security systems 
                and changes its behavior to evade detection
              </li>
              <li className={styles.listItem}>
                <strong>Automated Vulnerability Discovery:</strong> AI systems that scan millions of lines of code 
                to find security flaws faster than human researchers
              </li>
              <li className={styles.listItem}>
                <strong>Deepfake Social Engineering:</strong> Using AI-generated audio and video to impersonate 
                executives or trusted contacts in real-time
              </li>
              <li className={styles.listItem}>
                <strong>Adaptive Password Cracking:</strong> AI systems that learn from data breaches to predict 
                password patterns and bypass authentication
              </li>
              <li className={styles.listItem}>
                <strong>AI-Driven Botnets:</strong> Networks of compromised devices that coordinate attacks 
                using machine learning to optimize timing and targets
              </li>
            </ul>
          </div>

          {/* Section 3: AI Defense Systems */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>AI-Powered Defense Systems: Can They Keep Up?</h2>
            <p className={styles.paragraph}>
              Security professionals are deploying AI systems to combat evolving threats:
            </p>
            <div className={styles.featuresGrid}>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>🛡️</div>
                <h3 className={styles.featureTitle}>Behavioral Analytics</h3>
                <p className={styles.featureDesc}>
                  AI systems establish normal user behavior patterns and detect anomalies in real-time, 
                  identifying potential insider threats or compromised accounts
                </p>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>🔍</div>
                <h3 className={styles.featureTitle}>Threat Intelligence</h3>
                <p className={styles.featureDesc}>
                  Machine learning analyzes global threat data to predict attack vectors and provide 
                  proactive defense recommendations
                </p>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>⚡</div>
                <h3 className={styles.featureTitle}>Automated Response</h3>
                <p className={styles.featureDesc}>
                  AI systems automatically isolate affected systems, block malicious IP addresses, 
                  and deploy patches within seconds of detecting threats
                </p>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>📊</div>
                <h3 className={styles.featureTitle}>Predictive Analysis</h3>
                <p className={styles.featureDesc}>
                  Using historical data to forecast potential security breaches and 
                  prioritize vulnerabilities based on likely attack scenarios
                </p>
              </div>
            </div>
            <div className={styles.section}>
              <p className={styles.paragraph}>
                <strong>Current Challenges:</strong> While AI defenses are advancing rapidly, they face 
                challenges including false positives, adversarial attacks designed to fool AI systems, 
                and the need for massive amounts of training data. The race between offensive and defensive 
                AI creates a continuous cycle of innovation and adaptation.
              </p>
            </div>
          </div>

          {/* Section 4: Ethical Concerns */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Ethical Concerns Around AI in Cybersecurity</h2>
            <p className={styles.paragraph}>
              The integration of AI in cybersecurity raises significant ethical questions that require 
              careful consideration and regulation:
            </p>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <strong>Privacy vs. Security Balance:</strong> AI systems require access to vast amounts 
                of data for training, potentially infringing on individual privacy rights while seeking 
                to enhance security
              </li>
              <li className={styles.listItem}>
                <strong>Algorithmic Bias:</strong> Security AI trained on historical data may perpetuate 
                existing biases, leading to disproportionate targeting of specific groups or regions
              </li>
              <li className={styles.listItem}>
                <strong>Autonomous Weaponization:</strong> The risk of AI-powered cyber weapons operating 
                without human oversight, potentially causing unintended collateral damage
              </li>
              <li className={styles.listItem}>
                <strong>Accountability Gap:</strong> Difficulty in attributing responsibility when 
                AI systems make incorrect security decisions or fail to prevent attacks
              </li>
              <li className={styles.listItem}>
                <strong>Access Inequality:</strong> Large organizations can afford advanced AI security, 
                while smaller entities remain vulnerable, creating a security divide
              </li>
              <li className={styles.listItem}>
                <strong>Dual-Use Dilemma:</strong> The same AI technologies that protect systems can be 
                repurposed for offensive cyber operations by state and non-state actors
              </li>
              <li className={styles.listItem}>
                <strong>Transparency Issues:</strong> Many AI security systems operate as "black boxes" 
                making it difficult to understand their decision-making processes
              </li>
              <li className={styles.listItem}>
                <strong>Job Displacement Concerns:</strong> Automation of security tasks potentially 
                reduces human oversight while threatening cybersecurity employment
              </li>
            </ul>
          </div>

          {/* Section 5: The Future Landscape */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>The Future: Coexistence and Regulation</h2>
            <p className={styles.paragraph}>
              As AI continues to evolve in cybersecurity, several key developments will shape the landscape:
            </p>
            <div className={styles.featuresGrid}>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>🤝</div>
                <h3 className={styles.featureTitle}>Human-AI Collaboration</h3>
                <p className={styles.featureDesc}>
                  Future systems will emphasize human oversight with AI augmentation, 
                  combining machine speed with human judgment and ethics
                </p>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>📜</div>
                <h3 className={styles.featureTitle}>Global Standards</h3>
                <p className={styles.featureDesc}>
                  International frameworks for ethical AI use in cybersecurity, 
                  including transparency requirements and accountability measures
                </p>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>🔄</div>
                <h3 className={styles.featureTitle}>Continuous Learning</h3>
                <p className={styles.featureDesc}>
                  Self-improving AI systems that adapt to new threats in real-time 
                  while maintaining ethical boundaries through built-in safeguards
                </p>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>🌐</div>
                <h3 className={styles.featureTitle}>Democratized Security</h3>
                <p className={styles.featureDesc}>
                  Open-source AI security tools and shared threat intelligence 
                  making advanced protection accessible to organizations of all sizes
                </p>
              </div>
            </div>
            <div className={styles.section}>
              <p className={styles.paragraph}>
                <strong>Key Takeaway:</strong> AI in cybersecurity represents both our greatest defense 
                innovation and our most significant vulnerability. The path forward requires balanced 
                development—harnessing AI's power for protection while implementing robust ethical 
                frameworks, maintaining human oversight, and fostering international cooperation to 
                prevent an AI-powered cyber arms race.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AICybersecurity;