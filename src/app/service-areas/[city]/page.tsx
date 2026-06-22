import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, MapPin, CloudLightning, Sparkles } from 'lucide-react';
import { citiesData } from '@/data/sitemapData';
import styles from './page.module.css';

interface PageProps {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return Object.values(citiesData).map((city) => ({
    city: city.slug, // e.g. "fort-lauderdale-roofing"
  }));
}

export default async function LocationPage({ params }: PageProps) {
  const resolvedParams = await params;
  
  // Find city in sitemap database
  const city = Object.values(citiesData).find(
    (c) => c.slug === resolvedParams.city
  );

  if (!city) {
    notFound();
  }

  // Get other cities for "Nearby Service Areas" links
  const otherCities = Object.values(citiesData)
    .filter((c) => c.slug !== city.slug)
    .slice(0, 5);

  const localServices = [
    { name: 'Roof Repair', href: '/services/roof-repair' },
    { name: 'Roof Replacement', href: '/services/roof-replacement' },
    { name: 'Roof Coatings', href: '/services/roof-coatings' },
    { name: 'Roof Inspections', href: '/services/roof-inspections' },
    { name: 'Flat Roofing', href: '/services/flat-roofing' },
    { name: 'Emergency Leak Repair', href: '/services/emergency-roof-repair' },
  ];

  return (
    <div className={styles.page}>
      {/* City Hero */}
      <section className={styles.hero}>
        <div className="blueprint-overlay-dark" />
        <div className="container" style={{ position: 'relative', zIndex: 5 }}>
          <Link href="/" className={styles.backLink}>
            <ArrowLeft size={16} />
            <span>Home</span>
          </Link>
          <div className={styles.heroPin}>
            <MapPin size={16} />
            <span>Broward County Dispatch</span>
          </div>
          <h1 className={styles.title}>Roofing Company in {city.cityName}, FL</h1>
          <p className={styles.subtitle}>{city.shortDesc}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className={styles.contentSection}>
        <div className="container">
          <div className={styles.grid}>
            
            {/* Left Column */}
            <div className={styles.mainCol}>
              <h2 className={styles.heading}>Local Roofing Integrity</h2>
              <p className={styles.text}>{city.longDesc}</p>

              {/* Weather Threat Panel */}
              <div className={styles.threatBox}>
                <div className={styles.threatHeader}>
                  <CloudLightning size={24} className={styles.threatIcon} />
                  <div>
                    <h3 className={styles.threatTitle}>City Weather Exposure</h3>
                    <p className={styles.threatLabel}>Threat Level: {city.weatherThreat}</p>
                  </div>
                </div>
                <p className={styles.threatText}>
                  {city.cityName} experiences heavy rainfall, intense summer heat, and high UV ratings. High wind codes in this zone require specialized structural nail fastening and high-velocity water underlayments.
                </p>
              </div>

              {/* Services Available List */}
              <h2 className={styles.heading} style={{ marginTop: '40px' }}>Roofing Services Available in {city.cityName}</h2>
              <div className={styles.servicesGrid}>
                {localServices.map((service, idx) => (
                  <div key={idx} className={styles.serviceCard}>
                    <Sparkles size={16} className={styles.serviceIcon} />
                    <div>
                      <h4 className={styles.serviceName}>{service.name}</h4>
                      <Link href={service.href} className={styles.serviceLink}>
                        Get local estimate →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              {/* Local neighborhood highlights */}
              <h2 className={styles.heading} style={{ marginTop: '40px' }}>Serving {city.cityName} Neighborhoods</h2>
              <p className={styles.text}>
                Our dispatch crews actively cover all communities, developments, and commercial properties within {city.cityName}, including:
              </p>
              <div className={styles.neighborhoods}>
                {city.neighborhoods.map((n, idx) => (
                  <div key={idx} className={styles.neighborhoodPill}>
                    {n}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column Sidebar */}
            <div className={styles.sidebar}>
              <div className={styles.ctaBox}>
                <h3 className={styles.ctaTitle}>Schedule an Inspection in {city.cityName}</h3>
                <p className={styles.ctaText}>
                  Get a free digital report detailing leak risks, tile fractures, or gutter blockages.
                </p>
                <Link href="/contact" className="btn btn-primary" style={{ width: '100%' }}>
                  Book Inspection
                </Link>
                <a href="tel:5551234567" className={styles.phoneButton}>
                  📞 Call Crew
                </a>
              </div>

              {/* Specs Box */}
              <div className={styles.specsBox}>
                <h4 className={styles.specsTitle}>Local Roof Specs</h4>
                <div className={styles.specLine}>
                  <strong>County:</strong> <span>Broward</span>
                </div>
                <div className={styles.specLine}>
                  <strong>Fastening Standard:</strong> <span>HVHZ 170+ mph</span>
                </div>
                <div className={styles.specLine}>
                  <strong>Primary Materials:</strong> <span>{city.commonRoofs}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Nearby Areas */}
          <div className={styles.nearbySection}>
            <h3 className={styles.nearbyTitle}>Nearby Service Areas</h3>
            <div className={styles.nearbyGrid}>
              {otherCities.map((c, idx) => (
                <Link key={idx} href={`/service-areas/${c.slug}`} className={styles.nearbyLink}>
                  <MapPin size={12} />
                  <span>Roofing in {c.cityName}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* FAQs */}
          {city.faqs && city.faqs.length > 0 && (
            <div className={styles.faqBlock}>
              <h2 className={styles.heading} style={{ textAlign: 'center', marginBottom: '36px' }}>
                FAQs about Roofing in {city.cityName}
              </h2>
              <div className={styles.faqGrid}>
                {city.faqs.map((faq, idx) => (
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
