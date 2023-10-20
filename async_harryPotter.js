
 const axios = require('axios')

 const url='https://hp-api.onrender.com/api/characters/students'
 axios.get(url)
         .then((respuesta)=>{
                let studentss = respuesta.data
               studentss.forEach((student) => {
                   console.log(student.name)
                    console.log('--------------')

          })
         })
          .catch(function(error){
             console.log(error)
 })
