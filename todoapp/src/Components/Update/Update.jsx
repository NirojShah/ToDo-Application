import React, { createRef, useEffect, useState } from "react";
import style from "./style.module.css";
import { Link, useParams, useNavigate } from "react-router-dom";
import axiosInstance from "../../Helpers/axiosInstace";
import { VscClose } from "react-icons/vsc";

const Update = () => {
  let navigate = useNavigate();

  let { id } = useParams();
  let inpRef = createRef();
  let [updatedTask, setUpdatedTask] = useState("");


  useEffect(() => {
    let fetchData = async () => {
      let name = await axiosInstance.get(`/${id}`);
      inpRef.current.value = name.data.data.task.task;
    };
    fetchData();
  }, []);

  let handleChange = (e) => {
    let task = e.target.value;
    setUpdatedTask(task);
  };

  let handleSubmit = async () => {
    await axiosInstance.patch(`/${id}`, { task: updatedTask });
    window.location.assign("/home")
  };
  return (
    <div id={style.UPDATE}>
      <div id={style.updateMain}>
        <Link to="/home">
          <div>
            <VscClose id={style.close} />
          </div>
        </Link>
        <p id={style.updateText}>update</p>
        <form action="">
          <input type="text" ref={inpRef} onChange={handleChange} />
          <button type="button" id={style.ok} onClick={handleSubmit}>
            OK
          </button>
        </form>
      </div>
    </div>
  );
};

export default Update;
