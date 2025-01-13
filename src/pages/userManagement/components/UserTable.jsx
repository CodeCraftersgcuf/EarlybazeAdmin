import React from 'react'
import TableCan from '../../../globalComponents/table/TableCan'
import Filter from '../../../globalComponents/Filter'
import { users_table } from '../../../dummyData/Data'
import UserRow from './UserRow'

const UserTable = () => {
    const [usersData, setusersData] = React.useState(users_table)
    console.log(usersData,'The data')
    const filterData = (status) => {
        console.log(status)
        let filterdata = users_table.filter(item => item.status === status);
        // if the filterdata is empty 
        if (filterdata.length === 0) {
            setusersData(users_table);
            console.log(usersData)
        }else {
            setusersData(filterdata);
        }
    };

    const tabs = ['all', 'online', 'offline'];

    const user_headerTr = [
        'Name',
        'Email',
        'Phone',
        'Status',
        'Action',
        'More'
    ]
    return (
        <>
            <div className='mt-[100px] mb-8'>
                <Filter tabs={tabs} handleValue={filterData} />
            </div>
            <div>
                <TableCan
                    // th in first tr
                    headerTr={user_headerTr}
                    // td data display
                    dataTr={usersData}

                // name of tr using 
                TrName={UserRow}
                />
            </div>
        </>
    )
}

export default UserTable
