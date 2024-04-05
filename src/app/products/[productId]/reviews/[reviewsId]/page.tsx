import { notFound } from "next/navigation";

export default function ReviewDetail({params}:{
    params: {
        productId: string;
        reviewsId: string;
    };
}){
    if (parseInt(params.reviewsId)>1000){
        notFound();
    }
    return (

        <h1>
Review {params.reviewsId} for Product {params.productId}
        </h1>
    );
}