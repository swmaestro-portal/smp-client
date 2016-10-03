/**
 * Created by engine on 10/1/16.
 */


export function fetchTemp() {

  fetch('http://api.github.com/users/enginehenryed', {
    
  }).then(function(data) {
    console.log(1, data)
  })

  return 0
}
