import { useState } from "react";

import {CreateReview} from "../utils/api";

function Review({recipe_id})
{
    const [review, setReview] = useState("");
    
    const handleSubmit = () => {
        const response = CreateReview(review,recipe_id); //user
    };

    return (
        <div>
            <textarea
                value={review}
                onChange={(e) => setReview(e.target.value)}
                placeholder="Review"
            />
            <button type="submit" onClick={handleSubmit}>Add Recipe</button>
        </div>
    );
}
export default Review;
