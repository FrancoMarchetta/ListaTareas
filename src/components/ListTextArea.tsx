import { useState, useRef } from "react";
import "../App";

const ListTextArea = () => {
  const [tasks, setTasks] = useState<string[]>([]); 
  const inputRef = useRef<HTMLInputElement | null>(null); 
  let [taskQuantity, setTaskQuantity] = useState(0);

  const incrementTaskQuantity = () =>{
    setTaskQuantity(taskQuantity+=1)
  }
  const decrementTaskQuantity = () =>{
    setTaskQuantity(taskQuantity-=1)
  }

  const appendTask = () => {
    const inputValue = inputRef.current?.value || ""; 
    if (inputValue.trim() === "") return;  

    setTasks([...tasks, inputValue]); 
    inputRef.current!.value = ""; 
    incrementTaskQuantity();
    console.log(taskQuantity);
    
  };

  const removeTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
    decrementTaskQuantity();
    console.log(taskQuantity);


  };

  return (
    <>
      <main>
        <h3>Tareas Pendientes: {taskQuantity}</h3>

        <div style={{ display: "flex" }}>
          <input
            ref={inputRef}
            placeholder="¿Qué hay que hacer?"
            className="input"
            name="text"
            type="text"
          />
          <button onClick={appendTask} id="addButton" className="addButton">
            Agregar
          </button>
        </div>
        <br />


        <section id="taskZoneID">
          {tasks.length === 0 ? (
            <p>No hay tareas pendientes</p>
          ) : (
            tasks.map((task, index) => (
              <div
                key={index}
                className="alert alert-success alert-dismissible"
                role="alert"
              >
                <div>{task}</div>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={() => removeTask(index)}
                ></button>
              </div>
            ))
          )}
        </section>
      </main>
    </>
  );
};

export default ListTextArea;









