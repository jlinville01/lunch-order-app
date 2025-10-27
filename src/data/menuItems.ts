import { MenuItem } from "@/types/order";

export const mainCourses: MenuItem[] = [
  { id: "burger", name: "Classic Burger", description: "Juicy beef patty with fresh toppings", icon: "🍔" },
  { id: "pizza", name: "Margherita Pizza", description: "Fresh mozzarella and basil", icon: "🍕" },
  { id: "pasta", name: "Pasta Carbonara", description: "Creamy sauce with bacon", icon: "🍝" },
  { id: "salad", name: "Caesar Salad", description: "Crisp romaine with parmesan", icon: "🥗" },
  { id: "sandwich", name: "Club Sandwich", description: "Triple-decker with turkey and bacon", icon: "🥪" },
  { id: "sushi", name: "Sushi Roll", description: "Fresh salmon and avocado", icon: "🍣" },
];

export const sides: MenuItem[] = [
  { id: "fries", name: "French Fries", description: "Crispy golden fries", icon: "🍟" },
  { id: "onion-rings", name: "Onion Rings", description: "Beer-battered rings", icon: "🧅" },
  { id: "coleslaw", name: "Coleslaw", description: "Creamy cabbage salad", icon: "🥬" },
  { id: "garlic-bread", name: "Garlic Bread", description: "Toasted with butter", icon: "🥖" },
  { id: "soup", name: "Soup of the Day", description: "Chef's special", icon: "🍲" },
];

export const drinks: MenuItem[] = [
  { id: "coke", name: "Coca-Cola", description: "Classic refreshment", icon: "🥤" },
  { id: "water", name: "Mineral Water", description: "Sparkling or still", icon: "💧" },
  { id: "juice", name: "Fresh Juice", description: "Orange or apple", icon: "🧃" },
  { id: "coffee", name: "Coffee", description: "Hot or iced", icon: "☕" },
  { id: "tea", name: "Iced Tea", description: "Lemon flavor", icon: "🍵" },
  { id: "smoothie", name: "Fruit Smoothie", description: "Mixed berries", icon: "🥤" },
];

export const desserts: MenuItem[] = [
  { id: "ice-cream", name: "Ice Cream", description: "Vanilla, chocolate, or strawberry", icon: "🍨" },
  { id: "cake", name: "Chocolate Cake", description: "Rich and moist", icon: "🍰" },
  { id: "brownie", name: "Brownie", description: "Warm with nuts", icon: "🧁" },
  { id: "cheesecake", name: "Cheesecake", description: "New York style", icon: "🍰" },
  { id: "fruit", name: "Fresh Fruit", description: "Seasonal selection", icon: "🍓" },
];

export const timeSlots = [
  "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
  "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM"
];
