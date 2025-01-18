import React from 'react'
import AddingButton from '../../globalComponents/AddingButton'
import TotalCard from '../../globalComponents/TotalCard'
import userIcon from '../../assets/icons/User.png'
import TableCan from '../../globalComponents/table/TableCan'
import UserTable from './components/UserTable'

const UserManagement = () => {
  const HandleButton = () => {
    console.log('Button clicked')
  }
  const user_cardValues = [
    {
      icon: userIcon,
      iconBg: 'bg-[#126EB9]',
      heading: 'total',
      subheading: 'users',
      cardValue: '25,000',
    },
    {
      icon: userIcon,
      iconBg: 'bg-[#126EB9]',
      heading: 'online',
      subheading: 'users',
      cardValue: '12,000',
    },
    {
      icon: userIcon,
      iconBg: 'bg-[#126EB9]',
      heading: 'online',
      subheading: 'users',
      cardValue: '13,000',
    },
  ]
  return (
    <>
      <div className='flex items-center justify-between'>
        <h1 className='text-4xl'>Users</h1>
        <div>
          <AddingButton icon={"bi bi-plus-lg"} title={'add new user'} handlefunction={HandleButton} />
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 my-4'>
        {
          user_cardValues.map((item, index) => {
            return (
              <TotalCard
              key={index}
                icon={item.icon}
                iconBg={item.iconBg}
                heading={item.heading}
                subheading={item.subheading}
                cardValue={item.cardValue}
                cardUnit={item.cardUnit}
              />
            )
          })
        }
      </div>
      <div>
        <UserTable/>
      </div>
    </>
  )
}

export default UserManagement
