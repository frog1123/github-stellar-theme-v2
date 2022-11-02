declare namespace chrome.storage {
  export let sync: {
    get: <T = { [key: string]: any }>(
      keys:
        | string
        | string[]
        | {
            [key: string]: any;
          }
        | null,
      callback: (items: T) => void
    ) => void;
  };
}
