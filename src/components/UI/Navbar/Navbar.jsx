"use client";

import Link from "next/link";

import { useAccount, useConnect, useDisconnect } from "wagmi";

const Navbar = () => {
  const { address: accountAddress, status, chainId } = useAccount();
  const { connectors, connect } = useConnect();
  const { disconnect } = useDisconnect();

  return (
    <header className="relative">
      <div className="custom-screen navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href={`/launch`}>Launch</Link>
              </li>
              <li>
                <Link href={`/pools?size=4`}>Pools</Link>
              </li>
              <li>
                <Link href={`/dashboard?user=${accountAddress ?? ``}`}>
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>
          <Link href={`/`} className="btn btn-ghost text-xl">
            Staqe
          </Link>
        </div>
        <div className="navbar-center lg:flex lg:gap-2">
          <ul className="menu menu-horizontal px-1 z-[1] flex gap-2">
            <li>
              <Link href={`/launch`}>Launch</Link>
            </li>
            <li>
              <Link href={`/pools?size=4`}>Pools</Link>
            </li>
            <li>
              <Link href={`/dashboard?user=${accountAddress ?? ``}`}>
                Dashboard
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end mr-4">
          {accountAddress ? (
            <div className="font-mono">{`${accountAddress.slice(0, 5)}..${accountAddress.slice(accountAddress.length - 3)}`}</div>
          ) : (
            <button
              onClick={() => connect({ connector: connectors[0] })}
              className="btn"
            >
              Connect
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
