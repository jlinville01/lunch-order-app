import { OrderProvider, useOrder } from "@/components/OrderContext";
import Welcome from "./Welcome";
import MainCourse from "./MainCourse";
import Sides from "./Sides";
import Drinks from "./Drinks";
import Dessert from "./Dessert";
import Details from "./Details";
import Review from "./Review";
import Success from "./Success";

const OrderFlow = () => {
  const { currentStep } = useOrder();

  const renderStep = () => {
    switch (currentStep) {
      case 'welcome':
        return <Welcome />;
      case 'mainCourse':
        return <MainCourse />;
      case 'sides':
        return <Sides />;
      case 'drinks':
        return <Drinks />;
      case 'dessert':
        return <Dessert />;
      case 'details':
        return <Details />;
      case 'review':
        return <Review />;
      case 'success':
        return <Success />;
      default:
        return <Welcome />;
    }
  };

  return <div className="animate-in fade-in duration-300">{renderStep()}</div>;
};

const Index = () => {
  return (
    <OrderProvider>
      <OrderFlow />
    </OrderProvider>
  );
};

export default Index;
