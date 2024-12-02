'use client';
import { sideBarLinks } from '@/constants';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import React from 'react';

const Sidebar = () => {
    const pathname = usePathname();
  
    return (
        <div className="sticky left-0 top-0 f h-screen w-fit flex-col justify-between bg-dark-1 p-6 pt-28 text-white max-sm:hidden lg:w-[264px]">
            <div className='flex flex-col gap-6'>
                {sideBarLinks.map((link) => {
                    const isActive = pathname === link.route || pathname.startsWith(link.route);
                    return (
                        <Link 
                            href={link.route}
                            key={link.label}
                            className={cn('flex gap-4 items-center p-4 rounded-lg justify-start', {
                                'bg-blue-1': isActive,
                            })}
                        >
                            <img // Use <img> instead of <image>
                                src={link.imageURL}
                                alt={link.label}
                                width={24}
                                height={24}
                           />              
                           <p className='text-lg font-semibold'>
                               {link.label}
                           </p>     
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

export default Sidebar;
                