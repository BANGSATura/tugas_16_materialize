import React from 'react';
import {Row,Col} from 'react-materialize';
import CardsComponent from './CardsComponent.js'
const CardsDisplay = ()=>{
  return(
    <Row>
      <Col m={3}>
        <CardsComponent
          captions='Audio'
          gambar='https://ecs7.tokopedia.net/img/cache/300/attachment/2018/8/15/25749302/25749302_274a89a6-ea41-4a3a-ac6b-ce2881016369.jpg'
          namaBarang='Audio Technica - Mulai Dari '
          harga='Rp910rb'
        />
      </Col>
      <Col m={3}>
        <CardsComponent
          captions='Handphone'
          gambar='https://ecs7.tokopedia.net/img/cache/300/attachment/2019/1/16/25287362/25287362_a79f0aa6-cf1f-484f-b1a8-83993245cd6f.jpg'
          namaBarang='Handphone Samsung - Mulai Dari '
          harga='Rp200rb'
        />
      </Col>
      <Col m={3}>
        <CardsComponent
          captions='Squisy'
          gambar='https://ecs7.tokopedia.net/img/cache/300/attachment/2018/6/26/28201197/28201197_856195f2-b0ba-4711-8200-fd95beaf1df5.jpg'
          namaBarang='Squisy - Mulai Dari '
          harga='Rp55rb'
        />
      </Col>
      <Col m={3}>
        <CardsComponent
          captions='Koleksi The Avengers'
          gambar='https://ecs7.tokopedia.net/img/cache/300/attachment/2018/4/23/28201197/28201197_0383072a-1766-453c-951a-8b53a719cff0.jpg'
          namaBarang='Koleksi The Avengers - Mulai Dari '
          harga='Rp10rb'
        />
      </Col>
    </Row>
  );
}
export default CardsDisplay
