// Helper functions for fetching wallpapers from https://www.reddit.com/r/wallpapers

const WALLPAPERS_URL = 'https://www.reddit.com/r/wallpapers.json';

export function fetchWallpapers() {
  return fetch(WALLPAPERS_URL)
    .then(res => res.json())
    .then(json => {
      const posts = json.data.children;
      const filteredPosts = posts.filter(
        post => post.data.preview && post.data.preview.images
      );
      return filteredPosts.map(post => {
        const image = post.data.preview.images[0];
        const thumbnailImage = image.resolutions.find(
          img => img.width > 320 && img.width < 960
        );
        return {
          title: post.data.title,
          author: post.data.author_fullname,
          link: `https://www.reddit.com${post.data.permalink}`,
          images: {
            full: image.source,
            thumbnail: thumbnailImage
          }
        };
      });
    });
}

export function fetchImages() {
  const ids = Array(10)
    .fill(null)
    .map(() => Math.floor(Math.random() * 50));
  return ids.map(id => ({
    id,
    title: `Image ${id}`,
    author: 'Mehdi Vasigh',
    src: `https://picsum.photos/id/${id}/640/480`
  }));
}
