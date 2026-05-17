import React from 'react';
import './NotificacoesScreen.css';

interface Notificacao {
  id: number;
  date: string;
  time: string;
  title: string;
  description: string;
}

const notificacoes: Notificacao[] = [
  {
    id: 1,
    date: '06/02/2026',
    time: '10:53',
    title: 'Neste Dia dos Namorados, mime quem mais gosta, com presentes Rit...',
    description: 'Promoção especial para o Dia dos Namorados',
  },
  {
    id: 2,
    date: '23/01/2026',
    time: '09:53',
    title: 'Entre em grande em 2026. Aproveite os descontos extra de até 40% na loja...',
    description: 'Descontos especiais até 40% em seleção de produtos',
  },
  {
    id: 3,
    date: '19/01/2026',
    time: '09:13',
    title: 'Plataforma de benefícios e vantagens da Edenred',
    description: 'Conheça todas as vantagens da sua tarjeta Edenred',
  },
];

export default function NotificacoesScreen() {
  return (
    <div className="notificacoes-container">
      {/* Header */}
      <div className="notificacoes-header">
        <h1>Notificações</h1>
      </div>

      {/* Notificações List */}
      <div className="notificacoes-list">
        {notificacoes.map((notificacao) => (
          <div key={notificacao.id} className="notificacao-item">
            <div className="notificacao-datetime">
              {notificacao.date} às {notificacao.time}
            </div>
            <h3 className="notificacao-title">{notificacao.title}</h3>
            <p className="notificacao-description">{notificacao.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
