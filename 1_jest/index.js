function getNormalizeData(data) {
  if (!data || data.length === 0) {
    return [];
  }
  const normalizeData = [];

  for (let lang in data) {
    if (!data[lang]) {
      continue;
    }
    const normalizeItem = {
      lang: lang,
      id: data[lang]?.id || null,
      text: data[lang]?.text || null,
    };

    normalizeData.push(normalizeItem);
  }

  return normalizeData.sort((a, b) => b.id - a.id);
}

module.exports = getNormalizeData;
