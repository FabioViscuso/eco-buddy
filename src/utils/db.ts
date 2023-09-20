// TODO: need to tighten up the types here
import Dexie from 'dexie';

const db: any = new Dexie('appDatabase');

db.version(1).stores({
  appState: 'name',
});

export const dbInterface = {
  getItem: async (name: string) => {
    const record = await db.appState.get({ name });
    return record ? record.value : null;
  },
  setItem: async (name: string, value: any) => {
    await db.appState.put({ name, value });
  },
  removeItem: async (name: string) => {
    await db.appState.delete(name);
  },
};
