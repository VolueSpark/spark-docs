import React from 'react'
import { DailyOverview, ForecastTable } from '@voluespark/spark.elements'
import {
    createMockForecastEntries,
    createMockPriceDataForCurrentDay,
} from './graph-mockdata'

export default function ForecastExample() {
    return (
        <div
            style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '2rem',
                backgroundColor: '#fdfefc',
                borderRadius: '0.5rem',
                padding: '4rem 15%',
                color: '#000',
            }}
        >
            {/* TODO: need to wrap this component in a position relative inside of the component library, 
            play around with different positioning of the entire component and see how it affects the positioning of the label */}
            <div
                style={{
                    position: 'relative',
                    width: '86%',
                    marginLeft: 'auto',
                }}
            >
                <DailyOverview
                    {...{
                        data: createMockPriceDataForCurrentDay(),
                        width: 500,
                        height: 500,
                        numberOfIntervals: 4,
                    }}
                />
            </div>
            <div style={{ width: '100%' }}>
                <ForecastTable data={createMockForecastEntries()} />
            </div>
        </div>
    )
}
