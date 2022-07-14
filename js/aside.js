(function($) {
  'use strict';

  /**
   * Sidebar
   * @constructor
   */
  var Aside = function() {
    this.$aside = $('#header_link_aside');
    this.$openBtn = $('#header_link_menu');
    this.$closeBtn = $('#main, #header_link_menu_close, a');
    this.asideShowUp = 'asideShowUp';
    this.mediumScreenWidth = 370;
  };

  Aside.prototype = {
    /**
     * @return {void}
     */
    run: function() {
      var self = this;
      // Detect the click on the open button
      this.$openBtn.click(function() {
        $('#header_link_aside').addClass('asideShowUp');
        //this.$aside.addClass(this.asideShowUp);
      });
      // Detect the click on close button
      this.$closeBtn.click(function() {
        $('#header_link_aside').removeClass('asideShowUp');
        //  this.$aside.removeClass(this.asideShowUp);
      });
      // Detect resize of the windows
      $(window).resize(function() { 
        $('#header_link_aside').removeClass('asideShowUp');
      });
    }
  };

  $(document).ready(function() {
    var aside = new Aside();
    aside.run();
  });
})(jQuery);
