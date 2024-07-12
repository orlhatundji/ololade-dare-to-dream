exports.id = "component---src-pages-index-js";
exports.ids = ["component---src-pages-index-js"];
exports.modules = {

/***/ "./node_modules/camelcase/index.js":
/*!*****************************************!*\
  !*** ./node_modules/camelcase/index.js ***!
  \*****************************************/
/***/ ((module) => {

"use strict";


const UPPERCASE = /[\p{Lu}]/u;
const LOWERCASE = /[\p{Ll}]/u;
const LEADING_CAPITAL = /^[\p{Lu}](?![\p{Lu}])/gu;
const IDENTIFIER = /([\p{Alpha}\p{N}_]|$)/u;
const SEPARATORS = /[_.\- ]+/;

const LEADING_SEPARATORS = new RegExp('^' + SEPARATORS.source);
const SEPARATORS_AND_IDENTIFIER = new RegExp(SEPARATORS.source + IDENTIFIER.source, 'gu');
const NUMBERS_AND_IDENTIFIER = new RegExp('\\d+' + IDENTIFIER.source, 'gu');

const preserveCamelCase = (string, toLowerCase, toUpperCase) => {
	let isLastCharLower = false;
	let isLastCharUpper = false;
	let isLastLastCharUpper = false;

	for (let i = 0; i < string.length; i++) {
		const character = string[i];

		if (isLastCharLower && UPPERCASE.test(character)) {
			string = string.slice(0, i) + '-' + string.slice(i);
			isLastCharLower = false;
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = true;
			i++;
		} else if (isLastCharUpper && isLastLastCharUpper && LOWERCASE.test(character)) {
			string = string.slice(0, i - 1) + '-' + string.slice(i - 1);
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = false;
			isLastCharLower = true;
		} else {
			isLastCharLower = toLowerCase(character) === character && toUpperCase(character) !== character;
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = toUpperCase(character) === character && toLowerCase(character) !== character;
		}
	}

	return string;
};

const preserveConsecutiveUppercase = (input, toLowerCase) => {
	LEADING_CAPITAL.lastIndex = 0;

	return input.replace(LEADING_CAPITAL, m1 => toLowerCase(m1));
};

const postProcess = (input, toUpperCase) => {
	SEPARATORS_AND_IDENTIFIER.lastIndex = 0;
	NUMBERS_AND_IDENTIFIER.lastIndex = 0;

	return input.replace(SEPARATORS_AND_IDENTIFIER, (_, identifier) => toUpperCase(identifier))
		.replace(NUMBERS_AND_IDENTIFIER, m => toUpperCase(m));
};

const camelCase = (input, options) => {
	if (!(typeof input === 'string' || Array.isArray(input))) {
		throw new TypeError('Expected the input to be `string | string[]`');
	}

	options = {
		pascalCase: false,
		preserveConsecutiveUppercase: false,
		...options
	};

	if (Array.isArray(input)) {
		input = input.map(x => x.trim())
			.filter(x => x.length)
			.join('-');
	} else {
		input = input.trim();
	}

	if (input.length === 0) {
		return '';
	}

	const toLowerCase = options.locale === false ?
		string => string.toLowerCase() :
		string => string.toLocaleLowerCase(options.locale);
	const toUpperCase = options.locale === false ?
		string => string.toUpperCase() :
		string => string.toLocaleUpperCase(options.locale);

	if (input.length === 1) {
		return options.pascalCase ? toUpperCase(input) : toLowerCase(input);
	}

	const hasUpperCase = input !== toLowerCase(input);

	if (hasUpperCase) {
		input = preserveCamelCase(input, toLowerCase, toUpperCase);
	}

	input = input.replace(LEADING_SEPARATORS, '');

	if (options.preserveConsecutiveUppercase) {
		input = preserveConsecutiveUppercase(input, toLowerCase);
	} else {
		input = toLowerCase(input);
	}

	if (options.pascalCase) {
		input = toUpperCase(input.charAt(0)) + input.slice(1);
	}

	return postProcess(input, toUpperCase);
};

module.exports = camelCase;
// TODO: Remove this for the next major release
module.exports["default"] = camelCase;


/***/ }),

/***/ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js":
/*!**********************************************************************!*\
  !*** ./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GatsbyImage: () => (/* binding */ X),
/* harmony export */   MainImage: () => (/* binding */ D),
/* harmony export */   Placeholder: () => (/* binding */ C),
/* harmony export */   StaticImage: () => (/* binding */ Z),
/* harmony export */   generateImageData: () => (/* binding */ b),
/* harmony export */   getImage: () => (/* binding */ I),
/* harmony export */   getImageData: () => (/* binding */ R),
/* harmony export */   getLowResolutionImageURL: () => (/* binding */ y),
/* harmony export */   getSrc: () => (/* binding */ W),
/* harmony export */   getSrcSet: () => (/* binding */ j),
/* harmony export */   withArtDirection: () => (/* binding */ _)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var camelcase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! camelcase */ "./node_modules/camelcase/index.js");
/* harmony import */ var camelcase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(camelcase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);




function n() {
  return n = Object.assign ? Object.assign.bind() : function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var a = arguments[t];
      for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
    }
    return e;
  }, n.apply(this, arguments);
}
function o(e, t) {
  if (null == e) return {};
  var a,
    i,
    r = {},
    n = Object.keys(e);
  for (i = 0; i < n.length; i++) t.indexOf(a = n[i]) >= 0 || (r[a] = e[a]);
  return r;
}
var s = [.25, .5, 1, 2],
  l = [750, 1080, 1366, 1920],
  u = [320, 654, 768, 1024, 1366, 1600, 1920, 2048, 2560, 3440, 3840, 4096],
  d = 800,
  c = 800,
  h = 4 / 3,
  g = function (e) {
    return console.warn(e);
  },
  p = function (e, t) {
    return e - t;
  },
  m = function (e, t) {
    switch (t) {
      case "constrained":
        return "(min-width: " + e + "px) " + e + "px, 100vw";
      case "fixed":
        return e + "px";
      case "fullWidth":
        return "100vw";
      default:
        return;
    }
  },
  f = function (e) {
    return e.map(function (e) {
      return e.src + " " + e.width + "w";
    }).join(",\n");
  };
