export const PostHeader = (props) => (
    <div className="post-header">
    <h1>
        {props.title}
    </h1>
    <span>
        {props.author}
    </span>
    </div>
);