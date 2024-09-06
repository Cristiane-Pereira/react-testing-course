import { useEffect, useState } from "react";
import axios from "axios";

const Tags = () => {
    const [tags, setTags] = useState([]);
    console.log("tags", tags);

    useEffect(() => {
        console.log("useEffect");
        axios.get("https://localhost:3004/tags").then((responde) => {
            setTags(responde.data);
            console.log("response", responde.data)
        });
    }, [])

    return (
        <>
            {tags.map((tag) => (
                <div key={tag.id} data-testid="tag">
                    {tag.name}
                </div>
            ))}
        </>
    )
}

export default Tags;