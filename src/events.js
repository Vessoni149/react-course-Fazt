//los elementos html tienen sus propios eventos (en react empiezan con 'on' - onClick x ej.). Que son funciones que neesitan como parametro otra funcion a ejecutar cuando suceada el evento. Veremos 3 eventos de los mas comunes, onClick, onChange y onSubmit.
//La función que va dentro del evento puede ser creada como una funcion normal ahi adentro (en linea), o como una función flecha. Tanien puede ser creada afuera de la función (asignandola a una constante) ButtonEvent para ser llamada desde adentro con una constante. 
//ejemplo 1 funcion comun:

// export function ButtonEvent({text}){
//     return <button onClick={function(){
//         console.log("funcion click ejecutada")
//     }}>
//         {text}
//     </button>
// }


//ejemplo 2 funcion flecha:
// export function ButtonEvent({text}){
//     return <button onClick={(e)=>{
//         console.log("funcion click ejecutada")
//         console.log(e)
//     }}>
//         {text}
//     </button>
// }


//ejemplo 3 función por fuera:
//muchas veses (practica común) se crea una función llamada handle -seguido del nombre del evento- para manejar el mismo. Va en minuscula xq no es un componente.
const handleClick = function(e){
console.log(e);
} 
export function ButtonEvent({text}){
    return <button onClick={handleClick}>
        {text}
    </button>
}


//El evento onChange se ejecuta a medida que se tipea en el input. 
//Los eventos también ofrecen información de un objeto de js (el evento mismo). Para recibir ese objeto hay que nombrarlo como parametro. Usualmente se pone 'e' o 'event' para que muestre los datos del objeto. Si usamos ese parametro en un console.log vamos a poder acceder a las propiedades del evento. Para luego usar esa información.
//El input, dentro de "target" (elemento que disparo el evento) tiene el elemento value, que es lo que se escribe dentro del input. Lo mas comun es usar esto de un input, para saber lo que el usuario va tipeando.
export function InputEvent(){
    return <input onChange={function(e){
        console.log(e.target.value)

    }}>
    </input>
}

//Otro evento importante es el 'submit' de los formularios. Necesita un Button para ser usado.
//En ese tejemplo veremos que al hacer click en el boton se refrezca la pagina. Esto porque los formularios de html tienen ese comportamiento por defecto, los forms se crearon para enviar datos al servidor, y en este caso como no hay ningun servidor especificado los manda al mismo localhots. Por eso aparece en la url un '?'.
export function FormEvent(){
    return <form onSubmit={()=> console.log("enviando datos del form")}>    
        <br></br><br></br><br></br>
        <button>Send</button>
        <h2>Evento submit</h2>
    </form>
    //el texto del console.log nunca se va a ver xq la pagina se refesca. Salvo que usemos 'preventDefault'
}


//preventDefault
export function FormEvent2(){
    return <form onSubmit={(e)=> {
        e.preventDefault();
        console.log("enviando datos del form");
        }}>    
        <br></br><br></br><br></br>
        <button>Send</button>
        <h2>Evento submit con prevent default</h2>
    </form>
}