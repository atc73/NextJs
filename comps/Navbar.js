import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav>
      <div className='logo'>
        <Image src='/uk.png' width={78} height={78} alt='uk flag' />
      </div>
      <Link href='/'>Home</Link>
      <Link href='/about'>About</Link>
      <Link href='/ninjas'>Ninja Listing</Link>
    </nav>
  );
};

export default Navbar;
