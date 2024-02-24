import PropTypes  from 'prop-types'

const UserLayout = ({children}) => {
    return (
        <div className = "container">
            <header>
                {/*Navbar*/}
            </header>
                <main>
                    {children}
                    <footer></footer>
                </main>
        </div>
    )
}

UserLayout.propTypes={
    childreb: PropTypes.node.isRequired
}
export default UserLayout