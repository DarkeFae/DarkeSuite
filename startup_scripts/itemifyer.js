global.mod = "examplemod"; //change "examplemod" to the name of you want for your modname in the item registry
Platform.setModName(global.mod, "Example Mod"); //change "Example Mod" to the name of the mod you want these items to show under in JEI/REI

global.Metals = [
  //uses a blacklist for items to be created, leave out any you want made
  {material: "example", color: 0xff1493, nugget: false, ingot: false, dust: false, rod: false, gear: false, plate: false, shard: false, filing: false}, //this creates nothing
  {material: "example2", color: 0x0000aa}, //this creates every type
  {material: "example3", color: 0xff55ff, rod: false, gear: false, plate: false}, //this creates nuggets, ingots, dusts, shards, and filings
]

StartupEvents.registry("item", (e) => {
  const itemTypes = ["nugget", "ingot", "dust", "rod", "gear", "plate", "shard", "filing"]
  function createItem(_object) {
    itemTypes.forEach(itemType => {
      if (_object[itemType] !== false) {
        e.create(`${global.mod}:${_object.material}_${itemType}`)
          .texture(`darkefae:item/${itemType}`) 
          //change "darkefae" to change the base texture or replace the files located in "kubejs/assets/darkefae/item"
          //It will be colored by the color below so use a grayscale texture
          .color(0, _object.color)
          .tag(`forge:${itemType}s/${_object.material}`)
          .tooltip("§5§oBrought to you by DarkeLabs\\\n~DarkeFae") //remove this line to get rid of the tooltip
      }
    })
  }
  global.Metals.forEach(createItem)
})