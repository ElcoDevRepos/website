import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import { motion } from 'framer-motion';
import { FaTwitter, FaLinkedin, FaFacebook, FaCopy, FaUser, FaReply } from 'react-icons/fa';

interface BlogPostData {
    id: number;
    title: string;
    content: string;
    publishedAt: string;
    author: string;
    coverImage: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
}

interface RelatedPost {
  id: number;
    title: string;
    slug: string;
    excerpt: string;
    publishedAt: string;
    coverImage: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
}

interface CommentData {
  id: number;
  attributes: {
    content: string;
    author: string;
    email: string;
    publishedAt: string;
    replies?: CommentData[];
  };
}

const ReadingProgressBar: React.FC = () => {
  const [width, setWidth] = useState(0);

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight - windowHeight;
    const scrolled = window.scrollY;
    const progress = (scrolled / documentHeight) * 100;
    setWidth(progress);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
      <div
        className="h-full bg-blue-600 transition-all duration-200"
        style={{ width: `${width}%` }}
      />
    </div>
  );
};

const SocialShare: React.FC<{ title: string }> = ({ title }) => {
  const [copied, setCopied] = useState(false);
  const currentUrl = window.location.href;
  
  const handleCopy = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center space-x-4 my-8">
      <span className="text-gray-600 font-medium">Share this post:</span>
      <a
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(currentUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-blue-400 transition-colors"
      >
        <FaTwitter size={20} />
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-blue-700 transition-colors"
      >
        <FaLinkedin size={20} />
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-blue-600 transition-colors"
      >
        <FaFacebook size={20} />
      </a>
      <button
        onClick={handleCopy}
        className="text-gray-600 hover:text-blue-600 transition-colors focus:outline-none"
      >
        <FaCopy size={20} />
      </button>
      {copied && (
        <span className="text-green-600 text-sm">URL copied!</span>
      )}
    </div>
  );
};

const calculateReadingTime = (content: string): number => {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
};

