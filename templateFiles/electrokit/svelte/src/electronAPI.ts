export declare const greet: (name?: string) => Promise<string> // ALWAYS have as promise; IPC is asynchronous!!!
export type electronAPI = {
  greet: typeof greet,
}

// @ts-ignore export typed window.electronAPI - see preload.ts
export default window.electronAPI as electronAPI