var notes = require('./notes');
var Player = require('./player');

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


