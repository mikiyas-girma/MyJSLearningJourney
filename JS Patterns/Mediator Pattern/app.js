

// Using  Mediator Pattern to create very simple chating app

const User = function() {
  this.name = name;
  this.chatroom = null;
}

User.prototype = {
  send: function(message, to) {
    this.chatroom.send(message, this, to);
  },
  receive: function(message, from) {
    console.log(`${from.name} to ${this.name}: ${message}`);
  }
}

const Chatroom = function() {
  let users = {}; // list of users

  return {
    register: function(user) {
      users[user.name] = user;
      user.chatroom = this;
    },

    send: function(message, from, to) {
      if(to) {
        // Single user message
        to.recieve(message, from);
      } else {
        // to all users message
        for(key in users) {
          // checking so that can't send to himself
          if(users[key] !== from) {
            users[key].recieve(message, from);
          }
        }
      }
    }
  }
}

const mikias = new User('Mikias');
const melaku = new User('Melaku');
const kuma = new User('Kuma');

const chatroom = new Chatroom();

chatroom.register(melaku);
chatroom.register(mikias);
chatroom.register(kuma);

mikias.send('Hello melaku', melaku);
kuma.send('Hello Brad, you are the best dev ever!', mikias);
melaku.send('Hello Everyone!!!!');