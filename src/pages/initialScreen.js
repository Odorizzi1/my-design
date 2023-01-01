import React, { useEffect, useState } from "react";
import axios from 'axios'
import CardSelector from "../components/CardSelector";
import TextField from "../components/TextField";
import Button from "../components/Button";

// import { Help } from "../utils/help";


const InitialScreen = () => {

  const [useTask, setUseTask] = useState('')
  const [listTask, setListTask] = useState([])
  const [error, setError] = useState("")
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
    if (useTask.length === 0) {
      setError("É necessário inserir um texto!")
    } else {
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
          errorText={error}
          label="Insira uma tarefa!"
          onChange={(params) => onChangeTextField(params)}
          value={useTask}
        />
        <Button
          className={"button-add__style"}
          leftIcon="add_circle"
          label={"Criar"}
          onClick={() => createTask()}
        />
      </div>

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
        {listTask?.map(res => {
          return <CardSelector
            titleTask={res.title}
            onClickDelete={() => deleteTask(res._id)}
            onClickEdit={() => console.log()}
            titleModal={res.title}
            infoCard = {"Observações a ser criadas"}

          />
        })
        }
      </div>
    </div>
  )
}
export default InitialScreen;