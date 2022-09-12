import React from 'react';
import ReactDOM from 'react-dom/client';       //así importamos react para manipular el dom, para el navegador
import { Button } from './Button';
import { Saludar2 } from './claseSaludar';
import { CompoExterno } from './ComponentesExternos';
import { ButtonEvent, FormEvent, FormEvent2, InputEvent } from './events';
import { Greeting, UserCard } from './Greeting';
import { Counter, UseEfectEj } from './Hooks';
import { Post } from './Post';
import ExportDefault, {Ejemplo2} from './Product.js';   //así se importa todo el modulo Product por defecto -sin llaves-, y Ejemplo2 de manera normal. Son 2 formas distintas de hacer lo mismo. Usar uno u otro depende de cada desarrollador.
import {EjemploProp, EjemploProp2Atributos, EjemploPropVariosTiposAtributos} from './Props';
import { TaskCard, TaskCard2, TaskCard3, TaskCard4 } from './TaskStyles';      //El archivo y el componente en si no necesariamente deben llamarse igual. Lo importante es que ambos empiecen en Mayúscula.

//para decirle a react lo que vamos a poner dentro de la ap, vamos a usar este root y una funcion llamada render
const root = ReactDOM.createRoot(document.getElementById('root'));  

//los componentes se crean como funciones pero con Mayuscula en la 1er letra, y siempre retornan una interfaz (html). JS normalmente no puede retornar elementos html salvo que estne dentro de '', acá ni si quiera nos deja hacerlo de esa forma, esto es porque no se está usando js sino una sintaxis llamada JSX, una ocmbinacion de js con html que permite el retorno de html de la siguiente forma:
function Saludar(){
    return <div>
        <h1>Hello React</h1>
    </div>
//si se retorna un solo elemento html no es necesario un contenedor padre, si son varios SI. Salvo que usemos la etiqueta Fragment (se verá mas abajo), con la que no necesitaremos contenedores.
}

function Variables(){
// el código js siemrpe se escribe antes del retorno de los elementos html
    const nombre = "Agustin";
    const edad = 28;
    const booleano = true;

    return <div><h1>
        {nombre} + {edad -5} + {booleano}
    </h1>

{/* Los booleanos no se muestran, salvo que los pasemos a string */}
    <h2>{booleano.toString}</h2>
    </div>
}


function Booleanos(){
// De la siguiente manera podemos usar condicionales para mostrar o no mostrar un componente.
    const married = true;
    // if (married){
    //     return <h1>Estoy casado</h1>
    // } else {
    //     return <h1>No estoy casado</h1>
    // }

//La sintaxis comun en React y que permite el ahorro de lineas de codigo es usando el '?' que es como un 'if' y los ':' como 'else' lo anterior de manera simplifaicada sería:
    return <div>
    <h1>{married ? 'estoy casado ' : 'no estoy casado'}</h1>
    </div>
}

function Objeto(){
    // Respecto a los objetos, react no lo muestra como tal, sino que hay que convertirlo a strig
    const user = {
        firstName: 'Ryan',
        lastname: 'Ray'
    }
// así se mostrata todo el objeto:
    //return <h1>{JSON.stringify(user)}</h1>

//Así se muestra por partes (es necesario que esten en un contenedor):
    return <div>
    <h1>{user.firstName}</h1>
    <h2>{user.lastname}</h2>
    </div>
}

function Funcion(){
    function sumar(x,y){
        return x + y;
    }

    return <h1>{sumar(10,30)}</h1> 
}

const users = [
    {
        id: 1,
        name: 'Matias Tomson',
        image: 'https://robohash.org/user1'
    },
    {
        id: 2,
        name: 'Barth Sipmson',
        image: 'https://robohash.org/user2'
    }
]

