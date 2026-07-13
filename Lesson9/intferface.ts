interface User{ 
    email: string, 
    userId: string; 
}


interface Admin extends User{ 
    role: "admin" | "ta" | "member"; 
}