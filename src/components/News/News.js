import React from "react";

class News extends React.Component {
    render() {
        const { data } = this.props;
        let newsTemplate;

        if (data.length > 0) {
            newsTemplate = data.map(function (item) {
                return (
                    <div key={item.id}>
                        <h3 className="author">{item.author}</h3>
                        <p className="text">{item.text}</p>
                    </div>
                )
            });
        }

        else
        {
            newsTemplate = <p>К сожалению новостей нет.</p>
        }

        console.log(newsTemplate);

        return (
            <div>
                {newsTemplate}
                <strong> Количество новостей - {data.length} </strong>
            </div>

        )
    }
}
export default News