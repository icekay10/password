import styles from './IoTSecurity.module.css';

const IoTSecurity = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Cybersecurity in the Internet of Things (IoT)</h1>
        <p className={styles.subtitle}>
          Protecting the expanding universe of connected devices from emerging cyber threats
        </p>

        <div className={styles.content}>
          {/* Section 1: Introduction */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>The IoT Security Challenge: Billions of Connected Targets</h2>
            <p className={styles.paragraph}>
              The Internet of Things has exploded from millions to tens of billions of connected devices, 
              creating an unprecedented attack surface. From smart thermostats to industrial sensors, each 
              connected device represents a potential entry point for cyber attacks, often with inadequate 
              security protections.
            </p>
            <div className={styles.statisticsGrid}>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>75B</div>
                <div className={styles.statLabel}>IoT devices projected by 2025</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>98%</div>
                <div className={styles.statLabel}>Of IoT device traffic is unencrypted</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>57%</div>
                <div className={styles.statLabel}>Of IoT devices vulnerable to attacks</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>300%</div>
                <div className={styles.statLabel}>Increase in IoT attacks since 2019</div>
              </div>
            </div>
          </div>

          {/* Section 2: Smart Homes & Cities */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Smart Homes and Smart Cities: Vulnerabilities You Didn't Expect</h2>
            <p className={styles.paragraph}>
              As homes and cities become increasingly connected, the security implications extend far beyond 
              individual privacy concerns to potential disruptions of essential services and critical infrastructure.
            </p>

            <div className={styles.featuresGrid}>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>🏠</div>
                <h3 className={styles.featureTitle}>Smart Home Ecosystems</h3>
                <p className={styles.featureDesc}>
                  Interconnected devices—thermostats, cameras, locks, and appliances—create attack chains where 
                  compromising one device can lead to complete home network takeover
                </p>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>🏙️</div>
                <h3 className={styles.featureTitle}>Municipal Infrastructure</h3>
                <p className={styles.featureDesc}>
                  Traffic management systems, smart grids, water treatment sensors, and public Wi-Fi networks 
                  present attractive targets for disrupting city operations
                </p>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>🚗</div>
                <h3 className={styles.featureTitle}>Connected Transportation</h3>
                <p className={styles.featureDesc}>
                  Smart traffic lights, connected vehicles, and public transit systems face risks of coordinated 
                  attacks causing gridlock or transportation chaos
                </p>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>🏢</div>
                <h3 className={styles.featureTitle}>Building Management Systems</h3>
                <p className={styles.featureDesc}>
                  HVAC, lighting, and access control systems in smart buildings can be manipulated to create 
                  safety hazards or operational disruptions
                </p>
              </div>
            </div>

            <div className={styles.section}>
              <h3 className={styles.subSectionTitle}>Critical Vulnerabilities in Smart Environments</h3>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <strong>Default Credentials:</strong> Thousands of devices ship with hardcoded passwords like 
                  "admin/admin" that users never change, making them instantly vulnerable
                </li>
                <li className={styles.listItem}>
                  <strong>Unencrypted Communications:</strong> Most IoT devices transmit data without encryption, 
                  allowing interception of sensitive information and device control
                </li>
                <li className={styles.listItem}>
                  <strong>No Security Updates:</strong> Many IoT manufacturers don't provide firmware updates, 
                  leaving devices vulnerable to newly discovered exploits indefinitely
                </li>
                <li className={styles.listItem}>
                  <strong>Weak Authentication:</strong> Simple PIN codes or no authentication at all on devices 
                  controlling critical home or city functions
                </li>
                <li className={styles.listItem}>
                  <strong>Supply Chain Attacks:</strong> Compromised components or software from third-party 
                  vendors creating backdoors in otherwise secure systems
                </li>
              </ul>
            </div>
          </div>

          {/* Section 3: Medical Devices & Wearables */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Securing Medical Devices and Wearables</h2>
            <p className={styles.paragraph}>
              Healthcare IoT presents unique security challenges where cyber attacks can have immediate 
              life-or-death consequences, requiring specialized security approaches beyond traditional IT.
            </p>

            <div className={styles.medicalGrid}>
              <div className={styles.medicalItem}>
                <div className={styles.medicalIcon}>🏥</div>
                <div className={styles.medicalContent}>
                  <h3 className={styles.medicalTitle}>Implanted Medical Devices</h3>
                  <p className={styles.medicalDesc}>
                    Pacemakers, insulin pumps, and neurostimulators with wireless connectivity could potentially 
                    be manipulated to harm patients or extract sensitive health data
                  </p>
                  <div className={styles.medicalRisks}>
                    <span>Life-Threatening Manipulation</span>
                    <span>Health Data Theft</span>
                    <span>Treatment Disruption</span>
                  </div>
                </div>
              </div>

              <div className={styles.medicalItem}>
                <div className={styles.medicalIcon}>⌚</div>
                <div className={styles.medicalContent}>
                  <h3 className={styles.medicalTitle}>Wearable Health Monitors</h3>
                  <p className={styles.medicalDesc}>
                    Fitness trackers, smart watches, and continuous glucose monitors collecting sensitive health 
                    data that could be exploited for insurance fraud or identity theft
                  </p>
                  <div className={styles.medicalRisks}>
                    <span>Privacy Violations</span>
                    <span>Data Interception</span>
                    <span>Location Tracking</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.section}>
              <h3 className={styles.subSectionTitle}>Healthcare IoT Security Priorities</h3>
              <div className={styles.prioritiesGrid}>
                <div className={styles.priority}>
                  <div className={styles.priorityIcon}>🔒</div>
                  <h4 className={styles.priorityTitle}>Patient Safety First</h4>
                  <p>Security measures must never compromise device functionality or emergency access for healthcare providers</p>
                </div>
                <div className={styles.priority}>
                  <div className={styles.priorityIcon}>📋</div>
                  <h4 className={styles.priorityTitle}>Regulatory Compliance</h4>
                  <p>Adherence to healthcare regulations like HIPAA, FDA guidelines, and medical device cybersecurity standards</p>
                </div>
                <div className={styles.priority}>
                  <div className={styles.priorityIcon}>⚕️</div>
                  <h4 className={styles.priorityTitle}>Clinical Workflow Integration</h4>
                  <p>Security solutions that integrate seamlessly with healthcare workflows without disrupting patient care</p>
                </div>
                <div className={styles.priority}>
                  <div className={styles.priorityIcon}>🔄</div>
                  <h4 className={styles.priorityTitle}>Lifespan Management</h4>
                  <p>Long-term security support for medical devices that may remain in use for 10-15 years</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: Enterprise IoT Frameworks */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>IoT Security Frameworks for Enterprises</h2>
            <p className={styles.paragraph}>
              Organizations implementing IoT at scale require comprehensive security frameworks that address 
              the unique challenges of managing thousands of diverse connected devices across multiple environments.
            </p>

            <div className={styles.frameworks}>
              <div className={styles.framework}>
                <div className={styles.frameworkHeader}>
                  <div className={styles.frameworkLevel}>NIST</div>
                  <h3 className={styles.frameworkTitle}>NIST IoT Cybersecurity Framework</h3>
                </div>
                <div className={styles.frameworkContent}>
                  <p><strong>Focus Areas:</strong> Device security, data protection, and incident response for IoT ecosystems</p>
                  <ul className={styles.frameworkList}>
                    <li>Device identification and authentication</li>
                    <li>Data protection and privacy</li>
                    <li>Logical and physical access controls</li>
                    <li>Software and firmware integrity</li>
                  </ul>
                </div>
              </div>

              <div className={styles.framework}>
                <div className={styles.frameworkHeader}>
                  <div className={styles.frameworkLevel}>ISO</div>
                  <h3 className={styles.frameworkTitle}>ISO/IEC 27400</h3>
                </div>
                <div className={styles.frameworkContent}>
                  <p><strong>Focus Areas:</strong> International standards for IoT security and privacy</p>
                  <ul className={styles.frameworkList}>
                    <li>Risk assessment methodologies</li>
                    <li>Privacy by design principles</li>
                    <li>Security controls for IoT systems</li>
                    <li>Compliance and certification guidelines</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={styles.section}>
              <h3 className={styles.subSectionTitle}>Enterprise IoT Security Implementation</h3>
              <div className={styles.implementation}>
                <div className={styles.phase}>
                  <div className={styles.phaseHeader}>
                    <div className={styles.phaseNumber}>1</div>
                    <h4 className={styles.phaseTitle}>Discovery & Inventory</h4>
                  </div>
                  <p>Identify all IoT devices on the network, classify by risk level, and maintain accurate inventory</p>
                </div>
                <div className={styles.phase}>
                  <div className={styles.phaseHeader}>
                    <div className={styles.phaseNumber}>2</div>
                    <h4 className={styles.phaseTitle}>Segmentation & Isolation</h4>
                  </div>
                  <p>Create separate network segments for IoT devices, limiting communication to authorized systems only</p>
                </div>
                <div className={styles.phase}>
                  <div className={styles.phaseHeader}>
                    <div className={styles.phaseNumber}>3</div>
                    <h4 className={styles.phaseTitle}>Monitoring & Detection</h4>
                  </div>
                  <p>Implement specialized IoT security monitoring to detect anomalous device behavior and attacks</p>
                </div>
                <div className={styles.phase}>
                  <div className={styles.phaseHeader}>
                    <div className={styles.phaseNumber}>4</div>
                    <h4 className={styles.phaseTitle}>Response & Recovery</h4>
                  </div>
                  <p>Develop incident response plans specific to IoT compromises and establish recovery procedures</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 5: Emerging Solutions */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Next-Generation IoT Security Solutions</h2>

            <div className={styles.solutionsGrid}>
              <div className={styles.solutionItem}>
                <div className={styles.solutionIcon}>🤖</div>
                <div className={styles.solutionContent}>
                  <h3 className={styles.solutionTitle}>AI-Powered Threat Detection</h3>
                  <p>Machine learning algorithms that understand normal IoT device behavior patterns to detect anomalies and zero-day attacks in real-time</p>
                </div>
              </div>
              <div className={styles.solutionItem}>
                <div className={styles.solutionIcon}>🔐</div>
                <div className={styles.solutionContent}>
                  <h3 className={styles.solutionTitle}>Hardware-Based Security</h3>
                  <p>Secure hardware elements like Trusted Platform Modules (TPM) and Hardware Security Modules (HSM) integrated directly into IoT devices</p>
                </div>
              </div>
              <div className={styles.solutionItem}>
                <div className={styles.solutionIcon}>🔄</div>
                <div className={styles.solutionContent}>
                  <h3 className={styles.solutionTitle}>Blockchain for IoT</h3>
                  <p>Distributed ledger technology for secure device identity management, firmware validation, and tamper-proof audit trails</p>
                </div>
              </div>
              <div className={styles.solutionItem}>
                <div className={styles.solutionIcon}>🌐</div>
                <div className={styles.solutionContent}>
                  <h3 className={styles.solutionTitle}>Secure by Design</h3>
                  <p>Manufacturing standards requiring security features like automatic updates, strong encryption, and minimal attack surfaces</p>
                </div>
              </div>
            </div>

            <div className={styles.section}>
              <div className={styles.industryTrends}>
                <h3 className={styles.trendsTitle}>Industry Trends and Future Directions</h3>
                <p className={styles.trendsText}>
                  The IoT security landscape is rapidly evolving with regulatory pressures increasing, 
                  insurance companies demanding better security, and consumers becoming more privacy-conscious. 
                  Future developments will focus on automated security, zero-trust architectures for IoT, 
                  and international security certification programs for connected devices.
                </p>
                <div className={styles.trendsList}>
                  <div className={styles.trendItem}>
                    <div className={styles.trendIcon}>📜</div>
                    <span>Mandatory Security Standards</span>
                  </div>
                  <div className={styles.trendItem}>
                    <div className={styles.trendIcon}>🤝</div>
                    <span>Public-Private Partnerships</span>
                  </div>
                  <div className={styles.trendItem}>
                    <div className={styles.trendIcon}>🔍</div>
                    <span>Supply Chain Transparency</span>
                  </div>
                  <div className={styles.trendItem}>
                    <div className={styles.trendIcon}>🎯</div>
                    <span>Zero Trust for IoT</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 6: Actionable Recommendations */}
          <div className={styles.section}>
            <div className={styles.recommendations}>
              <h3 className={styles.recommendationsTitle}>Essential IoT Security Actions</h3>
              <div className={styles.recommendationsGrid}>
                <div className={styles.recommendation}>
                  <div className={styles.recIcon}>🏷️</div>
                  <h4 className={styles.recTitle}>For Consumers</h4>
                  <ul className={styles.recList}>
                    <li>Change default passwords immediately</li>
                    <li>Regularly update device firmware</li>
                    <li>Use separate network for IoT devices</li>
                    <li>Research device security before purchase</li>
                  </ul>
                </div>
                <div className={styles.recommendation}>
                  <div className={styles.recIcon}>🏢</div>
                  <h4 className={styles.recTitle}>For Businesses</h4>
                  <ul className={styles.recList}>
                    <li>Implement comprehensive IoT inventory</li>
                    <li>Enforce network segmentation policies</li>
                    <li>Require security certifications from vendors</li>
                    <li>Develop IoT-specific incident response plans</li>
                  </ul>
                </div>
                <div className={styles.recommendation}>
                  <div className={styles.recIcon}>🏭</div>
                  <h4 className={styles.recTitle}>For Manufacturers</h4>
                  <ul className={styles.recList}>
                    <li>Implement security by design principles</li>
                    <li>Provide regular security updates</li>
                    <li>Enable automatic security updates</li>
                    <li>Conduct third-party security testing</li>
                  </ul>
                </div>
              </div>
              <p className={styles.finalNote}>
                IoT security requires collaboration across consumers, businesses, manufacturers, and regulators. 
                As our world becomes increasingly connected, securing the Internet of Things is no longer optional—it's essential 
                for protecting privacy, safety, and critical infrastructure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IoTSecurity;