function v(e) {
  var t = e.lastIndexOf(".");
  if (-1 !== t) {
    var a = e.slice(t + 1);
    if ("jpeg" === a) return "jpg";
    if (3 === a.length || 4 === a.length) return a;
  }
}
function w(e) {
  var t = e.layout,
    i = void 0 === t ? "constrained" : t,
    r = e.width,
    o = e.height,
    s = e.sourceMetadata,
    l = e.breakpoints,
    u = e.aspectRatio,
    d = e.formats,
    g = void 0 === d ? ["auto", "webp"] : d;
  return g = g.map(function (e) {
    return e.toLowerCase();
  }), i = camelcase__WEBPACK_IMPORTED_MODULE_1___default()(i), r && o ? n({}, e, {
    formats: g,
    layout: i,
    aspectRatio: r / o
  }) : (s.width && s.height && !u && (u = s.width / s.height), "fullWidth" === i ? (r = r || s.width || l[l.length - 1], o = o || Math.round(r / (u || h))) : (r || (r = o && u ? o * u : s.width ? s.width : o ? Math.round(o / h) : c), u && !o ? o = Math.round(r / u) : u || (u = r / o)), n({}, e, {
    width: r,
    height: o,
    aspectRatio: u,
    layout: i,
    formats: g
  }));
}
function y(e, t) {
  var a;
  return void 0 === t && (t = 20), null == (a = (0, (e = w(e)).generateImageSource)(e.filename, t, Math.round(t / e.aspectRatio), e.sourceMetadata.format || "jpg", e.fit, e.options)) ? void 0 : a.src;
}
function b(e) {
  var t,
    a = (e = w(e)).pluginName,
    i = e.sourceMetadata,
    r = e.generateImageSource,
    o = e.layout,
    u = e.fit,
    d = e.options,
    h = e.width,
    p = e.height,
    y = e.filename,
    b = e.reporter,
    S = void 0 === b ? {
      warn: g
    } : b,
    N = e.backgroundColor,
    x = e.placeholderURL;
  if (a || S.warn('[gatsby-plugin-image] "generateImageData" was not passed a plugin name'), "function" != typeof r) throw new Error("generateImageSource must be a function");
  i && (i.width || i.height) ? i.format || (i.format = v(y)) : i = {
    width: h,
    height: p,
    format: (null == (t = i) ? void 0 : t.format) || v(y) || "auto"
  };
  var I = new Set(e.formats);
  (0 === I.size || I.has("auto") || I.has("")) && (I.delete("auto"), I.delete(""), I.add(i.format)), I.has("jpg") && I.has("png") && (S.warn("[" + a + "] Specifying both 'jpg' and 'png' formats is not supported. Using 'auto' instead"), I.delete("jpg" === i.format ? "png" : "jpg"));
  var W = function (e) {
      var t = e.filename,
        a = e.layout,
        i = void 0 === a ? "constrained" : a,
        r = e.sourceMetadata,
        o = e.reporter,
        u = void 0 === o ? {
          warn: g
        } : o,
        d = e.breakpoints,
        h = void 0 === d ? l : d,
        p = Object.entries({
          width: e.width,
          height: e.height
        }).filter(function (e) {
          var t = e[1];
          return "number" == typeof t && t < 1;
        });
      if (p.length) throw new Error("Specified dimensions for images must be positive numbers (> 0). Problem dimensions you have are " + p.map(function (e) {
        return e.join(": ");
      }).join(", "));
      return "fixed" === i ? function (e) {
        var t = e.filename,
          a = e.sourceMetadata,
          i = e.width,
          r = e.height,
          n = e.fit,
          o = void 0 === n ? "cover" : n,
          l = e.outputPixelDensities,
          u = e.reporter,
          d = void 0 === u ? {
            warn: g
          } : u,
          h = a.width / a.height,
          p = k(void 0 === l ? s : l);
        if (i && r) {
          var m = M(a, {
            width: i,
            height: r,
            fit: o
          });
          i = m.width, r = m.height, h = m.aspectRatio;
        }
        i ? r || (r = Math.round(i / h)) : i = r ? Math.round(r * h) : c;
        var f = i;
        if (a.width < i || a.height < r) {
          var v = a.width < i ? "width" : "height";
          d.warn("\nThe requested " + v + ' "' + ("width" === v ? i : r) + 'px" for the image ' + t + " was larger than the actual image " + v + " of " + a[v] + "px. If possible, replace the current image with a larger one."), "width" === v ? (i = a.width, r = Math.round(i / h)) : i = (r = a.height) * h;
        }
        return {
          sizes: p.filter(function (e) {
            return e >= 1;
          }).map(function (e) {
            return Math.round(e * i);
          }).filter(function (e) {
            return e <= a.width;
          }),
          aspectRatio: h,
          presentationWidth: f,
          presentationHeight: Math.round(f / h),
          unscaledWidth: i
        };
      }(e) : "constrained" === i ? E(e) : "fullWidth" === i ? E(n({
        breakpoints: h
      }, e)) : (u.warn("No valid layout was provided for the image at " + t + ". Valid image layouts are fixed, fullWidth, and constrained. Found " + i), {
        sizes: [r.width],
        presentationWidth: r.width,
        presentationHeight: r.height,
        aspectRatio: r.width / r.height,
        unscaledWidth: r.width
      });
    }(n({}, e, {
      sourceMetadata: i
    })),
    j = {
      sources: []
    },
    R = e.sizes;
  R || (R = m(W.presentationWidth, o)), I.forEach(function (e) {
    var t = W.sizes.map(function (t) {
      var i = r(y, t, Math.round(t / W.aspectRatio), e, u, d);
      if (null != i && i.width && i.height && i.src && i.format) return i;
      S.warn("[" + a + "] The resolver for image " + y + " returned an invalid value.");
    }).filter(Boolean);
    if ("jpg" === e || "png" === e || "auto" === e) {
      var i = t.find(function (e) {
        return e.width === W.unscaledWidth;
      }) || t[0];
      i && (j.fallback = {
        src: i.src,
        srcSet: f(t),
        sizes: R
      });
    } else {
      var n;
      null == (n = j.sources) || n.push({
        srcSet: f(t),
        sizes: R,
        type: "image/" + e
      });
    }
  });
  var _ = {
    images: j,
    layout: o,
    backgroundColor: N
  };
  switch (x && (_.placeholder = {
    fallback: x
  }), o) {
    case "fixed":
      _.width = W.presentationWidth, _.height = W.presentationHeight;
      break;
    case "fullWidth":
      _.width = 1, _.height = 1 / W.aspectRatio;
      break;
    case "constrained":
      _.width = e.width || W.presentationWidth || 1, _.height = (_.width || 1) / W.aspectRatio;
  }
  return _;
}
var k = function (e) {
  return Array.from(new Set([1].concat(e))).sort(p);
};
function E(e) {
  var t,
    a = e.sourceMetadata,
    i = e.width,
    r = e.height,
    n = e.fit,
    o = void 0 === n ? "cover" : n,
    l = e.outputPixelDensities,
    u = e.breakpoints,
    c = e.layout,
    h = a.width / a.height,
    g = k(void 0 === l ? s : l);
  if (i && r) {
    var m = M(a, {
      width: i,
      height: r,
      fit: o
    });
    i = m.width, r = m.height, h = m.aspectRatio;
  }
  i = i && Math.min(i, a.width), r = r && Math.min(r, a.height), i || r || (r = (i = Math.min(d, a.width)) / h), i || (i = r * h);
  var f = i;
  return (a.width < i || a.height < r) && (i = a.width, r = a.height), i = Math.round(i), (null == u ? void 0 : u.length) > 0 ? (t = u.filter(function (e) {
    return e <= a.width;
  })).length < u.length && !t.includes(a.width) && t.push(a.width) : t = (t = g.map(function (e) {
    return Math.round(e * i);
  })).filter(function (e) {
    return e <= a.width;
  }), "constrained" !== c || t.includes(i) || t.push(i), {
    sizes: t = t.sort(p),
    aspectRatio: h,
    presentationWidth: f,
    presentationHeight: Math.round(f / h),
    unscaledWidth: i
  };
}
function M(e, t) {
  var a = e.width / e.height,
    i = t.width,
    r = t.height;
  switch (t.fit) {
    case "fill":
      i = t.width ? t.width : e.width, r = t.height ? t.height : e.height;
      break;
    case "inside":
      var n = t.width ? t.width : Number.MAX_SAFE_INTEGER,
        o = t.height ? t.height : Number.MAX_SAFE_INTEGER;
      i = Math.min(n, Math.round(o * a)), r = Math.min(o, Math.round(n / a));
      break;
    case "outside":
      var s = t.width ? t.width : 0,
        l = t.height ? t.height : 0;
      i = Math.max(s, Math.round(l * a)), r = Math.max(l, Math.round(s / a));
      break;
    default:
      t.width && !t.height && (i = t.width, r = Math.round(t.width / a)), t.height && !t.width && (i = Math.round(t.height * a), r = t.height);
  }
  return {
    width: i,
    height: r,
    aspectRatio: i / r
  };
}
var S = ["baseUrl", "urlBuilder", "sourceWidth", "sourceHeight", "pluginName", "formats", "breakpoints", "options"],
  N = ["images", "placeholder"];
