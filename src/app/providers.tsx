"use client";

import { NextUIProvider } from "@nextui-org/react";

// Session provider uses react context to provide the useSession hook
//  allows us to know if user is signed in/out from client components
import { SessionProvider } from "next-auth/react";

import React, { ReactNode } from "react";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <NextUIProvider>{children}</NextUIProvider>
    </SessionProvider>
  );
};

export default Providers;
