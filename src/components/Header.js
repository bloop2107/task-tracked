import Button from "./Button"

const Header = ({onShow,inputShow}) => {

    return (
        <header className="flex justify-between items-center">
            <h1 className="text-2xl">Task Tracker</h1>
            <Button text={inputShow.show ? 'Close' : 'Add'} inputShow={inputShow} onShow={onShow}/>
        </header>
    )
}
export default Header;