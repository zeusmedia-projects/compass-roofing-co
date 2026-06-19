'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ShieldAlert, Calendar, Eye, Droplet, Wind, FileText, CheckCircle2 } from 'lucide-react';
import styles from './DiagnosticSection.module.css';

interface DiagnosticCard {
  id: string;
  label: string;
  status: string;
  subtitle: string;
  description: string;
  symptoms: string[];
  impact: string;
  icon: React.ReactNode;
  isRecommendation?: boolean;
}

export default function DiagnosticSection() {
  const [activeTab, setActiveTab] = useState<string>('leak');

  const diagnosticData: Record<string, DiagnosticCard> = {
    leak: {
      id: 'leak',
      label: 'Leak Risk',
      status: 'Moderate',
      subtitle: 'Flashing gaps noted near chimney',
      description: 'South Florida downpours quickly exploit minor gaps in roof flashings, valleys, and wall joints. Our inspections look specifically at seals around penetrations to capture leaks before they damage your ceiling.',
      symptoms: [
        'Water stains on upper ceilings or drywall',
        'Separation or cracking in sealants around pipes',
        'Rust spots or loose flashing strips near chimney joints'
      ],
      impact: 'Preventative sealing of flashing saves $2,000–$5,000 in drywall and structural repair.',
      icon: <Droplet size={24} />
    },
    age: {
      id: 'age',
      label: 'Roof Age',
      status: '14 Years',
      subtitle: 'Approaching half-life for tile/metal',
      description: 'Every roofing material degrades differently under Florida\'s intense UV rays. A roof\'s age determines whether a targeted repair, a protective restoration coating, or a complete structural replacement is the most cost-effective path.',
      symptoms: [
        'Shingle roofs: 12–15 years (nearing replacement)',
        'Tile & Metal systems: 15–20 years (ideal for seal audits)',
        'Flat roof systems: 10–12 years (requires active inspection)'
      ],
      impact: 'Knowing the real age helps schedule restoration to defer $20,000+ replacement costs.',
      icon: <Calendar size={24} />
    },
    wear: {
      id: 'wear',
      label: 'Surface Wear',
      status: '40–60%',
      subtitle: 'Granule loss on south-facing slopes',
      description: 'Intense South Florida sun causes thermal expansion and granule loss. As protective coatings wear thin, underlying fiberglass or asphalt becomes exposed to direct heat and moisture, accelerating deterioration.',
      symptoms: [
        'Dark patches or missing granules in gutters',
        'Hairline cracks in concrete roof tiles',
        'Alligatoring or cracking on flat roof membrane surfaces'
      ],
      impact: 'Capturing surface wear early allows for a simple protective coating instead of full rebuilds.',
      icon: <Eye size={24} />
    },
    drainage: {
      id: 'drainage',
      label: 'Drainage Condition',
      status: 'Good',
      subtitle: 'Gutters clear, scuppers functioning',
      description: 'Standing or ponding water is the primary cause of premature flat roof failure. Flat roofs must drain effectively within 48 hours of rain to prevent structural deflection and seam degradation.',
      symptoms: [
        'Ponding water lasting more than 48 hours post-storm',
        'Debris accumulation or moss blocking drainage paths',
        'Saggy or leaking gutter joints near roof edges'
      ],
      impact: 'Maintaining clear drainage ensures flat roof membranes reach their full 20-year lifespan.',
      icon: <CheckCircle2 size={24} />
    },
    storm: {
      id: 'storm',
      label: 'Storm Readiness',
      status: 'High Risk',
      subtitle: 'Lacking hurricane strap verification',
      description: 'South Florida has the strictest wind codes in the country. Our storm audits inspect key attachment points, deck fastening spacing, and the integrity of underlayments to make sure your home can withstand Category 4+ wind uplift.',
      symptoms: [
        'Missing, cracked, or sliding perimeter roof tiles',
        'Curled or lifting shingle tabs along the roof edge',
        'No record of hurricane strap or clip wind mitigation'
      ],
      impact: 'Verifying storm readiness can reduce home insurance premiums by 20% to 50% via a Wind Mitigation report.',
      icon: <Wind size={24} />
    },
    recommendation: {
      id: 'recommendation',
      label: 'Recommendation',
      status: 'Roof Coating',
      subtitle: 'Replacement not yet warranted',
      description: 'Based on moderate wear and localized flashing issues, a complete roof replacement is unnecessary. A targeted repair of flashing combined with a premium silicone or elastomeric protective coating will extend this roof\'s life by 7–10 years.',
      symptoms: [
        'Silicone coating: Best for commercial flat roofs',
        'Elastomeric coating: Seals shingle/tile micro-fissures',
        'Targeted flashing repair: Stops active moisture entrance'
      ],
      impact: 'Saves an estimated $12,000–$25,000 compared to a premature full replacement.',
      icon: <FileText size={24} />,
      isRecommendation: true
    }
  };

  const activeCard = diagnosticData[activeTab];

  return (
    <section className={styles.section} id="diagnostic">
      <div className="blueprint-overlay-dark" />
      <div className={styles.radarGlow} />
      
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>Roof Health Diagnostic</span>
          <h2 className={styles.title}>Get a Clear Read on Your Roof</h2>
          <p className={styles.subtitle}>
            Most roofing decisions are made under stress or incomplete information. We analyze the 5 core markers of roof integrity so you know exactly where your roof stands.
          </p>
        </div>

        <div className={styles.gridContainer}>
          {/* Dashboard Cards Grid */}
          <div className={styles.cardsGrid}>
            {Object.values(diagnosticData).map((card) => {
              const isActive = activeTab === card.id;
              return (
                <button
                  key={card.id}
                  onClick={() => setActiveTab(card.id)}
                  className={`
                    ${styles.card} 
                    ${card.isRecommendation ? styles.recommendationCard : ''} 
                    ${isActive ? styles.activeCard : ''}
                  `}
                  aria-selected={isActive}
                  role="tab"
                >
                  <div className={styles.cardHeader}>
                    <span className={card.isRecommendation ? styles.cardLabelAmber : styles.cardLabel}>
                      {card.label}
                    </span>
                    <span className={styles.cardIcon}>{card.icon}</span>
                  </div>
                  <div className={styles.cardValue}>{card.status}</div>
                  <div className={styles.cardSubtitle}>{card.subtitle}</div>
                </button>
              );
            })}
          </div>

          {/* Detailed Diagnostic Panel */}
          <div className={styles.detailPanel}>
            <div className={styles.panelHeader}>
              <div className={styles.panelTitleContainer}>
                <span className={styles.panelIcon}>{activeCard.icon}</span>
                <div>
                  <span className={styles.panelEyebrow}>{activeCard.label} Metric</span>
                  <h3 className={styles.panelTitle}>{activeCard.status}</h3>
                </div>
              </div>
              <div className={`${styles.statusBadge} ${activeCard.isRecommendation ? styles.badgeAmber : ''}`}>
                Status: {activeCard.status}
              </div>
            </div>

            <div className={styles.panelContent}>
              <p className={styles.panelDescription}>{activeCard.description}</p>
              
              <div className={styles.symptomsBox}>
                <h4 className={styles.boxTitle}>Common Warning Signs:</h4>
                <ul className={styles.symptomsList}>
                  {activeCard.symptoms.map((symptom, idx) => (
                    <li key={idx} className={styles.symptomItem}>
                      <ShieldAlert size={14} className={styles.bulletIcon} />
                      <span>{symptom}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.impactBox}>
                <strong>Financial Impact: </strong>
                <span>{activeCard.impact}</span>
              </div>
            </div>

            <div className={styles.panelFooter}>
              <Link href="/contact" className="btn btn-primary">
                Schedule Pro Inspection
              </Link>
              <span className={styles.footerNote}>
                Includes full multi-point digital report with photo evidence.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
