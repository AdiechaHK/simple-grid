// My HK Grid Script

(function($) {
  $.fn.HKGrid = function(conf) {

    // Initialize variables
    var self = this;
    self.config = $.extend( {}, $.fn.HKGrid.defaults, conf );

    // Public methods
    self.addItems = function(list) {
      console.log(self.screen);
      list.forEach(function(item) {
        self.addItem(item);
      });
    };
    self.addItem = function(item) {
      var index = getMostEmptyColumn();
      var parent = $("."+self.config.cols+":nth-child("+index+")", self);
      $(item).appendTo(parent);
    };
    self.rearrange = function() {
      var list = [];
      $("." + self.config.cols + " > ." + self.config.item).each(function(i, e) {
        // var h = $(e).height();
        // var eleObj = {
        //   'element': $(e).detach(),
        //   'height': h
        // };
        list.push($(e).detach());
      }).promise().done(function() {
        self.addItems(list);
      });
    }

    // Private methods
    var getMostEmptyColumn = function() {
      var min = null;
      var indexes = [1];
      for (var i = 1; i <= self.config['col-'+self.screen]; i++) {
        var h = $("."+self.config.cols+":nth-child("+i+")", self).height();
        if (min == null || min > h) {
          min = h;
          indexes = [i]
        }
        else if (min == h) {
          min = h
          indexes.push(i);
        }
      }
      return indexes.reduce(function(m, a) { return (a<m?a:m); }, indexes[0]);
    };
    var getScreen = function() {
      var width = $(window).width();
      return (width < 768 ? "xs": (width < 992? "sm": (width < 1200? "md": "lg")));
    }

    // Special event attachments
    $(window).resize(function() {
      var newScreen = getScreen();
      if(newScreen != self.screen) {
        self.screen = newScreen;
        if(self.config.rearrange_on_resize) {
          self.rearrange();
        }
      }
    });

    // Initialize variable at last
    self.screen = getScreen();

    return self;
  }

  $.fn.HKGrid.defaults = {
    "cols": "hk-grid-column",
    "item": "hk-grid-item",
    "auto_rearrange": false,
    "rearrange_time": 3000,
    "col-xs": 1,
    "col-sm": 1,
    "col-md": 2,
    "col-lg": 3,
    "rearrange_on_resize": true
  }

}(jQuery))
