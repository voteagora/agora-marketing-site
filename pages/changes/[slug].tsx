import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import Header from '../../components/header'
import PostHeader from '../../components/post-header'
import Layout from '../../components/layout'
import { getChangeBySlug, getAllChanges } from '../../lib/api'
import Head from 'next/head'
import markdownToHtml from '../../lib/markdownToHtml'
import type ChangeType from '../../interfaces/change'

type Props = {
  change: ChangeType
  preview?: boolean
}

export default function Change({ change, preview }: Props) {
  const router = useRouter()
  const title = `${change.title}`
  if (!router.isFallback && !change?.slug) {
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
                <meta property="og:image" content={change.ogImage.url} />
              </Head>
              
              <PostHeader
                title={change.title}
                author={change.author}
              />
              <PostBody content={change.content} />
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
  const change = getChangeBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])
  const content = await markdownToHtml(change.content || '')

  return {
    props: {
      change: {
        ...change,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const changes = getAllChanges(['slug'])
  return {
    paths: changes.map((change) => {
      return {
        params: {
          slug: change.slug,
        },
      }
    }),
    fallback: false,
  }
}
