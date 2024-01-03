import type Author from './author'

type BlogType = {
  ogImage: any
  slug: string
  title: string
  location: string
  date: string
  author: Author
  content: string
}

export default BlogType
