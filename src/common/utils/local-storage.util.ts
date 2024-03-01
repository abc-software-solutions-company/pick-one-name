const isBrowser = typeof window !== 'undefined';
const storage = isBrowser ? window.localStorage : undefined;
export const getLocal = (key: string) => JSON.parse(storage?.getItem(key) || '{}') as unknown;
export const setLocal = (key: string, value: unknown) => storage?.setItem(key, JSON.stringify(value));
export const removeLocal = (key: string) => storage?.removeItem(key);
export const removeAll = () => storage?.clear();
