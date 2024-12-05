import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const CardDetails = () => {

   const {id} = useParams()
   const pId = parseInt(id)
   const data = useLoaderData()

   const singleCard = data.find(card => card.id === pId)

   const {id:currentBookId, product_image} = singleCard
    
    return (
        <div className="hero bg-base-200 ">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={product_image}
            className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default CardDetails;