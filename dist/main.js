/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/fp-ts/es6/ChainRec.js":
/*!********************************************!*\
  !*** ./node_modules/fp-ts/es6/ChainRec.js ***!
  \********************************************/
/*! exports provided: tailRec */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tailRec", function() { return tailRec; });
/**
 * @since 2.0.0
 */
function tailRec(a, f) {
    var v = f(a);
    while (v._tag === 'Left') {
        v = f(v.left);
    }
    return v.right;
}


/***/ }),

/***/ "./node_modules/fp-ts/es6/Either.js":
/*!******************************************!*\
  !*** ./node_modules/fp-ts/es6/Either.js ***!
  \******************************************/
/*! exports provided: URI, left, right, fromNullable, toError, tryCatch, fold, getShow, getEq, getSemigroup, getApplySemigroup, getApplyMonoid, isLeft, isRight, swap, orElse, getOrElse, elem, exists, parseJSON, stringifyJSON, getWitherable, getValidation, getValidationSemigroup, getValidationMonoid, either, alt, ap, apFirst, apSecond, bimap, chain, chainFirst, duplicate, extend, flatten, foldMap, map, mapLeft, reduce, reduceRight, fromOption, fromPredicate, filterOrElse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URI", function() { return URI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "left", function() { return left; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "right", function() { return right; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromNullable", function() { return fromNullable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toError", function() { return toError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryCatch", function() { return tryCatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fold", function() { return fold; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getShow", function() { return getShow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEq", function() { return getEq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSemigroup", function() { return getSemigroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getApplySemigroup", function() { return getApplySemigroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getApplyMonoid", function() { return getApplyMonoid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLeft", function() { return isLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRight", function() { return isRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "swap", function() { return swap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orElse", function() { return orElse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrElse", function() { return getOrElse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elem", function() { return elem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exists", function() { return exists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseJSON", function() { return parseJSON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringifyJSON", function() { return stringifyJSON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWitherable", function() { return getWitherable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValidation", function() { return getValidation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValidationSemigroup", function() { return getValidationSemigroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValidationMonoid", function() { return getValidationMonoid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "either", function() { return either; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alt", function() { return alt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ap", function() { return ap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apFirst", function() { return apFirst; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apSecond", function() { return apSecond; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bimap", function() { return bimap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chain", function() { return chain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chainFirst", function() { return chainFirst; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "duplicate", function() { return duplicate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flatten", function() { return flatten; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "foldMap", function() { return foldMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapLeft", function() { return mapLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reduce", function() { return reduce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reduceRight", function() { return reduceRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromOption", function() { return fromOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromPredicate", function() { return fromPredicate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterOrElse", function() { return filterOrElse; });
/* harmony import */ var _ChainRec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChainRec */ "./node_modules/fp-ts/es6/ChainRec.js");
/* harmony import */ var _pipeable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pipeable */ "./node_modules/fp-ts/es6/pipeable.js");
/**
 * Represents a value of one of two possible types (a disjoint union).
 *
 * An instance of `Either` is either an instance of `Left` or `Right`.
 *
 * A common use of `Either` is as an alternative to `Option` for dealing with possible missing values. In this usage,
 * `None` is replaced with a `Left` which can contain useful information. `Right` takes the place of `Some`. Convention
 * dictates that `Left` is used for failure and `Right` is used for success.
 *
 * For example, you could use `Either<string, number>` to detect whether a received input is a `string` or a `number`.
 *
 * ```ts
 * import { Either, left, right } from 'fp-ts/lib/Either'
 *
 * function parse(input: string): Either<Error, number> {
 *   const n = parseInt(input, 10)
 *   return isNaN(n) ? left(new Error('not a number')) : right(n)
 * }
 * ```
 *
 * `Either` is right-biased, which means that `Right` is assumed to be the default case to operate on. If it is `Left`,
 * operations like `map`, `chain`, ... return the `Left` value unchanged:
 *
 * ```ts
 * import { map, left, right } from 'fp-ts/lib/Either'
 * import { pipe } from 'fp-ts/lib/pipeable'
 *
 * pipe(right(12), map(double)) // right(24)
 * pipe(left(23), map(double))  // left(23)
 * ```
 *
 * @since 2.0.0
 */
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};


/**
 * @since 2.0.0
 */
var URI = 'Either';
/**
 * Constructs a new `Either` holding a `Left` value. This usually represents a failure, due to the right-bias of this
 * structure
 *
 * @since 2.0.0
 */
function left(e) {
    return { _tag: 'Left', left: e };
}
/**
 * Constructs a new `Either` holding a `Right` value. This usually represents a successful value due to the right bias
 * of this structure
 *
 * @since 2.0.0
 */
function right(a) {
    return { _tag: 'Right', right: a };
}
/**
 * Takes a default and a nullable value, if the value is not nully, turn it into a `Right`, if the value is nully use
 * the provided default as a `Left`
 *
 * @example
 * import { fromNullable, left, right } from 'fp-ts/lib/Either'
 *
 * const parse = fromNullable('nully')
 *
 * assert.deepStrictEqual(parse(1), right(1))
 * assert.deepStrictEqual(parse(null), left('nully'))
 *
 * @since 2.0.0
 */
function fromNullable(e) {
    return function (a) { return (a == null ? left(e) : right(a)); };
}
/**
 * Default value for the `onError` argument of `tryCatch`
 *
 * @since 2.0.0
 */
function toError(e) {
    return e instanceof Error ? e : new Error(String(e));
}
/**
 * Constructs a new `Either` from a function that might throw
 *
 * @example
 * import { Either, left, right, tryCatch } from 'fp-ts/lib/Either'
 *
 * const unsafeHead = <A>(as: Array<A>): A => {
 *   if (as.length > 0) {
 *     return as[0]
 *   } else {
 *     throw new Error('empty array')
 *   }
 * }
 *
 * const head = <A>(as: Array<A>): Either<Error, A> => {
 *   return tryCatch(() => unsafeHead(as), e => (e instanceof Error ? e : new Error('unknown error')))
 * }
 *
 * assert.deepStrictEqual(head([]), left(new Error('empty array')))
 * assert.deepStrictEqual(head([1, 2, 3]), right(1))
 *
 * @since 2.0.0
 */
function tryCatch(f, onError) {
    try {
        return right(f());
    }
    catch (e) {
        return left(onError(e));
    }
}
/**
 * Takes two functions and an `Either` value, if the value is a `Left` the inner value is applied to the first function,
 * if the value is a `Right` the inner value is applied to the second function.
 *
 * @example
 * import { fold, left, right } from 'fp-ts/lib/Either'
 * import { pipe } from 'fp-ts/lib/pipeable'
 *
 * function onLeft(errors: Array<string>): string {
 *   return `Errors: ${errors.join(', ')}`
 * }
 *
 * function onRight(value: number): string {
 *   return `Ok: ${value}`
 * }
 *
 * assert.strictEqual(
 *   pipe(
 *     right(1),
 *     fold(onLeft, onRight)
 *   ),
 *   'Ok: 1'
 * )
 * assert.strictEqual(
 *   pipe(
 *     left(['error 1', 'error 2']),
 *     fold(onLeft, onRight)
 *   ),
 *   'Errors: error 1, error 2'
 * )
 *
 * @since 2.0.0
 */
function fold(onLeft, onRight) {
    return function (ma) { return (isLeft(ma) ? onLeft(ma.left) : onRight(ma.right)); };
}
/**
 * @since 2.0.0
 */
function getShow(SE, SA) {
    return {
        show: function (ma) { return (isLeft(ma) ? "left(" + SE.show(ma.left) + ")" : "right(" + SA.show(ma.right) + ")"); }
    };
}
/**
 * @since 2.0.0
 */
function getEq(EL, EA) {
    return {
        equals: function (x, y) {
            return x === y || (isLeft(x) ? isLeft(y) && EL.equals(x.left, y.left) : isRight(y) && EA.equals(x.right, y.right));
        }
    };
}
/**
 * Semigroup returning the left-most non-`Left` value. If both operands are `Right`s then the inner values are
 * appended using the provided `Semigroup`
 *
 * @example
 * import { getSemigroup, left, right } from 'fp-ts/lib/Either'
 * import { semigroupSum } from 'fp-ts/lib/Semigroup'
 *
 * const S = getSemigroup<string, number>(semigroupSum)
 * assert.deepStrictEqual(S.concat(left('a'), left('b')), left('a'))
 * assert.deepStrictEqual(S.concat(left('a'), right(2)), right(2))
 * assert.deepStrictEqual(S.concat(right(1), left('b')), right(1))
 * assert.deepStrictEqual(S.concat(right(1), right(2)), right(3))
 *
 *
 * @since 2.0.0
 */
function getSemigroup(S) {
    return {
        concat: function (x, y) { return (isLeft(y) ? x : isLeft(x) ? y : right(S.concat(x.right, y.right))); }
    };
}
/**
 * `Apply` semigroup
 *
 * @example
 * import { getApplySemigroup, left, right } from 'fp-ts/lib/Either'
 * import { semigroupSum } from 'fp-ts/lib/Semigroup'
 *
 * const S = getApplySemigroup<string, number>(semigroupSum)
 * assert.deepStrictEqual(S.concat(left('a'), left('b')), left('a'))
 * assert.deepStrictEqual(S.concat(left('a'), right(2)), left('a'))
 * assert.deepStrictEqual(S.concat(right(1), left('b')), left('b'))
 * assert.deepStrictEqual(S.concat(right(1), right(2)), right(3))
 *
 *
 * @since 2.0.0
 */
function getApplySemigroup(S) {
    return {
        concat: function (x, y) { return (isLeft(x) ? x : isLeft(y) ? y : right(S.concat(x.right, y.right))); }
    };
}
/**
 * @since 2.0.0
 */
function getApplyMonoid(M) {
    return __assign(__assign({}, getApplySemigroup(M)), { empty: right(M.empty) });
}
/**
 * Returns `true` if the either is an instance of `Left`, `false` otherwise
 *
 * @since 2.0.0
 */
function isLeft(ma) {
    switch (ma._tag) {
        case 'Left':
            return true;
        case 'Right':
            return false;
    }
}
/**
 * Returns `true` if the either is an instance of `Right`, `false` otherwise
 *
 * @since 2.0.0
 */
function isRight(ma) {
    return isLeft(ma) ? false : true;
}
/**
 * @since 2.0.0
 */
function swap(ma) {
    return isLeft(ma) ? right(ma.left) : left(ma.right);
}
/**
 * @since 2.0.0
 */
function orElse(onLeft) {
    return function (ma) { return (isLeft(ma) ? onLeft(ma.left) : ma); };
}
/**
 * @since 2.0.0
 */
function getOrElse(onLeft) {
    return function (ma) { return (isLeft(ma) ? onLeft(ma.left) : ma.right); };
}
/**
 * @since 2.0.0
 */
function elem(E) {
    return function (a, ma) { return (isLeft(ma) ? false : E.equals(a, ma.right)); };
}
/**
 * Returns `false` if `Left` or returns the result of the application of the given predicate to the `Right` value.
 *
 * @example
 * import { exists, left, right } from 'fp-ts/lib/Either'
 *
 * const gt2 = exists((n: number) => n > 2)
 *
 * assert.strictEqual(gt2(left('a')), false)
 * assert.strictEqual(gt2(right(1)), false)
 * assert.strictEqual(gt2(right(3)), true)
 *
 * @since 2.0.0
 */
function exists(predicate) {
    return function (ma) { return (isLeft(ma) ? false : predicate(ma.right)); };
}
/**
 * Converts a JavaScript Object Notation (JSON) string into an object.
 *
 * @example
 * import { parseJSON, toError, right, left } from 'fp-ts/lib/Either'
 *
 * assert.deepStrictEqual(parseJSON('{"a":1}', toError), right({ a: 1 }))
 * assert.deepStrictEqual(parseJSON('{"a":}', toError), left(new SyntaxError('Unexpected token } in JSON at position 5')))
 *
 * @since 2.0.0
 */
function parseJSON(s, onError) {
    return tryCatch(function () { return JSON.parse(s); }, onError);
}
/**
 * Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
 *
 * @example
 * import * as E from 'fp-ts/lib/Either'
 * import { pipe } from 'fp-ts/lib/pipeable'
 *
 * assert.deepStrictEqual(E.stringifyJSON({ a: 1 }, E.toError), E.right('{"a":1}'))
 * const circular: any = { ref: null }
 * circular.ref = circular
 * assert.deepStrictEqual(
 *   pipe(
 *     E.stringifyJSON(circular, E.toError),
 *     E.mapLeft(e => e.message.includes('Converting circular structure to JSON'))
 *   ),
 *   E.left(true)
 * )
 *
 * @since 2.0.0
 */
function stringifyJSON(u, onError) {
    return tryCatch(function () { return JSON.stringify(u); }, onError);
}
/**
 * Builds `Witherable` instance for `Either` given `Monoid` for the left side
 *
 * @since 2.0.0
 */
function getWitherable(M) {
    var empty = left(M.empty);
    var compact = function (ma) {
        return isLeft(ma) ? ma : ma.right._tag === 'None' ? left(M.empty) : right(ma.right.value);
    };
    var separate = function (ma) {
        return isLeft(ma)
            ? { left: ma, right: ma }
            : isLeft(ma.right)
                ? { left: right(ma.right.left), right: empty }
                : { left: empty, right: right(ma.right.right) };
    };
    var partitionMap = function (ma, f) {
        if (isLeft(ma)) {
            return { left: ma, right: ma };
        }
        var e = f(ma.right);
        return isLeft(e) ? { left: right(e.left), right: empty } : { left: empty, right: right(e.right) };
    };
    var partition = function (ma, p) {
        return isLeft(ma)
            ? { left: ma, right: ma }
            : p(ma.right)
                ? { left: empty, right: right(ma.right) }
                : { left: right(ma.right), right: empty };
    };
    var filterMap = function (ma, f) {
        if (isLeft(ma)) {
            return ma;
        }
        var ob = f(ma.right);
        return ob._tag === 'None' ? left(M.empty) : right(ob.value);
    };
    var filter = function (ma, predicate) {
        return isLeft(ma) ? ma : predicate(ma.right) ? ma : left(M.empty);
    };
    var wither = function (F) {
        var traverseF = either.traverse(F);
        return function (ma, f) { return F.map(traverseF(ma, f), compact); };
    };
    var wilt = function (F) {
        var traverseF = either.traverse(F);
        return function (ma, f) { return F.map(traverseF(ma, f), separate); };
    };
    return {
        URI: URI,
        _E: undefined,
        map: either.map,
        compact: compact,
        separate: separate,
        filter: filter,
        filterMap: filterMap,
        partition: partition,
        partitionMap: partitionMap,
        traverse: either.traverse,
        sequence: either.sequence,
        reduce: either.reduce,
        foldMap: either.foldMap,
        reduceRight: either.reduceRight,
        wither: wither,
        wilt: wilt
    };
}
/**
 * @since 2.0.0
 */
function getValidation(S) {
    return {
        URI: URI,
        _E: undefined,
        map: either.map,
        of: either.of,
        ap: function (mab, ma) {
            return isLeft(mab)
                ? isLeft(ma)
                    ? left(S.concat(mab.left, ma.left))
                    : mab
                : isLeft(ma)
                    ? ma
                    : right(mab.right(ma.right));
        },
        chain: either.chain,
        alt: function (fx, f) {
            if (isRight(fx)) {
                return fx;
            }
            var fy = f();
            return isLeft(fy) ? left(S.concat(fx.left, fy.left)) : fy;
        }
    };
}
/**
 * @since 2.0.0
 */
function getValidationSemigroup(SE, SA) {
    return {
        concat: function (fx, fy) {
            return isLeft(fx)
                ? isLeft(fy)
                    ? left(SE.concat(fx.left, fy.left))
                    : fx
                : isLeft(fy)
                    ? fy
                    : right(SA.concat(fx.right, fy.right));
        }
    };
}
/**
 * @since 2.0.0
 */
function getValidationMonoid(SE, SA) {
    return {
        concat: getValidationSemigroup(SE, SA).concat,
        empty: right(SA.empty)
    };
}
/**
 * @since 2.0.0
 */
var either = {
    URI: URI,
    map: function (ma, f) { return (isLeft(ma) ? ma : right(f(ma.right))); },
    of: right,
    ap: function (mab, ma) { return (isLeft(mab) ? mab : isLeft(ma) ? ma : right(mab.right(ma.right))); },
    chain: function (ma, f) { return (isLeft(ma) ? ma : f(ma.right)); },
    reduce: function (fa, b, f) { return (isLeft(fa) ? b : f(b, fa.right)); },
    foldMap: function (M) { return function (fa, f) { return (isLeft(fa) ? M.empty : f(fa.right)); }; },
    reduceRight: function (fa, b, f) { return (isLeft(fa) ? b : f(fa.right, b)); },
    traverse: function (F) { return function (ma, f) {
        return isLeft(ma) ? F.of(left(ma.left)) : F.map(f(ma.right), right);
    }; },
    sequence: function (F) { return function (ma) {
        return isLeft(ma) ? F.of(left(ma.left)) : F.map(ma.right, right);
    }; },
    bimap: function (fea, f, g) { return (isLeft(fea) ? left(f(fea.left)) : right(g(fea.right))); },
    mapLeft: function (fea, f) { return (isLeft(fea) ? left(f(fea.left)) : fea); },
    alt: function (fx, fy) { return (isLeft(fx) ? fy() : fx); },
    extend: function (wa, f) { return (isLeft(wa) ? wa : right(f(wa))); },
    chainRec: function (a, f) {
        return Object(_ChainRec__WEBPACK_IMPORTED_MODULE_0__["tailRec"])(f(a), function (e) {
            return isLeft(e) ? right(left(e.left)) : isLeft(e.right) ? left(f(e.right.left)) : right(right(e.right.right));
        });
    },
    throwError: left
};
var _a = Object(_pipeable__WEBPACK_IMPORTED_MODULE_1__["pipeable"])(either), alt = _a.alt, ap = _a.ap, apFirst = _a.apFirst, apSecond = _a.apSecond, bimap = _a.bimap, chain = _a.chain, chainFirst = _a.chainFirst, duplicate = _a.duplicate, extend = _a.extend, flatten = _a.flatten, foldMap = _a.foldMap, map = _a.map, mapLeft = _a.mapLeft, reduce = _a.reduce, reduceRight = _a.reduceRight, fromOption = _a.fromOption, fromPredicate = _a.fromPredicate, filterOrElse = _a.filterOrElse;



/***/ }),

/***/ "./node_modules/fp-ts/es6/function.js":
/*!********************************************!*\
  !*** ./node_modules/fp-ts/es6/function.js ***!
  \********************************************/
/*! exports provided: identity, unsafeCoerce, not, constant, constTrue, constFalse, constNull, constUndefined, constVoid, flip, flow, tuple, increment, decrement, absurd, tupled, untupled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unsafeCoerce", function() { return unsafeCoerce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "not", function() { return not; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "constant", function() { return constant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "constTrue", function() { return constTrue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "constFalse", function() { return constFalse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "constNull", function() { return constNull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "constUndefined", function() { return constUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "constVoid", function() { return constVoid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flip", function() { return flip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flow", function() { return flow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tuple", function() { return tuple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "increment", function() { return increment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decrement", function() { return decrement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "absurd", function() { return absurd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tupled", function() { return tupled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "untupled", function() { return untupled; });
/**
 * @since 2.0.0
 */
/**
 * @since 2.0.0
 */
function identity(a) {
    return a;
}
/**
 * @since 2.0.0
 */
var unsafeCoerce = identity;
/**
 * @since 2.0.0
 */
function not(predicate) {
    return function (a) { return !predicate(a); };
}
/**
 * @since 2.0.0
 */
function constant(a) {
    return function () { return a; };
}
/**
 * A thunk that returns always `true`
 *
 * @since 2.0.0
 */
var constTrue = function () {
    return true;
};
/**
 * A thunk that returns always `false`
 *
 * @since 2.0.0
 */
var constFalse = function () {
    return false;
};
/**
 * A thunk that returns always `null`
 *
 * @since 2.0.0
 */
var constNull = function () {
    return null;
};
/**
 * A thunk that returns always `undefined`
 *
 * @since 2.0.0
 */
var constUndefined = function () {
    return;
};
/**
 * A thunk that returns always `void`
 *
 * @since 2.0.0
 */
