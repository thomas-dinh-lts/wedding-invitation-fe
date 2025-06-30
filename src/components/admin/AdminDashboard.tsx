'use client';
import { DateFormat } from '@/constants/date.constant';
import { useGetRSVP } from '@/hooks/rsvp/useGetRSVP';
import { IRSVP } from '@/types/rsvp';
import { Table, Tabs, TabsProps } from 'antd';
import { ColumnType } from 'antd/lib/table';
import dayjs from 'dayjs';

function AdminDashboard() {
  const { data: rsvp, isFetching } = useGetRSVP();

  const columns: ColumnType<IRSVP>[] = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Phone number',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
    },
    {
      title: 'Wish',
      dataIndex: 'wish',
      key: 'wish',
    },
    {
      title: 'Submitted at',
      dataIndex: 'dateCreated',
      key: 'dateCreated',
      render: (_, rsvp) => {
        return dayjs(rsvp.dateCreated).format(DateFormat.MMM_DD_YYYY_HH_MM_SS_A);
      },
    },
  ];

  const tabs: TabsProps['items'] = [
    {
      key: 'Groom',
      label: 'Groom',
      children: (
        <>
          <div className="font-bold text-2xl mb-4">
            Groom reception: {rsvp?.data?.groomReceptionCount}
          </div>
          <Table
            columns={columns}
            dataSource={rsvp?.data?.groomReception}
            loading={isFetching}
            showHeader
            rowKey="_id"
            scroll={{ x: 'max-content' }}
            pagination={false}
          />
        </>
      ),
    },
    {
      key: 'Bride',
      label: 'Bride',
      children: (
        <>
          <div className="font-bold text-2xl mb-4">
            Bride reception: {rsvp?.data?.brideReceptionCount}
          </div>
          <Table
            columns={columns}
            dataSource={rsvp?.data?.brideReception}
            loading={isFetching}
            showHeader
            rowKey="_id"
            scroll={{ x: 'max-content' }}
            pagination={false}
          />
        </>
      ),
    },
    {
      key: 'NotAttending',
      label: 'Not attending',
      children: (
        <>
          <div className="font-bold text-2xl mb-4">
            Bride reception: {rsvp?.data?.notAttendingCount}
          </div>
          <Table
            columns={columns}
            dataSource={rsvp?.data?.notAttending}
            loading={isFetching}
            showHeader
            rowKey="_id"
            scroll={{ x: 'max-content' }}
            pagination={false}
          />
        </>
      ),
    },
  ];

  return (
    <div className="h-full">
      <Tabs items={tabs} />
    </div>
  );
}

export default AdminDashboard;
