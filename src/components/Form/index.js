import React from "react";
import propTypes from "prop-types";

import "./form.css";

// Ícones do Formulário
import { FaAngleDoubleRight } from "react-icons/fa";

export default function Form({ handleSubmit, handleChange, novaTarefa }) {
  return (
    // Formulário de entrada */
    <form action="#" onSubmit={handleSubmit} className="form">
      <input
        className="input"
        onChange={handleChange}
        type="text"
        value={novaTarefa}
      />
      <button className="btn" type="submit">
        <FaAngleDoubleRight />
      </button>
    </form>
  );
}

Form.propTypes = {
  handleSubmit: propTypes.func.isRequired,
  handleChange: propTypes.func.isRequired,
  novaTarefa: propTypes.string.isRequired,
};
