import React, { useState, useEffect } from 'react';
import axios from 'axios';

const JobBoard = () => {
    const [jobs, setJobs] = useState([]);       // Sara data yahan rahega
    const [searchTerm, setSearchTerm] = useState(""); // Search input ke liye
    const [loading, setLoading] = useState(true);

    // 1. Data Fetching (Page load hote hi)
    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const res = await axios.get('https://api.example.com/jobs');
                setJobs(res.data);
                setLoading(false);
            } catch (err) {
                console.error("Data nahi mila!");
                setLoading(false);
            }
        };
        fetchJobs();
    }, []);

    // 2. Delete Logic (Underscore _id ke saath)
    const handleDelete = (id) => {
        // Humne function ko 'id' pass ki taaki pata chale kaunsi job hatani hai
        const remainingJobs = jobs.filter(job => job._id !== id);
        setJobs(remainingJobs);
    };

    // 3. Filter Logic (Search bar ke liye)
    const filteredJobs = jobs.filter(job => 
        job.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) return <h2>Loading Jobs... ⏳</h2>;

    return (
        <div style={{ padding: '20px' }}>
            <h2>Career-Hub Job Board</h2>
            
            {/* Search Input */}
            <input 
                type="text" 
                placeholder="Search by job title..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ marginBottom: '20px', padding: '10px', width: '300px' }}
            />

            {/* Job List */}
            <div>
                {filteredJobs.length > 0 ? (
                    filteredJobs.map(job => (
                        <div key={job._id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
                            <h3>{job.title}</h3>
                            <p>Location: {job.location}</p>
                            {/* Delete button mein _id pass kiya */}
                            <button onClick={() => handleDelete(job._id)}>Delete Job</button>
                        </div>
                    ))
                ) : (
                    <p>No jobs found for "{searchTerm}"</p>
                )}
            </div>
        </div>
    );
};

export default JobBoard;