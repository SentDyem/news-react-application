import React from "react";

class News extends React.Component {
    render() {
        const newsTemplate = this.props.data.map(function(item)
        {
            return (
                <div key = {item.id}>
                    <h3 className="author">{item.author}</h3>
                    <p className="text">{item.text}</p>
                </div>
            )
        })
        console.log(newsTemplate);
        return (
            <div>
                {newsTemplate}
            </div>

        )
    }
}
export default News