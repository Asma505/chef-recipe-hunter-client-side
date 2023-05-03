import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div>
            <div className='bg-teal-600 mb-10'>
                <div className='text-center'>
                    <p className='text-white text-5xl font-bold pt-28 mb-10'>Blog</p>
                    <button className='py-5 px-10 bg-white rounded-full font-bold text-teal-800 mb-10'><Link to='#'>Download The PDF File</Link></button>
                </div>
            </div>
            <div>
                <p className='text-center text-teal-800 font-bold text-3xl mb-5'>Questions and Answers</p>
            </div>
            <div className='w-2/4 mx-auto mb-32'>
                <p><span className='text-xl font-bold'>Question:</span> <span>Tell us the differences between uncontrolled and controlled components.</span></p>
                <p className='mb-5'><span className='text-xl font-bold'>Answer:</span> <span>Controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</span></p>
                <p><span className='text-xl font-bold'>Question:</span> <span>How to validate React props using PropTypes?</span></p>
                <p className='mb-5'><span className='text-xl font-bold'>Answer:</span> <span>PropTypes is React's internal mechanism for adding type checking to component props. React components use a special property called propTypes to set up type checking. When props are passed to a React component, they are checked against the type definitions configured in the propTypes property. When an invalid value is passed for a prop, a warning is displayed on the JavaScript console.</span></p>
                <p><span className='text-xl font-bold'>Question:</span> <span>Tell us the difference between nodejs and express js.</span></p>
                <p className='mb-5'><span className='text-xl font-bold'>Answer:</span> <span>NodeJS is the package, which provides the JavaScript run-time environment, whereas Express is a framework that sits on top of NodeJS and helps us to handle requests and responses.</span></p>
                <p><span className='text-xl font-bold'>Question:</span> <span>What is a custom hook, and why will you create a custom hook?</span></p>
                <p><span className='text-xl font-bold'>Answer:</span> <span>A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks. I will create a custom hook because, it can be reused easily, which makes the code cleaner and reduces the time to write the code.</span></p>                
            </div>
        </div>
    );
};

export default Blog;