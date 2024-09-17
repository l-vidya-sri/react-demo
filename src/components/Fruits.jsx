import React from 'react'

export default function Fruits(props) {
    return (
        <div>
            {
                props.fruitsDetails.map((item) => {
                    return (
                        <div key={item.fruitPrice}>
                        <p>Fruit Name: {item.fruitName}</p>
                        <p>Fruit Description: {item.Description}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}
