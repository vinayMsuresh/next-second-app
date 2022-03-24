import useSWR from "swr";
import styles from '../styles/Dash.module.css'
const fetcher = async() => {
    const response = await fetch('http://localhost:4000/dashboard');
    const data = await response.json();
    return data;
}

function Dash(){
    const {data, error} = useSWR('dash', fetcher);

    if(error)
        return <h2>An error ocuured</h2>
    
    if(!data)
        return <h2>Loading</h2>
    
    return(
        <>
            <h1 style={styles.highlight}>Dashboard</h1>
            <h2>Posts {data.posts}</h2>
            <h2>Likes {data.likes}</h2>
            <h2>Followers {data.followers}</h2>
            <h2>Following {data.following}</h2>
        </>
    )
}

export default Dash;