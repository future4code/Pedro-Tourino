function post(event) {
  const categoryData = event.target.value;
  const topicData = event.target.value;
  const titleData = event.target.value;
  const authorData = event.target.value;
  const contentData = event.target.value;

  const newPostData = {
    category: categoryData,
    topic: topicData,
    title: titleData,
    author: authorData,
    content: contentData,
  };

  console.log(newPostData);
}
