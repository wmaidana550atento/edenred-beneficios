import React, { useState } from 'react';
import { Plus, RotateCcw } from 'lucide-react';
import EdenredLogo from '../components/EdenredLogo';
import './BeneficiosScreen.css';

interface Transaction {
  id: number;
  date: string;
  time: string;
  description: string;
  amount: number;
  type: 'debit' | 'credit';
  balance: number;
  icon: string;
}

const mockTransactions: Transaction[] = [
  // MAIO 2026
  {
    id: 0,
    date: '23/05/2026',
    time: '18:15',
    description: 'Compra: SPAR CAPARICA',
    amount: -28.15,
    type: 'debit',
    balance: 147.64,
    icon: '🛒',
  },
  {
    id: 1,
    date: '23/05/2026',
    time: '17:45',
    description: 'Compra: JUMBO ALMADA',
    amount: -9.70,
    type: 'debit',
    balance: 175.79,
    icon: '🛒',
  },
  {
    id: 2,
    date: '23/05/2026',
    time: '16:30',
    description: 'Compra: EL CORTE INGLES LISBON',
    amount: -55.00,
    type: 'debit',
    balance: 185.49,
    icon: '🛍️',
  },
  {
    id: 3,
    date: '23/05/2026',
    time: '15:20',
    description: 'Compra: AUCHAN COSTA CAPARICA',
    amount: -32.90,
    type: 'debit',
    balance: 240.49,
    icon: '🛒',
  },
  {
    id: 4,
    date: '23/05/2026',
    time: '14:10',
    description: 'Compra: WORTEN CASCAIS',
    amount: -38.75,
    type: 'debit',
    balance: 273.39,
    icon: '🖥️',
  },
  {
    id: 5,
    date: '23/05/2026',
    time: '13:00',
    description: 'Compra: CONTINENTE COSTA CAPARICA',
    amount: -45.50,
    type: 'debit',
    balance: 312.14,
    icon: '🛒',
  },
  {
    id: 6,
    date: '16/05/2026',
    time: '12:45',
    description: 'Compra: AUCHAN COSTA CAPARICCOSTA DA CAPARICA',
    amount: -3.49,
    type: 'debit',
    balance: 357.64,
    icon: '🛒',
  },
  {
    id: 7,
    date: '15/05/2026',
    time: '14:48',
    description: 'Compra: PASTELARIA CELIA AMADORA',
    amount: -10.90,
    type: 'debit',
    balance: 361.13,
    icon: '🍴',
  },
  {
    id: 8,
    date: '14/05/2026',
    time: '12:12',
    description: 'LIDERSAT LDA',
    amount: 70.00,
    type: 'credit',
    balance: 372.03,
    icon: '⚡',
  },
  {
    id: 9,
    date: '04/05/2026',
    time: '12:12',
    description: 'LIDERSAT LDA',
    amount: 300.00,
    type: 'credit',
    balance: 302.03,
    icon: '⚡',
  },
  // ABRIL 2026
  {
    id: 10,
    date: '20/04/2026',
    time: '14:24',
    description: 'Compra: SPAR - PORTUGAL 4300-119 PORTO',
    amount: -1.69,
    type: 'debit',
    balance: 2.03,
    icon: '🛒',
  },
  {
    id: 11,
    date: '14/04/2026',
    time: '21:04',
    description: 'Compra: MCDONALDS CHARNECA DCHARNECA DA CAPARICA',
    amount: -4.85,
    type: 'debit',
    balance: 3.72,
    icon: '🍴',
  },
  {
    id: 12,
    date: '10/04/2026',
    time: '10:30',
    description: 'Compra: EL CORTE INGLES AMADORA',
    amount: -25.50,
    type: 'debit',
    balance: 8.57,
    icon: '🛍️',
  },
  {
    id: 13,
    date: '05/04/2026',
    time: '12:12',
    description: 'LIDERSAT LDA',
    amount: 300.00,
    type: 'credit',
    balance: 34.07,
    icon: '⚡',
  },
  // MARÇO 2026
  {
    id: 14,
    date: '28/03/2026',
    time: '15:45',
    description: 'Compra: CONTINENTE CAPARICA',
    amount: -18.75,
    type: 'debit',
    balance: -265.93,
    icon: '🛒',
  },
  {
    id: 15,
    date: '22/03/2026',
    time: '19:20',
    description: 'Compra: RESTAURANTE O MARISCO LISBOA',
    amount: -32.50,
    type: 'debit',
    balance: -247.18,
    icon: '🍴',
  },
  {
    id: 16,
    date: '15/03/2026',
    time: '11:15',
    description: 'Compra: GASOLINEIRA BP ALMADA',
    amount: -45.00,
    type: 'debit',
    balance: -214.68,
    icon: '⛽',
  },
  {
    id: 17,
    date: '08/03/2026',
    time: '09:30',
    description: 'Compra: FARMACIA SAUDE AMADORA',
    amount: -12.99,
    type: 'debit',
    balance: -169.68,
    icon: '💊',
  },
  {
    id: 18,
    date: '04/03/2026',
    time: '12:12',
    description: 'LIDERSAT LDA',
    amount: 300.00,
    type: 'credit',
    balance: -156.69,
    icon: '⚡',
  },
  // FEVEREIRO 2026
  {
    id: 19,
    date: '26/02/2026',
    time: '14:00',
    description: 'Compra: WORTEN CASCAIS',
    amount: -89.90,
    type: 'debit',
    balance: -456.69,
    icon: '🖥️',
  },
  {
    id: 20,
    date: '20/02/2026',
    time: '13:45',
    description: 'Compra: STARBUCKS LISBOA',
    amount: -6.80,
    type: 'debit',
    balance: -366.79,
    icon: '☕',
  },
  {
    id: 21,
    date: '15/02/2026',
    time: '18:30',
    description: 'Compra: CINEMA MULTIPLEX AMADORA',
    amount: -28.00,
    type: 'debit',
    balance: -359.99,
    icon: '🎬',
  },
  {
    id: 22,
    date: '10/02/2026',
    time: '10:20',
    description: 'Compra: SUPERMERCADO JUMBO CAPARICA',
    amount: -55.45,
    type: 'debit',
    balance: -331.99,
    icon: '🛒',
  },
  {
    id: 23,
    date: '05/02/2026',
    time: '12:12',
    description: 'LIDERSAT LDA',
    amount: 300.00,
    type: 'credit',
    balance: -276.54,
    icon: '⚡',
  },
  // JANEIRO 2026
  {
    id: 24,
    date: '29/01/2026',
    time: '16:50',
    description: 'Compra: LIVROS DO BRASIL LISBOA',
    amount: -34.25,
    type: 'debit',
    balance: -576.54,
    icon: '📚',
  },
  {
    id: 25,
    date: '22/01/2026',
    time: '12:30',
    description: 'Compra: NETFLIX SUBSCRIPTION',
    amount: -12.99,
    type: 'debit',
    balance: -542.29,
    icon: '📺',
  },
  {
    id: 26,
    date: '16/01/2026',
    time: '15:15',
    description: 'Compra: ZALANDO FASHION',
    amount: -67.80,
    type: 'debit',
    balance: -529.30,
    icon: '👕',
  },
  {
    id: 27,
    date: '12/01/2026',
    time: '14:45',
    description: 'Compra: RESTAURANTE TASCA TIPICA PORTO',
    amount: -28.50,
    type: 'debit',
    balance: -461.50,
    icon: '🍴',
  },
  {
    id: 28,
    date: '05/01/2026',
    time: '12:12',
    description: 'LIDERSAT LDA',
    amount: 300.00,
    type: 'credit',
    balance: -433.00,
    icon: '⚡',
  },
];

