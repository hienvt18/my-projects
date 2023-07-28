import '../Edit/Edit.css'
import '../Posts/Post.css'

const Input = (props) => {
    const { data, setData, label, inputType, classStyle} = props
    return (
        <>
            <label>{label}</label>
            {inputType === "textarea" ? 
            (<textarea className={classStyle} placeholder={data}  onChange={(e) => setData(e.target.value)}/>) 
            : (<input type="text" placeholder={data} onChange={(e) => setData(e.target.value)} />)}
            
        </>
    )
}

export default Input