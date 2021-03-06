/*!
{{@pluginName}} v0.1.0 (https://github.com/TechTarget/{{@pluginName}})
Author: Morgan Wigmanich <okize123@gmail.com> (http://github.com/okize)
Copyright (c) 2013 | Licensed under the MIT license
http://www.opensource.org/licenses/mit-license.php
*/
(function(factory) {
  if (typeof define === 'function' && define.amd) {
    return define(['jquery'], factory);
  } else {
    return factory(jQuery);
  }
})(function($) {
  'use strict';
  var Plugin, defaults, pluginName;

  pluginName = '{{@pluginName}}';
  defaults = {
    property: true
  };
  Plugin = (function() {
    function Plugin(element, options) {
      this.element = element;
      this.options = $.extend({}, defaults, options);
      this._defaults = defaults;
      this._name = pluginName;
      this.el = $(this.element);
      this.init();
    }

    Plugin.prototype.init = function() {
      return console.log('{{@pluginName}} initialized');
    };

    return Plugin;

  })();
  $.fn[pluginName] = function(options) {
    return this.each(function() {
      if (!$.data(this, 'plugin_#{pluginName}')) {
        $.data(this, 'plugin_#{pluginName}', new Plugin(this, options));
      }
    });
  };
});
