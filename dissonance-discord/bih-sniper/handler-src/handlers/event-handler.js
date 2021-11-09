const fs = require('fs');

module.exports = (client, Discord) =>{
    const load_dir = (dirs) =>{
        const event_files = fs.readdirSync(`./events/${dirs}`).filter(file => file.endsWith('.js'));

        for(const files of event_files){
            const event = require(`../events/${dirs}/${files}`);
            const event_name = files.split('.')[0];
            client.on(event_name, event.bind(null, Discord, client));
        }
    }

    ['client', 'guild'].forEach(e => load_dir(e));

};