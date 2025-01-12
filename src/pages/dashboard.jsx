import Card from "../components/Elements/Card";
import MainLayout from "../components/Layouts/MainLayout";
import CardBill from "../components/Fragments/dashboard/CardBill";
import CardExpenseBreakdown from "../components/Fragments/dashboard/CardExpenseBreakdown";
import CardTransaction from "../components/Fragments/dashboard/CardTransaction";
import CardBalance from "../components/Fragments/dashboard/CardBalance";
import CardStatistic from "../components/Fragments/dashboard/CardStatistic";
import CardGoal from "../components/Fragments/dashboard/CardGoal";

const DashboardPage = () => {
  return (
    <MainLayout type="dashboard">
      {/* top content start*/}
      <div className="md:grid md:grid-cols-3 md:gap-x-6">
        <CardBalance />
        <CardGoal />
        <CardBill />
        <CardTransaction />
        <CardStatistic />
        <CardExpenseBreakdown />
      </div>
      {/* bottom content end*/}
    </MainLayout>
  );
};

export default DashboardPage;
