import React, { Component } from "react";
import "./SecaoComentario.css";

export class SecaoComentario extends Component {
  state = {
    comentado: "",
  };

  onChangeComentario = (event) => {
    this.setState({
      comentado: event.target.value,
    });

    console.log(this.state.comentado);
  };

  render() {
    return (
      <div className={"comment-container"}>
        <input
          className={"input-comentario"}
          placeholder={"Comentário"}
          value={this.state.value}
          onChange={this.onChangeComentario}
        />
        <button onClick={this.props.aoEnviar}>Enviar</button>
      </div>
    );
  }
}
