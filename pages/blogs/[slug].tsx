import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import Header from '../../components/header'
import PostHeader from '../../components/post-header'
import Layout from '../../components/layout'
import { getBlogBySlug, getAllBlogs } from '../../lib/api'
import Head from 'next/head'
import markdownToHtml from '../../lib/markdownToHtml'
import type BlogType from '../../interfaces/blog'

type Props = {
  blog: BlogType
  preview?: boolean
}

export default function Blog({ blog, preview }: Props) {
  const router = useRouter()
  const title = `${blog.title}`
  if (!router.isFallback && !blog?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <div>Loading…</div>
        ) : (
          <>
            <article>
              <Head>
                <title>{title}</title>
                <meta property="og:image" content={blog.ogImage.url} />
              </Head>
              
              <PostHeader
                title={blog.title}
                author={blog.author}
              />
              <PostBody content={blog.content} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  )
}

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const blog = getBlogBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])
  const content = await markdownToHtml(blog.content || '')

  return {
    props: {
      blog: {
        ...blog,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const blogs = getAllBlogs(['slug'])
  return {
    paths: blogs.map((blog) => {
      return {
        params: {
          slug: blog.slug,
        },
      }
    }),
    fallback: false,
  }
}
