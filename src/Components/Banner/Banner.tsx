import React, { useState,useRef,useEffect } from 'react';
interface props{
   setQuery:(data:string)=> void
}

const Banner:React.FC<props> = ({setQuery}:props) => {
    const [search,setSearch]=useState<string>("")
    const searchref=useRef<HTMLButtonElement | null>(null)
    useEffect(() => {
      
   if(search.length<=0){
      searchref.current?.click()
     setTimeout(() => {
      window.scroll({ 
         top: 400,
         behavior: "smooth",
   })
     }, 1000);
   }
    
     
    }, [search])
    
    
  return (
    <>
       <div className="banner_section ">
                     <div className="container">
                        <div className="row">
                           <div className="col-md-6">
                              <div className="taital_main">
                                 <h4 className="banner_taital"><span className="font_size_90">50%</span> Discount Online Shop</h4>
                                 <p className="banner_text">Lorem ipsum dolor, sit amet consectetur adipisicing elit.  Eius!
                                </p>
                                 <div className="book_bt"><button className='btn shop' onClick={()=>window.scroll({
                                       top: 500,
                                       behavior: "smooth",
                                 })}>Shop Now</button ></div>
                              </div>
                           </div>
                          
                        </div>
                       <div className="button_main">
                         <input type="text" className="Enter_text " placeholder="Search for Products" name="" value={search} onChange={(e)=>{
                           setSearch(e.target.value)
                           setTimeout(() => {
                              searchref.current?.click()
                           }, 2000)}}/>
                            <button ref={searchref} className="search_text" onClick={()=>{
                               setQuery(search)
                               window.scroll({ 
                                 top: 700,
                                 behavior: "smooth",
                           })
                               }}>Search</button> 
                        </div>
                     </div>      
         </div>
      
    </>
  )
}

export default Banner;