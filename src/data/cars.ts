import mercedesSedan from "@/assets/images/car-mercedes-sedan.png";
import mercedesSport from "@/assets/images/car-mercedes-sport.png";
import mercedesSedan2 from "@/assets/images/car-mercedes-sedan-2.png";
import porscheSuv from "@/assets/images/car-porsche-suv.png";
import toyotaSedan from "@/assets/images/car-toyota-sedan.png";
import porscheSuv2 from "@/assets/images/car-porsche-suv-2.png";

export type VehicleType =
  "Sedan" | "Sport" | "SUV" | "Cabriolet" | "Pickup" | "Minivan";

export type Car = {
  id: string;
  name: string;
  type: VehicleType;
  price: number;
  image: string;
  transmission: string;
  fuel: string;
  ac: boolean;
  seats: number;
  doors: number;
  electric?: boolean;
  luxury?: boolean;
  instantBook?: boolean;
  rangeKm: number;
};

export const cars: Car[] = [
  {
    id: "mercedes-sedan",
    name: "Mercedes",
    type: "Sedan",
    price: 25,
    image: mercedesSedan,
    transmission: "Automat",
    fuel: "PB 95",
    ac: true,
    seats: 5,
    doors: 4,
    instantBook: true,
    rangeKm: 680,
  },
  {
    id: "mercedes-sport",
    name: "Mercedes",
    type: "Sport",
    price: 50,
    image: mercedesSport,
    transmission: "Manual",
    fuel: "PB 95",
    ac: true,
    seats: 2,
    doors: 2,
    luxury: true,
    rangeKm: 540,
  },
  {
    id: "mercedes-sedan-premium",
    name: "Mercedes",
    type: "Sedan",
    price: 45,
    image: mercedesSedan2,
    transmission: "Automat",
    fuel: "PB 95",
    ac: true,
    seats: 5,
    doors: 4,
    luxury: true,
    instantBook: true,
    rangeKm: 640,
  },
  {
    id: "porsche-suv",
    name: "Porsche",
    type: "SUV",
    price: 40,
    image: porscheSuv,
    transmission: "Automat",
    fuel: "PB 95",
    ac: true,
    seats: 5,
    doors: 4,
    instantBook: true,
    rangeKm: 610,
  },
  {
    id: "toyota-sedan",
    name: "Toyota",
    type: "Sedan",
    price: 35,
    image: toyotaSedan,
    transmission: "Automat",
    fuel: "Electric",
    ac: true,
    seats: 5,
    doors: 4,
    electric: true,
    instantBook: true,
    rangeKm: 380,
  },
  {
    id: "porsche-suv-turbo",
    name: "Porsche",
    type: "SUV",
    price: 50,
    image: porscheSuv2,
    transmission: "Automat",
    fuel: "Electric",
    ac: true,
    seats: 5,
    doors: 4,
    electric: true,
    luxury: true,
    instantBook: true,
    rangeKm: 450,
  },
  {
    id: "bmw-coupe",
    name: "BMW",
    type: "Cabriolet",
    price: 25,
    image: mercedesSport,
    transmission: "Automat",
    fuel: "PB 95",
    ac: true,
    seats: 4,
    doors: 2,
    instantBook: true,
    rangeKm: 520,
  },
  {
    id: "toyota-pickup",
    name: "Toyota",
    type: "Pickup",
    price: 30,
    image: toyotaSedan,
    transmission: "Automat",
    fuel: "PB 95",
    ac: true,
    seats: 5,
    doors: 4,
    instantBook: true,
    rangeKm: 700,
  },
  {
    id: "mercedes-minivan",
    name: "Mercedes",
    type: "Minivan",
    price: 50,
    image: mercedesSedan,
    transmission: "Automat",
    fuel: "PB 95",
    ac: true,
    seats: 7,
    doors: 4,
    instantBook: true,
    rangeKm: 590,
  },
  {
    id: "toyota-sport",
    name: "Toyota",
    type: "Sport",
    price: 60,
    image: mercedesSport,
    transmission: "Manual",
    fuel: "PB 95",
    ac: true,
    seats: 2,
    doors: 2,
    luxury: true,
    rangeKm: 480,
  },
  {
    id: "maybach-sedan",
    name: "Maybach",
    type: "Sedan",
    price: 70,
    image: mercedesSedan2,
    transmission: "Automat",
    fuel: "PB 95",
    ac: true,
    seats: 5,
    doors: 4,
    luxury: true,
    instantBook: true,
    rangeKm: 560,
  },
];

export const featuredCars = cars.slice(0, 6);

export function getCarById(id: string) {
  return cars.find((car) => car.id === id);
}
