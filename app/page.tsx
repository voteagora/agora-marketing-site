import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-50">
      <header></header>
      <main className="container mx-auto max-w-screen-2xl bg-white px-24 pt-12">
        <section>
          <div className="flex flex-col gap-3 max-w-xl">
            <h4>Governance infra for onchain communities</h4>
            <h1>
              Deploy a production-ready governance stack – from no governance to
              thriving ecosystem.
            </h1>
            <p>
              We provide onchain organizations with the tools they need to make
              quick, effective, and permissionless decisions that help their
              communities grow. Agora handles the infra so you can focus on
              building your protocol.
            </p>
          </div>
          <button className="py-2 px-4 mt-6 bg-neutral-950 text-white rounded-lg">
            Get in touch
          </button>
          <Image
            src="/op-agora.png"
            width={1000}
            height={1000}
            alt="Picture of the Optimism Agora"
            className="w-full border rounded-lg my-6"
          />
        </section>
        <section className="mb-24">
          <h4>Trusted by</h4>
          <div className="flex justify-between py-6 px-12 rounded-lg border">
            <Image
              src="/logo-optimism.png"
              width={120}
              height={90}
              alt="ENS logo"
              className="saturate-0 opacity-80 hover:saturate-100 hover:opacity-100 transition"
            />
            <Image
              src="/logo-uniswap.png"
              width={120}
              height={90}
              alt="ENS logo"
              className="saturate-0 opacity-80 hover:saturate-100 hover:opacity-100 transition"
            />
            <Image
              src="/logo-ens.png"
              width={120}
              height={90}
              alt="ENS logo"
              className="saturate-0 opacity-80 hover:saturate-100 hover:opacity-100 transition"
            />
            <Image
              src="/logo-nouns.png"
              width={120}
              height={90}
              alt="ENS logo"
              className="saturate-0 opacity-80 hover:saturate-100 hover:opacity-100 transition"
            />
            <Image
              src="/logo-lyra.png"
              width={120}
              height={90}
              alt="ENS logo"
              className="saturate-0 opacity-80 hover:saturate-100 hover:opacity-100 transition"
            />
          </div>
        </section>
        <section>
          <div className="max-w-3xl mb-4 flex flex-col gap-3">
            <h1>Agora provides the foundation for your community's growth</h1>
            <p>
              We provide the governance infrastructure that enables your team
              and community to focus on growing your protocol. Spend your time
              growing your protocol, not chasing after voters.
            </p>
          </div>
          <div className="border rounded-t-lg flex">
            <div className="p-6 border-r">
              <h4 className="pb-3">Today</h4>
              <ul className="flex flex-col gap-3">
                <li>Hard to attract new delegates, contributors</li>
                <li>Operational nightmare shepherding proposals through</li>
                <li>
                  Hard to maintain credible decentralization: correct votable
                  supply, good token distributiom
                </li>
              </ul>
            </div>
            <div className="p-6">
              <h4 className="pb-3">With Agora</h4>
              <ul className="flex flex-col gap-3">
                <li>
                  Our network brings in contributors, delegates and fresh talent
                  to your ecosystem.{" "}
                </li>
                <li>
                  We handle the infra while you focus on tuning the incentives
                  and economics to growing an ecosystem your community loves
                </li>
                <li>
                  Clear tracking of decentralization metrics and community KPIs
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-gray-800 rounded-b-lg px-6 py-6 text-gray-200 mb-24">
          <p>
            "Running our first delegate race with Agora, we were able to offload
            so much of the operational headaches to them. We attracted 3x more
            active delegates in 1 month than we had in the last 3 years. On top
            of this, we were able to increase votable supply by 25% in the
            ecosystem, this is a crucial step in our path towards decentralizing
            Uniswap."
          </p>
          <h4 className="mt-4 text-gray-200">
            Devin Walsh – Uniswap Foundation
          </h4>
        </section>

        <section className="mb-24">
          <div className="max-w-xl mb-4">
            <h4>Already have a decentralized community?</h4>
            <h1>Ecosystem Growth Package</h1>
            <p>
              Agora assists you in decentralization from end-to-end. All-in-one
              operating system to source, attract, and collaborate with your
              delegates and ecosystem contributors.
            </p>
          </div>

          <div className="flex justify-between gap-2">
            <div className="rounded-lg bg-gray-50 p-6 my-2">
              <h2>Governor upgrades</h2>
              <p>
                Deploy Agora governor in one-click. Flexible and customizable
                parameters and modules available.
              </p>
              <Image
                src="/gov-upgrades.png"
                width={720}
                height={90}
                alt="ENS logo"
                className=""
              />

              <ul>
                <li>
                  Partial delegation. No more splitting up multi-sigs to run
                  programs.
                </li>
                <li>
                  Liquid delegation. Enable time-bound, split rights and
                  re-delegation capabilities.
                </li>
                <li>
                  Quorum management. Dynamic quorums, flexible quorums, based on
                  what you need.
                </li>
                <li>
                  Multiple voting systems. Standard voting (Yes/No), Approval
                  Voting, Quadratic Voting, customized to your governance needs.
                </li>
              </ul>
            </div>
            <div className="rounded-lg bg-gray-50 p-6 my-2">
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
                className=""
              />
              <div className="flex">
                <ul>
                  <li>
                    White label solutions. We take care of the infrastructure
                    and hosting, tailored to your design system on your domains.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex justify-between gap-2">
            <div className="rounded-lg bg-gray-50 p-6 w-full">
              <h2>Ecosystem growth tooling</h2>
              <p>
                We deploy tools that grow your ecosystem, and make your
                contributors’ lives easier
                <Image
                  src="/ecosystem-tools.png"
                  width={400}
                  height={90}
                  alt="ENS logo"
                  className=""
                />
              </p>
              <ul>
                <li>
                  Delegate Races. Attract new delegates to your ecosystem and
                  help reward and engage existing ones.
                </li>
                <li>
                  On-chain RFPs. Plug and play any grants program you like.
                  Attract an ecosystem of builders.
                </li>
                <li>
                  Perpetual streams. Easy to implement, easy to cancel streams
                  for your contributors and vendors.{" "}
                </li>
              </ul>
            </div>

            <div className="rounded-lg bg-gray-50 p-6 w-full">
              <h2>Admin mission control</h2>
              <p>We give your foundation and delegates superpowers</p>
              <Image
                  src="/admin-tools.png"
                  width={400}
                  height={90}
                  alt="ENS logo"
                  className=""
                />
              <ul>
                <li>
                  Measurable decentralization. We help you track where you’re at
                  on the decentralization scale and provide tractable next
                  steps.
                </li>
                <li>
                  Delegate Relationship Management. Search, track, message
                  delegates. Track voting progress. Query data and build
                  analytics beta
                </li>
                <li>
                  Notifications & Alerts. Notify delegates before votes and
                  important announcements. Integrates with Discord and Telegram.
                  beta
                </li>
              </ul>
            </div>

            <div className="rounded-lg bg-gray-50 p-6 w-full">
              <h2>Open-source & Interopable</h2>
              <Image
                  src="/open-source.png"
                  width={400}
                  height={90}
                  alt="ENS logo"
                  className=""
                />
              <p>
                We help you deploy Snapshot, Tally and Karma. So that you have a
                full fledge governance layer with multiple frontends.
              </p>
            </div>
          </div>
        </section>

        <section className="pb-24">
          <div className="max-w-xl mb-4">
            <h4>Just getting started?</h4>
            <h1>DAO Launch Package</h1>
            <p>
              Agora launches your decentralized governance from end-to-end. It’s
              an all-in-one operating system to instantiate governance, source,
              attract, and collaborate with your delegates and ecosystem
              contributors.
            </p>
          </div>

          <div className="flex justify-between gap-2 my-2">
            <div className="rounded-lg bg-gray-50 p-6 w-full">
              <h2>Token launch</h2>
              <p>
                We'll help you do your airdrop right, get a good initial voter
                base, and deploy your token with the right gov features.
                <Image
                  src="/token-launch.png"
                  width={700}
                  height={90}
                  alt="ENS logo"
                  className=""
                />
              </p>
              <ul>
                <li>
                  One-click token deployment. Customize and deploy your token
                  correctly, with governor readiness.
                </li>
                <li>
                  Token claim UI. Flexible token claim and airdrop UI with built
                  in delegation cadences.
                </li>
                <li>
                  Token airdrop and incentive design. Scenario tests and
                  simulation modeling for different incentive structures of your
                  token launch. Manage multi round airdrop.
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
                  className=""
                />
              <ul>
                <li>
                  Partial delegation. No more splitting up multi-sigs to run
                  programs.
                </li>
                <li>
                  Liquid delegation. Enable time-bound, split rights and
                  re-delegation capabilities.
                </li>
                <li>
                  Multiple voting systems. Standard voting (Yes/No), Approval
                  Voting, Quadratic Voting, customized to your governance needs
                </li>
              </ul>
            </div>
          </div>

          <div className="rounded-lg bg-gray-50 p-6 my-2">
            <h2>And everything in the previous tier</h2>
            <p>You'll eventually need this stuff trust me.</p>
          </div>
        </section>
      </main>
      <footer></footer>
    </div>
  );
}
