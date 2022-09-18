import { Link } from "react-router-dom";
import blogMetadata from "../blog-metadata.json";

export const Sidebar = () => {
    return (
        <div className="index-wrapper">
            <h1 className="title">Content</h1>
            {blogMetadata.length && 
                blogMetadata.map((metadata, index) => {
                    return (
                        <li key={index}>
                            <Link className="links" to={`/post/${metadata.id}`}>{metadata.title}</Link>
                        </li>
                    )
                })
            }
        </div>
    )
};