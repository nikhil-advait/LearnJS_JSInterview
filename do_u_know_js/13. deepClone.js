//Write a deepClone function such that it clone whatever data type is given to it deeply.


function deepClone(data) {

  if (Array.isArray(data)) {
    return data.map(function (el) {
      return deepClone(el);
    });
  }

  if (typeof data === "object") {
    var retObj = {};
    Object.keys(data).forEach(function (key) {
      retObj[key] = deepClone(data[key]);
    });
    return retObj;
  }

  return data;

};