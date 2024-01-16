'use client';
import ActivityOverview from '@/components/admin-dashboard/dashboard/activityOverview';
import NumberOfDownloads from '@/components/admin-dashboard/dashboard/numberDashboard';
import RecentPayments from '@/components/admin-dashboard/dashboard/recentPayments';
import Requests from '@/components/admin-dashboard/dashboard/requests';

export default function AdminDashboard() {
  return (
    <>
      <header className='pb-2'>
        <h1 className='font-semibold'>Activity overview</h1>
      </header>
      <div className='flex flex-col gap-[30px]'>
        <ActivityOverview />
        <NumberOfDownloads />
        <Requests />
        <RecentPayments />
      </div>
    </>
  );
}
