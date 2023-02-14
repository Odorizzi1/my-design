import React, { useEffect, useState } from "react";
import axios from 'axios'
import CardSelector from "../components/CardSelector";
import TextField from "../components/TextField";
import Button from "../components/Button";
import { utilsHelper } from "../utils/utilsHelper";
import Tooltip from "../components/Tooltip";

// import { Help } from "../utils/help";


const InitialScreen = () => {

  const [useTask, setUseTask] = useState('')
  const [listTask, setListTask] = useState([])
  const [error, setError] = useState("")
  useEffect(() => {
    executeGet()

  }, [])

  function executeGet() {
    utilsHelper.beGet('http://localhost:3001/task', (res) => setListTask(res.data))
  }

  function createTask() {
    if (useTask.length === 0) {
      setError("É necessário inserir um texto!")
    } else {
      utilsHelper.bePost('http://localhost:3001/taskCreate', { title: useTask }, () => {
        executeGet()
        setUseTask("")
      })
    }
  }

  function deleteTask(_id) {
    utilsHelper.beDelete(`http://localhost:3001/deleteTask/${_id}`, {}, () => executeGet())
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
        <Tooltip message={"teste"}>
        <Button
          disabled={useTask.length == 0}
          className={"button-add__style"}
          leftIcon="add_circle"
          label={"Criar"}
          onClick={() =>
            createTask()}
        />

        </Tooltip>
      </div>

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
        {listTask?.map(res => {
          return <CardSelector
            titleTask={res.title}
            onClickDelete={() => deleteTask(res._id)}
            onClickEdit={() => console.log()}
            titleModal={res.title}
            infoCard={"Observações a ser criadas"}

          />
        })
        }
        {/* <button onClick={()=> teste()}>TESTEEEEEE</button> */}
      </div>
    </div>
  )
}
export default InitialScreen;