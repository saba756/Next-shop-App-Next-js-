import React, { useState, useEffect } from "react";
import Link from "next/link";
import { fetchJson } from "../lib/api";
import handleUser from "../pages/api/user";
const NavBar = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    (async () => {
      try {
        const user = await fetchJson("/api/user");
        console.log("check user 13", user);
        setUser(user);
      } catch (err) {
        console.log(err, "here");
      }
    })();
  }, []);
  const handleSignOut = async () => {
    await fetchJson("/api/logout");
    setUser(undefined);
  };
  return (
    <nav className="px-2 py-1">
      <ul className="flex gap-2">
        <li className="text-lg font-extrabold">
          <Link href="/">Next Shop</Link>
        </li>
        <li role="separator" className="flex-1" />
        {user ? (
          <>
            <li>{user.name}</li>
            <li>
              <button onClick={handleSignOut}>Sign out</button>
            </li>
          </>
        ) : (
          <li>
            <Link href="/sign-in">Sign In</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
