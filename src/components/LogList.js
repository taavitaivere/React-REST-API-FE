import {useEffect, useState} from "react";
import axios from "axios";


export default function LogList() {
    const [logs, setLogs] = useState([]);

    useEffect(() => {
        getLogs();
    }, [logs])


    function getLogs() {
        axios.get('http://localhost:3000/log')
            .then((response) => {
                setLogs(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <div>
            <h1>Logs</h1>
            <table className="table table-bordered table-striped">
                <thead className="">
                    <tr>
                        <th>Timestamp</th>
                        <th>URL</th>
                        <th>Method</th>
                        <th>Client ID</th>
                        <th>Changes</th>
                    </tr>
                </thead>
                <tbody>
                    {logs.map((log: any) => (
                        <tr key={log.id}>
                            <td>{log.timestamp}</td>
                            <td>{log.originalUrl}</td>
                            <td>{log.method}</td>
                            <td>{log.clientId}</td>
                            <td className="text-danger">{log.data}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
