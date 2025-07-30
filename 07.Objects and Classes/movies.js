function movies(data) {
    let movie = [];

    for(let line of data) {
        if(line.startsWith('addMovie')) {
            let name = line.substring(9);
            movie.push({'name': name})
        } else if (line.includes('directedBy')) {
            let [name, director] = line.split(' directedBy ');
            let currMovie = movie.find(m => m.name === name);
            if(currMovie) {
              currMovie.director = director
            } 
        }else if (line.includes('onDate')) {
                let [name, date] = line.split(' onDate ');
                let currMovie = movie.find(m => m.name === name);
                if(currMovie) {
                    currMovie.date = date;
                }
        }
    }
    for (let mov of movie) {
        if(mov.director && mov.date) {
            console.log(JSON.stringify(mov))
        }
    }

}
movies([
'addMovie Fast and Furious',
'addMovie Godfather',
'Inception directedBy Christopher Nolan',
'Godfather directedBy Francis Ford Coppola',
'Godfather onDate 29.07.2018',
'Fast and Furious onDate 30.07.2018',
'Batman onDate 01.08.2018',
'Fast and Furious directedBy Rob Cohen'
])