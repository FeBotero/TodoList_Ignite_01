import { useState } from "react";
import { Header } from "./components/Header";
import { Tarefa } from "./components/Task";

import { PlusCircle } from "phosphor-react";
function App() {
  const [listaTarefas, setListaTarefas] = useState([
    {
      isCompleted: true,
      taskContent: "Hoje é um dia maravilhoso",
    },
    {
      isCompleted: true,
      taskContent: "Hoje vou tomar café com minha esposa a noite",
    },
  ]);

  const created = listaTarefas.length;

  const conclued = listaTarefas.filter(
    (tarefa) => tarefa.isCompleted === true
  ).length;

  function handleCreateNewTask() {
    event.preventDefault();
    const newTask = event.target.content.value;

    setListaTarefas([
      ...listaTarefas,
      { isCompleted: false, taskContent: newTask },
    ]);
    event.target.content.value = "";
  }
  function deleteTask(taskContent) {
    const taskWithoutDeleteOne = listaTarefas.filter((tarefa) => {
      return tarefa.taskContent !== taskContent;
    });

    setListaTarefas(taskWithoutDeleteOne);
  }

  function handleCompleted(taskContent, isCompleted) {
    //  Criar uma constante para reeber o Array
    const arraTask = listaTarefas;
    const taskWithoutDeleteOne = listaTarefas.filter((tarefa) => {
      return tarefa.taskContent !== taskContent;
    });

    //  depois descobrir a posição dele
    const index = listaTarefas.findIndex(
      (tarefa) => tarefa.taskContent === taskContent
    );

    //  atualizar e setar como novo valor do lista de listaTarefas
    arraTask[index].taskContent = !arraTask[index].isCompleted;

    taskWithoutDeleteOne.push({
      isCompleted: !isCompleted,
      taskContent: taskContent,
    });
    setListaTarefas(taskWithoutDeleteOne);
  }

  return (
    <div className="App h-screen flex flex-col bg-zinc-900  w-full items-center  ">
      <div className="flex flex-col items-center justify-center w-full mx-auto">
        <Header />
      </div>

      <div className=" ">
        <div className="w-screen flex flex-col justify-center items-center mt-10">
          <form onSubmit={handleCreateNewTask} className="w-1/3 flex gap-3 ">
            <input
              className="w-full rounded-lg px-2"
              type="text"
              placeholder="Adicione uma nova tarefa"
              name="content"
            />
            <button className="flex rounded-xl text-white bg-blue-500 hover:bg-blue-300 px-2 py-1 items-center">
              Criar
              <PlusCircle size={32} />
            </button>
          </form>
          <div className=" w-1/3 flex  mt-10 justify-between">
            <div className=" flex gap-2">
              <h5 className="text-blue-400">Tarefas Criadas</h5>
              <span className="rounded-xl bg-gray-400 px-3" id="tarefas">
                {created}
              </span>
            </div>
            <div className=" flex gap-2">
              <h5 className="text-purple-400">Concluídas</h5>
              <span className="rounded-xl bg-gray-400 px-3" id="concluidas">
                {conclued} de {created}
              </span>
            </div>
          </div>
        </div>

        <div>
          {listaTarefas.map((tarefa) => (
            <Tarefa
              isCompleted={tarefa.isCompleted}
              taskContent={tarefa.taskContent}
              key={`${tarefa.taskContent}${tarefa.isCompleted}`}
              onConcluedTask={handleCompleted}
              onDeleteTask={deleteTask}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
