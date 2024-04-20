import React, { useState, useEffect } from 'react';









function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        const scrollThreshold = 50; // You can adjust this value as needed
        if (window.scrollY > scrollThreshold) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const headerClasses = isScrolled ? 'fixed inset-x-0 top-0 z-50 scrolled' : 'fixed inset-x-0 top-0 z-50';

    return(<>
        <header className={headerClasses}>
            <img src="/images/logo.png" alt='FlashMedia' className='logo' />
        </header>
    </>)
}





export default Header;