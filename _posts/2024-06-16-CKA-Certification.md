---
title: "CKA Certification: Insights and Experiences"
date: 2024-06-16
categories: [Cloud Computing, Kubernetes]
tags: [rant]
---
<img src="{{site.baseurl | prepend: site.url}}/assets/img/CKA/cka.png" alt="Map">

# Introduction
Hello, so first things first. This is not for people who have never heard of the terms Docker or Kubernetes. So, if any of those folks are here, consider yourself warned. I do not want to bore you with the details of how the exam was or what the procedure is. I'm sure you will find lots of resources on the internet. If you want an optimistic outlook, take a look at the [CNCF success story](https://www.cncf.io/blog/2021/07/30/success-story-preparing-for-kubernetes-certification-improves-a-platform-development-engineers-skill-set/) from three years ago. This post isn't mainly about resources, but I will link some of them at the end. One little piece of advice while scurrying through the internet to find resources: the internet is rife with speculation about the work and benefits of taking the CKA exam, which is not always accurate.

Now, with those preliminaries out of the way, let me tell you what this post is about. Many people online drone on about the benefits of the CKA exam. I wanted to offer a more balanced view after undergoing the examination and experiencing its practical benefits. So, I experimented for a few months after my exam to assess the advantages it provided.

After evaluating it for around 2.5 months, I've come to a nuanced conclusion: the CKA certification is indeed useful, but not necessarily essential for advancing as an engineer in the cloud computing domain.

## Understanding CKA Certification
f you're diving into Kubernetes (K8s) from scratch, think of it as Google's way of managing containers, born from their original [Borg](https://en.wikipedia.org/wiki/Borg_(cluster_manager)) system. Getting Certified Kubernetes Administrator (CKA) status boosts your skills, showing you can handle app development and troubleshooting in real-world situations.

People go for CKA because they think it'll make them more employable (it does, but it's not a silver bullet). It's also good for getting a solid grip on the basics of Kubernetes, though the exam isn't overly tough if you prep well.

Since it can be pricey to certify on your own, a lot of folks get their companies to foot the bill. Fun fact: in 2023, a whopping 176,000 people signed up—that's more than double the numbers from 2021 (2023 report, 2021 report). This shows how hot Kubernetes skills are becoming in tech, especially for cloud-native development.

## My Thoughts on CKA
Well, diving into Kubernetes opened my eyes to its awesome documentation—seriously good stuff. It's well-organized and explains things way in a lucid way. But I was thoroughly disappointed by the [shutdown of the K8s labs](https://kubernetes.io/blog/2023/02/14/kubernetes-katacoda-tutorials-stop-from-2023-03-31/) that were there earlier. I remember playing around it in 2020, and it was a fond and understandable experience.

On the flip side, CKA Killer Coda's exam simulations are top-notch. They really nail down how to debug in a cloud setup, which is crucial. Personally, tackling the exam shed light on complex systems like Kubernetes certification mechanism and schedulers —pretty rad stuff.

Yet, I gotta admit, it's still pretty daunting for newcomers. The amount of detail can bog you down, especially with some post-doc stuff that's more distracting than helpful. Kubernetes is something one should try hands on before tries getting perfect with the basics.

## Study Thoughts
So, if you're gunning for that CKA certification, treat your learning like it's your final exam prep. Dive deep into the docs, nail down those basics, and never give up on understanding those concepts.
Try your hand at setting up Kubernetes on different platforms—bare metal, cloud setups like AWS or Azure, or Docker. Check out resources like Kubernetes the Hard Way on Bare Metal[^footnote], or Kubernetes the Hard Way on Docker[^footnote-2]. The docs might throw you for a loop sometimes, but they're like a huge textbook with some seriously useful chapters.

"All topics are equal, but some topics are more equal than others."  Yes I stole a quote from [Animal Farm](https://en.wikipedia.org/wiki/Animal_Farm) lol. Definitely some concepts are much more important than the others. Focus on mastering concepts like configmap, secrets, and network mesh—they're crucial for building and testing apps, unlike lower-level stuff like CRIO or containerD (not to say that they are unimportant, but not for the exam)

It also helps you keep up with the evolving cloud native ecosystem.The world has moved to containerised services and it ain't going away at least for a decade. By then you can make your millions and retire. The Cobol servers being run in American government services are an example of that.

Plus, getting involved in Kubernetes' open-source community opens up some exciting possibilities. As K8s becomes the backbone for AI and beyond, contributing to its evolution puts you right in the thick of things—like being a top surgeon in a cutting-edge operation.

## Resources
> These resources are just some of them which I used during my preparation for the exam. Most of it was the K8s documentation. But some of them helped me gain perspective on how to study for the exam. These are also very unstructure. Go through them at your own risk lol.
{: .prompt-info }

#### Basic Resources
* [CKA curriculum v1.29](https://github.com/cncf/curriculum/blob/master/CKA_Curriculum_v1.29.pdf)
* [Borg Orignal paper](https://research.google/pubs/large-scale-cluster-management-at-google-with-borg/)
* [David's Study Guide](https://github.com/David-VTUK/CKA-StudyGuide/tree/master)
* [OWASP Kubernetes Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Kubernetes_Security_Cheat_Sheet.html)
* [CKA Practice Questions](https://gist.github.com/texasdave2/8f4ce19a467180b6e3a02d7be0c765e7)

#### Reddit Threads
* [https://www.reddit.com/r/kubernetes/comments/s6rpb6/free_materials_for_cka_certified_kubernetes/](https://www.reddit.com/r/kubernetes/comments/s6rpb6/free_materials_for_cka_certified_kubernetes/)
* [https://www.reddit.com/r/kubernetes/comments/s6l7xs/just_passed_the_cka_here_are_some_tips_and_tricks/](https://www.reddit.com/r/kubernetes/comments/s6l7xs/just_passed_the_cka_here_are_some_tips_and_tricks/)
* [https://www.reddit.com/r/kubernetes/comments/ssxhsd/cleared_my_cka_exam_with_a_score_of_92_here_are_a/](https://www.reddit.com/r/kubernetes/comments/ssxhsd/cleared_my_cka_exam_with_a_score_of_92_here_are_a/)

#### Youtube Videos
* Pretty Awesome video: [CKA Certification SURE SHOT Questions ](https://www.youtube.com/watch?v=vVIcyFH20qU)
* [K8s Source Code Walkthrough](https://www.youtube.com/watch?v=F8dZMKP6xyg)

**K8s the hard way**
* [The OG k8s the hard way](https://github.com/kelseyhightower/kubernetes-the-hard-way ): 
* [On AWS](https://github.com/Praqma/LearnKubernetes/blob/master/kamran/Kubernetes-The-Hard-Way-on-AWS.md)
* [On Baremetal](https://github.com/Praqma/LearnKubernetes/blob/master/kamran/Kubernetes-The-Hard-Way-on-BareMetal.md)
* [On Docker](https://github.com/brightzheng100/kubernetes-the-hard-way-on-docker)

[^footnote]: https://github.com/Praqma/LearnKubernetes/blob/master/kamran/Kubernetes-The-Hard-Way-on-BareMetal.md
[^footnote-2]: https://github.com/brightzheng100/kubernetes-the-hard-way-on-docker




