import React from 'react';
import './OndeUtilizarScreen.css';

export default function OndeUtilizarScreen() {
  return (
    <div className="onde-utilizar-container">
      {/* Header */}
      <div className="onde-header">
        <h1>Onde Utilizar</h1>
      </div>

      {/* Card Section */}
      <div className="onde-card-section">
        <div className="onde-card-item">
          <div className="onde-card-image">💳</div>
          <h3>Edenred Refeição</h3>
          <p>Restaurantes | Lojas Alimentares</p>
        </div>
      </div>

      {/* Info Section */}
      <div className="onde-info">
        <div className="info-box">
          <h3>Onde Usar Sua Tarjeta</h3>
          <p>
            Sua tarjeta Edenred Refeição pode ser utilizada em diversos estabelecimentos:
          </p>
          <ul>
            <li>Restaurantes e cafés</li>
            <li>Supermercados e mercearias</li>
            <li>Lojas de alimentação geral</li>
            <li>Padarias e confeitarias</li>
            <li>Peixarias e talhos</li>
          </ul>
        </div>

        <div className="info-box">
          <h3>Como Usar</h3>
          <p>
            Procure pelo símbolo Edenred ou pelo logotipo da sua bandeira de cartão
            no estabelecimento desejado. Apresente a sua tarjeta e autorize o pagamento.
          </p>
        </div>

        <div className="info-box highlighted">
          <h3>Encontre Estabelecimentos</h3>
          <p>
            Utilize o mapa interativo para localizar os estabelecimentos mais próximos
            de sua localização que aceitam a sua tarjeta Edenred.
          </p>
          <button className="map-btn">Abrir Mapa</button>
        </div>
      </div>
    </div>
  );
}
