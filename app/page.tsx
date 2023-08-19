import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-50">
      <header></header>
      <main className="container mx-auto max-w-screen-lg bg-white px-8 pt-12">
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
          <button className="py-2 px-4 mt-6 bg-neutral-950 text-white rounded">
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
        <section className="mb-12">
        <h4>Trusted by</h4>
          <div className="flex justify-between py-6 px-12 rounded border">
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
          <h1>What we offer: Solid foundation to enable ecosystem growth.</h1>
          <p>
            We provide a strong governance foundation that enables your team and
            community to focus on growing your protocol. Spend your time growing
            your protocol and community, not chasing after voters.
          </p>

          <h2>Today</h2>
          <ul>
            <li>Hard to attract new delegates, contributors</li>
            <li>Operational nightmare shepherding proposals through</li>
            <li>
              Hard to maintain credible decentralization: correct votable
              supply, good token distributiom
            </li>
          </ul>

          <h2>With Agora</h2>
          <ul>
            <li>
              Our network brings in contributors, delegates and fresh talent to
              your ecosystem.{" "}
            </li>
            <li>
              We handle the infra while you focus on tuning the incentives and
              economics to growing an ecosystem your community loves
            </li>
            <li>
              Clear tracking of decentralization metrics and community KPIs
            </li>
          </ul>
        </section>

        <section>
          <p>
            Running our first delegate race with Agora, we were able to offload
            so much of the operational headaches to them. We attracted 3x more
            active delegates in 1 month than we had in the last 3 years. On top
            of this, we were able to increase votable supply by 25% in the
            ecosystem, this is a crucial step in our path towards decentralizing
            Uniswap.
          </p>
          <p>Devin Walsh, Uniswap Foundation</p>
        </section>

        <section>
          <h1>Ecosystem Growth Package</h1>
          <div>Already have a decentralized community?</div>
          <div>
            Agora assists you in decentralization from end-to-end. All-in-one
            operating system to source, attract, and collaborate with your
            delegates and ecosystem contributors.
          </div>

          <div>
            <h2>Governance application stack</h2>
            <div>
              <h3>Governor upgrades</h3>
              <p>
                Deploy Agora governor in one-click. Flexible and customizable
                parameters and modules available.
              </p>
              <img src="https://placehold.co/600x400" alt="" />
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

            <div>
              <h3>Agora Governor Client</h3>
              <p>
                Beautiful delegation and voting interface. Easy to create
                proposal creation.
              </p>
              <img src="https://placehold.co/600x400" alt="" />
              <ul>
                <li>
                  White label solutions. We take care of the infrastructure and
                  hosting, tailored to your design system on your domains.
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h2>Ecosystem growth tooling</h2>
          </div>
        </section>
      </main>
      <footer></footer>
    </div>
  );
}
