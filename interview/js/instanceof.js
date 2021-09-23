function instance_of(L, R) {
  const baseType = [
    "string",
    "null",
    "number",
    "boolean",
    "sybmol",
    "undefined",
    "bigint",
  ];
  if (baseType.includes(typeof L)) {
    return false;
  }

  let RP = R.prototype;
  L = L.__proto__;
  while (true) {
    if (L === null) {
      return false;
    }
    if (L === RP) {
      return true;
    }
    L = L.__proto__;
  }
}

console.log(instance_of([1, 2, 3], Function));
