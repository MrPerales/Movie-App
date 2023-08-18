import React from "react";
import { BsSearch } from "react-icons/bs"
import { AiOutlineUser } from "react-icons/ai"
import {FcLike} from 'react-icons/fc'
import { useRouter } from 'next/router'
import Link from "next/link";
import styles from '../../Styles/navbar.module.css'


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
            <nav className={styles.nav}>
                <div> 
                    <Link href={'/'}>
                        <h1>Cinema APP</h1>
                    </Link>
                </div>
                <div >
                    <ul className={styles.navListUl}>
                        {openInput && (
                            <li >
                                <input
                                    className={styles.inputSearch}
                                    placeholder="Search"
                                    type="text"
                                    onKeyDown={handleOnKeyDown}
                                />

                            </li>

                        )}
                        <li onClick={() => openSearch()} >
                            <BsSearch />
                        </li>
                        <li>
                            <Link href={`/favorite`}>
                                <FcLike/> 
                            </Link>
                        </li>
                        <li>
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