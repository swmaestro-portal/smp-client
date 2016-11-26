/* External Dependencies */
import React from 'react'
import { connect } from 'react-redux'
import Autocomplete from 'react-autocomplete'

/* */
import styles from './SearchUserContainer.scss'
import { userActions } from '../../actions'
import User from '../../components/User'
import { SearchAPI } from '../../apis'

class SearchUserContainer extends React.Component {

  constructor() {
    super()
    this.request = this.request.bind(this)
    this.selectedUserId = ''
  }

  request(value, cb) {
    SearchAPI.requestGetUser(value)
      .then(function(items) {
        items.filter((state) => {
          return matchStateToTerm(state, value)
        })
        setTimeout(() => {
          cb(items)
        }, 500)
  
      })
  }

  getSelectedUserId() {
    return this.selectedUserId;
  }

  componentWillMount() {
    this.state={}
    this.state.value=""
    this.state.users=[]
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <Autocomplete
            inputProps={{name: "US state", id: "states-autocomplete"}}
            value={this.state.value}
            items={this.state.users}
            getItemValue={(item) => item.userName}
            onSelect={
              (value, item) => {
                this.selectedUserId = item.userId
                this.setState({ value, users: [ item ] })
            }}
            onChange={(event, value) => {
              this.setState({ value, loading: true })
              this.request(value, (items) => {
                this.setState({ users: items, loading: false })
              })
            }}
            renderItem={function(item, isHighlighted){
              return (
                  <div
                      className={isHighlighted ? styles.highlightedItem : styles.item}
                      key={item.userId}
                      id={"user_"+item.userName}
                  >{item.userName}</div>
              )
            }}
        />
      </div>
    )
  }

}

export default SearchUserContainer
