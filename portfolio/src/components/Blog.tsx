import { motion } from "framer-motion";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
}

const Blog = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "The Future of React Development",
      excerpt: "Exploring the latest trends and upcoming features in React development, including Server Components and the new React Compiler.",
      date: "March 15, 2024",
      category: "React",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Mastering TypeScript in 2024",
      excerpt: "A comprehensive guide to TypeScript best practices, advanced types, and how to leverage TypeScript for better development experience.",
      date: "March 10, 2024",
      category: "TypeScript",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Building Scalable Web Applications",
      excerpt: "Learn about architecture patterns, performance optimization, and best practices for building web applications that scale.",
      date: "March 5, 2024",
      category: "Architecture",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="container" style={{ marginTop: "150px", marginBottom: "50px", paddingTop: "20px" }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-5"
      >
        <h1 className="display-4 fw-bold mb-4">Blog</h1>
        <p className="lead text-muted">
          Insights, tutorials, and thoughts on software development, React, and web technologies.
        </p>
      </motion.div>

      <div className="row g-4">
        {blogPosts.map((post, index) => (
          <motion.div
            key={post.id}
            className="col-md-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="card h-100 shadow-sm hover-lift">
              <img
                src={post.image}
                className="card-img-top"
                alt={post.title}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span className="badge bg-primary">{post.category}</span>
                  <small className="text-muted">{post.readTime}</small>
                </div>
                <h5 className="card-title fw-bold">{post.title}</h5>
                <p className="card-text text-muted">{post.excerpt}</p>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <small className="text-muted">{post.date}</small>
                  <button className="btn btn-outline-primary btn-sm">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <style>
        {`
          .hover-lift {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          
          .hover-lift:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
          }

          .card {
            border: none;
            border-radius: 15px;
            overflow: hidden;
          }

          .card-img-top {
            border-radius: 15px 15px 0 0;
          }

          .badge {
            padding: 0.5em 1em;
            border-radius: 20px;
          }

          .btn-outline-primary {
            border-radius: 20px;
            padding: 0.5em 1.5em;
          }
        `}
      </style>
    </div>
  );
};

export default Blog;