function x() {
  return "undefined" != typeof GATSBY___IMAGE && GATSBY___IMAGE;
}
var I = function (e) {
    var t;
    return function (e) {
      var t, a;
      return Boolean(null == e || null == (t = e.images) || null == (a = t.fallback) ? void 0 : a.src);
    }(e) ? e : function (e) {
      return Boolean(null == e ? void 0 : e.gatsbyImageData);
    }(e) ? e.gatsbyImageData : function (e) {
      return Boolean(null == e ? void 0 : e.gatsbyImage);
    }(e) ? e.gatsbyImage : null == e || null == (t = e.childImageSharp) ? void 0 : t.gatsbyImageData;
  },
  W = function (e) {
    var t, a, i;
    return null == (t = I(e)) || null == (a = t.images) || null == (i = a.fallback) ? void 0 : i.src;
  },
  j = function (e) {
    var t, a, i;
    return null == (t = I(e)) || null == (a = t.images) || null == (i = a.fallback) ? void 0 : i.srcSet;
  };
function R(e) {
  var t,
    a = e.baseUrl,
    i = e.urlBuilder,
    r = e.sourceWidth,
    s = e.sourceHeight,
    l = e.pluginName,
    d = void 0 === l ? "getImageData" : l,
    c = e.formats,
    h = void 0 === c ? ["auto"] : c,
    g = e.breakpoints,
    p = e.options,
    m = o(e, S);
  return null != (t = g) && t.length || "fullWidth" !== m.layout && "FULL_WIDTH" !== m.layout || (g = u), b(n({}, m, {
    pluginName: d,
    generateImageSource: function (e, t, a, r) {
      return {
        width: t,
        height: a,
        format: r,
        src: i({
          baseUrl: e,
          width: t,
          height: a,
          options: p,
          format: r
        })
      };
    },
    filename: a,
    formats: h,
    breakpoints: g,
    sourceMetadata: {
      width: r,
      height: s,
      format: "auto"
    }
  }));
}
function _(e, t) {
  var a,
    i,
    r,
    s = e.images,
    l = e.placeholder,
    u = n({}, o(e, N), {
      images: n({}, s, {
        sources: []
      }),
      placeholder: l && n({}, l, {
        sources: []
      })
    });
  return t.forEach(function (t) {
    var a,
      i = t.media,
      r = t.image;
    i ? (r.layout !== e.layout && "development" === "development" && console.warn('[gatsby-plugin-image] Mismatched image layout: expected "' + e.layout + '" but received "' + r.layout + '". All art-directed images use the same layout as the default image'), (a = u.images.sources).push.apply(a, r.images.sources.map(function (e) {
      return n({}, e, {
        media: i
      });
    }).concat([{
      media: i,
      srcSet: r.images.fallback.srcSet
    }])), u.placeholder && u.placeholder.sources.push({
      media: i,
      srcSet: r.placeholder.fallback
    })) :  true && console.warn("[gatsby-plugin-image] All art-directed images passed to must have a value set for `media`. Skipping.");
  }), (a = u.images.sources).push.apply(a, s.sources), null != l && l.sources && (null == (i = u.placeholder) || (r = i.sources).push.apply(r, l.sources)), u;
}
var A,
  O = ["src", "srcSet", "loading", "alt", "shouldLoad"],
  T = ["fallback", "sources", "shouldLoad"],
  z = function (t) {
    var a = t.src,
      i = t.srcSet,
      r = t.loading,
      s = t.alt,
      l = void 0 === s ? "" : s,
      u = t.shouldLoad,
      d = o(t, O);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", n({}, d, {
      decoding: "async",
      loading: r,
      src: u ? a : void 0,
      "data-src": u ? void 0 : a,
      srcSet: u ? i : void 0,
      "data-srcset": u ? void 0 : i,
      alt: l
    }));
  },
  L = function (t) {
    var a = t.fallback,
      i = t.sources,
      r = void 0 === i ? [] : i,
      s = t.shouldLoad,
      l = void 0 === s || s,
      u = o(t, T),
      d = u.sizes || (null == a ? void 0 : a.sizes),
      c = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(z, n({}, u, a, {
        sizes: d,
        shouldLoad: l
      }));
    return r.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("picture", null, r.map(function (t) {
      var a = t.media,
        i = t.srcSet,
        r = t.type;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("source", {
        key: a + "-" + r + "-" + i,
        type: r,
        media: a,
        srcSet: l ? i : void 0,
        "data-srcset": l ? void 0 : i,
        sizes: d
      });
    }), c) : c;
  };
