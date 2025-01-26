 
 const Product = ({productData}) => {
  
    const { title, price, image,rating } = productData;
  
    return (
      <div className="flex flex-col items-center h-96 border justify-center border-gray-300 rounded-lg p-4 hover:bg-slate-100">
        <img className="w-28 mix-blend-multiply" src={image} alt={title} />
        <h3>{title}</h3>
        <p>${price}</p>
        <p>Rating {rating.rate}</p>
        <div className="  ">
     
        </div>
      </div>
    );
};
export default Product;

export const HOF = (Product) => {
  return (props)=>{
    return(
    <div className="relative ">
      <span className=" absolute -left-2 -top-2 bg-black text-white  px-4 py-1 rounded-md  motion-safe:animate-[bounce_1s_ease-in-out_infinite] ">Best Seller</span>
      <Product {...props}/>
    </div>
  );
};
};
