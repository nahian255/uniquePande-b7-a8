import React from 'react';

const Footer = () => {
    return (
        <div className='bg-slate-900 mt-5 p-5'>
            <div>
                <p className='text-lg text-blue-400'>Question 1 - What is the different between Props and State ?</p>
                <p className='text-2xl'>We can use props in passing data or something in one component to other component, And State use to put something in that.That's why we can use that when we need.</p>
            </div>
            <div className='mt-6'>
                <p className='text-lg text-blue-400'>Question 2 - How does useEffect work?</p>
                <p className='text-2xl'>
                    Mainelly useEffect works to load Data or url. That can also be use to fetch some api that make ourside imformated. useeffect also use dependecy that make change our side without reload , when dependacy change then change our data or API.
                </p>
            </div>
            <div className='mt-6'>
                <p className='text-lg text-blue-400'>Question 3 - How useState works?</p>
                <p className='text-2xl'>useState use to state something I means it use to keep data and show when we need.That is one of the most effected hooks in react it make our workes more easeyer and time saver.</p>
            </div>
            <div className='mt-6'>
                <p className='text-lg text-blue-400'>Question 4- How does React works?</p>
                <p className='text-2xl'>React is js liabery ,That's work in jsx.Jsx means javascript XML. It look's like HTML but not , it usees in Component based.It make devploper life easer and it more famous than Othe.</p>
            </div>
        </div>
    );
};

export default Footer;