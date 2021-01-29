function search(array, searchvalue) {
  // implement this
  var thing = -1;
  for (i in array) {
    if ((i = searchvalue)) {
      thing = i - 1;
    }
  }
  return thing;
}

function isPalindrome(value) {
  var new_thing = "";
  //for (let c of value) {
  for (var i = value.length - 1; i >= 0; i--) {
    new_thing += value[i];
  }

  if (value === new_thing) {
    return true;
  } else {
    return false;
  }
}

module.exports = isPalindrome;
