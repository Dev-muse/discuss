"use server";
import * as auth from "@/auth";

export async function signIn() {
  // give the function a provider you want to sign in with
  return auth.signIn("github");
}
