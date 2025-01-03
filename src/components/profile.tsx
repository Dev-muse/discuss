"use client";

import { useSession } from "next-auth/react";
import React from "react";

const Profile = () => {
  // know if user is signed in from client component got usesession from session provider
  const session = useSession();

  if (session.data?.user) {
    return <div>User is signed in </div>;
  } else {
    return <div>User is signed out</div>;
  }
};

export default Profile;