z.propTypes = {
  src: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
  alt: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
  sizes: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
  srcSet: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
  shouldLoad: prop_types__WEBPACK_IMPORTED_MODULE_2__.bool
}, L.displayName = "Picture", L.propTypes = {
  alt: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
  shouldLoad: prop_types__WEBPACK_IMPORTED_MODULE_2__.bool,
  fallback: prop_types__WEBPACK_IMPORTED_MODULE_2__.exact({
    src: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
    srcSet: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    sizes: prop_types__WEBPACK_IMPORTED_MODULE_2__.string
  }),
  sources: prop_types__WEBPACK_IMPORTED_MODULE_2__.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2__.exact({
    media: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
    type: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    sizes: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    srcSet: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired
  }), prop_types__WEBPACK_IMPORTED_MODULE_2__.exact({
    media: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    type: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
    sizes: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    srcSet: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired
  })]))
};
var q = ["fallback"],
  C = function (t) {
    var a = t.fallback,
      i = o(t, q);
    return a ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(L, n({}, i, {
      fallback: {
        src: a
      },
      "aria-hidden": !0,
      alt: ""
    })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", n({}, i));
  };
C.displayName = "Placeholder", C.propTypes = {
  fallback: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
  sources: null == (A = L.propTypes) ? void 0 : A.sources,
  alt: function (e, t, a) {
    return e[t] ? new Error("Invalid prop `" + t + "` supplied to `" + a + "`. Validation failed.") : null;
  }
};
var D = function (t) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(L, n({}, t)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("noscript", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(L, n({}, t, {
    shouldLoad: !0
  }))));
};
D.displayName = "MainImage", D.propTypes = L.propTypes;
var P = ["children"],
  H = function () {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("script", {
      type: "module",
      dangerouslySetInnerHTML: {
        __html: 'const t="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;if(t){const t=document.querySelectorAll("img[data-main-image]");for(let e of t){e.dataset.src&&(e.setAttribute("src",e.dataset.src),e.removeAttribute("data-src")),e.dataset.srcset&&(e.setAttribute("srcset",e.dataset.srcset),e.removeAttribute("data-srcset"));const t=e.parentNode.querySelectorAll("source[data-srcset]");for(let e of t)e.setAttribute("srcset",e.dataset.srcset),e.removeAttribute("data-srcset");e.complete&&(e.style.opacity=1,e.parentNode.parentNode.querySelector("[data-placeholder-image]").style.opacity=0)}}'
      }
    });
  },
  F = function (t) {
    var a = t.layout,
      i = t.width,
      r = t.height;
    return "fullWidth" === a ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      "aria-hidden": !0,
      style: {
        paddingTop: r / i * 100 + "%"
      }
    }) : "constrained" === a ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        maxWidth: i,
        display: "block"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      alt: "",
      role: "presentation",
      "aria-hidden": "true",
      src: "data:image/svg+xml;charset=utf-8,%3Csvg%20height='" + r + "'%20width='" + i + "'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",
      style: {
        maxWidth: "100%",
        display: "block",
        position: "static"
      }
    })) : null;
  },
  B = function (a) {
    var i = a.children,
      r = o(a, P);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(F, n({}, r)), i, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(H, null));
  },
  G = ["as", "className", "class", "style", "image", "loading", "imgClassName", "imgStyle", "backgroundColor", "objectFit", "objectPosition"],
  V = ["style", "className"],
  U = function (e) {
    return e.replace(/\n/g, "");
  },
  X = function (t) {
    var a = t.as,
      i = void 0 === a ? "div" : a,
      r = t.className,
      s = t.class,
      l = t.style,
      u = t.image,
      d = t.loading,
      c = void 0 === d ? "lazy" : d,
      h = t.imgClassName,
      g = t.imgStyle,
      p = t.backgroundColor,
      m = t.objectFit,
      f = t.objectPosition,
      v = o(t, G);
    if (!u) return console.warn("[gatsby-plugin-image] Missing image prop"), null;
    s && (r = s), g = n({
      objectFit: m,
      objectPosition: f,
      backgroundColor: p
    }, g);
    var w = u.width,
      y = u.height,
      b = u.layout,
      k = u.images,
      E = u.placeholder,
      M = u.backgroundColor,
      S = function (e, t, a) {
        var i = {},
          r = "gatsby-image-wrapper";
        return x() || (i.position = "relative", i.overflow = "hidden"), "fixed" === a ? (i.width = e, i.height = t) : "constrained" === a && (x() || (i.display = "inline-block", i.verticalAlign = "top"), r = "gatsby-image-wrapper gatsby-image-wrapper-constrained"), {
          className: r,
          "data-gatsby-image-wrapper": "",
          style: i
        };
      }(w, y, b),
      N = S.style,
      I = S.className,
      W = o(S, V),
      j = {
        fallback: void 0,
        sources: []
      };
    return k.fallback && (j.fallback = n({}, k.fallback, {
      srcSet: k.fallback.srcSet ? U(k.fallback.srcSet) : void 0
    })), k.sources && (j.sources = k.sources.map(function (e) {
      return n({}, e, {
        srcSet: U(e.srcSet)
      });
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(i, n({}, W, {
      style: n({}, N, l, {
        backgroundColor: p
      }),
      className: I + (r ? " " + r : "")
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(B, {
      layout: b,
      width: w,
      height: y
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(C, n({}, function (e, t, a, i, r, o, s, l) {
      var u = {};
      o && (u.backgroundColor = o, "fixed" === a ? (u.width = i, u.height = r, u.backgroundColor = o, u.position = "relative") : ("constrained" === a || "fullWidth" === a) && (u.position = "absolute", u.top = 0, u.left = 0, u.bottom = 0, u.right = 0)), s && (u.objectFit = s), l && (u.objectPosition = l);
      var d = n({}, e, {
        "aria-hidden": !0,
        "data-placeholder-image": "",
        style: n({
          opacity: 1,
          transition: "opacity 500ms linear"
        }, u)
      });
      return x() || (d.style = {
        height: "100%",
        left: 0,
        position: "absolute",
        top: 0,
        width: "100%"
      }), d;
    }(E, 0, b, w, y, M, m, f))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(D, n({
      "data-gatsby-image-ssr": "",
      className: h
    }, v, function (e, t, a, i, r) {
      return void 0 === r && (r = {}), x() || (r = n({
        height: "100%",
        left: 0,
        position: "absolute",
        top: 0,
        transform: "translateZ(0)",
        transition: "opacity 250ms linear",
        width: "100%",
        willChange: "opacity"
      }, r)), n({}, a, {
        loading: i,
        shouldLoad: e,
        "data-main-image": "",
        style: n({}, r, {
          opacity: 0
        })
      });
    }("eager" === c, 0, j, c, g)))));
  },
  Y = ["src", "__imageData", "__error", "width", "height", "aspectRatio", "tracedSVGOptions", "placeholder", "formats", "quality", "transformOptions", "jpgOptions", "pngOptions", "webpOptions", "avifOptions", "blurredOptions", "breakpoints", "outputPixelDensities"],
  Z = function (t) {
    return function (a) {
      var i = a.src,
        r = a.__imageData,
        s = a.__error,
        l = o(a, Y);
      return s && console.warn(s), r ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(t, n({
        image: r
      }, l)) : (console.warn("Image not loaded", i), s || "development" !== "development" || console.warn('Please ensure that "gatsby-plugin-image" is included in the plugins array in gatsby-config.js, and that your version of gatsby is at least 2.24.78'), null);
    };
  }(X),
  J = function (e, t) {
    return "fullWidth" !== e.layout || "width" !== t && "height" !== t || !e[t] ? prop_types__WEBPACK_IMPORTED_MODULE_2___default().number.apply((prop_types__WEBPACK_IMPORTED_MODULE_2___default()), [e, t].concat([].slice.call(arguments, 2))) : new Error('"' + t + '" ' + e[t] + " may not be passed when layout is fullWidth.");
  },
  K = new Set(["fixed", "fullWidth", "constrained"]),
  Q = {
    src: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string).isRequired,
    alt: function (e, t, a) {
      return e.alt || "" === e.alt ? prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.apply((prop_types__WEBPACK_IMPORTED_MODULE_2___default()), [e, t, a].concat([].slice.call(arguments, 3))) : new Error('The "alt" prop is required in ' + a + '. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html');
    },
    width: J,
    height: J,
    sizes: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    layout: function (e) {
      if (void 0 !== e.layout && !K.has(e.layout)) return new Error("Invalid value " + e.layout + '" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".');
    }
  };
Z.displayName = "StaticImage", Z.propTypes = Q;


/***/ }),

/***/ "./src/components/About.js":
/*!*********************************!*\
  !*** ./src/components/About.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const About = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "relative bg-black  px-4 lg:pl-20 lg:pr-10 py-20 lg:py-40 lg:flex gap-10 text-white seasons border-b border-white/50"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", {
    className: "hidden lg:block border-primary opacity-50 border absolute left-0 w-16 mt-4 mr-5"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-5xl text-primary min-w-fit mb-10 lg:mb-0"
  }, "What I do"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "grid lg:grid-cols-2 gap-x-10 gap-y-8 lg:gap-y-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "text-xl font-bold"
  }, "Model and Beauty Queen"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-sm leading-[1.5rem] mt-5"
  }, "She has won several prestigious beauty titles, including Miss Amina 2019, Miss Unique 2019, Face of Akoka, and Most Beautiful Campus Queen Nigeria (MBCQN) 2021.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "text-xl font-bold"
  }, "Philanthropist"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-sm leading-[1.5rem] mt-5"
  }, "Ololade leads the PET Project to empower physically challenged women and partners with Household Outreach to support children's well-being.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "text-xl font-bold"
  }, "Entrepreneur"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-sm leading-[1.5rem] mt-5"
  }, "She has launched a fashion house, modeling academy, and pageantry coaching hub. She is also attempting the Guinness World Record for the longest distance catwalk by a female model.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "text-xl font-bold"
  }, "Multitalented Individual"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-sm leading-[1.5rem] mt-5"
  }, "Ololade excels in dancing, acting, and project management. She is also a young pastor passionate about the gospel of Christ."))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About);

/***/ }),

/***/ "./src/components/Blogs.js":
/*!*********************************!*\
  !*** ./src/components/Blogs.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby-plugin-image */ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const Blogs = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bg-secondary-200  px-2 lg:pl-20 lg:pr-10 py-16"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center justify-center gap-x-5 w-full"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-5xl text-center"
  }, "Blogs")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col lg:flex-row flex-wrap gap-x-5 gap-y-8 justify-between mt-14"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col items-center gap-y-3 lg:w-[30%]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_1__.StaticImage, {
    src: "../images/hero.jpg",
    alt: "Ololade in style",
    className: "max-w-full lg:max-w-[204px] border-4 border-white -rotate-[5deg]",
    formats: ["AUTO", "PNG"],
    pngOptions: {
      quality: 100,
      lossless: true
    },
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/3589006823.json */ "./.cache/caches/gatsby-plugin-image/3589006823.json")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "text-xl font-bold"
  }, "Crown of achievements"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-[1.1rem] leading-[1.375rem] font-times text-center"
  }, "Ololade Ayelabola's venturing into the world of beauty pageants has been marked by several significant victories. ....."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "",
    className: "bg-black text-primary rounded-[2rem] py-1.5 px-6 text-sm"
  }, "Read more")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col items-center gap-y-3 lg:w-[30%]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_1__.StaticImage, {
    src: "../images/hero.jpg",
    alt: "Ololade in style",
    className: "max-w-full lg:max-w-[204px] border-4 border-white",
    formats: ["AUTO", "PNG"],
    pngOptions: {
      quality: 100,
      lossless: true
    },
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/3589006823.json */ "./.cache/caches/gatsby-plugin-image/3589006823.json")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "text-xl font-bold"
  }, "Crown of achievements"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-[1.1rem] leading-[1.375rem] font-times text-center"
  }, "Ololade Ayelabola's venturing into the world of beauty pageants has been marked by several significant victories. ....."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "",
    className: "bg-black text-primary rounded-[2rem] py-1.5 px-6 text-sm"
  }, "Read more")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col items-center gap-y-3 lg:w-[30%]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_1__.StaticImage, {
    src: "../images/hero.jpg",
    alt: "Ololade in style",
    className: "max-w-full lg:max-w-[204px] border-4 border-white rotate-[5deg]",
    formats: ["AUTO", "PNG"],
    pngOptions: {
      quality: 100,
      lossless: true
    },
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/3589006823.json */ "./.cache/caches/gatsby-plugin-image/3589006823.json")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "text-xl font-bold"
  }, "Crown of achievements"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-[1.1rem] leading-[1.375rem] font-times text-center"
  }, "Ololade Ayelabola's venturing into the world of beauty pageants has been marked by several significant victories. ....."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "",
    className: "bg-black text-primary rounded-[2rem] py-1.5 px-6 text-sm"
  }, "Read more"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Blogs);

