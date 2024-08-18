class EventEmitter {
    constructor(){
        this.event = {};
    }
    subscribe = (...arg) => {
      if(!arg || arg.length !== 2) throw new Error("invalid parameter"); 
      const key = arg[0];
      const func = arg[1];
      this.event[key] = func;
    }
    unsubscribe = (arg) => {
      if(!arg) throw new Error("invalid key");
      if(Object.keys(this.event).indexOf(arg) === -1) throw new Error("key not found");
      const filteredEvent = {};
      Object.keys(this.event).forEach((evn) => {
          if(evn !== arg[0]) filteredEvent[evn] = this.event[evn];
      })
      this.event = {...this.filteredEvent}
    }
    
    emit = (...arg) => {
        if(!arg || arg.length < 1) throw new Error("invalid key");
        if(Object.keys(this.event).indexOf(arg[0]) === -1) throw new Error("key not found");
        return this.event[arg[0]].call(null,...arg.slice(1));
    }
}
const eventEmitter = new EventEmitter();
const show = (data) => {
   console.log("event result: ", data);
}
const sum = (...data) => {
    return data.reduce((d,n) => d+n, 0);
}

eventEmitter.subscribe("f1", show);
eventEmitter.emit("f1", "I am event!","event2");
eventEmitter.subscribe("f2", sum);
console.log(eventEmitter.emit("f2", 1, 2, 3, 4, 5))
eventEmitter.unsubscribe("f1")
eventEmitter.emit("f1", "I am subscribed!"); // key not found...
