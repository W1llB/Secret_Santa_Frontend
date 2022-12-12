import { useState } from "react";
// let finalGroup = [
//     { 
//     gname: 'asdf', 
//     deadline: '2022-12-15', 
//     budget: '10'
//     },
//     {
//     0: 'bob',
//     1: 'dave',
//     2: 'pete', 
//     3: 'brian',
//     4: 'keith'
//     }
// ]

function useRandomiser(initialValue, giftGivers){
    const [pairArrays, setPairArrays] = useState(initialValue)
    function pairRandomiser(giftGiversObject) {
        let giftGivers = Object.values(giftGiversObject)
        var a = giftGivers.slice(0);
        var b = giftGivers.slice(0);
        var result = [];
        while (a.length > 1) {
            var i = extractRandomElement(a);
            var j = extractRandomElement(b);

            while (i===j) {
                b.push(j);
                j = extractRandomElement(b);
            }
            result.push({ a:i, b:j });
        }
        if (a[0] === b[0]) {
            result.push({ a:a[0], b:result[0].b });
            result[0].b = a[0];
        } else {
            result.push({ a:a[0], b:b[0] });
        }

        setPairArrays(result)
    }
    return [pairArrays, pairRandomiser]
}


function extractRandomElement(array) {
    return array.splice(Math.floor(Math.random()*array.length),1)[0];
    }

export default useRandomiser;