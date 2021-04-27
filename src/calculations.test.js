import { calculateBios } from './calculations'

it('calculates the physical biorhythm', () => {
    const { physical } = calculateBios('1995-01-01', '2020-02-18')
    expect(physical).toBeCloseTo(0.5196)
})
it('calculates the emotional biorhythm', () => {
    const { emotional } = calculateBios('1995-01-01', '2020-02-18')
    expect(emotional).toBeCloseTo(-0.9010)
})
it('calculates the physical biorhythm', () => {
    const { intellectual } = calculateBios('1995-01-01', '2020-02-18')
    expect(intellectual).toBeCloseTo(0.8146)
})