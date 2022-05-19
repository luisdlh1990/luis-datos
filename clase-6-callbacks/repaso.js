let is_ok = false;

const numero = [1,2,3,4,5,6,7];

const mostrar = (numeros)=>{
    return numeros
}

let muestra = (time, task)=>{
    return new Promise((resolve, reject)=>{
        if (is_ok) {
            setTimeout(()=>{
                resolve(task)
            },time)
        }else{
            reject('error')
        }
    })
}

muestra(2000,mostrar(numero))
    .then(datos=>console.log(datos))
    .catch(error=>console.log(error))