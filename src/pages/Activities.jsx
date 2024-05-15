import React from 'react'
import Navbar from '../components/Navbar'
import AppFooter from '../components/AppFooter/AppFooter'
import CardSlider from '../components/Slider/CardSlider'
import { Button, Card, Image } from 'antd'
import Stay from '../components/Search/Stay'
import { Collapse } from 'antd';

function Activities() {
  return (
    <>
      <Navbar />

      <div style={{ display: "flex", justifyContent: "center", width: "100%", marginTop: "4px", marginBottom: "20px" }}>
        <div style={{ width: "85%", marginTop: "70px" }}>
          <h2>Featured travel</h2>
          <br></br>
          <h2>Travel advice and inspiration from the experts</h2>
          <br></br>

          <Stay />
        </div >

      </div >
      <div style={{ display: "flex", justifyContent: "center", width: "100%", marginTop: "4px", marginBottom: "20px" }}>
        <div style={{ width: "85%", marginTop: "70px" }}>
          <h2>Featured travel</h2>
          <br></br>
          <h2>Travel advice and inspiration from the experts</h2>
          <br></br>

          <div style={{ display: "flex" }}>

            <Card

              bordered={false}
              style={{
                width: "350px",
                height: "200px",
                margin: "4px"

              }}
              bodyStyle={{ padding: '0px' }}
            >
              <div style={{ width: "100%", height: "150px", border: "1px solid white", backgroundImage: "url(https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhdmVsJTIwY2Fyc3xlbnwwfHwwfHx8MA%3D%3D)", backgroundRepeat: "no repeat", backgroundSize: "cover" }}>
                <h3 style={{ color: "white", }} > Title</h3>
              </div>
              <p> aut doloremque, tenetur aliquam illum enim sequi libero!</p>
            </Card>
            <Card

              bordered={false}
              style={{
                width: "350px",
                height: "200px",
                margin: "4px",
              }}
              bodyStyle={{ padding: '0px' }}
            >
              <div style={{ width: "100%", height: "150px", border: "1px solid white", backgroundImage: "url(https://images.unsplash.com/photo-1600320254374-ce2d293c324e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRyYXZlbCUyMGNhcnN8ZW58MHx8MHx8fDA%3D)", backgroundRepeat: "no repeat", backgroundSize: "cover" }}>
                <h3 style={{ color: "white", }} > Title</h3>
              </div>
              <p> aut doloremque, tenetur aliquam illum enim sequi libero!</p>
            </Card>
            <Card

              bordered={false}
              style={{
                width: "350px",
                height: "200px",
                margin: "4px"

              }}
              bodyStyle={{ padding: '0px' }}
            >
              <div style={{ width: "100%", height: "150px", border: "1px solid white", backgroundImage: "url(https://plus.unsplash.com/premium_photo-1664304598312-6de674eb1b79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHJhdmVsJTIwY2Fyc3xlbnwwfHwwfHx8MA%3D%3D)", backgroundRepeat: "no repeat", backgroundSize: "cover" }}>
                <h3 style={{ color: "white", }} > Title</h3>
              </div>
              <p> aut doloremque, tenetur aliquam illum enim sequi libero!</p>
            </Card>

          </div>
        </div >

      </div >
     
      <div style={{ display: "flex", justifyContent: "center", width: "100%", marginTop: "20px" }}>
        <div style={{ width: "80%", marginBottom: "20px" }}>

          <h2>Deals designed for you</h2>
          <CardSlider />

        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <div style={{ width: "85%", padding: "10px", }}>
          <h3 >Here to help keep you on the move</h3>
          <div style={{ display: "flex", width: "100%", height: "250px", border: "1px solid gray", justifyContent: "space-between" }}>

            <Image
              width="37%"
              height="100%"

              src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnVpbGRpbmdzfGVufDB8fDB8fHww"
            />




            <div
              style={{ padding: "20px", width: "55%", height: "100%" }}>
              <h3>Activities</h3>
              <br></br>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo obcaecati temporibus necessitatibus dolor ipsum aliquid sed dignissimos est, totam amet sequi cum a error minima. Nobis, in ab? Inventore nesciunt voluptate sint accusantium, illo vel recusandae odio id expedita similique fuga ex explicabo? Natus consectetur impedit esse inventore consequatur voluptatum velit aspernatur, et dolor totam. Iste asperiores, repellendus veniam sequi at dolores voluptate unde saepe temporibus quisquam quos voluptates eum ea veritatis nihil? Expedita fugiat neque tempore perspiciatis, qui nam laudantium dolor aliquam dicta numquam, voluptatibus dolorem dolorum maiores! Ipsam officia, odio consequuntur debitis delectus nihil ad itaque quaerat sint!</p>
            </div>



          </div>
        </div>

      </div>

      <AppFooter />
    </>
  )
}

export default Activities