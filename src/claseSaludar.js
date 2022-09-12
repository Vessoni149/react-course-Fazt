import {Component} from 'react';
//Ya vimos que para crear componentes podemos crear funciones. Pero también existe la posibilidad de crear clases. Para usar clases como componenres hay que: 1) usar dentro de ella el metodo render, que va a retornar el elemento html. 2) Ademas, hay que importar de react Component. 3) y exportarlo con 'export'.

export class Saludar2 extends Component{
    render(){
        return <h1>Hello class Component!</h1>
}
}
//No esta desaconsejado usar clases para crear componentes. Solo que es te hace escribir más y se torna mas complejo (segun Fazt). React empezo siendo así, creando componentes con clases, posteriormente se implemento el uso de funciones como componenetes, que es lo más usado hoy en dia.