function diffObjects(oldObj, newObj) {
  const result = { added: {}, removed: {}, changed: {} };

  for (const key of Object.keys(newObj)) {
    if (!Object.hasOwn(oldObj, key)) {
      result.added[key] = newObj[key];
    } else if (oldObj[key] !== newObj[key]) {
      result.changed[key] = { from: oldObj[key], to: newObj[key] };
    }
  }

  for (const key of Object.keys(oldObj)) {
    if (!Object.hasOwn(newObj, key)) {
      result.removed[key] = oldObj[key];
    }
  }

  return result;
}
