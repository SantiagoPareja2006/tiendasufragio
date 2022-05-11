//OBJETOS
let producto1={
    nombre:"producto1",
    precio:500000,
    estado:"Nuevo",
    foto:"https://firebasestorage.googleapis.com/v0/b/la-tiendita-8a55a.appspot.com/o/Foto%201.png?alt=media&token=409f122c-b800-4ed0-9eb6-33637f1fede8"
}

let producto2={
    nombre:"producto2",
    precio:500000,
    estado:"Nuevo",
    foto:"https://firebasestorage.googleapis.com/v0/b/la-tiendita-8a55a.appspot.com/o/Foto%202.jfif?alt=media&token=13104e4f-4dac-4ffc-8e49-fb2ed857f990"
}

let producto3={
    nombre:"producto3",
    precio:500000,
    estado:"Nuevo",
    foto:"https://firebasestorage.googleapis.com/v0/b/la-tiendita-8a55a.appspot.com/o/Foto%203.jfif?alt=media&token=a8fed35b-9939-4fad-9f7b-e762eaf06c59"
}

let producto4={
    nombre:"producto4",
    precio:500000,
    estado:"Nuevo",
    foto:"https://firebasestorage.googleapis.com/v0/b/la-tiendita-8a55a.appspot.com/o/Foto%204.jpg?alt=media&token=0fb59402-8fa9-4e4f-a021-4fe182eaf9b6"
}

let producto5={
    nombre:"producto5",
    precio:500000,
    estado:"Nuevo",
    foto:"https://firebasestorage.googleapis.com/v0/b/la-tiendita-8a55a.appspot.com/o/Foto%205.jpg?alt=media&token=01d5b083-4369-4606-8266-43cf4fec889e"
}

let producto6={
    nombre:"producto6",
    precio:500000,
    estado:"Nuevo",
    foto:"https://firebasestorage.googleapis.com/v0/b/la-tiendita-8a55a.appspot.com/o/Foto%206.png?alt=media&token=b19576a7-d92a-457f-9d0e-0d500ad3e1f8"
}

let producto7={
    nombre:"producto7",
    precio:500000,
    estado:"Nuevo",
    foto:"https://firebasestorage.googleapis.com/v0/b/la-tiendita-8a55a.appspot.com/o/Foto%207.jpg?alt=media&token=e75a5c78-eb8e-45e3-a339-9314c3f1bef0"
}

let producto8={
    nombre:"producto8",
    precio:500000,
    estado:"Nuevo",
    foto:"https://firebasestorage.googleapis.com/v0/b/la-tiendita-8a55a.appspot.com/o/Foto%208.jpg?alt=media&token=df16c764-7b61-4940-ae06-33c96032e14a"
}

let producto9={
    nombre:"producto9",
    precio:500000,
    estado:"Nuevo",
    foto:"https://firebasestorage.googleapis.com/v0/b/la-tiendita-8a55a.appspot.com/o/Foto%209.jpg?alt=media&token=0e40fc1e-a05a-422b-9665-5d081a14c442"
}

let producto10={
    nombre:"producto10",
    precio:500000,
    estado:"Nuevo",
    foto:"https://firebasestorage.googleapis.com/v0/b/la-tiendita-8a55a.appspot.com/o/Foto%2010.jpg?alt=media&token=9977b204-4ae5-489e-9a29-ef0da7ad69f6"
}

let producto11={
    nombre:"producto11",
    precio:500000,
    estado:"Nuevo",
    foto:""
}

let producto12={
    nombre:"producto12",
    precio:500000,
    estado:"Nuevo",
    foto:""
}

let producto13={
    nombre:"producto13",
    precio:500000,
    estado:"Nuevo",
    foto:"https://firebasestorage.googleapis.com/v0/b/la-tiendita-8a55a.appspot.com/o/Foto%2013.jfif?alt=media&token=113184b2-333c-48d0-a192-700e3d6d36cd"
}

let producto14={
    nombre:"producto14",
    precio:500000,
    estado:"Nuevo",
    foto:"https://firebasestorage.googleapis.com/v0/b/la-tiendita-8a55a.appspot.com/o/Foto%2014.jpg?alt=media&token=e32d90f8-f9ea-408d-8e8d-08e95bc2ccb0"
}

let producto15={
    nombre:"producto15",
    precio:500000,
    estado:"Nuevo",
    foto:"https://firebasestorage.googleapis.com/v0/b/la-tiendita-8a55a.appspot.com/o/Foto%2015.jpg?alt=media&token=7175a790-2a41-4ebf-b853-d8c0c36c2060"
}

//ARREGLO
let productos=Array(
    producto1,
    producto2,
    producto3,
    producto4,
    producto5,
    producto6,
    producto7,
    producto8,
    producto9,
    producto10,
    producto11,
    producto12,
    producto13,
    producto14,
    producto15
)

//RECORRO EL ARREGLO
let contenedor=document.getElementById("contenedor")
productos.forEach(function(producto){

    let foto=document.createElement("img")
    foto.classList.add("w-100","img-fluid")
    foto.src=producto.foto
    
    let columna=document.createElement("div")
    columna.classList.add("col")

    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card")

    tarjeta.appendChild(foto)
    columna.appendChild(tarjeta)
    contenedor.appendChild(columna)









})

