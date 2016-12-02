webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Backbone, $, q) {style = __webpack_require__(8)
	style.use()

	var Piano = __webpack_require__(13);

	var Main = Backbone.View.extend({

	  piano: null,

	  initialize: function(params) {

	  },

	  initPiano: function() {

	    this.piano = new Piano({el: $('body')});
	    this.piano.render();
	  },

	  initSounds: function() {

	    var that = this;

	    for(var i = 48; i<91; i++) {
	      that.$el.find('.sources').append("<audio id='a"+i+"' preload='auto'><source src='/notes/a"+i+".ogg' type='audio/ogg'><source src='/notes/a"+i+".mp3' type='audio/mpeg'></audio>");
	    }

	    for(var i = 49; i<91; i++) {
	      that.$el.find('.sources').append("<audio id='b"+i+"' preload='auto'><source src='/notes/b"+i+".ogg' type='audio/ogg'><source src='/notes/b"+i+".mp3' type='audio/mpeg'></audio>");
	    }
	  },

	  render: function() {

	    var that = this;

	    return q.fcall([
	      this.initSounds(),
	      this.initPiano(),
	    ])
	    .then(function() {

	      console.log('all goot');
	      return that;
	    });

	  },

	});

	var View = new Main({el: $('body')});
	View.render();


	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2), __webpack_require__(4), __webpack_require__(5)))

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var refs = 0;
	var dispose;
	var content = __webpack_require__(9);
	if(typeof content === 'string') content = [[module.id, content, '']];
	exports.use = exports.ref = function() {
		if(!(refs++)) {
			exports.locals = content.locals;
			dispose = __webpack_require__(11)(content, {});
		}
		return exports;
	};
	exports.unuse = exports.unref = function() {
		if(!(--refs)) {
			dispose();
			dispose = null;
		}
	};
	if(false) {
		var lastRefs = module.hot.data && module.hot.data.refs || 0;
		if(lastRefs) {
			exports.ref();
			if(!content.locals) {
				refs = lastRefs;
			}
		}
		if(!content.locals) {
			module.hot.accept();
		}
		module.hot.dispose(function(data) {
			data.refs = content.locals ? 0 : refs;
			if(dispose) {
				dispose();
			}
		});
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(10)();
	// imports


	// module
	exports.push([module.id, ".reset {\n  border: 0;\n  outline: 0;\n  background-color: transparent;\n  height: auto;\n  width: auto;\n  box-shadow: none;\n  padding: 0; }\n\n.fluze {\n  background-color: white;\n  border-radius: 6px;\n  padding: 28px; }\n\n.shadow {\n  -webkit-box-shadow: 0px 15px 50px 0px rgba(142, 128, 208, 0.32);\n  box-shadow: 0px 15px 50px 0px rgba(142, 128, 208, 0.32); }\n\n.drop-shadow {\n  -webkit-box-shadow: 0px 10px 40px 0px rgba(142, 128, 208, 0.45);\n  box-shadow: 0px 10px 40px 0px rgba(142, 128, 208, 0.45); }\n\n.wait {\n  transform: translate3d(0, -50px, 0);\n  opacity: 0;\n  transition: .4s; }\n\n.init {\n  transform: translate3d(0, 0, 0);\n  opacity: 1; }\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box; }\n\nbody {\n  font: 100% Helvetica, sans-serif;\n  text-align: center;\n  text-align: center;\n  background-color: #666; }\n\n.align {\n  height: 100vh;\n  display: inline-block;\n  vertical-align: middle; }\n\n.centered {\n  display: inline-block;\n  vertical-align: middle; }\n\niframe {\n  width: 960px;\n  height: 670px;\n  border: 0;\n  outline: 0;\n  box-shadow: none;\n  position: relative;\n  top: -207px; }\n\nbutton {\n  width: 600px;\n  border-radius: 3px;\n  box-shadow: none;\n  outline: none;\n  margin: 0 auto;\n  margin-bottom: 34px;\n  background-color: #3cb7ff;\n  border: 0;\n  padding: 13px;\n  color: white;\n  text-align: center;\n  font-size: 17px;\n  display: block; }\n\ntextarea {\n  width: 600px;\n  resize: none;\n  margin: 0 auto;\n  height: 200px;\n  display: block;\n  border-radius: 3px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  box-shadow: none;\n  outline: none;\n  margin-bottom: 12px;\n  padding: 13px;\n  font-size: 17px; }\n\n.wrap {\n  height: 340px;\n  overflow: hidden;\n  width: 960px; }\n", ""]);

	// exports


/***/ },
/* 10 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = {

	    // Key: FileName
	    '&': 'a49',
	    'é': 'a50',
	    '\"': 'a51',
	    '\'': 'a52',
	    '(': 'a53',
	    '-': 'a54',
	    'è': 'a55',
	    '_': 'a56',
	    'ç': 'a57',
	    'à': 'a48',

	    '1': 'a49',
	    '2': 'a50',
	    '3': 'a51',
	    '4': 'a52',
	    '5': 'a53',
	    '6': 'a54',
	    '7': 'a55',
	    '8': 'a56',
	    '9': 'a57',
	    '0': 'a48',

	    'q': 'a81',
	    'w': 'a87',
	    'e': 'a69',
	    'r': 'a82',
	    't': 'a84',
	    'y': 'a89',
	    'u': 'a85',
	    'i': 'a73',
	    'o': 'a79',
	    'p': 'a80',
	    'a': 'a65',
	    's': 'a83',
	    'd': 'a68',
	    'f': 'a70',
	    'g': 'a71',
	    'h': 'a72',
	    'j': 'a74',
	    'k': 'a75',
	    'l': 'a76',
	    'z': 'a90',
	    'x': 'a88',
	    'c': 'a67',
	    'v': 'a86',
	    'b': 'a66',
	    'n': 'a78',
	    'm': 'a77',


	    '!': 'b49',
	    '@': 'b50',
	    '$': 'b52',
	    '%': 'b53',
	    '^': 'b54',
	    '*': 'b56',
	    '(': 'b57',
	    'Q': 'b81',
	    'W': 'b87',
	    'E': 'b69',
	    'T': 'b84',
	    'Y': 'b89',
	    'I': 'b73',
	    'O': 'b79',
	    'P': 'b80',
	    'S': 'b83',
	    'D': 'b68',
	    'G': 'b71',
	    'H': 'b72',
	    'J': 'b74',
	    'L': 'b76',
	    'Z': 'b90',
	    'C': 'b67',
	    'V': 'b86',
	    'B': 'b66',


	};


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Backbone, $) {var notes = __webpack_require__(12);
	var Player = __webpack_require__(16);

	module.exports = Backbone.View.extend({

	  events: {
	    'keypress': 'getNote'
	  },

	  player: null,

	  initialize: function(params) {

	    console.log(params);
	  },

	  initPlayer: function() {

	    this.player = new Player({el: $('.parts')});
	    this.player.render();
	    this.player.on('play', this.getNote.bind(this));
	    return this;
	  },

	  getNote: function(e) {

	    return this.play(notes[e.key || e])
	  },

	  play: function(note) {

	    var sound = this.$el.find('#'+note).clone();
	    if (sound.length === 0) return false;

	    sound.get(0).play();
	    sound.get(0).onended = function() {
	      sound.remove();
	    };

	    return this;
	  },

	  render: function() {

	    return this.initPlayer();
	  },

	})



	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2), __webpack_require__(4)))

/***/ },
/* 14 */,
/* 15 */,
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Backbone) {
	module.exports = Backbone.View.extend({

	  events: {
	    'click #play': 'parse'
	  },

	  initialize: function(params) {

	    console.log(params);
	  },

	  parse: function() {

	    var that = this;
	    var part = this.$el.find('textarea').val();

	    var song = [];
	    var duration = 0;
	    var nodelay = false;

	    part.split('').forEach(function(note, i) {

	      if (note === '[') nodelay = true;
	      if (note === ']') nodelay = false;

	      if (!nodelay) duration += 250;

	      setTimeout(function() { that.trigger('play', note) }, duration);
	    });

	  },

	  render: function() {

	    return this;
	  },

	})



	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }
]);