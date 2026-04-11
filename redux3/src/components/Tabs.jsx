import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Make sure this path is correct for your project
import { setActiveTabs } from '../redux/features/searchSlice';

const Tabs = () => {
    const tabs = ['photos', 'videos'];

    const dispatch = useDispatch();
    const activeTabs = useSelector((state) => state.search.activeTabs);

    return (
        <div className='flex gap-6 p-10'> {/* Slightly reduced gap for better grouping */}
            {tabs.map((elem, idx) => {
                return (
                    <button 
                        key={idx}
                        onClick={() => {
                            dispatch(setActiveTabs(elem));
                        }}
                        // Fixed the template literal and added design classes
                        className={`${
                            activeTabs === elem 
                                ? 'bg-blue-600 text-white shadow-md' 
                                : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
                        } px-6 py-2 rounded-lg font-medium capitalize transition-all duration-200 active:scale-95 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900`}
                    >
                        {elem}
                    </button>
                );
            })}
        </div>
    );
};

export default Tabs;