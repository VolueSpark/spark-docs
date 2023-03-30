import { AdviceGraph } from '@voluespark/spark.elements'
import React, { useState } from 'react'
import { createMockChargingPlan } from './graph-mockdata'

const data = createMockChargingPlan()

export default function SpotPriceExample() {
    const [chargeWindowStartIndex, setChargeWindowStartIndex] = useState(0)
    const chargeWindow = 4

    const isInChargeWindow = (value: number) =>
        value >= chargeWindowStartIndex &&
        value < chargeWindowStartIndex + chargeWindow
    const isInDataRange = (value: number) =>
        value + chargeWindow < data.priceEntries.length

    return (
        <div
            style={{
                flex: 1,
                height: 432,
                margin: '5rem 0',
                backgroundColor: '#fdfefc',
                borderRadius: '0.5rem',
                padding: '3rem 1rem',
                color: '#000',
            }}
        >
            <AdviceGraph
                {...{
                    priceUnit: 'øre',
                    energyUnit: 'kWh',
                    advice: data.advice,
                    data: data.priceEntries,
                    setChargeWindowStartIndex,
                    isInChargeWindow,
                    isInDataRange,
                }}
            />
        </div>
    )
}