/***/ }),

/***/ "./src/components/Gallery.js":
/*!***********************************!*\
  !*** ./src/components/Gallery.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby-plugin-image */ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const Gallery = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bg-black  px-2 lg:pl-20 lg:pr-10 py-16"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center justify-center gap-x-5 w-full"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", {
    className: "border-primary w-20"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-5xl text-primary w-fit"
  }, "Gallery"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", {
    className: "border-primary w-20"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-wrap gap-x-5 gap-y-8 justify-between mt-14"
  }, Array.from({
    length: 8
  }).map((_, idx) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_1__.StaticImage, {
    key: idx,
    src: "../images/hero.jpg",
    alt: "Ololade in style",
    className: "max-w-full lg:max-w-[204px] border",
    formats: ["AUTO", "PNG"],
    pngOptions: {
      quality: 100,
      lossless: true
    },
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/2370110623.json */ "./.cache/caches/gatsby-plugin-image/2370110623.json")
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gallery);

/***/ }),

/***/ "./src/components/Hero.js":
/*!********************************!*\
  !*** ./src/components/Hero.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_icons_instagram_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/icons/instagram.svg */ "./src/assets/icons/instagram.svg");
/* harmony import */ var _assets_icons_instagram_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_instagram_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_icons_twitter_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/icons/twitter.svg */ "./src/assets/icons/twitter.svg");
/* harmony import */ var _assets_icons_twitter_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_twitter_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_icons_linkedin_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/icons/linkedin.svg */ "./src/assets/icons/linkedin.svg");
/* harmony import */ var _assets_icons_linkedin_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_linkedin_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_icons_facebook_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/icons/facebook.svg */ "./src/assets/icons/facebook.svg");
/* harmony import */ var _assets_icons_facebook_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_facebook_svg__WEBPACK_IMPORTED_MODULE_4__);


