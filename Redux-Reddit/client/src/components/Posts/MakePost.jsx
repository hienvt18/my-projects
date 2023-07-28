import { useState } from "react"
import { useDispatch } from 'react-redux'
import { createPost } from "../../redux/postSlice"
import Input from "../InputFields/Input"
import './Post.css'

const MakePost = (props) => {
    const {setIsOpen} = props
    const {title, setTitle} = useState("Add a title")
    const {description, setDescription} = useState("Add some descriptions")
    const {selectedIdx, setSelectedIdx} = useState(0)
    const tags = ["None","NSFW","Mood","Quotes","Shitpost"]

    const dispatch = useDispatch()

    const handlePost =() => {
        setIsOpen(false)
        const newPost = {
            title: title,
            description:description,
            tags: selectedIdx
        }
        
        dispatch(createPost(newPost))
    }

    return (
        <section className="makepost-container">
            <div className="makepost-navigation">
                <p className="makepost-save" onClick={handlePost}>Post</p>
            </div>
            
            <Input inputType="textarea" classStyle="makepost-title" label="Title" data={title} setData={setTitle} />
            <Input data={description} inputType="textarea" setData={setDescription} label="Descriptions" classStyle="makepost-desc"/>

            <label>Tags</label>
            <div className="makepost-tags">
                {tags.map((tag, index) => (
                    <button 
                        key={index}
                        className={`${
                            selectedIdx === index
                            ? `makepost-tags-selected`
                            : `makepost-tags-${tag}`
                        }`}
                        onClick={() => setSelectedIdx(index)}
                        >
                        {tag}
                    </button>
                ))}
            </div>
        </section>
    )
}

export default MakePost