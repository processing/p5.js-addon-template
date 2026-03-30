import p5 from 'https://cdn.jsdelivr.net/npm/p5@2/lib/p5.esm.js';
import { addonTemplate } from '../../../dist/addonTemplate.esm.js'

p5.registerAddon(addonTemplate);

const sketch = function(p) {
  let data;

  p.setup = async function() {
    data = await p.loadSomething();
    p.createCanvas(400, 400);

    console.log(p.myAddonVariable); // Should log 'some value'
  };

  p.draw = function() {
    p.background(200);
    p.drawSomething();
  };
};

new p5(sketch);