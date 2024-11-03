// src/utils/fetchPageById.ts
export const fetchPageById = async (id: number) => {
  try {
    const response = await fetch(`https://eliteast.tormasclick.co.ke/wp-json/wp/v2/pages/${id}?_embed`);
    
    // Check if the response is ok
    if (!response.ok) {
      console.error('Failed to fetch page data:', response.status, response.statusText);
      return null;
    }

    const data = await response.json();

    // Log the fetched data to verify it's being fetched correctly
    console.log('Fetched Data for Page ID', id, data);

    // Check if data contains the expected properties
    if (!data || !data.title || !data.content) {
      return null; // Handle invalid data case
    }

    // Extract the featured image from the _embedded property
    const featuredImage = data._embedded['wp:featuredmedia'] ? data._embedded['wp:featuredmedia'][0].source_url : null;

    // Extract divs from content
    const divs = extractDivsFromContent(data.content.rendered);

    return {
      title: data.title.rendered,
      content: data.content.rendered,
      featuredImage,
      divs, // Include extracted divs for the second page
    };
  } catch (error) {
    console.error('Error fetching page data:', error);
    return null; // Handle fetch error
  }
};

// Function to extract divs from content using regex
const extractDivsFromContent = (content: string) => {
  const divRegex = /<div.*?>(.*?)<\/div>/gs; // Regex to match divs (global and dot-all flags)
  const divs: Array<{ image: string | null; content: string }> = [];
  let match;

  while ((match = divRegex.exec(content)) !== null) {
    const divContent = match[1];
    const imageMatch = divContent.match(/<img.*?src="(.*?)"/);
    const imageSrc = imageMatch ? imageMatch[1] : null;

    divs.push({
      image: imageSrc,
      content: divContent,
    });
  }

  console.log('Extracted Divs:', divs); // Log extracted divs for debugging
  return divs;
};