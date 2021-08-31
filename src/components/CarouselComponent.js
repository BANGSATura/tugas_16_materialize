import React,{Component} from 'react';
import {Slider,Slide,Caption} from 'react-materialize';

class CarouselComponent extends Component {
  render() {
    return(
      <>
        <Slider fullscreen={false}>
          <Slide image={<img src='https://s-ec.bstatic.com/images/hotel/max1024x768/106/106114417.jpg' alt='slide1'/>}>
            <Caption placement='center'>
              <h3>Pantai</h3>
              <h5>Dapatkan Liburan Ke Pantai Dengan Membeli Produk Kita</h5>
            </Caption>
          </Slide>
          <Slide image={<img src='https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80' alt='slide2'/>}>
            <Caption placement='center'>
              <h3>Menjelajahi Pegunungan</h3>
              <h5>Nikmati Petualangan Berbeda Dengan Mengikuti Promo Kami</h5>
            </Caption>
          </Slide>
          <Slide image={<img src='https://photos.mandarinoriental.com/is/image/MandarinOriental/paris-2017-home?wid=2880&hei=1280&fmt=jpeg&crop=9,336,2699,1200&anchor=1358,936&qlt=75,0&fit=wrap&op_sharpen=0&resMode=sharp2&op_usm=0,0,0,0&iccEmbed=0&printRes=72' alt='slide3'/>}>
            <Caption>
              <h3>Jalan-Jalan Ke Paris</h3>
              <h5>Liburan Murah Bagi Kamu Yang Beruntung</h5>
            </Caption>
          </Slide>
        </Slider>
      </>
    );
  }
}
export default CarouselComponent;
