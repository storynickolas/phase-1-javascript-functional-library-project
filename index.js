function myEach(data, test) {
  for(let x of Object.values(data)) { 
    test(x)
  }
  return data
}

function myMap(data, test) {
  let newArr = []
  for(let x of Object.values(data)) {
    newArr.push(test(x))
  }
  return newArr
}

function myReduce(collection, callback, acc) {
  let newCollect = Object.values(collection)
  let myAcc = acc
  if(typeof myAcc !== "number") {
    myAcc = newCollect[0]
    newCollect=newCollect.slice(1,newCollect.length)
  }
  
  for(let x of newCollect) {
    myAcc = callback(myAcc, x, newCollect)
  }
  return myAcc
}

function myFind(collection, predicate) {
  let answer 
  for(let x of Object.values(collection)) {
    if(predicate(x)) {
      answer = x
      break
    }
  }
  return answer
}

function myFilter(collection, predicate) {
  let answer = []
  for(let x of Object.values(collection)) {
    if(predicate(x)) {
      answer.push(x)
    }
  }
  return answer
}

function mySize(collection) {
  return Object.values(collection).length
}

function myFirst(array, n=1) {
  return n === 1 ? array[0] : array.slice(0,n)
}

function myLast(array, n) {
  return n === undefined ? array[array.length - 1] : array.slice(-n)
}

function myKeys(object) {
  return Object.keys(object)
}

function myValues(object) {
  return Object.values(object)
}
