//ESTILOS:

//1. FORMAS DE AÑADIR ESTILOS:
import './taskStyle.css';

//a) En linea:
//React al usar estilos en linea espera codigo js, entonces los valores dentro de la propiedad'style' tienen que ir entre {{ }}. Y adentro el formato es similar a css pero el valor debe ir entre '' o "": propiedad: 'valor'
export function TaskCard(){
    return <div style={{background: "#000", color: "#fff", padding:"20px"}}>
        
        <h1 style={{color:"red"}}>1. Mi primer tarjeta con estilo</h1>
        <p>Tarea realizada</p>
    </div>
}


//b) Mediante constantes:
//se ponen los estilos dentro de un objeto asignado a una constante y luego ésta se utiliza como {valor} de la propiedad style en la etiqueta html.
export function TaskCard2(){

    const cardStyles = {background: "yellow", color: "#000", padding:"10px"};
    const h1Style = {color:"green"};

    return <div style={cardStyles}>
        
        <h1 style={h1Style}>2. Mi segunda tarjeta con estilo</h1>
        <p>Tarea realizada</p>
    </div>
}

//c) Mediante un archivo css:
//Se debe crear un archivo css (taskStyle.css en este caso) e importarlo en este js donde se va a utilizar.
export function TaskCard3(){

    return <div className="card">
        <h1>3. Mi tercer tarjeta con estilo</h1>
        <p>Tarea realizada</p>
    </div>
    //vemos que la diferencia con html es que aca usamos 'className' en vez de 'class'. Esto es apra que react diferencie una clase de css de una de js, donde se usa la class como palabra reservada para construir clases de objetos.
}



//2. ESTILOS CONDICIONALES:
//la funcion modulo al ser utilizado debe  recibir una propiedad boleana. Tanto si queremos asignar estilos o hacer que se renderice una o utra cosa. En el primer span veremos el caso del renderizado, en el segundo usaremos el promp para dar distintos estilos segun sea T o F.
//Hay 2 formas de poner ese parametro: TaskCard4(props) y en el span usar props.ready, o simplemente poniendo TaskCard4({ready}) conel ready entre {} para desestructurar el props.
export function TaskCard4({ready}){
    return <div className="card">
        <h1>4. Mi cuarta tarjeta con estilo (condicional)</h1>

        {/* renderizado condicional: */}
        <span>{ready ? "Tarea realizada" : "Tarea pendiente"}
        </span><br></br>


        {/* estilo condicional: */}
        <span style={ready ? {background: 'green'} : {background: '#000'}}>              {/* Si ready es T ponemos un estilo, si es F otro */}
            {ready ? "estilo realizado" : "estilo pendiente"}
        </span><br></br>

        {/* estilo condicional con clases: */}
        <span className={ready ? "bg-green" : "bg-red"}>                                    
            {ready ? "estilo realizado" : "estilo pendiente"}</span>                       {/* si className es T se asigna el valor "bg-green, que es una clase creada en el archivo css, si es F se asigna la otra clase." */}
    </div>
}