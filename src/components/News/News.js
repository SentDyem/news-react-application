import React from "react";
import './News.css';
import Article from "./Article";
import myNews from "./Data/myNews";

class News extends React.Component {
    render() {
        const { data } = this.props;
        let newsTemplate;

        if (data.length > 0) {
            newsTemplate = data.map(function (item) {
                return (
                    <Article key = {item.id} data = {item}/>
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
                {
                    data.length ? <strong>Всего новостей - {data.length}</strong> : null
                }
            </div>

        )
    }
}
export default News