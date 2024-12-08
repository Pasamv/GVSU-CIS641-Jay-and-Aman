import { useState, useEffect } from "react";

import { GetReviews } from "../utils/api";

function ReviewList(props) 
{
    const [data, setData] = useState([]);

    async function get() {
        const response = await GetReviews(props.recipe_id);
        console.log(response);
        setData(response);
    }

    useEffect(() => {
        get();
    }, [props.recipe_id]);

    return (
        <div className="review-list-container">
            <h1 className="review-list-title">Reviews List</h1>
            <div className="review-list-content">
                {data.length > 0 ? (
                    data.map((review, index) => (
                        <div key={index} className="review-card">
                            <p className="review-text">{review.review}</p>
                        </div>
                    ))
                ) : (
                    <p className="review-list-empty">No reviews found.</p>
                )}
            </div>
        </div>
    );
}

export default ReviewList;
