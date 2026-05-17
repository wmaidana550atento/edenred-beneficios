import React from 'react';
import './VantagensScreen.css';

interface Vantagem {
  id: number;
  title: string;
  description: string;
  discount: string;
  image: string;
  date: string;
  tag?: string;
}

const vantagens: Vantagem[] = [
  {
    id: 1,
    title: 'Seguro Proteção de Pagamentos...',
    description: 'Adira ao Seguro Proteção de Pagamentos e protega qualquer despesa recorrente.',
    discount: 'Exclusivo',
    image: '👨‍👩‍👧‍👦',
    date: '31-12-26',
    tag: 'exclusive',
  },
  {
    id: 2,
    title: 'Opto',
    description: 'Aceda aos melhores programas da SIC, séries exclusivas, novelas, conteúdos mais recentes e outros mais antigos',
    discount: '50%',
    image: '📺',
    date: '25-05-26',
    tag: 'discount',
  },
  {
    id: 3,
    title: 'Pedaços de Cacau',
    description: 'Aproveita as melhores promoções em chocolates e doces deliciosos',
    discount: '10%',
    image: '🍫',
    date: '30-05-26',
    tag: 'discount',
  },
];

export default function VantagensScreen() {
  return (
    <div className="vantagens-container">
      {/* Header */}
      <div className="vantagens-header">
        <h1>Vantagens Edenred</h1>
        <button className="filtros-btn">Filtros</button>
      </div>

      {/* Vantagens List */}
      <div className="vantagens-list">
        {vantagens.map((vantagem) => (
          <div key={vantagem.id} className="vantagem-card">
            <div className="vantagem-image-wrapper">
              <div className="vantagem-image">{vantagem.image}</div>
              {vantagem.tag && (
                <div className={`vantagem-badge ${vantagem.tag}`}>
                  {vantagem.discount}
                </div>
              )}
              <span className="vantagem-date">{vantagem.date}</span>
            </div>

            <div className="vantagem-content">
              <h3 className="vantagem-title">{vantagem.title}</h3>
              <p className="vantagem-description">{vantagem.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
