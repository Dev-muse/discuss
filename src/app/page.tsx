import { Button } from "@nextui-org/button";
import * as actions from "@/actions";
import { auth } from "@/auth";
import Profile from "@/components/profile";

export default async function Home() {
  // know if user is signed in from server component
  const session = await auth();
  return (
    <div className="gap-4 flex m-5">
      <form action={actions.SignIn}>
        <Button type="submit">Sign In</Button>
      </form>
      <form action={actions.signOut}>
        <Button type="submit">Sign Out</Button>
      </form>

      {session?.user ? (
        <div>Welcome {session.user.name} </div>
      ) : (
        <div>Signed out</div>
      )}

      <Profile />
    </div>
  );
}
