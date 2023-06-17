import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { getTokens } from '../../services/LocalStorage'

export default function AllReports() {
    const [reports, setReports] = useState([])
    useEffect(() => {
        getReports()
    }, [])
    const config = {
        headers: {
            token: getTokens()
        }
    }
    const getReports = () => {
        axios.get('http://localhost:3001/api/reports/reports', config)
            .then(res => setReports(res.data.reports))
    }

    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Report content</th>
                        <th scope="col">To user</th>
                    </tr>
                </thead>
                <tbody>
                    {reports.map((report) => (
                        <tr>
                            <th>{report.report_content}</th>
                            <th>{report.name}</th>
                        </tr>

                    ))}
                </tbody>
            </table>
        </div>
    )
}
