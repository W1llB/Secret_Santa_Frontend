import { useEffect, useState } from "react";

function useRandomiser(giftGiversObject) {
  const [pairArrays, setPairArrays] = useState(null);
  useEffect(() => {
    try {
      let giftGivers = Object.values(giftGiversObject);
      var a = giftGivers.slice(0);
      var b = giftGivers.slice(0);
      var result = [];
      while (a.length > 1) {
        var i = extractRandomElement(a);
        var j = extractRandomElement(b);

        while (i === j) {
          b.push(j);
          j = extractRandomElement(b);
        }
        result.push({ a: i, b: j });
      }
      if (a[0] === b[0]) {
        result.push({ a: a[0], b: result[0].b });
        result[0].b = a[0];
      } else {
        result.push({ a: a[0], b: b[0] });
      }

      setPairArrays(result);
    } catch (error) {
      console.log(error);
    }
  }, [giftGiversObject]);

  return [pairArrays];
}

function extractRandomElement(array) {
  return array.splice(Math.floor(Math.random() * array.length), 1)[0];
}

export default useRandomiser;
