import React from 'react';
import '../App.css';

function Results() {
  return (
    <section className="results" id="results">
      <h2>Kết quả hoạt động</h2>
      <div className="results-content">
        <div className="result-item">
          <span className="result-number">20+</span>
          <span>Billion ad impressions managed</span>
        </div>
        <div className="result-item">
          <span className="result-number">150k+</span>
          <span>Campaigns optimized monthly</span>
        </div>
        <div className="result-item">
          <span className="result-number">10x</span>
          <span>Average ROI improvements over time</span>
        </div>
      </div>
    </section>
  );
}

export default Results;