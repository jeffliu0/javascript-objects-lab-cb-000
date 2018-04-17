var recipes = { foo: "bar"}

function updateObjectWithKeyAndValue(object, key, value)
{
  var newobj = Object.assign({}, object)
  newObj[key] = value
  return object
}
