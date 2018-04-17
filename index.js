var recipes = { foo: "bar"}

function updateObjectWithKeyAndValue(object, key, value)
{
  var newobj = Object.assign({}, obj)
  newObj[key] = value
  return newobj
}
