# CS-GY 9223 I: Responsible AI and the Law

**Instructor:** Professor Emily Black  
**Time/Location:** 2:30-4 Jacobs Hall Room 301 (40)  
**Office Hours:** Thursday 4-5 in 370 Jay St. office 1155 or zoom, or by appointment  
**TAs:** TBD  

## Description
This is a multidisciplinary course that explores the social and legal dimensions of harms caused by both traditional and generative AI systems. Students will learn to identify unfair, opaque, or otherwise problematic algorithmic behaviors, conduct fairness audits, and apply practical techniques to mitigate harms such as discrimination, privacy violations, and arbitrariness. They will also learn when and which discrimination, privacy, and other laws apply to algorithmic systems and how to be compliant with these laws. Through learning about model harms both from academic research and real-world case studies in domains like finance, housing, and employment, the course equips students with both technical and legal tools to assess and improve AI systems—crucially, in a way that is practically applicable.

## Learning Objectives
*   Understand the nature of harms from traditional and generative AI systems, where they are similar and different
*   Know how to figure out if a system is behaving in a harmful manner: for example, how to perform fairness audits of black-box and white-box systems
*   Have a toolbox of methods to try to fix problems you find:
    *   Be able to use common techniques to prevent algorithmic harms such as unfairness, privacy violations, and arbitrary decision-making
*   Understand what basic legal requirements exist for algorithmic systems in various domains (housing, employment, credit, healthcare, etc)

### What do I want you to be able to do with this knowledge?
I hope that after taking this class, you can identify harmful AI behaviors that might come up in your future jobs and help develop systems to reduce these harms.

I also hope that you can communicate better with the legal department in their future places of work to motivate responsible AI work- and know when you have the legal leverage to push your company to make changes.

## Grading
*   **15%** Participation
*   **15%** Quizzes
*   **35%** Midterm
*   **35%** Project (15% Presentation, 20% Final Report)

---

## Course Policies

### Participation
Please come to class ready to discuss the readings assigned for that day (the readings listed on that day). Part of this class will be discussion-based, so we'll be talking about the readings together.

### Quizzes
Many classes will have an in-person paper quiz given about the (required) reading. It will be very easy, this is just to make sure you have done the reading for the class.

### Midterm
TBD, but likely in-class, closed book but with a cheat sheet where you can write anything you want (double sided). It will cover the materials learned in approximately the first ⅔ of class. There may also be a take-home component of the midterm, TBD.

### Project
You will create small groups to tackle a responsible AI problem, write up a report, and give a presentation on it. More details later, but this project will require both coding and writing.

### Deadlines
All deadlines are at 5:00pm (eastern time) unless otherwise specified.

### Late Submissions
10% score penalty for each day late. Submissions will not be accepted if they are submitted more than one week late.

### Absences
As part of this class involves discussion, I expect you to be in class. Exceptions are made for illness and other emergencies, please let me know in advance if at all possible. A student must attend at least 80 percent of the scheduled lectures for this course. Failure to attend at least 80 percent will result in failing the course.

