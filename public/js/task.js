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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2018-01-20T17:24Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};




	var preservedScriptAttributes = {
		type: true,
		src: true,
		noModule: true
	};

	function DOMEval( code, doc, node ) {
		doc = doc || document;

		var i,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {
				if ( node[ i ] ) {
					script[ i ] = node[ i ];
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.3.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && Array.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
        if ( nodeName( elem, "iframe" ) ) {
            return elem.contentDocument;
        }

        // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
        // Treat the template element as a regular one in browsers that
        // don't support it.
        if ( nodeName( elem, "template" ) ) {
            elem = elem.content || elem;
        }

        return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc, node );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		div.style.position = "absolute";
		scrollboxSizeVal = div.offsetWidth === 36 || "absolute";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function finalPropName( name ) {
	var ret = jQuery.cssProps[ name ];
	if ( !ret ) {
		ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;
	}
	return ret;
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5
		) );
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),
		val = curCSS( elem, dimension, styles ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox;

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}

	// Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox = valueIsBorderBox &&
		( support.boxSizingReliable() || val === elem.style[ dimension ] );

	// Fall back to offsetWidth/offsetHeight when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	// Support: Android <=4.1 - 4.3 only
	// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
	if ( val === "auto" ||
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) {

		val = elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ];

		// offsetWidth/offsetHeight provide border-box values
		valueIsBorderBox = true;
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),
				isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra && boxModelAdjustment(
					elem,
					dimension,
					extra,
					isBorderBox,
					styles
				);

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && support.scrollboxSize() === styles.position ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = Date.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);
module.exports = __webpack_require__(10);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {



__webpack_require__(3);
window.dataTable = __webpack_require__(4);
__webpack_require__(5);
__webpack_require__(6);

var swal = __webpack_require__(7);
__webpack_require__(8);
__webpack_require__(9);

/* ------------------------------------------------------------------------------
*
*  # Task list view
*
*  Specific JS code additions for task_manager_list.html page
*
*  Version: 1.0
*  Latest update: Aug 1, 2015
*
* ---------------------------------------------------------------------------- */

// Create an array with the values of all the input boxes in a column
$.fn.dataTable.ext.order['dom-text'] = function (settings, col) {
    return this.api().column(col, { order: 'index' }).nodes().map(function (td, i) {
        return $('input', td).val();
    });
};

// Create an array with the values of all the select options in a column
$.fn.dataTable.ext.order['dom-select'] = function (settings, col) {
    return this.api().column(col, { order: 'index' }).nodes().map(function (td, i) {
        return $('select', td).val();
    });
};

$(function () {

    // Table setup
    // ------------------------------

    // Initialize data table
    $('.tasks-list').DataTable({

        "bDestroy": true,
        autoWidth: false,
        columnDefs: [{
            type: "natural",
            width: '20px',
            targets: 0
        }, {
            visible: false,
            targets: 1
        }, {
            width: '40%',
            targets: 2
        }, {
            width: '10%',
            targets: 3
        }, {
            orderDataType: 'dom-text',
            type: 'string',
            targets: 4
        }, {
            orderDataType: 'dom-select',
            type: 'string',
            targets: 5
        }, {
            orderable: false,
            width: '100px',
            targets: 7
        }, {
            width: '15%',
            targets: [4, 5, 6]
        }],
        order: [[0, 'desc']],
        dom: '<"datatable-header"fl><"datatable-scroll-lg"t><"datatable-footer"ip>',
        language: {
            search: '<span>Filter:</span> _INPUT_',
            searchPlaceholder: 'Type to filter...',
            lengthMenu: '<span>Show:</span> _MENU_',
            paginate: { 'first': 'First', 'last': 'Last', 'next': '&rarr;', 'previous': '&larr;' }
        },
        lengthMenu: [15, 25, 50, 75, 100],
        displayLength: 25,
        drawCallback: function drawCallback(settings) {
            var api = this.api();
            var rows = api.rows({ page: 'current' }).nodes();
            var last = null;

            // Grouod rows
            api.column(1, { page: 'current' }).data().each(function (group, i) {
                if (last !== group) {
                    $(rows).eq(i).before('<tr class="active border-double"><td colspan="8" class="text-semibold">' + group + '</td></tr>');

                    last = group;
                }
            });

            // Datepicker
            $(".datepicker").datepicker({
                showOtherMonths: true,
                dateFormat: "d MM, y"
            });

            // Select2
            $('.select').select2({
                width: '150px',
                minimumResultsForSearch: Infinity
            });

            // Reverse last 3 dropdowns orientation
            $(this).find('tbody tr').slice(-3).find('.dropdown, .btn-group').addClass('dropup');
        },
        preDrawCallback: function preDrawCallback(settings) {

            // Reverse last 3 dropdowns orientation
            $(this).find('tbody tr').slice(-3).find('.dropdown, .btn-group').removeClass('dropup');

            // Destroy Select2
            $('.select').select2().select2('destroy');
        }
    });

    // External table additions
    // ------------------------------

    // Enable Select2 select for the length option
    $('.dataTables_length select').select2({
        minimumResultsForSearch: Infinity,
        width: 'auto'
    });
});

$(document).ready(function () {
    $('.openModal').click(function () {
        var id = $(this).attr('data-id');
        var action = $(this).attr('data-action');
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
        $.ajax({
            method: 'POST', // Type of response and matches what we said in the route
            url: '/task/action', // This is the url we gave in the route
            data: { 'id': id, 'action': action }, // a JSON object to send back
            success: function success(response) {
                // What to do if we succeed
                //console.log(response);
                $(".modal-content").html(response);
            },
            error: function error(jqXHR, textStatus, errorThrown) {
                // What to do if we fail
                console.log(JSON.stringify(jqXHR));
                console.log("AJAX error: " + textStatus + ' : ' + errorThrown);
            }
        });
        action = "";
    });
});

$(document).ready(function () {
    $(document).on('click', '#delete', function (e) {

        var taskID = $(this).data('id');
        SwalDelete(taskID);
        e.preventDefault();
    });
});
function SwalDelete(taskID) {

    swal({
        title: 'Bạn có chắc chắn?',
        text: "Dữ liệu này sẽ bị xóa ngay lập tức!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Đúng, Xóa nó!',
        cancelButtonText: 'Bỏ qua',
        showLoaderOnConfirm: true,

        preConfirm: function preConfirm() {
            return new Promise(function (resolve) {
                //console.log(productId);
                data = { id: taskID };
                $.ajaxSetup({
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    }
                });
                $.ajax({
                    url: "/task/destroy",
                    type: "POST",
                    dataType: "JSON",
                    data: data
                }).done(function (response) {
                    swal('Đã xóa!', response.message, response.status);
                    location.reload(); // then reload the page.
                }).fail(function () {
                    swal('Oops...', 'Có lỗi xảy ra !', 'error');
                });
            });
        },
        allowOutsideClick: false
    });
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! jQuery UI - v1.11.4 - 2015-11-17
* http://jqueryui.com
* Includes: core.js, widget.js, mouse.js, position.js, draggable.js, resizable.js, accordion.js, autocomplete.js, button.js, datepicker.js, dialog.js, menu.js, progressbar.js, selectmenu.js, slider.js, spinner.js, tabs.js, tooltip.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */

(function (e) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : e(jQuery);
})(function (e) {
  function t(t, s) {
    var n,
        a,
        o,
        r = t.nodeName.toLowerCase();return "area" === r ? (n = t.parentNode, a = n.name, t.href && a && "map" === n.nodeName.toLowerCase() ? (o = e("img[usemap='#" + a + "']")[0], !!o && i(o)) : !1) : (/^(input|select|textarea|button|object)$/.test(r) ? !t.disabled : "a" === r ? t.href || s : s) && i(t);
  }function i(t) {
    return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function () {
      return "hidden" === e.css(this, "visibility");
    }).length;
  }function s(e) {
    for (var t, i; e.length && e[0] !== document;) {
      if (t = e.css("position"), ("absolute" === t || "relative" === t || "fixed" === t) && (i = parseInt(e.css("zIndex"), 10), !isNaN(i) && 0 !== i)) return i;e = e.parent();
    }return 0;
  }function n() {
    this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = { closeText: "Done", prevText: "Prev", nextText: "Next", currentText: "Today", monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], weekHeader: "Wk", dateFormat: "mm/dd/yy", firstDay: 0, isRTL: !1, showMonthAfterYear: !1, yearSuffix: "" }, this._defaults = { showOn: "focus", showAnim: "fadeIn", showOptions: {}, defaultDate: null, appendText: "", buttonText: "...", buttonImage: "", buttonImageOnly: !1, hideIfNoPrevNext: !1, navigationAsDateFormat: !1, gotoCurrent: !1, changeMonth: !1, changeYear: !1, yearRange: "c-10:c+10", showOtherMonths: !1, selectOtherMonths: !1, showWeek: !1, calculateWeek: this.iso8601Week, shortYearCutoff: "+10", minDate: null, maxDate: null, duration: "fast", beforeShowDay: null, beforeShow: null, onSelect: null, onChangeMonthYear: null, onClose: null, numberOfMonths: 1, showCurrentAtPos: 0, stepMonths: 1, stepBigMonths: 12, altField: "", altFormat: "", constrainInput: !0, showButtonPanel: !1, autoSize: !1, disabled: !1 }, e.extend(this._defaults, this.regional[""]), this.regional.en = e.extend(!0, {}, this.regional[""]), this.regional["en-US"] = e.extend(!0, {}, this.regional.en), this.dpDiv = a(e("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"));
  }function a(t) {
    var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return t.delegate(i, "mouseout", function () {
      e(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && e(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && e(this).removeClass("ui-datepicker-next-hover");
    }).delegate(i, "mouseover", o);
  }function o() {
    e.datepicker._isDisabledDatepicker(v.inline ? v.dpDiv.parent()[0] : v.input[0]) || (e(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), e(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && e(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && e(this).addClass("ui-datepicker-next-hover"));
  }function r(t, i) {
    e.extend(t, i);for (var s in i) {
      null == i[s] && (t[s] = i[s]);
    }return t;
  }function h(e) {
    return function () {
      var t = this.element.val();e.apply(this, arguments), this._refresh(), t !== this.element.val() && this._trigger("change");
    };
  }e.ui = e.ui || {}, e.extend(e.ui, { version: "1.11.4", keyCode: { BACKSPACE: 8, COMMA: 188, DELETE: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, LEFT: 37, PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SPACE: 32, TAB: 9, UP: 38 } }), e.fn.extend({ scrollParent: function scrollParent(t) {
      var i = this.css("position"),
          s = "absolute" === i,
          n = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
          a = this.parents().filter(function () {
        var t = e(this);return s && "static" === t.css("position") ? !1 : n.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"));
      }).eq(0);return "fixed" !== i && a.length ? a : e(this[0].ownerDocument || document);
    }, uniqueId: function () {
      var e = 0;return function () {
        return this.each(function () {
          this.id || (this.id = "ui-id-" + ++e);
        });
      };
    }(), removeUniqueId: function removeUniqueId() {
      return this.each(function () {
        /^ui-id-\d+$/.test(this.id) && e(this).removeAttr("id");
      });
    } }), e.extend(e.expr[":"], { data: e.expr.createPseudo ? e.expr.createPseudo(function (t) {
      return function (i) {
        return !!e.data(i, t);
      };
    }) : function (t, i, s) {
      return !!e.data(t, s[3]);
    }, focusable: function focusable(i) {
      return t(i, !isNaN(e.attr(i, "tabindex")));
    }, tabbable: function tabbable(i) {
      var s = e.attr(i, "tabindex"),
          n = isNaN(s);return (n || s >= 0) && t(i, !n);
    } }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function (t, i) {
    function s(t, i, s, a) {
      return e.each(n, function () {
        i -= parseFloat(e.css(t, "padding" + this)) || 0, s && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0), a && (i -= parseFloat(e.css(t, "margin" + this)) || 0);
      }), i;
    }var n = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
        a = i.toLowerCase(),
        o = { innerWidth: e.fn.innerWidth, innerHeight: e.fn.innerHeight, outerWidth: e.fn.outerWidth, outerHeight: e.fn.outerHeight };e.fn["inner" + i] = function (t) {
      return void 0 === t ? o["inner" + i].call(this) : this.each(function () {
        e(this).css(a, s(this, t) + "px");
      });
    }, e.fn["outer" + i] = function (t, n) {
      return "number" != typeof t ? o["outer" + i].call(this, t) : this.each(function () {
        e(this).css(a, s(this, t, !0, n) + "px");
      });
    };
  }), e.fn.addBack || (e.fn.addBack = function (e) {
    return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
  }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function (t) {
    return function (i) {
      return arguments.length ? t.call(this, e.camelCase(i)) : t.call(this);
    };
  }(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.fn.extend({ focus: function (t) {
      return function (i, s) {
        return "number" == typeof i ? this.each(function () {
          var t = this;setTimeout(function () {
            e(t).focus(), s && s.call(t);
          }, i);
        }) : t.apply(this, arguments);
      };
    }(e.fn.focus), disableSelection: function () {
      var e = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";return function () {
        return this.bind(e + ".ui-disableSelection", function (e) {
          e.preventDefault();
        });
      };
    }(), enableSelection: function enableSelection() {
      return this.unbind(".ui-disableSelection");
    }, zIndex: function zIndex(t) {
      if (void 0 !== t) return this.css("zIndex", t);if (this.length) for (var i, s, n = e(this[0]); n.length && n[0] !== document;) {
        if (i = n.css("position"), ("absolute" === i || "relative" === i || "fixed" === i) && (s = parseInt(n.css("zIndex"), 10), !isNaN(s) && 0 !== s)) return s;n = n.parent();
      }return 0;
    } }), e.ui.plugin = { add: function add(t, i, s) {
      var n,
          a = e.ui[t].prototype;for (n in s) {
        a.plugins[n] = a.plugins[n] || [], a.plugins[n].push([i, s[n]]);
      }
    }, call: function call(e, t, i, s) {
      var n,
          a = e.plugins[t];if (a && (s || e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType)) for (n = 0; a.length > n; n++) {
        e.options[a[n][0]] && a[n][1].apply(e.element, i);
      }
    } };var l = 0,
      u = Array.prototype.slice;e.cleanData = function (t) {
    return function (i) {
      var s, n, a;for (a = 0; null != (n = i[a]); a++) {
        try {
          s = e._data(n, "events"), s && s.remove && e(n).triggerHandler("remove");
        } catch (o) {}
      }t(i);
    };
  }(e.cleanData), e.widget = function (t, i, s) {
    var n,
        a,
        o,
        r,
        h = {},
        l = t.split(".")[0];return t = t.split(".")[1], n = l + "-" + t, s || (s = i, i = e.Widget), e.expr[":"][n.toLowerCase()] = function (t) {
      return !!e.data(t, n);
    }, e[l] = e[l] || {}, a = e[l][t], o = e[l][t] = function (e, t) {
      return this._createWidget ? (arguments.length && this._createWidget(e, t), void 0) : new o(e, t);
    }, e.extend(o, a, { version: s.version, _proto: e.extend({}, s), _childConstructors: [] }), r = new i(), r.options = e.widget.extend({}, r.options), e.each(s, function (t, s) {
      return e.isFunction(s) ? (h[t] = function () {
        var e = function e() {
          return i.prototype[t].apply(this, arguments);
        },
            n = function n(e) {
          return i.prototype[t].apply(this, e);
        };return function () {
          var t,
              i = this._super,
              a = this._superApply;return this._super = e, this._superApply = n, t = s.apply(this, arguments), this._super = i, this._superApply = a, t;
        };
      }(), void 0) : (h[t] = s, void 0);
    }), o.prototype = e.widget.extend(r, { widgetEventPrefix: a ? r.widgetEventPrefix || t : t }, h, { constructor: o, namespace: l, widgetName: t, widgetFullName: n }), a ? (e.each(a._childConstructors, function (t, i) {
      var s = i.prototype;e.widget(s.namespace + "." + s.widgetName, o, i._proto);
    }), delete a._childConstructors) : i._childConstructors.push(o), e.widget.bridge(t, o), o;
  }, e.widget.extend = function (t) {
    for (var i, s, n = u.call(arguments, 1), a = 0, o = n.length; o > a; a++) {
      for (i in n[a]) {
        s = n[a][i], n[a].hasOwnProperty(i) && void 0 !== s && (t[i] = e.isPlainObject(s) ? e.isPlainObject(t[i]) ? e.widget.extend({}, t[i], s) : e.widget.extend({}, s) : s);
      }
    }return t;
  }, e.widget.bridge = function (t, i) {
    var s = i.prototype.widgetFullName || t;e.fn[t] = function (n) {
      var a = "string" == typeof n,
          o = u.call(arguments, 1),
          r = this;return a ? this.each(function () {
        var i,
            a = e.data(this, s);return "instance" === n ? (r = a, !1) : a ? e.isFunction(a[n]) && "_" !== n.charAt(0) ? (i = a[n].apply(a, o), i !== a && void 0 !== i ? (r = i && i.jquery ? r.pushStack(i.get()) : i, !1) : void 0) : e.error("no such method '" + n + "' for " + t + " widget instance") : e.error("cannot call methods on " + t + " prior to initialization; " + "attempted to call method '" + n + "'");
      }) : (o.length && (n = e.widget.extend.apply(null, [n].concat(o))), this.each(function () {
        var t = e.data(this, s);t ? (t.option(n || {}), t._init && t._init()) : e.data(this, s, new i(n, this));
      })), r;
    };
  }, e.Widget = function () {}, e.Widget._childConstructors = [], e.Widget.prototype = { widgetName: "widget", widgetEventPrefix: "", defaultElement: "<div>", options: { disabled: !1, create: null }, _createWidget: function _createWidget(t, i) {
      i = e(i || this.defaultElement || this)[0], this.element = e(i), this.uuid = l++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = e(), this.hoverable = e(), this.focusable = e(), i !== this && (e.data(i, this.widgetFullName, this), this._on(!0, this.element, { remove: function remove(e) {
          e.target === i && this.destroy();
        } }), this.document = e(i.style ? i.ownerDocument : i.document || i), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init();
    }, _getCreateOptions: e.noop, _getCreateEventData: e.noop, _create: e.noop, _init: e.noop, destroy: function destroy() {
      this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus");
    }, _destroy: e.noop, widget: function widget() {
      return this.element;
    }, option: function option(t, i) {
      var s,
          n,
          a,
          o = t;if (0 === arguments.length) return e.widget.extend({}, this.options);if ("string" == typeof t) if (o = {}, s = t.split("."), t = s.shift(), s.length) {
        for (n = o[t] = e.widget.extend({}, this.options[t]), a = 0; s.length - 1 > a; a++) {
          n[s[a]] = n[s[a]] || {}, n = n[s[a]];
        }if (t = s.pop(), 1 === arguments.length) return void 0 === n[t] ? null : n[t];n[t] = i;
      } else {
        if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t];o[t] = i;
      }return this._setOptions(o), this;
    }, _setOptions: function _setOptions(e) {
      var t;for (t in e) {
        this._setOption(t, e[t]);
      }return this;
    }, _setOption: function _setOption(e, t) {
      return this.options[e] = t, "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!t), t && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this;
    }, enable: function enable() {
      return this._setOptions({ disabled: !1 });
    }, disable: function disable() {
      return this._setOptions({ disabled: !0 });
    }, _on: function _on(t, i, s) {
      var n,
          a = this;"boolean" != typeof t && (s = i, i = t, t = !1), s ? (i = n = e(i), this.bindings = this.bindings.add(i)) : (s = i, i = this.element, n = this.widget()), e.each(s, function (s, o) {
        function r() {
          return t || a.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof o ? a[o] : o).apply(a, arguments) : void 0;
        }"string" != typeof o && (r.guid = o.guid = o.guid || r.guid || e.guid++);var h = s.match(/^([\w:-]*)\s*(.*)$/),
            l = h[1] + a.eventNamespace,
            u = h[2];u ? n.delegate(u, l, r) : i.bind(l, r);
      });
    }, _off: function _off(t, i) {
      i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.unbind(i).undelegate(i), this.bindings = e(this.bindings.not(t).get()), this.focusable = e(this.focusable.not(t).get()), this.hoverable = e(this.hoverable.not(t).get());
    }, _delay: function _delay(e, t) {
      function i() {
        return ("string" == typeof e ? s[e] : e).apply(s, arguments);
      }var s = this;return setTimeout(i, t || 0);
    }, _hoverable: function _hoverable(t) {
      this.hoverable = this.hoverable.add(t), this._on(t, { mouseenter: function mouseenter(t) {
          e(t.currentTarget).addClass("ui-state-hover");
        }, mouseleave: function mouseleave(t) {
          e(t.currentTarget).removeClass("ui-state-hover");
        } });
    }, _focusable: function _focusable(t) {
      this.focusable = this.focusable.add(t), this._on(t, { focusin: function focusin(t) {
          e(t.currentTarget).addClass("ui-state-focus");
        }, focusout: function focusout(t) {
          e(t.currentTarget).removeClass("ui-state-focus");
        } });
    }, _trigger: function _trigger(t, i, s) {
      var n,
          a,
          o = this.options[t];if (s = s || {}, i = e.Event(i), i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], a = i.originalEvent) for (n in a) {
        n in i || (i[n] = a[n]);
      }return this.element.trigger(i, s), !(e.isFunction(o) && o.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented());
    } }, e.each({ show: "fadeIn", hide: "fadeOut" }, function (t, i) {
    e.Widget.prototype["_" + t] = function (s, n, a) {
      "string" == typeof n && (n = { effect: n });var o,
          r = n ? n === !0 || "number" == typeof n ? i : n.effect || i : t;n = n || {}, "number" == typeof n && (n = { duration: n }), o = !e.isEmptyObject(n), n.complete = a, n.delay && s.delay(n.delay), o && e.effects && e.effects.effect[r] ? s[t](n) : r !== t && s[r] ? s[r](n.duration, n.easing, a) : s.queue(function (i) {
        e(this)[t](), a && a.call(s[0]), i();
      });
    };
  }), e.widget;var d = !1;e(document).mouseup(function () {
    d = !1;
  }), e.widget("ui.mouse", { version: "1.11.4", options: { cancel: "input,textarea,button,select,option", distance: 1, delay: 0 }, _mouseInit: function _mouseInit() {
      var t = this;this.element.bind("mousedown." + this.widgetName, function (e) {
        return t._mouseDown(e);
      }).bind("click." + this.widgetName, function (i) {
        return !0 === e.data(i.target, t.widgetName + ".preventClickEvent") ? (e.removeData(i.target, t.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0;
      }), this.started = !1;
    }, _mouseDestroy: function _mouseDestroy() {
      this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
    }, _mouseDown: function _mouseDown(t) {
      if (!d) {
        this._mouseMoved = !1, this._mouseStarted && this._mouseUp(t), this._mouseDownEvent = t;var i = this,
            s = 1 === t.which,
            n = "string" == typeof this.options.cancel && t.target.nodeName ? e(t.target).closest(this.options.cancel).length : !1;return s && !n && this._mouseCapture(t) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
          i.mouseDelayMet = !0;
        }, this.options.delay)), this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(t) !== !1, !this._mouseStarted) ? (t.preventDefault(), !0) : (!0 === e.data(t.target, this.widgetName + ".preventClickEvent") && e.removeData(t.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (e) {
          return i._mouseMove(e);
        }, this._mouseUpDelegate = function (e) {
          return i._mouseUp(e);
        }, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), t.preventDefault(), d = !0, !0)) : !0;
      }
    }, _mouseMove: function _mouseMove(t) {
      if (this._mouseMoved) {
        if (e.ui.ie && (!document.documentMode || 9 > document.documentMode) && !t.button) return this._mouseUp(t);if (!t.which) return this._mouseUp(t);
      }return (t.which || t.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted);
    }, _mouseUp: function _mouseUp(t) {
      return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), d = !1, !1;
    }, _mouseDistanceMet: function _mouseDistanceMet(e) {
      return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance;
    }, _mouseDelayMet: function _mouseDelayMet() {
      return this.mouseDelayMet;
    }, _mouseStart: function _mouseStart() {}, _mouseDrag: function _mouseDrag() {}, _mouseStop: function _mouseStop() {}, _mouseCapture: function _mouseCapture() {
      return !0;
    } }), function () {
    function t(e, t, i) {
      return [parseFloat(e[0]) * (p.test(e[0]) ? t / 100 : 1), parseFloat(e[1]) * (p.test(e[1]) ? i / 100 : 1)];
    }function i(t, i) {
      return parseInt(e.css(t, i), 10) || 0;
    }function s(t) {
      var i = t[0];return 9 === i.nodeType ? { width: t.width(), height: t.height(), offset: { top: 0, left: 0 } } : e.isWindow(i) ? { width: t.width(), height: t.height(), offset: { top: t.scrollTop(), left: t.scrollLeft() } } : i.preventDefault ? { width: 0, height: 0, offset: { top: i.pageY, left: i.pageX } } : { width: t.outerWidth(), height: t.outerHeight(), offset: t.offset() };
    }e.ui = e.ui || {};var n,
        a,
        o = Math.max,
        r = Math.abs,
        h = Math.round,
        l = /left|center|right/,
        u = /top|center|bottom/,
        d = /[\+\-]\d+(\.[\d]+)?%?/,
        c = /^\w+/,
        p = /%$/,
        f = e.fn.position;e.position = { scrollbarWidth: function scrollbarWidth() {
        if (void 0 !== n) return n;var t,
            i,
            s = e("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
            a = s.children()[0];return e("body").append(s), t = a.offsetWidth, s.css("overflow", "scroll"), i = a.offsetWidth, t === i && (i = s[0].clientWidth), s.remove(), n = t - i;
      }, getScrollInfo: function getScrollInfo(t) {
        var i = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x"),
            s = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y"),
            n = "scroll" === i || "auto" === i && t.width < t.element[0].scrollWidth,
            a = "scroll" === s || "auto" === s && t.height < t.element[0].scrollHeight;return { width: a ? e.position.scrollbarWidth() : 0, height: n ? e.position.scrollbarWidth() : 0 };
      }, getWithinInfo: function getWithinInfo(t) {
        var i = e(t || window),
            s = e.isWindow(i[0]),
            n = !!i[0] && 9 === i[0].nodeType;return { element: i, isWindow: s, isDocument: n, offset: i.offset() || { left: 0, top: 0 }, scrollLeft: i.scrollLeft(), scrollTop: i.scrollTop(), width: s || n ? i.width() : i.outerWidth(), height: s || n ? i.height() : i.outerHeight() };
      } }, e.fn.position = function (n) {
      if (!n || !n.of) return f.apply(this, arguments);n = e.extend({}, n);var p,
          m,
          g,
          v,
          y,
          b,
          _ = e(n.of),
          x = e.position.getWithinInfo(n.within),
          w = e.position.getScrollInfo(x),
          k = (n.collision || "flip").split(" "),
          T = {};return b = s(_), _[0].preventDefault && (n.at = "left top"), m = b.width, g = b.height, v = b.offset, y = e.extend({}, v), e.each(["my", "at"], function () {
        var e,
            t,
            i = (n[this] || "").split(" ");1 === i.length && (i = l.test(i[0]) ? i.concat(["center"]) : u.test(i[0]) ? ["center"].concat(i) : ["center", "center"]), i[0] = l.test(i[0]) ? i[0] : "center", i[1] = u.test(i[1]) ? i[1] : "center", e = d.exec(i[0]), t = d.exec(i[1]), T[this] = [e ? e[0] : 0, t ? t[0] : 0], n[this] = [c.exec(i[0])[0], c.exec(i[1])[0]];
      }), 1 === k.length && (k[1] = k[0]), "right" === n.at[0] ? y.left += m : "center" === n.at[0] && (y.left += m / 2), "bottom" === n.at[1] ? y.top += g : "center" === n.at[1] && (y.top += g / 2), p = t(T.at, m, g), y.left += p[0], y.top += p[1], this.each(function () {
        var s,
            l,
            u = e(this),
            d = u.outerWidth(),
            c = u.outerHeight(),
            f = i(this, "marginLeft"),
            b = i(this, "marginTop"),
            D = d + f + i(this, "marginRight") + w.width,
            S = c + b + i(this, "marginBottom") + w.height,
            N = e.extend({}, y),
            M = t(T.my, u.outerWidth(), u.outerHeight());"right" === n.my[0] ? N.left -= d : "center" === n.my[0] && (N.left -= d / 2), "bottom" === n.my[1] ? N.top -= c : "center" === n.my[1] && (N.top -= c / 2), N.left += M[0], N.top += M[1], a || (N.left = h(N.left), N.top = h(N.top)), s = { marginLeft: f, marginTop: b }, e.each(["left", "top"], function (t, i) {
          e.ui.position[k[t]] && e.ui.position[k[t]][i](N, { targetWidth: m, targetHeight: g, elemWidth: d, elemHeight: c, collisionPosition: s, collisionWidth: D, collisionHeight: S, offset: [p[0] + M[0], p[1] + M[1]], my: n.my, at: n.at, within: x, elem: u });
        }), n.using && (l = function l(e) {
          var t = v.left - N.left,
              i = t + m - d,
              s = v.top - N.top,
              a = s + g - c,
              h = { target: { element: _, left: v.left, top: v.top, width: m, height: g }, element: { element: u, left: N.left, top: N.top, width: d, height: c }, horizontal: 0 > i ? "left" : t > 0 ? "right" : "center", vertical: 0 > a ? "top" : s > 0 ? "bottom" : "middle" };d > m && m > r(t + i) && (h.horizontal = "center"), c > g && g > r(s + a) && (h.vertical = "middle"), h.important = o(r(t), r(i)) > o(r(s), r(a)) ? "horizontal" : "vertical", n.using.call(this, e, h);
        }), u.offset(e.extend(N, { using: l }));
      });
    }, e.ui.position = { fit: { left: function left(e, t) {
          var i,
              s = t.within,
              n = s.isWindow ? s.scrollLeft : s.offset.left,
              a = s.width,
              r = e.left - t.collisionPosition.marginLeft,
              h = n - r,
              l = r + t.collisionWidth - a - n;t.collisionWidth > a ? h > 0 && 0 >= l ? (i = e.left + h + t.collisionWidth - a - n, e.left += h - i) : e.left = l > 0 && 0 >= h ? n : h > l ? n + a - t.collisionWidth : n : h > 0 ? e.left += h : l > 0 ? e.left -= l : e.left = o(e.left - r, e.left);
        }, top: function top(e, t) {
          var i,
              s = t.within,
              n = s.isWindow ? s.scrollTop : s.offset.top,
              a = t.within.height,
              r = e.top - t.collisionPosition.marginTop,
              h = n - r,
              l = r + t.collisionHeight - a - n;t.collisionHeight > a ? h > 0 && 0 >= l ? (i = e.top + h + t.collisionHeight - a - n, e.top += h - i) : e.top = l > 0 && 0 >= h ? n : h > l ? n + a - t.collisionHeight : n : h > 0 ? e.top += h : l > 0 ? e.top -= l : e.top = o(e.top - r, e.top);
        } }, flip: { left: function left(e, t) {
          var i,
              s,
              n = t.within,
              a = n.offset.left + n.scrollLeft,
              o = n.width,
              h = n.isWindow ? n.scrollLeft : n.offset.left,
              l = e.left - t.collisionPosition.marginLeft,
              u = l - h,
              d = l + t.collisionWidth - o - h,
              c = "left" === t.my[0] ? -t.elemWidth : "right" === t.my[0] ? t.elemWidth : 0,
              p = "left" === t.at[0] ? t.targetWidth : "right" === t.at[0] ? -t.targetWidth : 0,
              f = -2 * t.offset[0];0 > u ? (i = e.left + c + p + f + t.collisionWidth - o - a, (0 > i || r(u) > i) && (e.left += c + p + f)) : d > 0 && (s = e.left - t.collisionPosition.marginLeft + c + p + f - h, (s > 0 || d > r(s)) && (e.left += c + p + f));
        }, top: function top(e, t) {
          var i,
              s,
              n = t.within,
              a = n.offset.top + n.scrollTop,
              o = n.height,
              h = n.isWindow ? n.scrollTop : n.offset.top,
              l = e.top - t.collisionPosition.marginTop,
              u = l - h,
              d = l + t.collisionHeight - o - h,
              c = "top" === t.my[1],
              p = c ? -t.elemHeight : "bottom" === t.my[1] ? t.elemHeight : 0,
              f = "top" === t.at[1] ? t.targetHeight : "bottom" === t.at[1] ? -t.targetHeight : 0,
              m = -2 * t.offset[1];0 > u ? (s = e.top + p + f + m + t.collisionHeight - o - a, (0 > s || r(u) > s) && (e.top += p + f + m)) : d > 0 && (i = e.top - t.collisionPosition.marginTop + p + f + m - h, (i > 0 || d > r(i)) && (e.top += p + f + m));
        } }, flipfit: { left: function left() {
          e.ui.position.flip.left.apply(this, arguments), e.ui.position.fit.left.apply(this, arguments);
        }, top: function top() {
          e.ui.position.flip.top.apply(this, arguments), e.ui.position.fit.top.apply(this, arguments);
        } } }, function () {
      var t,
          i,
          s,
          n,
          o,
          r = document.getElementsByTagName("body")[0],
          h = document.createElement("div");t = document.createElement(r ? "div" : "body"), s = { visibility: "hidden", width: 0, height: 0, border: 0, margin: 0, background: "none" }, r && e.extend(s, { position: "absolute", left: "-1000px", top: "-1000px" });for (o in s) {
        t.style[o] = s[o];
      }t.appendChild(h), i = r || document.documentElement, i.insertBefore(t, i.firstChild), h.style.cssText = "position: absolute; left: 10.7432222px;", n = e(h).offset().left, a = n > 10 && 11 > n, t.innerHTML = "", i.removeChild(t);
    }();
  }(), e.ui.position, e.widget("ui.draggable", e.ui.mouse, { version: "1.11.4", widgetEventPrefix: "drag", options: { addClasses: !0, appendTo: "parent", axis: !1, connectToSortable: !1, containment: !1, cursor: "auto", cursorAt: !1, grid: !1, handle: !1, helper: "original", iframeFix: !1, opacity: !1, refreshPositions: !1, revert: !1, revertDuration: 500, scope: "default", scroll: !0, scrollSensitivity: 20, scrollSpeed: 20, snap: !1, snapMode: "both", snapTolerance: 20, stack: !1, zIndex: !1, drag: null, start: null, stop: null }, _create: function _create() {
      "original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._setHandleClassName(), this._mouseInit();
    }, _setOption: function _setOption(e, t) {
      this._super(e, t), "handle" === e && (this._removeHandleClassName(), this._setHandleClassName());
    }, _destroy: function _destroy() {
      return (this.helper || this.element).is(".ui-draggable-dragging") ? (this.destroyOnClear = !0, void 0) : (this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._removeHandleClassName(), this._mouseDestroy(), void 0);
    }, _mouseCapture: function _mouseCapture(t) {
      var i = this.options;return this._blurActiveElement(t), this.helper || i.disabled || e(t.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(t), this.handle ? (this._blockFrames(i.iframeFix === !0 ? "iframe" : i.iframeFix), !0) : !1);
    }, _blockFrames: function _blockFrames(t) {
      this.iframeBlocks = this.document.find(t).map(function () {
        var t = e(this);return e("<div>").css("position", "absolute").appendTo(t.parent()).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).offset(t.offset())[0];
      });
    }, _unblockFrames: function _unblockFrames() {
      this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks);
    }, _blurActiveElement: function _blurActiveElement(t) {
      var i = this.document[0];if (this.handleElement.is(t.target)) try {
        i.activeElement && "body" !== i.activeElement.nodeName.toLowerCase() && e(i.activeElement).blur();
      } catch (s) {}
    }, _mouseStart: function _mouseStart(t) {
      var i = this.options;return this.helper = this._createHelper(t), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), e.ui.ddmanager && (e.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = this.helper.parents().filter(function () {
        return "fixed" === e(this).css("position");
      }).length > 0, this.positionAbs = this.element.offset(), this._refreshOffsets(t), this.originalPosition = this.position = this._generatePosition(t, !1), this.originalPageX = t.pageX, this.originalPageY = t.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), this._trigger("start", t) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), e.ui.ddmanager && !i.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this._normalizeRightBottom(), this._mouseDrag(t, !0), e.ui.ddmanager && e.ui.ddmanager.dragStart(this, t), !0);
    }, _refreshOffsets: function _refreshOffsets(e) {
      this.offset = { top: this.positionAbs.top - this.margins.top, left: this.positionAbs.left - this.margins.left, scroll: !1, parent: this._getParentOffset(), relative: this._getRelativeOffset() }, this.offset.click = { left: e.pageX - this.offset.left, top: e.pageY - this.offset.top };
    }, _mouseDrag: function _mouseDrag(t, i) {
      if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(t, !0), this.positionAbs = this._convertPositionTo("absolute"), !i) {
        var s = this._uiHash();if (this._trigger("drag", t, s) === !1) return this._mouseUp({}), !1;this.position = s.position;
      }return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", e.ui.ddmanager && e.ui.ddmanager.drag(this, t), !1;
    }, _mouseStop: function _mouseStop(t) {
      var i = this,
          s = !1;return e.ui.ddmanager && !this.options.dropBehaviour && (s = e.ui.ddmanager.drop(this, t)), this.dropped && (s = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !s || "valid" === this.options.revert && s || this.options.revert === !0 || e.isFunction(this.options.revert) && this.options.revert.call(this.element, s) ? e(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
        i._trigger("stop", t) !== !1 && i._clear();
      }) : this._trigger("stop", t) !== !1 && this._clear(), !1;
    }, _mouseUp: function _mouseUp(t) {
      return this._unblockFrames(), e.ui.ddmanager && e.ui.ddmanager.dragStop(this, t), this.handleElement.is(t.target) && this.element.focus(), e.ui.mouse.prototype._mouseUp.call(this, t);
    }, cancel: function cancel() {
      return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this;
    }, _getHandle: function _getHandle(t) {
      return this.options.handle ? !!e(t.target).closest(this.element.find(this.options.handle)).length : !0;
    }, _setHandleClassName: function _setHandleClassName() {
      this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this.handleElement.addClass("ui-draggable-handle");
    }, _removeHandleClassName: function _removeHandleClassName() {
      this.handleElement.removeClass("ui-draggable-handle");
    }, _createHelper: function _createHelper(t) {
      var i = this.options,
          s = e.isFunction(i.helper),
          n = s ? e(i.helper.apply(this.element[0], [t])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;return n.parents("body").length || n.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo), s && n[0] === this.element[0] && this._setPositionRelative(), n[0] === this.element[0] || /(fixed|absolute)/.test(n.css("position")) || n.css("position", "absolute"), n;
    }, _setPositionRelative: function _setPositionRelative() {
      /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative");
    }, _adjustOffsetFromHelper: function _adjustOffsetFromHelper(t) {
      "string" == typeof t && (t = t.split(" ")), e.isArray(t) && (t = { left: +t[0], top: +t[1] || 0 }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top);
    }, _isRootNode: function _isRootNode(e) {
      return (/(html|body)/i.test(e.tagName) || e === this.document[0]
      );
    }, _getParentOffset: function _getParentOffset() {
      var t = this.offsetParent.offset(),
          i = this.document[0];return "absolute" === this.cssPosition && this.scrollParent[0] !== i && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (t = { top: 0, left: 0 }), { top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0) };
    }, _getRelativeOffset: function _getRelativeOffset() {
      if ("relative" !== this.cssPosition) return { top: 0, left: 0 };var e = this.element.position(),
          t = this._isRootNode(this.scrollParent[0]);return { top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + (t ? 0 : this.scrollParent.scrollTop()), left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + (t ? 0 : this.scrollParent.scrollLeft()) };
    }, _cacheMargins: function _cacheMargins() {
      this.margins = { left: parseInt(this.element.css("marginLeft"), 10) || 0, top: parseInt(this.element.css("marginTop"), 10) || 0, right: parseInt(this.element.css("marginRight"), 10) || 0, bottom: parseInt(this.element.css("marginBottom"), 10) || 0 };
    }, _cacheHelperProportions: function _cacheHelperProportions() {
      this.helperProportions = { width: this.helper.outerWidth(), height: this.helper.outerHeight() };
    }, _setContainment: function _setContainment() {
      var t,
          i,
          s,
          n = this.options,
          a = this.document[0];return this.relativeContainer = null, n.containment ? "window" === n.containment ? (this.containment = [e(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, e(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, e(window).scrollLeft() + e(window).width() - this.helperProportions.width - this.margins.left, e(window).scrollTop() + (e(window).height() || a.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], void 0) : "document" === n.containment ? (this.containment = [0, 0, e(a).width() - this.helperProportions.width - this.margins.left, (e(a).height() || a.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], void 0) : n.containment.constructor === Array ? (this.containment = n.containment, void 0) : ("parent" === n.containment && (n.containment = this.helper[0].parentNode), i = e(n.containment), s = i[0], s && (t = /(scroll|auto)/.test(i.css("overflow")), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (t ? Math.max(s.scrollWidth, s.offsetWidth) : s.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (t ? Math.max(s.scrollHeight, s.offsetHeight) : s.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = i), void 0) : (this.containment = null, void 0);
    }, _convertPositionTo: function _convertPositionTo(e, t) {
      t || (t = this.position);var i = "absolute" === e ? 1 : -1,
          s = this._isRootNode(this.scrollParent[0]);return { top: t.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top : s ? 0 : this.offset.scroll.top) * i, left: t.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left : s ? 0 : this.offset.scroll.left) * i };
    }, _generatePosition: function _generatePosition(e, t) {
      var i,
          s,
          n,
          a,
          o = this.options,
          r = this._isRootNode(this.scrollParent[0]),
          h = e.pageX,
          l = e.pageY;return r && this.offset.scroll || (this.offset.scroll = { top: this.scrollParent.scrollTop(), left: this.scrollParent.scrollLeft() }), t && (this.containment && (this.relativeContainer ? (s = this.relativeContainer.offset(), i = [this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top]) : i = this.containment, e.pageX - this.offset.click.left < i[0] && (h = i[0] + this.offset.click.left), e.pageY - this.offset.click.top < i[1] && (l = i[1] + this.offset.click.top), e.pageX - this.offset.click.left > i[2] && (h = i[2] + this.offset.click.left), e.pageY - this.offset.click.top > i[3] && (l = i[3] + this.offset.click.top)), o.grid && (n = o.grid[1] ? this.originalPageY + Math.round((l - this.originalPageY) / o.grid[1]) * o.grid[1] : this.originalPageY, l = i ? n - this.offset.click.top >= i[1] || n - this.offset.click.top > i[3] ? n : n - this.offset.click.top >= i[1] ? n - o.grid[1] : n + o.grid[1] : n, a = o.grid[0] ? this.originalPageX + Math.round((h - this.originalPageX) / o.grid[0]) * o.grid[0] : this.originalPageX, h = i ? a - this.offset.click.left >= i[0] || a - this.offset.click.left > i[2] ? a : a - this.offset.click.left >= i[0] ? a - o.grid[0] : a + o.grid[0] : a), "y" === o.axis && (h = this.originalPageX), "x" === o.axis && (l = this.originalPageY)), { top: l - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : r ? 0 : this.offset.scroll.top), left: h - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : r ? 0 : this.offset.scroll.left) };
    }, _clear: function _clear() {
      this.helper.removeClass("ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy();
    }, _normalizeRightBottom: function _normalizeRightBottom() {
      "y" !== this.options.axis && "auto" !== this.helper.css("right") && (this.helper.width(this.helper.width()), this.helper.css("right", "auto")), "x" !== this.options.axis && "auto" !== this.helper.css("bottom") && (this.helper.height(this.helper.height()), this.helper.css("bottom", "auto"));
    }, _trigger: function _trigger(t, i, s) {
      return s = s || this._uiHash(), e.ui.plugin.call(this, t, [i, s, this], !0), /^(drag|start|stop)/.test(t) && (this.positionAbs = this._convertPositionTo("absolute"), s.offset = this.positionAbs), e.Widget.prototype._trigger.call(this, t, i, s);
    }, plugins: {}, _uiHash: function _uiHash() {
      return { helper: this.helper, position: this.position, originalPosition: this.originalPosition, offset: this.positionAbs };
    } }), e.ui.plugin.add("draggable", "connectToSortable", { start: function start(t, i, s) {
      var n = e.extend({}, i, { item: s.element });s.sortables = [], e(s.options.connectToSortable).each(function () {
        var i = e(this).sortable("instance");i && !i.options.disabled && (s.sortables.push(i), i.refreshPositions(), i._trigger("activate", t, n));
      });
    }, stop: function stop(t, i, s) {
      var n = e.extend({}, i, { item: s.element });s.cancelHelperRemoval = !1, e.each(s.sortables, function () {
        var e = this;e.isOver ? (e.isOver = 0, s.cancelHelperRemoval = !0, e.cancelHelperRemoval = !1, e._storedCSS = { position: e.placeholder.css("position"), top: e.placeholder.css("top"), left: e.placeholder.css("left") }, e._mouseStop(t), e.options.helper = e.options._helper) : (e.cancelHelperRemoval = !0, e._trigger("deactivate", t, n));
      });
    }, drag: function drag(t, i, s) {
      e.each(s.sortables, function () {
        var n = !1,
            a = this;a.positionAbs = s.positionAbs, a.helperProportions = s.helperProportions, a.offset.click = s.offset.click, a._intersectsWith(a.containerCache) && (n = !0, e.each(s.sortables, function () {
          return this.positionAbs = s.positionAbs, this.helperProportions = s.helperProportions, this.offset.click = s.offset.click, this !== a && this._intersectsWith(this.containerCache) && e.contains(a.element[0], this.element[0]) && (n = !1), n;
        })), n ? (a.isOver || (a.isOver = 1, s._parent = i.helper.parent(), a.currentItem = i.helper.appendTo(a.element).data("ui-sortable-item", !0), a.options._helper = a.options.helper, a.options.helper = function () {
          return i.helper[0];
        }, t.target = a.currentItem[0], a._mouseCapture(t, !0), a._mouseStart(t, !0, !0), a.offset.click.top = s.offset.click.top, a.offset.click.left = s.offset.click.left, a.offset.parent.left -= s.offset.parent.left - a.offset.parent.left, a.offset.parent.top -= s.offset.parent.top - a.offset.parent.top, s._trigger("toSortable", t), s.dropped = a.element, e.each(s.sortables, function () {
          this.refreshPositions();
        }), s.currentItem = s.element, a.fromOutside = s), a.currentItem && (a._mouseDrag(t), i.position = a.position)) : a.isOver && (a.isOver = 0, a.cancelHelperRemoval = !0, a.options._revert = a.options.revert, a.options.revert = !1, a._trigger("out", t, a._uiHash(a)), a._mouseStop(t, !0), a.options.revert = a.options._revert, a.options.helper = a.options._helper, a.placeholder && a.placeholder.remove(), i.helper.appendTo(s._parent), s._refreshOffsets(t), i.position = s._generatePosition(t, !0), s._trigger("fromSortable", t), s.dropped = !1, e.each(s.sortables, function () {
          this.refreshPositions();
        }));
      });
    } }), e.ui.plugin.add("draggable", "cursor", { start: function start(t, i, s) {
      var n = e("body"),
          a = s.options;n.css("cursor") && (a._cursor = n.css("cursor")), n.css("cursor", a.cursor);
    }, stop: function stop(t, i, s) {
      var n = s.options;n._cursor && e("body").css("cursor", n._cursor);
    } }), e.ui.plugin.add("draggable", "opacity", { start: function start(t, i, s) {
      var n = e(i.helper),
          a = s.options;n.css("opacity") && (a._opacity = n.css("opacity")), n.css("opacity", a.opacity);
    }, stop: function stop(t, i, s) {
      var n = s.options;n._opacity && e(i.helper).css("opacity", n._opacity);
    } }), e.ui.plugin.add("draggable", "scroll", { start: function start(e, t, i) {
      i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)), i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset());
    }, drag: function drag(t, i, s) {
      var n = s.options,
          a = !1,
          o = s.scrollParentNotHidden[0],
          r = s.document[0];o !== r && "HTML" !== o.tagName ? (n.axis && "x" === n.axis || (s.overflowOffset.top + o.offsetHeight - t.pageY < n.scrollSensitivity ? o.scrollTop = a = o.scrollTop + n.scrollSpeed : t.pageY - s.overflowOffset.top < n.scrollSensitivity && (o.scrollTop = a = o.scrollTop - n.scrollSpeed)), n.axis && "y" === n.axis || (s.overflowOffset.left + o.offsetWidth - t.pageX < n.scrollSensitivity ? o.scrollLeft = a = o.scrollLeft + n.scrollSpeed : t.pageX - s.overflowOffset.left < n.scrollSensitivity && (o.scrollLeft = a = o.scrollLeft - n.scrollSpeed))) : (n.axis && "x" === n.axis || (t.pageY - e(r).scrollTop() < n.scrollSensitivity ? a = e(r).scrollTop(e(r).scrollTop() - n.scrollSpeed) : e(window).height() - (t.pageY - e(r).scrollTop()) < n.scrollSensitivity && (a = e(r).scrollTop(e(r).scrollTop() + n.scrollSpeed))), n.axis && "y" === n.axis || (t.pageX - e(r).scrollLeft() < n.scrollSensitivity ? a = e(r).scrollLeft(e(r).scrollLeft() - n.scrollSpeed) : e(window).width() - (t.pageX - e(r).scrollLeft()) < n.scrollSensitivity && (a = e(r).scrollLeft(e(r).scrollLeft() + n.scrollSpeed)))), a !== !1 && e.ui.ddmanager && !n.dropBehaviour && e.ui.ddmanager.prepareOffsets(s, t);
    } }), e.ui.plugin.add("draggable", "snap", { start: function start(t, i, s) {
      var n = s.options;s.snapElements = [], e(n.snap.constructor !== String ? n.snap.items || ":data(ui-draggable)" : n.snap).each(function () {
        var t = e(this),
            i = t.offset();this !== s.element[0] && s.snapElements.push({ item: this, width: t.outerWidth(), height: t.outerHeight(), top: i.top, left: i.left });
      });
    }, drag: function drag(t, i, s) {
      var n,
          a,
          o,
          r,
          h,
          l,
          u,
          d,
          c,
          p,
          f = s.options,
          m = f.snapTolerance,
          g = i.offset.left,
          v = g + s.helperProportions.width,
          y = i.offset.top,
          b = y + s.helperProportions.height;for (c = s.snapElements.length - 1; c >= 0; c--) {
        h = s.snapElements[c].left - s.margins.left, l = h + s.snapElements[c].width, u = s.snapElements[c].top - s.margins.top, d = u + s.snapElements[c].height, h - m > v || g > l + m || u - m > b || y > d + m || !e.contains(s.snapElements[c].item.ownerDocument, s.snapElements[c].item) ? (s.snapElements[c].snapping && s.options.snap.release && s.options.snap.release.call(s.element, t, e.extend(s._uiHash(), { snapItem: s.snapElements[c].item })), s.snapElements[c].snapping = !1) : ("inner" !== f.snapMode && (n = m >= Math.abs(u - b), a = m >= Math.abs(d - y), o = m >= Math.abs(h - v), r = m >= Math.abs(l - g), n && (i.position.top = s._convertPositionTo("relative", { top: u - s.helperProportions.height, left: 0 }).top), a && (i.position.top = s._convertPositionTo("relative", { top: d, left: 0 }).top), o && (i.position.left = s._convertPositionTo("relative", { top: 0, left: h - s.helperProportions.width }).left), r && (i.position.left = s._convertPositionTo("relative", { top: 0, left: l }).left)), p = n || a || o || r, "outer" !== f.snapMode && (n = m >= Math.abs(u - y), a = m >= Math.abs(d - b), o = m >= Math.abs(h - g), r = m >= Math.abs(l - v), n && (i.position.top = s._convertPositionTo("relative", { top: u, left: 0 }).top), a && (i.position.top = s._convertPositionTo("relative", { top: d - s.helperProportions.height, left: 0 }).top), o && (i.position.left = s._convertPositionTo("relative", { top: 0, left: h }).left), r && (i.position.left = s._convertPositionTo("relative", { top: 0, left: l - s.helperProportions.width }).left)), !s.snapElements[c].snapping && (n || a || o || r || p) && s.options.snap.snap && s.options.snap.snap.call(s.element, t, e.extend(s._uiHash(), { snapItem: s.snapElements[c].item })), s.snapElements[c].snapping = n || a || o || r || p);
      }
    } }), e.ui.plugin.add("draggable", "stack", { start: function start(t, i, s) {
      var n,
          a = s.options,
          o = e.makeArray(e(a.stack)).sort(function (t, i) {
        return (parseInt(e(t).css("zIndex"), 10) || 0) - (parseInt(e(i).css("zIndex"), 10) || 0);
      });o.length && (n = parseInt(e(o[0]).css("zIndex"), 10) || 0, e(o).each(function (t) {
        e(this).css("zIndex", n + t);
      }), this.css("zIndex", n + o.length));
    } }), e.ui.plugin.add("draggable", "zIndex", { start: function start(t, i, s) {
      var n = e(i.helper),
          a = s.options;n.css("zIndex") && (a._zIndex = n.css("zIndex")), n.css("zIndex", a.zIndex);
    }, stop: function stop(t, i, s) {
      var n = s.options;n._zIndex && e(i.helper).css("zIndex", n._zIndex);
    } }), e.ui.draggable, e.widget("ui.resizable", e.ui.mouse, { version: "1.11.4", widgetEventPrefix: "resize", options: { alsoResize: !1, animate: !1, animateDuration: "slow", animateEasing: "swing", aspectRatio: !1, autoHide: !1, containment: !1, ghost: !1, grid: !1, handles: "e,s,se", helper: !1, maxHeight: null, maxWidth: null, minHeight: 10, minWidth: 10, zIndex: 90, resize: null, start: null, stop: null }, _num: function _num(e) {
      return parseInt(e, 10) || 0;
    }, _isNumber: function _isNumber(e) {
      return !isNaN(parseInt(e, 10));
    }, _hasScroll: function _hasScroll(t, i) {
      if ("hidden" === e(t).css("overflow")) return !1;var s = i && "left" === i ? "scrollLeft" : "scrollTop",
          n = !1;return t[s] > 0 ? !0 : (t[s] = 1, n = t[s] > 0, t[s] = 0, n);
    }, _create: function _create() {
      var t,
          i,
          s,
          n,
          a,
          o = this,
          r = this.options;if (this.element.addClass("ui-resizable"), e.extend(this, { _aspectRatio: !!r.aspectRatio, aspectRatio: r.aspectRatio, originalElement: this.element, _proportionallyResizeElements: [], _helper: r.helper || r.ghost || r.animate ? r.helper || "ui-resizable-helper" : null }), this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({ position: this.element.css("position"), width: this.element.outerWidth(), height: this.element.outerHeight(), top: this.element.css("top"), left: this.element.css("left") })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, this.element.css({ marginLeft: this.originalElement.css("marginLeft"), marginTop: this.originalElement.css("marginTop"), marginRight: this.originalElement.css("marginRight"), marginBottom: this.originalElement.css("marginBottom") }), this.originalElement.css({ marginLeft: 0, marginTop: 0, marginRight: 0, marginBottom: 0 }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({ position: "static", zoom: 1, display: "block" })), this.originalElement.css({ margin: this.originalElement.css("margin") }), this._proportionallyResize()), this.handles = r.handles || (e(".ui-resizable-handle", this.element).length ? { n: ".ui-resizable-n", e: ".ui-resizable-e", s: ".ui-resizable-s", w: ".ui-resizable-w", se: ".ui-resizable-se", sw: ".ui-resizable-sw", ne: ".ui-resizable-ne", nw: ".ui-resizable-nw" } : "e,s,se"), this._handles = e(), this.handles.constructor === String) for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), t = this.handles.split(","), this.handles = {}, i = 0; t.length > i; i++) {
        s = e.trim(t[i]), a = "ui-resizable-" + s, n = e("<div class='ui-resizable-handle " + a + "'></div>"), n.css({ zIndex: r.zIndex }), "se" === s && n.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[s] = ".ui-resizable-" + s, this.element.append(n);
      }this._renderAxis = function (t) {
        var i, s, n, a;t = t || this.element;for (i in this.handles) {
          this.handles[i].constructor === String ? this.handles[i] = this.element.children(this.handles[i]).first().show() : (this.handles[i].jquery || this.handles[i].nodeType) && (this.handles[i] = e(this.handles[i]), this._on(this.handles[i], { mousedown: o._mouseDown })), this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (s = e(this.handles[i], this.element), a = /sw|ne|nw|se|n|s/.test(i) ? s.outerHeight() : s.outerWidth(), n = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), t.css(n, a), this._proportionallyResize()), this._handles = this._handles.add(this.handles[i]);
        }
      }, this._renderAxis(this.element), this._handles = this._handles.add(this.element.find(".ui-resizable-handle")), this._handles.disableSelection(), this._handles.mouseover(function () {
        o.resizing || (this.className && (n = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), o.axis = n && n[1] ? n[1] : "se");
      }), r.autoHide && (this._handles.hide(), e(this.element).addClass("ui-resizable-autohide").mouseenter(function () {
        r.disabled || (e(this).removeClass("ui-resizable-autohide"), o._handles.show());
      }).mouseleave(function () {
        r.disabled || o.resizing || (e(this).addClass("ui-resizable-autohide"), o._handles.hide());
      })), this._mouseInit();
    }, _destroy: function _destroy() {
      this._mouseDestroy();var t,
          i = function i(t) {
        e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove();
      };return this.elementIsWrapper && (i(this.element), t = this.element, this.originalElement.css({ position: t.css("position"), width: t.outerWidth(), height: t.outerHeight(), top: t.css("top"), left: t.css("left") }).insertAfter(t), t.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this;
    }, _mouseCapture: function _mouseCapture(t) {
      var i,
          s,
          n = !1;for (i in this.handles) {
        s = e(this.handles[i])[0], (s === t.target || e.contains(s, t.target)) && (n = !0);
      }return !this.options.disabled && n;
    }, _mouseStart: function _mouseStart(t) {
      var i,
          s,
          n,
          a = this.options,
          o = this.element;return this.resizing = !0, this._renderProxy(), i = this._num(this.helper.css("left")), s = this._num(this.helper.css("top")), a.containment && (i += e(a.containment).scrollLeft() || 0, s += e(a.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = { left: i, top: s }, this.size = this._helper ? { width: this.helper.width(), height: this.helper.height() } : { width: o.width(), height: o.height() }, this.originalSize = this._helper ? { width: o.outerWidth(), height: o.outerHeight() } : { width: o.width(), height: o.height() }, this.sizeDiff = { width: o.outerWidth() - o.width(), height: o.outerHeight() - o.height() }, this.originalPosition = { left: i, top: s }, this.originalMousePosition = { left: t.pageX, top: t.pageY }, this.aspectRatio = "number" == typeof a.aspectRatio ? a.aspectRatio : this.originalSize.width / this.originalSize.height || 1, n = e(".ui-resizable-" + this.axis).css("cursor"), e("body").css("cursor", "auto" === n ? this.axis + "-resize" : n), o.addClass("ui-resizable-resizing"), this._propagate("start", t), !0;
    }, _mouseDrag: function _mouseDrag(t) {
      var i,
          s,
          n = this.originalMousePosition,
          a = this.axis,
          o = t.pageX - n.left || 0,
          r = t.pageY - n.top || 0,
          h = this._change[a];return this._updatePrevProperties(), h ? (i = h.apply(this, [t, o, r]), this._updateVirtualBoundaries(t.shiftKey), (this._aspectRatio || t.shiftKey) && (i = this._updateRatio(i, t)), i = this._respectSize(i, t), this._updateCache(i), this._propagate("resize", t), s = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), e.isEmptyObject(s) || (this._updatePrevProperties(), this._trigger("resize", t, this.ui()), this._applyChanges()), !1) : !1;
    }, _mouseStop: function _mouseStop(t) {
      this.resizing = !1;var i,
          s,
          n,
          a,
          o,
          r,
          h,
          l = this.options,
          u = this;return this._helper && (i = this._proportionallyResizeElements, s = i.length && /textarea/i.test(i[0].nodeName), n = s && this._hasScroll(i[0], "left") ? 0 : u.sizeDiff.height, a = s ? 0 : u.sizeDiff.width, o = { width: u.helper.width() - a, height: u.helper.height() - n }, r = parseInt(u.element.css("left"), 10) + (u.position.left - u.originalPosition.left) || null, h = parseInt(u.element.css("top"), 10) + (u.position.top - u.originalPosition.top) || null, l.animate || this.element.css(e.extend(o, { top: h, left: r })), u.helper.height(u.size.height), u.helper.width(u.size.width), this._helper && !l.animate && this._proportionallyResize()), e("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", t), this._helper && this.helper.remove(), !1;
    }, _updatePrevProperties: function _updatePrevProperties() {
      this.prevPosition = { top: this.position.top, left: this.position.left }, this.prevSize = { width: this.size.width, height: this.size.height };
    }, _applyChanges: function _applyChanges() {
      var e = {};return this.position.top !== this.prevPosition.top && (e.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (e.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (e.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (e.height = this.size.height + "px"), this.helper.css(e), e;
    }, _updateVirtualBoundaries: function _updateVirtualBoundaries(e) {
      var t,
          i,
          s,
          n,
          a,
          o = this.options;a = { minWidth: this._isNumber(o.minWidth) ? o.minWidth : 0, maxWidth: this._isNumber(o.maxWidth) ? o.maxWidth : 1 / 0, minHeight: this._isNumber(o.minHeight) ? o.minHeight : 0, maxHeight: this._isNumber(o.maxHeight) ? o.maxHeight : 1 / 0 }, (this._aspectRatio || e) && (t = a.minHeight * this.aspectRatio, s = a.minWidth / this.aspectRatio, i = a.maxHeight * this.aspectRatio, n = a.maxWidth / this.aspectRatio, t > a.minWidth && (a.minWidth = t), s > a.minHeight && (a.minHeight = s), a.maxWidth > i && (a.maxWidth = i), a.maxHeight > n && (a.maxHeight = n)), this._vBoundaries = a;
    }, _updateCache: function _updateCache(e) {
      this.offset = this.helper.offset(), this._isNumber(e.left) && (this.position.left = e.left), this._isNumber(e.top) && (this.position.top = e.top), this._isNumber(e.height) && (this.size.height = e.height), this._isNumber(e.width) && (this.size.width = e.width);
    }, _updateRatio: function _updateRatio(e) {
      var t = this.position,
          i = this.size,
          s = this.axis;return this._isNumber(e.height) ? e.width = e.height * this.aspectRatio : this._isNumber(e.width) && (e.height = e.width / this.aspectRatio), "sw" === s && (e.left = t.left + (i.width - e.width), e.top = null), "nw" === s && (e.top = t.top + (i.height - e.height), e.left = t.left + (i.width - e.width)), e;
    }, _respectSize: function _respectSize(e) {
      var t = this._vBoundaries,
          i = this.axis,
          s = this._isNumber(e.width) && t.maxWidth && t.maxWidth < e.width,
          n = this._isNumber(e.height) && t.maxHeight && t.maxHeight < e.height,
          a = this._isNumber(e.width) && t.minWidth && t.minWidth > e.width,
          o = this._isNumber(e.height) && t.minHeight && t.minHeight > e.height,
          r = this.originalPosition.left + this.originalSize.width,
          h = this.position.top + this.size.height,
          l = /sw|nw|w/.test(i),
          u = /nw|ne|n/.test(i);return a && (e.width = t.minWidth), o && (e.height = t.minHeight), s && (e.width = t.maxWidth), n && (e.height = t.maxHeight), a && l && (e.left = r - t.minWidth), s && l && (e.left = r - t.maxWidth), o && u && (e.top = h - t.minHeight), n && u && (e.top = h - t.maxHeight), e.width || e.height || e.left || !e.top ? e.width || e.height || e.top || !e.left || (e.left = null) : e.top = null, e;
    }, _getPaddingPlusBorderDimensions: function _getPaddingPlusBorderDimensions(e) {
      for (var t = 0, i = [], s = [e.css("borderTopWidth"), e.css("borderRightWidth"), e.css("borderBottomWidth"), e.css("borderLeftWidth")], n = [e.css("paddingTop"), e.css("paddingRight"), e.css("paddingBottom"), e.css("paddingLeft")]; 4 > t; t++) {
        i[t] = parseInt(s[t], 10) || 0, i[t] += parseInt(n[t], 10) || 0;
      }return { height: i[0] + i[2], width: i[1] + i[3] };
    }, _proportionallyResize: function _proportionallyResize() {
      if (this._proportionallyResizeElements.length) for (var e, t = 0, i = this.helper || this.element; this._proportionallyResizeElements.length > t; t++) {
        e = this._proportionallyResizeElements[t], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(e)), e.css({ height: i.height() - this.outerDimensions.height || 0, width: i.width() - this.outerDimensions.width || 0 });
      }
    }, _renderProxy: function _renderProxy() {
      var t = this.element,
          i = this.options;this.elementOffset = t.offset(), this._helper ? (this.helper = this.helper || e("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({ width: this.element.outerWidth() - 1, height: this.element.outerHeight() - 1, position: "absolute", left: this.elementOffset.left + "px", top: this.elementOffset.top + "px", zIndex: ++i.zIndex }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element;
    }, _change: { e: function e(_e, t) {
        return { width: this.originalSize.width + t };
      }, w: function w(e, t) {
        var i = this.originalSize,
            s = this.originalPosition;return { left: s.left + t, width: i.width - t };
      }, n: function n(e, t, i) {
        var s = this.originalSize,
            n = this.originalPosition;return { top: n.top + i, height: s.height - i };
      }, s: function s(e, t, i) {
        return { height: this.originalSize.height + i };
      }, se: function se(t, i, s) {
        return e.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, i, s]));
      }, sw: function sw(t, i, s) {
        return e.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, i, s]));
      }, ne: function ne(t, i, s) {
        return e.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, i, s]));
      }, nw: function nw(t, i, s) {
        return e.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, i, s]));
      } }, _propagate: function _propagate(t, i) {
      e.ui.plugin.call(this, t, [i, this.ui()]), "resize" !== t && this._trigger(t, i, this.ui());
    }, plugins: {}, ui: function ui() {
      return { originalElement: this.originalElement, element: this.element, helper: this.helper, position: this.position, size: this.size, originalSize: this.originalSize, originalPosition: this.originalPosition };
    } }), e.ui.plugin.add("resizable", "animate", { stop: function stop(t) {
      var i = e(this).resizable("instance"),
          s = i.options,
          n = i._proportionallyResizeElements,
          a = n.length && /textarea/i.test(n[0].nodeName),
          o = a && i._hasScroll(n[0], "left") ? 0 : i.sizeDiff.height,
          r = a ? 0 : i.sizeDiff.width,
          h = { width: i.size.width - r, height: i.size.height - o },
          l = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null,
          u = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null;i.element.animate(e.extend(h, u && l ? { top: u, left: l } : {}), { duration: s.animateDuration, easing: s.animateEasing, step: function step() {
          var s = { width: parseInt(i.element.css("width"), 10), height: parseInt(i.element.css("height"), 10), top: parseInt(i.element.css("top"), 10), left: parseInt(i.element.css("left"), 10) };n && n.length && e(n[0]).css({ width: s.width, height: s.height }), i._updateCache(s), i._propagate("resize", t);
        } });
    } }), e.ui.plugin.add("resizable", "containment", { start: function start() {
      var t,
          i,
          s,
          n,
          a,
          o,
          r,
          h = e(this).resizable("instance"),
          l = h.options,
          u = h.element,
          d = l.containment,
          c = d instanceof e ? d.get(0) : /parent/.test(d) ? u.parent().get(0) : d;c && (h.containerElement = e(c), /document/.test(d) || d === document ? (h.containerOffset = { left: 0, top: 0 }, h.containerPosition = { left: 0, top: 0 }, h.parentData = { element: e(document), left: 0, top: 0, width: e(document).width(), height: e(document).height() || document.body.parentNode.scrollHeight }) : (t = e(c), i = [], e(["Top", "Right", "Left", "Bottom"]).each(function (e, s) {
        i[e] = h._num(t.css("padding" + s));
      }), h.containerOffset = t.offset(), h.containerPosition = t.position(), h.containerSize = { height: t.innerHeight() - i[3], width: t.innerWidth() - i[1] }, s = h.containerOffset, n = h.containerSize.height, a = h.containerSize.width, o = h._hasScroll(c, "left") ? c.scrollWidth : a, r = h._hasScroll(c) ? c.scrollHeight : n, h.parentData = { element: c, left: s.left, top: s.top, width: o, height: r }));
    }, resize: function resize(t) {
      var i,
          s,
          n,
          a,
          o = e(this).resizable("instance"),
          r = o.options,
          h = o.containerOffset,
          l = o.position,
          u = o._aspectRatio || t.shiftKey,
          d = { top: 0, left: 0 },
          c = o.containerElement,
          p = !0;c[0] !== document && /static/.test(c.css("position")) && (d = h), l.left < (o._helper ? h.left : 0) && (o.size.width = o.size.width + (o._helper ? o.position.left - h.left : o.position.left - d.left), u && (o.size.height = o.size.width / o.aspectRatio, p = !1), o.position.left = r.helper ? h.left : 0), l.top < (o._helper ? h.top : 0) && (o.size.height = o.size.height + (o._helper ? o.position.top - h.top : o.position.top), u && (o.size.width = o.size.height * o.aspectRatio, p = !1), o.position.top = o._helper ? h.top : 0), n = o.containerElement.get(0) === o.element.parent().get(0), a = /relative|absolute/.test(o.containerElement.css("position")), n && a ? (o.offset.left = o.parentData.left + o.position.left, o.offset.top = o.parentData.top + o.position.top) : (o.offset.left = o.element.offset().left, o.offset.top = o.element.offset().top), i = Math.abs(o.sizeDiff.width + (o._helper ? o.offset.left - d.left : o.offset.left - h.left)), s = Math.abs(o.sizeDiff.height + (o._helper ? o.offset.top - d.top : o.offset.top - h.top)), i + o.size.width >= o.parentData.width && (o.size.width = o.parentData.width - i, u && (o.size.height = o.size.width / o.aspectRatio, p = !1)), s + o.size.height >= o.parentData.height && (o.size.height = o.parentData.height - s, u && (o.size.width = o.size.height * o.aspectRatio, p = !1)), p || (o.position.left = o.prevPosition.left, o.position.top = o.prevPosition.top, o.size.width = o.prevSize.width, o.size.height = o.prevSize.height);
    }, stop: function stop() {
      var t = e(this).resizable("instance"),
          i = t.options,
          s = t.containerOffset,
          n = t.containerPosition,
          a = t.containerElement,
          o = e(t.helper),
          r = o.offset(),
          h = o.outerWidth() - t.sizeDiff.width,
          l = o.outerHeight() - t.sizeDiff.height;t._helper && !i.animate && /relative/.test(a.css("position")) && e(this).css({ left: r.left - n.left - s.left, width: h, height: l }), t._helper && !i.animate && /static/.test(a.css("position")) && e(this).css({ left: r.left - n.left - s.left, width: h, height: l });
    } }), e.ui.plugin.add("resizable", "alsoResize", { start: function start() {
      var t = e(this).resizable("instance"),
          i = t.options;e(i.alsoResize).each(function () {
        var t = e(this);t.data("ui-resizable-alsoresize", { width: parseInt(t.width(), 10), height: parseInt(t.height(), 10), left: parseInt(t.css("left"), 10), top: parseInt(t.css("top"), 10) });
      });
    }, resize: function resize(t, i) {
      var s = e(this).resizable("instance"),
          n = s.options,
          a = s.originalSize,
          o = s.originalPosition,
          r = { height: s.size.height - a.height || 0, width: s.size.width - a.width || 0, top: s.position.top - o.top || 0, left: s.position.left - o.left || 0 };e(n.alsoResize).each(function () {
        var t = e(this),
            s = e(this).data("ui-resizable-alsoresize"),
            n = {},
            a = t.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];e.each(a, function (e, t) {
          var i = (s[t] || 0) + (r[t] || 0);i && i >= 0 && (n[t] = i || null);
        }), t.css(n);
      });
    }, stop: function stop() {
      e(this).removeData("resizable-alsoresize");
    } }), e.ui.plugin.add("resizable", "ghost", { start: function start() {
      var t = e(this).resizable("instance"),
          i = t.options,
          s = t.size;t.ghost = t.originalElement.clone(), t.ghost.css({ opacity: .25, display: "block", position: "relative", height: s.height, width: s.width, margin: 0, left: 0, top: 0 }).addClass("ui-resizable-ghost").addClass("string" == typeof i.ghost ? i.ghost : ""), t.ghost.appendTo(t.helper);
    }, resize: function resize() {
      var t = e(this).resizable("instance");t.ghost && t.ghost.css({ position: "relative", height: t.size.height, width: t.size.width });
    }, stop: function stop() {
      var t = e(this).resizable("instance");t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0));
    } }), e.ui.plugin.add("resizable", "grid", { resize: function resize() {
      var t,
          i = e(this).resizable("instance"),
          s = i.options,
          n = i.size,
          a = i.originalSize,
          o = i.originalPosition,
          r = i.axis,
          h = "number" == typeof s.grid ? [s.grid, s.grid] : s.grid,
          l = h[0] || 1,
          u = h[1] || 1,
          d = Math.round((n.width - a.width) / l) * l,
          c = Math.round((n.height - a.height) / u) * u,
          p = a.width + d,
          f = a.height + c,
          m = s.maxWidth && p > s.maxWidth,
          g = s.maxHeight && f > s.maxHeight,
          v = s.minWidth && s.minWidth > p,
          y = s.minHeight && s.minHeight > f;s.grid = h, v && (p += l), y && (f += u), m && (p -= l), g && (f -= u), /^(se|s|e)$/.test(r) ? (i.size.width = p, i.size.height = f) : /^(ne)$/.test(r) ? (i.size.width = p, i.size.height = f, i.position.top = o.top - c) : /^(sw)$/.test(r) ? (i.size.width = p, i.size.height = f, i.position.left = o.left - d) : ((0 >= f - u || 0 >= p - l) && (t = i._getPaddingPlusBorderDimensions(this)), f - u > 0 ? (i.size.height = f, i.position.top = o.top - c) : (f = u - t.height, i.size.height = f, i.position.top = o.top + a.height - f), p - l > 0 ? (i.size.width = p, i.position.left = o.left - d) : (p = l - t.width, i.size.width = p, i.position.left = o.left + a.width - p));
    } }), e.ui.resizable, e.widget("ui.accordion", { version: "1.11.4", options: { active: 0, animate: {}, collapsible: !1, event: "click", header: "> li > :first-child,> :not(li):even", heightStyle: "auto", icons: { activeHeader: "ui-icon-triangle-1-s", header: "ui-icon-triangle-1-e" }, activate: null, beforeActivate: null }, hideProps: { borderTopWidth: "hide", borderBottomWidth: "hide", paddingTop: "hide", paddingBottom: "hide", height: "hide" }, showProps: { borderTopWidth: "show", borderBottomWidth: "show", paddingTop: "show", paddingBottom: "show", height: "show" }, _create: function _create() {
      var t = this.options;this.prevShow = this.prevHide = e(), this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist"), t.collapsible || t.active !== !1 && null != t.active || (t.active = 0), this._processPanels(), 0 > t.active && (t.active += this.headers.length), this._refresh();
    }, _getCreateEventData: function _getCreateEventData() {
      return { header: this.active, panel: this.active.length ? this.active.next() : e() };
    }, _createIcons: function _createIcons() {
      var t = this.options.icons;t && (e("<span>").addClass("ui-accordion-header-icon ui-icon " + t.header).prependTo(this.headers), this.active.children(".ui-accordion-header-icon").removeClass(t.header).addClass(t.activeHeader), this.headers.addClass("ui-accordion-icons"));
    }, _destroyIcons: function _destroyIcons() {
      this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove();
    }, _destroy: function _destroy() {
      var e;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"), this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").removeUniqueId(), this._destroyIcons(), e = this.headers.next().removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").css("display", "").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeUniqueId(), "content" !== this.options.heightStyle && e.css("height", "");
    }, _setOption: function _setOption(e, t) {
      return "active" === e ? (this._activate(t), void 0) : ("event" === e && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(t)), this._super(e, t), "collapsible" !== e || t || this.options.active !== !1 || this._activate(0), "icons" === e && (this._destroyIcons(), t && this._createIcons()), "disabled" === e && (this.element.toggleClass("ui-state-disabled", !!t).attr("aria-disabled", t), this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!t)), void 0);
    }, _keydown: function _keydown(t) {
      if (!t.altKey && !t.ctrlKey) {
        var i = e.ui.keyCode,
            s = this.headers.length,
            n = this.headers.index(t.target),
            a = !1;switch (t.keyCode) {case i.RIGHT:case i.DOWN:
            a = this.headers[(n + 1) % s];break;case i.LEFT:case i.UP:
            a = this.headers[(n - 1 + s) % s];break;case i.SPACE:case i.ENTER:
            this._eventHandler(t);break;case i.HOME:
            a = this.headers[0];break;case i.END:
            a = this.headers[s - 1];}a && (e(t.target).attr("tabIndex", -1), e(a).attr("tabIndex", 0), a.focus(), t.preventDefault());
      }
    }, _panelKeyDown: function _panelKeyDown(t) {
      t.keyCode === e.ui.keyCode.UP && t.ctrlKey && e(t.currentTarget).prev().focus();
    }, refresh: function refresh() {
      var t = this.options;this._processPanels(), t.active === !1 && t.collapsible === !0 || !this.headers.length ? (t.active = !1, this.active = e()) : t.active === !1 ? this._activate(0) : this.active.length && !e.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (t.active = !1, this.active = e()) : this._activate(Math.max(0, t.active - 1)) : t.active = this.headers.index(this.active), this._destroyIcons(), this._refresh();
    }, _processPanels: function _processPanels() {
      var e = this.headers,
          t = this.panels;this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-state-default ui-corner-all"), this.panels = this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide(), t && (this._off(e.not(this.headers)), this._off(t.not(this.panels)));
    }, _refresh: function _refresh() {
      var t,
          i = this.options,
          s = i.heightStyle,
          n = this.element.parent();this.active = this._findActive(i.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"), this.active.next().addClass("ui-accordion-content-active").show(), this.headers.attr("role", "tab").each(function () {
        var t = e(this),
            i = t.uniqueId().attr("id"),
            s = t.next(),
            n = s.uniqueId().attr("id");t.attr("aria-controls", n), s.attr("aria-labelledby", i);
      }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({ "aria-selected": "false", "aria-expanded": "false", tabIndex: -1 }).next().attr({ "aria-hidden": "true" }).hide(), this.active.length ? this.active.attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 }).next().attr({ "aria-hidden": "false" }) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(i.event), "fill" === s ? (t = n.height(), this.element.siblings(":visible").each(function () {
        var i = e(this),
            s = i.css("position");"absolute" !== s && "fixed" !== s && (t -= i.outerHeight(!0));
      }), this.headers.each(function () {
        t -= e(this).outerHeight(!0);
      }), this.headers.next().each(function () {
        e(this).height(Math.max(0, t - e(this).innerHeight() + e(this).height()));
      }).css("overflow", "auto")) : "auto" === s && (t = 0, this.headers.next().each(function () {
        t = Math.max(t, e(this).css("height", "").height());
      }).height(t));
    }, _activate: function _activate(t) {
      var i = this._findActive(t)[0];i !== this.active[0] && (i = i || this.active[0], this._eventHandler({ target: i, currentTarget: i, preventDefault: e.noop }));
    }, _findActive: function _findActive(t) {
      return "number" == typeof t ? this.headers.eq(t) : e();
    }, _setupEvents: function _setupEvents(t) {
      var i = { keydown: "_keydown" };t && e.each(t.split(" "), function (e, t) {
        i[t] = "_eventHandler";
      }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, i), this._on(this.headers.next(), { keydown: "_panelKeyDown" }), this._hoverable(this.headers), this._focusable(this.headers);
    }, _eventHandler: function _eventHandler(t) {
      var i = this.options,
          s = this.active,
          n = e(t.currentTarget),
          a = n[0] === s[0],
          o = a && i.collapsible,
          r = o ? e() : n.next(),
          h = s.next(),
          l = { oldHeader: s, oldPanel: h, newHeader: o ? e() : n, newPanel: r };t.preventDefault(), a && !i.collapsible || this._trigger("beforeActivate", t, l) === !1 || (i.active = o ? !1 : this.headers.index(n), this.active = a ? e() : n, this._toggle(l), s.removeClass("ui-accordion-header-active ui-state-active"), i.icons && s.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header), a || (n.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), i.icons && n.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader), n.next().addClass("ui-accordion-content-active")));
    }, _toggle: function _toggle(t) {
      var i = t.newPanel,
          s = this.prevShow.length ? this.prevShow : t.oldPanel;this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = i, this.prevHide = s, this.options.animate ? this._animate(i, s, t) : (s.hide(), i.show(), this._toggleComplete(t)), s.attr({ "aria-hidden": "true" }), s.prev().attr({ "aria-selected": "false", "aria-expanded": "false" }), i.length && s.length ? s.prev().attr({ tabIndex: -1, "aria-expanded": "false" }) : i.length && this.headers.filter(function () {
        return 0 === parseInt(e(this).attr("tabIndex"), 10);
      }).attr("tabIndex", -1), i.attr("aria-hidden", "false").prev().attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 });
    }, _animate: function _animate(e, t, i) {
      var s,
          n,
          a,
          o = this,
          r = 0,
          h = e.css("box-sizing"),
          l = e.length && (!t.length || e.index() < t.index()),
          u = this.options.animate || {},
          d = l && u.down || u,
          c = function c() {
        o._toggleComplete(i);
      };return "number" == typeof d && (a = d), "string" == typeof d && (n = d), n = n || d.easing || u.easing, a = a || d.duration || u.duration, t.length ? e.length ? (s = e.show().outerHeight(), t.animate(this.hideProps, { duration: a, easing: n, step: function step(e, t) {
          t.now = Math.round(e);
        } }), e.hide().animate(this.showProps, { duration: a, easing: n, complete: c, step: function step(e, i) {
          i.now = Math.round(e), "height" !== i.prop ? "content-box" === h && (r += i.now) : "content" !== o.options.heightStyle && (i.now = Math.round(s - t.outerHeight() - r), r = 0);
        } }), void 0) : t.animate(this.hideProps, a, n, c) : e.animate(this.showProps, a, n, c);
    }, _toggleComplete: function _toggleComplete(e) {
      var t = e.oldPanel;t.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"), t.length && (t.parent()[0].className = t.parent()[0].className), this._trigger("activate", null, e);
    } }), e.widget("ui.menu", { version: "1.11.4", defaultElement: "<ul>", delay: 300, options: { icons: { submenu: "ui-icon-carat-1-e" }, items: "> *", menus: "ul", position: { my: "left-1 top", at: "right top" }, role: "menu", blur: null, focus: null, select: null }, _create: function _create() {
      this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({ role: this.options.role, tabIndex: 0 }), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), this._on({ "mousedown .ui-menu-item": function mousedownUiMenuItem(e) {
          e.preventDefault();
        }, "click .ui-menu-item": function clickUiMenuItem(t) {
          var i = e(t.target);!this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(t), t.isPropagationStopped() || (this.mouseHandled = !0), i.has(".ui-menu").length ? this.expand(t) : !this.element.is(":focus") && e(this.document[0].activeElement).closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)));
        }, "mouseenter .ui-menu-item": function mouseenterUiMenuItem(t) {
          if (!this.previousFilter) {
            var i = e(t.currentTarget);i.siblings(".ui-state-active").removeClass("ui-state-active"), this.focus(t, i);
          }
        }, mouseleave: "collapseAll", "mouseleave .ui-menu": "collapseAll", focus: function focus(e, t) {
          var i = this.active || this.element.find(this.options.items).eq(0);t || this.focus(e, i);
        }, blur: function blur(t) {
          this._delay(function () {
            e.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(t);
          });
        }, keydown: "_keydown" }), this.refresh(), this._on(this.document, { click: function click(e) {
          this._closeOnDocumentClick(e) && this.collapseAll(e), this.mouseHandled = !1;
        } });
    }, _destroy: function _destroy() {
      this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function () {
        var t = e(this);t.data("ui-menu-submenu-carat") && t.remove();
      }), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content");
    }, _keydown: function _keydown(t) {
      var i,
          s,
          n,
          a,
          o = !0;switch (t.keyCode) {case e.ui.keyCode.PAGE_UP:
          this.previousPage(t);break;case e.ui.keyCode.PAGE_DOWN:
          this.nextPage(t);break;case e.ui.keyCode.HOME:
          this._move("first", "first", t);break;case e.ui.keyCode.END:
          this._move("last", "last", t);break;case e.ui.keyCode.UP:
          this.previous(t);break;case e.ui.keyCode.DOWN:
          this.next(t);break;case e.ui.keyCode.LEFT:
          this.collapse(t);break;case e.ui.keyCode.RIGHT:
          this.active && !this.active.is(".ui-state-disabled") && this.expand(t);break;case e.ui.keyCode.ENTER:case e.ui.keyCode.SPACE:
          this._activate(t);break;case e.ui.keyCode.ESCAPE:
          this.collapse(t);break;default:
          o = !1, s = this.previousFilter || "", n = String.fromCharCode(t.keyCode), a = !1, clearTimeout(this.filterTimer), n === s ? a = !0 : n = s + n, i = this._filterMenuItems(n), i = a && -1 !== i.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : i, i.length || (n = String.fromCharCode(t.keyCode), i = this._filterMenuItems(n)), i.length ? (this.focus(t, i), this.previousFilter = n, this.filterTimer = this._delay(function () {
            delete this.previousFilter;
          }, 1e3)) : delete this.previousFilter;}o && t.preventDefault();
    }, _activate: function _activate(e) {
      this.active.is(".ui-state-disabled") || (this.active.is("[aria-haspopup='true']") ? this.expand(e) : this.select(e));
    }, refresh: function refresh() {
      var t,
          i,
          s = this,
          n = this.options.icons.submenu,
          a = this.element.find(this.options.menus);this.element.toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length), a.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({ role: this.options.role, "aria-hidden": "true", "aria-expanded": "false" }).each(function () {
        var t = e(this),
            i = t.parent(),
            s = e("<span>").addClass("ui-menu-icon ui-icon " + n).data("ui-menu-submenu-carat", !0);i.attr("aria-haspopup", "true").prepend(s), t.attr("aria-labelledby", i.attr("id"));
      }), t = a.add(this.element), i = t.find(this.options.items), i.not(".ui-menu-item").each(function () {
        var t = e(this);s._isDivider(t) && t.addClass("ui-widget-content ui-menu-divider");
      }), i.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({ tabIndex: -1, role: this._itemRole() }), i.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !e.contains(this.element[0], this.active[0]) && this.blur();
    }, _itemRole: function _itemRole() {
      return { menu: "menuitem", listbox: "option" }[this.options.role];
    }, _setOption: function _setOption(e, t) {
      "icons" === e && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(t.submenu), "disabled" === e && this.element.toggleClass("ui-state-disabled", !!t).attr("aria-disabled", t), this._super(e, t);
    }, focus: function focus(e, t) {
      var i, s;this.blur(e, e && "focus" === e.type), this._scrollIntoView(t), this.active = t.first(), s = this.active.addClass("ui-state-focus").removeClass("ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", s.attr("id")), this.active.parent().closest(".ui-menu-item").addClass("ui-state-active"), e && "keydown" === e.type ? this._close() : this.timer = this._delay(function () {
        this._close();
      }, this.delay), i = t.children(".ui-menu"), i.length && e && /^mouse/.test(e.type) && this._startOpening(i), this.activeMenu = t.parent(), this._trigger("focus", e, { item: t });
    }, _scrollIntoView: function _scrollIntoView(t) {
      var i, s, n, a, o, r;this._hasScroll() && (i = parseFloat(e.css(this.activeMenu[0], "borderTopWidth")) || 0, s = parseFloat(e.css(this.activeMenu[0], "paddingTop")) || 0, n = t.offset().top - this.activeMenu.offset().top - i - s, a = this.activeMenu.scrollTop(), o = this.activeMenu.height(), r = t.outerHeight(), 0 > n ? this.activeMenu.scrollTop(a + n) : n + r > o && this.activeMenu.scrollTop(a + n - o + r));
    }, blur: function blur(e, t) {
      t || clearTimeout(this.timer), this.active && (this.active.removeClass("ui-state-focus"), this.active = null, this._trigger("blur", e, { item: this.active }));
    }, _startOpening: function _startOpening(e) {
      clearTimeout(this.timer), "true" === e.attr("aria-hidden") && (this.timer = this._delay(function () {
        this._close(), this._open(e);
      }, this.delay));
    }, _open: function _open(t) {
      var i = e.extend({ of: this.active }, this.options.position);clearTimeout(this.timer), this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden", "true"), t.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i);
    }, collapseAll: function collapseAll(t, i) {
      clearTimeout(this.timer), this.timer = this._delay(function () {
        var s = i ? this.element : e(t && t.target).closest(this.element.find(".ui-menu"));s.length || (s = this.element), this._close(s), this.blur(t), this.activeMenu = s;
      }, this.delay);
    }, _close: function _close(e) {
      e || (e = this.active ? this.active.parent() : this.element), e.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active");
    }, _closeOnDocumentClick: function _closeOnDocumentClick(t) {
      return !e(t.target).closest(".ui-menu").length;
    }, _isDivider: function _isDivider(e) {
      return !/[^\-\u2014\u2013\s]/.test(e.text());
    }, collapse: function collapse(e) {
      var t = this.active && this.active.parent().closest(".ui-menu-item", this.element);t && t.length && (this._close(), this.focus(e, t));
    }, expand: function expand(e) {
      var t = this.active && this.active.children(".ui-menu ").find(this.options.items).first();t && t.length && (this._open(t.parent()), this._delay(function () {
        this.focus(e, t);
      }));
    }, next: function next(e) {
      this._move("next", "first", e);
    }, previous: function previous(e) {
      this._move("prev", "last", e);
    }, isFirstItem: function isFirstItem() {
      return this.active && !this.active.prevAll(".ui-menu-item").length;
    }, isLastItem: function isLastItem() {
      return this.active && !this.active.nextAll(".ui-menu-item").length;
    }, _move: function _move(e, t, i) {
      var s;this.active && (s = "first" === e || "last" === e ? this.active["first" === e ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[e + "All"](".ui-menu-item").eq(0)), s && s.length && this.active || (s = this.activeMenu.find(this.options.items)[t]()), this.focus(i, s);
    }, nextPage: function nextPage(t) {
      var i, s, n;return this.active ? (this.isLastItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.nextAll(".ui-menu-item").each(function () {
        return i = e(this), 0 > i.offset().top - s - n;
      }), this.focus(t, i)) : this.focus(t, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]())), void 0) : (this.next(t), void 0);
    }, previousPage: function previousPage(t) {
      var i, s, n;return this.active ? (this.isFirstItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.prevAll(".ui-menu-item").each(function () {
        return i = e(this), i.offset().top - s + n > 0;
      }), this.focus(t, i)) : this.focus(t, this.activeMenu.find(this.options.items).first())), void 0) : (this.next(t), void 0);
    }, _hasScroll: function _hasScroll() {
      return this.element.outerHeight() < this.element.prop("scrollHeight");
    }, select: function select(t) {
      this.active = this.active || e(t.target).closest(".ui-menu-item");var i = { item: this.active };this.active.has(".ui-menu").length || this.collapseAll(t, !0), this._trigger("select", t, i);
    }, _filterMenuItems: function _filterMenuItems(t) {
      var i = t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
          s = RegExp("^" + i, "i");return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function () {
        return s.test(e.trim(e(this).text()));
      });
    } }), e.widget("ui.autocomplete", { version: "1.11.4", defaultElement: "<input>", options: { appendTo: null, autoFocus: !1, delay: 300, minLength: 1, position: { my: "left top", at: "left bottom", collision: "none" }, source: null, change: null, close: null, focus: null, open: null, response: null, search: null, select: null }, requestIndex: 0, pending: 0, _create: function _create() {
      var t,
          i,
          s,
          n = this.element[0].nodeName.toLowerCase(),
          a = "textarea" === n,
          o = "input" === n;this.isMultiLine = a ? !0 : o ? !1 : this.element.prop("isContentEditable"), this.valueMethod = this.element[a || o ? "val" : "text"], this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), this._on(this.element, { keydown: function keydown(n) {
          if (this.element.prop("readOnly")) return t = !0, s = !0, i = !0, void 0;t = !1, s = !1, i = !1;var a = e.ui.keyCode;switch (n.keyCode) {case a.PAGE_UP:
              t = !0, this._move("previousPage", n);break;case a.PAGE_DOWN:
              t = !0, this._move("nextPage", n);break;case a.UP:
              t = !0, this._keyEvent("previous", n);break;case a.DOWN:
              t = !0, this._keyEvent("next", n);break;case a.ENTER:
              this.menu.active && (t = !0, n.preventDefault(), this.menu.select(n));break;case a.TAB:
              this.menu.active && this.menu.select(n);break;case a.ESCAPE:
              this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(n), n.preventDefault());break;default:
              i = !0, this._searchTimeout(n);}
        }, keypress: function keypress(s) {
          if (t) return t = !1, (!this.isMultiLine || this.menu.element.is(":visible")) && s.preventDefault(), void 0;if (!i) {
            var n = e.ui.keyCode;switch (s.keyCode) {case n.PAGE_UP:
                this._move("previousPage", s);break;case n.PAGE_DOWN:
                this._move("nextPage", s);break;case n.UP:
                this._keyEvent("previous", s);break;case n.DOWN:
                this._keyEvent("next", s);}
          }
        }, input: function input(e) {
          return s ? (s = !1, e.preventDefault(), void 0) : (this._searchTimeout(e), void 0);
        }, focus: function focus() {
          this.selectedItem = null, this.previous = this._value();
        }, blur: function blur(e) {
          return this.cancelBlur ? (delete this.cancelBlur, void 0) : (clearTimeout(this.searching), this.close(e), this._change(e), void 0);
        } }), this._initSource(), this.menu = e("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({ role: null }).hide().menu("instance"), this._on(this.menu.element, { mousedown: function mousedown(t) {
          t.preventDefault(), this.cancelBlur = !0, this._delay(function () {
            delete this.cancelBlur;
          });var i = this.menu.element[0];e(t.target).closest(".ui-menu-item").length || this._delay(function () {
            var t = this;this.document.one("mousedown", function (s) {
              s.target === t.element[0] || s.target === i || e.contains(i, s.target) || t.close();
            });
          });
        }, menufocus: function menufocus(t, i) {
          var s, n;return this.isNewMenu && (this.isNewMenu = !1, t.originalEvent && /^mouse/.test(t.originalEvent.type)) ? (this.menu.blur(), this.document.one("mousemove", function () {
            e(t.target).trigger(t.originalEvent);
          }), void 0) : (n = i.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", t, { item: n }) && t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(n.value), s = i.item.attr("aria-label") || n.value, s && e.trim(s).length && (this.liveRegion.children().hide(), e("<div>").text(s).appendTo(this.liveRegion)), void 0);
        }, menuselect: function menuselect(e, t) {
          var i = t.item.data("ui-autocomplete-item"),
              s = this.previous;this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = s, this._delay(function () {
            this.previous = s, this.selectedItem = i;
          })), !1 !== this._trigger("select", e, { item: i }) && this._value(i.value), this.term = this._value(), this.close(e), this.selectedItem = i;
        } }), this.liveRegion = e("<span>", { role: "status", "aria-live": "assertive", "aria-relevant": "additions" }).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body), this._on(this.window, { beforeunload: function beforeunload() {
          this.element.removeAttr("autocomplete");
        } });
    }, _destroy: function _destroy() {
      clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove();
    }, _setOption: function _setOption(e, t) {
      this._super(e, t), "source" === e && this._initSource(), "appendTo" === e && this.menu.element.appendTo(this._appendTo()), "disabled" === e && t && this.xhr && this.xhr.abort();
    }, _appendTo: function _appendTo() {
      var t = this.options.appendTo;return t && (t = t.jquery || t.nodeType ? e(t) : this.document.find(t).eq(0)), t && t[0] || (t = this.element.closest(".ui-front")), t.length || (t = this.document[0].body), t;
    }, _initSource: function _initSource() {
      var t,
          i,
          s = this;e.isArray(this.options.source) ? (t = this.options.source, this.source = function (i, s) {
        s(e.ui.autocomplete.filter(t, i.term));
      }) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function (t, n) {
        s.xhr && s.xhr.abort(), s.xhr = e.ajax({ url: i, data: t, dataType: "json", success: function success(e) {
            n(e);
          }, error: function error() {
            n([]);
          } });
      }) : this.source = this.options.source;
    }, _searchTimeout: function _searchTimeout(e) {
      clearTimeout(this.searching), this.searching = this._delay(function () {
        var t = this.term === this._value(),
            i = this.menu.element.is(":visible"),
            s = e.altKey || e.ctrlKey || e.metaKey || e.shiftKey;(!t || t && !i && !s) && (this.selectedItem = null, this.search(null, e));
      }, this.options.delay);
    }, search: function search(e, t) {
      return e = null != e ? e : this._value(), this.term = this._value(), e.length < this.options.minLength ? this.close(t) : this._trigger("search", t) !== !1 ? this._search(e) : void 0;
    }, _search: function _search(e) {
      this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({ term: e }, this._response());
    }, _response: function _response() {
      var t = ++this.requestIndex;return e.proxy(function (e) {
        t === this.requestIndex && this.__response(e), this.pending--, this.pending || this.element.removeClass("ui-autocomplete-loading");
      }, this);
    }, __response: function __response(e) {
      e && (e = this._normalize(e)), this._trigger("response", null, { content: e }), !this.options.disabled && e && e.length && !this.cancelSearch ? (this._suggest(e), this._trigger("open")) : this._close();
    }, close: function close(e) {
      this.cancelSearch = !0, this._close(e);
    }, _close: function _close(e) {
      this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", e));
    }, _change: function _change(e) {
      this.previous !== this._value() && this._trigger("change", e, { item: this.selectedItem });
    }, _normalize: function _normalize(t) {
      return t.length && t[0].label && t[0].value ? t : e.map(t, function (t) {
        return "string" == typeof t ? { label: t, value: t } : e.extend({}, t, { label: t.label || t.value, value: t.value || t.label });
      });
    }, _suggest: function _suggest(t) {
      var i = this.menu.element.empty();this._renderMenu(i, t), this.isNewMenu = !0, this.menu.refresh(), i.show(), this._resizeMenu(), i.position(e.extend({ of: this.element }, this.options.position)), this.options.autoFocus && this.menu.next();
    }, _resizeMenu: function _resizeMenu() {
      var e = this.menu.element;e.outerWidth(Math.max(e.width("").outerWidth() + 1, this.element.outerWidth()));
    }, _renderMenu: function _renderMenu(t, i) {
      var s = this;e.each(i, function (e, i) {
        s._renderItemData(t, i);
      });
    }, _renderItemData: function _renderItemData(e, t) {
      return this._renderItem(e, t).data("ui-autocomplete-item", t);
    }, _renderItem: function _renderItem(t, i) {
      return e("<li>").text(i.label).appendTo(t);
    }, _move: function _move(e, t) {
      return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(e) || this.menu.isLastItem() && /^next/.test(e) ? (this.isMultiLine || this._value(this.term), this.menu.blur(), void 0) : (this.menu[e](t), void 0) : (this.search(null, t), void 0);
    }, widget: function widget() {
      return this.menu.element;
    }, _value: function _value() {
      return this.valueMethod.apply(this.element, arguments);
    }, _keyEvent: function _keyEvent(e, t) {
      (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(e, t), t.preventDefault());
    } }), e.extend(e.ui.autocomplete, { escapeRegex: function escapeRegex(e) {
      return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
    }, filter: function filter(t, i) {
      var s = RegExp(e.ui.autocomplete.escapeRegex(i), "i");return e.grep(t, function (e) {
        return s.test(e.label || e.value || e);
      });
    } }), e.widget("ui.autocomplete", e.ui.autocomplete, { options: { messages: { noResults: "No search results.", results: function results(e) {
          return e + (e > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate.";
        } } }, __response: function __response(t) {
      var i;this._superApply(arguments), this.options.disabled || this.cancelSearch || (i = t && t.length ? this.options.messages.results(t.length) : this.options.messages.noResults, this.liveRegion.children().hide(), e("<div>").text(i).appendTo(this.liveRegion));
    } }), e.ui.autocomplete;var c,
      p = "ui-button ui-widget ui-state-default ui-corner-all",
      f = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
      m = function m() {
    var t = e(this);setTimeout(function () {
      t.find(":ui-button").button("refresh");
    }, 1);
  },
      g = function g(t) {
    var i = t.name,
        s = t.form,
        n = e([]);return i && (i = i.replace(/'/g, "\\'"), n = s ? e(s).find("[name='" + i + "'][type=radio]") : e("[name='" + i + "'][type=radio]", t.ownerDocument).filter(function () {
      return !this.form;
    })), n;
  };e.widget("ui.button", { version: "1.11.4", defaultElement: "<button>", options: { disabled: null, text: !0, label: null, icons: { primary: null, secondary: null } }, _create: function _create() {
      this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, m), "boolean" != typeof this.options.disabled ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled), this._determineButtonType(), this.hasTitle = !!this.buttonElement.attr("title");var t = this,
          i = this.options,
          s = "checkbox" === this.type || "radio" === this.type,
          n = s ? "" : "ui-state-active";null === i.label && (i.label = "input" === this.type ? this.buttonElement.val() : this.buttonElement.html()), this._hoverable(this.buttonElement), this.buttonElement.addClass(p).attr("role", "button").bind("mouseenter" + this.eventNamespace, function () {
        i.disabled || this === c && e(this).addClass("ui-state-active");
      }).bind("mouseleave" + this.eventNamespace, function () {
        i.disabled || e(this).removeClass(n);
      }).bind("click" + this.eventNamespace, function (e) {
        i.disabled && (e.preventDefault(), e.stopImmediatePropagation());
      }), this._on({ focus: function focus() {
          this.buttonElement.addClass("ui-state-focus");
        }, blur: function blur() {
          this.buttonElement.removeClass("ui-state-focus");
        } }), s && this.element.bind("change" + this.eventNamespace, function () {
        t.refresh();
      }), "checkbox" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function () {
        return i.disabled ? !1 : void 0;
      }) : "radio" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function () {
        if (i.disabled) return !1;e(this).addClass("ui-state-active"), t.buttonElement.attr("aria-pressed", "true");var s = t.element[0];g(s).not(s).map(function () {
          return e(this).button("widget")[0];
        }).removeClass("ui-state-active").attr("aria-pressed", "false");
      }) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function () {
        return i.disabled ? !1 : (e(this).addClass("ui-state-active"), c = this, t.document.one("mouseup", function () {
          c = null;
        }), void 0);
      }).bind("mouseup" + this.eventNamespace, function () {
        return i.disabled ? !1 : (e(this).removeClass("ui-state-active"), void 0);
      }).bind("keydown" + this.eventNamespace, function (t) {
        return i.disabled ? !1 : ((t.keyCode === e.ui.keyCode.SPACE || t.keyCode === e.ui.keyCode.ENTER) && e(this).addClass("ui-state-active"), void 0);
      }).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function () {
        e(this).removeClass("ui-state-active");
      }), this.buttonElement.is("a") && this.buttonElement.keyup(function (t) {
        t.keyCode === e.ui.keyCode.SPACE && e(this).click();
      })), this._setOption("disabled", i.disabled), this._resetButton();
    }, _determineButtonType: function _determineButtonType() {
      var e, t, i;this.type = this.element.is("[type=checkbox]") ? "checkbox" : this.element.is("[type=radio]") ? "radio" : this.element.is("input") ? "input" : "button", "checkbox" === this.type || "radio" === this.type ? (e = this.element.parents().last(), t = "label[for='" + this.element.attr("id") + "']", this.buttonElement = e.find(t), this.buttonElement.length || (e = e.length ? e.siblings() : this.element.siblings(), this.buttonElement = e.filter(t), this.buttonElement.length || (this.buttonElement = e.find(t))), this.element.addClass("ui-helper-hidden-accessible"), i = this.element.is(":checked"), i && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", i)) : this.buttonElement = this.element;
    }, widget: function widget() {
      return this.buttonElement;
    }, _destroy: function _destroy() {
      this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass(p + " ui-state-active " + f).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), this.hasTitle || this.buttonElement.removeAttr("title");
    }, _setOption: function _setOption(e, t) {
      return this._super(e, t), "disabled" === e ? (this.widget().toggleClass("ui-state-disabled", !!t), this.element.prop("disabled", !!t), t && ("checkbox" === this.type || "radio" === this.type ? this.buttonElement.removeClass("ui-state-focus") : this.buttonElement.removeClass("ui-state-focus ui-state-active")), void 0) : (this._resetButton(), void 0);
    }, refresh: function refresh() {
      var t = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");t !== this.options.disabled && this._setOption("disabled", t), "radio" === this.type ? g(this.element[0]).each(function () {
        e(this).is(":checked") ? e(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : e(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false");
      }) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"));
    }, _resetButton: function _resetButton() {
      if ("input" === this.type) return this.options.label && this.element.val(this.options.label), void 0;var t = this.buttonElement.removeClass(f),
          i = e("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(t.empty()).text(),
          s = this.options.icons,
          n = s.primary && s.secondary,
          a = [];s.primary || s.secondary ? (this.options.text && a.push("ui-button-text-icon" + (n ? "s" : s.primary ? "-primary" : "-secondary")), s.primary && t.prepend("<span class='ui-button-icon-primary ui-icon " + s.primary + "'></span>"), s.secondary && t.append("<span class='ui-button-icon-secondary ui-icon " + s.secondary + "'></span>"), this.options.text || (a.push(n ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || t.attr("title", e.trim(i)))) : a.push("ui-button-text-only"), t.addClass(a.join(" "));
    } }), e.widget("ui.buttonset", { version: "1.11.4", options: { items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)" }, _create: function _create() {
      this.element.addClass("ui-buttonset");
    }, _init: function _init() {
      this.refresh();
    }, _setOption: function _setOption(e, t) {
      "disabled" === e && this.buttons.button("option", e, t), this._super(e, t);
    }, refresh: function refresh() {
      var t = "rtl" === this.element.css("direction"),
          i = this.element.find(this.options.items),
          s = i.filter(":ui-button");i.not(":ui-button").button(), s.button("refresh"), this.buttons = i.map(function () {
        return e(this).button("widget")[0];
      }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(t ? "ui-corner-left" : "ui-corner-right").end().end();
    }, _destroy: function _destroy() {
      this.element.removeClass("ui-buttonset"), this.buttons.map(function () {
        return e(this).button("widget")[0];
      }).removeClass("ui-corner-left ui-corner-right").end().button("destroy");
    } }), e.ui.button, e.extend(e.ui, { datepicker: { version: "1.11.4" } });var v;e.extend(n.prototype, { markerClassName: "hasDatepicker", maxRows: 4, _widgetDatepicker: function _widgetDatepicker() {
      return this.dpDiv;
    }, setDefaults: function setDefaults(e) {
      return r(this._defaults, e || {}), this;
    }, _attachDatepicker: function _attachDatepicker(t, i) {
      var s, n, a;s = t.nodeName.toLowerCase(), n = "div" === s || "span" === s, t.id || (this.uuid += 1, t.id = "dp" + this.uuid), a = this._newInst(e(t), n), a.settings = e.extend({}, i || {}), "input" === s ? this._connectDatepicker(t, a) : n && this._inlineDatepicker(t, a);
    }, _newInst: function _newInst(t, i) {
      var s = t[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");return { id: s, input: t, selectedDay: 0, selectedMonth: 0, selectedYear: 0, drawMonth: 0, drawYear: 0, inline: i, dpDiv: i ? a(e("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv };
    }, _connectDatepicker: function _connectDatepicker(t, i) {
      var s = e(t);i.append = e([]), i.trigger = e([]), s.hasClass(this.markerClassName) || (this._attachments(s, i), s.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(i), e.data(t, "datepicker", i), i.settings.disabled && this._disableDatepicker(t));
    }, _attachments: function _attachments(t, i) {
      var s,
          n,
          a,
          o = this._get(i, "appendText"),
          r = this._get(i, "isRTL");i.append && i.append.remove(), o && (i.append = e("<span class='" + this._appendClass + "'>" + o + "</span>"), t[r ? "before" : "after"](i.append)), t.unbind("focus", this._showDatepicker), i.trigger && i.trigger.remove(), s = this._get(i, "showOn"), ("focus" === s || "both" === s) && t.focus(this._showDatepicker), ("button" === s || "both" === s) && (n = this._get(i, "buttonText"), a = this._get(i, "buttonImage"), i.trigger = e(this._get(i, "buttonImageOnly") ? e("<img/>").addClass(this._triggerClass).attr({ src: a, alt: n, title: n }) : e("<button type='button'></button>").addClass(this._triggerClass).html(a ? e("<img/>").attr({ src: a, alt: n, title: n }) : n)), t[r ? "before" : "after"](i.trigger), i.trigger.click(function () {
        return e.datepicker._datepickerShowing && e.datepicker._lastInput === t[0] ? e.datepicker._hideDatepicker() : e.datepicker._datepickerShowing && e.datepicker._lastInput !== t[0] ? (e.datepicker._hideDatepicker(), e.datepicker._showDatepicker(t[0])) : e.datepicker._showDatepicker(t[0]), !1;
      }));
    }, _autoSize: function _autoSize(e) {
      if (this._get(e, "autoSize") && !e.inline) {
        var t,
            i,
            s,
            n,
            a = new Date(2009, 11, 20),
            o = this._get(e, "dateFormat");o.match(/[DM]/) && (t = function t(e) {
          for (i = 0, s = 0, n = 0; e.length > n; n++) {
            e[n].length > i && (i = e[n].length, s = n);
          }return s;
        }, a.setMonth(t(this._get(e, o.match(/MM/) ? "monthNames" : "monthNamesShort"))), a.setDate(t(this._get(e, o.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - a.getDay())), e.input.attr("size", this._formatDate(e, a).length);
      }
    }, _inlineDatepicker: function _inlineDatepicker(t, i) {
      var s = e(t);s.hasClass(this.markerClassName) || (s.addClass(this.markerClassName).append(i.dpDiv), e.data(t, "datepicker", i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(t), i.dpDiv.css("display", "block"));
    }, _dialogDatepicker: function _dialogDatepicker(t, i, s, n, a) {
      var o,
          h,
          l,
          u,
          d,
          c = this._dialogInst;return c || (this.uuid += 1, o = "dp" + this.uuid, this._dialogInput = e("<input type='text' id='" + o + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), e("body").append(this._dialogInput), c = this._dialogInst = this._newInst(this._dialogInput, !1), c.settings = {}, e.data(this._dialogInput[0], "datepicker", c)), r(c.settings, n || {}), i = i && i.constructor === Date ? this._formatDate(c, i) : i, this._dialogInput.val(i), this._pos = a ? a.length ? a : [a.pageX, a.pageY] : null, this._pos || (h = document.documentElement.clientWidth, l = document.documentElement.clientHeight, u = document.documentElement.scrollLeft || document.body.scrollLeft, d = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [h / 2 - 100 + u, l / 2 - 150 + d]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), c.settings.onSelect = s, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), e.blockUI && e.blockUI(this.dpDiv), e.data(this._dialogInput[0], "datepicker", c), this;
    }, _destroyDatepicker: function _destroyDatepicker(t) {
      var i,
          s = e(t),
          n = e.data(t, "datepicker");s.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), e.removeData(t, "datepicker"), "input" === i ? (n.append.remove(), n.trigger.remove(), s.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" === i || "span" === i) && s.removeClass(this.markerClassName).empty(), v === n && (v = null));
    }, _enableDatepicker: function _enableDatepicker(t) {
      var i,
          s,
          n = e(t),
          a = e.data(t, "datepicker");n.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), "input" === i ? (t.disabled = !1, a.trigger.filter("button").each(function () {
        this.disabled = !1;
      }).end().filter("img").css({ opacity: "1.0", cursor: "" })) : ("div" === i || "span" === i) && (s = n.children("." + this._inlineClass), s.children().removeClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = e.map(this._disabledInputs, function (e) {
        return e === t ? null : e;
      }));
    }, _disableDatepicker: function _disableDatepicker(t) {
      var i,
          s,
          n = e(t),
          a = e.data(t, "datepicker");n.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), "input" === i ? (t.disabled = !0, a.trigger.filter("button").each(function () {
        this.disabled = !0;
      }).end().filter("img").css({ opacity: "0.5", cursor: "default" })) : ("div" === i || "span" === i) && (s = n.children("." + this._inlineClass), s.children().addClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = e.map(this._disabledInputs, function (e) {
        return e === t ? null : e;
      }), this._disabledInputs[this._disabledInputs.length] = t);
    }, _isDisabledDatepicker: function _isDisabledDatepicker(e) {
      if (!e) return !1;for (var t = 0; this._disabledInputs.length > t; t++) {
        if (this._disabledInputs[t] === e) return !0;
      }return !1;
    }, _getInst: function _getInst(t) {
      try {
        return e.data(t, "datepicker");
      } catch (i) {
        throw "Missing instance data for this datepicker";
      }
    }, _optionDatepicker: function _optionDatepicker(t, i, s) {
      var n,
          a,
          o,
          h,
          l = this._getInst(t);return 2 === arguments.length && "string" == typeof i ? "defaults" === i ? e.extend({}, e.datepicker._defaults) : l ? "all" === i ? e.extend({}, l.settings) : this._get(l, i) : null : (n = i || {}, "string" == typeof i && (n = {}, n[i] = s), l && (this._curInst === l && this._hideDatepicker(), a = this._getDateDatepicker(t, !0), o = this._getMinMaxDate(l, "min"), h = this._getMinMaxDate(l, "max"), r(l.settings, n), null !== o && void 0 !== n.dateFormat && void 0 === n.minDate && (l.settings.minDate = this._formatDate(l, o)), null !== h && void 0 !== n.dateFormat && void 0 === n.maxDate && (l.settings.maxDate = this._formatDate(l, h)), "disabled" in n && (n.disabled ? this._disableDatepicker(t) : this._enableDatepicker(t)), this._attachments(e(t), l), this._autoSize(l), this._setDate(l, a), this._updateAlternate(l), this._updateDatepicker(l)), void 0);
    }, _changeDatepicker: function _changeDatepicker(e, t, i) {
      this._optionDatepicker(e, t, i);
    }, _refreshDatepicker: function _refreshDatepicker(e) {
      var t = this._getInst(e);t && this._updateDatepicker(t);
    }, _setDateDatepicker: function _setDateDatepicker(e, t) {
      var i = this._getInst(e);i && (this._setDate(i, t), this._updateDatepicker(i), this._updateAlternate(i));
    }, _getDateDatepicker: function _getDateDatepicker(e, t) {
      var i = this._getInst(e);return i && !i.inline && this._setDateFromField(i, t), i ? this._getDate(i) : null;
    }, _doKeyDown: function _doKeyDown(t) {
      var i,
          s,
          n,
          a = e.datepicker._getInst(t.target),
          o = !0,
          r = a.dpDiv.is(".ui-datepicker-rtl");if (a._keyEvent = !0, e.datepicker._datepickerShowing) switch (t.keyCode) {case 9:
          e.datepicker._hideDatepicker(), o = !1;break;case 13:
          return n = e("td." + e.datepicker._dayOverClass + ":not(." + e.datepicker._currentClass + ")", a.dpDiv), n[0] && e.datepicker._selectDay(t.target, a.selectedMonth, a.selectedYear, n[0]), i = e.datepicker._get(a, "onSelect"), i ? (s = e.datepicker._formatDate(a), i.apply(a.input ? a.input[0] : null, [s, a])) : e.datepicker._hideDatepicker(), !1;case 27:
          e.datepicker._hideDatepicker();break;case 33:
          e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(a, "stepBigMonths") : -e.datepicker._get(a, "stepMonths"), "M");break;case 34:
          e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(a, "stepBigMonths") : +e.datepicker._get(a, "stepMonths"), "M");break;case 35:
          (t.ctrlKey || t.metaKey) && e.datepicker._clearDate(t.target), o = t.ctrlKey || t.metaKey;break;case 36:
          (t.ctrlKey || t.metaKey) && e.datepicker._gotoToday(t.target), o = t.ctrlKey || t.metaKey;break;case 37:
          (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, r ? 1 : -1, "D"), o = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(a, "stepBigMonths") : -e.datepicker._get(a, "stepMonths"), "M");break;case 38:
          (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, -7, "D"), o = t.ctrlKey || t.metaKey;break;case 39:
          (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, r ? -1 : 1, "D"), o = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(a, "stepBigMonths") : +e.datepicker._get(a, "stepMonths"), "M");break;case 40:
          (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, 7, "D"), o = t.ctrlKey || t.metaKey;break;default:
          o = !1;} else 36 === t.keyCode && t.ctrlKey ? e.datepicker._showDatepicker(this) : o = !1;o && (t.preventDefault(), t.stopPropagation());
    }, _doKeyPress: function _doKeyPress(t) {
      var i,
          s,
          n = e.datepicker._getInst(t.target);return e.datepicker._get(n, "constrainInput") ? (i = e.datepicker._possibleChars(e.datepicker._get(n, "dateFormat")), s = String.fromCharCode(null == t.charCode ? t.keyCode : t.charCode), t.ctrlKey || t.metaKey || " " > s || !i || i.indexOf(s) > -1) : void 0;
    }, _doKeyUp: function _doKeyUp(t) {
      var i,
          s = e.datepicker._getInst(t.target);if (s.input.val() !== s.lastVal) try {
        i = e.datepicker.parseDate(e.datepicker._get(s, "dateFormat"), s.input ? s.input.val() : null, e.datepicker._getFormatConfig(s)), i && (e.datepicker._setDateFromField(s), e.datepicker._updateAlternate(s), e.datepicker._updateDatepicker(s));
      } catch (n) {}return !0;
    }, _showDatepicker: function _showDatepicker(t) {
      if (t = t.target || t, "input" !== t.nodeName.toLowerCase() && (t = e("input", t.parentNode)[0]), !e.datepicker._isDisabledDatepicker(t) && e.datepicker._lastInput !== t) {
        var i, n, a, o, h, l, u;i = e.datepicker._getInst(t), e.datepicker._curInst && e.datepicker._curInst !== i && (e.datepicker._curInst.dpDiv.stop(!0, !0), i && e.datepicker._datepickerShowing && e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])), n = e.datepicker._get(i, "beforeShow"), a = n ? n.apply(t, [t, i]) : {}, a !== !1 && (r(i.settings, a), i.lastVal = null, e.datepicker._lastInput = t, e.datepicker._setDateFromField(i), e.datepicker._inDialog && (t.value = ""), e.datepicker._pos || (e.datepicker._pos = e.datepicker._findPos(t), e.datepicker._pos[1] += t.offsetHeight), o = !1, e(t).parents().each(function () {
          return o |= "fixed" === e(this).css("position"), !o;
        }), h = { left: e.datepicker._pos[0], top: e.datepicker._pos[1] }, e.datepicker._pos = null, i.dpDiv.empty(), i.dpDiv.css({ position: "absolute", display: "block", top: "-1000px" }), e.datepicker._updateDatepicker(i), h = e.datepicker._checkOffset(i, h, o), i.dpDiv.css({ position: e.datepicker._inDialog && e.blockUI ? "static" : o ? "fixed" : "absolute", display: "none", left: h.left + "px", top: h.top + "px" }), i.inline || (l = e.datepicker._get(i, "showAnim"), u = e.datepicker._get(i, "duration"), i.dpDiv.css("z-index", s(e(t)) + 1), e.datepicker._datepickerShowing = !0, e.effects && e.effects.effect[l] ? i.dpDiv.show(l, e.datepicker._get(i, "showOptions"), u) : i.dpDiv[l || "show"](l ? u : null), e.datepicker._shouldFocusInput(i) && i.input.focus(), e.datepicker._curInst = i));
      }
    }, _updateDatepicker: function _updateDatepicker(t) {
      this.maxRows = 4, v = t, t.dpDiv.empty().append(this._generateHTML(t)), this._attachHandlers(t);var i,
          s = this._getNumberOfMonths(t),
          n = s[1],
          a = 17,
          r = t.dpDiv.find("." + this._dayOverClass + " a");r.length > 0 && o.apply(r.get(0)), t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), n > 1 && t.dpDiv.addClass("ui-datepicker-multi-" + n).css("width", a * n + "em"), t.dpDiv[(1 !== s[0] || 1 !== s[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), t === e.datepicker._curInst && e.datepicker._datepickerShowing && e.datepicker._shouldFocusInput(t) && t.input.focus(), t.yearshtml && (i = t.yearshtml, setTimeout(function () {
        i === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml), i = t.yearshtml = null;
      }, 0));
    }, _shouldFocusInput: function _shouldFocusInput(e) {
      return e.input && e.input.is(":visible") && !e.input.is(":disabled") && !e.input.is(":focus");
    }, _checkOffset: function _checkOffset(t, i, s) {
      var n = t.dpDiv.outerWidth(),
          a = t.dpDiv.outerHeight(),
          o = t.input ? t.input.outerWidth() : 0,
          r = t.input ? t.input.outerHeight() : 0,
          h = document.documentElement.clientWidth + (s ? 0 : e(document).scrollLeft()),
          l = document.documentElement.clientHeight + (s ? 0 : e(document).scrollTop());return i.left -= this._get(t, "isRTL") ? n - o : 0, i.left -= s && i.left === t.input.offset().left ? e(document).scrollLeft() : 0, i.top -= s && i.top === t.input.offset().top + r ? e(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + n > h && h > n ? Math.abs(i.left + n - h) : 0), i.top -= Math.min(i.top, i.top + a > l && l > a ? Math.abs(a + r) : 0), i;
    }, _findPos: function _findPos(t) {
      for (var i, s = this._getInst(t), n = this._get(s, "isRTL"); t && ("hidden" === t.type || 1 !== t.nodeType || e.expr.filters.hidden(t));) {
        t = t[n ? "previousSibling" : "nextSibling"];
      }return i = e(t).offset(), [i.left, i.top];
    }, _hideDatepicker: function _hideDatepicker(t) {
      var i,
          s,
          n,
          a,
          o = this._curInst;!o || t && o !== e.data(t, "datepicker") || this._datepickerShowing && (i = this._get(o, "showAnim"), s = this._get(o, "duration"), n = function n() {
        e.datepicker._tidyDialog(o);
      }, e.effects && (e.effects.effect[i] || e.effects[i]) ? o.dpDiv.hide(i, e.datepicker._get(o, "showOptions"), s, n) : o.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? s : null, n), i || n(), this._datepickerShowing = !1, a = this._get(o, "onClose"), a && a.apply(o.input ? o.input[0] : null, [o.input ? o.input.val() : "", o]), this._lastInput = null, this._inDialog && (this._dialogInput.css({ position: "absolute", left: "0", top: "-100px" }), e.blockUI && (e.unblockUI(), e("body").append(this.dpDiv))), this._inDialog = !1);
    }, _tidyDialog: function _tidyDialog(e) {
      e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar");
    }, _checkExternalClick: function _checkExternalClick(t) {
      if (e.datepicker._curInst) {
        var i = e(t.target),
            s = e.datepicker._getInst(i[0]);(i[0].id !== e.datepicker._mainDivId && 0 === i.parents("#" + e.datepicker._mainDivId).length && !i.hasClass(e.datepicker.markerClassName) && !i.closest("." + e.datepicker._triggerClass).length && e.datepicker._datepickerShowing && (!e.datepicker._inDialog || !e.blockUI) || i.hasClass(e.datepicker.markerClassName) && e.datepicker._curInst !== s) && e.datepicker._hideDatepicker();
      }
    }, _adjustDate: function _adjustDate(t, i, s) {
      var n = e(t),
          a = this._getInst(n[0]);this._isDisabledDatepicker(n[0]) || (this._adjustInstDate(a, i + ("M" === s ? this._get(a, "showCurrentAtPos") : 0), s), this._updateDatepicker(a));
    }, _gotoToday: function _gotoToday(t) {
      var i,
          s = e(t),
          n = this._getInst(s[0]);this._get(n, "gotoCurrent") && n.currentDay ? (n.selectedDay = n.currentDay, n.drawMonth = n.selectedMonth = n.currentMonth, n.drawYear = n.selectedYear = n.currentYear) : (i = new Date(), n.selectedDay = i.getDate(), n.drawMonth = n.selectedMonth = i.getMonth(), n.drawYear = n.selectedYear = i.getFullYear()), this._notifyChange(n), this._adjustDate(s);
    }, _selectMonthYear: function _selectMonthYear(t, i, s) {
      var n = e(t),
          a = this._getInst(n[0]);a["selected" + ("M" === s ? "Month" : "Year")] = a["draw" + ("M" === s ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(a), this._adjustDate(n);
    }, _selectDay: function _selectDay(t, i, s, n) {
      var a,
          o = e(t);e(n).hasClass(this._unselectableClass) || this._isDisabledDatepicker(o[0]) || (a = this._getInst(o[0]), a.selectedDay = a.currentDay = e("a", n).html(), a.selectedMonth = a.currentMonth = i, a.selectedYear = a.currentYear = s, this._selectDate(t, this._formatDate(a, a.currentDay, a.currentMonth, a.currentYear)));
    }, _clearDate: function _clearDate(t) {
      var i = e(t);this._selectDate(i, "");
    }, _selectDate: function _selectDate(t, i) {
      var s,
          n = e(t),
          a = this._getInst(n[0]);i = null != i ? i : this._formatDate(a), a.input && a.input.val(i), this._updateAlternate(a), s = this._get(a, "onSelect"), s ? s.apply(a.input ? a.input[0] : null, [i, a]) : a.input && a.input.trigger("change"), a.inline ? this._updateDatepicker(a) : (this._hideDatepicker(), this._lastInput = a.input[0], "object" != _typeof(a.input[0]) && a.input.focus(), this._lastInput = null);
    }, _updateAlternate: function _updateAlternate(t) {
      var i,
          s,
          n,
          a = this._get(t, "altField");a && (i = this._get(t, "altFormat") || this._get(t, "dateFormat"), s = this._getDate(t), n = this.formatDate(i, s, this._getFormatConfig(t)), e(a).each(function () {
        e(this).val(n);
      }));
    }, noWeekends: function noWeekends(e) {
      var t = e.getDay();return [t > 0 && 6 > t, ""];
    }, iso8601Week: function iso8601Week(e) {
      var t,
          i = new Date(e.getTime());return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), t = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((t - i) / 864e5) / 7) + 1;
    }, parseDate: function parseDate(t, i, s) {
      if (null == t || null == i) throw "Invalid arguments";if (i = "object" == (typeof i === "undefined" ? "undefined" : _typeof(i)) ? "" + i : i + "", "" === i) return null;var n,
          a,
          o,
          r,
          h = 0,
          l = (s ? s.shortYearCutoff : null) || this._defaults.shortYearCutoff,
          u = "string" != typeof l ? l : new Date().getFullYear() % 100 + parseInt(l, 10),
          d = (s ? s.dayNamesShort : null) || this._defaults.dayNamesShort,
          c = (s ? s.dayNames : null) || this._defaults.dayNames,
          p = (s ? s.monthNamesShort : null) || this._defaults.monthNamesShort,
          f = (s ? s.monthNames : null) || this._defaults.monthNames,
          m = -1,
          g = -1,
          v = -1,
          y = -1,
          b = !1,
          _ = function _(e) {
        var i = t.length > n + 1 && t.charAt(n + 1) === e;return i && n++, i;
      },
          x = function x(e) {
        var t = _(e),
            s = "@" === e ? 14 : "!" === e ? 20 : "y" === e && t ? 4 : "o" === e ? 3 : 2,
            n = "y" === e ? s : 1,
            a = RegExp("^\\d{" + n + "," + s + "}"),
            o = i.substring(h).match(a);if (!o) throw "Missing number at position " + h;return h += o[0].length, parseInt(o[0], 10);
      },
          w = function w(t, s, n) {
        var a = -1,
            o = e.map(_(t) ? n : s, function (e, t) {
          return [[t, e]];
        }).sort(function (e, t) {
          return -(e[1].length - t[1].length);
        });if (e.each(o, function (e, t) {
          var s = t[1];return i.substr(h, s.length).toLowerCase() === s.toLowerCase() ? (a = t[0], h += s.length, !1) : void 0;
        }), -1 !== a) return a + 1;throw "Unknown name at position " + h;
      },
          k = function k() {
        if (i.charAt(h) !== t.charAt(n)) throw "Unexpected literal at position " + h;h++;
      };for (n = 0; t.length > n; n++) {
        if (b) "'" !== t.charAt(n) || _("'") ? k() : b = !1;else switch (t.charAt(n)) {case "d":
            v = x("d");break;case "D":
            w("D", d, c);break;case "o":
            y = x("o");break;case "m":
            g = x("m");break;case "M":
            g = w("M", p, f);break;case "y":
            m = x("y");break;case "@":
            r = new Date(x("@")), m = r.getFullYear(), g = r.getMonth() + 1, v = r.getDate();break;case "!":
            r = new Date((x("!") - this._ticksTo1970) / 1e4), m = r.getFullYear(), g = r.getMonth() + 1, v = r.getDate();break;case "'":
            _("'") ? k() : b = !0;break;default:
            k();}
      }if (i.length > h && (o = i.substr(h), !/^\s+/.test(o))) throw "Extra/unparsed characters found in date: " + o;if (-1 === m ? m = new Date().getFullYear() : 100 > m && (m += new Date().getFullYear() - new Date().getFullYear() % 100 + (u >= m ? 0 : -100)), y > -1) for (g = 1, v = y;;) {
        if (a = this._getDaysInMonth(m, g - 1), a >= v) break;g++, v -= a;
      }if (r = this._daylightSavingAdjust(new Date(m, g - 1, v)), r.getFullYear() !== m || r.getMonth() + 1 !== g || r.getDate() !== v) throw "Invalid date";return r;
    }, ATOM: "yy-mm-dd", COOKIE: "D, dd M yy", ISO_8601: "yy-mm-dd", RFC_822: "D, d M y", RFC_850: "DD, dd-M-y", RFC_1036: "D, d M y", RFC_1123: "D, d M yy", RFC_2822: "D, d M yy", RSS: "D, d M y", TICKS: "!", TIMESTAMP: "@", W3C: "yy-mm-dd", _ticksTo1970: 1e7 * 60 * 60 * 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)), formatDate: function formatDate(e, t, i) {
      if (!t) return "";var s,
          n = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
          a = (i ? i.dayNames : null) || this._defaults.dayNames,
          o = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
          r = (i ? i.monthNames : null) || this._defaults.monthNames,
          h = function h(t) {
        var i = e.length > s + 1 && e.charAt(s + 1) === t;return i && s++, i;
      },
          l = function l(e, t, i) {
        var s = "" + t;if (h(e)) for (; i > s.length;) {
          s = "0" + s;
        }return s;
      },
          u = function u(e, t, i, s) {
        return h(e) ? s[t] : i[t];
      },
          d = "",
          c = !1;if (t) for (s = 0; e.length > s; s++) {
        if (c) "'" !== e.charAt(s) || h("'") ? d += e.charAt(s) : c = !1;else switch (e.charAt(s)) {case "d":
            d += l("d", t.getDate(), 2);break;case "D":
            d += u("D", t.getDay(), n, a);break;case "o":
            d += l("o", Math.round((new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime() - new Date(t.getFullYear(), 0, 0).getTime()) / 864e5), 3);break;case "m":
            d += l("m", t.getMonth() + 1, 2);break;case "M":
            d += u("M", t.getMonth(), o, r);break;case "y":
            d += h("y") ? t.getFullYear() : (10 > t.getYear() % 100 ? "0" : "") + t.getYear() % 100;break;case "@":
            d += t.getTime();break;case "!":
            d += 1e4 * t.getTime() + this._ticksTo1970;break;case "'":
            h("'") ? d += "'" : c = !0;break;default:
            d += e.charAt(s);}
      }return d;
    }, _possibleChars: function _possibleChars(e) {
      var t,
          i = "",
          s = !1,
          n = function n(i) {
        var s = e.length > t + 1 && e.charAt(t + 1) === i;return s && t++, s;
      };for (t = 0; e.length > t; t++) {
        if (s) "'" !== e.charAt(t) || n("'") ? i += e.charAt(t) : s = !1;else switch (e.charAt(t)) {case "d":case "m":case "y":case "@":
            i += "0123456789";break;case "D":case "M":
            return null;case "'":
            n("'") ? i += "'" : s = !0;break;default:
            i += e.charAt(t);}
      }return i;
    }, _get: function _get(e, t) {
      return void 0 !== e.settings[t] ? e.settings[t] : this._defaults[t];
    }, _setDateFromField: function _setDateFromField(e, t) {
      if (e.input.val() !== e.lastVal) {
        var i = this._get(e, "dateFormat"),
            s = e.lastVal = e.input ? e.input.val() : null,
            n = this._getDefaultDate(e),
            a = n,
            o = this._getFormatConfig(e);try {
          a = this.parseDate(i, s, o) || n;
        } catch (r) {
          s = t ? "" : s;
        }e.selectedDay = a.getDate(), e.drawMonth = e.selectedMonth = a.getMonth(), e.drawYear = e.selectedYear = a.getFullYear(), e.currentDay = s ? a.getDate() : 0, e.currentMonth = s ? a.getMonth() : 0, e.currentYear = s ? a.getFullYear() : 0, this._adjustInstDate(e);
      }
    }, _getDefaultDate: function _getDefaultDate(e) {
      return this._restrictMinMax(e, this._determineDate(e, this._get(e, "defaultDate"), new Date()));
    }, _determineDate: function _determineDate(t, i, s) {
      var n = function n(e) {
        var t = new Date();return t.setDate(t.getDate() + e), t;
      },
          a = function a(i) {
        try {
          return e.datepicker.parseDate(e.datepicker._get(t, "dateFormat"), i, e.datepicker._getFormatConfig(t));
        } catch (s) {}for (var n = (i.toLowerCase().match(/^c/) ? e.datepicker._getDate(t) : null) || new Date(), a = n.getFullYear(), o = n.getMonth(), r = n.getDate(), h = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = h.exec(i); l;) {
          switch (l[2] || "d") {case "d":case "D":
              r += parseInt(l[1], 10);break;case "w":case "W":
              r += 7 * parseInt(l[1], 10);break;case "m":case "M":
              o += parseInt(l[1], 10), r = Math.min(r, e.datepicker._getDaysInMonth(a, o));break;case "y":case "Y":
              a += parseInt(l[1], 10), r = Math.min(r, e.datepicker._getDaysInMonth(a, o));}l = h.exec(i);
        }return new Date(a, o, r);
      },
          o = null == i || "" === i ? s : "string" == typeof i ? a(i) : "number" == typeof i ? isNaN(i) ? s : n(i) : new Date(i.getTime());return o = o && "Invalid Date" == "" + o ? s : o, o && (o.setHours(0), o.setMinutes(0), o.setSeconds(0), o.setMilliseconds(0)), this._daylightSavingAdjust(o);
    }, _daylightSavingAdjust: function _daylightSavingAdjust(e) {
      return e ? (e.setHours(e.getHours() > 12 ? e.getHours() + 2 : 0), e) : null;
    }, _setDate: function _setDate(e, t, i) {
      var s = !t,
          n = e.selectedMonth,
          a = e.selectedYear,
          o = this._restrictMinMax(e, this._determineDate(e, t, new Date()));e.selectedDay = e.currentDay = o.getDate(), e.drawMonth = e.selectedMonth = e.currentMonth = o.getMonth(), e.drawYear = e.selectedYear = e.currentYear = o.getFullYear(), n === e.selectedMonth && a === e.selectedYear || i || this._notifyChange(e), this._adjustInstDate(e), e.input && e.input.val(s ? "" : this._formatDate(e));
    }, _getDate: function _getDate(e) {
      var t = !e.currentYear || e.input && "" === e.input.val() ? null : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));return t;
    }, _attachHandlers: function _attachHandlers(t) {
      var i = this._get(t, "stepMonths"),
          s = "#" + t.id.replace(/\\\\/g, "\\");t.dpDiv.find("[data-handler]").map(function () {
        var t = { prev: function prev() {
            e.datepicker._adjustDate(s, -i, "M");
          }, next: function next() {
            e.datepicker._adjustDate(s, +i, "M");
          }, hide: function hide() {
            e.datepicker._hideDatepicker();
          }, today: function today() {
            e.datepicker._gotoToday(s);
          }, selectDay: function selectDay() {
            return e.datepicker._selectDay(s, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1;
          }, selectMonth: function selectMonth() {
            return e.datepicker._selectMonthYear(s, this, "M"), !1;
          }, selectYear: function selectYear() {
            return e.datepicker._selectMonthYear(s, this, "Y"), !1;
          } };e(this).bind(this.getAttribute("data-event"), t[this.getAttribute("data-handler")]);
      });
    }, _generateHTML: function _generateHTML(e) {
      var t,
          i,
          s,
          n,
          a,
          o,
          r,
          h,
          l,
          u,
          d,
          c,
          p,
          f,
          m,
          g,
          v,
          y,
          b,
          _,
          x,
          w,
          k,
          T,
          D,
          S,
          N,
          M,
          C,
          P,
          A,
          I,
          H,
          z,
          F,
          E,
          W,
          O,
          L,
          j = new Date(),
          R = this._daylightSavingAdjust(new Date(j.getFullYear(), j.getMonth(), j.getDate())),
          Y = this._get(e, "isRTL"),
          J = this._get(e, "showButtonPanel"),
          B = this._get(e, "hideIfNoPrevNext"),
          K = this._get(e, "navigationAsDateFormat"),
          V = this._getNumberOfMonths(e),
          U = this._get(e, "showCurrentAtPos"),
          q = this._get(e, "stepMonths"),
          G = 1 !== V[0] || 1 !== V[1],
          X = this._daylightSavingAdjust(e.currentDay ? new Date(e.currentYear, e.currentMonth, e.currentDay) : new Date(9999, 9, 9)),
          Q = this._getMinMaxDate(e, "min"),
          $ = this._getMinMaxDate(e, "max"),
          Z = e.drawMonth - U,
          et = e.drawYear;if (0 > Z && (Z += 12, et--), $) for (t = this._daylightSavingAdjust(new Date($.getFullYear(), $.getMonth() - V[0] * V[1] + 1, $.getDate())), t = Q && Q > t ? Q : t; this._daylightSavingAdjust(new Date(et, Z, 1)) > t;) {
        Z--, 0 > Z && (Z = 11, et--);
      }for (e.drawMonth = Z, e.drawYear = et, i = this._get(e, "prevText"), i = K ? this.formatDate(i, this._daylightSavingAdjust(new Date(et, Z - q, 1)), this._getFormatConfig(e)) : i, s = this._canAdjustMonth(e, -1, et, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + i + "</span></a>" : B ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + i + "</span></a>", n = this._get(e, "nextText"), n = K ? this.formatDate(n, this._daylightSavingAdjust(new Date(et, Z + q, 1)), this._getFormatConfig(e)) : n, a = this._canAdjustMonth(e, 1, et, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + n + "</span></a>" : B ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + n + "</span></a>", o = this._get(e, "currentText"), r = this._get(e, "gotoCurrent") && e.currentDay ? X : R, o = K ? this.formatDate(o, r, this._getFormatConfig(e)) : o, h = e.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(e, "closeText") + "</button>", l = J ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (Y ? h : "") + (this._isInRange(e, r) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + o + "</button>" : "") + (Y ? "" : h) + "</div>" : "", u = parseInt(this._get(e, "firstDay"), 10), u = isNaN(u) ? 0 : u, d = this._get(e, "showWeek"), c = this._get(e, "dayNames"), p = this._get(e, "dayNamesMin"), f = this._get(e, "monthNames"), m = this._get(e, "monthNamesShort"), g = this._get(e, "beforeShowDay"), v = this._get(e, "showOtherMonths"), y = this._get(e, "selectOtherMonths"), b = this._getDefaultDate(e), _ = "", w = 0; V[0] > w; w++) {
        for (k = "", this.maxRows = 4, T = 0; V[1] > T; T++) {
          if (D = this._daylightSavingAdjust(new Date(et, Z, e.selectedDay)), S = " ui-corner-all", N = "", G) {
            if (N += "<div class='ui-datepicker-group", V[1] > 1) switch (T) {case 0:
                N += " ui-datepicker-group-first", S = " ui-corner-" + (Y ? "right" : "left");break;case V[1] - 1:
                N += " ui-datepicker-group-last", S = " ui-corner-" + (Y ? "left" : "right");break;default:
                N += " ui-datepicker-group-middle", S = "";}N += "'>";
          }for (N += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + S + "'>" + (/all|left/.test(S) && 0 === w ? Y ? a : s : "") + (/all|right/.test(S) && 0 === w ? Y ? s : a : "") + this._generateMonthYearHeader(e, Z, et, Q, $, w > 0 || T > 0, f, m) + "</div><table class='ui-datepicker-calendar'><thead>" + "<tr>", M = d ? "<th class='ui-datepicker-week-col'>" + this._get(e, "weekHeader") + "</th>" : "", x = 0; 7 > x; x++) {
            C = (x + u) % 7, M += "<th scope='col'" + ((x + u + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + ">" + "<span title='" + c[C] + "'>" + p[C] + "</span></th>";
          }for (N += M + "</tr></thead><tbody>", P = this._getDaysInMonth(et, Z), et === e.selectedYear && Z === e.selectedMonth && (e.selectedDay = Math.min(e.selectedDay, P)), A = (this._getFirstDayOfMonth(et, Z) - u + 7) % 7, I = Math.ceil((A + P) / 7), H = G ? this.maxRows > I ? this.maxRows : I : I, this.maxRows = H, z = this._daylightSavingAdjust(new Date(et, Z, 1 - A)), F = 0; H > F; F++) {
            for (N += "<tr>", E = d ? "<td class='ui-datepicker-week-col'>" + this._get(e, "calculateWeek")(z) + "</td>" : "", x = 0; 7 > x; x++) {
              W = g ? g.apply(e.input ? e.input[0] : null, [z]) : [!0, ""], O = z.getMonth() !== Z, L = O && !y || !W[0] || Q && Q > z || $ && z > $, E += "<td class='" + ((x + u + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (O ? " ui-datepicker-other-month" : "") + (z.getTime() === D.getTime() && Z === e.selectedMonth && e._keyEvent || b.getTime() === z.getTime() && b.getTime() === D.getTime() ? " " + this._dayOverClass : "") + (L ? " " + this._unselectableClass + " ui-state-disabled" : "") + (O && !v ? "" : " " + W[1] + (z.getTime() === X.getTime() ? " " + this._currentClass : "") + (z.getTime() === R.getTime() ? " ui-datepicker-today" : "")) + "'" + (O && !v || !W[2] ? "" : " title='" + W[2].replace(/'/g, "&#39;") + "'") + (L ? "" : " data-handler='selectDay' data-event='click' data-month='" + z.getMonth() + "' data-year='" + z.getFullYear() + "'") + ">" + (O && !v ? "&#xa0;" : L ? "<span class='ui-state-default'>" + z.getDate() + "</span>" : "<a class='ui-state-default" + (z.getTime() === R.getTime() ? " ui-state-highlight" : "") + (z.getTime() === X.getTime() ? " ui-state-active" : "") + (O ? " ui-priority-secondary" : "") + "' href='#'>" + z.getDate() + "</a>") + "</td>", z.setDate(z.getDate() + 1), z = this._daylightSavingAdjust(z);
            }N += E + "</tr>";
          }Z++, Z > 11 && (Z = 0, et++), N += "</tbody></table>" + (G ? "</div>" + (V[0] > 0 && T === V[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), k += N;
        }_ += k;
      }return _ += l, e._keyEvent = !1, _;
    }, _generateMonthYearHeader: function _generateMonthYearHeader(e, t, i, s, n, a, o, r) {
      var h,
          l,
          u,
          d,
          c,
          p,
          f,
          m,
          g = this._get(e, "changeMonth"),
          v = this._get(e, "changeYear"),
          y = this._get(e, "showMonthAfterYear"),
          b = "<div class='ui-datepicker-title'>",
          _ = "";if (a || !g) _ += "<span class='ui-datepicker-month'>" + o[t] + "</span>";else {
        for (h = s && s.getFullYear() === i, l = n && n.getFullYear() === i, _ += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", u = 0; 12 > u; u++) {
          (!h || u >= s.getMonth()) && (!l || n.getMonth() >= u) && (_ += "<option value='" + u + "'" + (u === t ? " selected='selected'" : "") + ">" + r[u] + "</option>");
        }_ += "</select>";
      }if (y || (b += _ + (!a && g && v ? "" : "&#xa0;")), !e.yearshtml) if (e.yearshtml = "", a || !v) b += "<span class='ui-datepicker-year'>" + i + "</span>";else {
        for (d = this._get(e, "yearRange").split(":"), c = new Date().getFullYear(), p = function p(e) {
          var t = e.match(/c[+\-].*/) ? i + parseInt(e.substring(1), 10) : e.match(/[+\-].*/) ? c + parseInt(e, 10) : parseInt(e, 10);return isNaN(t) ? c : t;
        }, f = p(d[0]), m = Math.max(f, p(d[1] || "")), f = s ? Math.max(f, s.getFullYear()) : f, m = n ? Math.min(m, n.getFullYear()) : m, e.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; m >= f; f++) {
          e.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
        }e.yearshtml += "</select>", b += e.yearshtml, e.yearshtml = null;
      }return b += this._get(e, "yearSuffix"), y && (b += (!a && g && v ? "" : "&#xa0;") + _), b += "</div>";
    }, _adjustInstDate: function _adjustInstDate(e, t, i) {
      var s = e.drawYear + ("Y" === i ? t : 0),
          n = e.drawMonth + ("M" === i ? t : 0),
          a = Math.min(e.selectedDay, this._getDaysInMonth(s, n)) + ("D" === i ? t : 0),
          o = this._restrictMinMax(e, this._daylightSavingAdjust(new Date(s, n, a)));e.selectedDay = o.getDate(), e.drawMonth = e.selectedMonth = o.getMonth(), e.drawYear = e.selectedYear = o.getFullYear(), ("M" === i || "Y" === i) && this._notifyChange(e);
    }, _restrictMinMax: function _restrictMinMax(e, t) {
      var i = this._getMinMaxDate(e, "min"),
          s = this._getMinMaxDate(e, "max"),
          n = i && i > t ? i : t;return s && n > s ? s : n;
    }, _notifyChange: function _notifyChange(e) {
      var t = this._get(e, "onChangeMonthYear");t && t.apply(e.input ? e.input[0] : null, [e.selectedYear, e.selectedMonth + 1, e]);
    }, _getNumberOfMonths: function _getNumberOfMonths(e) {
      var t = this._get(e, "numberOfMonths");return null == t ? [1, 1] : "number" == typeof t ? [1, t] : t;
    }, _getMinMaxDate: function _getMinMaxDate(e, t) {
      return this._determineDate(e, this._get(e, t + "Date"), null);
    }, _getDaysInMonth: function _getDaysInMonth(e, t) {
      return 32 - this._daylightSavingAdjust(new Date(e, t, 32)).getDate();
    }, _getFirstDayOfMonth: function _getFirstDayOfMonth(e, t) {
      return new Date(e, t, 1).getDay();
    }, _canAdjustMonth: function _canAdjustMonth(e, t, i, s) {
      var n = this._getNumberOfMonths(e),
          a = this._daylightSavingAdjust(new Date(i, s + (0 > t ? t : n[0] * n[1]), 1));return 0 > t && a.setDate(this._getDaysInMonth(a.getFullYear(), a.getMonth())), this._isInRange(e, a);
    }, _isInRange: function _isInRange(e, t) {
      var i,
          s,
          n = this._getMinMaxDate(e, "min"),
          a = this._getMinMaxDate(e, "max"),
          o = null,
          r = null,
          h = this._get(e, "yearRange");return h && (i = h.split(":"), s = new Date().getFullYear(), o = parseInt(i[0], 10), r = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (o += s), i[1].match(/[+\-].*/) && (r += s)), (!n || t.getTime() >= n.getTime()) && (!a || t.getTime() <= a.getTime()) && (!o || t.getFullYear() >= o) && (!r || r >= t.getFullYear());
    }, _getFormatConfig: function _getFormatConfig(e) {
      var t = this._get(e, "shortYearCutoff");return t = "string" != typeof t ? t : new Date().getFullYear() % 100 + parseInt(t, 10), { shortYearCutoff: t, dayNamesShort: this._get(e, "dayNamesShort"), dayNames: this._get(e, "dayNames"), monthNamesShort: this._get(e, "monthNamesShort"), monthNames: this._get(e, "monthNames") };
    }, _formatDate: function _formatDate(e, t, i, s) {
      t || (e.currentDay = e.selectedDay, e.currentMonth = e.selectedMonth, e.currentYear = e.selectedYear);var n = t ? "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) ? t : this._daylightSavingAdjust(new Date(s, i, t)) : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));return this.formatDate(this._get(e, "dateFormat"), n, this._getFormatConfig(e));
    } }), e.fn.datepicker = function (t) {
    if (!this.length) return this;e.datepicker.initialized || (e(document).mousedown(e.datepicker._checkExternalClick), e.datepicker.initialized = !0), 0 === e("#" + e.datepicker._mainDivId).length && e("body").append(e.datepicker.dpDiv);var i = Array.prototype.slice.call(arguments, 1);return "string" != typeof t || "isDisabled" !== t && "getDate" !== t && "widget" !== t ? "option" === t && 2 === arguments.length && "string" == typeof arguments[1] ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(i)) : this.each(function () {
      "string" == typeof t ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this].concat(i)) : e.datepicker._attachDatepicker(this, t);
    }) : e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(i));
  }, e.datepicker = new n(), e.datepicker.initialized = !1, e.datepicker.uuid = new Date().getTime(), e.datepicker.version = "1.11.4", e.datepicker, e.widget("ui.dialog", { version: "1.11.4", options: { appendTo: "body", autoOpen: !0, buttons: [], closeOnEscape: !0, closeText: "Close", dialogClass: "", draggable: !0, hide: null, height: "auto", maxHeight: null, maxWidth: null, minHeight: 150, minWidth: 150, modal: !1, position: { my: "center", at: "center", of: window, collision: "fit", using: function using(t) {
          var i = e(this).css(t).offset().top;0 > i && e(this).css("top", t.top - i);
        } }, resizable: !0, show: null, title: null, width: 300, beforeClose: null, close: null, drag: null, dragStart: null, dragStop: null, focus: null, open: null, resize: null, resizeStart: null, resizeStop: null }, sizeRelatedOptions: { buttons: !0, height: !0, maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0, width: !0 }, resizableRelatedOptions: { maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0 }, _create: function _create() {
      this.originalCss = { display: this.element[0].style.display, width: this.element[0].style.width, minHeight: this.element[0].style.minHeight, maxHeight: this.element[0].style.maxHeight, height: this.element[0].style.height }, this.originalPosition = { parent: this.element.parent(), index: this.element.parent().children().index(this.element) }, this.originalTitle = this.element.attr("title"), this.options.title = this.options.title || this.originalTitle, this._createWrapper(), this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog), this._createTitlebar(), this._createButtonPane(), this.options.draggable && e.fn.draggable && this._makeDraggable(), this.options.resizable && e.fn.resizable && this._makeResizable(), this._isOpen = !1, this._trackFocus();
    }, _init: function _init() {
      this.options.autoOpen && this.open();
    }, _appendTo: function _appendTo() {
      var t = this.options.appendTo;return t && (t.jquery || t.nodeType) ? e(t) : this.document.find(t || "body").eq(0);
    }, _destroy: function _destroy() {
      var e,
          t = this.originalPosition;this._untrackInstance(), this._destroyOverlay(), this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(), this.uiDialog.stop(!0, !0).remove(), this.originalTitle && this.element.attr("title", this.originalTitle), e = t.parent.children().eq(t.index), e.length && e[0] !== this.element[0] ? e.before(this.element) : t.parent.append(this.element);
    }, widget: function widget() {
      return this.uiDialog;
    }, disable: e.noop, enable: e.noop, close: function close(t) {
      var i,
          s = this;if (this._isOpen && this._trigger("beforeClose", t) !== !1) {
        if (this._isOpen = !1, this._focusedElement = null, this._destroyOverlay(), this._untrackInstance(), !this.opener.filter(":focusable").focus().length) try {
          i = this.document[0].activeElement, i && "body" !== i.nodeName.toLowerCase() && e(i).blur();
        } catch (n) {}this._hide(this.uiDialog, this.options.hide, function () {
          s._trigger("close", t);
        });
      }
    }, isOpen: function isOpen() {
      return this._isOpen;
    }, moveToTop: function moveToTop() {
      this._moveToTop();
    }, _moveToTop: function _moveToTop(t, i) {
      var s = !1,
          n = this.uiDialog.siblings(".ui-front:visible").map(function () {
        return +e(this).css("z-index");
      }).get(),
          a = Math.max.apply(null, n);return a >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", a + 1), s = !0), s && !i && this._trigger("focus", t), s;
    }, open: function open() {
      var t = this;return this._isOpen ? (this._moveToTop() && this._focusTabbable(), void 0) : (this._isOpen = !0, this.opener = e(this.document[0].activeElement), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1), this._show(this.uiDialog, this.options.show, function () {
        t._focusTabbable(), t._trigger("focus");
      }), this._makeFocusTarget(), this._trigger("open"), void 0);
    }, _focusTabbable: function _focusTabbable() {
      var e = this._focusedElement;e || (e = this.element.find("[autofocus]")), e.length || (e = this.element.find(":tabbable")), e.length || (e = this.uiDialogButtonPane.find(":tabbable")), e.length || (e = this.uiDialogTitlebarClose.filter(":tabbable")), e.length || (e = this.uiDialog), e.eq(0).focus();
    }, _keepFocus: function _keepFocus(t) {
      function i() {
        var t = this.document[0].activeElement,
            i = this.uiDialog[0] === t || e.contains(this.uiDialog[0], t);i || this._focusTabbable();
      }t.preventDefault(), i.call(this), this._delay(i);
    }, _createWrapper: function _createWrapper() {
      this.uiDialog = e("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " + this.options.dialogClass).hide().attr({ tabIndex: -1, role: "dialog" }).appendTo(this._appendTo()), this._on(this.uiDialog, { keydown: function keydown(t) {
          if (this.options.closeOnEscape && !t.isDefaultPrevented() && t.keyCode && t.keyCode === e.ui.keyCode.ESCAPE) return t.preventDefault(), this.close(t), void 0;if (t.keyCode === e.ui.keyCode.TAB && !t.isDefaultPrevented()) {
            var i = this.uiDialog.find(":tabbable"),
                s = i.filter(":first"),
                n = i.filter(":last");t.target !== n[0] && t.target !== this.uiDialog[0] || t.shiftKey ? t.target !== s[0] && t.target !== this.uiDialog[0] || !t.shiftKey || (this._delay(function () {
              n.focus();
            }), t.preventDefault()) : (this._delay(function () {
              s.focus();
            }), t.preventDefault());
          }
        }, mousedown: function mousedown(e) {
          this._moveToTop(e) && this._focusTabbable();
        } }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({ "aria-describedby": this.element.uniqueId().attr("id") });
    }, _createTitlebar: function _createTitlebar() {
      var t;this.uiDialogTitlebar = e("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog), this._on(this.uiDialogTitlebar, { mousedown: function mousedown(t) {
          e(t.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.focus();
        } }), this.uiDialogTitlebarClose = e("<button type='button'></button>").button({ label: this.options.closeText, icons: { primary: "ui-icon-closethick" }, text: !1 }).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar), this._on(this.uiDialogTitlebarClose, { click: function click(e) {
          e.preventDefault(), this.close(e);
        } }), t = e("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar), this._title(t), this.uiDialog.attr({ "aria-labelledby": t.attr("id") });
    }, _title: function _title(e) {
      this.options.title || e.html("&#160;"), e.text(this.options.title);
    }, _createButtonPane: function _createButtonPane() {
      this.uiDialogButtonPane = e("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"), this.uiButtonSet = e("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane), this._createButtons();
    }, _createButtons: function _createButtons() {
      var t = this,
          i = this.options.buttons;return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), e.isEmptyObject(i) || e.isArray(i) && !i.length ? (this.uiDialog.removeClass("ui-dialog-buttons"), void 0) : (e.each(i, function (i, s) {
        var n, a;s = e.isFunction(s) ? { click: s, text: i } : s, s = e.extend({ type: "button" }, s), n = s.click, s.click = function () {
          n.apply(t.element[0], arguments);
        }, a = { icons: s.icons, text: s.showText }, delete s.icons, delete s.showText, e("<button></button>", s).button(a).appendTo(t.uiButtonSet);
      }), this.uiDialog.addClass("ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog), void 0);
    }, _makeDraggable: function _makeDraggable() {
      function t(e) {
        return { position: e.position, offset: e.offset };
      }var i = this,
          s = this.options;this.uiDialog.draggable({ cancel: ".ui-dialog-content, .ui-dialog-titlebar-close", handle: ".ui-dialog-titlebar", containment: "document", start: function start(s, n) {
          e(this).addClass("ui-dialog-dragging"), i._blockFrames(), i._trigger("dragStart", s, t(n));
        }, drag: function drag(e, s) {
          i._trigger("drag", e, t(s));
        }, stop: function stop(n, a) {
          var o = a.offset.left - i.document.scrollLeft(),
              r = a.offset.top - i.document.scrollTop();s.position = { my: "left top", at: "left" + (o >= 0 ? "+" : "") + o + " " + "top" + (r >= 0 ? "+" : "") + r, of: i.window }, e(this).removeClass("ui-dialog-dragging"), i._unblockFrames(), i._trigger("dragStop", n, t(a));
        } });
    }, _makeResizable: function _makeResizable() {
      function t(e) {
        return { originalPosition: e.originalPosition, originalSize: e.originalSize, position: e.position, size: e.size };
      }var i = this,
          s = this.options,
          n = s.resizable,
          a = this.uiDialog.css("position"),
          o = "string" == typeof n ? n : "n,e,s,w,se,sw,ne,nw";this.uiDialog.resizable({ cancel: ".ui-dialog-content", containment: "document", alsoResize: this.element, maxWidth: s.maxWidth, maxHeight: s.maxHeight, minWidth: s.minWidth, minHeight: this._minHeight(), handles: o, start: function start(s, n) {
          e(this).addClass("ui-dialog-resizing"), i._blockFrames(), i._trigger("resizeStart", s, t(n));
        }, resize: function resize(e, s) {
          i._trigger("resize", e, t(s));
        }, stop: function stop(n, a) {
          var o = i.uiDialog.offset(),
              r = o.left - i.document.scrollLeft(),
              h = o.top - i.document.scrollTop();s.height = i.uiDialog.height(), s.width = i.uiDialog.width(), s.position = { my: "left top", at: "left" + (r >= 0 ? "+" : "") + r + " " + "top" + (h >= 0 ? "+" : "") + h, of: i.window }, e(this).removeClass("ui-dialog-resizing"), i._unblockFrames(), i._trigger("resizeStop", n, t(a));
        } }).css("position", a);
    }, _trackFocus: function _trackFocus() {
      this._on(this.widget(), { focusin: function focusin(t) {
          this._makeFocusTarget(), this._focusedElement = e(t.target);
        } });
    }, _makeFocusTarget: function _makeFocusTarget() {
      this._untrackInstance(), this._trackingInstances().unshift(this);
    }, _untrackInstance: function _untrackInstance() {
      var t = this._trackingInstances(),
          i = e.inArray(this, t);-1 !== i && t.splice(i, 1);
    }, _trackingInstances: function _trackingInstances() {
      var e = this.document.data("ui-dialog-instances");return e || (e = [], this.document.data("ui-dialog-instances", e)), e;
    }, _minHeight: function _minHeight() {
      var e = this.options;return "auto" === e.height ? e.minHeight : Math.min(e.minHeight, e.height);
    }, _position: function _position() {
      var e = this.uiDialog.is(":visible");e || this.uiDialog.show(), this.uiDialog.position(this.options.position), e || this.uiDialog.hide();
    }, _setOptions: function _setOptions(t) {
      var i = this,
          s = !1,
          n = {};e.each(t, function (e, t) {
        i._setOption(e, t), e in i.sizeRelatedOptions && (s = !0), e in i.resizableRelatedOptions && (n[e] = t);
      }), s && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", n);
    }, _setOption: function _setOption(e, t) {
      var i,
          s,
          n = this.uiDialog;"dialogClass" === e && n.removeClass(this.options.dialogClass).addClass(t), "disabled" !== e && (this._super(e, t), "appendTo" === e && this.uiDialog.appendTo(this._appendTo()), "buttons" === e && this._createButtons(), "closeText" === e && this.uiDialogTitlebarClose.button({ label: "" + t }), "draggable" === e && (i = n.is(":data(ui-draggable)"), i && !t && n.draggable("destroy"), !i && t && this._makeDraggable()), "position" === e && this._position(), "resizable" === e && (s = n.is(":data(ui-resizable)"), s && !t && n.resizable("destroy"), s && "string" == typeof t && n.resizable("option", "handles", t), s || t === !1 || this._makeResizable()), "title" === e && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")));
    }, _size: function _size() {
      var e,
          t,
          i,
          s = this.options;this.element.show().css({ width: "auto", minHeight: 0, maxHeight: "none", height: 0 }), s.minWidth > s.width && (s.width = s.minWidth), e = this.uiDialog.css({ height: "auto", width: s.width }).outerHeight(), t = Math.max(0, s.minHeight - e), i = "number" == typeof s.maxHeight ? Math.max(0, s.maxHeight - e) : "none", "auto" === s.height ? this.element.css({ minHeight: t, maxHeight: i, height: "auto" }) : this.element.height(Math.max(0, s.height - e)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight());
    }, _blockFrames: function _blockFrames() {
      this.iframeBlocks = this.document.find("iframe").map(function () {
        var t = e(this);return e("<div>").css({ position: "absolute", width: t.outerWidth(), height: t.outerHeight() }).appendTo(t.parent()).offset(t.offset())[0];
      });
    }, _unblockFrames: function _unblockFrames() {
      this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks);
    }, _allowInteraction: function _allowInteraction(t) {
      return e(t.target).closest(".ui-dialog").length ? !0 : !!e(t.target).closest(".ui-datepicker").length;
    }, _createOverlay: function _createOverlay() {
      if (this.options.modal) {
        var t = !0;this._delay(function () {
          t = !1;
        }), this.document.data("ui-dialog-overlays") || this._on(this.document, { focusin: function focusin(e) {
            t || this._allowInteraction(e) || (e.preventDefault(), this._trackingInstances()[0]._focusTabbable());
          } }), this.overlay = e("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()), this._on(this.overlay, { mousedown: "_keepFocus" }), this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1);
      }
    }, _destroyOverlay: function _destroyOverlay() {
      if (this.options.modal && this.overlay) {
        var e = this.document.data("ui-dialog-overlays") - 1;e ? this.document.data("ui-dialog-overlays", e) : this.document.unbind("focusin").removeData("ui-dialog-overlays"), this.overlay.remove(), this.overlay = null;
      }
    } }), e.widget("ui.progressbar", { version: "1.11.4", options: { max: 100, value: 0, change: null, complete: null }, min: 0, _create: function _create() {
      this.oldValue = this.options.value = this._constrainedValue(), this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({ role: "progressbar", "aria-valuemin": this.min }), this.valueDiv = e("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element), this._refreshValue();
    }, _destroy: function _destroy() {
      this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.valueDiv.remove();
    }, value: function value(e) {
      return void 0 === e ? this.options.value : (this.options.value = this._constrainedValue(e), this._refreshValue(), void 0);
    }, _constrainedValue: function _constrainedValue(e) {
      return void 0 === e && (e = this.options.value), this.indeterminate = e === !1, "number" != typeof e && (e = 0), this.indeterminate ? !1 : Math.min(this.options.max, Math.max(this.min, e));
    }, _setOptions: function _setOptions(e) {
      var t = e.value;delete e.value, this._super(e), this.options.value = this._constrainedValue(t), this._refreshValue();
    }, _setOption: function _setOption(e, t) {
      "max" === e && (t = Math.max(this.min, t)), "disabled" === e && this.element.toggleClass("ui-state-disabled", !!t).attr("aria-disabled", t), this._super(e, t);
    }, _percentage: function _percentage() {
      return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min);
    }, _refreshValue: function _refreshValue() {
      var t = this.options.value,
          i = this._percentage();this.valueDiv.toggle(this.indeterminate || t > this.min).toggleClass("ui-corner-right", t === this.options.max).width(i.toFixed(0) + "%"), this.element.toggleClass("ui-progressbar-indeterminate", this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = e("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))) : (this.element.attr({ "aria-valuemax": this.options.max, "aria-valuenow": t }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== t && (this.oldValue = t, this._trigger("change")), t === this.options.max && this._trigger("complete");
    } }), e.widget("ui.selectmenu", { version: "1.11.4", defaultElement: "<select>", options: { appendTo: null, disabled: null, icons: { button: "ui-icon-triangle-1-s" }, position: { my: "left top", at: "left bottom", collision: "none" }, width: null, change: null, close: null, focus: null, open: null, select: null }, _create: function _create() {
      var e = this.element.uniqueId().attr("id");this.ids = { element: e, button: e + "-button", menu: e + "-menu" }, this._drawButton(), this._drawMenu(), this.options.disabled && this.disable();
    }, _drawButton: function _drawButton() {
      var t = this;this.label = e("label[for='" + this.ids.element + "']").attr("for", this.ids.button), this._on(this.label, { click: function click(e) {
          this.button.focus(), e.preventDefault();
        } }), this.element.hide(), this.button = e("<span>", { "class": "ui-selectmenu-button ui-widget ui-state-default ui-corner-all", tabindex: this.options.disabled ? -1 : 0, id: this.ids.button, role: "combobox", "aria-expanded": "false", "aria-autocomplete": "list", "aria-owns": this.ids.menu, "aria-haspopup": "true" }).insertAfter(this.element), e("<span>", { "class": "ui-icon " + this.options.icons.button }).prependTo(this.button), this.buttonText = e("<span>", { "class": "ui-selectmenu-text" }).appendTo(this.button), this._setText(this.buttonText, this.element.find("option:selected").text()), this._resizeButton(), this._on(this.button, this._buttonEvents), this.button.one("focusin", function () {
        t.menuItems || t._refreshMenu();
      }), this._hoverable(this.button), this._focusable(this.button);
    }, _drawMenu: function _drawMenu() {
      var t = this;this.menu = e("<ul>", { "aria-hidden": "true", "aria-labelledby": this.ids.button, id: this.ids.menu }), this.menuWrap = e("<div>", { "class": "ui-selectmenu-menu ui-front" }).append(this.menu).appendTo(this._appendTo()), this.menuInstance = this.menu.menu({ role: "listbox", select: function select(e, i) {
          e.preventDefault(), t._setSelection(), t._select(i.item.data("ui-selectmenu-item"), e);
        }, focus: function focus(e, i) {
          var s = i.item.data("ui-selectmenu-item");null != t.focusIndex && s.index !== t.focusIndex && (t._trigger("focus", e, { item: s }), t.isOpen || t._select(s, e)), t.focusIndex = s.index, t.button.attr("aria-activedescendant", t.menuItems.eq(s.index).attr("id"));
        } }).menu("instance"), this.menu.addClass("ui-corner-bottom").removeClass("ui-corner-all"), this.menuInstance._off(this.menu, "mouseleave"), this.menuInstance._closeOnDocumentClick = function () {
        return !1;
      }, this.menuInstance._isDivider = function () {
        return !1;
      };
    }, refresh: function refresh() {
      this._refreshMenu(), this._setText(this.buttonText, this._getSelectedItem().text()), this.options.width || this._resizeButton();
    }, _refreshMenu: function _refreshMenu() {
      this.menu.empty();var e,
          t = this.element.find("option");t.length && (this._parseOptions(t), this._renderMenu(this.menu, this.items), this.menuInstance.refresh(), this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup"), e = this._getSelectedItem(), this.menuInstance.focus(null, e), this._setAria(e.data("ui-selectmenu-item")), this._setOption("disabled", this.element.prop("disabled")));
    }, open: function open(e) {
      this.options.disabled || (this.menuItems ? (this.menu.find(".ui-state-focus").removeClass("ui-state-focus"), this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(), this.isOpen = !0, this._toggleAttr(), this._resizeMenu(), this._position(), this._on(this.document, this._documentClick), this._trigger("open", e));
    }, _position: function _position() {
      this.menuWrap.position(e.extend({ of: this.button }, this.options.position));
    }, close: function close(e) {
      this.isOpen && (this.isOpen = !1, this._toggleAttr(), this.range = null, this._off(this.document), this._trigger("close", e));
    }, widget: function widget() {
      return this.button;
    }, menuWidget: function menuWidget() {
      return this.menu;
    }, _renderMenu: function _renderMenu(t, i) {
      var s = this,
          n = "";e.each(i, function (i, a) {
        a.optgroup !== n && (e("<li>", { "class": "ui-selectmenu-optgroup ui-menu-divider" + (a.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : ""), text: a.optgroup }).appendTo(t), n = a.optgroup), s._renderItemData(t, a);
      });
    }, _renderItemData: function _renderItemData(e, t) {
      return this._renderItem(e, t).data("ui-selectmenu-item", t);
    }, _renderItem: function _renderItem(t, i) {
      var s = e("<li>");return i.disabled && s.addClass("ui-state-disabled"), this._setText(s, i.label), s.appendTo(t);
    }, _setText: function _setText(e, t) {
      t ? e.text(t) : e.html("&#160;");
    }, _move: function _move(e, t) {
      var i,
          s,
          n = ".ui-menu-item";this.isOpen ? i = this.menuItems.eq(this.focusIndex) : (i = this.menuItems.eq(this.element[0].selectedIndex), n += ":not(.ui-state-disabled)"), s = "first" === e || "last" === e ? i["first" === e ? "prevAll" : "nextAll"](n).eq(-1) : i[e + "All"](n).eq(0), s.length && this.menuInstance.focus(t, s);
    }, _getSelectedItem: function _getSelectedItem() {
      return this.menuItems.eq(this.element[0].selectedIndex);
    }, _toggle: function _toggle(e) {
      this[this.isOpen ? "close" : "open"](e);
    }, _setSelection: function _setSelection() {
      var e;this.range && (window.getSelection ? (e = window.getSelection(), e.removeAllRanges(), e.addRange(this.range)) : this.range.select(), this.button.focus());
    }, _documentClick: { mousedown: function mousedown(t) {
        this.isOpen && (e(t.target).closest(".ui-selectmenu-menu, #" + this.ids.button).length || this.close(t));
      } }, _buttonEvents: { mousedown: function mousedown() {
        var e;window.getSelection ? (e = window.getSelection(), e.rangeCount && (this.range = e.getRangeAt(0))) : this.range = document.selection.createRange();
      }, click: function click(e) {
        this._setSelection(), this._toggle(e);
      }, keydown: function keydown(t) {
        var i = !0;switch (t.keyCode) {case e.ui.keyCode.TAB:case e.ui.keyCode.ESCAPE:
            this.close(t), i = !1;break;case e.ui.keyCode.ENTER:
            this.isOpen && this._selectFocusedItem(t);break;case e.ui.keyCode.UP:
            t.altKey ? this._toggle(t) : this._move("prev", t);break;case e.ui.keyCode.DOWN:
            t.altKey ? this._toggle(t) : this._move("next", t);break;case e.ui.keyCode.SPACE:
            this.isOpen ? this._selectFocusedItem(t) : this._toggle(t);break;case e.ui.keyCode.LEFT:
            this._move("prev", t);break;case e.ui.keyCode.RIGHT:
            this._move("next", t);break;case e.ui.keyCode.HOME:case e.ui.keyCode.PAGE_UP:
            this._move("first", t);break;case e.ui.keyCode.END:case e.ui.keyCode.PAGE_DOWN:
            this._move("last", t);break;default:
            this.menu.trigger(t), i = !1;}i && t.preventDefault();
      } }, _selectFocusedItem: function _selectFocusedItem(e) {
      var t = this.menuItems.eq(this.focusIndex);t.hasClass("ui-state-disabled") || this._select(t.data("ui-selectmenu-item"), e);
    }, _select: function _select(e, t) {
      var i = this.element[0].selectedIndex;this.element[0].selectedIndex = e.index, this._setText(this.buttonText, e.label), this._setAria(e), this._trigger("select", t, { item: e }), e.index !== i && this._trigger("change", t, { item: e }), this.close(t);
    }, _setAria: function _setAria(e) {
      var t = this.menuItems.eq(e.index).attr("id");this.button.attr({ "aria-labelledby": t, "aria-activedescendant": t }), this.menu.attr("aria-activedescendant", t);
    }, _setOption: function _setOption(e, t) {
      "icons" === e && this.button.find("span.ui-icon").removeClass(this.options.icons.button).addClass(t.button), this._super(e, t), "appendTo" === e && this.menuWrap.appendTo(this._appendTo()), "disabled" === e && (this.menuInstance.option("disabled", t), this.button.toggleClass("ui-state-disabled", t).attr("aria-disabled", t), this.element.prop("disabled", t), t ? (this.button.attr("tabindex", -1), this.close()) : this.button.attr("tabindex", 0)), "width" === e && this._resizeButton();
    }, _appendTo: function _appendTo() {
      var t = this.options.appendTo;return t && (t = t.jquery || t.nodeType ? e(t) : this.document.find(t).eq(0)), t && t[0] || (t = this.element.closest(".ui-front")), t.length || (t = this.document[0].body), t;
    }, _toggleAttr: function _toggleAttr() {
      this.button.toggleClass("ui-corner-top", this.isOpen).toggleClass("ui-corner-all", !this.isOpen).attr("aria-expanded", this.isOpen), this.menuWrap.toggleClass("ui-selectmenu-open", this.isOpen), this.menu.attr("aria-hidden", !this.isOpen);
    }, _resizeButton: function _resizeButton() {
      var e = this.options.width;e || (e = this.element.show().outerWidth(), this.element.hide()), this.button.outerWidth(e);
    }, _resizeMenu: function _resizeMenu() {
      this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1));
    }, _getCreateOptions: function _getCreateOptions() {
      return { disabled: this.element.prop("disabled") };
    }, _parseOptions: function _parseOptions(t) {
      var i = [];t.each(function (t, s) {
        var n = e(s),
            a = n.parent("optgroup");i.push({ element: n, index: t, value: n.val(), label: n.text(), optgroup: a.attr("label") || "", disabled: a.prop("disabled") || n.prop("disabled") });
      }), this.items = i;
    }, _destroy: function _destroy() {
      this.menuWrap.remove(), this.button.remove(), this.element.show(), this.element.removeUniqueId(), this.label.attr("for", this.ids.element);
    } }), e.widget("ui.slider", e.ui.mouse, { version: "1.11.4", widgetEventPrefix: "slide", options: { animate: !1, distance: 0, max: 100, min: 0, orientation: "horizontal", range: !1, step: 1, value: 0, values: null, change: null, slide: null, start: null, stop: null }, numPages: 5, _create: function _create() {
      this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget" + " ui-widget-content" + " ui-corner-all"), this._refresh(), this._setOption("disabled", this.options.disabled), this._animateOff = !1;
    }, _refresh: function _refresh() {
      this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue();
    }, _createHandles: function _createHandles() {
      var t,
          i,
          s = this.options,
          n = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
          a = "<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>",
          o = [];for (i = s.values && s.values.length || 1, n.length > i && (n.slice(i).remove(), n = n.slice(0, i)), t = n.length; i > t; t++) {
        o.push(a);
      }this.handles = n.add(e(o.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.each(function (t) {
        e(this).data("ui-slider-handle-index", t);
      });
    }, _createRange: function _createRange() {
      var t = this.options,
          i = "";t.range ? (t.range === !0 && (t.values ? t.values.length && 2 !== t.values.length ? t.values = [t.values[0], t.values[0]] : e.isArray(t.values) && (t.values = t.values.slice(0)) : t.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({ left: "", bottom: "" }) : (this.range = e("<div></div>").appendTo(this.element), i = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(i + ("min" === t.range || "max" === t.range ? " ui-slider-range-" + t.range : ""))) : (this.range && this.range.remove(), this.range = null);
    }, _setupEvents: function _setupEvents() {
      this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles);
    }, _destroy: function _destroy() {
      this.handles.remove(), this.range && this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy();
    }, _mouseCapture: function _mouseCapture(t) {
      var i,
          s,
          n,
          a,
          o,
          r,
          h,
          l,
          u = this,
          d = this.options;return d.disabled ? !1 : (this.elementSize = { width: this.element.outerWidth(), height: this.element.outerHeight() }, this.elementOffset = this.element.offset(), i = { x: t.pageX, y: t.pageY }, s = this._normValueFromMouse(i), n = this._valueMax() - this._valueMin() + 1, this.handles.each(function (t) {
        var i = Math.abs(s - u.values(t));(n > i || n === i && (t === u._lastChangedValue || u.values(t) === d.min)) && (n = i, a = e(this), o = t);
      }), r = this._start(t, o), r === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = o, a.addClass("ui-state-active").focus(), h = a.offset(), l = !e(t.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = l ? { left: 0, top: 0 } : { left: t.pageX - h.left - a.width() / 2, top: t.pageY - h.top - a.height() / 2 - (parseInt(a.css("borderTopWidth"), 10) || 0) - (parseInt(a.css("borderBottomWidth"), 10) || 0) + (parseInt(a.css("marginTop"), 10) || 0) }, this.handles.hasClass("ui-state-hover") || this._slide(t, o, s), this._animateOff = !0, !0));
    }, _mouseStart: function _mouseStart() {
      return !0;
    }, _mouseDrag: function _mouseDrag(e) {
      var t = { x: e.pageX, y: e.pageY },
          i = this._normValueFromMouse(t);return this._slide(e, this._handleIndex, i), !1;
    }, _mouseStop: function _mouseStop(e) {
      return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(e, this._handleIndex), this._change(e, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1;
    }, _detectOrientation: function _detectOrientation() {
      this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal";
    }, _normValueFromMouse: function _normValueFromMouse(e) {
      var t, i, s, n, a;return "horizontal" === this.orientation ? (t = this.elementSize.width, i = e.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (t = this.elementSize.height, i = e.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), s = i / t, s > 1 && (s = 1), 0 > s && (s = 0), "vertical" === this.orientation && (s = 1 - s), n = this._valueMax() - this._valueMin(), a = this._valueMin() + s * n, this._trimAlignValue(a);
    }, _start: function _start(e, t) {
      var i = { handle: this.handles[t], value: this.value() };return this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._trigger("start", e, i);
    }, _slide: function _slide(e, t, i) {
      var s, n, a;this.options.values && this.options.values.length ? (s = this.values(t ? 0 : 1), 2 === this.options.values.length && this.options.range === !0 && (0 === t && i > s || 1 === t && s > i) && (i = s), i !== this.values(t) && (n = this.values(), n[t] = i, a = this._trigger("slide", e, { handle: this.handles[t], value: i, values: n }), s = this.values(t ? 0 : 1), a !== !1 && this.values(t, i))) : i !== this.value() && (a = this._trigger("slide", e, { handle: this.handles[t], value: i }), a !== !1 && this.value(i));
    }, _stop: function _stop(e, t) {
      var i = { handle: this.handles[t], value: this.value() };this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._trigger("stop", e, i);
    }, _change: function _change(e, t) {
      if (!this._keySliding && !this._mouseSliding) {
        var i = { handle: this.handles[t], value: this.value() };this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._lastChangedValue = t, this._trigger("change", e, i);
      }
    }, value: function value(e) {
      return arguments.length ? (this.options.value = this._trimAlignValue(e), this._refreshValue(), this._change(null, 0), void 0) : this._value();
    }, values: function values(t, i) {
      var s, n, a;if (arguments.length > 1) return this.options.values[t] = this._trimAlignValue(i), this._refreshValue(), this._change(null, t), void 0;if (!arguments.length) return this._values();if (!e.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(t) : this.value();for (s = this.options.values, n = arguments[0], a = 0; s.length > a; a += 1) {
        s[a] = this._trimAlignValue(n[a]), this._change(null, a);
      }this._refreshValue();
    }, _setOption: function _setOption(t, i) {
      var s,
          n = 0;switch ("range" === t && this.options.range === !0 && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), e.isArray(this.options.values) && (n = this.options.values.length), "disabled" === t && this.element.toggleClass("ui-state-disabled", !!i), this._super(t, i), t) {case "orientation":
          this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue(), this.handles.css("horizontal" === i ? "bottom" : "left", "");break;case "value":
          this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;break;case "values":
          for (this._animateOff = !0, this._refreshValue(), s = 0; n > s; s += 1) {
            this._change(null, s);
          }this._animateOff = !1;break;case "step":case "min":case "max":
          this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;break;case "range":
          this._animateOff = !0, this._refresh(), this._animateOff = !1;}
    }, _value: function _value() {
      var e = this.options.value;return e = this._trimAlignValue(e);
    }, _values: function _values(e) {
      var t, i, s;if (arguments.length) return t = this.options.values[e], t = this._trimAlignValue(t);if (this.options.values && this.options.values.length) {
        for (i = this.options.values.slice(), s = 0; i.length > s; s += 1) {
          i[s] = this._trimAlignValue(i[s]);
        }return i;
      }return [];
    }, _trimAlignValue: function _trimAlignValue(e) {
      if (this._valueMin() >= e) return this._valueMin();if (e >= this._valueMax()) return this._valueMax();var t = this.options.step > 0 ? this.options.step : 1,
          i = (e - this._valueMin()) % t,
          s = e - i;return 2 * Math.abs(i) >= t && (s += i > 0 ? t : -t), parseFloat(s.toFixed(5));
    }, _calculateNewMax: function _calculateNewMax() {
      var e = this.options.max,
          t = this._valueMin(),
          i = this.options.step,
          s = Math.floor(+(e - t).toFixed(this._precision()) / i) * i;e = s + t, this.max = parseFloat(e.toFixed(this._precision()));
    }, _precision: function _precision() {
      var e = this._precisionOf(this.options.step);return null !== this.options.min && (e = Math.max(e, this._precisionOf(this.options.min))), e;
    }, _precisionOf: function _precisionOf(e) {
      var t = "" + e,
          i = t.indexOf(".");return -1 === i ? 0 : t.length - i - 1;
    }, _valueMin: function _valueMin() {
      return this.options.min;
    }, _valueMax: function _valueMax() {
      return this.max;
    }, _refreshValue: function _refreshValue() {
      var t,
          i,
          s,
          n,
          a,
          o = this.options.range,
          r = this.options,
          h = this,
          l = this._animateOff ? !1 : r.animate,
          u = {};this.options.values && this.options.values.length ? this.handles.each(function (s) {
        i = 100 * ((h.values(s) - h._valueMin()) / (h._valueMax() - h._valueMin())), u["horizontal" === h.orientation ? "left" : "bottom"] = i + "%", e(this).stop(1, 1)[l ? "animate" : "css"](u, r.animate), h.options.range === !0 && ("horizontal" === h.orientation ? (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({ left: i + "%" }, r.animate), 1 === s && h.range[l ? "animate" : "css"]({ width: i - t + "%" }, { queue: !1, duration: r.animate })) : (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({ bottom: i + "%" }, r.animate), 1 === s && h.range[l ? "animate" : "css"]({ height: i - t + "%" }, { queue: !1, duration: r.animate }))), t = i;
      }) : (s = this.value(), n = this._valueMin(), a = this._valueMax(), i = a !== n ? 100 * ((s - n) / (a - n)) : 0, u["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[l ? "animate" : "css"](u, r.animate), "min" === o && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({ width: i + "%" }, r.animate), "max" === o && "horizontal" === this.orientation && this.range[l ? "animate" : "css"]({ width: 100 - i + "%" }, { queue: !1, duration: r.animate }), "min" === o && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({ height: i + "%" }, r.animate), "max" === o && "vertical" === this.orientation && this.range[l ? "animate" : "css"]({ height: 100 - i + "%" }, { queue: !1, duration: r.animate }));
    }, _handleEvents: { keydown: function keydown(t) {
        var i,
            s,
            n,
            a,
            o = e(t.target).data("ui-slider-handle-index");switch (t.keyCode) {case e.ui.keyCode.HOME:case e.ui.keyCode.END:case e.ui.keyCode.PAGE_UP:case e.ui.keyCode.PAGE_DOWN:case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:
            if (t.preventDefault(), !this._keySliding && (this._keySliding = !0, e(t.target).addClass("ui-state-active"), i = this._start(t, o), i === !1)) return;}switch (a = this.options.step, s = n = this.options.values && this.options.values.length ? this.values(o) : this.value(), t.keyCode) {case e.ui.keyCode.HOME:
            n = this._valueMin();break;case e.ui.keyCode.END:
            n = this._valueMax();break;case e.ui.keyCode.PAGE_UP:
            n = this._trimAlignValue(s + (this._valueMax() - this._valueMin()) / this.numPages);break;case e.ui.keyCode.PAGE_DOWN:
            n = this._trimAlignValue(s - (this._valueMax() - this._valueMin()) / this.numPages);break;case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:
            if (s === this._valueMax()) return;n = this._trimAlignValue(s + a);break;case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:
            if (s === this._valueMin()) return;n = this._trimAlignValue(s - a);}this._slide(t, o, n);
      }, keyup: function keyup(t) {
        var i = e(t.target).data("ui-slider-handle-index");this._keySliding && (this._keySliding = !1, this._stop(t, i), this._change(t, i), e(t.target).removeClass("ui-state-active"));
      } } }), e.widget("ui.spinner", { version: "1.11.4", defaultElement: "<input>", widgetEventPrefix: "spin", options: { culture: null, icons: { down: "ui-icon-triangle-1-s", up: "ui-icon-triangle-1-n" }, incremental: !0, max: null, min: null, numberFormat: null, page: 10, step: 1, change: null, spin: null, start: null, stop: null }, _create: function _create() {
      this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), "" !== this.value() && this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, { beforeunload: function beforeunload() {
          this.element.removeAttr("autocomplete");
        } });
    }, _getCreateOptions: function _getCreateOptions() {
      var t = {},
          i = this.element;return e.each(["min", "max", "step"], function (e, s) {
        var n = i.attr(s);void 0 !== n && n.length && (t[s] = n);
      }), t;
    }, _events: { keydown: function keydown(e) {
        this._start(e) && this._keydown(e) && e.preventDefault();
      }, keyup: "_stop", focus: function focus() {
        this.previous = this.element.val();
      }, blur: function blur(e) {
        return this.cancelBlur ? (delete this.cancelBlur, void 0) : (this._stop(), this._refresh(), this.previous !== this.element.val() && this._trigger("change", e), void 0);
      }, mousewheel: function mousewheel(e, t) {
        if (t) {
          if (!this.spinning && !this._start(e)) return !1;this._spin((t > 0 ? 1 : -1) * this.options.step, e), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function () {
            this.spinning && this._stop(e);
          }, 100), e.preventDefault();
        }
      }, "mousedown .ui-spinner-button": function mousedownUiSpinnerButton(t) {
        function i() {
          var e = this.element[0] === this.document[0].activeElement;e || (this.element.focus(), this.previous = s, this._delay(function () {
            this.previous = s;
          }));
        }var s;s = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val(), t.preventDefault(), i.call(this), this.cancelBlur = !0, this._delay(function () {
          delete this.cancelBlur, i.call(this);
        }), this._start(t) !== !1 && this._repeat(null, e(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t);
      }, "mouseup .ui-spinner-button": "_stop", "mouseenter .ui-spinner-button": function mouseenterUiSpinnerButton(t) {
        return e(t.currentTarget).hasClass("ui-state-active") ? this._start(t) === !1 ? !1 : (this._repeat(null, e(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t), void 0) : void 0;
      }, "mouseleave .ui-spinner-button": "_stop" }, _draw: function _draw() {
      var e = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());this.element.attr("role", "spinbutton"), this.buttons = e.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all"), this.buttons.height() > Math.ceil(.5 * e.height()) && e.height() > 0 && e.height(e.height()), this.options.disabled && this.disable();
    }, _keydown: function _keydown(t) {
      var i = this.options,
          s = e.ui.keyCode;switch (t.keyCode) {case s.UP:
          return this._repeat(null, 1, t), !0;case s.DOWN:
          return this._repeat(null, -1, t), !0;case s.PAGE_UP:
          return this._repeat(null, i.page, t), !0;case s.PAGE_DOWN:
          return this._repeat(null, -i.page, t), !0;}return !1;
    }, _uiSpinnerHtml: function _uiSpinnerHtml() {
      return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>";
    }, _buttonHtml: function _buttonHtml() {
      return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;</span>" + "</a>" + "<a class='ui-spinner-button ui-spinner-down ui-corner-br'>" + "<span class='ui-icon " + this.options.icons.down + "'>&#9660;</span>" + "</a>";
    }, _start: function _start(e) {
      return this.spinning || this._trigger("start", e) !== !1 ? (this.counter || (this.counter = 1), this.spinning = !0, !0) : !1;
    }, _repeat: function _repeat(e, t, i) {
      e = e || 500, clearTimeout(this.timer), this.timer = this._delay(function () {
        this._repeat(40, t, i);
      }, e), this._spin(t * this.options.step, i);
    }, _spin: function _spin(e, t) {
      var i = this.value() || 0;this.counter || (this.counter = 1), i = this._adjustValue(i + e * this._increment(this.counter)), this.spinning && this._trigger("spin", t, { value: i }) === !1 || (this._value(i), this.counter++);
    }, _increment: function _increment(t) {
      var i = this.options.incremental;return i ? e.isFunction(i) ? i(t) : Math.floor(t * t * t / 5e4 - t * t / 500 + 17 * t / 200 + 1) : 1;
    }, _precision: function _precision() {
      var e = this._precisionOf(this.options.step);return null !== this.options.min && (e = Math.max(e, this._precisionOf(this.options.min))), e;
    }, _precisionOf: function _precisionOf(e) {
      var t = "" + e,
          i = t.indexOf(".");return -1 === i ? 0 : t.length - i - 1;
    }, _adjustValue: function _adjustValue(e) {
      var t,
          i,
          s = this.options;return t = null !== s.min ? s.min : 0, i = e - t, i = Math.round(i / s.step) * s.step, e = t + i, e = parseFloat(e.toFixed(this._precision())), null !== s.max && e > s.max ? s.max : null !== s.min && s.min > e ? s.min : e;
    }, _stop: function _stop(e) {
      this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", e));
    }, _setOption: function _setOption(e, t) {
      if ("culture" === e || "numberFormat" === e) {
        var i = this._parse(this.element.val());return this.options[e] = t, this.element.val(this._format(i)), void 0;
      }("max" === e || "min" === e || "step" === e) && "string" == typeof t && (t = this._parse(t)), "icons" === e && (this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(t.up), this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(t.down)), this._super(e, t), "disabled" === e && (this.widget().toggleClass("ui-state-disabled", !!t), this.element.prop("disabled", !!t), this.buttons.button(t ? "disable" : "enable"));
    }, _setOptions: h(function (e) {
      this._super(e);
    }), _parse: function _parse(e) {
      return "string" == typeof e && "" !== e && (e = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(e, 10, this.options.culture) : +e), "" === e || isNaN(e) ? null : e;
    }, _format: function _format(e) {
      return "" === e ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(e, this.options.numberFormat, this.options.culture) : e;
    }, _refresh: function _refresh() {
      this.element.attr({ "aria-valuemin": this.options.min, "aria-valuemax": this.options.max, "aria-valuenow": this._parse(this.element.val()) });
    }, isValid: function isValid() {
      var e = this.value();return null === e ? !1 : e === this._adjustValue(e);
    }, _value: function _value(e, t) {
      var i;"" !== e && (i = this._parse(e), null !== i && (t || (i = this._adjustValue(i)), e = this._format(i))), this.element.val(e), this._refresh();
    }, _destroy: function _destroy() {
      this.element.removeClass("ui-spinner-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.uiSpinner.replaceWith(this.element);
    }, stepUp: h(function (e) {
      this._stepUp(e);
    }), _stepUp: function _stepUp(e) {
      this._start() && (this._spin((e || 1) * this.options.step), this._stop());
    }, stepDown: h(function (e) {
      this._stepDown(e);
    }), _stepDown: function _stepDown(e) {
      this._start() && (this._spin((e || 1) * -this.options.step), this._stop());
    }, pageUp: h(function (e) {
      this._stepUp((e || 1) * this.options.page);
    }), pageDown: h(function (e) {
      this._stepDown((e || 1) * this.options.page);
    }), value: function value(e) {
      return arguments.length ? (h(this._value).call(this, e), void 0) : this._parse(this.element.val());
    }, widget: function widget() {
      return this.uiSpinner;
    } }), e.widget("ui.tabs", { version: "1.11.4", delay: 300, options: { active: null, collapsible: !1, event: "click", heightStyle: "content", hide: null, show: null, activate: null, beforeActivate: null, beforeLoad: null, load: null }, _isLocal: function () {
      var e = /#.*$/;return function (t) {
        var i, s;t = t.cloneNode(!1), i = t.href.replace(e, ""), s = location.href.replace(e, "");try {
          i = decodeURIComponent(i);
        } catch (n) {}try {
          s = decodeURIComponent(s);
        } catch (n) {}return t.hash.length > 1 && i === s;
      };
    }(), _create: function _create() {
      var t = this,
          i = this.options;this.running = !1, this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", i.collapsible), this._processTabs(), i.active = this._initialActive(), e.isArray(i.disabled) && (i.disabled = e.unique(i.disabled.concat(e.map(this.tabs.filter(".ui-state-disabled"), function (e) {
        return t.tabs.index(e);
      }))).sort()), this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(i.active) : e(), this._refresh(), this.active.length && this.load(i.active);
    }, _initialActive: function _initialActive() {
      var t = this.options.active,
          i = this.options.collapsible,
          s = location.hash.substring(1);return null === t && (s && this.tabs.each(function (i, n) {
        return e(n).attr("aria-controls") === s ? (t = i, !1) : void 0;
      }), null === t && (t = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === t || -1 === t) && (t = this.tabs.length ? 0 : !1)), t !== !1 && (t = this.tabs.index(this.tabs.eq(t)), -1 === t && (t = i ? !1 : 0)), !i && t === !1 && this.anchors.length && (t = 0), t;
    }, _getCreateEventData: function _getCreateEventData() {
      return { tab: this.active, panel: this.active.length ? this._getPanelForTab(this.active) : e() };
    }, _tabKeydown: function _tabKeydown(t) {
      var i = e(this.document[0].activeElement).closest("li"),
          s = this.tabs.index(i),
          n = !0;if (!this._handlePageNav(t)) {
        switch (t.keyCode) {case e.ui.keyCode.RIGHT:case e.ui.keyCode.DOWN:
            s++;break;case e.ui.keyCode.UP:case e.ui.keyCode.LEFT:
            n = !1, s--;break;case e.ui.keyCode.END:
            s = this.anchors.length - 1;break;case e.ui.keyCode.HOME:
            s = 0;break;case e.ui.keyCode.SPACE:
            return t.preventDefault(), clearTimeout(this.activating), this._activate(s), void 0;case e.ui.keyCode.ENTER:
            return t.preventDefault(), clearTimeout(this.activating), this._activate(s === this.options.active ? !1 : s), void 0;default:
            return;}t.preventDefault(), clearTimeout(this.activating), s = this._focusNextTab(s, n), t.ctrlKey || t.metaKey || (i.attr("aria-selected", "false"), this.tabs.eq(s).attr("aria-selected", "true"), this.activating = this._delay(function () {
          this.option("active", s);
        }, this.delay));
      }
    }, _panelKeydown: function _panelKeydown(t) {
      this._handlePageNav(t) || t.ctrlKey && t.keyCode === e.ui.keyCode.UP && (t.preventDefault(), this.active.focus());
    }, _handlePageNav: function _handlePageNav(t) {
      return t.altKey && t.keyCode === e.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : t.altKey && t.keyCode === e.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0;
    }, _findNextTab: function _findNextTab(t, i) {
      function s() {
        return t > n && (t = 0), 0 > t && (t = n), t;
      }for (var n = this.tabs.length - 1; -1 !== e.inArray(s(), this.options.disabled);) {
        t = i ? t + 1 : t - 1;
      }return t;
    }, _focusNextTab: function _focusNextTab(e, t) {
      return e = this._findNextTab(e, t), this.tabs.eq(e).focus(), e;
    }, _setOption: function _setOption(e, t) {
      return "active" === e ? (this._activate(t), void 0) : "disabled" === e ? (this._setupDisabled(t), void 0) : (this._super(e, t), "collapsible" === e && (this.element.toggleClass("ui-tabs-collapsible", t), t || this.options.active !== !1 || this._activate(0)), "event" === e && this._setupEvents(t), "heightStyle" === e && this._setupHeightStyle(t), void 0);
    }, _sanitizeSelector: function _sanitizeSelector(e) {
      return e ? e.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : "";
    }, refresh: function refresh() {
      var t = this.options,
          i = this.tablist.children(":has(a[href])");t.disabled = e.map(i.filter(".ui-state-disabled"), function (e) {
        return i.index(e);
      }), this._processTabs(), t.active !== !1 && this.anchors.length ? this.active.length && !e.contains(this.tablist[0], this.active[0]) ? this.tabs.length === t.disabled.length ? (t.active = !1, this.active = e()) : this._activate(this._findNextTab(Math.max(0, t.active - 1), !1)) : t.active = this.tabs.index(this.active) : (t.active = !1, this.active = e()), this._refresh();
    }, _refresh: function _refresh() {
      this._setupDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({ "aria-selected": "false", "aria-expanded": "false", tabIndex: -1 }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({ "aria-hidden": "true" }), this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 }), this._getPanelForTab(this.active).show().attr({ "aria-hidden": "false" })) : this.tabs.eq(0).attr("tabIndex", 0);
    }, _processTabs: function _processTabs() {
      var t = this,
          i = this.tabs,
          s = this.anchors,
          n = this.panels;this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist").delegate("> li", "mousedown" + this.eventNamespace, function (t) {
        e(this).is(".ui-state-disabled") && t.preventDefault();
      }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function () {
        e(this).closest("li").is(".ui-state-disabled") && this.blur();
      }), this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({ role: "tab", tabIndex: -1 }), this.anchors = this.tabs.map(function () {
        return e("a", this)[0];
      }).addClass("ui-tabs-anchor").attr({ role: "presentation", tabIndex: -1 }), this.panels = e(), this.anchors.each(function (i, s) {
        var n,
            a,
            o,
            r = e(s).uniqueId().attr("id"),
            h = e(s).closest("li"),
            l = h.attr("aria-controls");t._isLocal(s) ? (n = s.hash, o = n.substring(1), a = t.element.find(t._sanitizeSelector(n))) : (o = h.attr("aria-controls") || e({}).uniqueId()[0].id, n = "#" + o, a = t.element.find(n), a.length || (a = t._createPanel(o), a.insertAfter(t.panels[i - 1] || t.tablist)), a.attr("aria-live", "polite")), a.length && (t.panels = t.panels.add(a)), l && h.data("ui-tabs-aria-controls", l), h.attr({ "aria-controls": o, "aria-labelledby": r }), a.attr("aria-labelledby", r);
      }), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel"), i && (this._off(i.not(this.tabs)), this._off(s.not(this.anchors)), this._off(n.not(this.panels)));
    }, _getList: function _getList() {
      return this.tablist || this.element.find("ol,ul").eq(0);
    }, _createPanel: function _createPanel(t) {
      return e("<div>").attr("id", t).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0);
    }, _setupDisabled: function _setupDisabled(t) {
      e.isArray(t) && (t.length ? t.length === this.anchors.length && (t = !0) : t = !1);for (var i, s = 0; i = this.tabs[s]; s++) {
        t === !0 || -1 !== e.inArray(s, t) ? e(i).addClass("ui-state-disabled").attr("aria-disabled", "true") : e(i).removeClass("ui-state-disabled").removeAttr("aria-disabled");
      }this.options.disabled = t;
    }, _setupEvents: function _setupEvents(t) {
      var i = {};t && e.each(t.split(" "), function (e, t) {
        i[t] = "_eventHandler";
      }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(!0, this.anchors, { click: function click(e) {
          e.preventDefault();
        } }), this._on(this.anchors, i), this._on(this.tabs, { keydown: "_tabKeydown" }), this._on(this.panels, { keydown: "_panelKeydown" }), this._focusable(this.tabs), this._hoverable(this.tabs);
    }, _setupHeightStyle: function _setupHeightStyle(t) {
      var i,
          s = this.element.parent();"fill" === t ? (i = s.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function () {
        var t = e(this),
            s = t.css("position");"absolute" !== s && "fixed" !== s && (i -= t.outerHeight(!0));
      }), this.element.children().not(this.panels).each(function () {
        i -= e(this).outerHeight(!0);
      }), this.panels.each(function () {
        e(this).height(Math.max(0, i - e(this).innerHeight() + e(this).height()));
      }).css("overflow", "auto")) : "auto" === t && (i = 0, this.panels.each(function () {
        i = Math.max(i, e(this).height("").height());
      }).height(i));
    }, _eventHandler: function _eventHandler(t) {
      var i = this.options,
          s = this.active,
          n = e(t.currentTarget),
          a = n.closest("li"),
          o = a[0] === s[0],
          r = o && i.collapsible,
          h = r ? e() : this._getPanelForTab(a),
          l = s.length ? this._getPanelForTab(s) : e(),
          u = { oldTab: s, oldPanel: l, newTab: r ? e() : a, newPanel: h };t.preventDefault(), a.hasClass("ui-state-disabled") || a.hasClass("ui-tabs-loading") || this.running || o && !i.collapsible || this._trigger("beforeActivate", t, u) === !1 || (i.active = r ? !1 : this.tabs.index(a), this.active = o ? e() : a, this.xhr && this.xhr.abort(), l.length || h.length || e.error("jQuery UI Tabs: Mismatching fragment identifier."), h.length && this.load(this.tabs.index(a), t), this._toggle(t, u));
    }, _toggle: function _toggle(t, i) {
      function s() {
        a.running = !1, a._trigger("activate", t, i);
      }function n() {
        i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), o.length && a.options.show ? a._show(o, a.options.show, s) : (o.show(), s());
      }var a = this,
          o = i.newPanel,
          r = i.oldPanel;this.running = !0, r.length && this.options.hide ? this._hide(r, this.options.hide, function () {
        i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), n();
      }) : (i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), r.hide(), n()), r.attr("aria-hidden", "true"), i.oldTab.attr({ "aria-selected": "false", "aria-expanded": "false" }), o.length && r.length ? i.oldTab.attr("tabIndex", -1) : o.length && this.tabs.filter(function () {
        return 0 === e(this).attr("tabIndex");
      }).attr("tabIndex", -1), o.attr("aria-hidden", "false"), i.newTab.attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 });
    }, _activate: function _activate(t) {
      var i,
          s = this._findActive(t);s[0] !== this.active[0] && (s.length || (s = this.active), i = s.find(".ui-tabs-anchor")[0], this._eventHandler({ target: i, currentTarget: i, preventDefault: e.noop }));
    }, _findActive: function _findActive(t) {
      return t === !1 ? e() : this.tabs.eq(t);
    }, _getIndex: function _getIndex(e) {
      return "string" == typeof e && (e = this.anchors.index(this.anchors.filter("[href$='" + e + "']"))), e;
    }, _destroy: function _destroy() {
      this.xhr && this.xhr.abort(), this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"), this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"), this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(), this.tablist.unbind(this.eventNamespace), this.tabs.add(this.panels).each(function () {
        e.data(this, "ui-tabs-destroy") ? e(this).remove() : e(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role");
      }), this.tabs.each(function () {
        var t = e(this),
            i = t.data("ui-tabs-aria-controls");i ? t.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : t.removeAttr("aria-controls");
      }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "");
    }, enable: function enable(t) {
      var i = this.options.disabled;i !== !1 && (void 0 === t ? i = !1 : (t = this._getIndex(t), i = e.isArray(i) ? e.map(i, function (e) {
        return e !== t ? e : null;
      }) : e.map(this.tabs, function (e, i) {
        return i !== t ? i : null;
      })), this._setupDisabled(i));
    }, disable: function disable(t) {
      var i = this.options.disabled;if (i !== !0) {
        if (void 0 === t) i = !0;else {
          if (t = this._getIndex(t), -1 !== e.inArray(t, i)) return;i = e.isArray(i) ? e.merge([t], i).sort() : [t];
        }this._setupDisabled(i);
      }
    }, load: function load(t, i) {
      t = this._getIndex(t);var s = this,
          n = this.tabs.eq(t),
          a = n.find(".ui-tabs-anchor"),
          o = this._getPanelForTab(n),
          r = { tab: n, panel: o },
          h = function h(e, t) {
        "abort" === t && s.panels.stop(!1, !0), n.removeClass("ui-tabs-loading"), o.removeAttr("aria-busy"), e === s.xhr && delete s.xhr;
      };this._isLocal(a[0]) || (this.xhr = e.ajax(this._ajaxSettings(a, i, r)), this.xhr && "canceled" !== this.xhr.statusText && (n.addClass("ui-tabs-loading"), o.attr("aria-busy", "true"), this.xhr.done(function (e, t, n) {
        setTimeout(function () {
          o.html(e), s._trigger("load", i, r), h(n, t);
        }, 1);
      }).fail(function (e, t) {
        setTimeout(function () {
          h(e, t);
        }, 1);
      })));
    }, _ajaxSettings: function _ajaxSettings(t, i, s) {
      var n = this;return { url: t.attr("href"), beforeSend: function beforeSend(t, a) {
          return n._trigger("beforeLoad", i, e.extend({ jqXHR: t, ajaxSettings: a }, s));
        } };
    }, _getPanelForTab: function _getPanelForTab(t) {
      var i = e(t).attr("aria-controls");return this.element.find(this._sanitizeSelector("#" + i));
    } }), e.widget("ui.tooltip", { version: "1.11.4", options: { content: function content() {
        var t = e(this).attr("title") || "";return e("<a>").text(t).html();
      }, hide: !0, items: "[title]:not([disabled])", position: { my: "left top+15", at: "left bottom", collision: "flipfit flip" }, show: !0, tooltipClass: null, track: !1, close: null, open: null }, _addDescribedBy: function _addDescribedBy(t, i) {
      var s = (t.attr("aria-describedby") || "").split(/\s+/);s.push(i), t.data("ui-tooltip-id", i).attr("aria-describedby", e.trim(s.join(" ")));
    }, _removeDescribedBy: function _removeDescribedBy(t) {
      var i = t.data("ui-tooltip-id"),
          s = (t.attr("aria-describedby") || "").split(/\s+/),
          n = e.inArray(i, s);-1 !== n && s.splice(n, 1), t.removeData("ui-tooltip-id"), s = e.trim(s.join(" ")), s ? t.attr("aria-describedby", s) : t.removeAttr("aria-describedby");
    }, _create: function _create() {
      this._on({ mouseover: "open", focusin: "open" }), this.tooltips = {}, this.parents = {}, this.options.disabled && this._disable(), this.liveRegion = e("<div>").attr({ role: "log", "aria-live": "assertive", "aria-relevant": "additions" }).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body);
    }, _setOption: function _setOption(t, i) {
      var s = this;return "disabled" === t ? (this[i ? "_disable" : "_enable"](), this.options[t] = i, void 0) : (this._super(t, i), "content" === t && e.each(this.tooltips, function (e, t) {
        s._updateContent(t.element);
      }), void 0);
    }, _disable: function _disable() {
      var t = this;e.each(this.tooltips, function (i, s) {
        var n = e.Event("blur");n.target = n.currentTarget = s.element[0], t.close(n, !0);
      }), this.element.find(this.options.items).addBack().each(function () {
        var t = e(this);t.is("[title]") && t.data("ui-tooltip-title", t.attr("title")).removeAttr("title");
      });
    }, _enable: function _enable() {
      this.element.find(this.options.items).addBack().each(function () {
        var t = e(this);t.data("ui-tooltip-title") && t.attr("title", t.data("ui-tooltip-title"));
      });
    }, open: function open(t) {
      var i = this,
          s = e(t ? t.target : this.element).closest(this.options.items);s.length && !s.data("ui-tooltip-id") && (s.attr("title") && s.data("ui-tooltip-title", s.attr("title")), s.data("ui-tooltip-open", !0), t && "mouseover" === t.type && s.parents().each(function () {
        var t,
            s = e(this);s.data("ui-tooltip-open") && (t = e.Event("blur"), t.target = t.currentTarget = this, i.close(t, !0)), s.attr("title") && (s.uniqueId(), i.parents[this.id] = { element: this, title: s.attr("title") }, s.attr("title", ""));
      }), this._registerCloseHandlers(t, s), this._updateContent(s, t));
    }, _updateContent: function _updateContent(e, t) {
      var i,
          s = this.options.content,
          n = this,
          a = t ? t.type : null;return "string" == typeof s ? this._open(t, e, s) : (i = s.call(e[0], function (i) {
        n._delay(function () {
          e.data("ui-tooltip-open") && (t && (t.type = a), this._open(t, e, i));
        });
      }), i && this._open(t, e, i), void 0);
    }, _open: function _open(t, i, s) {
      function n(e) {
        l.of = e, o.is(":hidden") || o.position(l);
      }var a,
          o,
          r,
          h,
          l = e.extend({}, this.options.position);if (s) {
        if (a = this._find(i)) return a.tooltip.find(".ui-tooltip-content").html(s), void 0;i.is("[title]") && (t && "mouseover" === t.type ? i.attr("title", "") : i.removeAttr("title")), a = this._tooltip(i), o = a.tooltip, this._addDescribedBy(i, o.attr("id")), o.find(".ui-tooltip-content").html(s), this.liveRegion.children().hide(), s.clone ? (h = s.clone(), h.removeAttr("id").find("[id]").removeAttr("id")) : h = s, e("<div>").html(h).appendTo(this.liveRegion), this.options.track && t && /^mouse/.test(t.type) ? (this._on(this.document, { mousemove: n }), n(t)) : o.position(e.extend({ of: i }, this.options.position)), o.hide(), this._show(o, this.options.show), this.options.show && this.options.show.delay && (r = this.delayedShow = setInterval(function () {
          o.is(":visible") && (n(l.of), clearInterval(r));
        }, e.fx.interval)), this._trigger("open", t, { tooltip: o });
      }
    }, _registerCloseHandlers: function _registerCloseHandlers(t, i) {
      var s = { keyup: function keyup(t) {
          if (t.keyCode === e.ui.keyCode.ESCAPE) {
            var s = e.Event(t);s.currentTarget = i[0], this.close(s, !0);
          }
        } };i[0] !== this.element[0] && (s.remove = function () {
        this._removeTooltip(this._find(i).tooltip);
      }), t && "mouseover" !== t.type || (s.mouseleave = "close"), t && "focusin" !== t.type || (s.focusout = "close"), this._on(!0, i, s);
    }, close: function close(t) {
      var i,
          s = this,
          n = e(t ? t.currentTarget : this.element),
          a = this._find(n);return a ? (i = a.tooltip, a.closing || (clearInterval(this.delayedShow), n.data("ui-tooltip-title") && !n.attr("title") && n.attr("title", n.data("ui-tooltip-title")), this._removeDescribedBy(n), a.hiding = !0, i.stop(!0), this._hide(i, this.options.hide, function () {
        s._removeTooltip(e(this));
      }), n.removeData("ui-tooltip-open"), this._off(n, "mouseleave focusout keyup"), n[0] !== this.element[0] && this._off(n, "remove"), this._off(this.document, "mousemove"), t && "mouseleave" === t.type && e.each(this.parents, function (t, i) {
        e(i.element).attr("title", i.title), delete s.parents[t];
      }), a.closing = !0, this._trigger("close", t, { tooltip: i }), a.hiding || (a.closing = !1)), void 0) : (n.removeData("ui-tooltip-open"), void 0);
    }, _tooltip: function _tooltip(t) {
      var i = e("<div>").attr("role", "tooltip").addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || "")),
          s = i.uniqueId().attr("id");return e("<div>").addClass("ui-tooltip-content").appendTo(i), i.appendTo(this.document[0].body), this.tooltips[s] = { element: t, tooltip: i };
    }, _find: function _find(e) {
      var t = e.data("ui-tooltip-id");return t ? this.tooltips[t] : null;
    }, _removeTooltip: function _removeTooltip(e) {
      e.remove(), delete this.tooltips[e.attr("id")];
    }, _destroy: function _destroy() {
      var t = this;e.each(this.tooltips, function (i, s) {
        var n = e.Event("blur"),
            a = s.element;n.target = n.currentTarget = a[0], t.close(n, !0), e("#" + i).remove(), a.data("ui-tooltip-title") && (a.attr("title") || a.attr("title", a.data("ui-tooltip-title")), a.removeData("ui-tooltip-title"));
      }), this.liveRegion.remove();
    } });
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 DataTables 1.10.13
 ©2008-2016 SpryMedia Ltd - datatables.net/license
*/
(function (h) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (E) {
    return h(E, window, document);
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" === (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = function (E, H) {
    E || (E = window);H || (H = "undefined" !== typeof window ? require("jquery") : require("jquery")(E));return h(H, E, E.document);
  } : h(jQuery, window, document);
})(function (h, E, H, k) {
  function Y(a) {
    var b,
        c,
        d = {};h.each(a, function (e) {
      if ((b = e.match(/^([^A-Z]+?)([A-Z])/)) && -1 !== "a aa ai ao as b fn i m o s ".indexOf(b[1] + " ")) c = e.replace(b[0], b[2].toLowerCase()), d[c] = e, "o" === b[1] && Y(a[e]);
    });a._hungarianMap = d;
  }function J(a, b, c) {
    a._hungarianMap || Y(a);var d;h.each(b, function (e) {
      d = a._hungarianMap[e];if (d !== k && (c || b[d] === k)) "o" === d.charAt(0) ? (b[d] || (b[d] = {}), h.extend(!0, b[d], b[e]), J(a[d], b[d], c)) : b[d] = b[e];
    });
  }function Fa(a) {
    var b = m.defaults.oLanguage,
        c = a.sZeroRecords;!a.sEmptyTable && c && "No data available in table" === b.sEmptyTable && F(a, a, "sZeroRecords", "sEmptyTable");!a.sLoadingRecords && c && "Loading..." === b.sLoadingRecords && F(a, a, "sZeroRecords", "sLoadingRecords");
    a.sInfoThousands && (a.sThousands = a.sInfoThousands);(a = a.sDecimal) && fb(a);
  }function gb(a) {
    A(a, "ordering", "bSort");A(a, "orderMulti", "bSortMulti");A(a, "orderClasses", "bSortClasses");A(a, "orderCellsTop", "bSortCellsTop");A(a, "order", "aaSorting");A(a, "orderFixed", "aaSortingFixed");A(a, "paging", "bPaginate");A(a, "pagingType", "sPaginationType");A(a, "pageLength", "iDisplayLength");A(a, "searching", "bFilter");"boolean" === typeof a.sScrollX && (a.sScrollX = a.sScrollX ? "100%" : "");"boolean" === typeof a.scrollX && (a.scrollX = a.scrollX ? "100%" : "");if (a = a.aoSearchCols) for (var b = 0, c = a.length; b < c; b++) {
      a[b] && J(m.models.oSearch, a[b]);
    }
  }function hb(a) {
    A(a, "orderable", "bSortable");A(a, "orderData", "aDataSort");A(a, "orderSequence", "asSorting");A(a, "orderDataType", "sortDataType");var b = a.aDataSort;b && !h.isArray(b) && (a.aDataSort = [b]);
  }function ib(a) {
    if (!m.__browser) {
      var b = {};m.__browser = b;var c = h("<div/>").css({ position: "fixed", top: 0, left: -1 * h(E).scrollLeft(), height: 1, width: 1, overflow: "hidden" }).append(h("<div/>").css({ position: "absolute",
        top: 1, left: 1, width: 100, overflow: "scroll" }).append(h("<div/>").css({ width: "100%", height: 10 }))).appendTo("body"),
          d = c.children(),
          e = d.children();b.barWidth = d[0].offsetWidth - d[0].clientWidth;b.bScrollOversize = 100 === e[0].offsetWidth && 100 !== d[0].clientWidth;b.bScrollbarLeft = 1 !== Math.round(e.offset().left);b.bBounding = c[0].getBoundingClientRect().width ? !0 : !1;c.remove();
    }h.extend(a.oBrowser, m.__browser);a.oScroll.iBarWidth = m.__browser.barWidth;
  }function jb(a, b, c, d, e, f) {
    var g,
        j = !1;c !== k && (g = c, j = !0);for (; d !== e;) {
      a.hasOwnProperty(d) && (g = j ? b(g, a[d], d, a) : a[d], j = !0, d += f);
    }return g;
  }function Ga(a, b) {
    var c = m.defaults.column,
        d = a.aoColumns.length,
        c = h.extend({}, m.models.oColumn, c, { nTh: b ? b : H.createElement("th"), sTitle: c.sTitle ? c.sTitle : b ? b.innerHTML : "", aDataSort: c.aDataSort ? c.aDataSort : [d], mData: c.mData ? c.mData : d, idx: d });a.aoColumns.push(c);c = a.aoPreSearchCols;c[d] = h.extend({}, m.models.oSearch, c[d]);la(a, d, h(b).data());
  }function la(a, b, c) {
    var b = a.aoColumns[b],
        d = a.oClasses,
        e = h(b.nTh);if (!b.sWidthOrig) {
      b.sWidthOrig = e.attr("width") || null;var f = (e.attr("style") || "").match(/width:\s*(\d+[pxem%]+)/);f && (b.sWidthOrig = f[1]);
    }c !== k && null !== c && (hb(c), J(m.defaults.column, c), c.mDataProp !== k && !c.mData && (c.mData = c.mDataProp), c.sType && (b._sManualType = c.sType), c.className && !c.sClass && (c.sClass = c.className), h.extend(b, c), F(b, c, "sWidth", "sWidthOrig"), c.iDataSort !== k && (b.aDataSort = [c.iDataSort]), F(b, c, "aDataSort"));var g = b.mData,
        j = R(g),
        i = b.mRender ? R(b.mRender) : null,
        c = function c(a) {
      return "string" === typeof a && -1 !== a.indexOf("@");
    };
    b._bAttrSrc = h.isPlainObject(g) && (c(g.sort) || c(g.type) || c(g.filter));b._setter = null;b.fnGetData = function (a, b, c) {
      var d = j(a, b, k, c);return i && b ? i(d, b, a, c) : d;
    };b.fnSetData = function (a, b, c) {
      return S(g)(a, b, c);
    };"number" !== typeof g && (a._rowReadObject = !0);a.oFeatures.bSort || (b.bSortable = !1, e.addClass(d.sSortableNone));a = -1 !== h.inArray("asc", b.asSorting);c = -1 !== h.inArray("desc", b.asSorting);!b.bSortable || !a && !c ? (b.sSortingClass = d.sSortableNone, b.sSortingClassJUI = "") : a && !c ? (b.sSortingClass = d.sSortableAsc, b.sSortingClassJUI = d.sSortJUIAscAllowed) : !a && c ? (b.sSortingClass = d.sSortableDesc, b.sSortingClassJUI = d.sSortJUIDescAllowed) : (b.sSortingClass = d.sSortable, b.sSortingClassJUI = d.sSortJUI);
  }function Z(a) {
    if (!1 !== a.oFeatures.bAutoWidth) {
      var b = a.aoColumns;Ha(a);for (var c = 0, d = b.length; c < d; c++) {
        b[c].nTh.style.width = b[c].sWidth;
      }
    }b = a.oScroll;("" !== b.sY || "" !== b.sX) && ma(a);s(a, null, "column-sizing", [a]);
  }function $(a, b) {
    var c = na(a, "bVisible");return "number" === typeof c[b] ? c[b] : null;
  }function aa(a, b) {
    var c = na(a, "bVisible"),
        c = h.inArray(b, c);return -1 !== c ? c : null;
  }function ba(a) {
    var b = 0;h.each(a.aoColumns, function (a, d) {
      d.bVisible && "none" !== h(d.nTh).css("display") && b++;
    });return b;
  }function na(a, b) {
    var c = [];h.map(a.aoColumns, function (a, e) {
      a[b] && c.push(e);
    });return c;
  }function Ia(a) {
    var b = a.aoColumns,
        c = a.aoData,
        d = m.ext.type.detect,
        e,
        f,
        g,
        j,
        i,
        h,
        l,
        q,
        r;e = 0;for (f = b.length; e < f; e++) {
      if (l = b[e], r = [], !l.sType && l._sManualType) l.sType = l._sManualType;else if (!l.sType) {
        g = 0;for (j = d.length; g < j; g++) {
          i = 0;for (h = c.length; i < h; i++) {
            r[i] === k && (r[i] = B(a, i, e, "type"));
            q = d[g](r[i], a);if (!q && g !== d.length - 1) break;if ("html" === q) break;
          }if (q) {
            l.sType = q;break;
          }
        }l.sType || (l.sType = "string");
      }
    }
  }function kb(a, b, c, d) {
    var e,
        f,
        g,
        j,
        i,
        n,
        l = a.aoColumns;if (b) for (e = b.length - 1; 0 <= e; e--) {
      n = b[e];var q = n.targets !== k ? n.targets : n.aTargets;h.isArray(q) || (q = [q]);f = 0;for (g = q.length; f < g; f++) {
        if ("number" === typeof q[f] && 0 <= q[f]) {
          for (; l.length <= q[f];) {
            Ga(a);
          }d(q[f], n);
        } else if ("number" === typeof q[f] && 0 > q[f]) d(l.length + q[f], n);else if ("string" === typeof q[f]) {
          j = 0;for (i = l.length; j < i; j++) {
            ("_all" == q[f] || h(l[j].nTh).hasClass(q[f])) && d(j, n);
          }
        }
      }
    }if (c) {
      e = 0;for (a = c.length; e < a; e++) {
        d(e, c[e]);
      }
    }
  }function N(a, b, c, d) {
    var e = a.aoData.length,
        f = h.extend(!0, {}, m.models.oRow, { src: c ? "dom" : "data", idx: e });f._aData = b;a.aoData.push(f);for (var g = a.aoColumns, j = 0, i = g.length; j < i; j++) {
      g[j].sType = null;
    }a.aiDisplayMaster.push(e);b = a.rowIdFn(b);b !== k && (a.aIds[b] = f);(c || !a.oFeatures.bDeferRender) && Ja(a, e, c, d);return e;
  }function oa(a, b) {
    var c;b instanceof h || (b = h(b));return b.map(function (b, e) {
      c = Ka(a, e);return N(a, c.data, e, c.cells);
    });
  }function B(a, b, c, d) {
    var e = a.iDraw,
        f = a.aoColumns[c],
        g = a.aoData[b]._aData,
        j = f.sDefaultContent,
        i = f.fnGetData(g, d, { settings: a, row: b, col: c });if (i === k) return a.iDrawError != e && null === j && (K(a, 0, "Requested unknown parameter " + ("function" == typeof f.mData ? "{function}" : "'" + f.mData + "'") + " for row " + b + ", column " + c, 4), a.iDrawError = e), j;if ((i === g || null === i) && null !== j && d !== k) i = j;else if ("function" === typeof i) return i.call(g);return null === i && "display" == d ? "" : i;
  }function lb(a, b, c, d) {
    a.aoColumns[c].fnSetData(a.aoData[b]._aData, d, { settings: a, row: b, col: c });
  }
  function La(a) {
    return h.map(a.match(/(\\.|[^\.])+/g) || [""], function (a) {
      return a.replace(/\\\./g, ".");
    });
  }function R(a) {
    if (h.isPlainObject(a)) {
      var b = {};h.each(a, function (a, c) {
        c && (b[a] = R(c));
      });return function (a, c, f, g) {
        var j = b[c] || b._;return j !== k ? j(a, c, f, g) : a;
      };
    }if (null === a) return function (a) {
      return a;
    };if ("function" === typeof a) return function (b, c, f, g) {
      return a(b, c, f, g);
    };if ("string" === typeof a && (-1 !== a.indexOf(".") || -1 !== a.indexOf("[") || -1 !== a.indexOf("("))) {
      var c = function c(a, b, f) {
        var g, j;if ("" !== f) {
          j = La(f);
          for (var i = 0, n = j.length; i < n; i++) {
            f = j[i].match(ca);g = j[i].match(V);if (f) {
              j[i] = j[i].replace(ca, "");"" !== j[i] && (a = a[j[i]]);g = [];j.splice(0, i + 1);j = j.join(".");if (h.isArray(a)) {
                i = 0;for (n = a.length; i < n; i++) {
                  g.push(c(a[i], b, j));
                }
              }a = f[0].substring(1, f[0].length - 1);a = "" === a ? g : g.join(a);break;
            } else if (g) {
              j[i] = j[i].replace(V, "");a = a[j[i]]();continue;
            }if (null === a || a[j[i]] === k) return k;a = a[j[i]];
          }
        }return a;
      };return function (b, e) {
        return c(b, e, a);
      };
    }return function (b) {
      return b[a];
    };
  }function S(a) {
    if (h.isPlainObject(a)) return S(a._);
    if (null === a) return function () {};if ("function" === typeof a) return function (b, d, e) {
      a(b, "set", d, e);
    };if ("string" === typeof a && (-1 !== a.indexOf(".") || -1 !== a.indexOf("[") || -1 !== a.indexOf("("))) {
      var b = function b(a, d, e) {
        var e = La(e),
            f;f = e[e.length - 1];for (var g, j, i = 0, n = e.length - 1; i < n; i++) {
          g = e[i].match(ca);j = e[i].match(V);if (g) {
            e[i] = e[i].replace(ca, "");a[e[i]] = [];f = e.slice();f.splice(0, i + 1);g = f.join(".");if (h.isArray(d)) {
              j = 0;for (n = d.length; j < n; j++) {
                f = {}, b(f, d[j], g), a[e[i]].push(f);
              }
            } else a[e[i]] = d;return;
          }j && (e[i] = e[i].replace(V, ""), a = a[e[i]](d));if (null === a[e[i]] || a[e[i]] === k) a[e[i]] = {};a = a[e[i]];
        }if (f.match(V)) a[f.replace(V, "")](d);else a[f.replace(ca, "")] = d;
      };return function (c, d) {
        return b(c, d, a);
      };
    }return function (b, d) {
      b[a] = d;
    };
  }function Ma(a) {
    return D(a.aoData, "_aData");
  }function pa(a) {
    a.aoData.length = 0;a.aiDisplayMaster.length = 0;a.aiDisplay.length = 0;a.aIds = {};
  }function qa(a, b, c) {
    for (var d = -1, e = 0, f = a.length; e < f; e++) {
      a[e] == b ? d = e : a[e] > b && a[e]--;
    }-1 != d && c === k && a.splice(d, 1);
  }function da(a, b, c, d) {
    var e = a.aoData[b],
        f,
        g = function g(c, d) {
      for (; c.childNodes.length;) {
        c.removeChild(c.firstChild);
      }c.innerHTML = B(a, b, d, "display");
    };if ("dom" === c || (!c || "auto" === c) && "dom" === e.src) e._aData = Ka(a, e, d, d === k ? k : e._aData).data;else {
      var j = e.anCells;if (j) if (d !== k) g(j[d], d);else {
        c = 0;for (f = j.length; c < f; c++) {
          g(j[c], c);
        }
      }
    }e._aSortData = null;e._aFilterData = null;g = a.aoColumns;if (d !== k) g[d].sType = null;else {
      c = 0;for (f = g.length; c < f; c++) {
        g[c].sType = null;
      }Na(a, e);
    }
  }function Ka(a, b, c, d) {
    var e = [],
        f = b.firstChild,
        g,
        j,
        i = 0,
        n,
        l = a.aoColumns,
        q = a._rowReadObject,
        d = d !== k ? d : q ? {} : [],
        r = function r(a, b) {
      if ("string" === typeof a) {
        var c = a.indexOf("@");
        -1 !== c && (c = a.substring(c + 1), S(a)(d, b.getAttribute(c)));
      }
    },
        m = function m(a) {
      if (c === k || c === i) j = l[i], n = h.trim(a.innerHTML), j && j._bAttrSrc ? (S(j.mData._)(d, n), r(j.mData.sort, a), r(j.mData.type, a), r(j.mData.filter, a)) : q ? (j._setter || (j._setter = S(j.mData)), j._setter(d, n)) : d[i] = n;i++;
    };if (f) for (; f;) {
      g = f.nodeName.toUpperCase();if ("TD" == g || "TH" == g) m(f), e.push(f);f = f.nextSibling;
    } else {
      e = b.anCells;f = 0;for (g = e.length; f < g; f++) {
        m(e[f]);
      }
    }if (b = b.firstChild ? b : b.nTr) (b = b.getAttribute("id")) && S(a.rowId)(d, b);return { data: d, cells: e };
  }
  function Ja(a, b, c, d) {
    var e = a.aoData[b],
        f = e._aData,
        g = [],
        j,
        i,
        n,
        l,
        q;if (null === e.nTr) {
      j = c || H.createElement("tr");e.nTr = j;e.anCells = g;j._DT_RowIndex = b;Na(a, e);l = 0;for (q = a.aoColumns.length; l < q; l++) {
        n = a.aoColumns[l];i = c ? d[l] : H.createElement(n.sCellType);i._DT_CellIndex = { row: b, column: l };g.push(i);if ((!c || n.mRender || n.mData !== l) && (!h.isPlainObject(n.mData) || n.mData._ !== l + ".display")) i.innerHTML = B(a, b, l, "display");n.sClass && (i.className += " " + n.sClass);n.bVisible && !c ? j.appendChild(i) : !n.bVisible && c && i.parentNode.removeChild(i);
        n.fnCreatedCell && n.fnCreatedCell.call(a.oInstance, i, B(a, b, l), f, b, l);
      }s(a, "aoRowCreatedCallback", null, [j, f, b]);
    }e.nTr.setAttribute("role", "row");
  }function Na(a, b) {
    var c = b.nTr,
        d = b._aData;if (c) {
      var e = a.rowIdFn(d);e && (c.id = e);d.DT_RowClass && (e = d.DT_RowClass.split(" "), b.__rowc = b.__rowc ? sa(b.__rowc.concat(e)) : e, h(c).removeClass(b.__rowc.join(" ")).addClass(d.DT_RowClass));d.DT_RowAttr && h(c).attr(d.DT_RowAttr);d.DT_RowData && h(c).data(d.DT_RowData);
    }
  }function mb(a) {
    var b,
        c,
        d,
        e,
        f,
        g = a.nTHead,
        j = a.nTFoot,
        i = 0 === h("th, td", g).length,
        n = a.oClasses,
        l = a.aoColumns;i && (e = h("<tr/>").appendTo(g));b = 0;for (c = l.length; b < c; b++) {
      f = l[b], d = h(f.nTh).addClass(f.sClass), i && d.appendTo(e), a.oFeatures.bSort && (d.addClass(f.sSortingClass), !1 !== f.bSortable && (d.attr("tabindex", a.iTabIndex).attr("aria-controls", a.sTableId), Oa(a, f.nTh, b))), f.sTitle != d[0].innerHTML && d.html(f.sTitle), Pa(a, "header")(a, d, f, n);
    }i && ea(a.aoHeader, g);h(g).find(">tr").attr("role", "row");h(g).find(">tr>th, >tr>td").addClass(n.sHeaderTH);h(j).find(">tr>th, >tr>td").addClass(n.sFooterTH);
    if (null !== j) {
      a = a.aoFooter[0];b = 0;for (c = a.length; b < c; b++) {
        f = l[b], f.nTf = a[b].cell, f.sClass && h(f.nTf).addClass(f.sClass);
      }
    }
  }function fa(a, b, c) {
    var d,
        e,
        f,
        g = [],
        j = [],
        i = a.aoColumns.length,
        n;if (b) {
      c === k && (c = !1);d = 0;for (e = b.length; d < e; d++) {
        g[d] = b[d].slice();g[d].nTr = b[d].nTr;for (f = i - 1; 0 <= f; f--) {
          !a.aoColumns[f].bVisible && !c && g[d].splice(f, 1);
        }j.push([]);
      }d = 0;for (e = g.length; d < e; d++) {
        if (a = g[d].nTr) for (; f = a.firstChild;) {
          a.removeChild(f);
        }f = 0;for (b = g[d].length; f < b; f++) {
          if (n = i = 1, j[d][f] === k) {
            a.appendChild(g[d][f].cell);
            for (j[d][f] = 1; g[d + i] !== k && g[d][f].cell == g[d + i][f].cell;) {
              j[d + i][f] = 1, i++;
            }for (; g[d][f + n] !== k && g[d][f].cell == g[d][f + n].cell;) {
              for (c = 0; c < i; c++) {
                j[d + c][f + n] = 1;
              }n++;
            }h(g[d][f].cell).attr("rowspan", i).attr("colspan", n);
          }
        }
      }
    }
  }function O(a) {
    var b = s(a, "aoPreDrawCallback", "preDraw", [a]);if (-1 !== h.inArray(!1, b)) C(a, !1);else {
      var b = [],
          c = 0,
          d = a.asStripeClasses,
          e = d.length,
          f = a.oLanguage,
          g = a.iInitDisplayStart,
          j = "ssp" == y(a),
          i = a.aiDisplay;a.bDrawing = !0;g !== k && -1 !== g && (a._iDisplayStart = j ? g : g >= a.fnRecordsDisplay() ? 0 : g, a.iInitDisplayStart = -1);var g = a._iDisplayStart,
          n = a.fnDisplayEnd();if (a.bDeferLoading) a.bDeferLoading = !1, a.iDraw++, C(a, !1);else if (j) {
        if (!a.bDestroying && !nb(a)) return;
      } else a.iDraw++;if (0 !== i.length) {
        f = j ? a.aoData.length : n;for (j = j ? 0 : g; j < f; j++) {
          var l = i[j],
              q = a.aoData[l];null === q.nTr && Ja(a, l);l = q.nTr;if (0 !== e) {
            var r = d[c % e];q._sRowStripe != r && (h(l).removeClass(q._sRowStripe).addClass(r), q._sRowStripe = r);
          }s(a, "aoRowCallback", null, [l, q._aData, c, j]);b.push(l);c++;
        }
      } else c = f.sZeroRecords, 1 == a.iDraw && "ajax" == y(a) ? c = f.sLoadingRecords : f.sEmptyTable && 0 === a.fnRecordsTotal() && (c = f.sEmptyTable), b[0] = h("<tr/>", { "class": e ? d[0] : "" }).append(h("<td />", { valign: "top", colSpan: ba(a), "class": a.oClasses.sRowEmpty }).html(c))[0];s(a, "aoHeaderCallback", "header", [h(a.nTHead).children("tr")[0], Ma(a), g, n, i]);s(a, "aoFooterCallback", "footer", [h(a.nTFoot).children("tr")[0], Ma(a), g, n, i]);d = h(a.nTBody);d.children().detach();d.append(h(b));s(a, "aoDrawCallback", "draw", [a]);a.bSorted = !1;a.bFiltered = !1;a.bDrawing = !1;
    }
  }function T(a, b) {
    var c = a.oFeatures,
        d = c.bFilter;
    c.bSort && ob(a);d ? ga(a, a.oPreviousSearch) : a.aiDisplay = a.aiDisplayMaster.slice();!0 !== b && (a._iDisplayStart = 0);a._drawHold = b;O(a);a._drawHold = !1;
  }function pb(a) {
    var b = a.oClasses,
        c = h(a.nTable),
        c = h("<div/>").insertBefore(c),
        d = a.oFeatures,
        e = h("<div/>", { id: a.sTableId + "_wrapper", "class": b.sWrapper + (a.nTFoot ? "" : " " + b.sNoFooter) });a.nHolding = c[0];a.nTableWrapper = e[0];a.nTableReinsertBefore = a.nTable.nextSibling;for (var f = a.sDom.split(""), g, j, i, n, l, q, k = 0; k < f.length; k++) {
      g = null;j = f[k];if ("<" == j) {
        i = h("<div/>")[0];
        n = f[k + 1];if ("'" == n || '"' == n) {
          l = "";for (q = 2; f[k + q] != n;) {
            l += f[k + q], q++;
          }"H" == l ? l = b.sJUIHeader : "F" == l && (l = b.sJUIFooter);-1 != l.indexOf(".") ? (n = l.split("."), i.id = n[0].substr(1, n[0].length - 1), i.className = n[1]) : "#" == l.charAt(0) ? i.id = l.substr(1, l.length - 1) : i.className = l;k += q;
        }e.append(i);e = h(i);
      } else if (">" == j) e = e.parent();else if ("l" == j && d.bPaginate && d.bLengthChange) g = qb(a);else if ("f" == j && d.bFilter) g = rb(a);else if ("r" == j && d.bProcessing) g = sb(a);else if ("t" == j) g = tb(a);else if ("i" == j && d.bInfo) g = ub(a);else if ("p" == j && d.bPaginate) g = vb(a);else if (0 !== m.ext.feature.length) {
        i = m.ext.feature;q = 0;for (n = i.length; q < n; q++) {
          if (j == i[q].cFeature) {
            g = i[q].fnInit(a);break;
          }
        }
      }g && (i = a.aanFeatures, i[j] || (i[j] = []), i[j].push(g), e.append(g));
    }c.replaceWith(e);a.nHolding = null;
  }function ea(a, b) {
    var c = h(b).children("tr"),
        d,
        e,
        f,
        g,
        j,
        i,
        n,
        l,
        q,
        k;a.splice(0, a.length);f = 0;for (i = c.length; f < i; f++) {
      a.push([]);
    }f = 0;for (i = c.length; f < i; f++) {
      d = c[f];for (e = d.firstChild; e;) {
        if ("TD" == e.nodeName.toUpperCase() || "TH" == e.nodeName.toUpperCase()) {
          l = 1 * e.getAttribute("colspan");
          q = 1 * e.getAttribute("rowspan");l = !l || 0 === l || 1 === l ? 1 : l;q = !q || 0 === q || 1 === q ? 1 : q;g = 0;for (j = a[f]; j[g];) {
            g++;
          }n = g;k = 1 === l ? !0 : !1;for (j = 0; j < l; j++) {
            for (g = 0; g < q; g++) {
              a[f + g][n + j] = { cell: e, unique: k }, a[f + g].nTr = d;
            }
          }
        }e = e.nextSibling;
      }
    }
  }function ta(a, b, c) {
    var d = [];c || (c = a.aoHeader, b && (c = [], ea(c, b)));for (var b = 0, e = c.length; b < e; b++) {
      for (var f = 0, g = c[b].length; f < g; f++) {
        if (c[b][f].unique && (!d[f] || !a.bSortCellsTop)) d[f] = c[b][f].cell;
      }
    }return d;
  }function ua(a, b, c) {
    s(a, "aoServerParams", "serverParams", [b]);if (b && h.isArray(b)) {
      var d = {},
          e = /(.*?)\[\]$/;h.each(b, function (a, b) {
        var c = b.name.match(e);c ? (c = c[0], d[c] || (d[c] = []), d[c].push(b.value)) : d[b.name] = b.value;
      });b = d;
    }var f,
        g = a.ajax,
        j = a.oInstance,
        i = function i(b) {
      s(a, null, "xhr", [a, b, a.jqXHR]);c(b);
    };if (h.isPlainObject(g) && g.data) {
      f = g.data;var n = h.isFunction(f) ? f(b, a) : f,
          b = h.isFunction(f) && n ? n : h.extend(!0, b, n);delete g.data;
    }n = { data: b, success: function success(b) {
        var c = b.error || b.sError;c && K(a, 0, c);a.json = b;i(b);
      }, dataType: "json", cache: !1, type: a.sServerMethod, error: function error(b, c) {
        var d = s(a, null, "xhr", [a, null, a.jqXHR]);-1 === h.inArray(!0, d) && ("parsererror" == c ? K(a, 0, "Invalid JSON response", 1) : 4 === b.readyState && K(a, 0, "Ajax error", 7));C(a, !1);
      } };a.oAjaxData = b;s(a, null, "preXhr", [a, b]);a.fnServerData ? a.fnServerData.call(j, a.sAjaxSource, h.map(b, function (a, b) {
      return { name: b, value: a };
    }), i, a) : a.sAjaxSource || "string" === typeof g ? a.jqXHR = h.ajax(h.extend(n, { url: g || a.sAjaxSource })) : h.isFunction(g) ? a.jqXHR = g.call(j, b, i, a) : (a.jqXHR = h.ajax(h.extend(n, g)), g.data = f);
  }function nb(a) {
    return a.bAjaxDataGet ? (a.iDraw++, C(a, !0), ua(a, wb(a), function (b) {
      xb(a, b);
    }), !1) : !0;
  }function wb(a) {
    var b = a.aoColumns,
        c = b.length,
        d = a.oFeatures,
        e = a.oPreviousSearch,
        f = a.aoPreSearchCols,
        g,
        j = [],
        i,
        n,
        l,
        k = W(a);g = a._iDisplayStart;i = !1 !== d.bPaginate ? a._iDisplayLength : -1;var r = function r(a, b) {
      j.push({ name: a, value: b });
    };r("sEcho", a.iDraw);r("iColumns", c);r("sColumns", D(b, "sName").join(","));r("iDisplayStart", g);r("iDisplayLength", i);var ra = { draw: a.iDraw, columns: [], order: [], start: g, length: i, search: { value: e.sSearch, regex: e.bRegex } };for (g = 0; g < c; g++) {
      n = b[g], l = f[g], i = "function" == typeof n.mData ? "function" : n.mData, ra.columns.push({ data: i, name: n.sName, searchable: n.bSearchable, orderable: n.bSortable, search: { value: l.sSearch, regex: l.bRegex } }), r("mDataProp_" + g, i), d.bFilter && (r("sSearch_" + g, l.sSearch), r("bRegex_" + g, l.bRegex), r("bSearchable_" + g, n.bSearchable)), d.bSort && r("bSortable_" + g, n.bSortable);
    }d.bFilter && (r("sSearch", e.sSearch), r("bRegex", e.bRegex));d.bSort && (h.each(k, function (a, b) {
      ra.order.push({ column: b.col, dir: b.dir });r("iSortCol_" + a, b.col);r("sSortDir_" + a, b.dir);
    }), r("iSortingCols", k.length));b = m.ext.legacy.ajax;return null === b ? a.sAjaxSource ? j : ra : b ? j : ra;
  }function xb(a, b) {
    var c = va(a, b),
        d = b.sEcho !== k ? b.sEcho : b.draw,
        e = b.iTotalRecords !== k ? b.iTotalRecords : b.recordsTotal,
        f = b.iTotalDisplayRecords !== k ? b.iTotalDisplayRecords : b.recordsFiltered;if (d) {
      if (1 * d < a.iDraw) return;a.iDraw = 1 * d;
    }pa(a);a._iRecordsTotal = parseInt(e, 10);a._iRecordsDisplay = parseInt(f, 10);d = 0;for (e = c.length; d < e; d++) {
      N(a, c[d]);
    }a.aiDisplay = a.aiDisplayMaster.slice();a.bAjaxDataGet = !1;O(a);a._bInitComplete || wa(a, b);a.bAjaxDataGet = !0;C(a, !1);
  }function va(a, b) {
    var c = h.isPlainObject(a.ajax) && a.ajax.dataSrc !== k ? a.ajax.dataSrc : a.sAjaxDataProp;return "data" === c ? b.aaData || b[c] : "" !== c ? R(c)(b) : b;
  }function rb(a) {
    var b = a.oClasses,
        c = a.sTableId,
        d = a.oLanguage,
        e = a.oPreviousSearch,
        f = a.aanFeatures,
        g = '<input type="search" class="' + b.sFilterInput + '"/>',
        j = d.sSearch,
        j = j.match(/_INPUT_/) ? j.replace("_INPUT_", g) : j + g,
        b = h("<div/>", { id: !f.f ? c + "_filter" : null, "class": b.sFilter }).append(h("<label/>").append(j)),
        f = function f() {
      var b = !this.value ? "" : this.value;b != e.sSearch && (ga(a, { sSearch: b, bRegex: e.bRegex, bSmart: e.bSmart, bCaseInsensitive: e.bCaseInsensitive }), a._iDisplayStart = 0, O(a));
    },
        g = null !== a.searchDelay ? a.searchDelay : "ssp" === y(a) ? 400 : 0,
        i = h("input", b).val(e.sSearch).attr("placeholder", d.sSearchPlaceholder).on("keyup.DT search.DT input.DT paste.DT cut.DT", g ? Qa(f, g) : f).on("keypress.DT", function (a) {
      if (13 == a.keyCode) return !1;
    }).attr("aria-controls", c);h(a.nTable).on("search.dt.DT", function (b, c) {
      if (a === c) try {
        i[0] !== H.activeElement && i.val(e.sSearch);
      } catch (d) {}
    });
    return b[0];
  }function ga(a, b, c) {
    var d = a.oPreviousSearch,
        e = a.aoPreSearchCols,
        f = function f(a) {
      d.sSearch = a.sSearch;d.bRegex = a.bRegex;d.bSmart = a.bSmart;d.bCaseInsensitive = a.bCaseInsensitive;
    };Ia(a);if ("ssp" != y(a)) {
      yb(a, b.sSearch, c, b.bEscapeRegex !== k ? !b.bEscapeRegex : b.bRegex, b.bSmart, b.bCaseInsensitive);f(b);for (b = 0; b < e.length; b++) {
        zb(a, e[b].sSearch, b, e[b].bEscapeRegex !== k ? !e[b].bEscapeRegex : e[b].bRegex, e[b].bSmart, e[b].bCaseInsensitive);
      }Ab(a);
    } else f(b);a.bFiltered = !0;s(a, null, "search", [a]);
  }function Ab(a) {
    for (var b = m.ext.search, c = a.aiDisplay, d, e, f = 0, g = b.length; f < g; f++) {
      for (var j = [], i = 0, n = c.length; i < n; i++) {
        e = c[i], d = a.aoData[e], b[f](a, d._aFilterData, e, d._aData, i) && j.push(e);
      }c.length = 0;h.merge(c, j);
    }
  }function zb(a, b, c, d, e, f) {
    if ("" !== b) {
      for (var g = [], j = a.aiDisplay, d = Ra(b, d, e, f), e = 0; e < j.length; e++) {
        b = a.aoData[j[e]]._aFilterData[c], d.test(b) && g.push(j[e]);
      }a.aiDisplay = g;
    }
  }function yb(a, b, c, d, e, f) {
    var d = Ra(b, d, e, f),
        f = a.oPreviousSearch.sSearch,
        g = a.aiDisplayMaster,
        j,
        e = [];0 !== m.ext.search.length && (c = !0);j = Bb(a);if (0 >= b.length) a.aiDisplay = g.slice();else {
      if (j || c || f.length > b.length || 0 !== b.indexOf(f) || a.bSorted) a.aiDisplay = g.slice();b = a.aiDisplay;for (c = 0; c < b.length; c++) {
        d.test(a.aoData[b[c]]._sFilterRow) && e.push(b[c]);
      }a.aiDisplay = e;
    }
  }function Ra(a, b, c, d) {
    a = b ? a : Sa(a);c && (a = "^(?=.*?" + h.map(a.match(/"[^"]+"|[^ ]+/g) || [""], function (a) {
      if ('"' === a.charAt(0)) var b = a.match(/^"(.*)"$/),
          a = b ? b[1] : a;return a.replace('"', "");
    }).join(")(?=.*?") + ").*$");return RegExp(a, d ? "i" : "");
  }function Bb(a) {
    var b = a.aoColumns,
        c,
        d,
        e,
        f,
        g,
        j,
        i,
        h,
        l = m.ext.type.search;c = !1;
    d = 0;for (f = a.aoData.length; d < f; d++) {
      if (h = a.aoData[d], !h._aFilterData) {
        j = [];e = 0;for (g = b.length; e < g; e++) {
          c = b[e], c.bSearchable ? (i = B(a, d, e, "filter"), l[c.sType] && (i = l[c.sType](i)), null === i && (i = ""), "string" !== typeof i && i.toString && (i = i.toString())) : i = "", i.indexOf && -1 !== i.indexOf("&") && (xa.innerHTML = i, i = $b ? xa.textContent : xa.innerText), i.replace && (i = i.replace(/[\r\n]/g, "")), j.push(i);
        }h._aFilterData = j;h._sFilterRow = j.join("  ");c = !0;
      }
    }return c;
  }function Cb(a) {
    return { search: a.sSearch, smart: a.bSmart, regex: a.bRegex,
      caseInsensitive: a.bCaseInsensitive };
  }function Db(a) {
    return { sSearch: a.search, bSmart: a.smart, bRegex: a.regex, bCaseInsensitive: a.caseInsensitive };
  }function ub(a) {
    var b = a.sTableId,
        c = a.aanFeatures.i,
        d = h("<div/>", { "class": a.oClasses.sInfo, id: !c ? b + "_info" : null });c || (a.aoDrawCallback.push({ fn: Eb, sName: "information" }), d.attr("role", "status").attr("aria-live", "polite"), h(a.nTable).attr("aria-describedby", b + "_info"));return d[0];
  }function Eb(a) {
    var b = a.aanFeatures.i;if (0 !== b.length) {
      var c = a.oLanguage,
          d = a._iDisplayStart + 1,
          e = a.fnDisplayEnd(),
          f = a.fnRecordsTotal(),
          g = a.fnRecordsDisplay(),
          j = g ? c.sInfo : c.sInfoEmpty;g !== f && (j += " " + c.sInfoFiltered);j += c.sInfoPostFix;j = Fb(a, j);c = c.fnInfoCallback;null !== c && (j = c.call(a.oInstance, a, d, e, f, g, j));h(b).html(j);
    }
  }function Fb(a, b) {
    var c = a.fnFormatNumber,
        d = a._iDisplayStart + 1,
        e = a._iDisplayLength,
        f = a.fnRecordsDisplay(),
        g = -1 === e;return b.replace(/_START_/g, c.call(a, d)).replace(/_END_/g, c.call(a, a.fnDisplayEnd())).replace(/_MAX_/g, c.call(a, a.fnRecordsTotal())).replace(/_TOTAL_/g, c.call(a, f)).replace(/_PAGE_/g, c.call(a, g ? 1 : Math.ceil(d / e))).replace(/_PAGES_/g, c.call(a, g ? 1 : Math.ceil(f / e)));
  }function ha(a) {
    var b,
        c,
        d = a.iInitDisplayStart,
        e = a.aoColumns,
        f;c = a.oFeatures;var g = a.bDeferLoading;if (a.bInitialised) {
      pb(a);mb(a);fa(a, a.aoHeader);fa(a, a.aoFooter);C(a, !0);c.bAutoWidth && Ha(a);b = 0;for (c = e.length; b < c; b++) {
        f = e[b], f.sWidth && (f.nTh.style.width = v(f.sWidth));
      }s(a, null, "preInit", [a]);T(a);e = y(a);if ("ssp" != e || g) "ajax" == e ? ua(a, [], function (c) {
        var f = va(a, c);for (b = 0; b < f.length; b++) {
          N(a, f[b]);
        }a.iInitDisplayStart = d;T(a);C(a, !1);wa(a, c);
      }, a) : (C(a, !1), wa(a));
    } else setTimeout(function () {
      ha(a);
    }, 200);
  }function wa(a, b) {
    a._bInitComplete = !0;(b || a.oInit.aaData) && Z(a);s(a, null, "plugin-init", [a, b]);s(a, "aoInitComplete", "init", [a, b]);
  }function Ta(a, b) {
    var c = parseInt(b, 10);a._iDisplayLength = c;Ua(a);s(a, null, "length", [a, c]);
  }function qb(a) {
    for (var b = a.oClasses, c = a.sTableId, d = a.aLengthMenu, e = h.isArray(d[0]), f = e ? d[0] : d, d = e ? d[1] : d, e = h("<select/>", { name: c + "_length", "aria-controls": c, "class": b.sLengthSelect }), g = 0, j = f.length; g < j; g++) {
      e[0][g] = new Option(d[g], f[g]);
    }var i = h("<div><label/></div>").addClass(b.sLength);a.aanFeatures.l || (i[0].id = c + "_length");i.children().append(a.oLanguage.sLengthMenu.replace("_MENU_", e[0].outerHTML));h("select", i).val(a._iDisplayLength).on("change.DT", function () {
      Ta(a, h(this).val());O(a);
    });h(a.nTable).on("length.dt.DT", function (b, c, d) {
      a === c && h("select", i).val(d);
    });return i[0];
  }function vb(a) {
    var b = a.sPaginationType,
        c = m.ext.pager[b],
        d = "function" === typeof c,
        e = function e(a) {
      O(a);
    },
        b = h("<div/>").addClass(a.oClasses.sPaging + b)[0],
        f = a.aanFeatures;d || c.fnInit(a, b, e);f.p || (b.id = a.sTableId + "_paginate", a.aoDrawCallback.push({ fn: function fn(a) {
        if (d) {
          var b = a._iDisplayStart,
              i = a._iDisplayLength,
              h = a.fnRecordsDisplay(),
              l = -1 === i,
              b = l ? 0 : Math.ceil(b / i),
              i = l ? 1 : Math.ceil(h / i),
              h = c(b, i),
              k,
              l = 0;for (k = f.p.length; l < k; l++) {
            Pa(a, "pageButton")(a, f.p[l], l, h, b, i);
          }
        } else c.fnUpdate(a, e);
      }, sName: "pagination" }));return b;
  }function Va(a, b, c) {
    var d = a._iDisplayStart,
        e = a._iDisplayLength,
        f = a.fnRecordsDisplay();0 === f || -1 === e ? d = 0 : "number" === typeof b ? (d = b * e, d > f && (d = 0)) : "first" == b ? d = 0 : "previous" == b ? (d = 0 <= e ? d - e : 0, 0 > d && (d = 0)) : "next" == b ? d + e < f && (d += e) : "last" == b ? d = Math.floor((f - 1) / e) * e : K(a, 0, "Unknown paging action: " + b, 5);b = a._iDisplayStart !== d;a._iDisplayStart = d;b && (s(a, null, "page", [a]), c && O(a));return b;
  }function sb(a) {
    return h("<div/>", { id: !a.aanFeatures.r ? a.sTableId + "_processing" : null, "class": a.oClasses.sProcessing }).html(a.oLanguage.sProcessing).insertBefore(a.nTable)[0];
  }function C(a, b) {
    a.oFeatures.bProcessing && h(a.aanFeatures.r).css("display", b ? "block" : "none");
    s(a, null, "processing", [a, b]);
  }function tb(a) {
    var b = h(a.nTable);b.attr("role", "grid");var c = a.oScroll;if ("" === c.sX && "" === c.sY) return a.nTable;var d = c.sX,
        e = c.sY,
        f = a.oClasses,
        g = b.children("caption"),
        j = g.length ? g[0]._captionSide : null,
        i = h(b[0].cloneNode(!1)),
        n = h(b[0].cloneNode(!1)),
        l = b.children("tfoot");l.length || (l = null);i = h("<div/>", { "class": f.sScrollWrapper }).append(h("<div/>", { "class": f.sScrollHead }).css({ overflow: "hidden", position: "relative", border: 0, width: d ? !d ? null : v(d) : "100%" }).append(h("<div/>", { "class": f.sScrollHeadInner }).css({ "box-sizing": "content-box", width: c.sXInner || "100%" }).append(i.removeAttr("id").css("margin-left", 0).append("top" === j ? g : null).append(b.children("thead"))))).append(h("<div/>", { "class": f.sScrollBody }).css({ position: "relative", overflow: "auto", width: !d ? null : v(d) }).append(b));l && i.append(h("<div/>", { "class": f.sScrollFoot }).css({ overflow: "hidden", border: 0, width: d ? !d ? null : v(d) : "100%" }).append(h("<div/>", { "class": f.sScrollFootInner }).append(n.removeAttr("id").css("margin-left", 0).append("bottom" === j ? g : null).append(b.children("tfoot")))));var b = i.children(),
        k = b[0],
        f = b[1],
        r = l ? b[2] : null;if (d) h(f).on("scroll.DT", function () {
      var a = this.scrollLeft;k.scrollLeft = a;l && (r.scrollLeft = a);
    });h(f).css(e && c.bCollapse ? "max-height" : "height", e);a.nScrollHead = k;a.nScrollBody = f;a.nScrollFoot = r;a.aoDrawCallback.push({ fn: ma, sName: "scrolling" });return i[0];
  }function ma(a) {
    var b = a.oScroll,
        c = b.sX,
        d = b.sXInner,
        e = b.sY,
        b = b.iBarWidth,
        f = h(a.nScrollHead),
        g = f[0].style,
        j = f.children("div"),
        i = j[0].style,
        n = j.children("table"),
        j = a.nScrollBody,
        l = h(j),
        q = j.style,
        r = h(a.nScrollFoot).children("div"),
        m = r.children("table"),
        p = h(a.nTHead),
        o = h(a.nTable),
        u = o[0],
        s = u.style,
        t = a.nTFoot ? h(a.nTFoot) : null,
        x = a.oBrowser,
        U = x.bScrollOversize,
        ac = D(a.aoColumns, "nTh"),
        P,
        L,
        Q,
        w,
        Wa = [],
        y = [],
        z = [],
        A = [],
        B,
        C = function C(a) {
      a = a.style;a.paddingTop = "0";a.paddingBottom = "0";a.borderTopWidth = "0";a.borderBottomWidth = "0";a.height = 0;
    };L = j.scrollHeight > j.clientHeight;if (a.scrollBarVis !== L && a.scrollBarVis !== k) a.scrollBarVis = L, Z(a);else {
      a.scrollBarVis = L;o.children("thead, tfoot").remove();
      t && (Q = t.clone().prependTo(o), P = t.find("tr"), Q = Q.find("tr"));w = p.clone().prependTo(o);p = p.find("tr");L = w.find("tr");w.find("th, td").removeAttr("tabindex");c || (q.width = "100%", f[0].style.width = "100%");h.each(ta(a, w), function (b, c) {
        B = $(a, b);c.style.width = a.aoColumns[B].sWidth;
      });t && I(function (a) {
        a.style.width = "";
      }, Q);f = o.outerWidth();if ("" === c) {
        s.width = "100%";if (U && (o.find("tbody").height() > j.offsetHeight || "scroll" == l.css("overflow-y"))) s.width = v(o.outerWidth() - b);f = o.outerWidth();
      } else "" !== d && (s.width = v(d), f = o.outerWidth());I(C, L);I(function (a) {
        z.push(a.innerHTML);Wa.push(v(h(a).css("width")));
      }, L);I(function (a, b) {
        if (h.inArray(a, ac) !== -1) a.style.width = Wa[b];
      }, p);h(L).height(0);t && (I(C, Q), I(function (a) {
        A.push(a.innerHTML);y.push(v(h(a).css("width")));
      }, Q), I(function (a, b) {
        a.style.width = y[b];
      }, P), h(Q).height(0));I(function (a, b) {
        a.innerHTML = '<div class="dataTables_sizing" style="height:0;overflow:hidden;">' + z[b] + "</div>";a.style.width = Wa[b];
      }, L);t && I(function (a, b) {
        a.innerHTML = '<div class="dataTables_sizing" style="height:0;overflow:hidden;">' + A[b] + "</div>";a.style.width = y[b];
      }, Q);if (o.outerWidth() < f) {
        P = j.scrollHeight > j.offsetHeight || "scroll" == l.css("overflow-y") ? f + b : f;if (U && (j.scrollHeight > j.offsetHeight || "scroll" == l.css("overflow-y"))) s.width = v(P - b);("" === c || "" !== d) && K(a, 1, "Possible column misalignment", 6);
      } else P = "100%";q.width = v(P);g.width = v(P);t && (a.nScrollFoot.style.width = v(P));!e && U && (q.height = v(u.offsetHeight + b));c = o.outerWidth();n[0].style.width = v(c);i.width = v(c);d = o.height() > j.clientHeight || "scroll" == l.css("overflow-y");e = "padding" + (x.bScrollbarLeft ? "Left" : "Right");i[e] = d ? b + "px" : "0px";t && (m[0].style.width = v(c), r[0].style.width = v(c), r[0].style[e] = d ? b + "px" : "0px");o.children("colgroup").insertBefore(o.children("thead"));l.scroll();if ((a.bSorted || a.bFiltered) && !a._drawHold) j.scrollTop = 0;
    }
  }function I(a, b, c) {
    for (var d = 0, e = 0, f = b.length, g, j; e < f;) {
      g = b[e].firstChild;for (j = c ? c[e].firstChild : null; g;) {
        1 === g.nodeType && (c ? a(g, j, d) : a(g, d), d++), g = g.nextSibling, j = c ? j.nextSibling : null;
      }e++;
    }
  }function Ha(a) {
    var b = a.nTable,
        c = a.aoColumns,
        d = a.oScroll,
        e = d.sY,
        f = d.sX,
        g = d.sXInner,
        j = c.length,
        i = na(a, "bVisible"),
        n = h("th", a.nTHead),
        l = b.getAttribute("width"),
        k = b.parentNode,
        r = !1,
        m,
        p,
        o = a.oBrowser,
        d = o.bScrollOversize;(m = b.style.width) && -1 !== m.indexOf("%") && (l = m);for (m = 0; m < i.length; m++) {
      p = c[i[m]], null !== p.sWidth && (p.sWidth = Gb(p.sWidthOrig, k), r = !0);
    }if (d || !r && !f && !e && j == ba(a) && j == n.length) for (m = 0; m < j; m++) {
      i = $(a, m), null !== i && (c[i].sWidth = v(n.eq(m).width()));
    } else {
      j = h(b).clone().css("visibility", "hidden").removeAttr("id");j.find("tbody tr").remove();var u = h("<tr/>").appendTo(j.find("tbody"));
      j.find("thead, tfoot").remove();j.append(h(a.nTHead).clone()).append(h(a.nTFoot).clone());j.find("tfoot th, tfoot td").css("width", "");n = ta(a, j.find("thead")[0]);for (m = 0; m < i.length; m++) {
        p = c[i[m]], n[m].style.width = null !== p.sWidthOrig && "" !== p.sWidthOrig ? v(p.sWidthOrig) : "", p.sWidthOrig && f && h(n[m]).append(h("<div/>").css({ width: p.sWidthOrig, margin: 0, padding: 0, border: 0, height: 1 }));
      }if (a.aoData.length) for (m = 0; m < i.length; m++) {
        r = i[m], p = c[r], h(Hb(a, r)).clone(!1).append(p.sContentPadding).appendTo(u);
      }h("[name]", j).removeAttr("name");p = h("<div/>").css(f || e ? { position: "absolute", top: 0, left: 0, height: 1, right: 0, overflow: "hidden" } : {}).append(j).appendTo(k);f && g ? j.width(g) : f ? (j.css("width", "auto"), j.removeAttr("width"), j.width() < k.clientWidth && l && j.width(k.clientWidth)) : e ? j.width(k.clientWidth) : l && j.width(l);for (m = e = 0; m < i.length; m++) {
        k = h(n[m]), g = k.outerWidth() - k.width(), k = o.bBounding ? Math.ceil(n[m].getBoundingClientRect().width) : k.outerWidth(), e += k, c[i[m]].sWidth = v(k - g);
      }b.style.width = v(e);p.remove();
    }l && (b.style.width = v(l));if ((l || f) && !a._reszEvt) b = function b() {
      h(E).on("resize.DT-" + a.sInstance, Qa(function () {
        Z(a);
      }));
    }, d ? setTimeout(b, 1E3) : b(), a._reszEvt = !0;
  }function Gb(a, b) {
    if (!a) return 0;var c = h("<div/>").css("width", v(a)).appendTo(b || H.body),
        d = c[0].offsetWidth;c.remove();return d;
  }function Hb(a, b) {
    var c = Ib(a, b);if (0 > c) return null;var d = a.aoData[c];return !d.nTr ? h("<td/>").html(B(a, c, b, "display"))[0] : d.anCells[b];
  }function Ib(a, b) {
    for (var c, d = -1, e = -1, f = 0, g = a.aoData.length; f < g; f++) {
      c = B(a, f, b, "display") + "", c = c.replace(bc, ""), c = c.replace(/&nbsp;/g, " "), c.length > d && (d = c.length, e = f);
    }return e;
  }function v(a) {
    return null === a ? "0px" : "number" == typeof a ? 0 > a ? "0px" : a + "px" : a.match(/\d$/) ? a + "px" : a;
  }function W(a) {
    var b,
        c,
        d = [],
        e = a.aoColumns,
        f,
        g,
        j,
        i;b = a.aaSortingFixed;c = h.isPlainObject(b);var n = [];f = function f(a) {
      a.length && !h.isArray(a[0]) ? n.push(a) : h.merge(n, a);
    };h.isArray(b) && f(b);c && b.pre && f(b.pre);f(a.aaSorting);c && b.post && f(b.post);for (a = 0; a < n.length; a++) {
      i = n[a][0];f = e[i].aDataSort;b = 0;for (c = f.length; b < c; b++) {
        g = f[b], j = e[g].sType || "string", n[a]._idx === k && (n[a]._idx = h.inArray(n[a][1], e[g].asSorting)), d.push({ src: i, col: g, dir: n[a][1], index: n[a]._idx, type: j, formatter: m.ext.type.order[j + "-pre"] });
      }
    }return d;
  }function ob(a) {
    var b,
        c,
        d = [],
        e = m.ext.type.order,
        f = a.aoData,
        g = 0,
        j,
        i = a.aiDisplayMaster,
        h;Ia(a);h = W(a);b = 0;for (c = h.length; b < c; b++) {
      j = h[b], j.formatter && g++, Jb(a, j.col);
    }if ("ssp" != y(a) && 0 !== h.length) {
      b = 0;for (c = i.length; b < c; b++) {
        d[i[b]] = b;
      }g === h.length ? i.sort(function (a, b) {
        var c,
            e,
            g,
            j,
            i = h.length,
            k = f[a]._aSortData,
            m = f[b]._aSortData;for (g = 0; g < i; g++) {
          if (j = h[g], c = k[j.col], e = m[j.col], c = c < e ? -1 : c > e ? 1 : 0, 0 !== c) return "asc" === j.dir ? c : -c;
        }c = d[a];e = d[b];return c < e ? -1 : c > e ? 1 : 0;
      }) : i.sort(function (a, b) {
        var c,
            g,
            j,
            i,
            k = h.length,
            m = f[a]._aSortData,
            p = f[b]._aSortData;for (j = 0; j < k; j++) {
          if (i = h[j], c = m[i.col], g = p[i.col], i = e[i.type + "-" + i.dir] || e["string-" + i.dir], c = i(c, g), 0 !== c) return c;
        }c = d[a];g = d[b];return c < g ? -1 : c > g ? 1 : 0;
      });
    }a.bSorted = !0;
  }function Kb(a) {
    for (var b, c, d = a.aoColumns, e = W(a), a = a.oLanguage.oAria, f = 0, g = d.length; f < g; f++) {
      c = d[f];var j = c.asSorting;b = c.sTitle.replace(/<.*?>/g, "");var i = c.nTh;i.removeAttribute("aria-sort");c.bSortable && (0 < e.length && e[0].col == f ? (i.setAttribute("aria-sort", "asc" == e[0].dir ? "ascending" : "descending"), c = j[e[0].index + 1] || j[0]) : c = j[0], b += "asc" === c ? a.sSortAscending : a.sSortDescending);i.setAttribute("aria-label", b);
    }
  }function Xa(a, b, c, d) {
    var e = a.aaSorting,
        f = a.aoColumns[b].asSorting,
        g = function g(a, b) {
      var c = a._idx;c === k && (c = h.inArray(a[1], f));return c + 1 < f.length ? c + 1 : b ? null : 0;
    };"number" === typeof e[0] && (e = a.aaSorting = [e]);c && a.oFeatures.bSortMulti ? (c = h.inArray(b, D(e, "0")), -1 !== c ? (b = g(e[c], !0), null === b && 1 === e.length && (b = 0), null === b ? e.splice(c, 1) : (e[c][1] = f[b], e[c]._idx = b)) : (e.push([b, f[0], 0]), e[e.length - 1]._idx = 0)) : e.length && e[0][0] == b ? (b = g(e[0]), e.length = 1, e[0][1] = f[b], e[0]._idx = b) : (e.length = 0, e.push([b, f[0]]), e[0]._idx = 0);T(a);"function" == typeof d && d(a);
  }function Oa(a, b, c, d) {
    var e = a.aoColumns[c];Ya(b, {}, function (b) {
      !1 !== e.bSortable && (a.oFeatures.bProcessing ? (C(a, !0), setTimeout(function () {
        Xa(a, c, b.shiftKey, d);"ssp" !== y(a) && C(a, !1);
      }, 0)) : Xa(a, c, b.shiftKey, d));
    });
  }
  function ya(a) {
    var b = a.aLastSort,
        c = a.oClasses.sSortColumn,
        d = W(a),
        e = a.oFeatures,
        f,
        g;if (e.bSort && e.bSortClasses) {
      e = 0;for (f = b.length; e < f; e++) {
        g = b[e].src, h(D(a.aoData, "anCells", g)).removeClass(c + (2 > e ? e + 1 : 3));
      }e = 0;for (f = d.length; e < f; e++) {
        g = d[e].src, h(D(a.aoData, "anCells", g)).addClass(c + (2 > e ? e + 1 : 3));
      }
    }a.aLastSort = d;
  }function Jb(a, b) {
    var c = a.aoColumns[b],
        d = m.ext.order[c.sSortDataType],
        e;d && (e = d.call(a.oInstance, a, b, aa(a, b)));for (var f, g = m.ext.type.order[c.sType + "-pre"], j = 0, i = a.aoData.length; j < i; j++) {
      if (c = a.aoData[j], c._aSortData || (c._aSortData = []), !c._aSortData[b] || d) f = d ? e[j] : B(a, j, b, "sort"), c._aSortData[b] = g ? g(f) : f;
    }
  }function za(a) {
    if (a.oFeatures.bStateSave && !a.bDestroying) {
      var b = { time: +new Date(), start: a._iDisplayStart, length: a._iDisplayLength, order: h.extend(!0, [], a.aaSorting), search: Cb(a.oPreviousSearch), columns: h.map(a.aoColumns, function (b, d) {
          return { visible: b.bVisible, search: Cb(a.aoPreSearchCols[d]) };
        }) };s(a, "aoStateSaveParams", "stateSaveParams", [a, b]);a.oSavedState = b;a.fnStateSaveCallback.call(a.oInstance, a, b);
    }
  }function Lb(a, b, c) {
    var d,
        e,
        f = a.aoColumns,
        b = function b(_b) {
      if (_b && _b.time) {
        var i = s(a, "aoStateLoadParams", "stateLoadParams", [a, g]);if (-1 === h.inArray(!1, i) && (i = a.iStateDuration, !(0 < i && _b.time < +new Date() - 1E3 * i) && !(_b.columns && f.length !== _b.columns.length))) {
          a.oLoadedState = h.extend(!0, {}, g);_b.start !== k && (a._iDisplayStart = _b.start, a.iInitDisplayStart = _b.start);_b.length !== k && (a._iDisplayLength = _b.length);_b.order !== k && (a.aaSorting = [], h.each(_b.order, function (b, c) {
            a.aaSorting.push(c[0] >= f.length ? [0, c[1]] : c);
          }));_b.search !== k && h.extend(a.oPreviousSearch, Db(_b.search));if (_b.columns) {
            d = 0;for (e = _b.columns.length; d < e; d++) {
              i = _b.columns[d], i.visible !== k && (f[d].bVisible = i.visible), i.search !== k && h.extend(a.aoPreSearchCols[d], Db(i.search));
            }
          }s(a, "aoStateLoaded", "stateLoaded", [a, g]);
        }
      }c();
    };if (a.oFeatures.bStateSave) {
      var g = a.fnStateLoadCallback.call(a.oInstance, a, b);g !== k && b(g);
    } else c();
  }function Aa(a) {
    var b = m.settings,
        a = h.inArray(a, D(b, "nTable"));return -1 !== a ? b[a] : null;
  }function K(a, b, c, d) {
    c = "DataTables warning: " + (a ? "table id=" + a.sTableId + " - " : "") + c;d && (c += ". For more information about this error, please see http://datatables.net/tn/" + d);if (b) E.console && console.log && console.log(c);else if (b = m.ext, b = b.sErrMode || b.errMode, a && s(a, null, "error", [a, d, c]), "alert" == b) alert(c);else {
      if ("throw" == b) throw Error(c);"function" == typeof b && b(a, d, c);
    }
  }function F(a, b, c, d) {
    h.isArray(c) ? h.each(c, function (c, d) {
      h.isArray(d) ? F(a, b, d[0], d[1]) : F(a, b, d);
    }) : (d === k && (d = c), b[c] !== k && (a[d] = b[c]));
  }function Mb(a, b, c) {
    var d, e;for (e in b) {
      b.hasOwnProperty(e) && (d = b[e], h.isPlainObject(d) ? (h.isPlainObject(a[e]) || (a[e] = {}), h.extend(!0, a[e], d)) : a[e] = c && "data" !== e && "aaData" !== e && h.isArray(d) ? d.slice() : d);
    }return a;
  }function Ya(a, b, c) {
    h(a).on("click.DT", b, function (b) {
      a.blur();c(b);
    }).on("keypress.DT", b, function (a) {
      13 === a.which && (a.preventDefault(), c(a));
    }).on("selectstart.DT", function () {
      return !1;
    });
  }function z(a, b, c, d) {
    c && a[b].push({ fn: c, sName: d });
  }function s(a, b, c, d) {
    var e = [];b && (e = h.map(a[b].slice().reverse(), function (b) {
      return b.fn.apply(a.oInstance, d);
    }));null !== c && (b = h.Event(c + ".dt"), h(a.nTable).trigger(b, d), e.push(b.result));return e;
  }function Ua(a) {
    var b = a._iDisplayStart,
        c = a.fnDisplayEnd(),
        d = a._iDisplayLength;b >= c && (b = c - d);b -= b % d;if (-1 === d || 0 > b) b = 0;a._iDisplayStart = b;
  }function Pa(a, b) {
    var c = a.renderer,
        d = m.ext.renderer[b];return h.isPlainObject(c) && c[b] ? d[c[b]] || d._ : "string" === typeof c ? d[c] || d._ : d._;
  }function y(a) {
    return a.oFeatures.bServerSide ? "ssp" : a.ajax || a.sAjaxSource ? "ajax" : "dom";
  }function ia(a, b) {
    var c = [],
        c = Nb.numbers_length,
        d = Math.floor(c / 2);b <= c ? c = X(0, b) : a <= d ? (c = X(0, c - 2), c.push("ellipsis"), c.push(b - 1)) : (a >= b - 1 - d ? c = X(b - (c - 2), b) : (c = X(a - d + 2, a + d - 1), c.push("ellipsis"), c.push(b - 1)), c.splice(0, 0, "ellipsis"), c.splice(0, 0, 0));c.DT_el = "span";return c;
  }function fb(a) {
    h.each({ num: function num(b) {
        return Ba(b, a);
      }, "num-fmt": function numFmt(b) {
        return Ba(b, a, Za);
      }, "html-num": function htmlNum(b) {
        return Ba(b, a, Ca);
      }, "html-num-fmt": function htmlNumFmt(b) {
        return Ba(b, a, Ca, Za);
      } }, function (b, c) {
      x.type.order[b + a + "-pre"] = c;b.match(/^html\-/) && (x.type.search[b + a] = x.type.search.html);
    });
  }function Ob(a) {
    return function () {
      var b = [Aa(this[m.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));return m.ext.internal[a].apply(this, b);
    };
  }var m = function m(a) {
    this.$ = function (a, b) {
      return this.api(!0).$(a, b);
    };this._ = function (a, b) {
      return this.api(!0).rows(a, b).data();
    };this.api = function (a) {
      return a ? new _u(Aa(this[x.iApiIndex])) : new _u(this);
    };this.fnAddData = function (a, b) {
      var c = this.api(!0),
          d = h.isArray(a) && (h.isArray(a[0]) || h.isPlainObject(a[0])) ? c.rows.add(a) : c.row.add(a);(b === k || b) && c.draw();return d.flatten().toArray();
    };this.fnAdjustColumnSizing = function (a) {
      var b = this.api(!0).columns.adjust(),
          c = b.settings()[0],
          d = c.oScroll;a === k || a ? b.draw(!1) : ("" !== d.sX || "" !== d.sY) && ma(c);
    };this.fnClearTable = function (a) {
      var b = this.api(!0).clear();(a === k || a) && b.draw();
    };this.fnClose = function (a) {
      this.api(!0).row(a).child.hide();
    };this.fnDeleteRow = function (a, b, c) {
      var d = this.api(!0),
          a = d.rows(a),
          e = a.settings()[0],
          h = e.aoData[a[0][0]];a.remove();b && b.call(this, e, h);(c === k || c) && d.draw();return h;
    };this.fnDestroy = function (a) {
      this.api(!0).destroy(a);
    };this.fnDraw = function (a) {
      this.api(!0).draw(a);
    };
    this.fnFilter = function (a, b, c, d, e, h) {
      e = this.api(!0);null === b || b === k ? e.search(a, c, d, h) : e.column(b).search(a, c, d, h);e.draw();
    };this.fnGetData = function (a, b) {
      var c = this.api(!0);if (a !== k) {
        var d = a.nodeName ? a.nodeName.toLowerCase() : "";return b !== k || "td" == d || "th" == d ? c.cell(a, b).data() : c.row(a).data() || null;
      }return c.data().toArray();
    };this.fnGetNodes = function (a) {
      var b = this.api(!0);return a !== k ? b.row(a).node() : b.rows().nodes().flatten().toArray();
    };this.fnGetPosition = function (a) {
      var b = this.api(!0),
          c = a.nodeName.toUpperCase();
      return "TR" == c ? b.row(a).index() : "TD" == c || "TH" == c ? (a = b.cell(a).index(), [a.row, a.columnVisible, a.column]) : null;
    };this.fnIsOpen = function (a) {
      return this.api(!0).row(a).child.isShown();
    };this.fnOpen = function (a, b, c) {
      return this.api(!0).row(a).child(b, c).show().child()[0];
    };this.fnPageChange = function (a, b) {
      var c = this.api(!0).page(a);(b === k || b) && c.draw(!1);
    };this.fnSetColumnVis = function (a, b, c) {
      a = this.api(!0).column(a).visible(b);(c === k || c) && a.columns.adjust().draw();
    };this.fnSettings = function () {
      return Aa(this[x.iApiIndex]);
    };
    this.fnSort = function (a) {
      this.api(!0).order(a).draw();
    };this.fnSortListener = function (a, b, c) {
      this.api(!0).order.listener(a, b, c);
    };this.fnUpdate = function (a, b, c, d, e) {
      var h = this.api(!0);c === k || null === c ? h.row(b).data(a) : h.cell(b, c).data(a);(e === k || e) && h.columns.adjust();(d === k || d) && h.draw();return 0;
    };this.fnVersionCheck = x.fnVersionCheck;var b = this,
        c = a === k,
        d = this.length;c && (a = {});this.oApi = this.internal = x.internal;for (var e in m.ext.internal) {
      e && (this[e] = Ob(e));
    }this.each(function () {
      var e = {},
          g = 1 < d ? Mb(e, a, !0) : a,
          j = 0,
          i,
          e = this.getAttribute("id"),
          n = !1,
          l = m.defaults,
          q = h(this);if ("table" != this.nodeName.toLowerCase()) K(null, 0, "Non-table node initialisation (" + this.nodeName + ")", 2);else {
        gb(l);hb(l.column);J(l, l, !0);J(l.column, l.column, !0);J(l, h.extend(g, q.data()));var r = m.settings,
            j = 0;for (i = r.length; j < i; j++) {
          var p = r[j];if (p.nTable == this || p.nTHead.parentNode == this || p.nTFoot && p.nTFoot.parentNode == this) {
            var u = g.bRetrieve !== k ? g.bRetrieve : l.bRetrieve;if (c || u) return p.oInstance;if (g.bDestroy !== k ? g.bDestroy : l.bDestroy) {
              p.oInstance.fnDestroy();
              break;
            } else {
              K(p, 0, "Cannot reinitialise DataTable", 3);return;
            }
          }if (p.sTableId == this.id) {
            r.splice(j, 1);break;
          }
        }if (null === e || "" === e) this.id = e = "DataTables_Table_" + m.ext._unique++;var o = h.extend(!0, {}, m.models.oSettings, { sDestroyWidth: q[0].style.width, sInstance: e, sTableId: e });o.nTable = this;o.oApi = b.internal;o.oInit = g;r.push(o);o.oInstance = 1 === b.length ? b : q.dataTable();gb(g);g.oLanguage && Fa(g.oLanguage);g.aLengthMenu && !g.iDisplayLength && (g.iDisplayLength = h.isArray(g.aLengthMenu[0]) ? g.aLengthMenu[0][0] : g.aLengthMenu[0]);
        g = Mb(h.extend(!0, {}, l), g);F(o.oFeatures, g, "bPaginate bLengthChange bFilter bSort bSortMulti bInfo bProcessing bAutoWidth bSortClasses bServerSide bDeferRender".split(" "));F(o, g, ["asStripeClasses", "ajax", "fnServerData", "fnFormatNumber", "sServerMethod", "aaSorting", "aaSortingFixed", "aLengthMenu", "sPaginationType", "sAjaxSource", "sAjaxDataProp", "iStateDuration", "sDom", "bSortCellsTop", "iTabIndex", "fnStateLoadCallback", "fnStateSaveCallback", "renderer", "searchDelay", "rowId", ["iCookieDuration", "iStateDuration"], ["oSearch", "oPreviousSearch"], ["aoSearchCols", "aoPreSearchCols"], ["iDisplayLength", "_iDisplayLength"], ["bJQueryUI", "bJUI"]]);F(o.oScroll, g, [["sScrollX", "sX"], ["sScrollXInner", "sXInner"], ["sScrollY", "sY"], ["bScrollCollapse", "bCollapse"]]);F(o.oLanguage, g, "fnInfoCallback");z(o, "aoDrawCallback", g.fnDrawCallback, "user");z(o, "aoServerParams", g.fnServerParams, "user");z(o, "aoStateSaveParams", g.fnStateSaveParams, "user");z(o, "aoStateLoadParams", g.fnStateLoadParams, "user");z(o, "aoStateLoaded", g.fnStateLoaded, "user");z(o, "aoRowCallback", g.fnRowCallback, "user");z(o, "aoRowCreatedCallback", g.fnCreatedRow, "user");z(o, "aoHeaderCallback", g.fnHeaderCallback, "user");z(o, "aoFooterCallback", g.fnFooterCallback, "user");z(o, "aoInitComplete", g.fnInitComplete, "user");z(o, "aoPreDrawCallback", g.fnPreDrawCallback, "user");o.rowIdFn = R(g.rowId);ib(o);var t = o.oClasses;g.bJQueryUI ? (h.extend(t, m.ext.oJUIClasses, g.oClasses), g.sDom === l.sDom && "lfrtip" === l.sDom && (o.sDom = '<"H"lfr>t<"F"ip>'), o.renderer) ? h.isPlainObject(o.renderer) && !o.renderer.header && (o.renderer.header = "jqueryui") : o.renderer = "jqueryui" : h.extend(t, m.ext.classes, g.oClasses);q.addClass(t.sTable);o.iInitDisplayStart === k && (o.iInitDisplayStart = g.iDisplayStart, o._iDisplayStart = g.iDisplayStart);null !== g.iDeferLoading && (o.bDeferLoading = !0, e = h.isArray(g.iDeferLoading), o._iRecordsDisplay = e ? g.iDeferLoading[0] : g.iDeferLoading, o._iRecordsTotal = e ? g.iDeferLoading[1] : g.iDeferLoading);var v = o.oLanguage;h.extend(!0, v, g.oLanguage);v.sUrl && (h.ajax({ dataType: "json", url: v.sUrl, success: function success(a) {
            Fa(a);
            J(l.oLanguage, a);h.extend(true, v, a);ha(o);
          }, error: function error() {
            ha(o);
          } }), n = !0);null === g.asStripeClasses && (o.asStripeClasses = [t.sStripeOdd, t.sStripeEven]);var e = o.asStripeClasses,
            x = q.children("tbody").find("tr").eq(0);-1 !== h.inArray(!0, h.map(e, function (a) {
          return x.hasClass(a);
        })) && (h("tbody tr", this).removeClass(e.join(" ")), o.asDestroyStripes = e.slice());e = [];r = this.getElementsByTagName("thead");0 !== r.length && (ea(o.aoHeader, r[0]), e = ta(o));if (null === g.aoColumns) {
          r = [];j = 0;for (i = e.length; j < i; j++) {
            r.push(null);
          }
        } else r = g.aoColumns;j = 0;for (i = r.length; j < i; j++) {
          Ga(o, e ? e[j] : null);
        }kb(o, g.aoColumnDefs, r, function (a, b) {
          la(o, a, b);
        });if (x.length) {
          var w = function w(a, b) {
            return a.getAttribute("data-" + b) !== null ? b : null;
          };h(x[0]).children("th, td").each(function (a, b) {
            var c = o.aoColumns[a];if (c.mData === a) {
              var d = w(b, "sort") || w(b, "order"),
                  e = w(b, "filter") || w(b, "search");if (d !== null || e !== null) {
                c.mData = { _: a + ".display", sort: d !== null ? a + "._40data-" + d : k, type: d !== null ? a + "._40data-" + d : k, filter: e !== null ? a + "._40data-" + e : k };la(o, a);
              }
            }
          });
        }var U = o.oFeatures,
            e = function e() {
          if (g.aaSorting === k) {
            var a = o.aaSorting;j = 0;for (i = a.length; j < i; j++) {
              a[j][1] = o.aoColumns[j].asSorting[0];
            }
          }ya(o);U.bSort && z(o, "aoDrawCallback", function () {
            if (o.bSorted) {
              var a = W(o),
                  b = {};h.each(a, function (a, c) {
                b[c.src] = c.dir;
              });s(o, null, "order", [o, a, b]);Kb(o);
            }
          });z(o, "aoDrawCallback", function () {
            (o.bSorted || y(o) === "ssp" || U.bDeferRender) && ya(o);
          }, "sc");var a = q.children("caption").each(function () {
            this._captionSide = h(this).css("caption-side");
          }),
              b = q.children("thead");b.length === 0 && (b = h("<thead/>").appendTo(q));
          o.nTHead = b[0];b = q.children("tbody");b.length === 0 && (b = h("<tbody/>").appendTo(q));o.nTBody = b[0];b = q.children("tfoot");if (b.length === 0 && a.length > 0 && (o.oScroll.sX !== "" || o.oScroll.sY !== "")) b = h("<tfoot/>").appendTo(q);if (b.length === 0 || b.children().length === 0) q.addClass(t.sNoFooter);else if (b.length > 0) {
            o.nTFoot = b[0];ea(o.aoFooter, o.nTFoot);
          }if (g.aaData) for (j = 0; j < g.aaData.length; j++) {
            N(o, g.aaData[j]);
          } else (o.bDeferLoading || y(o) == "dom") && oa(o, h(o.nTBody).children("tr"));o.aiDisplay = o.aiDisplayMaster.slice();
          o.bInitialised = true;n === false && ha(o);
        };g.bStateSave ? (U.bStateSave = !0, z(o, "aoDrawCallback", za, "state_save"), Lb(o, g, e)) : e();
      }
    });b = null;return this;
  },
      x,
      _u,
      p,
      t,
      $a = {},
      Pb = /[\r\n]/g,
      Ca = /<.*?>/g,
      cc = /^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/,
      dc = RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\|\\$|\\^|\\-)", "g"),
      Za = /[',$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfk]/gi,
      M = function M(a) {
    return !a || !0 === a || "-" === a ? !0 : !1;
  },
      Qb = function Qb(a) {
    var b = parseInt(a, 10);return !isNaN(b) && isFinite(a) ? b : null;
  },
      Rb = function Rb(a, b) {
    $a[b] || ($a[b] = RegExp(Sa(b), "g"));return "string" === typeof a && "." !== b ? a.replace(/\./g, "").replace($a[b], ".") : a;
  },
      ab = function ab(a, b, c) {
    var d = "string" === typeof a;if (M(a)) return !0;b && d && (a = Rb(a, b));c && d && (a = a.replace(Za, ""));return !isNaN(parseFloat(a)) && isFinite(a);
  },
      Sb = function Sb(a, b, c) {
    return M(a) ? !0 : !(M(a) || "string" === typeof a) ? null : ab(a.replace(Ca, ""), b, c) ? !0 : null;
  },
      D = function D(a, b, c) {
    var d = [],
        e = 0,
        f = a.length;if (c !== k) for (; e < f; e++) {
      a[e] && a[e][b] && d.push(a[e][b][c]);
    } else for (; e < f; e++) {
      a[e] && d.push(a[e][b]);
    }return d;
  },
      ja = function ja(a, b, c, d) {
    var e = [],
        f = 0,
        g = b.length;if (d !== k) for (; f < g; f++) {
      a[b[f]][c] && e.push(a[b[f]][c][d]);
    } else for (; f < g; f++) {
      e.push(a[b[f]][c]);
    }return e;
  },
      X = function X(a, b) {
    var c = [],
        d;b === k ? (b = 0, d = a) : (d = b, b = a);for (var e = b; e < d; e++) {
      c.push(e);
    }return c;
  },
      Tb = function Tb(a) {
    for (var b = [], c = 0, d = a.length; c < d; c++) {
      a[c] && b.push(a[c]);
    }return b;
  },
      sa = function sa(a) {
    var b = [],
        c,
        d,
        e = a.length,
        f,
        g = 0;d = 0;a: for (; d < e; d++) {
      c = a[d];for (f = 0; f < g; f++) {
        if (b[f] === c) continue a;
      }b.push(c);g++;
    }return b;
  };m.util = { throttle: function throttle(a, b) {
      var c = b !== k ? b : 200,
          d,
          e;return function () {
        var b = this,
            g = +new Date(),
            h = arguments;d && g < d + c ? (clearTimeout(e), e = setTimeout(function () {
          d = k;a.apply(b, h);
        }, c)) : (d = g, a.apply(b, h));
      };
    }, escapeRegex: function escapeRegex(a) {
      return a.replace(dc, "\\$1");
    } };var A = function A(a, b, c) {
    a[b] !== k && (a[c] = a[b]);
  },
      ca = /\[.*?\]$/,
      V = /\(\)$/,
      Sa = m.util.escapeRegex,
      xa = h("<div>")[0],
      $b = xa.textContent !== k,
      bc = /<.*?>/g,
      Qa = m.util.throttle,
      Ub = [],
      w = Array.prototype,
      ec = function ec(a) {
    var b,
        c,
        d = m.settings,
        e = h.map(d, function (a) {
      return a.nTable;
    });
    if (a) {
      if (a.nTable && a.oApi) return [a];if (a.nodeName && "table" === a.nodeName.toLowerCase()) return b = h.inArray(a, e), -1 !== b ? [d[b]] : null;if (a && "function" === typeof a.settings) return a.settings().toArray();"string" === typeof a ? c = h(a) : a instanceof h && (c = a);
    } else return [];if (c) return c.map(function () {
      b = h.inArray(this, e);return -1 !== b ? d[b] : null;
    }).toArray();
  };_u = function u(a, b) {
    if (!(this instanceof _u)) return new _u(a, b);var c = [],
        d = function d(a) {
      (a = ec(a)) && (c = c.concat(a));
    };if (h.isArray(a)) for (var e = 0, f = a.length; e < f; e++) {
      d(a[e]);
    } else d(a);this.context = sa(c);b && h.merge(this, b);this.selector = { rows: null, cols: null, opts: null };_u.extend(this, this, Ub);
  };m.Api = _u;h.extend(_u.prototype, { any: function any() {
      return 0 !== this.count();
    }, concat: w.concat, context: [], count: function count() {
      return this.flatten().length;
    }, each: function each(a) {
      for (var b = 0, c = this.length; b < c; b++) {
        a.call(this, this[b], b, this);
      }return this;
    }, eq: function eq(a) {
      var b = this.context;return b.length > a ? new _u(b[a], this[a]) : null;
    }, filter: function filter(a) {
      var b = [];if (w.filter) b = w.filter.call(this, a, this);else for (var c = 0, d = this.length; c < d; c++) {
        a.call(this, this[c], c, this) && b.push(this[c]);
      }return new _u(this.context, b);
    }, flatten: function flatten() {
      var a = [];return new _u(this.context, a.concat.apply(a, this.toArray()));
    }, join: w.join, indexOf: w.indexOf || function (a, b) {
      for (var c = b || 0, d = this.length; c < d; c++) {
        if (this[c] === a) return c;
      }return -1;
    }, iterator: function iterator(a, b, c, d) {
      var e = [],
          f,
          g,
          h,
          i,
          n,
          l = this.context,
          m,
          p,
          t = this.selector;"string" === typeof a && (d = c, c = b, b = a, a = !1);g = 0;for (h = l.length; g < h; g++) {
        var s = new _u(l[g]);if ("table" === b) f = c.call(s, l[g], g), f !== k && e.push(f);else if ("columns" === b || "rows" === b) f = c.call(s, l[g], this[g], g), f !== k && e.push(f);else if ("column" === b || "column-rows" === b || "row" === b || "cell" === b) {
          p = this[g];"column-rows" === b && (m = Da(l[g], t.opts));i = 0;for (n = p.length; i < n; i++) {
            f = p[i], f = "cell" === b ? c.call(s, l[g], f.row, f.column, g, i) : c.call(s, l[g], f, g, i, m), f !== k && e.push(f);
          }
        }
      }return e.length || d ? (a = new _u(l, a ? e.concat.apply([], e) : e), b = a.selector, b.rows = t.rows, b.cols = t.cols, b.opts = t.opts, a) : this;
    }, lastIndexOf: w.lastIndexOf || function (a, b) {
      return this.indexOf.apply(this.toArray.reverse(), arguments);
    }, length: 0, map: function map(a) {
      var b = [];if (w.map) b = w.map.call(this, a, this);else for (var c = 0, d = this.length; c < d; c++) {
        b.push(a.call(this, this[c], c));
      }return new _u(this.context, b);
    }, pluck: function pluck(a) {
      return this.map(function (b) {
        return b[a];
      });
    }, pop: w.pop, push: w.push, reduce: w.reduce || function (a, b) {
      return jb(this, a, b, 0, this.length, 1);
    }, reduceRight: w.reduceRight || function (a, b) {
      return jb(this, a, b, this.length - 1, -1, -1);
    }, reverse: w.reverse, selector: null, shift: w.shift,
    sort: w.sort, splice: w.splice, toArray: function toArray() {
      return w.slice.call(this);
    }, to$: function to$() {
      return h(this);
    }, toJQuery: function toJQuery() {
      return h(this);
    }, unique: function unique() {
      return new _u(this.context, sa(this));
    }, unshift: w.unshift });_u.extend = function (a, b, c) {
    if (c.length && b && (b instanceof _u || b.__dt_wrapper)) {
      var d,
          e,
          f,
          g = function g(a, b, c) {
        return function () {
          var d = b.apply(a, arguments);_u.extend(d, d, c.methodExt);return d;
        };
      };d = 0;for (e = c.length; d < e; d++) {
        f = c[d], b[f.name] = "function" === typeof f.val ? g(a, f.val, f) : h.isPlainObject(f.val) ? {} : f.val, b[f.name].__dt_wrapper = !0, _u.extend(a, b[f.name], f.propExt);
      }
    }
  };_u.register = p = function p(a, b) {
    if (h.isArray(a)) for (var c = 0, d = a.length; c < d; c++) {
      _u.register(a[c], b);
    } else for (var e = a.split("."), f = Ub, g, j, c = 0, d = e.length; c < d; c++) {
      g = (j = -1 !== e[c].indexOf("()")) ? e[c].replace("()", "") : e[c];var i;a: {
        i = 0;for (var n = f.length; i < n; i++) {
          if (f[i].name === g) {
            i = f[i];break a;
          }
        }i = null;
      }i || (i = { name: g, val: {}, methodExt: [], propExt: [] }, f.push(i));c === d - 1 ? i.val = b : f = j ? i.methodExt : i.propExt;
    }
  };_u.registerPlural = t = function t(a, b, c) {
    _u.register(a, c);_u.register(b, function () {
      var a = c.apply(this, arguments);return a === this ? this : a instanceof _u ? a.length ? h.isArray(a[0]) ? new _u(a.context, a[0]) : a[0] : k : a;
    });
  };p("tables()", function (a) {
    var b;if (a) {
      b = _u;var c = this.context;if ("number" === typeof a) a = [c[a]];else var d = h.map(c, function (a) {
        return a.nTable;
      }),
          a = h(d).filter(a).map(function () {
        var a = h.inArray(this, d);return c[a];
      }).toArray();b = new b(a);
    } else b = this;return b;
  });p("table()", function (a) {
    var a = this.tables(a),
        b = a.context;return b.length ? new _u(b[0]) : a;
  });t("tables().nodes()", "table().node()", function () {
    return this.iterator("table", function (a) {
      return a.nTable;
    }, 1);
  });t("tables().body()", "table().body()", function () {
    return this.iterator("table", function (a) {
      return a.nTBody;
    }, 1);
  });t("tables().header()", "table().header()", function () {
    return this.iterator("table", function (a) {
      return a.nTHead;
    }, 1);
  });t("tables().footer()", "table().footer()", function () {
    return this.iterator("table", function (a) {
      return a.nTFoot;
    }, 1);
  });t("tables().containers()", "table().container()", function () {
    return this.iterator("table", function (a) {
      return a.nTableWrapper;
    }, 1);
  });p("draw()", function (a) {
    return this.iterator("table", function (b) {
      "page" === a ? O(b) : ("string" === typeof a && (a = "full-hold" === a ? !1 : !0), T(b, !1 === a));
    });
  });p("page()", function (a) {
    return a === k ? this.page.info().page : this.iterator("table", function (b) {
      Va(b, a);
    });
  });p("page.info()", function () {
    if (0 === this.context.length) return k;var a = this.context[0],
        b = a._iDisplayStart,
        c = a.oFeatures.bPaginate ? a._iDisplayLength : -1,
        d = a.fnRecordsDisplay(),
        e = -1 === c;return { page: e ? 0 : Math.floor(b / c),
      pages: e ? 1 : Math.ceil(d / c), start: b, end: a.fnDisplayEnd(), length: c, recordsTotal: a.fnRecordsTotal(), recordsDisplay: d, serverSide: "ssp" === y(a) };
  });p("page.len()", function (a) {
    return a === k ? 0 !== this.context.length ? this.context[0]._iDisplayLength : k : this.iterator("table", function (b) {
      Ta(b, a);
    });
  });var Vb = function Vb(a, b, c) {
    if (c) {
      var d = new _u(a);d.one("draw", function () {
        c(d.ajax.json());
      });
    }if ("ssp" == y(a)) T(a, b);else {
      C(a, !0);var e = a.jqXHR;e && 4 !== e.readyState && e.abort();ua(a, [], function (c) {
        pa(a);for (var c = va(a, c), d = 0, e = c.length; d < e; d++) {
          N(a, c[d]);
        }T(a, b);C(a, !1);
      });
    }
  };p("ajax.json()", function () {
    var a = this.context;if (0 < a.length) return a[0].json;
  });p("ajax.params()", function () {
    var a = this.context;if (0 < a.length) return a[0].oAjaxData;
  });p("ajax.reload()", function (a, b) {
    return this.iterator("table", function (c) {
      Vb(c, !1 === b, a);
    });
  });p("ajax.url()", function (a) {
    var b = this.context;if (a === k) {
      if (0 === b.length) return k;b = b[0];return b.ajax ? h.isPlainObject(b.ajax) ? b.ajax.url : b.ajax : b.sAjaxSource;
    }return this.iterator("table", function (b) {
      h.isPlainObject(b.ajax) ? b.ajax.url = a : b.ajax = a;
    });
  });p("ajax.url().load()", function (a, b) {
    return this.iterator("table", function (c) {
      Vb(c, !1 === b, a);
    });
  });var bb = function bb(a, b, c, d, e) {
    var f = [],
        g,
        j,
        i,
        n,
        l,
        m;i = typeof b === "undefined" ? "undefined" : _typeof(b);if (!b || "string" === i || "function" === i || b.length === k) b = [b];i = 0;for (n = b.length; i < n; i++) {
      j = b[i] && b[i].split && !b[i].match(/[\[\(:]/) ? b[i].split(",") : [b[i]];l = 0;for (m = j.length; l < m; l++) {
        (g = c("string" === typeof j[l] ? h.trim(j[l]) : j[l])) && g.length && (f = f.concat(g));
      }
    }a = x.selector[a];if (a.length) {
      i = 0;for (n = a.length; i < n; i++) {
        f = a[i](d, e, f);
      }
    }return sa(f);
  },
      cb = function cb(a) {
    a || (a = {});a.filter && a.search === k && (a.search = a.filter);return h.extend({ search: "none", order: "current", page: "all" }, a);
  },
      db = function db(a) {
    for (var b = 0, c = a.length; b < c; b++) {
      if (0 < a[b].length) return a[0] = a[b], a[0].length = 1, a.length = 1, a.context = [a.context[b]], a;
    }a.length = 0;return a;
  },
      Da = function Da(a, b) {
    var c,
        d,
        e,
        f = [],
        g = a.aiDisplay;c = a.aiDisplayMaster;var j = b.search;d = b.order;e = b.page;if ("ssp" == y(a)) return "removed" === j ? [] : X(0, c.length);if ("current" == e) {
      c = a._iDisplayStart;for (d = a.fnDisplayEnd(); c < d; c++) {
        f.push(g[c]);
      }
    } else if ("current" == d || "applied" == d) f = "none" == j ? c.slice() : "applied" == j ? g.slice() : h.map(c, function (a) {
      return -1 === h.inArray(a, g) ? a : null;
    });else if ("index" == d || "original" == d) {
      c = 0;for (d = a.aoData.length; c < d; c++) {
        "none" == j ? f.push(c) : (e = h.inArray(c, g), (-1 === e && "removed" == j || 0 <= e && "applied" == j) && f.push(c));
      }
    }return f;
  };p("rows()", function (a, b) {
    a === k ? a = "" : h.isPlainObject(a) && (b = a, a = "");var b = cb(b),
        c = this.iterator("table", function (c) {
      var e = b,
          f;return bb("row", a, function (a) {
        var b = Qb(a);if (b !== null && !e) return [b];f || (f = Da(c, e));if (b !== null && h.inArray(b, f) !== -1) return [b];if (a === null || a === k || a === "") return f;if (typeof a === "function") return h.map(f, function (b) {
          var e = c.aoData[b];return a(b, e._aData, e.nTr) ? b : null;
        });b = Tb(ja(c.aoData, f, "nTr"));if (a.nodeName) {
          if (a._DT_RowIndex !== k) return [a._DT_RowIndex];if (a._DT_CellIndex) return [a._DT_CellIndex.row];b = h(a).closest("*[data-dt-row]");return b.length ? [b.data("dt-row")] : [];
        }if (typeof a === "string" && a.charAt(0) === "#") {
          var i = c.aIds[a.replace(/^#/, "")];if (i !== k) return [i.idx];
        }return h(b).filter(a).map(function () {
          return this._DT_RowIndex;
        }).toArray();
      }, c, e);
    }, 1);c.selector.rows = a;c.selector.opts = b;return c;
  });p("rows().nodes()", function () {
    return this.iterator("row", function (a, b) {
      return a.aoData[b].nTr || k;
    }, 1);
  });p("rows().data()", function () {
    return this.iterator(!0, "rows", function (a, b) {
      return ja(a.aoData, b, "_aData");
    }, 1);
  });t("rows().cache()", "row().cache()", function (a) {
    return this.iterator("row", function (b, c) {
      var d = b.aoData[c];return "search" === a ? d._aFilterData : d._aSortData;
    }, 1);
  });t("rows().invalidate()", "row().invalidate()", function (a) {
    return this.iterator("row", function (b, c) {
      da(b, c, a);
    });
  });t("rows().indexes()", "row().index()", function () {
    return this.iterator("row", function (a, b) {
      return b;
    }, 1);
  });t("rows().ids()", "row().id()", function (a) {
    for (var b = [], c = this.context, d = 0, e = c.length; d < e; d++) {
      for (var f = 0, g = this[d].length; f < g; f++) {
        var h = c[d].rowIdFn(c[d].aoData[this[d][f]]._aData);b.push((!0 === a ? "#" : "") + h);
      }
    }return new _u(c, b);
  });t("rows().remove()", "row().remove()", function () {
    var a = this;this.iterator("row", function (b, c, d) {
      var e = b.aoData,
          f = e[c],
          g,
          h,
          i,
          n,
          l;e.splice(c, 1);
      g = 0;for (h = e.length; g < h; g++) {
        if (i = e[g], l = i.anCells, null !== i.nTr && (i.nTr._DT_RowIndex = g), null !== l) {
          i = 0;for (n = l.length; i < n; i++) {
            l[i]._DT_CellIndex.row = g;
          }
        }
      }qa(b.aiDisplayMaster, c);qa(b.aiDisplay, c);qa(a[d], c, !1);Ua(b);c = b.rowIdFn(f._aData);c !== k && delete b.aIds[c];
    });this.iterator("table", function (a) {
      for (var c = 0, d = a.aoData.length; c < d; c++) {
        a.aoData[c].idx = c;
      }
    });return this;
  });p("rows.add()", function (a) {
    var b = this.iterator("table", function (b) {
      var c,
          f,
          g,
          h = [];f = 0;for (g = a.length; f < g; f++) {
        c = a[f], c.nodeName && "TR" === c.nodeName.toUpperCase() ? h.push(oa(b, c)[0]) : h.push(N(b, c));
      }return h;
    }, 1),
        c = this.rows(-1);c.pop();h.merge(c, b);return c;
  });p("row()", function (a, b) {
    return db(this.rows(a, b));
  });p("row().data()", function (a) {
    var b = this.context;if (a === k) return b.length && this.length ? b[0].aoData[this[0]]._aData : k;b[0].aoData[this[0]]._aData = a;da(b[0], this[0], "data");return this;
  });p("row().node()", function () {
    var a = this.context;return a.length && this.length ? a[0].aoData[this[0]].nTr || null : null;
  });p("row.add()", function (a) {
    a instanceof h && a.length && (a = a[0]);
    var b = this.iterator("table", function (b) {
      return a.nodeName && "TR" === a.nodeName.toUpperCase() ? oa(b, a)[0] : N(b, a);
    });return this.row(b[0]);
  });var eb = function eb(a, b) {
    var c = a.context;if (c.length && (c = c[0].aoData[b !== k ? b : a[0]]) && c._details) c._details.remove(), c._detailsShow = k, c._details = k;
  },
      Wb = function Wb(a, b) {
    var c = a.context;if (c.length && a.length) {
      var d = c[0].aoData[a[0]];if (d._details) {
        (d._detailsShow = b) ? d._details.insertAfter(d.nTr) : d._details.detach();var e = c[0],
            f = new _u(e),
            g = e.aoData;f.off("draw.dt.DT_details column-visibility.dt.DT_details destroy.dt.DT_details");
        0 < D(g, "_details").length && (f.on("draw.dt.DT_details", function (a, b) {
          e === b && f.rows({ page: "current" }).eq(0).each(function (a) {
            a = g[a];a._detailsShow && a._details.insertAfter(a.nTr);
          });
        }), f.on("column-visibility.dt.DT_details", function (a, b) {
          if (e === b) for (var c, d = ba(b), f = 0, h = g.length; f < h; f++) {
            c = g[f], c._details && c._details.children("td[colspan]").attr("colspan", d);
          }
        }), f.on("destroy.dt.DT_details", function (a, b) {
          if (e === b) for (var c = 0, d = g.length; c < d; c++) {
            g[c]._details && eb(f, c);
          }
        }));
      }
    }
  };p("row().child()", function (a, b) {
    var c = this.context;if (a === k) return c.length && this.length ? c[0].aoData[this[0]]._details : k;if (!0 === a) this.child.show();else if (!1 === a) eb(this);else if (c.length && this.length) {
      var d = c[0],
          c = c[0].aoData[this[0]],
          e = [],
          f = function f(a, b) {
        if (h.isArray(a) || a instanceof h) for (var c = 0, k = a.length; c < k; c++) {
          f(a[c], b);
        } else a.nodeName && "tr" === a.nodeName.toLowerCase() ? e.push(a) : (c = h("<tr><td/></tr>").addClass(b), h("td", c).addClass(b).html(a)[0].colSpan = ba(d), e.push(c[0]));
      };f(a, b);c._details && c._details.detach();c._details = h(e);
      c._detailsShow && c._details.insertAfter(c.nTr);
    }return this;
  });p(["row().child.show()", "row().child().show()"], function () {
    Wb(this, !0);return this;
  });p(["row().child.hide()", "row().child().hide()"], function () {
    Wb(this, !1);return this;
  });p(["row().child.remove()", "row().child().remove()"], function () {
    eb(this);return this;
  });p("row().child.isShown()", function () {
    var a = this.context;return a.length && this.length ? a[0].aoData[this[0]]._detailsShow || !1 : !1;
  });var fc = /^([^:]+):(name|visIdx|visible)$/,
      Xb = function Xb(a, b, c, d, e) {
    for (var c = [], d = 0, f = e.length; d < f; d++) {
      c.push(B(a, e[d], b));
    }return c;
  };p("columns()", function (a, b) {
    a === k ? a = "" : h.isPlainObject(a) && (b = a, a = "");var b = cb(b),
        c = this.iterator("table", function (c) {
      var e = a,
          f = b,
          g = c.aoColumns,
          j = D(g, "sName"),
          i = D(g, "nTh");return bb("column", e, function (a) {
        var b = Qb(a);if (a === "") return X(g.length);if (b !== null) return [b >= 0 ? b : g.length + b];if (typeof a === "function") {
          var e = Da(c, f);return h.map(g, function (b, f) {
            return a(f, Xb(c, f, 0, 0, e), i[f]) ? f : null;
          });
        }var k = typeof a === "string" ? a.match(fc) : "";if (k) switch (k[2]) {case "visIdx":case "visible":
            b = parseInt(k[1], 10);if (b < 0) {
              var m = h.map(g, function (a, b) {
                return a.bVisible ? b : null;
              });return [m[m.length + b]];
            }return [$(c, b)];case "name":
            return h.map(j, function (a, b) {
              return a === k[1] ? b : null;
            });default:
            return [];}if (a.nodeName && a._DT_CellIndex) return [a._DT_CellIndex.column];b = h(i).filter(a).map(function () {
          return h.inArray(this, i);
        }).toArray();if (b.length || !a.nodeName) return b;b = h(a).closest("*[data-dt-column]");return b.length ? [b.data("dt-column")] : [];
      }, c, f);
    }, 1);c.selector.cols = a;c.selector.opts = b;return c;
  });t("columns().header()", "column().header()", function () {
    return this.iterator("column", function (a, b) {
      return a.aoColumns[b].nTh;
    }, 1);
  });t("columns().footer()", "column().footer()", function () {
    return this.iterator("column", function (a, b) {
      return a.aoColumns[b].nTf;
    }, 1);
  });t("columns().data()", "column().data()", function () {
    return this.iterator("column-rows", Xb, 1);
  });t("columns().dataSrc()", "column().dataSrc()", function () {
    return this.iterator("column", function (a, b) {
      return a.aoColumns[b].mData;
    }, 1);
  });t("columns().cache()", "column().cache()", function (a) {
    return this.iterator("column-rows", function (b, c, d, e, f) {
      return ja(b.aoData, f, "search" === a ? "_aFilterData" : "_aSortData", c);
    }, 1);
  });t("columns().nodes()", "column().nodes()", function () {
    return this.iterator("column-rows", function (a, b, c, d, e) {
      return ja(a.aoData, e, "anCells", b);
    }, 1);
  });t("columns().visible()", "column().visible()", function (a, b) {
    var c = this.iterator("column", function (b, c) {
      if (a === k) return b.aoColumns[c].bVisible;var f = b.aoColumns,
          g = f[c],
          j = b.aoData,
          i,
          n,
          l;if (a !== k && g.bVisible !== a) {
        if (a) {
          var m = h.inArray(!0, D(f, "bVisible"), c + 1);i = 0;for (n = j.length; i < n; i++) {
            l = j[i].nTr, f = j[i].anCells, l && l.insertBefore(f[c], f[m] || null);
          }
        } else h(D(b.aoData, "anCells", c)).detach();g.bVisible = a;fa(b, b.aoHeader);fa(b, b.aoFooter);za(b);
      }
    });a !== k && (this.iterator("column", function (c, e) {
      s(c, null, "column-visibility", [c, e, a, b]);
    }), (b === k || b) && this.columns.adjust());return c;
  });t("columns().indexes()", "column().index()", function (a) {
    return this.iterator("column", function (b, c) {
      return "visible" === a ? aa(b, c) : c;
    }, 1);
  });p("columns.adjust()", function () {
    return this.iterator("table", function (a) {
      Z(a);
    }, 1);
  });p("column.index()", function (a, b) {
    if (0 !== this.context.length) {
      var c = this.context[0];if ("fromVisible" === a || "toData" === a) return $(c, b);if ("fromData" === a || "toVisible" === a) return aa(c, b);
    }
  });p("column()", function (a, b) {
    return db(this.columns(a, b));
  });p("cells()", function (a, b, c) {
    h.isPlainObject(a) && (a.row === k ? (c = a, a = null) : (c = b, b = null));h.isPlainObject(b) && (c = b, b = null);if (null === b || b === k) return this.iterator("table", function (b) {
      var d = a,
          e = cb(c),
          f = b.aoData,
          g = Da(b, e),
          i = Tb(ja(f, g, "anCells")),
          j = h([].concat.apply([], i)),
          l,
          n = b.aoColumns.length,
          m,
          p,
          t,
          u,
          s,
          v;return bb("cell", d, function (a) {
        var c = typeof a === "function";if (a === null || a === k || c) {
          m = [];p = 0;for (t = g.length; p < t; p++) {
            l = g[p];for (u = 0; u < n; u++) {
              s = { row: l, column: u };if (c) {
                v = f[l];a(s, B(b, l, u), v.anCells ? v.anCells[u] : null) && m.push(s);
              } else m.push(s);
            }
          }return m;
        }if (h.isPlainObject(a)) return [a];c = j.filter(a).map(function (a, b) {
          return { row: b._DT_CellIndex.row, column: b._DT_CellIndex.column };
        }).toArray();
        if (c.length || !a.nodeName) return c;v = h(a).closest("*[data-dt-row]");return v.length ? [{ row: v.data("dt-row"), column: v.data("dt-column") }] : [];
      }, b, e);
    });var d = this.columns(b, c),
        e = this.rows(a, c),
        f,
        g,
        j,
        i,
        n,
        l = this.iterator("table", function (a, b) {
      f = [];g = 0;for (j = e[b].length; g < j; g++) {
        i = 0;for (n = d[b].length; i < n; i++) {
          f.push({ row: e[b][g], column: d[b][i] });
        }
      }return f;
    }, 1);h.extend(l.selector, { cols: b, rows: a, opts: c });return l;
  });t("cells().nodes()", "cell().node()", function () {
    return this.iterator("cell", function (a, b, c) {
      return (a = a.aoData[b]) && a.anCells ? a.anCells[c] : k;
    }, 1);
  });p("cells().data()", function () {
    return this.iterator("cell", function (a, b, c) {
      return B(a, b, c);
    }, 1);
  });t("cells().cache()", "cell().cache()", function (a) {
    a = "search" === a ? "_aFilterData" : "_aSortData";return this.iterator("cell", function (b, c, d) {
      return b.aoData[c][a][d];
    }, 1);
  });t("cells().render()", "cell().render()", function (a) {
    return this.iterator("cell", function (b, c, d) {
      return B(b, c, d, a);
    }, 1);
  });t("cells().indexes()", "cell().index()", function () {
    return this.iterator("cell", function (a, b, c) {
      return { row: b, column: c, columnVisible: aa(a, c) };
    }, 1);
  });t("cells().invalidate()", "cell().invalidate()", function (a) {
    return this.iterator("cell", function (b, c, d) {
      da(b, c, a, d);
    });
  });p("cell()", function (a, b, c) {
    return db(this.cells(a, b, c));
  });p("cell().data()", function (a) {
    var b = this.context,
        c = this[0];if (a === k) return b.length && c.length ? B(b[0], c[0].row, c[0].column) : k;lb(b[0], c[0].row, c[0].column, a);da(b[0], c[0].row, "data", c[0].column);return this;
  });p("order()", function (a, b) {
    var c = this.context;if (a === k) return 0 !== c.length ? c[0].aaSorting : k;"number" === typeof a ? a = [[a, b]] : a.length && !h.isArray(a[0]) && (a = Array.prototype.slice.call(arguments));return this.iterator("table", function (b) {
      b.aaSorting = a.slice();
    });
  });p("order.listener()", function (a, b, c) {
    return this.iterator("table", function (d) {
      Oa(d, a, b, c);
    });
  });p("order.fixed()", function (a) {
    if (!a) {
      var b = this.context,
          b = b.length ? b[0].aaSortingFixed : k;return h.isArray(b) ? { pre: b } : b;
    }return this.iterator("table", function (b) {
      b.aaSortingFixed = h.extend(!0, {}, a);
    });
  });p(["columns().order()", "column().order()"], function (a) {
    var b = this;return this.iterator("table", function (c, d) {
      var e = [];h.each(b[d], function (b, c) {
        e.push([c, a]);
      });c.aaSorting = e;
    });
  });p("search()", function (a, b, c, d) {
    var e = this.context;return a === k ? 0 !== e.length ? e[0].oPreviousSearch.sSearch : k : this.iterator("table", function (e) {
      e.oFeatures.bFilter && ga(e, h.extend({}, e.oPreviousSearch, { sSearch: a + "", bRegex: null === b ? !1 : b, bSmart: null === c ? !0 : c, bCaseInsensitive: null === d ? !0 : d }), 1);
    });
  });t("columns().search()", "column().search()", function (a, b, c, d) {
    return this.iterator("column", function (e, f) {
      var g = e.aoPreSearchCols;if (a === k) return g[f].sSearch;e.oFeatures.bFilter && (h.extend(g[f], { sSearch: a + "", bRegex: null === b ? !1 : b, bSmart: null === c ? !0 : c, bCaseInsensitive: null === d ? !0 : d }), ga(e, e.oPreviousSearch, 1));
    });
  });p("state()", function () {
    return this.context.length ? this.context[0].oSavedState : null;
  });p("state.clear()", function () {
    return this.iterator("table", function (a) {
      a.fnStateSaveCallback.call(a.oInstance, a, {});
    });
  });p("state.loaded()", function () {
    return this.context.length ? this.context[0].oLoadedState : null;
  });p("state.save()", function () {
    return this.iterator("table", function (a) {
      za(a);
    });
  });m.versionCheck = m.fnVersionCheck = function (a) {
    for (var b = m.version.split("."), a = a.split("."), c, d, e = 0, f = a.length; e < f; e++) {
      if (c = parseInt(b[e], 10) || 0, d = parseInt(a[e], 10) || 0, c !== d) return c > d;
    }return !0;
  };m.isDataTable = m.fnIsDataTable = function (a) {
    var b = h(a).get(0),
        c = !1;if (a instanceof m.Api) return !0;h.each(m.settings, function (a, e) {
      var f = e.nScrollHead ? h("table", e.nScrollHead)[0] : null,
          g = e.nScrollFoot ? h("table", e.nScrollFoot)[0] : null;if (e.nTable === b || f === b || g === b) c = !0;
    });return c;
  };m.tables = m.fnTables = function (a) {
    var b = !1;h.isPlainObject(a) && (b = a.api, a = a.visible);var c = h.map(m.settings, function (b) {
      if (!a || a && h(b.nTable).is(":visible")) return b.nTable;
    });return b ? new _u(c) : c;
  };m.camelToHungarian = J;p("$()", function (a, b) {
    var c = this.rows(b).nodes(),
        c = h(c);return h([].concat(c.filter(a).toArray(), c.find(a).toArray()));
  });h.each(["on", "one", "off"], function (a, b) {
    p(b + "()", function () {
      var a = Array.prototype.slice.call(arguments);
      a[0] = h.map(a[0].split(/\s/), function (a) {
        return !a.match(/\.dt\b/) ? a + ".dt" : a;
      }).join(" ");var d = h(this.tables().nodes());d[b].apply(d, a);return this;
    });
  });p("clear()", function () {
    return this.iterator("table", function (a) {
      pa(a);
    });
  });p("settings()", function () {
    return new _u(this.context, this.context);
  });p("init()", function () {
    var a = this.context;return a.length ? a[0].oInit : null;
  });p("data()", function () {
    return this.iterator("table", function (a) {
      return D(a.aoData, "_aData");
    }).flatten();
  });p("destroy()", function (a) {
    a = a || !1;return this.iterator("table", function (b) {
      var c = b.nTableWrapper.parentNode,
          d = b.oClasses,
          e = b.nTable,
          f = b.nTBody,
          g = b.nTHead,
          j = b.nTFoot,
          i = h(e),
          f = h(f),
          k = h(b.nTableWrapper),
          l = h.map(b.aoData, function (a) {
        return a.nTr;
      }),
          p;b.bDestroying = !0;s(b, "aoDestroyCallback", "destroy", [b]);a || new _u(b).columns().visible(!0);k.off(".DT").find(":not(tbody *)").off(".DT");h(E).off(".DT-" + b.sInstance);e != g.parentNode && (i.children("thead").detach(), i.append(g));j && e != j.parentNode && (i.children("tfoot").detach(), i.append(j));
      b.aaSorting = [];b.aaSortingFixed = [];ya(b);h(l).removeClass(b.asStripeClasses.join(" "));h("th, td", g).removeClass(d.sSortable + " " + d.sSortableAsc + " " + d.sSortableDesc + " " + d.sSortableNone);b.bJUI && (h("th span." + d.sSortIcon + ", td span." + d.sSortIcon, g).detach(), h("th, td", g).each(function () {
        var a = h("div." + d.sSortJUIWrapper, this);h(this).append(a.contents());a.detach();
      }));f.children().detach();f.append(l);g = a ? "remove" : "detach";i[g]();k[g]();!a && c && (c.insertBefore(e, b.nTableReinsertBefore), i.css("width", b.sDestroyWidth).removeClass(d.sTable), (p = b.asDestroyStripes.length) && f.children().each(function (a) {
        h(this).addClass(b.asDestroyStripes[a % p]);
      }));c = h.inArray(b, m.settings);-1 !== c && m.settings.splice(c, 1);
    });
  });h.each(["column", "row", "cell"], function (a, b) {
    p(b + "s().every()", function (a) {
      var d = this.selector.opts,
          e = this;return this.iterator(b, function (f, g, h, i, m) {
        a.call(e[b](g, "cell" === b ? h : d, "cell" === b ? d : k), g, h, i, m);
      });
    });
  });p("i18n()", function (a, b, c) {
    var d = this.context[0],
        a = R(a)(d.oLanguage);a === k && (a = b);c !== k && h.isPlainObject(a) && (a = a[c] !== k ? a[c] : a._);return a.replace("%d", c);
  });m.version = "1.10.13";m.settings = [];m.models = {};m.models.oSearch = { bCaseInsensitive: !0, sSearch: "", bRegex: !1, bSmart: !0 };m.models.oRow = { nTr: null, anCells: null, _aData: [], _aSortData: null, _aFilterData: null, _sFilterRow: null, _sRowStripe: "", src: null, idx: -1 };m.models.oColumn = { idx: null, aDataSort: null, asSorting: null, bSearchable: null, bSortable: null, bVisible: null, _sManualType: null, _bAttrSrc: !1, fnCreatedCell: null, fnGetData: null, fnSetData: null,
    mData: null, mRender: null, nTh: null, nTf: null, sClass: null, sContentPadding: null, sDefaultContent: null, sName: null, sSortDataType: "std", sSortingClass: null, sSortingClassJUI: null, sTitle: null, sType: null, sWidth: null, sWidthOrig: null };m.defaults = { aaData: null, aaSorting: [[0, "asc"]], aaSortingFixed: [], ajax: null, aLengthMenu: [10, 25, 50, 100], aoColumns: null, aoColumnDefs: null, aoSearchCols: [], asStripeClasses: null, bAutoWidth: !0, bDeferRender: !1, bDestroy: !1, bFilter: !0, bInfo: !0, bJQueryUI: !1, bLengthChange: !0, bPaginate: !0, bProcessing: !1,
    bRetrieve: !1, bScrollCollapse: !1, bServerSide: !1, bSort: !0, bSortMulti: !0, bSortCellsTop: !1, bSortClasses: !0, bStateSave: !1, fnCreatedRow: null, fnDrawCallback: null, fnFooterCallback: null, fnFormatNumber: function fnFormatNumber(a) {
      return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g, this.oLanguage.sThousands);
    }, fnHeaderCallback: null, fnInfoCallback: null, fnInitComplete: null, fnPreDrawCallback: null, fnRowCallback: null, fnServerData: null, fnServerParams: null, fnStateLoadCallback: function fnStateLoadCallback(a) {
      try {
        return JSON.parse((-1 === a.iStateDuration ? sessionStorage : localStorage).getItem("DataTables_" + a.sInstance + "_" + location.pathname));
      } catch (b) {}
    }, fnStateLoadParams: null, fnStateLoaded: null, fnStateSaveCallback: function fnStateSaveCallback(a, b) {
      try {
        (-1 === a.iStateDuration ? sessionStorage : localStorage).setItem("DataTables_" + a.sInstance + "_" + location.pathname, JSON.stringify(b));
      } catch (c) {}
    }, fnStateSaveParams: null, iStateDuration: 7200, iDeferLoading: null, iDisplayLength: 10, iDisplayStart: 0, iTabIndex: 0, oClasses: {}, oLanguage: { oAria: { sSortAscending: ": activate to sort column ascending",
        sSortDescending: ": activate to sort column descending" }, oPaginate: { sFirst: "First", sLast: "Last", sNext: "Next", sPrevious: "Previous" }, sEmptyTable: "No data available in table", sInfo: "Showing _START_ to _END_ of _TOTAL_ entries", sInfoEmpty: "Showing 0 to 0 of 0 entries", sInfoFiltered: "(filtered from _MAX_ total entries)", sInfoPostFix: "", sDecimal: "", sThousands: ",", sLengthMenu: "Show _MENU_ entries", sLoadingRecords: "Loading...", sProcessing: "Processing...", sSearch: "Search:", sSearchPlaceholder: "", sUrl: "", sZeroRecords: "No matching records found" },
    oSearch: h.extend({}, m.models.oSearch), sAjaxDataProp: "data", sAjaxSource: null, sDom: "lfrtip", searchDelay: null, sPaginationType: "simple_numbers", sScrollX: "", sScrollXInner: "", sScrollY: "", sServerMethod: "GET", renderer: null, rowId: "DT_RowId" };Y(m.defaults);m.defaults.column = { aDataSort: null, iDataSort: -1, asSorting: ["asc", "desc"], bSearchable: !0, bSortable: !0, bVisible: !0, fnCreatedCell: null, mData: null, mRender: null, sCellType: "td", sClass: "", sContentPadding: "", sDefaultContent: null, sName: "", sSortDataType: "std", sTitle: null,
    sType: null, sWidth: null };Y(m.defaults.column);m.models.oSettings = { oFeatures: { bAutoWidth: null, bDeferRender: null, bFilter: null, bInfo: null, bLengthChange: null, bPaginate: null, bProcessing: null, bServerSide: null, bSort: null, bSortMulti: null, bSortClasses: null, bStateSave: null }, oScroll: { bCollapse: null, iBarWidth: 0, sX: null, sXInner: null, sY: null }, oLanguage: { fnInfoCallback: null }, oBrowser: { bScrollOversize: !1, bScrollbarLeft: !1, bBounding: !1, barWidth: 0 }, ajax: null, aanFeatures: [], aoData: [], aiDisplay: [], aiDisplayMaster: [],
    aIds: {}, aoColumns: [], aoHeader: [], aoFooter: [], oPreviousSearch: {}, aoPreSearchCols: [], aaSorting: null, aaSortingFixed: [], asStripeClasses: null, asDestroyStripes: [], sDestroyWidth: 0, aoRowCallback: [], aoHeaderCallback: [], aoFooterCallback: [], aoDrawCallback: [], aoRowCreatedCallback: [], aoPreDrawCallback: [], aoInitComplete: [], aoStateSaveParams: [], aoStateLoadParams: [], aoStateLoaded: [], sTableId: "", nTable: null, nTHead: null, nTFoot: null, nTBody: null, nTableWrapper: null, bDeferLoading: !1, bInitialised: !1, aoOpenRows: [], sDom: null,
    searchDelay: null, sPaginationType: "two_button", iStateDuration: 0, aoStateSave: [], aoStateLoad: [], oSavedState: null, oLoadedState: null, sAjaxSource: null, sAjaxDataProp: null, bAjaxDataGet: !0, jqXHR: null, json: k, oAjaxData: k, fnServerData: null, aoServerParams: [], sServerMethod: null, fnFormatNumber: null, aLengthMenu: null, iDraw: 0, bDrawing: !1, iDrawError: -1, _iDisplayLength: 10, _iDisplayStart: 0, _iRecordsTotal: 0, _iRecordsDisplay: 0, bJUI: null, oClasses: {}, bFiltered: !1, bSorted: !1, bSortCellsTop: null, oInit: null, aoDestroyCallback: [],
    fnRecordsTotal: function fnRecordsTotal() {
      return "ssp" == y(this) ? 1 * this._iRecordsTotal : this.aiDisplayMaster.length;
    }, fnRecordsDisplay: function fnRecordsDisplay() {
      return "ssp" == y(this) ? 1 * this._iRecordsDisplay : this.aiDisplay.length;
    }, fnDisplayEnd: function fnDisplayEnd() {
      var a = this._iDisplayLength,
          b = this._iDisplayStart,
          c = b + a,
          d = this.aiDisplay.length,
          e = this.oFeatures,
          f = e.bPaginate;return e.bServerSide ? !1 === f || -1 === a ? b + d : Math.min(b + a, this._iRecordsDisplay) : !f || c > d || -1 === a ? d : c;
    }, oInstance: null, sInstance: null, iTabIndex: 0, nScrollHead: null, nScrollFoot: null,
    aLastSort: [], oPlugins: {}, rowIdFn: null, rowId: null };m.ext = x = { buttons: {}, classes: {}, builder: "-source-", errMode: "alert", feature: [], search: [], selector: { cell: [], column: [], row: [] }, internal: {}, legacy: { ajax: null }, pager: {}, renderer: { pageButton: {}, header: {} }, order: {}, type: { detect: [], search: {}, order: {} }, _unique: 0, fnVersionCheck: m.fnVersionCheck, iApiIndex: 0, oJUIClasses: {}, sVersion: m.version };h.extend(x, { afnFiltering: x.search, aTypes: x.type.detect, ofnSearch: x.type.search, oSort: x.type.order, afnSortData: x.order, aoFeatures: x.feature,
    oApi: x.internal, oStdClasses: x.classes, oPagination: x.pager });h.extend(m.ext.classes, { sTable: "dataTable", sNoFooter: "no-footer", sPageButton: "paginate_button", sPageButtonActive: "current", sPageButtonDisabled: "disabled", sStripeOdd: "odd", sStripeEven: "even", sRowEmpty: "dataTables_empty", sWrapper: "dataTables_wrapper", sFilter: "dataTables_filter", sInfo: "dataTables_info", sPaging: "dataTables_paginate paging_", sLength: "dataTables_length", sProcessing: "dataTables_processing", sSortAsc: "sorting_asc", sSortDesc: "sorting_desc",
    sSortable: "sorting", sSortableAsc: "sorting_asc_disabled", sSortableDesc: "sorting_desc_disabled", sSortableNone: "sorting_disabled", sSortColumn: "sorting_", sFilterInput: "", sLengthSelect: "", sScrollWrapper: "dataTables_scroll", sScrollHead: "dataTables_scrollHead", sScrollHeadInner: "dataTables_scrollHeadInner", sScrollBody: "dataTables_scrollBody", sScrollFoot: "dataTables_scrollFoot", sScrollFootInner: "dataTables_scrollFootInner", sHeaderTH: "", sFooterTH: "", sSortJUIAsc: "", sSortJUIDesc: "", sSortJUI: "", sSortJUIAscAllowed: "",
    sSortJUIDescAllowed: "", sSortJUIWrapper: "", sSortIcon: "", sJUIHeader: "", sJUIFooter: "" });var Ea = "",
      Ea = "",
      G = Ea + "ui-state-default",
      ka = Ea + "css_right ui-icon ui-icon-",
      Yb = Ea + "fg-toolbar ui-toolbar ui-widget-header ui-helper-clearfix";h.extend(m.ext.oJUIClasses, m.ext.classes, { sPageButton: "fg-button ui-button " + G, sPageButtonActive: "ui-state-disabled", sPageButtonDisabled: "ui-state-disabled", sPaging: "dataTables_paginate fg-buttonset ui-buttonset fg-buttonset-multi ui-buttonset-multi paging_", sSortAsc: G + " sorting_asc",
    sSortDesc: G + " sorting_desc", sSortable: G + " sorting", sSortableAsc: G + " sorting_asc_disabled", sSortableDesc: G + " sorting_desc_disabled", sSortableNone: G + " sorting_disabled", sSortJUIAsc: ka + "triangle-1-n", sSortJUIDesc: ka + "triangle-1-s", sSortJUI: ka + "carat-2-n-s", sSortJUIAscAllowed: ka + "carat-1-n", sSortJUIDescAllowed: ka + "carat-1-s", sSortJUIWrapper: "DataTables_sort_wrapper", sSortIcon: "DataTables_sort_icon", sScrollHead: "dataTables_scrollHead " + G, sScrollFoot: "dataTables_scrollFoot " + G, sHeaderTH: G, sFooterTH: G, sJUIHeader: Yb + " ui-corner-tl ui-corner-tr", sJUIFooter: Yb + " ui-corner-bl ui-corner-br" });var Nb = m.ext.pager;h.extend(Nb, { simple: function simple() {
      return ["previous", "next"];
    }, full: function full() {
      return ["first", "previous", "next", "last"];
    }, numbers: function numbers(a, b) {
      return [ia(a, b)];
    }, simple_numbers: function simple_numbers(a, b) {
      return ["previous", ia(a, b), "next"];
    }, full_numbers: function full_numbers(a, b) {
      return ["first", "previous", ia(a, b), "next", "last"];
    }, first_last_numbers: function first_last_numbers(a, b) {
      return ["first", ia(a, b), "last"];
    }, _numbers: ia, numbers_length: 7 });h.extend(!0, m.ext.renderer, { pageButton: { _: function _(a, b, c, d, e, f) {
        var g = a.oClasses,
            j = a.oLanguage.oPaginate,
            i = a.oLanguage.oAria.paginate || {},
            m,
            l,
            p = 0,
            r = function r(b, d) {
          var k,
              t,
              u,
              s,
              v = function v(b) {
            Va(a, b.data.action, true);
          };k = 0;for (t = d.length; k < t; k++) {
            s = d[k];if (h.isArray(s)) {
              u = h("<" + (s.DT_el || "div") + "/>").appendTo(b);r(u, s);
            } else {
              m = null;l = "";switch (s) {case "ellipsis":
                  b.append('<span class="ellipsis">&#x2026;</span>');break;case "first":
                  m = j.sFirst;l = s + (e > 0 ? "" : " " + g.sPageButtonDisabled);break;case "previous":
                  m = j.sPrevious;l = s + (e > 0 ? "" : " " + g.sPageButtonDisabled);break;case "next":
                  m = j.sNext;l = s + (e < f - 1 ? "" : " " + g.sPageButtonDisabled);break;case "last":
                  m = j.sLast;l = s + (e < f - 1 ? "" : " " + g.sPageButtonDisabled);break;default:
                  m = s + 1;l = e === s ? g.sPageButtonActive : "";}if (m !== null) {
                u = h("<a>", { "class": g.sPageButton + " " + l, "aria-controls": a.sTableId, "aria-label": i[s], "data-dt-idx": p, tabindex: a.iTabIndex, id: c === 0 && typeof s === "string" ? a.sTableId + "_" + s : null }).html(m).appendTo(b);Ya(u, { action: s }, v);p++;
              }
            }
          }
        },
            t;try {
          t = h(b).find(H.activeElement).data("dt-idx");
        } catch (u) {}r(h(b).empty(), d);t !== k && h(b).find("[data-dt-idx=" + t + "]").focus();
      } } });h.extend(m.ext.type.detect, [function (a, b) {
    var c = b.oLanguage.sDecimal;return ab(a, c) ? "num" + c : null;
  }, function (a) {
    if (a && !(a instanceof Date) && !cc.test(a)) return null;var b = Date.parse(a);return null !== b && !isNaN(b) || M(a) ? "date" : null;
  }, function (a, b) {
    var c = b.oLanguage.sDecimal;return ab(a, c, !0) ? "num-fmt" + c : null;
  }, function (a, b) {
    var c = b.oLanguage.sDecimal;return Sb(a, c) ? "html-num" + c : null;
  }, function (a, b) {
    var c = b.oLanguage.sDecimal;return Sb(a, c, !0) ? "html-num-fmt" + c : null;
  }, function (a) {
    return M(a) || "string" === typeof a && -1 !== a.indexOf("<") ? "html" : null;
  }]);h.extend(m.ext.type.search, { html: function html(a) {
      return M(a) ? a : "string" === typeof a ? a.replace(Pb, " ").replace(Ca, "") : "";
    }, string: function string(a) {
      return M(a) ? a : "string" === typeof a ? a.replace(Pb, " ") : a;
    } });var Ba = function Ba(a, b, c, d) {
    if (0 !== a && (!a || "-" === a)) return -Infinity;b && (a = Rb(a, b));a.replace && (c && (a = a.replace(c, "")), d && (a = a.replace(d, "")));return 1 * a;
  };h.extend(x.type.order, { "date-pre": function datePre(a) {
      return Date.parse(a) || -Infinity;
    },
    "html-pre": function htmlPre(a) {
      return M(a) ? "" : a.replace ? a.replace(/<.*?>/g, "").toLowerCase() : a + "";
    }, "string-pre": function stringPre(a) {
      return M(a) ? "" : "string" === typeof a ? a.toLowerCase() : !a.toString ? "" : a.toString();
    }, "string-asc": function stringAsc(a, b) {
      return a < b ? -1 : a > b ? 1 : 0;
    }, "string-desc": function stringDesc(a, b) {
      return a < b ? 1 : a > b ? -1 : 0;
    } });fb("");h.extend(!0, m.ext.renderer, { header: { _: function _(a, b, c, d) {
        h(a.nTable).on("order.dt.DT", function (e, f, g, h) {
          if (a === f) {
            e = c.idx;b.removeClass(c.sSortingClass + " " + d.sSortAsc + " " + d.sSortDesc).addClass(h[e] == "asc" ? d.sSortAsc : h[e] == "desc" ? d.sSortDesc : c.sSortingClass);
          }
        });
      }, jqueryui: function jqueryui(a, b, c, d) {
        h("<div/>").addClass(d.sSortJUIWrapper).append(b.contents()).append(h("<span/>").addClass(d.sSortIcon + " " + c.sSortingClassJUI)).appendTo(b);h(a.nTable).on("order.dt.DT", function (e, f, g, h) {
          if (a === f) {
            e = c.idx;b.removeClass(d.sSortAsc + " " + d.sSortDesc).addClass(h[e] == "asc" ? d.sSortAsc : h[e] == "desc" ? d.sSortDesc : c.sSortingClass);b.find("span." + d.sSortIcon).removeClass(d.sSortJUIAsc + " " + d.sSortJUIDesc + " " + d.sSortJUI + " " + d.sSortJUIAscAllowed + " " + d.sSortJUIDescAllowed).addClass(h[e] == "asc" ? d.sSortJUIAsc : h[e] == "desc" ? d.sSortJUIDesc : c.sSortingClassJUI);
          }
        });
      } } });var Zb = function Zb(a) {
    return "string" === typeof a ? a.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") : a;
  };m.render = { number: function number(a, b, c, d, e) {
      return { display: function display(f) {
          if ("number" !== typeof f && "string" !== typeof f) return f;var g = 0 > f ? "-" : "",
              h = parseFloat(f);if (isNaN(h)) return Zb(f);h = h.toFixed(c);f = Math.abs(h);h = parseInt(f, 10);f = c ? b + (f - h).toFixed(c).substring(2) : "";return g + (d || "") + h.toString().replace(/\B(?=(\d{3})+(?!\d))/g, a) + f + (e || "");
        } };
    }, text: function text() {
      return { display: Zb };
    } };h.extend(m.ext.internal, { _fnExternApiFunc: Ob, _fnBuildAjax: ua, _fnAjaxUpdate: nb, _fnAjaxParameters: wb, _fnAjaxUpdateDraw: xb, _fnAjaxDataSrc: va, _fnAddColumn: Ga, _fnColumnOptions: la, _fnAdjustColumnSizing: Z, _fnVisibleToColumnIndex: $, _fnColumnIndexToVisible: aa, _fnVisbleColumns: ba, _fnGetColumns: na, _fnColumnTypes: Ia, _fnApplyColumnDefs: kb, _fnHungarianMap: Y, _fnCamelToHungarian: J, _fnLanguageCompat: Fa,
    _fnBrowserDetect: ib, _fnAddData: N, _fnAddTr: oa, _fnNodeToDataIndex: function _fnNodeToDataIndex(a, b) {
      return b._DT_RowIndex !== k ? b._DT_RowIndex : null;
    }, _fnNodeToColumnIndex: function _fnNodeToColumnIndex(a, b, c) {
      return h.inArray(c, a.aoData[b].anCells);
    }, _fnGetCellData: B, _fnSetCellData: lb, _fnSplitObjNotation: La, _fnGetObjectDataFn: R, _fnSetObjectDataFn: S, _fnGetDataMaster: Ma, _fnClearTable: pa, _fnDeleteIndex: qa, _fnInvalidate: da, _fnGetRowElements: Ka, _fnCreateTr: Ja, _fnBuildHead: mb, _fnDrawHead: fa, _fnDraw: O, _fnReDraw: T, _fnAddOptionsHtml: pb, _fnDetectHeader: ea,
    _fnGetUniqueThs: ta, _fnFeatureHtmlFilter: rb, _fnFilterComplete: ga, _fnFilterCustom: Ab, _fnFilterColumn: zb, _fnFilter: yb, _fnFilterCreateSearch: Ra, _fnEscapeRegex: Sa, _fnFilterData: Bb, _fnFeatureHtmlInfo: ub, _fnUpdateInfo: Eb, _fnInfoMacros: Fb, _fnInitialise: ha, _fnInitComplete: wa, _fnLengthChange: Ta, _fnFeatureHtmlLength: qb, _fnFeatureHtmlPaginate: vb, _fnPageChange: Va, _fnFeatureHtmlProcessing: sb, _fnProcessingDisplay: C, _fnFeatureHtmlTable: tb, _fnScrollDraw: ma, _fnApplyToChildren: I, _fnCalculateColumnWidths: Ha, _fnThrottle: Qa,
    _fnConvertToWidth: Gb, _fnGetWidestNode: Hb, _fnGetMaxLenString: Ib, _fnStringToCss: v, _fnSortFlatten: W, _fnSort: ob, _fnSortAria: Kb, _fnSortListener: Xa, _fnSortAttachListener: Oa, _fnSortingClasses: ya, _fnSortData: Jb, _fnSaveState: za, _fnLoadState: Lb, _fnSettingsFromNode: Aa, _fnLog: K, _fnMap: F, _fnBindAction: Ya, _fnCallbackReg: z, _fnCallbackFire: s, _fnLengthOverflow: Ua, _fnRenderer: Pa, _fnDataSource: y, _fnRowAttributes: Na, _fnCalculateEnd: function _fnCalculateEnd() {} });h.fn.dataTable = m;m.$ = h;h.fn.dataTableSettings = m.settings;h.fn.dataTableExt = m.ext;h.fn.DataTable = function (a) {
    return h(this).dataTable(a).api();
  };h.each(m, function (a, b) {
    h.fn.DataTable[a] = b;
  });return h.fn.dataTable;
});

/***/ }),
/* 5 */
/***/ (function(module, exports) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Data can often be a complicated mix of numbers and letters (file names
 * are a common example) and sorting them in a natural manner is quite a
 * difficult problem.
 * 
 * Fortunately a deal of work has already been done in this area by other
 * authors - the following plug-in uses the [naturalSort() function by Jim
 * Palmer](http://www.overset.com/2008/09/01/javascript-natural-sort-algorithm-with-unicode-support) to provide natural sorting in DataTables.
 *
 *  @name Natural sorting
 *  @summary Sort data with a mix of numbers and letters _naturally_.
 *  @author [Jim Palmer](http://www.overset.com/2008/09/01/javascript-natural-sort-algorithm-with-unicode-support)
 *
 *  @example
 *    $('#example').dataTable( {
 *       columnDefs: [
 *         { type: 'natural', targets: 0 }
 *       ]
 *    } );
 */

(function () {

	/*
  * Natural Sort algorithm for Javascript - Version 0.7 - Released under MIT license
  * Author: Jim Palmer (based on chunking idea from Dave Koelle)
  * Contributors: Mike Grier (mgrier.com), Clint Priest, Kyle Adams, guillermo
  * See: http://js-naturalsort.googlecode.com/svn/trunk/naturalSort.js
  */
	function naturalSort(a, b) {
		var re = /(^-?[0-9]+(\.?[0-9]*)[df]?e?[0-9]?$|^0x[0-9a-f]+$|[0-9]+)/gi,
		    sre = /(^[ ]*|[ ]*$)/g,
		    dre = /(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/,
		    hre = /^0x[0-9a-f]+$/i,
		    ore = /^0/,

		// convert all to strings and trim()
		x = a.toString().replace(sre, '') || '',
		    y = b.toString().replace(sre, '') || '',

		// chunk/tokenize
		xN = x.replace(re, '\0$1\0').replace(/\0$/, '').replace(/^\0/, '').split('\0'),
		    yN = y.replace(re, '\0$1\0').replace(/\0$/, '').replace(/^\0/, '').split('\0'),

		// numeric, hex or date detection
		xD = parseInt(x.match(hre), 10) || xN.length !== 1 && x.match(dre) && Date.parse(x),
		    yD = parseInt(y.match(hre), 10) || xD && y.match(dre) && Date.parse(y) || null;

		// first try and sort Hex codes or Dates
		if (yD) {
			if (xD < yD) {
				return -1;
			} else if (xD > yD) {
				return 1;
			}
		}

		// natural sorting through split numeric strings and default strings
		for (var cLoc = 0, numS = Math.max(xN.length, yN.length); cLoc < numS; cLoc++) {
			// find floats not starting with '0', string or 0 if not defined (Clint Priest)
			var oFxNcL = !(xN[cLoc] || '').match(ore) && parseFloat(xN[cLoc], 10) || xN[cLoc] || 0;
			var oFyNcL = !(yN[cLoc] || '').match(ore) && parseFloat(yN[cLoc], 10) || yN[cLoc] || 0;
			// handle numeric vs string comparison - number < string - (Kyle Adams)
			if (isNaN(oFxNcL) !== isNaN(oFyNcL)) {
				return isNaN(oFxNcL) ? 1 : -1;
			}
			// rely on string comparison if different types - i.e. '02' < 2 != '02' < '2'
			else if ((typeof oFxNcL === 'undefined' ? 'undefined' : _typeof(oFxNcL)) !== (typeof oFyNcL === 'undefined' ? 'undefined' : _typeof(oFyNcL))) {
					oFxNcL += '';
					oFyNcL += '';
				}
			if (oFxNcL < oFyNcL) {
				return -1;
			}
			if (oFxNcL > oFyNcL) {
				return 1;
			}
		}
		return 0;
	}

	jQuery.extend(jQuery.fn.dataTableExt.oSort, {
		"natural-asc": function naturalAsc(a, b) {
			return naturalSort(a, b);
		},

		"natural-desc": function naturalDesc(a, b) {
			return naturalSort(a, b) * -1;
		}
	});
})();

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! Select2 4.0.5 | https://github.com/select2/select2/blob/master/LICENSE.md */!function (a) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (a),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = function (b, c) {
    return void 0 === c && (c = "undefined" != typeof window ? require("jquery") : require("jquery")(b)), a(c), c;
  } : a(jQuery);
}(function (a) {
  var b = function () {
    if (a && a.fn && a.fn.select2 && a.fn.select2.amd) var b = a.fn.select2.amd;var b;return function () {
      if (!b || !b.requirejs) {
        b ? c = b : b = {};var a, c, d;!function (b) {
          function e(a, b) {
            return v.call(a, b);
          }function f(a, b) {
            var c,
                d,
                e,
                f,
                g,
                h,
                i,
                j,
                k,
                l,
                m,
                n,
                o = b && b.split("/"),
                p = t.map,
                q = p && p["*"] || {};if (a) {
              for (a = a.split("/"), g = a.length - 1, t.nodeIdCompat && x.test(a[g]) && (a[g] = a[g].replace(x, "")), "." === a[0].charAt(0) && o && (n = o.slice(0, o.length - 1), a = n.concat(a)), k = 0; k < a.length; k++) {
                if ("." === (m = a[k])) a.splice(k, 1), k -= 1;else if (".." === m) {
                  if (0 === k || 1 === k && ".." === a[2] || ".." === a[k - 1]) continue;k > 0 && (a.splice(k - 1, 2), k -= 2);
                }
              }a = a.join("/");
            }if ((o || q) && p) {
              for (c = a.split("/"), k = c.length; k > 0; k -= 1) {
                if (d = c.slice(0, k).join("/"), o) for (l = o.length; l > 0; l -= 1) {
                  if ((e = p[o.slice(0, l).join("/")]) && (e = e[d])) {
                    f = e, h = k;break;
                  }
                }if (f) break;!i && q && q[d] && (i = q[d], j = k);
              }!f && i && (f = i, h = j), f && (c.splice(0, h, f), a = c.join("/"));
            }return a;
          }function g(a, c) {
            return function () {
              var d = w.call(arguments, 0);return "string" != typeof d[0] && 1 === d.length && d.push(null), _o.apply(b, d.concat([a, c]));
            };
          }function h(a) {
            return function (b) {
              return f(b, a);
            };
          }function i(a) {
            return function (b) {
              r[a] = b;
            };
          }function j(a) {
            if (e(s, a)) {
              var c = s[a];delete s[a], u[a] = !0, n.apply(b, c);
            }if (!e(r, a) && !e(u, a)) throw new Error("No " + a);return r[a];
          }function k(a) {
            var b,
                c = a ? a.indexOf("!") : -1;return c > -1 && (b = a.substring(0, c), a = a.substring(c + 1, a.length)), [b, a];
          }function l(a) {
            return a ? k(a) : [];
          }function m(a) {
            return function () {
              return t && t.config && t.config[a] || {};
            };
          }var n,
              _o,
              p,
              q,
              r = {},
              s = {},
              t = {},
              u = {},
              v = Object.prototype.hasOwnProperty,
              w = [].slice,
              x = /\.js$/;p = function p(a, b) {
            var c,
                d = k(a),
                e = d[0],
                g = b[1];return a = d[1], e && (e = f(e, g), c = j(e)), e ? a = c && c.normalize ? c.normalize(a, h(g)) : f(a, g) : (a = f(a, g), d = k(a), e = d[0], a = d[1], e && (c = j(e))), { f: e ? e + "!" + a : a, n: a, pr: e, p: c };
          }, q = { require: function require(a) {
              return g(a);
            }, exports: function exports(a) {
              var b = r[a];return void 0 !== b ? b : r[a] = {};
            }, module: function module(a) {
              return { id: a, uri: "", exports: r[a], config: m(a) };
            } }, n = function n(a, c, d, f) {
            var h,
                k,
                m,
                n,
                o,
                t,
                v,
                w = [],
                x = typeof d === "undefined" ? "undefined" : _typeof(d);if (f = f || a, t = l(f), "undefined" === x || "function" === x) {
              for (c = !c.length && d.length ? ["require", "exports", "module"] : c, o = 0; o < c.length; o += 1) {
                if (n = p(c[o], t), "require" === (k = n.f)) w[o] = q.require(a);else if ("exports" === k) w[o] = q.exports(a), v = !0;else if ("module" === k) h = w[o] = q.module(a);else if (e(r, k) || e(s, k) || e(u, k)) w[o] = j(k);else {
                  if (!n.p) throw new Error(a + " missing " + k);n.p.load(n.n, g(f, !0), i(k), {}), w[o] = r[k];
                }
              }m = d ? d.apply(r[a], w) : void 0, a && (h && h.exports !== b && h.exports !== r[a] ? r[a] = h.exports : m === b && v || (r[a] = m));
            } else a && (r[a] = d);
          }, a = c = _o = function o(a, c, d, e, f) {
            if ("string" == typeof a) return q[a] ? q[a](c) : j(p(a, l(c)).f);if (!a.splice) {
              if (t = a, t.deps && _o(t.deps, t.callback), !c) return;c.splice ? (a = c, c = d, d = null) : a = b;
            }return c = c || function () {}, "function" == typeof d && (d = e, e = f), e ? n(b, a, c, d) : setTimeout(function () {
              n(b, a, c, d);
            }, 4), _o;
          }, _o.config = function (a) {
            return _o(a);
          }, a._defined = r, d = function d(a, b, c) {
            if ("string" != typeof a) throw new Error("See almond README: incorrect module build, no module name");b.splice || (c = b, b = []), e(r, a) || e(s, a) || (s[a] = [a, b, c]);
          }, d.amd = { jQuery: !0 };
        }(), b.requirejs = a, b.require = c, b.define = d;
      }
    }(), b.define("almond", function () {}), b.define("jquery", [], function () {
      var b = a || $;return null == b && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), b;
    }), b.define("select2/utils", ["jquery"], function (a) {
      function b(a) {
        var b = a.prototype,
            c = [];for (var d in b) {
          "function" == typeof b[d] && "constructor" !== d && c.push(d);
        }return c;
      }var c = {};c.Extend = function (a, b) {
        function c() {
          this.constructor = a;
        }var d = {}.hasOwnProperty;for (var e in b) {
          d.call(b, e) && (a[e] = b[e]);
        }return c.prototype = b.prototype, a.prototype = new c(), a.__super__ = b.prototype, a;
      }, c.Decorate = function (a, c) {
        function d() {
          var b = Array.prototype.unshift,
              d = c.prototype.constructor.length,
              e = a.prototype.constructor;d > 0 && (b.call(arguments, a.prototype.constructor), e = c.prototype.constructor), e.apply(this, arguments);
        }function e() {
          this.constructor = d;
        }var f = b(c),
            g = b(a);c.displayName = a.displayName, d.prototype = new e();for (var h = 0; h < g.length; h++) {
          var i = g[h];d.prototype[i] = a.prototype[i];
        }for (var j = function j(a) {
          var b = function b() {};(a in d.prototype) && (b = d.prototype[a]);var e = c.prototype[a];return function () {
            return Array.prototype.unshift.call(arguments, b), e.apply(this, arguments);
          };
        }, k = 0; k < f.length; k++) {
          var l = f[k];d.prototype[l] = j(l);
        }return d;
      };var d = function d() {
        this.listeners = {};
      };return d.prototype.on = function (a, b) {
        this.listeners = this.listeners || {}, a in this.listeners ? this.listeners[a].push(b) : this.listeners[a] = [b];
      }, d.prototype.trigger = function (a) {
        var b = Array.prototype.slice,
            c = b.call(arguments, 1);this.listeners = this.listeners || {}, null == c && (c = []), 0 === c.length && c.push({}), c[0]._type = a, a in this.listeners && this.invoke(this.listeners[a], b.call(arguments, 1)), "*" in this.listeners && this.invoke(this.listeners["*"], arguments);
      }, d.prototype.invoke = function (a, b) {
        for (var c = 0, d = a.length; c < d; c++) {
          a[c].apply(this, b);
        }
      }, c.Observable = d, c.generateChars = function (a) {
        for (var b = "", c = 0; c < a; c++) {
          b += Math.floor(36 * Math.random()).toString(36);
        }return b;
      }, c.bind = function (a, b) {
        return function () {
          a.apply(b, arguments);
        };
      }, c._convertData = function (a) {
        for (var b in a) {
          var c = b.split("-"),
              d = a;if (1 !== c.length) {
            for (var e = 0; e < c.length; e++) {
              var f = c[e];f = f.substring(0, 1).toLowerCase() + f.substring(1), f in d || (d[f] = {}), e == c.length - 1 && (d[f] = a[b]), d = d[f];
            }delete a[b];
          }
        }return a;
      }, c.hasScroll = function (b, c) {
        var d = a(c),
            e = c.style.overflowX,
            f = c.style.overflowY;return (e !== f || "hidden" !== f && "visible" !== f) && ("scroll" === e || "scroll" === f || d.innerHeight() < c.scrollHeight || d.innerWidth() < c.scrollWidth);
      }, c.escapeMarkup = function (a) {
        var b = { "\\": "&#92;", "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#47;" };return "string" != typeof a ? a : String(a).replace(/[&<>"'\/\\]/g, function (a) {
          return b[a];
        });
      }, c.appendMany = function (b, c) {
        if ("1.7" === a.fn.jquery.substr(0, 3)) {
          var d = a();a.map(c, function (a) {
            d = d.add(a);
          }), c = d;
        }b.append(c);
      }, c;
    }), b.define("select2/results", ["jquery", "./utils"], function (a, b) {
      function c(a, b, d) {
        this.$element = a, this.data = d, this.options = b, c.__super__.constructor.call(this);
      }return b.Extend(c, b.Observable), c.prototype.render = function () {
        var b = a('<ul class="select2-results__options" role="tree"></ul>');return this.options.get("multiple") && b.attr("aria-multiselectable", "true"), this.$results = b, b;
      }, c.prototype.clear = function () {
        this.$results.empty();
      }, c.prototype.displayMessage = function (b) {
        var c = this.options.get("escapeMarkup");this.clear(), this.hideLoading();var d = a('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),
            e = this.options.get("translations").get(b.message);d.append(c(e(b.args))), d[0].className += " select2-results__message", this.$results.append(d);
      }, c.prototype.hideMessages = function () {
        this.$results.find(".select2-results__message").remove();
      }, c.prototype.append = function (a) {
        this.hideLoading();var b = [];if (null == a.results || 0 === a.results.length) return void (0 === this.$results.children().length && this.trigger("results:message", { message: "noResults" }));a.results = this.sort(a.results);for (var c = 0; c < a.results.length; c++) {
          var d = a.results[c],
              e = this.option(d);b.push(e);
        }this.$results.append(b);
      }, c.prototype.position = function (a, b) {
        b.find(".select2-results").append(a);
      }, c.prototype.sort = function (a) {
        return this.options.get("sorter")(a);
      }, c.prototype.highlightFirstItem = function () {
        var a = this.$results.find(".select2-results__option[aria-selected]"),
            b = a.filter("[aria-selected=true]");b.length > 0 ? b.first().trigger("mouseenter") : a.first().trigger("mouseenter"), this.ensureHighlightVisible();
      }, c.prototype.setClasses = function () {
        var b = this;this.data.current(function (c) {
          var d = a.map(c, function (a) {
            return a.id.toString();
          });b.$results.find(".select2-results__option[aria-selected]").each(function () {
            var b = a(this),
                c = a.data(this, "data"),
                e = "" + c.id;null != c.element && c.element.selected || null == c.element && a.inArray(e, d) > -1 ? b.attr("aria-selected", "true") : b.attr("aria-selected", "false");
          });
        });
      }, c.prototype.showLoading = function (a) {
        this.hideLoading();var b = this.options.get("translations").get("searching"),
            c = { disabled: !0, loading: !0, text: b(a) },
            d = this.option(c);d.className += " loading-results", this.$results.prepend(d);
      }, c.prototype.hideLoading = function () {
        this.$results.find(".loading-results").remove();
      }, c.prototype.option = function (b) {
        var c = document.createElement("li");c.className = "select2-results__option";var d = { role: "treeitem", "aria-selected": "false" };b.disabled && (delete d["aria-selected"], d["aria-disabled"] = "true"), null == b.id && delete d["aria-selected"], null != b._resultId && (c.id = b._resultId), b.title && (c.title = b.title), b.children && (d.role = "group", d["aria-label"] = b.text, delete d["aria-selected"]);for (var e in d) {
          var f = d[e];c.setAttribute(e, f);
        }if (b.children) {
          var g = a(c),
              h = document.createElement("strong");h.className = "select2-results__group";a(h);this.template(b, h);for (var i = [], j = 0; j < b.children.length; j++) {
            var k = b.children[j],
                l = this.option(k);i.push(l);
          }var m = a("<ul></ul>", { class: "select2-results__options select2-results__options--nested" });m.append(i), g.append(h), g.append(m);
        } else this.template(b, c);return a.data(c, "data", b), c;
      }, c.prototype.bind = function (b, c) {
        var d = this,
            e = b.id + "-results";this.$results.attr("id", e), b.on("results:all", function (a) {
          d.clear(), d.append(a.data), b.isOpen() && (d.setClasses(), d.highlightFirstItem());
        }), b.on("results:append", function (a) {
          d.append(a.data), b.isOpen() && d.setClasses();
        }), b.on("query", function (a) {
          d.hideMessages(), d.showLoading(a);
        }), b.on("select", function () {
          b.isOpen() && (d.setClasses(), d.highlightFirstItem());
        }), b.on("unselect", function () {
          b.isOpen() && (d.setClasses(), d.highlightFirstItem());
        }), b.on("open", function () {
          d.$results.attr("aria-expanded", "true"), d.$results.attr("aria-hidden", "false"), d.setClasses(), d.ensureHighlightVisible();
        }), b.on("close", function () {
          d.$results.attr("aria-expanded", "false"), d.$results.attr("aria-hidden", "true"), d.$results.removeAttr("aria-activedescendant");
        }), b.on("results:toggle", function () {
          var a = d.getHighlightedResults();0 !== a.length && a.trigger("mouseup");
        }), b.on("results:select", function () {
          var a = d.getHighlightedResults();if (0 !== a.length) {
            var b = a.data("data");"true" == a.attr("aria-selected") ? d.trigger("close", {}) : d.trigger("select", { data: b });
          }
        }), b.on("results:previous", function () {
          var a = d.getHighlightedResults(),
              b = d.$results.find("[aria-selected]"),
              c = b.index(a);if (0 !== c) {
            var e = c - 1;0 === a.length && (e = 0);var f = b.eq(e);f.trigger("mouseenter");var g = d.$results.offset().top,
                h = f.offset().top,
                i = d.$results.scrollTop() + (h - g);0 === e ? d.$results.scrollTop(0) : h - g < 0 && d.$results.scrollTop(i);
          }
        }), b.on("results:next", function () {
          var a = d.getHighlightedResults(),
              b = d.$results.find("[aria-selected]"),
              c = b.index(a),
              e = c + 1;if (!(e >= b.length)) {
            var f = b.eq(e);f.trigger("mouseenter");var g = d.$results.offset().top + d.$results.outerHeight(!1),
                h = f.offset().top + f.outerHeight(!1),
                i = d.$results.scrollTop() + h - g;0 === e ? d.$results.scrollTop(0) : h > g && d.$results.scrollTop(i);
          }
        }), b.on("results:focus", function (a) {
          a.element.addClass("select2-results__option--highlighted");
        }), b.on("results:message", function (a) {
          d.displayMessage(a);
        }), a.fn.mousewheel && this.$results.on("mousewheel", function (a) {
          var b = d.$results.scrollTop(),
              c = d.$results.get(0).scrollHeight - b + a.deltaY,
              e = a.deltaY > 0 && b - a.deltaY <= 0,
              f = a.deltaY < 0 && c <= d.$results.height();e ? (d.$results.scrollTop(0), a.preventDefault(), a.stopPropagation()) : f && (d.$results.scrollTop(d.$results.get(0).scrollHeight - d.$results.height()), a.preventDefault(), a.stopPropagation());
        }), this.$results.on("mouseup", ".select2-results__option[aria-selected]", function (b) {
          var c = a(this),
              e = c.data("data");if ("true" === c.attr("aria-selected")) return void (d.options.get("multiple") ? d.trigger("unselect", { originalEvent: b, data: e }) : d.trigger("close", {}));d.trigger("select", { originalEvent: b, data: e });
        }), this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function (b) {
          var c = a(this).data("data");d.getHighlightedResults().removeClass("select2-results__option--highlighted"), d.trigger("results:focus", { data: c, element: a(this) });
        });
      }, c.prototype.getHighlightedResults = function () {
        return this.$results.find(".select2-results__option--highlighted");
      }, c.prototype.destroy = function () {
        this.$results.remove();
      }, c.prototype.ensureHighlightVisible = function () {
        var a = this.getHighlightedResults();if (0 !== a.length) {
          var b = this.$results.find("[aria-selected]"),
              c = b.index(a),
              d = this.$results.offset().top,
              e = a.offset().top,
              f = this.$results.scrollTop() + (e - d),
              g = e - d;f -= 2 * a.outerHeight(!1), c <= 2 ? this.$results.scrollTop(0) : (g > this.$results.outerHeight() || g < 0) && this.$results.scrollTop(f);
        }
      }, c.prototype.template = function (b, c) {
        var d = this.options.get("templateResult"),
            e = this.options.get("escapeMarkup"),
            f = d(b, c);null == f ? c.style.display = "none" : "string" == typeof f ? c.innerHTML = e(f) : a(c).append(f);
      }, c;
    }), b.define("select2/keys", [], function () {
      return { BACKSPACE: 8, TAB: 9, ENTER: 13, SHIFT: 16, CTRL: 17, ALT: 18, ESC: 27, SPACE: 32, PAGE_UP: 33, PAGE_DOWN: 34, END: 35, HOME: 36, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, DELETE: 46 };
    }), b.define("select2/selection/base", ["jquery", "../utils", "../keys"], function (a, b, c) {
      function d(a, b) {
        this.$element = a, this.options = b, d.__super__.constructor.call(this);
      }return b.Extend(d, b.Observable), d.prototype.render = function () {
        var b = a('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');return this._tabindex = 0, null != this.$element.data("old-tabindex") ? this._tabindex = this.$element.data("old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), b.attr("title", this.$element.attr("title")), b.attr("tabindex", this._tabindex), this.$selection = b, b;
      }, d.prototype.bind = function (a, b) {
        var d = this,
            e = (a.id, a.id + "-results");this.container = a, this.$selection.on("focus", function (a) {
          d.trigger("focus", a);
        }), this.$selection.on("blur", function (a) {
          d._handleBlur(a);
        }), this.$selection.on("keydown", function (a) {
          d.trigger("keypress", a), a.which === c.SPACE && a.preventDefault();
        }), a.on("results:focus", function (a) {
          d.$selection.attr("aria-activedescendant", a.data._resultId);
        }), a.on("selection:update", function (a) {
          d.update(a.data);
        }), a.on("open", function () {
          d.$selection.attr("aria-expanded", "true"), d.$selection.attr("aria-owns", e), d._attachCloseHandler(a);
        }), a.on("close", function () {
          d.$selection.attr("aria-expanded", "false"), d.$selection.removeAttr("aria-activedescendant"), d.$selection.removeAttr("aria-owns"), d.$selection.focus(), d._detachCloseHandler(a);
        }), a.on("enable", function () {
          d.$selection.attr("tabindex", d._tabindex);
        }), a.on("disable", function () {
          d.$selection.attr("tabindex", "-1");
        });
      }, d.prototype._handleBlur = function (b) {
        var c = this;window.setTimeout(function () {
          document.activeElement == c.$selection[0] || a.contains(c.$selection[0], document.activeElement) || c.trigger("blur", b);
        }, 1);
      }, d.prototype._attachCloseHandler = function (b) {
        a(document.body).on("mousedown.select2." + b.id, function (b) {
          var c = a(b.target),
              d = c.closest(".select2");a(".select2.select2-container--open").each(function () {
            var b = a(this);this != d[0] && b.data("element").select2("close");
          });
        });
      }, d.prototype._detachCloseHandler = function (b) {
        a(document.body).off("mousedown.select2." + b.id);
      }, d.prototype.position = function (a, b) {
        b.find(".selection").append(a);
      }, d.prototype.destroy = function () {
        this._detachCloseHandler(this.container);
      }, d.prototype.update = function (a) {
        throw new Error("The `update` method must be defined in child classes.");
      }, d;
    }), b.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function (a, b, c, d) {
      function e() {
        e.__super__.constructor.apply(this, arguments);
      }return c.Extend(e, b), e.prototype.render = function () {
        var a = e.__super__.render.call(this);return a.addClass("select2-selection--single"), a.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), a;
      }, e.prototype.bind = function (a, b) {
        var c = this;e.__super__.bind.apply(this, arguments);var d = a.id + "-container";this.$selection.find(".select2-selection__rendered").attr("id", d), this.$selection.attr("aria-labelledby", d), this.$selection.on("mousedown", function (a) {
          1 === a.which && c.trigger("toggle", { originalEvent: a });
        }), this.$selection.on("focus", function (a) {}), this.$selection.on("blur", function (a) {}), a.on("focus", function (b) {
          a.isOpen() || c.$selection.focus();
        }), a.on("selection:update", function (a) {
          c.update(a.data);
        });
      }, e.prototype.clear = function () {
        this.$selection.find(".select2-selection__rendered").empty();
      }, e.prototype.display = function (a, b) {
        var c = this.options.get("templateSelection");return this.options.get("escapeMarkup")(c(a, b));
      }, e.prototype.selectionContainer = function () {
        return a("<span></span>");
      }, e.prototype.update = function (a) {
        if (0 === a.length) return void this.clear();var b = a[0],
            c = this.$selection.find(".select2-selection__rendered"),
            d = this.display(b, c);c.empty().append(d), c.prop("title", b.title || b.text);
      }, e;
    }), b.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function (a, b, c) {
      function d(a, b) {
        d.__super__.constructor.apply(this, arguments);
      }return c.Extend(d, b), d.prototype.render = function () {
        var a = d.__super__.render.call(this);return a.addClass("select2-selection--multiple"), a.html('<ul class="select2-selection__rendered"></ul>'), a;
      }, d.prototype.bind = function (b, c) {
        var e = this;d.__super__.bind.apply(this, arguments), this.$selection.on("click", function (a) {
          e.trigger("toggle", { originalEvent: a });
        }), this.$selection.on("click", ".select2-selection__choice__remove", function (b) {
          if (!e.options.get("disabled")) {
            var c = a(this),
                d = c.parent(),
                f = d.data("data");e.trigger("unselect", { originalEvent: b, data: f });
          }
        });
      }, d.prototype.clear = function () {
        this.$selection.find(".select2-selection__rendered").empty();
      }, d.prototype.display = function (a, b) {
        var c = this.options.get("templateSelection");return this.options.get("escapeMarkup")(c(a, b));
      }, d.prototype.selectionContainer = function () {
        return a('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>');
      }, d.prototype.update = function (a) {
        if (this.clear(), 0 !== a.length) {
          for (var b = [], d = 0; d < a.length; d++) {
            var e = a[d],
                f = this.selectionContainer(),
                g = this.display(e, f);f.append(g), f.prop("title", e.title || e.text), f.data("data", e), b.push(f);
          }var h = this.$selection.find(".select2-selection__rendered");c.appendMany(h, b);
        }
      }, d;
    }), b.define("select2/selection/placeholder", ["../utils"], function (a) {
      function b(a, b, c) {
        this.placeholder = this.normalizePlaceholder(c.get("placeholder")), a.call(this, b, c);
      }return b.prototype.normalizePlaceholder = function (a, b) {
        return "string" == typeof b && (b = { id: "", text: b }), b;
      }, b.prototype.createPlaceholder = function (a, b) {
        var c = this.selectionContainer();return c.html(this.display(b)), c.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), c;
      }, b.prototype.update = function (a, b) {
        var c = 1 == b.length && b[0].id != this.placeholder.id;if (b.length > 1 || c) return a.call(this, b);this.clear();var d = this.createPlaceholder(this.placeholder);this.$selection.find(".select2-selection__rendered").append(d);
      }, b;
    }), b.define("select2/selection/allowClear", ["jquery", "../keys"], function (a, b) {
      function c() {}return c.prototype.bind = function (a, b, c) {
        var d = this;a.call(this, b, c), null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), this.$selection.on("mousedown", ".select2-selection__clear", function (a) {
          d._handleClear(a);
        }), b.on("keypress", function (a) {
          d._handleKeyboardClear(a, b);
        });
      }, c.prototype._handleClear = function (a, b) {
        if (!this.options.get("disabled")) {
          var c = this.$selection.find(".select2-selection__clear");if (0 !== c.length) {
            b.stopPropagation();for (var d = c.data("data"), e = 0; e < d.length; e++) {
              var f = { data: d[e] };if (this.trigger("unselect", f), f.prevented) return;
            }this.$element.val(this.placeholder.id).trigger("change"), this.trigger("toggle", {});
          }
        }
      }, c.prototype._handleKeyboardClear = function (a, c, d) {
        d.isOpen() || c.which != b.DELETE && c.which != b.BACKSPACE || this._handleClear(c);
      }, c.prototype.update = function (b, c) {
        if (b.call(this, c), !(this.$selection.find(".select2-selection__placeholder").length > 0 || 0 === c.length)) {
          var d = a('<span class="select2-selection__clear">&times;</span>');d.data("data", c), this.$selection.find(".select2-selection__rendered").prepend(d);
        }
      }, c;
    }), b.define("select2/selection/search", ["jquery", "../utils", "../keys"], function (a, b, c) {
      function d(a, b, c) {
        a.call(this, b, c);
      }return d.prototype.render = function (b) {
        var c = a('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');this.$searchContainer = c, this.$search = c.find("input");var d = b.call(this);return this._transferTabIndex(), d;
      }, d.prototype.bind = function (a, b, d) {
        var e = this;a.call(this, b, d), b.on("open", function () {
          e.$search.trigger("focus");
        }), b.on("close", function () {
          e.$search.val(""), e.$search.removeAttr("aria-activedescendant"), e.$search.trigger("focus");
        }), b.on("enable", function () {
          e.$search.prop("disabled", !1), e._transferTabIndex();
        }), b.on("disable", function () {
          e.$search.prop("disabled", !0);
        }), b.on("focus", function (a) {
          e.$search.trigger("focus");
        }), b.on("results:focus", function (a) {
          e.$search.attr("aria-activedescendant", a.id);
        }), this.$selection.on("focusin", ".select2-search--inline", function (a) {
          e.trigger("focus", a);
        }), this.$selection.on("focusout", ".select2-search--inline", function (a) {
          e._handleBlur(a);
        }), this.$selection.on("keydown", ".select2-search--inline", function (a) {
          if (a.stopPropagation(), e.trigger("keypress", a), e._keyUpPrevented = a.isDefaultPrevented(), a.which === c.BACKSPACE && "" === e.$search.val()) {
            var b = e.$searchContainer.prev(".select2-selection__choice");if (b.length > 0) {
              var d = b.data("data");e.searchRemoveChoice(d), a.preventDefault();
            }
          }
        });var f = document.documentMode,
            g = f && f <= 11;this.$selection.on("input.searchcheck", ".select2-search--inline", function (a) {
          if (g) return void e.$selection.off("input.search input.searchcheck");e.$selection.off("keyup.search");
        }), this.$selection.on("keyup.search input.search", ".select2-search--inline", function (a) {
          if (g && "input" === a.type) return void e.$selection.off("input.search input.searchcheck");var b = a.which;b != c.SHIFT && b != c.CTRL && b != c.ALT && b != c.TAB && e.handleSearch(a);
        });
      }, d.prototype._transferTabIndex = function (a) {
        this.$search.attr("tabindex", this.$selection.attr("tabindex")), this.$selection.attr("tabindex", "-1");
      }, d.prototype.createPlaceholder = function (a, b) {
        this.$search.attr("placeholder", b.text);
      }, d.prototype.update = function (a, b) {
        var c = this.$search[0] == document.activeElement;this.$search.attr("placeholder", ""), a.call(this, b), this.$selection.find(".select2-selection__rendered").append(this.$searchContainer), this.resizeSearch(), c && this.$search.focus();
      }, d.prototype.handleSearch = function () {
        if (this.resizeSearch(), !this._keyUpPrevented) {
          var a = this.$search.val();this.trigger("query", { term: a });
        }this._keyUpPrevented = !1;
      }, d.prototype.searchRemoveChoice = function (a, b) {
        this.trigger("unselect", { data: b }), this.$search.val(b.text), this.handleSearch();
      }, d.prototype.resizeSearch = function () {
        this.$search.css("width", "25px");var a = "";if ("" !== this.$search.attr("placeholder")) a = this.$selection.find(".select2-selection__rendered").innerWidth();else {
          a = .75 * (this.$search.val().length + 1) + "em";
        }this.$search.css("width", a);
      }, d;
    }), b.define("select2/selection/eventRelay", ["jquery"], function (a) {
      function b() {}return b.prototype.bind = function (b, c, d) {
        var e = this,
            f = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting"],
            g = ["opening", "closing", "selecting", "unselecting"];b.call(this, c, d), c.on("*", function (b, c) {
          if (-1 !== a.inArray(b, f)) {
            c = c || {};var d = a.Event("select2:" + b, { params: c });e.$element.trigger(d), -1 !== a.inArray(b, g) && (c.prevented = d.isDefaultPrevented());
          }
        });
      }, b;
    }), b.define("select2/translation", ["jquery", "require"], function (a, b) {
      function c(a) {
        this.dict = a || {};
      }return c.prototype.all = function () {
        return this.dict;
      }, c.prototype.get = function (a) {
        return this.dict[a];
      }, c.prototype.extend = function (b) {
        this.dict = a.extend({}, b.all(), this.dict);
      }, c._cache = {}, c.loadPath = function (a) {
        if (!(a in c._cache)) {
          var d = b(a);c._cache[a] = d;
        }return new c(c._cache[a]);
      }, c;
    }), b.define("select2/diacritics", [], function () {
      return { "Ⓐ": "A", "Ａ": "A", "À": "A", "Á": "A", "Â": "A", "Ầ": "A", "Ấ": "A", "Ẫ": "A", "Ẩ": "A", "Ã": "A", "Ā": "A", "Ă": "A", "Ằ": "A", "Ắ": "A", "Ẵ": "A", "Ẳ": "A", "Ȧ": "A", "Ǡ": "A", "Ä": "A", "Ǟ": "A", "Ả": "A", "Å": "A", "Ǻ": "A", "Ǎ": "A", "Ȁ": "A", "Ȃ": "A", "Ạ": "A", "Ậ": "A", "Ặ": "A", "Ḁ": "A", "Ą": "A", "Ⱥ": "A", "Ɐ": "A", "Ꜳ": "AA", "Æ": "AE", "Ǽ": "AE", "Ǣ": "AE", "Ꜵ": "AO", "Ꜷ": "AU", "Ꜹ": "AV", "Ꜻ": "AV", "Ꜽ": "AY", "Ⓑ": "B", "Ｂ": "B", "Ḃ": "B", "Ḅ": "B", "Ḇ": "B", "Ƀ": "B", "Ƃ": "B", "Ɓ": "B", "Ⓒ": "C", "Ｃ": "C", "Ć": "C", "Ĉ": "C", "Ċ": "C", "Č": "C", "Ç": "C", "Ḉ": "C", "Ƈ": "C", "Ȼ": "C", "Ꜿ": "C", "Ⓓ": "D", "Ｄ": "D", "Ḋ": "D", "Ď": "D", "Ḍ": "D", "Ḑ": "D", "Ḓ": "D", "Ḏ": "D", "Đ": "D", "Ƌ": "D", "Ɗ": "D", "Ɖ": "D", "Ꝺ": "D", "Ǳ": "DZ", "Ǆ": "DZ", "ǲ": "Dz", "ǅ": "Dz", "Ⓔ": "E", "Ｅ": "E", "È": "E", "É": "E", "Ê": "E", "Ề": "E", "Ế": "E", "Ễ": "E", "Ể": "E", "Ẽ": "E", "Ē": "E", "Ḕ": "E", "Ḗ": "E", "Ĕ": "E", "Ė": "E", "Ë": "E", "Ẻ": "E", "Ě": "E", "Ȅ": "E", "Ȇ": "E", "Ẹ": "E", "Ệ": "E", "Ȩ": "E", "Ḝ": "E", "Ę": "E", "Ḙ": "E", "Ḛ": "E", "Ɛ": "E", "Ǝ": "E", "Ⓕ": "F", "Ｆ": "F", "Ḟ": "F", "Ƒ": "F", "Ꝼ": "F", "Ⓖ": "G", "Ｇ": "G", "Ǵ": "G", "Ĝ": "G", "Ḡ": "G", "Ğ": "G", "Ġ": "G", "Ǧ": "G", "Ģ": "G", "Ǥ": "G", "Ɠ": "G", "Ꞡ": "G", "Ᵹ": "G", "Ꝿ": "G", "Ⓗ": "H", "Ｈ": "H", "Ĥ": "H", "Ḣ": "H", "Ḧ": "H", "Ȟ": "H", "Ḥ": "H", "Ḩ": "H", "Ḫ": "H", "Ħ": "H", "Ⱨ": "H", "Ⱶ": "H", "Ɥ": "H", "Ⓘ": "I", "Ｉ": "I", "Ì": "I", "Í": "I", "Î": "I", "Ĩ": "I", "Ī": "I", "Ĭ": "I", "İ": "I", "Ï": "I", "Ḯ": "I", "Ỉ": "I", "Ǐ": "I", "Ȉ": "I", "Ȋ": "I", "Ị": "I", "Į": "I", "Ḭ": "I", "Ɨ": "I", "Ⓙ": "J", "Ｊ": "J", "Ĵ": "J", "Ɉ": "J", "Ⓚ": "K", "Ｋ": "K", "Ḱ": "K", "Ǩ": "K", "Ḳ": "K", "Ķ": "K", "Ḵ": "K", "Ƙ": "K", "Ⱪ": "K", "Ꝁ": "K", "Ꝃ": "K", "Ꝅ": "K", "Ꞣ": "K", "Ⓛ": "L", "Ｌ": "L", "Ŀ": "L", "Ĺ": "L", "Ľ": "L", "Ḷ": "L", "Ḹ": "L", "Ļ": "L", "Ḽ": "L", "Ḻ": "L", "Ł": "L", "Ƚ": "L", "Ɫ": "L", "Ⱡ": "L", "Ꝉ": "L", "Ꝇ": "L", "Ꞁ": "L", "Ǉ": "LJ", "ǈ": "Lj", "Ⓜ": "M", "Ｍ": "M", "Ḿ": "M", "Ṁ": "M", "Ṃ": "M", "Ɱ": "M", "Ɯ": "M", "Ⓝ": "N", "Ｎ": "N", "Ǹ": "N", "Ń": "N", "Ñ": "N", "Ṅ": "N", "Ň": "N", "Ṇ": "N", "Ņ": "N", "Ṋ": "N", "Ṉ": "N", "Ƞ": "N", "Ɲ": "N", "Ꞑ": "N", "Ꞥ": "N", "Ǌ": "NJ", "ǋ": "Nj", "Ⓞ": "O", "Ｏ": "O", "Ò": "O", "Ó": "O", "Ô": "O", "Ồ": "O", "Ố": "O", "Ỗ": "O", "Ổ": "O", "Õ": "O", "Ṍ": "O", "Ȭ": "O", "Ṏ": "O", "Ō": "O", "Ṑ": "O", "Ṓ": "O", "Ŏ": "O", "Ȯ": "O", "Ȱ": "O", "Ö": "O", "Ȫ": "O", "Ỏ": "O", "Ő": "O", "Ǒ": "O", "Ȍ": "O", "Ȏ": "O", "Ơ": "O", "Ờ": "O", "Ớ": "O", "Ỡ": "O", "Ở": "O", "Ợ": "O", "Ọ": "O", "Ộ": "O", "Ǫ": "O", "Ǭ": "O", "Ø": "O", "Ǿ": "O", "Ɔ": "O", "Ɵ": "O", "Ꝋ": "O", "Ꝍ": "O", "Ƣ": "OI", "Ꝏ": "OO", "Ȣ": "OU", "Ⓟ": "P", "Ｐ": "P", "Ṕ": "P", "Ṗ": "P", "Ƥ": "P", "Ᵽ": "P", "Ꝑ": "P", "Ꝓ": "P", "Ꝕ": "P", "Ⓠ": "Q", "Ｑ": "Q", "Ꝗ": "Q", "Ꝙ": "Q", "Ɋ": "Q", "Ⓡ": "R", "Ｒ": "R", "Ŕ": "R", "Ṙ": "R", "Ř": "R", "Ȑ": "R", "Ȓ": "R", "Ṛ": "R", "Ṝ": "R", "Ŗ": "R", "Ṟ": "R", "Ɍ": "R", "Ɽ": "R", "Ꝛ": "R", "Ꞧ": "R", "Ꞃ": "R", "Ⓢ": "S", "Ｓ": "S", "ẞ": "S", "Ś": "S", "Ṥ": "S", "Ŝ": "S", "Ṡ": "S", "Š": "S", "Ṧ": "S", "Ṣ": "S", "Ṩ": "S", "Ș": "S", "Ş": "S", "Ȿ": "S", "Ꞩ": "S", "Ꞅ": "S", "Ⓣ": "T", "Ｔ": "T", "Ṫ": "T", "Ť": "T", "Ṭ": "T", "Ț": "T", "Ţ": "T", "Ṱ": "T", "Ṯ": "T", "Ŧ": "T", "Ƭ": "T", "Ʈ": "T", "Ⱦ": "T", "Ꞇ": "T", "Ꜩ": "TZ", "Ⓤ": "U", "Ｕ": "U", "Ù": "U", "Ú": "U", "Û": "U", "Ũ": "U", "Ṹ": "U", "Ū": "U", "Ṻ": "U", "Ŭ": "U", "Ü": "U", "Ǜ": "U", "Ǘ": "U", "Ǖ": "U", "Ǚ": "U", "Ủ": "U", "Ů": "U", "Ű": "U", "Ǔ": "U", "Ȕ": "U", "Ȗ": "U", "Ư": "U", "Ừ": "U", "Ứ": "U", "Ữ": "U", "Ử": "U", "Ự": "U", "Ụ": "U", "Ṳ": "U", "Ų": "U", "Ṷ": "U", "Ṵ": "U", "Ʉ": "U", "Ⓥ": "V", "Ｖ": "V", "Ṽ": "V", "Ṿ": "V", "Ʋ": "V", "Ꝟ": "V", "Ʌ": "V", "Ꝡ": "VY", "Ⓦ": "W", "Ｗ": "W", "Ẁ": "W", "Ẃ": "W", "Ŵ": "W", "Ẇ": "W", "Ẅ": "W", "Ẉ": "W", "Ⱳ": "W", "Ⓧ": "X", "Ｘ": "X", "Ẋ": "X", "Ẍ": "X", "Ⓨ": "Y", "Ｙ": "Y", "Ỳ": "Y", "Ý": "Y", "Ŷ": "Y", "Ỹ": "Y", "Ȳ": "Y", "Ẏ": "Y", "Ÿ": "Y", "Ỷ": "Y", "Ỵ": "Y", "Ƴ": "Y", "Ɏ": "Y", "Ỿ": "Y", "Ⓩ": "Z", "Ｚ": "Z", "Ź": "Z", "Ẑ": "Z", "Ż": "Z", "Ž": "Z", "Ẓ": "Z", "Ẕ": "Z", "Ƶ": "Z", "Ȥ": "Z", "Ɀ": "Z", "Ⱬ": "Z", "Ꝣ": "Z", "ⓐ": "a", "ａ": "a", "ẚ": "a", "à": "a", "á": "a", "â": "a", "ầ": "a", "ấ": "a", "ẫ": "a", "ẩ": "a", "ã": "a", "ā": "a", "ă": "a", "ằ": "a", "ắ": "a", "ẵ": "a", "ẳ": "a", "ȧ": "a", "ǡ": "a", "ä": "a", "ǟ": "a", "ả": "a", "å": "a", "ǻ": "a", "ǎ": "a", "ȁ": "a", "ȃ": "a", "ạ": "a", "ậ": "a", "ặ": "a", "ḁ": "a", "ą": "a", "ⱥ": "a", "ɐ": "a", "ꜳ": "aa", "æ": "ae", "ǽ": "ae", "ǣ": "ae", "ꜵ": "ao", "ꜷ": "au", "ꜹ": "av", "ꜻ": "av", "ꜽ": "ay", "ⓑ": "b", "ｂ": "b", "ḃ": "b", "ḅ": "b", "ḇ": "b", "ƀ": "b", "ƃ": "b", "ɓ": "b", "ⓒ": "c", "ｃ": "c", "ć": "c", "ĉ": "c", "ċ": "c", "č": "c", "ç": "c", "ḉ": "c", "ƈ": "c", "ȼ": "c", "ꜿ": "c", "ↄ": "c", "ⓓ": "d", "ｄ": "d", "ḋ": "d", "ď": "d", "ḍ": "d", "ḑ": "d", "ḓ": "d", "ḏ": "d", "đ": "d", "ƌ": "d", "ɖ": "d", "ɗ": "d", "ꝺ": "d", "ǳ": "dz", "ǆ": "dz", "ⓔ": "e", "ｅ": "e", "è": "e", "é": "e", "ê": "e", "ề": "e", "ế": "e", "ễ": "e", "ể": "e", "ẽ": "e", "ē": "e", "ḕ": "e", "ḗ": "e", "ĕ": "e", "ė": "e", "ë": "e", "ẻ": "e", "ě": "e", "ȅ": "e", "ȇ": "e", "ẹ": "e", "ệ": "e", "ȩ": "e", "ḝ": "e", "ę": "e", "ḙ": "e", "ḛ": "e", "ɇ": "e", "ɛ": "e", "ǝ": "e", "ⓕ": "f", "ｆ": "f", "ḟ": "f", "ƒ": "f", "ꝼ": "f", "ⓖ": "g", "ｇ": "g", "ǵ": "g", "ĝ": "g", "ḡ": "g", "ğ": "g", "ġ": "g", "ǧ": "g", "ģ": "g", "ǥ": "g", "ɠ": "g", "ꞡ": "g", "ᵹ": "g", "ꝿ": "g", "ⓗ": "h", "ｈ": "h", "ĥ": "h", "ḣ": "h", "ḧ": "h", "ȟ": "h", "ḥ": "h", "ḩ": "h", "ḫ": "h", "ẖ": "h", "ħ": "h", "ⱨ": "h", "ⱶ": "h", "ɥ": "h", "ƕ": "hv", "ⓘ": "i", "ｉ": "i", "ì": "i", "í": "i", "î": "i", "ĩ": "i", "ī": "i", "ĭ": "i", "ï": "i", "ḯ": "i", "ỉ": "i", "ǐ": "i", "ȉ": "i", "ȋ": "i", "ị": "i", "į": "i", "ḭ": "i", "ɨ": "i", "ı": "i", "ⓙ": "j", "ｊ": "j", "ĵ": "j", "ǰ": "j", "ɉ": "j", "ⓚ": "k", "ｋ": "k", "ḱ": "k", "ǩ": "k", "ḳ": "k", "ķ": "k", "ḵ": "k", "ƙ": "k", "ⱪ": "k", "ꝁ": "k", "ꝃ": "k", "ꝅ": "k", "ꞣ": "k", "ⓛ": "l", "ｌ": "l", "ŀ": "l", "ĺ": "l", "ľ": "l", "ḷ": "l", "ḹ": "l", "ļ": "l", "ḽ": "l", "ḻ": "l", "ſ": "l", "ł": "l", "ƚ": "l", "ɫ": "l", "ⱡ": "l", "ꝉ": "l", "ꞁ": "l", "ꝇ": "l", "ǉ": "lj", "ⓜ": "m", "ｍ": "m", "ḿ": "m", "ṁ": "m", "ṃ": "m", "ɱ": "m", "ɯ": "m", "ⓝ": "n", "ｎ": "n", "ǹ": "n", "ń": "n", "ñ": "n", "ṅ": "n", "ň": "n", "ṇ": "n", "ņ": "n", "ṋ": "n", "ṉ": "n", "ƞ": "n", "ɲ": "n", "ŉ": "n", "ꞑ": "n", "ꞥ": "n", "ǌ": "nj", "ⓞ": "o", "ｏ": "o", "ò": "o", "ó": "o", "ô": "o", "ồ": "o", "ố": "o", "ỗ": "o", "ổ": "o", "õ": "o", "ṍ": "o", "ȭ": "o", "ṏ": "o", "ō": "o", "ṑ": "o", "ṓ": "o", "ŏ": "o", "ȯ": "o", "ȱ": "o", "ö": "o", "ȫ": "o", "ỏ": "o", "ő": "o", "ǒ": "o", "ȍ": "o", "ȏ": "o", "ơ": "o", "ờ": "o", "ớ": "o", "ỡ": "o", "ở": "o", "ợ": "o", "ọ": "o", "ộ": "o", "ǫ": "o", "ǭ": "o", "ø": "o", "ǿ": "o", "ɔ": "o", "ꝋ": "o", "ꝍ": "o", "ɵ": "o", "ƣ": "oi", "ȣ": "ou", "ꝏ": "oo", "ⓟ": "p", "ｐ": "p", "ṕ": "p", "ṗ": "p", "ƥ": "p", "ᵽ": "p", "ꝑ": "p", "ꝓ": "p", "ꝕ": "p", "ⓠ": "q", "ｑ": "q", "ɋ": "q", "ꝗ": "q", "ꝙ": "q", "ⓡ": "r", "ｒ": "r", "ŕ": "r", "ṙ": "r", "ř": "r", "ȑ": "r", "ȓ": "r", "ṛ": "r", "ṝ": "r", "ŗ": "r", "ṟ": "r", "ɍ": "r", "ɽ": "r", "ꝛ": "r", "ꞧ": "r", "ꞃ": "r", "ⓢ": "s", "ｓ": "s", "ß": "s", "ś": "s", "ṥ": "s", "ŝ": "s", "ṡ": "s", "š": "s", "ṧ": "s", "ṣ": "s", "ṩ": "s", "ș": "s", "ş": "s", "ȿ": "s", "ꞩ": "s", "ꞅ": "s", "ẛ": "s", "ⓣ": "t", "ｔ": "t", "ṫ": "t", "ẗ": "t", "ť": "t", "ṭ": "t", "ț": "t", "ţ": "t", "ṱ": "t", "ṯ": "t", "ŧ": "t", "ƭ": "t", "ʈ": "t", "ⱦ": "t", "ꞇ": "t", "ꜩ": "tz", "ⓤ": "u", "ｕ": "u", "ù": "u", "ú": "u", "û": "u", "ũ": "u", "ṹ": "u", "ū": "u", "ṻ": "u", "ŭ": "u", "ü": "u", "ǜ": "u", "ǘ": "u", "ǖ": "u", "ǚ": "u", "ủ": "u", "ů": "u", "ű": "u", "ǔ": "u", "ȕ": "u", "ȗ": "u", "ư": "u", "ừ": "u", "ứ": "u", "ữ": "u", "ử": "u", "ự": "u", "ụ": "u", "ṳ": "u", "ų": "u", "ṷ": "u", "ṵ": "u", "ʉ": "u", "ⓥ": "v", "ｖ": "v", "ṽ": "v", "ṿ": "v", "ʋ": "v", "ꝟ": "v", "ʌ": "v", "ꝡ": "vy", "ⓦ": "w", "ｗ": "w", "ẁ": "w", "ẃ": "w", "ŵ": "w", "ẇ": "w", "ẅ": "w", "ẘ": "w", "ẉ": "w", "ⱳ": "w", "ⓧ": "x", "ｘ": "x", "ẋ": "x", "ẍ": "x", "ⓨ": "y", "ｙ": "y", "ỳ": "y", "ý": "y", "ŷ": "y", "ỹ": "y", "ȳ": "y", "ẏ": "y", "ÿ": "y", "ỷ": "y", "ẙ": "y", "ỵ": "y", "ƴ": "y", "ɏ": "y", "ỿ": "y", "ⓩ": "z", "ｚ": "z", "ź": "z", "ẑ": "z", "ż": "z", "ž": "z", "ẓ": "z", "ẕ": "z", "ƶ": "z", "ȥ": "z", "ɀ": "z", "ⱬ": "z", "ꝣ": "z", "Ά": "Α", "Έ": "Ε", "Ή": "Η", "Ί": "Ι", "Ϊ": "Ι", "Ό": "Ο", "Ύ": "Υ", "Ϋ": "Υ", "Ώ": "Ω", "ά": "α", "έ": "ε", "ή": "η", "ί": "ι", "ϊ": "ι", "ΐ": "ι", "ό": "ο", "ύ": "υ", "ϋ": "υ", "ΰ": "υ", "ω": "ω", "ς": "σ" };
    }), b.define("select2/data/base", ["../utils"], function (a) {
      function b(a, c) {
        b.__super__.constructor.call(this);
      }return a.Extend(b, a.Observable), b.prototype.current = function (a) {
        throw new Error("The `current` method must be defined in child classes.");
      }, b.prototype.query = function (a, b) {
        throw new Error("The `query` method must be defined in child classes.");
      }, b.prototype.bind = function (a, b) {}, b.prototype.destroy = function () {}, b.prototype.generateResultId = function (b, c) {
        var d = b.id + "-result-";return d += a.generateChars(4), null != c.id ? d += "-" + c.id.toString() : d += "-" + a.generateChars(4), d;
      }, b;
    }), b.define("select2/data/select", ["./base", "../utils", "jquery"], function (a, b, c) {
      function d(a, b) {
        this.$element = a, this.options = b, d.__super__.constructor.call(this);
      }return b.Extend(d, a), d.prototype.current = function (a) {
        var b = [],
            d = this;this.$element.find(":selected").each(function () {
          var a = c(this),
              e = d.item(a);b.push(e);
        }), a(b);
      }, d.prototype.select = function (a) {
        var b = this;if (a.selected = !0, c(a.element).is("option")) return a.element.selected = !0, void this.$element.trigger("change");if (this.$element.prop("multiple")) this.current(function (d) {
          var e = [];a = [a], a.push.apply(a, d);for (var f = 0; f < a.length; f++) {
            var g = a[f].id;-1 === c.inArray(g, e) && e.push(g);
          }b.$element.val(e), b.$element.trigger("change");
        });else {
          var d = a.id;this.$element.val(d), this.$element.trigger("change");
        }
      }, d.prototype.unselect = function (a) {
        var b = this;if (this.$element.prop("multiple")) {
          if (a.selected = !1, c(a.element).is("option")) return a.element.selected = !1, void this.$element.trigger("change");this.current(function (d) {
            for (var e = [], f = 0; f < d.length; f++) {
              var g = d[f].id;g !== a.id && -1 === c.inArray(g, e) && e.push(g);
            }b.$element.val(e), b.$element.trigger("change");
          });
        }
      }, d.prototype.bind = function (a, b) {
        var c = this;this.container = a, a.on("select", function (a) {
          c.select(a.data);
        }), a.on("unselect", function (a) {
          c.unselect(a.data);
        });
      }, d.prototype.destroy = function () {
        this.$element.find("*").each(function () {
          c.removeData(this, "data");
        });
      }, d.prototype.query = function (a, b) {
        var d = [],
            e = this;this.$element.children().each(function () {
          var b = c(this);if (b.is("option") || b.is("optgroup")) {
            var f = e.item(b),
                g = e.matches(a, f);null !== g && d.push(g);
          }
        }), b({ results: d });
      }, d.prototype.addOptions = function (a) {
        b.appendMany(this.$element, a);
      }, d.prototype.option = function (a) {
        var b;a.children ? (b = document.createElement("optgroup"), b.label = a.text) : (b = document.createElement("option"), void 0 !== b.textContent ? b.textContent = a.text : b.innerText = a.text), void 0 !== a.id && (b.value = a.id), a.disabled && (b.disabled = !0), a.selected && (b.selected = !0), a.title && (b.title = a.title);var d = c(b),
            e = this._normalizeItem(a);return e.element = b, c.data(b, "data", e), d;
      }, d.prototype.item = function (a) {
        var b = {};if (null != (b = c.data(a[0], "data"))) return b;if (a.is("option")) b = { id: a.val(), text: a.text(), disabled: a.prop("disabled"), selected: a.prop("selected"), title: a.prop("title") };else if (a.is("optgroup")) {
          b = { text: a.prop("label"), children: [], title: a.prop("title") };for (var d = a.children("option"), e = [], f = 0; f < d.length; f++) {
            var g = c(d[f]),
                h = this.item(g);e.push(h);
          }b.children = e;
        }return b = this._normalizeItem(b), b.element = a[0], c.data(a[0], "data", b), b;
      }, d.prototype._normalizeItem = function (a) {
        c.isPlainObject(a) || (a = { id: a, text: a }), a = c.extend({}, { text: "" }, a);var b = { selected: !1, disabled: !1 };return null != a.id && (a.id = a.id.toString()), null != a.text && (a.text = a.text.toString()), null == a._resultId && a.id && null != this.container && (a._resultId = this.generateResultId(this.container, a)), c.extend({}, b, a);
      }, d.prototype.matches = function (a, b) {
        return this.options.get("matcher")(a, b);
      }, d;
    }), b.define("select2/data/array", ["./select", "../utils", "jquery"], function (a, b, c) {
      function d(a, b) {
        var c = b.get("data") || [];d.__super__.constructor.call(this, a, b), this.addOptions(this.convertToOptions(c));
      }return b.Extend(d, a), d.prototype.select = function (a) {
        var b = this.$element.find("option").filter(function (b, c) {
          return c.value == a.id.toString();
        });0 === b.length && (b = this.option(a), this.addOptions(b)), d.__super__.select.call(this, a);
      }, d.prototype.convertToOptions = function (a) {
        function d(a) {
          return function () {
            return c(this).val() == a.id;
          };
        }for (var e = this, f = this.$element.find("option"), g = f.map(function () {
          return e.item(c(this)).id;
        }).get(), h = [], i = 0; i < a.length; i++) {
          var j = this._normalizeItem(a[i]);if (c.inArray(j.id, g) >= 0) {
            var k = f.filter(d(j)),
                l = this.item(k),
                m = c.extend(!0, {}, j, l),
                n = this.option(m);k.replaceWith(n);
          } else {
            var o = this.option(j);if (j.children) {
              var p = this.convertToOptions(j.children);b.appendMany(o, p);
            }h.push(o);
          }
        }return h;
      }, d;
    }), b.define("select2/data/ajax", ["./array", "../utils", "jquery"], function (a, b, c) {
      function d(a, b) {
        this.ajaxOptions = this._applyDefaults(b.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), d.__super__.constructor.call(this, a, b);
      }return b.Extend(d, a), d.prototype._applyDefaults = function (a) {
        var b = { data: function data(a) {
            return c.extend({}, a, { q: a.term });
          }, transport: function transport(a, b, d) {
            var e = c.ajax(a);return e.then(b), e.fail(d), e;
          } };return c.extend({}, b, a, !0);
      }, d.prototype.processResults = function (a) {
        return a;
      }, d.prototype.query = function (a, b) {
        function d() {
          var d = f.transport(f, function (d) {
            var f = e.processResults(d, a);e.options.get("debug") && window.console && console.error && (f && f.results && c.isArray(f.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), b(f);
          }, function () {
            d.status && "0" === d.status || e.trigger("results:message", { message: "errorLoading" });
          });e._request = d;
        }var e = this;null != this._request && (c.isFunction(this._request.abort) && this._request.abort(), this._request = null);var f = c.extend({ type: "GET" }, this.ajaxOptions);"function" == typeof f.url && (f.url = f.url.call(this.$element, a)), "function" == typeof f.data && (f.data = f.data.call(this.$element, a)), this.ajaxOptions.delay && null != a.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(d, this.ajaxOptions.delay)) : d();
      }, d;
    }), b.define("select2/data/tags", ["jquery"], function (a) {
      function b(b, c, d) {
        var e = d.get("tags"),
            f = d.get("createTag");void 0 !== f && (this.createTag = f);var g = d.get("insertTag");if (void 0 !== g && (this.insertTag = g), b.call(this, c, d), a.isArray(e)) for (var h = 0; h < e.length; h++) {
          var i = e[h],
              j = this._normalizeItem(i),
              k = this.option(j);this.$element.append(k);
        }
      }return b.prototype.query = function (a, b, c) {
        function d(a, f) {
          for (var g = a.results, h = 0; h < g.length; h++) {
            var i = g[h],
                j = null != i.children && !d({ results: i.children }, !0);if ((i.text || "").toUpperCase() === (b.term || "").toUpperCase() || j) return !f && (a.data = g, void c(a));
          }if (f) return !0;var k = e.createTag(b);if (null != k) {
            var l = e.option(k);l.attr("data-select2-tag", !0), e.addOptions([l]), e.insertTag(g, k);
          }a.results = g, c(a);
        }var e = this;if (this._removeOldTags(), null == b.term || null != b.page) return void a.call(this, b, c);a.call(this, b, d);
      }, b.prototype.createTag = function (b, c) {
        var d = a.trim(c.term);return "" === d ? null : { id: d, text: d };
      }, b.prototype.insertTag = function (a, b, c) {
        b.unshift(c);
      }, b.prototype._removeOldTags = function (b) {
        this._lastTag;this.$element.find("option[data-select2-tag]").each(function () {
          this.selected || a(this).remove();
        });
      }, b;
    }), b.define("select2/data/tokenizer", ["jquery"], function (a) {
      function b(a, b, c) {
        var d = c.get("tokenizer");void 0 !== d && (this.tokenizer = d), a.call(this, b, c);
      }return b.prototype.bind = function (a, b, c) {
        a.call(this, b, c), this.$search = b.dropdown.$search || b.selection.$search || c.find(".select2-search__field");
      }, b.prototype.query = function (b, c, d) {
        function e(b) {
          var c = g._normalizeItem(b);if (!g.$element.find("option").filter(function () {
            return a(this).val() === c.id;
          }).length) {
            var d = g.option(c);d.attr("data-select2-tag", !0), g._removeOldTags(), g.addOptions([d]);
          }f(c);
        }function f(a) {
          g.trigger("select", { data: a });
        }var g = this;c.term = c.term || "";var h = this.tokenizer(c, this.options, e);h.term !== c.term && (this.$search.length && (this.$search.val(h.term), this.$search.focus()), c.term = h.term), b.call(this, c, d);
      }, b.prototype.tokenizer = function (b, c, d, e) {
        for (var f = d.get("tokenSeparators") || [], g = c.term, h = 0, i = this.createTag || function (a) {
          return { id: a.term, text: a.term };
        }; h < g.length;) {
          var j = g[h];if (-1 !== a.inArray(j, f)) {
            var k = g.substr(0, h),
                l = a.extend({}, c, { term: k }),
                m = i(l);null != m ? (e(m), g = g.substr(h + 1) || "", h = 0) : h++;
          } else h++;
        }return { term: g };
      }, b;
    }), b.define("select2/data/minimumInputLength", [], function () {
      function a(a, b, c) {
        this.minimumInputLength = c.get("minimumInputLength"), a.call(this, b, c);
      }return a.prototype.query = function (a, b, c) {
        if (b.term = b.term || "", b.term.length < this.minimumInputLength) return void this.trigger("results:message", { message: "inputTooShort", args: { minimum: this.minimumInputLength, input: b.term, params: b } });a.call(this, b, c);
      }, a;
    }), b.define("select2/data/maximumInputLength", [], function () {
      function a(a, b, c) {
        this.maximumInputLength = c.get("maximumInputLength"), a.call(this, b, c);
      }return a.prototype.query = function (a, b, c) {
        if (b.term = b.term || "", this.maximumInputLength > 0 && b.term.length > this.maximumInputLength) return void this.trigger("results:message", { message: "inputTooLong", args: { maximum: this.maximumInputLength, input: b.term, params: b } });a.call(this, b, c);
      }, a;
    }), b.define("select2/data/maximumSelectionLength", [], function () {
      function a(a, b, c) {
        this.maximumSelectionLength = c.get("maximumSelectionLength"), a.call(this, b, c);
      }return a.prototype.query = function (a, b, c) {
        var d = this;this.current(function (e) {
          var f = null != e ? e.length : 0;if (d.maximumSelectionLength > 0 && f >= d.maximumSelectionLength) return void d.trigger("results:message", { message: "maximumSelected", args: { maximum: d.maximumSelectionLength } });a.call(d, b, c);
        });
      }, a;
    }), b.define("select2/dropdown", ["jquery", "./utils"], function (a, b) {
      function c(a, b) {
        this.$element = a, this.options = b, c.__super__.constructor.call(this);
      }return b.Extend(c, b.Observable), c.prototype.render = function () {
        var b = a('<span class="select2-dropdown"><span class="select2-results"></span></span>');return b.attr("dir", this.options.get("dir")), this.$dropdown = b, b;
      }, c.prototype.bind = function () {}, c.prototype.position = function (a, b) {}, c.prototype.destroy = function () {
        this.$dropdown.remove();
      }, c;
    }), b.define("select2/dropdown/search", ["jquery", "../utils"], function (a, b) {
      function c() {}return c.prototype.render = function (b) {
        var c = b.call(this),
            d = a('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" /></span>');return this.$searchContainer = d, this.$search = d.find("input"), c.prepend(d), c;
      }, c.prototype.bind = function (b, c, d) {
        var e = this;b.call(this, c, d), this.$search.on("keydown", function (a) {
          e.trigger("keypress", a), e._keyUpPrevented = a.isDefaultPrevented();
        }), this.$search.on("input", function (b) {
          a(this).off("keyup");
        }), this.$search.on("keyup input", function (a) {
          e.handleSearch(a);
        }), c.on("open", function () {
          e.$search.attr("tabindex", 0), e.$search.focus(), window.setTimeout(function () {
            e.$search.focus();
          }, 0);
        }), c.on("close", function () {
          e.$search.attr("tabindex", -1), e.$search.val("");
        }), c.on("focus", function () {
          c.isOpen() || e.$search.focus();
        }), c.on("results:all", function (a) {
          if (null == a.query.term || "" === a.query.term) {
            e.showSearch(a) ? e.$searchContainer.removeClass("select2-search--hide") : e.$searchContainer.addClass("select2-search--hide");
          }
        });
      }, c.prototype.handleSearch = function (a) {
        if (!this._keyUpPrevented) {
          var b = this.$search.val();this.trigger("query", { term: b });
        }this._keyUpPrevented = !1;
      }, c.prototype.showSearch = function (a, b) {
        return !0;
      }, c;
    }), b.define("select2/dropdown/hidePlaceholder", [], function () {
      function a(a, b, c, d) {
        this.placeholder = this.normalizePlaceholder(c.get("placeholder")), a.call(this, b, c, d);
      }return a.prototype.append = function (a, b) {
        b.results = this.removePlaceholder(b.results), a.call(this, b);
      }, a.prototype.normalizePlaceholder = function (a, b) {
        return "string" == typeof b && (b = { id: "", text: b }), b;
      }, a.prototype.removePlaceholder = function (a, b) {
        for (var c = b.slice(0), d = b.length - 1; d >= 0; d--) {
          var e = b[d];this.placeholder.id === e.id && c.splice(d, 1);
        }return c;
      }, a;
    }), b.define("select2/dropdown/infiniteScroll", ["jquery"], function (a) {
      function b(a, b, c, d) {
        this.lastParams = {}, a.call(this, b, c, d), this.$loadingMore = this.createLoadingMore(), this.loading = !1;
      }return b.prototype.append = function (a, b) {
        this.$loadingMore.remove(), this.loading = !1, a.call(this, b), this.showLoadingMore(b) && this.$results.append(this.$loadingMore);
      }, b.prototype.bind = function (b, c, d) {
        var e = this;b.call(this, c, d), c.on("query", function (a) {
          e.lastParams = a, e.loading = !0;
        }), c.on("query:append", function (a) {
          e.lastParams = a, e.loading = !0;
        }), this.$results.on("scroll", function () {
          var b = a.contains(document.documentElement, e.$loadingMore[0]);if (!e.loading && b) {
            e.$results.offset().top + e.$results.outerHeight(!1) + 50 >= e.$loadingMore.offset().top + e.$loadingMore.outerHeight(!1) && e.loadMore();
          }
        });
      }, b.prototype.loadMore = function () {
        this.loading = !0;var b = a.extend({}, { page: 1 }, this.lastParams);b.page++, this.trigger("query:append", b);
      }, b.prototype.showLoadingMore = function (a, b) {
        return b.pagination && b.pagination.more;
      }, b.prototype.createLoadingMore = function () {
        var b = a('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),
            c = this.options.get("translations").get("loadingMore");return b.html(c(this.lastParams)), b;
      }, b;
    }), b.define("select2/dropdown/attachBody", ["jquery", "../utils"], function (a, b) {
      function c(b, c, d) {
        this.$dropdownParent = d.get("dropdownParent") || a(document.body), b.call(this, c, d);
      }return c.prototype.bind = function (a, b, c) {
        var d = this,
            e = !1;a.call(this, b, c), b.on("open", function () {
          d._showDropdown(), d._attachPositioningHandler(b), e || (e = !0, b.on("results:all", function () {
            d._positionDropdown(), d._resizeDropdown();
          }), b.on("results:append", function () {
            d._positionDropdown(), d._resizeDropdown();
          }));
        }), b.on("close", function () {
          d._hideDropdown(), d._detachPositioningHandler(b);
        }), this.$dropdownContainer.on("mousedown", function (a) {
          a.stopPropagation();
        });
      }, c.prototype.destroy = function (a) {
        a.call(this), this.$dropdownContainer.remove();
      }, c.prototype.position = function (a, b, c) {
        b.attr("class", c.attr("class")), b.removeClass("select2"), b.addClass("select2-container--open"), b.css({ position: "absolute", top: -999999 }), this.$container = c;
      }, c.prototype.render = function (b) {
        var c = a("<span></span>"),
            d = b.call(this);return c.append(d), this.$dropdownContainer = c, c;
      }, c.prototype._hideDropdown = function (a) {
        this.$dropdownContainer.detach();
      }, c.prototype._attachPositioningHandler = function (c, d) {
        var e = this,
            f = "scroll.select2." + d.id,
            g = "resize.select2." + d.id,
            h = "orientationchange.select2." + d.id,
            i = this.$container.parents().filter(b.hasScroll);i.each(function () {
          a(this).data("select2-scroll-position", { x: a(this).scrollLeft(), y: a(this).scrollTop() });
        }), i.on(f, function (b) {
          var c = a(this).data("select2-scroll-position");a(this).scrollTop(c.y);
        }), a(window).on(f + " " + g + " " + h, function (a) {
          e._positionDropdown(), e._resizeDropdown();
        });
      }, c.prototype._detachPositioningHandler = function (c, d) {
        var e = "scroll.select2." + d.id,
            f = "resize.select2." + d.id,
            g = "orientationchange.select2." + d.id;this.$container.parents().filter(b.hasScroll).off(e), a(window).off(e + " " + f + " " + g);
      }, c.prototype._positionDropdown = function () {
        var b = a(window),
            c = this.$dropdown.hasClass("select2-dropdown--above"),
            d = this.$dropdown.hasClass("select2-dropdown--below"),
            e = null,
            f = this.$container.offset();f.bottom = f.top + this.$container.outerHeight(!1);var g = { height: this.$container.outerHeight(!1) };g.top = f.top, g.bottom = f.top + g.height;var h = { height: this.$dropdown.outerHeight(!1) },
            i = { top: b.scrollTop(), bottom: b.scrollTop() + b.height() },
            j = i.top < f.top - h.height,
            k = i.bottom > f.bottom + h.height,
            l = { left: f.left, top: g.bottom },
            m = this.$dropdownParent;"static" === m.css("position") && (m = m.offsetParent());var n = m.offset();l.top -= n.top, l.left -= n.left, c || d || (e = "below"), k || !j || c ? !j && k && c && (e = "below") : e = "above", ("above" == e || c && "below" !== e) && (l.top = g.top - n.top - h.height), null != e && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + e), this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + e)), this.$dropdownContainer.css(l);
      }, c.prototype._resizeDropdown = function () {
        var a = { width: this.$container.outerWidth(!1) + "px" };this.options.get("dropdownAutoWidth") && (a.minWidth = a.width, a.position = "relative", a.width = "auto"), this.$dropdown.css(a);
      }, c.prototype._showDropdown = function (a) {
        this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown();
      }, c;
    }), b.define("select2/dropdown/minimumResultsForSearch", [], function () {
      function a(b) {
        for (var c = 0, d = 0; d < b.length; d++) {
          var e = b[d];e.children ? c += a(e.children) : c++;
        }return c;
      }function b(a, b, c, d) {
        this.minimumResultsForSearch = c.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), a.call(this, b, c, d);
      }return b.prototype.showSearch = function (b, c) {
        return !(a(c.data.results) < this.minimumResultsForSearch) && b.call(this, c);
      }, b;
    }), b.define("select2/dropdown/selectOnClose", [], function () {
      function a() {}return a.prototype.bind = function (a, b, c) {
        var d = this;a.call(this, b, c), b.on("close", function (a) {
          d._handleSelectOnClose(a);
        });
      }, a.prototype._handleSelectOnClose = function (a, b) {
        if (b && null != b.originalSelect2Event) {
          var c = b.originalSelect2Event;if ("select" === c._type || "unselect" === c._type) return;
        }var d = this.getHighlightedResults();if (!(d.length < 1)) {
          var e = d.data("data");null != e.element && e.element.selected || null == e.element && e.selected || this.trigger("select", { data: e });
        }
      }, a;
    }), b.define("select2/dropdown/closeOnSelect", [], function () {
      function a() {}return a.prototype.bind = function (a, b, c) {
        var d = this;a.call(this, b, c), b.on("select", function (a) {
          d._selectTriggered(a);
        }), b.on("unselect", function (a) {
          d._selectTriggered(a);
        });
      }, a.prototype._selectTriggered = function (a, b) {
        var c = b.originalEvent;c && c.ctrlKey || this.trigger("close", { originalEvent: c, originalSelect2Event: b });
      }, a;
    }), b.define("select2/i18n/en", [], function () {
      return { errorLoading: function errorLoading() {
          return "The results could not be loaded.";
        }, inputTooLong: function inputTooLong(a) {
          var b = a.input.length - a.maximum,
              c = "Please delete " + b + " character";return 1 != b && (c += "s"), c;
        }, inputTooShort: function inputTooShort(a) {
          return "Please enter " + (a.minimum - a.input.length) + " or more characters";
        }, loadingMore: function loadingMore() {
          return "Loading more results…";
        }, maximumSelected: function maximumSelected(a) {
          var b = "You can only select " + a.maximum + " item";return 1 != a.maximum && (b += "s"), b;
        }, noResults: function noResults() {
          return "No results found";
        }, searching: function searching() {
          return "Searching…";
        } };
    }), b.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], function (a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C) {
      function D() {
        this.reset();
      }return D.prototype.apply = function (l) {
        if (l = a.extend(!0, {}, this.defaults, l), null == l.dataAdapter) {
          if (null != l.ajax ? l.dataAdapter = o : null != l.data ? l.dataAdapter = n : l.dataAdapter = m, l.minimumInputLength > 0 && (l.dataAdapter = j.Decorate(l.dataAdapter, r)), l.maximumInputLength > 0 && (l.dataAdapter = j.Decorate(l.dataAdapter, s)), l.maximumSelectionLength > 0 && (l.dataAdapter = j.Decorate(l.dataAdapter, t)), l.tags && (l.dataAdapter = j.Decorate(l.dataAdapter, p)), null == l.tokenSeparators && null == l.tokenizer || (l.dataAdapter = j.Decorate(l.dataAdapter, q)), null != l.query) {
            var C = b(l.amdBase + "compat/query");l.dataAdapter = j.Decorate(l.dataAdapter, C);
          }if (null != l.initSelection) {
            var D = b(l.amdBase + "compat/initSelection");l.dataAdapter = j.Decorate(l.dataAdapter, D);
          }
        }if (null == l.resultsAdapter && (l.resultsAdapter = c, null != l.ajax && (l.resultsAdapter = j.Decorate(l.resultsAdapter, x)), null != l.placeholder && (l.resultsAdapter = j.Decorate(l.resultsAdapter, w)), l.selectOnClose && (l.resultsAdapter = j.Decorate(l.resultsAdapter, A))), null == l.dropdownAdapter) {
          if (l.multiple) l.dropdownAdapter = u;else {
            var E = j.Decorate(u, v);l.dropdownAdapter = E;
          }if (0 !== l.minimumResultsForSearch && (l.dropdownAdapter = j.Decorate(l.dropdownAdapter, z)), l.closeOnSelect && (l.dropdownAdapter = j.Decorate(l.dropdownAdapter, B)), null != l.dropdownCssClass || null != l.dropdownCss || null != l.adaptDropdownCssClass) {
            var F = b(l.amdBase + "compat/dropdownCss");l.dropdownAdapter = j.Decorate(l.dropdownAdapter, F);
          }l.dropdownAdapter = j.Decorate(l.dropdownAdapter, y);
        }if (null == l.selectionAdapter) {
          if (l.multiple ? l.selectionAdapter = e : l.selectionAdapter = d, null != l.placeholder && (l.selectionAdapter = j.Decorate(l.selectionAdapter, f)), l.allowClear && (l.selectionAdapter = j.Decorate(l.selectionAdapter, g)), l.multiple && (l.selectionAdapter = j.Decorate(l.selectionAdapter, h)), null != l.containerCssClass || null != l.containerCss || null != l.adaptContainerCssClass) {
            var G = b(l.amdBase + "compat/containerCss");l.selectionAdapter = j.Decorate(l.selectionAdapter, G);
          }l.selectionAdapter = j.Decorate(l.selectionAdapter, i);
        }if ("string" == typeof l.language) if (l.language.indexOf("-") > 0) {
          var H = l.language.split("-"),
              I = H[0];l.language = [l.language, I];
        } else l.language = [l.language];if (a.isArray(l.language)) {
          var J = new k();l.language.push("en");for (var K = l.language, L = 0; L < K.length; L++) {
            var M = K[L],
                N = {};try {
              N = k.loadPath(M);
            } catch (a) {
              try {
                M = this.defaults.amdLanguageBase + M, N = k.loadPath(M);
              } catch (a) {
                l.debug && window.console && console.warn && console.warn('Select2: The language file for "' + M + '" could not be automatically loaded. A fallback will be used instead.');continue;
              }
            }J.extend(N);
          }l.translations = J;
        } else {
          var O = k.loadPath(this.defaults.amdLanguageBase + "en"),
              P = new k(l.language);P.extend(O), l.translations = P;
        }return l;
      }, D.prototype.reset = function () {
        function b(a) {
          function b(a) {
            return l[a] || a;
          }return a.replace(/[^\u0000-\u007E]/g, b);
        }function c(d, e) {
          if ("" === a.trim(d.term)) return e;if (e.children && e.children.length > 0) {
            for (var f = a.extend(!0, {}, e), g = e.children.length - 1; g >= 0; g--) {
              null == c(d, e.children[g]) && f.children.splice(g, 1);
            }return f.children.length > 0 ? f : c(d, f);
          }var h = b(e.text).toUpperCase(),
              i = b(d.term).toUpperCase();return h.indexOf(i) > -1 ? e : null;
        }this.defaults = { amdBase: "./", amdLanguageBase: "./i18n/", closeOnSelect: !0, debug: !1, dropdownAutoWidth: !1, escapeMarkup: j.escapeMarkup, language: C, matcher: c, minimumInputLength: 0, maximumInputLength: 0, maximumSelectionLength: 0, minimumResultsForSearch: 0, selectOnClose: !1, sorter: function sorter(a) {
            return a;
          }, templateResult: function templateResult(a) {
            return a.text;
          }, templateSelection: function templateSelection(a) {
            return a.text;
          }, theme: "default", width: "resolve" };
      }, D.prototype.set = function (b, c) {
        var d = a.camelCase(b),
            e = {};e[d] = c;var f = j._convertData(e);a.extend(this.defaults, f);
      }, new D();
    }), b.define("select2/options", ["require", "jquery", "./defaults", "./utils"], function (a, b, c, d) {
      function e(b, e) {
        if (this.options = b, null != e && this.fromElement(e), this.options = c.apply(this.options), e && e.is("input")) {
          var f = a(this.get("amdBase") + "compat/inputData");this.options.dataAdapter = d.Decorate(this.options.dataAdapter, f);
        }
      }return e.prototype.fromElement = function (a) {
        var c = ["select2"];null == this.options.multiple && (this.options.multiple = a.prop("multiple")), null == this.options.disabled && (this.options.disabled = a.prop("disabled")), null == this.options.language && (a.prop("lang") ? this.options.language = a.prop("lang").toLowerCase() : a.closest("[lang]").prop("lang") && (this.options.language = a.closest("[lang]").prop("lang"))), null == this.options.dir && (a.prop("dir") ? this.options.dir = a.prop("dir") : a.closest("[dir]").prop("dir") ? this.options.dir = a.closest("[dir]").prop("dir") : this.options.dir = "ltr"), a.prop("disabled", this.options.disabled), a.prop("multiple", this.options.multiple), a.data("select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), a.data("data", a.data("select2Tags")), a.data("tags", !0)), a.data("ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), a.attr("ajax--url", a.data("ajaxUrl")), a.data("ajax--url", a.data("ajaxUrl")));var e = {};e = b.fn.jquery && "1." == b.fn.jquery.substr(0, 2) && a[0].dataset ? b.extend(!0, {}, a[0].dataset, a.data()) : a.data();var f = b.extend(!0, {}, e);f = d._convertData(f);for (var g in f) {
          b.inArray(g, c) > -1 || (b.isPlainObject(this.options[g]) ? b.extend(this.options[g], f[g]) : this.options[g] = f[g]);
        }return this;
      }, e.prototype.get = function (a) {
        return this.options[a];
      }, e.prototype.set = function (a, b) {
        this.options[a] = b;
      }, e;
    }), b.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function (a, b, c, d) {
      var e = function e(a, c) {
        null != a.data("select2") && a.data("select2").destroy(), this.$element = a, this.id = this._generateId(a), c = c || {}, this.options = new b(c, a), e.__super__.constructor.call(this);var d = a.attr("tabindex") || 0;a.data("old-tabindex", d), a.attr("tabindex", "-1");var f = this.options.get("dataAdapter");this.dataAdapter = new f(a, this.options);var g = this.render();this._placeContainer(g);var h = this.options.get("selectionAdapter");this.selection = new h(a, this.options), this.$selection = this.selection.render(), this.selection.position(this.$selection, g);var i = this.options.get("dropdownAdapter");this.dropdown = new i(a, this.options), this.$dropdown = this.dropdown.render(), this.dropdown.position(this.$dropdown, g);var j = this.options.get("resultsAdapter");this.results = new j(a, this.options, this.dataAdapter), this.$results = this.results.render(), this.results.position(this.$results, this.$dropdown);var k = this;this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), this.dataAdapter.current(function (a) {
          k.trigger("selection:update", { data: a });
        }), a.addClass("select2-hidden-accessible"), a.attr("aria-hidden", "true"), this._syncAttributes(), a.data("select2", this);
      };return c.Extend(e, c.Observable), e.prototype._generateId = function (a) {
        var b = "";return b = null != a.attr("id") ? a.attr("id") : null != a.attr("name") ? a.attr("name") + "-" + c.generateChars(2) : c.generateChars(4), b = b.replace(/(:|\.|\[|\]|,)/g, ""), b = "select2-" + b;
      }, e.prototype._placeContainer = function (a) {
        a.insertAfter(this.$element);var b = this._resolveWidth(this.$element, this.options.get("width"));null != b && a.css("width", b);
      }, e.prototype._resolveWidth = function (a, b) {
        var c = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;if ("resolve" == b) {
          var d = this._resolveWidth(a, "style");return null != d ? d : this._resolveWidth(a, "element");
        }if ("element" == b) {
          var e = a.outerWidth(!1);return e <= 0 ? "auto" : e + "px";
        }if ("style" == b) {
          var f = a.attr("style");if ("string" != typeof f) return null;for (var g = f.split(";"), h = 0, i = g.length; h < i; h += 1) {
            var j = g[h].replace(/\s/g, ""),
                k = j.match(c);if (null !== k && k.length >= 1) return k[1];
          }return null;
        }return b;
      }, e.prototype._bindAdapters = function () {
        this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container);
      }, e.prototype._registerDomEvents = function () {
        var b = this;this.$element.on("change.select2", function () {
          b.dataAdapter.current(function (a) {
            b.trigger("selection:update", { data: a });
          });
        }), this.$element.on("focus.select2", function (a) {
          b.trigger("focus", a);
        }), this._syncA = c.bind(this._syncAttributes, this), this._syncS = c.bind(this._syncSubtree, this), this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._syncA);var d = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;null != d ? (this._observer = new d(function (c) {
          a.each(c, b._syncA), a.each(c, b._syncS);
        }), this._observer.observe(this.$element[0], { attributes: !0, childList: !0, subtree: !1 })) : this.$element[0].addEventListener && (this.$element[0].addEventListener("DOMAttrModified", b._syncA, !1), this.$element[0].addEventListener("DOMNodeInserted", b._syncS, !1), this.$element[0].addEventListener("DOMNodeRemoved", b._syncS, !1));
      }, e.prototype._registerDataEvents = function () {
        var a = this;this.dataAdapter.on("*", function (b, c) {
          a.trigger(b, c);
        });
      }, e.prototype._registerSelectionEvents = function () {
        var b = this,
            c = ["toggle", "focus"];this.selection.on("toggle", function () {
          b.toggleDropdown();
        }), this.selection.on("focus", function (a) {
          b.focus(a);
        }), this.selection.on("*", function (d, e) {
          -1 === a.inArray(d, c) && b.trigger(d, e);
        });
      }, e.prototype._registerDropdownEvents = function () {
        var a = this;this.dropdown.on("*", function (b, c) {
          a.trigger(b, c);
        });
      }, e.prototype._registerResultsEvents = function () {
        var a = this;this.results.on("*", function (b, c) {
          a.trigger(b, c);
        });
      }, e.prototype._registerEvents = function () {
        var a = this;this.on("open", function () {
          a.$container.addClass("select2-container--open");
        }), this.on("close", function () {
          a.$container.removeClass("select2-container--open");
        }), this.on("enable", function () {
          a.$container.removeClass("select2-container--disabled");
        }), this.on("disable", function () {
          a.$container.addClass("select2-container--disabled");
        }), this.on("blur", function () {
          a.$container.removeClass("select2-container--focus");
        }), this.on("query", function (b) {
          a.isOpen() || a.trigger("open", {}), this.dataAdapter.query(b, function (c) {
            a.trigger("results:all", { data: c, query: b });
          });
        }), this.on("query:append", function (b) {
          this.dataAdapter.query(b, function (c) {
            a.trigger("results:append", { data: c, query: b });
          });
        }), this.on("keypress", function (b) {
          var c = b.which;a.isOpen() ? c === d.ESC || c === d.TAB || c === d.UP && b.altKey ? (a.close(), b.preventDefault()) : c === d.ENTER ? (a.trigger("results:select", {}), b.preventDefault()) : c === d.SPACE && b.ctrlKey ? (a.trigger("results:toggle", {}), b.preventDefault()) : c === d.UP ? (a.trigger("results:previous", {}), b.preventDefault()) : c === d.DOWN && (a.trigger("results:next", {}), b.preventDefault()) : (c === d.ENTER || c === d.SPACE || c === d.DOWN && b.altKey) && (a.open(), b.preventDefault());
        });
      }, e.prototype._syncAttributes = function () {
        this.options.set("disabled", this.$element.prop("disabled")), this.options.get("disabled") ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {});
      }, e.prototype._syncSubtree = function (a, b) {
        var c = !1,
            d = this;if (!a || !a.target || "OPTION" === a.target.nodeName || "OPTGROUP" === a.target.nodeName) {
          if (b) {
            if (b.addedNodes && b.addedNodes.length > 0) for (var e = 0; e < b.addedNodes.length; e++) {
              var f = b.addedNodes[e];f.selected && (c = !0);
            } else b.removedNodes && b.removedNodes.length > 0 && (c = !0);
          } else c = !0;c && this.dataAdapter.current(function (a) {
            d.trigger("selection:update", { data: a });
          });
        }
      }, e.prototype.trigger = function (a, b) {
        var c = e.__super__.trigger,
            d = { open: "opening", close: "closing", select: "selecting", unselect: "unselecting" };if (void 0 === b && (b = {}), a in d) {
          var f = d[a],
              g = { prevented: !1, name: a, args: b };if (c.call(this, f, g), g.prevented) return void (b.prevented = !0);
        }c.call(this, a, b);
      }, e.prototype.toggleDropdown = function () {
        this.options.get("disabled") || (this.isOpen() ? this.close() : this.open());
      }, e.prototype.open = function () {
        this.isOpen() || this.trigger("query", {});
      }, e.prototype.close = function () {
        this.isOpen() && this.trigger("close", {});
      }, e.prototype.isOpen = function () {
        return this.$container.hasClass("select2-container--open");
      }, e.prototype.hasFocus = function () {
        return this.$container.hasClass("select2-container--focus");
      }, e.prototype.focus = function (a) {
        this.hasFocus() || (this.$container.addClass("select2-container--focus"), this.trigger("focus", {}));
      }, e.prototype.enable = function (a) {
        this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'), null != a && 0 !== a.length || (a = [!0]);var b = !a[0];this.$element.prop("disabled", b);
      }, e.prototype.data = function () {
        this.options.get("debug") && arguments.length > 0 && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');var a = [];return this.dataAdapter.current(function (b) {
          a = b;
        }), a;
      }, e.prototype.val = function (b) {
        if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), null == b || 0 === b.length) return this.$element.val();var c = b[0];a.isArray(c) && (c = a.map(c, function (a) {
          return a.toString();
        })), this.$element.val(c).trigger("change");
      }, e.prototype.destroy = function () {
        this.$container.remove(), this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._syncA), null != this._observer ? (this._observer.disconnect(), this._observer = null) : this.$element[0].removeEventListener && (this.$element[0].removeEventListener("DOMAttrModified", this._syncA, !1), this.$element[0].removeEventListener("DOMNodeInserted", this._syncS, !1), this.$element[0].removeEventListener("DOMNodeRemoved", this._syncS, !1)), this._syncA = null, this._syncS = null, this.$element.off(".select2"), this.$element.attr("tabindex", this.$element.data("old-tabindex")), this.$element.removeClass("select2-hidden-accessible"), this.$element.attr("aria-hidden", "false"), this.$element.removeData("select2"), this.dataAdapter.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = null, this.selection = null, this.dropdown = null, this.results = null;
      }, e.prototype.render = function () {
        var b = a('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');return b.attr("dir", this.options.get("dir")), this.$container = b, this.$container.addClass("select2-container--" + this.options.get("theme")), b.data("element", this.$element), b;
      }, e;
    }), b.define("jquery-mousewheel", ["jquery"], function (a) {
      return a;
    }), b.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults"], function (a, b, c, d) {
      if (null == a.fn.select2) {
        var e = ["open", "close", "destroy"];a.fn.select2 = function (b) {
          if ("object" == _typeof(b = b || {})) return this.each(function () {
            var d = a.extend(!0, {}, b);new c(a(this), d);
          }), this;if ("string" == typeof b) {
            var d,
                f = Array.prototype.slice.call(arguments, 1);return this.each(function () {
              var c = a(this).data("select2");null == c && window.console && console.error && console.error("The select2('" + b + "') method was called on an element that is not using Select2."), d = c[b].apply(c, f);
            }), a.inArray(b, e) > -1 ? this : d;
          }throw new Error("Invalid arguments for Select2: " + b);
        };
      }return null == a.fn.select2.defaults && (a.fn.select2.defaults = d), c;
    }), { define: b.define, require: b.require };
  }(),
      c = b.require("jquery.select2");return a.fn.select2.amd = b, c;
});

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (e, t) {
  "object" == ( false ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : e.Sweetalert2 = t();
}(this, function () {
  "use strict";
  var e = { title: "", titleText: "", text: "", html: "", type: null, toast: !1, customClass: "", target: "body", backdrop: !0, animation: !0, allowOutsideClick: !0, allowEscapeKey: !0, allowEnterKey: !0, showConfirmButton: !0, showCancelButton: !1, preConfirm: null, confirmButtonText: "OK", confirmButtonAriaLabel: "", confirmButtonColor: "#3085d6", confirmButtonClass: null, cancelButtonText: "Cancel", cancelButtonAriaLabel: "", cancelButtonColor: "#aaa", cancelButtonClass: null, buttonsStyling: !0, reverseButtons: !1, focusConfirm: !0, focusCancel: !1, showCloseButton: !1, closeButtonAriaLabel: "Close this dialog", showLoaderOnConfirm: !1, imageUrl: null, imageWidth: null, imageHeight: null, imageAlt: "", imageClass: null, timer: null, width: 500, padding: 20, background: "#fff", input: null, inputPlaceholder: "", inputValue: "", inputOptions: {}, inputAutoTrim: !0, inputClass: null, inputAttributes: {}, inputValidator: null, grow: !1, position: "center", progressSteps: [], currentProgressStep: null, progressStepsDistance: "40px", onBeforeOpen: null, onOpen: null, onClose: null, useRejections: !1, expectRejections: !1 },
      t = ["useRejections", "expectRejections"],
      n = function n(e) {
    var t = {};for (var n in e) {
      t[e[n]] = "swal2-" + e[n];
    }return t;
  },
      o = n(["container", "shown", "iosfix", "popup", "modal", "no-backdrop", "toast", "toast-shown", "overlay", "fade", "show", "hide", "noanimation", "close", "title", "content", "contentwrapper", "buttonswrapper", "confirm", "cancel", "icon", "image", "input", "has-input", "file", "range", "select", "radio", "checkbox", "textarea", "inputerror", "validationerror", "progresssteps", "activeprogressstep", "progresscircle", "progressline", "loading", "styled", "top", "top-left", "top-right", "center", "center-left", "center-right", "bottom", "bottom-left", "bottom-right", "grow-row", "grow-column", "grow-fullscreen"]),
      r = n(["success", "warning", "info", "question", "error"]),
      i = function i(e, t) {
    (e = String(e).replace(/[^0-9a-f]/gi, "")).length < 6 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]), t = t || 0;for (var n = "#", o = 0; o < 3; o++) {
      var r = parseInt(e.substr(2 * o, 2), 16);n += ("00" + (r = Math.round(Math.min(Math.max(0, r + r * t), 255)).toString(16))).substr(r.length);
    }return n;
  },
      a = function a(e) {
    console.warn("SweetAlert2: " + e);
  },
      s = function s(e) {
    console.error("SweetAlert2: " + e);
  },
      l = [],
      u = function u(e) {
    -1 === l.indexOf(e) && (l.push(e), a(e));
  },
      c = { previousActiveElement: null, previousBodyPadding: null },
      d = function d(e) {
    var t = f();t && (t.parentNode.removeChild(t), T(document.body, o["no-backdrop"]), T(document.body, o["has-input"]), T(document.body, o["toast-shown"]));{
      if ("undefined" != typeof document) {
        var n = document.createElement("div");n.className = o.container, n.innerHTML = p;("string" == typeof e.target ? document.querySelector(e.target) : e.target).appendChild(n);var r = m(),
            i = q(r, o.input),
            a = q(r, o.file),
            l = r.querySelector("." + o.range + " input"),
            u = r.querySelector("." + o.range + " output"),
            c = q(r, o.select),
            d = r.querySelector("." + o.checkbox + " input"),
            b = q(r, o.textarea),
            h = function h() {
          Q.isVisible() && Q.resetValidationError();
        };return i.oninput = h, a.onchange = h, c.onchange = h, d.onchange = h, b.oninput = h, l.oninput = function () {
          h(), u.value = l.value;
        }, l.onchange = function () {
          h(), l.previousSibling.value = l.value;
        }, r;
      }s("SweetAlert2 requires document to initialize");
    }
  },
      p = ('\n <div role="dialog" aria-modal="true" aria-labelledby="' + o.title + '" aria-describedby="' + o.content + '" class="' + o.popup + '" tabindex="-1">\n   <ul class="' + o.progresssteps + '"></ul>\n   <div class="' + o.icon + " " + r.error + '">\n     <span class="swal2-x-mark"><span class="swal2-x-mark-line-left"></span><span class="swal2-x-mark-line-right"></span></span>\n   </div>\n   <div class="' + o.icon + " " + r.question + '">?</div>\n   <div class="' + o.icon + " " + r.warning + '">!</div>\n   <div class="' + o.icon + " " + r.info + '">i</div>\n   <div class="' + o.icon + " " + r.success + '">\n     <div class="swal2-success-circular-line-left"></div>\n     <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n     <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n     <div class="swal2-success-circular-line-right"></div>\n   </div>\n   <img class="' + o.image + '" />\n   <div class="' + o.contentwrapper + '">\n   <h2 class="' + o.title + '" id="' + o.title + '"></h2>\n   <div id="' + o.content + '" class="' + o.content + '"></div>\n   </div>\n   <input class="' + o.input + '" />\n   <input type="file" class="' + o.file + '" />\n   <div class="' + o.range + '">\n     <output></output>\n     <input type="range" />\n   </div>\n   <select class="' + o.select + '"></select>\n   <div class="' + o.radio + '"></div>\n   <label for="' + o.checkbox + '" class="' + o.checkbox + '">\n     <input type="checkbox" />\n   </label>\n   <textarea class="' + o.textarea + '"></textarea>\n   <div class="' + o.validationerror + '" id="' + o.validationerror + '"></div>\n   <div class="' + o.buttonswrapper + '">\n     <button type="button" class="' + o.confirm + '">OK</button>\n     <button type="button" class="' + o.cancel + '">Cancel</button>\n   </div>\n   <button type="button" class="' + o.close + '">×</button>\n </div>\n').replace(/(^|\n)\s*/g, ""),
      f = function f() {
    return document.body.querySelector("." + o.container);
  },
      m = function m() {
    return f() ? f().querySelector("." + o.popup) : null;
  },
      b = function b(e) {
    return f() ? f().querySelector("." + e) : null;
  },
      h = function h() {
    return b(o.title);
  },
      g = function g() {
    return b(o.content);
  },
      v = function v() {
    return b(o.image);
  },
      y = function y() {
    return b(o.progresssteps);
  },
      w = function w() {
    return b(o.validationerror);
  },
      C = function C() {
    return b(o.confirm);
  },
      x = function x() {
    return b(o.cancel);
  },
      k = function k() {
    return b(o.buttonswrapper);
  },
      S = function S() {
    return b(o.close);
  },
      A = function A() {
    var e = Array.from(m().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort(function (e, t) {
      return e = parseInt(e.getAttribute("tabindex")), t = parseInt(t.getAttribute("tabindex")), e > t ? 1 : e < t ? -1 : 0;
    }),
        t = Array.prototype.slice.call(m().querySelectorAll('button, input:not([type=hidden]), textarea, select, a, [tabindex="0"]'));return function (e) {
      var t = [];for (var n in e) {
        -1 === t.indexOf(e[n]) && t.push(e[n]);
      }return t;
    }(e.concat(t));
  },
      B = function B() {
    return !document.body.classList.contains(o["toast-shown"]);
  },
      P = function P(e, t) {
    return !!e.classList && e.classList.contains(t);
  },
      E = function E(e) {
    if (e.focus(), "file" !== e.type) {
      var t = e.value;e.value = "", e.value = t;
    }
  },
      L = function L(e, t) {
    if (e && t) {
      t.split(/\s+/).filter(Boolean).forEach(function (t) {
        e.classList.add(t);
      });
    }
  },
      T = function T(e, t) {
    if (e && t) {
      t.split(/\s+/).filter(Boolean).forEach(function (t) {
        e.classList.remove(t);
      });
    }
  },
      q = function q(e, t) {
    for (var n = 0; n < e.childNodes.length; n++) {
      if (P(e.childNodes[n], t)) return e.childNodes[n];
    }
  },
      O = function O(e, t) {
    t || (t = e === m() || e === k() ? "flex" : "block"), e.style.opacity = "", e.style.display = t;
  },
      V = function V(e) {
    e.style.opacity = "", e.style.display = "none";
  },
      N = function N(e) {
    return e.offsetWidth || e.offsetHeight || e.getClientRects().length;
  },
      j = function () {
    var e = document.createElement("div"),
        t = { WebkitAnimation: "webkitAnimationEnd", OAnimation: "oAnimationEnd oanimationend", animation: "animationend" };for (var n in t) {
      if (t.hasOwnProperty(n) && void 0 !== e.style[n]) return t[n];
    }return !1;
  }(),
      M = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
    return typeof e === "undefined" ? "undefined" : _typeof(e);
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof(e);
  },
      H = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];for (var o in n) {
        Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
      }
    }return e;
  },
      R = H({}, e),
      I = [],
      D = void 0,
      U = void 0;"undefined" == typeof Promise && s("This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/limonte/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)");var W = function W(e) {
    for (var t in e) {
      Q.isValidParameter(t) || a('Unknown parameter "' + t + '"'), Q.isDeprecatedParameter(t) && u('The parameter "' + t + '" is deprecated and will be removed in the next major release.');
    }
  },
      z = function z(t) {
    ("string" == typeof t.target && !document.querySelector(t.target) || "string" != typeof t.target && !t.target.appendChild) && (a('Target parameter is not valid, defaulting to "body"'), t.target = "body");var n = void 0,
        i = m(),
        l = "string" == typeof t.target ? document.querySelector(t.target) : t.target;n = i && l && i.parentNode !== l.parentNode ? d(t) : i || d(t), W(t);var u = t.width === e.width && t.toast ? "auto" : t.width;n.style.width = "number" == typeof u ? u + "px" : u;var c = t.padding === e.padding && t.toast ? "inherit" : t.padding;n.style.padding = "number" == typeof c ? c + "px" : c, n.style.background = t.background;for (var p = n.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"), b = 0; b < p.length; b++) {
      p[b].style.background = t.background;
    }var w = f(),
        A = h(),
        B = g(),
        P = k(),
        E = C(),
        q = x(),
        N = S();if (t.titleText ? A.innerText = t.titleText : A.innerHTML = t.title.split("\n").join("<br />"), t.backdrop || L(document.body, o["no-backdrop"]), t.text || t.html) {
      if ("object" === M(t.html)) {
        if (B.innerHTML = "", 0 in t.html) for (var j = 0; j in t.html; j++) {
          B.appendChild(t.html[j].cloneNode(!0));
        } else B.appendChild(t.html.cloneNode(!0));
      } else t.html ? B.innerHTML = t.html : t.text && (B.textContent = t.text);O(B);
    } else V(B);if (t.position in o && L(w, o[t.position]), t.grow && "string" == typeof t.grow) {
      var H = "grow-" + t.grow;H in o && L(w, o[H]);
    }t.showCloseButton ? (N.setAttribute("aria-label", t.closeButtonAriaLabel), O(N)) : V(N), n.className = o.popup, t.toast ? (L(document.body, o["toast-shown"]), L(n, o.toast)) : L(n, o.modal), t.customClass && L(n, t.customClass);var R = y(),
        I = parseInt(null === t.currentProgressStep ? Q.getQueueStep() : t.currentProgressStep, 10);t.progressSteps.length ? (O(R), function (e) {
      for (; e.firstChild;) {
        e.removeChild(e.firstChild);
      }
    }(R), I >= t.progressSteps.length && a("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"), t.progressSteps.forEach(function (e, n) {
      var r = document.createElement("li");if (L(r, o.progresscircle), r.innerHTML = e, n === I && L(r, o.activeprogressstep), R.appendChild(r), n !== t.progressSteps.length - 1) {
        var i = document.createElement("li");L(i, o.progressline), i.style.width = t.progressStepsDistance, R.appendChild(i);
      }
    })) : V(R);for (var D = m().querySelectorAll("." + o.icon), U = 0; U < D.length; U++) {
      V(D[U]);
    }if (t.type) {
      var z = !1;for (var K in r) {
        if (t.type === K) {
          z = !0;break;
        }
      }if (!z) return s("Unknown alert type: " + t.type), !1;var Z = n.querySelector("." + o.icon + "." + r[t.type]);if (O(Z), t.animation) switch (t.type) {case "success":
          L(Z, "swal2-animate-success-icon"), L(Z.querySelector(".swal2-success-line-tip"), "swal2-animate-success-line-tip"), L(Z.querySelector(".swal2-success-line-long"), "swal2-animate-success-line-long");break;case "error":
          L(Z, "swal2-animate-error-icon"), L(Z.querySelector(".swal2-x-mark"), "swal2-animate-x-mark");}
    }var Y = v();t.imageUrl ? (Y.setAttribute("src", t.imageUrl), Y.setAttribute("alt", t.imageAlt), O(Y), t.imageWidth ? Y.setAttribute("width", t.imageWidth) : Y.removeAttribute("width"), t.imageHeight ? Y.setAttribute("height", t.imageHeight) : Y.removeAttribute("height"), Y.className = o.image, t.imageClass && L(Y, t.imageClass)) : V(Y), t.showCancelButton ? q.style.display = "inline-block" : V(q), t.showConfirmButton ? function (e, t) {
      e.style.removeProperty ? e.style.removeProperty(t) : e.style.removeAttribute(t);
    }(E, "display") : V(E), t.showConfirmButton || t.showCancelButton ? O(P) : V(P), E.innerHTML = t.confirmButtonText, q.innerHTML = t.cancelButtonText, E.setAttribute("aria-label", t.confirmButtonAriaLabel), q.setAttribute("aria-label", t.cancelButtonAriaLabel), t.buttonsStyling && (E.style.backgroundColor = t.confirmButtonColor, q.style.backgroundColor = t.cancelButtonColor), E.className = o.confirm, L(E, t.confirmButtonClass), q.className = o.cancel, L(q, t.cancelButtonClass), t.buttonsStyling ? (L(E, o.styled), L(q, o.styled)) : (T(E, o.styled), T(q, o.styled), E.style.backgroundColor = E.style.borderLeftColor = E.style.borderRightColor = "", q.style.backgroundColor = q.style.borderLeftColor = q.style.borderRightColor = ""), !0 === t.animation ? T(n, o.noanimation) : L(n, o.noanimation), t.showLoaderOnConfirm && !t.preConfirm && a("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://limonte.github.io/sweetalert2/#ajax-request");
  },
      K = function K() {
    null === c.previousBodyPadding && document.body.scrollHeight > window.innerHeight && (c.previousBodyPadding = document.body.style.paddingRight, document.body.style.paddingRight = function () {
      if ("ontouchstart" in window || navigator.msMaxTouchPoints) return 0;var e = document.createElement("div");e.style.width = "50px", e.style.height = "50px", e.style.overflow = "scroll", document.body.appendChild(e);var t = e.offsetWidth - e.clientWidth;return document.body.removeChild(e), t;
    }() + "px");
  },
      Z = function Z() {
    if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream && !P(document.body, o.iosfix)) {
      var e = document.body.scrollTop;document.body.style.top = -1 * e + "px", L(document.body, o.iosfix);
    }
  },
      Q = function e() {
    for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) {
      n[r] = arguments[r];
    }if (void 0 === n[0]) return s("SweetAlert2 expects at least 1 attribute!"), !1;var a = H({}, R);switch (M(n[0])) {case "string":
        a.title = n[0], a.html = n[1], a.type = n[2];break;case "object":
        if (H(a, n[0]), a.extraParams = n[0].extraParams, "email" === a.input && null === a.inputValidator) {
          var l = function l(e) {
            return new Promise(function (t, n) {
              /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(e) ? t() : n("Invalid email address");
            });
          };a.inputValidator = a.expectRejections ? l : e.adaptInputValidator(l);
        }if ("url" === a.input && null === a.inputValidator) {
          var u = function u(e) {
            return new Promise(function (t, n) {
              /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/.test(e) ? t() : n("Invalid URL");
            });
          };a.inputValidator = a.expectRejections ? u : e.adaptInputValidator(u);
        }break;default:
        return s('Unexpected type of argument! Expected "string" or "object", got ' + M(n[0])), !1;}z(a);var d = f(),
        p = m();return new Promise(function (t, n) {
      var r = function r(n) {
        e.closePopup(a.onClose), t(a.useRejections ? n : { value: n });
      },
          l = function l(o) {
        e.closePopup(a.onClose), a.useRejections ? n(o) : t({ dismiss: o });
      },
          u = function u(t) {
        e.closePopup(a.onClose), n(t);
      };a.timer && (p.timeout = setTimeout(function () {
        return l("timer");
      }, a.timer));var b = function b(e) {
        if (!(e = e || a.input)) return null;switch (e) {case "select":case "textarea":case "file":
            return q(p, o[e]);case "checkbox":
            return p.querySelector("." + o.checkbox + " input");case "radio":
            return p.querySelector("." + o.radio + " input:checked") || p.querySelector("." + o.radio + " input:first-child");case "range":
            return p.querySelector("." + o.range + " input");default:
            return q(p, o.input);}
      };a.input && setTimeout(function () {
        var e = b();e && E(e);
      }, 0);for (var H = function H(t) {
        if (a.showLoaderOnConfirm && e.showLoading(), a.preConfirm) {
          var n = Promise.resolve().then(function () {
            return a.preConfirm(t, a.extraParams);
          });a.expectRejections ? n.then(function (e) {
            return r(e || t);
          }, function (t) {
            e.hideLoading(), t && e.showValidationError(t);
          }) : n.then(function (n) {
            N(w()) ? e.hideLoading() : r(n || t);
          }, function (e) {
            return u(e);
          });
        } else r(t);
      }, R = function R(t) {
        var n = t || window.event,
            o = n.target || n.srcElement,
            r = C(),
            s = x(),
            c = r && (r === o || r.contains(o)),
            d = s && (s === o || s.contains(o));switch (n.type) {case "mouseover":case "mouseup":
            a.buttonsStyling && (c ? r.style.backgroundColor = i(a.confirmButtonColor, -.1) : d && (s.style.backgroundColor = i(a.cancelButtonColor, -.1)));break;case "mouseout":
            a.buttonsStyling && (c ? r.style.backgroundColor = a.confirmButtonColor : d && (s.style.backgroundColor = a.cancelButtonColor));break;case "mousedown":
            a.buttonsStyling && (c ? r.style.backgroundColor = i(a.confirmButtonColor, -.2) : d && (s.style.backgroundColor = i(a.cancelButtonColor, -.2)));break;case "click":
            if (c && e.isVisible()) {
              if (e.disableButtons(), a.input) {
                var p = function () {
                  var e = b();if (!e) return null;switch (a.input) {case "checkbox":
                      return e.checked ? 1 : 0;case "radio":
                      return e.checked ? e.value : null;case "file":
                      return e.files.length ? e.files[0] : null;default:
                      return a.inputAutoTrim ? e.value.trim() : e.value;}
                }();if (a.inputValidator) {
                  e.disableInput();var f = Promise.resolve().then(function () {
                    return a.inputValidator(p, a.extraParams);
                  });a.expectRejections ? f.then(function () {
                    e.enableButtons(), e.enableInput(), H(p);
                  }, function (t) {
                    e.enableButtons(), e.enableInput(), t && e.showValidationError(t);
                  }) : f.then(function (t) {
                    e.enableButtons(), e.enableInput(), t ? e.showValidationError(t) : H(p);
                  }, function (e) {
                    return u(e);
                  });
                } else H(p);
              } else H(!0);
            } else d && e.isVisible() && (e.disableButtons(), l("cancel"));}
      }, I = p.querySelectorAll("button"), W = 0; W < I.length; W++) {
        I[W].onclick = R, I[W].onmouseover = R, I[W].onmouseout = R, I[W].onmousedown = R;
      }S().onclick = function () {
        l("close");
      }, a.toast ? p.onclick = function (t) {
        t.target !== p || a.showConfirmButton || a.showCancelButton || a.allowOutsideClick && (e.closePopup(a.onClose), l("overlay"));
      } : d.onclick = function (e) {
        e.target === d && a.allowOutsideClick && l("overlay");
      };var Q = k(),
          Y = C(),
          _ = x();a.reverseButtons ? Y.parentNode.insertBefore(_, Y) : Y.parentNode.insertBefore(Y, _);var $ = function $(e, t) {
        for (var n = A(a.focusCancel), o = 0; o < n.length; o++) {
          (e += t) === n.length ? e = 0 : -1 === e && (e = n.length - 1);var r = n[e];if (N(r)) return r.focus();
        }
      };U || (D = window.onkeydown, U = !0, window.onkeydown = function (t) {
        var n = t || window.event;if ("Enter" !== n.key || n.isComposing) {
          if ("Tab" === n.key) {
            for (var o = n.target || n.srcElement, r = A(a.focusCancel), i = -1, s = 0; s < r.length; s++) {
              if (o === r[s]) {
                i = s;break;
              }
            }n.shiftKey ? $(i, -1) : $(i, 1), n.stopPropagation(), n.preventDefault();
          } else -1 !== ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Left", "Right", "Up", "Down"].indexOf(n.key) ? document.activeElement === Y && N(_) ? _.focus() : document.activeElement === _ && N(Y) && Y.focus() : "Escape" !== n.key && "Esc" !== n.key || !0 !== a.allowEscapeKey || l("esc");
        } else if (n.target === b()) {
          if ("textarea" === n.target.tagName.toLowerCase()) return;e.clickConfirm(), n.preventDefault();
        }
      }), a.buttonsStyling && (Y.style.borderLeftColor = a.confirmButtonColor, Y.style.borderRightColor = a.confirmButtonColor), e.hideLoading = e.disableLoading = function () {
        a.showConfirmButton || (V(Y), a.showCancelButton || V(k())), T(Q, o.loading), T(p, o.loading), p.removeAttribute("aria-busy"), Y.disabled = !1, _.disabled = !1;
      }, e.getTitle = function () {
        return h();
      }, e.getContent = function () {
        return g();
      }, e.getInput = function () {
        return b();
      }, e.getImage = function () {
        return v();
      }, e.getButtonsWrapper = function () {
        return k();
      }, e.getConfirmButton = function () {
        return C();
      }, e.getCancelButton = function () {
        return x();
      }, e.enableButtons = function () {
        Y.disabled = !1, _.disabled = !1;
      }, e.disableButtons = function () {
        Y.disabled = !0, _.disabled = !0;
      }, e.enableConfirmButton = function () {
        Y.disabled = !1;
      }, e.disableConfirmButton = function () {
        Y.disabled = !0;
      }, e.enableInput = function () {
        var e = b();if (!e) return !1;if ("radio" === e.type) for (var t = e.parentNode.parentNode.querySelectorAll("input"), n = 0; n < t.length; n++) {
          t[n].disabled = !1;
        } else e.disabled = !1;
      }, e.disableInput = function () {
        var e = b();if (!e) return !1;if (e && "radio" === e.type) for (var t = e.parentNode.parentNode.querySelectorAll("input"), n = 0; n < t.length; n++) {
          t[n].disabled = !0;
        } else e.disabled = !0;
      }, e.showValidationError = function (e) {
        var t = w();t.innerHTML = e, O(t);var n = b();n && (n.setAttribute("aria-invalid", !0), n.setAttribute("aria-describedBy", o.validationerror), E(n), L(n, o.inputerror));
      }, e.resetValidationError = function () {
        var e = w();V(e);var t = b();t && (t.removeAttribute("aria-invalid"), t.removeAttribute("aria-describedBy"), T(t, o.inputerror));
      }, e.getProgressSteps = function () {
        return a.progressSteps;
      }, e.setProgressSteps = function (e) {
        a.progressSteps = e, z(a);
      }, e.showProgressSteps = function () {
        O(y());
      }, e.hideProgressSteps = function () {
        V(y());
      }, e.enableButtons(), e.hideLoading(), e.resetValidationError(), a.input && L(document.body, o["has-input"]);for (var J = ["input", "file", "range", "select", "radio", "checkbox", "textarea"], X = void 0, F = 0; F < J.length; F++) {
        var G = o[J[F]],
            ee = q(p, G);if (X = b(J[F])) {
          for (var te in X.attributes) {
            if (X.attributes.hasOwnProperty(te)) {
              var ne = X.attributes[te].name;"type" !== ne && "value" !== ne && X.removeAttribute(ne);
            }
          }for (var oe in a.inputAttributes) {
            X.setAttribute(oe, a.inputAttributes[oe]);
          }
        }ee.className = G, a.inputClass && L(ee, a.inputClass), V(ee);
      }var re = void 0;switch (a.input) {case "text":case "email":case "password":case "number":case "tel":case "url":
          (X = q(p, o.input)).value = a.inputValue, X.placeholder = a.inputPlaceholder, X.type = a.input, O(X);break;case "file":
          (X = q(p, o.file)).placeholder = a.inputPlaceholder, X.type = a.input, O(X);break;case "range":
          var ie = q(p, o.range),
              ae = ie.querySelector("input"),
              se = ie.querySelector("output");ae.value = a.inputValue, ae.type = a.input, se.value = a.inputValue, O(ie);break;case "select":
          var le = q(p, o.select);if (le.innerHTML = "", a.inputPlaceholder) {
            var ue = document.createElement("option");ue.innerHTML = a.inputPlaceholder, ue.value = "", ue.disabled = !0, ue.selected = !0, le.appendChild(ue);
          }re = function re(e) {
            for (var t in e) {
              var n = document.createElement("option");n.value = t, n.innerHTML = e[t], a.inputValue.toString() === t && (n.selected = !0), le.appendChild(n);
            }O(le), le.focus();
          };break;case "radio":
          var ce = q(p, o.radio);ce.innerHTML = "", re = function re(e) {
            for (var t in e) {
              var n = document.createElement("input"),
                  r = document.createElement("label"),
                  i = document.createElement("span");n.type = "radio", n.name = o.radio, n.value = t, a.inputValue.toString() === t && (n.checked = !0), i.innerHTML = e[t], r.appendChild(n), r.appendChild(i), r.for = n.id, ce.appendChild(r);
            }O(ce);var s = ce.querySelectorAll("input");s.length && s[0].focus();
          };break;case "checkbox":
          var de = q(p, o.checkbox),
              pe = b("checkbox");pe.type = "checkbox", pe.value = 1, pe.id = o.checkbox, pe.checked = Boolean(a.inputValue);var fe = de.getElementsByTagName("span");fe.length && de.removeChild(fe[0]), (fe = document.createElement("span")).innerHTML = a.inputPlaceholder, de.appendChild(fe), O(de);break;case "textarea":
          var me = q(p, o.textarea);me.value = a.inputValue, me.placeholder = a.inputPlaceholder, O(me);break;case null:
          break;default:
          s('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "' + a.input + '"');}"select" !== a.input && "radio" !== a.input || (a.inputOptions instanceof Promise ? (e.showLoading(), a.inputOptions.then(function (t) {
        e.hideLoading(), re(t);
      })) : "object" === M(a.inputOptions) ? re(a.inputOptions) : s("Unexpected type of inputOptions! Expected object or Promise, got " + M(a.inputOptions))), function (e, t, n) {
        var r = f(),
            i = m();null !== t && "function" == typeof t && t(i), e ? (L(i, o.show), L(r, o.fade), T(i, o.hide)) : T(i, o.fade), O(i), r.style.overflowY = "hidden", j && !P(i, o.noanimation) ? i.addEventListener(j, function e() {
          i.removeEventListener(j, e), r.style.overflowY = "auto";
        }) : r.style.overflowY = "auto", L(document.documentElement, o.shown), L(document.body, o.shown), L(r, o.shown), B() && (K(), Z()), c.previousActiveElement = document.activeElement, null !== n && "function" == typeof n && setTimeout(function () {
          n(i);
        });
      }(a.animation, a.onBeforeOpen, a.onOpen), a.toast || (a.allowEnterKey ? a.focusCancel && N(_) ? _.focus() : a.focusConfirm && N(Y) ? Y.focus() : $(-1, 1) : document.activeElement && document.activeElement.blur()), f().scrollTop = 0;
    });
  };return Q.isVisible = function () {
    return !!m();
  }, Q.queue = function (e) {
    I = e;var t = function t() {
      I = [], document.body.removeAttribute("data-swal2-queue-step");
    },
        n = [];return new Promise(function (e, o) {
      !function o(r, i) {
        r < I.length ? (document.body.setAttribute("data-swal2-queue-step", r), Q(I[r]).then(function (a) {
          void 0 !== a.value ? (n.push(a.value), o(r + 1, i)) : (t(), e({ dismiss: a.dismiss }));
        })) : (t(), e({ value: n }));
      }(0);
    });
  }, Q.getQueueStep = function () {
    return document.body.getAttribute("data-swal2-queue-step");
  }, Q.insertQueueStep = function (e, t) {
    return t && t < I.length ? I.splice(t, 0, e) : I.push(e);
  }, Q.deleteQueueStep = function (e) {
    void 0 !== I[e] && I.splice(e, 1);
  }, Q.close = Q.closePopup = Q.closeModal = Q.closeToast = function (e) {
    var t = f(),
        n = m();if (n) {
      T(n, o.show), L(n, o.hide), clearTimeout(n.timeout), document.body.classList.contains(o["toast-shown"]) || (!function () {
        if (c.previousActiveElement && c.previousActiveElement.focus) {
          var e = window.scrollX,
              t = window.scrollY;c.previousActiveElement.focus(), e && t && window.scrollTo(e, t);
        }
      }(), window.onkeydown = D, U = !1);var r = function r() {
        t.parentNode && t.parentNode.removeChild(t), T(document.documentElement, o.shown), T(document.body, o.shown), T(document.body, o["no-backdrop"]), T(document.body, o["has-input"]), T(document.body, o["toast-shown"]), B() && (null !== c.previousBodyPadding && (document.body.style.paddingRight = c.previousBodyPadding, c.previousBodyPadding = null), function () {
          if (P(document.body, o.iosfix)) {
            var e = parseInt(document.body.style.top, 10);T(document.body, o.iosfix), document.body.style.top = "", document.body.scrollTop = -1 * e;
          }
        }());
      };j && !P(n, o.noanimation) ? n.addEventListener(j, function e() {
        n.removeEventListener(j, e), P(n, o.hide) && r();
      }) : r(), null !== e && "function" == typeof e && setTimeout(function () {
        e(n);
      });
    }
  }, Q.clickConfirm = function () {
    return C().click();
  }, Q.clickCancel = function () {
    return x().click();
  }, Q.showLoading = Q.enableLoading = function () {
    var e = m();e || Q(""), e = m();var t = k(),
        n = C(),
        r = x();O(t), O(n, "inline-block"), L(t, o.loading), L(e, o.loading), n.disabled = !0, r.disabled = !0, e.setAttribute("aria-busy", !0), e.focus();
  }, Q.isValidParameter = function (t) {
    return e.hasOwnProperty(t) || "extraParams" === t;
  }, Q.isDeprecatedParameter = function (e) {
    return -1 !== t.indexOf(e);
  }, Q.setDefaults = function (e) {
    if (!e || "object" !== (void 0 === e ? "undefined" : M(e))) return s("the argument for setDefaults() is required and has to be a object");W(e);for (var t in e) {
      Q.isValidParameter(t) && (R[t] = e[t]);
    }
  }, Q.resetDefaults = function () {
    R = H({}, e);
  }, Q.adaptInputValidator = function (e) {
    return function (t, n) {
      return e.call(this, t, n).then(function () {}, function (e) {
        return e;
      });
    };
  }, Q.noop = function () {}, Q.version = "7.0.2", Q.default = Q, Q;
}), window.Sweetalert2 && (window.sweetAlert = window.swal = window.Sweetalert2);

/***/ }),
/* 8 */
/***/ (function(module, exports) {

!function (e, t, n) {
  "use strict";
  function s(e) {
    var t = Array.prototype.slice.call(arguments, 1);return e.prop ? e.prop.apply(e, t) : e.attr.apply(e, t);
  }function a(e, t, n) {
    var s, a;for (s in n) {
      n.hasOwnProperty(s) && (a = s.replace(/ |$/g, t.eventNamespace), e.bind(a, n[s]));
    }
  }function i(e, t, n) {
    a(e, n, { focus: function focus() {
        t.addClass(n.focusClass);
      }, blur: function blur() {
        t.removeClass(n.focusClass), t.removeClass(n.activeClass);
      }, mouseenter: function mouseenter() {
        t.addClass(n.hoverClass);
      }, mouseleave: function mouseleave() {
        t.removeClass(n.hoverClass), t.removeClass(n.activeClass);
      }, "mousedown touchbegin": function mousedownTouchbegin() {
        e.is(":disabled") || t.addClass(n.activeClass);
      }, "mouseup touchend": function mouseupTouchend() {
        t.removeClass(n.activeClass);
      } });
  }function r(e, t) {
    e.removeClass(t.hoverClass + " " + t.focusClass + " " + t.activeClass);
  }function l(e, t, n) {
    n ? e.addClass(t) : e.removeClass(t);
  }function u(e, t, n) {
    var s = "checked",
        a = t.is(":" + s);t.prop ? t.prop(s, a) : a ? t.attr(s, s) : t.removeAttr(s), l(e, n.checkedClass, a);
  }function o(e, t, n) {
    l(e, n.disabledClass, t.is(":disabled"));
  }function c(e, t, n) {
    switch (n) {case "after":
        return e.after(t), e.next();case "before":
        return e.before(t), e.prev();case "wrap":
        return e.wrap(t), e.parent();}return null;
  }function d(e, n, a) {
    var i, r, l;return a || (a = {}), a = t.extend({ bind: {}, divClass: null, divWrap: "wrap", spanClass: null, spanHtml: null, spanWrap: "wrap" }, a), i = t("<div />"), r = t("<span />"), n.autoHide && e.is(":hidden") && "none" === e.css("display") && i.hide(), a.divClass && i.addClass(a.divClass), n.wrapperClass && i.addClass(n.wrapperClass), a.spanClass && r.addClass(a.spanClass), l = s(e, "id"), n.useID && l && s(i, "id", n.idPrefix + "-" + l), a.spanHtml && r.html(a.spanHtml), i = c(e, i, a.divWrap), r = c(e, r, a.spanWrap), o(i, e, n), { div: i, span: r };
  }function f(e, n) {
    var s;return n.wrapperClass ? (s = t("<span />").addClass(n.wrapperClass), s = c(e, s, "wrap")) : null;
  }function p() {
    var n, s, a, i;return i = "rgb(120,2,153)", s = t('<div style="width:0;height:0;color:' + i + '">'), t("body").append(s), a = s.get(0), n = e.getComputedStyle ? e.getComputedStyle(a, "").color : (a.currentStyle || a.style || {}).color, s.remove(), n.replace(/ /g, "") !== i;
  }function m(e) {
    return e ? t("<span />").text(e).html() : "";
  }function v() {
    return navigator.cpuClass && !navigator.product;
  }function h() {
    return void 0 !== e.XMLHttpRequest;
  }function C(e) {
    var t;return !!e[0].multiple || (t = s(e, "size"), !(!t || t <= 1));
  }function b() {
    return !1;
  }function y(e, t) {
    var n = "none";a(e, t, { "selectstart dragstart mousedown": b }), e.css({ MozUserSelect: n, msUserSelect: n, webkitUserSelect: n, userSelect: n });
  }function w(e, t, n) {
    var s = e.val();"" === s ? s = n.fileDefaultHtml : (s = s.split(/[\/\\]+/), s = s[s.length - 1]), t.text(s);
  }function g(e, t, n) {
    var s, a;for (s = [], e.each(function () {
      var e;for (e in t) {
        Object.prototype.hasOwnProperty.call(t, e) && (s.push({ el: this, name: e, old: this.style[e] }), this.style[e] = t[e]);
      }
    }), n(); s.length;) {
      a = s.pop(), a.el.style[a.name] = a.old;
    }
  }function k(e, t) {
    var n;n = e.parents(), n.push(e[0]), n = n.not(":visible"), g(n, { visibility: "hidden", display: "block", position: "absolute" }, t);
  }function x(e, t) {
    return function () {
      e.unwrap().unwrap().unbind(t.eventNamespace);
    };
  }var H = !0,
      A = !1,
      W = [{ match: function match(e) {
      return e.is("a, button, :submit, :reset, input[type='button']");
    }, apply: function apply(t, n) {
      var l, u, c, f, p;return u = n.submitDefaultHtml, t.is(":reset") && (u = n.resetDefaultHtml), f = t.is("a, button") ? function () {
        return t.html() || u;
      } : function () {
        return m(s(t, "value")) || u;
      }, c = d(t, n, { divClass: n.buttonClass, spanHtml: f() }), l = c.div, i(t, l, n), p = !1, a(l, n, { "click touchend": function clickTouchend() {
          var n, a, i, r;p || t.is(":disabled") || (p = !0, t[0].dispatchEvent ? (n = document.createEvent("MouseEvents"), n.initEvent("click", !0, !0), a = t[0].dispatchEvent(n), t.is("a") && a && (i = s(t, "target"), r = s(t, "href"), i && "_self" !== i ? e.open(r, i) : document.location.href = r)) : t.click(), p = !1);
        } }), y(l, n), { remove: function remove() {
          return l.after(t), l.remove(), t.unbind(n.eventNamespace), t;
        }, update: function update() {
          r(l, n), o(l, t, n), t.detach(), c.span.html(f()).append(t);
        } };
    } }, { match: function match(e) {
      return e.is(":checkbox");
    }, apply: function apply(e, t) {
      var n, s, l;return n = d(e, t, { divClass: t.checkboxClass }), s = n.div, l = n.span, i(e, s, t), a(e, t, { "click touchend": function clickTouchend() {
          u(l, e, t);
        } }), u(l, e, t), { remove: x(e, t), update: function update() {
          r(s, t), l.removeClass(t.checkedClass), u(l, e, t), o(s, e, t);
        } };
    } }, { match: function match(e) {
      return e.is(":file");
    }, apply: function apply(e, n) {
      function l() {
        w(e, p, n);
      }var u, f, p, m;return u = d(e, n, { divClass: n.fileClass, spanClass: n.fileButtonClass, spanHtml: n.fileButtonHtml, spanWrap: "after" }), f = u.div, m = u.span, p = t("<span />").html(n.fileDefaultHtml), p.addClass(n.filenameClass), p = c(e, p, "after"), s(e, "size") || s(e, "size", f.width() / 10), i(e, f, n), l(), v() ? a(e, n, { click: function click() {
          e.trigger("change"), setTimeout(l, 0);
        } }) : a(e, n, { change: l }), y(p, n), y(m, n), { remove: function remove() {
          return p.remove(), m.remove(), e.unwrap().unbind(n.eventNamespace);
        }, update: function update() {
          r(f, n), w(e, p, n), o(f, e, n);
        } };
    } }, { match: function match(e) {
      if (e.is("input")) {
        var t = (" " + s(e, "type") + " ").toLowerCase(),
            n = " color date datetime datetime-local email month number password search tel text time url week ";return n.indexOf(t) >= 0;
      }return !1;
    }, apply: function apply(e, t) {
      var n, a;return n = s(e, "type"), e.addClass(t.inputClass), a = f(e, t), i(e, e, t), t.inputAddTypeAsClass && e.addClass(n), { remove: function remove() {
          e.removeClass(t.inputClass), t.inputAddTypeAsClass && e.removeClass(n), a && e.unwrap();
        }, update: b };
    } }, { match: function match(e) {
      return e.is(":radio");
    }, apply: function apply(e, n) {
      var l, c, f;return l = d(e, n, { divClass: n.radioClass }), c = l.div, f = l.span, i(e, c, n), a(e, n, { "click touchend": function clickTouchend() {
          t.uniform.update(t(':radio[name="' + s(e, "name") + '"]'));
        } }), u(f, e, n), { remove: x(e, n), update: function update() {
          r(c, n), u(f, e, n), o(c, e, n);
        } };
    } }, { match: function match(e) {
      return !(!e.is("select") || C(e));
    }, apply: function apply(e, n) {
      var s, l, u, c;return n.selectAutoWidth && k(e, function () {
        c = e.width();
      }), s = d(e, n, { divClass: n.selectClass, spanHtml: (e.find(":selected:first") || e.find("option:first")).html(), spanWrap: "before" }), l = s.div, u = s.span, n.selectAutoWidth ? k(e, function () {
        g(t([u[0], l[0]]), { display: "block" }, function () {
          var e;e = u.outerWidth() - u.width(), l.width(c + e), u.width(c);
        });
      }) : l.addClass("fixedWidth"), i(e, l, n), a(e, n, { change: function change() {
          u.html(e.find(":selected").html()), l.removeClass(n.activeClass);
        }, "click touchend": function clickTouchend() {
          var t = e.find(":selected").html();u.html() !== t && e.trigger("change");
        }, keyup: function keyup() {
          u.html(e.find(":selected").html());
        } }), y(u, n), { remove: function remove() {
          return u.remove(), e.unwrap().unbind(n.eventNamespace), e;
        }, update: function update() {
          n.selectAutoWidth ? (t.uniform.restore(e), e.uniform(n)) : (r(l, n), e[0].selectedIndex = e[0].selectedIndex, u.html(e.find(":selected").html()), o(l, e, n));
        } };
    } }, { match: function match(e) {
      return !(!e.is("select") || !C(e));
    }, apply: function apply(e, t) {
      var n;return e.addClass(t.selectMultiClass), n = f(e, t), i(e, e, t), { remove: function remove() {
          e.removeClass(t.selectMultiClass), n && e.unwrap();
        }, update: b };
    } }, { match: function match(e) {
      return e.is("textarea");
    }, apply: function apply(e, t) {
      var n;return e.addClass(t.textareaClass), n = f(e, t), i(e, e, t), { remove: function remove() {
          e.removeClass(t.textareaClass), n && e.unwrap();
        }, update: b };
    } }];v() && !h() && (H = !1), t.uniform = { defaults: { activeClass: "active", autoHide: !0, buttonClass: "button", checkboxClass: "checker", checkedClass: "checked", disabledClass: "disabled", eventNamespace: ".uniform", fileButtonClass: "action", fileButtonHtml: "Choose File", fileClass: "uploader", fileDefaultHtml: "No file selected", filenameClass: "filename", focusClass: "focus", hoverClass: "hover", idPrefix: "uniform", inputAddTypeAsClass: !0, inputClass: "uniform-input", radioClass: "radio", resetDefaultHtml: "Reset", resetSelector: !1, selectAutoWidth: !0, selectClass: "selector", selectMultiClass: "uniform-multiselect", submitDefaultHtml: "Submit", textareaClass: "uniform", useID: !0, wrapperClass: null }, elements: [] }, t.fn.uniform = function (n) {
    var s = this;return n = t.extend({}, t.uniform.defaults, n), A || (A = !0, p() && (H = !1)), H ? (n.resetSelector && t(n.resetSelector).mouseup(function () {
      e.setTimeout(function () {
        t.uniform.update(s);
      }, 10);
    }), this.each(function () {
      var e,
          s,
          a,
          i = t(this);if (i.data("uniformed")) return void t.uniform.update(i);for (e = 0; e < W.length; e += 1) {
        if (s = W[e], s.match(i, n)) return a = s.apply(i, n), i.data("uniformed", a), void t.uniform.elements.push(i.get(0));
      }
    })) : this;
  }, t.uniform.restore = t.fn.uniform.restore = function (e) {
    e === n && (e = t.uniform.elements), t(e).each(function () {
      var e,
          n,
          s = t(this);n = s.data("uniformed"), n && (n.remove(), e = t.inArray(this, t.uniform.elements), e >= 0 && t.uniform.elements.splice(e, 1), s.removeData("uniformed"));
    });
  }, t.uniform.update = t.fn.uniform.update = function (e) {
    e === n && (e = t.uniform.elements), t(e).each(function () {
      var e,
          n = t(this);e = n.data("uniformed"), e && e.update(n, e.options);
    });
  };
}(this, jQuery);

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! jQuery UI - v1.11.4 - 2015-11-17
* http://jqueryui.com
* Includes: core.js, widget.js, mouse.js, draggable.js, droppable.js, resizable.js, selectable.js, sortable.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */

(function (e) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : e(jQuery);
})(function (e) {
  function t(t, s) {
    var n,
        a,
        o,
        r = t.nodeName.toLowerCase();return "area" === r ? (n = t.parentNode, a = n.name, t.href && a && "map" === n.nodeName.toLowerCase() ? (o = e("img[usemap='#" + a + "']")[0], !!o && i(o)) : !1) : (/^(input|select|textarea|button|object)$/.test(r) ? !t.disabled : "a" === r ? t.href || s : s) && i(t);
  }function i(t) {
    return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function () {
      return "hidden" === e.css(this, "visibility");
    }).length;
  }e.ui = e.ui || {}, e.extend(e.ui, { version: "1.11.4", keyCode: { BACKSPACE: 8, COMMA: 188, DELETE: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, LEFT: 37, PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SPACE: 32, TAB: 9, UP: 38 } }), e.fn.extend({ scrollParent: function scrollParent(t) {
      var i = this.css("position"),
          s = "absolute" === i,
          n = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
          a = this.parents().filter(function () {
        var t = e(this);return s && "static" === t.css("position") ? !1 : n.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"));
      }).eq(0);return "fixed" !== i && a.length ? a : e(this[0].ownerDocument || document);
    }, uniqueId: function () {
      var e = 0;return function () {
        return this.each(function () {
          this.id || (this.id = "ui-id-" + ++e);
        });
      };
    }(), removeUniqueId: function removeUniqueId() {
      return this.each(function () {
        /^ui-id-\d+$/.test(this.id) && e(this).removeAttr("id");
      });
    } }), e.extend(e.expr[":"], { data: e.expr.createPseudo ? e.expr.createPseudo(function (t) {
      return function (i) {
        return !!e.data(i, t);
      };
    }) : function (t, i, s) {
      return !!e.data(t, s[3]);
    }, focusable: function focusable(i) {
      return t(i, !isNaN(e.attr(i, "tabindex")));
    }, tabbable: function tabbable(i) {
      var s = e.attr(i, "tabindex"),
          n = isNaN(s);return (n || s >= 0) && t(i, !n);
    } }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function (t, i) {
    function s(t, i, s, a) {
      return e.each(n, function () {
        i -= parseFloat(e.css(t, "padding" + this)) || 0, s && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0), a && (i -= parseFloat(e.css(t, "margin" + this)) || 0);
      }), i;
    }var n = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
        a = i.toLowerCase(),
        o = { innerWidth: e.fn.innerWidth, innerHeight: e.fn.innerHeight, outerWidth: e.fn.outerWidth, outerHeight: e.fn.outerHeight };e.fn["inner" + i] = function (t) {
      return void 0 === t ? o["inner" + i].call(this) : this.each(function () {
        e(this).css(a, s(this, t) + "px");
      });
    }, e.fn["outer" + i] = function (t, n) {
      return "number" != typeof t ? o["outer" + i].call(this, t) : this.each(function () {
        e(this).css(a, s(this, t, !0, n) + "px");
      });
    };
  }), e.fn.addBack || (e.fn.addBack = function (e) {
    return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
  }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function (t) {
    return function (i) {
      return arguments.length ? t.call(this, e.camelCase(i)) : t.call(this);
    };
  }(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.fn.extend({ focus: function (t) {
      return function (i, s) {
        return "number" == typeof i ? this.each(function () {
          var t = this;setTimeout(function () {
            e(t).focus(), s && s.call(t);
          }, i);
        }) : t.apply(this, arguments);
      };
    }(e.fn.focus), disableSelection: function () {
      var e = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";return function () {
        return this.bind(e + ".ui-disableSelection", function (e) {
          e.preventDefault();
        });
      };
    }(), enableSelection: function enableSelection() {
      return this.unbind(".ui-disableSelection");
    }, zIndex: function zIndex(t) {
      if (void 0 !== t) return this.css("zIndex", t);if (this.length) for (var i, s, n = e(this[0]); n.length && n[0] !== document;) {
        if (i = n.css("position"), ("absolute" === i || "relative" === i || "fixed" === i) && (s = parseInt(n.css("zIndex"), 10), !isNaN(s) && 0 !== s)) return s;n = n.parent();
      }return 0;
    } }), e.ui.plugin = { add: function add(t, i, s) {
      var n,
          a = e.ui[t].prototype;for (n in s) {
        a.plugins[n] = a.plugins[n] || [], a.plugins[n].push([i, s[n]]);
      }
    }, call: function call(e, t, i, s) {
      var n,
          a = e.plugins[t];if (a && (s || e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType)) for (n = 0; a.length > n; n++) {
        e.options[a[n][0]] && a[n][1].apply(e.element, i);
      }
    } };var s = 0,
      n = Array.prototype.slice;e.cleanData = function (t) {
    return function (i) {
      var s, n, a;for (a = 0; null != (n = i[a]); a++) {
        try {
          s = e._data(n, "events"), s && s.remove && e(n).triggerHandler("remove");
        } catch (o) {}
      }t(i);
    };
  }(e.cleanData), e.widget = function (t, i, s) {
    var n,
        a,
        o,
        r,
        h = {},
        l = t.split(".")[0];return t = t.split(".")[1], n = l + "-" + t, s || (s = i, i = e.Widget), e.expr[":"][n.toLowerCase()] = function (t) {
      return !!e.data(t, n);
    }, e[l] = e[l] || {}, a = e[l][t], o = e[l][t] = function (e, t) {
      return this._createWidget ? (arguments.length && this._createWidget(e, t), void 0) : new o(e, t);
    }, e.extend(o, a, { version: s.version, _proto: e.extend({}, s), _childConstructors: [] }), r = new i(), r.options = e.widget.extend({}, r.options), e.each(s, function (t, s) {
      return e.isFunction(s) ? (h[t] = function () {
        var e = function e() {
          return i.prototype[t].apply(this, arguments);
        },
            n = function n(e) {
          return i.prototype[t].apply(this, e);
        };return function () {
          var t,
              i = this._super,
              a = this._superApply;return this._super = e, this._superApply = n, t = s.apply(this, arguments), this._super = i, this._superApply = a, t;
        };
      }(), void 0) : (h[t] = s, void 0);
    }), o.prototype = e.widget.extend(r, { widgetEventPrefix: a ? r.widgetEventPrefix || t : t }, h, { constructor: o, namespace: l, widgetName: t, widgetFullName: n }), a ? (e.each(a._childConstructors, function (t, i) {
      var s = i.prototype;e.widget(s.namespace + "." + s.widgetName, o, i._proto);
    }), delete a._childConstructors) : i._childConstructors.push(o), e.widget.bridge(t, o), o;
  }, e.widget.extend = function (t) {
    for (var i, s, a = n.call(arguments, 1), o = 0, r = a.length; r > o; o++) {
      for (i in a[o]) {
        s = a[o][i], a[o].hasOwnProperty(i) && void 0 !== s && (t[i] = e.isPlainObject(s) ? e.isPlainObject(t[i]) ? e.widget.extend({}, t[i], s) : e.widget.extend({}, s) : s);
      }
    }return t;
  }, e.widget.bridge = function (t, i) {
    var s = i.prototype.widgetFullName || t;e.fn[t] = function (a) {
      var o = "string" == typeof a,
          r = n.call(arguments, 1),
          h = this;return o ? this.each(function () {
        var i,
            n = e.data(this, s);return "instance" === a ? (h = n, !1) : n ? e.isFunction(n[a]) && "_" !== a.charAt(0) ? (i = n[a].apply(n, r), i !== n && void 0 !== i ? (h = i && i.jquery ? h.pushStack(i.get()) : i, !1) : void 0) : e.error("no such method '" + a + "' for " + t + " widget instance") : e.error("cannot call methods on " + t + " prior to initialization; " + "attempted to call method '" + a + "'");
      }) : (r.length && (a = e.widget.extend.apply(null, [a].concat(r))), this.each(function () {
        var t = e.data(this, s);t ? (t.option(a || {}), t._init && t._init()) : e.data(this, s, new i(a, this));
      })), h;
    };
  }, e.Widget = function () {}, e.Widget._childConstructors = [], e.Widget.prototype = { widgetName: "widget", widgetEventPrefix: "", defaultElement: "<div>", options: { disabled: !1, create: null }, _createWidget: function _createWidget(t, i) {
      i = e(i || this.defaultElement || this)[0], this.element = e(i), this.uuid = s++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = e(), this.hoverable = e(), this.focusable = e(), i !== this && (e.data(i, this.widgetFullName, this), this._on(!0, this.element, { remove: function remove(e) {
          e.target === i && this.destroy();
        } }), this.document = e(i.style ? i.ownerDocument : i.document || i), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init();
    }, _getCreateOptions: e.noop, _getCreateEventData: e.noop, _create: e.noop, _init: e.noop, destroy: function destroy() {
      this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus");
    }, _destroy: e.noop, widget: function widget() {
      return this.element;
    }, option: function option(t, i) {
      var s,
          n,
          a,
          o = t;if (0 === arguments.length) return e.widget.extend({}, this.options);if ("string" == typeof t) if (o = {}, s = t.split("."), t = s.shift(), s.length) {
        for (n = o[t] = e.widget.extend({}, this.options[t]), a = 0; s.length - 1 > a; a++) {
          n[s[a]] = n[s[a]] || {}, n = n[s[a]];
        }if (t = s.pop(), 1 === arguments.length) return void 0 === n[t] ? null : n[t];n[t] = i;
      } else {
        if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t];o[t] = i;
      }return this._setOptions(o), this;
    }, _setOptions: function _setOptions(e) {
      var t;for (t in e) {
        this._setOption(t, e[t]);
      }return this;
    }, _setOption: function _setOption(e, t) {
      return this.options[e] = t, "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!t), t && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this;
    }, enable: function enable() {
      return this._setOptions({ disabled: !1 });
    }, disable: function disable() {
      return this._setOptions({ disabled: !0 });
    }, _on: function _on(t, i, s) {
      var n,
          a = this;"boolean" != typeof t && (s = i, i = t, t = !1), s ? (i = n = e(i), this.bindings = this.bindings.add(i)) : (s = i, i = this.element, n = this.widget()), e.each(s, function (s, o) {
        function r() {
          return t || a.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof o ? a[o] : o).apply(a, arguments) : void 0;
        }"string" != typeof o && (r.guid = o.guid = o.guid || r.guid || e.guid++);var h = s.match(/^([\w:-]*)\s*(.*)$/),
            l = h[1] + a.eventNamespace,
            u = h[2];u ? n.delegate(u, l, r) : i.bind(l, r);
      });
    }, _off: function _off(t, i) {
      i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.unbind(i).undelegate(i), this.bindings = e(this.bindings.not(t).get()), this.focusable = e(this.focusable.not(t).get()), this.hoverable = e(this.hoverable.not(t).get());
    }, _delay: function _delay(e, t) {
      function i() {
        return ("string" == typeof e ? s[e] : e).apply(s, arguments);
      }var s = this;return setTimeout(i, t || 0);
    }, _hoverable: function _hoverable(t) {
      this.hoverable = this.hoverable.add(t), this._on(t, { mouseenter: function mouseenter(t) {
          e(t.currentTarget).addClass("ui-state-hover");
        }, mouseleave: function mouseleave(t) {
          e(t.currentTarget).removeClass("ui-state-hover");
        } });
    }, _focusable: function _focusable(t) {
      this.focusable = this.focusable.add(t), this._on(t, { focusin: function focusin(t) {
          e(t.currentTarget).addClass("ui-state-focus");
        }, focusout: function focusout(t) {
          e(t.currentTarget).removeClass("ui-state-focus");
        } });
    }, _trigger: function _trigger(t, i, s) {
      var n,
          a,
          o = this.options[t];if (s = s || {}, i = e.Event(i), i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], a = i.originalEvent) for (n in a) {
        n in i || (i[n] = a[n]);
      }return this.element.trigger(i, s), !(e.isFunction(o) && o.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented());
    } }, e.each({ show: "fadeIn", hide: "fadeOut" }, function (t, i) {
    e.Widget.prototype["_" + t] = function (s, n, a) {
      "string" == typeof n && (n = { effect: n });var o,
          r = n ? n === !0 || "number" == typeof n ? i : n.effect || i : t;n = n || {}, "number" == typeof n && (n = { duration: n }), o = !e.isEmptyObject(n), n.complete = a, n.delay && s.delay(n.delay), o && e.effects && e.effects.effect[r] ? s[t](n) : r !== t && s[r] ? s[r](n.duration, n.easing, a) : s.queue(function (i) {
        e(this)[t](), a && a.call(s[0]), i();
      });
    };
  }), e.widget;var a = !1;e(document).mouseup(function () {
    a = !1;
  }), e.widget("ui.mouse", { version: "1.11.4", options: { cancel: "input,textarea,button,select,option", distance: 1, delay: 0 }, _mouseInit: function _mouseInit() {
      var t = this;this.element.bind("mousedown." + this.widgetName, function (e) {
        return t._mouseDown(e);
      }).bind("click." + this.widgetName, function (i) {
        return !0 === e.data(i.target, t.widgetName + ".preventClickEvent") ? (e.removeData(i.target, t.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0;
      }), this.started = !1;
    }, _mouseDestroy: function _mouseDestroy() {
      this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
    }, _mouseDown: function _mouseDown(t) {
      if (!a) {
        this._mouseMoved = !1, this._mouseStarted && this._mouseUp(t), this._mouseDownEvent = t;var i = this,
            s = 1 === t.which,
            n = "string" == typeof this.options.cancel && t.target.nodeName ? e(t.target).closest(this.options.cancel).length : !1;return s && !n && this._mouseCapture(t) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
          i.mouseDelayMet = !0;
        }, this.options.delay)), this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(t) !== !1, !this._mouseStarted) ? (t.preventDefault(), !0) : (!0 === e.data(t.target, this.widgetName + ".preventClickEvent") && e.removeData(t.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (e) {
          return i._mouseMove(e);
        }, this._mouseUpDelegate = function (e) {
          return i._mouseUp(e);
        }, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), t.preventDefault(), a = !0, !0)) : !0;
      }
    }, _mouseMove: function _mouseMove(t) {
      if (this._mouseMoved) {
        if (e.ui.ie && (!document.documentMode || 9 > document.documentMode) && !t.button) return this._mouseUp(t);if (!t.which) return this._mouseUp(t);
      }return (t.which || t.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted);
    }, _mouseUp: function _mouseUp(t) {
      return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), a = !1, !1;
    }, _mouseDistanceMet: function _mouseDistanceMet(e) {
      return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance;
    }, _mouseDelayMet: function _mouseDelayMet() {
      return this.mouseDelayMet;
    }, _mouseStart: function _mouseStart() {}, _mouseDrag: function _mouseDrag() {}, _mouseStop: function _mouseStop() {}, _mouseCapture: function _mouseCapture() {
      return !0;
    } }), e.widget("ui.draggable", e.ui.mouse, { version: "1.11.4", widgetEventPrefix: "drag", options: { addClasses: !0, appendTo: "parent", axis: !1, connectToSortable: !1, containment: !1, cursor: "auto", cursorAt: !1, grid: !1, handle: !1, helper: "original", iframeFix: !1, opacity: !1, refreshPositions: !1, revert: !1, revertDuration: 500, scope: "default", scroll: !0, scrollSensitivity: 20, scrollSpeed: 20, snap: !1, snapMode: "both", snapTolerance: 20, stack: !1, zIndex: !1, drag: null, start: null, stop: null }, _create: function _create() {
      "original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._setHandleClassName(), this._mouseInit();
    }, _setOption: function _setOption(e, t) {
      this._super(e, t), "handle" === e && (this._removeHandleClassName(), this._setHandleClassName());
    }, _destroy: function _destroy() {
      return (this.helper || this.element).is(".ui-draggable-dragging") ? (this.destroyOnClear = !0, void 0) : (this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._removeHandleClassName(), this._mouseDestroy(), void 0);
    }, _mouseCapture: function _mouseCapture(t) {
      var i = this.options;return this._blurActiveElement(t), this.helper || i.disabled || e(t.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(t), this.handle ? (this._blockFrames(i.iframeFix === !0 ? "iframe" : i.iframeFix), !0) : !1);
    }, _blockFrames: function _blockFrames(t) {
      this.iframeBlocks = this.document.find(t).map(function () {
        var t = e(this);return e("<div>").css("position", "absolute").appendTo(t.parent()).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).offset(t.offset())[0];
      });
    }, _unblockFrames: function _unblockFrames() {
      this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks);
    }, _blurActiveElement: function _blurActiveElement(t) {
      var i = this.document[0];if (this.handleElement.is(t.target)) try {
        i.activeElement && "body" !== i.activeElement.nodeName.toLowerCase() && e(i.activeElement).blur();
      } catch (s) {}
    }, _mouseStart: function _mouseStart(t) {
      var i = this.options;return this.helper = this._createHelper(t), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), e.ui.ddmanager && (e.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = this.helper.parents().filter(function () {
        return "fixed" === e(this).css("position");
      }).length > 0, this.positionAbs = this.element.offset(), this._refreshOffsets(t), this.originalPosition = this.position = this._generatePosition(t, !1), this.originalPageX = t.pageX, this.originalPageY = t.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), this._trigger("start", t) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), e.ui.ddmanager && !i.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this._normalizeRightBottom(), this._mouseDrag(t, !0), e.ui.ddmanager && e.ui.ddmanager.dragStart(this, t), !0);
    }, _refreshOffsets: function _refreshOffsets(e) {
      this.offset = { top: this.positionAbs.top - this.margins.top, left: this.positionAbs.left - this.margins.left, scroll: !1, parent: this._getParentOffset(), relative: this._getRelativeOffset() }, this.offset.click = { left: e.pageX - this.offset.left, top: e.pageY - this.offset.top };
    }, _mouseDrag: function _mouseDrag(t, i) {
      if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(t, !0), this.positionAbs = this._convertPositionTo("absolute"), !i) {
        var s = this._uiHash();if (this._trigger("drag", t, s) === !1) return this._mouseUp({}), !1;this.position = s.position;
      }return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", e.ui.ddmanager && e.ui.ddmanager.drag(this, t), !1;
    }, _mouseStop: function _mouseStop(t) {
      var i = this,
          s = !1;return e.ui.ddmanager && !this.options.dropBehaviour && (s = e.ui.ddmanager.drop(this, t)), this.dropped && (s = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !s || "valid" === this.options.revert && s || this.options.revert === !0 || e.isFunction(this.options.revert) && this.options.revert.call(this.element, s) ? e(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
        i._trigger("stop", t) !== !1 && i._clear();
      }) : this._trigger("stop", t) !== !1 && this._clear(), !1;
    }, _mouseUp: function _mouseUp(t) {
      return this._unblockFrames(), e.ui.ddmanager && e.ui.ddmanager.dragStop(this, t), this.handleElement.is(t.target) && this.element.focus(), e.ui.mouse.prototype._mouseUp.call(this, t);
    }, cancel: function cancel() {
      return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this;
    }, _getHandle: function _getHandle(t) {
      return this.options.handle ? !!e(t.target).closest(this.element.find(this.options.handle)).length : !0;
    }, _setHandleClassName: function _setHandleClassName() {
      this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this.handleElement.addClass("ui-draggable-handle");
    }, _removeHandleClassName: function _removeHandleClassName() {
      this.handleElement.removeClass("ui-draggable-handle");
    }, _createHelper: function _createHelper(t) {
      var i = this.options,
          s = e.isFunction(i.helper),
          n = s ? e(i.helper.apply(this.element[0], [t])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;return n.parents("body").length || n.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo), s && n[0] === this.element[0] && this._setPositionRelative(), n[0] === this.element[0] || /(fixed|absolute)/.test(n.css("position")) || n.css("position", "absolute"), n;
    }, _setPositionRelative: function _setPositionRelative() {
      /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative");
    }, _adjustOffsetFromHelper: function _adjustOffsetFromHelper(t) {
      "string" == typeof t && (t = t.split(" ")), e.isArray(t) && (t = { left: +t[0], top: +t[1] || 0 }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top);
    }, _isRootNode: function _isRootNode(e) {
      return (/(html|body)/i.test(e.tagName) || e === this.document[0]
      );
    }, _getParentOffset: function _getParentOffset() {
      var t = this.offsetParent.offset(),
          i = this.document[0];return "absolute" === this.cssPosition && this.scrollParent[0] !== i && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (t = { top: 0, left: 0 }), { top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0) };
    }, _getRelativeOffset: function _getRelativeOffset() {
      if ("relative" !== this.cssPosition) return { top: 0, left: 0 };var e = this.element.position(),
          t = this._isRootNode(this.scrollParent[0]);return { top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + (t ? 0 : this.scrollParent.scrollTop()), left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + (t ? 0 : this.scrollParent.scrollLeft()) };
    }, _cacheMargins: function _cacheMargins() {
      this.margins = { left: parseInt(this.element.css("marginLeft"), 10) || 0, top: parseInt(this.element.css("marginTop"), 10) || 0, right: parseInt(this.element.css("marginRight"), 10) || 0, bottom: parseInt(this.element.css("marginBottom"), 10) || 0 };
    }, _cacheHelperProportions: function _cacheHelperProportions() {
      this.helperProportions = { width: this.helper.outerWidth(), height: this.helper.outerHeight() };
    }, _setContainment: function _setContainment() {
      var t,
          i,
          s,
          n = this.options,
          a = this.document[0];return this.relativeContainer = null, n.containment ? "window" === n.containment ? (this.containment = [e(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, e(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, e(window).scrollLeft() + e(window).width() - this.helperProportions.width - this.margins.left, e(window).scrollTop() + (e(window).height() || a.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], void 0) : "document" === n.containment ? (this.containment = [0, 0, e(a).width() - this.helperProportions.width - this.margins.left, (e(a).height() || a.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], void 0) : n.containment.constructor === Array ? (this.containment = n.containment, void 0) : ("parent" === n.containment && (n.containment = this.helper[0].parentNode), i = e(n.containment), s = i[0], s && (t = /(scroll|auto)/.test(i.css("overflow")), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (t ? Math.max(s.scrollWidth, s.offsetWidth) : s.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (t ? Math.max(s.scrollHeight, s.offsetHeight) : s.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = i), void 0) : (this.containment = null, void 0);
    }, _convertPositionTo: function _convertPositionTo(e, t) {
      t || (t = this.position);var i = "absolute" === e ? 1 : -1,
          s = this._isRootNode(this.scrollParent[0]);return { top: t.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top : s ? 0 : this.offset.scroll.top) * i, left: t.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left : s ? 0 : this.offset.scroll.left) * i };
    }, _generatePosition: function _generatePosition(e, t) {
      var i,
          s,
          n,
          a,
          o = this.options,
          r = this._isRootNode(this.scrollParent[0]),
          h = e.pageX,
          l = e.pageY;return r && this.offset.scroll || (this.offset.scroll = { top: this.scrollParent.scrollTop(), left: this.scrollParent.scrollLeft() }), t && (this.containment && (this.relativeContainer ? (s = this.relativeContainer.offset(), i = [this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top]) : i = this.containment, e.pageX - this.offset.click.left < i[0] && (h = i[0] + this.offset.click.left), e.pageY - this.offset.click.top < i[1] && (l = i[1] + this.offset.click.top), e.pageX - this.offset.click.left > i[2] && (h = i[2] + this.offset.click.left), e.pageY - this.offset.click.top > i[3] && (l = i[3] + this.offset.click.top)), o.grid && (n = o.grid[1] ? this.originalPageY + Math.round((l - this.originalPageY) / o.grid[1]) * o.grid[1] : this.originalPageY, l = i ? n - this.offset.click.top >= i[1] || n - this.offset.click.top > i[3] ? n : n - this.offset.click.top >= i[1] ? n - o.grid[1] : n + o.grid[1] : n, a = o.grid[0] ? this.originalPageX + Math.round((h - this.originalPageX) / o.grid[0]) * o.grid[0] : this.originalPageX, h = i ? a - this.offset.click.left >= i[0] || a - this.offset.click.left > i[2] ? a : a - this.offset.click.left >= i[0] ? a - o.grid[0] : a + o.grid[0] : a), "y" === o.axis && (h = this.originalPageX), "x" === o.axis && (l = this.originalPageY)), { top: l - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : r ? 0 : this.offset.scroll.top), left: h - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : r ? 0 : this.offset.scroll.left) };
    }, _clear: function _clear() {
      this.helper.removeClass("ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy();
    }, _normalizeRightBottom: function _normalizeRightBottom() {
      "y" !== this.options.axis && "auto" !== this.helper.css("right") && (this.helper.width(this.helper.width()), this.helper.css("right", "auto")), "x" !== this.options.axis && "auto" !== this.helper.css("bottom") && (this.helper.height(this.helper.height()), this.helper.css("bottom", "auto"));
    }, _trigger: function _trigger(t, i, s) {
      return s = s || this._uiHash(), e.ui.plugin.call(this, t, [i, s, this], !0), /^(drag|start|stop)/.test(t) && (this.positionAbs = this._convertPositionTo("absolute"), s.offset = this.positionAbs), e.Widget.prototype._trigger.call(this, t, i, s);
    }, plugins: {}, _uiHash: function _uiHash() {
      return { helper: this.helper, position: this.position, originalPosition: this.originalPosition, offset: this.positionAbs };
    } }), e.ui.plugin.add("draggable", "connectToSortable", { start: function start(t, i, s) {
      var n = e.extend({}, i, { item: s.element });s.sortables = [], e(s.options.connectToSortable).each(function () {
        var i = e(this).sortable("instance");i && !i.options.disabled && (s.sortables.push(i), i.refreshPositions(), i._trigger("activate", t, n));
      });
    }, stop: function stop(t, i, s) {
      var n = e.extend({}, i, { item: s.element });s.cancelHelperRemoval = !1, e.each(s.sortables, function () {
        var e = this;e.isOver ? (e.isOver = 0, s.cancelHelperRemoval = !0, e.cancelHelperRemoval = !1, e._storedCSS = { position: e.placeholder.css("position"), top: e.placeholder.css("top"), left: e.placeholder.css("left") }, e._mouseStop(t), e.options.helper = e.options._helper) : (e.cancelHelperRemoval = !0, e._trigger("deactivate", t, n));
      });
    }, drag: function drag(t, i, s) {
      e.each(s.sortables, function () {
        var n = !1,
            a = this;a.positionAbs = s.positionAbs, a.helperProportions = s.helperProportions, a.offset.click = s.offset.click, a._intersectsWith(a.containerCache) && (n = !0, e.each(s.sortables, function () {
          return this.positionAbs = s.positionAbs, this.helperProportions = s.helperProportions, this.offset.click = s.offset.click, this !== a && this._intersectsWith(this.containerCache) && e.contains(a.element[0], this.element[0]) && (n = !1), n;
        })), n ? (a.isOver || (a.isOver = 1, s._parent = i.helper.parent(), a.currentItem = i.helper.appendTo(a.element).data("ui-sortable-item", !0), a.options._helper = a.options.helper, a.options.helper = function () {
          return i.helper[0];
        }, t.target = a.currentItem[0], a._mouseCapture(t, !0), a._mouseStart(t, !0, !0), a.offset.click.top = s.offset.click.top, a.offset.click.left = s.offset.click.left, a.offset.parent.left -= s.offset.parent.left - a.offset.parent.left, a.offset.parent.top -= s.offset.parent.top - a.offset.parent.top, s._trigger("toSortable", t), s.dropped = a.element, e.each(s.sortables, function () {
          this.refreshPositions();
        }), s.currentItem = s.element, a.fromOutside = s), a.currentItem && (a._mouseDrag(t), i.position = a.position)) : a.isOver && (a.isOver = 0, a.cancelHelperRemoval = !0, a.options._revert = a.options.revert, a.options.revert = !1, a._trigger("out", t, a._uiHash(a)), a._mouseStop(t, !0), a.options.revert = a.options._revert, a.options.helper = a.options._helper, a.placeholder && a.placeholder.remove(), i.helper.appendTo(s._parent), s._refreshOffsets(t), i.position = s._generatePosition(t, !0), s._trigger("fromSortable", t), s.dropped = !1, e.each(s.sortables, function () {
          this.refreshPositions();
        }));
      });
    } }), e.ui.plugin.add("draggable", "cursor", { start: function start(t, i, s) {
      var n = e("body"),
          a = s.options;n.css("cursor") && (a._cursor = n.css("cursor")), n.css("cursor", a.cursor);
    }, stop: function stop(t, i, s) {
      var n = s.options;n._cursor && e("body").css("cursor", n._cursor);
    } }), e.ui.plugin.add("draggable", "opacity", { start: function start(t, i, s) {
      var n = e(i.helper),
          a = s.options;n.css("opacity") && (a._opacity = n.css("opacity")), n.css("opacity", a.opacity);
    }, stop: function stop(t, i, s) {
      var n = s.options;n._opacity && e(i.helper).css("opacity", n._opacity);
    } }), e.ui.plugin.add("draggable", "scroll", { start: function start(e, t, i) {
      i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)), i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset());
    }, drag: function drag(t, i, s) {
      var n = s.options,
          a = !1,
          o = s.scrollParentNotHidden[0],
          r = s.document[0];o !== r && "HTML" !== o.tagName ? (n.axis && "x" === n.axis || (s.overflowOffset.top + o.offsetHeight - t.pageY < n.scrollSensitivity ? o.scrollTop = a = o.scrollTop + n.scrollSpeed : t.pageY - s.overflowOffset.top < n.scrollSensitivity && (o.scrollTop = a = o.scrollTop - n.scrollSpeed)), n.axis && "y" === n.axis || (s.overflowOffset.left + o.offsetWidth - t.pageX < n.scrollSensitivity ? o.scrollLeft = a = o.scrollLeft + n.scrollSpeed : t.pageX - s.overflowOffset.left < n.scrollSensitivity && (o.scrollLeft = a = o.scrollLeft - n.scrollSpeed))) : (n.axis && "x" === n.axis || (t.pageY - e(r).scrollTop() < n.scrollSensitivity ? a = e(r).scrollTop(e(r).scrollTop() - n.scrollSpeed) : e(window).height() - (t.pageY - e(r).scrollTop()) < n.scrollSensitivity && (a = e(r).scrollTop(e(r).scrollTop() + n.scrollSpeed))), n.axis && "y" === n.axis || (t.pageX - e(r).scrollLeft() < n.scrollSensitivity ? a = e(r).scrollLeft(e(r).scrollLeft() - n.scrollSpeed) : e(window).width() - (t.pageX - e(r).scrollLeft()) < n.scrollSensitivity && (a = e(r).scrollLeft(e(r).scrollLeft() + n.scrollSpeed)))), a !== !1 && e.ui.ddmanager && !n.dropBehaviour && e.ui.ddmanager.prepareOffsets(s, t);
    } }), e.ui.plugin.add("draggable", "snap", { start: function start(t, i, s) {
      var n = s.options;s.snapElements = [], e(n.snap.constructor !== String ? n.snap.items || ":data(ui-draggable)" : n.snap).each(function () {
        var t = e(this),
            i = t.offset();this !== s.element[0] && s.snapElements.push({ item: this, width: t.outerWidth(), height: t.outerHeight(), top: i.top, left: i.left });
      });
    }, drag: function drag(t, i, s) {
      var n,
          a,
          o,
          r,
          h,
          l,
          u,
          d,
          c,
          p,
          f = s.options,
          m = f.snapTolerance,
          g = i.offset.left,
          v = g + s.helperProportions.width,
          y = i.offset.top,
          b = y + s.helperProportions.height;for (c = s.snapElements.length - 1; c >= 0; c--) {
        h = s.snapElements[c].left - s.margins.left, l = h + s.snapElements[c].width, u = s.snapElements[c].top - s.margins.top, d = u + s.snapElements[c].height, h - m > v || g > l + m || u - m > b || y > d + m || !e.contains(s.snapElements[c].item.ownerDocument, s.snapElements[c].item) ? (s.snapElements[c].snapping && s.options.snap.release && s.options.snap.release.call(s.element, t, e.extend(s._uiHash(), { snapItem: s.snapElements[c].item })), s.snapElements[c].snapping = !1) : ("inner" !== f.snapMode && (n = m >= Math.abs(u - b), a = m >= Math.abs(d - y), o = m >= Math.abs(h - v), r = m >= Math.abs(l - g), n && (i.position.top = s._convertPositionTo("relative", { top: u - s.helperProportions.height, left: 0 }).top), a && (i.position.top = s._convertPositionTo("relative", { top: d, left: 0 }).top), o && (i.position.left = s._convertPositionTo("relative", { top: 0, left: h - s.helperProportions.width }).left), r && (i.position.left = s._convertPositionTo("relative", { top: 0, left: l }).left)), p = n || a || o || r, "outer" !== f.snapMode && (n = m >= Math.abs(u - y), a = m >= Math.abs(d - b), o = m >= Math.abs(h - g), r = m >= Math.abs(l - v), n && (i.position.top = s._convertPositionTo("relative", { top: u, left: 0 }).top), a && (i.position.top = s._convertPositionTo("relative", { top: d - s.helperProportions.height, left: 0 }).top), o && (i.position.left = s._convertPositionTo("relative", { top: 0, left: h }).left), r && (i.position.left = s._convertPositionTo("relative", { top: 0, left: l - s.helperProportions.width }).left)), !s.snapElements[c].snapping && (n || a || o || r || p) && s.options.snap.snap && s.options.snap.snap.call(s.element, t, e.extend(s._uiHash(), { snapItem: s.snapElements[c].item })), s.snapElements[c].snapping = n || a || o || r || p);
      }
    } }), e.ui.plugin.add("draggable", "stack", { start: function start(t, i, s) {
      var n,
          a = s.options,
          o = e.makeArray(e(a.stack)).sort(function (t, i) {
        return (parseInt(e(t).css("zIndex"), 10) || 0) - (parseInt(e(i).css("zIndex"), 10) || 0);
      });o.length && (n = parseInt(e(o[0]).css("zIndex"), 10) || 0, e(o).each(function (t) {
        e(this).css("zIndex", n + t);
      }), this.css("zIndex", n + o.length));
    } }), e.ui.plugin.add("draggable", "zIndex", { start: function start(t, i, s) {
      var n = e(i.helper),
          a = s.options;n.css("zIndex") && (a._zIndex = n.css("zIndex")), n.css("zIndex", a.zIndex);
    }, stop: function stop(t, i, s) {
      var n = s.options;n._zIndex && e(i.helper).css("zIndex", n._zIndex);
    } }), e.ui.draggable, e.widget("ui.droppable", { version: "1.11.4", widgetEventPrefix: "drop", options: { accept: "*", activeClass: !1, addClasses: !0, greedy: !1, hoverClass: !1, scope: "default", tolerance: "intersect", activate: null, deactivate: null, drop: null, out: null, over: null }, _create: function _create() {
      var t,
          i = this.options,
          s = i.accept;
      this.isover = !1, this.isout = !0, this.accept = e.isFunction(s) ? s : function (e) {
        return e.is(s);
      }, this.proportions = function () {
        return arguments.length ? (t = arguments[0], void 0) : t ? t : t = { width: this.element[0].offsetWidth, height: this.element[0].offsetHeight };
      }, this._addToManager(i.scope), i.addClasses && this.element.addClass("ui-droppable");
    }, _addToManager: function _addToManager(t) {
      e.ui.ddmanager.droppables[t] = e.ui.ddmanager.droppables[t] || [], e.ui.ddmanager.droppables[t].push(this);
    }, _splice: function _splice(e) {
      for (var t = 0; e.length > t; t++) {
        e[t] === this && e.splice(t, 1);
      }
    }, _destroy: function _destroy() {
      var t = e.ui.ddmanager.droppables[this.options.scope];this._splice(t), this.element.removeClass("ui-droppable ui-droppable-disabled");
    }, _setOption: function _setOption(t, i) {
      if ("accept" === t) this.accept = e.isFunction(i) ? i : function (e) {
        return e.is(i);
      };else if ("scope" === t) {
        var s = e.ui.ddmanager.droppables[this.options.scope];this._splice(s), this._addToManager(i);
      }this._super(t, i);
    }, _activate: function _activate(t) {
      var i = e.ui.ddmanager.current;this.options.activeClass && this.element.addClass(this.options.activeClass), i && this._trigger("activate", t, this.ui(i));
    }, _deactivate: function _deactivate(t) {
      var i = e.ui.ddmanager.current;this.options.activeClass && this.element.removeClass(this.options.activeClass), i && this._trigger("deactivate", t, this.ui(i));
    }, _over: function _over(t) {
      var i = e.ui.ddmanager.current;i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", t, this.ui(i)));
    }, _out: function _out(t) {
      var i = e.ui.ddmanager.current;i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", t, this.ui(i)));
    }, _drop: function _drop(t, i) {
      var s = i || e.ui.ddmanager.current,
          n = !1;return s && (s.currentItem || s.element)[0] !== this.element[0] ? (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function () {
        var i = e(this).droppable("instance");return i.options.greedy && !i.options.disabled && i.options.scope === s.options.scope && i.accept.call(i.element[0], s.currentItem || s.element) && e.ui.intersect(s, e.extend(i, { offset: i.element.offset() }), i.options.tolerance, t) ? (n = !0, !1) : void 0;
      }), n ? !1 : this.accept.call(this.element[0], s.currentItem || s.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", t, this.ui(s)), this.element) : !1) : !1;
    }, ui: function ui(e) {
      return { draggable: e.currentItem || e.element, helper: e.helper, position: e.position, offset: e.positionAbs };
    } }), e.ui.intersect = function () {
    function e(e, t, i) {
      return e >= t && t + i > e;
    }return function (t, i, s, n) {
      if (!i.offset) return !1;var a = (t.positionAbs || t.position.absolute).left + t.margins.left,
          o = (t.positionAbs || t.position.absolute).top + t.margins.top,
          r = a + t.helperProportions.width,
          h = o + t.helperProportions.height,
          l = i.offset.left,
          u = i.offset.top,
          d = l + i.proportions().width,
          c = u + i.proportions().height;switch (s) {case "fit":
          return a >= l && d >= r && o >= u && c >= h;case "intersect":
          return a + t.helperProportions.width / 2 > l && d > r - t.helperProportions.width / 2 && o + t.helperProportions.height / 2 > u && c > h - t.helperProportions.height / 2;case "pointer":
          return e(n.pageY, u, i.proportions().height) && e(n.pageX, l, i.proportions().width);case "touch":
          return (o >= u && c >= o || h >= u && c >= h || u > o && h > c) && (a >= l && d >= a || r >= l && d >= r || l > a && r > d);default:
          return !1;}
    };
  }(), e.ui.ddmanager = { current: null, droppables: { "default": [] }, prepareOffsets: function prepareOffsets(t, i) {
      var s,
          n,
          a = e.ui.ddmanager.droppables[t.options.scope] || [],
          o = i ? i.type : null,
          r = (t.currentItem || t.element).find(":data(ui-droppable)").addBack();e: for (s = 0; a.length > s; s++) {
        if (!(a[s].options.disabled || t && !a[s].accept.call(a[s].element[0], t.currentItem || t.element))) {
          for (n = 0; r.length > n; n++) {
            if (r[n] === a[s].element[0]) {
              a[s].proportions().height = 0;continue e;
            }
          }a[s].visible = "none" !== a[s].element.css("display"), a[s].visible && ("mousedown" === o && a[s]._activate.call(a[s], i), a[s].offset = a[s].element.offset(), a[s].proportions({ width: a[s].element[0].offsetWidth, height: a[s].element[0].offsetHeight }));
        }
      }
    }, drop: function drop(t, i) {
      var s = !1;return e.each((e.ui.ddmanager.droppables[t.options.scope] || []).slice(), function () {
        this.options && (!this.options.disabled && this.visible && e.ui.intersect(t, this, this.options.tolerance, i) && (s = this._drop.call(this, i) || s), !this.options.disabled && this.visible && this.accept.call(this.element[0], t.currentItem || t.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, i)));
      }), s;
    }, dragStart: function dragStart(t, i) {
      t.element.parentsUntil("body").bind("scroll.droppable", function () {
        t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, i);
      });
    }, drag: function drag(t, i) {
      t.options.refreshPositions && e.ui.ddmanager.prepareOffsets(t, i), e.each(e.ui.ddmanager.droppables[t.options.scope] || [], function () {
        if (!this.options.disabled && !this.greedyChild && this.visible) {
          var s,
              n,
              a,
              o = e.ui.intersect(t, this, this.options.tolerance, i),
              r = !o && this.isover ? "isout" : o && !this.isover ? "isover" : null;r && (this.options.greedy && (n = this.options.scope, a = this.element.parents(":data(ui-droppable)").filter(function () {
            return e(this).droppable("instance").options.scope === n;
          }), a.length && (s = e(a[0]).droppable("instance"), s.greedyChild = "isover" === r)), s && "isover" === r && (s.isover = !1, s.isout = !0, s._out.call(s, i)), this[r] = !0, this["isout" === r ? "isover" : "isout"] = !1, this["isover" === r ? "_over" : "_out"].call(this, i), s && "isout" === r && (s.isout = !1, s.isover = !0, s._over.call(s, i)));
        }
      });
    }, dragStop: function dragStop(t, i) {
      t.element.parentsUntil("body").unbind("scroll.droppable"), t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, i);
    } }, e.ui.droppable, e.widget("ui.resizable", e.ui.mouse, { version: "1.11.4", widgetEventPrefix: "resize", options: { alsoResize: !1, animate: !1, animateDuration: "slow", animateEasing: "swing", aspectRatio: !1, autoHide: !1, containment: !1, ghost: !1, grid: !1, handles: "e,s,se", helper: !1, maxHeight: null, maxWidth: null, minHeight: 10, minWidth: 10, zIndex: 90, resize: null, start: null, stop: null }, _num: function _num(e) {
      return parseInt(e, 10) || 0;
    }, _isNumber: function _isNumber(e) {
      return !isNaN(parseInt(e, 10));
    }, _hasScroll: function _hasScroll(t, i) {
      if ("hidden" === e(t).css("overflow")) return !1;var s = i && "left" === i ? "scrollLeft" : "scrollTop",
          n = !1;return t[s] > 0 ? !0 : (t[s] = 1, n = t[s] > 0, t[s] = 0, n);
    }, _create: function _create() {
      var t,
          i,
          s,
          n,
          a,
          o = this,
          r = this.options;if (this.element.addClass("ui-resizable"), e.extend(this, { _aspectRatio: !!r.aspectRatio, aspectRatio: r.aspectRatio, originalElement: this.element, _proportionallyResizeElements: [], _helper: r.helper || r.ghost || r.animate ? r.helper || "ui-resizable-helper" : null }), this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({ position: this.element.css("position"), width: this.element.outerWidth(), height: this.element.outerHeight(), top: this.element.css("top"), left: this.element.css("left") })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, this.element.css({ marginLeft: this.originalElement.css("marginLeft"), marginTop: this.originalElement.css("marginTop"), marginRight: this.originalElement.css("marginRight"), marginBottom: this.originalElement.css("marginBottom") }), this.originalElement.css({ marginLeft: 0, marginTop: 0, marginRight: 0, marginBottom: 0 }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({ position: "static", zoom: 1, display: "block" })), this.originalElement.css({ margin: this.originalElement.css("margin") }), this._proportionallyResize()), this.handles = r.handles || (e(".ui-resizable-handle", this.element).length ? { n: ".ui-resizable-n", e: ".ui-resizable-e", s: ".ui-resizable-s", w: ".ui-resizable-w", se: ".ui-resizable-se", sw: ".ui-resizable-sw", ne: ".ui-resizable-ne", nw: ".ui-resizable-nw" } : "e,s,se"), this._handles = e(), this.handles.constructor === String) for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), t = this.handles.split(","), this.handles = {}, i = 0; t.length > i; i++) {
        s = e.trim(t[i]), a = "ui-resizable-" + s, n = e("<div class='ui-resizable-handle " + a + "'></div>"), n.css({ zIndex: r.zIndex }), "se" === s && n.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[s] = ".ui-resizable-" + s, this.element.append(n);
      }this._renderAxis = function (t) {
        var i, s, n, a;t = t || this.element;for (i in this.handles) {
          this.handles[i].constructor === String ? this.handles[i] = this.element.children(this.handles[i]).first().show() : (this.handles[i].jquery || this.handles[i].nodeType) && (this.handles[i] = e(this.handles[i]), this._on(this.handles[i], { mousedown: o._mouseDown })), this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (s = e(this.handles[i], this.element), a = /sw|ne|nw|se|n|s/.test(i) ? s.outerHeight() : s.outerWidth(), n = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), t.css(n, a), this._proportionallyResize()), this._handles = this._handles.add(this.handles[i]);
        }
      }, this._renderAxis(this.element), this._handles = this._handles.add(this.element.find(".ui-resizable-handle")), this._handles.disableSelection(), this._handles.mouseover(function () {
        o.resizing || (this.className && (n = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), o.axis = n && n[1] ? n[1] : "se");
      }), r.autoHide && (this._handles.hide(), e(this.element).addClass("ui-resizable-autohide").mouseenter(function () {
        r.disabled || (e(this).removeClass("ui-resizable-autohide"), o._handles.show());
      }).mouseleave(function () {
        r.disabled || o.resizing || (e(this).addClass("ui-resizable-autohide"), o._handles.hide());
      })), this._mouseInit();
    }, _destroy: function _destroy() {
      this._mouseDestroy();var t,
          i = function i(t) {
        e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove();
      };return this.elementIsWrapper && (i(this.element), t = this.element, this.originalElement.css({ position: t.css("position"), width: t.outerWidth(), height: t.outerHeight(), top: t.css("top"), left: t.css("left") }).insertAfter(t), t.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this;
    }, _mouseCapture: function _mouseCapture(t) {
      var i,
          s,
          n = !1;for (i in this.handles) {
        s = e(this.handles[i])[0], (s === t.target || e.contains(s, t.target)) && (n = !0);
      }return !this.options.disabled && n;
    }, _mouseStart: function _mouseStart(t) {
      var i,
          s,
          n,
          a = this.options,
          o = this.element;return this.resizing = !0, this._renderProxy(), i = this._num(this.helper.css("left")), s = this._num(this.helper.css("top")), a.containment && (i += e(a.containment).scrollLeft() || 0, s += e(a.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = { left: i, top: s }, this.size = this._helper ? { width: this.helper.width(), height: this.helper.height() } : { width: o.width(), height: o.height() }, this.originalSize = this._helper ? { width: o.outerWidth(), height: o.outerHeight() } : { width: o.width(), height: o.height() }, this.sizeDiff = { width: o.outerWidth() - o.width(), height: o.outerHeight() - o.height() }, this.originalPosition = { left: i, top: s }, this.originalMousePosition = { left: t.pageX, top: t.pageY }, this.aspectRatio = "number" == typeof a.aspectRatio ? a.aspectRatio : this.originalSize.width / this.originalSize.height || 1, n = e(".ui-resizable-" + this.axis).css("cursor"), e("body").css("cursor", "auto" === n ? this.axis + "-resize" : n), o.addClass("ui-resizable-resizing"), this._propagate("start", t), !0;
    }, _mouseDrag: function _mouseDrag(t) {
      var i,
          s,
          n = this.originalMousePosition,
          a = this.axis,
          o = t.pageX - n.left || 0,
          r = t.pageY - n.top || 0,
          h = this._change[a];return this._updatePrevProperties(), h ? (i = h.apply(this, [t, o, r]), this._updateVirtualBoundaries(t.shiftKey), (this._aspectRatio || t.shiftKey) && (i = this._updateRatio(i, t)), i = this._respectSize(i, t), this._updateCache(i), this._propagate("resize", t), s = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), e.isEmptyObject(s) || (this._updatePrevProperties(), this._trigger("resize", t, this.ui()), this._applyChanges()), !1) : !1;
    }, _mouseStop: function _mouseStop(t) {
      this.resizing = !1;var i,
          s,
          n,
          a,
          o,
          r,
          h,
          l = this.options,
          u = this;return this._helper && (i = this._proportionallyResizeElements, s = i.length && /textarea/i.test(i[0].nodeName), n = s && this._hasScroll(i[0], "left") ? 0 : u.sizeDiff.height, a = s ? 0 : u.sizeDiff.width, o = { width: u.helper.width() - a, height: u.helper.height() - n }, r = parseInt(u.element.css("left"), 10) + (u.position.left - u.originalPosition.left) || null, h = parseInt(u.element.css("top"), 10) + (u.position.top - u.originalPosition.top) || null, l.animate || this.element.css(e.extend(o, { top: h, left: r })), u.helper.height(u.size.height), u.helper.width(u.size.width), this._helper && !l.animate && this._proportionallyResize()), e("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", t), this._helper && this.helper.remove(), !1;
    }, _updatePrevProperties: function _updatePrevProperties() {
      this.prevPosition = { top: this.position.top, left: this.position.left }, this.prevSize = { width: this.size.width, height: this.size.height };
    }, _applyChanges: function _applyChanges() {
      var e = {};return this.position.top !== this.prevPosition.top && (e.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (e.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (e.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (e.height = this.size.height + "px"), this.helper.css(e), e;
    }, _updateVirtualBoundaries: function _updateVirtualBoundaries(e) {
      var t,
          i,
          s,
          n,
          a,
          o = this.options;a = { minWidth: this._isNumber(o.minWidth) ? o.minWidth : 0, maxWidth: this._isNumber(o.maxWidth) ? o.maxWidth : 1 / 0, minHeight: this._isNumber(o.minHeight) ? o.minHeight : 0, maxHeight: this._isNumber(o.maxHeight) ? o.maxHeight : 1 / 0 }, (this._aspectRatio || e) && (t = a.minHeight * this.aspectRatio, s = a.minWidth / this.aspectRatio, i = a.maxHeight * this.aspectRatio, n = a.maxWidth / this.aspectRatio, t > a.minWidth && (a.minWidth = t), s > a.minHeight && (a.minHeight = s), a.maxWidth > i && (a.maxWidth = i), a.maxHeight > n && (a.maxHeight = n)), this._vBoundaries = a;
    }, _updateCache: function _updateCache(e) {
      this.offset = this.helper.offset(), this._isNumber(e.left) && (this.position.left = e.left), this._isNumber(e.top) && (this.position.top = e.top), this._isNumber(e.height) && (this.size.height = e.height), this._isNumber(e.width) && (this.size.width = e.width);
    }, _updateRatio: function _updateRatio(e) {
      var t = this.position,
          i = this.size,
          s = this.axis;return this._isNumber(e.height) ? e.width = e.height * this.aspectRatio : this._isNumber(e.width) && (e.height = e.width / this.aspectRatio), "sw" === s && (e.left = t.left + (i.width - e.width), e.top = null), "nw" === s && (e.top = t.top + (i.height - e.height), e.left = t.left + (i.width - e.width)), e;
    }, _respectSize: function _respectSize(e) {
      var t = this._vBoundaries,
          i = this.axis,
          s = this._isNumber(e.width) && t.maxWidth && t.maxWidth < e.width,
          n = this._isNumber(e.height) && t.maxHeight && t.maxHeight < e.height,
          a = this._isNumber(e.width) && t.minWidth && t.minWidth > e.width,
          o = this._isNumber(e.height) && t.minHeight && t.minHeight > e.height,
          r = this.originalPosition.left + this.originalSize.width,
          h = this.position.top + this.size.height,
          l = /sw|nw|w/.test(i),
          u = /nw|ne|n/.test(i);return a && (e.width = t.minWidth), o && (e.height = t.minHeight), s && (e.width = t.maxWidth), n && (e.height = t.maxHeight), a && l && (e.left = r - t.minWidth), s && l && (e.left = r - t.maxWidth), o && u && (e.top = h - t.minHeight), n && u && (e.top = h - t.maxHeight), e.width || e.height || e.left || !e.top ? e.width || e.height || e.top || !e.left || (e.left = null) : e.top = null, e;
    }, _getPaddingPlusBorderDimensions: function _getPaddingPlusBorderDimensions(e) {
      for (var t = 0, i = [], s = [e.css("borderTopWidth"), e.css("borderRightWidth"), e.css("borderBottomWidth"), e.css("borderLeftWidth")], n = [e.css("paddingTop"), e.css("paddingRight"), e.css("paddingBottom"), e.css("paddingLeft")]; 4 > t; t++) {
        i[t] = parseInt(s[t], 10) || 0, i[t] += parseInt(n[t], 10) || 0;
      }return { height: i[0] + i[2], width: i[1] + i[3] };
    }, _proportionallyResize: function _proportionallyResize() {
      if (this._proportionallyResizeElements.length) for (var e, t = 0, i = this.helper || this.element; this._proportionallyResizeElements.length > t; t++) {
        e = this._proportionallyResizeElements[t], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(e)), e.css({ height: i.height() - this.outerDimensions.height || 0, width: i.width() - this.outerDimensions.width || 0 });
      }
    }, _renderProxy: function _renderProxy() {
      var t = this.element,
          i = this.options;this.elementOffset = t.offset(), this._helper ? (this.helper = this.helper || e("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({ width: this.element.outerWidth() - 1, height: this.element.outerHeight() - 1, position: "absolute", left: this.elementOffset.left + "px", top: this.elementOffset.top + "px", zIndex: ++i.zIndex }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element;
    }, _change: { e: function e(_e, t) {
        return { width: this.originalSize.width + t };
      }, w: function w(e, t) {
        var i = this.originalSize,
            s = this.originalPosition;return { left: s.left + t, width: i.width - t };
      }, n: function n(e, t, i) {
        var s = this.originalSize,
            n = this.originalPosition;return { top: n.top + i, height: s.height - i };
      }, s: function s(e, t, i) {
        return { height: this.originalSize.height + i };
      }, se: function se(t, i, s) {
        return e.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, i, s]));
      }, sw: function sw(t, i, s) {
        return e.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, i, s]));
      }, ne: function ne(t, i, s) {
        return e.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, i, s]));
      }, nw: function nw(t, i, s) {
        return e.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, i, s]));
      } }, _propagate: function _propagate(t, i) {
      e.ui.plugin.call(this, t, [i, this.ui()]), "resize" !== t && this._trigger(t, i, this.ui());
    }, plugins: {}, ui: function ui() {
      return { originalElement: this.originalElement, element: this.element, helper: this.helper, position: this.position, size: this.size, originalSize: this.originalSize, originalPosition: this.originalPosition };
    } }), e.ui.plugin.add("resizable", "animate", { stop: function stop(t) {
      var i = e(this).resizable("instance"),
          s = i.options,
          n = i._proportionallyResizeElements,
          a = n.length && /textarea/i.test(n[0].nodeName),
          o = a && i._hasScroll(n[0], "left") ? 0 : i.sizeDiff.height,
          r = a ? 0 : i.sizeDiff.width,
          h = { width: i.size.width - r, height: i.size.height - o },
          l = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null,
          u = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null;i.element.animate(e.extend(h, u && l ? { top: u, left: l } : {}), { duration: s.animateDuration, easing: s.animateEasing, step: function step() {
          var s = { width: parseInt(i.element.css("width"), 10), height: parseInt(i.element.css("height"), 10), top: parseInt(i.element.css("top"), 10), left: parseInt(i.element.css("left"), 10) };n && n.length && e(n[0]).css({ width: s.width, height: s.height }), i._updateCache(s), i._propagate("resize", t);
        } });
    } }), e.ui.plugin.add("resizable", "containment", { start: function start() {
      var t,
          i,
          s,
          n,
          a,
          o,
          r,
          h = e(this).resizable("instance"),
          l = h.options,
          u = h.element,
          d = l.containment,
          c = d instanceof e ? d.get(0) : /parent/.test(d) ? u.parent().get(0) : d;c && (h.containerElement = e(c), /document/.test(d) || d === document ? (h.containerOffset = { left: 0, top: 0 }, h.containerPosition = { left: 0, top: 0 }, h.parentData = { element: e(document), left: 0, top: 0, width: e(document).width(), height: e(document).height() || document.body.parentNode.scrollHeight }) : (t = e(c), i = [], e(["Top", "Right", "Left", "Bottom"]).each(function (e, s) {
        i[e] = h._num(t.css("padding" + s));
      }), h.containerOffset = t.offset(), h.containerPosition = t.position(), h.containerSize = { height: t.innerHeight() - i[3], width: t.innerWidth() - i[1] }, s = h.containerOffset, n = h.containerSize.height, a = h.containerSize.width, o = h._hasScroll(c, "left") ? c.scrollWidth : a, r = h._hasScroll(c) ? c.scrollHeight : n, h.parentData = { element: c, left: s.left, top: s.top, width: o, height: r }));
    }, resize: function resize(t) {
      var i,
          s,
          n,
          a,
          o = e(this).resizable("instance"),
          r = o.options,
          h = o.containerOffset,
          l = o.position,
          u = o._aspectRatio || t.shiftKey,
          d = { top: 0, left: 0 },
          c = o.containerElement,
          p = !0;c[0] !== document && /static/.test(c.css("position")) && (d = h), l.left < (o._helper ? h.left : 0) && (o.size.width = o.size.width + (o._helper ? o.position.left - h.left : o.position.left - d.left), u && (o.size.height = o.size.width / o.aspectRatio, p = !1), o.position.left = r.helper ? h.left : 0), l.top < (o._helper ? h.top : 0) && (o.size.height = o.size.height + (o._helper ? o.position.top - h.top : o.position.top), u && (o.size.width = o.size.height * o.aspectRatio, p = !1), o.position.top = o._helper ? h.top : 0), n = o.containerElement.get(0) === o.element.parent().get(0), a = /relative|absolute/.test(o.containerElement.css("position")), n && a ? (o.offset.left = o.parentData.left + o.position.left, o.offset.top = o.parentData.top + o.position.top) : (o.offset.left = o.element.offset().left, o.offset.top = o.element.offset().top), i = Math.abs(o.sizeDiff.width + (o._helper ? o.offset.left - d.left : o.offset.left - h.left)), s = Math.abs(o.sizeDiff.height + (o._helper ? o.offset.top - d.top : o.offset.top - h.top)), i + o.size.width >= o.parentData.width && (o.size.width = o.parentData.width - i, u && (o.size.height = o.size.width / o.aspectRatio, p = !1)), s + o.size.height >= o.parentData.height && (o.size.height = o.parentData.height - s, u && (o.size.width = o.size.height * o.aspectRatio, p = !1)), p || (o.position.left = o.prevPosition.left, o.position.top = o.prevPosition.top, o.size.width = o.prevSize.width, o.size.height = o.prevSize.height);
    }, stop: function stop() {
      var t = e(this).resizable("instance"),
          i = t.options,
          s = t.containerOffset,
          n = t.containerPosition,
          a = t.containerElement,
          o = e(t.helper),
          r = o.offset(),
          h = o.outerWidth() - t.sizeDiff.width,
          l = o.outerHeight() - t.sizeDiff.height;t._helper && !i.animate && /relative/.test(a.css("position")) && e(this).css({ left: r.left - n.left - s.left, width: h, height: l }), t._helper && !i.animate && /static/.test(a.css("position")) && e(this).css({ left: r.left - n.left - s.left, width: h, height: l });
    } }), e.ui.plugin.add("resizable", "alsoResize", { start: function start() {
      var t = e(this).resizable("instance"),
          i = t.options;e(i.alsoResize).each(function () {
        var t = e(this);t.data("ui-resizable-alsoresize", { width: parseInt(t.width(), 10), height: parseInt(t.height(), 10), left: parseInt(t.css("left"), 10), top: parseInt(t.css("top"), 10) });
      });
    }, resize: function resize(t, i) {
      var s = e(this).resizable("instance"),
          n = s.options,
          a = s.originalSize,
          o = s.originalPosition,
          r = { height: s.size.height - a.height || 0, width: s.size.width - a.width || 0, top: s.position.top - o.top || 0, left: s.position.left - o.left || 0 };e(n.alsoResize).each(function () {
        var t = e(this),
            s = e(this).data("ui-resizable-alsoresize"),
            n = {},
            a = t.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];e.each(a, function (e, t) {
          var i = (s[t] || 0) + (r[t] || 0);i && i >= 0 && (n[t] = i || null);
        }), t.css(n);
      });
    }, stop: function stop() {
      e(this).removeData("resizable-alsoresize");
    } }), e.ui.plugin.add("resizable", "ghost", { start: function start() {
      var t = e(this).resizable("instance"),
          i = t.options,
          s = t.size;t.ghost = t.originalElement.clone(), t.ghost.css({ opacity: .25, display: "block", position: "relative", height: s.height, width: s.width, margin: 0, left: 0, top: 0 }).addClass("ui-resizable-ghost").addClass("string" == typeof i.ghost ? i.ghost : ""), t.ghost.appendTo(t.helper);
    }, resize: function resize() {
      var t = e(this).resizable("instance");t.ghost && t.ghost.css({ position: "relative", height: t.size.height, width: t.size.width });
    }, stop: function stop() {
      var t = e(this).resizable("instance");t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0));
    } }), e.ui.plugin.add("resizable", "grid", { resize: function resize() {
      var t,
          i = e(this).resizable("instance"),
          s = i.options,
          n = i.size,
          a = i.originalSize,
          o = i.originalPosition,
          r = i.axis,
          h = "number" == typeof s.grid ? [s.grid, s.grid] : s.grid,
          l = h[0] || 1,
          u = h[1] || 1,
          d = Math.round((n.width - a.width) / l) * l,
          c = Math.round((n.height - a.height) / u) * u,
          p = a.width + d,
          f = a.height + c,
          m = s.maxWidth && p > s.maxWidth,
          g = s.maxHeight && f > s.maxHeight,
          v = s.minWidth && s.minWidth > p,
          y = s.minHeight && s.minHeight > f;s.grid = h, v && (p += l), y && (f += u), m && (p -= l), g && (f -= u), /^(se|s|e)$/.test(r) ? (i.size.width = p, i.size.height = f) : /^(ne)$/.test(r) ? (i.size.width = p, i.size.height = f, i.position.top = o.top - c) : /^(sw)$/.test(r) ? (i.size.width = p, i.size.height = f, i.position.left = o.left - d) : ((0 >= f - u || 0 >= p - l) && (t = i._getPaddingPlusBorderDimensions(this)), f - u > 0 ? (i.size.height = f, i.position.top = o.top - c) : (f = u - t.height, i.size.height = f, i.position.top = o.top + a.height - f), p - l > 0 ? (i.size.width = p, i.position.left = o.left - d) : (p = l - t.width, i.size.width = p, i.position.left = o.left + a.width - p));
    } }), e.ui.resizable, e.widget("ui.selectable", e.ui.mouse, { version: "1.11.4", options: { appendTo: "body", autoRefresh: !0, distance: 0, filter: "*", tolerance: "touch", selected: null, selecting: null, start: null, stop: null, unselected: null, unselecting: null }, _create: function _create() {
      var t,
          i = this;this.element.addClass("ui-selectable"), this.dragged = !1, this.refresh = function () {
        t = e(i.options.filter, i.element[0]), t.addClass("ui-selectee"), t.each(function () {
          var t = e(this),
              i = t.offset();e.data(this, "selectable-item", { element: this, $element: t, left: i.left, top: i.top, right: i.left + t.outerWidth(), bottom: i.top + t.outerHeight(), startselected: !1, selected: t.hasClass("ui-selected"), selecting: t.hasClass("ui-selecting"), unselecting: t.hasClass("ui-unselecting") });
        });
      }, this.refresh(), this.selectees = t.addClass("ui-selectee"), this._mouseInit(), this.helper = e("<div class='ui-selectable-helper'></div>");
    }, _destroy: function _destroy() {
      this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled"), this._mouseDestroy();
    }, _mouseStart: function _mouseStart(t) {
      var i = this,
          s = this.options;this.opos = [t.pageX, t.pageY], this.options.disabled || (this.selectees = e(s.filter, this.element[0]), this._trigger("start", t), e(s.appendTo).append(this.helper), this.helper.css({ left: t.pageX, top: t.pageY, width: 0, height: 0 }), s.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function () {
        var s = e.data(this, "selectable-item");s.startselected = !0, t.metaKey || t.ctrlKey || (s.$element.removeClass("ui-selected"), s.selected = !1, s.$element.addClass("ui-unselecting"), s.unselecting = !0, i._trigger("unselecting", t, { unselecting: s.element }));
      }), e(t.target).parents().addBack().each(function () {
        var s,
            n = e.data(this, "selectable-item");return n ? (s = !t.metaKey && !t.ctrlKey || !n.$element.hasClass("ui-selected"), n.$element.removeClass(s ? "ui-unselecting" : "ui-selected").addClass(s ? "ui-selecting" : "ui-unselecting"), n.unselecting = !s, n.selecting = s, n.selected = s, s ? i._trigger("selecting", t, { selecting: n.element }) : i._trigger("unselecting", t, { unselecting: n.element }), !1) : void 0;
      }));
    }, _mouseDrag: function _mouseDrag(t) {
      if (this.dragged = !0, !this.options.disabled) {
        var i,
            s = this,
            n = this.options,
            a = this.opos[0],
            o = this.opos[1],
            r = t.pageX,
            h = t.pageY;return a > r && (i = r, r = a, a = i), o > h && (i = h, h = o, o = i), this.helper.css({ left: a, top: o, width: r - a, height: h - o }), this.selectees.each(function () {
          var i = e.data(this, "selectable-item"),
              l = !1;i && i.element !== s.element[0] && ("touch" === n.tolerance ? l = !(i.left > r || a > i.right || i.top > h || o > i.bottom) : "fit" === n.tolerance && (l = i.left > a && r > i.right && i.top > o && h > i.bottom), l ? (i.selected && (i.$element.removeClass("ui-selected"), i.selected = !1), i.unselecting && (i.$element.removeClass("ui-unselecting"), i.unselecting = !1), i.selecting || (i.$element.addClass("ui-selecting"), i.selecting = !0, s._trigger("selecting", t, { selecting: i.element }))) : (i.selecting && ((t.metaKey || t.ctrlKey) && i.startselected ? (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.$element.addClass("ui-selected"), i.selected = !0) : (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.startselected && (i.$element.addClass("ui-unselecting"), i.unselecting = !0), s._trigger("unselecting", t, { unselecting: i.element }))), i.selected && (t.metaKey || t.ctrlKey || i.startselected || (i.$element.removeClass("ui-selected"), i.selected = !1, i.$element.addClass("ui-unselecting"), i.unselecting = !0, s._trigger("unselecting", t, { unselecting: i.element })))));
        }), !1;
      }
    }, _mouseStop: function _mouseStop(t) {
      var i = this;return this.dragged = !1, e(".ui-unselecting", this.element[0]).each(function () {
        var s = e.data(this, "selectable-item");s.$element.removeClass("ui-unselecting"), s.unselecting = !1, s.startselected = !1, i._trigger("unselected", t, { unselected: s.element });
      }), e(".ui-selecting", this.element[0]).each(function () {
        var s = e.data(this, "selectable-item");s.$element.removeClass("ui-selecting").addClass("ui-selected"), s.selecting = !1, s.selected = !0, s.startselected = !0, i._trigger("selected", t, { selected: s.element });
      }), this._trigger("stop", t), this.helper.remove(), !1;
    } }), e.widget("ui.sortable", e.ui.mouse, { version: "1.11.4", widgetEventPrefix: "sort", ready: !1, options: { appendTo: "parent", axis: !1, connectWith: !1, containment: !1, cursor: "auto", cursorAt: !1, dropOnEmpty: !0, forcePlaceholderSize: !1, forceHelperSize: !1, grid: !1, handle: !1, helper: "original", items: "> *", opacity: !1, placeholder: !1, revert: !1, scroll: !0, scrollSensitivity: 20, scrollSpeed: 20, scope: "default", tolerance: "intersect", zIndex: 1e3, activate: null, beforeStop: null, change: null, deactivate: null, out: null, over: null, receive: null, remove: null, sort: null, start: null, stop: null, update: null }, _isOverAxis: function _isOverAxis(e, t, i) {
      return e >= t && t + i > e;
    }, _isFloating: function _isFloating(e) {
      return (/left|right/.test(e.css("float")) || /inline|table-cell/.test(e.css("display"))
      );
    }, _create: function _create() {
      this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.offset = this.element.offset(), this._mouseInit(), this._setHandleClassName(), this.ready = !0;
    }, _setOption: function _setOption(e, t) {
      this._super(e, t), "handle" === e && this._setHandleClassName();
    }, _setHandleClassName: function _setHandleClassName() {
      this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle"), e.each(this.items, function () {
        (this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item).addClass("ui-sortable-handle");
      });
    }, _destroy: function _destroy() {
      this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle"), this._mouseDestroy();for (var e = this.items.length - 1; e >= 0; e--) {
        this.items[e].item.removeData(this.widgetName + "-item");
      }return this;
    }, _mouseCapture: function _mouseCapture(t, i) {
      var s = null,
          n = !1,
          a = this;return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(t), e(t.target).parents().each(function () {
        return e.data(this, a.widgetName + "-item") === a ? (s = e(this), !1) : void 0;
      }), e.data(t.target, a.widgetName + "-item") === a && (s = e(t.target)), s ? !this.options.handle || i || (e(this.options.handle, s).find("*").addBack().each(function () {
        this === t.target && (n = !0);
      }), n) ? (this.currentItem = s, this._removeCurrentsFromItems(), !0) : !1 : !1);
    }, _mouseStart: function _mouseStart(t, i, s) {
      var n,
          a,
          o = this.options;if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(t), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = { top: this.offset.top - this.margins.top, left: this.offset.left - this.margins.left }, e.extend(this.offset, { click: { left: t.pageX - this.offset.left, top: t.pageY - this.offset.top }, parent: this._getParentOffset(), relative: this._getRelativeOffset() }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt), this.domPosition = { prev: this.currentItem.prev()[0], parent: this.currentItem.parent()[0] }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), o.containment && this._setContainment(), o.cursor && "auto" !== o.cursor && (a = this.document.find("body"), this.storedCursor = a.css("cursor"), a.css("cursor", o.cursor), this.storedStylesheet = e("<style>*{ cursor: " + o.cursor + " !important; }</style>").appendTo(a)), o.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", o.opacity)), o.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", o.zIndex)), this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", t, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !s) for (n = this.containers.length - 1; n >= 0; n--) {
        this.containers[n]._trigger("activate", t, this._uiHash(this));
      }return e.ui.ddmanager && (e.ui.ddmanager.current = this), e.ui.ddmanager && !o.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(t), !0;
    }, _mouseDrag: function _mouseDrag(t) {
      var i,
          s,
          n,
          a,
          o = this.options,
          r = !1;for (this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < o.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + o.scrollSpeed : t.pageY - this.overflowOffset.top < o.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - o.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < o.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + o.scrollSpeed : t.pageX - this.overflowOffset.left < o.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - o.scrollSpeed)) : (t.pageY - this.document.scrollTop() < o.scrollSensitivity ? r = this.document.scrollTop(this.document.scrollTop() - o.scrollSpeed) : this.window.height() - (t.pageY - this.document.scrollTop()) < o.scrollSensitivity && (r = this.document.scrollTop(this.document.scrollTop() + o.scrollSpeed)), t.pageX - this.document.scrollLeft() < o.scrollSensitivity ? r = this.document.scrollLeft(this.document.scrollLeft() - o.scrollSpeed) : this.window.width() - (t.pageX - this.document.scrollLeft()) < o.scrollSensitivity && (r = this.document.scrollLeft(this.document.scrollLeft() + o.scrollSpeed))), r !== !1 && e.ui.ddmanager && !o.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--) {
        if (s = this.items[i], n = s.item[0], a = this._intersectsWithPointer(s), a && s.instance === this.currentContainer && n !== this.currentItem[0] && this.placeholder[1 === a ? "next" : "prev"]()[0] !== n && !e.contains(this.placeholder[0], n) && ("semi-dynamic" === this.options.type ? !e.contains(this.element[0], n) : !0)) {
          if (this.direction = 1 === a ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(s)) break;
          this._rearrange(t, s), this._trigger("change", t, this._uiHash());break;
        }
      }return this._contactContainers(t), e.ui.ddmanager && e.ui.ddmanager.drag(this, t), this._trigger("sort", t, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1;
    }, _mouseStop: function _mouseStop(t, i) {
      if (t) {
        if (e.ui.ddmanager && !this.options.dropBehaviour && e.ui.ddmanager.drop(this, t), this.options.revert) {
          var s = this,
              n = this.placeholder.offset(),
              a = this.options.axis,
              o = {};a && "x" !== a || (o.left = n.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)), a && "y" !== a || (o.top = n.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, e(this.helper).animate(o, parseInt(this.options.revert, 10) || 500, function () {
            s._clear(t);
          });
        } else this._clear(t, i);return !1;
      }
    }, cancel: function cancel() {
      if (this.dragging) {
        this._mouseUp({ target: null }), "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();for (var t = this.containers.length - 1; t >= 0; t--) {
          this.containers[t]._trigger("deactivate", null, this._uiHash(this)), this.containers[t].containerCache.over && (this.containers[t]._trigger("out", null, this._uiHash(this)), this.containers[t].containerCache.over = 0);
        }
      }return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), e.extend(this, { helper: null, dragging: !1, reverting: !1, _noFinalSort: null }), this.domPosition.prev ? e(this.domPosition.prev).after(this.currentItem) : e(this.domPosition.parent).prepend(this.currentItem)), this;
    }, serialize: function serialize(t) {
      var i = this._getItemsAsjQuery(t && t.connected),
          s = [];return t = t || {}, e(i).each(function () {
        var i = (e(t.item || this).attr(t.attribute || "id") || "").match(t.expression || /(.+)[\-=_](.+)/);i && s.push((t.key || i[1] + "[]") + "=" + (t.key && t.expression ? i[1] : i[2]));
      }), !s.length && t.key && s.push(t.key + "="), s.join("&");
    }, toArray: function toArray(t) {
      var i = this._getItemsAsjQuery(t && t.connected),
          s = [];return t = t || {}, i.each(function () {
        s.push(e(t.item || this).attr(t.attribute || "id") || "");
      }), s;
    }, _intersectsWith: function _intersectsWith(e) {
      var t = this.positionAbs.left,
          i = t + this.helperProportions.width,
          s = this.positionAbs.top,
          n = s + this.helperProportions.height,
          a = e.left,
          o = a + e.width,
          r = e.top,
          h = r + e.height,
          l = this.offset.click.top,
          u = this.offset.click.left,
          d = "x" === this.options.axis || s + l > r && h > s + l,
          c = "y" === this.options.axis || t + u > a && o > t + u,
          p = d && c;return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > e[this.floating ? "width" : "height"] ? p : t + this.helperProportions.width / 2 > a && o > i - this.helperProportions.width / 2 && s + this.helperProportions.height / 2 > r && h > n - this.helperProportions.height / 2;
    }, _intersectsWithPointer: function _intersectsWithPointer(e) {
      var t = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, e.top, e.height),
          i = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, e.left, e.width),
          s = t && i,
          n = this._getDragVerticalDirection(),
          a = this._getDragHorizontalDirection();return s ? this.floating ? a && "right" === a || "down" === n ? 2 : 1 : n && ("down" === n ? 2 : 1) : !1;
    }, _intersectsWithSides: function _intersectsWithSides(e) {
      var t = this._isOverAxis(this.positionAbs.top + this.offset.click.top, e.top + e.height / 2, e.height),
          i = this._isOverAxis(this.positionAbs.left + this.offset.click.left, e.left + e.width / 2, e.width),
          s = this._getDragVerticalDirection(),
          n = this._getDragHorizontalDirection();return this.floating && n ? "right" === n && i || "left" === n && !i : s && ("down" === s && t || "up" === s && !t);
    }, _getDragVerticalDirection: function _getDragVerticalDirection() {
      var e = this.positionAbs.top - this.lastPositionAbs.top;return 0 !== e && (e > 0 ? "down" : "up");
    }, _getDragHorizontalDirection: function _getDragHorizontalDirection() {
      var e = this.positionAbs.left - this.lastPositionAbs.left;return 0 !== e && (e > 0 ? "right" : "left");
    }, refresh: function refresh(e) {
      return this._refreshItems(e), this._setHandleClassName(), this.refreshPositions(), this;
    }, _connectWith: function _connectWith() {
      var e = this.options;return e.connectWith.constructor === String ? [e.connectWith] : e.connectWith;
    }, _getItemsAsjQuery: function _getItemsAsjQuery(t) {
      function i() {
        r.push(this);
      }var s,
          n,
          a,
          o,
          r = [],
          h = [],
          l = this._connectWith();if (l && t) for (s = l.length - 1; s >= 0; s--) {
        for (a = e(l[s], this.document[0]), n = a.length - 1; n >= 0; n--) {
          o = e.data(a[n], this.widgetFullName), o && o !== this && !o.options.disabled && h.push([e.isFunction(o.options.items) ? o.options.items.call(o.element) : e(o.options.items, o.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), o]);
        }
      }for (h.push([e.isFunction(this.options.items) ? this.options.items.call(this.element, null, { options: this.options, item: this.currentItem }) : e(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), s = h.length - 1; s >= 0; s--) {
        h[s][0].each(i);
      }return e(r);
    }, _removeCurrentsFromItems: function _removeCurrentsFromItems() {
      var t = this.currentItem.find(":data(" + this.widgetName + "-item)");this.items = e.grep(this.items, function (e) {
        for (var i = 0; t.length > i; i++) {
          if (t[i] === e.item[0]) return !1;
        }return !0;
      });
    }, _refreshItems: function _refreshItems(t) {
      this.items = [], this.containers = [this];var i,
          s,
          n,
          a,
          o,
          r,
          h,
          l,
          u = this.items,
          d = [[e.isFunction(this.options.items) ? this.options.items.call(this.element[0], t, { item: this.currentItem }) : e(this.options.items, this.element), this]],
          c = this._connectWith();if (c && this.ready) for (i = c.length - 1; i >= 0; i--) {
        for (n = e(c[i], this.document[0]), s = n.length - 1; s >= 0; s--) {
          a = e.data(n[s], this.widgetFullName), a && a !== this && !a.options.disabled && (d.push([e.isFunction(a.options.items) ? a.options.items.call(a.element[0], t, { item: this.currentItem }) : e(a.options.items, a.element), a]), this.containers.push(a));
        }
      }for (i = d.length - 1; i >= 0; i--) {
        for (o = d[i][1], r = d[i][0], s = 0, l = r.length; l > s; s++) {
          h = e(r[s]), h.data(this.widgetName + "-item", o), u.push({ item: h, instance: o, width: 0, height: 0, left: 0, top: 0 });
        }
      }
    }, refreshPositions: function refreshPositions(t) {
      this.floating = this.items.length ? "x" === this.options.axis || this._isFloating(this.items[0].item) : !1, this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());var i, s, n, a;for (i = this.items.length - 1; i >= 0; i--) {
        s = this.items[i], s.instance !== this.currentContainer && this.currentContainer && s.item[0] !== this.currentItem[0] || (n = this.options.toleranceElement ? e(this.options.toleranceElement, s.item) : s.item, t || (s.width = n.outerWidth(), s.height = n.outerHeight()), a = n.offset(), s.left = a.left, s.top = a.top);
      }if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);else for (i = this.containers.length - 1; i >= 0; i--) {
        a = this.containers[i].element.offset(), this.containers[i].containerCache.left = a.left, this.containers[i].containerCache.top = a.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
      }return this;
    }, _createPlaceholder: function _createPlaceholder(t) {
      t = t || this;var i,
          s = t.options;s.placeholder && s.placeholder.constructor !== String || (i = s.placeholder, s.placeholder = { element: function element() {
          var s = t.currentItem[0].nodeName.toLowerCase(),
              n = e("<" + s + ">", t.document[0]).addClass(i || t.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");return "tbody" === s ? t._createTrPlaceholder(t.currentItem.find("tr").eq(0), e("<tr>", t.document[0]).appendTo(n)) : "tr" === s ? t._createTrPlaceholder(t.currentItem, n) : "img" === s && n.attr("src", t.currentItem.attr("src")), i || n.css("visibility", "hidden"), n;
        }, update: function update(e, n) {
          (!i || s.forcePlaceholderSize) && (n.height() || n.height(t.currentItem.innerHeight() - parseInt(t.currentItem.css("paddingTop") || 0, 10) - parseInt(t.currentItem.css("paddingBottom") || 0, 10)), n.width() || n.width(t.currentItem.innerWidth() - parseInt(t.currentItem.css("paddingLeft") || 0, 10) - parseInt(t.currentItem.css("paddingRight") || 0, 10)));
        } }), t.placeholder = e(s.placeholder.element.call(t.element, t.currentItem)), t.currentItem.after(t.placeholder), s.placeholder.update(t, t.placeholder);
    }, _createTrPlaceholder: function _createTrPlaceholder(t, i) {
      var s = this;t.children().each(function () {
        e("<td>&#160;</td>", s.document[0]).attr("colspan", e(this).attr("colspan") || 1).appendTo(i);
      });
    }, _contactContainers: function _contactContainers(t) {
      var i,
          s,
          n,
          a,
          o,
          r,
          h,
          l,
          u,
          d,
          c = null,
          p = null;for (i = this.containers.length - 1; i >= 0; i--) {
        if (!e.contains(this.currentItem[0], this.containers[i].element[0])) if (this._intersectsWith(this.containers[i].containerCache)) {
          if (c && e.contains(this.containers[i].element[0], c.element[0])) continue;c = this.containers[i], p = i;
        } else this.containers[i].containerCache.over && (this.containers[i]._trigger("out", t, this._uiHash(this)), this.containers[i].containerCache.over = 0);
      }if (c) if (1 === this.containers.length) this.containers[p].containerCache.over || (this.containers[p]._trigger("over", t, this._uiHash(this)), this.containers[p].containerCache.over = 1);else {
        for (n = 1e4, a = null, u = c.floating || this._isFloating(this.currentItem), o = u ? "left" : "top", r = u ? "width" : "height", d = u ? "clientX" : "clientY", s = this.items.length - 1; s >= 0; s--) {
          e.contains(this.containers[p].element[0], this.items[s].item[0]) && this.items[s].item[0] !== this.currentItem[0] && (h = this.items[s].item.offset()[o], l = !1, t[d] - h > this.items[s][r] / 2 && (l = !0), n > Math.abs(t[d] - h) && (n = Math.abs(t[d] - h), a = this.items[s], this.direction = l ? "up" : "down"));
        }if (!a && !this.options.dropOnEmpty) return;if (this.currentContainer === this.containers[p]) return this.currentContainer.containerCache.over || (this.containers[p]._trigger("over", t, this._uiHash()), this.currentContainer.containerCache.over = 1), void 0;a ? this._rearrange(t, a, null, !0) : this._rearrange(t, null, this.containers[p].element, !0), this._trigger("change", t, this._uiHash()), this.containers[p]._trigger("change", t, this._uiHash(this)), this.currentContainer = this.containers[p], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[p]._trigger("over", t, this._uiHash(this)), this.containers[p].containerCache.over = 1;
      }
    }, _createHelper: function _createHelper(t) {
      var i = this.options,
          s = e.isFunction(i.helper) ? e(i.helper.apply(this.element[0], [t, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;return s.parents("body").length || e("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(s[0]), s[0] === this.currentItem[0] && (this._storedCSS = { width: this.currentItem[0].style.width, height: this.currentItem[0].style.height, position: this.currentItem.css("position"), top: this.currentItem.css("top"), left: this.currentItem.css("left") }), (!s[0].style.width || i.forceHelperSize) && s.width(this.currentItem.width()), (!s[0].style.height || i.forceHelperSize) && s.height(this.currentItem.height()), s;
    }, _adjustOffsetFromHelper: function _adjustOffsetFromHelper(t) {
      "string" == typeof t && (t = t.split(" ")), e.isArray(t) && (t = { left: +t[0], top: +t[1] || 0 }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top);
    }, _getParentOffset: function _getParentOffset() {
      this.offsetParent = this.helper.offsetParent();var t = this.offsetParent.offset();return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && e.ui.ie) && (t = { top: 0, left: 0 }), { top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0) };
    }, _getRelativeOffset: function _getRelativeOffset() {
      if ("relative" === this.cssPosition) {
        var e = this.currentItem.position();return { top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(), left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft() };
      }return { top: 0, left: 0 };
    }, _cacheMargins: function _cacheMargins() {
      this.margins = { left: parseInt(this.currentItem.css("marginLeft"), 10) || 0, top: parseInt(this.currentItem.css("marginTop"), 10) || 0 };
    }, _cacheHelperProportions: function _cacheHelperProportions() {
      this.helperProportions = { width: this.helper.outerWidth(), height: this.helper.outerHeight() };
    }, _setContainment: function _setContainment() {
      var t,
          i,
          s,
          n = this.options;"parent" === n.containment && (n.containment = this.helper[0].parentNode), ("document" === n.containment || "window" === n.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === n.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === n.containment ? this.document.width() : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(n.containment) || (t = e(n.containment)[0], i = e(n.containment).offset(), s = "hidden" !== e(t).css("overflow"), this.containment = [i.left + (parseInt(e(t).css("borderLeftWidth"), 10) || 0) + (parseInt(e(t).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(e(t).css("borderTopWidth"), 10) || 0) + (parseInt(e(t).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (s ? Math.max(t.scrollWidth, t.offsetWidth) : t.offsetWidth) - (parseInt(e(t).css("borderLeftWidth"), 10) || 0) - (parseInt(e(t).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (s ? Math.max(t.scrollHeight, t.offsetHeight) : t.offsetHeight) - (parseInt(e(t).css("borderTopWidth"), 10) || 0) - (parseInt(e(t).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]);
    }, _convertPositionTo: function _convertPositionTo(t, i) {
      i || (i = this.position);var s = "absolute" === t ? 1 : -1,
          n = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
          a = /(html|body)/i.test(n[0].tagName);return { top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : a ? 0 : n.scrollTop()) * s, left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : a ? 0 : n.scrollLeft()) * s };
    }, _generatePosition: function _generatePosition(t) {
      var i,
          s,
          n = this.options,
          a = t.pageX,
          o = t.pageY,
          r = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
          h = /(html|body)/i.test(r[0].tagName);return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (a = this.containment[0] + this.offset.click.left), t.pageY - this.offset.click.top < this.containment[1] && (o = this.containment[1] + this.offset.click.top), t.pageX - this.offset.click.left > this.containment[2] && (a = this.containment[2] + this.offset.click.left), t.pageY - this.offset.click.top > this.containment[3] && (o = this.containment[3] + this.offset.click.top)), n.grid && (i = this.originalPageY + Math.round((o - this.originalPageY) / n.grid[1]) * n.grid[1], o = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - n.grid[1] : i + n.grid[1] : i, s = this.originalPageX + Math.round((a - this.originalPageX) / n.grid[0]) * n.grid[0], a = this.containment ? s - this.offset.click.left >= this.containment[0] && s - this.offset.click.left <= this.containment[2] ? s : s - this.offset.click.left >= this.containment[0] ? s - n.grid[0] : s + n.grid[0] : s)), { top: o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : h ? 0 : r.scrollTop()), left: a - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : h ? 0 : r.scrollLeft()) };
    }, _rearrange: function _rearrange(e, t, i, s) {
      i ? i[0].appendChild(this.placeholder[0]) : t.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? t.item[0] : t.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;var n = this.counter;this._delay(function () {
        n === this.counter && this.refreshPositions(!s);
      });
    }, _clear: function _clear(e, t) {
      function i(e, t, i) {
        return function (s) {
          i._trigger(e, s, t._uiHash(t));
        };
      }this.reverting = !1;var s,
          n = [];if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
        for (s in this._storedCSS) {
          ("auto" === this._storedCSS[s] || "static" === this._storedCSS[s]) && (this._storedCSS[s] = "");
        }this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper");
      } else this.currentItem.show();for (this.fromOutside && !t && n.push(function (e) {
        this._trigger("receive", e, this._uiHash(this.fromOutside));
      }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || t || n.push(function (e) {
        this._trigger("update", e, this._uiHash());
      }), this !== this.currentContainer && (t || (n.push(function (e) {
        this._trigger("remove", e, this._uiHash());
      }), n.push(function (e) {
        return function (t) {
          e._trigger("receive", t, this._uiHash(this));
        };
      }.call(this, this.currentContainer)), n.push(function (e) {
        return function (t) {
          e._trigger("update", t, this._uiHash(this));
        };
      }.call(this, this.currentContainer)))), s = this.containers.length - 1; s >= 0; s--) {
        t || n.push(i("deactivate", this, this.containers[s])), this.containers[s].containerCache.over && (n.push(i("out", this, this.containers[s])), this.containers[s].containerCache.over = 0);
      }if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, t || this._trigger("beforeStop", e, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !t) {
        for (s = 0; n.length > s; s++) {
          n[s].call(this, e);
        }this._trigger("stop", e, this._uiHash());
      }return this.fromOutside = !1, !this.cancelHelperRemoval;
    }, _trigger: function _trigger() {
      e.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel();
    }, _uiHash: function _uiHash(t) {
      var i = t || this;return { helper: i.helper, placeholder: i.placeholder || e([]), position: i.position, originalPosition: i.originalPosition, offset: i.positionAbs, item: i.currentItem, sender: t ? t.element : null };
    } });
});

/***/ }),
/* 10 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);