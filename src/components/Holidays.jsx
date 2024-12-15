import Nav from './Nav'
import Footer from './Footer'

const Holidays = () => {
    const holidays = [
        {
            title: 'Summer Vacation 2025',
            duration: '1 Months',
            date: '01-01-2025'
        },
        {
            title: 'Summer Vacation 2025',
            duration: '1 Months',
            date: '02-04-2025'
        },
        {
            title: 'Summer Vacation 2025',
            duration: '1 Months',
            date: '03-06-2025'
        },
        {
            title: 'Summer Vacation 2025',
            duration: '1 Months',
            date: '04-11-2025'
        }
    ]

    return (
        <div>
            <Nav />
            <div style={{
                width: '60%',
                margin: '0 auto',
                padding: '64px 0'
            }}>
                <h1 style={{
                    textAlign: 'center'
                }}>Your Holidays</h1>

                <table width="100%">
                    <thead>
                        <tr style={{
                            background: '#ddd'
                        }}>
                            <th style={{ padding: 14 }}>S/No</th>
                            <th>Title</th>
                            <th>Duration</th>
                            <th>Date</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            holidays.map((item, index) => (
                                <tr key={index} style={{
                                    textAlign: 'center'
                                }}>
                                    <td style={{ padding: 14, borderBottom: '1px solid #ddd' }}>{index+1}</td>
                                    <td style={{ padding: 14, borderBottom: '1px solid #ddd' }}>{item.title}</td>
                                    <td style={{ padding: 14, borderBottom: '1px solid #ddd' }}>{item.duration}</td>
                                    <td style={{ padding: 14, borderBottom: '1px solid #ddd' }}>{item.date}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <Footer />
        </div>
    )
}

export default Holidays