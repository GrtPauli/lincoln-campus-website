import React from "react";
import { Link, useLocation } from "react-router-dom";
// npm install string-similarity --save
import { findBestMatch } from "string-similarity";

export default function NotFoundPage() {
  const location = useLocation();
  const attemptedPath = location.pathname;

  const routes = [
    "/",
    "/contact-us",
    "/about-us",
    "/management",
    "/policy-and-objectives",
    "/recognitions-and-accreditations",
    "/facilities-and-services",
    "/examinations-and-regulations",
    "/posts/events",
    "/posts/news",
    "/research-and-conferences/introduction",
    "/research-and-conferences/research-project",
    "/faculties-and-programmes/:slug",
    "/faculties-and-programmes/:facultySlug/programmes/:programmeSlug",
    "/enquiry",
    "/eligibility",
    "/faculties",
    "/admission/fees-structure",
    "/admission/admission-process",
    "/psa",
    "/psa/:slug",
    "/submit-psa",
    "/collaborators",
  ];

  // Compute best match using string-similarity
  const { bestMatch, bestMatchIndex } = findBestMatch(attemptedPath, routes);
  const SIMILARITY_THRESHOLD = 0.35; // only suggest when reasonably similar

  const suggestion = bestMatch && bestMatch.rating > SIMILARITY_THRESHOLD
    ? routes[bestMatchIndex]
    : null;

  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row items-center justify-center bg-gray-50 text-gray-800 p-6">
      {/* Sidebar Section */}
      <aside className="w-full lg:w-1/3 bg-white shadow-md rounded-xl p-6 mb-8 lg:mb-0 lg:mr-6">
          {/* <h2 className="text-xl font-semibold mb-4">Quick Search</h2>
          <input
            type="text"
            placeholder="Search…"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          /> */}

        <div className="mt-6">
          <h3 className="font-semibold mb-3">Popular Links</h3>
          <ul className="space-y-2 text-primary">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/posts">Posts</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            {suggestion && (
              <li className="mt-2 text-sm text-gray-700">
                <span className="font-medium">Suggestion: </span>
                <Link to={suggestion} className="text-primary hover:underline">
                  {suggestion}
                </Link>
              </li>
            )}
          </ul>
        </div>
      </aside>

      {/* Main Not Found Content */}
      <div className="flex flex-col items-center text-center max-w-lg">
        <h1 className="text-7xl font-bold text-primary mb-4">404</h1>
        <p className="text-lg text-gray-600 mb-6">
          The page you're looking for was not found: <span className="font-mono">{attemptedPath}</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <Link
            to="/"
            className="px-6 py-3 bg-primary text-white rounded-lg shadow-md hover:bg-primary/90 transition"
          >
            Back to Home
          </Link>

          {suggestion && (
            <Link
              to={suggestion}
              className="px-6 py-3 border border-primary text-primary rounded-lg shadow-sm hover:bg-primary/10 transition"
              aria-label={`Did you mean ${suggestion}?`}
            >
              Did you mean {suggestion}?
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}