### Academic Integrity
All students are expected to do their own work. Discussion of assignments may take place at a whiteboard (or on a scrap of paper, etc.), but no record of the discussion may be kept (all notes must be erased or discarded, no audio or video recording, etc.) and you must allow at least two hours to pass after the discussion before working on the assignment. Collaboration beyond this is not allowed. It is a violation of the honor code to copy or derive solutions from other students (or anyone at all), textbooks, previous instances of this course, or other courses covering the same topics. Copying solutions from other students, or from students who previously took a similar course, is also clearly a violation of the honor code. Being able to recreate any solution from memory is considered proof that you actually understand the solution. Collaboration on exams and quizzes of any kind is not allowed. For the course project, students are expected to collaborate with their team partner only. Please also refer to the general [NYU academic integrity statement](https://www.nyu.edu/about/policies-guidelines-compliance/policies-and-guidelines/academic-integrity-for-students-at-nyu.html).

### GenAI Policy
We will experiment with using GenAI/LLMs in this class, but please do not use GenAI/LLMs when I ask you not to use it. The GenAI policy for a particular project will be discussed per project. If there is no statement made about that project, assume you are expected not to use it for any stage of your work beyond idea generation, and if you do use it for idea generation, to attach the prompts you use. **If I discover you have used GenAI beyond idea generation and I have asked you not to, you will not receive credit for that assignment. Continued academic dishonesty may result in failure of the course.**

---

## Grading Scale & Notes

### Other Grading Notes
This course uses the python programming language for coding assignments. All coding assignments are expected to be formulated as notebooks in [Google Colaboratory](https://colab.research.google.com/).

### Grade Scale
| Grade in Course | Points Earned |
| --------------- | -------------- |
| A               | 94 - 100       |
| A-              | 90 - 93        |
| B+              | 87 - 89        |
| B               | 84 - 86        |
| B-              | 80 - 83        |
| C+              | 76 - 79        |
| C               | 70 - 75        |
| C-              | 65 - 69        |
| F               | Less than 65   |

---

## University Resources

### Moses Statement
Disability Disclosure Statement: Academic accommodations are available for students with disabilities. If you are a student with a disability who is requesting accommodations, please contact New York University's Moses Center for Students with Disabilities (CSD) at 212-998-4980 or mosescsd@nyu.edu. You must be registered with CSD to receive accommodations. Information about the Moses Center can be found at www.nyu.edu/csd. The Moses Center is located at 726 Broadway on the 3rd floor.

### The Office of Student Advocacy
At NYU Tandon, we recognize that medical, mental health, or personal issues can sometimes affect your attendance and academic performance. If you are experiencing challenges that you feel are impacting your ability to attend class or succeed in your coursework, we encourage you to reach out to the NYU Tandon Office of Student Advocacy. The Student Advocacy team is here to connect you with the resources and support you need to address these challenges and ensure you can continue to thrive academically. If you begin experiencing any issues that may affect your attendance or academic performance, please reach out to the NYU Tandon Office of Student Advocacy as soon as possible as we will be unable to appropriately address these concerns as the semester progresses, so early communication is essential to ensure the support and resources you need. The NYU Tandon Office of Student Advocacy can be reached at advocacy.tandonstudentlife@nyu.edu and is located in 5 MetroTech Center LC240.

---

## Schedule
**Note:** This is not a final schedule. I'll post or send out final readings to the class at least a week before their due date.

### Part 1: The basic: your classic responsible AI class/ important legal and policy frameworks

#### Lecture 1: Your Classic Responsible AI Introduction
*   Why do we care about fairness and other harms? (Especially in this moment?)
*   Common definitions (demographic parity, equality of opportunity...)
*   Common tools (Fairlearn, AIF360)
*   Must-know studies (Machine Bias, Amazon Hiring)

**Example Readings:**
*   [https://fairmlbook.org/classification.html](https://fairmlbook.org/classification.html)
*   [https://fairmlbook.org/relative.html](https://fairmlbook.org/relative.html)

#### Lecture 2: Pipeline-Aware approaches to Responsible AI
*   AI lifecycle and how harms enter
*   Model multiplicity

**Example Readings:**
*   **Required:** Black, Emily, et al. "Toward operationalizing pipeline-aware ML fairness: A research agenda for developing practical guidelines and tools." Proceedings of the 3rd ACM Conference on Equity and Access in Algorithms, Mechanisms, and Optimization. 2023. [https://arxiv.org/abs/2309.17337](https://arxiv.org/abs/2309.17337)
*   **Pick two of the following (rest optional):**
    *   **Viability Assessment**
        *   Raji, I. D., Kumar, I. E., Horowitz, A., & Selbst, A. (2022). The fallacy of AI functionality. In ACM Conference on Fairness, Accountability, and Transparency (pp. 959–972).
        *   Coston, A., Kawakami, A., Zhu, H., Holstein, K., & Heidari, H. (2022). A validity perspective on evaluating the justified use of data-driven decision-making algorithms. In Proceedings of the 2023 IEEE Conference on Secure and Trustworthy Machine Learning (SaTML) (pp. 690–704).
    *   **Data Collection**
        *   Buolamwini, J., & Gebru, T. (2018). Gender Shades: Intersectional Accuracy Disparities in Commercial Gender Classification. ACM Conference on Fairness, Accountability, and Transparency, PMLR.
    *   **Data Preprocessing**
        *   Jeanselme, V., Arteaga, C., Bakker, M. A., et al. (2022). Imputation Strategies Under Clinical Presence: Impact on Algorithmic Fairness. Machine Learning for Health (ML4H), PMLR.
    *   **Statistical Modeling**
        *   Leino, K., Black, E., Fredrikson, M., Sen, S., & Datta, A. (2019). Feature-wise Bias Amplification. International Conference on Learning Representations (ICLR 2019).
    *   **Testing and Validation**
        *   Zollo, T. P., Rajaneesh, N., Zemel, R., Gillis, T. B., & Black, E. (2025). Towards Effective Discrimination Testing for Generative AI. International Conference on Learning Representations (ICLR 2025).
    *   **Deployment**
        *   Green, B., & Chen, Y. (2019). The Principles and Limits of Algorithm-in-the-Loop Decision Making. Proceedings of the ACM on Human-Computer Interaction, 3(CSCW), 1–24.

#### Lecture 3: Anti-Discrimination Law and AI
Relevant laws, and the difficulties in interpreting them for AI systems:
*   Disparate treatment and impact
*   Federal Housing Act, Equal Credit Opportunity Act, Title VII of the Civil Rights Act
*   State laws: Colorado Insurance Law, others

**Example Reading:**
*   [https://fairmlbook.org/legal.html](https://fairmlbook.org/legal.html)
*   [https://www.californialawreview.org/print/race-aware-algorithms-fairness-nondiscrimination-and-affirmative-action](https://www.californialawreview.org/print/race-aware-algorithms-fairness-nondiscrimination-and-affirmative-action)
*   [https://www.law.georgetown.edu/georgetown-law-journal/in-print/volume-113/volume-113-issue-1-october-2024/less-discriminatory-algorithms/](https://www.law.georgetown.edu/georgetown-law-journal/in-print/volume-113/volume-113-issue-1-october-2024/less-discriminatory-algorithms/)

#### Lecture 4: Privacy and Transparency, and Interactions with Fairness
Privacy, Transparency and Fairness: (Mostly) False Dichotomies
Relevant Laws, their upsides and downsides:
*   Privacy Act of 1974, Paperwork Reduction Act
*   California Consumer Privacy Act (and the other states that came after)
*   Disclosure requirements
*   General Data Protection Regulation (GDPR)

**Example Reading:**
*   [https://digitalgovernmenthub.org/wp-content/uploads/2023/08/Gupta_et_al_Privacy_Bias.pdf](https://digitalgovernmenthub.org/wp-content/uploads/2023/08/Gupta_et_al_Privacy_Bias.pdf)

#### Lecture 5: Other Responsible AI Concerns (Arbitrariness)
*   Procedural Fairness

**Example Reading:**
*   [https://dl.acm.org/doi/10.1145/3531146.3533149](https://dl.acm.org/doi/10.1145/3531146.3533149)
*   [https://arxiv.org/pdf/2506.07962](https://arxiv.org/pdf/2506.07962)
*   Hopefully: ongoing work from my lab on GenAI instability

### Part 2: Case studies of how responsible AI is implemented on the ground, and how this can interact with legal frameworks

#### Lecture 6:
*   **Intro:** Common differences between academic and industry fairness work
    *   Data availability, reliance on inference of protected attributes instead of real attributes
    *   Navigating legal, public relations, and other dynamics
*   **Case Study 1: Finance**
    *   Compliance with and Enforcement of ECOA disparate impact requirements
    *   Discuss Prof. Black's ongoing work interviewing individuals in the banking industry about ongoing RAI Efforts

#### Lecture 7: Case Study 2: Advertising (Housing)
*   Discuss *HUD vs. Meta*, and the technical solution to the lawsuit, the Variance Reduction System

**Example Reading:**
*   [https://www.nytimes.com/2019/03/28/us/politics/facebook-housing-discrimination.html](https://www.nytimes.com/2019/03/28/us/politics/facebook-housing-discrimination.html)
*   [https://www.propublica.org/article/facebook-lets-advertisers-exclude-users-by-race](https://www.propublica.org/article/facebook-lets-advertisers-exclude-users-by-race)
*   [https://www.nytimes.com/2022/06/21/technology/meta-ad-targeting-settlement.html](https://www.nytimes.com/2022/06/21/technology/meta-ad-targeting-settlement.html)
*   [https://about.fb.com/news/2023/01/an-update-on-our-ads-fairness-efforts/](https://about.fb.com/news/2023/01/an-update-on-our-ads-fairness-efforts/)

#### Case Study 3: AI Discrimination in Employment
*   Discussion of *Mobely vs. Workday*
*   Less paid attention to: disability discrimination law, workplace surveillance software

**Example Reading:**
*   [https://www.fisherphillips.com/en/news-insights/discrimination-lawsuit-over-workdays-ai-hiring-tools-can-proceed-as-class-action-6-things.html](https://www.fisherphillips.com/en/news-insights/discrimination-lawsuit-over-workdays-ai-hiring-tools-can-proceed-as-class-action-6-things.html)

***Note: Leaving one lecture for midterm, may be lecture 8 or may not***

### Part 3: Responsible generative AI, and related law and policy

#### Lecture 9: GenAI Opportunities and Potential Harms
*   Allocative and representational harms in GenAI, monoculture

**Example Reading:**
*   [https://dl.acm.org/doi/pdf/10.1145/3531146.3533088](https://dl.acm.org/doi/pdf/10.1145/3531146.3533088)
*   [https://arxiv.org/abs/2108.07258](https://arxiv.org/abs/2108.07258)

#### Lecture 10: GenAI Opportunities and Harms 2
*   Instability in GenAI decisionmaking
*   Security threats in GenAI systems

**Example Reading:**
*   Auditing large language models for race & gender disparities: Implications for artificial intelligence-based hiring: [https://5harad.com/papers/auditing-llms.pdf](https://5harad.com/papers/auditing-llms.pdf)
*   Do Large Language Models Discriminate in Hiring Decisions on the Basis of Race, Ethnicity, and Gender?: [https://aclanthology.org/2024.acl-short.37/](https://aclanthology.org/2024.acl-short.37/)

#### Lecture 11: GenAI in high-stakes decision-making: how is it used, what legal frameworks (might) apply
*   Unfair Deceptive and Abusive Practices (UDAP)

**Example Reading:**
*   Towards Effective Discrimination Testing for GenAI: [https://arxiv.org/abs/2412.21052](https://arxiv.org/abs/2412.21052)
*   UDAP: [https://www.federalreserve.gov/boarddocs/supmanual/cch/200806/ftca.pdf](https://www.federalreserve.gov/boarddocs/supmanual/cch/200806/ftca.pdf)

**Additional Reading:**
*   [https://journals.library.columbia.edu/index.php/stlr/article/view/12765/6289](https://journals.library.columbia.edu/index.php/stlr/article/view/12765/6289)

### Part 4: What are you interested in?

#### Lecture 12:
At the beginning of class, I'll take a survey about what other topics you want to learn about that are not covered in the syllabus. Based on that feedback, I'll have a lecture about a topic that there's class interest in. Some potential suggestions: GenAI and Copyright Infringement, Explainability in AI and GenAI systems, Security threats/attacks in GenAI systems... but it's up to you!

#### Lecture 13: Left for scheduling flexibility

#### Lecture 14: Project Presentations