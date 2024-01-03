---
title: 'RetroPGF 3 Retro'
date: '2023-11-17T05:35:07.322Z'
author:
  name: Charlie Feng
  picture: '/assets/blog/authors/charlie.jpeg'
ogImage:
  url: '/assets/blog/hello-world/cover.jpg'
---

## TL;DR


2023 marked the conclusion of RetroPGF 3, one of the boldest experiments in the realm of governance testing new ideas in incentive design and coordinating. At Agora, we're incredibly fortunate to have built the software platform that supported the latest iteration of this program. As it ended, I reviewed our experience supporting the effort. In short, our main takeaways were:


- **Unprecedented Scale**: RPGF 3 generated unprecedented volumes of traffic, peaking at 13 million requests in its final week, underscoring the immense engagement it garnered.
- **The emergence of community tools**: many developers built popular micro apps on top of our API to help projects and voters engage with RPGF3 in ways we didn't exect
- **Changing the funding game**: with its size and consistency, RPGF is slowly changing how projects think about funding their work

## RetroPGF3 by the numbers

### Traffic and uptime

![traffic](https://i.imgur.com/45NMqMh.png)

Agora sees on average ~100k monthly users, so we're no stranger to traffic. However, we did not anticipate the level of interest the community showed in RPGF3. Over the course of voting period, Agora processed over 13M requests to [vote.optimism.io](http://vote.optimism.io) and our API, averaging between 300-500K requests per day. In the last week alone, our servers handled over 5M requests. During peak times we were serving nearly 30 requests per second and by far the most surprising thing was that we had traffic coming in from multiple clients beyond West and Agora – ones that we were not expecting. 

![uptime](https://i.imgur.com/hAnqWCv.png)
While Agora was up 99.65% of the time, we had severely degraded performance for 5-6 hours on our API during the last day of the voting period. This combined, with the CloudFlare outage on November 6th, means that our our true non-degraded updated was slightly under 99%. Luckily, our downtime was observed only by a small portion of citizens who voted on the last day. Regardless,  we take our uptime very seriously and have made major improvements to our codebase to make sure this doesn't happen again.


### Ballot Behavior

Another big surprise for us were the ballots, we expected Citizens to put 30-50 projects into their ballot as we assumed (wrongly) that doubling the amount of OP would only double the project and ballot size. It quickly became clear that we were quite off in this assumption. In reality, over 70 lists were created, and some of these lists contained over 100 projects. We suspect that when Citizens saw the number of projects, they decided to be more generous with their distributions: 

- Over 30 badgeholders had more than 200 projects in their ballot
- One badgeholder had over 500 ‼️

For the next round, we're going to do a lot more scenario modeling to stress out different voting behaviors and situations. From a feature perspective, we'll also be thinkig through support for:
- Offline building of ballots
- Power user features like ability to bulk-add projects (perhaps via CSV import)
- Improved admin dashboard / support features (maybe even help better [monitor](https://gov.optimism.io/t/badgeholder-conflict-of-interest-disclosures/5569/2) conflicts of interest or whitelists, etc.)

## Permissionless RetroPGF Clients

### Opening up the API for all

We had originally [scoped to build](https://github.com/ethereum-optimism/ecosystem-contributions/issues/104) the RetroPGF to serve two clients: Agora and West. By the end of RPGF3, we counted a total of 8 unique clients that were using our API, not including the two official clients, with [retropgfhub.com](http://retropgfhub.com) being by far the biggest. Unfortunately, we were not expecting this kind of behavior and didn’t instrument our API with the best metrics for proper accounting, but we will be doing that in the future. We love this energy by the Optimism ecosystem and fully intend to provide better support for builders by building a robust and accessible API for the whole community. Clearly there is an appetite for it and we can use it to help expand the ecosystem and encourage more developers to jump in building tools for OP. 

### Request for Feedback

The above is just to name a few changes we are publicaly committing to improving. However, we’re already seeing a [whole](https://gov.optimism.io/t/retropgf-round-3-feedback-thread/6177) [spectrum](https://gov.optimism.io/t/retropgf-experimentation-voting-algorithms/7216) of [feedbacks](https://gov.optimism.io/t/lefteris-rpgf-3-voting-rationale-learnings-and-feedback/7213) just like the last round. 

If you’re a builder in the ecosystem or a badgeholder, we'd love to hear your feedback or things you want to see improved for next round, please don’t hesitate to reach out and ping us on Discord anytime! We’re excited to hear from you!

## Why we’re Optimistic on RetroPGF

All in all, I love that Optimism is in the arena, experimenting and constantly building. As fellow builders, we will always be supporting those who are trying to build things better – and RetroPGF is certainly one of the boldest initiatives in the area of funding public goods. If it's successful, there will be a serious of 2nd order impacts that will be incredibly exciting:

- Public goods will for the first time have a potentially reliable and dependable source of revenue. One that’s potentially bankable.
- I don’t say the word “bankable” as a meme. I built a $2B financing business in my prior life, and the key to any funding is in the ability to underwrite a future potential. RPGF creates that future potential.
- This means that VCs or even banks could potentially fund public goods and businesses who are using RPGF as their primary business plan.
- Similarly, you can start to spend and hire with RetroPGF as a collateral of future earnings. This is exciting because it will increase the ambition of projects in the future.