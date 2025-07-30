function collectMovie(data) {
    let movieInfo = [];

    for(let entry of data) {

        if(entry.includes('addMovie')) {
            let tokens = entry.split('addMovie ')
            let movieTitle = tokens[1]

            movieInfo.push({ name: movieTitle })

        } else if(entry.includes('directedBy')) {
            let [searchedTitle, directorName] = entry.split(' directedBy ');
            
            let movieObj = movieInfo.find(movie => movie.name === searchedTitle);
            if(movieObj) {
                movieObj.director = directorName
            }

        } else if(entry.includes('onDate')) {
            let [nameMovie, dateMovie] = entry.split(' onDate ')

            let movieObj = movieInfo.find(movie => movie.name === nameMovie)

            if(movieObj) {
                movieObj.date = dateMovie
            }

        }
    }

    for(let movieObj of movieInfo) {
        if(movieObj.name && movieObj.director && movieObj.date) {
            console.log(JSON.stringify(movieObj))
        }
    }

}
collectMovie([
'addMovie Fast and Furious',
'addMovie Godfather',
'Inception directedBy Christopher Nolan',
'Godfather directedBy Francis Ford Coppola',
'Godfather onDate 29.07.2018',
'Fast and Furious onDate 30.07.2018',
'Batman onDate 01.08.2018',
'Fast and Furious directedBy Rob Cohen'
])