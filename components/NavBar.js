import React, { useState, useEffect } from "react";
import Link from "next/link";
import handleUser from "../pages/api/user";
import { useUser, useSignOut } from "../hooks/user";
const NavBar = () => {
  const user = useUser();
  const signOut = useSignOut();
  return (
    <nav className="px-2 py-1">
      <ul className="flex gap-2">
        <li className="text-lg font-extrabold">
          <Link href="/">Next Shop</Link>
        </li>
        <li role="separator" className="flex-1" />
        {user ? (
          <>
            <li>
              <Link href="/cart-item">Cart</Link>
            </li>
            <li>{user.name}</li>
            <li>
              <button onClick={signOut}>Sign out</button>
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
