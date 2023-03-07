import React from 'react'
import { DailyPrices, LongTermForecast } from '@voluespark/spark.elements'
import {
    createMockForecastEntries,
    createMockPriceDataForCurrentDay,
} from './graph-mockdata'

export default function LongTermForecastExample() {
    return (
        <div
            style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '2rem',
            }}
        >
            {/* TODO: need to wrap this component in a position relative inside of the component library, 
            play around with different positioning of the entire component and see how it affects the positioning of the label */}
            <div style={{ position: 'relative' }}>
                <DailyPrices
                    {...{
                        data: createMockPriceDataForCurrentDay(),
                        width: 500,
                        height: 500,
                        numberOfIntervals: 4,
                        hideLabel: '',
                    }}
                />
            </div>
            <div style={{ width: '500px' }}>
                <LongTermForecast data={createMockForecastEntries()} />
            </div>
        </div>
    )
}
