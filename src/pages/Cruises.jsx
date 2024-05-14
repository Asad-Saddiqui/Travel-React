import React from 'react'
import Navbar from '../components/Navbar'
import AppFooter from '../components/AppFooter/AppFooter'
import CardSlider from '../components/Slider/CardSlider'
import { Button, Card, Image } from 'antd'
import Stay from '../components/Search/Stay'
import { Collapse } from 'antd';
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const items = [
  {
    key: '1',
    label: 'Popular Domestic Flights',
    children: <p><ul>
      <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, eum. Quam, a. Nobis veritatis provident incidunt aliquid omnis voluptates accusamus consectetur, doloribus eaque, reprehenderit dolore. Culpa quo mollitia vel similique!</li>
      <li>Temporibus, ea nulla. Officia mollitia quasi necessitatibus quo veritatis laborum ex. Dolores nemo, sapiente consequuntur voluptatibus eligendi quod error fuga quam reiciendis, magnam modi! Libero consequatur adipisci harum suscipit veniam?</li>
    </ul></p>,
  },
  {
    key: '2',
    label: 'Top Routes to Orlando',
    children: <p><ul>
      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptatum minus reprehenderit laudantium.</li>
      <li>Optio aliquam reprehenderit quos quibusdam, sint voluptatum quasi reiciendis, dolore eaque possimus nobis?</li>
    </ul></p>,
  },
  {
    key: '5',
    label: 'Top Routes to Dallas',
    children: <p><ul>
      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quidem ullam aut nemo.</li>
    </ul></p>,
  },
];
function Cruises() {
  return (
    <>
      <Navbar />
      <div style={{ height: "75vh", display: "flex", justifyContent: "center", alignItems: "center", width: "100%", backgroundImage: "url(https://plus.unsplash.com/premium_photo-1680582107403-04dfac02efc3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJ1aWxkaW5nc3xlbnwwfHwwfHx8MA%3D%3D)", backgroundRepeat: "no repeat", backgroundSize: "cover" }}>
        <div style={{ width: "80%", height: "50vh" }}>
          <br></br>

          <h2 style={{ color: "white" }}>Exclusive Deals on Select Cruise Lines</h2>
          <br></br>
          <Stay />


        </div>
      </div>

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

          <Collapse defaultActiveKey={['1']} ghost items={items} />

        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", width: "100%", marginTop: "20px" }}>
        <div style={{ width: "80%", marginBottom: "20px" }}>

          <h2>Deals designed for you</h2>
          <CardSlider />

        </div>
      </div>
     

      <AppFooter />
    </>
  )
}

export default Cruises

