import React from 'react'
import { connect } from 'react-redux'

/**/
import LeftBar from '../LeftBar'

class Home extends React.Component {
  
  render () {
    console.log(1, this.props.reduxState)
    return (
      <div>
        <LeftBar/>
        {this.props.children}
      </div>
    )
  }
}

const mapStateToProps = (state/*, props*/) => {
  return {
    reduxState: state
  }
}

const ConnectedHome = connect(mapStateToProps)(Home)

export default ConnectedHome

