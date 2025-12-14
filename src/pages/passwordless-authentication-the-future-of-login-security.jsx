import styles from './PasswordlessAuthentication.module.css';

const PasswordlessAuthentication = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Passwordless Authentication: The Future of Login Security</h1>
        <p className={styles.subtitle}>
          Eliminating passwords to enhance security, improve user experience, and reduce credential-based attacks
        </p>

        <div className={styles.content}>
          {/* Section 1: Introduction */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>The Password Problem and Its Solution</h2>
            <p className={styles.paragraph}>
              Passwords have been the foundation of digital authentication for decades, but they're fundamentally flawed. 
              Passwordless authentication represents a paradigm shift, moving away from memorized secrets to more secure, 
              user-friendly authentication methods that eliminate the weaknesses of traditional password systems.
            </p>
            <div className={styles.statisticsGrid}>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>81%</div>
                <div className={styles.statLabel}>Of data breaches involve weak/stolen passwords</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>92%</div>
                <div className={styles.statLabel}>Of users prefer passwordless login</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>67%</div>
                <div className={styles.statLabel}>Reduction in account takeovers</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>3.2M</div>
                <div className={styles.statLabel}>Passwords stolen every minute</div>
              </div>
            </div>
          </div>

          {/* Section 2: What Is Passwordless Authentication? */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>What Is Passwordless Authentication?</h2>
            <p className={styles.paragraph}>
              Passwordless authentication replaces traditional passwords with alternative verification methods that 
              are more secure and convenient. Instead of requiring users to remember and enter passwords, these 
              systems use possession-based, biometric, or cryptographic methods to verify identity.
            </p>

            <div className={styles.authMethods}>
              <div className={styles.methodCard}>
                <div className={styles.methodHeader}>
                  <div className={styles.methodIcon}>📱</div>
                  <h3 className={styles.methodTitle}>Biometric Authentication</h3>
                </div>
                <div className={styles.methodContent}>
                  <p><strong>How it works:</strong> Uses unique biological characteristics like fingerprints, facial recognition, 
                  voice patterns, or iris scans to verify identity</p>
                  <div className={styles.methodExamples}>
                    <span>Face ID (Apple)</span>
                    <span>Touch ID</span>
                    <span>Windows Hello</span>
                    <span>Android Biometric API</span>
                  </div>
                  <p className={styles.methodSecurity}><strong>Security Level:</strong> Very High (when implemented with device encryption)</p>
                </div>
              </div>

              <div className={styles.methodCard}>
                <div className={styles.methodHeader}>
                  <div className={styles.methodIcon}>🔑</div>
                  <h3 className={styles.methodTitle}>Security Keys & FIDO2</h3>
                </div>
                <div className={styles.methodContent}>
                  <p><strong>How it works:</strong> Physical devices or platform authenticators that use public-key cryptography 
                  to prove identity without exposing secrets</p>
                  <div className={styles.methodExamples}>
                    <span>YubiKey</span>
                    <span>Google Titan</span>
                    <span>Thetis FIDO2</span>
                    <span>Platform Authenticators</span>
                  </div>
                  <p className={styles.methodSecurity}><strong>Security Level:</strong> Highest (phishing-resistant)</p>
                </div>
              </div>

              <div className={styles.methodCard}>
                <div className={styles.methodHeader}>
                  <div className={styles.methodIcon}>📧</div>
                  <h3 className={styles.methodTitle}>Magic Links & One-Time Codes</h3>
                </div>
                <div className={styles.methodContent}>
                  <p><strong>How it works:</strong> Sends a time-limited, single-use authentication link or code to a 
                  verified email address or phone number</p>
                  <div className={styles.methodExamples}>
                    <span>Email Magic Links</span>
                    <span>SMS One-Time Codes</span>
                    <span>Push Notifications</span>
                    <span>App-based Approval</span>
                  </div>
                  <p className={styles.methodSecurity}><strong>Security Level:</strong> Medium to High (depends on channel security)</p>
                </div>
              </div>
            </div>

            <div className={styles.section}>
              <h3 className={styles.subSectionTitle}>How Passwordless Authentication Works: The Technical Flow</h3>
              <div className={styles.authFlow}>
                <div className={styles.flowStep}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h4 className={styles.stepTitle}>Registration</h4>
                    <p>User registers their authentication method (biometrics, security key, etc.) with the service</p>
                  </div>
                </div>
                <div className={styles.flowStep}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h4 className={styles.stepTitle}>Challenge</h4>
                    <p>Service sends an authentication challenge when user attempts to login</p>
                  </div>
                </div>
                <div className={styles.flowStep}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepContent}>
                    <h4 className={styles.stepTitle}>Response</h4>
                    <p>User responds using their registered method (biometric scan, key tap, etc.)</p>
                  </div>
                </div>
                <div className={styles.flowStep}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h4 className={styles.stepTitle}>Verification</h4>
                    <p>Service cryptographically verifies the response and grants access</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Benefits Over Traditional Passwords */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Benefits Over Traditional Passwords</h2>
            <p className={styles.paragraph}>
              Passwordless authentication addresses fundamental weaknesses in traditional password systems while 
              improving user experience and reducing operational costs for organizations.
            </p>

            <div className={styles.benefitsComparison}>
              <div className={styles.comparisonSide}>
                <div className={styles.sideHeader}>
                  <div className={styles.sideIcon}>❌</div>
                  <h3 className={styles.sideTitle}>Traditional Passwords</h3>
                </div>
                <div className={styles.sideContent}>
                  <ul className={styles.comparisonList}>
                    <li><strong>Vulnerable to phishing:</strong> Users can be tricked into revealing passwords</li>
                    <li><strong>Password reuse:</strong> 65% of users reuse passwords across multiple sites</li>
                    <li><strong>Weak passwords:</strong> "123456" and "password" remain most common</li>
                    <li><strong>Storage risks:</strong> Password databases are prime targets for breaches</li>
                    <li><strong>User friction:</strong> Password fatigue leads to poor security practices</li>
                    <li><strong>High support costs:</strong> 20-50% of help desk calls are password resets</li>
                  </ul>
                </div>
              </div>

              <div className={styles.comparisonSide}>
                <div className={styles.sideHeader}>
                  <div className={styles.sideIcon}>✅</div>
                  <h3 className={styles.sideTitle}>Passwordless Authentication</h3>
                </div>
                <div className={styles.sideContent}>
                  <ul className={styles.comparisonList}>
                    <li><strong>Phishing-resistant:</strong> FIDO2 and biometrics can't be phished</li>
                    <li><strong>No reuse risk:</strong> Each authentication is unique to the service</li>
                    <li><strong>Strong by design:</strong> Cryptographic strength doesn't depend on user choices</li>
                    <li><strong>No credential storage:</strong> Nothing to steal from servers</li>
                    <li><strong>Improved UX:</strong> Faster, simpler login experience</li>
                    <li><strong>Reduced costs:</strong> Eliminates password reset expenses</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={styles.section}>
              <h3 className={styles.subSectionTitle}>Quantifiable Business Benefits</h3>
              <div className={styles.businessBenefits}>
                <div className={styles.benefit}>
                  <div className={styles.benefitIcon}>💰</div>
                  <div className={styles.benefitContent}>
                    <h4 className={styles.benefitTitle}>Cost Reduction</h4>
                    <p>Organizations save $70+ per user annually on password reset support and related costs</p>
                  </div>
                </div>
                <div className={styles.benefit}>
                  <div className={styles.benefitIcon}>📈</div>
                  <div className={styles.benefitContent}>
                    <h4 className={styles.benefitTitle}>Productivity Gains</h4>
                    <p>Users save 5-10 hours annually on password management, translating to significant productivity gains</p>
                  </div>
                </div>
                <div className={styles.benefit}>
                  <div className={styles.benefitIcon}>🛡️</div>
                  <div className={styles.benefitContent}>
                    <h4 className={styles.benefitTitle}>Security Improvement</h4>
                    <p>67% reduction in account takeovers and 99% reduction in successful phishing attacks</p>
                  </div>
                </div>
                <div className={styles.benefit}>
                  <div className={styles.benefitIcon}>😊</div>
                  <div className={styles.benefitContent}>
                    <h4 className={styles.benefitTitle}>User Satisfaction</h4>
                    <p>92% of users report higher satisfaction with passwordless vs. traditional authentication</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: Top Tools and Platforms */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Top Tools and Platforms Offering Passwordless Solutions</h2>
            <p className={styles.paragraph}>
              The passwordless ecosystem has matured rapidly, with major platforms and specialized vendors offering 
              robust solutions for organizations of all sizes and across various industries.
            </p>

            <div className={styles.platformTiers}>
              <div className={styles.platformTier}>
                <div className={styles.tierHeader}>
                  <div className={styles.tierBadge}>🏆</div>
                  <h3 className={styles.tierTitle}>Enterprise Identity Platforms</h3>
                </div>
                <div className={styles.tierContent}>
                  <div className={styles.platform}>
                    <div className={styles.platformLogo}>👑</div>
                    <div className={styles.platformDetails}>
                      <h4 className={styles.platformName}>Microsoft Azure AD</h4>
                      <p className={styles.platformDesc}>Comprehensive passwordless authentication with Windows Hello, FIDO2 keys, and Microsoft Authenticator app</p>
                      <div className={styles.platformFeatures}>
                        <span>Windows Hello integration</span>
                        <span>FIDO2 security keys</span>
                        <span>Authenticator app</span>
                        <span>Conditional Access</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.platform}>
                    <div className={styles.platformLogo}>🆗</div>
                    <div className={styles.platformDetails}>
                      <h4 className={styles.platformName}>Okta</h4>
                      <p className={styles.platformDesc}>Leading identity platform with passwordless authentication via FastPass, biometrics, and security keys</p>
                      <div className={styles.platformFeatures}>
                        <span>Okta FastPass</span>
                        <span>Biometric authentication</span>
                        <span>Universal Directory</span>
                        <span>Workflows automation</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.platformTier}>
                <div className={styles.tierHeader}>
                  <div className={styles.tierBadge}>🔑</div>
                  <h3 className={styles.tierTitle}>Security Key Providers</h3>
                </div>
                <div className={styles.tierContent}>
                  <div className={styles.platform}>
                    <div className={styles.platformLogo}>🟦</div>
                    <div className={styles.platformDetails}>
                      <h4 className={styles.platformName}>Yubico YubiKey</h4>
                      <p className={styles.platformDesc}>Industry-leading hardware security keys supporting FIDO2, WebAuthn, and multiple authentication protocols</p>
                      <div className={styles.platformFeatures}>
                        <span>Multiple form factors</span>
                        <span>FIDO2/WebAuthn</span>
                        <span>PIV/Smart Card</span>
                        <span>OTP support</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.platform}>
                    <div className={styles.platformLogo}>🔷</div>
                    <div className={styles.platformDetails}>
                      <h4 className={styles.platformName}>Google Titan</h4>
                      <p className={styles.platformDesc}>Google's security key with built-in secure element and Bluetooth/NFC/USB connectivity options</p>
                      <div className={styles.platformFeatures}>
                        <span>Built-in secure element</span>
                        <span>Bluetooth & USB-C</span>
                        <span>FIDO certified</span>
                        <span>Google integration</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.platformTier}>
                <div className={styles.tierHeader}>
                  <div className={styles.tierBadge}>🚀</div>
                  <h3 className={styles.tierTitle}>Developer-First Solutions</h3>
                </div>
                <div className={styles.tierContent}>
                  <div className={styles.platform}>
                    <div className={styles.platformLogo}>🔐</div>
                    <div className={styles.platformDetails}>
                      <h4 className={styles.platformName}>Auth0</h4>
                      <p className={styles.platformDesc}>Developer-friendly authentication with passwordless options including magic links and biometrics</p>
                      <div className={styles.platformFeatures}>
                        <span>Magic Links</span>
                        <span>SMS/Email OTP</span>
                        <span>Biometric integration</span>
                        <span>Customizable flows</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.platform}>
                    <div className={styles.platformLogo}>⚡</div>
                    <div className={styles.platformDetails}>
                      <h4 className={styles.platformName}>Stytch</h4>
                      <p className={styles.platformDesc}>Modern authentication platform focused entirely on passwordless solutions with simple APIs</p>
                      <div className={styles.platformFeatures}>
                        <span>Magic Links</span>
                        <span>OTP via SMS/Email</span>
                        <span>WebAuthn/FIDO2</span>
                        <span>Biometric passkeys</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 5: Implementation Guide */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Implementing Passwordless Authentication: A Practical Guide</h2>

            <div className={styles.implementation}>
              <div className={styles.implPhase}>
                <div className={styles.phaseHeader}>
                  <div className={styles.phaseNumber}>1</div>
                  <h3 className={styles.phaseTitle}>Assessment & Planning</h3>
                </div>
                <div className={styles.phaseContent}>
                  <p><strong>Duration:</strong> 2-4 weeks</p>
                  <ul className={styles.phaseList}>
                    <li>Inventory current authentication methods</li>
                    <li>Identify use cases and user personas</li>
                    <li>Assess regulatory and compliance requirements</li>
                    <li>Define success metrics and KPIs</li>
                  </ul>
                </div>
              </div>

              <div className={styles.implPhase}>
                <div className={styles.phaseHeader}>
                  <div className={styles.phaseNumber}>2</div>
                  <h3 className={styles.phaseTitle}>Technology Selection</h3>
                </div>
                <div className={styles.phaseContent}>
                  <p><strong>Duration:</strong> 3-6 weeks</p>
                  <ul className={styles.phaseList}>
                    <li>Evaluate passwordless solutions against requirements</li>
                    <li>Consider integration with existing identity infrastructure</li>
                    <li>Plan for multi-factor authentication fallback</li>
                    <li>Select pilot group and test applications</li>
                  </ul>
                </div>
              </div>

              <div className={styles.implPhase}>
                <div className={styles.phaseHeader}>
                  <div className={styles.phaseNumber}>3</div>
                  <h3 className={styles.phaseTitle}>Pilot Implementation</h3>
                </div>
                <div className={styles.phaseContent}>
                  <p><strong>Duration:</strong> 4-8 weeks</p>
                  <ul className={styles.phaseList}>
                    <li>Implement passwordless for selected pilot group</li>
                    <li>Provide training and support materials</li>
                    <li>Gather user feedback and measure adoption</li>
                    <li>Refine implementation based on pilot results</li>
                  </ul>
                </div>
              </div>

              <div className={styles.implPhase}>
                <div className={styles.phaseHeader}>
                  <div className={styles.phaseNumber}>4</div>
                  <h3 className={styles.phaseTitle}>Full Rollout</h3>
                </div>
                <div className={styles.phaseContent}>
                  <p><strong>Duration:</strong> 8-16 weeks</p>
                  <ul className={styles.phaseList}>
                    <li>Scale implementation across organization</li>
                    <li>Update policies and procedures</li>
                    <li>Monitor security and performance metrics</li>
                    <li>Establish continuous improvement process</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Section 6: Future Outlook */}
          <div className={styles.section}>
            <div className={styles.futureOutlook}>
              <h3 className={styles.outlookTitle}>The Passwordless Future: Trends and Predictions</h3>
              <p className={styles.outlookText}>
                Passwordless authentication is rapidly becoming the new standard for digital identity verification. 
                As adoption accelerates, we'll see increased standardization, improved user experiences, and 
                broader integration across platforms and devices.
              </p>
              <div className={styles.futurePredictions}>
                <div className={styles.prediction}>
                  <div className={styles.predictionIcon}>🤝</div>
                  <div className={styles.predictionContent}>
                    <h4 className={styles.predictionTitle}>Cross-Platform Passkeys</h4>
                    <p>Seamless authentication across devices and platforms using synced cryptographic credentials</p>
                  </div>
                </div>
                <div className={styles.prediction}>
                  <div className={styles.predictionIcon}>🔗</div>
                  <div className={styles.predictionContent}>
                    <h4 className={styles.predictionTitle}>Decentralized Identity</h4>
                    <p>Integration with self-sovereign identity systems and verifiable credentials</p>
                  </div>
                </div>
                <div className={styles.prediction}>
                  <div className={styles.predictionIcon}>🌐</div>
                  <div className={styles.predictionContent}>
                    <h4 className={styles.predictionTitle}>Global Standards</h4>
                    <p>Widespread adoption of FIDO2 and WebAuthn as universal passwordless standards</p>
                  </div>
                </div>
                <div className={styles.prediction}>
                  <div className={styles.predictionIcon}>🚫</div>
                  <div className={styles.predictionContent}>
                    <h4 className={styles.predictionTitle}>Password Deprecation</h4>
                    <p>Major platforms begin removing password options entirely in favor of passwordless methods</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 7: Getting Started */}
          <div className={styles.section}>
            <div className={styles.gettingStarted}>
              <h3 className={styles.startedTitle}>Ready to Go Passwordless? Start Here</h3>
              <div className={styles.actionSteps}>
                <div className={styles.actionStep}>
                  <div className={styles.stepIcon}>🔍</div>
                  <div className={styles.stepContent}>
                    <h4 className={styles.stepTitle}>Assess Your Current State</h4>
                    <p>Document current authentication methods, pain points, and security incidents related to passwords</p>
                  </div>
                </div>
                <div className={styles.actionStep}>
                  <div className={styles.stepIcon}>🎯</div>
                  <div className={styles.stepContent}>
                    <h4 className={styles.stepTitle}>Define Your Requirements</h4>
                    <p>Identify regulatory requirements, user needs, and technical constraints for your passwordless implementation</p>
                  </div>
                </div>
                <div className={styles.actionStep}>
                  <div className={styles.stepIcon}>🛠️</div>
                  <div className={styles.stepContent}>
                    <h4 className={styles.stepTitle}>Start Small with a Pilot</h4>
                    <p>Choose a low-risk application and user group for your initial passwordless implementation</p>
                  </div>
                </div>
                <div className={styles.actionStep}>
                  <div className={styles.stepIcon}>📊</div>
                  <div className={styles.stepContent}>
                    <h4 className={styles.stepTitle}>Measure and Iterate</h4>
                    <p>Track adoption rates, user satisfaction, and security metrics to refine your approach</p>
                  </div>
                </div>
              </div>
              <p className={styles.finalMessage}>
                The transition to passwordless authentication represents one of the most significant security 
                improvements organizations can make today. By eliminating passwords, you're not just enhancing 
                security—you're creating a better user experience, reducing operational costs, and future-proofing 
                your authentication strategy for years to come.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordlessAuthentication;