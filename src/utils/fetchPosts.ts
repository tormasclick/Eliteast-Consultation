// src/utils/fetchPosts.ts
const fetchPosts = async () => {
  try {
    const res = await fetch('https://eliteast.tormasclick.co.ke/wp-json/wp/v2/posts');

    // Check for a successful response
    if (!res.ok) {
      throw new Error(`Network response was not ok: ${res.statusText}`);
    }

    const posts = await res.json();

    // Ensure posts is an array
    if (!Array.isArray(posts)) {
      throw new Error("Fetched data is not an array");
    }

    return posts;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error fetching posts:", error.message);
    } else {
      console.error("Unexpected error fetching posts:", error);
    }
    throw new Error("Failed to fetch posts");
  }
};

export { fetchPosts };