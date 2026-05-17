# Aplicação Edenred - Os Meus Benefícios

Uma aplicação web para visualizar os gastos da tarjeta de alimentação Edenred, desenvolvida em React com TypeScript.

## 🚀 Características

- **Visualização de Saldo**: Veja o saldo atualizado da sua tarjeta Edenred
- **Histórico de Movimentos**: Consulte todas as suas transações organizadas por mês
- **Cartão Detalhado**: Visualize os detalhes da sua tarjeta de refeição
- **Vantagens e Promoções**: Aceda às vantagens e descontos disponíveis
- **Notificações**: Receba notificações sobre ofertas especiais
- **Onde Utilizar**: Informações sobre onde pode utilizar a sua tarjeta
- **Menu de Definições**: Gerencie o seu perfil e preferências

## 📱 Interface

A aplicação foi desenvolvida com uma interface mobile-first, replicando o design da aplicação original Edenred.

### Navegação

- **Cartão**: Visualização principal do saldo e movimentos
- **Onde Utilizar**: Localizações de estabelecimentos
- **Promoções**: Vantagens e descontos
- **Notificações**: Mensagens e alertas
- **Menu**: Definições e perfil

## 🛠️ Tecnologias Utilizadas

- **React 18.2**: Biblioteca UI
- **TypeScript**: Tipagem estática
- **Vite**: Build tool rápido
- **React Icons & Lucide Icons**: Ícones
- **CSS3**: Estilos

## 📦 Instalação

### Pré-requisitos
- Node.js 16+ instalado
- npm ou yarn

### Passos

1. **Clonar o repositório** (se aplicável)
```bash
cd Refecao-Aplicacion
```

2. **Instalar dependências**
```bash
npm install
```

3. **Iniciar servidor de desenvolvimento**
```bash
npm run dev
```

O servidor abrirá automaticamente em `http://localhost:5173`

## 🚀 Despliegue

### Opción 1: Vercel (Recomendado)
```bash
git push origin main
# Ir a https://vercel.com e importar tu repositorio
# ¡Listo en segundos!
```

### Opción 2: Netlify
```bash
git push origin main
# Ir a https://netlify.com e importar tu repositorio
# ¡Listo en minutos!
```

### Opción 3: Local
```bash
npm run build
npx serve dist
# O: http-server dist -p 8080
```

**Más detalles en [DEPLOYMENT.md](DEPLOYMENT.md) y [QUICK-DEPLOY.md](QUICK-DEPLOY.md)**

---

## 🏗️ Estructura do Projeto

```
src/
├── main.tsx                 # Ponto de entrada
├── App.tsx                  # Componente principal
├── App.css                  # Estilos do App
├── index.css                # Estilos globais
└── screens/
    ├── BeneficiosScreen.tsx/.css    # Tela principal com saldo
    ├── VantagensScreen.tsx/.css     # Promoções e vantagens
    ├── NotificacoesScreen.tsx/.css  # Notificações
    ├── OndeUtilizarScreen.tsx/.css  # Informações de uso
    └── MenuScreen.tsx/.css          # Menu e definições
```

## 🎨 Dados de Exemplo

A aplicação utiliza dados de exemplo em português de Portugal:
- Saldo: 57,64 €
- Transações de exemplo em supermercados e restaurantes
- Promoções simuladas
- Notificações de exemplo

## 📝 Notas

- Os dados são fictícios e apenas para fins de demonstração
- A aplicação é totalmente em português de Portugal (pt-PT)
- Design responsivo adaptado para visualização mobile

## 🔄 Scripts Disponíveis

```bash
npm run dev      # Inicia servidor de desenvolvimento
npm run build    # Cria build para produção
npm run preview  # Visualiza build de produção
```

## 📄 Licença

Projeto de demonstração - Todos os direitos reservados.

---

**Desenvolvido com ❤️ em React + TypeScript**
