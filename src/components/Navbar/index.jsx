import React from "react";
import { BsSearch } from "react-icons/bs"
import { AiOutlineUser } from "react-icons/ai"
import {FcLike} from 'react-icons/fc'
import { useRouter } from 'next/router'
import Link from "next/link";
function Navbar() {
    const [openInput, setOpenInput] = React.useState(false)
    const router=useRouter();
    const openSearch = () => {
        // console.log('click');
        setOpenInput(!openInput)
    }
    const handleOnKeyDown=(e)=>{
        // e.key
        if(e.key==='Enter'){

            const query=e.target.value
            router.push(`/search/${query}`);
        }

    }
    return (
        <>
            <nav
                className="flex justify-between h-12 w-full p-8 fixed top-0 bg-white/[0.2] z-10"
            >
                <div> 
                    <Link href={'/'}>
                        <h1>Cinema APP</h1>
                    </Link>
                </div>
                <div >
                    <ul className="flex justify-center gap-10">
                        {openInput && (
                            <li >
                                <input
                                    className="rounded-full h-7 text-sm px-4 bg-black/[0.2] text-white"
                                    placeholder="Search"
                                    type="text"
                                    onKeyDown={handleOnKeyDown}
                                />

                            </li>

                        )}
                        <li className="text-xl cursor-pointer" onClick={() => openSearch()} >
                            <BsSearch />
                        </li>
                        <li>
                            <Link href={`/favorite`}>
                                <FcLike/> 
                            </Link>
                        </li>
                        <li className="text-xl">
                            <Link href={'/profile'}>
                                <AiOutlineUser />
                            </Link>
                        </li>


                    </ul>
                </div>

            </nav>
        </>
    )
}
export default Navbar;