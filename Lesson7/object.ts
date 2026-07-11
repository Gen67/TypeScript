const User = { 
    name: "Guren",
    email: "H@gmail.com", 
    isActive: true
}


function handleUser(User: {name: string, isPaid: boolean}){}

    
handleUser({name: "Guren", isPaid: true});





function createCourse():{name: string, price: number}{
    return {name: "React", price: 123}
}



export{}