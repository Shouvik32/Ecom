import React, { useState,useEffect } from 'react'

const Banner:React.FC = () => {
    const [search,setSearch]=useState<string>("")
    useEffect(() => {
      
    console.log(search);
    
     
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
                                 <div className="book_bt"><a href="#">Shop Now</a></div>
                              </div>
                           </div>
                          
                        </div>
                        <div className="button_main">
                        <input type="text" className="Enter_text " placeholder="Enter keywords" name="" value={search} onChange={(e)=>setSearch(e.target.value)}/>
                            <button className="search_text">Search</button>
                            </div>
                     </div>
                     
         </div>
      
    </>
  )
}

export default Banner