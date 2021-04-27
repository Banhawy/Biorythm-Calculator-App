import dayjs from 'dayjs'

export const calculateBio = (DOB, targetDate, cycle) => {
    const birthDay = dayjs(DOB).startOf('day')
    const targetDay = dayjs(targetDate).startOf('day')
    const diff = targetDay.diff(birthDay, 'days')
    return Math.sin(2 * Math.PI * diff / cycle)
}

export const calculateBios = (DOB, targetDate) => {
    return {
        physical: calculateBio(DOB, targetDate, 23),
        emotional: calculateBio(DOB, targetDate, 28),
        intellectual: calculateBio(DOB, targetDate, 33)
    }
}