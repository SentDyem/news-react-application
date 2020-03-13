import React from "react";

class Add extends React.Component {
    state = {
        textAuthor: '',
        textValue: ''
    };

    onChangeAuthor = (e) => {
        this.setState({
            textAuthor: e.target.value
        })
    };

    onChangeTextDescription = (e) =>
    {
        this.setState(
            {
                textValue: e.target.value
            })
    }

    onButtonClickHandler = () => {
        alert(
            this.state.textAuthor
            )
    };


    render()
    {
        return (
            <div>
                <form className='add'>
                    <input className="add__author input-group-text"
                           type="text"
                           placeholder="Автор статьи"
                           onChange={this.onChangeAuthor}
                           value={this.state.textAuthor}
                    />
                    <textarea className="add__text input-group-text"
                              name="text"
                              placeholder="Введите текст статьи: "
                              onChange={this.onChangeTextDescription}
                              value={this.state.textValue}
                    />


                    <input className="add__checkrule"
                           type="checkbox" /> Я согласен с правилами

                    <button className="add__btn btn-success btn-sm"
                            onClick={this.onButtonClickHandler}>Отправить</button>

                </form>
            </div>

        )
    }
}
export default Add