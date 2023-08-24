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
                Agora is the best governance app, whether you&apos;re just
                getting started or already have a thriving community
              </h1>
              <p className="max-w-4xl">
                We provides onchain organizations with the tools they need to
                make quick, effective, and permissionless decisions that help
                their communities grow. Agora handles the infra so you can focus
                on building your protocol.
              </p>
            </div>
            <button className="py-2 px-4 mt-6 bg-neutral-950 text-white rounded-lg">
              <a href="mailto:charlie@voteagora.com"></a>
              Get in touch
            </button>
          </div>
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
        </section>
        <section>
          <div className="max-w-3xl mb-4 flex flex-col gap-3">
            <h1>
              Agora provides the foundation for your community&apos;s growth
            </h1>
          </div>
          <div className="border rounded-t-lg flex justify-around flex-col sm:flex-row">
            <div className="px-6 py-12">
              <h4 className="pb-3">Today</h4>
              <ul className="flex flex-col">
                <li>Hard to attract new delegates and contributors</li>
                <li>Operational nightmare shepherding proposals through</li>
                <li>Credible and productive decentralization are tradeoffs</li>
              </ul>
            </div>
            <div className="sm:border-r"></div>
            <div className="px-6 py-12">
              <h4 className="pb-3">With Agora</h4>
              <ul className="flex flex-col">
                <li>
                  Use our tooling to attract and retain delegates and
                  recruiters.
                </li>
                <li>Notifications remind delegates to vote.</li>
                <li>
                  Track of decentralization and effectiveness through community
                  KPIs
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-b-lg px-6 py-12 border-x border-b mb-24 flex justify-around bg-gray-50">
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
        </section>

        <section className="mb-24">
          <div className="max-w-xl mb-4">
            <h4>For existing onchain communities</h4>
            <h1>Ecosystem Growth Tier</h1>
            <p>
              Agora provides an all-in-one operating system to source, attract,
              and collaborate with your delegates and ecosystem contributors.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-between gap-x-2">
            <div className="rounded-lg bg-gray-50 px-6 py-8 sm:my-2 sm:w-1/2">
              <h2>Governor upgrades</h2>
              <p>
                Agora upgrades your governor with features to supercharge your
                community
              </p>
              <Image
                src="/gov-upgrades.png"
                width={720}
                height={90}
                alt="ENS logo"
                className="my-4"
              />

              <ul>
                <li>
                  With partial delegation, no more splitting up multi-sigs to
                  run programs.
                </li>
                <li>
                  Enable time-bound, split rights and re-delegation capabilities
                  with liquid delegation.
                </li>
                <li>
                  Deploy For/Against or multiple choice proposals based on your
                  needs.
                </li>
              </ul>
            </div>
            <div className="rounded-lg bg-gray-50 px-6 py-8 my-2 sm:w-1/2">
              <h3>Agora Governor Client</h3>
              <p>
                Beautiful delegation and voting interface. Easy to create
                proposal creation.
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
                    Agora is the only app designed around the needs of your
                    delegates and contributors.
                  </li>
                  <li>
                    We take care of the infrastructure and hosting, tailored to
                    your design system on your domains.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between gap-2">
            <div className="rounded-lg bg-gray-50 p-6 sm:w-1/3">
              <Image
                src="/ecosystem-tools.png"
                width={400}
                height={90}
                alt="ENS logo"
                className="my-4"
              />
              <h2 className="mb-4 mt-6">Ecosystem growth tooling</h2>
              <ul>
                <li>
                  Attract new delegates to your ecosystem and help reward and
                  engage existing ones with delegate Races
                </li>
                <li>
                  Plug and play any grants program you like using our on-chain
                  RFP system. Attract an ecosystem of builders.
                </li>
                <li>
                  asy to implement, easy to cancel streams for your contributors
                  and vendors.
                </li>
              </ul>
            </div>

            <div className="rounded-lg bg-gray-50 p-6 sm:w-1/3">
              <Image
                src="/admin-tools.png"
                width={400}
                height={90}
                alt="ENS logo"
                className="my-4"
              />
              <h2 className="mb-4 mt-6">Admin mission control</h2>
              <ul>
                <li>
                  We help you track where you&rsquo;re at on the
                  decentralization scale and provide tractable next steps.
                </li>
                <li>
                  Search, track, message delegates. Track voting progress. Query
                  data and build analytics beta
                </li>
                <li>
                  Notify delegates before votes and important announcements.
                </li>
              </ul>
            </div>

            <div className="rounded-lg bg-gray-50 p-6 sm:w-1/3">
              <Image
                src="/open-source.png"
                width={400}
                height={90}
                alt="ENS logo"
                className="my-4"
              />
              <h2 className="mb-4 mt-6">Open-source & Interopable</h2>
              <ul>
                <li>
                  Agora is fully MIT-licensed Open Source Software. Never worry
                  about being locked in.
                </li>
                <li>
                  We help you deploy Snapshot, Tally and Karma. So that you have
                  a full fledge governance layer with multiple frontends.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="pb-24">
          <div className="max-w-xl mb-4">
            <h4>For soon-to-be-DAOs</h4>
            <h1>DAO Launch Tier</h1>
            <p>
              Agora launches your token and decentralized governance from
              end-to-end, and helps you build a thriving community.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-between gap-2 my-2">
            <div className="rounded-lg bg-gray-50 p-6 w-full">
              <h2>Token launch</h2>
              <p>
                We&apos;ll help you do your airdrop right, get a good initial voter
                base, and deploy your token with the right gov features.
                <Image
                  src="/token-launch.png"
                  width={700}
                  height={90}
                  alt="ENS logo"
                  className="my-4"
                />
              </p>
              <ul>
                <li>Customize and deploy your governance-ready token.</li>
                <li>
                  Deploy a flexible token claim and airdrop UI with built in
                  delegation cadences.
                </li>
                <li>
                  Run scenario tests and simulation modeling for different
                  incentive structures of your token launch. Manage multi round
                  airdrop.
                </li>
              </ul>
            </div>

            <div className="rounded-lg bg-gray-50 p-6 w-full">
              <h2>Governance contract deployment</h2>
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
                  With partial delegation, no more splitting up multi-sigs to
                  run programs.
                </li>
                <li>
                  Enable time-bound, split rights and re-delegation capabilities
                  with liquid delegation.
                </li>
                <li>
                  Deploy For/Against or multiple choice proposals based on your
                  needs.
                </li>
              </ul>
            </div>
          </div>

          <div className="rounded-lg bg-gray-50 p-6 my-2">
            <h2>And everything in the previous tier</h2>
          </div>
        </section>
      </main>
      <footer></footer>
    </div>
  );
}
