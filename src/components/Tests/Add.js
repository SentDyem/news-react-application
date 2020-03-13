import React from "react";

class Add extends React.Component {
    state = {
        textAuthor: '',
        textValue: '',
        agree: 'false'
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

    onButtonClickHandler = (e) => {
        e.preventDefault();
        const {textAuthor, textValue} = this.state;
        alert(textAuthor + ' ' + textValue)
    };

    onChangeCheckBox = (e) => {
        this.setState(
            {
                agree: e.currentTarget.checked
            });
    };


    render()
    {
        const { textAuthor, textValue, agree } = this.state;
        return (
            <div>
                <form className='add'>
                    <input className="add__author input-group-text"
                           type="text"
                           placeholder="Автор статьи"
                           onChange={this.onChangeAuthor}
                           value={textAuthor}
                    />
                    <textarea className="add__text input-group-text"
                              name="text"
                              placeholder="Введите текст статьи: "
                              onChange={this.onChangeTextDescription}
                              value={textValue}
                    />


                    <input className="add__checkrule"
                           type="checkbox"
                           onChange = {this.onChangeCheckBox}
                    /> Я согласен с правилами

                    <button className="add__btn btn-sm"
                            onClick={this.onButtonClickHandler}
                            disabled={!agree}>
                        Отправить
                    </button>

                </form>
            </div>

        )
    }
}
export default Add