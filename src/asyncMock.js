const products =[
    {
        id:"1",
        name:"motorola12",
        price: 1000,
        category: "celular",
        img: "https://medias.musimundo.com/medias/size515-148232-01.jpg?context=bWFzdGVyfGltYWdlc3w1MTk2MHxpbWFnZS9qcGVnfGg2NS9oZDYvMTA1MDU4MDEyMDM3NDIvc2l6ZTUxNV8xNDgyMzJfMDEuanBnfDcyYzk1NWFiNzIwZTU2MDMyMGM3ZWFlYjE1N2I2MjM5Njk5ZTRlMWY5MzI2MmExZjgxN2U1ODliYWE5NDYyZTU",
        stock:25,
        description: "descripcion de Motorola"
    },
    {
        id:"2",
        name:"tablet xtr negro",
        price: 2000,
        category: "tablet",
        img: "https://medias.musimundo.com/medias/size515-146070-01.jpg?context=bWFzdGVyfGltYWdlc3w3ODg4MHxpbWFnZS9qcGVnfGhjMC9oOWMvMTA0NzQyNjU0NDQzODIvc2l6ZTUxNV8xNDYwNzBfMDEuanBnfDJmMTFiYzVkOGIzYTcwMThjZjNmOWRiMWU0MWZlMmZiMmY0YTVhOTlhMDMwNjc3ZjM1ZjkyZmQyY2NkYTMzYWI",
        stock:50,
        description: "descripcion de Tablet"
    },
    {
        id:"3",
        name:"Notebook hp",
        price: 3000,
        category: "Notebook",
        img: "https://medias.musimundo.com/medias/00541052-146125-146125-01-612G5LA-1.jpg-size515?context=bWFzdGVyfGltYWdlc3w2OTcyNnxpbWFnZS9qcGVnfGhiMy9oNTQvMTA0MDQyMTAzMTExOTgvMDA1NDEwNTItMTQ2MTI1LTE0NjEyNV8wMS02MTJHNUxBXzEuanBnX3NpemU1MTV8OGQzYjNkY2RmNGU2NzIyOWQ4OTRlOGZiNDVjNmU5OWIwOWFjNzc4ZTIxY2FmN2ZiNjkyNmU3YzI0YzMwZWNkMQ",
        stock:8,
        description: "descripcion de Notebook"
    }
]

export const getProducts = () =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products)
        },500)
    })
}

export const getProductById = (productId) =>{
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(products.find(prod => prod.id == productId))
        }, 500);
    })
}