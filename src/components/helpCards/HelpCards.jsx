import React, { useState } from 'react';
import { Col, Card, Modal } from 'antd';
import { Link } from 'react-router-dom';

const HelpCards = ({ cards }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpen1, setIsModalOpen1] = useState(false);
    const [cardItem, setcardItem] = useState(null);
    const [itemContent, setitemContent] = useState(null);
    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const showModal1 = () => {
        setIsModalOpen1(true);
    };

    const handleOk1 = () => {
        setIsModalOpen1(false);
    };

    const handleCancel1 = () => {
        setIsModalOpen1(false);
    };
    // console.log({ cardItem })
    console.log({ itemContent })

    return (
        <>
            {cards.map((card, index) => (
                <Col key={index} span={8}>
                    <Card
                        title={card.title}
                        style={{
                            width: 300,
                            height: "190px",
                            marginTop: "4px"
                        }}
                    >
                        {card.content.length > 0 && <div>
                            <Link onClick={() => {
                                setitemContent({ label: card.content[0].title, content: card.content[0] })
                                setIsModalOpen1(true)

                            }}>{card.content.length > 0 && card.content[0].title + ">"} </Link>
                        </div>}
                        {card.content.length > 1 && <div>
                            <Link onClick={() => {
                                setitemContent({ label: card.content[0].title, content: card.content[0] })
                                setIsModalOpen1(true)

                            }}>{card.content.length > 1 && card.content[1].title + ">"}</Link>
                        </div>}
                        {card.content.length > 2 && <div>
                            <Link onClick={() => {
                                setitemContent({ label: card.content[0].title, content: card.content[0] })
                                setIsModalOpen1(true)

                            }}>{card.content.length > 2 && card.content[2].title + ">"} </Link>
                        </div>}
                        <hr />
                        <a onClick={() => {
                            setIsModalOpen(true);
                            setcardItem(card)
                        }}>More</a>
                    </Card>
                </Col>
            ))}
            <Modal title={cardItem && cardItem.title} visible={isModalOpen}  onCancel={handleCancel}>
                {cardItem && cardItem.content.map((x, i) => {
                    return (<div key={i}>
                        <Link>{x.title + " >"}</Link>
                    </div>)
                })}
            </Modal>
            <Modal title="Explore Help Articles" visible={isModalOpen1}  onCancel={handleCancel1}>

                <div>
                    <Link>{itemContent && (itemContent.label + " / " + itemContent.content.title)}</Link>
                    <p>
                        {itemContent && itemContent.content.description}
                    </p>
                </div>
            </Modal>
        </>
    );
}

export default HelpCards;
