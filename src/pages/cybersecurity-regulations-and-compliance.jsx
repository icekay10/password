import styles from './CybersecurityRegulations.module.css';

const CybersecurityRegulations = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Cybersecurity Regulations and Compliance</h1>
        <p className={styles.subtitle}>
          Navigating the complex landscape of global cybersecurity laws, regulations, and compliance requirements
        </p>

        <div className={styles.content}>
          {/* Section 1: Introduction */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>The Regulatory Revolution in Cybersecurity</h2>
            <p className={styles.paragraph}>
              As cyber threats escalate and data breaches become more frequent, governments worldwide are implementing 
              stringent cybersecurity regulations. These laws are transforming how organizations approach data protection, 
              privacy, and security, creating a complex compliance landscape that requires strategic navigation.
            </p>
            <div className={styles.statisticsGrid}>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>145+</div>
                <div className={styles.statLabel}>Countries have data protection laws</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>$4.24M</div>
                <div className={styles.statLabel}>Avg. cost of compliance failure</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>83%</div>
                <div className={styles.statLabel}>Of businesses face compliance challenges</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>300%</div>
                <div className={styles.statLabel}>Increase in regulatory fines since 2018</div>
              </div>
            </div>
          </div>

          {/* Section 2: Global Privacy Laws */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>GDPR, CCPA, and Global Privacy Laws in 2025</h2>
            <p className={styles.paragraph}>
              The regulatory landscape is evolving rapidly, with new laws emerging and existing ones being strengthened. 
              Understanding these frameworks is essential for any organization operating in today's global digital economy.
            </p>

            <div className={styles.regulationsGrid}>
              <div className={styles.regulationCard}>
                <div className={styles.regulationHeader}>
                  <div className={styles.regulationFlag}>🇪🇺</div>
                  <h3 className={styles.regulationTitle}>GDPR (General Data Protection Regulation)</h3>
                </div>
                <div className={styles.regulationContent}>
                  <div className={styles.regulationStats}>
                    <span className={styles.stat}>Scope: Global</span>
                    <span className={styles.stat}>Max Fine: €20M or 4% of revenue</span>
                    <span className={styles.stat}>Enforcement: Active</span>
                  </div>
                  <p className={styles.regulationDesc}>
                    Europe's comprehensive data protection law affecting any organization processing EU citizen data. 
                    Requires data minimization, purpose limitation, and explicit consent for data processing.
                  </p>
                  <div className={styles.keyRequirements}>
                    <h4 className={styles.requirementsTitle}>Key Requirements:</h4>
                    <ul className={styles.requirementsList}>
                      <li>Data Protection by Design & Default</li>
                      <li>72-hour breach notification</li>
                      <li>Data Protection Impact Assessments</li>
                      <li>Right to be Forgotten</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={styles.regulationCard}>
                <div className={styles.regulationHeader}>
                  <div className={styles.regulationFlag}>🇺🇸</div>
                  <h3 className={styles.regulationTitle}>CCPA/CPRA (California Privacy Rights Act)</h3>
                </div>
                <div className={styles.regulationContent}>
                  <div className={styles.regulationStats}>
                    <span className={styles.stat}>Scope: California residents</span>
                    <span className={styles.stat}>Max Fine: $7,500 per violation</span>
                    <span className={styles.stat}>Enforcement: Active</span>
                  </div>
                  <p className={styles.regulationDesc}>
                    California's comprehensive privacy law granting consumers rights over their personal information. 
                    CPRA amendments strengthen enforcement and create new consumer rights.
                  </p>
                  <div className={styles.keyRequirements}>
                    <h4 className={styles.requirementsTitle}>Key Requirements:</h4>
                    <ul className={styles.requirementsList}>
                      <li>Right to Know & Access</li>
                      <li>Right to Delete</li>
                      <li>Right to Opt-Out of Sale</li>
                      <li>Data Minimization & Purpose Limitation</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={styles.regulationCard}>
                <div className={styles.regulationHeader}>
                  <div className={styles.regulationFlag}>🌍</div>
                  <h3 className={styles.regulationTitle}>Emerging Global Regulations</h3>
                </div>
                <div className={styles.regulationContent}>
                  <div className={styles.regulationStats}>
                    <span className={styles.stat}>Scope: Regional/National</span>
                    <span className={styles.stat}>Trend: Increasing strictness</span>
                    <span className={styles.stat}>Enforcement: Growing</span>
                  </div>
                  <p className={styles.regulationDesc}>
                    New regulations emerging worldwide, including Brazil's LGPD, China's PIPL, India's DPDPA, 
                    and various sector-specific regulations across industries.
                  </p>
                  <div className={styles.keyRequirements}>
                    <h4 className={styles.requirementsTitle}>Key Trends:</h4>
                    <ul className={styles.requirementsList}>
                      <li>Cross-border data transfer restrictions</li>
                      <li>Mandatory data localization</li>
                      <li>Enhanced consumer rights</li>
                      <li>Increased enforcement powers</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.section}>
              <h3 className={styles.subSectionTitle}>2025 Regulatory Predictions</h3>
              <div className={styles.predictions}>
                <div className={styles.prediction}>
                  <div className={styles.predictionIcon}>🔮</div>
                  <div className={styles.predictionContent}>
                    <h4 className={styles.predictionTitle}>AI-Specific Regulations</h4>
                    <p>New laws governing AI system security, transparency, and bias prevention will emerge globally</p>
                  </div>
                </div>
                <div className={styles.prediction}>
                  <div className={styles.predictionIcon}>🤝</div>
                  <div className={styles.predictionContent}>
                    <h4 className={styles.predictionTitle}>Global Harmonization Efforts</h4>
                    <p>International frameworks to align different national regulations and simplify cross-border compliance</p>
                  </div>
                </div>
                <div className={styles.prediction}>
                  <div className={styles.predictionIcon}>⚖️</div>
                  <div className={styles.predictionContent}>
                    <h4 className={styles.predictionTitle}>Increased Enforcement</h4>
                    <p>More aggressive enforcement with larger fines and personal liability for executives</p>
                  </div>
                </div>
                <div className={styles.prediction}>
                  <div className={styles.predictionIcon}>🏭</div>
                  <div className={styles.predictionContent}>
                    <h4 className={styles.predictionTitle}>Sector-Specific Regulations</h4>
                    <p>Specialized regulations for critical infrastructure, healthcare, finance, and education sectors</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Staying Ahead */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>How Businesses Can Stay Ahead of Regulatory Changes</h2>
            <p className={styles.paragraph}>
              Proactive compliance strategies are essential for navigating the evolving regulatory landscape. 
              Organizations must move from reactive compliance to integrated, strategic approaches.
            </p>

            <div className={styles.strategyFramework}>
              <div className={styles.strategyTier}>
                <div className={styles.tierHeader}>
                  <div className={styles.tierLevel}>Level 1</div>
                  <h3 className={styles.tierTitle}>Foundational Compliance</h3>
                </div>
                <div className={styles.tierContent}>
                  <p><strong>Focus:</strong> Basic regulatory requirements and risk mitigation</p>
                  <ul className={styles.tierList}>
                    <li>Compliance assessment and gap analysis</li>
                    <li>Basic data mapping and inventory</li>
                    <li>Essential policy development</li>
                    <li>Initial staff training</li>
                  </ul>
                  <p className={styles.tierNote}>Achieves minimum legal requirements</p>
                </div>
              </div>

              <div className={styles.strategyTier}>
                <div className={styles.tierHeader}>
                  <div className={styles.tierLevel}>Level 2</div>
                  <h3 className={styles.tierTitle}>Integrated Compliance</h3>
                </div>
                <div className={styles.tierContent}>
                  <p><strong>Focus:</strong> Systematic integration of compliance into operations</p>
                  <ul className={styles.tierList}>
                    <li>Comprehensive risk management program</li>
                    <li>Automated compliance monitoring</li>
                    <li>Regular compliance audits</li>
                    <li>Cross-functional compliance team</li>
                  </ul>
                  <p className={styles.tierNote}>Proactively manages compliance risks</p>
                </div>
              </div>

              <div className={styles.strategyTier}>
                <div className={styles.tierHeader}>
                  <div className={styles.tierLevel}>Level 3</div>
                  <h3 className={styles.tierTitle}>Strategic Compliance</h3>
                </div>
                <div className={styles.tierContent}>
                  <p><strong>Focus:</strong> Competitive advantage through compliance excellence</p>
                  <ul className={styles.tierList}>
                    <li>Predictive compliance analytics</li>
                    <li>Compliance-driven innovation</li>
                    <li>Industry leadership in standards</li>
                    <li>Compliance as brand differentiator</li>
                  </ul>
                  <p className={styles.tierNote}>Transforms compliance into business advantage</p>
                </div>
              </div>
            </div>

            <div className={styles.section}>
              <h3 className={styles.subSectionTitle}>Essential Compliance Tools and Technologies</h3>
              <div className={styles.complianceTools}>
                <div className={styles.tool}>
                  <div className={styles.toolIcon}>🗺️</div>
                  <div className={styles.toolContent}>
                    <h4 className={styles.toolTitle}>Data Mapping & Inventory</h4>
                    <p>Automated tools to track data flows, processing activities, and data residency across the organization</p>
                  </div>
                </div>
                <div className={styles.tool}>
                  <div className={styles.toolIcon}>📊</div>
                  <div className={styles.toolContent}>
                    <h4 className={styles.toolTitle}>Compliance Management Platforms</h4>
                    <p>Integrated systems for policy management, risk assessment, audit tracking, and reporting</p>
                  </div>
                </div>
                <div className={styles.tool}>
                  <div className={styles.toolIcon}>🔍</div>
                  <div className={styles.toolContent}>
                    <h4 className={styles.toolTitle}>Automated Monitoring</h4>
                    <p>AI-powered systems for continuous compliance monitoring and real-time violation detection</p>
                  </div>
                </div>
                <div className={styles.tool}>
                  <div className={styles.toolIcon}>📋</div>
                  <div className={styles.toolContent}>
                    <h4 className={styles.toolTitle}>Privacy Impact Assessment Tools</h4>
                    <p>Automated frameworks for conducting and documenting data protection impact assessments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: Cost of Non-Compliance */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>The Cost of Non-Compliance: Fines and Reputation Damage</h2>
            <p className={styles.paragraph}>
              Non-compliance costs extend far beyond regulatory fines, encompassing reputational damage, 
              lost business opportunities, and operational disruptions that can cripple organizations.
            </p>

            <div className={styles.costBreakdown}>
              <div className={styles.costCategory}>
                <div className={styles.categoryHeader}>
                  <div className={styles.categoryIcon}>💰</div>
                  <h3 className={styles.categoryTitle}>Direct Financial Costs</h3>
                </div>
                <div className={styles.categoryContent}>
                  <div className={styles.costItem}>
                    <span className={styles.costLabel}>Regulatory Fines</span>
                    <span className={styles.costAmount}>Up to 4% global revenue</span>
                  </div>
                  <div className={styles.costItem}>
                    <span className={styles.costLabel}>Legal Fees</span>
                    <span className={styles.costAmount}>$500K - $5M per incident</span>
                  </div>
                  <div className={styles.costItem}>
                    <span className={styles.costLabel}>Remediation Costs</span>
                    <span className={styles.costAmount}>$1M - $10M average</span>
                  </div>
                  <div className={styles.costItem}>
                    <span className={styles.costLabel}>Class Action Settlements</span>
                    <span className={styles.costAmount}>$10M - $100M+</span>
                  </div>
                </div>
              </div>

              <div className={styles.costCategory}>
                <div className={styles.categoryHeader}>
                  <div className={styles.categoryIcon}>📉</div>
                  <h3 className={styles.categoryTitle}>Indirect Business Costs</h3>
                </div>
                <div className={styles.categoryContent}>
                  <div className={styles.costItem}>
                    <span className={styles.costLabel}>Lost Revenue</span>
                    <span className={styles.costAmount}>15-30% decrease</span>
                  </div>
                  <div className={styles.costItem}>
                    <span className={styles.costLabel}>Stock Price Impact</span>
                    <span className={styles.costAmount}>5-10% immediate drop</span>
                  </div>
                  <div className={styles.costItem}>
                    <span className={styles.costLabel}>Customer Churn</span>
                    <span className={styles.costAmount}>20-40% increase</span>
                  </div>
                  <div className={styles.costItem}>
                    <span className={styles.costLabel}>Increased Insurance</span>
                    <span className={styles.costAmount}>50-200% premium hike</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.section}>
              <h3 className={styles.subSectionTitle}>Notable Compliance Failure Cases</h3>
              <div className={styles.caseStudies}>
                <div className={styles.caseStudy}>
                  <div className={styles.caseHeader}>
                    <div className={styles.caseCompany}>Meta</div>
                    <div className={styles.caseFine}>$1.3B</div>
                  </div>
                  <div className={styles.caseContent}>
                    <p><strong>Violation:</strong> GDPR cross-border data transfer violations</p>
                    <p><strong>Impact:</strong> Largest GDPR fine to date, mandatory data processing suspension</p>
                    <p><strong>Lessons:</strong> Cross-border data transfers require specific safeguards and assessments</p>
                  </div>
                </div>
                <div className={styles.caseStudy}>
                  <div className={styles.caseHeader}>
                    <div className={styles.caseCompany}>Equifax</div>
                    <div className={styles.caseFine}>$700M</div>
                  </div>
                  <div className={styles.caseContent}>
                    <p><strong>Violation:</strong> Failure to implement basic security measures per various regulations</p>
                    <p><strong>Impact:</strong> Massive data breach affecting 147 million consumers</p>
                    <p><strong>Lessons:</strong> Basic security hygiene is a regulatory requirement, not optional</p>
                  </div>
                </div>
                <div className={styles.caseStudy}>
                  <div className={styles.caseHeader}>
                    <div className={styles.caseCompany}>Uber</div>
                    <div className={styles.caseFine}>$148M</div>
                  </div>
                  <div className={styles.caseContent}>
                    <p><strong>Violation:</strong> Failure to report data breach within required timeframe</p>
                    <p><strong>Impact:</strong> Multi-state settlement and reputational damage</p>
                    <p><strong>Lessons:</strong> Timely breach reporting is critical across multiple jurisdictions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 5: Compliance Program Framework */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Building an Effective Compliance Program</h2>

            <div className={styles.complianceProgram}>
              <div className={styles.programComponent}>
                <div className={styles.componentHeader}>
                  <div className={styles.componentNumber}>1</div>
                  <h3 className={styles.componentTitle}>Governance & Leadership</h3>
                </div>
                <div className={styles.componentContent}>
                  <p>Establish clear accountability, executive sponsorship, and dedicated compliance roles with appropriate authority and resources</p>
                  <ul className={styles.componentList}>
                    <li>Appoint Data Protection Officer (DPO)</li>
                    <li>Create compliance committee</li>
                    <li>Define clear roles and responsibilities</li>
                    <li>Secure executive commitment</li>
                  </ul>
                </div>
              </div>

              <div className={styles.programComponent}>
                <div className={styles.componentHeader}>
                  <div className={styles.componentNumber}>2</div>
                  <h3 className={styles.componentTitle}>Risk Assessment</h3>
                </div>
                <div className={styles.componentContent}>
                  <p>Regularly identify, assess, and document compliance risks across all operations and data processing activities</p>
                  <ul className={styles.componentList}>
                    <li>Conduct data protection impact assessments</li>
                    <li>Map data flows and processing activities</li>
                    <li>Identify regulatory obligations</li>
                    <li>Prioritize risks based on impact</li>
                  </ul>
                </div>
              </div>

              <div className={styles.programComponent}>
                <div className={styles.componentHeader}>
                  <div className={styles.componentNumber}>3</div>
                  <h3 className={styles.componentTitle}>Policies & Procedures</h3>
                </div>
                <div className={styles.componentContent}>
                  <p>Develop comprehensive policies, procedures, and controls to address identified risks and regulatory requirements</p>
                  <ul className={styles.componentList}>
                    <li>Create data protection policies</li>
                    <li>Implement security controls</li>
                    <li>Establish breach response procedures</li>
                    <li>Develop vendor management protocols</li>
                  </ul>
                </div>
              </div>

              <div className={styles.programComponent}>
                <div className={styles.componentHeader}>
                  <div className={styles.componentNumber}>4</div>
                  <h3 className={styles.componentTitle}>Training & Awareness</h3>
                </div>
                <div className={styles.componentContent}>
                  <p>Educate all employees on compliance requirements, security best practices, and their individual responsibilities</p>
                  <ul className={styles.componentList}>
                    <li>Regular compliance training</li>
                    <li>Role-specific education</li>
                    <li>Security awareness programs</li>
                    <li>Testing and reinforcement</li>
                  </ul>
                </div>
              </div>

              <div className={styles.programComponent}>
                <div className={styles.componentHeader}>
                  <div className={styles.componentNumber}>5</div>
                  <h3 className={styles.componentTitle}>Monitoring & Improvement</h3>
                </div>
                <div className={styles.componentContent}>
                  <p>Continuously monitor compliance effectiveness, conduct regular audits, and improve the program based on findings</p>
                  <ul className={styles.componentList}>
                    <li>Automated compliance monitoring</li>
                    <li>Regular internal audits</li>
                    <li>Third-party assessments</li>
                    <li>Continuous improvement process</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Section 6: Future Outlook */}
          <div className={styles.section}>
            <div className={styles.futurePerspective}>
              <h3 className={styles.perspectiveTitle}>The Future of Cybersecurity Compliance</h3>
              <p className={styles.perspectiveText}>
                As regulations continue to evolve, organizations must adopt agile, technology-driven approaches to compliance. 
                The future will see increased automation, real-time compliance monitoring, and greater integration between 
                security and compliance functions. Successful organizations will view compliance not as a cost center but as 
                a strategic enabler of trust and business growth.
              </p>
              <div className={styles.keyRecommendations}>
                <div className={styles.recommendation}>
                  <div className={styles.recIcon}>🤖</div>
                  <span>Embrace compliance automation and AI</span>
                </div>
                <div className={styles.recommendation}>
                  <div className={styles.recIcon}>🌐</div>
                  <span>Design for global compliance from the start</span>
                </div>
                <div className={styles.recommendation}>
                  <div className={styles.recIcon}>📈</div>
                  <span>Integrate compliance into business strategy</span>
                </div>
                <div className={styles.recommendation}>
                  <div className={styles.recIcon}>🔄</div>
                  <span>Establish continuous compliance processes</span>
                </div>
              </div>
              <p className={styles.finalInsight}>
                In an era of increasing regulation and scrutiny, proactive compliance management is no longer optional—it's essential 
                for business survival and success. Organizations that master regulatory compliance will gain competitive advantage, 
                build customer trust, and create more resilient, sustainable businesses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CybersecurityRegulations;