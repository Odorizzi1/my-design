import React, { useEffect, useState } from "react";
import { O_TextField, O_Button, O_CardSelector, O_Modal } from "../components/component";
import axios from 'axios'

const InitialScreen = () => {

  const [useTask, setUseTask] = useState('')
  const [listTask, setListTask] = useState([])

  useEffect(() => {
    executeGet()

  }, [])

  function executeGet() {
    axios.get('http://localhost:3001/task').then((res) => {
      setListTask(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }

  function createTask() {
    axios({
      method: 'post',
      url: 'http://localhost:3001/taskCreate',
      data: {
        title: useTask,

      }
    }).then(() => {
      executeGet()
      setUseTask("")
    });
  }

  function deleteTask(_id) {
    axios.delete(`http://localhost:3001/deleteTask/${_id}`).then((res) => {
      executeGet()
    })
  }

  // function updateTask(){
  //   axios.put("http://localhost:3001/update"[, data[, config]])
  // }

  function onChangeTextField(params) {
    setUseTask(params)
    console.log(params)
  }

  return (
    <div className="initial-screen">
      <div className="containter-insert__itens">
        <O_TextField
          label="Teste"
          onChange={(params) => onChangeTextField(params)}
          value={useTask}
        />
        <O_Button
          label={"Criar"}
          onClick={() => createTask()}
        />
      </div>

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
        {listTask?.map(res => {
          return <O_CardSelector
            titleTask={res.title}
            onClickDelete={() => deleteTask(res._id)}
          />
        })
        }
      </div>
    </div>
  )
}
export default InitialScreen;