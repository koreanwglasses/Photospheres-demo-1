import { PathReporter } from "io-ts/lib/PathReporter";
import { isRight } from "fp-ts/lib/Either";
import * as t from "io-ts";

/**
 * Validates an object against a given io-ts type. Returns an error object if
 * validation fails.
 * @param type An io-ts type
 * @param value An object to validate
 * @param throwError Option to throw an error if validation fails. False by default.
 */
export function validate<A>(
  type: t.Type<A>,
  value: unknown,
  throwError = false
): Error | undefined {
  const result = type.decode(value);
  if (isRight(result)) {
    return;
  }

  const error = new Error(PathReporter.report(result).join("\n"));

  if (throwError) {
    throw error;
  }

  return error;
}

export function keyByPrefix<T>(obj: { [key: string]: T }, prefix: string): T {
  const matches = Object.keys(obj).filter(key => key.startsWith(prefix));

  if (matches.length == 0) {
    throw new Error(`no matches found for "${prefix}"`);
  }

  if (matches.length > 1) {
    throw new Error(
      `multiple matches found for "${prefix}": ${matches.join(", ")}`
    );
  }

  return obj[matches[0]];
}

/**
 * Cosntructs a memoized instance of f
 */
export function memoize<P extends Array<any>, R>(
  f: (...args: P) => R,
  hash: (...args: P) => string | number
): (...args: P) => R {
  const memo: { [key: string]: R } = {};
  return (...args): R => {
    const key = hash(...args);
    if (!(key in memo)) memo[key] = f(...args);
    return memo[key];
  };
}
