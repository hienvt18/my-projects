import './Footer.css'

const Footer = (props) => {
    const { isOpen,setIsOpen } = props
    return (
        <footer className="footer-title" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? 'x' : '+'}
        </footer>
    )
}

export default Footer