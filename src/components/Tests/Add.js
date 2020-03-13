import React from "react";

class Add extends React.Component {
    state = {
        myValue: ''
    };
    onChangeHandler = (e) => {
        this.setState({myValue: e.target.value})
    };

    onButtonClickHandler = () => {
        alert(this.state.myValue)
    };


    render()
    {
        return (
            <div>
                <form className='add'>
                    <input className="test-input"
                           placeholder = 'Введите значение'
                           onChange = {this.onChangeHandler}
                           value = {this.state.myValue}
                    />
                    <input type="text" placeholder="Автор статьи"/>
                    <textarea name="text" placeholder="Введите текст статьи: "></textarea>
                    <input type="checkbox" /> Я согласен с правилами
                    <button className="btn-success btn-sm" onClick={this.onButtonClickHandler}>Получить введенный текст</button>
                </form>
            </div>

        )
    }
}
export default Add