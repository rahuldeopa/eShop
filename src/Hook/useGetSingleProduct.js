import { useState,useEffect } from "react";
const useGetSingleProduct = (productid) => {
    const [singleProduct, setSingleProduct] = useState(null);
    useEffect(() => {
        fetchSingleProduct();

    },[]);
    const fetchSingleProduct = async () => {
        const data = await fetch(`https://fakestoreapi.com/products/${productid}`);
        const resData = await data.json();
        setSingleProduct(resData);

    }
    return singleProduct;

};
export default useGetSingleProduct;