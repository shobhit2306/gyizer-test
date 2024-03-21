function findChairs(rooms, reqCount) {
    let chairsArr = [];
    let totalChairs = 0;

    for (let i = 0; i < rooms.length; i++) {
        let room = rooms[i];
        let occupiedChairs = room[0].length;
        let chairs = room[1];

        let spareChairs = chairs - occupiedChairs;
        if (spareChairs >= 0) {
            if (totalChairs + spareChairs <= reqCount) {
                totalChairs += spareChairs;
                chairsArr.push(spareChairs);
            }
        }
        if(totalChairs==reqCount){
            break;
        }
    }
    if (totalChairs < reqCount) {
        return [0];
    }
    return chairsArr;
}

const rooms = [['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9], ['XXX', 2]];
const reqCount = 4;
const result = findChairs(rooms, reqCount);
console.log(result);
