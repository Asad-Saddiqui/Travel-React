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
            <li>Blanditiis nemo aliquam expedita error! Nesciunt accusantium optio reiciendis nisi facere laboriosam consequatur sed eveniet nam dolore, eligendi ea rerum sunt similique debitis dignissimos ipsum aliquam culpa excepturi tenetur quod!</li>
            <li>Maxime odit dolorem esse dignissimos quo adipisci magnam reiciendis quisquam eligendi quaerat. Adipisci officiis blanditiis quis totam earum esse, tempore assumenda minima commodi fugit at eveniet autem doloribus! Sed, dolorem!</li>20
        </ul></p>,
    },
    {
        key: '2',
        label: 'Top Routes to Orlando',
        children: <p><ul>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptatum minus reprehenderit laudantium.</li>
            <li>Aspernatur incidunt assumenda facere libero iure nesciunt commodi quo a. Neque, necessitatibus at.</li>
            <li>Optio aliquam reprehenderit quos quibusdam, sint voluptatum quasi reiciendis, dolore eaque possimus nobis?</li>
        </ul></p>,
    },
    {
        key: '3',
        label: 'Popular States in the US',
        children: <p><ul>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus.</li>
            <li>Expedita cupiditate, aperiam deleniti sed itaque modi unde alias?</li>
        </ul></p>,
    },
    {
        key: '4',
        label: 'Popular Airlines',
        children: <p><ul>
            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, officiis perspiciatis.</li>
            <li>Suscipit inventore numquam quisquam ab iste aliquam officia tempore sint commodi?</li>
            <li>Debitis vel omnis illum commodi voluptate corporis, quam dolores veniam. Ab!</li>
            <li>Sed, et. Cumque repudiandae illo eos repellat excepturi quia nesciunt porro!</li>
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
function Flights() {
    return (
        <>
            <Navbar />
            <div style={{ height: "75vh", display: "flex", justifyContent: "center", alignItems: "center", width: "100%", backgroundImage: "url(https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsJTIwJTIwYXJvcGxhbnxlbnwwfHwwfHx8MA%3D%3D)", backgroundRepeat: "no repeat", backgroundSize: "cover" }}>
                <div style={{ width: "80%", height: "50vh" }}>
                    <br></br>

                    <h2 style={{ color: "white" }}>Explore Flights</h2>
                    <br></br>
                    <p style={{ color: "white" }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis inventore nam sequi officia tempore nemo illum voluptatum, cum quisquam asperiores expedita placeat dolore, mollitia nesciunt libero doloribus molestiae? Soluta sint adipisci reiciendis, explicabo in ad accusantium, numquam natus, consequuntur neque est? Accusantium voluptatum ut doloribus repellendus necessitatibus minus. Recusandae iusto soluta sequi distinctio minus accusantium in quas! Nulla quidem architecto modi natus magnam at minus perferendis beatae obcaecati similique! Aut doloribus laudantium corrupti deleniti non expedita vero quis, sapiente placeat, nam dolore aperiam minus. Alias rem facilis necessitatibus voluptatibus fugit, animi, atque esse nihil, ullam omnis nobis aliquid quisquam consectetur?</p>
                    <Button type="primary" size="large">Explore</Button>

                </div>
            </div>
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

                    <Collapse defaultActiveKey={['1']} ghost items={items} />

                </div>
            </div>
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
                            <h3>Flights</h3>
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

export default Flights