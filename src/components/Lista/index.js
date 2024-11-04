import React from "react";
import propTypes from "prop-types";

import "./tarefas.css";

// Ícones das Tarefas
import { CiEdit } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

export default function List({ tarefas, handleEdit, handleDelete }) {
  return (
    // Lista de Tarefas */
    <ul className="tarefas">
      {tarefas.map((tarefa, index) => (
        <li key={index}>
          {tarefa}
          <div className="btnTarefas">
            <CiEdit onClick={() => handleEdit(index)} className="edit" />
            <IoMdClose onClick={() => handleDelete(index)} className="close" />
          </div>
        </li>
      ))}
    </ul>
  );
}

List.propTypes = {
  tarefas: propTypes.array.isRequired,
  handleEdit: propTypes.func.isRequired,
  handleDelete: propTypes.func.isRequired,
};
