import car1_1 from './assets/images/car1-1.jpg';
import car1_2 from './assets/images/car1-2.jpg';
import car1_3 from './assets/images/car1-3.jpg';
import car2_1 from './assets/images/car2-1.jpg';
import car2_2 from './assets/images/car2-2.jpg';
import car2_3 from './assets/images/car2-3.jpg';
import car3_1 from './assets/images/car3-1.jpg';
import car3_2 from './assets/images/car3-2.jpg';
import car3_3 from './assets/images/car3-3.jpg';
import car4_1 from './assets/images/car4-1.jpg';
import car4_2 from './assets/images/car4-2.jpg';
import car4_3 from './assets/images/car4-3.jpg';
import car5_1 from './assets/images/car5-1.jpg';
import car5_2 from './assets/images/car5-2.jpg';
import car5_3 from './assets/images/car5-3.jpg';
import car6_1 from './assets/images/car6-1.jpg';
import car6_2 from './assets/images/car6-2.jpg';
import car6_3 from './assets/images/car6-3.jpg';
import car7_1 from './assets/images/car7-1.jpg';
import car7_2 from './assets/images/car7-2.jpg';
import car7_3 from './assets/images/car7-3.jpg';
import car8_1 from './assets/images/car8-1.jpg';
import car8_2 from './assets/images/car8-2.jpg';
import car8_3 from './assets/images/car8-3.jpg';
import car9_1 from './assets/images/car9-1.jpg';
import car9_2 from './assets/images/car9-2.jpg';
import car9_3 from './assets/images/car9-3.jpg';
import car10_1 from './assets/images/car10-1.jpg';
import car10_2 from './assets/images/car10-2.jpg';
import car10_3 from './assets/images/car10-3.jpg';
import car11_1 from './assets/images/car11-1.jpg';
import car11_2 from './assets/images/car11-2.jpg';
import car11_3 from './assets/images/car11-3.jpg';
import car12_1 from './assets/images/car12-1.jpg';
import car12_2 from './assets/images/car12-2.jpg';
import car12_3 from './assets/images/car12-3.jpg';
import car13_1 from './assets/images/car13-1.jpg';
import car13_2 from './assets/images/car13-2.jpg';
import car13_3 from './assets/images/car13-3.jpg';
import car14_1 from './assets/images/car14-1.jpg';
import car14_2 from './assets/images/car14-2.jpg';
import car14_3 from './assets/images/car14-3.jpg';
import car15_1 from './assets/images/car15-1.jpg';
import car15_2 from './assets/images/car15-2.jpg';
import car15_3 from './assets/images/car15-3.jpg';
import car16_1 from './assets/images/car16-1.jpg';
import car16_2 from './assets/images/car16-2.jpg';
import car16_3 from './assets/images/car16-3.jpg';

