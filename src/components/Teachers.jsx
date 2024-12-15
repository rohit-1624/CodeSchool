import Nav from './Nav'
import Footer from './Footer'

const teachers = [
    {
        image: './teachers/a.jpg',
        name: 'Rahul Singh',
        qua: 'MCA (Indian University)'
    },
    {
        image: './teachers/b.jpg',
        name: 'Anita Sharma',
        qua: 'BCA (Indian University)'
    },
    {
        image: './teachers/c.jpg',
        name: 'Priya Gupta',
        qua: 'B.Tech (Indian University)'
    },
    {
        image: './teachers/d.jpg',
        name: 'Vikram Patel',
        qua: 'MCA (Indian University)'
    },
    {
        image: './teachers/e.jpg',
        name: 'Sunita Mehta',
        qua: 'MCA (Indian University)'
    },
    {
        image: './teachers/f.jpg',
        name: 'Ravi Kumar',
        qua: 'BCA (Indian University)'
    },
    {
        image: './teachers/g.jpg',
        name: 'Amit Joshi',
        qua: 'B.Tech (Indian University)'
    },
    {
        image: './teachers/h.jpg',
        name: 'Kavita Rao',
        qua: 'MCA (Indian University)'
    },
    {
        image: './teachers/i.jpg',
        name: 'Suresh Yadav',
        qua: 'MCA (Indian University)'
    },
    {
        image: './teachers/j.jpg',
        name: 'Manan Desai',
        qua: 'BCA (Indian University)'
    },
    {
        image: './teachers/k.jpg',
        name: 'Rashmi Sharma',
        qua: 'B.Tech (Indian University)'
    },
    {
        image: './teachers/l.jpg',
        name: 'Meena Rani',
        qua: 'MCA (Indian University)'
    }
]

const TeachersComponent = () => {
    return (
        <div>
            <Nav />
            <div>
                <header style={{
                    height: 280,
                    backgroundImage: 'radial-gradient( circle farthest-corner at 10% 20%,  rgba(100,43,115,1) 0%, rgba(4,0,4,1) 90% )',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <h1 style={{
                        fontSize: 60,
                        color: 'white'
                    }}>
                        <i className="ri-presentation-fill"></i>
                        Teachers
                    </h1>
                </header>

                <section style={{
                    width: '80%',
                    margin: '0 auto',
                    padding: '80px 0',
                    display: 'flex',
                    columnGap: '1%',
                    rowGap: 48,
                    flexWrap: 'wrap'
                }}>
                    {
                        teachers.map(function (teacher, index) {
                            return (
                                <div style={{ width: '24%'}} key={index}>
                                    <img src={teacher.image} width="100%" />
                                    <h2 style={{ padding: 0, marginBottom: 4 }}>{teacher.name}</h2>
                                    <p style={{ padding: 0, margin: 0, color: 'gray' }}>{teacher.qua}</p>
                                </div>
                            )
                        })
                    }
                </section>
            </div>
            <Footer />
        </div>
    )
}

export default TeachersComponent
