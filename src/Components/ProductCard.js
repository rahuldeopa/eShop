import { useEffect, useState } from 'react';
import Product,{HOF} from './Product';
import Skeleton from './skeleton';
import { Link } from 'react-router-dom';


export const ProductCard = () => {
  const [productfil, setProductFil] = useState([]); // Filtered/Sorted data
  const [originalData, setOriginalData] = useState([]); // Original data
  const [filterOn, setFilterOn] = useState(false);
  const [sortOrder, setSortOrder] = useState(null);
  const [search, setSearch] = useState('');

  const applySorting = (data, order) => {
    const sortedData = [...data];
    if (order === 'low') {
      return sortedData.sort((a, b) => a.price - b.price);
    }
    if (order === 'high') {
      return sortedData.sort((a, b) => b.price - a.price);
    }
    return sortedData;
  };

  const FilterPro = () => {
    let res;
    if (filterOn) {
      res = originalData; // Reset to original data
      setSortOrder(null); // Reset sorting
    } else {
      res = originalData.filter((product) => product.rating.rate >= 4); // Apply filter
    }
    setFilterOn(!filterOn);
    res = applySorting(res, sortOrder); // Apply sorting if any
    setProductFil(res);
  };

  const low = () => {
    let res = filterOn
      ? originalData.filter((p) => p.rating.rate >= 4)
      : originalData;
    if (sortOrder === 'low') {
      setSortOrder(null); // Reset sorting
    } else {
      setSortOrder('low'); // Apply low-to-high sorting
      res = applySorting(res, 'low');
    }
    setProductFil(res);
  };

  const high = () => {
    let res = filterOn
      ? originalData.filter((p) => p.rating.rate >= 4)
      : originalData;
    if (sortOrder === 'high') {
      setSortOrder(null); // Reset sorting
    } else {
      setSortOrder('high'); // Apply high-to-low sorting
      res = applySorting(res, 'high');
    }
    setProductFil(res);
  };

  useEffect(() => {
    const fetchData = async () => {
      const newdata = await fetch('https://fakestoreapi.com/products');
      const resdata = await newdata.json();
      setProductFil(resdata);
      setOriginalData(resdata); // Store original data
    };
    fetchData();
  }, []);
  const HOFComponent = HOF(Product);


  return productfil.length === 0 ? (<Skeleton />) : (
    <div>
      <div className="mt-10 flex mx-5 space-x-5 ">
        <div>
          <input className="border border-gray-7 p-2 " type='text' onChange={(e) => setSearch(e.target.value)} value={search} placeholder='search..... ' />
          <button className="bg-purple-600 px-6 py-2 rounded-md text-[#f0f0f0f0] " onClick={() => {
            const filteredData = originalData.filter((product) => {
              return product.title.toLowerCase().includes(search.toLowerCase());
            });
            setProductFil(filteredData);
          }}>Search</button>
        </div>
        <button className="bg-purple-600 px-6 py-2 rounded-md text-[#f0f0f0f0] " onClick={FilterPro}>
          {filterOn ? 'Reset Products' : 'Filter Products'}
        </button>
        <button className="bg-purple-600 px-6 py-2 rounded-md text-[#f0f0f0f0] " onClick={low}>
          {sortOrder === 'low' ? 'Reset Sorting' : 'Low to High'}
        </button>
        <button className="bg-purple-600 px-6 py-2 rounded-md text-[#f0f0f0f0] " onClick={high}>
          {sortOrder === 'high' ? 'Reset Sorting' : 'High to Low'}
        </button>


      </div>


      <div className="max-w-7xl mx-auto grid grid-cols-5  gap-4 mt-10 ">
        {productfil.map((product) => (
          <Link key={product.id} to={`/ProductDetails/${product.id}`}>
              {
              product.rating.rate >= 4.7 ? <HOFComponent productData={product} /> : <Product productData={product} />
              }
          </Link>
        ))}
      </div>
    </div>
  );
};
