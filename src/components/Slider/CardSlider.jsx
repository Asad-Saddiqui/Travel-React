import { Card } from 'antd'
import { Image } from 'antd';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

function CardSlider() {
  return (


    <Swiper
      slidesPerView={4}
      // spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide><Card

        bordered={true}
        style={{
          width: "250px",
          height: "220px",
          padding: "0px"
        }}
        bodyStyle={{
          padding: 0, // Remove padding from the body of the Card
        }}
      >
        <Image
          src="https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D"
          width="100%"
          height="150px"
        />
        <h3 style={{ textAlign: "start", margin: "3px" }}>Lahore</h3>
        <p style={{ textAlign: "start", margin: "3px" }}>Pakistan</p>
      </Card></SwiperSlide>
      <SwiperSlide><Card

        bordered={true}
        style={{
          width: "250px",
          height: "220px",
          padding: "0px"
        }}
        bodyStyle={{
          padding: 0, // Remove padding from the body of the Card
        }}
      >
        <Image
          src="https://images.unsplash.com/photo-1476900543704-4312b78632f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D"
          width="100%"
          height="150px"
        />
        <h3 style={{ textAlign: "start", margin: "3px" }}>Lahore</h3>
        <p style={{ textAlign: "start", margin: "3px" }}>Pakistan</p>
      </Card></SwiperSlide>
      <SwiperSlide><Card

        bordered={true}
        style={{
          width: "250px",
          height: "220px",
          padding: "0px"
        }}
        bodyStyle={{
          padding: 0, // Remove padding from the body of the Card
        }}
      >
        <Image
          src="https://images.unsplash.com/photo-1503457574462-bd27054394c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D"
          width="100%"
          height="150px"
        />
        <h3 style={{ textAlign: "start", margin: "3px" }}>Lahore</h3>
        <p style={{ textAlign: "start", margin: "3px" }}>Pakistan</p>
      </Card></SwiperSlide>
      <SwiperSlide><Card

        bordered={true}
        style={{
          width: "250px",
          height: "220px",
          padding: "0px"
        }}
        bodyStyle={{
          padding: 0, // Remove padding from the body of the Card
        }}
      >
        <Image
          src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D"
          width="100%"
          height="150px"
        />
        <h3 style={{ textAlign: "start", margin: "3px" }}>Lahore</h3>
        <p style={{ textAlign: "start", margin: "3px" }}>Pakistan</p>
      </Card></SwiperSlide>
      <SwiperSlide>
        <Card

        bordered={true}
        style={{
          width: "250px",
          height: "220px",
          padding: "0px"
        }}
        bodyStyle={{
          padding: 0, // Remove padding from the body of the Card
        }}
      >
        <Image
            src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D"
          width="100%"
          height="150px"
        />
        <h3 style={{ textAlign: "start", margin: "3px" }}>Lahore</h3>
        <p style={{ textAlign: "start", margin: "3px" }}>Pakistan</p>
      </Card></SwiperSlide>
      <SwiperSlide><Card

        bordered={true}
        style={{
          width: "250px",
          height: "220px",
          padding: "0px"
        }}
        bodyStyle={{
          padding: 0, // Remove padding from the body of the Card
        }}
      >
        <Image
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D"
          width="100%"
          height="150px"
        />
        <h3 style={{ textAlign: "start", margin: "3px" }}>Lahore</h3>
        <p style={{ textAlign: "start", margin: "3px" }}>Pakistan</p>
      </Card></SwiperSlide>


    </Swiper>
  )
}

export default CardSlider