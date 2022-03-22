import React,{useState, useEffect} from "react";
function Dashboard(){
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState(null);

    useEffect(() => {
        async function fetchData(){
            const response = await fetch('http://localhost:4000/dashboard');
            const res_data = await response.json();
            setData(res_data);
            setLoading(false);
        }

        fetchData()
    },[]);

    if(isLoading){
        return <h2>Loading....</h2>
    }

    return(
        <>
            <h1>Dashboard</h1>
            <h2>Posts {data.posts}</h2>
            <h2>Likes {data.likes}</h2>
            <h2>Followers {data.followers}</h2>
            <h2>Following {data.following}</h2>
        </>
    )
}

export default Dashboard;