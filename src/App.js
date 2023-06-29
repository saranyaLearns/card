import './index.css';
import React, {useState} from 'react';
import blue from './Components/img/blue.png';
import silver from './Components/img/silver.png';
import green from './Components/img/green.png';
import black from './Components/img/black.png';
import './Components/font-awesome/css/font-awesome.min.css';

  
 function App() {
    /*---increment/decrement---*/
    const [count, setCount]=useState(1);
    const decrementCount=()=>{
    setCount(count -1);
    }
    const incrementCount=()=>{
    setCount(count +1);
    }
    /*---total---*/
    function amount() {
        var x = document.querySelector(".total");
        x.style.display="block";    
    }
    /*---color change---*/
const [style, setStyle] = useState("cont");
const blue_color = () => {
    setStyle("cont1");
};
const silver_color = () => {
    setStyle("cont2");
};
const green_color = () => {
    setStyle("cont3");
};
const black_color = () => {
    setStyle("cont4");
};
   
  /*---image function---*/
const [displayImages, setDisplayImages] = React.useState({blue: true, silver: false, green: false, black: false});
 
    function Blue_Theme(){
        setDisplayImages({...displayImages, blue:true, silver:false, green:false, black:false})
    }
    function Silver_Theme(){
        setDisplayImages({...displayImages, blue:false, silver:true, green:false, black:false})
    }
    function Green_Theme(){
        setDisplayImages({...displayImages, blue:false, silver:false, green:true, black:false})
    }
    function Black_Theme(){
        setDisplayImages({...displayImages, blue:false, silver:false, green:false, black:true})
    }
  /*---final declaration---*/  
    function Blue_Template(){
        Blue_Theme();
        blue_color();
    }
    function Silver_Template(){
        Silver_Theme();
        silver_color();
    }
    function Green_Template(){
        Green_Theme();
        green_color();
    }
    function Black_Template(){
        black_color();
        Black_Theme();
    }
   

   return (
       
     <div className='App'>      
        <body className={style}>
        <div class="container">     
            <div class="nav">

               <div class="description">
                 <h3>Samsung Galaxy</h3>
                 <h4>Watch4 Classic</h4>
                 <p>Rs.<span>2000</span></p>
                </div>
               
               <div class="thumbnail">
                    <div class= "image">
                            {displayImages.blue &&  <img src={blue} height={100} width={100} />}
                            {displayImages.silver && <img src={silver}  height={100} width={100} />}          
                            {displayImages.green && <img src={green}  height={100} width={100} />}          
                            {displayImages.black && <img src={black}  height={100} width={100} />}          
                    </div>
                    <div class="btn_color">
                            <button onClick={Blue_Template} ></button>
                            <button onClick={Silver_Template} ></button>              
                            <button onClick={Green_Template} ></button>              
                            <button onClick={Black_Template} ></button>              
                    </div>
               </div>

                <div class="size">
                    <h3>Size</h3>
                    <div class="size-desc">
                        <p>44mm</p>
                        <p>40mm</p>
                        <p>32mm</p>
                        <p>24mm</p>
                    </div>
                </div> 

             <div class="qty">
                 <h4>Quantity</h4>
                 <div class="btn-grp">
                    <button onClick={decrementCount}>-</button>
                    <span>{count}</span>
                    <button onClick={incrementCount}>+</button>
                 </div>
             </div>

             <button class="buy" onClick={amount}>Buy</button>

            <div class="total">
                <div class="total_desc">
                    <h5>Total Amount : Rs. </h5>
                    <input type="text" value={count*2000}></input>
                </div>
                <div class="confirmation">
                    <p>Your Order has been Placed</p>
                </div>
                <div class="star">
                 <i class="fa fa-star-o"></i>
                 <i class="fa fa-star-o"></i>
                 <i class="fa fa-star-o"></i>
                 <i class="fa fa-star-o"></i>
                 <i class="fa fa-star-o"></i>
             </div>

            </div>      
            </div>          
             </div>
             </body>
     </div>
    
   );
 }
 
 export default App;
 