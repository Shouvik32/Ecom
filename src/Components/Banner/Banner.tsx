import React from 'react'



const Banner:React.FC = () => {
  return (
    <>
    <div className="banner_section layout_padding">
            <div id="my_slider" className="carousel slide" data-ride="carousel">
               <div className="carousel-inner">
                  <div className="carousel-item active">
                     <div className="container">
                        <div className="row">
                           <div className="col-md-6">
                              <div className="taital_main">
                                 <h4 className="banner_taital"><span className="font_size_90">50%</span> Discount Online Shop</h4>
                                 <p className="banner_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration </p>
                                 <div className="book_bt"><a href="#">Shop Now</a></div>
                              </div>
                           </div>
                           <div className="col-md-6">
                             
                           </div>
                        </div>
                        <div className="button_main"><button className="all_text">All</button>
                        <input type="text" className="Enter_text" placeholder="Enter keywords" name=""/>
                            <button className="search_text">Search</button>
                            </div>
                     </div>
                  </div>
                 
                 
               </div>
               
              
              
            </div>
         </div>
      
    </>
  )
}

export default Banner