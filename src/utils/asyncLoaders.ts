// route level code-splitting
// this generates a separate chunk (view-[file].[hash].js) for this route
// which is lazy-loaded when the route is visited.
export const loadView = (file: string) => {
  return () => import(`./../views/${file}.vue`)
}
