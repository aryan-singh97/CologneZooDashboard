import type { Animal } from '../types'

export const calculateAgeInYears = (birthdate: Date): Number => {
  const today = new Date()
  birthdate = new Date(birthdate)
  const differenceInMilliseconds = today.getTime() - birthdate.getTime()

  return Math.round(differenceInMilliseconds / (1000 * 60 * 60 * 24 * 365))
}

export function calculateFoodForNextMonth(animal: Animal): number {
//   const foodRequired: Record<string, number> = {}
//   let foodForNextMonth = 0

  let foodPerDay = (animal.height + animal.weight) / 250

  // Adjust food based on age
  if (calculateAgeInYears(animal.birthdate) > 20)
    foodPerDay /= 2 // Half the required food for animals older than 20 years
  else if (calculateAgeInYears(animal.birthdate) < 2)
    foodPerDay *= 2 // Double the required food for animals younger than 2 years

  // Add extra food if the favourite fruit is cherries
  if (animal.favouriteFruit === 'Cherry')
    foodPerDay += 28 // Add 28 kg for animals with cherries as their favourite fruit

  // Add 20% more food for male animals
  if (animal.gender === 'Male')
    foodPerDay *= 1.2 // Add 20% more food for male animals

  // For fish, required food is 0 kg
  if (animal.species === 'Fish')
    foodPerDay = 0

  // Calculate food required for the next month (assuming 30 days)
  const foodForNextMonth = foodPerDay * 30

  // Store the calculated food for the animal
  // foodRequired[animal.name] = foodForNextMonth

  return foodForNextMonth.toFixed(2)
}
