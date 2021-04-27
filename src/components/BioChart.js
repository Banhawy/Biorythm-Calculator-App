import dayjs from 'dayjs'
import React from 'react'
import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    ReferenceLine,
    CartesianGrid
} from 'recharts'
import { calculateBioSeries } from '../calculations'

const formatDate = (isoString) => dayjs(isoString).format('D MMM')

const BioChart = ({ DOB, targetDate }) => {
    const startDate = dayjs(targetDate).subtract(15, 'days')
    const data = calculateBioSeries(DOB, startDate, 31).map(item => ({...item, date: formatDate(item.date)}))
    return (
        <ResponsiveContainer width="100%" height={200}>
            <LineChart data={data}>
                <XAxis dataKey="date" />
                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                <ReferenceLine x={data[15].date} />
                <Line type="natural" dot={false} dataKey="physical" stroke="green"/>
                <Line type="natural" dot={false} dataKey="emotional" stroke="red"/>
                <Line type="natural" dot={false} dataKey="intellectual" stroke="blue"/>
            </LineChart>
        </ResponsiveContainer>
    )
}

export default BioChart
