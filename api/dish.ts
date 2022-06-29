/**
 * Data structure for dishes.
 */
export interface Dish {
    name: string;
    description: string;
    price: number;
    category: DishCategory;
    availability: AvailabilityCategory[];
    active: boolean;
    waitingTime: number;
}

/**
 * Whether a dish is a Starter, Main Course, Dessert or Beverage
 */
export enum DishCategory {
    Starter = "Starter",
    Main = "Main Course",
    Dessert = "Dessert",
    Bev = "Beverage"
}

/**
 * When a dish is available based on time of day.
 */
export enum AvailabilityCategory {
    Breakfast = "Breakfast",
    Lunch = "Lunch",
    Dinner = "Dinner",
    Weekdays = "Weekdays",
    Weekend = "Weekend",
    EntireWeek = "Throughout the week"
}