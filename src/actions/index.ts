"use server";

import * as auth from "@/auth";

export async function SignIn() {
  // give the function a provider you want to sign in with
  return auth.signIn("github");
}

export async function signOut() {
  return auth.signOut();
}