// Assets




const Hero = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("main", {
    className: "hero lg:bg-cover bg-no-repeat px-4 lg:px-20 py-20 text-white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", {
    className: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "grid grid-cols-3 lg:grid-cols-4 w-fit text-secondary-100 text-xl gap-7"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: ""
  }, "About Me")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: ""
  }, "Projects")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: ""
  }, "Gallery")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: ""
  }, "Contact")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "hero-text text-[3rem] leading-[4rem] lg:text-[4rem] lg:leading-[4.5rem] mt-20 text-primary font-bold tracking-[.384rem]"
  }, "Ololade ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "Ayelabola"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "mt-5 text-sm lg:text-lg text-secondary-200"
  }, "Model | Beauty Queen | Entrepreneur"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "flex text-white text-xs gap-10 mt-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", {
    className: "hidden lg:block border-secondary-200 opacity-50 border absolute left-0 w-20 mt-2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "hover:scale-150 transition-all cursor-pointer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    target: "_blank",
    href: "https://web.facebook.com/ayelabola.ololade.9"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_assets_icons_facebook_svg__WEBPACK_IMPORTED_MODULE_4___default()), null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "hover:scale-150 transition-all cursor-pointer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    target: "_blank",
    href: "https://www.instagram.com/thelade_wonder/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_assets_icons_instagram_svg__WEBPACK_IMPORTED_MODULE_1___default()), null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "hover:scale-150 transition-all cursor-pointer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    target: "_blank",
    href: "https://www.tiktok.com/@officiallade_wonder"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_assets_icons_linkedin_svg__WEBPACK_IMPORTED_MODULE_3___default()), null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "hover:scale-150 transition-all cursor-pointer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    target: "_blank",
    href: "https://x.com/thelade_wonder"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_assets_icons_twitter_svg__WEBPACK_IMPORTED_MODULE_2___default()), null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mt-52 lg:max-w-[427px] bg-primary py-12 px-6 lg:p-10 rounded text-black"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "font-bold text-[2rem] leading-[2.8rem] lg:text-[2.7rem] lg:leading-[2.9rem]"
  }, "Meet Ololade ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "Ayelabola"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "mt-10 text-sm leading-[1.7rem]"
  }, "A talented model, beauty queen, entrepreneur, and philanthropist. She has won many beauty pageants and turned her love for fashion into successful businesses. Ololade is also deeply committed to helping others through her charity work. Discover her inspiring journey and see how she makes a difference in the world.")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hero);

