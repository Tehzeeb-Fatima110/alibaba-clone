export const categories = [
  "Automobiles", "Clothes and wear", "Home interiors",
  "Computer and tech", "Tools, equipments", "Sports and outdoor",
  "Animal and pets", "Machinery tools", "More category"
]

export const dealProducts = [
  { id: 1, name: "Smart watches", image: "/src/assets/Image/tech/image 23.png", discount: 25, price: 19 },
  { id: 2, name: "Laptops", image: "/src/assets/Image/tech/image 29.png", discount: 15, price: 340 },
  { id: 3, name: "GoPro cameras", image: "/src/assets/Image/tech/image 32.png", discount: 40, price: 89 },
  { id: 4, name: "Headphones", image: "/src/assets/Image/tech/image 33.png", discount: 25, price: 10 },
  { id: 5, name: "Canon cameras", image: "/src/assets/Image/tech/image 34.png", discount: 25, price: 240 },
]

export const homeOutdoor = [
  { id: 1, name: "Soft chairs", price: "From USD 19", image: "/src/assets/Image/interior/1.png" },
  { id: 2, name: "Sofa & chair", price: "From USD 19", image: "/src/assets/Image/interior/3.png" },
  { id: 3, name: "Kitchen dishes", price: "From USD 19", image: "/src/assets/Image/interior/6.png" },
  { id: 4, name: "Smart watches", price: "From USD 19", image: "/src/assets/Image/tech/image 23.png" },
  { id: 5, name: "Kitchen mixer", price: "From USD 100", image: "/src/assets/Image/interior/7.png" },
  { id: 6, name: "Blenders", price: "From USD 39", image: "/src/assets/Image/interior/8.png" },
  { id: 7, name: "Home appliance", price: "From USD 19", image: "/src/assets/Image/interior/9.png" },
  { id: 8, name: "Coffee maker", price: "From USD 10", image: "/src/assets/Image/interior/image 89.png" },
]

export const electronics = [
  { id: 1, name: "Smart watches", price: "From USD 19", image: "/src/assets/Image/tech/image 23.png" },
  { id: 2, name: "Cameras", price: "From USD 89", image: "/src/assets/Image/tech/image 32.png" },
  { id: 3, name: "Headphones", price: "From USD 10", image: "/src/assets/Image/tech/image 33.png" },
  { id: 4, name: "Smart watches", price: "From USD 90", image: "/src/assets/Image/tech/image 34.png" },
  { id: 5, name: "Gaming set", price: "From USD 35", image: "/src/assets/Image/tech/image 85.png" },
  { id: 6, name: "Laptops & PC", price: "From USD 340", image: "/src/assets/Image/tech/image 29.png" },
  { id: 7, name: "Smartphones", price: "From USD 19", image: "/src/assets/Image/tech/image 86.png" },
  { id: 8, name: "Electric kettle", price: "From USD 240", image: "/src/assets/Image/tech/6.png" },
]

export const recommendedItems = [
  { id: 1, name: "T-shirts with multiple colors, for men", price: 10.30, image: "/src/assets/Layout/alibaba/Image/cloth/2 1.png" },
  { id: 2, name: "Jeans shorts for men blue color", price: 10.30, image: "/src/assets/Layout/alibaba/Image/cloth/Bitmap.png" },
  { id: 3, name: "Brown winter coat medium size", price: 12.50, image: "/src/assets/Layout/alibaba/Image/cloth/Bitmap (2).png" },
  { id: 4, name: "Jeans bag for travel for men", price: 34.00, image: "/src/assets/Layout/alibaba/Image/cloth/image 24.png" },
  { id: 5, name: "Leather wallet", price: 99.00, image: "/src/assets/Layout/alibaba/Image/cloth/image 26.png" },
  { id: 6, name: "Canon camera black, 100x zoom", price: 9.99, image: "/src/assets/Layout/alibaba/Image/tech/image 85.png" },
  { id: 7, name: "Headset for gaming with mic", price: 8.99, image: "/src/assets/Layout/alibaba/Image/tech/image 86.png" },
  { id: 8, name: "Smartwatch silver color modern", price: 10.30, image: "/src/assets/Image/tech/image 23.png" },
  { id: 9, name: "Blue wallet for men leather", price: 10.30, image: "/src/assets/Layout/alibaba/Image/cloth/image 30.png" },
  { id: 10, name: "Jeans bag for travel for men", price: 80.95, image: "/src/assets/Layout/alibaba/Image/interior/image 90.png" },
]

export const listingProducts = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  name: "GoPro HERO6 4K Action Camera - Black",
  price: 998.00,
  originalPrice: 1128.00,
  rating: 7.5,
  orders: 154,
  shipping: "Free Shipping",
  image: `/src/assets/Image/tech/image ${23 + (i % 5)}.png`,
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
}))

export const cartItems = [
  { id: 1, name: "T-shirts with multiple colors, for men and lady", size: "medium", color: "blue", material: "Plastic", seller: "Artel Market", qty: 9, price: 78.99, image: "/src/assets/Layout/alibaba/Image/cloth/2 1.png" },
  { id: 2, name: "T-shirts with multiple colors, for men and lady", size: "medium", color: "blue", material: "Plastic", seller: "Best factory LLC", qty: 3, price: 39.00, image: "/src/assets/Layout/alibaba/Image/cloth/Bitmap.png" },
  { id: 3, name: "T-shirts with multiple colors, for men and lady", size: "medium", color: "blue", material: "Plastic", seller: "Artel Market", qty: 1, price: 170.50, image: "/src/assets/Layout/alibaba/Image/cloth/Bitmap (2).png" },
]

export const savedForLater = Array.from({ length: 4 }, (_, i) => ({
  id: i + 1,
  name: "GoPro HERO6 4K Action Camera - Black",
  price: 99.50,
  image: `/src/assets/Image/tech/image ${23 + (i % 5)}.png`,
}))

export const supplierRegions = [
  { country: "Arabic Emirates", flag: "/src/assets/Layout1/Image/flags/AE@2x.png", url: "shopname.ae" },
  { country: "Australia", flag: "/src/assets/Layout1/Image/flags/icon.png", url: "shopname.au" },
  { country: "United States", flag: "/src/assets/Layout1/Image/flags/US@2x.png", url: "shopname.us" },
  { country: "Russia", flag: "/src/assets/Layout1/Image/flags/RU@2x.png", url: "shopname.ru" },
  { country: "Italy", flag: "/src/assets/Layout1/Image/flags/IT@2x.png", url: "shopname.it" },
  { country: "Denmark", flag: "/src/assets/Layout1/Image/flags/DK@2x.png", url: "sommark.com.dk" },
  { country: "France", flag: "/src/assets/Layout1/Image/flags/FR@2x.png", url: "shopname.com.fr" },
  { country: "China", flag: "/src/assets/Layout1/Image/flags/CN@2x.png", url: "shopname.as" },
  { country: "Great Britain", flag: "/src/assets/Layout1/Image/flags/GB@2x.png", url: "shopname.co.uk" },
  { country: "Germany", flag: "/src/assets/Layout1/Image/flags/DE@2x.png", url: "shopname.de" },
]