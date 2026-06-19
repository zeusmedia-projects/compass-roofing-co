import React from 'react';
import Link from 'next/link';
import { MapPin, Wrench } from 'lucide-react';
import { projectsData } from '@/data/sitemapData';
import styles from './page.module.css';

export const metadata = {
  title: 'Completed Roofing Projects in South Florida | Compass Roofing',
  description: 'Explore completed residential tile replacements, commercial TPO flat roof coatings, and shingle repairs across Broward County.',
};

export default function ProjectsPage() {
  const projects = Object.values(projectsData);

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="blueprint-overlay-dark" />
        <div className="container" style={{ position: 'relative', zIndex: 5 }}>
          <span className={styles.eyebrow}>Our Case Studies</span>
          <h1 className={styles.title}>Recent Roofing Projects</h1>
          <p className={styles.subtitle}>
            Real proof of our quality craftsmanship. See how we diagnose problems and install storm-proof systems.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.grid}>
            {projects.map((proj) => (
              <div key={proj.slug} className={styles.card}>
                <div className={styles.imgPlaceholder}>
                  <div className={styles.imgGlow} />
                  <span className={styles.cityTag}>{proj.city}</span>
                </div>
                <div className={styles.details}>
                  <span className={styles.sector}>{proj.type} Project</span>
                  <h3 className={styles.cardTitle}>{proj.title}</h3>
                  <p className={styles.cardText}>{proj.problem.substring(0, 100)}...</p>
                  
                  <div className={styles.metaLines}>
                    <div className={styles.metaLine}>
                      <Wrench size={14} className={styles.metaIcon} />
                      <span>{proj.service}</span>
                    </div>
                    <div className={styles.metaLine}>
                      <MapPin size={14} className={styles.metaIcon} />
                      <span>{proj.roofType}</span>
                    </div>
                  </div>

                  <Link href={`/projects/${proj.slug}`} className={styles.link}>
                    <span>View Case Study details →</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
