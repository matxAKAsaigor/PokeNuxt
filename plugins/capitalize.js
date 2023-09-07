export default ({ app }, inject) => {
  // Inject $capitalize(msg) in Vue, context and store.
  inject('capitalize', str => str.charAt(0).toUpperCase() + str.slice(1))
}