var constVoid = function () {
    return;
};
/**
 * Flips the order of the arguments of a function of two arguments.
 *
 * @since 2.0.0
 */
function flip(f) {
    return function (b, a) { return f(a, b); };
}
function flow(ab, bc, cd, de, ef, fg, gh, hi, ij) {
    switch (arguments.length) {
        case 1:
            return ab;
        case 2:
            return function () {
                return bc(ab.apply(this, arguments));
            };
        case 3:
            return function () {
                return cd(bc(ab.apply(this, arguments)));
            };
        case 4:
            return function () {
                return de(cd(bc(ab.apply(this, arguments))));
            };
        case 5:
            return function () {
                return ef(de(cd(bc(ab.apply(this, arguments)))));
            };
        case 6:
            return function () {
                return fg(ef(de(cd(bc(ab.apply(this, arguments))))));
            };
        case 7:
            return function () {
                return gh(fg(ef(de(cd(bc(ab.apply(this, arguments)))))));
            };
        case 8:
            return function () {
                return hi(gh(fg(ef(de(cd(bc(ab.apply(this, arguments))))))));
            };
        case 9:
            return function () {
                return ij(hi(gh(fg(ef(de(cd(bc(ab.apply(this, arguments)))))))));
            };
    }
    return;
}
/**
 * @since 2.0.0
 */
function tuple() {
    var t = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        t[_i] = arguments[_i];
    }
    return t;
}
/**
 * @since 2.0.0
 */
function increment(n) {
    return n + 1;
}
/**
 * @since 2.0.0
 */
function decrement(n) {
    return n - 1;
}
/**
 * @since 2.0.0
 */
function absurd(_) {
    throw new Error('Called `absurd` function which should be uncallable');
}
/**
 * Creates a tupled version of this function: instead of `n` arguments, it accepts a single tuple argument.
 *
 * @example
 * import { tupled } from 'fp-ts/lib/function'
 *
 * const add = tupled((x: number, y: number): number => x + y)
 *
 * assert.strictEqual(add([1, 2]), 3)
 *
 * @since 2.4.0
 */
function tupled(f) {
    return function (a) { return f.apply(void 0, a); };
}
/**
 * Inverse function of `tupled`
 *
 * @since 2.4.0
 */
function untupled(f) {
    return function () {
        var a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            a[_i] = arguments[_i];
        }
        return f(a);
    };
}


/***/ }),

/***/ "./node_modules/fp-ts/es6/pipeable.js":
/*!********************************************!*\
  !*** ./node_modules/fp-ts/es6/pipeable.js ***!
  \********************************************/
/*! exports provided: pipe, pipeable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pipe", function() { return pipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pipeable", function() { return pipeable; });
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./function */ "./node_modules/fp-ts/es6/function.js");

function pipe(a, ab, bc, cd, de, ef, fg, gh, hi, ij) {
    switch (arguments.length) {
        case 1:
            return a;
        case 2:
            return ab(a);
        case 3:
            return bc(ab(a));
        case 4:
            return cd(bc(ab(a)));
        case 5:
            return de(cd(bc(ab(a))));
        case 6:
            return ef(de(cd(bc(ab(a)))));
        case 7:
            return fg(ef(de(cd(bc(ab(a))))));
        case 8:
            return gh(fg(ef(de(cd(bc(ab(a)))))));
        case 9:
            return hi(gh(fg(ef(de(cd(bc(ab(a))))))));
        case 10:
            return ij(hi(gh(fg(ef(de(cd(bc(ab(a)))))))));
    }
    return;
}
var isFunctor = function (I) { return typeof I.map === 'function'; };
var isContravariant = function (I) { return typeof I.contramap === 'function'; };
var isFunctorWithIndex = function (I) { return typeof I.mapWithIndex === 'function'; };
var isApply = function (I) { return typeof I.ap === 'function'; };
var isChain = function (I) { return typeof I.chain === 'function'; };
var isBifunctor = function (I) { return typeof I.bimap === 'function'; };
var isExtend = function (I) { return typeof I.extend === 'function'; };
var isFoldable = function (I) { return typeof I.reduce === 'function'; };
var isFoldableWithIndex = function (I) { return typeof I.reduceWithIndex === 'function'; };
var isAlt = function (I) { return typeof I.alt === 'function'; };
var isCompactable = function (I) { return typeof I.compact === 'function'; };
var isFilterable = function (I) { return typeof I.filter === 'function'; };
var isFilterableWithIndex = function (I) {
    return typeof I.filterWithIndex === 'function';
};
var isProfunctor = function (I) { return typeof I.promap === 'function'; };
var isSemigroupoid = function (I) { return typeof I.compose === 'function'; };
var isMonadThrow = function (I) { return typeof I.throwError === 'function'; };
function pipeable(I) {
    var r = {};
    if (isFunctor(I)) {
        var map = function (f) { return function (fa) { return I.map(fa, f); }; };
        r.map = map;
    }
    if (isContravariant(I)) {
        var contramap = function (f) { return function (fa) { return I.contramap(fa, f); }; };
        r.contramap = contramap;
    }
    if (isFunctorWithIndex(I)) {
        var mapWithIndex = function (f) { return function (fa) { return I.mapWithIndex(fa, f); }; };
        r.mapWithIndex = mapWithIndex;
    }
    if (isApply(I)) {
        var ap = function (fa) { return function (fab) { return I.ap(fab, fa); }; };
        var apFirst = function (fb) { return function (fa) {
            return I.ap(I.map(fa, function (a) { return function () { return a; }; }), fb);
        }; };
        r.ap = ap;
        r.apFirst = apFirst;
        r.apSecond = function (fb) { return function (fa) {
            return I.ap(I.map(fa, function () { return function (b) { return b; }; }), fb);
        }; };
    }
    if (isChain(I)) {
        var chain = function (f) { return function (ma) { return I.chain(ma, f); }; };
        var chainFirst = function (f) { return function (ma) { return I.chain(ma, function (a) { return I.map(f(a), function () { return a; }); }); }; };
        var flatten = function (mma) { return I.chain(mma, _function__WEBPACK_IMPORTED_MODULE_0__["identity"]); };
        r.chain = chain;
        r.chainFirst = chainFirst;
        r.flatten = flatten;
    }
    if (isBifunctor(I)) {
        var bimap = function (f, g) { return function (fa) { return I.bimap(fa, f, g); }; };
        var mapLeft = function (f) { return function (fa) { return I.mapLeft(fa, f); }; };
        r.bimap = bimap;
        r.mapLeft = mapLeft;
    }
    if (isExtend(I)) {
        var extend = function (f) { return function (wa) { return I.extend(wa, f); }; };
        var duplicate = function (wa) { return I.extend(wa, _function__WEBPACK_IMPORTED_MODULE_0__["identity"]); };
        r.extend = extend;
        r.duplicate = duplicate;
    }
    if (isFoldable(I)) {
        var reduce = function (b, f) { return function (fa) { return I.reduce(fa, b, f); }; };
        var foldMap = function (M) {
            var foldMapM = I.foldMap(M);
            return function (f) { return function (fa) { return foldMapM(fa, f); }; };
        };
        var reduceRight = function (b, f) { return function (fa) { return I.reduceRight(fa, b, f); }; };
        r.reduce = reduce;
        r.foldMap = foldMap;
        r.reduceRight = reduceRight;
    }
    if (isFoldableWithIndex(I)) {
        var reduceWithIndex = function (b, f) { return function (fa) {
            return I.reduceWithIndex(fa, b, f);
        }; };
        var foldMapWithIndex = function (M) {
            var foldMapM = I.foldMapWithIndex(M);
            return function (f) { return function (fa) { return foldMapM(fa, f); }; };
        };
        var reduceRightWithIndex = function (b, f) { return function (fa) {
            return I.reduceRightWithIndex(fa, b, f);
        }; };
        r.reduceWithIndex = reduceWithIndex;
        r.foldMapWithIndex = foldMapWithIndex;
        r.reduceRightWithIndex = reduceRightWithIndex;
    }
    if (isAlt(I)) {
        var alt = function (that) { return function (fa) { return I.alt(fa, that); }; };
        r.alt = alt;
    }
    if (isCompactable(I)) {
        r.compact = I.compact;
        r.separate = I.separate;
    }
    if (isFilterable(I)) {
        var filter = function (predicate) { return function (fa) {
            return I.filter(fa, predicate);
        }; };
        var filterMap = function (f) { return function (fa) { return I.filterMap(fa, f); }; };
        var partition = function (predicate) { return function (fa) {
            return I.partition(fa, predicate);
        }; };
        var partitionMap = function (f) { return function (fa) { return I.partitionMap(fa, f); }; };
        r.filter = filter;
        r.filterMap = filterMap;
        r.partition = partition;
        r.partitionMap = partitionMap;
    }
    if (isFilterableWithIndex(I)) {
        var filterWithIndex = function (predicateWithIndex) { return function (fa) { return I.filterWithIndex(fa, predicateWithIndex); }; };
        var filterMapWithIndex = function (f) { return function (fa) {
            return I.filterMapWithIndex(fa, f);
        }; };
        var partitionWithIndex = function (predicateWithIndex) { return function (fa) { return I.partitionWithIndex(fa, predicateWithIndex); }; };
        var partitionMapWithIndex = function (f) { return function (fa) {
            return I.partitionMapWithIndex(fa, f);
        }; };
        r.filterWithIndex = filterWithIndex;
        r.filterMapWithIndex = filterMapWithIndex;
        r.partitionWithIndex = partitionWithIndex;
        r.partitionMapWithIndex = partitionMapWithIndex;
    }
    if (isProfunctor(I)) {
        var promap = function (f, g) { return function (fa) { return I.promap(fa, f, g); }; };
        r.promap = promap;
    }
    if (isSemigroupoid(I)) {
        var compose = function (that) { return function (fa) { return I.compose(fa, that); }; };
        r.compose = compose;
    }
    if (isMonadThrow(I)) {
        var fromOption = function (onNone) { return function (ma) {
            return ma._tag === 'None' ? I.throwError(onNone()) : I.of(ma.value);
        }; };
        var fromEither = function (ma) {
            return ma._tag === 'Left' ? I.throwError(ma.left) : I.of(ma.right);
        };
        var fromPredicate = function (predicate, onFalse) { return function (a) { return (predicate(a) ? I.of(a) : I.throwError(onFalse(a))); }; };
        var filterOrElse = function (predicate, onFalse) { return function (ma) { return I.chain(ma, function (a) { return (predicate(a) ? I.of(a) : I.throwError(onFalse(a))); }); }; };
        r.fromOption = fromOption;
        r.fromEither = fromEither;
        r.fromPredicate = fromPredicate;
        r.filterOrElse = filterOrElse;
    }
    return r;
}


/***/ }),

/***/ "./node_modules/fp-ts/lib/ChainRec.js":
/*!********************************************!*\
  !*** ./node_modules/fp-ts/lib/ChainRec.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @since 2.0.0
 */
function tailRec(a, f) {
    var v = f(a);
    while (v._tag === 'Left') {
        v = f(v.left);
    }
    return v.right;
}
exports.tailRec = tailRec;


/***/ }),

/***/ "./node_modules/fp-ts/lib/Either.js":
/*!******************************************!*\
  !*** ./node_modules/fp-ts/lib/Either.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Represents a value of one of two possible types (a disjoint union).
 *
 * An instance of `Either` is either an instance of `Left` or `Right`.
 *
 * A common use of `Either` is as an alternative to `Option` for dealing with possible missing values. In this usage,
 * `None` is replaced with a `Left` which can contain useful information. `Right` takes the place of `Some`. Convention
 * dictates that `Left` is used for failure and `Right` is used for success.
 *
 * For example, you could use `Either<string, number>` to detect whether a received input is a `string` or a `number`.
 *
 * ```ts
 * import { Either, left, right } from 'fp-ts/lib/Either'
 *
 * function parse(input: string): Either<Error, number> {
 *   const n = parseInt(input, 10)
 *   return isNaN(n) ? left(new Error('not a number')) : right(n)
 * }
 * ```
 *
 * `Either` is right-biased, which means that `Right` is assumed to be the default case to operate on. If it is `Left`,
 * operations like `map`, `chain`, ... return the `Left` value unchanged:
 *
 * ```ts
 * import { map, left, right } from 'fp-ts/lib/Either'
 * import { pipe } from 'fp-ts/lib/pipeable'
 *
 * pipe(right(12), map(double)) // right(24)
 * pipe(left(23), map(double))  // left(23)
 * ```
 *
 * @since 2.0.0
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var ChainRec_1 = __webpack_require__(/*! ./ChainRec */ "./node_modules/fp-ts/lib/ChainRec.js");
var pipeable_1 = __webpack_require__(/*! ./pipeable */ "./node_modules/fp-ts/lib/pipeable.js");
/**
 * @since 2.0.0
 */
exports.URI = 'Either';
/**
 * Constructs a new `Either` holding a `Left` value. This usually represents a failure, due to the right-bias of this
 * structure
 *
 * @since 2.0.0
 */
function left(e) {
    return { _tag: 'Left', left: e };
}
exports.left = left;
/**
 * Constructs a new `Either` holding a `Right` value. This usually represents a successful value due to the right bias
 * of this structure
 *
 * @since 2.0.0
 */
function right(a) {
    return { _tag: 'Right', right: a };
}
exports.right = right;
/**
 * Takes a default and a nullable value, if the value is not nully, turn it into a `Right`, if the value is nully use
 * the provided default as a `Left`
 *
 * @example
 * import { fromNullable, left, right } from 'fp-ts/lib/Either'
 *
 * const parse = fromNullable('nully')
 *
 * assert.deepStrictEqual(parse(1), right(1))
 * assert.deepStrictEqual(parse(null), left('nully'))
 *
 * @since 2.0.0
 */
function fromNullable(e) {
    return function (a) { return (a == null ? left(e) : right(a)); };
}
exports.fromNullable = fromNullable;
/**
 * Default value for the `onError` argument of `tryCatch`
 *
 * @since 2.0.0
 */
function toError(e) {
    return e instanceof Error ? e : new Error(String(e));
}
exports.toError = toError;
/**
 * Constructs a new `Either` from a function that might throw
 *
 * @example
 * import { Either, left, right, tryCatch } from 'fp-ts/lib/Either'
 *
 * const unsafeHead = <A>(as: Array<A>): A => {
 *   if (as.length > 0) {
 *     return as[0]
 *   } else {
 *     throw new Error('empty array')
 *   }
 * }
 *
 * const head = <A>(as: Array<A>): Either<Error, A> => {
 *   return tryCatch(() => unsafeHead(as), e => (e instanceof Error ? e : new Error('unknown error')))
 * }
 *
 * assert.deepStrictEqual(head([]), left(new Error('empty array')))
 * assert.deepStrictEqual(head([1, 2, 3]), right(1))
 *
 * @since 2.0.0
 */
function tryCatch(f, onError) {
    try {
        return right(f());
    }
    catch (e) {
        return left(onError(e));
    }
}
exports.tryCatch = tryCatch;
/**
 * Takes two functions and an `Either` value, if the value is a `Left` the inner value is applied to the first function,
 * if the value is a `Right` the inner value is applied to the second function.
 *
 * @example
 * import { fold, left, right } from 'fp-ts/lib/Either'
 * import { pipe } from 'fp-ts/lib/pipeable'
 *
 * function onLeft(errors: Array<string>): string {
 *   return `Errors: ${errors.join(', ')}`
 * }
 *
 * function onRight(value: number): string {
 *   return `Ok: ${value}`
 * }
 *
 * assert.strictEqual(
 *   pipe(
 *     right(1),
 *     fold(onLeft, onRight)
 *   ),
 *   'Ok: 1'
 * )
 * assert.strictEqual(
 *   pipe(
 *     left(['error 1', 'error 2']),
 *     fold(onLeft, onRight)
 *   ),
 *   'Errors: error 1, error 2'
 * )
 *
 * @since 2.0.0
 */
function fold(onLeft, onRight) {
    return function (ma) { return (isLeft(ma) ? onLeft(ma.left) : onRight(ma.right)); };
}
exports.fold = fold;
/**
 * @since 2.0.0
 */
function getShow(SE, SA) {
    return {
        show: function (ma) { return (isLeft(ma) ? "left(" + SE.show(ma.left) + ")" : "right(" + SA.show(ma.right) + ")"); }
    };
}
exports.getShow = getShow;
/**
 * @since 2.0.0
 */
function getEq(EL, EA) {
    return {
        equals: function (x, y) {
            return x === y || (isLeft(x) ? isLeft(y) && EL.equals(x.left, y.left) : isRight(y) && EA.equals(x.right, y.right));
        }
    };
}
exports.getEq = getEq;
/**
 * Semigroup returning the left-most non-`Left` value. If both operands are `Right`s then the inner values are
 * appended using the provided `Semigroup`
 *
 * @example
 * import { getSemigroup, left, right } from 'fp-ts/lib/Either'
 * import { semigroupSum } from 'fp-ts/lib/Semigroup'
 *
 * const S = getSemigroup<string, number>(semigroupSum)
 * assert.deepStrictEqual(S.concat(left('a'), left('b')), left('a'))
 * assert.deepStrictEqual(S.concat(left('a'), right(2)), right(2))
 * assert.deepStrictEqual(S.concat(right(1), left('b')), right(1))
 * assert.deepStrictEqual(S.concat(right(1), right(2)), right(3))
 *
 *
 * @since 2.0.0
 */
function getSemigroup(S) {
    return {
        concat: function (x, y) { return (isLeft(y) ? x : isLeft(x) ? y : right(S.concat(x.right, y.right))); }
    };
}
exports.getSemigroup = getSemigroup;
/**
 * `Apply` semigroup
 *
 * @example
 * import { getApplySemigroup, left, right } from 'fp-ts/lib/Either'
 * import { semigroupSum } from 'fp-ts/lib/Semigroup'
 *
 * const S = getApplySemigroup<string, number>(semigroupSum)
 * assert.deepStrictEqual(S.concat(left('a'), left('b')), left('a'))
 * assert.deepStrictEqual(S.concat(left('a'), right(2)), left('a'))
 * assert.deepStrictEqual(S.concat(right(1), left('b')), left('b'))
 * assert.deepStrictEqual(S.concat(right(1), right(2)), right(3))
 *
 *
 * @since 2.0.0
 */
function getApplySemigroup(S) {
    return {
        concat: function (x, y) { return (isLeft(x) ? x : isLeft(y) ? y : right(S.concat(x.right, y.right))); }
    };
}
exports.getApplySemigroup = getApplySemigroup;
/**
 * @since 2.0.0
 */
function getApplyMonoid(M) {
    return __assign(__assign({}, getApplySemigroup(M)), { empty: right(M.empty) });
}
exports.getApplyMonoid = getApplyMonoid;
/**
 * Returns `true` if the either is an instance of `Left`, `false` otherwise
 *
 * @since 2.0.0
 */
function isLeft(ma) {
    switch (ma._tag) {
        case 'Left':
            return true;
        case 'Right':
            return false;
    }
}
exports.isLeft = isLeft;
/**
 * Returns `true` if the either is an instance of `Right`, `false` otherwise
 *
 * @since 2.0.0
 */
function isRight(ma) {
    return isLeft(ma) ? false : true;
}
exports.isRight = isRight;
/**
 * @since 2.0.0
 */
function swap(ma) {
    return isLeft(ma) ? right(ma.left) : left(ma.right);
}
exports.swap = swap;
/**
 * @since 2.0.0
 */
function orElse(onLeft) {
    return function (ma) { return (isLeft(ma) ? onLeft(ma.left) : ma); };
}
exports.orElse = orElse;
/**
 * @since 2.0.0
 */
function getOrElse(onLeft) {
    return function (ma) { return (isLeft(ma) ? onLeft(ma.left) : ma.right); };
}
exports.getOrElse = getOrElse;
/**
 * @since 2.0.0
 */
function elem(E) {
    return function (a, ma) { return (isLeft(ma) ? false : E.equals(a, ma.right)); };
}
exports.elem = elem;
/**
 * Returns `false` if `Left` or returns the result of the application of the given predicate to the `Right` value.
 *
 * @example
 * import { exists, left, right } from 'fp-ts/lib/Either'
 *
 * const gt2 = exists((n: number) => n > 2)
 *
 * assert.strictEqual(gt2(left('a')), false)
 * assert.strictEqual(gt2(right(1)), false)
 * assert.strictEqual(gt2(right(3)), true)
 *
 * @since 2.0.0
 */
