import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { setProducts } from "../../../redux/actions/marketplace";
import { client } from "../../apollo";

const LIST_PRODUCT = gql`
  query GetProducts {
  getProducts {
    page
    results {
      id
     name
    description
  brand
  rating
  price
  countInStock
  image
  numReviews
  reviews {
    comment
    name
    rating
   
  }
  category {
    id
    name
    description
  }
  
    }
    limit
    totalPages
    totalResults
  }
}
`;


export const useGetProducts = () => {
    const dispatch = useDispatch<Dispatch>()
    const { data, loading, error, refetch }  = useQuery(LIST_PRODUCT, {variables: {
        limit: 10,
        page: 1,
      },
      client: client
      });
      useEffect(()=>{
        if(data === undefined) refetch().then(item=>{
            dispatch(setProducts(item?.data?.getProducts?.results))
        })
      },[])
    }