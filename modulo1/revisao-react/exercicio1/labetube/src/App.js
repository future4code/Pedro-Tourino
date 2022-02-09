import React from "react";
import "./styles.css";
import { VideoCard } from "./components/video-card/video-card";
import { MenuListItem } from "./components/menu-list-item/menu-list-item";

export default function App() {
  const titulo = "Título do vídeo";

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido");
  }
  return (
    <div>
      <div className="tela-inteira">
        <header>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </header>

        <main>
          <nav className="menu-vertical">
            <ul>
              <MenuListItem item={"Início"} />
              <MenuListItem item={"Em alta"} />
              <MenuListItem item={"Inscrições"} />
              <hr />
              <MenuListItem item={"Originais"} />
              <MenuListItem item={"Histórico"} />
            </ul>
          </nav>

          <section className="painel-de-videos">
            <VideoCard
              reproduzir={reproduzVideo}
              video={"https://picsum.photos/400/400?a=1"}
              titulo={titulo}
            />
            <VideoCard
              reproduzir={reproduzVideo}
              video={"https://picsum.photos/400/400?a=2"}
              titulo={titulo}
            />
            <VideoCard
              reproduzir={reproduzVideo}
              video={"https://picsum.photos/400/400?a=3"}
              titulo={titulo}
            />
            <VideoCard
              reproduzir={reproduzVideo}
              video={"https://picsum.photos/400/400?a=4"}
              titulo={titulo}
            />
            <VideoCard
              reproduzir={reproduzVideo}
              video={"https://picsum.photos/400/400?a=5"}
              titulo={titulo}
            />
            <VideoCard
              reproduzir={reproduzVideo}
              video={"https://picsum.photos/400/400?a=6"}
              titulo={titulo}
            />
            <VideoCard
              reproduzir={reproduzVideo}
              video={"https://picsum.photos/400/400?a=7"}
              titulo={titulo}
            />
            <VideoCard
              reproduzir={reproduzVideo}
              video={"https://picsum.photos/400/400?a=8"}
              titulo={titulo}
            />
          </section>
        </main>

        <footer>
          <h4>Oi! Eu moro no footer!</h4>
        </footer>
      </div>
    </div>
  );
}
