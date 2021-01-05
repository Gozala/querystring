type decodeFuncType = (
  qs?: string,
  sep?: string,
  eq?: string,
  options?: {
    decodeURIComponent?: Function;
    maxKeys?: number;
  }
) => Record<any, unknown>;

type encodeFuncType = (obj?: Record<any, unknown>, sep?: string, eq?: string, name?: any) => string;

export const decode: decodeFuncType;
export const parse: decodeFuncType;

export const encode: encodeFuncType;
export const stringify: encodeFuncType;
