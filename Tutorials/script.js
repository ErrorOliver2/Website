// Fetch blog posts from JSON file
fetch('blog-posts.json')
  .then(response => response.json())
  .then(posts => {
    const blogPostsElement = document.querySelector('#blog-posts');
    posts.forEach(post => {
      const postElement = document.createElement('section');
      const titleElement = document.createElement('h2');
      const dateElement = document.createElement('p');
      const contentElement = document.createElement('p');
      
      titleElement.textContent = post.title;
      dateElement.textContent = `Published on: ${post.date}`;
      contentElement.textContent = post.content;
      
      postElement.appendChild(titleElement);
      postElement.appendChild(dateElement);
      postElement.appendChild(contentElement);
      blogPostsElement.appendChild(postElement);
    });
  });