const cars = [
  {
    id: 1,
    brand: "Toyota",
    carImages: [car1_1, car1_2, car1_3],
    name: "Toyota Camry",
    year: 2022,
    capacity: 5,
    speed: "210 km/h",
    gas: "Petrol",
    transmission: "Automatic",
    price: "$28,000",
    favorite: false
  },
  {
    id: 2,
    brand: "Honda",
    carImages: [car2_1, car2_2, car2_3],
    name: "Honda Civic",
    year: 2021,
    capacity: 5,
    speed: "200 km/h",
    gas: "Petrol",
    transmission: "Manual",
    price: "$25,000",
    favorite: false
  },
  {
    id: 3,
    brand: "Ford",
    carImages: [car3_1, car3_2, car3_3],
    name: "Ford Mustang",
    year: 2023,
    capacity: 4,
    speed: "250 km/h",
    gas: "Petrol",
    transmission: "Automatic",
    price: "$55,000",
    favorite: false
  },
  {
    id: 4,
    brand: "Tesla",
    carImages: [car4_1, car4_2, car4_3],
    name: "Tesla Model S",
    year: 2024,
    capacity: 5,
    speed: "322 km/h",
    gas: "Electric",
    transmission: "Automatic",
    price: "$85,000",
    favorite: false
  },
  {
    id: 5,
    brand: "Jeep",
    carImages: [car5_1, car5_2, car5_3],
    name: "Jeep Wrangler",
    year: 2020,
    capacity: 5,
    speed: "180 km/h",
    gas: "Diesel",
    transmission: "Manual",
    price: "$40,000",
    favorite: false
  },
  {
    id: 6,
    brand: "Chevrolet",
    carImages: [car6_1, car6_2, car6_3],
    name: "Chevrolet Malibu",
    year: 2019,
    capacity: 5,
    speed: "200 km/h",
    gas: "Petrol",
    transmission: "Automatic",
    price: "$24,000",
    favorite: false
  },
  {
    id: 7,
    brand: "BMW",
    carImages: [car7_1, car7_2, car7_3],
    name: "BMW 3 Series",
    year: 2022,
    capacity: 5,
    speed: "240 km/h",
    gas: "Petrol",
    transmission: "Automatic",
    price: "$50,000",
    favorite: false
  },
  {
    id: 8,
    brand: "Mercedes-Benz",
    carImages: [car8_1, car8_2, car8_3],
    name: "Mercedes-Benz C-Class",
    year: 2023,
    capacity: 5,
    speed: "250 km/h",
    gas: "Petrol",
    transmission: "Automatic",
    price: "$55,000",
    favorite: false
  },
  {
    id: 9,
    brand: "Audi",
    carImages: [car9_1, car9_2, car9_3],
    name: "Audi A4",
    year: 2021,
    capacity: 5,
    speed: "230 km/h",
    gas: "Petrol",
    transmission: "Automatic",
    price: "$48,000",
    favorite: false
  },
  {
    id: 10,
    brand: "Hyundai",
    carImages: [car10_1, car10_2, car10_3],
    name: "Hyundai Sonata",
    year: 2020,
    capacity: 5,
    speed: "195 km/h",
    gas: "Petrol",
    transmission: "Automatic",
    price: "$27,000",
    favorite: false
  },
  {
    id: 11,
    brand: "Kia",
    carImages: [car11_1, car11_2, car11_3],
    name: "Kia Optima",
    year: 2019,
    capacity: 5,
    speed: "190 km/h",
    gas: "Petrol",
    transmission: "Automatic",
    price: "$26,000",
    favorite: false
  },
  {
    id: 12,
    brand: "Subaru",
    carImages: [car12_1, car12_2, car12_3],
    name: "Subaru Outback",
    year: 2023,
    capacity: 5,
    speed: "210 km/h",
    gas: "Petrol",
    transmission: "Automatic",
    price: "$36,000",
    favorite: false
  },
  {
    id: 13,
    brand: "Nissan",
    carImages: [car13_1, car13_2, car13_3],
    name: "Nissan Altima",
    year: 2021,
    capacity: 5,
    speed: "205 km/h",
    gas: "Petrol",
    transmission: "Automatic",
    price: "$29,000",
    favorite: false
  },
  {
    id: 14,
    brand: "Volkswagen",
    carImages: [car14_1, car14_2, car14_3],
    name: "Volkswagen Passat",
    year: 2020,
    capacity: 5,
    speed: "220 km/h",
    gas: "Petrol",
    transmission: "Automatic",
    price: "$31,000",
    favorite: false
  },
  {
    id: 15,
    brand: "Mazda",
    carImages: [car15_1, car15_2, car15_3],
    name: "Mazda6",
    year: 2022,
    capacity: 5,
    speed: "215 km/h",
    gas: "Petrol",
    transmission: "Automatic",
    price: "$30,000",
    favorite: false
  },
  {
    id: 16,
    brand: "Dodge",
    carImages: [car16_1, car16_2, car16_3],
    name: "Dodge Charger",
    year: 2023,
    capacity: 5,
    speed: "260 km/h",
    gas: "Petrol",
    transmission: "Automatic",
    price: "$42,000",
    favorite: false
  }
];


