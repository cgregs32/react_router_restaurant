25.times do
  Dish.create(
    name: Faker::Food.dish,
    ingredients: Faker::Food.ingredient,
    price: Faker::Commerce.price.to_f
  )
end
