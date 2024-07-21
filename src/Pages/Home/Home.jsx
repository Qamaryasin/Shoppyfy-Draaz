import React,{ useEffect, useState } from 'react'
import "./home.css"
import Navbar from '../Componets/Navbar/Navbar' 
import Banner from './../Componets/Banner/Banner';
import { Link, useNavigate } from 'react-router-dom';
import Content from '../Componets/Content/Content';
import axios from "axios";
import Footer from '../Componets/Footer/Footer';
import Login from '../Componets/Logs/Login';

const Home = () => {
  const navigate=useNavigate()
  const [data, setData] = useState([]);
  const [filterData, setFilterData]=useState([])
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {

    // Fetching Product API data 
    const fetchAPI = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setData(response.data);
        setFilterData(response.data)
        setLoading(false);
      } catch (error) {
        console.log("API ERROR", error);
      }
    };
    setTimeout(fetchAPI, 1000)


  }, []);


  // filter products based on catagory button selection
 const productButtonHandle=(cat)=>{
const isData=data.filter(item=>item.category.toLowerCase()===cat.toLowerCase());
console.log('isData: ', isData);
setFilterData(isData)

 }

  return (
    <>
    
    <div>
     {/*Navbar Section*/}
    <Navbar/>
     
   <Banner/>
   <div className='container hero_pro_sec'>
     <h4 className='heading'>Latest Products</h4>
     <hr/>
    
    <div className='product_buttons'>
    <Link to="" className="btn btn-outline-dark "  onClick={()=>setFilterData(data)}>All</Link>
    <Link to="" className="btn btn-outline-dark" onClick={()=>productButtonHandle("Men's Clothing")}>Men's Clothing</Link>
    <Link to="" className="btn btn-outline-dark" onClick={()=>productButtonHandle("Women's Clothing")}>Women's Clothing</Link>
    <Link to="" className="btn btn-outline-dark" onClick={()=>productButtonHandle("Jewelery")}>Jewelery</Link>
    <Link to="" className="btn btn-outline-dark" onClick={()=>productButtonHandle("Electronics")}>Electronics</Link>
    </div>
   
    <Content loading={loading} data={filterData} />
    </div>
     <Footer/>
  
    </div>
   
    </>
  )
}

export default Home