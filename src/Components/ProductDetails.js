import { useParams } from 'react-router-dom';
import Skeleton from './skeleton';
import useGetSingleProduct from '../Hook/useGetSingleProduct';
import { addItems } from '../Store/cartSlice';
import { useDispatch } from 'react-redux';
const ProductDetails = () => {
    const {productid} = useParams();
    const product=useGetSingleProduct(productid);
    // Memoize fetchData to ensure it doesn't change between renders
    const dispatch=useDispatch();
    if (product === null) {
        return <Skeleton />;
    }
    const handleCartItems=()=>{
        dispatch(addItems(product));
        alert("item added ")
    }

    const { title, price, image, rating, description } = product;

    return (
        <div className="max-w-5xl mx-auto mt-10 ">
            <div className="Product">
                <img className="animate-fadein bg-blend-screen ease-in-out w-60  " src={image} alt={title} />
                <h1 className="font-bold text-xl">{title}</h1>
                <p className="font-bold text-gray-700" >${price}</p>
                <p className="font-bold text-gray-700">Rating {rating?.rate}</p>
                <p>{description}</p>
                <button onClick={handleCartItems} className="bg-purple-600 text-white rounded-md py-1 px-2 mt-2 ">Add To Cart</button>
            </div>
        </div>
    );
};

export default ProductDetails;