const EmailCaptureForm = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      await axios.post('http://localhost:1337/api/subscribers', {
        data: {
          email,
          source: 'blog',
          subscribed: true,
          subscribedAt: new Date().toISOString()
        }
      });
      setStatus('success');
      setEmail('');
    } catch (error: any) {
      setStatus('error');
      console.error('Error subscribing:', error.response?.data?.error?.message || error.message);
    }
  };

  return (
    <div className="bg-blue-50 p-8 rounded-xl shadow-md mt-12">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Stay Updated with Our Latest Insights
      </h3>
      <p className="text-gray-600 mb-6">
        Subscribe to receive expert tips, industry news, and exclusive content directly in your inbox.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className={`px-6 py-2 rounded-lg text-white font-medium transition-colors ${
              status === 'loading'
                ? 'bg-gray-400'
                : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
          </button>
        </div>
        {status === 'success' && (
          <p className="text-green-600">Thanks for subscribing!</p>
        )}
        {status === 'error' && (
          <p className="text-red-600">Failed to subscribe. Please try again.</p>
        )}
      </form>
    </div>
  );
};

const RelatedPosts: React.FC<{ currentPostId: number }> = ({ currentPostId }) => {
  const [relatedPosts, setRelatedPosts] = useState<RelatedPost[]>([]);

  useEffect(() => {
    const fetchRelatedPosts = async () => {
      try {
        // Fetch 3 most recent posts excluding the current one
        const response = await axios.get(
          `http://localhost:1337/api/posts?populate=*&sort=publishedAt:desc&pagination[limit]=3&filters[id][$ne]=${currentPostId}`
        );
        setRelatedPosts(response.data.data);
      } catch (error) {
        console.error('Error fetching related posts:', error);
      }
    };

    fetchRelatedPosts();
  }, [currentPostId]);

  if (relatedPosts.length === 0) return null;

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Posts</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {relatedPosts.map((post) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            {post.coverImage?.data && (
              <img
                src={`http://localhost:1337${post.coverImage.data.attributes.url}`}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-6">
              <p className="text-sm text-gray-500 mb-2">
                {format(new Date(post.publishedAt), 'MMMM d, yyyy')}
              </p>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                <a
                  href={`/blog/${post.slug}`}
                  className="hover:text-blue-600 transition-colors"
                >
                  {post.title}
                </a>
              </h3>
              <p className="text-gray-600 line-clamp-2">
                {post.excerpt}
              </p>
              <a
                href={`/blog/${post.slug}`}
                className="inline-flex items-center mt-4 text-blue-600 hover:text-blue-800"
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
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const CommentForm: React.FC<{ postId: number; parentId?: number; onSuccess: () => void }> = ({ postId, parentId, onSuccess }) => {
  const [comment, setComment] = useState('');
  const [author, setAuthor] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      await axios.post('http://localhost:1337/api/comments', {
        data: {
          content: comment,
          author,
          email,
          post: postId,
          parent: parentId,
          publishedAt: new Date().toISOString()
        }
      });
      setStatus('success');
      setComment('');
      setAuthor('');
      setEmail('');
      onSuccess();
    } catch (error) {
      console.error('Error posting comment:', error);
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
      <div>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write your comment..."
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-[100px]"
          required
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Your name"
          className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>
      <button
        type="submit"
        disabled={status === 'loading'}
        className={`px-6 py-2 rounded-lg text-white font-medium transition-colors ${
          status === 'loading' ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'
        }`}
      >
        {status === 'loading' ? 'Posting...' : 'Post Comment'}
      </button>
      {status === 'success' && (
        <p className="text-green-600">Comment posted successfully!</p>
      )}
      {status === 'error' && (
        <p className="text-red-600">Failed to post comment. Please try again.</p>
      )}
    </form>
  );
};

const Comment: React.FC<{ comment: CommentData; postId: number; onCommentPosted: () => void }> = ({ 
  comment, 
  postId,
  onCommentPosted 
}) => {
  const [showReplyForm, setShowReplyForm] = useState(false);

  return (
    <div className="border-l-4 border-blue-100 pl-4 mb-6">
      <div className="flex items-start space-x-3">
        <div className="bg-blue-100 rounded-full p-3">
          <FaUser className="text-blue-600 w-4 h-4" />
        </div>
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-1">
            <span className="font-semibold text-gray-900">{comment.attributes.author}</span>
            <span className="text-gray-500 text-sm">
              {format(new Date(comment.attributes.publishedAt), 'MMM d, yyyy')}
            </span>
          </div>
          <p className="text-gray-600 mb-2">{comment.attributes.content}</p>
          <button
            onClick={() => setShowReplyForm(!showReplyForm)}
            className="flex items-center text-blue-600 hover:text-blue-800 text-sm"
          >
            <FaReply className="mr-1" />
            Reply
          </button>
          {showReplyForm && (
            <div className="mt-4">
              <CommentForm 
                postId={postId} 
                parentId={comment.id}
                onSuccess={() => {
                  setShowReplyForm(false);
                  onCommentPosted();
                }}
              />
            </div>
          )}
        </div>
      </div>
      {comment.attributes.replies && comment.attributes.replies.length > 0 && (
        <div className="ml-12 mt-4">
          {comment.attributes.replies.map((reply) => (
            <Comment 
              key={reply.id} 
              comment={reply} 
              postId={postId}
              onCommentPosted={onCommentPosted}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const Comments: React.FC<{ postId: number }> = ({ postId }) => {
  const [comments, setComments] = useState<CommentData[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchComments = async () => {
    try {
      const response = await axios.get(
        `http://localhost:1337/api/comments?filters[post][$eq]=${postId}&populate=*&sort=publishedAt:desc`
      );
      setComments(response.data.data);
    } catch (error) {
      console.error('Error fetching comments:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [postId]);

  if (loading) {
    return <div className="animate-pulse">Loading comments...</div>;
  }

  return (
    <div className="mt-12 bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Comments</h2>
      <CommentForm postId={postId} onSuccess={fetchComments} />
      <div className="mt-12">
        {comments.length === 0 ? (
          <p className="text-gray-600 text-center">No comments yet. Be the first to comment!</p>
        ) : (
          comments.map((comment) => (
            <Comment 
              key={comment.id} 
              comment={comment} 
              postId={postId}
              onCommentPosted={fetchComments}
            />
          ))
        )}
      </div>
    </div>
  );
};

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostData | null>(null);
  const [loading, setLoading] = useState(true);
  const [readingTime, setReadingTime] = useState(0);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:1337/api/posts?filters[slug][$eq]=${slug}&populate=*`);
        if (response.data.data.length > 0) {
          const postData = response.data.data[0];
          setPost(postData);
          setReadingTime(calculateReadingTime(postData.content));
        }
      } catch (error) {
        console.error('Error fetching post:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <h1 className="text-2xl text-gray-600">Post not found</h1>
      </div>
    );
  }

  return (
    <>
      <ReadingProgressBar />
      <section className="py-32 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            {post.coverImage?.data && (
              <img
                src={`http://localhost:1337${post.coverImage.data.attributes.url}`}
                alt={post.title}
                className="w-full h-96 object-cover rounded-3xl shadow-xl mb-12"
              />
            )}
            
            <div className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-xl p-8 md:p-12">
              <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                <div className="flex items-center space-x-4">
                  <span>{format(new Date(post.publishedAt), 'MMMM d, yyyy')}</span>
                  <span>•</span>
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center">
                  <span>{readingTime} min read</span>
                </div>
              </div>

              <h1 className="text-4xl font-bold text-gray-900 mb-8">
                {post.title}
              </h1>

              <SocialShare title={post.title} />

              <div 
                className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-a:text-blue-600"
                dangerouslySetInnerHTML={{ 
                  __html: DOMPurify.sanitize(marked.parse(post.content, { async: false })) 
                }}
              />

              <SocialShare title={post.title} />
              <EmailCaptureForm />
            </div>
            
            <Comments postId={post.id} />
            <RelatedPosts currentPostId={post.id} />
          </motion.article>
        </div>
      </section>
    </>
  );
};

export default BlogPost; 