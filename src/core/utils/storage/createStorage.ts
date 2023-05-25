
type storageType = 'local' | 'session'

export function createStorage<T extends Storage>(storageType: storageType, storageOptions?: Partial<T>): T {
  let storage: T;

  if (storageType === 'local') {
    storage = localStorage as T;
  } else if (storageType === 'session') {
    storage = sessionStorage as T;
  } else {
    throw new Error(`Invalid storage type: ${storageType}`);
  }

  return storage

//   return {
//     getItem(key: string): string | null {
//       return storage.getItem(key);
//     },
//     setItem(key: string, value: string): void {
//       storage.setItem(key, value);
//     },
//     removeItem(key: string): void {
//       storage.removeItem(key);
//     },
//     clear(): void {
//       storage.clear();
//     },
//     ...storageOptions,
//   };
}


console.log(createStorage('local'));