//Para usar multiples veces un componente y cambiar algunos datos -reutilizar codigo- existe props, que es basicamente el parametro de la funcion modulo.

export function EjemploProp(props){
    //la sintaxis es parametrop.x porque en si es un objeto
    return <h1>{props.atributo}</h1>
}


//Otra forma de hacerlo sería:
// export function EjemploProp({atributo}){   //se coloca el atributo del objeteo entre {} como parametro de la funcion
    
//     return <h1>{atributo}</h1>              //y acá se llama de la misma manera
// }

export function EjemploProp2Atributos({atributo1, atributo2, atributo3 = "tercer atributo por defecto"}){   //de esta manera se le da un valor al atributo por defecto, y en el index.js al llamar al componente no hace falta especificar el atributo3
    return <div><h1>{atributo1}</h1>
            <h2>{atributo2}</h2>
            <h2>{atributo3}</h2>
            </div>
}

// export function EjemploPropVariosTiposAtributos(props){
//     console.log(props)
// return <div>
//     <h1>{props.name}</h1>
//     <p>{props.amount}</p>
//     <p>{props.married ? "married" : "single"}</p>
//     <ul>
//         <li>Ciudad: {props.address.city}</li>
//         <li>Calle: {props.address.street}</li>
//     </ul>
// </div>
// }

//Otra forma de hacerlo si tener que repetir tanto el prop es:
export function EjemploPropVariosTiposAtributos({name, amount, married, points, address, greet}){               //añado a la funcion anterior la funcion greet
    console.log(greet) //la funcion creada en el index no es ejecutada, por eso para verla la pongo en este console.log
return <div>
    <h1>{name}</h1>
    <p>{amount}</p>
    <p>{married ? "married" : "single"}</p>
    <ul>
        <li>Ciudad: {address.city}</li>
        <li>Calle: {address.street}</li>
        <li>{points[1]}</li>
    </ul>
</div>
// En este caso el objeto (sin tener un nombre definido) se pasa por parametro con sus atributos pero sin valores, éstos son dados en el index, al llamar al modulo.
}