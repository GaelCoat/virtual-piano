
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


