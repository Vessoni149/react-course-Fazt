import PropTypes from 'prop-types';         //este paquete nos permite establecer el tipo de dato que tendra una variable.



export function Button({text, name="User", lastname}){            //name va a estar siendo declarado por defecto aca, entonces si no le damos un valor a usar el componente en el index, por defecto los botones van a tener User. Solo el 4to boton tiene "Joe" al estar declarado. lastname sera asignado por defecto también pero de otra manera. En todoslos casos SIEMPRE deben ser RETORNADOS.
    console.log(text);                      
    return <button>
        {text}  {name} {lastname}
    </button>
}
Button.propTypes = {
    // text: PropTypes.string
    text: PropTypes.string.isRequired
    //propTypes es un objeto que contiene las variables y sus tipos de datos.
    //isRequired es para que si o si se tenga que pasar un parametro al usar el componente, sino sale error en consola.
} 

//aca asignamos por defecto un parametro pero por fuera de la función.
Button.defaultProps ={
    lastname: 'some lastname'
}


