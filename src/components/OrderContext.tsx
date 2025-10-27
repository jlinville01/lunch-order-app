import { createContext, useContext, useState, ReactNode } from "react";
import { OrderData, OrderStep } from "@/types/order";

interface OrderContextType {
  orderData: OrderData;
  updateOrderData: (data: Partial<OrderData>) => void;
  currentStep: OrderStep;
  setCurrentStep: (step: OrderStep) => void;
  resetOrder: () => void;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

const initialOrderData: OrderData = {
  mainCourse: null,
  sides: [],
  drinks: [],
  dessert: null,
  date: null,
  time: null,
  customerName: "",
  notes: "",
};

export const OrderProvider = ({ children }: { children: ReactNode }) => {
  const [orderData, setOrderData] = useState<OrderData>(initialOrderData);
  const [currentStep, setCurrentStep] = useState<OrderStep>('welcome');

  const updateOrderData = (data: Partial<OrderData>) => {
    setOrderData((prev) => ({ ...prev, ...data }));
  };

  const resetOrder = () => {
    setOrderData(initialOrderData);
    setCurrentStep('welcome');
  };

  return (
    <OrderContext.Provider value={{ orderData, updateOrderData, currentStep, setCurrentStep, resetOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error("useOrder must be used within OrderProvider");
  }
  return context;
};
