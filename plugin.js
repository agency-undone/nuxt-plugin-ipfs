/*
 *
 * 🔌 [Plugin | NuxtModuleIpfs] Methods
 *
 */

console.log(`🔌 [Module | NuxtModuleIpfs] Methods`)

// /////////////////////////////////////////////////////////////////// Functions
// -----------------------------------------------------------------------------
// ------------------------------------------------------------------ relativity
const Relativity = (path) => {
  if (process.env.NODE_ENV !== 'development') {
    const append = path.charAt(0) === '/' ? path.slice(1) : path;
    if (typeof window !== 'undefined') {
      const ipfsPathRegExp = /^(\/(?:ipfs|ipns)\/[^/]+)/;
      const ipfsPathPrefix = (window.location.pathname.match(ipfsPathRegExp) || [])[1] || '';
      if (ipfsPathPrefix) {
        return `${ipfsPathPrefix}${path}/`;
      } else {
        return path;
      }
    }
    return `/relativity/${append}`;
  }
  return path;
}

// ///////////////////////////////////////////////////////////// Export & Inject
// -----------------------------------------------------------------------------
export default ({}, inject) => {
  inject('relativity', Relativity)
}
