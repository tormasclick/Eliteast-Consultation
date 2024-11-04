// src/app/page.tsx
import { fetchPageById } from '@/utils/fetchPageById';
import Image from 'next/image'; // Import Image component from Next.js

export default async function HomePage() {
  const pageId1 = 7; // First page ID
  const pageData1 = await fetchPageById(pageId1);

  if (!pageData1) {
    return <div className="text-red-500">Error fetching first page data.</div>;
  }

  console.log('First Page Data:', pageData1);

  const pageId2 = 13; // Second page ID
  const pageData2 = await fetchPageById(pageId2);

  if (!pageData2) {
    return <div className="text-red-500">Error fetching second page data.</div>;
  }

  console.log('Second Page Data:', pageData2);

  const pageId3 = 10; // Third page ID
  const pageData3 = await fetchPageById(pageId3);

  if (!pageData3) {
    return <div className="text-red-500">Error fetching third page data.</div>;
  }

  console.log('Third Page Data:', pageData3);

  return (
    <div className="container mx-auto p-4">
      {/* First Page Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 slide-in-left">
          <h1 className="text-3xl font-bold mb-6">{pageData1.title}</h1>
          <div className="prose">
            <div dangerouslySetInnerHTML={{ __html: pageData1.content }} />
          </div>
        </div>

        {/* Column 2: Featured Image */}
        {pageData1.featuredImage ? (
          <div className="bg-white p-6 slide-in-right">
            <Image
              src={pageData1.featuredImage}
              alt="Featured"
              width={600} // Adjust width as necessary
              height={400} // Adjust height as necessary
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>
        ) : (
          <div className="bg-white p-6 flex items-center justify-center slide-in-right">
            <p className="text-gray-500">No featured image available</p>
          </div>
        )}
      </div>

      {/* Second Page Data */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {Array.isArray(pageData2.divs) && pageData2.divs.length > 0 ? (
          pageData2.divs.map((div, index) => (
            <div key={index} className="bg-white p-6">
              <div className="text-gray-700">
                <div dangerouslySetInnerHTML={{ __html: div.content }} />
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-3 text-center text-gray-500">
            No content available for this section.
          </div>
        )}
      </div>

      {/* Third Page Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {/* Column 1: Featured Image */}
        {pageData3.featuredImage ? (
          <div className="bg-white p-6 slide-in-left">
            <Image
              src={pageData3.featuredImage}
              alt="Featured"
              width={600} // Adjust width as necessary
              height={400} // Adjust height as necessary
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>
        ) : (
          <div className="bg-white p-6 flex items-center justify-center slide-in-left">
            <p className="text-gray-500">No featured image available</p>
          </div>
        )}

        {/* Column 2: Page Content */}
        <div className="bg-white p-6 slide-in-right">
          <h1 className="text-3xl font-bold mb-6">{pageData3.title}</h1>
          <div className="prose">
            <div dangerouslySetInnerHTML={{ __html: pageData3.content }} />
          </div>
        </div>
      </div>
    </div>
  );
}