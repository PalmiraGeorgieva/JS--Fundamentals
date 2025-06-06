function tseamAccount(input) {
    let games = input[0].split(' ');

    for (let i = 1; i < input.length; i++) {
        let line = input[i];

        if(line === 'Play!') {
            break;
        }

        let [command, arg] = line.split(' ');

        if (command === 'Install') {
            if(!games.includes(arg)) {
                games.push(arg);
            }

        } else if (command === 'Uninstall') {
            games = games.filter(game => game !== arg)
        } else if (command === 'Update') {
            if(games.includes(arg)) {
                games = games.filter(game => game !== arg);
                games.push(arg)

            }
            
        } else if (command === 'Expansion') {
            
              let [game, expansion] = arg.split('-');
              let gameIndex = games.indexOf(game);

              if(gameIndex !== -1) {
                games.splice(gameIndex + 1, 0, `${game}:${expansion}`)
              } 

            
            
        }
    }
    console.log(games.join(' '));
    

}
tseamAccount(['CS WoW Diablo',
'Install LoL',
'Uninstall WoW',
'Update Diablo',
'Expansion CS-Go',
'Play!'])
tseamAccount(['CS WoW Diablo',
'Uninstall XCOM',
'Update PeshoGame',
'Update WoW',
'Expansion Civ-V',
'Play!'])