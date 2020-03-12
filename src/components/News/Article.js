import React from "react";

class Article extends React.Component {
    render() {
        const {author, text} = this.props.data;
        return (
            <div className="container-fluid">
                    <h3 className="author">{author}</h3>
                    <p className="text">{text}</p>
            </div>
        );
    }
}
export default Article;