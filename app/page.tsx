import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-neutral-50">
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
          <div className="flex flex-col sm:flex-row items-center lg:justify-between px-12 pt-12 sm:pt-3 sm:pb-3 rounded-lg border gap-y-8 sm:bg-neutral-50">
            <h4 className=" sm:pr-6 sm:py-6">Trusted by leaders at:</h4>
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
          <div className="p-3 bg-neutral-50 -mt-4 rounded-b-xl border-x border-b">
            <Image
              src="/op-agora.png"
              width={1000}
              height={1000}
              alt="Picture of the Optimism Agora"
              className="w-full rounded-md drop-shadow-sm border"
            />
          </div>
        </section>
        <section>
          <div className="flex justify-between sm:mb-24 mb-10 sm:flex-row flex-col gap-y-2">
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

        <section className="bg-neutral-900 rounded-t-lg p-12">
          <h2 className="mb-1 text-white font-semibold">
            Whereever you may be at along the process, Agora is here to support
            your community.
          </h2>
          <p className="text-neutral-400">
            Agora provides tools along the entire spectrum of DAO governance
          </p>
          <div className="flex border-t border-neutral-800 justify-between mt-8">
            <div className="-mt-[1px]">
              <div className="pt-4 border-t border-neutral-50 w-6"></div>
              <Image
                src="/pre-launch.png"
                width={24}
                height={24}
                alt="ENS logo"
                className="mb-4"
              />
              <h4 className="text-neutral-400">Pre-launch</h4>
              <div className="text-neutral-200">
                Deploy your Token and target your airdrop
              </div>
            </div>
            <div className="-mt-[1px]">
              <div className="pt-4 border-t border-neutral-50 w-6"></div>
              <Image
                src="/launch.png"
                width={24}
                height={24}
                alt="ENS logo"
                className="mb-4"
              />
              <h4 className="text-neutral-400">Launch</h4>
              <div className="text-neutral-200">Deploy Onchain governance</div>
            </div>
            <div className="-mt-[1px]">
              <div className="pt-4 border-t border-neutral-50 w-6"></div>
              <Image
                src="/growth.png"
                width={24}
                height={24}
                alt="ENS logo"
                className="mb-4"
              />
              <h4 className="text-neutral-400">Growth</h4>
              <div className="text-neutral-200">Jumpstart your ecosystem</div>
            </div>
            <div className="-mt-[1px]">
              <div className="pt-4 border-t border-neutral-50 w-6"></div>
              <Image
                src="/Stabilization.png"
                width={24}
                height={24}
                alt="ENS logo"
                className="mb-4"
              />
              <h4 className="text-neutral-400">Stabilization</h4>
              <div className="text-neutral-200">
                Fully dencentralize your community
              </div>
            </div>
          </div>
        </section>
        <section className="mb-24 p-12 rounded-b-lg border flex justify-between">
          <div className="max-w-2xl">
            <h2 className="mb-1">Battle-tested and fully open</h2>
            <ul>
              <li>
                Built on top of Comp Gov Bravo and OZ Governor, the most trusted
                governance standards
              </li>
              <li>
                Fully MIT-licensed open source. Never worry about being locked
                in.
              </li>
            </ul>
          </div>
          <div className="flex flex-col sm:flex-row items-center lg:justify-between px-8 pt-8 sm:pt-1 sm:pb-1 rounded-lg border gap-y-8 sm:bg-neutral-50">
            <Image
              src="/compgov.png"
              width={162}
              height={27}
              alt="open-source"
            />
            <Image
              src="/openzeppelin.png"
              width={162}
              height={27}
              alt="open-source"
            />
            <Image
              src="/MIT-licensed.png"
              width={162}
              height={27}
              alt="open-source"
            />
          </div>
        </section>

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
            <div className="rounded-lg bg-neutral-50 p-6 w-full">
              <h2>Token launch</h2>
              <Image
                src="/token-launch.png"
                width={700}
                height={90}
                alt="ENS logo"
                className="my-4"
              />
              <p className="mb-2">
                We&apos;ll help you do your airdrop right, get a good initial
                voter base, and deploy your token with the gov features you
                need.
              </p>
              <ul>
                <li>
                  <b>Token smart contract.</b> Customize and deploy your token
                  correctly.
                </li>
                <li>
                  <b>Deploy a flexible token claim and airdrop UI </b> with
                  built in delegation cadences.
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

            <div className="rounded-lg bg-neutral-50 p-6 w-full">
              <h2>One-click governor</h2>
              <Image
                src="/gov-launch.png"
                width={700}
                height={90}
                alt="ENS logo"
                className="my-4"
              />
              <p className="mb-2">
                Deploy Agora governor in one-click. Flexible and customizable
                parameters and modules available.
              </p>
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

            <div className="rounded-lg bg-neutral-50 p-6 w-full">
              <h3>White label client app</h3>
              <Image
                src="/white-label.png"
                width={720}
                height={90}
                alt="ENS logo"
                className="my-4"
              />
              <p className="mb-2">
                Customize Agora to your community&apos;s branding.
              </p>

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
          </div>
        </section>

        <section className="">
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
            <div className="rounded-lg bg-neutral-50 px-6 py-8 sm:my-2 sm:w-1/2">
              <h2>Automated Programs</h2>
              <Image
                src="/ecosystem-tools.png"
                width={720}
                height={90}
                alt="ENS logo"
                className="my-4"
              />
              <p>
                Run a variety of programs and initiatives that your community
                wants. Flexible administration by the community, Agora in-house
                or a combination.
              </p>
              <ul>
                <li>
                  <b>Delegate Elections.</b>
                  Attract new delegates to your ecosystem and help reward and
                  engage existing ones.
                </li>
                <li>
                  <b>On-chain RFPs.</b>
                  Plug and play any grants program you like. Attract an
                  ecosystem of builders.
                </li>
                <li>
                  <b>Perpetual streams.</b>
                  Easy to implement, easy to cancel streams for your
                  contributors and vendors.
                </li>
              </ul>
            </div>
            <div className="rounded-lg bg-neutral-50 px-6 py-8 my-2 sm:w-1/2">
              <h3>Customizable Integrations</h3>
              <Image
                src="/gov-client.png"
                width={720}
                height={90}
                alt="ENS logo"
                className="my-4"
              />
              <p>
                Every governance process is similar, but different. We get that.
                Customize your ecosystem with features that your governance
                needs.
              </p>
              <div className="flex">
                <ul>
                  <li>
                    <b>Build governance the way you want.</b>
                    Temp check? Different quorum process? You decide. We
                    integrate and customize the flow to your needs.
                  </li>
                  <li>
                    <b>End-to-end governance process.</b>
                    We help you deploy Snapshot, Tally and Karma. So that you
                    have a full fledge governance layer with multiple frontends.
                  </li>
                  <li>
                    <b>Zero operations.</b>
                    No technical expertise needed. We handle the code,
                    operations and deployment, end-to-end.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between gap-2">
            <div className="rounded-lg bg-neutral-50 p-6 w-full">
              <h3>Delegate Management</h3>
              <Image
                src="/admin-tools.png"
                width={400}
                height={90}
                alt="ENS logo"
                className="my-4"
              />
              <p>
                Do you know who still needs to vote? Need to nudge delegates to
                hit quorum? Who are your best delegates and contributors?
              </p>
              <ul>
                <li>
                  <b>Measurable decentralization.</b>
                  We help you track where you’re at on the decentralization
                  scale and provide tractable next steps.
                </li>
                <li>
                  <b>Mission control.</b>
                  Search, track, message delegates. Track voting progress. Query
                  data and build analytics `beta`
                </li>
                <li>
                  <b>Notifications & Alerts.</b>
                  Notify delegates before votes and important announcements.
                  Integrates with Discord and Telegram. `beta``
                </li>
              </ul>
            </div>
            <div className="rounded-lg bg-neutral-50 p-6 w-full">
              <h3>Continual Improvements</h3>
              <Image
                src="/gov-client.png"
                width={720}
                height={90}
                alt="ENS logo"
                className="my-4"
              />
              <p>
                Get the latest updates and learnings from other DAOs. We’ll keep
                shipping improvements so that you don’t need to worry about
                bugs, maintenance, and the latest features.
              </p>
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

            <div className="rounded-lg bg-neutral-50 p-6 w-full">
              <h2>Request Features</h2>
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
      </main>
      <footer className="container mx-auto max-w-screen-2xl bg-white px-4 lg:px-24">
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
      </footer>
    </div>
  );
}