export default function BeneficiosScreen() {
  const [showBalance, setShowBalance] = useState(true);

  return (
    <div className="beneficios-container">
      {/* Header */}
      <div className="header">
        <div className="header-top">
          <button className="icon-btn">
            <Plus size={24} />
          </button>
          <h1>Os Meus Benefícios</h1>
          <button className="icon-btn">
            <RotateCcw size={24} />
          </button>
        </div>
      </div>

      {/* Balance Section */}
      <div className="balance-section">
        <p className="balance-label">Saldo</p>
        <div className="balance-display">
          {showBalance ? (
            <h2 className="balance-amount">147,64 €</h2>
          ) : (
            <h2 className="balance-amount hidden">••••••</h2>
          )}
        </div>
        <p className="balance-date">Atualizado às 18:15 de 23/05/2026</p>
      </div>

      {/* Card Section */}
      <div className="card-section">
        <div className="edenred-card">
          <div className="card-header">
            <div className="card-logo">
              <EdenredLogo size={56} />
            </div>
            <div className="card-status">Rejeição</div>
          </div>
          <div className="card-number">6368 **** **** 1131</div>
          <div className="card-holder">WALTER MAIDANA</div>
          <button className="card-arrow">→</button>
        </div>
      </div>

      {/* Movements Section */}
      <div className="movements-section">
        <div className="month-header">
          <h3>MAIO 2026</h3>
        </div>

        <div className="transactions-list">
          {mockTransactions.map((transaction) => (
            <div key={transaction.id} className="transaction-item">
              <div className="transaction-icon">{transaction.icon}</div>
              <div className="transaction-details">
                <div className="transaction-datetime">
                  {transaction.date} às {transaction.time}
                </div>
                <div className="transaction-description">
                  {transaction.description}
                </div>
              </div>
              <div className="transaction-amount">
                <span className={`amount ${transaction.type}`}>
                  {transaction.type === 'debit' ? '-' : '+'} {Math.abs(transaction.amount).toFixed(2)} €
                </span>
                <span className="transaction-balance">
                  {transaction.balance.toFixed(2)} €
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="month-header">
          <h3>ABRIL 2026</h3>
        </div>

        <div className="transactions-list">
          {mockTransactions.slice(3).map((transaction) => (
            <div key={transaction.id} className="transaction-item">
              <div className="transaction-icon">{transaction.icon}</div>
              <div className="transaction-details">
                <div className="transaction-datetime">
                  {transaction.date} às {transaction.time}
                </div>
                <div className="transaction-description">
                  {transaction.description}
                </div>
              </div>
              <div className="transaction-amount">
                <span className={`amount ${transaction.type}`}>
                  {transaction.type === 'debit' ? '-' : '+'} {Math.abs(transaction.amount).toFixed(2)} €
                </span>
                <span className="transaction-balance">
                  {transaction.balance.toFixed(2)} €
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
