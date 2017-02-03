"use strict";
//Function to set tree-view logic
var tree;

var blob = function(){
  console.log('HuHu');
  $.ajax({
    type: "GET",
    url: '/api/getDataTree',
    success: function(data) {
      console.log(data);
      tree = [data];
      return data;
    },
    complete: function() {
      $('#tree').treeview({
          data: tree
        });
    }
  })
};

blob();
