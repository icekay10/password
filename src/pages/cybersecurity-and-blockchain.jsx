import styles from './BlockchainSecurity.module.css';

const BlockchainSecurity = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Cybersecurity and Blockchain</h1>
        <p className={styles.subtitle}>
          Revolutionizing digital security through decentralized technologies and distributed trust models
        </p>

        <div className={styles.content}>
          {/* Section 1: Introduction */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>The Blockchain Security Paradigm Shift</h2>
            <p className={styles.paragraph}>
              Blockchain technology represents a fundamental reimagining of digital security, moving from 
              centralized trust models to distributed, immutable ledgers. By eliminating single points of 
              failure and creating tamper-evident records, blockchain introduces new paradigms for securing 
              digital assets, identities, and transactions.
            </p>
            <div className={styles.statisticsGrid}>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>$6.6B</div>
                <div className={styles.statLabel}>Blockchain security market by 2025</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>71%</div>
                <div className={styles.statLabel}>Reduction in identity fraud costs</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>90%</div>
                <div className={styles.statLabel}>Faster audit processes</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>$2.9B</div>
                <div className={styles.statLabel}>Saved in financial fraud annually</div>
              </div>
            </div>
          </div>

          {/* Section 2: Identity Management */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Blockchain for Secure Identity Management</h2>
            <p className={styles.paragraph}>
              Traditional identity systems suffer from centralization, data breaches, and lack of user control. 
              Blockchain-based identity solutions empower individuals with self-sovereign identities while 
              providing verifiable credentials without exposing personal data.
            </p>

            <div className={styles.featuresGrid}>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>🆔</div>
                <h3 className={styles.featureTitle}>Decentralized Identifiers (DIDs)</h3>
                <p className={styles.featureDesc}>
                  Globally unique identifiers created and controlled by the individual, stored on distributed 
                  ledgers, enabling direct peer-to-peer authentication without intermediaries
                </p>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>📋</div>
                <h3 className={styles.featureTitle}>Verifiable Credentials</h3>
                <p className={styles.featureDesc}>
                  Digitally signed claims that can be cryptographically verified, allowing selective disclosure 
                  of identity attributes while maintaining privacy through zero-knowledge proofs
                </p>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>🔗</div>
                <h3 className={styles.featureTitle}>Identity Wallets</h3>
                <p className={styles.featureDesc}>
                  User-controlled digital wallets that store and manage credentials, providing seamless 
                  authentication across services while maintaining complete user control
                </p>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>🤝</div>
                <h3 className={styles.featureTitle}>Trust Frameworks</h3>
                <div className={styles.featureDesc}>
                  Standardized governance models that establish rules for issuing, holding, and verifying 
                  digital credentials across different ecosystems and jurisdictions
                </div>
              </div>
            </div>

            <div className={styles.section}>
              <h3 className={styles.subSectionTitle}>How Blockchain Identity Works</h3>
              <div className={styles.identityFlow}>
                <div className={styles.flowStep}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h4 className={styles.stepTitle}>Issuance</h4>
                    <p>Trusted organizations issue verifiable credentials to users' digital wallets</p>
                  </div>
                </div>
                <div className={styles.flowStep}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h4 className={styles.stepTitle}>Storage</h4>
                    <p>Users store credentials in their secure digital wallets, maintaining full control</p>
                  </div>
                </div>
                <div className={styles.flowStep}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h4 className={styles.stepTitle}>Presentation</h4>
                    <p>Users share specific credentials with verifiers using selective disclosure</p>
                  </div>
                </div>
                <div className={styles.flowStep}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h4 className={styles.stepTitle}>Verification</h4>
                    <p>Verifiers cryptographically validate credentials without contacting issuers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Decentralized Security Models */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Decentralized Security Models: Benefits and Risks</h2>
            <p className={styles.paragraph}>
              Moving from centralized to decentralized security architectures introduces both revolutionary 
              advantages and novel challenges that must be carefully managed.
            </p>

            <div className={styles.comparison}>
              <div className={styles.model}>
                <div className={styles.modelHeader}>
                  <div className={styles.modelIcon}>✅</div>
                  <h3 className={styles.modelTitle}>Benefits</h3>
                </div>
                <div className={styles.modelContent}>
                  <ul className={styles.modelList}>
                    <li><strong>No Single Point of Failure:</strong> Distributed networks eliminate centralized targets for attackers</li>
                    <li><strong>Immutable Audit Trails:</strong> Tamper-evident records provide perfect auditability</li>
                    <li><strong>Enhanced Privacy:</strong> Zero-knowledge proofs enable verification without data exposure</li>
                    <li><strong>Reduced Intermediation:</strong> Direct peer-to-peer interactions eliminate middlemen risks</li>
                    <li><strong>Global Consensus:</strong> Distributed trust reduces reliance on any single entity</li>
                  </ul>
                </div>
              </div>

              <div className={styles.model}>
                <div className={styles.modelHeader}>
                  <div className={styles.modelIcon}>⚠️</div>
                  <h3 className={styles.modelTitle}>Risks & Challenges</h3>
                </div>
                <div className={styles.modelContent}>
                  <ul className={styles.modelList}>
                    <li><strong>51% Attacks:</strong> Control of majority network power enables transaction manipulation</li>
                    <li><strong>Smart Contract Vulnerabilities:</strong> Immutable code with bugs cannot be patched</li>
                    <li><strong>Private Key Management:</strong> Lost keys mean permanent loss of access and assets</li>
                    <li><strong>Regulatory Uncertainty:</strong> Evolving legal frameworks create compliance challenges</li>
                    <li><strong>Quantum Computing Threats:</strong> Future quantum computers could break current cryptography</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={styles.section}>
              <h3 className={styles.subSectionTitle}>Security Considerations by Blockchain Type</h3>
              <div className={styles.blockchainTypes}>
                <div className={styles.typeCard}>
                  <div className={styles.typeHeader}>
                    <div className={styles.typeIcon}>🌐</div>
                    <h4 className={styles.typeTitle}>Public Blockchains</h4>
                  </div>
                  <div className={styles.typeContent}>
                    <p><strong>Security Model:</strong> Proof of Work/Proof of Stake consensus</p>
                    <p><strong>Key Risk:</strong> 51% attacks, transaction privacy</p>
                    <p><strong>Best For:</strong> Transparent, trustless applications</p>
                  </div>
                </div>
                <div className={styles.typeCard}>
                  <div className={styles.typeHeader}>
                    <div className={styles.typeIcon}>🏢</div>
                    <h4 className={styles.typeTitle}>Private Blockchains</h4>
                  </div>
                  <div className={styles.typeContent}>
                    <p><strong>Security Model:</strong> Permissioned node participation</p>
                    <p><strong>Key Risk:</strong> Centralization, insider threats</p>
                    <p><strong>Best For:</strong> Enterprise consortium applications</p>
                  </div>
                </div>
                <div className={styles.typeCard}>
                  <div className={styles.typeHeader}>
                    <div className={styles.typeIcon}>🔒</div>
                    <h4 className={styles.typeTitle}>Hybrid Blockchains</h4>
                  </div>
                  <div className={styles.typeContent}>
                    <p><strong>Security Model:</strong> Combined public/private elements</p>
                    <p><strong>Key Risk:</strong> Complexity, attack surface</p>
                    <p><strong>Best For:</strong> Regulated industry applications</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: Real-World Applications */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Real-World Applications in Finance and Healthcare</h2>
            <p className={styles.paragraph}>
              Blockchain security solutions are transforming industries by providing unprecedented levels of 
              transparency, auditability, and trust in sensitive applications.
            </p>

            <div className={styles.industryApplications}>
              <div className={styles.industry}>
                <div className={styles.industryHeader}>
                  <div className={styles.industryIcon}>💰</div>
                  <h3 className={styles.industryTitle}>Financial Services</h3>
                </div>
                <div className={styles.industryContent}>
                  <div className={styles.application}>
                    <h4 className={styles.appTitle}>Cross-Border Payments</h4>
                    <p className={styles.appDesc}>
                      Secure, instant international transfers with reduced fees and eliminated intermediaries, 
                      using smart contracts for automated compliance and fraud detection
                    </p>
                    <div className={styles.appBenefits}>
                      <span>70% Cost Reduction</span>
                      <span>Real-time Settlement</span>
                      <span>Enhanced AML Compliance</span>
                    </div>
                  </div>
                  <div className={styles.application}>
                    <h4 className={styles.appTitle}>Trade Finance</h4>
                    <p className={styles.appDesc}>
                      Digitized letters of credit and trade documentation with immutable audit trails, 
                      reducing fraud and accelerating settlement from weeks to hours
                    </p>
                    <div className={styles.appBenefits}>
                      <span>Fraud Reduction</span>
                      <span>Faster Processing</span>
                      <span>Transparent Tracking</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.industry}>
                <div className={styles.industryHeader}>
                  <div className={styles.industryIcon}>🏥</div>
                  <h3 className={styles.industryTitle}>Healthcare</h3>
                </div>
                <div className={styles.industryContent}>
                  <div className={styles.application}>
                    <h4 className={styles.appTitle}>Medical Records Management</h4>
                    <p className={styles.appDesc}>
                      Secure, interoperable health records with patient-controlled access, ensuring data integrity 
                      while enabling seamless sharing between authorized healthcare providers
                    </p>
                    <div className={styles.appBenefits}>
                      <span>Patient Data Control</span>
                      <span>Interoperability</span>
                      <span>Audit Compliance</span>
                    </div>
                  </div>
                  <div className={styles.application}>
                    <h4 className={styles.appTitle}>Pharmaceutical Supply Chain</h4>
                    <p className={styles.appDesc}>
                      End-to-end tracking of pharmaceuticals from manufacturer to patient, preventing counterfeit 
                      drugs and ensuring medication authenticity and proper storage conditions
                    </p>
                    <div className={styles.appBenefits}>
                      <span>Counterfeit Prevention</span>
                      <span>Temperature Monitoring</span>
                      <span>Recall Efficiency</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 5: Implementation Frameworks */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Blockchain Security Implementation Framework</h2>
            <p className={styles.paragraph}>
              Successfully implementing blockchain security requires careful planning, appropriate technology 
              selection, and comprehensive risk management strategies.
            </p>

            <div className={styles.implementationSteps}>
              <div className={styles.implStep}>
                <div className={styles.stepIndicator}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepConnector}></div>
                </div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Assessment & Planning</h4>
                  <p>Evaluate use case suitability, select appropriate blockchain type, and define security requirements and governance models</p>
                </div>
              </div>
              <div className={styles.implStep}>
                <div className={styles.stepIndicator}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepConnector}></div>
                </div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Architecture Design</h4>
                  <p>Design consensus mechanisms, smart contract architecture, and integration with existing security infrastructure</p>
                </div>
              </div>
              <div className={styles.implStep}>
                <div className={styles.stepIndicator}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepConnector}></div>
                </div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Development & Testing</h4>
                  <p>Implement with security-first principles, conduct comprehensive smart contract audits, and perform penetration testing</p>
                </div>
              </div>
              <div className={styles.implStep}>
                <div className={styles.stepIndicator}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepConnector}></div>
                </div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Deployment & Monitoring</h4>
                  <p>Deploy with secure key management, implement continuous monitoring, and establish incident response procedures</p>
                </div>
              </div>
            </div>

            <div className={styles.section}>
              <h3 className={styles.subSectionTitle}>Essential Security Best Practices</h3>
              <div className={styles.bestPractices}>
                <div className={styles.practice}>
                  <div className={styles.practiceIcon}>🔐</div>
                  <div className={styles.practiceContent}>
                    <h4 className={styles.practiceTitle}>Multi-Signature Wallets</h4>
                    <p>Require multiple authorizations for critical transactions to prevent single points of failure and unauthorized access</p>
                  </div>
                </div>
                <div className={styles.practice}>
                  <div className={styles.practiceIcon}>👁️</div>
                  <div className={styles.practiceContent}>
                    <h4 className={styles.practiceTitle}>Continuous Auditing</h4>
                    <p>Regular security audits of smart contracts and blockchain infrastructure, including automated vulnerability scanning</p>
                  </div>
                </div>
                <div className={styles.practice}>
                  <div className={styles.practiceIcon}>🔄</div>
                  <div className={styles.practiceContent}>
                    <h4 className={styles.practiceTitle}>Upgrade Mechanisms</h4>
                    <p>Design upgradeable smart contracts with proper governance to fix vulnerabilities while maintaining system integrity</p>
                  </div>
                </div>
                <div className={styles.practice}>
                  <div className={styles.practiceIcon}>📊</div>
                  <div className={styles.practiceContent}>
                    <h4 className={styles.practiceTitle}>Privacy by Design</h4>
                    <p>Implement zero-knowledge proofs and encryption to protect sensitive data while maintaining blockchain benefits</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 6: Future Outlook */}
          <div className={styles.section}>
            <div className={styles.futureOutlook}>
              <h3 className={styles.futureTitle}>The Future: Quantum-Resistant Blockchains and Beyond</h3>
              <p className={styles.futureText}>
                As blockchain technology matures, the next frontier involves addressing emerging threats while 
                expanding applications. Quantum-resistant cryptography, interoperable blockchain networks, and 
                AI-enhanced security monitoring will define the next generation of decentralized security solutions.
              </p>
              <div className={styles.futureTrends}>
                <div className={styles.trend}>
                  <div className={styles.trendIcon}>⚛️</div>
                  <div className={styles.trendContent}>
                    <h4 className={styles.trendTitle}>Post-Quantum Cryptography</h4>
                    <p>Development of quantum-resistant algorithms to secure blockchain networks against future quantum computing threats</p>
                  </div>
                </div>
                <div className={styles.trend}>
                  <div className={styles.trendIcon}>🌉</div>
                  <div className={styles.trendContent}>
                    <h4 className={styles.trendTitle}>Cross-Chain Interoperability</h4>
                    <p>Secure protocols enabling different blockchain networks to communicate and share data while maintaining security</p>
                  </div>
                </div>
                <div className={styles.trend}>
                  <div className={styles.trendIcon}>🤖</div>
                  <div className={styles.trendContent}>
                    <h4 className={styles.trendTitle}>AI-Enhanced Security</h4>
                    <p>Machine learning algorithms for real-time threat detection and automated response in decentralized networks</p>
                  </div>
                </div>
                <div className={styles.trend}>
                  <div className={styles.trendIcon}>📜</div>
                  <div className={styles.trendContent}>
                    <h4 className={styles.trendTitle}>Regulatory Frameworks</h4>
                    <p>Development of comprehensive legal frameworks balancing innovation, security, and consumer protection</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 7: Key Takeaways */}
          <div className={styles.section}>
            <div className={styles.keyTakeaways}>
              <h3 className={styles.takeawaysTitle}>Essential Blockchain Security Insights</h3>
              <div className={styles.takeawaysGrid}>
                <div className={styles.takeawayCard}>
                  <div className={styles.takeawayIcon}>💡</div>
                  <h4 className={styles.takeawayTitle}>Not a Panacea</h4>
                  <p>Blockchain enhances specific security aspects but doesn't replace traditional security controls</p>
                </div>
                <div className={styles.takeawayCard}>
                  <div className={styles.takeawayIcon}>⚖️</div>
                  <h4 className={styles.takeawayTitle}>Trade-offs Required</h4>
                  <p>Decentralization involves balancing transparency, performance, and security requirements</p>
                </div>
                <div className={styles.takeawayCard}>
                  <div className={styles.takeawayIcon}>🎯</div>
                  <h4 className={styles.takeawayTitle}>Use Case Specific</h4>
                  <p>Blockchain security solutions must be tailored to specific applications and threat models</p>
                </div>
                <div className={styles.takeawayCard}>
                  <div className={styles.takeawayIcon}>🚀</div>
                  <h4 className={styles.takeawayTitle}>Evolving Landscape</h4>
                  <p>Continuous learning and adaptation required as technology and threats rapidly evolve</p>
                </div>
              </div>
              <p className={styles.conclusion}>
                Blockchain represents a fundamental shift in digital security paradigms, offering unprecedented 
                opportunities for secure, transparent, and trustworthy digital interactions. While challenges 
                remain, thoughtful implementation of blockchain security solutions can revolutionize how we 
                protect digital assets, verify identities, and establish trust in an increasingly interconnected world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockchainSecurity;