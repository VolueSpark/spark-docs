import React from 'react'
import { PriceCoin } from '@voluespark/spark.elements'
import { add, formatISO } from 'date-fns'

export default function AdviceExample() {
    return (
        <div
            style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                margin: '5rem 0',
            }}
        >
            <PriceCoin
                {...{
                    price: 24,
                    priceUnit: 'kr',
                    advice: {
                        from: formatISO(new Date()),
                        to: formatISO(add(new Date(), { hours: 4 })),
                        type: 'now',
                        cost: 24,
                    },
                    details: 'inkl. MVA',
                }}
            />
        </div>
    )
}
