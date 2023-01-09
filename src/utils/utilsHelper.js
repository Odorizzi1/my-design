import axios from 'axios'

export const utilsHelper = {
    bePost(url, sendData, successFunction) {
        axios({
            method: 'post',
            url: url,
            data: sendData
        }).then((res) => {
            if (res.status == 200) {
                successFunction()
            }
        })
    },
    beGet(url, successFunction) {
        axios.get(url).then((res) => {
            if (res.status == 200) {
                successFunction(res)
                console.log(res)
            } else {
                console.log("error in request")
            }
        })
    },
    beDelete(url,sendData,successFunction){
        axios.delete(url).then((res)=>{
           if(res.status == 200){
            successFunction()
           }
        })
    }
}