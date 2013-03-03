/*!
{{pluginName}} v0.0.1 (http://okize.github.com/)
Copyright (c) 2013 | Licensed under the MIT license - http://www.opensource.org/licenses/mit-license.php
*/

;(function (factory) {

  // use AMD or browser globals to create a jQuery plugin.
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else {
    factory(jQuery);
  }

}(function ($) {

  'use strict';

  // default plugin options
  var pluginName = '{{pluginName}} ';
  var defaults = {
    property: true
  };

  // plugin constructor
  var Plugin = function (element, options) {
    this.element = element;
    this.options = $.extend({}, defaults, options);
    this._defaults = defaults;
    this._name = pluginName;
    this.el = $(this.element);
    this.init();
  };

  Plugin.prototype = {

    // initialize plugin
    init: function() {
      return true;
    },

    // another method
    foo: function () {
      return false;
    }

  };

  // lightweight wrapper around the constructor that prevents multiple instantiations
  $.fn[pluginName] = function ( options ) {
    return this.each(function () {
      if (!$.data(this, 'plugin_' + pluginName)) {
        $.data(this, 'plugin_' + pluginName, new Plugin( this, options ));
      }
    });
  };

}));