import { propTypes } from 'prop-types'

const AdminLayout = ({children}) =>{
    return(
<div className="admin_container">
    <aside>
        {/*sidenav*/}
    </aside>
    <main>
        {children}
    </main>
    <footer>
    </footer>
</div>
    )
}
AdminLayout.propTypes = {
    children: propTypes.rounded.isRequired
}
export default AdminLayout