function exists(predicate) {
    return function (ma) { return (isLeft(ma) ? false : predicate(ma.right)); };
}
exports.exists = exists;
/**
 * Converts a JavaScript Object Notation (JSON) string into an object.
 *
 * @example
 * import { parseJSON, toError, right, left } from 'fp-ts/lib/Either'
 *
 * assert.deepStrictEqual(parseJSON('{"a":1}', toError), right({ a: 1 }))
 * assert.deepStrictEqual(parseJSON('{"a":}', toError), left(new SyntaxError('Unexpected token } in JSON at position 5')))
 *
 * @since 2.0.0
 */
function parseJSON(s, onError) {
    return tryCatch(function () { return JSON.parse(s); }, onError);
}
exports.parseJSON = parseJSON;
/**
 * Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
 *
 * @example
 * import * as E from 'fp-ts/lib/Either'
 * import { pipe } from 'fp-ts/lib/pipeable'
 *
 * assert.deepStrictEqual(E.stringifyJSON({ a: 1 }, E.toError), E.right('{"a":1}'))
 * const circular: any = { ref: null }
 * circular.ref = circular
 * assert.deepStrictEqual(
 *   pipe(
 *     E.stringifyJSON(circular, E.toError),
 *     E.mapLeft(e => e.message.includes('Converting circular structure to JSON'))
 *   ),
 *   E.left(true)
 * )
 *
 * @since 2.0.0
 */
function stringifyJSON(u, onError) {
    return tryCatch(function () { return JSON.stringify(u); }, onError);
}
exports.stringifyJSON = stringifyJSON;
/**
 * Builds `Witherable` instance for `Either` given `Monoid` for the left side
 *
 * @since 2.0.0
 */
function getWitherable(M) {
    var empty = left(M.empty);
    var compact = function (ma) {
        return isLeft(ma) ? ma : ma.right._tag === 'None' ? left(M.empty) : right(ma.right.value);
    };
    var separate = function (ma) {
        return isLeft(ma)
            ? { left: ma, right: ma }
            : isLeft(ma.right)
                ? { left: right(ma.right.left), right: empty }
                : { left: empty, right: right(ma.right.right) };
    };
    var partitionMap = function (ma, f) {
        if (isLeft(ma)) {
            return { left: ma, right: ma };
        }
        var e = f(ma.right);
        return isLeft(e) ? { left: right(e.left), right: empty } : { left: empty, right: right(e.right) };
    };
    var partition = function (ma, p) {
        return isLeft(ma)
            ? { left: ma, right: ma }
            : p(ma.right)
                ? { left: empty, right: right(ma.right) }
                : { left: right(ma.right), right: empty };
    };
    var filterMap = function (ma, f) {
        if (isLeft(ma)) {
            return ma;
        }
        var ob = f(ma.right);
        return ob._tag === 'None' ? left(M.empty) : right(ob.value);
    };
    var filter = function (ma, predicate) {
        return isLeft(ma) ? ma : predicate(ma.right) ? ma : left(M.empty);
    };
    var wither = function (F) {
        var traverseF = exports.either.traverse(F);
        return function (ma, f) { return F.map(traverseF(ma, f), compact); };
    };
    var wilt = function (F) {
        var traverseF = exports.either.traverse(F);
        return function (ma, f) { return F.map(traverseF(ma, f), separate); };
    };
    return {
        URI: exports.URI,
        _E: undefined,
        map: exports.either.map,
        compact: compact,
        separate: separate,
        filter: filter,
        filterMap: filterMap,
        partition: partition,
        partitionMap: partitionMap,
        traverse: exports.either.traverse,
        sequence: exports.either.sequence,
        reduce: exports.either.reduce,
        foldMap: exports.either.foldMap,
        reduceRight: exports.either.reduceRight,
        wither: wither,
        wilt: wilt
    };
}
exports.getWitherable = getWitherable;
/**
 * @since 2.0.0
 */
function getValidation(S) {
    return {
        URI: exports.URI,
        _E: undefined,
        map: exports.either.map,
        of: exports.either.of,
        ap: function (mab, ma) {
            return isLeft(mab)
                ? isLeft(ma)
                    ? left(S.concat(mab.left, ma.left))
                    : mab
                : isLeft(ma)
                    ? ma
                    : right(mab.right(ma.right));
        },
        chain: exports.either.chain,
        alt: function (fx, f) {
            if (isRight(fx)) {
                return fx;
            }
            var fy = f();
            return isLeft(fy) ? left(S.concat(fx.left, fy.left)) : fy;
        }
    };
}
exports.getValidation = getValidation;
/**
 * @since 2.0.0
 */
function getValidationSemigroup(SE, SA) {
    return {
        concat: function (fx, fy) {
            return isLeft(fx)
                ? isLeft(fy)
                    ? left(SE.concat(fx.left, fy.left))
                    : fx
                : isLeft(fy)
                    ? fy
                    : right(SA.concat(fx.right, fy.right));
        }
    };
}
exports.getValidationSemigroup = getValidationSemigroup;
/**
 * @since 2.0.0
 */
function getValidationMonoid(SE, SA) {
    return {
        concat: getValidationSemigroup(SE, SA).concat,
        empty: right(SA.empty)
    };
}
exports.getValidationMonoid = getValidationMonoid;
/**
 * @since 2.0.0
 */
exports.either = {
    URI: exports.URI,
    map: function (ma, f) { return (isLeft(ma) ? ma : right(f(ma.right))); },
    of: right,
    ap: function (mab, ma) { return (isLeft(mab) ? mab : isLeft(ma) ? ma : right(mab.right(ma.right))); },
    chain: function (ma, f) { return (isLeft(ma) ? ma : f(ma.right)); },
    reduce: function (fa, b, f) { return (isLeft(fa) ? b : f(b, fa.right)); },
    foldMap: function (M) { return function (fa, f) { return (isLeft(fa) ? M.empty : f(fa.right)); }; },
    reduceRight: function (fa, b, f) { return (isLeft(fa) ? b : f(fa.right, b)); },
    traverse: function (F) { return function (ma, f) {
        return isLeft(ma) ? F.of(left(ma.left)) : F.map(f(ma.right), right);
    }; },
    sequence: function (F) { return function (ma) {
        return isLeft(ma) ? F.of(left(ma.left)) : F.map(ma.right, right);
    }; },
    bimap: function (fea, f, g) { return (isLeft(fea) ? left(f(fea.left)) : right(g(fea.right))); },
    mapLeft: function (fea, f) { return (isLeft(fea) ? left(f(fea.left)) : fea); },
    alt: function (fx, fy) { return (isLeft(fx) ? fy() : fx); },
    extend: function (wa, f) { return (isLeft(wa) ? wa : right(f(wa))); },
    chainRec: function (a, f) {
        return ChainRec_1.tailRec(f(a), function (e) {
            return isLeft(e) ? right(left(e.left)) : isLeft(e.right) ? left(f(e.right.left)) : right(right(e.right.right));
        });
    },
    throwError: left
};
var _a = pipeable_1.pipeable(exports.either), alt = _a.alt, ap = _a.ap, apFirst = _a.apFirst, apSecond = _a.apSecond, bimap = _a.bimap, chain = _a.chain, chainFirst = _a.chainFirst, duplicate = _a.duplicate, extend = _a.extend, flatten = _a.flatten, foldMap = _a.foldMap, map = _a.map, mapLeft = _a.mapLeft, reduce = _a.reduce, reduceRight = _a.reduceRight, fromOption = _a.fromOption, fromPredicate = _a.fromPredicate, filterOrElse = _a.filterOrElse;
exports.alt = alt;
exports.ap = ap;
exports.apFirst = apFirst;
exports.apSecond = apSecond;
exports.bimap = bimap;
exports.chain = chain;
exports.chainFirst = chainFirst;
exports.duplicate = duplicate;
exports.extend = extend;
exports.flatten = flatten;
exports.foldMap = foldMap;
exports.map = map;
exports.mapLeft = mapLeft;
exports.reduce = reduce;
exports.reduceRight = reduceRight;
exports.fromOption = fromOption;
exports.fromPredicate = fromPredicate;
exports.filterOrElse = filterOrElse;


/***/ }),

/***/ "./node_modules/fp-ts/lib/function.js":
/*!********************************************!*\
  !*** ./node_modules/fp-ts/lib/function.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @since 2.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @since 2.0.0
 */
function identity(a) {
    return a;
}
exports.identity = identity;
/**
 * @since 2.0.0
 */
exports.unsafeCoerce = identity;
/**
 * @since 2.0.0
 */
function not(predicate) {
    return function (a) { return !predicate(a); };
}
exports.not = not;
/**
 * @since 2.0.0
 */
function constant(a) {
    return function () { return a; };
}
exports.constant = constant;
/**
 * A thunk that returns always `true`
 *
 * @since 2.0.0
 */
exports.constTrue = function () {
    return true;
};
/**
 * A thunk that returns always `false`
 *
 * @since 2.0.0
 */
exports.constFalse = function () {
    return false;
};
/**
 * A thunk that returns always `null`
 *
 * @since 2.0.0
 */
exports.constNull = function () {
    return null;
};
/**
 * A thunk that returns always `undefined`
 *
 * @since 2.0.0
 */
exports.constUndefined = function () {
    return;
};
/**
 * A thunk that returns always `void`
 *
 * @since 2.0.0
 */
exports.constVoid = function () {
    return;
};
/**
 * Flips the order of the arguments of a function of two arguments.
 *
 * @since 2.0.0
 */
function flip(f) {
    return function (b, a) { return f(a, b); };
}
exports.flip = flip;
function flow(ab, bc, cd, de, ef, fg, gh, hi, ij) {
    switch (arguments.length) {
        case 1:
            return ab;
        case 2:
            return function () {
                return bc(ab.apply(this, arguments));
            };
        case 3:
            return function () {
                return cd(bc(ab.apply(this, arguments)));
            };
        case 4:
            return function () {
                return de(cd(bc(ab.apply(this, arguments))));
            };
        case 5:
            return function () {
                return ef(de(cd(bc(ab.apply(this, arguments)))));
            };
        case 6:
            return function () {
                return fg(ef(de(cd(bc(ab.apply(this, arguments))))));
            };
        case 7:
            return function () {
                return gh(fg(ef(de(cd(bc(ab.apply(this, arguments)))))));
            };
        case 8:
            return function () {
                return hi(gh(fg(ef(de(cd(bc(ab.apply(this, arguments))))))));
            };
        case 9:
            return function () {
                return ij(hi(gh(fg(ef(de(cd(bc(ab.apply(this, arguments)))))))));
            };
    }
    return;
}
exports.flow = flow;
/**
 * @since 2.0.0
 */
function tuple() {
    var t = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        t[_i] = arguments[_i];
    }
    return t;
}
exports.tuple = tuple;
/**
 * @since 2.0.0
 */
function increment(n) {
    return n + 1;
}
exports.increment = increment;
/**
 * @since 2.0.0
 */
function decrement(n) {
    return n - 1;
}
exports.decrement = decrement;
/**
 * @since 2.0.0
 */
function absurd(_) {
    throw new Error('Called `absurd` function which should be uncallable');
}
exports.absurd = absurd;
/**
 * Creates a tupled version of this function: instead of `n` arguments, it accepts a single tuple argument.
 *
 * @example
 * import { tupled } from 'fp-ts/lib/function'
 *
 * const add = tupled((x: number, y: number): number => x + y)
 *
 * assert.strictEqual(add([1, 2]), 3)
 *
 * @since 2.4.0
 */
function tupled(f) {
    return function (a) { return f.apply(void 0, a); };
}
exports.tupled = tupled;
/**
 * Inverse function of `tupled`
 *
 * @since 2.4.0
 */
function untupled(f) {
    return function () {
        var a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            a[_i] = arguments[_i];
        }
        return f(a);
    };
}
exports.untupled = untupled;


/***/ }),

/***/ "./node_modules/fp-ts/lib/pipeable.js":
/*!********************************************!*\
  !*** ./node_modules/fp-ts/lib/pipeable.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var function_1 = __webpack_require__(/*! ./function */ "./node_modules/fp-ts/lib/function.js");
function pipe(a, ab, bc, cd, de, ef, fg, gh, hi, ij) {
    switch (arguments.length) {
        case 1:
            return a;
        case 2:
            return ab(a);
        case 3:
            return bc(ab(a));
        case 4:
            return cd(bc(ab(a)));
        case 5:
            return de(cd(bc(ab(a))));
        case 6:
            return ef(de(cd(bc(ab(a)))));
        case 7:
            return fg(ef(de(cd(bc(ab(a))))));
        case 8:
            return gh(fg(ef(de(cd(bc(ab(a)))))));
        case 9:
            return hi(gh(fg(ef(de(cd(bc(ab(a))))))));
        case 10:
            return ij(hi(gh(fg(ef(de(cd(bc(ab(a)))))))));
    }
    return;
}
exports.pipe = pipe;
var isFunctor = function (I) { return typeof I.map === 'function'; };
var isContravariant = function (I) { return typeof I.contramap === 'function'; };
var isFunctorWithIndex = function (I) { return typeof I.mapWithIndex === 'function'; };
var isApply = function (I) { return typeof I.ap === 'function'; };
var isChain = function (I) { return typeof I.chain === 'function'; };
var isBifunctor = function (I) { return typeof I.bimap === 'function'; };
var isExtend = function (I) { return typeof I.extend === 'function'; };
var isFoldable = function (I) { return typeof I.reduce === 'function'; };
var isFoldableWithIndex = function (I) { return typeof I.reduceWithIndex === 'function'; };
var isAlt = function (I) { return typeof I.alt === 'function'; };
var isCompactable = function (I) { return typeof I.compact === 'function'; };
var isFilterable = function (I) { return typeof I.filter === 'function'; };
var isFilterableWithIndex = function (I) {
    return typeof I.filterWithIndex === 'function';
};
var isProfunctor = function (I) { return typeof I.promap === 'function'; };
var isSemigroupoid = function (I) { return typeof I.compose === 'function'; };
var isMonadThrow = function (I) { return typeof I.throwError === 'function'; };
function pipeable(I) {
    var r = {};
    if (isFunctor(I)) {
        var map = function (f) { return function (fa) { return I.map(fa, f); }; };
        r.map = map;
    }
    if (isContravariant(I)) {
        var contramap = function (f) { return function (fa) { return I.contramap(fa, f); }; };
        r.contramap = contramap;
    }
    if (isFunctorWithIndex(I)) {
        var mapWithIndex = function (f) { return function (fa) { return I.mapWithIndex(fa, f); }; };
        r.mapWithIndex = mapWithIndex;
    }
    if (isApply(I)) {
        var ap = function (fa) { return function (fab) { return I.ap(fab, fa); }; };
        var apFirst = function (fb) { return function (fa) {
            return I.ap(I.map(fa, function (a) { return function () { return a; }; }), fb);
        }; };
        r.ap = ap;
        r.apFirst = apFirst;
        r.apSecond = function (fb) { return function (fa) {
            return I.ap(I.map(fa, function () { return function (b) { return b; }; }), fb);
        }; };
    }
    if (isChain(I)) {
        var chain = function (f) { return function (ma) { return I.chain(ma, f); }; };
        var chainFirst = function (f) { return function (ma) { return I.chain(ma, function (a) { return I.map(f(a), function () { return a; }); }); }; };
        var flatten = function (mma) { return I.chain(mma, function_1.identity); };
        r.chain = chain;
        r.chainFirst = chainFirst;
        r.flatten = flatten;
    }
    if (isBifunctor(I)) {
        var bimap = function (f, g) { return function (fa) { return I.bimap(fa, f, g); }; };
        var mapLeft = function (f) { return function (fa) { return I.mapLeft(fa, f); }; };
        r.bimap = bimap;
        r.mapLeft = mapLeft;
    }
    if (isExtend(I)) {
        var extend = function (f) { return function (wa) { return I.extend(wa, f); }; };
        var duplicate = function (wa) { return I.extend(wa, function_1.identity); };
        r.extend = extend;
        r.duplicate = duplicate;
    }
    if (isFoldable(I)) {
        var reduce = function (b, f) { return function (fa) { return I.reduce(fa, b, f); }; };
        var foldMap = function (M) {
            var foldMapM = I.foldMap(M);
            return function (f) { return function (fa) { return foldMapM(fa, f); }; };
        };
        var reduceRight = function (b, f) { return function (fa) { return I.reduceRight(fa, b, f); }; };
        r.reduce = reduce;
        r.foldMap = foldMap;
        r.reduceRight = reduceRight;
    }
    if (isFoldableWithIndex(I)) {
        var reduceWithIndex = function (b, f) { return function (fa) {
            return I.reduceWithIndex(fa, b, f);
        }; };
        var foldMapWithIndex = function (M) {
            var foldMapM = I.foldMapWithIndex(M);
            return function (f) { return function (fa) { return foldMapM(fa, f); }; };
        };
        var reduceRightWithIndex = function (b, f) { return function (fa) {
            return I.reduceRightWithIndex(fa, b, f);
        }; };
        r.reduceWithIndex = reduceWithIndex;
        r.foldMapWithIndex = foldMapWithIndex;
        r.reduceRightWithIndex = reduceRightWithIndex;
    }
    if (isAlt(I)) {
        var alt = function (that) { return function (fa) { return I.alt(fa, that); }; };
        r.alt = alt;
    }
    if (isCompactable(I)) {
        r.compact = I.compact;
        r.separate = I.separate;
    }
    if (isFilterable(I)) {
        var filter = function (predicate) { return function (fa) {
            return I.filter(fa, predicate);
        }; };
        var filterMap = function (f) { return function (fa) { return I.filterMap(fa, f); }; };
        var partition = function (predicate) { return function (fa) {
            return I.partition(fa, predicate);
        }; };
        var partitionMap = function (f) { return function (fa) { return I.partitionMap(fa, f); }; };
        r.filter = filter;
        r.filterMap = filterMap;
        r.partition = partition;
        r.partitionMap = partitionMap;
    }
    if (isFilterableWithIndex(I)) {
        var filterWithIndex = function (predicateWithIndex) { return function (fa) { return I.filterWithIndex(fa, predicateWithIndex); }; };
        var filterMapWithIndex = function (f) { return function (fa) {
            return I.filterMapWithIndex(fa, f);
        }; };
        var partitionWithIndex = function (predicateWithIndex) { return function (fa) { return I.partitionWithIndex(fa, predicateWithIndex); }; };
        var partitionMapWithIndex = function (f) { return function (fa) {
            return I.partitionMapWithIndex(fa, f);
        }; };
        r.filterWithIndex = filterWithIndex;
        r.filterMapWithIndex = filterMapWithIndex;
        r.partitionWithIndex = partitionWithIndex;
        r.partitionMapWithIndex = partitionMapWithIndex;
    }
    if (isProfunctor(I)) {
        var promap = function (f, g) { return function (fa) { return I.promap(fa, f, g); }; };
        r.promap = promap;
    }
    if (isSemigroupoid(I)) {
        var compose = function (that) { return function (fa) { return I.compose(fa, that); }; };
        r.compose = compose;
    }
    if (isMonadThrow(I)) {
        var fromOption = function (onNone) { return function (ma) {
            return ma._tag === 'None' ? I.throwError(onNone()) : I.of(ma.value);
        }; };
        var fromEither = function (ma) {
            return ma._tag === 'Left' ? I.throwError(ma.left) : I.of(ma.right);
        };
        var fromPredicate = function (predicate, onFalse) { return function (a) { return (predicate(a) ? I.of(a) : I.throwError(onFalse(a))); }; };
        var filterOrElse = function (predicate, onFalse) { return function (ma) { return I.chain(ma, function (a) { return (predicate(a) ? I.of(a) : I.throwError(onFalse(a))); }); }; };
        r.fromOption = fromOption;
        r.fromEither = fromEither;
        r.fromPredicate = fromPredicate;
        r.filterOrElse = filterOrElse;
    }
    return r;
}
exports.pipeable = pipeable;


/***/ }),

/***/ "./node_modules/io-ts/es6/index.js":
/*!*****************************************!*\
  !*** ./node_modules/io-ts/es6/index.js ***!
  \*****************************************/
