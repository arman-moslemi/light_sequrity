import React from "react";

import Bullet from "../assets/icon/verticalBullet";
const ObjectTable = () => {
    const tableRow = [
        {
            id: '1',
            number: '#1605',
            title: 'Tirajhe Complex',
            address: 'Ashrafi St,Laleh Blv,No 125',
            registerDate: '2023/05/05',
            status: 'active',
            telephone: '+98997853255',
            assigner: <button disabled="true">
                Alica alane
            </button>,
            lastUpdate:'2023/05/02',
            action: <button>
                    <Bullet/>
                </button>

        }

    ]
    const tableBody = tableRow.map((tableRow) => <tr key={tableRow.id} className="border-b border-b-borderGray">
        <td className="py-4 text-sm text-left pr-4   px-4">{tableRow.number}</td>
        <td className="py-4 text-sm text-left   px-4">

            {tableRow.title}

        </td>
        <td className="py-4 text-sm text-left px-4  ">{tableRow.address}</td>
        <td className="py-4 text-sm text-left px-4  ">{tableRow.registerDate}</td>
        <td className="py-4 text-sm text-left px-4  ">{tableRow.status}</td>
        <td className="py-4 text-sm text-left px-4  ">{tableRow.telephone}</td>
        <td className="py-4 text-sm text-left px-4  ">{tableRow.assigner}</td>
        <td className="py-4 text-sm text-left px-4  ">{tableRow.lastUpdate}</td>
        <td className="py-4 text-sm text-left px-4  ">{tableRow.action}</td>
    </tr>)
    return (
        <div className="">

            <div className="  w-full overflow-x-auto whitespace-nowrap ">
                <table class="table-auto w-full  ">
                    <thead
                        className="bg-hoverBackground h-14 rounded-t-2xl w-full whitespace-nowrap overflow-x-scroll"
                        style={{
                        borderRadius: '20px'
                    }}>
                        <tr
                            className="text-black  p-6 whitespace-nowrap overflow-x-scroll"
                            style={{
                            borderRadius: '20px'
                        }}>
                            <th className="text-black  text-left pl-4   md:px-4">Number</th>
                            <th className="text-black  text-left   md:px-4">Title</th>
                            <th className="text-black  text-left   md:px-4">Address</th>
                            <th className="text-black  text-left  md:px-4">Register date</th>
                            <th className="text-black  text-left  md:px-4">Status</th>
                            <th className="text-black  text-left   md:px-4">Telephone</th>
                            <th className="text-black  text-left  md:px-4">Assigner</th>
                            <th className="text-black  text-left  md:px-4">Last Update Date</th>
                            <th className="text-black  text-left  md:px-4">
                                Action
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        {tableBody}

                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default ObjectTable;