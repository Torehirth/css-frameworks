export const filterPosts = (posts, inputValue) => {
  return posts.filter((post) => {
    // search for title, body, tags, name
    return (
      post?.body?.toLowerCase().trim().includes(inputValue) ||
      post?.title?.toLowerCase().trim().includes(inputValue) ||
      // Uses some() to loop through tags array and return posts if one element is true.
      post?.tags?.some((tag) => {
        return tag?.toLowerCase().trim().includes(inputValue);
      }) ||
      post?.author?.name?.toLowerCase().trim().includes(inputValue)
    );
  });
};
