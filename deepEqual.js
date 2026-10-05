function deepEqual(objA, objB) {
  if (objA === objB) return true;

  if (
    typeof objA !== "object" ||
    typeof objB !== "object" ||
    objA === null ||
    objB === null
  )
    return false;

  if (Array.isArray(objA) !== Array.isArray(objB)) return false;

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) return false;

  return keysA.every(
    (key) => Object.hasOwn(objB, key) && deepEqual(objA[key], objB[key]),
  );
}
