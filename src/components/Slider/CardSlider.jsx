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

              bordered={false}
              style={{
                width: 250,
              }}
            >
              <Image
                width="100%"
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              />
              <h3>title</h3>
              <p>Card content</p>
            </Card></SwiperSlide>
            <SwiperSlide><Card

              bordered={false}
              style={{
                width: 250,
              }}
            >
              <Image
                width="100%"
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              />
              <h3>title</h3>
              <p>Card content</p>
            </Card></SwiperSlide>
            <SwiperSlide><Card

              bordered={false}
              style={{
                width: 250,
              }}
            >
              <Image
                width="100%"
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              />
              <h3>title</h3>
              <p>Card content</p>
            </Card></SwiperSlide>
            <SwiperSlide><Card

              bordered={false}
              style={{
                width: 250,
              }}
            >
              <Image
                width="100%"
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              />
              <h3>title</h3>
              <p>Card content</p>
            </Card></SwiperSlide>
            <SwiperSlide><Card

              bordered={false}
              style={{
                width: 250,
              }}
            >
              <Image
                width="100%"
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              />
              <h3>title</h3>
              <p>Card content</p>
            </Card></SwiperSlide>
            <SwiperSlide><Card

              bordered={false}
              style={{
                width: 250,
              }}
            >
              <Image
                width="100%"
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              />
              <h3>title</h3>
              <p>Card content</p>
            </Card></SwiperSlide>
            <SwiperSlide><Card

              bordered={false}
              style={{
                width: 250,
              }}
            >
              <Image
                width="100%"
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              />
              <h3>title</h3>
              <p>Card content</p>
            </Card></SwiperSlide>
            <SwiperSlide><Card

              bordered={false}
              style={{
                width: 250,
              }}
            >
              <Image
                width="100%"
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              />
              <h3>title</h3>
              <p>Card content</p>
            </Card></SwiperSlide>
            <SwiperSlide><Card

              bordered={false}
              style={{
                width: 250,
              }}
            >
              <Image
                width="100%"
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              />
              <h3>title</h3>
              <p>Card content</p>
            </Card></SwiperSlide>
          </Swiper>
  )
}

export default CardSlider