import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, BookOpen, ChevronRight, HelpCircle } from 'lucide-react';
import { resourcesData } from '@/data/sitemapData';
import styles from './page.module.css';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(resourcesData).map((slug) => ({
    slug,
  }));
}

export default async function ResourcePage({ params }: PageProps) {
  const resolvedParams = await params;
  const article = resourcesData[resolvedParams.slug];

  if (!article) {
    notFound();
  }

  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="blueprint-overlay-dark" />
        <div className="container" style={{ position: 'relative', zIndex: 5 }}>
          <Link href="/resources" className={styles.backLink}>
            <ArrowLeft size={16} />
            <span>All Resources</span>
          </Link>
          <span className={styles.eyebrow}>Educational Article</span>
          <h1 className={styles.title}>{article.title}</h1>
          <p className={styles.subtitle}>{article.excerpt}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className={styles.contentSection}>
        <div className="container">
          <div className={styles.grid}>
            {/* Left Column */}
            <div className={styles.mainCol}>
              {/* Introduction */}
              <div className={styles.introBox}>
                <BookOpen size={24} className={styles.introIcon} />
                <p className={styles.introText}>
                  South Florida property owners face intense UV heat, summer rain downpours, and hurricane wind loads. This guide is written by the Compass crew to help you understand options, minimize costs, and maximize the security of your roof.
                </p>
              </div>

              {/* Table of Contents */}
              <div className={styles.toc}>
                <h4 className={styles.tocTitle}>Table of Contents</h4>
                <ul className={styles.tocList}>
                  {article.bodyOutline.map((heading, idx) => (
                    <li key={idx}>
                      <a href={`#section-${idx}`} className={styles.tocLink}>
                        {heading}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Main Content body */}
              <div className={styles.articleBody}>
                {article.bodyOutline.map((heading, idx) => (
                  <div key={idx} id={`section-${idx}`} className={styles.articleSection}>
                    <h3 className={styles.sectionHeading}>{heading}</h3>
                    <p className={styles.sectionText}>
                      Proper management of this aspect is crucial for code compliance in Broward County. Building standards mandate specific wind ratings and secondary water barrier self-adherent underlayments to minimize water penetration during heavy wind-driven rain events.
                    </p>
                    <div className="callout" style={{ margin: '16px 0' }}>
                      <p>
                        <strong>Compass Tip:</strong> Proactive structural sealant audits can extend current shingle and concrete tile life by 5–10 years, delaying high replacements.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column Sidebar */}
            <div className={styles.sidebar}>
              <div className={styles.ctaBox}>
                <h3 className={styles.ctaTitle}>Schedule an Inspection</h3>
                <p className={styles.ctaText}>
                  Not sure if you need a repair or replacement? Start with a clear diagnostic audit.
                </p>
                <Link href="/contact" className="btn btn-primary" style={{ width: '100%' }}>
                  Book Inspection
                </Link>
              </div>

              <div className={styles.servicesBox}>
                <h4 className={styles.servicesTitle}>Related Services</h4>
                <div className={styles.servicesList}>
                  {article.relatedServices.map((slug, idx) => (
                    <Link key={idx} href={`/services/${slug}`} className={styles.serviceLink}>
                      <span>View {slug.replace('-', ' ')} details</span>
                      <ChevronRight size={14} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* FAQs */}
          {article.faqs && article.faqs.length > 0 && (
            <div className={styles.faqBlock}>
              <h2 className={styles.heading} style={{ textAlign: 'center', marginBottom: '36px' }}>
                FAQs about {article.title}
              </h2>
              <div className={styles.faqGrid}>
                {article.faqs.map((faq, idx) => (
                  <div key={idx} className={styles.faqItem}>
                    <div className={styles.faqIcon}>
                      <HelpCircle size={18} />
                    </div>
                    <div>
                      <h4 className={styles.faqQuestion}>{faq.q}</h4>
                      <p className={styles.faqAnswer}>{faq.a}</p>
                    </div>
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
