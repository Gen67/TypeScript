function addNumber(num: number) : number {
    return num + 1;
}
function logIn(name: string, email: string, isAuth: boolean) {
}
let isSign = (name: string , password: string, isPaid = false) => {
};

isSign("guren", "password", true);
logIn("Guren", "adwa@gmail", true);
addNumber(1);




//function getValue(myVal: number){ 
//    if(myVal > 5){ 
//       return 1; 
//    }
//    return "OK"
//}




const gethello = (s : string):string => { 

    return " ";
}


 const heros = ["Spiderman", "Thor", "IronMam"]; 
//const heros = [1, 2, 3]; 

heros.map( (heros): string => {
    return `Hero is ${heros}`;
} )


function consoleError(errormsg : string) : never{ 
    throw new Error(errormsg);
}




export {};
