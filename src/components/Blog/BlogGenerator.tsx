import React, { useState } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';

const BlogGenerator: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [tone, setTone] = useState('professional');
  const [wordCount, setWordCount] = useState(800);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await axios.post(
        'http://localhost:1337/api/ai-contents/generate',
        {
          topic,
          tone,
          wordCount,
        },
        {
          headers: {
            'Authorization': 'Bearer 1a4b1a99c23a5dfb9bd7020c660d9c2ef6dddc473f42b935de4b6e7e123e511c9186c9172110c94ddc12beedc67307a1cde08bc504420d5fa5ee708bd113837eb5b5a9eedc2d51f489690189fc9dff1cb077ec66a69f07c02f1e8d6ab90f461c4a0615df4b7a226ab90b4d7205397cb9eca58b4946127123ef882a8677ef4eef',
            'Content-Type': 'application/json',
          },
        }
      );

      setSuccess('Blog post generated successfully!');
      setTopic('');
    } catch (error) {
      setError('Failed to generate blog post. Please try again.');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="googlebot" content="noindex, nofollow" />
        <title>Blog Generator - Admin Only</title>
      </Helmet>
      <div className="max-w-2xl mx-auto p-6">
        <h2 className="text-3xl font-bold mb-6">Generate Blog Post</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Topic
            </label>
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full px-4 py-2 border rounded-md text-black"
              required
              placeholder="Enter blog topic"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tone
            </label>
            <select
              value={tone}
              onChange={(e) => setTone(e.target.value)}
              className="w-full px-4 py-2 border rounded-md text-black"
            >
              <option value="professional">Professional</option>
              <option value="casual">Casual</option>
              <option value="technical">Technical</option>
              <option value="friendly">Friendly</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Word Count
            </label>
            <input
              type="number"
              value={wordCount}
              onChange={(e) => setWordCount(Number(e.target.value))}
              className="w-full px-4 py-2 border rounded-md text-black"
              min="100"
              max="2000"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 px-4 rounded-md text-white font-medium ${
              loading
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {loading ? 'Generating...' : 'Generate Blog Post'}
          </button>

          {error && (
            <div className="text-red-600 mt-2">{error}</div>
          )}
          {success && (
            <div className="text-green-600 mt-2">{success}</div>
          )}
        </form>
      </div>
    </>
  );
};

export default BlogGenerator; 