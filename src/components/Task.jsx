import { CheckCircle, Trash, Circle } from "phosphor-react";

export function Tarefa({
  isCompleted,
  taskContent,
  onDeleteTask,
  onConcluedTask,
}) {
  function handleDeleteTask() {
    onDeleteTask(taskContent);
  }
  function handleConcluedTask() {
    onConcluedTask(taskContent, isCompleted);
  }
  return (
    <div className="w-screen flex flex-col items-center mt-5 ">
      {isCompleted ? (
        <div className="flex w-1/3 justify-between items-center px-4 py-5 rounded-lg border-2 border-zinc-500 bg-zinc-700">
          <CheckCircle
            onClick={handleConcluedTask}
            size={20}
            className=" text-blue-400 hover:text-blue-600 cursor-pointer"
          />
          <p className="w-full text-white flex flex-wrap line-through text-justify px-3">
            {taskContent}
          </p>
          <Trash
            size={20}
            className="text-white hover:text-zinc-500 cursor-not-allowed"
            onClick={handleDeleteTask}
          />
        </div>
      ) : (
        <div className="flex w-1/3 justify-between items-center px-4 py-5 rounded-lg border-2 border-zinc-500 bg-zinc-700">
          <Circle
            onClick={handleConcluedTask}
            size={20}
            className=" text-blue-400 hover:text-blue-600 cursor-pointer"
          />
          <p className="w-full text-white flex flex-wrap text-justify px-3">
            {taskContent}
          </p>
          <Trash
            size={20}
            className="text-white hover:text-zinc-500 cursor-pointer"
            onClick={handleDeleteTask}
          />
        </div>
      )}
    </div>
  );
}
