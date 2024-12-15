const Footer = () => {
    return (
        <footer style={{
            padding: '60px 100px',
            background: '#03011c',
            display: 'flex',
            gap: 48
        }}>
            <div style={{ width: '100%' }}>
                <h2 style={{
                    color: '#f5f5f5',
                    fontWeight: '500'
                }}>Codeschool</h2>
                <p style={{ color: 'white' }}>CodeSchool is an innovative platform dedicated to empowering learners to build and enhance their coding skills. With a diverse range of courses, interactive projects, and hands-on challenges, it caters to both beginners and experienced developers.</p>
            </div>

            <div style={{ width: '100%' }}>
                <h2 style={{
                    color: '#f5f5f5',
                    fontWeight: '500'
                }}>Useful links</h2>
                <ul style={{
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 12
                }}>
                    <li>
                        <a href="#" style={{
                            color: 'white',
                            textDecoration: 'none'
                        }}>Home</a>
                    </li>

                    <li>
                        <a href="#" style={{
                            color: 'white',
                            textDecoration: 'none'
                        }}>Teachers</a>
                    </li>

                    <li>
                        <a href="#" style={{
                            color: 'white',
                            textDecoration: 'none'
                        }}>Holidays</a>
                    </li>

                    <li>
                        <a href="#" style={{
                            color: 'white',
                            textDecoration: 'none'
                        }}>Contact</a>
                    </li>

                    <li>
                        <a href="#" style={{
                            color: 'white',
                            textDecoration: 'none'
                        }}>Talk to us</a>
                    </li>
                </ul>
            </div>

            <div style={{ width: '100%' }}>
                <h2 style={{
                    color: '#f5f5f5',
                    fontWeight: '500'
                }}>Social links</h2>
                <ul style={{
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 12
                }}>
                    <li>
                        <a href="#" style={{
                            color: 'white',
                            textDecoration: 'none'
                        }}>
                            <i className="ri-youtube-fill" style={{ marginRight: 4 }}></i>
                            YouTube
                        </a>
                    </li>

                    <li>
                        <a href="#" style={{
                            color: 'white',
                            textDecoration: 'none'
                        }}>
                            <i className="ri-facebook-circle-fill" style={{ marginRight: 4 }}></i>
                            Facebook
                        </a>
                    </li>

                    <li>
                        <a href="#" style={{
                            color: 'white',
                            textDecoration: 'none'
                        }}>
                            <i className="ri-instagram-fill" style={{ marginRight: 4 }}></i>
                            Instagram
                        </a>
                    </li>

                    <li>
                        <a href="#" style={{
                            color: 'white',
                            textDecoration: 'none'
                        }}>
                            <i className="ri-linkedin-box-fill" style={{ marginRight: 4 }}></i>
                            LinkedIn
                        </a>
                    </li>

                    <li>
                        <a href="#" style={{
                            color: 'white',
                            textDecoration: 'none'
                        }}>
                            <i className="ri-twitter-x-fill" style={{ marginRight: 4 }}></i>
                            Twitter
                        </a>
                    </li>
                </ul>
            </div>

            <div style={{ width: '100%' }}>
                <h2 style={{
                    color: '#f5f5f5',
                    fontWeight: '500'
                }}>Enquiry</h2>

                <form action="" style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 18
                }}>
                    <input
                        name="fullname"
                        placeholder="Fullname"
                        required
                        style={{
                            border: 'none',
                            padding: 12,
                            borderRadius: 4
                        }} />

                    <input
                        name="email"
                        placeholder="example@mail.com"
                        type="email"
                        required
                        style={{
                            border: 'none',
                            padding: 12,
                            borderRadius: 4
                        }} />

                    <textarea
                        name="message"
                        placeholder="Message to us"
                        required
                        style={{
                            border: 'none',
                            padding: 12,
                            borderRadius: 4
                        }} />

                    <button style={{
                        width: 'fit-content',
                        border: 'none',
                        padding: '12px 24px',
                        background: 'green',
                        color: 'white',
                        borderRadius: 4
                    }}>Submit</button>
                </form>
            </div>
        </footer>
    );
}

export default Footer;
