GlowTest = TestCase("GlowTest");

GlowTest.prototype.testThatSetIsReturnedForSupportedElements = function() {
  var paper = Raphael(10, 50, 320, 200);
  var circle = paper.circle(50, 40, 10);
  var circle_glow = circle.glow(5, '#C40000', 0.75);
  
  assertEquals("set", circle_glow.type);
  
  var rect = paper.rect(50, 40, 10, 10);
  var rect_glow = rect.glow(5, '#C40000', 0.75);
  
  assertEquals("set", rect_glow.type);
  
  var ellipse = paper.ellipse(50, 40, 10, 10);
  var ellipse_glow = ellipse.glow(5, '#C40000', 0.75);
  
  assertEquals("set", ellipse_glow.type);
};

GlowTest.prototype.testForErrorOnNonSupportedType = function() {
  var paper = Raphael(10, 50, 320, 200);
  var text = paper.text(50, 40, 'Hi');
  try {
    var glow = text.glow(5, '#C40000', 0.75);
    fail("Didn't raise error with text type");
  } catch(exception) {
    assertEquals("Glow and Shadow does not support the text Raphael element!", exception);
  }
};