import { Card } from 'antd'
import { Image } from 'antd';
import React from 'react'

function CardSlider() {
  return (
    <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
      <div style={{ width: "85%", padding: "10px" }}>
        <h2 style={{ marginTop: "20px" }}>Explore stays in trending destinations</h2>

        <div style={{ marginTop: "20px", display: "flex" }}>
          <Card

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
          </Card>
          <Card

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
          </Card>
          <Card

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
          </Card>
          <Card

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
          </Card>

        </div>
      </div>

    </div>
  )
}

export default CardSlider