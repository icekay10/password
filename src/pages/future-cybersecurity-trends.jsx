import styles from './FutureCybersecurityTrends.module.css';

const FutureCybersecurityTrends = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Future Cybersecurity Trends</h1>
        <p className={styles.subtitle}>
          Navigating the next frontier of digital threats, quantum challenges, and transformative security strategies
        </p>

        <div className={styles.content}>
          {/* Section 1: Introduction */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>The Cybersecurity Horizon: Preparing for What's Next</h2>
            <p className={styles.paragraph}>
              As technology accelerates at an unprecedented pace, cybersecurity faces transformative challenges 
              and opportunities. The convergence of quantum computing, AI proliferation, and global digital 
              transformation is reshaping the security landscape in ways that demand proactive, strategic responses.
            </p>
            <div className={styles.statisticsGrid}>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>$15.63T</div>
                <div className={styles.statLabel}>Cybercrime costs by 2029</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>95%</div>
                <div className={styles.statLabel}>Of organizations unprepared for quantum threats</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>300B+</div>
                <div className={styles.statLabel}>Passwords to be cracked by quantum computers</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>70%</div>
                <div className={styles.statLabel}>Of CEOs will mandate cyber resilience by 2025</div>
              </div>
            </div>
          </div>

          {/* Section 2: Cybercrime Economics */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Cybercrime Costs Projected to Reach $15.63 Trillion by 2029</h2>
            <p className={styles.paragraph}>
              Cybercrime is evolving from isolated incidents to industrialized criminal enterprises with 
              sophisticated business models. The economic impact is shifting from direct theft to systemic 
              disruption, intellectual property theft, and geopolitical leverage.
            </p>

            <div className={styles.costEvolution}>
              <div className={styles.costTimeline}>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineYear}>2023</div>
                  <div className={styles.timelineContent}>
                    <h4 className={styles.timelineTitle}>$8.44 Trillion</h4>
                    <p>Ransomware dominates with sophisticated double and triple extortion tactics</p>
                  </div>
                </div>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineYear}>2025</div>
                  <div className={styles.timelineContent}>
                    <h4 className={styles.timelineTitle}>$10.50 Trillion</h4>
                    <p>AI-powered attacks and supply chain compromises become mainstream</p>
                  </div>
                </div>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineYear}>2027</div>
                  <div className={styles.timelineContent}>
                    <h4 className={styles.timelineTitle}>$13.82 Trillion</h4>
                    <p>Quantum-harvested attacks and critical infrastructure targeting escalate</p>
                  </div>
                </div>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineYear}>2029</div>
                  <div className={styles.timelineContent}>
                    <h4 className={styles.timelineTitle}>$15.63 Trillion</h4>
                    <p>Convergence of cyber-physical attacks with global economic disruption</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.section}>
              <h3 className={styles.subSectionTitle}>Emerging Cybercrime Business Models</h3>
              <div className={styles.crimeModels}>
                <div className={styles.crimeModel}>
                  <div className={styles.modelIcon}>🏭</div>
                  <div className={styles.modelContent}>
                    <h4 className={styles.modelTitle}>Ransomware-as-a-Service (RaaS)</h4>
                    <p>Sophisticated subscription models with customer support, 24/7 operations, and revenue sharing for affiliates</p>
                  </div>
                </div>
                <div className={styles.crimeModel}>
                  <div className={styles.modelIcon}>🤖</div>
                  <div className={styles.modelContent}>
                    <h4 className={styles.modelTitle}>AI-Powered Attack Platforms</h4>
                    <p>Automated attack systems that learn from defenses, adapt in real-time, and scale attacks exponentially</p>
                  </div>
                </div>
                <div className={styles.crimeModel}>
                  <div className={styles.modelIcon}>🌐</div>
                  <div className={styles.modelContent}>
                    <h4 className={styles.modelTitle}>Cybercrime Marketplaces</h4>
                    <p>Dark web platforms offering zero-day exploits, compromised credentials, and attack tools with escrow services</p>
                  </div>
                </div>
                <div className={styles.crimeModel}>
                  <div className={styles.modelIcon}>🎯</div>
                  <div className={styles.modelContent}>
                    <h4 className={styles.modelTitle}>Targeted Espionage Services</h4>
                    <p>Bespoke corporate and nation-state espionage services sold to the highest bidders</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Quantum Computing Impact */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Quantum Computing and Its Impact on Encryption</h2>
            <p className={styles.paragraph}>
              Quantum computing represents both the greatest threat and opportunity in cybersecurity history. 
              While capable of breaking current encryption, it also enables fundamentally secure communication 
              through quantum key distribution and quantum-resistant algorithms.
            </p>

            <div className={styles.quantumImpact}>
              <div className={styles.quantumTimeline}>
                <div className={styles.quantumPhase}>
                  <div className={styles.phaseHeader}>
                    <div className={styles.phaseLabel}>2023-2025</div>
                    <h4 className={styles.phaseTitle}>Harvest Now, Decrypt Later</h4>
                  </div>
                  <div className={styles.phaseContent}>
                    <p>Attackers collect encrypted data today to decrypt later when quantum computers become available</p>
                    <div className={styles.phaseRisks}>
                      <span>Long-term data exposure</span>
                      <span>Encrypted data theft</span>
                      <span>Future decryption threats</span>
                    </div>
                  </div>
                </div>
                <div className={styles.quantumPhase}>
                  <div className={styles.phaseHeader}>
                    <div className={styles.phaseLabel}>2026-2028</div>
                    <h4 className={styles.phaseTitle}>Cryptographic Transition</h4>
                  </div>
                  <div className={styles.phaseContent}>
                    <p>Hybrid systems combining classical and quantum-resistant algorithms during the transition period</p>
                    <div className={styles.phaseRisks}>
                      <span>Implementation complexity</span>
                      <span>Performance overhead</span>
                      <span>Interoperability challenges</span>
                    </div>
                  </div>
                </div>
                <div className={styles.quantumPhase}>
                  <div className={styles.phaseHeader}>
                    <div className={styles.phaseLabel}>2029+</div>
                    <h4 className={styles.phaseTitle}>Post-Quantum Era</h4>
                  </div>
                  <div className={styles.phaseContent}>
                    <p>Widespread adoption of quantum-resistant cryptography and quantum-secure communication networks</p>
                    <div className={styles.phaseRisks}>
                      <span>Legacy system vulnerabilities</span>
                      <span>Quantum attack sophistication</span>
                      <span>New attack vectors</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.section}>
              <h3 className={styles.subSectionTitle}>Quantum-Resistant Cryptography Solutions</h3>
              <div className={styles.quantumSolutions}>
                <div className={styles.solution}>
                  <div className={styles.solutionIcon}>🔐</div>
                  <div className={styles.solutionContent}>
                    <h4 className={styles.solutionTitle}>Lattice-Based Cryptography</h4>
                    <p>Mathematical problems involving high-dimensional lattices that are believed to be resistant to both classical and quantum attacks</p>
                  </div>
                </div>
                <div className={styles.solution}>
                  <div className={styles.solutionIcon}>⚛️</div>
                  <div className={styles.solutionContent}>
                    <h4 className={styles.solutionTitle}>Quantum Key Distribution (QKD)</h4>
                    <p>Using quantum properties to generate and distribute encryption keys with provable security based on quantum mechanics</p>
                  </div>
                </div>
                <div className={styles.solution}>
                  <div className={styles.solutionIcon}>🔢</div>
                  <div className={styles.solutionContent}>
                    <h4 className={styles.solutionTitle}>Hash-Based Signatures</h4>
                    <p>Digital signatures based on cryptographic hash functions that remain secure even against quantum computers</p>
                  </div>
                </div>
                <div className={styles.solution}>
                  <div className={styles.solutionIcon}>🔄</div>
                  <div className={styles.solutionContent}>
                    <h4 className={styles.solutionTitle}>Code-Based Cryptography</h4>
                    <p>Encryption systems based on error-correcting codes that have withstood decades of cryptanalysis</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: Gartner's 2025 Vision */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Resilience Through Transformation: Gartner's 2025 Vision</h2>
            <p className={styles.paragraph}>
              Gartner's cybersecurity predictions for 2025 emphasize proactive resilience over reactive defense. 
              Organizations must transform their security approaches to address evolving threats, regulatory 
              requirements, and technological advancements.
            </p>

            <div className={styles.gartnerPredictions}>
              <div className={styles.predictionCard}>
                <div className={styles.predictionHeader}>
                  <div className={styles.predictionNumber}>1</div>
                  <h3 className={styles.predictionTitle}>Continuous Threat Exposure Management (CTEM)</h3>
                </div>
                <div className={styles.predictionContent}>
                  <p><strong>Core Concept:</strong> Proactive, continuous assessment and prioritization of security exposures</p>
                  <ul className={styles.predictionList}>
                    <li>Automated discovery of attack surfaces</li>
                    <li>Risk-based vulnerability prioritization</li>
                    <li>Continuous validation of security controls</li>
                    <li>Integration with business risk management</li>
                  </ul>
                  <p className={styles.predictionImpact}><strong>Impact:</strong> 70% reduction in breach likelihood</p>
                </div>
              </div>

              <div className={styles.predictionCard}>
                <div className={styles.predictionHeader}>
                  <div className={styles.predictionNumber}>2</div>
                  <h3 className={styles.predictionTitle}>Security Behavior and Culture Programs (SBCP)</h3>
                </div>
                <div className={styles.predictionContent}>
                  <p><strong>Core Concept:</strong> Human-centric security that embeds security awareness into organizational culture</p>
                  <ul className={styles.predictionList}>
                    <li>Personalized security training</li>
                    <li>Behavioral analytics and nudges</li>
                    <li>Leadership engagement and modeling</li>
                    <li>Psychological safety for reporting</li>
                  </ul>
                  <p className={styles.predictionImpact}><strong>Impact:</strong> 50% reduction in human error incidents</p>
                </div>
              </div>

              <div className={styles.predictionCard}>
                <div className={styles.predictionHeader}>
                  <div className={styles.predictionNumber}>3</div>
                  <h3 className={styles.predictionTitle}>Composable Security</h3>
                </div>
                <div className={styles.predictionContent}>
                  <p><strong>Core Concept:</strong> Modular, adaptive security architectures that evolve with business needs</p>
                  <ul className={styles.predictionList}>
                    <li>API-first security solutions</li>
                    <li>Zero-trust integration frameworks</li>
                    <li>Automated security orchestration</li>
                    <li>Business-aligned security services</li>
                  </ul>
                  <p className={styles.predictionImpact}><strong>Impact:</strong> 40% faster security deployment</p>
                </div>
              </div>
            </div>

            <div className={styles.section}>
              <h3 className={styles.subSectionTitle}>Key Strategic Shifts Required</h3>
              <div className={styles.strategicShifts}>
                <div className={styles.shift}>
                  <div className={styles.shiftIcon}>🔄</div>
                  <div className={styles.shiftContent}>
                    <h4 className={styles.shiftTitle}>From Perimeter to Identity</h4>
                    <p>Shift focus from network boundaries to user and device identity as the new security perimeter</p>
                  </div>
                </div>
                <div className={styles.shift}>
                  <div className={styles.shiftIcon}>⚡</div>
                  <div className={styles.shiftContent}>
                    <h4 className={styles.shiftTitle}>From Prevention to Resilience</h4>
                    <p>Assume breaches will occur and focus on rapid detection, response, and recovery capabilities</p>
                  </div>
                </div>
                <div className={styles.shift}>
                  <div className={styles.shiftIcon}>🤖</div>
                  <div className={styles.shiftContent}>
                    <h4 className={styles.shiftTitle}>From Manual to Autonomous</h4>
                    <p>Leverage AI and automation for continuous security operations and threat response</p>
                  </div>
                </div>
                <div className={styles.shift}>
                  <div className={styles.shiftIcon}>🌐</div>
                  <div className={styles.shiftContent}>
                    <h4 className={styles.shiftTitle}>From Silos to Ecosystem</h4>
                    <p>Collaborate across organizations, industries, and governments for collective defense</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 5: Future Technologies */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Emerging Security Technologies for the Future</h2>

            <div className={styles.emergingTech}>
              <div className={styles.techCategory}>
                <div className={styles.categoryHeader}>
                  <div className={styles.categoryIcon}>🧠</div>
                  <h3 className={styles.categoryTitle}>AI and Machine Learning</h3>
                </div>
                <div className={styles.categoryContent}>
                  <div className={styles.techItem}>
                    <h4 className={styles.techTitle}>Autonomous Security Operations</h4>
                    <p>Self-learning systems that detect, investigate, and respond to threats without human intervention</p>
                    <div className={styles.techStatus}>
                      <span className={styles.status}>Maturity: Emerging</span>
                      <span className={styles.impact}>Impact: High</span>
                    </div>
                  </div>
                  <div className={styles.techItem}>
                    <h4 className={styles.techTitle}>Predictive Threat Intelligence</h4>
                    <p>AI models that predict attacks before they occur by analyzing patterns and early indicators</p>
                    <div className={styles.techStatus}>
                      <span className={styles.status}>Maturity: Early Adoption</span>
                      <span className={styles.impact}>Impact: Very High</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.techCategory}>
                <div className={styles.categoryHeader}>
                  <div className={styles.categoryIcon}>🔗</div>
                  <h3 className={styles.categoryTitle}>Decentralized Technologies</h3>
                </div>
                <div className={styles.categoryContent}>
                  <div className={styles.techItem}>
                    <h4 className={styles.techTitle}>Blockchain for Security</h4>
                    <p>Immutable audit trails, decentralized identity, and tamper-proof security logging</p>
                    <div className={styles.techStatus}>
                      <span className={styles.status}>Maturity: Growing</span>
                      <span className={styles.impact}>Impact: Medium</span>
                    </div>
                  </div>
                  <div className={styles.techItem}>
                    <h4 className={styles.techTitle}>Zero-Trust Architecture</h4>
                    <p>Never trust, always verify approach with continuous authentication and micro-segmentation</p>
                    <div className={styles.techStatus}>
                      <span className={styles.status}>Maturity: Mainstream</span>
                      <span className={styles.impact}>Impact: Critical</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 6: Strategic Roadmap */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>2025-2030 Cybersecurity Roadmap</h2>

            <div className={styles.roadmap}>
              <div className={styles.roadmapPhase}>
                <div className={styles.phaseIndicator}>
                  <div className={styles.phaseCircle}>2024-2025</div>
                  <div className={styles.phaseLine}></div>
                </div>
                <div className={styles.phaseContent}>
                  <h4 className={styles.phaseTitle}>Foundation & Assessment</h4>
                  <ul className={styles.phaseActions}>
                    <li>Conduct quantum risk assessment</li>
                    <li>Implement zero-trust architecture</li>
                    <li>Establish continuous threat exposure management</li>
                    <li>Begin post-quantum cryptography planning</li>
                  </ul>
                </div>
              </div>

              <div className={styles.roadmapPhase}>
                <div className={styles.phaseIndicator}>
                  <div className={styles.phaseCircle}>2026-2027</div>
                  <div className={styles.phaseLine}></div>
                </div>
                <div className={styles.phaseContent}>
                  <h4 className={styles.phaseTitle}>Transformation & Integration</h4>
                  <ul className={styles.phaseActions}>
                    <li>Deploy quantum-resistant cryptography</li>
                    <li>Implement AI-driven security operations</li>
                    <li>Establish comprehensive security culture</li>
                    <li>Integrate security into DevOps (DevSecOps)</li>
                  </ul>
                </div>
              </div>

              <div className={styles.roadmapPhase}>
                <div className={styles.phaseIndicator}>
                  <div className={styles.phaseCircle}>2028-2030</div>
                  <div className={styles.phaseLine}></div>
                </div>
                <div className={styles.phaseContent}>
                  <h4 className={styles.phaseTitle}>Maturation & Innovation</h4>
                  <ul className={styles.phaseActions}>
                    <li>Implement quantum-secure communications</li>
                    <li>Deploy autonomous security systems</li>
                    <li>Establish predictive security capabilities</li>
                    <li>Lead industry security standards</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Section 7: Call to Action */}
          <div className={styles.section}>
            <div className={styles.callToAction}>
              <h3 className={styles.actionTitle}>Preparing for the Cybersecurity Future</h3>
              <p className={styles.actionText}>
                The future of cybersecurity demands proactive, strategic investment and cultural transformation. 
                Organizations that begin preparing today for quantum threats, AI-driven attacks, and evolving 
                regulatory landscapes will be positioned to thrive in an increasingly complex digital ecosystem.
              </p>
              <div className={styles.immediateActions}>
                <div className={styles.action}>
                  <div className={styles.actionIcon}>🔍</div>
                  <div className={styles.actionContent}>
                    <h4 className={styles.actionItemTitle}>Assess Current Posture</h4>
                    <p>Conduct comprehensive assessment of current security capabilities against future threats</p>
                  </div>
                </div>
                <div className={styles.action}>
                  <div className={styles.actionIcon}>📋</div>
                  <div className={styles.actionContent}>
                    <h4 className={styles.actionItemTitle}>Develop Quantum Strategy</h4>
                    <p>Create and implement a quantum-readiness roadmap with specific milestones and investments</p>
                  </div>
                </div>
                <div className={styles.action}>
                  <div className={styles.actionIcon}>🚀</div>
                  <div className={styles.actionContent}>
                    <h4 className={styles.actionItemTitle}>Invest in Future Skills</h4>
                    <p>Build teams with expertise in quantum computing, AI security, and emerging technologies</p>
                  </div>
                </div>
                <div className={styles.action}>
                  <div className={styles.actionIcon}>🔄</div>
                  <div className={styles.actionContent}>
                    <h4 className={styles.actionItemTitle}>Embrace Continuous Evolution</h4>
                    <p>Establish processes for continuous learning, adaptation, and security innovation</p>
                  </div>
                </div>
              </div>
              <p className={styles.finalThought}>
                The cybersecurity landscape of 2030 will be fundamentally different from today's. Organizations 
                that view security as a strategic enabler rather than a cost center will not only survive but 
                thrive in the face of evolving threats and opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FutureCybersecurityTrends;