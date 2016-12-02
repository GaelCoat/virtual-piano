style = require('!style/useable!css!sass!./sass/main.scss')
style.use()

var Piano = require('./views/piano');

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

