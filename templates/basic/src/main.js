export function addonTemplate(p5, fn, lifecycles){
  // This function will run **before** the `setup()` function of a sketch
  lifecycles.presetup = function() { };
  // This function will run **after** the `setup()` function of a sketch
  lifecycles.postsetup = function() { };
  // This function will run **before** each run of the `draw()` function of a sketch
  lifecycles.predraw = function() { };
  // This function will run **after** each run of the `draw()` function of a sketch
  lifecycles.postdraw = function() { };
  // This function will run when the sketch is removed
  lifecycles.remove = function() { };


  // This variable will be available in a sketch as `myAddonVariable`
  fn.myAddonVariable = 'some value';
  // This function will be available in the sketch as `drawSomething`
  fn.drawSomething = function() { };
  // This is an asynchronous function: for example, `await loadSomething()`
  fn.loadSomething = async function() { };
  // This class will be available in a sketch as `new p5.MyAddonClass()`
  p5.MyAddonClass = class { };
};

if(typeof p5 !== 'undefined'){
  p5.registerAddon(addonTemplate);
}
