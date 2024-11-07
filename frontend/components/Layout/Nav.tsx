import React from 'react';
import {Separator} from "@/components/ui/separator";
import {router} from "next/client";

const Nav = () => {

    const switchLanguage = (locale: string) => {
        router.push(router.pathname, router.asPath, {locale});
    };

    return (
        <nav className="w-full text-white p-4 flex items-center justify-between">
            <div className="flex space-x-2">
                <span className="text-gray-400 hover:text-gray-900 cursor-pointer"
                      onClick={() => switchLanguage('en')}>en</span>
                <Separator color={'blue'} orientation={'vertical'}/>
                <span className="text-gray-400 hover:text-gray-900 cursor-pointer"
                      onClick={() => switchLanguage('de')}>de</span>
            </div>
        </nav>
    );
};

export default Nav;
