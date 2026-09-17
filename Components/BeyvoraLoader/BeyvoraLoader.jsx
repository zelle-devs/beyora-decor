import React from 'react';
import './BeyvoraLoader.css';

const WORDMARK = 'BEYVORA';
const SUBMARK = 'DECOR';
 
export default function BeyvoraLoader({ label = 'Loading' }) {
  return (
    <div className="beyvora-loader" role="status" aria-live="polite" aria-busy="true">
      <span className="beyvora-loader__sr-only" style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)' }}>
        {label}…
      </span>

      {/* Naya wrapper infinite spin ke liye */}
      <div className="beyvora-loader__spin-wrapper">
        
        {/* Yeh box line aur phir circle mein transform hoga */}
        <div className="beyvora-loader__morph-box">
          <div className="beyvora-loader__mark" aria-hidden="true">
            <div className="beyvora-loader__wordmark">
              {WORDMARK.split('').map((letter, index) => (
                <span
                  key={`beyvora-${index}`}
                  className="beyvora-loader__letter"
                  style={{ '--letter-index': index }}
                >
                  {letter}
                </span>
              ))}
            </div>

            <div className="beyvora-loader__divider">
              <span className="beyvora-loader__divider-line" />
            </div>

            <div className="beyvora-loader__subtitle">
              {SUBMARK.split('').map((letter, index) => (
                <span
                  key={`gallaria-${index}`}
                  className="beyvora-loader__subletter"
                  style={{ '--letter-index': index }}
                >
                  {letter}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}