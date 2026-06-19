import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, AlertTriangle, ShieldCheck } from 'lucide-react';
import { servicesData } from '@/data/sitemapData';
import styles from './page.module.css';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug,
  }));
}

export default async function ServicePage({ params }: PageProps) {
  const resolvedParams = await params;
  const service = servicesData[resolvedParams.slug];

  if (!service) {
    notFound();
  }

  return (
    <div className={styles.page}>
      {/* Service Hero */}
      <section className={styles.hero}>
        <div className="blueprint-overlay-dark" />
        <div className="container" style={{ position: 'relative', zIndex: 5 }}>
          <Link href="/services" className={styles.backLink}>
            <ArrowLeft size={16} />
            <span>All Services</span>
          </Link>
          <span className={styles.eyebrow}>{service.tag} Service</span>
          <h1 className={styles.title}>{service.name} in South Florida</h1>
          <p className={styles.subtitle}>{service.shortDesc}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className={styles.contentSection}>
        <div className="container">
          <div className={styles.grid}>
            {/* Left Column - Detailed prose */}
            <div className={styles.mainCol}>
              <h2 className={styles.heading}>Service Overview</h2>
              <p className={styles.text}>{service.longDesc}</p>

              <h2 className={styles.heading} style={{ marginTop: '40px' }}>When is {service.name} Necessary?</h2>
              <p className={styles.text}>
                We look for specific warning signs and diagnostic markers to determine if this service is the most logical path for your property:
              </p>
              <ul className={styles.symptomsList}>
                {service.symptoms.map((symptom, idx) => (
                  <li key={idx} className={styles.symptomItem}>
                    <AlertTriangle size={18} className={styles.warningIcon} />
                    <span>{symptom}</span>
                  </li>
                ))}
              </ul>

              <h2 className={styles.heading} style={{ marginTop: '40px' }}>Our {service.name} Process</h2>
              <div className={styles.steps}>
                {service.process.map((step, idx) => (
                  <div key={idx} className={styles.step}>
                    <div className={styles.stepNum}>{idx + 1}</div>
                    <p className={styles.stepText}>{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Sidebar with CTA */}
            <div className={styles.sidebar}>
              <div className={styles.ctaBox}>
                <h3 className={styles.ctaTitle}>Schedule a Roof Audit</h3>
                <p className={styles.ctaText}>
                  Need a professional assessment of your roof? Schedule a diagnostic inspection with our local crew.
                </p>
                <div className={styles.ctaSpecs}>
                  <div className={styles.ctaSpec}>
                    <CheckCircle2 size={16} className={styles.specIcon} />
                    <span>Fast 15-minute callback dispatch</span>
                  </div>
                  <div className={styles.ctaSpec}>
                    <CheckCircle2 size={16} className={styles.specIcon} />
                    <span>Photo report provided</span>
                  </div>
                  <div className={styles.ctaSpec}>
                    <CheckCircle2 size={16} className={styles.specIcon} />
                    <span>Code compliance verified</span>
                  </div>
                </div>
                <a href="tel:5551234567" className={styles.phoneButton}>
                  Call (555) 123-4567
                </a>
                <Link href="/contact" className="btn btn-primary" style={{ width: '100%', marginTop: '12px' }}>
                  Book Online
                </Link>
              </div>

              <div className={styles.trustBox}>
                <ShieldCheck size={28} className={styles.trustIcon} />
                <div>
                  <h4 className={styles.trustTitle}>Compass Guarantee</h4>
                  <p className={styles.trustText}>
                    All repairs and replacement jobs are covered under our localized leak-free workmanship guarantee.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section FAQ */}
          {service.faqs && service.faqs.length > 0 && (
            <div className={styles.faqBlock}>
              <h2 className={styles.heading} style={{ textAlign: 'center', marginBottom: '36px' }}>
                Frequently Asked Questions about {service.name}
              </h2>
              <div className={styles.faqGrid}>
                {service.faqs.map((faq, idx) => (
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
