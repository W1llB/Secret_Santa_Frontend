let people = ['John', 'Jane', 'Harry', 'Mark', 'Steph']

var pairs = [];

for(let i = 0; i<people.length; i++){
    for(let j = i+1; j<people.length; j++){
    pairs.push([people[i], people[j]])
    }    
}

while(pairs.length){
    let pair = Math.floor(Math.random() * pairs.length)
    let temp = pairs.splice(pair,1);
    if(Math.floor(Math.random()*2)) temp[0].reverse()//<-- pair order
    console.log(temp)
    // console.log(temp[0].join(" - "))
}