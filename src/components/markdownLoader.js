async function getChaptersFromContext(context) {
  console.log("Starting getChaptersFromContext");
  const chapters = [];
  const chapterMap = new Map();

  for (const key of context.keys()) {
    const match = key.match(/\.\/(\d+)-([^/]+)\/(\d+)-([^.]+)\.md$/);
    if (match) {
      const [, chapterNum, chapterName, sectionNum, sectionName] = match;
      const chapterId = `chapter-${chapterNum}`;
      const sectionId = `section-${chapterNum}-${sectionNum}`;

      if (!chapterMap.has(chapterId)) {
        chapterMap.set(chapterId, {
          id: chapterId,
          title: `${chapterNum}. ${chapterName.replace(/-/g, ' ')}`,
          sections: []
        });
      }

      const chapter = chapterMap.get(chapterId);
      const contentPath = context(key);
      const content = await fetch(contentPath).then(res => res.text());
      chapter.sections.push({
        id: sectionId,
        title: `${sectionNum}. ${sectionName.replace(/-/g, ' ')}`,
        content: content
      });
    } else {
      console.warn("File doesn't match expected format:", key);
    }
  }

  chapterMap.forEach(chapter => {
    chapter.sections.sort((a, b) => a.id.localeCompare(b.id));
    chapters.push(chapter);
  });

  return chapters.sort((a, b) => a.id.localeCompare(b.id));
}

export async function getChapters() {
  try {
    const context = require.context('../chapters', true, /\.md$/);
    return await getChaptersFromContext(context);
  } catch (error) {
    console.error('Error loading chapters:', error);
    return [];
  }
}
