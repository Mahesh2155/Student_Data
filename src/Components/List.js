import React from "react";

function List(props) {
    const { list } = props;
    return (
        <table>
            <thead>
                <tr>
                    <th>RollNumber</th>
                    <th>Name</th>
                    <th>Class</th>
                    <th>Age</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
                {list.length > 0 ? (
                    list.map((item) => (
                        <tr key={item.RollNumber}>
                            <td> {item.RollNumber}</td>
                            <td> {item.Name}</td>
                            <td> {item.Class}</td>
                            <td> {item.Age}</td>
                            <td> {item.Address}</td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="100%" style={{ textAlign: "center" }}>
                            No Student Found{" "}
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}
export default List;
