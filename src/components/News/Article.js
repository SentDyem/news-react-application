import React from "react";

class Article extends React.Component {
    state = {
        visible: false
    };

    handleClick = (e) => {
        e.preventDefault()
        this.setState({visible: true})
    };

    render() {
        const {author, text, bigText} = this.props.data;
        const { visible } = this.state;
        console.log('render', this)
        return (
            <div className="article">
                <li>
                    <ul>
                        <h3 className="author">{author}</h3>
                        <p className="text">{text}</p>
                        {
                            !visible && <a href="#" onClick={this.handleClick}>Подробнее</a>
                        }
                        {
                            visible && <p className="bigText">{bigText}</p>


                        }
                    </ul>
                </li>
            </div>
        );
    }
}
export default Article;