export default function Docs({params}:{
    params : {
        josh: string[];
    };
}){
    if (params.josh?.length === 2 ){
        return( 
            <h1>Viewing docs for feature {params.josh[0]} and concept {params.josh[1]}</h1>
        );
    }
    else if (params.josh?.length === 1 ){
        return(
            <h1>Viewing docs for feature {params.josh[0]}</h1>
        );
    }
    return(
        <h1>Docs Homepage</h1>
    );
}