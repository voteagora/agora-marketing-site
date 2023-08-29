import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-50">
      <header className="container mx-auto max-w-screen-2xl bg-white px-4 pt-8 lg:px-24 flex justify-between items-center">
        <div className="flex justify-between gap-2">
          <Image
            src="/agora-logo.svg"
            width={16}
            height={16}
            alt="Picture of the Optimism Agora"
            className=""
          />
          <span className="font-semibold mt-[2px]">Agora</span>
        </div>

        <div className="flex gap-4 font-medium text-sm">
          <a
            className="hover:opacity-100 transition-opacity opacity-60"
            target="_blank"
            href="https://twitter.com/nounsagora"
          >
            Twitter
          </a>
          <a
            className="hover:opacity-100 transition-opacity opacity-60"
            target="_blank"
            href="https://github.com/voteagora"
          >
            Github
          </a>
          <a
            className="hover:opacity-100 transition-opacity opacity-60"
            target="_blank"
            href="https://discord.gg/FaRy8AMy3Z"
          >
            Discord
          </a>
        </div>
      </header>
      <main className="container mx-auto max-w-screen-2xl bg-white px-4 pt-16 lg:px-24 lg:pt-20">
        <section>
          <div className="sm:mb-20 mb-10 gap-16">
            <div className="">
              <h4 className="mb-4">For onchain communities</h4>
              <h1 className="mb-6 sm:text-7xl">
                Launch your onchain governance end-to-end in 1 week.
              </h1>
              <p className="max-w-4xl">
                Agora governor is based off the most battle-tested, trusted, and
                proven standard (Compound Bravo and OZ Governor) as a base with
                additional modules like partial delegation and voting systems
                enabled. Deploy a fully-managed governor and full-stack app
                trusted by the largest protocols.
              </p>
            </div>
            <button className="py-2 px-4 mt-6 bg-neutral-950 text-white rounded-lg">
              <a href="mailto:charlie@voteagora.com"></a>
              Get in touch
            </button>
          </div>
        </section>
        <section className="mb-24 mt-12">
          <div className="flex flex-col sm:flex-row items-center lg:justify-between px-12 py-12 sm:py-0 rounded-lg border gap-y-8">
            <p className="sm:border-r sm:pr-12 sm:py-6 font-semibold">
              Trusted by leaders at:
            </p>
            <a href="https://vote.optimism.io/" target="_blank">
              <Image
                src="/logo-optimism.png"
                width={120}
                height={90}
                alt="ENS logo"
                className="saturate-0 opacity-80 hover:saturate-100 hover:opacity-100 transition"
              />
            </a>
            <a href="https://vote.uniswapfoundation.org/" target="_blank">
              <Image
                src="/logo-uniswap.png"
                width={120}
                height={90}
                alt="ENS logo"
                className="saturate-0 opacity-80 hover:saturate-100 hover:opacity-100 transition"
              />
            </a>
            <a href="https://agora.ensdao.org/" target="_blank">
              <Image
                src="/logo-ens.png"
                width={120}
                height={90}
                alt="ENS logo"
                className="saturate-0 opacity-80 hover:saturate-100 hover:opacity-100 transition"
              />
            </a>
            <a href="https://www.nounsagora.com/" target="_blank">
              <Image
                src="/logo-nouns.png"
                width={120}
                height={90}
                alt="ENS logo"
                className="saturate-0 opacity-80 hover:saturate-100 hover:opacity-100 transition"
              />
            </a>
            <a href="https://vote.lyra.finance/" target="_blank">
              <Image
                src="/logo-lyra.png"
                width={120}
                height={90}
                alt="ENS logo"
                className="saturate-0 opacity-80 hover:saturate-100 hover:opacity-100 transition"
              />
            </a>
          </div>
          <div className="p-3 bg-gray-50 my-6 rounded-xl border">
            <Image
              src="/op-agora.png"
              width={1000}
              height={1000}
              alt="Picture of the Optimism Agora"
              className="w-full rounded-md drop-shadow-sm"
            />
          </div>
        </section>
        <section>
          <div className="flex justify-between sm:mb-20 mb-10 sm:flex-row flex-col gap-y-2">
            <div>
              <h4>Used monthly by</h4>
              <h1>103,000 voters</h1>
            </div>
            <div className="border-l"></div>
            <div>
              <h4>Profiles created by</h4>
              <h1>3,500 delegates</h1>
            </div>
            <div className="border-l"></div>
            <div>
              <h4>Delegate events</h4>
              <h1>100,000</h1>
            </div>
            <div className="border-l"></div>
            <div>
              <h4>Token value delegated</h4>
              <h1>$40,000,000</h1>
            </div>
            <div className="border-l"></div>
            <div>
              <h4>Treasury governed through Agora</h4>
              <h1>$4,000,000,000+</h1>
            </div>
          </div>
        </section>

        <section>
          <div className="max-w-3xl mb-4 flex flex-col gap-3">
            <h1>
              Built on the most battle-tested, trusted and proven standard.
            </h1>
          </div>
          <div className="border rounded-t-lg flex justify-around flex-col sm:flex-row">
            <div className="sm:border-r"></div>
            <div className="px-6 py-12">
              <h4 className="pb-3">What does Agora do?</h4>
              <p className="mb-8">
                It helps communities work better together through governance.
                You may need a single module like approval voting or a
                combination of many. Every ecosystem is different and we get
                that. Thats why Agora provides the full-stack solution to help
                operationalize your governance end-to-end. Whereever you may be
                at along the process, Agora is here to support your community.
              </p>
              <Image
                src="/decentralization-process.png"
                width={700}
                height={90}
                alt="ENS logo"
                className="my-4"
              />
              <h4 className="pb-3">Why Agora?</h4>
              <ul className="flex flex-col">
                <li>
                  Fully-managed, end-to-end support of your governance token and
                  application built ontop of Compound Bravo and OZ Governor as
                  our base.
                </li>
                <li>
                  Open-source & Interopable. Agora is fully MIT-licensed and
                  open sourced. Never worry about being locked in.
                </li>
                <li>
                  Let us handle the background tasks, so that you can focus on
                  designing the best governance that scales your community.
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="rounded-b-lg px-6 py-12 border-x border-b mb-24 flex justify-around bg-gray-50">
          <div>
            <Image
              src="/giants.png"
              width={400}
              height={90}
              alt="open-source"
              className="my-4"
            />
          </div>
        </section>

        <section>
          <div className="mb-24">
            <h4>Ready to get started?</h4>
            <button className="py-2 px-4 mt-6 bg-neutral-950 text-white rounded-lg">
              <a href="mailto:charlie@voteagora.com"></a>
              Get in touch
            </button>
            <p>
              Wherever you are on the decentralization process for your
              governance, Agora can assist you.
            </p>
            <h4>
              Customers get custom SLAs, prioritized integrations, and input on
              our roadmap.
            </h4>
          </div>
        </section>

        {/* <section className="rounded-b-lg px-6 py-12 border-x border-b mb-24 flex justify-around bg-gray-50">
          <div>
            <p className="max-w-6xl">
              &ldquo;Running our first delegate race with Agora, we were able to
              offload so much of the operational headaches to them. We attracted
              3x more active delegates in 1 month than we had in the last 3
              years. On top of this, we were able to increase votable supply by
              25% in the ecosystem, this is a crucial step in our path towards
              decentralizing Uniswap.&rdquo;
            </p>
            <h4 className="mt-4">Devin Walsh – Uniswap Foundation</h4>
          </div>
        </section> */}

        <section className="pb-24">
          <div className="max-w-xl mb-4">
            <h4>Phase 1: Launch your governance</h4>
            <h1>Fully-managed launch stack</h1>
            <p>
              Design your economics, customize your protocol governance and let
              us handle the rest. Agora launches your token and decentralized
              governance from end-to-end, which enables you to build a thriving
              community.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-between gap-2 my-2">
            <div className="rounded-lg bg-gray-50 p-6 w-full">
              <h2>Token launch</h2>
              <p>
                We&apos;ll help you do your airdrop right, get a good initial
                voter base, and deploy your token with the gov features you
                need..
                <Image
                  src="/token-launch.png"
                  width={700}
                  height={90}
                  alt="ENS logo"
                  className="my-4"
                />
              </p>
              <ul>
                <li>
                  <b>Token smart contract.</b> Customize and deploy your token
                  correctly.
                </li>
                <li>
                  Deploy a flexible token claim and airdrop UI with built in
                  delegation cadences.
                </li>
                <li>
                  <b>Token incentive customization.</b> Multi round airdrops or
                  custom incentives. We provide you with scenario tests and
                  simulation modeling to design the launch you envisioned.
                </li>
                <li>
                  <b>Token claim UI.</b> Flexible token claim and airdrop UI
                  with built in delegation cadences.
                </li>
              </ul>
            </div>

            <div className="rounded-lg bg-gray-50 p-6 w-full">
              <h2>One-click governor</h2>
              <p>
                Deploy Agora governor in one-click. Flexible and customizable
                parameters and modules available.
              </p>
              <Image
                src="/gov-launch.png"
                width={700}
                height={90}
                alt="ENS logo"
                className="my-4"
              />
              <ul>
                <li>
                  <b>Partial and liquid delegation.</b> No more splitting up
                  multi-sigs to run programs. Enable time-bound, split rights
                  and re-delegation capabilities.
                </li>
                <li>
                  <b>Quorum management.</b> Dynamic quorums, flexible quorums,
                  based on what you need.
                </li>
                <li>
                  <b>Multiple voting systems.</b> Standard voting (Yes/No),
                  Approval Voting, Quadratic Voting, customized to your
                  governance needs.
                </li>
              </ul>
            </div>

            <div className="rounded-lg bg-gray-50 p-6 w-full">
              <h3>White-labelled client</h3>
              <p>
                Beautiful, white-labelled end-to-end client app, from delegation
                to voting to proposal creation. Custom tailored for your
                community’s taste and vibe.
              </p>
              <Image
                src="/gov-client.png"
                width={720}
                height={90}
                alt="ENS logo"
                className="my-4"
              />
              <div className="flex">
                <ul>
                  <li>
                    <b>Delegate discovery and voting.</b>
                    Beautiful delegation and voting interface. Robust sorting
                    and search mechanism for delegate discovery.
                  </li>
                  <li>
                    <b>Proposal list and creation.</b>
                    Track all your proposal in one place. Easy to create
                    proposal wizard. Integrates with Github, Snapshot or other
                    workflows.
                  </li>
                  <li>
                    <b>Hosted on your subdomain.</b>
                    Built on your domain, native to your protocol, but we take
                    care of infrastructure, hosting and maintaining uptime.
                  </li>
                </ul>
              </div>
            </div>

            <div className="rounded-lg bg-gray-50 p-6 w-full">
              <h3>Continual Improvements</h3>
              <p>
                Get the latest updates and learnings from other DAOs. We’ll keep
                shipping improvements so that you don’t need to worry about
                bugs, maintenance, and the latest features.
              </p>
              <Image
                src="/gov-client.png"
                width={720}
                height={90}
                alt="ENS logo"
                className="my-4"
              />
              <div className="flex">
                <ul>
                  <li>
                    <b>Transparent and continuous release cycles.</b>
                    As your community grows, so will your governance needs need
                    to adapt. We get that and we are committed to continuously
                    improving the software - both on the governor and client
                    app.
                  </li>
                  <li>
                    <b>No technical expertise needed.</b>
                    We work with Foundations, Labs teams and Delegates to help
                    deploy Agora into your community. We handle the code,
                    operations and deployment, end-to-end.
                  </li>
                  <li>
                    <b>High availability.</b>
                    Always accessible, even during periods of heavy traffic such
                    as voting season and holidays.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-24">
          <div className="max-w-xl mb-4">
            <h4>Phase 2: Grow your ecosystem</h4>
            <h1>Full-stack governance infrastructure</h1>
            <p>
              Agora provides you with the tools to grow your ecosystem and make
              your community thrive. Agora provides an all-in-one operating
              system to source, attract, and collaborate with your delegates and
              ecosystem contributors.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-between gap-x-2">
            <div className="rounded-lg bg-gray-50 px-6 py-8 sm:my-2 sm:w-1/2">
              <h2>Automated Programs</h2>
              <p>
              Run a variety of programs and initiatives that your community wants. Flexible administration by the community, Agora in-house or a combination.
              </p>
              <Image
                src="/ecosystem-tools.png"
                width={720}
                height={90}
                alt="ENS logo"
                className="my-4"
              />

              <ul>
                <li>
                  <b>Delegate Elections.</b> 
                  Attract new delegates to your ecosystem and help reward and engage existing ones.
                </li>
                <li>
                  <b>On-chain RFPs.</b>
                  Plug and play any grants program you like. Attract an ecosystem of builders.
                </li>
                <li>
                  <b>Perpetual streams.</b>
                  Easy to implement, easy to cancel streams for your contributors and vendors. 
                </li>
              </ul>
            </div>
            <div className="rounded-lg bg-gray-50 px-6 py-8 my-2 sm:w-1/2">
              <h3>Customizable Integrations</h3>
              <p>
                Every governance process is similar, but different. We get that. Customize your ecosystem with features that your governance needs.
              </p>
              <Image
                src="/gov-client.png"
                width={720}
                height={90}
                alt="ENS logo"
                className="my-4"
              />
              <div className="flex">
                <ul>
                  <li>
                    <b>Build governance the way you want.</b> 
                    Temp check? Different quorum process? You decide. We integrate and customize the flow to your needs.
                  </li>
                  <li>
                    <b>End-to-end governance process.</b> 
                    We help you deploy Snapshot, Tally and Karma. So that you have a full fledge governance layer with multiple frontends.
                  </li>
                  <li>
                    <b>Zero operations.</b> 
                    No technical expertise needed. We handle the code, operations and deployment, end-to-end.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between gap-2">
            <div className="rounded-lg bg-gray-50 px-6 py-8 sm:my-2 sm:w-1/2">
              <h3 className="mb-4 mt-6">Delegate Management</h3>
              <p>
              Do you know who still needs to vote? Need to nudge delegates to hit quorum? Who are your best delegates and contributors?
              </p>
              <Image
                src="/admin-tools.png"
                width={400}
                height={90}
                alt="ENS logo"
                className="my-4"
              />
              <ul>
                <li>
                  <b>Measurable decentralization.</b> 
                  We help you track where you’re at on the decentralization scale and provide tractable next steps.
                </li>
                <li>
                  <b>Mission control.</b> 
                  Search, track, message delegates. Track voting progress. Query data and build analytics `beta`
                </li>
                <li>
                  <b>Notifications & Alerts.</b> 
                  Notify delegates before votes and important announcements. Integrates with Discord and Telegram. `beta``
                </li>
              </ul>
            </div>

            <div className="rounded-lg bg-gray-50 px-6 py-8 my-2 sm:w-1/2">
              <h2 className="mb-4 mt-6">Request Features</h2>
              <p>
                  Looking for something else? <b>Request a feature.</b> 
                  Let us know what you want to see.
              </p>
              <button className="py-2 px-4 mt-6 bg-neutral-950 text-white rounded-lg">
              <a href="mailto:charlie@voteagora.com"></a>
              Ask in Discord
            </button> 
           </div>
          </div>
        </section>
        <section>
          <div className="mb-24">
            <h4>Looking for a little customization? We know that every community and DAO is different, we built Agora to be flexible. Contact us for custom configuration, tailored to the needs of your project!</h4>
            <button className="py-2 px-4 mt-6 bg-neutral-950 text-white rounded-lg">
              <a href="mailto:charlie@voteagora.com"></a>
              Contact Us 
            </button>
          </div>
        </section>

      </main>
      <footer></footer>
    </div>
  );
}
