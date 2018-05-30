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
    text_left: {
        flex: 1,
        textAlign: 'left',
        marginLeft: 5,
        marginRight: 15
    },
    text_center: {
        flex: 1,
        textAlign: 'center',
        marginLeft: 15,
        marginRight: 15
    },
    text_right: {
        flex: 1,
        textAlign: 'right',
        marginLeft: 15,
        marginRight: 5
    },
});

class Hr extends Component {
    constructor(props) {
        super(props);
        this.renderText = this.renderText.bind(this);
        this.renderLine = this.renderLine.bind(this);
        this.renderInner = this.renderInner.bind(this);
    }

    renderLine(key) 
    {
        return <View key={key} style={[styles.line, this.props.lineStyle]} />
    }
    _classText(){
        if(this.props.textAlign==="right"){
            return styles.text_right;
        }else if(this.props.textAlign==="left"){
            return styles.text_left;
        }else{
            return styles.text_center;
        }
    }
    renderText(key) {
        return (
            <View key={key} >
                <Text style={[this._classText(), this.props.textStyle]}>{this.props.text}</Text>
            </View>
        )
    }

    renderInner() {
        if (!this.props.text) {
            return this.renderLine()
        }
        if(this.props.textAlign==="right"){
            return [
                this.renderLine(1),
                this.renderLine(2),
                this.renderText(3)
            ]
        }else if(this.props.textAlign==="left"){
            return [
                this.renderText(1),
                this.renderLine(2),
                this.renderLine(3)
            ]
        }else{
            return [
                
                this.renderLine(1),
                this.renderText(2),
                this.renderLine(3)
            ]
        }
        
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
    textAlign: PropTypes.string,
    marginLeft: PropTypes.number,
    marginRight: PropTypes.number,
    textStyle: PropTypes.shape({})
};

Hr.defaultProps = {
    marginLeft: 5,
    marginRight: 5,
    textAlign: 'right'
};

export default Hr;
