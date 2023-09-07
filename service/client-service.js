
const listaProductos = () => fetch("https://alurageek-omega.vercel.app/productos").then(repuesta => repuesta.json());
const crearProducto = (nombre, categoria, precio, imagen, descripcion)=>{
    return fetch("https://alurageek-omega.vercel.app/productos",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({nombre,categoria,precio,imagen,descripcion, id: uuid.v4()}),
    });
};

const eliminarProducto =(id)=>{
    return fetch(`https://alurageek-omega.vercel.app/productos/${id}`,{
        method: "DELETE",
    });
};

const detalleProducto = (id)=>{
    return fetch(`https://alurageek-omega.vercel.app/productos/${id}`)
    .then((repuesta)=> repuesta.json()
    );
};

const actualizarProducto= (nombre,categoria,precio,imagen,descripcion, id)=>{
    return fetch(`https://alurageek-omega.vercel.app/productos/${id}`, {
        method: "PUT",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({nombre,categoria,precio,imagen,descripcion})
    })
    .then((repuesta)=> repuesta)
    .catch((error)=> console.log(error));
};


export const clientetServices ={
    listaProductos,
    crearProducto,
    eliminarProducto,
    detalleProducto,
    actualizarProducto,
};