# Glow and Shadow Plugin for Raphaël.js

A plugin to create simple glow and shadow effects that work across all Raphaël supported browsers.

## Features

  * Works across all browsers.
  * Glows and shadows move and animate along with the elements they are attached to.
  * Glows and shadows are created as Sets so they can be hidden, shown, and manipulated independently of their parent elements.
  * Supports the _rect_, _circle_, and _ellipse_ elements.

## Usage

The two methods included in this plugin are:

    glow(size, color, opacity)
    shadow(x_offset, y_offset, size, color)
  
These methods are attached to Raphaël elements and are called like so:

    var paper = Raphael(10, 50, 320, 200);
    var circle = paper.circle(50, 40, 10);
    
    // Add a glow to the circle
    var glow = circle.glow(5, '#C40000', 0.75);
    
    // Hide the glow
    glow.hide();
    
    // Show the glow
    glow.show();

Note: Glow and Shadow only supports the _rect_, _circle_, and _ellipse_ elements of Raphaël. Trying to use it on other elements (like path) will raise an error.

## Note on Patches/Pull Requests
 
  * Fork the project.
  * Make your feature addition or bug fix.
  * Commit.
  * Send me a pull request.
  
## Copyright

Copyright (c) 2010 RedBeard Tech. See LICENSE for details.