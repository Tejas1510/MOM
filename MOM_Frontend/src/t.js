function genships(n) {
    var ships = [];
    for (var i = 0; i < n; i = i + 1) {
        var width = n + 1;
        var starting = n / 2;
        var x = Math.floor(Math.random() * (width) - (starting));
        var y = Math.floor(Math.random() * (width) - (starting));
        ships.push([x, y]);
    }

    return ships;
}

function distance(p1, p2) {
    return Math.sqrt(Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2));
}

function merge(p, i, k, j, index) {
    var result = [];
    var length = 0;

    //position counters
    var c1 = i;
    var c2 = k;

    for (var l = 0; l < i; l = l + 1) {
        //result.push(p[l]);
        result[length++] = p[l];
    }

    while (c1 < k || c2 < j) {
        if (c1 < k && c2 < j) {
            if (p[c1][index] < p[c2][index]) {
                //result.push(p[c1]);
                result[length++] = p[c1];
                c1 = c1 + 1;
            } else {
                //result.push(p[c2]);
                result[length++] = p[c2];
                c2 = c2 + 1;
            }
        } else if (c1 < k) {
            //result.push(p[c1]);
            result[length++] = p[c1];
            c1 = c1 + 1;
        } else if (c2 < j) {
            //result.push(p[c2]);
            result[length++] = p[c2];
            c2 = c2 + 1;
        }
    }

    for (l = j; l < p.length; l = l + 1) {
        //result.push(p[l]);
        result[length++] = p[l];
    }

    return result;
}

/**
 * dac compares every point in the list with the other
 * ships to find the shortest distance between the ships
 *
 * PRE:  There are at least two ships in the array
 *
 * @param {array} ships:  2d array of ships [[x,y], [x,y]]
 *
 * @returns {object} An object containing the ships and their distance
 */
dac = function(ships) {

    /**
     * function dacHelper is the recursive function that applies the divide
     * and conquer algorithm
     *
     * PRE: the array is SORTED BY X-COORDINATE
     *
     * @param {array} p: the array of ships
     * @param i: index of the first item in the array to find closest pair
     * @param j: index of the first item in the array to NOT find closet pair
     *
     * @returns {object} An object containing the ships and their distance
     */

    function dacHelper(i, j) {

        if (j - i <= 3) {
            if (j - i === 2) {
                //only two ships
                var x = ships[i];
                var y = ships[j - 1];
                //sort them by y-coord
                if (x[1] > y[1]) {
                    var temp = x;
                    ships[i] = y;
                    ships[j - 1] = temp;
                }

                //return the ships
                return distance(x, y);
            } else {
                //we have three ships
                var x = ships[i];
                var y = ships[i + 1];
                var z = ships[j - 1];

                //sort them by y-coord
                if (x[1] > y[1]) {
                    var temp = x;
                    if (y[1] > z[1]) {
                        ships[i] = z;
                        ships[j - 1] = temp;
                    } else {
                        if (temp[1] > z[1]) {
                            ships[i] = y;
                            ships[i + 1] = z;
                            ships[j - 1] = temp
                        } else {
                            ships[i] = y;
                            ships[i + 1] = temp;
                        }
                    }
                } else {
                    if (y[1] > z[1]) {
                        var temp = z;
                        ships[j - 1] = y;
                        if (x[1] > temp[1]) {
                            ships[i + 1] = x;
                            ships[i] = temp;
                        } else {
                            ships[i + 1] = temp;
                        }
                    }
                }


                //find the closest pair
                //first get distances
                var d12 = distance(x, y);
                var d13 = distance(x, z);
                var d23 = distance(y, z);

                var min = Math.min(d12, d13, d23);

                //return the correct pair of ships
                if (min === d12) {
                    return d12;
                } else if (min == d13) {
                    return d13;
                } else {
                    return d23;
                }
            }
        } else {
            // let k be the midpoint of the ships we're looking at
            var k = parseInt((i + j) / 2);

            // find closest pair left
            var deltaL = dacHelper(i, k);

            //find closest pair right
            var deltaR = dacHelper(k, j);

            // delta = min(deltaL, deltaR)
            if (deltaL < deltaR) {
                var delta = deltaL;
            } else {
                var delta = deltaR;
            }

            //merge left and right ships by y-coord
            ships = merge(ships, i, k, j, 1);

            //create a vertical strip of ships in temporary array
            var tempArray = [];
            var x = ships[k - 1][0]
            for (var l = 0, len = ships.length; l < len; l = l + 1) {
                if (Math.abs(x - ships[l][0]) <= delta) {
                    //tempArray.push(ships[l]);
                    tempArray[tempArray.length] = ships[l];
                }
            }

            //compare each point in vertical strip (temp array) w/ next
            //seven ships.  If distance < delta, then delta = distance
            for (l = 0, len = tempArray.length; l < len; l = l + 1) {
                var x = tempArray[l];
                for (var m = l + 1; m <= l + 7 && m < len; m = m + 1) {
                    var y = tempArray[m];
                    var temp = distance(y, x);
                    if (temp < delta) {
                        delta = temp;
                    }
                }
            }

            return delta;
        }

    }

    ships.sort(function(a, b) {
        return a[0] - b[0];
    });

    return dacHelper(0, ships.length);

}
var table = genships(16000);
var d = (new Date()).getTime();
var result = dac(table);
var time = (new Date()).getTime() - d;
document.write(time);