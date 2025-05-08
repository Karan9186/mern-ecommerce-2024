import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserAvatar } from "./avatar";

const Review = () => {
  const { id } = useParams();
  console.log("the id=", id);

  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchReviews = async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/api/admin/products/review/${id}`
        );
        const data = await res.json();
        console.log("data", data);
        setReviews(data?.data);
      } catch (err) {
        console.log("sdfsdf", err);
        console.error("Failed to fetch reviews:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  if (loading) return <p>Loading reviews...</p>;

  return (
    <>
      <div>
        {reviews?.length == 0 ? (
          <p>No reviews yet.</p>
        ) : (
          reviews?.map((review) => (
            <>
              <article className="p-3 bg-slate-200 rounded shadow shadow-slate-300 mb-5">
                <div className="flex items-center mb-4 ">
                <UserAvatar userName={review?.userName} />
                  <div className="font-medium dark:text-white">
                    <p className="mx-4">{review?.userName} </p>
                  </div>
                </div>
                <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
                  {/* star */}
                  {[...Array(review.reviewValue)].map((_, index) => (
                    <svg
                      className="w-4 h-4 text-yellow-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                  ))}
                </div>
                <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400"></footer>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  {review?.reviewMessage}
                </p>
              </article>
            </>
          ))
        )}
      </div>
    </>
  );
};

export default Review;
