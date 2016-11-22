module.exports = {
  textAreaAdjust: (query) => {
    setTimeout(() => {
      let o = document.querySelector(query)
      o.style.height = "1px"
      o.style.height = (o.scrollHeight) + "px"
    }, 0)
  }
}
