import React, { Component } from "react";
import Form from "./Form";
import List from "./Lista";

// Importação de arquivos CSS
import "./Form/form.css";
import "./Lista/tarefas.css";
import "./Main.css";

// Componente Principal
export default class Main extends Component {
  state = {
    novaTarefa: "", // Estado para a nova tarefa
    tarefas: [], // Estado para a lista de tarefas
    index: -1, // Índice da tarefa a ser editada
  };

  componentDidMount() {
    const tarefas = JSON.parse(localStorage.getItem("tarefas"));

    if (!tarefas) return;
    this.setState({ tarefas });
  }

  componentDidUpdate(prevProps, prevState) {
    const { tarefas } = this.state;
    if (tarefas === prevState.tarefas) return;

    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  }

  // Função para lidar com a submissão do formulário
  handleSubmit = (e) => {
    e.preventDefault();
    const { tarefas, index } = this.state;
    let { novaTarefa } = this.state;
    // trim() remove espaços em branco no início e fim da string
    novaTarefa = novaTarefa.trim();

    // Verifica se a tarefa já existe ou se está vazia
    if (tarefas.indexOf(novaTarefa) !== -1) return;
    if (novaTarefa.length === 0) return;

    // Cria um novo array de tarefas incluindo a nova tarefa
    const novasTarefas = [...tarefas];

    if (index === -1) {
      // Adiciona uma nova tarefa
      this.setState({
        tarefas: [...novasTarefas, novaTarefa], // Atualiza a lista de tarefas
        novaTarefa: "", // Limpa o campo de entrada
      });
    } else {
      // Edita a tarefa existente
      novasTarefas[index] = novaTarefa;

      this.setState({
        tarefas: novasTarefas,
        index: -1,
        novaTarefa: "", // Limpa o campo de entrada após edição
      });
    }
  };

  // Função para lidar com as mudanças no campo de entrada
  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value, // Atualiza o estado da nova tarefa
    });
  };

  handleDelete = (index) => {
    const { tarefas } = this.state;
    const novasTarefas = [...tarefas]; // Copia o array original
    novasTarefas.splice(index, 1); // Remove o item no índice especificado

    this.setState({ tarefas: novasTarefas }); // Atualiza o estado com o novo array
  };

  handleEdit = (index) => {
    const { tarefas } = this.state;
    this.setState({
      novaTarefa: tarefas[index],
      index: index, // Atualiza o índice da tarefa que está sendo editada
    });
  };

  // Método de renderização do componente
  render() {
    const { novaTarefa, tarefas } = this.state;

    return (
      <div className="main">
        <h1>Lista de Tarefas</h1>

        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          novaTarefa={novaTarefa}
        />

        {/* Lista de Tarefas */}
        <List
          tarefas={tarefas}
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}
