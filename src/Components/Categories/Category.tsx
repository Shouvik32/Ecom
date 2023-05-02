


import { useDispatch,useSelector } from 'react-redux';
import { fetchCategoryData,fetchProductsByCategory } from './Category.slice';
import { AppDispatch } from '../../store/store';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styles } from './Styles';



const Category = () => {
  const navigate=useNavigate()
  let categoryList:any=null
  categoryList=useSelector((state:any)=>state.CategorySlice)
  const dispatch=useDispatch<AppDispatch>()
  const [category,setcategory]=useState<string[]>([])
  const [load,setload]=useState<boolean>(true)
  useEffect(()=>{
    dispatch(fetchCategoryData())
},[])

useEffect(()=>{
  categoryList&& categoryList[0]?.toString().toLowerCase()!=="[object object]" && setload(false)
console.log(typeof categoryList);
setcategory(categoryList)
console.log(category);
},[categoryList])
  return (
    <>
    <style>{styles}</style>
      {!load&&<div className="container">
         <div className="category_section">
         <div className="row">
         
        {categoryList&&categoryList.map((index:string,key:number)=>
        <div key={key} className="col-lg-3 col-sm-3 main">
          <div   className="col">
         <div className="box_main">
           
           {index&& <h4 className="fashion_text" onClick={()=>navigate(`/category/${index}`)}>{index.toString().toUpperCase()}</h4>}
         </div>
      </div>
         </div>
        )}
       
        </div>
         </div>
         </div>}
      {load && <div className="spinner-square">
        <div className="square-1 square"></div>
        <div className="square-2 square"></div>
        <div className="square-3 square"></div>
</div>}
      
    </>
  )
}

export default Category





 

