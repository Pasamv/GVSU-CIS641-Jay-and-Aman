import { useState } from "react";

import { CreateReview } from "../utils/api";

function Review({ recipe_id }) {
    const [review, setReview] = useState("");

    const handleSubmit = async () => {
        await CreateReview(review, recipe_id);
        setReview("");
    };

    return (
        <div className="review-container">
            <textarea
                className="review-textarea"
                value={review}
                onChange={(e) => setReview(e.target.value)}
                placeholder="Write your review..."
            />
            <button
                className="review-submit-button"
                type="submit"
                onClick={handleSubmit}
            >
                Add Review
            </button>
        </div>
    );
}

export default Review;
