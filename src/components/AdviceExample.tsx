import React from 'react'
import { Coin } from '@voluespark/spark.elements'
import { add, formatISO } from 'date-fns'

export default function AdviceExample() {
    return (
        <div
            style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                margin: '5rem 0',
                backgroundColor: '#fdfefc',
                borderRadius: '0.5rem',
                padding: '3rem 1rem',
                color: '#000',
            }}
        >
            <Coin
                {...{
                    price: 24,
                    priceUnit: 'kr',
                    advice: {
                        from: formatISO(new Date()),
                        to: formatISO(add(new Date(), { hours: 4 })),
                        type: 'Now',
                        cost: 24,
                    },
                    details: 'inkl. MVA',
                }}
            />
        </div>
    )
}
