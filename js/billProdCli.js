
const clients = [
    {
        id: 1,
        name: "Juan",
        direccion: "Calle A, Ciudad"
    },
    {
        id: 2,
        name: "Maria",
        direccion: "Calle B, Ciudad"
    }
];

const products = [
    {
        id: 101,
        name: "Producto 1",
        price: 50
    },
    {
        id: 102,
        name: "Producto 2",
        price: 75
    },
    {
        id: 103,
        name: "Producto 3",
        price: 100
    }
];

const bills = [
    {
        id: 1001,
        clientId: 1,
        products: [101, 102],
        total: 0
    },
    {
        id: 1002,
        clientId: 2,
        products: [103],
        total: 0
    }
];


// method 1 with callbacks

// function getClient(id,callback){
//     let user ="";
//     for(client of clients){
//         if (client.id === id) {user = client;break;}
//     }
//     if(user != ""){
//         callback(null,user);
//     }
//     else{
//         callback("Client with the id "+ id +"doesn't exist" );
//     }
// }

// function getProduct(id,callback){
//     let user ="";
//     for(product of products){
//         if (product.id === id) {user = product;break;}
//     }
//     if(user != ""){
//         callback(null,user);
//     }
//     else{
//         callback("Product with the id "+ id +"doesn't exist" );
//     }
// }

// function calculeTotalBill(products,callback){
//     let totsum = 0;
//     for(productId of products){
//         getProduct(productId,(error,product) =>{
//             if(error){
//                 callback(error);
//             }
//             else{
//                 totsum += product.price;
//                 if(products.indexOf(productId) === products.length -1 ){
//                     callback(null,totsum);
//                 }
//             }
//         });
//     }
// }

// function getInfoBill(billId, callback){
//     let information = {}
//     for(bill of bills){
//         if(bill.id === billId){
//             getClient(bill.clientId,(errorClient,client) =>{
//                 if(errorClient){
//                     callback(errorClient);
//                 }
//                 else{
//                     calculeTotalBill(bill.products, (errorTotal,total)=>{
//                         if(errorTotal){
//                             callback(errorTotal);
//                         }
//                         else{
//                             bill.total = total;
//                             information = {
//                                 bill,
//                                 client,
//                                 products: bill.products
//                             }
                            
//                         }
//                     });
//                 }
//             });
//         }
//     }
//     if(information != {}){
//         callback(null, information);
//     }
//     else{
//         callback("The bill with the id " + billId + "doesn't exist");
//     }
// }


// method 2 with promises

// function getClient(id){

//     return new Promise ((resolve,reject) =>{
//         let user ="";
//         for(client of clients){
//             if (client.id === id) {user = client;break;}
//         }
//         if(user != ""){
//             resolve(user);
//         }
//         else{
//             reject("Client with the id "+ id +"doesn't exist" );
//         }
//     });
// }

// function getProduct(id){

//     return new Promise((resolve,reject) =>{
//         let user ="";
//         for(product of products){
//             if (product.id === id) {user = product;break;}
//         }
//         if(user != ""){
//             resolve(user);
//         }
//         else{
//             reject("Product with the id "+ id +"doesn't exist" );
//         }
//     });
    
// }

// function calculeTotalBill(products){
//     let totsum = 0;
//     let promises = []
//     for(productId of products){
//         promises.push(
//             getProduct(productId)
//             .then(value =>{totsum += value.price;})
//         );
//     }
//     return Promise.all(promises).then(()=>totsum).catch(error => console.error(error));
// }

// function getInfoBill(billId){
//     return new Promise((resolve,reject) =>{
//         let information = {};
//         for(bill of bills){
//             if(bill.id === billId){
//                 Promise.all([
//                     getClient(bill.clientId),
//                     calculeTotalBill(bill.products)
//                 ])
//                 .then(([client,total]) => {
//                     bill.total = total;
//                     information ={
//                         bill,
//                         client,
//                         products: bill.products
//                     };
//                     console.log("information in promise", information);
//                     resolve(information);
//                 })
//                 .catch(reject);
//                 break;
//             }
//         }
//     });
// }
// method 3 async and await

async function getClient(id){
    let user ="";
    for(client of clients){
        if (client.id === id) {user = client;break;}
    }
    if(user != ""){
        return user;
    }
    else{
        throw new Error("Client with the id "+ id +"doesn't exist" );
    }
}

async function getProduct(id){
        let user ="";
        for(product of products){
            if (product.id === id) {user = product;break;}
        }
        if(user != ""){
            return user;
        }
        else{
            throw new Error("Product with the id "+ id +"doesn't exist" );
        }
}

async function calculeTotalBill(products){
    let totsum = 0;
    for(productId of products){
        let product = await getProduct(productId);
        totsum += product.price;
    }
    return totsum;
}

async function getInfoBill(billId){
        let information = {};
        for(bill of bills){
            if(bill.id === billId){
                const client = await getClient(bill.clientId);
                const total = await calculeTotalBill(bill.products)
                try{
                    bill.total = total;
                    information ={
                        bill,
                        client,
                        products: bill.products
                    };
                    return information;
                } catch(error){throw error};
            }
        }
}

// exercise 

const billId = 1001;
//method 1 callback
// getInfoBill(billId, (error,infoBill) => {
//     if(error){
//         console.error("Error to get the information of the bill:",error);
//     } else{
//         console.log("Information of the bill:");
//         console.log("Client:",infoBill.client);
//         console.log("Products in the bill:",infoBill.products);
//         console.log("Total amount of the bill: $" + infoBill.bill.total);
//     }
// })
//method 2 promises and method 3 async and await
getInfoBill(billId)
    .then(infoBill =>{
        console.log("Information of the bill:");
        console.log("Client:",infoBill.client);
        console.log("Products:", infoBill.products);
        console.log("Total amount of the bill: $"+infoBill.bill.total);
    })
    .catch(error =>{
        console.error("Error to get the information of the bill: ", error);
    });

