import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='bg-white shadow-md'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <div className='text-2xl font-bold text-gray-800'>
            <Link href='/'>Finland Trip</Link>
          </div>

          {/* Links */}
          <div className='hidden md:flex space-x-8'>
            <Link
              href='/cabin'
              className='text-gray-600 hover:text-finland-blue hover:border-b-2 hover:border-finland-blue'
            >
              Cabin
            </Link>
            <Link
              href='/route'
              className='text-gray-600 hover:text-finland-blue hover:border-b-2 hover:border-finland-blue'
            >
              Route
            </Link>
            <Link
              href='/car'
              className='text-gray-600 hover:text-finland-blue hover:border-b-2 hover:border-finland-blue'
            >
              Car
            </Link>
            <Link
              href='/check-list'
              className='text-gray-600 hover:text-finland-blue hover:border-b-2 hover:border-finland-blue'
            >
              Check List
            </Link>
            <Link
              href='/sightseeing'
              className='text-gray-600 hover:text-finland-blue hover:border-b-2 hover:border-finland-blue'
            >
              Sightseeing
            </Link>
            <Link
              href='/trails'
              className='text-gray-600 hover:text-finland-blue hover:border-b-2 hover:border-finland-blue'
            >
              Trails
            </Link>
            <Link
              href='/playlist'
              className='text-gray-600 border-b-2 border-finland-white pb-2 hover:text-finland-blue hover:border-b-2 hover:border-finland-blue'
            >
              Playlist
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className='md:hidden'>
            <button
              type='button'
              className='inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-finland-blue focus:outline-none'
            >
              <svg
                className='h-6 w-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16m-7 6h7'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
