function songsClass(songDataArr) {
    class Songs {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let numberOfSongs = Number(songDataArr[0]);
    let allSongs = []

    for(let i = 1; i <= numberOfSongs; i++) {
        let tokens = songDataArr[i].split('_');

        let typeList = tokens[0];
        let name = tokens[1];
        let time = tokens[2];

        let songs = new Songs(typeList, name, time);

        allSongs.push(songs)


    }

    let searchTerm = songDataArr[numberOfSongs + 1];
    if(searchTerm !== 'all') {
        allSongs = allSongs.filter(s => s.typeList === searchTerm)
    }

   

    for(let song of allSongs) {
        console.log(song.name)
    }

}
songsClass([3,
'favourite_DownTown_3:14',
'favourite_Kiss_4:16',
'favourite_Smooth Criminal_4:01',
'favourite']
)