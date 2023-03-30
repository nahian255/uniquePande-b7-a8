import React from 'react';
import "./header.css"

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <div className="flex-none gap-2">

                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://thumbs.dreamstime.com/b/smiling-young-indian-lady-looking-camera-home-headshot-portrait-smiling-young-adult-indian-woman-looking-camera-home-199970396.jpg" />
                            </div>
                        </label>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;