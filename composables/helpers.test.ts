import { describe, expect, test } from 'vitest'

import { faker } from '@faker-js/faker'
import type { Animal } from '../types'
import { calculateAgeInYears, calculateFoodForNextMonth } from './helpers'

describe('The calculateAgeInYears helper', () => {
  test('handles over 100 years correctly', () => {
    const date = faker.date.between('1800-01-01T00:00:00.000Z', '1900-01-01T00:00:00.000Z')
    expect(calculateAgeInYears(date)).toBeGreaterThanOrEqual(100)
  })

  // For the zookeepers its easier to conservatively assume that an animal is older rather than younger
  test('always rounds up', () => {
    const today = new Date()
    expect(calculateAgeInYears(today)).toBeLessThan(1)
  })
})

describe('The calculateFoodForNextMonth helper', () => {
  test('alywas rounds up', () => {
    const fakeAnimal: Animal = {
      id: '1',
      name: 'Leo',
      species: 'Lion',
      gender: 'male',
      birthdate: new Date('2015-06-12'),
      weight: 200,
      height: 1.2,
      favouriteFruit: 'banana',
    }
    const manualFoodCalculation = 24.14
    expect(calculateFoodForNextMonth(fakeAnimal)).toBeCloseTo(manualFoodCalculation, 2)
  })
})
