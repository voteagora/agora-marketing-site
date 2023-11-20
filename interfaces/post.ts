import type Author from './author'

type PostType = {
  slug: string
  title: string
  location: string
  date: string
  author: Author
  content: string
}

export default PostType
