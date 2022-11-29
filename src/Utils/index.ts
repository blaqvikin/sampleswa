export * from "./data";
export function detectBrowser() {
  const agent = window.navigator.userAgent.toLowerCase();
  switch (true) {
    case agent.indexOf("edge") > -1:
      return "MS Edge";
    case agent.indexOf("edg/") > -1:
      return "Edge ( chromium based)";
    // @ts-ignore
    case agent.indexOf("opr") > -1 && !!window.opr:
      return "Opera";
    // @ts-ignore
    case agent.indexOf("chrome") > -1 && !!window.chrome:
      return "Chrome";
    case agent.indexOf("trident") > -1:
      return "MS IE";
    case agent.indexOf("firefox") > -1:
      return "Mozilla Firefox";
    case agent.indexOf("safari") > -1:
      return "Safari";
    default:
      return "other";
  }
}

export const splitArrayIntoSections = <T>(arr: T[], count: number) => {
  const arrayLength =
    Math.floor(arr.length / count) + (arr.length % count !== 0 ? 1 : 0);
  const splittedArray = new Array(arrayLength)
    .fill(1)
    .map((_, i) => arr.slice(i * count, i * count + count));
  return splittedArray;
};

export const debounce = <T extends Function>(
  func: T,
  timeOut: number = 300
) => {
  let timeout: NodeJS.Timeout;
  const callable = (...args: any[]) => {
    const later = () => {
      func(...args);
      console.log("later");
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, timeOut);
  };

  return callable as unknown as T;
};
