import React from "react";
import './News.css';
import Article from "./Article";

class News extends React.Component {

    renderNews = () =>
    {
        const { data } = this.props;
        let newsTemplate = null;

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
        return newsTemplate;
    };
    render() {
        const { data } = this.props;

        return (
            <div>
                {this.renderNews()}
                {
                    data.length ? <strong>Всего новостей - {data.length}</strong> : null
                }
            </div>

        )
    }
}
export default News