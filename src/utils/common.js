export const getUser = () =>{
    const userInfo = sessionStorage.getItem("user");
    if(userInfo){
        const parsedUser = JSON.parse(userInfo)

        var user = {
            firstName: parsedUser.firstName,
            lastName: parsedUser.lastName,
            email: parsedUser.email,
            role: parsedUser.role
        }
        return user;
    } else {
        return null;
    }
}

export const getToken = () =>{
    return sessionStorage.getItem("token") || null;
    
}

export const setUserSession = (user) =>{
    var userInfo = {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role
    };
    sessionStorage.setItem("token", user.jwtToken);
    sessionStorage.setItem("user", JSON.stringify(userInfo));
    
}

export const removeUserSession = () =>{
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");

}