module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    //throw 'Not implemented';
    let turns = (2 ^ disksNumber) - 1;
    let seconds = turnsSpeed / 3600;
    let obj = new Object();
        obj.turns = turns;
        obj.seconds = seconds;

    return obj;
}