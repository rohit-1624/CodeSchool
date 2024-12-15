import { Link } from 'react-router-dom';
import './Nav.css'

const Navbar = () => {
    const menus = [
        {
            label: 'Home',
            href: '/'
        },
        {
            label: 'Teachers',
            href: '/teachers'
        },
        {
            label: 'Holidays',
            href: '/holidays'
        },
        {
            label: 'Contact-us',
            href: '/contact-us'
        }
    ]
    return (
        <nav 
        className='sticky top-0 left-0 z-50'
        style={{
            display: 'flex',
            background: 'white',
            justifyContent: 'space-between',
            padding: '0 48px',
            boxShadow: '0 8px 8px 0 rgba(0,0,0,0.1)'
        }}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
            }}>
                <img
                    src="./images/college-logo.jpg"
                    width="60"
                />
                <h1 className='text-2xl font-bold'>Codeschool</h1>
            </div>

            <ul style={{
                listStyle: 'none',
                padding: '0',
                margin: '0',
                display: 'flex'
            }}>
                {
                    menus.map (function(menu, index) {
                        return (
                        <li key={index}
                         style={{
                            display: 'flex',
                            alignItems: 'center',
                            padding: '16px 24px'
                        }}>
                            <Link to={menu.href} style={{
                                textDecoration: 'none',
                                color: '#323232',
                                fontSize: 17
                            }}>{menu.label}</Link>
                        </li>
                        )
                    })
                }

                
            </ul>
        </nav>
    )
}

export default Navbar;
