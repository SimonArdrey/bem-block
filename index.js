export function block(blockName, ...blockModifiers) {
  function elementFn(elementName, ...elementModifiers) {
    let blockModifiersList = blockModifiers.length === 1 && typeof blockModifiers[0] !== 'string'
      ? blockModifiers[0]
      : blockModifiers;

    blockModifiersList = Array.isArray(blockModifiersList)
      ? blockModifiersList
      : Object.keys(blockModifiersList).filter((prop) => blockModifiersList[prop]);

    let elementModifiersList = elementModifiers.length === 1 && typeof elementModifiers[0] !== 'string'
      ? elementModifiers[0]
      : elementModifiers;

    elementModifiersList = Array.isArray(elementModifiersList)
      ? elementModifiersList
      : Object.keys(elementModifiersList).filter((prop) => elementModifiersList[prop]);

    if (elementName) {
      return [
        `${blockName}__${elementName}`,
        elementModifiersList.map((modifier) => `${blockName}__${elementName}--${modifier}`),
      ].join(' ');
    }

    return [
      blockName,
      blockModifiersList.map((modifier) => `${blockName}--${modifier}`),
    ].join(' ');
  }

  elementFn.blockName = blockName;
  elementFn.block = (subblockName, ...params) => block(`${blockName}__${subblockName}`, ...params);
  return elementFn;
}
