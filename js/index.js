// My custom code to call that grid

$(document).ready( function () {

  var randomHeight = function(min, max, postfix) {
    var randomNumber = Math.random();
    randomNumber *= (max - min);
    randomNumber += min;
    return Math.round(randomNumber) + postfix;
  }

  var grid = $("#hk-grid").HKGrid();
  grid.addItems([


    '<div class="hk-grid-item"><iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Findranil.bhukta.7%2Fposts%2F1767256700199637&width=500" width="500" height="180" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe></div>',
    '<div class="hk-grid-item>"><iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fkaushik.gujjar%2Fposts%2F1100993929977337&width=500" width="500" height="464" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe></div>',
    '<div class="hk-grid-item>"><blockquote class="twitter-tweet"><p lang="en" dir="ltr">SC issues notice to UP govt, Khan on the plea of the victim&#39;s father to shift gangrape case out of the state.</p>&mdash; ABP News (@abpnewstv) <a href="https://twitter.com/abpnewstv/status/770143449135865856">August 29, 2016</a></blockquote> <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script></div>',
    '<div class="hk-grid-item>"><iframe width="420" height="315" src="https://www.youtube.com/embed/nTRZnmLWDfA?rel=0" frameborder="0" allowfullscreen></iframe></div>',
    '<div class="hk-grid-item>"><blockquote class="instagram-media" data-instgrm-captioned data-instgrm-version="7" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:658px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:8px;"> <div style=" background:#F8F8F8; line-height:0; margin-top:40px; padding:50.0% 0; text-align:center; width:100%;"> <div style=" background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURczMzPf399fX1+bm5mzY9AMAAADiSURBVDjLvZXbEsMgCES5/P8/t9FuRVCRmU73JWlzosgSIIZURCjo/ad+EQJJB4Hv8BFt+IDpQoCx1wjOSBFhh2XssxEIYn3ulI/6MNReE07UIWJEv8UEOWDS88LY97kqyTliJKKtuYBbruAyVh5wOHiXmpi5we58Ek028czwyuQdLKPG1Bkb4NnM+VeAnfHqn1k4+GPT6uGQcvu2h2OVuIf/gWUFyy8OWEpdyZSa3aVCqpVoVvzZZ2VTnn2wU8qzVjDDetO90GSy9mVLqtgYSy231MxrY6I2gGqjrTY0L8fxCxfCBbhWrsYYAAAAAElFTkSuQmCC); display:block; height:44px; margin:0 auto -44px; position:relative; top:-22px; width:44px;"></div></div> <p style=" margin:8px 0 0 0; padding:0 4px;"> <a href="https://www.instagram.com/p/BJgA8QZAyfv/" style=" color:#000; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;" target="_blank">#desi jon snow</a></p> <p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;">A photo posted by Rushabh Joshi (@rushabhjoshi) on <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2016-08-24T17:42:43+00:00">Aug 24, 2016 at 10:42am PDT</time></p></div></blockquote><script async defer src="//platform.instagram.com/en_US/embeds.js"></script></div>',
    '<div class="hk-grid-item>"><iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fkaushik.gujjar%2Fposts%2F1100993929977337&width=500" width="500" height="464" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe></div>',
    '<div class="hk-grid-item>"><blockquote class="twitter-tweet"><p lang="en" dir="ltr">SC issues notice to UP govt, Khan on the plea of the victim&#39;s father to shift gangrape case out of the state.</p>&mdash; ABP News (@abpnewstv) <a href="https://twitter.com/abpnewstv/status/770143449135865856">August 29, 2016</a></blockquote> <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script></div>',
    '<div class="hk-grid-item>"><iframe width="420" height="315" src="https://www.youtube.com/embed/nTRZnmLWDfA?rel=0" frameborder="0" allowfullscreen></iframe></div>',
    '<div class="hk-grid-item>"><blockquote class="instagram-media" data-instgrm-captioned data-instgrm-version="7" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:658px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:8px;"> <div style=" background:#F8F8F8; line-height:0; margin-top:40px; padding:50.0% 0; text-align:center; width:100%;"> <div style=" background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURczMzPf399fX1+bm5mzY9AMAAADiSURBVDjLvZXbEsMgCES5/P8/t9FuRVCRmU73JWlzosgSIIZURCjo/ad+EQJJB4Hv8BFt+IDpQoCx1wjOSBFhh2XssxEIYn3ulI/6MNReE07UIWJEv8UEOWDS88LY97kqyTliJKKtuYBbruAyVh5wOHiXmpi5we58Ek028czwyuQdLKPG1Bkb4NnM+VeAnfHqn1k4+GPT6uGQcvu2h2OVuIf/gWUFyy8OWEpdyZSa3aVCqpVoVvzZZ2VTnn2wU8qzVjDDetO90GSy9mVLqtgYSy231MxrY6I2gGqjrTY0L8fxCxfCBbhWrsYYAAAAAElFTkSuQmCC); display:block; height:44px; margin:0 auto -44px; position:relative; top:-22px; width:44px;"></div></div> <p style=" margin:8px 0 0 0; padding:0 4px;"> <a href="https://www.instagram.com/p/BJgA8QZAyfv/" style=" color:#000; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;" target="_blank">#desi jon snow</a></p> <p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;">A photo posted by Rushabh Joshi (@rushabhjoshi) on <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2016-08-24T17:42:43+00:00">Aug 24, 2016 at 10:42am PDT</time></p></div></blockquote><script async defer src="//platform.instagram.com/en_US/embeds.js"></script></div>',
    '<div class="hk-grid-item>"><iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fkaushik.gujjar%2Fposts%2F1100993929977337&width=500" width="500" height="464" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe></div>',
    '<div class="hk-grid-item>"><blockquote class="twitter-tweet"><p lang="en" dir="ltr">SC issues notice to UP govt, Khan on the plea of the victim&#39;s father to shift gangrape case out of the state.</p>&mdash; ABP News (@abpnewstv) <a href="https://twitter.com/abpnewstv/status/770143449135865856">August 29, 2016</a></blockquote> <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script></div>',
    '<div class="hk-grid-item>"><iframe width="420" height="315" src="https://www.youtube.com/embed/nTRZnmLWDfA?rel=0" frameborder="0" allowfullscreen></iframe></div>',
    '<div class="hk-grid-item>"><blockquote class="instagram-media" data-instgrm-captioned data-instgrm-version="7" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:658px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:8px;"> <div style=" background:#F8F8F8; line-height:0; margin-top:40px; padding:50.0% 0; text-align:center; width:100%;"> <div style=" background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURczMzPf399fX1+bm5mzY9AMAAADiSURBVDjLvZXbEsMgCES5/P8/t9FuRVCRmU73JWlzosgSIIZURCjo/ad+EQJJB4Hv8BFt+IDpQoCx1wjOSBFhh2XssxEIYn3ulI/6MNReE07UIWJEv8UEOWDS88LY97kqyTliJKKtuYBbruAyVh5wOHiXmpi5we58Ek028czwyuQdLKPG1Bkb4NnM+VeAnfHqn1k4+GPT6uGQcvu2h2OVuIf/gWUFyy8OWEpdyZSa3aVCqpVoVvzZZ2VTnn2wU8qzVjDDetO90GSy9mVLqtgYSy231MxrY6I2gGqjrTY0L8fxCxfCBbhWrsYYAAAAAElFTkSuQmCC); display:block; height:44px; margin:0 auto -44px; position:relative; top:-22px; width:44px;"></div></div> <p style=" margin:8px 0 0 0; padding:0 4px;"> <a href="https://www.instagram.com/p/BJgA8QZAyfv/" style=" color:#000; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;" target="_blank">#desi jon snow</a></p> <p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;">A photo posted by Rushabh Joshi (@rushabhjoshi) on <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2016-08-24T17:42:43+00:00">Aug 24, 2016 at 10:42am PDT</time></p></div></blockquote><script async defer src="//platform.instagram.com/en_US/embeds.js"></script></div>',
    '<div class="hk-grid-item>"><iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fkaushik.gujjar%2Fposts%2F1100993929977337&width=500" width="500" height="464" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe></div>',
    '<div class="hk-grid-item>"><blockquote class="twitter-tweet"><p lang="en" dir="ltr">SC issues notice to UP govt, Khan on the plea of the victim&#39;s father to shift gangrape case out of the state.</p>&mdash; ABP News (@abpnewstv) <a href="https://twitter.com/abpnewstv/status/770143449135865856">August 29, 2016</a></blockquote> <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script></div>',
    '<div class="hk-grid-item>"><iframe width="420" height="315" src="https://www.youtube.com/embed/nTRZnmLWDfA?rel=0" frameborder="0" allowfullscreen></iframe></div>',
    '<div class="hk-grid-item>"><blockquote class="instagram-media" data-instgrm-captioned data-instgrm-version="7" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:658px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:8px;"> <div style=" background:#F8F8F8; line-height:0; margin-top:40px; padding:50.0% 0; text-align:center; width:100%;"> <div style=" background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURczMzPf399fX1+bm5mzY9AMAAADiSURBVDjLvZXbEsMgCES5/P8/t9FuRVCRmU73JWlzosgSIIZURCjo/ad+EQJJB4Hv8BFt+IDpQoCx1wjOSBFhh2XssxEIYn3ulI/6MNReE07UIWJEv8UEOWDS88LY97kqyTliJKKtuYBbruAyVh5wOHiXmpi5we58Ek028czwyuQdLKPG1Bkb4NnM+VeAnfHqn1k4+GPT6uGQcvu2h2OVuIf/gWUFyy8OWEpdyZSa3aVCqpVoVvzZZ2VTnn2wU8qzVjDDetO90GSy9mVLqtgYSy231MxrY6I2gGqjrTY0L8fxCxfCBbhWrsYYAAAAAElFTkSuQmCC); display:block; height:44px; margin:0 auto -44px; position:relative; top:-22px; width:44px;"></div></div> <p style=" margin:8px 0 0 0; padding:0 4px;"> <a href="https://www.instagram.com/p/BJgA8QZAyfv/" style=" color:#000; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;" target="_blank">#desi jon snow</a></p> <p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;">A photo posted by Rushabh Joshi (@rushabhjoshi) on <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2016-08-24T17:42:43+00:00">Aug 24, 2016 at 10:42am PDT</time></p></div></blockquote><script async defer src="//platform.instagram.com/en_US/embeds.js"></script></div>',
    '<div class="hk-grid-item>"><iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fkaushik.gujjar%2Fposts%2F1100993929977337&width=500" width="500" height="464" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe></div>',
    '<div class="hk-grid-item>"><blockquote class="twitter-tweet"><p lang="en" dir="ltr">SC issues notice to UP govt, Khan on the plea of the victim&#39;s father to shift gangrape case out of the state.</p>&mdash; ABP News (@abpnewstv) <a href="https://twitter.com/abpnewstv/status/770143449135865856">August 29, 2016</a></blockquote> <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script></div>',
    '<div class="hk-grid-item>"><iframe width="420" height="315" src="https://www.youtube.com/embed/nTRZnmLWDfA?rel=0" frameborder="0" allowfullscreen></iframe></div>',
    '<div class="hk-grid-item>"><blockquote class="instagram-media" data-instgrm-captioned data-instgrm-version="7" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:658px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:8px;"> <div style=" background:#F8F8F8; line-height:0; margin-top:40px; padding:50.0% 0; text-align:center; width:100%;"> <div style=" background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURczMzPf399fX1+bm5mzY9AMAAADiSURBVDjLvZXbEsMgCES5/P8/t9FuRVCRmU73JWlzosgSIIZURCjo/ad+EQJJB4Hv8BFt+IDpQoCx1wjOSBFhh2XssxEIYn3ulI/6MNReE07UIWJEv8UEOWDS88LY97kqyTliJKKtuYBbruAyVh5wOHiXmpi5we58Ek028czwyuQdLKPG1Bkb4NnM+VeAnfHqn1k4+GPT6uGQcvu2h2OVuIf/gWUFyy8OWEpdyZSa3aVCqpVoVvzZZ2VTnn2wU8qzVjDDetO90GSy9mVLqtgYSy231MxrY6I2gGqjrTY0L8fxCxfCBbhWrsYYAAAAAElFTkSuQmCC); display:block; height:44px; margin:0 auto -44px; position:relative; top:-22px; width:44px;"></div></div> <p style=" margin:8px 0 0 0; padding:0 4px;"> <a href="https://www.instagram.com/p/BJgA8QZAyfv/" style=" color:#000; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;" target="_blank">#desi jon snow</a></p> <p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;">A photo posted by Rushabh Joshi (@rushabhjoshi) on <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2016-08-24T17:42:43+00:00">Aug 24, 2016 at 10:42am PDT</time></p></div></blockquote><script async defer src="//platform.instagram.com/en_US/embeds.js"></script></div>',
    '<div class="hk-grid-item>"><iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fkaushik.gujjar%2Fposts%2F1100993929977337&width=500" width="500" height="464" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe></div>',
    '<div class="hk-grid-item>"><blockquote class="twitter-tweet"><p lang="en" dir="ltr">SC issues notice to UP govt, Khan on the plea of the victim&#39;s father to shift gangrape case out of the state.</p>&mdash; ABP News (@abpnewstv) <a href="https://twitter.com/abpnewstv/status/770143449135865856">August 29, 2016</a></blockquote> <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script></div>',
    '<div class="hk-grid-item>"><iframe width="420" height="315" src="https://www.youtube.com/embed/nTRZnmLWDfA?rel=0" frameborder="0" allowfullscreen></iframe></div>',
    '<div class="hk-grid-item>"><blockquote class="instagram-media" data-instgrm-captioned data-instgrm-version="7" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:658px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:8px;"> <div style=" background:#F8F8F8; line-height:0; margin-top:40px; padding:50.0% 0; text-align:center; width:100%;"> <div style=" background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURczMzPf399fX1+bm5mzY9AMAAADiSURBVDjLvZXbEsMgCES5/P8/t9FuRVCRmU73JWlzosgSIIZURCjo/ad+EQJJB4Hv8BFt+IDpQoCx1wjOSBFhh2XssxEIYn3ulI/6MNReE07UIWJEv8UEOWDS88LY97kqyTliJKKtuYBbruAyVh5wOHiXmpi5we58Ek028czwyuQdLKPG1Bkb4NnM+VeAnfHqn1k4+GPT6uGQcvu2h2OVuIf/gWUFyy8OWEpdyZSa3aVCqpVoVvzZZ2VTnn2wU8qzVjDDetO90GSy9mVLqtgYSy231MxrY6I2gGqjrTY0L8fxCxfCBbhWrsYYAAAAAElFTkSuQmCC); display:block; height:44px; margin:0 auto -44px; position:relative; top:-22px; width:44px;"></div></div> <p style=" margin:8px 0 0 0; padding:0 4px;"> <a href="https://www.instagram.com/p/BJgA8QZAyfv/" style=" color:#000; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;" target="_blank">#desi jon snow</a></p> <p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;">A photo posted by Rushabh Joshi (@rushabhjoshi) on <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2016-08-24T17:42:43+00:00">Aug 24, 2016 at 10:42am PDT</time></p></div></blockquote><script async defer src="//platform.instagram.com/en_US/embeds.js"></script></div>',


    // '<div class="sample-box" style="height: '+randomHeight(50, 200, "px")+';"></div>',
    // '<div class="sample-box" style="height: '+randomHeight(50, 200, "px")+';"></div>',
    // '<div class="sample-box" style="height: '+randomHeight(50, 200, "px")+';"></div>',
    // '<div class="sample-box" style="height: '+randomHeight(50, 200, "px")+';"></div>',
    // '<div class="sample-box" style="height: '+randomHeight(50, 200, "px")+';"></div>',
    // '<div class="sample-box" style="height: '+randomHeight(50, 200, "px")+';"></div>',
    // '<div class="sample-box" style="height: '+randomHeight(50, 200, "px")+';"></div>',
    // '<div class="sample-box" style="height: '+randomHeight(50, 200, "px")+';"></div>',
    // '<div class="sample-box" style="height: '+randomHeight(50, 200, "px")+';"></div>',
    // '<div class="sample-box" style="height: '+randomHeight(50, 200, "px")+';"></div>',
    // '<div class="sample-box" style="height: '+randomHeight(50, 200, "px")+';"></div>',
    // '<div class="sample-box" style="height: '+randomHeight(50, 200, "px")+';"></div>',
    // '<div class="sample-box" style="height: '+randomHeight(50, 200, "px")+';"></div>',
    // '<div class="sample-box" style="height: '+randomHeight(50, 200, "px")+';"></div>',
    // '<div class="sample-box" style="height: '+randomHeight(50, 200, "px")+';"></div>',
    // '<div class="sample-box" style="height: '+randomHeight(50, 200, "px")+';"></div>',
    // '<div class="sample-box" style="height: '+randomHeight(50, 200, "px")+';"></div>',
    // '<div class="sample-box" style="height: '+randomHeight(50, 200, "px")+';"></div>',
    // '<div class="sample-box" style="height: '+randomHeight(50, 200, "px")+';"></div>',
    // '<div class="sample-box" style="height: '+randomHeight(50, 200, "px")+';"></div>',
    // '<div class="sample-box" style="height: '+randomHeight(50, 200, "px")+';"></div>',
    // '<div class="sample-box" style="height: '+randomHeight(50, 200, "px")+';"></div>',
    // '<div class="sample-box" style="height: '+randomHeight(50, 200, "px")+';"></div>'

  ]);


  // var list = [];
  // for (var i = 0; i < 50; i++) {
  //   list.push(i+1);
  // }
  
  // grid.addItems(list.map(function(a) { return '<div class="hk-grid-item" style="height: '+randomHeight(50, 200, "px")+';">'+a+'</div>'; }));

  $("iframe").each(function(i, ele) {
    $(ele).attr("width", "100%").css({'width': "100%", 'max-width': "100%"});
    $(ele).attr("height", $(ele).contents().find("body").height());
  })

});