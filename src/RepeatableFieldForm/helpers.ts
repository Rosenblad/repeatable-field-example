export function hasChanged<A, B>(o1: A, o2: B): boolean {
  return Object.entries(o1).some(
    ([key, value]) => o2[key as keyof B] !== value
  );
}
