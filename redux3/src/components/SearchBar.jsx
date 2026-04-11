import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setQuery } from '../redux/features/searchSlice';

const SearchBar = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(setQuery(text));
        console.log("Form submitted with query:", text);
        setText('');
    };

    return (
        <div>
            {/* Kept your padding, assuming it fits your layout, but added rounded corners to the container if it's not full-width */}
            <form 
                onSubmit={submitHandler}
                className='flex items-center bg-gray-900 gap-4 py-10 px-14'
            >
                <input 
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    required
                    type="text" 
                    placeholder='Search anything...' 
                    // Added explicit colors, focus rings, and soft borders
                    className='w-full border-2 border-transparent bg-gray-100 text-gray-900 px-4 py-2 text-xl rounded outline-none focus:border-blue-500 focus:bg-white transition-all duration-200'
                />
                
                <button 
                    type="submit"
                    // Added bold text, distinct background, white text, and hover states
                    className='active:scale-95 hover:bg-blue-600 transition-colors duration-200 cursor-pointer bg-blue-500 text-white font-semibold border-2 border-transparent px-6 py-2 text-xl rounded outline-none shadow-md'
                >
                    Search
                </button>
            </form>
        </div>
    );
}

export default SearchBar;