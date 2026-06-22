import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, ShieldAlert } from 'lucide-react';
import { roofTypesData } from '@/data/sitemapData';
import styles from './page.module.css';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(roofTypesData).map((slug) => ({
    slug,
  }));
}

export default async function RoofTypePage({ params }: PageProps) {
  const resolvedParams = await params;
  const roof = roofTypesData[resolvedParams.slug];

  if (!roof) {
    notFound();
  }

  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="blueprint-overlay-dark" />
        <div className="container" style={{ position: 'relative', zIndex: 5 }}>
          <Link href="/" className={styles.backLink}>
            <ArrowLeft size={16} />
            <span>Home</span>
          </Link>
          <span className={styles.eyebrow}>Material Spec Sheet</span>
          <h1 className={styles.title}>{roof.name} in South Florida</h1>
          <p className={styles.subtitle}>{roof.shortDesc}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className={styles.contentSection}>
        <div className="container">
          <div className={styles.grid}>
            {/* Left Column */}
            <div className={styles.mainCol}>
              <h2 className={styles.heading}>About {roof.name}</h2>
              <p className={styles.text}>{roof.longDesc}</p>

              <div className={styles.specBox}>
                <h3 className={styles.specBoxTitle}>South Florida Lifespan</h3>
                <div className={styles.lifespanVal}>{roof.lifespan}</div>
                <p className={styles.specBoxText}>
                  Under strict hurricane standards and high UV conditions. Proactive coating audits are recommended every 5–7 years to capture sealing failures early.
                </p>
              </div>

              <h2 className={styles.heading} style={{ marginTop: '40px' }}>Common Issues to Monitor</h2>
              <p className={styles.text}>
                {"Florida's climate puts immense stress on roofing substrates. Keep an eye out for these typical wear patterns:"}
              </p>
              <ul className={styles.symptomsList}>
                {roof.symptoms.map((symptom, idx) => (
                  <li key={idx} className={styles.symptomItem}>
                    <ShieldAlert size={18} className={styles.bulletIcon} />
                    <span>{symptom}</span>
                  </li>
                ))}
              </ul>

              <h2 className={styles.heading} style={{ marginTop: '40px' }}>Florida Building Code Standards</h2>
              <ul className={styles.specsList}>
                {roof.floridaSpecs.map((spec, idx) => (
                  <li key={idx} className={styles.specItem}>
                    <CheckCircle2 size={18} className={styles.checkIcon} />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column Sidebar */}
            <div className={styles.sidebar}>
              <div className={styles.ctaBox}>
                <h3 className={styles.ctaTitle}>Plan Your {roof.name} Project</h3>
                <p className={styles.ctaText}>
                  Looking for a structural inspection or estimate for repair/replacement? Book a free audit with Compass Roofing.
                </p>
                <Link href="/contact" className="btn btn-primary" style={{ width: '100%' }}>
                  Schedule Inspection
                </Link>
                <a href="tel:5551234567" className={styles.phoneLink}>
                  📞 Call (555) 123-4567
                </a>
              </div>
            </div>
          </div>

          {/* FAQs */}
          {roof.faqs && roof.faqs.length > 0 && (
            <div className={styles.faqBlock}>
              <h2 className={styles.heading} style={{ textAlign: 'center', marginBottom: '36px' }}>
                FAQs about {roof.name}
              </h2>
              <div className={styles.faqGrid}>
                {roof.faqs.map((faq, idx) => (
                  <div key={idx} className={styles.faqItem}>
                    <h4 className={styles.faqQuestion}>{faq.q}</h4>
                    <p className={styles.faqAnswer}>{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
