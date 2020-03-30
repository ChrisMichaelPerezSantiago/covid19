const renameKey = (obj, old_key, new_key) => {
  if (old_key !== new_key) {
    Object.defineProperty(obj, new_key,
      Object.getOwnPropertyDescriptor(obj, old_key));
    delete obj[old_key];
  }
};

module.exports = {
  renameKey
};