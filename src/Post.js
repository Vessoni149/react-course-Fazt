//Así también se puede crear un componente, con funciones flecha.
export const Post = ()=> {
return <button onClick={()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))
}}>
    Traer datos
</button>
}
//fetch es una api del navegador para pedir datos a un servidor. Se le pasa por aprametro una url, y despues un .then para que sea asíncrona, es decir que cuando reciba los datos haga algo. Lo que haremos con la respuesta recibida es pasarla a formato json con una función flecha. El catch se usa para que en caso de haber un error devuelva o muestre algo. El error puede er porque la url esta mal o por que hay un problama con el servidor.