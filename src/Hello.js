import './Hello.css'

const Hello = ({name="dummy", age="1000", salary="300000"}) => {
    return(<>
        <h5>Hello {name} {age} {salary}!</h5><br/>
        </>);

}
export default Hello;