/*! exports provided: Type, identity, getFunctionName, getContextEntry, appendContext, failures, failure, success, NullType, nullType, UndefinedType, VoidType, voidType, UnknownType, unknown, StringType, string, NumberType, number, BigIntType, bigint, BooleanType, boolean, AnyArrayType, UnknownArray, AnyDictionaryType, UnknownRecord, FunctionType, Function, RefinementType, brand, Int, LiteralType, literal, KeyofType, keyof, RecursiveType, recursion, ArrayType, array, InterfaceType, type, PartialType, partial, DictionaryType, record, UnionType, union, IntersectionType, intersection, TupleType, tuple, ReadonlyType, readonly, ReadonlyArrayType, readonlyArray, strict, TaggedUnionType, taggedUnion, ExactType, exact, null, undefined, Array, interface, void, getValidationError, getDefaultContext, NeverType, never, AnyType, any, Dictionary, ObjectType, object, refinement, Integer, dictionary, StrictType, clean, alias, emptyTags, getTags, getIndex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Type", function() { return Type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFunctionName", function() { return getFunctionName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContextEntry", function() { return getContextEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendContext", function() { return appendContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "failures", function() { return failures; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "failure", function() { return failure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "success", function() { return success; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NullType", function() { return NullType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nullType", function() { return nullType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UndefinedType", function() { return UndefinedType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoidType", function() { return VoidType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "voidType", function() { return voidType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnknownType", function() { return UnknownType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unknown", function() { return unknown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringType", function() { return StringType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "string", function() { return string; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberType", function() { return NumberType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "number", function() { return number; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BigIntType", function() { return BigIntType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bigint", function() { return bigint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooleanType", function() { return BooleanType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boolean", function() { return boolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnyArrayType", function() { return AnyArrayType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnknownArray", function() { return UnknownArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnyDictionaryType", function() { return AnyDictionaryType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnknownRecord", function() { return UnknownRecord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FunctionType", function() { return FunctionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Function", function() { return Function; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefinementType", function() { return RefinementType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "brand", function() { return brand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Int", function() { return Int; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiteralType", function() { return LiteralType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "literal", function() { return literal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyofType", function() { return KeyofType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyof", function() { return keyof; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecursiveType", function() { return RecursiveType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recursion", function() { return recursion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayType", function() { return ArrayType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "array", function() { return array; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterfaceType", function() { return InterfaceType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "type", function() { return type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartialType", function() { return PartialType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "partial", function() { return partial; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DictionaryType", function() { return DictionaryType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "record", function() { return record; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnionType", function() { return UnionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "union", function() { return union; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntersectionType", function() { return IntersectionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intersection", function() { return intersection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TupleType", function() { return TupleType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tuple", function() { return tuple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadonlyType", function() { return ReadonlyType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readonly", function() { return readonly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadonlyArrayType", function() { return ReadonlyArrayType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readonlyArray", function() { return readonlyArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strict", function() { return strict; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaggedUnionType", function() { return TaggedUnionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taggedUnion", function() { return taggedUnion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExactType", function() { return ExactType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exact", function() { return exact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "null", function() { return nullType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "undefined", function() { return undefinedType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Array", function() { return UnknownArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interface", function() { return type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "void", function() { return voidType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValidationError", function() { return getValidationError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultContext", function() { return getDefaultContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NeverType", function() { return NeverType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "never", function() { return never; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnyType", function() { return AnyType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "any", function() { return any; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dictionary", function() { return Dictionary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectType", function() { return ObjectType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "object", function() { return object; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "refinement", function() { return refinement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Integer", function() { return Integer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dictionary", function() { return dictionary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StrictType", function() { return StrictType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clean", function() { return clean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alias", function() { return alias; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptyTags", function() { return emptyTags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTags", function() { return getTags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIndex", function() { return getIndex; });
/* harmony import */ var fp_ts_es6_Either__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fp-ts/es6/Either */ "./node_modules/fp-ts/es6/Either.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
/**
 * @since 1.0.0
 */

var map = fp_ts_es6_Either__WEBPACK_IMPORTED_MODULE_0__["either"].map;
var chain = fp_ts_es6_Either__WEBPACK_IMPORTED_MODULE_0__["either"].chain;
/**
 * @since 1.0.0
 */
var Type = /** @class */ (function () {
    function Type(
    /** a unique name for this codec */
    name, 
    /** a custom type guard */
    is, 
    /** succeeds if a value of type I can be decoded to a value of type A */
    validate, 
    /** converts a value of type A to a value of type O */
    encode) {
        this.name = name;
        this.is = is;
        this.validate = validate;
        this.encode = encode;
        this.decode = this.decode.bind(this);
    }
    /**
     * @since 1.0.0
     */
    Type.prototype.pipe = function (ab, name) {
        var _this = this;
        if (name === void 0) { name = "pipe(" + this.name + ", " + ab.name + ")"; }
        return new Type(name, ab.is, function (i, c) { return chain(_this.validate(i, c), function (a) { return ab.validate(a, c); }); }, this.encode === identity && ab.encode === identity ? identity : function (b) { return _this.encode(ab.encode(b)); });
    };
    /**
     * @since 1.0.0
     */
    Type.prototype.asDecoder = function () {
        return this;
    };
    /**
     * @since 1.0.0
     */
    Type.prototype.asEncoder = function () {
        return this;
    };
    /**
     * a version of `validate` with a default context
     * @since 1.0.0
     */
    Type.prototype.decode = function (i) {
        return this.validate(i, [{ key: '', type: this, actual: i }]);
    };
    return Type;
}());

/**
 * @since 1.0.0
 */
var identity = function (a) { return a; };
/**
 * @since 1.0.0
 */
var getFunctionName = function (f) {
    return f.displayName || f.name || "<function" + f.length + ">";
};
/**
 * @since 1.0.0
 */
var getContextEntry = function (key, decoder) { return ({ key: key, type: decoder }); };
/**
 * @since 1.0.0
 */
var appendContext = function (c, key, decoder, actual) {
    var len = c.length;
    var r = Array(len + 1);
    for (var i = 0; i < len; i++) {
        r[i] = c[i];
    }
    r[len] = { key: key, type: decoder, actual: actual };
    return r;
};
/**
 * @since 1.0.0
 */
var failures = fp_ts_es6_Either__WEBPACK_IMPORTED_MODULE_0__["left"];
/**
 * @since 1.0.0
 */
var failure = function (value, context, message) {
    return failures([{ value: value, context: context, message: message }]);
};
/**
 * @since 1.0.0
 */
var success = fp_ts_es6_Either__WEBPACK_IMPORTED_MODULE_0__["right"];
var pushAll = function (xs, ys) {
    var l = ys.length;
    for (var i = 0; i < l; i++) {
        xs.push(ys[i]);
    }
};
var getIsCodec = function (tag) { return function (codec) { return codec._tag === tag; }; };
// tslint:disable-next-line: deprecation
var isAnyCodec = getIsCodec('AnyType');
var isInterfaceCodec = getIsCodec('InterfaceType');
var isPartialCodec = getIsCodec('PartialType');
//
// basic types
//
/**
 * @since 1.0.0
 */
var NullType = /** @class */ (function (_super) {
    __extends(NullType, _super);
    function NullType() {
        var _this = _super.call(this, 'null', function (u) { return u === null; }, function (u, c) { return (_this.is(u) ? success(u) : failure(u, c)); }, identity) || this;
        _this._tag = 'NullType';
        return _this;
    }
    return NullType;
}(Type));

/**
 * @since 1.0.0
 */
var nullType = new NullType();
/**
 * @since 1.0.0
 */
var UndefinedType = /** @class */ (function (_super) {
    __extends(UndefinedType, _super);
    function UndefinedType() {
        var _this = _super.call(this, 'undefined', function (u) { return u === void 0; }, function (u, c) { return (_this.is(u) ? success(u) : failure(u, c)); }, identity) || this;
        _this._tag = 'UndefinedType';
        return _this;
    }
    return UndefinedType;
}(Type));

var undefinedType = new UndefinedType();
/**
 * @since 1.2.0
 */
var VoidType = /** @class */ (function (_super) {
    __extends(VoidType, _super);
    function VoidType() {
        var _this = _super.call(this, 'void', undefinedType.is, undefinedType.validate, identity) || this;
        _this._tag = 'VoidType';
        return _this;
    }
    return VoidType;
}(Type));

/**
 * @since 1.2.0
 */
var voidType = new VoidType();
/**
 * @since 1.5.0
 */
var UnknownType = /** @class */ (function (_super) {
    __extends(UnknownType, _super);
    function UnknownType() {
        var _this = _super.call(this, 'unknown', function (_) { return true; }, success, identity) || this;
        _this._tag = 'UnknownType';
        return _this;
    }
    return UnknownType;
}(Type));

/**
 * @since 1.5.0
 */
var unknown = new UnknownType();
/**
 * @since 1.0.0
 */
var StringType = /** @class */ (function (_super) {
    __extends(StringType, _super);
    function StringType() {
        var _this = _super.call(this, 'string', function (u) { return typeof u === 'string'; }, function (u, c) { return (_this.is(u) ? success(u) : failure(u, c)); }, identity) || this;
        _this._tag = 'StringType';
        return _this;
    }
    return StringType;
}(Type));

/**
 * @since 1.0.0
 */
var string = new StringType();
/**
 * @since 1.0.0
 */
var NumberType = /** @class */ (function (_super) {
    __extends(NumberType, _super);
    function NumberType() {
        var _this = _super.call(this, 'number', function (u) { return typeof u === 'number'; }, function (u, c) { return (_this.is(u) ? success(u) : failure(u, c)); }, identity) || this;
        _this._tag = 'NumberType';
        return _this;
    }
    return NumberType;
}(Type));

/**
 * @since 1.0.0
 */
var number = new NumberType();
/**
 * @since 2.1.0
 */
var BigIntType = /** @class */ (function (_super) {
    __extends(BigIntType, _super);
    function BigIntType() {
        var _this = _super.call(this, 'bigint', 
        // tslint:disable-next-line: valid-typeof
        function (u) { return typeof u === 'bigint'; }, function (u, c) { return (_this.is(u) ? success(u) : failure(u, c)); }, identity) || this;
        _this._tag = 'BigIntType';
        return _this;
    }
    return BigIntType;
}(Type));

/**
 * @since 2.1.0
 */
var bigint = new BigIntType();
/**
 * @since 1.0.0
 */
var BooleanType = /** @class */ (function (_super) {
    __extends(BooleanType, _super);
    function BooleanType() {
        var _this = _super.call(this, 'boolean', function (u) { return typeof u === 'boolean'; }, function (u, c) { return (_this.is(u) ? success(u) : failure(u, c)); }, identity) || this;
        _this._tag = 'BooleanType';
        return _this;
    }
    return BooleanType;
}(Type));

/**
 * @since 1.0.0
 */
var boolean = new BooleanType();
/**
 * @since 1.0.0
 */
var AnyArrayType = /** @class */ (function (_super) {
    __extends(AnyArrayType, _super);
    function AnyArrayType() {
        var _this = _super.call(this, 'UnknownArray', Array.isArray, function (u, c) { return (_this.is(u) ? success(u) : failure(u, c)); }, identity) || this;
        _this._tag = 'AnyArrayType';
        return _this;
    }
    return AnyArrayType;
}(Type));

/**
 * @since 1.7.1
 */
var UnknownArray = new AnyArrayType();
/**
 * @since 1.0.0
 */
var AnyDictionaryType = /** @class */ (function (_super) {
    __extends(AnyDictionaryType, _super);
    function AnyDictionaryType() {
        var _this = _super.call(this, 'UnknownRecord', function (u) {
            var s = Object.prototype.toString.call(u);
            return s === '[object Object]' || s === '[object Window]';
        }, function (u, c) { return (_this.is(u) ? success(u) : failure(u, c)); }, identity) || this;
        _this._tag = 'AnyDictionaryType';
        return _this;
    }
    return AnyDictionaryType;
}(Type));

/**
 * @since 1.7.1
 */
var UnknownRecord = new AnyDictionaryType();
/**
 * @since 1.0.0
 * @deprecated
 */
var FunctionType = /** @class */ (function (_super) {
    __extends(FunctionType, _super);
    function FunctionType() {
        var _this = _super.call(this, 'Function', 
        // tslint:disable-next-line:strict-type-predicates
        function (u) { return typeof u === 'function'; }, function (u, c) { return (_this.is(u) ? success(u) : failure(u, c)); }, identity) || this;
        _this._tag = 'FunctionType';
        return _this;
    }
    return FunctionType;
}(Type));

/**
 * @since 1.0.0
 * @deprecated
 */
// tslint:disable-next-line: deprecation
var Function = new FunctionType();
/**
 * @since 1.0.0
 */
var RefinementType = /** @class */ (function (_super) {
    __extends(RefinementType, _super);
    function RefinementType(name, is, validate, encode, type, predicate) {
        var _this = _super.call(this, name, is, validate, encode) || this;
        _this.type = type;
        _this.predicate = predicate;
        _this._tag = 'RefinementType';
        return _this;
    }
    return RefinementType;
}(Type));

/**
 * @since 1.8.1
 */
var brand = function (codec, predicate, name) {
    // tslint:disable-next-line: deprecation
    return refinement(codec, predicate, name);
};
/**
 * A branded codec representing an integer
 * @since 1.8.1
 */
var Int = brand(number, function (n) { return Number.isInteger(n); }, 'Int');
/**
 * @since 1.0.0
 */
var LiteralType = /** @class */ (function (_super) {
    __extends(LiteralType, _super);
    function LiteralType(name, is, validate, encode, value) {
        var _this = _super.call(this, name, is, validate, encode) || this;
        _this.value = value;
        _this._tag = 'LiteralType';
        return _this;
    }
    return LiteralType;
}(Type));

/**
 * @since 1.0.0
 */
var literal = function (value, name) {
    if (name === void 0) { name = JSON.stringify(value); }
    var is = function (u) { return u === value; };
    return new LiteralType(name, is, function (u, c) { return (is(u) ? success(value) : failure(u, c)); }, identity, value);
};
/**
 * @since 1.0.0
 */
var KeyofType = /** @class */ (function (_super) {
    __extends(KeyofType, _super);
    function KeyofType(name, is, validate, encode, keys) {
        var _this = _super.call(this, name, is, validate, encode) || this;
        _this.keys = keys;
        _this._tag = 'KeyofType';
        return _this;
    }
    return KeyofType;
}(Type));

var hasOwnProperty = Object.prototype.hasOwnProperty;
/**
 * @since 1.0.0
 */
var keyof = function (keys, name) {
    if (name === void 0) { name = Object.keys(keys)
        .map(function (k) { return JSON.stringify(k); })
        .join(' | '); }
    var is = function (u) { return string.is(u) && hasOwnProperty.call(keys, u); };
    return new KeyofType(name, is, function (u, c) { return (is(u) ? success(u) : failure(u, c)); }, identity, keys);
};
/**
 * @since 1.0.0
 */
var RecursiveType = /** @class */ (function (_super) {
    __extends(RecursiveType, _super);
    function RecursiveType(name, is, validate, encode, runDefinition) {
        var _this = _super.call(this, name, is, validate, encode) || this;
        _this.runDefinition = runDefinition;
        _this._tag = 'RecursiveType';
        return _this;
    }
    return RecursiveType;
}(Type));

Object.defineProperty(RecursiveType.prototype, 'type', {
    get: function () {
        return this.runDefinition();
    },
    enumerable: true,
    configurable: true
});
/**
 * @since 1.0.0
 */
var recursion = function (name, definition) {
    var cache;
    var runDefinition = function () {
        if (!cache) {
            cache = definition(Self);
            cache.name = name;
        }
        return cache;
    };
    var Self = new RecursiveType(name, function (u) { return runDefinition().is(u); }, function (u, c) { return runDefinition().validate(u, c); }, function (a) { return runDefinition().encode(a); }, runDefinition);
    return Self;
};
/**
 * @since 1.0.0
 */
var ArrayType = /** @class */ (function (_super) {
    __extends(ArrayType, _super);
    function ArrayType(name, is, validate, encode, type) {
        var _this = _super.call(this, name, is, validate, encode) || this;
        _this.type = type;
        _this._tag = 'ArrayType';
        return _this;
    }
    return ArrayType;
}(Type));

/**
 * @since 1.0.0
 */
var array = function (codec, name) {
    if (name === void 0) { name = "Array<" + codec.name + ">"; }
    return new ArrayType(name, function (u) { return UnknownArray.is(u) && u.every(codec.is); }, function (u, c) {
        return chain(UnknownArray.validate(u, c), function (us) {
            var len = us.length;
            var as = us;
            var errors = [];
            for (var i = 0; i < len; i++) {
                var ui = us[i];
                var result = codec.validate(ui, appendContext(c, String(i), codec, ui));
                if (Object(fp_ts_es6_Either__WEBPACK_IMPORTED_MODULE_0__["isLeft"])(result)) {
                    pushAll(errors, result.left);
                }
                else {
                    var ai = result.right;
                    if (ai !== ui) {
                        if (as === us) {
                            as = us.slice();
                        }
                        as[i] = ai;
                    }
                }
            }
            return errors.length > 0 ? failures(errors) : success(as);
        });
    }, codec.encode === identity ? identity : function (a) { return a.map(codec.encode); }, codec);
};
/**
 * @since 1.0.0
 */
var InterfaceType = /** @class */ (function (_super) {
    __extends(InterfaceType, _super);
    function InterfaceType(name, is, validate, encode, props) {
        var _this = _super.call(this, name, is, validate, encode) || this;
        _this.props = props;
        _this._tag = 'InterfaceType';
        return _this;
    }
    return InterfaceType;
}(Type));

var getNameFromProps = function (props) {
    return Object.keys(props)
        .map(function (k) { return k + ": " + props[k].name; })
        .join(', ');
};
var useIdentity = function (codecs) {
    for (var i = 0; i < codecs.length; i++) {
        if (codecs[i].encode !== identity) {
            return false;
        }
    }
    return true;
};
var getInterfaceTypeName = function (props) {
    return "{ " + getNameFromProps(props) + " }";
};
/**
 * @since 1.0.0
 */
var type = function (props, name) {
    if (name === void 0) { name = getInterfaceTypeName(props); }
    var keys = Object.keys(props);
    var types = keys.map(function (key) { return props[key]; });
    var len = keys.length;
    return new InterfaceType(name, function (u) {
        if (UnknownRecord.is(u)) {
            for (var i = 0; i < len; i++) {
                var k = keys[i];
                if (!hasOwnProperty.call(u, k) || !types[i].is(u[k])) {
                    return false;
                }
            }
            return true;
        }
        return false;
    }, function (u, c) {
        return chain(UnknownRecord.validate(u, c), function (o) {
            var a = o;
            var errors = [];
            for (var i = 0; i < len; i++) {
                var k = keys[i];
                if (!hasOwnProperty.call(a, k)) {
                    if (a === o) {
                        a = __assign({}, o);
                    }
                    a[k] = a[k];
                }
                var ak = a[k];
                var type_1 = types[i];
                var result = type_1.validate(ak, appendContext(c, k, type_1, ak));
                if (Object(fp_ts_es6_Either__WEBPACK_IMPORTED_MODULE_0__["isLeft"])(result)) {
                    pushAll(errors, result.left);
                }
                else {
                    var vak = result.right;
                    if (vak !== ak) {
                        /* istanbul ignore next */
                        if (a === o) {
                            a = __assign({}, o);
                        }
                        a[k] = vak;
                    }
                }
            }
            return errors.length > 0 ? failures(errors) : success(a);
        });
    }, useIdentity(types)
        ? identity
        : function (a) {
            var s = __assign({}, a);
            for (var i = 0; i < len; i++) {
                var k = keys[i];
                var encode = types[i].encode;
                if (encode !== identity) {
                    s[k] = encode(a[k]);
                }
            }
            return s;
        }, props);
};
/**
 * @since 1.0.0
 */
var PartialType = /** @class */ (function (_super) {
    __extends(PartialType, _super);
    function PartialType(name, is, validate, encode, props) {
        var _this = _super.call(this, name, is, validate, encode) || this;
        _this.props = props;
        _this._tag = 'PartialType';
        return _this;
    }
    return PartialType;
}(Type));

var getPartialTypeName = function (inner) {
    return "Partial<" + inner + ">";
};
/**
 * @since 1.0.0
 */
