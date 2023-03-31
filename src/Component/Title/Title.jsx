import React from 'react';

const Title = ({ singleCard }) => {
    console.log(singleCard);
    return (
        <div className='bg-yellow-100 py-3'>
            <div tabIndex={0} className="collapse collapse-close border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    <p>#{singleCard}</p>
                </div>

            </div>
        </div>
    );
};

export default Title;