const { prefix } = require("../config.json");
// ['ping', 'test']
// console.log(prefix)
// 'ping' -> ['ping']
console.log(`prefix: ${prefix}`)


module.exports = (client, aliases, callback) => {
	if (typeof aliases === "string") {
		aliases = [aliases];
    }


    client.on('message', message => {
        const { content } = message;
        console.log(`content: ${content}`);

        aliases.forEach((alias) => {
            print(`aliases: ${alias}`)
            const command = `${prefix}${alias}`;
            console.log(`command: ${command}`);

            if (content.startsWith(`${command} `) || content == command) {
                console.log(`Running command ${command}`);
                callback(message);
            }
        });
    });
};
