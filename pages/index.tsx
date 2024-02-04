import Container from "../components/container";
import Jobs from "../components/jobs";
import Blogs from "../components/blogs";
import Layout from "../components/layout";
import Header from "../components/header";
import { getAllPosts } from "../lib/api";
import { getAllBlogs } from "../lib/api";
import { getAllChanges, getChangeBySlug } from "../lib/api";
import Post from "../interfaces/post";
import Blog from "../interfaces/blog";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";
import FlipCard from "../components/flip-card";
import { useState } from "react";
import markdownToHtml from "../lib/markdownToHtml";

type Props = {
  allPosts: Post[];
  allBlogs: Blog[];
  allChangesWithSlug: any[];
};

export default function Index({
  allPosts,
  allBlogs,
  allChangesWithSlug,
}: Props) {
  return (
    <>
      <Layout>
        <motion.div
          initial={{ opacity: 0, scale: 0.99, y: 6 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Container>
            <div className="flex justify-between items-center mb-16">
              <Header />
            </div>
            <div className="relative group">
              <a href="https://vote.uniswapfoundation.org/" target="_blank">
                <img
                  src="/assets/unishield.png"
                  className="w-10 md:w-16 hover:scale-105 hover:drop-shadow-lg absolute transition-all duration-300 z-10 -top-4 md:-top-8 left-24 group-hover:-top-6 md:group-hover:-top-12 -rotate-12 drop-shadow"
                />
              </a>
              <a href="https://vote.optimism.io/" target="_blank">
                <img
                  src="/assets/sunny.svg"
                  className="w-14 md:w-auto hover:scale-105 hover:drop-shadow-lg absolute transition-all duration-300 z-10 top-16 -left-4 md:-left-10 group-hover:-left-8 md:group-hover:-left-16 -rotate-12 drop-shadow"
                />
              </a>
              <a href="https://www.nounsagora.com/" target="_blank">
                <img
                  src="/assets/ramen_noun.svg"
                  className="w-14 md:w-auto hover:scale-105 hover:drop-shadow-lg absolute transition-all duration-300 z-10 bottom-16 -right-2 group-hover:-right-4 md:-right-12 md:group-hover:-right-16 -rotate-6 h-28 drop-shadow"
                />
              </a>
              <a href="https://agora.ensdao.org/" target="_blank">
                <img
                  src="/assets/eth.svg"
                  className="w-14 md:w-auto hover:scale-105 hover:drop-shadow-lg absolute transition-all duration-300 z-10 md:-top-8 -top-2 right-12 group-hover:-top-4 md:group-hover:-top-12 group-hover:right-8 rotate-6 drop-shadow"
                />
              </a>
              <div className=" transition-all duration-300 -rotate-1 md:-translate-y-4 md:-translate-x-2 group-hover:scale-105 group-hover:rotate-0">
                <FlipCard
                  width="100%"
                  height="240px"
                  className="md:mb-32"
                  front={
                    <img
                      src="/assets/postcard_image1.png"
                      className="w-full transition border-stone-50 border-8 rounded-lg shadow-sm group-hover:shadow-2xl"
                      alt="postcard from the future"
                    />
                  }
                  back={
                    <img
                      src="/assets/postcard_image1_back.png"
                      className="w-full transition border-stone-50 border-8 rounded-lg shadow-sm group-hover:shadow-2xl"
                      alt="postcard from the future"
                    />
                  }
                />
              </div>
            </div>

            <h1>Where did we lose our heart?</h1>
            <p>
              Some of us come from open source. Others come from economic
              research. Others still come to rebuild the Internet on public
              protocols instead of private fiefdoms. We all converged on
              Ethereum to create better incentives, fund public goods, foster
              coordination, and some day, to slay{" "}
              <a
                target="_blank"
                href="https://slatestarcodex.com/2014/07/30/meditations-on-moloch/"
              >
                <span
                  className="
                bg-gradient-to-r from-red-700 to-yellow-700 inline-block text-transparent bg-clip-text mr-1
              "
                >
                  {" "}
                  Moloch
                </span>
                👹
              </a>
              , the god of coordination failure.
            </p>
            <p>
              Instead, out came pouring a torrent of sparkling coins and jpegs,
              unfettered markets, and eye-watering levels of leverage. It was
              all exciting and new, but it&apos;s hard not to feel like
              something was lost along the way.
            </p>
            <p>
              We&apos;ve pushed the technology to new frontiers, but lost our
              heart along the way. We started Agora because we&apos;re convinced
              that Ethereum can be much more expansive and people-centric.
            </p>
            <h1>It's time to build (the commons)</h1>
            <p>
              So what are we doing about it? In short, we make the best
              end-to-end governance platform for crypto protocols – the first
              instance of at scale onchain collaboration. Leading communities
              like{" "}
              <a
                target="_blank"
                className="hover:px-2 hover:py-[2px] rounded-full text-red-600 hover:bg-red-600 hover:text-red-50 transition-all-all duration-300"
                href="https://vote.optimism.io/"
              >
                Optimism
                <ArrowUpRightIcon className="inline h-4 w-4 mb-[2px]" />
              </a>
              ,{" "}
              <a
                target="_blank"
                className="hover:px-2 hover:py-[2px] rounded-full text-indigo-600 hover:bg-indigo-600 hover:text-indigo-50 transition-all-all duration-300"
                href="https://agora.ensdao.org/"
              >
                ENS
                <ArrowUpRightIcon className="inline h-4 w-4 mb-[2px]" />
              </a>
              ,{" "}
              <a
                target="_blank"
                className="hover:px-2 hover:py-[2px] rounded-full text-pink-600 hover:bg-pink-600 hover:text-pink-50 transition-all-all duration-300"
                href="https://vote.uniswapfoundation.org/"
              >
                Uniswap
                <ArrowUpRightIcon className="inline h-4 w-4 mb-[2px]" />
              </a>
              , and{" "}
              <a
                target="_blank"
                className="hover:px-2 hover:py-[2px] rounded-full text-yellow-600 hover:bg-yellow-600 hover:text-yellow-50 transition-all-all duration-300"
                href="https://www.nounsagora.com/"
              >
                Nouns
                <ArrowUpRightIcon className="inline h-4 w-4 mb-[2px]" />
              </a>{" "}
              rely on Agora to coordinate their community around critical
              protocol upgrades, ecosystem funding, and more.
            </p>
            <p>
              Why? Because the invention of crypto token governance means that
              for the first time in history, we have well defined ways to
              improve protocols, and the in-network incentives to pay for these
              improvements. The combination of these properties create the
              pathway for a far larger range of technological progress to move
              from private enterprises to common protocols.
            </p>
            <p>
              But just because it&apos;s possible doesn&apos;t mean it&apos;s
              going to happen. Administering the commons is one of the oldest
              unsolved problems we know of. Except this time, Ethereum has given
              us programmable incentives, and so we tackle these old problems
              with new tools to expand the frontiers of the commons.
            </p>
            <p>
              We've got quite a lot started already, but there&apos;s much more
              to the story here, and we&apos;d be honored if you&apos;d join us
              in telling it.
            </p>
            <div className="pb-1 rounded-md bg-stone-200">
              <div className="px-3 py-1 rounded-md border bg-stone-50">
                <div className="flex my-2">
                  <div className="whitespace-nowrap">Total visitors</div>
                  <div className="border-b border-dotted border-stone-300 w-full mb-1 mx-2"></div>
                  <div className="text-right">2,200,000</div>
                </div>
                <div className="flex my-2">
                  <div className="whitespace-nowrap">Votes cast on Agora</div>
                  <div className="border-b border-dotted border-stone-300 w-full mb-1 mx-2"></div>
                  <div className="text-right">410,000</div>
                </div>
                <div className="flex my-2">
                  <div className="whitespace-nowrap">
                    Monthly unique visitors
                  </div>
                  <div className="border-b border-dotted border-stone-300 w-full mb-1 mx-2"></div>
                  <div className="text-right">103,000</div>
                </div>
                <div className="flex my-2">
                  <div className="whitespace-nowrap">
                    Delegate profiles created
                  </div>
                  <div className="border-b border-dotted border-stone-300 w-full mb-1 mx-2"></div>
                  <div className="text-right">83,000</div>
                </div>
              </div>
              <div className="font-mono text-sm pl-3 pt-1 text-stone-400">
                Metrics as of 11/20/23
              </div>
            </div>

            <Blogs blogs={allBlogs} />
            <Jobs posts={allPosts} />
          </Container>
        </motion.div>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts(["title", "date", "slug", "author", "location"]);
  const allBlogs = getAllBlogs(["title", "date", "slug", "author", "location"]);
  const allChanges = getAllChanges([
    "title",
    "date",
    "slug",
    "author",
    "location",
  ]);

  const allChangesWithSlug = allChanges.map((change) =>
    getChangeBySlug(change.slug, ["title", "date", "slug", "author", "content"])
  );

  for (let i = 0; i < allChangesWithSlug.length; i++) {
    allChangesWithSlug[i].content = await markdownToHtml(
      allChangesWithSlug[i].content || ""
    );
  }

  console.log(allChangesWithSlug);
  return {
    props: { allPosts, allBlogs, allChangesWithSlug },
  };
};
