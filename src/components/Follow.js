import React, { useEffect, useState } from "react";
import Button from "../styles/Button";
import { client } from "../utils";

const Follow = ({ nobtn, isFollowing, incFollowers, decFollowers, userId }) => {
  const [followingState, setFollowingState] = useState(isFollowing);

  useEffect(() => setFollowingState(isFollowing), [isFollowing]);

  
};

export default Follow;
