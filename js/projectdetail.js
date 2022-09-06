(function($) {
  'use strict';

  /**
   * @constructor
   */
  var SwitchProjectPic = function() {
    this.$panel = $('.project_showup');
    //this.$mask = $('.project_mask');
    this.$detail = $('.project_detail_showup');
    this.$ShowDetail = $('.project_detail_button');
    this.$CloseDetail = $('.project_close, .project_mask');
    this.$VisibleCSS = 'visible';
    this.$InvisibleCSS = 'invisible';
    this.$WindowWidth = $('.window').width();
    this.$Window = $('.window');
    this.$PrevImg = $('.prevImg');
    this.$NextImg = $('.nextImg');
    this.$Panel = $('.panel');
    this.$slideCss = '.slide';
    this.$singleImgCss = 'singleImg';
  };

  SwitchProjectPic.prototype = {
    run: function() {
      var self = this;
      
      // Detect the click on the button
      self.$ShowDetail.click(
        function(){
          //console.log("show project detail")
          var $projectNo = $(this).attr('project');
          var cnt = 0;
          $(self.$slideCss).each(
            function(){
              cnt = cnt + 1;
              $(this).removeClass().addClass('slide');
              $(this).addClass('project'+$projectNo+'_img_0' + cnt);
            }
          );
          //console.log('#project_decribe_'+$projectNo);
          $('#project_decribe_'+$projectNo).addClass('visible');
          self.$panel.addClass(self.$VisibleCSS);
          self.$detail.addClass(self.$VisibleCSS);
          //self.$mask.addClass(self.$VisibleCSS);
          self.$panel.removeClass(self.$InvisibleCSS);
          self.$detail.removeClass(self.$InvisibleCSS);
          //self.$mask.removeClass(self.$InvisibleCSS);
          
          if($('#project_decribe_'+$projectNo).hasClass(self.$singleImgCss)){
            console.log("single img");
            self.$PrevImg.addClass(self.$InvisibleCSS);
            self.$NextImg.addClass(self.$InvisibleCSS);
          }
        }
      );
      self.$CloseDetail.click(
        function(){
          //console.log("close project detail");
          self.$panel.removeClass(self.$VisibleCSS);
          self.$detail.removeClass(self.$VisibleCSS);
          //self.$mask.removeClass(self.$VisibleCSS);
          self.$panel.addClass(self.$InvisibleCSS);
          self.$detail.addClass(self.$InvisibleCSS);
          $('.project_describe_panel').removeClass('visible');
          if(self.$PrevImg.hasClass(self.$InvisibleCSS)){
            setTimeout(function() {
              self.$PrevImg.removeClass(self.$InvisibleCSS);
              self.$NextImg.removeClass(self.$InvisibleCSS);
            },200);
          }
          
          //self.$mask.addClass(self.$InvisibleCSS);
        }
      );
      self.$PrevImg.click(
        function(){shiftSlide(1);}
      );
      self.$NextImg.click(
        function(){shiftSlide(-1);}
      );
      function shiftSlide(direction){
        if (self.$Panel.hasClass('transition')) return;
        self.$Panel.addClass('transition');
        self.$Panel.css('transform', 'translateX(' + direction * self.$WindowWidth + 'px)');
        setTimeout(function() {
          if (direction === 1) {
            $('.slide:first').before($('.slide:last'));
          } else if (direction === -1) {
            $('.slide:last').after($('.slide:first'));
          }
          self.$Panel.removeClass('transition');
          self.$Panel.css('transform', 'translateX(0px)');
        }, 700);
        
        
        /*
        if (direction === 1) {
          $('.slide:first').before($('.slide:last'));
        } else if (direction === -1) {
          $('.slide:last').after($('.slide:first'));
        }
        */
      }
    }
  };

  $(document).ready(function() {
    var ProjectPic = new SwitchProjectPic();
    ProjectPic.run();
  });
})(jQuery);