//render espera como parametros elementos html, o componentes que retornen elementos html. Siempre deben estar dentro de un elemento html padre. O bien, puede estar dentro de la etiqueta Fragment que es un contenedor vacio '<>Componentes...</>'. Para que en html los componentes se muestren como independientes y no como hermanos dentro de un contenedor padre.
root.render(<>
    {/* para interpretar una funcion de js en html necesitamos usar llaves  o usando la funcion como una etiqueta html. Esto también es propio de JSX. Y lo mismo aplica para usar variables de js, tendrán que ir entre {}*/}
    {Saludar()}
    <Saludar></Saludar>
    {/* tambien puede ser una etiqueta simple, ya que adentro no va nada */}
    <Saludar/>
    <Variables/>
    <Booleanos/>
    <Objeto/>
    <Funcion/>
    {/*para usar una funcion o modulo creado fuera de este archivo, ponemos la etiqueta aca y se importa solo.*/}
    <Greeting/>
    {/* Si en el archivo externo hay mas de una funcion Componente hay que ponerla aca igual, e importarna arriba. */}
    <UserCard/>

    <ExportDefault/>
    <Ejemplo2/>

{/* Props: el parametro que usamos al crear la funcion modulo se define al momento de llamar al modulo aca. La sintaxis es atributo = valor (donde 'atributo' puede ser cualquier palabra y 'valor' cualquier valor). Al momento de usarlo varias veces el atributo siempre debe ser el mismo como se ve a continuación, lo que vambia es el valor*/}
    <EjemploProp atributo="Hola prop"/>
    <EjemploProp atributo="prop 2"/>
    
{/* Prop de 2 atributos (tiene un tercero por defecto)*/}
    <EjemploProp2Atributos atributo1="primer atributo" atributo2="segundo atributo"/>

{/* En el siguiente componente vemos como usar los atributos dependiendo del tipo de dato que tendrán como valor. La regla es que lo que no sea tipo de dato string irá entre {}, y en el caso de los objetos tendrán doble {}, una representando al objeto per se y otra por no ser de tipo de dato string. */}
    <EjemploPropVariosTiposAtributos 
    name="Ryan Rey" 
    amount={3000} 
    married={true} 
    points={[99, 33, 5.1, 8,55]} 
    address={{street: 'Wall Street', city:'New York'}}
    // tambien se puede crear una funcion o metodo dentro del objeto de la siguiente forma:
    greet={function (){alert("Hello")}}
    />


{/* reutilizando el codigo creado podemos crear otro componente a partir del anterior pero con valores diferentes */}
<EjemploPropVariosTiposAtributos 
    name="Agustin" 
    amount={5000} 
    married={true} 
    points={[100, 48, 5.8, 7,25]} 
    address={{street: 'Colombia', city:'Santa Rosa'}}
    />

    <Button text="click me"/>

    {/* este boton espera como parametro un tipo de dato string. Pero igualmente al ser un numero (o un arrai con numeros sería lo mismo) lo convierte a string y lo renderiza. Pero si le damos console.log vemos el error.  */}
    <Button text={4}/>         

    {/* a diferencia del caso anterior, el booleano no se puede convertir a string, entonces se va a mostrar mal */}
    <Button text={true}/>      
    <Button text="" name="Joe"/>  

    <TaskCard/>
    <TaskCard2/>
    <TaskCard3/>
    <TaskCard4 ready={true}/>

    {/* componente clase: */}
    <Saludar2/>

    {/* Event Handlers: */}
    <ButtonEvent text='evento click'/>
    <InputEvent/>
    <FormEvent/>
    <FormEvent2/>

    <Post/>

    <CompoExterno/>

    {/* arrays: */}
    {/* la funcion map recorre los elementos del array y retorna un nuevo arreglo. map recibe como parametro otra función, que va a tener a su vez como parametros 1) represenetacion de cada elemento del array, en este caso user, y 2) el índice */}
    {/* en react cada elemento que se retorna tiene que tener una key (lo debe tener el primer elemento que contiene al resto). Una especie de id que le necesita react y le añade a cada elemento (cuando se convierte a producción el archivo no aparece). Acá vamos a hacer que el key conicida con el índice del array */}
    {/* Esta función entonces recorre el array con objetos y por cada elemento retorna un hq y un div */}
    {users.map((user,i) =>{
        return (
        <div key={i}>
            <h1>{user.name}</h1>
             <img src={user.image}/>   {/*  en react no se puede usar la etiqueta img doble, tiene que cerrarse a sí misma  */}
        </div>)
    })
    }


    {/* Hooks: */}
    <Counter/>

    <UseEfectEj/>
</>)
