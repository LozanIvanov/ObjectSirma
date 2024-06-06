function phoneBook(input){
 const newBook=[];
 for (const d of input) {
    const word=d.split(' ');
    //const name=word.shift();
    //phone=word.join(' ');
    const name=word[0];
    const phone=word.splice(1).join(' ');

    newBook[name]=phone;

    
 }
 for (const a in newBook) {
    console.log(`${a} -> ${newBook[a]}`)
 }
}
phoneBook(["Peter 0888 657 212", "Bob 0899 657 212", "Peter 123123"])