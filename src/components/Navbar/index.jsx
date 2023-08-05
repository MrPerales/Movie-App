import React from "react";
import { BsSearch } from "react-icons/bs"
import { AiOutlineUser } from "react-icons/ai"
import Link from "next/link";
function Navbar() {
    const [openInput, setOpenInput] = React.useState(false)

    const openSearch = () => {
        // console.log('click');
        setOpenInput(!openInput)
    }

    return (
        <>
            <nav
                className="flex justify-between h-12 w-full p-8 fixed top-0 bg-white/[0.2]"
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
                                    className="rounded-full h-7 text-sm px-4 bg-transparent "
                                    placeholder="Search"
                                    type="text"
                                />

                            </li>

                        )}
                        <li className="text-xl cursor-pointer" onClick={() => openSearch()} >
                            <BsSearch />
                        </li>
                        <li className="text-xl"><AiOutlineUser /></li>


                    </ul>
                </div>

            </nav>
        </>
    )
}
export default Navbar;