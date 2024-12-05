import { useState, useEffect } from "react";

import { GetReviews } from "../utils/api";

function ReviewList(props)
{
    const [data,setData] = useState([]);
    async function get()
    {
        const respose = await GetReviews(props.recipe_id);
        console.log(respose);
        setData(respose);
    }
    useEffect(()=>{get()},[props.recipe_id]);
    return <div>
        <h1>Reviews list</h1>
        {data.length > 0 ? (
        data.map((review, index) => (
            <div key={index}>
                <h1>{review.review}</h1>
            </div>
        ))
    ) : (
        <p>No reviews found.</p>
    )}
    </div>;

}
export default ReviewList;
