'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'

const Navbar = () => {

    const pathname = usePathname()
    const [burger, setBurger] = useState<boolean>(true);

    const showandhide = (): void => {
        setBurger(!burger);
    };

    return (
        <header>
            <nav className="bg-blue-400">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <div className="flex items-center">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                            Next js App
                        </span>
                    </div>
                    <button
                        onClick={() => showandhide()}
                        data-collapse-toggle="navbar-solid-bg"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-base sm:hidden"
                        aria-controls="navbar-solid-bg"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                    <div
                        className={
                            burger
                                ? "hidden w-full md:block md:w-auto"
                                : "w-full md:block md:w-auto"
                        }
                        id="navbar-solid-bg"
                    >
                        <ul className="flex flex-row items-center font-medium mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
                            <li>
                                <Link href="/">
                                    <span
                                        className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black-400 md:p-0 dark:text-white md:dark:hover:text-black-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                    >
                                        Home
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/about">
                                    <span
                                        className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black-400 md:p-0 dark:text-white md:dark:hover:text-black-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                    >
                                        About
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;
