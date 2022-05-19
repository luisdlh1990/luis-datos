let is_ok = true;

let numero = [0,1,2,3,4];

const mostrar =(numeros)=>{
    return numeros
}


let muestra = (time, task)=>{
    return new Promise((resolve, reject)=>{
        if(is_ok){
            setTimeout(()=>{
                resolve(task)
            },time);
        }else{
            reject('error')
        }
    });
}

muestra(2000,mostrar(numero))
    .then(datos => console.log(datos))
    .catch(err => console.log(err))

