import styles from './CloudSecurityRemoteWork.module.css';

const CloudSecurityRemoteWork = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Cloud Security Challenges in the Era of Remote Work</h1>
        <p className={styles.subtitle}>
          Navigating the security landscape of distributed workforces and cloud infrastructure
        </p>

        <div className={styles.content}>
          {/* Section 1: Introduction */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>The New Normal: Remote Work Security Paradigm</h2>
            <p className={styles.paragraph}>
              The shift to remote and hybrid work models has fundamentally transformed how organizations approach cloud security. 
              With employees accessing corporate resources from anywhere, traditional perimeter-based security models are no longer sufficient. 
              This new reality introduces unique challenges that require innovative solutions and a complete rethinking of security strategies.
            </p>
            <div className={styles.statisticsGrid}>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>94%</div>
                <div className={styles.statLabel}>Of enterprises use cloud services</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>68%</div>
                <div className={styles.statLabel}>Report increased security incidents</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>$4.24M</div>
                <div className={styles.statLabel}>Average cost of cloud data breach</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>73%</div>
                <div className={styles.statLabel}>Use personal devices for work</div>
              </div>
            </div>
          </div>

          {/* Section 2: Cloud Misconfigurations */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Why Cloud Misconfigurations Are the #1 Risk</h2>
            <p className={styles.paragraph}>
              Cloud misconfigurations represent the most significant security vulnerability in modern organizations. 
              These errors occur when cloud resources are not properly secured, leaving sensitive data and systems exposed to attackers.
            </p>
            
            <div className={styles.featuresGrid}>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>🔓</div>
                <h3 className={styles.featureTitle}>Public Storage Buckets</h3>
                <p className={styles.featureDesc}>
                  Unintentionally setting cloud storage to public access, exposing sensitive customer data, 
                  intellectual property, and internal documents to anyone on the internet
                </p>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>👑</div>
                <h3 className={styles.featureTitle}>Excessive Permissions</h3>
                <p className={styles.featureDesc}>
                  Granting unnecessary admin privileges to users and services, creating opportunities 
                  for lateral movement and privilege escalation in case of account compromise
                </p>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>🌐</div>
                <h3 className={styles.featureTitle}>Open Network Ports</h3>
                <p className={styles.featureDesc}>
                  Leaving unnecessary ports open to the internet, particularly management ports like SSH 
                  and RDP, providing direct entry points for attackers
                </p>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>🔑</div>
                <h3 className={styles.featureTitle}>Default Credentials</h3>
                <p className={styles.featureDesc}>
                  Failing to change default passwords and access keys, allowing attackers to use 
                  well-known credentials to gain unauthorized access to cloud resources
                </p>
              </div>
            </div>

            <div className={styles.section}>
              <h3 className={styles.subSectionTitle}>Common Root Causes of Misconfigurations</h3>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <strong>Lack of Cloud Expertise:</strong> IT teams trained in traditional infrastructure struggle with cloud-native security models
                </li>
                <li className={styles.listItem}>
                  <strong>Manual Configuration:</strong> Human error in manually setting up complex cloud environments with hundreds of settings
                </li>
                <li className={styles.listItem}>
                  <strong>Complex Multi-Cloud Environments:</strong> Different security models across AWS, Azure, and Google Cloud creating consistency gaps
                </li>
                <li className={styles.listItem}>
                  <strong>Shadow IT:</strong> Employees spinning up cloud resources without IT approval or security oversight
                </li>
                <li className={styles.listItem}>
                  <strong>Rapid Deployment Pressures:</strong> Business demands for quick deployment overriding security best practices
                </li>
              </ul>
            </div>
          </div>

          {/* Section 3: Zero Trust Architecture */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Zero Trust Architecture for Cloud Environments</h2>
            <p className={styles.paragraph}>
              Zero Trust is not a single technology but a security framework that assumes no user or device should be trusted by default, 
              even if they are inside the corporate network. In cloud environments, Zero Trust becomes even more critical.
            </p>

            <div className={styles.frameworkGrid}>
              <div className={styles.frameworkItem}>
                <div className={styles.frameworkNumber}>1</div>
                <div className={styles.frameworkContent}>
                  <h4 className={styles.frameworkTitle}>Verify Explicitly</h4>
                  <p>Authenticate and authorize based on all available data points including user identity, location, device health, and behavior patterns</p>
                </div>
              </div>
              <div className={styles.frameworkItem}>
                <div className={styles.frameworkNumber}>2</div>
                <div className={styles.frameworkContent}>
                  <h4 className={styles.frameworkTitle}>Least Privilege Access</h4>
                  <p>Limit user access with just-in-time and just-enough-access principles, reducing the attack surface and minimizing lateral movement</p>
                </div>
              </div>
              <div className={styles.frameworkItem}>
                <div className={styles.frameworkNumber}>3</div>
                <div className={styles.frameworkContent}>
                  <h4 className={styles.frameworkTitle}>Assume Breach</h4>
                  <p>Design systems with the assumption that breaches will occur, implementing micro-segmentation and encrypted communications</p>
                </div>
              </div>
            </div>

            <div className={styles.section}>
              <h3 className={styles.subSectionTitle}>Zero Trust Implementation Pillars</h3>
              <div className={styles.pillarsGrid}>
                <div className={styles.pillarItem}>
                  <div className={styles.pillarIcon}>👤</div>
                  <h4 className={styles.pillarTitle}>Identity Verification</h4>
                  <p>Multi-factor authentication, biometric verification, and continuous authentication based on user behavior</p>
                </div>
                <div className={styles.pillarItem}>
                  <div className={styles.pillarIcon}>💻</div>
                  <h4 className={styles.pillarTitle}>Device Security</h4>
                  <p>Endpoint detection and response, device health checks, and managed device requirements for access</p>
                </div>
                <div className={styles.pillarItem}>
                  <div className={styles.pillarIcon}>📡</div>
                  <h4 className={styles.pillarTitle}>Network Security</h4>
                  <p>Software-defined perimeters, encrypted tunnels, and micro-segmentation to contain potential breaches</p>
                </div>
                <div className={styles.pillarItem}>
                  <div className={styles.pillarIcon}>📊</div>
                  <h4 className={styles.pillarTitle}>Data Protection</h4>
                  <p>Data classification, encryption at rest and in transit, and data loss prevention controls</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: SaaS Security Tools & Strategies */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Tools and Strategies for Securing SaaS Applications</h2>
            <p className={styles.paragraph}>
              As organizations increasingly rely on SaaS applications, securing these cloud-based tools requires specialized 
              approaches that differ from traditional on-premises software security.
            </p>

            <div className={styles.toolsGrid}>
              <div className={styles.toolItem}>
                <div className={styles.toolIcon}>🛡️</div>
                <div className={styles.toolContent}>
                  <h3 className={styles.toolTitle}>Cloud Access Security Brokers (CASB)</h3>
                  <p className={styles.toolDesc}>
                    Security policy enforcement points that sit between cloud service consumers and providers. 
                    CASBs provide visibility, compliance, data security, and threat protection for sanctioned 
                    and unsanctioned cloud services.
                  </p>
                  <ul className={styles.toolFeatures}>
                    <li>Shadow IT discovery</li>
                    <li>Data loss prevention</li>
                    <li>Threat protection</li>
                    <li>Compliance monitoring</li>
                  </ul>
                </div>
              </div>

              <div className={styles.toolItem}>
                <div className={styles.toolIcon}>🔍</div>
                <div className={styles.toolContent}>
                  <h3 className={styles.toolTitle}>SaaS Security Posture Management (SSPM)</h3>
                  <p className={styles.toolDesc}>
                    Continuous monitoring and assessment of SaaS application security settings to detect 
                    misconfigurations, compliance violations, and excessive permissions across all SaaS tools.
                  </p>
                  <ul className={styles.toolFeatures}>
                    <li>Configuration monitoring</li>
                    <li>Permission auditing</li>
                    <li>Compliance assessment</li>
                    <li>Automated remediation</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={styles.section}>
              <h3 className={styles.subSectionTitle}>Essential SaaS Security Strategies</h3>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <strong>Single Sign-On (SSO) Implementation:</strong> Centralize authentication through identity providers 
                  like Okta, Azure AD, or Google Workspace to maintain consistent access controls
                </li>
                <li className={styles.listItem}>
                  <strong>API Security Management:</strong> Secure APIs that connect SaaS applications, implementing rate limiting, 
                  authentication, and monitoring for abnormal API usage patterns
                </li>
                <li className={styles.listItem}>
                  <strong>Data Residency Controls:</strong> Ensure sensitive data remains in compliant geographic locations, 
                  especially important for regulated industries like healthcare and finance
                </li>
                <li className={styles.listItem}>
                  <strong>User Behavior Analytics (UBA):</strong> Monitor for anomalous user activities that could indicate 
                  compromised accounts or insider threats within SaaS applications
                </li>
                <li className={styles.listItem}>
                  <strong>Third-Party Risk Assessment:</strong> Evaluate the security posture of SaaS vendors through 
                  security questionnaires, audits, and continuous monitoring of their security practices
                </li>
              </ul>
            </div>
          </div>

          {/* Section 5: Best Practices Framework */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Cloud Security Best Practices Framework</h2>
            
            <div className={styles.bestPractices}>
              <div className={styles.practiceCategory}>
                <h3 className={styles.categoryTitle}>Preventive Controls</h3>
                <ul className={styles.practiceList}>
                  <li>Implement Infrastructure as Code (IaC) with security scanning</li>
                  <li>Enforce multi-factor authentication for all cloud accounts</li>
                  <li>Use cloud-native security services (AWS GuardDuty, Azure Security Center)</li>
                  <li>Establish comprehensive logging and monitoring</li>
                </ul>
              </div>

              <div className={styles.practiceCategory}>
                <h3 className={styles.categoryTitle}>Detective Controls</h3>
                <ul className={styles.practiceList}>
                  <li>Continuous configuration assessment and compliance monitoring</li>
                  <li>Real-time threat detection using machine learning</li>
                  <li>Regular security audits and penetration testing</li>
                  <li>Cloud security posture management tools</li>
                </ul>
              </div>

              <div className={styles.practiceCategory}>
                <h3 className={styles.categoryTitle}>Responsive Controls</h3>
                <ul className={styles.practiceList}>
                  <li>Automated incident response playbooks</li>
                  <li>Cloud-native disaster recovery solutions</li>
                  <li>Security orchestration, automation, and response (SOAR)</li>
                  <li>Regular backup and recovery testing</li>
                </ul>
              </div>
            </div>

            <div className={styles.section}>
              <div className={styles.keyTakeaway}>
                <h3 className={styles.takeawayTitle}>Key Takeaway: The Future of Cloud Security</h3>
                <p className={styles.takeawayText}>
                  Cloud security in the remote work era requires a paradigm shift from perimeter-based to identity-centric security models. 
                  Organizations must embrace automation, implement Zero Trust principles, and continuously monitor their cloud environments. 
                  The combination of proper tooling, comprehensive strategies, and ongoing employee education creates a resilient security 
                  posture that can adapt to evolving threats in our distributed work reality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudSecurityRemoteWork;