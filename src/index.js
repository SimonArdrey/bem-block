function determineModifiers(modifiers) {
  const modifiersList = modifiers.length === 1 && typeof modifiers[0] !== 'string'
    ? modifiers[0]
    : modifiers;

  return Array.isArray(modifiersList)
    ? modifiersList
    : Object.keys(modifiersList).filter((prop) => modifiersList[prop]);
}

module.exports = function block(blockName, ...blockModifiers) {
  const blockModifiersList = determineModifiers(blockModifiers);

  return function element(elementName, ...elementModifiers) {
    const elementModifiersList = determineModifiers(elementModifiers);

    if (elementName) {
      return [
        `${blockName}__${elementName}`,
        ...elementModifiersList.map((modifier) => `${blockName}__${elementName}--${modifier}`),
      ].join(' ');
    }

    return [
      blockName,
      ...blockModifiersList.map((modifier) => `${blockName}--${modifier}`),
    ].join(' ');
  };
}
