import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, FileText, MapPin, Wrench } from 'lucide-react';
import { projectsData } from '@/data/sitemapData';
import styles from './page.module.css';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(projectsData).map((slug) => ({
    slug,
  }));
}

export default async function ProjectPage({ params }: PageProps) {
  const resolvedParams = await params;
  const project = projectsData[resolvedParams.slug];

  if (!project) {
    notFound();
  }

  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="blueprint-overlay-dark" />
        <div className="container" style={{ position: 'relative', zIndex: 5 }}>
          <Link href="/projects" className={styles.backLink}>
            <ArrowLeft size={16} />
            <span>All Projects</span>
          </Link>
          <span className={styles.eyebrow}>{project.type} Case Study</span>
          <h1 className={styles.title}>{project.title}</h1>
          <div className={styles.meta}>
            <span className={styles.metaItem}>
              <MapPin size={14} />
              <span>{project.city}, FL</span>
            </span>
            <span className={styles.metaItem}>
              <Wrench size={14} />
              <span>{project.service}</span>
            </span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className={styles.contentSection}>
        <div className="container">
          <div className={styles.grid}>
            {/* Left Column */}
            <div className={styles.mainCol}>
              <div className={styles.caseSection}>
                <h3 className={styles.caseHeading}>The Problem</h3>
                <p className={styles.text}>{project.problem}</p>
              </div>

              <div className={styles.caseSection} style={{ marginTop: '32px' }}>
                <h3 className={styles.caseHeading}>Our Solution</h3>
                <p className={styles.text}>{project.solution}</p>
              </div>

              <div className={styles.caseSection} style={{ marginTop: '32px' }}>
                <h3 className={styles.caseHeading}>The Results</h3>
                <p className={styles.text}>{project.result}</p>
              </div>
            </div>

            {/* Right Column Specs Sidebar */}
            <div className={styles.sidebar}>
              <div className={styles.specsCard}>
                <h4 className={styles.specsTitle}>Project Specifications</h4>
                <div className={styles.specLine}>
                  <strong>Location:</strong> <span>{project.city}, FL</span>
                </div>
                <div className={styles.specLine}>
                  <strong>Sector:</strong> <span>{project.type}</span>
                </div>
                <div className={styles.specLine}>
                  <strong>Roof Type:</strong> <span>{project.roofType}</span>
                </div>
                <div className={styles.specLine}>
                  <strong>Service:</strong> <span>{project.service}</span>
                </div>
              </div>

              <div className={styles.ctaBox}>
                <FileText size={24} className={styles.ctaIcon} />
                <h4 className={styles.ctaTitle}>Need Similar Results?</h4>
                <p className={styles.ctaText}>
                  Book a structural diagnostics audit to evaluate options for your own roof.
                </p>
                <Link href="/contact" className="btn btn-primary" style={{ width: '100%', marginTop: '12px' }}>
                  Book Audit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
