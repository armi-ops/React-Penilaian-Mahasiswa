import React from "react";
import { CgProfile } from "react-icons/cg";
import Data from "./Data";

export default function TableList(props) {
    const listMahasiswa = props.listMahasiswa
    const result = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    ]
    const aspect = [
        0, 1, 2, 3
    ]

    // console.log(listMahasiswa)

    function onChange(index, id, value) {
        // console.log("mahasiswa" + index)
        // console.log("aspek" + id)
        // console.log("nilai" + value)
        props.changeData(index, id, value)
    }

    return (
        <React.Fragment>
            {
                listMahasiswa.map((mahasiswa, index) => (
                    <tr key={index}>
                        <th><CgProfile style={{
                            color: "#98B4AA",
                            marginBottom: 3,
                            fontSize: 16,
                            borderRadius: 50,
                        }} /> Mahasiswa {index + 1}</th>

                        {
                            aspect.map(aspectIndex => (
                                <Data id={aspectIndex} key={aspectIndex}  onChange={onChange} result={result} index={index}/>
                            ))
                        }

                        {/* <td>
                            <select id={0} onChange={onChange} className="form-select" aria-label="Default select example">
                                {
                                    result.map(index => (
                                        <option key={index} value={index}>{index}</option>
                                    ))
                                }
                            </select>
                        </td>
                        <td>
                            <select id={1} onChange={onChange} className="form-select" aria-label="Default select example">
                                {
                                    result.map(index => (
                                        <option key={index} value={index}>{index}</option>
                                    ))
                                }
                            </select>
                        </td>
                        <td>
                            <select id={2} onChange={onChange} className="form-select" aria-label="Default select example">
                                {
                                    result.map(index => (
                                        <option key={index} value={index}>{index}</option>
                                    ))
                                }
                            </select>
                        </td>
                        <td>
                            <select id={3} onChange={onChange} className="form-select" aria-label="Default select example">
                                {
                                    result.map(index => (
                                        <option key={index} value={index}>{index}</option>
                                    ))
                                }
                            </select>
                        </td> */}
                    </tr>
                ))
            }
        </React.Fragment>
    )
}