var partial = function (props, name) {
    if (name === void 0) { name = getPartialTypeName(getInterfaceTypeName(props)); }
    var keys = Object.keys(props);
    var types = keys.map(function (key) { return props[key]; });
    var len = keys.length;
    return new PartialType(name, function (u) {
        if (UnknownRecord.is(u)) {
            for (var i = 0; i < len; i++) {
                var k = keys[i];
                var uk = u[k];
                if (uk !== undefined && !props[k].is(uk)) {
                    return false;
                }
            }
            return true;
        }
        return false;
    }, function (u, c) {
        return chain(UnknownRecord.validate(u, c), function (o) {
            var a = o;
            var errors = [];
            for (var i = 0; i < len; i++) {
                var k = keys[i];
                var ak = a[k];
                var type_2 = props[k];
                var result = type_2.validate(ak, appendContext(c, k, type_2, ak));
                if (Object(fp_ts_es6_Either__WEBPACK_IMPORTED_MODULE_0__["isLeft"])(result)) {
                    if (ak !== undefined) {
                        pushAll(errors, result.left);
                    }
                }
                else {
                    var vak = result.right;
                    if (vak !== ak) {
                        /* istanbul ignore next */
                        if (a === o) {
                            a = __assign({}, o);
                        }
                        a[k] = vak;
                    }
                }
            }
            return errors.length > 0 ? failures(errors) : success(a);
        });
    }, useIdentity(types)
        ? identity
        : function (a) {
            var s = __assign({}, a);
            for (var i = 0; i < len; i++) {
                var k = keys[i];
                var ak = a[k];
                if (ak !== undefined) {
                    s[k] = types[i].encode(ak);
                }
            }
            return s;
        }, props);
};
/**
 * @since 1.0.0
 */
var DictionaryType = /** @class */ (function (_super) {
    __extends(DictionaryType, _super);
    function DictionaryType(name, is, validate, encode, domain, codomain) {
        var _this = _super.call(this, name, is, validate, encode) || this;
        _this.domain = domain;
        _this.codomain = codomain;
        _this._tag = 'DictionaryType';
        return _this;
    }
    return DictionaryType;
}(Type));

/**
 * @since 1.7.1
 */
var record = function (domain, codomain, name) {
    if (name === void 0) { name = "{ [K in " + domain.name + "]: " + codomain.name + " }"; }
    return new DictionaryType(name, function (u) {
        if (UnknownRecord.is(u)) {
            return Object.keys(u).every(function (k) { return domain.is(k) && codomain.is(u[k]); });
        }
        return isAnyCodec(codomain) && Array.isArray(u);
    }, function (u, c) {
        if (UnknownRecord.is(u)) {
            var a = {};
            var errors = [];
            var keys = Object.keys(u);
            var len = keys.length;
            var changed = false;
            for (var i = 0; i < len; i++) {
                var k = keys[i];
                var ok = u[k];
                var domainResult = domain.validate(k, appendContext(c, k, domain, k));
                if (Object(fp_ts_es6_Either__WEBPACK_IMPORTED_MODULE_0__["isLeft"])(domainResult)) {
                    pushAll(errors, domainResult.left);
                }
                else {
                    var vk = domainResult.right;
                    changed = changed || vk !== k;
                    k = vk;
                    var codomainResult = codomain.validate(ok, appendContext(c, k, codomain, ok));
                    if (Object(fp_ts_es6_Either__WEBPACK_IMPORTED_MODULE_0__["isLeft"])(codomainResult)) {
                        pushAll(errors, codomainResult.left);
                    }
                    else {
                        var vok = codomainResult.right;
                        changed = changed || vok !== ok;
                        a[k] = vok;
                    }
                }
            }
            return errors.length > 0 ? failures(errors) : success((changed ? a : u));
        }
        if (isAnyCodec(codomain) && Array.isArray(u)) {
            return success(u);
        }
        return failure(u, c);
    }, domain.encode === identity && codomain.encode === identity
        ? identity
        : function (a) {
            var s = {};
            var keys = Object.keys(a);
            var len = keys.length;
            for (var i = 0; i < len; i++) {
                var k = keys[i];
                s[String(domain.encode(k))] = codomain.encode(a[k]);
            }
            return s;
        }, domain, codomain);
};
/**
 * @since 1.0.0
 */
var UnionType = /** @class */ (function (_super) {
    __extends(UnionType, _super);
    function UnionType(name, is, validate, encode, types) {
        var _this = _super.call(this, name, is, validate, encode) || this;
        _this.types = types;
        _this._tag = 'UnionType';
        return _this;
    }
    return UnionType;
}(Type));

var getUnionName = function (codecs) {
    return '(' + codecs.map(function (type) { return type.name; }).join(' | ') + ')';
};
/**
 * @since 1.0.0
 */
var union = function (codecs, name) {
    if (name === void 0) { name = getUnionName(codecs); }
    var index = getIndex(codecs);
    if (index !== undefined && codecs.length > 0) {
        var tag_1 = index[0], groups_1 = index[1];
        var len_1 = groups_1.length;
        var find_1 = function (value) {
            for (var i = 0; i < len_1; i++) {
                if (groups_1[i].indexOf(value) !== -1) {
                    return i;
                }
            }
            return undefined;
        };
        // tslint:disable-next-line: deprecation
        return new TaggedUnionType(name, function (u) {
            if (UnknownRecord.is(u)) {
                var i = find_1(u[tag_1]);
                return i !== undefined ? codecs[i].is(u) : false;
            }
            return false;
        }, function (u, c) {
            return chain(UnknownRecord.validate(u, c), function (r) {
                var i = find_1(r[tag_1]);
                if (i === undefined) {
                    return failure(u, c);
                }
                var codec = codecs[i];
                return codec.validate(r, appendContext(c, String(i), codec, r));
            });
        }, useIdentity(codecs)
            ? identity
            : function (a) {
                var i = find_1(a[tag_1]);
                if (i === undefined) {
                    // https://github.com/gcanti/io-ts/pull/305
                    throw new Error("no codec found to encode value in union codec " + name);
                }
                else {
                    return codecs[i].encode(a);
                }
            }, codecs, tag_1);
    }
    else {
        return new UnionType(name, function (u) { return codecs.some(function (type) { return type.is(u); }); }, function (u, c) {
            var errors = [];
            for (var i = 0; i < codecs.length; i++) {
                var codec = codecs[i];
                var result = codec.validate(u, appendContext(c, String(i), codec, u));
                if (Object(fp_ts_es6_Either__WEBPACK_IMPORTED_MODULE_0__["isLeft"])(result)) {
                    pushAll(errors, result.left);
                }
                else {
                    return success(result.right);
                }
            }
            return failures(errors);
        }, useIdentity(codecs)
            ? identity
            : function (a) {
                for (var _i = 0, codecs_1 = codecs; _i < codecs_1.length; _i++) {
                    var codec = codecs_1[_i];
                    if (codec.is(a)) {
                        return codec.encode(a);
                    }
                }
                // https://github.com/gcanti/io-ts/pull/305
                throw new Error("no codec found to encode value in union type " + name);
            }, codecs);
    }
};
/**
 * @since 1.0.0
 */
var IntersectionType = /** @class */ (function (_super) {
    __extends(IntersectionType, _super);
    function IntersectionType(name, is, validate, encode, types) {
        var _this = _super.call(this, name, is, validate, encode) || this;
        _this.types = types;
        _this._tag = 'IntersectionType';
        return _this;
    }
    return IntersectionType;
}(Type));

var mergeAll = function (base, us) {
    var equal = true;
    var primitive = true;
    for (var _i = 0, us_1 = us; _i < us_1.length; _i++) {
        var u = us_1[_i];
        if (u !== base) {
            equal = false;
        }
        if (UnknownRecord.is(u)) {
            primitive = false;
        }
    }
    if (equal) {
        return base;
    }
    else if (primitive) {
        return us[us.length - 1];
    }
    var r = {};
    for (var _a = 0, us_2 = us; _a < us_2.length; _a++) {
        var u = us_2[_a];
        for (var k in u) {
            if (u[k] !== base[k] || !r.hasOwnProperty(k)) {
                r[k] = u[k];
            }
        }
    }
    return r;
};
function intersection(codecs, name) {
    if (name === void 0) { name = "(" + codecs.map(function (type) { return type.name; }).join(' & ') + ")"; }
    var len = codecs.length;
    return new IntersectionType(name, function (u) { return codecs.every(function (type) { return type.is(u); }); }, codecs.length === 0
        ? success
        : function (u, c) {
            var us = [];
            var errors = [];
            for (var i = 0; i < len; i++) {
                var codec = codecs[i];
                var result = codec.validate(u, appendContext(c, String(i), codec, u));
                if (Object(fp_ts_es6_Either__WEBPACK_IMPORTED_MODULE_0__["isLeft"])(result)) {
                    pushAll(errors, result.left);
                }
                else {
                    us.push(result.right);
                }
            }
            return errors.length > 0 ? failures(errors) : success(mergeAll(u, us));
        }, codecs.length === 0
        ? identity
        : function (a) {
            return mergeAll(a, codecs.map(function (codec) { return codec.encode(a); }));
        }, codecs);
}
/**
 * @since 1.0.0
 */
var TupleType = /** @class */ (function (_super) {
    __extends(TupleType, _super);
    function TupleType(name, is, validate, encode, types) {
        var _this = _super.call(this, name, is, validate, encode) || this;
        _this.types = types;
        _this._tag = 'TupleType';
        return _this;
    }
    return TupleType;
}(Type));

function tuple(codecs, name) {
    if (name === void 0) { name = "[" + codecs.map(function (type) { return type.name; }).join(', ') + "]"; }
    var len = codecs.length;
    return new TupleType(name, function (u) { return UnknownArray.is(u) && u.length === len && codecs.every(function (type, i) { return type.is(u[i]); }); }, function (u, c) {
        return chain(UnknownArray.validate(u, c), function (us) {
            var as = us.length > len ? us.slice(0, len) : us; // strip additional components
            var errors = [];
            for (var i = 0; i < len; i++) {
                var a = us[i];
                var type_3 = codecs[i];
                var result = type_3.validate(a, appendContext(c, String(i), type_3, a));
                if (Object(fp_ts_es6_Either__WEBPACK_IMPORTED_MODULE_0__["isLeft"])(result)) {
                    pushAll(errors, result.left);
                }
                else {
                    var va = result.right;
                    if (va !== a) {
                        /* istanbul ignore next */
                        if (as === us) {
                            as = us.slice();
                        }
                        as[i] = va;
                    }
                }
            }
            return errors.length > 0 ? failures(errors) : success(as);
        });
    }, useIdentity(codecs) ? identity : function (a) { return codecs.map(function (type, i) { return type.encode(a[i]); }); }, codecs);
}
/**
 * @since 1.0.0
 */
var ReadonlyType = /** @class */ (function (_super) {
    __extends(ReadonlyType, _super);
    function ReadonlyType(name, is, validate, encode, type) {
        var _this = _super.call(this, name, is, validate, encode) || this;
        _this.type = type;
        _this._tag = 'ReadonlyType';
        return _this;
    }
    return ReadonlyType;
}(Type));

/**
 * @since 1.0.0
 */
var readonly = function (codec, name) {
    if (name === void 0) { name = "Readonly<" + codec.name + ">"; }
    return new ReadonlyType(name, codec.is, function (u, c) {
        return map(codec.validate(u, c), function (x) {
            if (true) {
                return Object.freeze(x);
            }
            return x;
        });
    }, codec.encode === identity ? identity : codec.encode, codec);
};
/**
 * @since 1.0.0
 */
var ReadonlyArrayType = /** @class */ (function (_super) {
    __extends(ReadonlyArrayType, _super);
    function ReadonlyArrayType(name, is, validate, encode, type) {
        var _this = _super.call(this, name, is, validate, encode) || this;
        _this.type = type;
        _this._tag = 'ReadonlyArrayType';
        return _this;
    }
    return ReadonlyArrayType;
}(Type));

/**
 * @since 1.0.0
 */
var readonlyArray = function (codec, name) {
    if (name === void 0) { name = "ReadonlyArray<" + codec.name + ">"; }
    var arrayType = array(codec);
    return new ReadonlyArrayType(name, arrayType.is, function (u, c) {
        return map(arrayType.validate(u, c), function (x) {
            if (true) {
                return Object.freeze(x);
            }
            return x;
        });
    }, arrayType.encode, codec);
};
/**
 * Strips additional properties
 * @since 1.0.0
 */
var strict = function (props, name) {
    return exact(type(props), name);
};
/**
 * @since 1.3.0
 * @deprecated
 */
var TaggedUnionType = /** @class */ (function (_super) {
    __extends(TaggedUnionType, _super);
    function TaggedUnionType(name, 
    // tslint:disable-next-line: deprecation
    is, 
    // tslint:disable-next-line: deprecation
    validate, 
    // tslint:disable-next-line: deprecation
    encode, codecs, tag) {
        var _this = _super.call(this, name, is, validate, encode, codecs) /* istanbul ignore next */ // <= workaround for https://github.com/Microsoft/TypeScript/issues/13455
         || this;
        _this.tag = tag;
        return _this;
    }
    return TaggedUnionType;
}(UnionType));

/**
 * Use `union` instead
 *
 * @since 1.3.0
 * @deprecated
 */
var taggedUnion = function (tag, codecs, name
// tslint:disable-next-line: deprecation
) {
    if (name === void 0) { name = getUnionName(codecs); }
    var U = union(codecs, name);
    // tslint:disable-next-line: deprecation
    if (U instanceof TaggedUnionType) {
        return U;
    }
    else {
        console.warn("[io-ts] Cannot build a tagged union for " + name + ", returning a de-optimized union");
        // tslint:disable-next-line: deprecation
        return new TaggedUnionType(name, U.is, U.validate, U.encode, codecs, tag);
    }
};
/**
 * @since 1.1.0
 */
var ExactType = /** @class */ (function (_super) {
    __extends(ExactType, _super);
    function ExactType(name, is, validate, encode, type) {
        var _this = _super.call(this, name, is, validate, encode) || this;
        _this.type = type;
        _this._tag = 'ExactType';
        return _this;
    }
    return ExactType;
}(Type));

var getProps = function (codec) {
    switch (codec._tag) {
        case 'RefinementType':
        case 'ReadonlyType':
            return getProps(codec.type);
        case 'InterfaceType':
        case 'StrictType':
        case 'PartialType':
            return codec.props;
        case 'IntersectionType':
            return codec.types.reduce(function (props, type) { return Object.assign(props, getProps(type)); }, {});
    }
};
var stripKeys = function (o, props) {
    var keys = Object.getOwnPropertyNames(o);
    var shouldStrip = false;
    var r = {};
    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        if (!hasOwnProperty.call(props, key)) {
            shouldStrip = true;
        }
        else {
            r[key] = o[key];
        }
    }
    return shouldStrip ? r : o;
};
var getExactTypeName = function (codec) {
    if (isInterfaceCodec(codec)) {
        return "{| " + getNameFromProps(codec.props) + " |}";
    }
    else if (isPartialCodec(codec)) {
        return getPartialTypeName("{| " + getNameFromProps(codec.props) + " |}");
    }
    return "Exact<" + codec.name + ">";
};
/**
 * Strips additional properties
 * @since 1.1.0
 */
var exact = function (codec, name) {
    if (name === void 0) { name = getExactTypeName(codec); }
    var props = getProps(codec);
    return new ExactType(name, codec.is, function (u, c) { return chain(UnknownRecord.validate(u, c), function () { return map(codec.validate(u, c), function (a) { return stripKeys(a, props); }); }); }, function (a) { return codec.encode(stripKeys(a, props)); }, codec);
};





/**
 * @since 1.0.0
 * @deprecated
 */
var getValidationError /* istanbul ignore next */ = function (value, context) { return ({
    value: value,
    context: context
}); };
/**
 * @since 1.0.0
 * @deprecated
 */
var getDefaultContext /* istanbul ignore next */ = function (decoder) { return [
    { key: '', type: decoder }
]; };
/**
 * @since 1.0.0
 * @deprecated
 */
var NeverType = /** @class */ (function (_super) {
    __extends(NeverType, _super);
    function NeverType() {
        var _this = _super.call(this, 'never', function (_) { return false; }, function (u, c) { return failure(u, c); }, 
        /* istanbul ignore next */
        function () {
            throw new Error('cannot encode never');
        }) || this;
        _this._tag = 'NeverType';
        return _this;
    }
    return NeverType;
}(Type));

/**
 * @since 1.0.0
 * @deprecated
 */
// tslint:disable-next-line: deprecation
var never = new NeverType();
/**
 * @since 1.0.0
 * @deprecated
 */
var AnyType = /** @class */ (function (_super) {
    __extends(AnyType, _super);
    function AnyType() {
        var _this = _super.call(this, 'any', function (_) { return true; }, success, identity) || this;
        _this._tag = 'AnyType';
        return _this;
    }
    return AnyType;
}(Type));

/**
 * Use `unknown` instead
 * @since 1.0.0
 * @deprecated
 */
// tslint:disable-next-line: deprecation
var any = new AnyType();
/**
 * Use `UnknownRecord` instead
 * @since 1.0.0
 * @deprecated
 */
var Dictionary = UnknownRecord;
/**
 * @since 1.0.0
 * @deprecated
 */
var ObjectType = /** @class */ (function (_super) {
    __extends(ObjectType, _super);
    function ObjectType() {
        var _this = _super.call(this, 'object', function (u) { return u !== null && typeof u === 'object'; }, function (u, c) { return (_this.is(u) ? success(u) : failure(u, c)); }, identity) || this;
        _this._tag = 'ObjectType';
        return _this;
    }
    return ObjectType;
}(Type));

/**
 * Use `UnknownRecord` instead
 * @since 1.0.0
 * @deprecated
 */
// tslint:disable-next-line: deprecation
var object = new ObjectType();
/**
 * Use `brand` instead
 * @since 1.0.0
 * @deprecated
 */
function refinement(codec, predicate, name) {
    if (name === void 0) { name = "(" + codec.name + " | " + getFunctionName(predicate) + ")"; }
    return new RefinementType(name, function (u) { return codec.is(u) && predicate(u); }, function (i, c) { return chain(codec.validate(i, c), function (a) { return (predicate(a) ? success(a) : failure(a, c)); }); }, codec.encode, codec, predicate);
}
/**
 * Use `Int` instead
 * @since 1.0.0
 * @deprecated
 */
// tslint:disable-next-line: deprecation
var Integer = refinement(number, Number.isInteger, 'Integer');
/**
 * Use `record` instead
 * @since 1.0.0
 * @deprecated
 */
var dictionary = record;
/**
 * @since 1.0.0
 * @deprecated
 */
var StrictType = /** @class */ (function (_super) {
    __extends(StrictType, _super);
    function StrictType(name, 
    // tslint:disable-next-line: deprecation
    is, 
    // tslint:disable-next-line: deprecation
    validate, 
    // tslint:disable-next-line: deprecation
    encode, props) {
        var _this = _super.call(this, name, is, validate, encode) || this;
        _this.props = props;
        _this._tag = 'StrictType';
        return _this;
    }
    return StrictType;
}(Type));

/**
 * Drops the codec "kind"
 * @since 1.1.0
 * @deprecated
 */
function clean(codec) {
    return codec;
}
function alias(codec) {
    return function () { return codec; };
}
var isNonEmpty = function (as) { return as.length > 0; };
/**
 * @internal
 */
