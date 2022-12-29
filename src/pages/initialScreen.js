import React, { useEffect, useState } from "react";
import axios from 'axios'
import CardSelector from "../components/CardSelector";
import TextField from "../components/TextField";
import Button from "../components/Button";

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

  function onChangeTextField(params) {
    setUseTask(params)
    console.log(params)
  }

  return (
    <div className="initial-screen">
      <div className="containter-insert__itens">
        <TextField
          label="Teste"
          onChange={(params) => onChangeTextField(params)}
          value={useTask}
        />
        <Button
          label={"Criar"}
          onClick={() => createTask()}
        />
      </div>

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
        {listTask?.map(res => {
          return <CardSelector
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