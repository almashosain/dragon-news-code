import React from 'react';
import { FaEye, FaStar, FaShareAlt } from 'react-icons/fa';
import { IoBookmarkOutline } from 'react-icons/io5';
import { Link } from 'react-router';

const NewsCard = ({ news }) => {
  const {id, title, author, thumbnail_url, total_view, details, rating, tags } = news;

  const formattedDate = author?.published_date
    ? new Date(author.published_date).toLocaleDateString()
    : 'Unknown Date';

  return (
    <div className="card bg-base-100 shadow-md mb-6 rounded-md overflow-hidden border">
      {/* 🧑‍💼 Author & Actions */}
      <div className="flex justify-between items-center p-4 bg-base-200">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img src={author?.img} alt={author?.name || 'Author'} />
            </div>
          </div>
          <div>
            <h2 className="font-bold text-sm">{author?.name || 'Anonymous'}</h2>
            <p className="text-sm text-gray-500">{formattedDate}</p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-gray-500 hover:text-primary cursor-pointer">
          <IoBookmarkOutline className="text-lg" />
          <FaShareAlt className="text-lg" />
        </div>
      </div>

      {/* 📰 Title */}
      <div className="px-4 py-3">
        <h2 className="text-lg font-bold text-primary cursor-pointer hover:underline">{title}</h2>
      </div>

      {/* 🖼️ Thumbnail */}
      {thumbnail_url && (
        <div className="px-4">
          <img src={thumbnail_url} alt={title} className="w-full h-48 object-cover rounded-md" />
        </div>
      )}

      {/* 📄 Details */}
      <div className="px-4 py-3 text-sm text-gray-700 leading-relaxed">
        {details?.length > 200 ? (
          <>
            {details.slice(0, 200)}...
            <Link to={`/news-details/${id}`} className="text-primary font-semibold cursor-pointer hover:underline ml-1">
              Read More
            </Link>
          </>
        ) : (
          details
        )}
      </div>

      {/* ⭐ Footer: Rating + Views */}
      <div className="flex justify-between items-center px-4 py-3 border-t">
        {/* Rating */}
        <div className="flex items-center gap-1 text-orange-400">
          {Array.from({ length: Math.round(rating?.number || 0) }).map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="ml-2 text-gray-600">{rating?.number || 0}</span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-2 text-gray-500">
          <FaEye />
          <span>{total_view || 0}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