var emptyTags = {};
function intersect(a, b) {
    var r = [];
    for (var _i = 0, a_1 = a; _i < a_1.length; _i++) {
        var v = a_1[_i];
        if (b.indexOf(v) !== -1) {
            r.push(v);
        }
    }
    return r;
}
function mergeTags(a, b) {
    if (a === emptyTags) {
        return b;
    }
    if (b === emptyTags) {
        return a;
    }
    var r = Object.assign({}, a);
    for (var k in b) {
        if (a.hasOwnProperty(k)) {
            var intersection_1 = intersect(a[k], b[k]);
            if (isNonEmpty(intersection_1)) {
                r[k] = intersection_1;
            }
            else {
                r = emptyTags;
                break;
            }
        }
        else {
            r[k] = b[k];
        }
    }
    return r;
}
function intersectTags(a, b) {
    if (a === emptyTags || b === emptyTags) {
        return emptyTags;
    }
    var r = emptyTags;
    for (var k in a) {
        if (b.hasOwnProperty(k)) {
            var intersection_2 = intersect(a[k], b[k]);
            if (intersection_2.length === 0) {
                if (r === emptyTags) {
                    r = {};
                }
                r[k] = a[k].concat(b[k]);
            }
        }
    }
    return r;
}
function isLiteralC(codec) {
    return codec._tag === 'LiteralType';
}
function isTypeC(codec) {
    return codec._tag === 'InterfaceType';
}
// tslint:disable-next-line: deprecation
function isStrictC(codec) {
    return codec._tag === 'StrictType';
}
function isExactC(codec) {
    return codec._tag === 'ExactType';
}
// tslint:disable-next-line: deprecation
function isRefinementC(codec) {
    return codec._tag === 'RefinementType';
}
function isIntersectionC(codec) {
    return codec._tag === 'IntersectionType';
}
function isUnionC(codec) {
    return codec._tag === 'UnionType';
}
function isRecursiveC(codec) {
    return codec._tag === 'RecursiveType';
}
var lazyCodecs = [];
/**
 * @internal
 */
function getTags(codec) {
    if (lazyCodecs.indexOf(codec) !== -1) {
        return emptyTags;
    }
    if (isTypeC(codec) || isStrictC(codec)) {
        var index = emptyTags;
        // tslint:disable-next-line: forin
        for (var k in codec.props) {
            var prop = codec.props[k];
            if (isLiteralC(prop)) {
                if (index === emptyTags) {
                    index = {};
                }
                index[k] = [prop.value];
            }
        }
        return index;
    }
    else if (isExactC(codec) || isRefinementC(codec)) {
        return getTags(codec.type);
    }
    else if (isIntersectionC(codec)) {
        return codec.types.reduce(function (tags, codec) { return mergeTags(tags, getTags(codec)); }, emptyTags);
    }
    else if (isUnionC(codec)) {
        return codec.types.slice(1).reduce(function (tags, codec) { return intersectTags(tags, getTags(codec)); }, getTags(codec.types[0]));
    }
    else if (isRecursiveC(codec)) {
        lazyCodecs.push(codec);
        var tags = getTags(codec.type);
        lazyCodecs.pop();
        return tags;
    }
    return emptyTags;
}
/**
 * @internal
 */
function getIndex(codecs) {
    var tags = getTags(codecs[0]);
    var keys = Object.keys(tags);
    var len = codecs.length;
    var _loop_1 = function (k) {
        var all = tags[k].slice();
        var index = [tags[k]];
        for (var i = 1; i < len; i++) {
            var codec = codecs[i];
            var ctags = getTags(codec);
            var values = ctags[k];
            // tslint:disable-next-line: strict-type-predicates
            if (values === undefined) {
                return "continue-keys";
            }
            else {
                if (values.some(function (v) { return all.indexOf(v) !== -1; })) {
                    return "continue-keys";
                }
                else {
                    all.push.apply(all, values);
                    index.push(values);
                }
            }
        }
        return { value: [k, index] };
    };
    keys: for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
        var k = keys_1[_i];
        var state_1 = _loop_1(k);
        if (typeof state_1 === "object")
            return state_1.value;
        switch (state_1) {
            case "continue-keys": continue keys;
        }
    }
    return undefined;
}


/***/ }),

/***/ "./node_modules/io-ts/lib/PathReporter.js":
/*!************************************************!*\
  !*** ./node_modules/io-ts/lib/PathReporter.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__(/*! . */ "./node_modules/io-ts/lib/index.js");
var Either_1 = __webpack_require__(/*! fp-ts/lib/Either */ "./node_modules/fp-ts/lib/Either.js");
function stringify(v) {
    if (typeof v === 'function') {
        return _1.getFunctionName(v);
    }
    if (typeof v === 'number' && !isFinite(v)) {
        if (isNaN(v)) {
            return 'NaN';
        }
        return v > 0 ? 'Infinity' : '-Infinity';
    }
    return JSON.stringify(v);
}
function getContextPath(context) {
    return context.map(function (_a) {
        var key = _a.key, type = _a.type;
        return key + ": " + type.name;
    }).join('/');
}
function getMessage(e) {
    return e.message !== undefined
        ? e.message
        : "Invalid value " + stringify(e.value) + " supplied to " + getContextPath(e.context);
}
/**
 * @since 1.0.0
 */
function failure(es) {
    return es.map(getMessage);
}
exports.failure = failure;
/**
 * @since 1.0.0
 */
function success() {
    return ['No errors!'];
}
exports.success = success;
/**
 * @since 1.0.0
 */
exports.PathReporter = {
    report: Either_1.fold(failure, success)
};


/***/ }),

/***/ "./node_modules/io-ts/lib/index.js":
/*!*****************************************!*\
  !*** ./node_modules/io-ts/lib/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @since 1.0.0
 */
var Either_1 = __webpack_require__(/*! fp-ts/lib/Either */ "./node_modules/fp-ts/lib/Either.js");
var map = Either_1.either.map;
var chain = Either_1.either.chain;
/**
 * @since 1.0.0
 */
var Type = /** @class */ (function () {
    function Type(
    /** a unique name for this codec */
    name, 
    /** a custom type guard */
    is, 
    /** succeeds if a value of type I can be decoded to a value of type A */
    validate, 
    /** converts a value of type A to a value of type O */
    encode) {
        this.name = name;
        this.is = is;
        this.validate = validate;
        this.encode = encode;
        this.decode = this.decode.bind(this);
    }
    /**
     * @since 1.0.0
     */
    Type.prototype.pipe = function (ab, name) {
        var _this = this;
        if (name === void 0) { name = "pipe(" + this.name + ", " + ab.name + ")"; }
        return new Type(name, ab.is, function (i, c) { return chain(_this.validate(i, c), function (a) { return ab.validate(a, c); }); }, this.encode === exports.identity && ab.encode === exports.identity ? exports.identity : function (b) { return _this.encode(ab.encode(b)); });
    };
    /**
     * @since 1.0.0
     */
    Type.prototype.asDecoder = function () {
        return this;
    };
    /**
     * @since 1.0.0
     */
    Type.prototype.asEncoder = function () {
        return this;
    };
    /**
     * a version of `validate` with a default context
     * @since 1.0.0
     */
    Type.prototype.decode = function (i) {
        return this.validate(i, [{ key: '', type: this, actual: i }]);
    };
    return Type;
}());
exports.Type = Type;
/**
 * @since 1.0.0
 */
exports.identity = function (a) { return a; };
/**
 * @since 1.0.0
 */
exports.getFunctionName = function (f) {
    return f.displayName || f.name || "<function" + f.length + ">";
};
/**
 * @since 1.0.0
 */
exports.getContextEntry = function (key, decoder) { return ({ key: key, type: decoder }); };
/**
 * @since 1.0.0
 */
exports.appendContext = function (c, key, decoder, actual) {
    var len = c.length;
    var r = Array(len + 1);
    for (var i = 0; i < len; i++) {
        r[i] = c[i];
    }
    r[len] = { key: key, type: decoder, actual: actual };
    return r;
};
/**
 * @since 1.0.0
 */
exports.failures = Either_1.left;
/**
 * @since 1.0.0
 */
exports.failure = function (value, context, message) {
    return exports.failures([{ value: value, context: context, message: message }]);
};
/**
 * @since 1.0.0
 */
exports.success = Either_1.right;
var pushAll = function (xs, ys) {
    var l = ys.length;
    for (var i = 0; i < l; i++) {
        xs.push(ys[i]);
    }
};
var getIsCodec = function (tag) { return function (codec) { return codec._tag === tag; }; };
// tslint:disable-next-line: deprecation
var isAnyCodec = getIsCodec('AnyType');
var isInterfaceCodec = getIsCodec('InterfaceType');
var isPartialCodec = getIsCodec('PartialType');
//
// basic types
//
/**
 * @since 1.0.0
 */
var NullType = /** @class */ (function (_super) {
    __extends(NullType, _super);
    function NullType() {
        var _this = _super.call(this, 'null', function (u) { return u === null; }, function (u, c) { return (_this.is(u) ? exports.success(u) : exports.failure(u, c)); }, exports.identity) || this;
        _this._tag = 'NullType';
        return _this;
    }
    return NullType;
}(Type));
exports.NullType = NullType;
/**
 * @since 1.0.0
 */
exports.nullType = new NullType();
exports.null = exports.nullType;
/**
 * @since 1.0.0
 */
var UndefinedType = /** @class */ (function (_super) {
    __extends(UndefinedType, _super);
    function UndefinedType() {
        var _this = _super.call(this, 'undefined', function (u) { return u === void 0; }, function (u, c) { return (_this.is(u) ? exports.success(u) : exports.failure(u, c)); }, exports.identity) || this;
        _this._tag = 'UndefinedType';
        return _this;
    }
    return UndefinedType;
}(Type));
exports.UndefinedType = UndefinedType;
var undefinedType = new UndefinedType();
exports.undefined = undefinedType;
/**
 * @since 1.2.0
 */
var VoidType = /** @class */ (function (_super) {
    __extends(VoidType, _super);
    function VoidType() {
        var _this = _super.call(this, 'void', undefinedType.is, undefinedType.validate, exports.identity) || this;
        _this._tag = 'VoidType';
        return _this;
    }
    return VoidType;
}(Type));
exports.VoidType = VoidType;
/**
 * @since 1.2.0
 */
exports.voidType = new VoidType();
exports.void = exports.voidType;
/**
 * @since 1.5.0
 */
var UnknownType = /** @class */ (function (_super) {
    __extends(UnknownType, _super);
    function UnknownType() {
        var _this = _super.call(this, 'unknown', function (_) { return true; }, exports.success, exports.identity) || this;
        _this._tag = 'UnknownType';
        return _this;
    }
    return UnknownType;
}(Type));
exports.UnknownType = UnknownType;
/**
 * @since 1.5.0
 */
exports.unknown = new UnknownType();
/**
 * @since 1.0.0
 */
var StringType = /** @class */ (function (_super) {
    __extends(StringType, _super);
    function StringType() {
        var _this = _super.call(this, 'string', function (u) { return typeof u === 'string'; }, function (u, c) { return (_this.is(u) ? exports.success(u) : exports.failure(u, c)); }, exports.identity) || this;
        _this._tag = 'StringType';
        return _this;
    }
    return StringType;
}(Type));
exports.StringType = StringType;
/**
 * @since 1.0.0
 */
exports.string = new StringType();
/**
 * @since 1.0.0
 */
var NumberType = /** @class */ (function (_super) {
    __extends(NumberType, _super);
    function NumberType() {
        var _this = _super.call(this, 'number', function (u) { return typeof u === 'number'; }, function (u, c) { return (_this.is(u) ? exports.success(u) : exports.failure(u, c)); }, exports.identity) || this;
        _this._tag = 'NumberType';
        return _this;
    }
    return NumberType;
}(Type));
exports.NumberType = NumberType;
/**
 * @since 1.0.0
 */
exports.number = new NumberType();
/**
 * @since 2.1.0
 */
var BigIntType = /** @class */ (function (_super) {
    __extends(BigIntType, _super);
    function BigIntType() {
        var _this = _super.call(this, 'bigint', 
        // tslint:disable-next-line: valid-typeof
        function (u) { return typeof u === 'bigint'; }, function (u, c) { return (_this.is(u) ? exports.success(u) : exports.failure(u, c)); }, exports.identity) || this;
        _this._tag = 'BigIntType';
        return _this;
    }
    return BigIntType;
}(Type));
exports.BigIntType = BigIntType;
/**
 * @since 2.1.0
 */
exports.bigint = new BigIntType();
/**
 * @since 1.0.0
 */
var BooleanType = /** @class */ (function (_super) {
    __extends(BooleanType, _super);
    function BooleanType() {
        var _this = _super.call(this, 'boolean', function (u) { return typeof u === 'boolean'; }, function (u, c) { return (_this.is(u) ? exports.success(u) : exports.failure(u, c)); }, exports.identity) || this;
        _this._tag = 'BooleanType';
        return _this;
    }
    return BooleanType;
}(Type));
exports.BooleanType = BooleanType;
/**
 * @since 1.0.0
 */
exports.boolean = new BooleanType();
/**
 * @since 1.0.0
 */
var AnyArrayType = /** @class */ (function (_super) {
    __extends(AnyArrayType, _super);
    function AnyArrayType() {
        var _this = _super.call(this, 'UnknownArray', Array.isArray, function (u, c) { return (_this.is(u) ? exports.success(u) : exports.failure(u, c)); }, exports.identity) || this;
        _this._tag = 'AnyArrayType';
        return _this;
    }
    return AnyArrayType;
}(Type));
exports.AnyArrayType = AnyArrayType;
/**
 * @since 1.7.1
 */
exports.UnknownArray = new AnyArrayType();
exports.Array = exports.UnknownArray;
/**
 * @since 1.0.0
 */
var AnyDictionaryType = /** @class */ (function (_super) {
    __extends(AnyDictionaryType, _super);
    function AnyDictionaryType() {
        var _this = _super.call(this, 'UnknownRecord', function (u) {
            var s = Object.prototype.toString.call(u);
            return s === '[object Object]' || s === '[object Window]';
        }, function (u, c) { return (_this.is(u) ? exports.success(u) : exports.failure(u, c)); }, exports.identity) || this;
        _this._tag = 'AnyDictionaryType';
        return _this;
    }
    return AnyDictionaryType;
}(Type));
exports.AnyDictionaryType = AnyDictionaryType;
/**
 * @since 1.7.1
 */
exports.UnknownRecord = new AnyDictionaryType();
/**
 * @since 1.0.0
 * @deprecated
 */
var FunctionType = /** @class */ (function (_super) {
    __extends(FunctionType, _super);
    function FunctionType() {
        var _this = _super.call(this, 'Function', 
        // tslint:disable-next-line:strict-type-predicates
        function (u) { return typeof u === 'function'; }, function (u, c) { return (_this.is(u) ? exports.success(u) : exports.failure(u, c)); }, exports.identity) || this;
        _this._tag = 'FunctionType';
        return _this;
    }
    return FunctionType;
}(Type));
exports.FunctionType = FunctionType;
/**
 * @since 1.0.0
 * @deprecated
 */
// tslint:disable-next-line: deprecation
exports.Function = new FunctionType();
/**
 * @since 1.0.0
 */
var RefinementType = /** @class */ (function (_super) {
    __extends(RefinementType, _super);
    function RefinementType(name, is, validate, encode, type, predicate) {
        var _this = _super.call(this, name, is, validate, encode) || this;
        _this.type = type;
        _this.predicate = predicate;
        _this._tag = 'RefinementType';
        return _this;
    }
    return RefinementType;
}(Type));
exports.RefinementType = RefinementType;
/**
 * @since 1.8.1
 */
exports.brand = function (codec, predicate, name) {
    // tslint:disable-next-line: deprecation
    return refinement(codec, predicate, name);
};
/**
 * A branded codec representing an integer
 * @since 1.8.1
 */
exports.Int = exports.brand(exports.number, function (n) { return Number.isInteger(n); }, 'Int');
/**
 * @since 1.0.0
 */
var LiteralType = /** @class */ (function (_super) {
    __extends(LiteralType, _super);
    function LiteralType(name, is, validate, encode, value) {
        var _this = _super.call(this, name, is, validate, encode) || this;
        _this.value = value;
        _this._tag = 'LiteralType';
        return _this;
    }
    return LiteralType;
}(Type));
exports.LiteralType = LiteralType;
/**
 * @since 1.0.0
 */
exports.literal = function (value, name) {
    if (name === void 0) { name = JSON.stringify(value); }
    var is = function (u) { return u === value; };
    return new LiteralType(name, is, function (u, c) { return (is(u) ? exports.success(value) : exports.failure(u, c)); }, exports.identity, value);
};
/**
 * @since 1.0.0
 */
var KeyofType = /** @class */ (function (_super) {
    __extends(KeyofType, _super);
    function KeyofType(name, is, validate, encode, keys) {
        var _this = _super.call(this, name, is, validate, encode) || this;
        _this.keys = keys;
        _this._tag = 'KeyofType';
        return _this;
    }
    return KeyofType;
}(Type));
exports.KeyofType = KeyofType;
var hasOwnProperty = Object.prototype.hasOwnProperty;
/**
 * @since 1.0.0
 */
exports.keyof = function (keys, name) {
    if (name === void 0) { name = Object.keys(keys)
        .map(function (k) { return JSON.stringify(k); })
        .join(' | '); }
    var is = function (u) { return exports.string.is(u) && hasOwnProperty.call(keys, u); };
    return new KeyofType(name, is, function (u, c) { return (is(u) ? exports.success(u) : exports.failure(u, c)); }, exports.identity, keys);
};
/**
 * @since 1.0.0
 */
var RecursiveType = /** @class */ (function (_super) {
    __extends(RecursiveType, _super);
    function RecursiveType(name, is, validate, encode, runDefinition) {
        var _this = _super.call(this, name, is, validate, encode) || this;
        _this.runDefinition = runDefinition;
        _this._tag = 'RecursiveType';
        return _this;
    }
    return RecursiveType;
}(Type));
exports.RecursiveType = RecursiveType;
Object.defineProperty(RecursiveType.prototype, 'type', {
    get: function () {
        return this.runDefinition();
    },
    enumerable: true,
    configurable: true
});
/**
 * @since 1.0.0
 */
exports.recursion = function (name, definition) {
    var cache;
    var runDefinition = function () {
        if (!cache) {
            cache = definition(Self);
            cache.name = name;
        }
        return cache;
    };
    var Self = new RecursiveType(name, function (u) { return runDefinition().is(u); }, function (u, c) { return runDefinition().validate(u, c); }, function (a) { return runDefinition().encode(a); }, runDefinition);
    return Self;
};
/**
 * @since 1.0.0
 */
var ArrayType = /** @class */ (function (_super) {
    __extends(ArrayType, _super);
    function ArrayType(name, is, validate, encode, type) {
        var _this = _super.call(this, name, is, validate, encode) || this;
        _this.type = type;
        _this._tag = 'ArrayType';
        return _this;
    }
    return ArrayType;
}(Type));
exports.ArrayType = ArrayType;
/**
 * @since 1.0.0
 */
exports.array = function (codec, name) {
    if (name === void 0) { name = "Array<" + codec.name + ">"; }
    return new ArrayType(name, function (u) { return exports.UnknownArray.is(u) && u.every(codec.is); }, function (u, c) {
        return chain(exports.UnknownArray.validate(u, c), function (us) {
            var len = us.length;
            var as = us;
            var errors = [];
            for (var i = 0; i < len; i++) {
                var ui = us[i];
                var result = codec.validate(ui, exports.appendContext(c, String(i), codec, ui));
                if (Either_1.isLeft(result)) {
                    pushAll(errors, result.left);
                }
                else {
                    var ai = result.right;
                    if (ai !== ui) {
                        if (as === us) {
                            as = us.slice();
                        }
                        as[i] = ai;
                    }
                }
            }
            return errors.length > 0 ? exports.failures(errors) : exports.success(as);
        });
    }, codec.encode === exports.identity ? exports.identity : function (a) { return a.map(codec.encode); }, codec);
};
/**
 * @since 1.0.0
 */
var InterfaceType = /** @class */ (function (_super) {
    __extends(InterfaceType, _super);
    function InterfaceType(name, is, validate, encode, props) {
        var _this = _super.call(this, name, is, validate, encode) || this;
        _this.props = props;
        _this._tag = 'InterfaceType';
        return _this;
    }
    return InterfaceType;
}(Type));
exports.InterfaceType = InterfaceType;
var getNameFromProps = function (props) {
    return Object.keys(props)
        .map(function (k) { return k + ": " + props[k].name; })
        .join(', ');
};
var useIdentity = function (codecs) {
    for (var i = 0; i < codecs.length; i++) {
        if (codecs[i].encode !== exports.identity) {
            return false;
        }
    }
    return true;
};
var getInterfaceTypeName = function (props) {
    return "{ " + getNameFromProps(props) + " }";
};
/**
 * @since 1.0.0
 */
