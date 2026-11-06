---
layout: default
title: "Notes from the Foot of an Avalanche"
categories: [personal]
tags: [rant]
toc: true
---

# Notes from the Foot of an Avalanche

*November 2026*

## 1. An Apology for Cryptography

A misanthrope in me once decided that all humans are fallible, and that nothing could be trusted except systems that never make false promises once you learn how they work. The truth is always right there upfront, as long as you're ready to receive it. Math and physics gave me a rigid way of telling the honest truth.

That's what I used to think, anyway.

I came to cryptography and security partly because of this. Once you speak the language of math and protocols, you stop having to take anyone's word for things, because you can go and check.

![A six-fold rosette of overlapping circles, gold lenses and radiating lines](/TechnicaInsania/assets/img/avalanche/complexity-rosette.svg){: w="1200" }
_Easy things in the middle, hard things all the way out._

I love this line from [Harari](https://en.wikipedia.org/wiki/Yuval_Noah_Harari)'s [*Sapiens*](https://en.wikipedia.org/wiki/Sapiens:_A_Brief_History_of_Humankind):

> Biology enables, culture forbids. [...] whatever is possible is by definition also natural.

Harari was making a point about sex and what people like to call "unnatural", but I think it's even more true at the level of math and physics. One of the most basic techniques in math, [proof by contradiction](https://en.wikipedia.org/wiki/Proof_by_contradiction), runs on exactly this: assume the impossible thing, follow it until it breaks, and what's left is what's actually possible.

I wanted to turn that into something you could build systems on. A cryptosystem defines what's possible inside it, and you can't cheat it. If you try, you either get back randomness, or you've broken an assumption everyone believed in, which is about as close to discovering a new law of nature as this field gets.

The first place I saw this applied to people instead of numbers was [Byzantine agreement](https://en.wikipedia.org/wiki/Byzantine_fault). A handful of generals surround a city and have to agree on whether to attack, some of them are traitors sending different messages to different generals, and nobody knows which ones. It turns out you can still guarantee the loyal ones end up agreeing, as long as the traitors stay under a certain number.

I'm still trusting something, obviously. I'm trusting the assumptions, the code somebody wrote, and whoever reviewed the proof before I read it. But every one of those can be written down and checked, and if you keep following the chain far enough you land on a law of physics or an axiom, which is a much better place to put your faith than somebody's promise.

I'm still learning, still chasing those chains down so I can build from the end of one. What I respect most is using math to put hard limits on what agents, human and now AI, can do to each other and build together.

## 2. A Nash Equilibrium of Distrust

Here's a thought experiment with two worlds.

In the first, everyone is honest. Nobody steals your data or games a system just because they can. You barely need cryptography.

In the second, everyone is selfish and will exploit anyone given the chance. But you have perfect cryptography. You can pin down exactly what the other party may learn or do, and enforce it without their goodwill. (Yes, this is basically a [CPA game](https://en.wikipedia.org/wiki/Ciphertext_indistinguishability), lol, but bear with me.)

As a person, I'd pick the first. As a researcher, I keep thinking about the second, partly because I don't believe the first exists (maybe in a world without humans like us), and partly because the universe seems to drift toward whatever's cheapest, and selfishness is cheap.

The marvellous thing is that [game theory](https://en.wikipedia.org/wiki/Game_theory) offers a way out. It gives you a model, with uncomfortable accuracy, of how agents like us actually behave. The [prisoner's dilemma](https://en.wikipedia.org/wiki/Prisoner%27s_dilemma) taught me more about the world than [Aesop's fables](https://en.wikipedia.org/wiki/Aesop%27s_Fables) ever did (though I suspect I needed Aesop's morals first to be ready for the prisoner's dilemma, lol).

Cryptography sits one level of abstraction above that. It isn't game theory, but it rewrites the payoff table for everyone involved, making betrayal computationally expensive and cooperation the rule of the game. You can still refuse to play, like [the AI that learned to pause Tetris forever so it would never lose](http://tom7.org/mario/), but you don't get anything for it.

The point is, in a world run on game theory (which quietly underpins a shit tonne of economics), building cryptography is like doing engine design in an automotive world. It's essential, and it's how the whole thing actually runs.

Trust still matters, but cryptography gives people who don't particularly like each other a shared language of math to build things in anyway.

## 3. The World of the Oubliette

The ideal world of crypto I've found this past year is the one in [*The Quantum Thief*](https://en.wikipedia.org/wiki/The_Quantum_Thief): a city built on Mars thousands of years from now, where cryptography is the main thing holding society together. Privacy is wired into everyone's senses, so you can't see someone unless they want to be seen. If you've watched [*White Christmas*](https://www.youtube.com/watch?v=_dXqugxU1sk) from [Black Mirror](https://en.wikipedia.org/wiki/Black_Mirror), it's like "blocking" in that episode, where once someone blocks you, all you see of them is a fuzzy grey silhouette and all you hear is muffled static (do watch the clip for the dramatic version, lol). The Oubliette goes much further. You can share a memory with a friend and take it back later, and if you walk away from a conversation, the other person might only remember that it happened, because you never granted them the rest.

All of this runs on a system called gevulot, and it gets more cracked and insane than I can do justice to here, so yeah, go read the book. A lot of the cryptography behind it already exists today. What doesn't exist yet is the setting, a city with more computation than it knows what to do with, full of people who've rebuilt their minds so thoroughly they've forgotten they were ever human.

We can already prove we have enough money for a transaction without handing over our financial history, contribute data to a computation without exposing it, and show that a process followed the rules without giving away the full log, but only in versions that are slow and expensive enough to stay out of most people's lives. In the Oubliette, that's just how you buy a coffee.

That doesn't make it a utopia. Whoever decides which boundaries exist, and whoever runs the machinery enforcing them, holds a kind of power that's very hard to challenge, because the system that stops a company from seeing your data can just as easily stop you from seeing what the company does with its own. At that scale cryptography ends up deciding where a society draws its lines, which is a much bigger job than hiding messages.

And still, power problems and all, it's the world my researcher brain keeps wandering back to.

![The Oubliette, a walking city crossing the Martian desert](/TechnicaInsania/assets/img/avalanche/oubliette-city.png){: w="700" }

It shows me what crypto looks like when it's used in full: an alien world where everyone is together and nobody can see each other, where you get a truer kind of solitude than our biology allows. Maybe that's not a world I'd want to live in, but with the tools I have, maybe I could help build it? I dunno man, I feel like I'm turning into one of the [e/acc](https://en.wikipedia.org/wiki/Effective_accelerationism) guys, lol.

![A busy Oubliette street where some people are sharp and others are blurred, privacy-veiled silhouettes](/TechnicaInsania/assets/img/avalanche/gevulot-crowd.png){: w="700" }

## 4. Notes from the Foot of an Avalanche

Ooo boi. While I've been hyping up the math and the science and the crypto, the last few months have been traumatizing, to say the least.

[The Mathocalypse](https://scottaaronson.blog/?p=10169) is here, and the world has changed for good. I'd only just started this hike through math and theory when I saw an avalanche coming, and it's a huge one.

![A lone hiker on a grassy ridge watching an avalanche pour down a snowy mountain](/TechnicaInsania/assets/img/avalanche/avalanche.png){: w="700" }
_The hike, interrupted._

I'm learning cryptography because I think it's beautiful, and a big part of the beauty is how slow it is. An abstract construction can sit untouched for years before it ends up inside something as ordinary as a card payment. The avalanche is that slowness disappearing.

So now I'm wondering what happens when the rate of discovering and using mathematics jumps. [Terry Tao](https://en.wikipedia.org/wiki/Terence_Tao) has an analogy about hiking versus taking a helicopter, and that's roughly where I am: I'd barely learned how to hike when a helicopter flew past. Part of me has an inferiority complex about riding it at all, like I haven't earned the seat. But I'm sure it'll be "you'll learn on the job" from here on.

Cryptographers have always been the paranoid ones, but the paranoia used to come with a timescale. People talked about a result that might land in a few years. Now it's closer to "we don't know which problems survive the next few months." Nobody has shown that cryptography is broken.

<blockquote class="reddit-embed-bq" data-embed-height="500"><a href="https://www.reddit.com/r/agi/comments/1x0u705/ohhhhhhhhhhhhhhhhhh/">Ohhhhhhhhhhhhhhhhhh</a><br> in <a href="https://www.reddit.com/r/agi/">r/agi</a></blockquote><script async src="https://embed.reddit.com/widgets.js" charset="UTF-8"></script>

I sometimes wonder what intelligence agencies already know, and it's not a crazy thing to wonder. When IBM and the NSA designed [DES](https://en.wikipedia.org/wiki/Data_Encryption_Standard) in the 1970s, they already knew about [differential cryptanalysis](https://en.wikipedia.org/wiki/Differential_cryptanalysis) and quietly hardened the cipher against it, and the public didn't rediscover the attack until [Biham](https://en.wikipedia.org/wiki/Eli_Biham) and [Shamir](https://en.wikipedia.org/wiki/Adi_Shamir) in the late 80s. In 2013 the [Snowden](https://en.wikipedia.org/wiki/Edward_Snowden) documents pointed to the NSA having pushed a backdoored random number generator, [Dual_EC_DRBG](https://en.wikipedia.org/wiki/Dual_EC_DRBG), into a NIST standard. They've been years ahead before, so I don't think it's paranoid to assume they're ahead now. Maybe the security we're relying on is already gone, but hey, at least it was nice while it lasted.

I can't tell if this should make me more excited about theoretical cryptography or less. It's exactly why theory matters: you can't predict which ideas become useful. It's also unsettling that an abstract exercise can change what other people can do to you, and that you can't measure the distance between a proof and its consequences in advance.

But there's a line from [*There Will Be Blood*](https://en.wikipedia.org/wiki/There_Will_Be_Blood) I keep coming back to: "those areas have not yet been drilled into, Eli."

There are mountains left to conquer. Only this time, instead of hiking, we'll be gliding.

## 5. Sometimes, They'll See

I've been going on and on about systems and math and AI and security, so: does all this make me more or less excited about cryptography? Honestly, I can't tell what I feel (circa '26, the year of the AI [zero-day](https://en.wikipedia.org/wiki/Zero-day_(computing))).

I started learning this field to understand the mathematical model of trust the world runs on. In all the time I've spent playing around with these machines, I've seen some incredible things. I've watched bits glitter through fibre-optic cable, carrying abstractions across oceans. In the end it's all just elaborate ways for humans to reach each other.

I've stopped expecting our cleverness to save us. Security has always run on a kind of "ooh, we're so clever, we built the cleverest logical thing we could think of, so it'll hold." That isn't going to work anymore.

![Two big-brained figures playing chess](/TechnicaInsania/assets/img/avalanche/brain-chess.png){: w="500" }
_Security research, circa '26._

AI is about to bring in the real game, with math and logic we don't fully understand. A few weeks ago OpenAI released [a proof](https://github.com/openai/math/blob/main/preprints/The-Unique-Games-Theorem-September-23-2026/paper.pdf) of [Khot](https://en.wikipedia.org/wiki/Subhash_Khot)'s [Unique Games Conjecture](https://en.wikipedia.org/wiki/Unique_games_conjecture), and [Dana Moshkovitz](https://www.cs.utexas.edu/~danama/), who's worked on it since around 2009, has been decoding it alongside Khot himself. [Scott Aaronson relays](https://scottaaronson.blog/?p=10232#comment-2042746) that she sees its core as "a totally alien new error-correcting code", one none of the human [PCP](https://en.wikipedia.org/wiki/PCP_theorem) experts had come up with, wrapped in a lot of standard, boring machinery to make it a proof.

Cryptography distributes power or concentrates it, depending on which era you're using it in, and being clever doesn't bring visibility along with it. But uncertainty isn't a reason to decide the whole thing is pointless.

I wonder what cryptography looks like in five hundred years. Maybe [lattices](https://en.wikipedia.org/wiki/Lattice-based_cryptography) end up as quaint as [Enigma](https://en.wikipedia.org/wiki/Enigma_machine) rotors. Maybe some questions I find hard become arithmetic. No idea, and I like that.

There's a favourite quote of mine from exurb1a, from [this video](https://www.youtube.com/watch?v=3N5lgUgAQ-g):

> Will they see? ... In the next cycle, do you think they'll see how beautiful everything is? ... Sometimes, only sometimes. All the time would be too much. Never would be too little. And sometimes, that's enough.

That's how this whole field feels right now. Every so often something clicks. A definition that looked arbitrary turns out to have structure, or a problem that seemed impossible gives way once you find the right way to look at it. You see a small piece of a much bigger landscape, and then you go back to not understanding most of it.

And (mind my French) I don't think a "clanker" is going to ruin the experience for me. Who knows, maybe I'll even understand it better, since it's the truth or something.

I'm still at the foot of the avalanche. I don't know how much of the mountain will be left, or whether I'll get anywhere near the top.

I still want to climb it.

---

**PS.** A few things I left out of the main bit:

Byzantine agreement works as long as fewer than a third of the parties are traitors ([Lamport, Shostak and Pease, 1982](https://lamport.azurewebsites.net/pubs/byz.pdf)). An actual number for how much betrayal a group can take. Still my favourite fact.

Some cryptography doesn't care how big your computer is. A [one-time pad](https://en.wikipedia.org/wiki/One-time_pad) or [Shamir secret sharing](https://en.wikipedia.org/wiki/Shamir%27s_secret_sharing) is secure against unlimited compute, because the information just isn't there to find. Oubliette-proof, basically.

"Which problems survive the next few months" has precedent. [SIKE](https://en.wikipedia.org/wiki/Supersingular_isogeny_key_exchange) made it to the fourth round of [NIST's post-quantum process](https://en.wikipedia.org/wiki/NIST_Post-Quantum_Cryptography_Standardization), then in 2022 [Castryck and Decru broke it](https://eprint.iacr.org/2022/975) in about an hour on one core, using a 1997 theorem of Kani's that had been sitting in the literature the whole time.

If any of this got you curious, I made an [Atlas of Theoretical Cryptography](https://sanathnu.github.io/Curiositas/atlas-of-crypto/#about), a map of the field you can wander around in. This post is just the trailhead, kinda thing.

Oh, and the images in this post are AI generated. It's too good to be ignored these days, damn, and I just wanted to get my story out, man.