function deepEqualObject(val1, val2) {
  if (typeof val1 !== 'object' || typeof val2 !== 'object') {
    return val1 === val2;
  } 
  else if (val1.length !== val2.length) {
    return false
  }
  else {
    for (let key in val1) {
      if (!deepEqualObject(val1[key], val2[key])) {
        return false;
      }
    }
  }
  return true;
}

console.log(
  deepEqualObject(
    { a: null, b: 2, test: [1, 2, 3], obj: { test: '12' } },
    { a: undefined, b: 2, test: [1, 2, 3], obj: { test: '12' } }
  )
);

