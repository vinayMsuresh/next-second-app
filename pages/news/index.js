function NewsArticles({articles}) {
    return(
        <>
        <h1>Article List</h1>
        {
            articles.map(art=>
                <div key={art.id}>
                    <p>{art.id}</p>
                    <h2>{art.title}</h2>
                    <p>{art.description}</p>
                    <hr/>
                </div>)
        }
        </>
    )
}

export default NewsArticles;

export async function getServerSideProps(){
    const response = await fetch('http://localhost:4000/news');
    console.log('hjkamsdl');
    const data = await response.json();
    console.log(data);
    return{
        props:{
            articles:data,
        }
    }
}