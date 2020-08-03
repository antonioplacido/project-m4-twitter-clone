import React, { useState } from "react";
import moment from "moment";

export const TweetContext = React.createContext(null);

export const TweetProvider = ({ children }) => {
  const [numOfLikes, setNumOfLikes] = useState(460);
  const [numOfRetweets, setNumOfRetweets] = useState(65);
  const [isLiked, setIsLiked] = useState(false);
  const [isRetweeted, setIsRetweeted] = useState(false);

  const handleToggleRetweet = () => {
    let rtVar = !isRetweeted;
    setIsRetweeted(rtVar);
    setNumOfRetweets(rtVar ? numOfRetweets + 1 : numOfRetweets - 1);
  };

  const handleToggleLike = () => {
    let likeVar = !isLiked;
    setIsLiked(likeVar);
    setNumOfLikes(likeVar ? numOfLikes + 1 : numOfLikes - 1);
  };

  const date = moment().format("h:mm a ∙ MMM Do, YYYY");
  const isRetweetedByCurrentUser = isRetweeted;
  const isLikedByCurrentUser = isLiked;
  const tweetContents = "Giga-bummer! We're locked out!";
  const displayName = "Cheetor";
  const username = "the_real_cheetor";
  return (
    <TweetContext.Provider
      value={{
        tweetContents,
        displayName,
        username,
        isRetweetedByCurrentUser,
        isLikedByCurrentUser,
        date,
        numOfLikes,
        numOfRetweets,
        setNumOfLikes,
        setNumOfRetweets,
        handleToggleLike,
        handleToggleRetweet,
        setIsLiked,
        setIsRetweeted,
      }}
    >
      {children}{" "}
    </TweetContext.Provider>
  );
};

export default TweetProvider;
