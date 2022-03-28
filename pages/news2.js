export default function News({data}){
    return(
        <h2>{data}</h2>
    )
}


export function getStaticProps(context){
    console.log('getStaticProps running',context.previewData);
    return{
        props:{
            data: context.preview ? "Data preview Example" :
            "Data without preview example"
        }
    }
}