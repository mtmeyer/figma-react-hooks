export default function usePostMessage(object: any, options = '*'): void {
  parent.postMessage({ pluginMessage: object }, options);
}
