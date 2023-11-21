import React from 'react'
import Card from './Card'
const Cards = () => {
    return (
        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "20px",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            {products.map((products) => (
            <Card key={products.id} products={products} />
            ))}
        </div>
    )
}

export default Cards