import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import axiosInstance from "../../Helpers/axiosInstace";
import { Link, Outlet } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";

const Home = () => {
  let [newTask, setNewTask] = useState({
    task: "",
  });
  let [allTask, setAllTask] = useState([]);
  let [reload, setReload] = useState("a");

  useEffect(() => {
    let fetchAll = async () => {
      let data = await axiosInstance.get("/");
      setAllTask(data.data.data.tasks);
      allTask.reverse()
      
    };
    fetchAll();
  }, [reload]);

  let handleTask = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setNewTask({ ...newTask, [name]: value });
  };

  let handleAdd = async () => {
    let payload = {
      task: newTask.task,
    };
    await axiosInstance.post("/", payload);
    setReload(reload + "a");
    document.querySelector("input").value = "";
  };

  let handleDelete = async (id) => {
    await axiosInstance.delete(`/${id}`);
    setReload(reload + "a");
  };

  return (
    <div id={style.mainbox}>
      <form action="">
        <input type="text" name="task" onChange={handleTask} placeholder="add new task...."/>
        <div id={style.btns}>
          <button type="button" onClick={handleAdd}>
            ADD
          </button>
        </div>
      </form>
      <div id={style.allTask}>
        {allTask.length>=1?allTask.map((task, key) => {
          
          return (
            <div id={style.eachTask} key={key}>
              <p><span>{key+1}</span>. {task.task}</p>
              <div id={style.btns}>
                <Link to={`/home/update/${task._id}`}>
                  <div>{<AiFillEdit id={style.iconsEdit}/>}</div>
                </Link>
                <div onClick={() => handleDelete(task._id)}>{<AiFillDelete id={style.iconsDelete}/>}</div>
              </div>
            </div>
          );
        
      }):<p id={style.noTask}>no task</p>}
        
      </div>
      <Outlet />
    </div>
  );
};

export default Home;
