$.noConflict();
import React, { Component } from 'react';
import SortableTree from 'react-sortable-tree';

export default class Tree extends Component {
    constructor(props) {
        super(props);

        this.state = {
            treeData: [{ title: 'Chicken', children: [ { title: 'Egg' } ] }],
        };
    }

    render(document.getElementById('.app')) {
        return (
            <div style={{ height: 400 }}>
                <SortableTree
                    treeData={this.state.treeData}
                    onChange={treeData => this.setState({ treeData })}
                />
            </div>
        );
    }

}
