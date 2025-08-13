import styled from 'styled-components';

export const NewListStyle = styled.div`
    width: 100%;
    
.swiper {
width: 1440px;
  height: 952px;

  /* overflow: visible; */
}
.swiper-wrapper{
    /* overflow: visible; */
    position: absolute;
    left: 50px;
    top: 1px;
width: 100%;
height: 600px;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    /* gap: 40px; */
  }
.swiper-slide {
    /* border: 1px solid #000; */
    width: 350px;
    height: 350px;
  text-align: center;
  background: transparent;
  /* Center slide text vertically */
  display: flex;
 
  justify-content: center;
  align-items: center;


/* &.on{
  
    width: 600px;
    height: 600px;

   img{
    width: 560px;
    height: 560px;
   } 
   .textBox{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 600px;
    top: 640px;
    strong{
       font-size: 30px;
       font-weight: 600;
       display: block;
       
    }
  span{
    font-size: 14px;
    font-weight: 300;
    display: block;
  }
  p{
    margin-top: 15px;
    font-size: 20px;
    font-weight: 500;
    display: block;
  }
  }
} */

/* .swiper-slide-next {
    border: 1px solid #b6d72a;
    width: 600px;
    height: 600px;

   img{
    width: 500px;
    height: 500px;
   }
} */
   .textBox{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 400px;
    top: 640px;
    strong{
       font-size: 30px;
       font-weight: 600;
       display: none;
    }
  span{
    font-size: 14px;
    font-weight: 300;
    display: none;
    
  }
  p{
    margin-top: 15px;
    font-size: 20px;
    font-weight: 500;
    display: none;
  }
  }

.new-shop-item{
    position: relative;
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 10px;
    img{
        width: 100%;
    }

  
}

}
.swiper-pagination{
    display: none;
}
.swiper-slide-next{
   /* border: 1px solid #b6d72a; */
   width: 600px;
    height: 600px;
    /* margin: 0 100px; */
    /* transition: 0.3s; */
    &:hover{
        outline: 1px solid #b6d72a; 
    }
   img{
    width: 560px;
    height: 560px;
   } 
   .textBox{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 600px;
    top: 640px;
    strong{
       font-size: 30px;
       font-weight: 600;
       display: block;
       
    }
  span{
    font-size: 14px;
    font-weight: 300;
    display: block;
  }
  p{
    margin-top: 15px;
    font-size: 20px;
    font-weight: 500;
    display: block;
  }
  }
 }
.swiper-button-prev{
    position: absolute;
    left:  -25px;
    top: 260px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    color: #333;
    &::after{
        content: none;
    }
    background-image: url(./images/icons/arrow_left_non.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0 0;
}
.swiper-button-next{
    position: absolute;
    right: -25px;
    top: 260px;
    display: block;
    width: 80px;
    height: 80px;
    color: #333;
    display: flex;
    justify-content: center;
    align-items: center;
    &::after{
        content: none;
    }
    background-image: url(./images/icons/arrow_right_non.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0 0;
}
`;
