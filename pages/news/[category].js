function ArticlesByCategory({articles, category}) {
    return(
        <>
            <h2>Showing articles for category {category}</h2>
            {
                articles.map(art=>
                    <>
                        <h2>{art.id} {art.title}</h2>
                        <p>{art.description}</p>
                    </>)
            }
        </>
    )
}

export default ArticlesByCategory;

export async function getServerSideProps(context){
    let {params, req, res, query} = context;
    console.log(query);
    res.setHeader('Set-Cookie',['name=Vinay']);
    console.log(req.headers.cookie)
    let {category} = params;
    const response = await fetch(`http://localhost:4000/news?category=${category}`);
    const data = await response.json();

    return{
        props:{
            articles:data,
            category
        }
    }
}