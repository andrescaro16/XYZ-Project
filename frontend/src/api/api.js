const PORT = import.meta.env.VITE_PORT;
const STRAPI_KEY = import.meta.env.VITE_STRAPI_KEY;


export async function getProducts(){
    try {
        const options = {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${STRAPI_KEY}`,
                "Content-Type": "application/json",
            },
            body: null,
        };
        const res = await fetch(`${PORT}products`, options);
        const products = await res.json();
        return products;
    } catch (error) {
        console.log(error);
        return null;
    }
}


export async function getUsers(){
    try {
        const options = {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${STRAPI_KEY}`,
                "Content-Type": "application/json",
            },
            body: null,
        };
        const res = await fetch(`${PORT}users`, options);
        const users = await res.json();
        return users;
    } catch (error) {
        console.log(error);
        return null;
    }
}


export async function getProduct(id){
    try {
        const options = {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${STRAPI_KEY}`,
                "Content-Type": "application/json",
            },
            body: null,
        };
        const res = await fetch(`${PORT}products/${id}?populate=*`, options);
        const product = await res.json();
        return product;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function postProduct(data){
    try {
        const options = {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${STRAPI_KEY}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        };
        const res = await fetch(`${PORT}products`, options);
        const productsResponse = await res.json();
        return productsResponse;
    } catch (error) {
        console.log(error);
        return null;
    }
}


export async function deleteProduct(id){
    try {
        const options = {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${STRAPI_KEY}`,
                "Content-Type": "application/json",
            },
            body: null,
        };
        const res = await fetch(`${PORT}products/${id}`, options);
        const productsResponse = await res.json();
        return productsResponse;
    } catch (error) {
        console.log(error);
        return null;
    }
}


export async function postAddress(data){
    try {
        const options = {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${STRAPI_KEY}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        };
        const res = await fetch(`${PORT}usersweb3s`, options);
        const usersWeb3Response = await res.json();
        return usersWeb3Response;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function getUsersWeb3(){
    try {
        const options = {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${STRAPI_KEY}`,
                "Content-Type": "application/json",
            },
            body: null,
        };
        const res = await fetch(`${PORT}blockchains`, options);
        const usersWeb3 = await res.json();
        return usersWeb3;
    } catch (error) {
        console.log(error);
        return null;
    }
}