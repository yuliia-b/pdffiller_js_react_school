"use strict";

class Emitter {
  constructor() {
    this.events = {};
  }

  on(event, handler) {
    this.events[event] = this.events[event] || [];
    this.events[event].push(handler);
  }

  emit(event, data) {
    this.events[event]
      ? this.events[event].forEach(handler => handler(data))
      : console.log("You havent handlers function");
  }
}

const emitter = new Emitter();

emitter.on("connect", data => {
  console.log("We have been connected to", data);
});

emitter.on("disconnect", data => {
  console.log("We disconnected from", data);
});

emitter.emit("connect", "http-server");
emitter.emit("connect", "websocket");

emitter.emit("disconnect", "websocket");
emitter.emit("disconnect", "http-server");
