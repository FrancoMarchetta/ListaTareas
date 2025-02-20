import { useState, useRef, useEffect } from "react";
import "../App";

const ListTextArea = () => {
  const [tasks, setTasks] = useState<string[]>(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const inputRef = useRef<HTMLInputElement | null>(null); 
  let [taskQuantity, setTaskQuantity] = useState(tasks.length);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

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
        <h3>Pending Tasks: {taskQuantity}</h3>

        <div style={{ display: "flex" }}>
          <input style={{
            fontSize:"larger"
          }}
          onKeyDown={(e)=>{
            if(e.key == "Enter"){
              appendTask();
              // console.log("enter");
              
            }
          }}
            ref={inputRef}
            placeholder="What are we doing?"
            className="input"
            name="text"
            type="text"
          />
          <button onClick={appendTask} id="addButton" className="addButton">
            Add
          </button>
        </div>
        <br />


        <section id="taskZoneID">
          {tasks.length === 0 ? (
            <p>Nothing to do yet</p>
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









