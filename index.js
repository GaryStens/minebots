onst { AssertionError } = require('assert');
const mc = require('minecraft-protocol');
let bot;

class Bot {
  constructor (options) {
    if (!options) {
      throw new AssertionError();
    } else if (!options.host) {
      throw new AssertionError();
    } else if (!options.port) {
      options.port = 25565;
    } else if (!options.username) {
      throw new AssertionError();
    }

    bot = mc.createClient(options);
  }

  on (event, action) {
    return bot.on(event, action);
  }

  once (event, action) {
    return bot.once(event, action);
  }

  chat (message) {
    return bot.write('chat', { message: message });
  }

  setCommandBlock (location, command, flags, mode) {
    return bot.write('update_command_block', { location: location, command: command, flags: flags, mode: mode });
  }

  getObject (object) {
    if (object.name == 'uuid') {
      return bot.uuid;
    } else if (object.name == 'username') {
      return bot.username;
    }
  }

  getPacket (packet) {
    if (packet.name == 'chat') {
      if (packet.message == packet.message) {
        return bot.write('chat', { message: packet.message });
      }
    } else if (packet.name == 'setCommandBlock') {
      let e;

      if (packet.location == packet.location) {
        e = bot.write('update_command_block', { location: packet.location });

        if (packet.command == packet.command) {
          e = bot.write('update_command_block', { location: packet.location, command: packet.command });

          if (packet.flags == packet.flags) {
            e = bot.write('update_command_block', { location: packet.location, command: packet.command, flags: packet.flags });

            if (packet.mode == packet.mode) {
              e = bot.write('update_command_block', { location: packet.location, command: packet.command, flags: packet.flags, mode: packet.mode });
            }
          }
        }
      }
    } else if (packet.name == 'createConsoleMessage') {
      if (packet.message == packet.message) {
        return console.log('There is a message: ' + packet.message);
      }
    }
  }
}

module.exports = { Bot }
