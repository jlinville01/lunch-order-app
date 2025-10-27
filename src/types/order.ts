export interface MenuItem {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface OrderData {
  mainCourse: string | null;
  sides: string[];
  drinks: string[];
  dessert: string | null;
  date: Date | null;
  time: string | null;
  customerName: string;
  notes: string;
}

export type OrderStep = 
  | 'welcome'
  | 'mainCourse'
  | 'sides'
  | 'drinks'
  | 'dessert'
  | 'details'
  | 'review'
  | 'success';
