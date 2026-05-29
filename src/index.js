export const sortHeroesHealth = (heroes) => {
  return [...heroes].sort((a, b) => b.health - a.health);
};