/***/ }),

/***/ "./src/pages/index.js?export=default":
/*!*******************************************!*\
  !*** ./src/pages/index.js?export=default ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Head: () => (/* binding */ Head),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Hero */ "./src/components/Hero.js");
/* harmony import */ var _components_About__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/About */ "./src/components/About.js");
/* harmony import */ var _components_Gallery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Gallery */ "./src/components/Gallery.js");
/* harmony import */ var _components_Blogs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Blogs */ "./src/components/Blogs.js");


// Components




const IndexPage = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Hero__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_About__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Gallery__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Blogs__WEBPACK_IMPORTED_MODULE_4__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndexPage);
const Head = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", null, "Home Page");

/***/ }),

/***/ "./src/assets/icons/facebook.svg":
/*!***************************************!*\
  !*** ./src/assets/icons/facebook.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(/*! react */ "react");

function Facebook (props) {
    return React.createElement("svg",props,React.createElement("g",{"id":"change1_1"},React.createElement("path",{"d":"m173.4 78.4h52v-78.4h-66.4v0.3c-87.3 3.2-105.3 52.1-106.8 103.8h-0.2v54.4h-52v78.5h52v238.6h93.3v-238.6h66.9l13.2-78.5h-80.1v-48.7c0-17.3 11.6-31.4 28.1-31.4z","fill":"#ebe7e4"})));
}

Facebook.defaultProps = {"enableBackground":"new 0 0 225.4 475.6","fill":"#000000","id":"Layer_1","version":"1.1","viewBox":"0 0 225.4 475.6","x":"0px","xmlSpace":"preserve","y":"0px"};

module.exports = Facebook;

Facebook.default = Facebook;


/***/ }),

/***/ "./src/assets/icons/instagram.svg":
/*!****************************************!*\
  !*** ./src/assets/icons/instagram.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(/*! react */ "react");

function Instagram (props) {
    return React.createElement("svg",props,[React.createElement("g",{"clipPath":"url(#clip0_5378_583)","key":0},React.createElement("path",{"d":"M6.51114 0.692383C3.80453 0.692383 1.60205 2.89486 1.60205 5.60147V12.3987C1.60205 15.1053 3.80453 17.3078 6.51114 17.3078H13.3083C16.015 17.3078 18.2174 15.1053 18.2174 12.3987V5.60147C18.2174 2.89486 16.015 0.692383 13.3083 0.692383H6.51114ZM6.51114 1.44763H13.3083C15.6067 1.44763 17.4622 3.30308 17.4622 5.60147V12.3987C17.4622 14.6971 15.6067 16.5525 13.3083 16.5525H6.51114C4.21275 16.5525 2.3573 14.6971 2.3573 12.3987V5.60147C2.3573 3.30308 4.21275 1.44763 6.51114 1.44763ZM14.4412 3.71336C14.2409 3.71336 14.0488 3.79293 13.9072 3.93457C13.7655 4.0762 13.686 4.2683 13.686 4.46861C13.686 4.66891 13.7655 4.86101 13.9072 5.00265C14.0488 5.14428 14.2409 5.22385 14.4412 5.22385C14.6415 5.22385 14.8336 5.14428 14.9753 5.00265C15.1169 4.86101 15.1965 4.66891 15.1965 4.46861C15.1965 4.2683 15.1169 4.0762 14.9753 3.93457C14.8336 3.79293 14.6415 3.71336 14.4412 3.71336ZM9.90974 4.84623C7.62011 4.84623 5.7559 6.71044 5.7559 9.00008C5.7559 11.2897 7.62011 13.1539 9.90974 13.1539C12.1994 13.1539 14.0636 11.2897 14.0636 9.00008C14.0636 6.71044 12.1994 4.84623 9.90974 4.84623ZM9.90974 5.60147C11.7912 5.60147 13.3083 7.11861 13.3083 9.00008C13.3083 10.8815 11.7912 12.3987 9.90974 12.3987C8.02828 12.3987 6.51114 10.8815 6.51114 9.00008C6.51114 7.11861 8.02828 5.60147 9.90974 5.60147Z","fill":"#9A9C9E","stroke":"#9A9C9E","strokeWidth":"0.7"})),React.createElement("defs",{"key":1},React.createElement("clipPath",{"id":"clip0_5378_583"},React.createElement("rect",{"width":"18","height":"18","fill":"white","transform":"translate(0.90979)"})))]);
}

