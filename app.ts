import * as five from 'johnny-five';
const board = new five.Board({ port: "COM3" });

board.on("ready", function() {

    let relay = new five.Relay(10);
    relay.toggle();

    this.repl.inject({
        relay: relay

    });
});