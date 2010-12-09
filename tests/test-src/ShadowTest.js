ShadowTest = TestCase("ShadowTest");

ShadowTest.prototype.testThatSetIsReturnedForSupportedElements = function() {
  var paper = Raphael(10, 50, 320, 200);
  var circle = paper.circle(50, 40, 10);
  var circle_shadow = circle.shadow(5, 5, 5, '#C40000');
  
  assertEquals("set", circle_shadow.type);
  
  var rect = paper.rect(50, 40, 10, 10);
  var rect_shadow = rect.shadow(5, 5, 5, '#C40000');
  
  assertEquals("set", rect_shadow.type);
  
  var ellipse = paper.ellipse(50, 40, 10, 10);
  var ellipse_shadow = ellipse.shadow(5, 5, 5, '#C40000');
  
  assertEquals("set", ellipse_shadow.type);
};

ShadowTest.prototype.testForErrorOnNonSupportedType = function() {
  var paper = Raphael(10, 50, 320, 200);
  var text = paper.text(50, 40, 'Hi');
  try {
    var shadow = text.shadow(5, 5, 5, '#C40000');
    fail("Didn't raise error with text type");
  } catch(exception) {
    assertEquals("Glow and Shadow does not support the text Raphael element!", exception);
  }
};