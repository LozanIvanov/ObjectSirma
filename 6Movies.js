function movies(input){

    const moviess=[];
    
    

    for (const comandword of input) {
        
        if(comandword.includes("addMovie ")){
            let comand=comandword.split( ' ');
            comand.shift();
            let movieName=comand.join(' ');
        
            let movie={
                name:movieName
            }
            moviess.push(movie)
        }
        else if(comandword.includes('directedBy')){
         let movieInfo=comandword.split(' directedBy ');
         let movieName=movieInfo[0];
         let directorName=movieInfo[1];
         let movie=moviess.find(function(m){
            return m.name===movieName;
         })
         if(movie){
            movie.derctor=directorName;
         }
        }
        else if(comandword.includes('onDate')){
            let movieInfo=comandword.split(' onDate ');
            let movieName= movieInfo[0];
            let movieDate=movieInfo[1];

            let movie=moviess.find(function(n){
                return n.name===movieName
            })
            if(movie){
                movie.date=movieDate;
            }
        }
    }

    for (const movie of moviess) {
        
        let movieJSON=JSON.stringify(movie);
        console.log(movieJSON)
        
    }

}
movies([
    "addMovie Fast and Furious",
    "addMovie Godfather",
    "Inception directedBy Christopher Nolan",
    "Godfather directedBy Francis Ford Coppola",
    "Godfather onDate 29.07.2018",
    "Fast and Furious onDate 30.07.2018",
    "Spinderman 2 onDate 01.08.2018",
    "Fast and Furious directedBy Rob Cohen"
    ])