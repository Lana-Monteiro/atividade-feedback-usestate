import { useState } from "react";

export function FeedbackForm() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [comentario, setComentario] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!nome.trim() || !email.trim() || !comentario.trim()) {
      alert("Por favor, preencha Nome, Email e Comentário antes de enviar.");
      return;
    }

    alert(
      `Feedback enviado!\n\nNome: ${nome}\nEmail: ${email}\nComentário: ${comentario}`
    );

    setNome("");
    setEmail("");
    setComentario("");
  }

  return (
    <form className="feedback-form" onSubmit={handleSubmit}>
      <h2>Formulário de Feedback</h2>

      <div className="form-group">
        <label htmlFor="nome">Nome</label>
        <input
          id="nome"
          type="text"
          placeholder="Digite seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="comentario">Comentário</label>
        <textarea
          id="comentario"
          rows="4"
          placeholder="Escreva seu comentário..."
          value={comentario}
          onChange={(e) => setComentario(e.target.value)}
        />
      </div>

      <button type="submit" className="btn-enviar">
        Enviar
      </button>
    </form>
  );
}