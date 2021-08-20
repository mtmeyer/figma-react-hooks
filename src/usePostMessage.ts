export default function usePostMessage(data: any, origin = '*'): void {
  parent.postMessage({ pluginMessage: data }, origin);
}
