function createPersonObject(name, lastName, eyeColor) {
    
    const person = {
        name: name,
        lastName: lastName,
        eyeColor: eyeColor
    };
    
    
    const jsonString = JSON.stringify(person);

    console.log(jsonString);
    

}
createPersonObject("Ivan", "Ivanov", "blue"); 

