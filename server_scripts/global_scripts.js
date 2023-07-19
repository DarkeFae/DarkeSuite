// Allows you to craft an item by right clicking with the correct items in your hands
global.clickCrafter = (event, main, off, result, amount) => {
    const { player, item } = event;
    if (
      player.mainHandItem === main &&
      player.offHandItem === off
    ) {
      item.count--;
      if (event.hand != "MAIN_HAND") return;
      player.give(Item.of(result, amount));
    }
  };
/*Example:

ItemEvents.rightClicked(event => {
  global.clickCrafter(event, 'minecraft:diamond', 'minecraft:grass', 'minecraft:dirt', 1)
}) */