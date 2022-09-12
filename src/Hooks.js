//Los hooks son funciones de react, por ello deben ser importadas del mismo y luego ejecutadas. Veremos las 3 mas usadas.
import { useState , useEffect} from "react";       

//useState:
//En react no podemos crear variables y actualizarlas como en js. Ej una variable 'counter' que al darle click a un boton se ejecute un 'counter +=10' para sumarle 10. Tenemos que usar 'useState'. Así podemos actualizar determinadoelemento del dom.
export function Counter(){
    //para usar useState hay una sintaxis que no vemos en js. Acá la constante va a tener como nombre un array con una varaible (cualquier nombre) y una funcion (cualquier nombre) que permite actualizar la variable. Y sera igual a la función useState que tendra como parametro el valor inicial de la variable.
    //como buena practica la funcion se debe llamar setNombreDeLaVariable.
    const [ counter, setCounter] = useState(0);
    const [ mensaje, setMensaje] = useState('');
    return (
        <div>
            <div>
                <h1>Counter: {counter}</h1>
                <button onClick={()=> {
                setCounter(counter + 1)
                }}>Sumar
                </button>
            </div>

{/* ejemplo con un input: */}
            <div>
                <input onChange={e => setMensaje(e.target.value)}/>
                <button onClick={()=>{
                    alert("el mensaje es: " + mensaje)
                }}>
                    Save
                </button>
            </div>
        </div>
    )
    //con el evento onChange a medida que se va tipeando nosotros podemos ver el contenido del input si accedemos al target.value del evento. Si ese contenido lo pasamos como parametro del setMensaje(), redefinimos la variable mensaje y luego podemos trabajar con ella. En este caso la mostramos en un alert.
}


//useEffect:
//sirve cuando vamos a tener cambios en nuestra interfaz. Acá tenemos 2  ejemplos, un input y un button con una varialbe que se incrementa.
//El useEffect simepre se va a ejecutar c vez que haya un cambio en el componente que lo contiene En cualquiera de sus partes.
//Si queremos solo ejecutarlo 1 sola vez, cuando el componete esta creado hay que colocarle como segundo parametro un arrai vacio. Si queremos que el useEffect se ejecute cuando cierta varialbe cambie, hay que poner esa variable dentro del arrai. Esa variable dentro del arrai se llama dependencia porque la funcion depende del valor de esa variable.

//Esto es una copia de la funcion anterior pero se le añade useEffect
export function UseEfectEj(){
    const [ counter, setCounter] = useState(0);
    const [ mensaje, setMensaje] = useState('');

    useEffect(function(){
        console.log('render')
    }, [counter])                  //se puede agregar + de 1 variable separadas con ','
//En este caso solo se va a ejecutar cuando presionemos el boton ya que la variable 'counter' cambiara. Si dejamos el arrai vacío solo se ejecutará 1 vez al cargar el componente. Y si ni si quiera ponemos el array se va a ejecutar con cada cambio de cualquier elemento del componente.
   

    return <div>
        <br></br>
        <hr></hr>
        <div>
                <input onChange={e => setMensaje(e.target.value)}/>
                <button onClick={()=>{
                    alert("el mensaje es: " + mensaje)
                }}>
                    Save
                </button>
            </div>  
        <br></br>

        <h1>Counter: {counter}</h1>
        <button onClick={() => setCounter(counter+1)}
        >Incrementar</button>

    </div>
    //useEffect sirve cuando estamos trayendo datos del back y queremos asignarlos a una variable (un estado de react). O cuando tenemos una interfaz que esta cambiando de estado y queremos que en otra parte de la interfaz  vaya cambiando también.
}