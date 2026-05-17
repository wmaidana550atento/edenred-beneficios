import React, { useState } from 'react';
import { Wallet, MapPin, Tag, Bell, MoreHorizontal } from 'lucide-react';
import BeneficiosScreen from './screens/BeneficiosScreen';
import VantagensScreen from './screens/VantagensScreen';
import NotificacoesScreen from './screens/NotificacoesScreen';
import OndeUtilizarScreen from './screens/OndeUtilizarScreen';
import MenuScreen from './screens/MenuScreen';
import './App.css';

type Screen = 'beneficios' | 'vantagens' | 'notificacoes' | 'onde' | 'menu';

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('beneficios');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'beneficios':
        return <BeneficiosScreen />;
      case 'vantagens':
        return <VantagensScreen />;
      case 'notificacoes':
        return <NotificacoesScreen />;
      case 'onde':
        return <OndeUtilizarScreen />;
      case 'menu':
        return <MenuScreen />;
      default:
        return <BeneficiosScreen />;
    }
  };

  return (
    <div className="mobile-container">
      <div className="content-wrapper">
        {renderScreen()}
      </div>

      <nav className="bottom-nav">
        <button 
          className={`nav-btn ${currentScreen === 'beneficios' ? 'active' : ''}`}
          onClick={() => setCurrentScreen('beneficios')}
          title="Cartão"
        >
          <Wallet size={28} />
        </button>
        <button 
          className={`nav-btn ${currentScreen === 'onde' ? 'active' : ''}`}
          onClick={() => setCurrentScreen('onde')}
          title="Onde Utilizar"
        >
          <MapPin size={28} />
        </button>
        <button 
          className={`nav-btn ${currentScreen === 'vantagens' ? 'active' : ''}`}
          onClick={() => setCurrentScreen('vantagens')}
          title="Promoções"
        >
          <Tag size={28} />
        </button>
        <button 
          className={`nav-btn ${currentScreen === 'notificacoes' ? 'active' : ''}`}
          onClick={() => setCurrentScreen('notificacoes')}
          title="Notificações"
        >
          <Bell size={28} />
        </button>
        <button 
          className={`nav-btn ${currentScreen === 'menu' ? 'active' : ''}`}
          onClick={() => setCurrentScreen('menu')}
          title="Menu"
        >
          <MoreHorizontal size={28} />
        </button>
      </nav>
    </div>
  );
}

export default App;
