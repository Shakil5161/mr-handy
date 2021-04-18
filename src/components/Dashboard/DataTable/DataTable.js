import React from 'react';

const DataTable = (props) => {
    const bookings = props.bookings
    return (
        <div className="" style={{ backgroundColor: "white", height: "100%" }}>
            <table className="table table-borderless">
                <thead>
                    <tr>
                        <th className="text-secondary text-left" scope="col">Sr No</th>
                        <th className="text-secondary" scope="col">Name</th>
                        <th className="text-secondary" scope="col">Email</th>
                        <th className="text-secondary" scope="col">Service</th>
                        <th className="text-secondary" scope="col">Pay With</th>
                        <th className="text-secondary" scope="col">Book-On</th>
                        <th className="text-secondary" scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        bookings.map((booking, index) =>
                            <tr>
                                <td className="text-info">{index + 1}</td>
                                <td>{booking.name}</td>
                                <td>{booking.email}</td>
                                <td>{booking.serviceName}</td>
                                <td>Visa</td>
                                <td>{booking.bookOn}</td>
                                <td><select class="custom-select" id="inlineFormCustomSelect">
                                    <option className="text-info" selected>Pending</option>
                                    <option value="1">Process</option>
                                    <option value="2">Done</option>
                                </select></td>
                            </tr>
                        )
                    }

                </tbody>
            </table>
        </div>
    );
};

export default DataTable;