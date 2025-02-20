import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { format } from 'date-fns';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const BlogPage: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:1337/api/posts?populate=*&sort=publishedAt:desc');
        console.log('API Response:', response.data);
        
        if (!response.data || !Array.isArray(response.data.data)) {
          throw new Error('Invalid response format');
        }

        setPosts(response.data.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setError('Failed to load blog posts. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    console.log('Posts:', posts);
  }, [posts]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-red-500 text-xl">{error}</div>
      </div>
    );
  }

  const description = "Stay updated with the latest insights, tips, and stories from the Elco Dev team. Our blog covers web development, technology trends, and digital solutions.";

  return (
    <>
      <Helmet>
        <title>Elco Dev Blog - Web Development Insights & Tech Trends</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Elco Dev Blog - Web Development Insights & Tech Trends" />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="blog" />
        <link rel="canonical" href="https://elcodev.com/blog" />
      </Helmet>
      <section className="py-32 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Blog</h1>
              <p className="text-xl text-gray-600">
                Insights, updates, and stories from our team
              </p>
            </div>

            {!posts || posts.length === 0 ? (
              <div className="text-center text-gray-600 py-12">
                No blog posts available yet.
              </div>
            ) : (
              <div className="grid gap-12">
                {posts.map((post) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-3xl shadow-xl overflow-hidden"
                  >
                    {post.coverImage?.data && (
                      <div className="relative h-64 w-full">
                        <img
                          src={`http://localhost:1337${post.coverImage.data.attributes.url}`}
                          alt={post.attributes.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className="p-8">
                      <div className="text-sm text-gray-500 mb-4">
                        {format(new Date(post.publishedAt), 'MMMM d, yyyy')}
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        <Link 
                          to={`/blog/${post.slug}`}
                          className="hover:text-blue-600 transition-colors"
                        >
                          {post.title}
                        </Link>
                      </h2>
                      <p className="text-gray-600 mb-6">
                        {post.excerpt || 
                          (post.content && post.content.substring(0, 160) + '...')}
                      </p>
                      <Link
                        to={`/blog/${post.slug}`}
                        className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800"
                      >
                        Read More
                        <svg
                          className="ml-2 w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default BlogPage; 