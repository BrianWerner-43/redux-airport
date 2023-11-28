import { useSelector } from 'react-redux';

function AirlineTable() {

const ourAirlines = useSelector((store) => store.airlines)


    return (
        <table>
            <tr>
                <th>
                    Airlines
                </th>
            </tr>
            {ourAirlines.map((index) => {
            return <tr><td>{index}</td></tr>
          })}</table>
    )

}


export default AirlineTable;