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
  {
    id: 1,
    date: '16/05/2026',
    time: '12:45',
    description: 'Compra: AUCHAN COSTA CAPARICCOSTA DA CAPARICA',
    amount: -3.49,
    type: 'debit',
    balance: 357.64,
    icon: '🛒',
  },
  {
    id: 2,
    date: '15/05/2026',
    time: '14:48',
    description: 'Compra: PASTELARIA CELIA AMADORA',
    amount: -10.90,
    type: 'debit',
    balance: 361.13,
    icon: '🍴',
  },
  {
    id: 3,
    date: '14/05/2026',
    time: '12:12',
    description: 'LIDERSAT LDA',
    amount: 70.00,
    type: 'credit',
    balance: 372.03,
    icon: '⚡',
  },
  {
    id: 4,
    date: '04/05/2026',
    time: '12:12',
    description: 'LIDERSAT LDA',
    amount: 300.00,
    type: 'credit',
    balance: 302.03,
    icon: '⚡',
  },
  {
    id: 5,
    date: '20/04/2026',
    time: '14:24',
    description: 'Compra: SPAR - PORTUGAL 4300-119 PORTO',
    amount: -1.69,
    type: 'debit',
    balance: 2.03,
    icon: '🛒',
  },
  {
    id: 6,
    date: '14/04/2026',
    time: '21:04',
    description: 'Compra: MCDONALDS CHARNECA DCHARNECA DA CAPARICA',
    amount: -4.85,
    type: 'debit',
    balance: 3.72,
    icon: '🍴',
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
            <h2 className="balance-amount">357,64 €</h2>
          ) : (
            <h2 className="balance-amount hidden">••••••</h2>
          )}
        </div>
        <p className="balance-date">Atualizado às 01:55 de 17/05/2026</p>
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