exports.type = function (props, name) {
    if (name === void 0) { name = getInterfaceTypeName(props); }
    var keys = Object.keys(props);
    var types = keys.map(function (key) { return props[key]; });
    var len = keys.length;
    return new InterfaceType(name, function (u) {
        if (exports.UnknownRecord.is(u)) {
            for (var i = 0; i < len; i++) {
                var k = keys[i];
                if (!hasOwnProperty.call(u, k) || !types[i].is(u[k])) {
                    return false;
                }
            }
            return true;
        }
        return false;
    }, function (u, c) {
        return chain(exports.UnknownRecord.validate(u, c), function (o) {
            var a = o;
            var errors = [];
            for (var i = 0; i < len; i++) {
                var k = keys[i];
                if (!hasOwnProperty.call(a, k)) {
                    if (a === o) {
                        a = __assign({}, o);
                    }
                    a[k] = a[k];
                }
                var ak = a[k];
                var type_1 = types[i];
                var result = type_1.validate(ak, exports.appendContext(c, k, type_1, ak));
                if (Either_1.isLeft(result)) {
                    pushAll(errors, result.left);
                }
                else {
                    var vak = result.right;
                    if (vak !== ak) {
                        /* istanbul ignore next */
                        if (a === o) {
                            a = __assign({}, o);
                        }
                        a[k] = vak;
                    }
                }
            }
            return errors.length > 0 ? exports.failures(errors) : exports.success(a);
        });
    }, useIdentity(types)
        ? exports.identity
        : function (a) {
            var s = __assign({}, a);
            for (var i = 0; i < len; i++) {
                var k = keys[i];
                var encode = types[i].encode;
                if (encode !== exports.identity) {
                    s[k] = encode(a[k]);
                }
            }
            return s;
        }, props);
};
exports.interface = exports.type;
/**
 * @since 1.0.0
 */
var PartialType = /** @class */ (function (_super) {
    __extends(PartialType, _super);
    function PartialType(name, is, validate, encode, props) {
        var _this = _super.call(this, name, is, validate, encode) || this;
        _this.props = props;
        _this._tag = 'PartialType';
        return _this;
    }
    return PartialType;
}(Type));
exports.PartialType = PartialType;
var getPartialTypeName = function (inner) {
    return "Partial<" + inner + ">";
};
/**
 * @since 1.0.0
 */
exports.partial = function (props, name) {
    if (name === void 0) { name = getPartialTypeName(getInterfaceTypeName(props)); }
    var keys = Object.keys(props);
    var types = keys.map(function (key) { return props[key]; });
    var len = keys.length;
    return new PartialType(name, function (u) {
        if (exports.UnknownRecord.is(u)) {
            for (var i = 0; i < len; i++) {
                var k = keys[i];
                var uk = u[k];
                if (uk !== undefined && !props[k].is(uk)) {
                    return false;
                }
            }
            return true;
        }
        return false;
    }, function (u, c) {
        return chain(exports.UnknownRecord.validate(u, c), function (o) {
            var a = o;
            var errors = [];
            for (var i = 0; i < len; i++) {
                var k = keys[i];
                var ak = a[k];
                var type_2 = props[k];
                var result = type_2.validate(ak, exports.appendContext(c, k, type_2, ak));
                if (Either_1.isLeft(result)) {
                    if (ak !== undefined) {
                        pushAll(errors, result.left);
                    }
                }
                else {
                    var vak = result.right;
                    if (vak !== ak) {
                        /* istanbul ignore next */
                        if (a === o) {
                            a = __assign({}, o);
                        }
                        a[k] = vak;
                    }
                }
            }
            return errors.length > 0 ? exports.failures(errors) : exports.success(a);
        });
    }, useIdentity(types)
        ? exports.identity
        : function (a) {
            var s = __assign({}, a);
            for (var i = 0; i < len; i++) {
                var k = keys[i];
                var ak = a[k];
                if (ak !== undefined) {
                    s[k] = types[i].encode(ak);
                }
            }
            return s;
        }, props);
};
/**
 * @since 1.0.0
 */
var DictionaryType = /** @class */ (function (_super) {
    __extends(DictionaryType, _super);
    function DictionaryType(name, is, validate, encode, domain, codomain) {
        var _this = _super.call(this, name, is, validate, encode) || this;
        _this.domain = domain;
        _this.codomain = codomain;
        _this._tag = 'DictionaryType';
        return _this;
    }
    return DictionaryType;
}(Type));
exports.DictionaryType = DictionaryType;
/**
 * @since 1.7.1
 */
exports.record = function (domain, codomain, name) {
    if (name === void 0) { name = "{ [K in " + domain.name + "]: " + codomain.name + " }"; }
    return new DictionaryType(name, function (u) {
        if (exports.UnknownRecord.is(u)) {
            return Object.keys(u).every(function (k) { return domain.is(k) && codomain.is(u[k]); });
        }
        return isAnyCodec(codomain) && Array.isArray(u);
    }, function (u, c) {
        if (exports.UnknownRecord.is(u)) {
            var a = {};
            var errors = [];
            var keys = Object.keys(u);
            var len = keys.length;
            var changed = false;
            for (var i = 0; i < len; i++) {
                var k = keys[i];
                var ok = u[k];
                var domainResult = domain.validate(k, exports.appendContext(c, k, domain, k));
                if (Either_1.isLeft(domainResult)) {
                    pushAll(errors, domainResult.left);
                }
                else {
                    var vk = domainResult.right;
                    changed = changed || vk !== k;
                    k = vk;
                    var codomainResult = codomain.validate(ok, exports.appendContext(c, k, codomain, ok));
                    if (Either_1.isLeft(codomainResult)) {
                        pushAll(errors, codomainResult.left);
                    }
                    else {
                        var vok = codomainResult.right;
                        changed = changed || vok !== ok;
                        a[k] = vok;
                    }
                }
            }
            return errors.length > 0 ? exports.failures(errors) : exports.success((changed ? a : u));
        }
        if (isAnyCodec(codomain) && Array.isArray(u)) {
            return exports.success(u);
        }
        return exports.failure(u, c);
    }, domain.encode === exports.identity && codomain.encode === exports.identity
        ? exports.identity
        : function (a) {
            var s = {};
            var keys = Object.keys(a);
            var len = keys.length;
            for (var i = 0; i < len; i++) {
                var k = keys[i];
                s[String(domain.encode(k))] = codomain.encode(a[k]);
            }
            return s;
        }, domain, codomain);
};
/**
 * @since 1.0.0
 */
var UnionType = /** @class */ (function (_super) {
    __extends(UnionType, _super);
    function UnionType(name, is, validate, encode, types) {
        var _this = _super.call(this, name, is, validate, encode) || this;
        _this.types = types;
        _this._tag = 'UnionType';
        return _this;
    }
    return UnionType;
}(Type));
exports.UnionType = UnionType;
var getUnionName = function (codecs) {
    return '(' + codecs.map(function (type) { return type.name; }).join(' | ') + ')';
};
/**
 * @since 1.0.0
 */
exports.union = function (codecs, name) {
    if (name === void 0) { name = getUnionName(codecs); }
    var index = getIndex(codecs);
    if (index !== undefined && codecs.length > 0) {
        var tag_1 = index[0], groups_1 = index[1];
        var len_1 = groups_1.length;
        var find_1 = function (value) {
            for (var i = 0; i < len_1; i++) {
                if (groups_1[i].indexOf(value) !== -1) {
                    return i;
                }
            }
            return undefined;
        };
        // tslint:disable-next-line: deprecation
        return new TaggedUnionType(name, function (u) {
            if (exports.UnknownRecord.is(u)) {
                var i = find_1(u[tag_1]);
                return i !== undefined ? codecs[i].is(u) : false;
            }
            return false;
        }, function (u, c) {
            return chain(exports.UnknownRecord.validate(u, c), function (r) {
                var i = find_1(r[tag_1]);
                if (i === undefined) {
                    return exports.failure(u, c);
                }
                var codec = codecs[i];
                return codec.validate(r, exports.appendContext(c, String(i), codec, r));
            });
        }, useIdentity(codecs)
            ? exports.identity
            : function (a) {
                var i = find_1(a[tag_1]);
                if (i === undefined) {
                    // https://github.com/gcanti/io-ts/pull/305
                    throw new Error("no codec found to encode value in union codec " + name);
                }
                else {
                    return codecs[i].encode(a);
                }
            }, codecs, tag_1);
    }
    else {
        return new UnionType(name, function (u) { return codecs.some(function (type) { return type.is(u); }); }, function (u, c) {
            var errors = [];
            for (var i = 0; i < codecs.length; i++) {
                var codec = codecs[i];
                var result = codec.validate(u, exports.appendContext(c, String(i), codec, u));
                if (Either_1.isLeft(result)) {
                    pushAll(errors, result.left);
                }
                else {
                    return exports.success(result.right);
                }
            }
            return exports.failures(errors);
        }, useIdentity(codecs)
            ? exports.identity
            : function (a) {
                for (var _i = 0, codecs_1 = codecs; _i < codecs_1.length; _i++) {
                    var codec = codecs_1[_i];
                    if (codec.is(a)) {
                        return codec.encode(a);
                    }
                }
                // https://github.com/gcanti/io-ts/pull/305
                throw new Error("no codec found to encode value in union type " + name);
            }, codecs);
    }
};
/**
 * @since 1.0.0
 */
var IntersectionType = /** @class */ (function (_super) {
    __extends(IntersectionType, _super);
    function IntersectionType(name, is, validate, encode, types) {
        var _this = _super.call(this, name, is, validate, encode) || this;
        _this.types = types;
        _this._tag = 'IntersectionType';
        return _this;
    }
    return IntersectionType;
}(Type));
exports.IntersectionType = IntersectionType;
var mergeAll = function (base, us) {
    var equal = true;
    var primitive = true;
    for (var _i = 0, us_1 = us; _i < us_1.length; _i++) {
        var u = us_1[_i];
        if (u !== base) {
            equal = false;
        }
        if (exports.UnknownRecord.is(u)) {
            primitive = false;
        }
    }
    if (equal) {
        return base;
    }
    else if (primitive) {
        return us[us.length - 1];
    }
    var r = {};
    for (var _a = 0, us_2 = us; _a < us_2.length; _a++) {
        var u = us_2[_a];
        for (var k in u) {
            if (u[k] !== base[k] || !r.hasOwnProperty(k)) {
                r[k] = u[k];
            }
        }
    }
    return r;
};
function intersection(codecs, name) {
    if (name === void 0) { name = "(" + codecs.map(function (type) { return type.name; }).join(' & ') + ")"; }
    var len = codecs.length;
    return new IntersectionType(name, function (u) { return codecs.every(function (type) { return type.is(u); }); }, codecs.length === 0
        ? exports.success
        : function (u, c) {
            var us = [];
            var errors = [];
            for (var i = 0; i < len; i++) {
                var codec = codecs[i];
                var result = codec.validate(u, exports.appendContext(c, String(i), codec, u));
                if (Either_1.isLeft(result)) {
                    pushAll(errors, result.left);
                }
                else {
                    us.push(result.right);
                }
            }
            return errors.length > 0 ? exports.failures(errors) : exports.success(mergeAll(u, us));
        }, codecs.length === 0
        ? exports.identity
        : function (a) {
            return mergeAll(a, codecs.map(function (codec) { return codec.encode(a); }));
        }, codecs);
}
exports.intersection = intersection;
/**
 * @since 1.0.0
 */
var TupleType = /** @class */ (function (_super) {
    __extends(TupleType, _super);
    function TupleType(name, is, validate, encode, types) {
        var _this = _super.call(this, name, is, validate, encode) || this;
        _this.types = types;
        _this._tag = 'TupleType';
        return _this;
    }
    return TupleType;
}(Type));
exports.TupleType = TupleType;
function tuple(codecs, name) {
    if (name === void 0) { name = "[" + codecs.map(function (type) { return type.name; }).join(', ') + "]"; }
    var len = codecs.length;
    return new TupleType(name, function (u) { return exports.UnknownArray.is(u) && u.length === len && codecs.every(function (type, i) { return type.is(u[i]); }); }, function (u, c) {
        return chain(exports.UnknownArray.validate(u, c), function (us) {
            var as = us.length > len ? us.slice(0, len) : us; // strip additional components
            var errors = [];
            for (var i = 0; i < len; i++) {
                var a = us[i];
                var type_3 = codecs[i];
                var result = type_3.validate(a, exports.appendContext(c, String(i), type_3, a));
                if (Either_1.isLeft(result)) {
                    pushAll(errors, result.left);
                }
                else {
                    var va = result.right;
                    if (va !== a) {
                        /* istanbul ignore next */
                        if (as === us) {
                            as = us.slice();
                        }
                        as[i] = va;
                    }
                }
            }
            return errors.length > 0 ? exports.failures(errors) : exports.success(as);
        });
    }, useIdentity(codecs) ? exports.identity : function (a) { return codecs.map(function (type, i) { return type.encode(a[i]); }); }, codecs);
}
exports.tuple = tuple;
/**
 * @since 1.0.0
 */
var ReadonlyType = /** @class */ (function (_super) {
    __extends(ReadonlyType, _super);
    function ReadonlyType(name, is, validate, encode, type) {
        var _this = _super.call(this, name, is, validate, encode) || this;
        _this.type = type;
        _this._tag = 'ReadonlyType';
        return _this;
    }
    return ReadonlyType;
}(Type));
exports.ReadonlyType = ReadonlyType;
/**
 * @since 1.0.0
 */
exports.readonly = function (codec, name) {
    if (name === void 0) { name = "Readonly<" + codec.name + ">"; }
    return new ReadonlyType(name, codec.is, function (u, c) {
        return map(codec.validate(u, c), function (x) {
            if (true) {
                return Object.freeze(x);
            }
            return x;
        });
    }, codec.encode === exports.identity ? exports.identity : codec.encode, codec);
};
/**
 * @since 1.0.0
 */
var ReadonlyArrayType = /** @class */ (function (_super) {
    __extends(ReadonlyArrayType, _super);
    function ReadonlyArrayType(name, is, validate, encode, type) {
        var _this = _super.call(this, name, is, validate, encode) || this;
        _this.type = type;
        _this._tag = 'ReadonlyArrayType';
        return _this;
    }
    return ReadonlyArrayType;
}(Type));
exports.ReadonlyArrayType = ReadonlyArrayType;
/**
 * @since 1.0.0
 */
exports.readonlyArray = function (codec, name) {
    if (name === void 0) { name = "ReadonlyArray<" + codec.name + ">"; }
    var arrayType = exports.array(codec);
    return new ReadonlyArrayType(name, arrayType.is, function (u, c) {
        return map(arrayType.validate(u, c), function (x) {
            if (true) {
                return Object.freeze(x);
            }
            return x;
        });
    }, arrayType.encode, codec);
};
/**
 * Strips additional properties
 * @since 1.0.0
 */
exports.strict = function (props, name) {
    return exports.exact(exports.type(props), name);
};
/**
 * @since 1.3.0
 * @deprecated
 */
var TaggedUnionType = /** @class */ (function (_super) {
    __extends(TaggedUnionType, _super);
    function TaggedUnionType(name, 
    // tslint:disable-next-line: deprecation
    is, 
    // tslint:disable-next-line: deprecation
    validate, 
    // tslint:disable-next-line: deprecation
    encode, codecs, tag) {
        var _this = _super.call(this, name, is, validate, encode, codecs) /* istanbul ignore next */ // <= workaround for https://github.com/Microsoft/TypeScript/issues/13455
         || this;
        _this.tag = tag;
        return _this;
    }
    return TaggedUnionType;
}(UnionType));
exports.TaggedUnionType = TaggedUnionType;
/**
 * Use `union` instead
 *
 * @since 1.3.0
 * @deprecated
 */
exports.taggedUnion = function (tag, codecs, name
// tslint:disable-next-line: deprecation
) {
    if (name === void 0) { name = getUnionName(codecs); }
    var U = exports.union(codecs, name);
    // tslint:disable-next-line: deprecation
    if (U instanceof TaggedUnionType) {
        return U;
    }
    else {
        console.warn("[io-ts] Cannot build a tagged union for " + name + ", returning a de-optimized union");
        // tslint:disable-next-line: deprecation
        return new TaggedUnionType(name, U.is, U.validate, U.encode, codecs, tag);
    }
};
/**
 * @since 1.1.0
 */
var ExactType = /** @class */ (function (_super) {
    __extends(ExactType, _super);
    function ExactType(name, is, validate, encode, type) {
        var _this = _super.call(this, name, is, validate, encode) || this;
        _this.type = type;
        _this._tag = 'ExactType';
        return _this;
    }
    return ExactType;
}(Type));
exports.ExactType = ExactType;
var getProps = function (codec) {
    switch (codec._tag) {
        case 'RefinementType':
        case 'ReadonlyType':
            return getProps(codec.type);
        case 'InterfaceType':
        case 'StrictType':
        case 'PartialType':
            return codec.props;
        case 'IntersectionType':
            return codec.types.reduce(function (props, type) { return Object.assign(props, getProps(type)); }, {});
    }
};
var stripKeys = function (o, props) {
    var keys = Object.getOwnPropertyNames(o);
    var shouldStrip = false;
    var r = {};
    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        if (!hasOwnProperty.call(props, key)) {
            shouldStrip = true;
        }
        else {
            r[key] = o[key];
        }
    }
    return shouldStrip ? r : o;
};
var getExactTypeName = function (codec) {
    if (isInterfaceCodec(codec)) {
        return "{| " + getNameFromProps(codec.props) + " |}";
    }
    else if (isPartialCodec(codec)) {
        return getPartialTypeName("{| " + getNameFromProps(codec.props) + " |}");
    }
    return "Exact<" + codec.name + ">";
};
/**
 * Strips additional properties
 * @since 1.1.0
 */
exports.exact = function (codec, name) {
    if (name === void 0) { name = getExactTypeName(codec); }
    var props = getProps(codec);
    return new ExactType(name, codec.is, function (u, c) { return chain(exports.UnknownRecord.validate(u, c), function () { return map(codec.validate(u, c), function (a) { return stripKeys(a, props); }); }); }, function (a) { return codec.encode(stripKeys(a, props)); }, codec);
};
/**
 * @since 1.0.0
 * @deprecated
 */
exports.getValidationError /* istanbul ignore next */ = function (value, context) { return ({
    value: value,
    context: context
}); };
/**
 * @since 1.0.0
 * @deprecated
 */
exports.getDefaultContext /* istanbul ignore next */ = function (decoder) { return [
    { key: '', type: decoder }
]; };
/**
 * @since 1.0.0
 * @deprecated
 */
var NeverType = /** @class */ (function (_super) {
    __extends(NeverType, _super);
    function NeverType() {
        var _this = _super.call(this, 'never', function (_) { return false; }, function (u, c) { return exports.failure(u, c); }, 
        /* istanbul ignore next */
        function () {
            throw new Error('cannot encode never');
        }) || this;
        _this._tag = 'NeverType';
        return _this;
    }
    return NeverType;
}(Type));
exports.NeverType = NeverType;
/**
 * @since 1.0.0
 * @deprecated
 */
// tslint:disable-next-line: deprecation
exports.never = new NeverType();
/**
 * @since 1.0.0
 * @deprecated
 */
var AnyType = /** @class */ (function (_super) {
    __extends(AnyType, _super);
    function AnyType() {
        var _this = _super.call(this, 'any', function (_) { return true; }, exports.success, exports.identity) || this;
        _this._tag = 'AnyType';
        return _this;
    }
    return AnyType;
}(Type));
exports.AnyType = AnyType;
/**
 * Use `unknown` instead
 * @since 1.0.0
 * @deprecated
 */
// tslint:disable-next-line: deprecation
exports.any = new AnyType();
/**
 * Use `UnknownRecord` instead
 * @since 1.0.0
 * @deprecated
 */
exports.Dictionary = exports.UnknownRecord;
/**
 * @since 1.0.0
 * @deprecated
 */
var ObjectType = /** @class */ (function (_super) {
    __extends(ObjectType, _super);
    function ObjectType() {
        var _this = _super.call(this, 'object', function (u) { return u !== null && typeof u === 'object'; }, function (u, c) { return (_this.is(u) ? exports.success(u) : exports.failure(u, c)); }, exports.identity) || this;
        _this._tag = 'ObjectType';
        return _this;
    }
    return ObjectType;
}(Type));
exports.ObjectType = ObjectType;
/**
 * Use `UnknownRecord` instead
 * @since 1.0.0
 * @deprecated
 */
// tslint:disable-next-line: deprecation
exports.object = new ObjectType();
/**
 * Use `brand` instead
 * @since 1.0.0
 * @deprecated
 */
