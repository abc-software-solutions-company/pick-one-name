import Ellipse from '@/core-ui/ellipse';

interface Row {
  stt: number;
  totalAmount: number;
  status: string;
}

function createData(stt: number, totalAmount: number, status: string): Row {
  return {stt, totalAmount, status};
}

const rows: Row[] = [
  createData(1, 60000, 'Hoàn thành'),
  createData(2, 60000, 'Hoàn thành'),
  createData(3, 60000, 'Hoàn thành'),
  createData(4, 60000, 'Hoàn thành')
];

const PaymentHistory = () => {
  return (
    <div className="flex h-full flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="text-surface min-w-full border border-gray-300 text-center text-sm font-light ">
              <thead className="border-b border-gray-300 font-medium dark:border-white/10">
                <tr>
                  <th
                    scope="col"
                    className="border-e border-gray-300 px-6 py-4 font-['Nunito'] font-bold md:text-lg xl:text-xl"
                  >
                    STT
                  </th>
                  <th
                    scope="col"
                    className="border-e border-gray-300 px-6 py-4 font-['Nunito'] font-bold md:text-lg xl:text-xl"
                  >
                    Tổng tiền đơn hàng
                  </th>
                  <th scope="col" className="px-6 py-4 font-['Nunito'] font-bold md:text-lg xl:text-xl">
                    Trạng thái
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map(row => (
                  <tr key={row.stt} className="border-b border-gray-300 dark:border-white/10">
                    <td className="border-e text-gray-950 whitespace-nowrap border-gray-300 px-6 py-4 font-['Nunito'] text-base font-semibold leading-tight">
                      {row.stt}
                    </td>
                    <td className="border-e text-gray-950 whitespace-nowrap border-gray-300 px-6 py-4 font-['Nunito'] text-base font-semibold leading-tight">
                      {row.totalAmount}Đ
                    </td>
                    <td className="flex items-center justify-center whitespace-nowrap px-6 py-4">
                      <Ellipse />
                      <span className="ml-1 flex justify-center">{row.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PaymentHistory;
