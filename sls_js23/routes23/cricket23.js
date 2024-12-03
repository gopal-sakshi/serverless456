var cricket23 = {};

cricket23.getPlayers = async (stuff) => { 
    console.log('getplayers function23 ===> ', stuff); 
    return  { name: 'Dhoni', team: "CSK", time23: new Date().toISOString(), pathParam23: stuff  } 
} 

module.exports = cricket23;