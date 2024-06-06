function printObjectFromJson(jsonString) {
    const obj = JSON.parse(jsonString);
    
    
    for (const key in obj) {
        
        
            console.log(`${key}: ${obj[key]}`);
        
    }
}


printObjectFromJson('{"name": "Ivan", "age": 40, "town": "Sofia"}');

