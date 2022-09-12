// Otra forma de exportar es la siguiente:
function ExportDefault(){
    return <div>
        <h1>Export default</h1>
    </div>
}

export function Ejemplo2(){
    return <div>
    <h1>ejemplo 2</h1>
    <br></br>
    <br></br>
    </div>
    //esta funcion si vamos a tener que exportarla normalmente, ya que por default solo puede ir una
}

export default ExportDefault
//Pero para importar vamos a tener que hacerlo de otra forma: en index.js - import Product, {} from './Product.js';