Instagram.defaultProps = {"width":"19","height":"18","viewBox":"0 0 19 18","fill":"none"};

module.exports = Instagram;

Instagram.default = Instagram;


/***/ }),

/***/ "./src/assets/icons/linkedin.svg":
/*!***************************************!*\
  !*** ./src/assets/icons/linkedin.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(/*! react */ "react");

function Linkedin (props) {
    return React.createElement("svg",props,[React.createElement("g",{"clipPath":"url(#clip0_5378_585)","key":0},React.createElement("path",{"d":"M17.2734 0H2.54615C1.64206 0 0.90979 0.732273 0.90979 1.63636V16.3636C0.90979 17.2677 1.64206 18 2.54615 18H17.2734C18.1775 18 18.9098 17.2677 18.9098 16.3636V1.63636C18.9098 0.732273 18.1775 0 17.2734 0ZM6.59943 14.7273H4.18579V6.96109H6.59943V14.7273ZM5.36806 5.85082C4.58997 5.85082 3.96079 5.22 3.96079 4.44355C3.96079 3.66709 4.59079 3.03709 5.36806 3.03709C6.1437 3.03709 6.77452 3.66791 6.77452 4.44355C6.77452 5.22 6.1437 5.85082 5.36806 5.85082ZM15.6403 14.7273H13.2283V10.9505C13.2283 10.0497 13.212 8.89118 11.9741 8.89118C10.7182 8.89118 10.5251 9.87218 10.5251 10.8851V14.7273H8.11306V6.96109H10.4285V8.02227H10.4612C10.7836 7.41191 11.5707 6.768 12.7448 6.768C15.1887 6.768 15.6403 8.37655 15.6403 10.4678V14.7273Z","fill":"#9A9C9E"})),React.createElement("defs",{"key":1},React.createElement("clipPath",{"id":"clip0_5378_585"},React.createElement("rect",{"width":"18","height":"18","fill":"white","transform":"translate(0.90979)"})))]);
}

Linkedin.defaultProps = {"width":"19","height":"18","viewBox":"0 0 19 18","fill":"none"};

module.exports = Linkedin;

Linkedin.default = Linkedin;


/***/ }),

/***/ "./src/assets/icons/twitter.svg":
/*!**************************************!*\
  !*** ./src/assets/icons/twitter.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(/*! react */ "react");

function Twitter (props) {
    return React.createElement("svg",props,[React.createElement("g",{"clipPath":"url(#clip0_5378_580)","key":0},React.createElement("path",{"d":"M18.9098 2.1358C18.2138 2.44489 17.4662 2.65289 16.6815 2.74671C17.4829 2.26671 18.0975 1.50671 18.3869 0.600531C17.6378 1.04489 16.8073 1.3678 15.9229 1.54235C15.2153 0.788167 14.2073 0.316895 13.0916 0.316895C10.9491 0.316895 9.21236 2.05435 9.21236 4.19617C9.21236 4.50017 9.24727 4.79689 9.31273 5.0798C6.08873 4.91835 3.23055 3.37362 1.31636 1.02599C0.983273 1.59908 0.792 2.26526 0.792 2.97726C0.792 4.32271 1.47636 5.51035 2.51709 6.20562C1.88145 6.18526 1.28291 6.01071 0.76 5.72053C0.76 5.73726 0.76 5.75253 0.76 5.76926C0.76 7.64926 2.09673 9.21726 3.872 9.5729C3.54691 9.66162 3.20364 9.70889 2.84945 9.70889C2.6 9.70889 2.35636 9.68417 2.12 9.6398C2.61382 11.1809 4.04655 12.3031 5.744 12.3343C4.41673 13.3751 2.744 13.9954 0.925818 13.9954C0.613091 13.9954 0.304 13.9773 0 13.9409C1.71709 15.0413 3.75564 15.6834 5.94691 15.6834C13.0829 15.6834 16.984 9.77217 16.984 4.64562C16.984 4.47762 16.9804 4.31035 16.9731 4.1438C17.7316 3.59617 18.3898 2.91326 18.9098 2.1358Z","fill":"#9A9C9E"})),React.createElement("defs",{"key":1},React.createElement("clipPath",{"id":"clip0_5378_580"},React.createElement("rect",{"width":"18.9098","height":"16","fill":"white"})))]);
}

Twitter.defaultProps = {"width":"19","height":"16","viewBox":"0 0 19 16","fill":"none"};

module.exports = Twitter;

Twitter.default = Twitter;


/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/2370110623.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/2370110623.json ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"layout":"constrained","backgroundColor":"#484838","images":{"fallback":{"src":"/static/30835284f211c72e2dc402fe82b614d6/16938/hero.jpg","srcSet":"/static/30835284f211c72e2dc402fe82b614d6/509e1/hero.jpg 692w,\\n/static/30835284f211c72e2dc402fe82b614d6/47009/hero.jpg 1385w,\\n/static/30835284f211c72e2dc402fe82b614d6/16938/hero.jpg 2769w","sizes":"(min-width: 2769px) 2769px, 100vw"},"sources":[]},"width":2769,"height":3151}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/3589006823.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/3589006823.json ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"layout":"constrained","backgroundColor":"#484838","images":{"fallback":{"src":"/static/30835284f211c72e2dc402fe82b614d6/16938/hero.jpg","srcSet":"/static/30835284f211c72e2dc402fe82b614d6/509e1/hero.jpg 692w,\\n/static/30835284f211c72e2dc402fe82b614d6/47009/hero.jpg 1385w,\\n/static/30835284f211c72e2dc402fe82b614d6/16938/hero.jpg 2769w","sizes":"(min-width: 2769px) 2769px, 100vw"},"sources":[]},"width":2769,"height":3151}');

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-js.js.map