var types = {
  "string": function (val) {
    return typeof val === "string";
  },
  "number": function (val) {
    return typeof val === "number";
  },
  "boolean": function (val) {
    return typeof val === "boolean";
  },
  "object": function (val) {
    return typeof val === "object";
  },
  "any": function (val) {
    return true;
  }
};

module['exports'] = types;