import React from 'react';

const PatientApt = ({ appointments }) => {
    const getStatusClass = (status) => {
        switch (status) {
            case 'Accepted':
                return 'text-green-600';
            case 'Rejected':
                return 'text-red-600';
            case 'Pending':
                return 'text-yellow-600';
            default:
                return '';
        }
    };

    return (
        <div>
            <div className="relative min-h-screen  overflow-auto bg-white bg-opacity-70">
                <p className="text-xl font-semibold mb-10 ">Your Appointments</p>
                
                <table className="w-full text-sm text-left rtl:text-right">
                    <thead className="text-xs uppercase">
                        <tr>
                            <th scope="col" className="px-2  md:px-6 py-3 rounded-s-lg">
                                Appointment Date
                            </th>
                            <th scope="col" className="px-2 md:px-6 py-3">
                                Doctor
                            </th>
                            <th scope="col" className="px-2 md:px-6 py-3">
                                Department
                            </th>
                            <th scope="col" className="px-2 md:px-6 py-3 rounded-e-lg">
                                Status
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointments.map((e) => (
                            <tr className="transition duration-300" key={e._id}>
                                <td className="px-2 md:px-6 font-semibold py-4">{e.appointment_date}</td>
                                <td className="px-2 md:px-6 py-4  md:text-xl">{`${e.doctor.firstName} ${e.doctor.lastName}`}</td>
                                <td className="px-2 md:px-6 py-4 md:text-xl">{e.department}</td>
                                <td className={`px-6 py-4 md:text-xl ${getStatusClass(e.status)}`} >{e.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default PatientApt;
