/* External Dependencies */
import React from 'react'
import { connect } from 'react-redux'
import Autocomplete from 'react-autocomplete'

/* */
import styles from './SearchUserContainer.scss'
import { userActions } from '../../actions'
import User from '../../components/User'
import { getStates, matchStateToTerm, sortStates, styless, fakeRequest } from './Utils'

class SearchUserContainer extends React.Component {

  constructor() {
    super()
    this.request = this.request.bind(this)
  }

  request(value, cb) {
    if (value === '')
      return getStates()
    var items = getStates().filter((state) => {
      return matchStateToTerm(state, value)
    })
    setTimeout(() => {
      cb(items)
    }, 500)
  }

  componentWillMount() {
    this.state={}
    this.state.value=""
    this.state.unitedStates=[
      { abbr: "AL", name: "Alabama"},
      { abbr: "AK", name: "Alaska"},
      { abbr: "AZ", name: "Arizona"},
      { abbr: "AR", name: "Arkansas"},
      { abbr: "CA", name: "California"},
      { abbr: "CO", name: "Colorado"},
      { abbr: "CT", name: "Connecticut"},
      { abbr: "DE", name: "Delaware"},
      { abbr: "FL", name: "Florida"},
      { abbr: "GA", name: "Georgia"},
      { abbr: "HI", name: "Hawaii"},
      { abbr: "ID", name: "Idaho"},
      { abbr: "IL", name: "Illinois"},
      { abbr: "IN", name: "Indiana"},
      { abbr: "IA", name: "Iowa"},
      { abbr: "KS", name: "Kansas"},
      { abbr: "KY", name: "Kentucky"},
      { abbr: "LA", name: "Louisiana"},
      { abbr: "ME", name: "Maine"},
      { abbr: "MD", name: "Maryland"},
      { abbr: "MA", name: "Massachusetts"},
      { abbr: "MI", name: "Michigan"},
      { abbr: "MN", name: "Minnesota"},
      { abbr: "MS", name: "Mississippi"},
      { abbr: "MO", name: "Missouri"},
      { abbr: "MT", name: "Montana"},
      { abbr: "NE", name: "Nebraska"},
      { abbr: "NV", name: "Nevada"},
      { abbr: "NH", name: "New Hampshire"},
      { abbr: "NJ", name: "New Jersey"},
      { abbr: "NM", name: "New Mexico"},
      { abbr: "NY", name: "New York"},
      { abbr: "NC", name: "North Carolina"},
      { abbr: "ND", name: "North Dakota"},
      { abbr: "OH", name: "Ohio"},
      { abbr: "OK", name: "Oklahoma"},
      { abbr: "OR", name: "Oregon"},
      { abbr: "PA", name: "Pennsylvania"},
      { abbr: "RI", name: "Rhode Island"},
      { abbr: "SC", name: "South Carolina"},
      { abbr: "SD", name: "South Dakota"},
      { abbr: "TN", name: "Tennessee"},
      { abbr: "TX", name: "Texas"},
      { abbr: "UT", name: "Utah"},
      { abbr: "VT", name: "Vermont"},
      { abbr: "VA", name: "Virginia"},
      { abbr: "WA", name: "Washington"},
      { abbr: "WV", name: "West Virginia"},
      { abbr: "WI", name: "Wisconsin"},
      { abbr: "WY", name: "Wyoming"}
    ]
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <Autocomplete
            inputProps={{name: "US state", id: "states-autocomplete"}}
            ref="autocomplete"
            value={this.state.value}
            items={this.state.unitedStates}
            getItemValue={(item) => item.name}
            onSelect={(value, item) => {
              // set the menu to only the selected item
              this.setState({ value, unitedStates: [ item ] })
              // or you could reset it to a default list again
              // this.setState({ unitedStates: getStates() })
            }}
            onChange={(event, value) => {
              this.setState({ value, loading: true })
              this.request(value, (items) => {
                this.setState({ unitedStates: items, loading: false })
              })
            }}
            renderItem={(item, isHighlighted) => (
                <div
                    className={isHighlighted ? styles.highlightedItem : styles.item}
                    key={item.abbr}
                    id={item.abbr}
                >{item.name} + id={item.abbr}</div>
            )}
        />

      </div>
    )
  }

}

// const mapStateToProps = (state/*, props*/) => {
//   return {
//     user: state.userReducer.user
//   }
// }
//
// UserContainer = connect(mapStateToProps)(UserContainer)

export default SearchUserContainer
