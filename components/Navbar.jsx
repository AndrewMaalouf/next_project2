import Link from 'next/link'
import Image from 'next/image';
import styles from "@/styles/Home.module.css";


const Navbar = () => {
    return (
        <div className="nav-bar">
        <nav className="container">
        <Link href="/"><Image src="/logo.svg" alt="logo" width={75} height={75} priority className='logo'/></Link>

            <ul>
                <li><Link href="#our-services">Services</Link></li>
                <li><Link href="#form">Contact Us</Link></li>
            </ul>

        </nav>
    </div>
    );
}
 
export default Navbar;