export default {
  hashLinkScroll: () => {
    const { hash } = window.location
    if (hash !== '') {
      // Push onto callback queue so it runs after the DOM is updated,
      // this is required when navigating from a different page so that
      // the element is rendered on the page before trying to getElementById.
      setTimeout(() => {
        const id = hash.replace('#', '')
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView();
          element.style.backgroundColor = "#fafab7"
          element.style.transition = "background-color 2000ms linear"
        }
      }, 0)
    }
  }
}
