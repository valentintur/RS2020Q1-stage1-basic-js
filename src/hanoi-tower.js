module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    //throw 'Not implemented';
    let turns = (2 ** disksNumber) - 1;
    let turnsPerSeconds = turnsSpeed / 3600;
    let seconds = turns / turnsPerSeconds;
    let obj = new Object();
        obj.turns = turns;
        obj.seconds = seconds;

    return obj;
}