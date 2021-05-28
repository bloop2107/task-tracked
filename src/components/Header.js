import Button from "./Button"
import { useLocation } from 'react-router-dom';

const Header = ({onShow,inputShow}) => {

    const location = useLocation()
    return (
        <header className="flex justify-between items-center">
            <h1 className="text-2xl">Task Tracker</h1>
            {location.pathname === '/' && (
                <Button text={inputShow.show ? 'Close' : 'Add'} inputShow={inputShow} onShow={onShow}/>
            )}
        </header>
    )
}
export default Header;