const getWords = (text, prop) => text[prop].split(' ');
const getLength = (text, prop) => getWords(text, prop).length;

export const getSimilarAnnouncements = (
  announcement,
  announcements,
  count
) => {
  let an = announcement;

  const getSimilarityLength = (prop, item) => {
    let set = new Set([
      ...getWords(item, prop),
      ...getWords(an, prop)
    ]);

    let length =
      getLength(item, prop) + getLength(an, prop) - set.size;

    return length > 0 ? length : null;
  };

  return announcements
    .filter(item => {
      if (item.id === an.id) return false;

      const titleSimilarity = getSimilarityLength('title', item);
      const descriptionSimilarity = getSimilarityLength(
        'description',
        item
      );
      if (titleSimilarity > 0 && descriptionSimilarity > 0) {
        item.similarityNumber =
          titleSimilarity + descriptionSimilarity;
        return true;
      }
      return false;
    })
    .sort((a, b) => b.similarityNumber - a.similarityNumber)
    .map(item => {
      delete item.similarityNumber;
      return item;
    })
    .filter((_, i) => i < count);
};
