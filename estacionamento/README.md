#  Sistema de Estacionamento 

 é uma aplicação web para gerenciamento e controle de entrada/saída de veículos em estacionamentos. 

---

## 🎨 Demonstração do Projeto

- **Interface no Estilo Neon/Cyberpunk:** Painéis translúcidos, iluminação ciano/verde neon e suporte a temas escuros.
- **Exibição por Cards:** Cada veículo cadastrado é exibido em um card dedicado com imagem, informações em destaque e ação rápida de saída.

---

## 🚀 Funcionalidades

- 📥 **Cadastro de Veículos:** Registro rápido informando Placa, Cor e Marca/Modelo.
- 🚗 **Painel de Vagas (Cards):** Listagem dinâmica dos carros estacionados com layout responsivo em Grid.
- 📤 **Liberar Vaga:** Botão de ação direta para registrar a saída de um veículo.
- 📊 **Contador de Vagas:** Atualização em tempo real da quantidade de veículos no local.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estruturação semântica da aplicação.
- **CSS3:** Design futurista utilizando CSS Grid, Flexbox, variáveis CSS, gradientes e efeitos de *glow* (`box-shadow`).
- **JavaScript (ES6+):** Manipulação do DOM, controle do array de veículos e renderização dinâmica da interface.

---

## 📁 Estrutura de Pastas

```text
├── img/
│   └── carro.jpg            # Imagem padrão para os cards de veículos
├── index.html               # Estrutura principal da página
├── style.css                # Estilização futurista do sistema
└── script.js                # Lógica de cadastro, listagem e remoção
