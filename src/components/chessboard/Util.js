export function uniques (arr) {
  let uniqueArray = arr.filter(function (elem, index, self) {
    return index === self.indexOf(elem)
  })
  return uniqueArray
}
