import React from 'react';
import './LessDecorMorePresence.css';
import { MoveRight } from 'lucide-react';

function LessDecorMorePresence() {
  return (
    <div className="containerLessDecorMorePresence">
      <div className="overlayLessDecorMorePresence"></div>
      <div className="contentWrapperLessDecorMorePresence">
        <div className="innerRowLessDecorMorePresence">
          
          <div className="leftColLessDecorMorePresence">
            <span className="subtitleLessDecorMorePresence">THE BEYVORA APPROACH</span>
            <h2 className="titleLessDecorMorePresence">
              LESS DECOR.<br />MORE PRESENCE.
            </h2>
            <div className="dividerLessDecorMorePresence"></div>
          </div>

          <div className="rightColLessDecorMorePresence">
            <p className="descLessDecorMorePresence">
              Find pieces that don't just fill a wall,<br />but add something to the way you live.
            </p>
            <button className="btnLessDecorMorePresence">
              EXPLORE COLLECTIONS <span className="arrowLessDecorMorePresence"><MoveRight strokeWidth={1.4}/></span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default LessDecorMorePresence;