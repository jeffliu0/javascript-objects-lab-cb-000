var recipes = { foo: "bar"}

function updateObjectWithKeyAndValue(object, key, value)
{
  var newobj = object[key] = value
  return newobj
}
