/*
* @Author: Marte
* @Date:   2017-11-23 15:48:56
* @Last Modified by:   Marte
* @Last Modified time: 2017-11-23 17:00:59
*/

'use strict';
/*$(document).ready(function($) {
  // initialize with defaults
  $("#input-id").fileinput();

// with plugin options
$("#input-id").fileinput({'showUpload':false, 'previewFileType':'any'});
})*/
$(document).on('ready', function() {
    $("#input-b5").fileinput({showCaption: false}).css('display', 'none');
    $(".fileinput-button").click(function(event) {
      $(this).css({"background":"#fff"});
    });
});
