var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  var obj = { prop: 1 };
   return Object.assign({}, obj, { prop2: 2 })
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
    var obj = { prop: 1 }
    return obj

destructivelyUpdateObjectWithKeyAndValue(obj, 'prop2', 2)
}
function deleteFromObjectByKey(object, key) {
  var obj = { prop: 1 }
  var newObj = Object.assign({}, obj)
  delete newObj.prop
}
function destructivelyDeleteFromObjectByKey(object, key) {
  var obj = { prop: 1 }
  var newObj = return Object.as

}