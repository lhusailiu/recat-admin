import React, {Component} from 'react';
import './footer.less'


class  Footer extends React.Component {
    constructor (props) {
        super(props)
    }
    render () {
        return(
            <div className="my_footer">
               <p>@2018</p>
            </div>
        )
    }
}
export default Footer