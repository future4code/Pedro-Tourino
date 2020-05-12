import React from "react";
import "./App.css";
import CardGrande from "./components/CardGrande/CardGrande";
import ImagemButton from "./components/ImagemButton/ImagemButton";

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem="https://lh3.googleusercontent.com/8e6FSN3ow0fVfVZBFDZcvDLexNQ3MCYLNo3D5q2CJj0G_M69sSqZ2qrOO1LZpPor5ayu=s85"
          nome="Pedro Augusto Nunes Touriño"
          descricao="Tendo iniciado minha vida profissional aos 19 anos, passei por vários tipos empresas, métodos e situações que me agregaram valores e conhecimentos. Hoje busco espaço no mercado em meu ramo de estudos para adquirir e aprimorar conhecimentos, desta forma obtendo melhor desempenho e reconhecimento como profissional."
        />

        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR0S7tqe6dlUouysgorrTqM7PAy24HlrYo5iLJCNpKx0owIavXH&usqp=CAU"
          nome="Utramig"
          descricao="Estagiário em Tecnologia da Informação"
        />

        <CardGrande
          imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRM5KjDlaQXqGy-NhpTWe_NdJYS7t66f0B2mjvWNsYHGaZDONdZ&usqp=CAU"
          nome="Pixelz Informática"
          descricao="Técnico em Informática"
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://pt.seaicons.com/wp-content/uploads/2015/06/linkedin-icon1.png"
          texto="LinkedIn"
        />

        {/* <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        /> */}
      </div>
    </div>
  );
}

export default App;
