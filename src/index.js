import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {
    StyleSheet,
    Text,
    View,
    TextInput
} from 'react-native';

const styles = StyleSheet.create({
    line: {
        flex: 1,
        height: 1,
        backgroundColor: 'black'
    },
    text: {
        flex: 1,
        textAlign: 'center',
        marginLeft: 15,
        marginRight: 15
    }
});

class Hr extends Component {
    constructor(props) {
        super(props);

        this.renderLine = this.renderLine.bind(this);
        this.renderText = this.renderText.bind(this);
        this.renderInner = this.renderInner.bind(this);
    }

    renderLine(key) {
        return <View key={key} style={[styles.line, this.props.lineStyle]} />
    }

    renderText(key) {
        return (
            <View key={key} >
                <Text style={[styles.text, this.props.textStyle]}>{this.props.text}</Text>
            </View>
        )
    }

    renderInner() {
        if (!this.props.text) {
            return this.renderLine()
        }
        return [
            this.renderLine(1),
            this.renderText(2),
            this.renderLine(3)
        ]
    }

    render() {

        return (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: this.props.marginLeft, marginRight: this.props.marginRight }}>
                {this.renderInner()}
            </View>
        )
    }
}

Hr.propTypes = {
    lineStyle: PropTypes.shape({}),
    text: PropTypes.string,
    marginLeft: PropTypes.number,
    marginRight: PropTypes.number,
    textStyle: PropTypes.shape({})
};

Hr.defaultProps = {
    marginLeft: 8,
    marginRight: 8
};

export default Hr;
