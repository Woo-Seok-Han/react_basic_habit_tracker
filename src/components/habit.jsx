import React, { PureComponent } from 'react'

export default class Habit extends PureComponent {
    componentDidMount(){
        console.log(`habit : ${this.props.habit.name} mounted`);
    }

    componentWillUnmount(){
        console.log(`habit : ${this.props.habit.name} will unmount`);
    }

    handleIncrement = (habit) => {
        this.props.onIncrement(this.props.habit);
    }

    handleDecrement = (habit) => {
        this.props.onDecrement(this.props.habit);
    }

    handleDelete = (habit) => {
        this.props.onDelete(this.props.habit);
    }

    render() {
        console.log(this.props); 
        //   const { name, count } = this.props.habit;
        const { habit, onIncrement, onDecrement, onDelete } = this.props;
        return (
            <li className='habit'> 
                <span className='habit-name'>{habit.name}</span>
                <span className='habit-count'>{habit.count}</span>
                <button className='habit-button habit-increase' onClick={this.handleIncrement}>
                    <i className='fas fa-plus-square'></i>
                </button>
                <button className='habit-button habit-decrease' onClick={this.handleDecrement}>
                    <i className='fas fa-minus-square'></i>
                </button>
                <button className='habit-button habit-delete' 
                onClick={this.handleDelete}>
                    <i className='fas fa-trash'></i>
                </button>
            </li>
        );
    }
}
