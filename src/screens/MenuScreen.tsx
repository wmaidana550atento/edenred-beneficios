import React from 'react';
import { ChevronRight, LogOut } from 'lucide-react';
import './MenuScreen.css';

interface MenuItem {
  id: number;
  label: string;
  icon: string;
}

const menuItems: MenuItem[] = [
  { id: 1, label: 'O Meu Perfil', icon: '👤' },
  { id: 2, label: 'Definições', icon: '⚙️' },
  { id: 3, label: 'Perguntas Frequentes', icon: '❓' },
  { id: 4, label: 'Utilização e Acessibilidade', icon: '♿' },
  { id: 5, label: 'Privacidade e Cookies', icon: '🔒' },
  { id: 6, label: 'Contactos', icon: '📞' },
];

export default function MenuScreen() {
  return (
    <div className="menu-container">
      {/* Header with Logo */}
      <div className="menu-logo-section">
        <h1>My Edenred</h1>
      </div>

      {/* Menu Items */}
      <nav className="menu-items">
        {menuItems.map((item) => (
          <button key={item.id} className="menu-item">
            <span className="menu-icon">{item.icon}</span>
            <span className="menu-label">{item.label}</span>
            <ChevronRight size={20} className="menu-chevron" />
          </button>
        ))}
      </nav>

      {/* Version and Logout Section */}
      <div className="menu-footer">
        <p className="version-text">Versão 4.2.4</p>
        <button className="logout-btn">
          <LogOut size={18} />
          Terminar Sessão
        </button>
      </div>
    </div>
  );
}
