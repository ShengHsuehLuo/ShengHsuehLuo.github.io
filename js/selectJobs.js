(function($) {
  'use strict';

  /**
   * @constructor
   */
  var SelectJobs = function() {
    this.$selectedjobBTN = $('.jobs_button');
    this.$selectedjobContent = $('.jobsContent_selected');
    this.BtnCSSClass = 'jobsBtn_selected';
    this.ContentCSSClass = 'jobsContent_selected';
  };

  SelectJobs.prototype = {
    run: function() {
      var self = this;
      // Detect the click on the button
      self.$selectedjobBTN.click(function() {
        if(!$(this).hasClass(self.BtnCSSClass)){
          self.$selectedjobBTN.removeClass(self.BtnCSSClass);
          $(this).addClass(self.BtnCSSClass);
          $('.jobsContent_selected').removeClass(self.ContentCSSClass);
          $('#'+this.id+'_content').addClass(self.ContentCSSClass);
        }
      });
    }
  };

  $(document).ready(function() {
    var selectJobs = new SelectJobs();
    selectJobs.run();
  });
})(jQuery);
