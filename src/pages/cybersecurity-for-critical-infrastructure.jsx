import styles from './CriticalInfrastructureSecurity.module.css';

const CriticalInfrastructureSecurity = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Cybersecurity for Critical Infrastructure</h1>
        <p className={styles.subtitle}>
          Securing the backbone of modern society against evolving cyber threats
        </p>

        <div className={styles.content}>
          {/* Section 1: Introduction */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>The Stakes: Protecting Our Digital Backbone</h2>
            <p className={styles.paragraph}>
              Critical infrastructure encompasses the essential systems and assets that are vital to national security, 
              economic stability, and public safety. From power grids and water treatment plants to transportation networks 
              and healthcare systems, these interconnected digital ecosystems represent prime targets for nation-state actors, 
              cybercriminals, and hacktivists seeking to disrupt society.
            </p>
            <div className={styles.statisticsGrid}>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>85%</div>
                <div className={styles.statLabel}>Of critical infrastructure is privately owned</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>2.3x</div>
                <div className={styles.statLabel}>Increase in attacks since 2020</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>47 days</div>
                <div className={styles.statLabel}>Average incident response time</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>$4.35M</div>
                <div className={styles.statLabel}>Average cost per breach</div>
              </div>
            </div>
          </div>

          {/* Section 2: Energy & Transportation Protection */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Protecting Energy Grids and Transportation Systems</h2>
            <p className={styles.paragraph}>
              Energy and transportation systems represent the most critical and vulnerable infrastructure components, 
              with attacks potentially causing cascading failures across entire regions and economies.
            </p>

            <div className={styles.featuresGrid}>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>⚡</div>
                <h3 className={styles.featureTitle}>Smart Grid Security</h3>
                <p className={styles.featureDesc}>
                  Protecting advanced metering infrastructure, SCADA systems, and distribution automation 
                  from manipulation that could cause widespread blackouts or equipment damage
                </p>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>🚆</div>
                <h3 className={styles.featureTitle}>Rail & Metro Systems</h3>
                <p className={styles.featureDesc}>
                  Securing signaling systems, train control networks, and passenger information systems 
                  against attacks that could disrupt operations or endanger passenger safety
                </p>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>✈️</div>
                <h3 className={styles.featureTitle}>Aviation Infrastructure</h3>
                <p className={styles.featureDesc}>
                  Protecting air traffic control systems, airport operations, and airline reservation 
                  systems from cyber attacks that could ground flights or compromise safety
                </p>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>🚢</div>
                <h3 className={styles.featureTitle}>Maritime & Port Security</h3>
                <p className={styles.featureDesc}>
                  Securing port management systems, vessel traffic services, and cargo tracking 
                  systems against attacks that could disrupt global supply chains
                </p>
              </div>
            </div>

            <div className={styles.section}>
              <h3 className={styles.subSectionTitle}>Unique Challenges in Critical Infrastructure</h3>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <strong>Legacy Systems:</strong> Decades-old operational technology (OT) never designed for internet connectivity, 
                  running on outdated software with known vulnerabilities
                </li>
                <li className={styles.listItem}>
                  <strong>IT-OT Convergence:</strong> Increasing integration between information technology and operational technology 
                  creates new attack surfaces while complicating security management
                </li>
                <li className={styles.listItem}>
                  <strong>24/7 Operational Requirements:</strong> Security updates and patches must be scheduled around continuous 
                  operations, often delaying critical security improvements
                </li>
                <li className={styles.listItem}>
                  <strong>Supply Chain Vulnerabilities:</strong> Third-party vendors and contractors with network access represent 
                  potential entry points for sophisticated attacks
                </li>
                <li className={styles.listItem}>
                  <strong>Physical-Digital Nexus:</strong> Cyber attacks can have immediate physical consequences, including equipment 
                  damage, environmental harm, or threats to human safety
                </li>
              </ul>
            </div>
          </div>

          {/* Section 3: Industry & Startup Ecosystem */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>The Role of Chaos Industries and Emerging Defense Startups</h2>
            <p className={styles.paragraph}>
              A new generation of security companies is emerging to address the unique challenges of critical infrastructure protection, 
              moving beyond traditional enterprise security approaches to specialized solutions.
            </p>

            <div className={styles.industryGrid}>
              <div className={styles.industryItem}>
                <div className={styles.industryIcon}>🛡️</div>
                <div className={styles.industryContent}>
                  <h3 className={styles.industryTitle}>Chaos Industries</h3>
                  <p className={styles.industryDesc}>
                    Pioneering the "attack surface management" approach for critical infrastructure, Chaos Industries provides 
                    continuous monitoring and vulnerability assessment specifically designed for OT environments.
                  </p>
                  <div className={styles.industryFeatures}>
                    <span>OT-Specific Threat Intelligence</span>
                    <span>Air-Gap Bypass Detection</span>
                    <span>Physical Security Integration</span>
                  </div>
                </div>
              </div>

              <div className={styles.industryItem}>
                <div className={styles.industryIcon}>🚀</div>
                <div className={styles.industryContent}>
                  <h3 className={styles.industryTitle}>Emerging Defense Startups</h3>
                  <p className={styles.industryDesc}>
                    Innovative companies developing specialized solutions for infrastructure protection, from quantum-resistant 
                    cryptography to AI-powered anomaly detection in industrial control systems.
                  </p>
                  <div className={styles.industryFeatures}>
                    <span>Quantum-Safe Communications</span>
                    <span>Behavioral Analytics for ICS</span>
                    <span>Zero Trust for OT Networks</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.section}>
              <h3 className={styles.subSectionTitle}>Innovative Defense Technologies</h3>
              <div className={styles.techGrid}>
                <div className={styles.techItem}>
                  <div className={styles.techIcon}>🔬</div>
                  <h4 className={styles.techTitle}>Digital Twins</h4>
                  <p>Virtual replicas of physical infrastructure for safe attack simulation and impact assessment</p>
                </div>
                <div className={styles.techItem}>
                  <div className={styles.techIcon}>🤖</div>
                  <h4 className={styles.techTitle}>AI-Powered ICS Monitoring</h4>
                  <p>Machine learning algorithms that understand normal industrial process behavior to detect anomalies</p>
                </div>
                <div className={styles.techItem}>
                  <div className={styles.techIcon}>🔄</div>
                  <h4 className={styles.techTitle}>Self-Healing Networks</h4>
                  <p>Automated systems that can detect and reroute traffic around compromised network segments</p>
                </div>
                <div className={styles.techItem}>
                  <div className={styles.techIcon}>🔐</div>
                  <h4 className={styles.techTitle}>Hardware Security Modules</h4>
                  <p>Tamper-resistant hardware for securing cryptographic keys in harsh industrial environments</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: Government Regulations */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Government Regulations and Compliance Standards</h2>
            <p className={styles.paragraph}>
              Governments worldwide are implementing comprehensive regulatory frameworks to ensure minimum security standards 
              across critical infrastructure sectors, recognizing that market forces alone cannot address national security concerns.
            </p>

            <div className={styles.regulationsGrid}>
              <div className={styles.regulationItem}>
                <div className={styles.regulationHeader}>
                  <div className={styles.regulationFlag}>🇺🇸</div>
                  <h3 className={styles.regulationTitle}>United States</h3>
                </div>
                <div className={styles.regulationContent}>
                  <p><strong>Primary Framework:</strong> NIST Cybersecurity Framework (CSF)</p>
                  <p><strong>Key Agencies:</strong> CISA, DOE, TSA</p>
                  <p><strong>Recent Developments:</strong> Cyber Incident Reporting for Critical Infrastructure Act (CIRCIA)</p>
                  <p><strong>Compliance Requirements:</strong> Mandatory reporting of significant cyber incidents within 72 hours</p>
                </div>
              </div>

              <div className={styles.regulationItem}>
                <div className={styles.regulationHeader}>
                  <div className={styles.regulationFlag}>🇪🇺</div>
                  <h3 className={styles.regulationTitle}>European Union</h3>
                </div>
                <div className={styles.regulationContent}>
                  <p><strong>Primary Framework:</strong> NIS2 Directive</p>
                  <p><strong>Key Agencies:</strong> ENISA, National CSIRTs</p>
                  <p><strong>Recent Developments:</strong> Critical Entities Resilience Directive (CER)</p>
                  <p><strong>Compliance Requirements:</strong> Risk management measures and incident reporting obligations</p>
                </div>
              </div>
            </div>

            <div className={styles.section}>
              <h3 className={styles.subSectionTitle}>Key Regulatory Frameworks Worldwide</h3>
              <div className={styles.frameworks}>
                <div className={styles.framework}>
                  <h4 className={styles.frameworkName}>IEC 62443</h4>
                  <p className={styles.frameworkDesc}>International standard for industrial automation and control systems security</p>
                </div>
                <div className={styles.framework}>
                  <h4 className={styles.frameworkName}>NERC CIP</h4>
                  <p className={styles.frameworkDesc}>Mandatory cybersecurity standards for North American bulk power system</p>
                </div>
                <div className={styles.framework}>
                  <h4 className={styles.frameworkName}>ISO/IEC 27001</h4>
                  <p className={styles.frameworkDesc}>International standard for information security management systems</p>
                </div>
                <div className={styles.framework}>
                  <h4 className={styles.frameworkName}>C2M2</h4>
                  <p className={styles.frameworkDesc}>Cybersecurity Capability Maturity Model for assessing security programs</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 5: Best Practices & Future Outlook */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Strategic Defense Framework for Critical Infrastructure</h2>

            <div className={styles.strategyGrid}>
              <div className={styles.strategyItem}>
                <div className={styles.strategyIcon}>🎯</div>
                <div className={styles.strategyContent}>
                  <h3 className={styles.strategyTitle}>Defense-in-Depth</h3>
                  <p>Layered security approach combining perimeter defense, network segmentation, endpoint protection, and physical security controls</p>
                </div>
              </div>
              <div className={styles.strategyItem}>
                <div className={styles.strategyIcon}>🔍</div>
                <div className={styles.strategyContent}>
                  <h3 className={styles.strategyTitle}>Continuous Monitoring</h3>
                  <p>24/7 surveillance of network traffic, system logs, and physical access points with real-time threat detection capabilities</p>
                </div>
              </div>
              <div className={styles.strategyItem}>
                <div className={styles.strategyIcon}>🤝</div>
                <div className={styles.strategyContent}>
                  <h3 className={styles.strategyTitle}>Public-Private Partnership</h3>
                  <p>Collaboration between government agencies, infrastructure operators, and security vendors for threat intelligence sharing</p>
                </div>
              </div>
              <div className={styles.strategyItem}>
                <div className={styles.strategyIcon}>🔄</div>
                <div className={styles.strategyContent}>
                  <h3 className={styles.strategyTitle}>Resilience Engineering</h3>
                  <p>Designing systems to continue operating during attacks and recover quickly afterward, minimizing disruption</p>
                </div>
              </div>
            </div>

            <div className={styles.section}>
              <div className={styles.futureOutlook}>
                <h3 className={styles.futureTitle}>The Future: Quantum Threats and AI Defense</h3>
                <p className={styles.futureText}>
                  Looking ahead, critical infrastructure faces emerging threats from quantum computing capable of breaking current encryption, 
                  while also benefiting from AI-powered defense systems that can predict and prevent attacks before they occur. The next decade 
                  will see increased convergence of physical and cyber security, with autonomous response systems and international cooperation 
                  becoming essential for protecting our shared infrastructure.
                </p>
                <div className={styles.futureTrends}>
                  <div className={styles.trend}>
                    <div className={styles.trendIcon}>⚛️</div>
                    <span>Quantum-Resistant Cryptography</span>
                  </div>
                  <div className={styles.trend}>
                    <div className={styles.trendIcon}>🧠</div>
                    <span>Autonomous Cyber Defense</span>
                  </div>
                  <div className={styles.trend}>
                    <div className={styles.trendIcon}>🌐</div>
                    <span>Global Threat Intelligence Sharing</span>
                  </div>
                  <div className={styles.trend}>
                    <div className={styles.trendIcon}>🏭</div>
                    <span>Smart Infrastructure Security</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 6: Call to Action */}
          <div className={styles.section}>
            <div className={styles.actionBox}>
              <h3 className={styles.actionTitle}>Building a Resilient Future</h3>
              <p className={styles.actionText}>
                Protecting critical infrastructure requires sustained investment, international cooperation, and continuous innovation. 
                As our society becomes increasingly digital, the security of our energy, transportation, and essential services 
                becomes inseparable from national security itself. The time to fortify our digital foundations is now.
              </p>
              <div className={styles.actionSteps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <span>Assess current infrastructure vulnerabilities</span>
                </div>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <span>Implement defense-in-depth strategies</span>
                </div>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <span>Foster public-private partnerships</span>
                </div>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>4</div>
                  <span>Invest in next-generation security technologies</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CriticalInfrastructureSecurity;