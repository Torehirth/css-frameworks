export const sortPostsByDate = (posts, sortOrder = "desc") => {
  if (!Array.isArray(posts) || posts.length === 0) {
    return [];
  }

  posts.sort((a, b) => {
    let dateA = new Date(a.created);
    let dateB = new Date(b.created);
    if (sortOrder === "desc") {
      // Sort from newest to oldest (descending)
      return dateB - dateA;
    } else {
      // Sort from oldest to newest (ascending)
      return dateA - dateB;
    }
  });

  return posts;
};
