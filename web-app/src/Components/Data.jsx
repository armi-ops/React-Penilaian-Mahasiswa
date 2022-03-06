export default function Data(props) {
    
    function onChange(e) {
        // console.log(props.index)
        // console.log(e)
        props.onChange(props.index, e.target.id, e.target.value)
    }

    return (
        <td>
            <select id={props.id} onChange={onChange} className="form-select" aria-label="Default select example">
                {
                    props.result.map(index => (
                        <option key={index} value={index}>{index}</option>
                    ))
                }
            </select>
        </td>
    )
}