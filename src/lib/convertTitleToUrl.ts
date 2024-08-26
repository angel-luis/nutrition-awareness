// Based on Metacritic's URLs

export default function convertTitleToUrl(title: string) {
  return (
    `https://www.metacritic.com/game/` +
    title
      .toLowerCase()
      .replace(/'/g, "") // Remove apostrophes
      .replace(/\+/g, "plus") // Replace "+" with "plus"
      .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric characters with hyphens
      .replace(/-{2,}/g, "-") // Replace multiple hyphens with a single hyphen
      .replace(/(^-|-$)/g, "") // Remove leading or trailing hyphens
  );
}