function refinement(codec, predicate, name) {
    if (name === void 0) { name = "(" + codec.name + " | " + exports.getFunctionName(predicate) + ")"; }
    return new RefinementType(name, function (u) { return codec.is(u) && predicate(u); }, function (i, c) { return chain(codec.validate(i, c), function (a) { return (predicate(a) ? exports.success(a) : exports.failure(a, c)); }); }, codec.encode, codec, predicate);
}
exports.refinement = refinement;
/**
 * Use `Int` instead
 * @since 1.0.0
 * @deprecated
 */
// tslint:disable-next-line: deprecation
exports.Integer = refinement(exports.number, Number.isInteger, 'Integer');
/**
 * Use `record` instead
 * @since 1.0.0
 * @deprecated
 */
exports.dictionary = exports.record;
/**
 * @since 1.0.0
 * @deprecated
 */
var StrictType = /** @class */ (function (_super) {
    __extends(StrictType, _super);
    function StrictType(name, 
    // tslint:disable-next-line: deprecation
    is, 
    // tslint:disable-next-line: deprecation
    validate, 
    // tslint:disable-next-line: deprecation
    encode, props) {
        var _this = _super.call(this, name, is, validate, encode) || this;
        _this.props = props;
        _this._tag = 'StrictType';
        return _this;
    }
    return StrictType;
}(Type));
exports.StrictType = StrictType;
/**
 * Drops the codec "kind"
 * @since 1.1.0
 * @deprecated
 */
function clean(codec) {
    return codec;
}
exports.clean = clean;
function alias(codec) {
    return function () { return codec; };
}
exports.alias = alias;
var isNonEmpty = function (as) { return as.length > 0; };
/**
 * @internal
 */
exports.emptyTags = {};
function intersect(a, b) {
    var r = [];
    for (var _i = 0, a_1 = a; _i < a_1.length; _i++) {
        var v = a_1[_i];
        if (b.indexOf(v) !== -1) {
            r.push(v);
        }
    }
    return r;
}
function mergeTags(a, b) {
    if (a === exports.emptyTags) {
        return b;
    }
    if (b === exports.emptyTags) {
        return a;
    }
    var r = Object.assign({}, a);
    for (var k in b) {
        if (a.hasOwnProperty(k)) {
            var intersection_1 = intersect(a[k], b[k]);
            if (isNonEmpty(intersection_1)) {
                r[k] = intersection_1;
            }
            else {
                r = exports.emptyTags;
                break;
            }
        }
        else {
            r[k] = b[k];
        }
    }
    return r;
}
function intersectTags(a, b) {
    if (a === exports.emptyTags || b === exports.emptyTags) {
        return exports.emptyTags;
    }
    var r = exports.emptyTags;
    for (var k in a) {
        if (b.hasOwnProperty(k)) {
            var intersection_2 = intersect(a[k], b[k]);
            if (intersection_2.length === 0) {
                if (r === exports.emptyTags) {
                    r = {};
                }
                r[k] = a[k].concat(b[k]);
            }
        }
    }
    return r;
}
function isLiteralC(codec) {
    return codec._tag === 'LiteralType';
}
function isTypeC(codec) {
    return codec._tag === 'InterfaceType';
}
// tslint:disable-next-line: deprecation
function isStrictC(codec) {
    return codec._tag === 'StrictType';
}
function isExactC(codec) {
    return codec._tag === 'ExactType';
}
// tslint:disable-next-line: deprecation
function isRefinementC(codec) {
    return codec._tag === 'RefinementType';
}
function isIntersectionC(codec) {
    return codec._tag === 'IntersectionType';
}
function isUnionC(codec) {
    return codec._tag === 'UnionType';
}
function isRecursiveC(codec) {
    return codec._tag === 'RecursiveType';
}
var lazyCodecs = [];
/**
 * @internal
 */
function getTags(codec) {
    if (lazyCodecs.indexOf(codec) !== -1) {
        return exports.emptyTags;
    }
    if (isTypeC(codec) || isStrictC(codec)) {
        var index = exports.emptyTags;
        // tslint:disable-next-line: forin
        for (var k in codec.props) {
            var prop = codec.props[k];
            if (isLiteralC(prop)) {
                if (index === exports.emptyTags) {
                    index = {};
                }
                index[k] = [prop.value];
            }
        }
        return index;
    }
    else if (isExactC(codec) || isRefinementC(codec)) {
        return getTags(codec.type);
    }
    else if (isIntersectionC(codec)) {
        return codec.types.reduce(function (tags, codec) { return mergeTags(tags, getTags(codec)); }, exports.emptyTags);
    }
    else if (isUnionC(codec)) {
        return codec.types.slice(1).reduce(function (tags, codec) { return intersectTags(tags, getTags(codec)); }, getTags(codec.types[0]));
    }
    else if (isRecursiveC(codec)) {
        lazyCodecs.push(codec);
        var tags = getTags(codec.type);
        lazyCodecs.pop();
        return tags;
    }
    return exports.emptyTags;
}
exports.getTags = getTags;
/**
 * @internal
 */
function getIndex(codecs) {
    var tags = getTags(codecs[0]);
    var keys = Object.keys(tags);
    var len = codecs.length;
    var _loop_1 = function (k) {
        var all = tags[k].slice();
        var index = [tags[k]];
        for (var i = 1; i < len; i++) {
            var codec = codecs[i];
            var ctags = getTags(codec);
            var values = ctags[k];
            // tslint:disable-next-line: strict-type-predicates
            if (values === undefined) {
                return "continue-keys";
            }
            else {
                if (values.some(function (v) { return all.indexOf(v) !== -1; })) {
                    return "continue-keys";
                }
                else {
                    all.push.apply(all, values);
                    index.push(values);
                }
            }
        }
        return { value: [k, index] };
    };
    keys: for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
        var k = keys_1[_i];
        var state_1 = _loop_1(k);
        if (typeof state_1 === "object")
            return state_1.value;
        switch (state_1) {
            case "continue-keys": continue keys;
        }
    }
    return undefined;
}
exports.getIndex = getIndex;


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.12.0
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */
var lowPriorityWarningWithoutStack = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });

    if (typeof console !== 'undefined') {
      console.warn(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarningWithoutStack = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarningWithoutStack(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(void 0, [format].concat(args));
    }
  };
}

var lowPriorityWarningWithoutStack$1 = lowPriorityWarningWithoutStack;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarningWithoutStack$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./src/components/preview.tsx":
/*!************************************!*\
  !*** ./src/components/preview.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
class Preview extends React.Component {
    constructor() {
        super(...arguments);
        this.containerRef = React.createRef();
    }
    render() {
        const { x, y, bounds, imageSrc } = this.props;
        const width = this.containerRef.current && this.containerRef.current.offsetWidth;
        const height = this.containerRef.current && this.containerRef.current.offsetHeight;
        const classList = ["photospheres-preview"];
        const flipUp = y + height - bounds.top > bounds.height;
        const flipLeft = x + width - bounds.left > bounds.width;
        if (flipUp && flipLeft) {
            classList.push("photospheres-flipped-up-left");
        }
        else if (flipUp) {
            classList.push("photospheres-flipped-up");
        }
        else if (flipLeft) {
            classList.push("photospheres-flipped-left");
        }
        return (React.createElement("div", { ref: this.containerRef, style: {
                top: y - (flipUp && height),
                left: x - (flipLeft && width),
                backgroundColor: this.props.backgroundColor
            }, className: classList.join(" ") },
            "Preview: ",
            React.createElement("span", { id: "preview-name" }),
            React.createElement("br", null),
            React.createElement("img", { src: imageSrc, width: "160", height: "120" }),
            this.props.imageSrc2 && (React.createElement(React.Fragment, null,
                React.createElement("br", null),
                " ",
                React.createElement("img", { src: this.props.imageSrc2, width: "160", height: "120" })))));
    }
}
exports.Preview = Preview;


/***/ }),

/***/ "./src/components/tsne.tsx":
/*!*********************************!*\
  !*** ./src/components/tsne.tsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const PropTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
const d3 = __webpack_require__(/*! d3 */ "d3");
const cluster_1 = __webpack_require__(/*! ../types/cluster */ "./src/types/cluster.ts");
const utils_1 = __webpack_require__(/*! ../utils */ "./src/utils.tsx");
const preview_1 = __webpack_require__(/*! ./preview */ "./src/components/preview.tsx");
/**
 * Returns the smallest dimensions {width, height} that fit the content
 * dimensions (width >= contentWidth and height >= contentHeight) while
 * maintaining the aspect ratio of the frame (width/height ==
 * frameWidth/frameHeight)
 * @param {[number, number, number, number]} contentBounds
 * @param {[number, number]} frameSize
 */
function fitRect([contentLeft, contentTop, contentWidth, contentHeight], [frameWidth, frameHeight]) {
    const scale = Math.max(contentWidth / frameWidth, contentHeight / frameHeight);
    const width = frameWidth * scale;
    const height = frameHeight * scale;
    const x = contentLeft - (width - contentWidth) / 2;
    const y = contentTop - (height - contentHeight) / 2;
    return [x, y, width, height];
}
/**
 * @param {Rectangle} rect
 * @param {number} frameWidth
 */
function rectToView([left, top, width, height], frameWidth) {
    return [left + width / 2, top + height / 2, frameWidth / width];
}
/**
 * Scales a rectangle out from its center
 * @param {Rectangle} rectangle
 * @param {number} scale
 */
function scaleRectangle([x, y, width, height], scale) {
    const centerX = x + width / 2;
    const centerY = y + height / 2;
    const newWidth = width * scale;
    const newHeight = height * scale;
    return [centerX - newWidth / 2, centerY - newHeight / 2, newWidth, newHeight];
}
/**
 * @param {d3.HierarchyNode<any>} node
 * @returns {number}
 */
function whichChild(node) {
    if (!node.parent)
        return 0;
    return node.parent.children.indexOf(node);
}
/**
 * @param {d3.HierarchyNode<any>} branch
 * @param {d3.HierarchyNode<any>} target
 * @returns {number}
 */
function whichBranch(branch, target) {
    const lineage = target.ancestors();
    const branchIndex = lineage.indexOf(branch);
    if (branchIndex <= 0)
        return -1;
    return whichChild(lineage[branchIndex - 1]);
}
/**
 * @param {[number, number][]} points
 */
function centroid(points) {
    const [sumX, sumY] = points.reduce(([x, y], [accX, accY]) => [x + accX, y + accY], [0, 0]);
    return [sumX / points.length, sumY / points.length];
}
/**
 * @param {[number, number][]} points
 */
function stdDist(points) {
    const [cX, cY] = centroid(points);
    const dists2 = points.map(([x, y]) => Math.pow(cX - x, 2) + Math.pow(cY - y, 2));
    const meanDist2 = dists2.reduce((a, b) => a + b, 0) / dists2.length;
    const dists = dists2.map(Math.sqrt);
    const meanDist = dists.reduce((a, b) => a + b, 0) / dists.length;
    return Math.sqrt(meanDist2 - Math.pow(meanDist, 2));
}
/**
 * Colors this node with a non-negative integer such that colorIndex(node) !=
 * colorIndex(node.parent) and colorIndex(node) != colorIndex(sibling)
 * @param {d3.HierarchyNode<any>} node
 */
function colorIndex(node) {
    let i = whichChild(node);
    i += node.parent && colorIndex(node.parent) <= i ? 1 : 0;
    return i;
}
function clusterBounds(node, depth) {
    const xs = node.leaves().map(leaf => leaf.data.x[depth]);
    const ys = node.leaves().map(leaf => leaf.data.y[depth]);
    const left = Math.min(...xs);
    const top = Math.min(...ys);
    const width = Math.max(...xs) - left;
    const height = Math.max(...ys) - top;
    return [left, top, width, height];
}
function nodeLocation(node, depth) {
    if (node.depth == 0)
        return [0, 0];
    const i = Math.min(depth, node.depth);
    const x = node.data.x[i];
    const y = node.data.y[i];
    return [x, y];
}
function clusterRadius(node, depth) {
    const points = node
        .leaves()
        .map(leaf => [leaf.data.x[depth], leaf.data.y[depth]]);
    return stdDist(points);
}
const colorCycle = [
    "#66c2a5",
    "#fc8d62",
    "#8da0cb",
    "#e78ac3",
    "#a6d854",
    "#ffd92f",
    "#e5c494"
];
class Chart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showPreview: false,
            hoverNode: null,
            mouseX: 0,
            mouseY: 0
        };
        this.svgRef = React.createRef();
        this.currentFocus = null;
        this.root = null;
        this.svg = null;
        this.leaves = null;
        this.handleNodeClick = this.handleNodeClick.bind(this);
        this.leafColor = this.leafColor.bind(this);
    }
    initClusterFunctions() {
        this.clusterBounds = utils_1.memoize(clusterBounds, (node, depth) => node.value + "," + depth);
        this.colorIndex = utils_1.memoize(colorIndex, node => node.value);
    }
    initRoot() {
        this.root = d3
            .hierarchy(this.props.data)
            .sum(node => node.size)
            .sort((a, b) => b.data.size - a.data.size);
    }
    initSVG() {
        this.svg = d3
            .select(this.svgRef.current)
            .attr("viewBox", 
        // @ts-ignore
        [
            -this.props.width / 2,
            -this.props.height / 2,
            this.props.width,
            this.props.height
        ])
            .style("font", "10px sans-serif")
            .attr("text-anchor", "middle")
            .style("cursor", "pointer")
            .on("click", () => this.focus(this.currentFocus.parent || this.root))
            .on("mousemove", () => {
            const [x, y] = d3.mouse(this.svg.node());
            const mouseX = x + this.props.width / 2;
            const mouseY = y + this.props.height / 2;
            this.setState(prevState => prevState.showPreview && { mouseX, mouseY });
        });
    }
    initLeaves() {
        this.leaves = this.svg
            .append("g")
            .selectAll("circle")
            .data(this.root.leaves())
            .join("circle")
            .on("click", this.handleNodeClick)
            .attr("r", 15)
            .on("mouseover", node => {
            this.setState({
                showPreview: true,
                hoverNode: node
            });
        })
            .on("mouseout", node => {
            setTimeout(() => this.setState(prevState => prevState.hoverNode == node && {
                showPreview: false
            }), 1000);
        });
    }
    /**
     * @param {Node} d
     */
    handleNodeClick(d) {
        d3.event.stopPropagation();
        const branchIndex = whichBranch(this.currentFocus, d);
        if (branchIndex != -1 && this.currentFocus.children) {
            this.focus(this.currentFocus.children[branchIndex]);
        }
    }
    /**
     * @param {Node} node
     */
    clusterColor(node) {
        return colorCycle[this.colorIndex(node) % colorCycle.length];
    }
    leafColor(node) {
        const bi = whichBranch(this.currentFocus, node);
        return bi != -1
            ? this.clusterColor(this.currentFocus.children[bi])
            : "#808080";
    }
    /**
     * @param {Node} node
     */
    focus(node) {
        this.currentFocus = node;
        const [x, y, scale] = rectToView(fitRect(scaleRectangle(this.clusterBounds(node, node.depth), 1.1), [
            this.props.width,
            this.props.height
        ]), this.props.width);
        const transition = this.svg.transition().duration(750);
        this.leaves
            .filter(node => whichBranch(this.currentFocus, node) != -1)
            .transition(transition)
            .attr("transform", node => {
            const [cx, cy] = nodeLocation(node, this.currentFocus.depth);
            return `translate(${(cx - x) * scale},${(cy - y) * scale})`;
        });
        /**
         * Helper function for showing/hiding relevant clusters
         */
        const onStart = (node, el) => {
            if (el.style.visibility != "visible" &&
                whichBranch(this.currentFocus, node) != -1) {
                el.style.visibility = "visible";
            }
        };
        const onEnd = (node, el) => {
            el.style.visibility =
                whichBranch(this.currentFocus, node) == -1 ? "hidden" : "visible";
        };
        this.leaves
            .transition(transition)
            .style("fill", this.leafColor)
            .style("fill-opacity", node => whichBranch(this.currentFocus, node) == -1 ? 0 : 1)
            .on("start", function (node) {
            // @ts-ignore
            onStart(node, this);
        })
            .on("end", function (node) {
            // @ts-ignore
            onEnd(node, this);
        });
    }
    componentDidMount() {
        this.initClusterFunctions();
        this.initRoot();
        this.initSVG();
        this.initLeaves();
        this.focus(this.root);
    }
    render() {
        const { hoverNode } = this.state;
        let imageSrc;
        let imageSrc2;
        if (hoverNode) {
            imageSrc = hoverNode.data.preview;
            const branch = whichBranch(this.currentFocus, hoverNode);
            imageSrc2 =
                branch != -1 && this.currentFocus.children[branch].data.preview;
        }
        return (React.createElement(React.Fragment, null,
            React.createElement("svg", { ref: this.svgRef }),
            this.state.showPreview && this.svgRef.current && (React.createElement(preview_1.Preview, { bounds: {
                    left: 0,
                    top: 0,
                    width: this.props.width,
                    height: this.props.height
                }, x: this.state.mouseX, y: this.state.mouseY, imageSrc: imageSrc, imageSrc2: imageSrc2, backgroundColor: this.leafColor(hoverNode) }))));
    }
}
exports.Chart = Chart;
Chart.propTypes = {
    data: PropTypes.objectOf(props => utils_1.validate(cluster_1.ClusterData, props)).isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    clusterOpacity: PropTypes.number,
    clusterScale: PropTypes.number
};
Chart.defaultProps = {
    clusterOpacity: 0.2,
    clusterScale: 1.5
};


/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const ReactDOM = __webpack_require__(/*! react-dom */ "react-dom");
const tsne_1 = __webpack_require__(/*! ./components/tsne */ "./src/components/tsne.tsx");
const root = document.getElementById("react-root");
(() => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch("example-data/cluster-data.json");
    const data = yield response.json();
    ReactDOM.render(
    // <Photospheres
    //   data={data}
    //   height={720}
    //   width={1280}
    //   colorMapping={createColorMapping(palettes.ylgnbu, "seq")}
    // />,
    React.createElement(tsne_1.Chart, { data: data, height: window.innerHeight, width: window.innerWidth }), root);
}))();


/***/ }),

/***/ "./src/types/cluster.ts":
/*!******************************!*\
  !*** ./src/types/cluster.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const t = __webpack_require__(/*! io-ts */ "./node_modules/io-ts/es6/index.js");
exports.ClusterData = t.recursion("ClusterData", () => t.partial({
    name: t.string,
    preview: t.string,
    size: t.number,
    x: t.array(t.number),
    y: t.array(t.number),
    children: t.array(exports.ClusterData)
}));


/***/ }),

/***/ "./src/utils.tsx":
/*!***********************!*\
  !*** ./src/utils.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const PathReporter_1 = __webpack_require__(/*! io-ts/lib/PathReporter */ "./node_modules/io-ts/lib/PathReporter.js");
const Either_1 = __webpack_require__(/*! fp-ts/lib/Either */ "./node_modules/fp-ts/lib/Either.js");
/**
 * Validates an object against a given io-ts type. Returns an error object if
 * validation fails.
 * @param type An io-ts type
 * @param value An object to validate
 * @param throwError Option to throw an error if validation fails. False by default.
 */
function validate(type, value, throwError = false) {
    const result = type.decode(value);
    if (Either_1.isRight(result)) {
        return;
    }
    const error = new Error(PathReporter_1.PathReporter.report(result).join("\n"));
    if (throwError) {
        throw error;
    }
    return error;
}
exports.validate = validate;
function keyByPrefix(obj, prefix) {
    const matches = Object.keys(obj).filter(key => key.startsWith(prefix));
    if (matches.length == 0) {
        throw new Error(`no matches found for "${prefix}"`);
    }
    if (matches.length > 1) {
        throw new Error(`multiple matches found for "${prefix}": ${matches.join(", ")}`);
    }
    return obj[matches[0]];
}
exports.keyByPrefix = keyByPrefix;
/**
 * Cosntructs a memoized instance of f
 */
function memoize(f, hash) {
    const memo = {};
    return (...args) => {
        const key = hash(...args);
        if (!(key in memo))
            memo[key] = f(...args);
        return memo[key];
    };
}
exports.memoize = memoize;


/***/ }),

/***/ "d3":
/*!*********************!*\
  !*** external "d3" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = d3;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ })

/******/ });
//# sourceMappingURL=main.js.map