import React from 'react';
import '../style/result.css';

const partners = [
  { src: '/assets/logo1.png', alt: 'Đối tác 1', cls: 'card-a' },
  { src: '/assets/logo2.png', alt: 'Đối tác 2', cls: 'card-b' },
  { src: '/assets/logo3.png', alt: 'Đối tác 3', cls: 'card-c' },
  { src: '/assets/logo4.png', alt: 'Đối tác 4', cls: 'card-d' },
  { src: '/assets/logo5.png', alt: 'Đối tác 5', cls: 'card-e' },
  { src: '/assets/logo6.png', alt: 'Đối tác 6', cls: 'card-f' },
  { src: '/assets/logo7.png', alt: 'Đối tác 7', cls: 'card-g' },
  { src: '/assets/logo8.png', alt: 'Đối tác 8', cls: 'card-h' },
];

function Results() {
  return (
    <section className="results" id="results">
      <div className="results-content">
        <div className="results-overview">
          <div className="partners-grid">
            {partners.map((p, i) => (
              <div key={i} className={`partner-card ${p.cls}`}>
                <img src={p.src} alt={p.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Results;
