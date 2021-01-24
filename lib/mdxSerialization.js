import renderToString from 'next-mdx-remote/render-to-string'
import hydrate from 'next-mdx-remote/hydrate'

// Import components to be used and read within MDX
// import Test from '../components/test'

// Add imported components into object
// const components = {Test}

/**
 * serialize mdx to string
 */
export async function mdxToString(mdx) {
  // pass components into renderToString
  // return await renderToString(mdx, {components})
  return await renderToString(mdx)
}

/**
 * render string back to react components
 */
export function stringToMdx(string) {
  // pass components to hydrate
  // return hydrate(string, {components})
  return hydrate(string)
  
}
