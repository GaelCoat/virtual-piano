webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Backbone, $, q) {//style = require('!style/useable!css!sass!./sass/main.scss')
	//style.use()

	var Piano = __webpack_require__(8);

	var Main = Backbone.View.extend({

	  piano: null,

	  initialize: function(params) {

	  },

	  initPiano: function() {

	    this.piano = new Piano({el: $('body')});
	    this.piano.render();
	    return this;
	  },

	  initSounds: function() {

	    var that = this;

	    for(var i = 48; i<91; i++) {
	      that.$el.find('.sources').append("<audio id='a"+i+"' preload='auto'><source src='/notes/a"+i+".ogg' type='audio/ogg'><source src='/notes/a"+i+".mp3' type='audio/mpeg'></audio>");
	    }

	    for(var i = 49; i<91; i++) {
	      that.$el.find('.sources').append("<audio id='b"+i+"' preload='auto'><source src='/notes/b"+i+".ogg' type='audio/ogg'><source src='/notes/b"+i+".mp3' type='audio/mpeg'></audio>");
	    }

	    return this;
	  },

	  render: function() {

	    var that = this;

	    this.$el.addClass('loading');

	    return q.fcall(function() {

	      return [
	        that.initSounds(),
	        that.initPiano(),
	      ]
	    })
	    .delay(3000)
	    .then(function() {

	      that.$el.removeClass('loading').addClass('ready');
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

	/* WEBPACK VAR INJECTION */(function(Backbone, $) {var notes = __webpack_require__(9);
	var Player = __webpack_require__(10);
	var Canvas = __webpack_require__(11);

	module.exports = Backbone.View.extend({

	  events: {
	    'keypress': 'getNote'
	  },

	  player: null,
	  canvas: null,

	  initialize: function(params) {

	  },

	  initPlayer: function() {

	    this.player = new Player({el: $('.parts')});
	    this.player.render();
	    this.player.on('play', this.getNote.bind(this));
	    return this;
	  },

	  initCanvas: function() {

	    this.canvas = new Canvas({el: $('.canvas')});
	    this.canvas.render();
	    return this;
	  },

	  getNote: function(e) {

	    return this.play(notes[e.key || e], e)
	  },

	  play: function(note, e) {

	    var sound = this.$el.find('#'+note).clone();
	    if (sound.length === 0) return true;

	    this.canvas.add(e.key || e)

	    sound.get(0).volume = 0.2;
	    sound.get(0).play();
	    sound.get(0).onended = function() {
	      sound.remove();
	    };

	    return this;
	  },

	  render: function() {

	    return [
	      this.initPlayer(),
	      this.initCanvas()
	    ]
	  },

	})



	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2), __webpack_require__(4)))

/***/ },
/* 9 */
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
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Backbone) {
	module.exports = Backbone.View.extend({

	  events: {
	    'click #play': 'parse',
	    'keydown textarea': 'resize'
	  },

	  initialize: function(params) {

	  },

	  resize: function() {

	    var area = this.$el.find('textarea');
	    area.css('height', 'auto');
	    area.css('height', area.get(0).scrollHeight+'px');

	    return this;
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

	    return this.resize();
	  },

	})



	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Backbone, $) {
	module.exports = Backbone.View.extend({

	  events: {
	  },

	  maxWidth: null,
	  maxHeight: null,

	  initialize: function(params) {

	  },

	  add: function(letter) {

	    var elem = $('<i>');

	    elem.text(letter);
	    elem.css({
	      'top': Math.random()*this.maxHeight+'px',
	      'left': Math.random()*this.maxWidth+'px',
	      'font-size': Math.floor((Math.random() * 45) + 45)
	    });

	    this.$el.append(elem);

	    elem.show(0).addClass('ready').delay(1050).queue(function(done) {

	      elem.remove();
	      done();
	    });
	  },

	  render: function() {

	    this.maxWidth = this.$el.width();
	    this.maxHeight = this.$el.height();
	    return this;
	  },

	})



	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2), __webpack_require__(4)))

/***/ }
]);