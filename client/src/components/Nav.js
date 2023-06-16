import React , { useRef, useState } from "react";
import {
    NovuProvider,
    PopoverNotificationCenter,
    NotificationBell,
} from "@novu/notification-center";
import { useNavigate } from "react-router-dom";

const Nav = () => {
    const navigate = useNavigate();
    const selectRef = useRef(null);
    const onNotificationClick = (notification) =>
        navigate(notification.cta.data.url);

    const signOut = () => {
        localStorage.removeItem("_id");
        navigate("/");
    };


    const [showDropdown, setShowDropdown] = useState(false);
    const handleSelect = (continent) => {
        setShowDropdown(false);  // close the dropdown
        navigate(`/${continent}`);
    };
    const openSelect = () => {
        if (selectRef.current) selectRef.current.click();
    };

    return (
        <nav className='navbar'>
            <h2>OpenNews</h2>
            <button onClick={() => navigate('/breaking-news')} className='navbar-button'>Breaking News</button>
            <div className='dropdown-container'
                 onMouseEnter={() => setShowDropdown(true)}
                 onMouseLeave={() => setShowDropdown(false)}
            >
                <button className='navbar-button worldButton'>World</button>
                {showDropdown && (
                    <div className='dropdown'>
                        <button onClick={() => handleSelect("africa")} className='dropdown-item'>Africa</button>
                        <button onClick={() => handleSelect("asia")} className='dropdown-item'>Asia</button>
                        <button onClick={() => handleSelect("europe")} className='dropdown-item'>Europe</button>
                        <button onClick={() => handleSelect("north-america")} className='dropdown-item'>North America</button>
                        <button onClick={() => handleSelect("south-america")} className='dropdown-item'>South America</button>
                        <button onClick={() => handleSelect("australia")} className='dropdown-item'>Australia</button>
                        <button onClick={() => handleSelect("antarctica")} className='dropdown-item'>Antarctica</button>
                    </div>
                )}
            </div>
            <button onClick={() => navigate('/media')} className='navbar-button'>Media Page</button>
            <input type="search" placeholder="Search Topic" className='navbar-search' />

            <div className='navbarRight'>
                <NovuProvider
                    subscriberId='<YOUR_SUBSCRIBER_ID>'
                    applicationIdentifier='IdUEk7vW42ZE'
                >
                    <PopoverNotificationCenter
                        onNotificationClick={onNotificationClick}
                        colorScheme='light'
                    >
                        {({ unseenCount }) => (
                            <NotificationBell unseenCount={unseenCount} />
                        )}
                    </PopoverNotificationCenter>
                </NovuProvider>
                <button onClick={signOut} className='navbar-button'>Sign out</button>
            </div>
        </nav>
    );
};

export default Nav;
