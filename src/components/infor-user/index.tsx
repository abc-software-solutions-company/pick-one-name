import {useState} from 'react';
import {useSession} from 'next-auth/react';
import {Avatar, Box, Tab, Tabs} from '@mui/material';

import InforForm from './infor-form';
import PaymentHistory from './payment-history';

const InforUser = () => {
  const {data: session} = useSession();
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <div className="flex flex-col justify-between">
      <div
        className="h-[159px] justify-center bg-cover bg-no-repeat md:h-[350px] xl:h-96"
        style={{backgroundImage: 'url("/images/cover-image.jpg")'}}
      ></div>

      <div className="z-50 -mt-9 flex flex-col items-center gap-8 md:-mt-20 xl:-mt-28">
        <div className="flex flex-col items-center">
          <Avatar
            src={session?.user.avatar}
            className="h-16 w-16 rounded-full border-2 border-blue-500 md:h-[140px] md:w-[140px] xl:h-[201px] xl:w-[201px]"
          />
          <div className="mt-2 font-nunito text-lg font-bold md:mt-3 md:text-[32px] xl:mt-8 xl:text-4xl">
            {session?.user.name}
          </div>
          <div className="font-nunito text-xs md:text-base md:font-normal xl:text-base xl:font-bold">
            {session?.user.email}
          </div>
        </div>

        <div className="flex h-full w-full">
          <Box sx={{width: '100%', height: '543px'}}>
            <Tabs value={activeTab} onChange={handleTabChange} variant="fullWidth" className="flex w-full items-start">
              <Tab
                label="Tài khoản"
                className="text-gray-950 flex items-start justify-start text-sm font-semibold md:text-sm xl:text-lg"
                sx={{textTransform: 'none'}}
              />
              <Tab
                label="Lịch sử giao dịch"
                className="text-gray-950 items-start text-sm font-semibold md:text-sm xl:text-lg"
                sx={{textTransform: 'none'}}
              />
            </Tabs>
            {activeTab === 0 && (
              <Box p={3}>
                <InforForm />
              </Box>
            )}
            {activeTab === 1 && (
              <Box>
                <PaymentHistory />
              </Box>
            )}
          </Box>
        </div>
      </div>
    </div>
  );
};

export default InforUser;
