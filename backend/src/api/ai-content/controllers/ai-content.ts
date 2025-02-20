import { OpenAI } from 'openai';
import slugify from 'slugify';
import { factories } from '@strapi/strapi';
import axios from 'axios';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Function to get the next publish date
const getNextPublishDate = async (strapi: any) => {
  // Get the latest scheduled post date
  const posts = await strapi.entityService.findMany('api::post.post', {
    sort: { publishedAt: 'desc' },
    limit: 1,
  });

  const latestPost = posts[0];
  const now = new Date();
  
  if (!latestPost) {
    // If no posts exist, start from 3 months ago
    const startDate = new Date();
    startDate.setMonth(startDate.getMonth() - 3);
    return startDate;
  }

  const latestDate = new Date(latestPost.publishedAt);
  
  // If the latest post is in the past
  if (latestDate < now) {
    // Schedule next post 3 days from now
    const nextDate = new Date();
    nextDate.setDate(now.getDate() + 3);
    return nextDate;
  }
  
  // If latest post is in the future, add 3 days to that date
  const nextDate = new Date(latestDate);
  nextDate.setDate(latestDate.getDate() + 3);
  return nextDate;
};

const stockImages = [
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
  'https://images.unsplash.com/photo-1504639725590-34d0984388bd',
  'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
  'https://images.unsplash.com/photo-1555066931-4365d14bab8c',
  'https://images.unsplash.com/photo-1562813733-b31f71025d54',
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
];

const COMPANY_PITCH = `

---

## Ready to Transform Your Digital Presence?

At Elco Dev, we specialize in creating cutting-edge web solutions that drive results. From custom web applications to stunning websites, our team of expert developers and designers can help bring your vision to life.

### Why Choose Elco Dev?
- Industry-leading expertise in web development
- Custom solutions tailored to your business needs
- Proven track record of successful projects
- Dedicated support and maintenance

Don't let your digital presence fall behind. Contact us today to discuss how we can help elevate your business to the next level.

[Schedule a Free Consultation](https://calendly.com/elco-dev/consult)
`;

export default factories.createCoreController('api::ai-content.ai-content', ({ strapi }) => ({
  async generate(ctx) {
    try {
      const { topic, tone = 'professional', wordCount = 800 } = ctx.request.body;

      // Get the next publish date
      const publishDate = await getNextPublishDate(strapi);

      // Generate the blog post content
      const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: `You are a professional blog post writer. Write in a ${tone} tone. Generate a well-structured blog post with proper headings and paragraphs. Format the output in markdown with a clear title (using #), followed by subheadings (using ##) and well-organized paragraphs.`
          },
          {
            role: "user",
            content: `Write a blog post about "${topic}". The post should be approximately ${wordCount} words. Include:
            1. A clear title starting with #
            2. A brief meta description (2-3 sentences)
            3. Several subheadings using ##
            4. Well-structured content under each heading
            5. A conclusion
            Format everything in markdown.`
          }
        ],
        temperature: 0.7,
        max_tokens: 2000,
      });

      const content = completion.choices[0].message.content + COMPANY_PITCH;
      
      // Extract title from the markdown (assuming it starts with # )
      const title = content.split('\n')[0].replace('# ', '');
      const slug = slugify(title, { lower: true, strict: true });

      // Get a random stock image URL
      const randomImageUrl = stockImages[Math.floor(Math.random() * stockImages.length)];
      
      try {
        // Download the image
        const imageResponse = await axios.get(randomImageUrl, {
          responseType: 'arraybuffer'
        });

        // Create a buffer from the image data
        const buffer = Buffer.from(imageResponse.data, 'binary');

        // Upload the image to Strapi
        const uploadResponse = await strapi.plugins.upload.services.upload.upload({
          data: {},
          files: {
            buffer: buffer,
            name: `blog-cover-${Date.now()}.jpg`,
            type: 'image/jpeg',
            size: buffer.length,
          },
        });

        // Create the blog post in Strapi with the uploaded image and scheduled date
        const entry = await strapi.entityService.create('api::post.post', {
          data: {
            title,
            content,
            slug,
            publishedAt: publishDate,
            excerpt: content.split('\n\n')[1]?.substring(0, 160) || '',
            coverImage: uploadResponse[0].id,
          },
        });

        return { data: entry };
      } catch (uploadError) {
        console.error('Image upload error:', uploadError);
        
        // If image upload fails, create post without image
        const entry = await strapi.entityService.create('api::post.post', {
          data: {
            title,
            content,
            slug,
            publishedAt: publishDate,
            excerpt: content.split('\n\n')[1]?.substring(0, 160) || '',
          },
        });

        return { data: entry };
      }
    } catch (error) {
      console.error('Error:', error);
      return ctx.throw(500, error.message);
    }
  },
})); 