import dayjs from 'dayjs'

export const calculateBio = (DOB, targetDate, cycle) => {
    const birthDay = dayjs(DOB).startOf('day')
    const targetDay = dayjs(targetDate).startOf('day')
    const diff = targetDay.diff(birthDay, 'days')
    return Math.sin(2 * Math.PI * diff / cycle)
}

export const calculateBios = (DOB, targetDate) => {
    return {
        date: targetDate,
        physical: calculateBio(DOB, targetDate, 23),
        emotional: calculateBio(DOB, targetDate, 28),
        intellectual: calculateBio(DOB, targetDate, 33)
    }
}

export const calculateBioSeries = (DOB, startDate, size) => {
    const series = []
    const startDay = dayjs(startDate).startOf('day')
    for (let i = 0; i < size; i++) {
        const targetDate = startDay.add(i, 'days').toISOString()
        series.push(calculateBios(DOB, targetDate))
    }
    return series
}