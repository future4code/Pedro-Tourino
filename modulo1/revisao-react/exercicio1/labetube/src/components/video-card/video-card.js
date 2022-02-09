import React from "react";

export const VideoCard = (props) => {
  return (
    <div className="box-pagina-principal" onClick={props.reproduzir}>
      <img src={props.video} alt="" />
      <h4>{props.titulo}</h4>
    </div>
  );
};
