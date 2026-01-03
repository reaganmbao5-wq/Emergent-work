// Mock data for Archie's Bistro

export const restaurantInfo = {
  name: "Archie's Bistro",
  rating: 4.9,
  reviewCount: 60,
  tagline: "Where Every Meal is a Celebration",
  description: "Nestled in the heart of Durban's Musgrave district, Archie's Bistro has been delighting locals and visitors alike with our commitment to exceptional dining. We believe in creating memorable experiences through carefully crafted dishes, warm hospitality, and an inviting atmosphere that makes every guest feel at home.",
  phone: "067 382 3347",
  address: "Silvervause Centre, 151 Silverton Rd, Musgrave, Durban, 4001, South Africa",
  plusCode: "5X3V+3G Durban",
  hours: "Open daily until 12:00 AM",
  services: ["Dine-in", "Takeaway"],
  features: ["LGBTQ+ friendly", "Family-friendly", "Wheelchair accessible"]
};

export const menuData = [
  {
    category: "Appetizers",
    items: [
      {
        name: "Artichoke Dip",
        description: "Creamy artichoke dip, served with toasted baguette marinara",
        price: 9.00
      },
      {
        name: "Garlic Mushroom",
        description: "Sautéed mushrooms in a garlic butter sauce",
        price: 8.00
      },
      {
        name: "Crispy Rice",
        description: "Crispy rice cubes, tossed with spicy tuna, jalapeños, and avocado",
        price: 12.00
      },
      {
        name: "Chicken Wings",
        description: "Crispy chicken wings tossed in your choice of sauce: BBQ, mild, or hot buffalo. Served with celery sticks and ranch",
        price: 10.00
      },
      {
        name: "Caprese Skewers",
        description: "Cherry tomatoes, fresh mozzarella, basil pesto, balsamic glaze",
        price: 9.00
      },
      {
        name: "Loaded Fries",
        description: "Crispy fries topped with melted cheese, bacon bits, and sour cream",
        price: 9.00
      },
      {
        name: "Chicken Curry Puffs",
        description: "4 pcs. Golden puffs filled with aromatic curried chicken and potatoes, served with sweet chili sauce",
        price: 9.50
      },
      {
        name: "Spring Rolls",
        description: "4 pcs. Crispy vegetarian rolls filled with mixed vegetables and glass noodles",
        price: 8.50
      },
      {
        name: "Crab Wontons",
        description: "4 pcs. Crispy wontons filled with creamy crab meat and cream cheese",
        price: 9.50
      }
    ]
  },
  {
    category: "Burgers",
    items: [
      {
        name: "Classic Burger",
        description: "Beef patty with lettuce, tomato, onion, and pickles",
        price: 12.00
      },
      {
        name: "Bacon Cheeseburger",
        description: "Juicy beef patty topped with crispy bacon, melted cheddar cheese, lettuce, tomato, and onion",
        price: 14.00
      },
      {
        name: "Double Cheeseburger",
        description: "Two beef patties with double cheese, lettuce, tomato, onion, and pickles",
        price: 14.00
      },
      {
        name: "Crispy Chicken Burger",
        description: "Crispy fried chicken breast, lettuce, tomato, and spicy mayo",
        price: 13.00
      },
      {
        name: "Luxury Burger",
        description: "Wagyu beef patty, truffle aioli, caramelized onions, brie cheese, and arugula",
        price: 18.00
      }
    ]
  },
  {
    category: "Mains",
    items: [
      {
        name: "Honey Soy Salmon",
        description: "Pan-seared salmon glazed with honey soy sauce, served with steamed vegetables",
        price: 16.00
      },
      {
        name: "Classic Grilled Salmon",
        description: "Grilled salmon fillet served with lemon and herbs",
        price: 26.50
      },
      {
        name: "Halibut",
        description: "Pan-seared halibut served with a lemon butter sauce",
        price: 28.50
      },
      {
        name: "Pollo Asiago",
        description: "Tender grilled chicken breast topped with Asiago cheese and light creamy sauce",
        price: 24.50
      },
      {
        name: "Chicken Korma",
        description: "Mild and creamy Indian curry with tender chicken, almonds, and aromatic spices. Served with rice",
        price: 19.50
      },
      {
        name: "Roasted Chicken Penne",
        description: "Penne pasta tossed with roasted chicken, sun-dried tomatoes, spinach, and creamy garlic sauce",
        price: 20.50
      },
      {
        name: "Chicken Mushroom Penne",
        description: "Penne pasta with chicken, mushrooms, and creamy Alfredo sauce",
        price: 20.50
      },
      {
        name: "Portobello Risotto",
        description: "Creamy Arborio rice cooked with earthy mushrooms and Parmesan cheese",
        price: 22.50
      }
    ]
  },
  {
    category: "All Day Breakfast",
    items: [
      {
        name: "Chicken and Waffles",
        description: "Crispy fried chicken served with fluffy waffles, honey butter, and maple syrup",
        price: 15.00
      },
      {
        name: "Churro French Toast",
        description: "Thick-cut brioche bread dipped in cinnamon sugar batter. Topped with whipped cream and caramel drizzle",
        price: 12.00
      },
      {
        name: "All-Day Omelette",
        description: "Three-egg omelette with your choice of cheese, ham, bacon, sausage, bell peppers, onions, mushrooms, or tomatoes",
        price: 10.00
      }
    ]
  },
  {
    category: "Noodles",
    items: [
      {
        name: "Chicken or Beef Chow Mein",
        description: "Stir-fried noodles with tender chicken or beef, mixed vegetables, and signature chow mein sauce",
        price: 16.50
      },
      {
        name: "Shrimp Chow Mein",
        description: "Stir-fried noodles with succulent shrimp, mixed vegetables, and signature chow mein sauce",
        price: 18.50
      }
    ]
  },
  {
    category: "Sides",
    items: [
      {
        name: "French Fries",
        description: "Crispy, golden french fries",
        price: 6.50
      },
      {
        name: "Fried Rice",
        description: "Savory stir-fried rice with mixed vegetables and your choice of protein",
        price: 8.50
      },
      {
        name: "Stir Fried Vegetables",
        description: "A colorful medley of fresh vegetables stir-fried to perfection",
        price: 9.50
      }
    ]
  }
];

