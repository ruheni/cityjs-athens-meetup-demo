import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Header: React.FC = () => {
  const router = useRouter();
  const isActive: (pathname: string) => boolean = (pathname) =>
    router.pathname === pathname;



  let left = (
    <div className="left">
      <Link href="/">
        <a className="bold" data-active={isActive("/")}>
          Feed
        </a>
      </Link>
      <style jsx>{`
        .bold {
          font-weight: bold;
        }

        a {
          text-decoration: none;
          color: #000;
          display: inline-block;
        }

        .left a[data-active="true"] {
          color: gray;
        }

        a + a {
          margin-left: 1rem;
        }
      `}</style>
    </div>
  );

  let right = (<div className="right">
    <Link href="/drafts">
      <a data-active={isActive("/drafts")}>My drafts</a>
    </Link>
    <Link href="/create">
      <a data-active={isActive("/create")}>+ Create</a>
    </Link>
    <style jsx>{`
    .bold {
      font-weight: bold;
    }

    a {
      text-decoration: none;
      color: #000;
      display: inline-block;
    }

    .right a[data-active="true"] {
      color: gray;
    }

    a + a {
      margin-left: 1rem;
    }
  `}</style>
  </div>)


  return (
    <nav>
      {left}
      {right}
      <style jsx>{`
        nav {
          display: flex;
          padding: 2rem;
          align-items: center;
        }
      `}</style>
    </nav>
  );
};

export default Header;
