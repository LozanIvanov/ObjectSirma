function town(input){

    let data=Object.keys(input);

    for (const key of data) {
        console.log(`${key}`+ ' -> '+  `${input[key]}`)
    }

}town({
    name: 'Sofia',
    population:
    1234567,
    country:'Bulgaria',
    postcode: '1000'
    })