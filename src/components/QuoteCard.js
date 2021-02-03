import React from 'react'
import './QuoteCard.css'

function QuoteCard({sim}) {
    return (
      <figure className="QuoteCard">
        <img src={sim.image} alt={sim.character} />
        <figcaption>
          <blockquote>{sim.quote}</blockquote>
          <cite>{sim.character}</cite>
        </figcaption>
      </figure>
    );
  }
  
  export default QuoteCard;