export const reviews = [
  {
    id: 1,
    name: "Sarah Thompson",
    rating: 5,
    date: "2 weeks ago",
    text: "Absolutely fantastic! The Luxury Burger was cooked to perfection and the atmosphere is so welcoming. The staff went above and beyond to make our anniversary dinner special.",
    avatar: "ST"
  },
  {
    id: 2,
    name: "Michael Chen",
    rating: 5,
    date: "1 month ago",
    text: "Best salmon I've had in Durban! The honey soy glaze is incredible. Great service and the location is perfect. Will definitely be coming back regularly.",
    avatar: "MC"
  },
  {
    id: 3,
    name: "Priya Naidoo",
    rating: 5,
    date: "3 weeks ago",
    text: "Love this place! The chicken korma reminds me of home cooking but elevated. Generous portions and reasonable prices. The LGBTQ+ friendly atmosphere makes everyone feel welcome.",
    avatar: "PN"
  },
  {
    id: 4,
    name: "James Wilson",
    rating: 5,
    date: "2 months ago",
    text: "Outstanding bistro! Tried the chicken and waffles for brunch - divine! The service is impeccable and the ambiance is perfect for both casual meals and special occasions.",
    avatar: "JW"
  },
  {
    id: 5,
    name: "Lisa Martinez",
    rating: 4,
    date: "1 week ago",
    text: "Great food and lovely staff. The artichoke dip appetizer is a must-try! Only small critique is it can get a bit busy on weekends, but that's a testament to how good it is.",
    avatar: "LM"
  },
  {
    id: 6,
    name: "David Govender",
    rating: 5,
    date: "3 months ago",
    text: "Been coming here for years and it never disappoints. The menu has such great variety - from comfort food to upscale dishes. Archie's is a Durban gem!",
    avatar: "DG"
  }
];

export const images = {
  hero: "https://images.unsplash.com/photo-1667388969250-1c7220bf3f37",
  about: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
  ambiance1: "https://images.unsplash.com/photo-1538333581680-29dd4752ddf2",
  ambiance2: "https://images.unsplash.com/photo-1675583690138-5242aee4c0c3",
  ambiance3: "https://images.unsplash.com/photo-1686745050901-68094b6d37c8"
};
