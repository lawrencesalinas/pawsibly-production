import React from "react";
import { useEffect, useState } from "react";
import { fetchWithAuth } from "../api/fetch";
import { useParams } from "react-router-dom";
import apiUrl from "../apiConfig";
import UserReviews from "../components/UserReviews";

function UserReviewScreen({ user }) {
  const [reviewList, setReviewList] = useState([]);

  useEffect(() => {
    try {
      fetchWithAuth("reviews", setReviewList, "reviews", user);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      <h4 class="center">These are the reviews I posted:</h4>
      <UserReviews reviewList={reviewList} user={user} />
    </div>
  );
}

export default UserReviewScreen;
