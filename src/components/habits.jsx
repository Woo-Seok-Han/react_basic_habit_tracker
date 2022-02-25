import React, { PureComponent } from 'react';
import AddForm from './habitAddForm';
import Habit from './habit.jsx';
import Reset from './reset.jsx';

export default class Habits extends PureComponent {

    render() { 
        return ( 
            <div>
                <AddForm onAdd={this.props.onAdd}/>
                <ul>
                    {this.props.habits.map(habit => (
                        <Habit
                            key={habit.id}
                            habit={habit}
                            onIncrement={this.props.onIncrement}
                            onDecrement={this.props.onDecrement}
                            onDelete={this.props.onDelete}
                        />
                    ))}
                </ul>
                <Reset onReset={this.props.onReset}/>
            </div>
        )
    }
}
