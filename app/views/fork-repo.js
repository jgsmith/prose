var $ = require('jquery-browserify');
var _ = require('underscore');
var Backbone = require('backbone');
var templates = require('../../dist/templates');

module.exports = Backbone.View.extend({
  className: 'inner deep prose limiter',

  template: templates.forkrepo,

  render: function() {
  	this.$el.empty()
      .append(_.template(this.template, {}, {}));
    return this;
  }
});
