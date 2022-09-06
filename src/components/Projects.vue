<template>
  <article class="project page-full"
       :style="{left: left + 'px',
                width: width -50 + 'px',
                zIndex: index}"
  >

    <section class="head">
      <div class="arrow-down" @click="$el.scrollTop = $el.scrollHeight">
        <stud v-for="i in 4"
              :key="'arrow-down-right'+i"
              :x="50-(i-1)*10"
              :y="50-i*10"
        />
        <stud v-for="i in 4"
              :key="'arrow-down-left'+i"
              :x="50+(i-1)*10"
              :y="50-i*10"
        />
      </div>
        <h1> {{title}} </h1>
    <h2 v-if="index === 3">Tj Bayowa, Mingjia Chen</h2>
    <h2 v-else style="margin: 25px 9% 25px;">
      <a target="_blank" :href="link"> {{ author }} </a>
    </h2>
    </section>
    <!--    queer life in lockdown shanghai-->

    <section v-if="index === 0">
      <img src="/images/Shanghai_Lockdown_Queer_Life_0.jpg">
      <h3>Introduction</h3>
      <p>
      Since COVID-19 first broke out in 2020, China has performed a zero-tolerance policy combating the public health crisis, including rounds of city-wide lockdown. The stringent lockdown policy, which never got lifted in the past two years, utilizes residential complexes (sub-districts) as control units and is considered the most effective way to limit the spread of cases in China. Following lockdowns, measurements such as the conduction of massive PCR testing across the city and the implementation of the green-code system to survey, monitor, and record individuals’ health conditions disrupted the pre-COVID daily routine to become the new norm. Many have adopted lockdown as an abnormal yet everyday lifestyle in the country, while others are actively seeking alternatives to bring back the daily life before COVID-19 and create a sense of belonging in the community despite the reality of physical isolation.
      </p><p>
      Early in 2022, Shanghai went through the most rigorous lockdown in the nation, where residents were, on average, quarantined for around sixty days at home without a single step out of the room. Food was in short supply, and snatching groceries through mobile apps seemed to be the only way to stock up the fridge. People anxiously awaited the announcement of the policy lift-up and updates on the resumption of work every day. Under such extreme conditions, people strive to fulfill their basic survival needs, taking less care of their other desires.
    </p><p>
      Socially, when most offline event spaces were confined to precautionary inspection, social media linked people together, helping form all kinds of virtual neighborhoods. Some of these were based on a chatgroup structure, though temporary, worked autonomously, and succeeded in providing members with resources to life supplies, medical services, and social support.
    </p><p>
      This project is a collection of slices of life in the scenes mentioned above during the Shanghai lockdown from people who self-identified as queer. It tries to reflect on their personal experience of seeking comfort in living space, adjusting distances between themselves and others, and redefining daily habits in the quarantine. The project is meant to archive the emotions and feelings of ordinary people, which are undercovered mainly by the official media streams, as these narratives of “how the public lives a life” are “unnecessary” or “less important” compared to the rendering of heroic story-telling of the COVID-19 front line.
    </p>

      <h3>Interview 1</h3>
      <p>
      I worked with this queer organization for about one year and spent my quarantine time in its offline gathering space, like I was living in this space for the entire lockdown, for 80 days. Actually, I wouldn't just call it an event space because it is also the shared living space for our core members. It's a place of both.
      </p><p>
      I think this space is a safe haven that always opens the door to LGBTQ+ people who may have trouble with life, work, relationship, or their primary families and may need support. They simply can find others who would share the same experience and resonate with them here. Things that wouldn't or couldn't be shared outside are allowed to be shared within this space. At the same time, it is a place that always welcomes people just to come and have fun. From my perspective, the social interaction within queer community in Shanghai relies heavily on offline events. The virtual platform and social media we use to advertise ourselves only supplement real-life experiences instead of replacing them.
    </p><p>
      Compared to hanging out with friends at a bar or club, some people prefer to do grocery shopping and cook meals together. For them, a family-gathering-like party is better than a social event. And for many organizations, the place they share to live in is treated as the queer space to host these family gatherings.
    </p><p>
      We usually start by meeting each other offline and maintaining closer relationships with a smaller group of people. Old friends will introduce new friends, and that's how the organization grows. That was before quarantine, though. We didn't gain much expansion over the pandemic.
    </p><p>
      The core members of this organization, around 6 of us, live together under one roof as a family. We can call it a diverse family that is diversified in structure and personality. I believe many Shanghai organizations practice a similar system of queer space to ours. But still, I don't think there are enough of them.
    </p><p>
      We are a group of 21-23 years old, fresh out of college or working entry-level positions in the job market. In general, members range from 17 years old to 30 years old.
    </p><p>
      I chose to live here because of the location and financial concerns, which applies to most of our core members' cases. But the lockdown has changed a lot of things. Our priority shifted from running the queer space to focusing on the urgency of living. I found it hard to move my eyes away from internal issues and frictions which were not as visible as before the pandemic. Regarding how little space we had for the number of people living in it, the physical isolation made everyone's pressure and anxiety so explicit that seeing each other 24/7 became unbearable.
    </p><p>
      Plus, the lockdown policy changed on a daily basis, which we have zero control over. No matter how hard we try to prepare beforehand, we never feel ready for the ever-changing policy and quarantine management.
    </p><p>
      As soon as we decided to work collaboratively to gather information, stock up grocery, and prepare food and life supplies, I found it almost impossible to keep up with others in contributing to the group even though I was willing to participate in most of the daily routines. I took responsibility for food prep, but that was too few tasks from others' perspectives. I  was struggling with my ASD(Autism Spectrum Disorder) at the time, and I had a tough time setting boundaries between the rest of the group and myself. I strived but couldn't successfully articulate my hope of taking more time to accommodate the changes and adjust my position in the group structure.
    </p><p>
      Things that are easy for them weren't easy for me. And nobody understood my difficulty. For them, I was way too relaxed to take over any sig jobs while panicking about how to do more to help.
    </p><p>
      I got pushed into a "double minority "zone where I realized being the different one in an LGBTQ+ group didn't make it easier for people to accept you and show respect for your personality. Not being able to act just like others made my effort underrecognized.
    </p><p>
      As most of us are self-identified as queer women, we've frequently discussed what feminism means to our community and why we should care about the feminine characteristics we present in the community. However, some of us seem to agree upon a perfect image of women as the non-negotiable model everyone else should follow. Women's power, which in our case translated into a person being caring, kind, attentive, and willing to self-giving, becomes the standard of action.
    </p><p>
      The pandemic not only cut off our offline activities but also the physical and mental connection we grew between our intimate community off the Internet.
    </p><p>
      Members closer to the imagery tend to have a say in arranging our daily tasks. You can imagine those who act more like a mother running a big family will win more respect over others.
    </p><p>
      There is a member who will actively take on the responsibility and take care of others before others even ask for it. I sometimes was explicitly targeted for not putting effort into appreciating her work and trying to catch up with her. I understood that she was anxious and deserved the acknowledgment of what she had been doing, but I also believe expecting everyone to perform the same standard and hoping a single method would solve the complicated problem wasn't the ideal way.
    </p><p>
      Although I actively sought ways to mitigate the situation, I gradually felt isolated again, as others started to argue against me and not engage me in daily activities.
    </p>
      <div class="img-slider"
           :style="{width: (width-50)*0.82 + 'px', height: (width-50)*0.82*1165/900 + 'px'}"
      >
        <div class="click-zone-left"
             :style="{position: 'absolute', width:'100px', height: (width-50)*0.82*1165/900 + 'px', cursor: 'pointer'}"
             @click="imgSlide = imgSlide > 1 ? imgSlide-1: imgSlide"/>
        <div class="click-zone-right"
             :style="{position: 'absolute', width:'100px', right: '8%', height: (width-50)*0.82*1165/900 + 'px', cursor: 'pointer'}"
             @click="imgSlide = imgSlide < 7 ? imgSlide+1: imgSlide"/>
        <div class="img-slider-inner">
            <img :src="'/images/Shanghai_Lockdown_Queer_Life_' + imgSlide + '.jpg'"
                 :key="'doris-img'+imgSlide"
                 :alt="'Shanghai_Lockdown_Queer_Life'"
                 :style="{width: (width-50)*0.82+ 'px', height: (width-50)*0.82*1165/900 + 'px', float: 'left'}">
        </div>
<!--        <div class="img-overflow"-->
<!--             :style="{width: (width-50)*0.84 + 'px', height: (width-50)*0.84*1165/900 + 'px', overflow: 'scroll'}">-->
<!--          <div v-for="i in 7" class="img-slider-inner"-->
<!--               :key="'doris-img-container'+i"-->
<!--                :style="{width: (width-50)*0.84*7 + 'px', height: (width-50)*0.84*1165/900 + 'px'}">-->
<!--            <img :src="'/images/Shanghai_Lockdown_Queer_Life_' + i + '.jpg'"-->
<!--                 :key="'doris-img'+i"-->
<!--                 :alt="'Shanghai_Lockdown_Queer_Life_' + i"-->
<!--                 :style="{width: (width-50)*0.84+ 'px', height: (width-50)*0.84*1165/900 + 'px', float: 'left'}">-->
<!--           </div>-->
<!--        </div>-->
      </div>
      <div class="footer"><p> </p> </div>
    </section>
    <!--    /s/ /z/-->
    <section v-if="index === 1">
      <img src="/images/s_z_0.jpg">
      <p>
        /s/ /z/ is a personal voice archive that wedges speech therapy practices, mimicry, and repetition. It serves as a contemplative view on how the voice is subject to queerness and the implications of that relationship. /s/ /z/ aims to tackle the question of “how does a voice get queered (both by a speaker and by a listener)”? It explores how it is viewed on both a linguistic and psychological level and the resulting processes of institutionalization by society and media. /s/ /z/ expands on ideas of queering being amplified by mimicry and repetition in relation to the voice, and broadly how the “lisp” is interrogated. /s/ /z/ investigates speech therapy techniques; particularly practices to make a stereotypical gay male voice sound more stereotypically straight. Ultimately, the project converges on the question of “how does the voice spatialize and contextualize a queer body”?
      </p><p>
      In this first addition to the /s/ /z/ archive, the artist recorded himself saying the 50 most common English words<sup>1</sup> in his voice and then in a “speech therapized” voice. The result is an audiovisual project that deploys the cut and two-channel sound to ask what it means to have a queer voice.
      </p>
    <div class="media-container" style='width: 89%; margin: 3% 6%;'>
      <video src="/images/s_z.mp4" width="100%" autoplay controls></video>
    </div>

    <div class="footer">
      <p>
        1 Oxford English Dictionary, “Dictionary," <a target="_blank" href="https://www.oed.com/browsedictionary?browseType=sortFrequency&page=1&pageSize=20&scope=ENTRY&sort=frequency&type=dictionarybrowse">link</a>.
      </p>
    </div>
    </section>
    <section v-if="index === 2">

    </section>
<!--    Minor Presence-->
    <section v-if="index === 3">
      <h3>Introduction</h3>
      <p>
        There are two ways of reading institutions. The first way is the “image” of the institution. The image is the official way an institution wishes to be read by the public. The second way of reading an institution is through its “presence.”<sup>1</sup> Presence is the reciprocal relationship and shaping between the institution and those interacting with it. The latter relationship of presence is often unacknowledged because it troubles the logical reading of an institution's image.
      </p><p>
        The library as an institution is par excellence an archival space dedicated to the official telling of history and distribution of information.
      </p><p>
        The first library in the United States intended to serve undergraduates is Harvard’s Lamont Library.<sup>2</sup> By using it as a case study, this project seeks to queer the official role of the library by studying its presence rather than its image. This shift in legibility allows for a more pluralistic understanding of history and identity that is broader in its narrative.
      </p><p>
        This initial part of our project is the first trip into a series of questions we are engaging with about the institutional library as a space. It is divided into 5 reflections. In reflection 1, we discussed our use of a queer methodology through the frame of the minor. Reflections 2 and 3 gave a brief historical account of the library as an institutional space and looked into Harvard’s Lamont library as a case study. Reflection 4 helps us to pin down a few key definitions. Through the framework of the minor, we introduce the distinction between the image of a space and its presence. To conclude we reflect on the potentialities that come from remixing, reordering, and redistributing the popular.<sup>3</sup>
      </p><p>
        We have been writing these reflections asynchronously, and as we write along, they are increasingly in conversation with each other. Weaving together these 5 pairs of loosely defined reflections, we hope to present our intention towards remixing knowledge in different contexts, and producing a “messy” research project that hesitates to be fully linear in direction.
      </p>
      <div class="footnote">
        <hr><p>
        1 Quoting from the Editor’s introduction for Radical History Review Vol 2014 Issue 120: “Queerness and the archival are structured by their own distinct habitual wranglings with absence and presence.”
          </p><p>
        2 Harvard Property Information Center: <a target="_blank" href="https://harvardplanning.emuseum.com/sites/587/lamont-library">link</a>
      </p><p>
        3 We are still defining this term for ourselves. At the moment it means the things that are chosen as a representation of how things are.
      </p>
      </div>



      <h3>Reflection 1: <i>The Minor as a Method</i> <sup>4</sup></h3>
      <img class = "center" src="/images/minor_presence_1.png">
      <p class="head">
        Minor Presence - Tejumola Bayowa
      </p><p>When one talks about a minor ideology, one speaks from a position outside the normative frame. Thus to speak from the position of the minor is to challenge the “epistemological assumptions and ontological conditions that uphold the order of things.” (20) At its root a minor approach is a reordering of the structures that constrain the world as we know it.
      </p><p>
      MC: Interesting to think of the "minor" in the ideological instance; I feel that usually, ideology is complicit with /framed together with the "major," the grand narrative/normative narrative that validates, normalizes, and naturalizes itself through its corresponding ideology. (the strong, legible image)
      </p><p>
      MC: Exactly like remixing! Re-ordering of existing materials with different structural principles?
      </p><p>
      With this in mind, it becomes clearer what a minor methodology has in relation to queerness. Queer, in the general sense is defined as “differing in some way from what is usual or normal.” Queer is also understood in more sexual terms; “relating to, or characterized by sexual or romantic attraction to members of one’s own sex.” (merriam webster dictionary) Minor theory, like queerness is dependent on ones positionality. A position that is located outside conventional behavior.
    </p><p>
    MC: Thinking with Hentyle's framework, such an understanding of queerness also comes from the major's perspective (understanding) of the "other?" (and its internalization, homonormativity)
    </p><p>
      MC: Interesting how the dictionary (the authoritative archive) defines queerness only in terms of same-sex relationships.
    </p><p>
    Similar to minor theory, utilizing queer theory as a means of understanding the structures that define the world challenges heteronormative logics that suppress and limit already existing potentialities of subaltern futures.
    </p><p>
    In our use of the term minor, adjacent to it is the term presence. Both words are friends stitched together to formulate the argument of this research paper. Presence for us is the real. It is not a simulacrum or a representation. It is in short, things as they are. Both minor and presence are connected because to speak from the perspective of both is to speak from the real and not an image.
    </p><p>
      MC: Cute image!
    </p><p>
      MC: But this realness is often implicated by the image; not a one-way street.
    </p><p>
      TB: yes, i agree. which is why i think it is the real. it recognizes its complicity, its errors, its "mistakes" as you used it in reference to spivak in your reflection. image is a one way street. "real" is a junction.
    </p><p>
      MC: I love this - Image is a one-way street. "Real" is a junction
    </p><p>
      Therefore, when we use the term minor presence what we are referring to is a voice that speaks from the real with an intention of reordering the formation of our global system by dismantling hierarchical definitions of knowledge that exclude alternative ways of being.
    </p><p>
      MC: Again, for us, this "real" does not have a notion of purity or isolation from the image.
    </p><p>
      TB: real is the opposite of purity. it is dirty, messy, far from linear.  maybe more needs to be said about real in relation to image and presence. or maybe a different word. or not brought up.
    </p><p>
      MC: Yes. I agree with you that more need to be said - I guess we need to give "real" more context as its interpretation can change so much depending on context.
    </p>

    <p class="head">
      My Silly Mistake - Mingjia Chen
    </p><p>
      When the word “minor” first makes an appearance in TJ and my notes, I immediately think about the geopolitical construct, Asia Minor, which is loosely bounded by the modern national borders of Turkey. Until a few minutes ago, I was unaware of the (quite common sense) information that I had just typed down. For me, the term was not particularly familiar-sounding nor interesting, and I naturally made the ignorant mistake of presumption everytime it flashes by in my mind. Recently, I have been reading Hentyle Yapp’s latest book, Minor China. Asia, minor. In a naively instinctive attempt to make connections, I made the following mistake: I thought the term was describing the Asian diaspora community at large.
    </p><p>
    Asia, minor. The etymological origins of these words remain unquestioned. Let us dwell momentarily on the term Asia. A quick google plus Wikipedia search helps to override my unsolicited attempt to relate its historicity and contemporary orientalism (and also proves my gullibility). Part of the Roman Empire, Asia used to be the name of the province that sits on the North shores of the Mediterranean Sea. Later, the bounds of the term is expanded to include the whole continent east of the Roman Empire, therefore making the peninsula province the “Asia Minor.”
    </p><p>
    Returning to the term minor, and operating for a second within a seemingly unrelated context - for the purpose of framing our research, looking at the term’s etymology is less productive. Rather, we are interested in a particular theorization of the “minor” as a method supplied by Hentyle Yapp. In the field of art history, according to Yapp, the minor method “relies upon the formal and more seemingly minor details of artworks to illustrate how context and history for understanding the transnational have been privileged over an examination of its becoming.”<sup>5</sup>   In short, by examining the structural instead of the representational existence of the minor, one is able to read the becoming of the artwork, of how its major (nationalistic) image comes to be. The minor begs one to sense it differently, and for us, methodologically.<sup>6</sup>
    </p><p>
    TB: key point
    </p><p>
    Technically, the interlude above has nothing to do with the rest of our writings. It only speaks to the elite institutional library (our scope; a pressure point for us to enter the discussion of institutional image, and its realness, of what we call presence) ever so distantly. It derails, neglects and perhaps even rejects the modus operandi of the library: Afterall, my comprehension of the Asia Minor takes a pause at the mere surface of the Wikipedia page.
    </p><p>
    Nonetheless, one thread is traceable. It weaves between our initial research and the above triviality. In both cases, the curious yet hesitant inquiry of the image for a certain abstract place is initiated by making a founding error of generalization. In our early discussions about the “un-intended uses” of the institutional library and its community presence as a social space, we assumed the library to be a homogenous space that considers anything other than the access of preserved knowledge as “non-normative.” We were ignorant about and unaware of a rich and critical discourse of the library as a social space, and its position within the social safety net.<sup>7</sup>
    </p><p>
    TB: we were.
    </p><p>
    Therefore, it is this founding mistake that we must first acknowledge and expand on. It is also this mistake that drives our sustained interest, and produces a self-critical research method that seeks to remixing rather than producing knowledge; one which might inhabit the name queer. We contend that through understanding the minor as a method, one could understand the institutional library as a plural form, and from the bottom up - its official image cuts in and out such plurality. More to be elaborated, but I conclude this interlude (now a prelude) with a reminder that “we must know what mistake to make [...] and also must know how to defend our mistake as the one that will allow us to live.”
    </p><p>
    TB: well put
    </p><p>
    TB: live by and through mistake. nice quote
    </p><p>
    <div class="footnote">
      <hr>
      <p>
        4 Yapp, Minor China, 1 - 36.
      </p><p>
        5 Yapp, Minor China, 23.
      </p><p>
        6 Yapp, Minor China, 6.
      </p><p>
        7 From an anonymous source.
      </p><p>
        8 Spivak, An Aesthetic Education in the Era of Globalization, 28.
      </p>
    </div>
    <h3>Reflection 2: <i>The Institutional Library as a Space</i></h3>
      <img class = "center" src="/images/minor_presence_2.png">
      <p class="head">
      Library as a Space - Tejumola Bayowa
      </p><p>
      The Lamont Library is named after Thomas Lamont, a Harvard graduate and New York based banker. It was designed by Coolidge Shepley Bulfinch and Abbott and completed in 1949 after two years of construction.  Lamont was built to address both the limited stack space of Widener Library
    </p><p>
      MC: Widener Library was largely intended for graduate students historically.
    </p><p>
      and specifically to serve male undergraduates. Female Students from Radcliffe University, the sister college of Harvard at the time, would not have access to the library until 1967.
    </p><p>
      Today, Lamont library is described as a 24 hour space supporting the humanities and social sciences.”  The spaces provided by the library include:  special collections reading rooms called the Woodberry Poetry Room, computer and media devices in the Media lab, a quiet space for multimedia projects in the Media lab annex, quiet study rooms called Farnsworth room, and group work and seating area called the Donatelli reading room.
    </p><p>
      Being that our research is concerned with the Lamont Library at Harvard University it is worth touching on the library as an institutional space. Firstly, as an undergraduate student library, Lamont is distinct in its role from public libraries. Firstly,  a school library like Lamont serves a specific role within an institution that provides resources mainly to students and affiliates of the associated institution.
    </p><p>
      MC: And seems to be always central to the institution and its image
    </p><p>
      Resources provided include but are not limited to books, learning spaces for independent work, access to computers and the internet, and archival access and materials
      MC: Saw an interesting comment that "the public library is one of the only supplier who provide access to technology for free"
    </p><p>
      These resources are essential to providing a more equitable environment in university campuses. Another distinction between the public library and an institutional library is that institutional libraries serve to enhance a school's image.
    </p><p>
      MC: I feel that this is a central distinction
    </p><p>
      Institutions advertise their libraries as attractions to the public and tools of validating their prestigiousness through the size of their holdings. These resources are as much political in their intentions as they are to serve its users.
    </p>
      <p class="head">
        Library as a Space - Mingjia Chen
      </p><p>
      Thinking about the library as a space does not necessarily imply that one is reading the material qualities of the library as a phenomenological space. The Library as concerned by our research has so far been investigated as a geographical and policy-informed space rather than an architectural one.<sup>13</sup>For instance, in the province of British Columbia, the public library system as a social space seems to occupy an increasingly marginal position within the complex structure of governmental programs both politically and financially. Yet, in the midst of the increased digitization of public services and the privatization of information, the public libraries in BC have become the forefront of maintaining social security - <b>it has become the safety net of the social safety net.</b><sup>14</sup>
      </p><p>
      TB: nicely said
      </p><p>
      The municipal library, despite its primary function as a shared public resource for knowledge, has been crucial for people struggling to find their place in the city. According to Freeman, many municipal libraries across the Vancouver region have become the only place where people could access technologies for free, and to actively receive personal support for filling out governmental assistance applications. However, the librarians’ willingness to help has put the public library in a double bind.  Neither adequately supported by government funding nor part of their mandate, the library staff members constantly receive complaints “from housed patrons while trying to support their homeless patrons to find safe shelter during the day, sleep in safety, and enjoy the space of the library.”   The presence of the public library branch in the community as a center for social support providing both infrastructure and assistance has disrupted its persistent image of a seemingly apolitical space for public education.
      </p><p>
      The academic library, on the other hand, faces a different contradiction around its uses. Students who need a productive workspace would make the academic library their “crib.”   Productivity does not only entail intensive periods of scholarly activities, it also includes the in-betweens of the working sessions, such as using the bathroom, eating, taking a nap, and scrolling their smartphones. Such uses have existed since the establishment of Harvard’s Lamont Library in 1949, the first American academic library dedicated to (male) undergraduate students.
      </p>
      <img src="/images/minor_presence_1.jpg">
      <p class="caption">UAV 605 (HC 326) Students reading in Farnsworth Room, ca. 1954. Source: Harvard University Archives.</p>
      <p>
      However, it was not until recently that the institutions started to rethink the library as a space beyond being a repository for archives. As the architect and library planning specialist Geoffery T. Freeman suggests, the academic library has been traditionally planned to prioritize the processing of archival resources and materials. However, as the institution shifts its paradigm from a teaching-based pedagogy into a learning-based one, such programming would no longer meet the students’ ever-evolving needs. With the increasing digitalization of archival materials, the students need a place where she “gets serious,” and one which “enables [her] to advance [her] learning experiences.”  Further, by anticipating students’ social uses, Freeman contends that the newly designed academic library should reflect and enhance the vision (or what we could call an official image) of its hosting institution.
    </p><p>
      We see that the question of the library’s social uses (such as providing access to technology, sanitary infrastructures, and living spaces) which has been under critical discussion in the realm of public policy has been appropriated by the institution to build its new image as a space of diversity and inclusion. Does this mean that the academic library has become truly accessible? Some suggest that for students, especially freshmen, the poster-child library of an institution can still be very intimidating.  Students are haunted by the dominant and legible image that has been condensed from the eurocentric historical traditions of higher institutions, and the enlightenment. An academic deterrence. An almost forbidden site of secrecy.
    </p><p>
      TB: the intention of the library as furthering the institutions image is a point i find interesting and discussed briefly as well. interested in finding more evidence for this claim.
    </p><p>
      MC: And interested in how successful this image-building has been
    </p><p>
      We see that the question of the library’s social uses (such as providing access to technology, sanitary infrastructures, and living spaces) which has been under critical discussion in the realm of public policy has been appropriated by the institution to build its new image as a space of diversity and inclusion. Does this mean that the academic library has become truly accessible? Some suggest that for students, especially freshmen, the poster-child library of an institution can still be very intimidating.  Students are haunted by the dominant and legible image that has been condensed from the eurocentric historical traditions of higher institutions, and the enlightenment. An academic deterrence. An almost forbidden site of secrecy.
    </p><p>
      TB: is the institutional library public/accessible? not in its image but in its presence it has been utilized as one.
    </p><p>
      MC:This is a good point to consider - I think that when thinking about presence we also need to look at what this means for those who are denied service. I remember that on crimson one student mentioned that the Lamont library is a good place to be away from the "homeless" on campus at 3 AM - what does this say about presence?
    </p>
      <img class="center" src="/images/minor_presence_2.jpeg">
      <p class="caption">Image source: McDonald's.</p>
      <p>
      In fact, we feel that there is a sense of intimacy between the student and their library of choice. Such intimacy is not established through the permission and anticipation of uses established by the institution. Rather, it is accomplished precisely because the student finds this place between the image of solemness and the loosely regulated reality inhabitable. In other words, it is not the best choice, but it is worth the time for what it provides. It is what it is, like finding salad as a “healthy” option at a fried chicken joint.  Yet, something feels off when the institution cuts into this in-between space and consumes it as part of its ever growing official image - I keep thinking about the overpriced Mcdonald's “menu hacks” which took inspiration from people creatively interpreting their regular offerings.
    </p><p>
      TB: well put
    </p><p>
      TB: instituition institutioning.
    </p>
    <h3>Reflection 3: <i>The (intimidating) image of Harvard Libraries</i></h3>
      <img class="center" src="/images/minor_presence_3.png">
      <p class="head">Institutional Fear and Criminality - Tejumola Bayowa
      </p><p>
      Walking into any space can be fearful.
    </p><p>
      MC: So true, especially sometimes when you sense that the space  subtly rejects your presence.
    </p><p>
      Walking into an institutional space in particular brings certain fears. It was not particularly a surprise to hear our librarian friend speak about the fears of Harvard undergraduates using Widener library as a working space. The roots of these fears are varied and it would be impossible to assign one universal root. But while no particular reason can be selected, we can argue that the image of the institution is interlinked with these fears.
    </p><p>
      MC: Like a shadow, or a specter
    </p><p>
      When thinking about institutions and my former fears of institutions, I question what the root of these fears could be. One reason could be the power which institutions have garnered for themselves over time. For example, the University has made an image of itself as an essential link to the betterment of society.
    </p><p>
      MC:  And the academic library is considered to be central for that betterment, as Jeffery Freeman discussed.
    </p><p>
      Over time, the general route to a better life has been reduced to one route; go to a good university, graduate, get a good job, buy a home, start a family.
    </p><p>
      MC: modern life :[
    </p><p>
      The university’s position is cemented as an essential aspect of the betterment of one's future. This power is enough reason to fear the institution. If not fear, then respect it.
    </p><p>
      MC: and respect out of fear.
    </p><p>
      For me, my timid relationship with the University and its spaces continued till I came across The Undercommons by Stefano Harvey and Fred Moten. The shock of reading their words about the University still resonates and continues to be a means of navigation for me through spaces of higher education. In the book they state that the only possible relationship one can have with the university, the American university in particular, is to use it to one's ends and aspirations.
    </p><p>
      MC: This is so true and relatable. I had to stay close to my undergraduate university this summer, and whenever I could, I tried to access student-only services by showing them the front of my expired student card.
    </p><p>
      In this endeavor the university should not and cannot be mistaken as a space of truth and enlightenment. This truth founded and maintained by the university is the basis of professionalization. The university is the training camp for the state and it is the facility in which professionals are pumped out to continue the state’s mission for growth and global empowerment. The State is fraught with its ambitions of generating a worldview in support of its ambitions of unchecked growth, knowledge, and power. Although the university imagizes  itself as humanitarian in its ambitions, there is no denying its complicity and support of the States globalizing and totalitarian ambitions.
    </p><p>
      The question then is what do we do for those of us that find ourselves uneasy in our relationship with the University — those unwilling to continue down the lane of professionalization. Perhaps those spaces which we fear, those spaces which we hesitate to enter, are the spaces our presence needs to venture. Full advantage should be taken of the hospitality which the University provides to maintain its humanitarian image. Moving along those shelves are spaces for refuge, not fear.
    </p><p>
      MC: This is interesting - to sustain an image constitutes a complex system of providing and maintaining services - an image is not just for PR and media exposure.
    </p><p>
      TB: Yes, the image requires work from the university. Thank you for pointing this out. very true.
    </p>
    <p class="head"> The Harvard Library Image - Mingjia Chen
    </p><p>
      One persistent and widespread myth has been haunting well-off middle-class Chinese parents for the past decade. The (quite frankly, commercial-toned) myth briefly goes as follows:
    </p>
    <p class="quote">
      “Aren’t you so curious about the secret to the success of Harvard students? Don’t you dream that your kid would join their ranks? The answer is simple - just look at all the students staying in the Harvard library reading rooms at 4 a.m, working diligently year-round! Persistence is key - sleep less, read more. Send your kid to the institution of their dreams the Harvard library way!”
    </p><p>
      TB: this led to my thinking for my reflection in terms of fear and respect of the institution
    </p><p>
      The viral myth, circulating mainly through online chat groups such as WeChat and QQ messenger, has only been debunked recently. It had spawned a constellation of motivational materials including books and speeches and had become a specter that incessantly haunted my generation growing up. Think about the tiger mom - the stereotypical East Asian strictness on their kids’ educational careers.  One feature of the “4 a.m Harvard Library myth” is of particular interest to me. The rumor circulates mainly through the constant reposting of an image “of the Harvard students working hard in their library, their desks all lit up.” The image was eventually proved to be a generic image sourced online.
    </p><p>
      TB: the generic image . theres something i find interesting about this
    </p><p>
      MC: Or an unofficial image born out of a myth?
    </p><p>
      The above image is itself quite debunkable if one is familiar with the built environment of the Harvard campus, or any other academic libraries (and is privileged to know such information). One would not expect such density at 4 in the morning. One could also tell from the spatial arrangement of the workstations and the objects they house that the space represented is highly unlikely to be a Harvard reading room. However, it matters less that such an image is not taken from Harvard. It aligns with how Harvard has been seen and perceived outside its campus - an elite institution, the sacred site where the purist pursuit of knowledge is bundled with personal success, and the popular destination in an otherwise quite bland New England Town. The fabricated image of the “4 a.m Harvard Library” - hand in hand with (no matter how unsolicitedly) Harvard’s institutional image has fuelled and shaped at the same time the global bourgeois desire for reputation masqueraded as a commitment to personal enrichment.
    </p><p>
      TB: lol
    </p><p>
      It was fun to speak with someone from the other side - and we learned that many Harvard undergraduate students were intimidated by the Widener Library because they constantly encounter visitors who’d fetishize their existence as “godly,” while they were struggling to find an uninterrupted space to work, slack or just hang out.  Slightly ironically, the Widener Library was historically intended for graduate students, and the undergraduates - glorified as they are - did not have a library space dedicated to them until the establishment of the Lamont.  Harvard’s institutional image which was predicated on colonial knowledge production of the European academy has morphed partially into real and felt pressure on the majority of its community - the students. In addition to asking whether the presence of the institutional library is different from its official image, we could subsequently ask: Does the image of the institution have its own presence?
    </p><p>
      TB: mmm. this flip is interesting. my instinct is yes, it does. a presence sustained through myth (like the image above) and "authentic" systems like school rankings, alumni lists etc. interested in what you think
    </p><p>
      MC: I would also think that it does, but we can keep it an open question. I think the image has its weight, and realness in a way. It can have its positive effects in that one could be inspired by it - it partly excludes people from the elite institution, partly fuels peoples' fascination with it.
    </p><p>
      Such an image certainly has its presence for me - as soon as I arrived in Cambridge and registered for everything, I immediately showed up at the Smith Center. I wanted to get my library access card (as a student from a “partner” institution) as soon as possible. The library card, which looks slightly different from other HUIDs, grants you more access than you’d expected. In fact, one of the first open secrets and tips that I heard from students is to get a Harvard library card, so that one could cruise down the otherwise chaotic Massachusetts Ave in the comfort and exclusivity of the Harvard H2 shuttle. Simply use your thumb to cover the “library” notion on your card when you show it to the bus driver. For a moment Harvard’s exclusive image dissolves into a solution before it precipitates you out again when you are confronted with a magnetic card reader.
    </p><p>
      TB: never mind the previous question haha you answer it right here
    </p><p>
      MC: Oh right, I did..... and I just replied back to you above
    </p><p>
      P.S. The German Marxist philosopher, Ernst Bloch, wrote his magnum opus, The Principle of Hope, while he was using the facilities at the Widener Library while taking refuge from the Nazi regime. Thus far this has been the strongest image in my mind whenever visiting and using the reading room at the Widener library.
    </p><p>
      TB: as stated in my write up: the "only relationship to the university is a criminal one" take advantage of its hospitality
    </p><p>
      MC: Yes - it would be important to elaborate on this hospitality as we move along in the next parts. I would love to hear more from you on this.
    </p>
      <h3>Reflection 4: Image and Presence</h3>
      <img class="center" src="/images/minor_presence_4.png">
      <p class="head">
      Some Definitions - Tejumola Bayowa
      </p><p class="head">
      Institutional Image
    </p><p>
      ●	A representation of the external and internal form of an institution's beliefs and practices as a body of staff, faculty and students presented to the general public in a positive light that enhances the institution's reputation as a viable means of producing intellectually and culturally prepared adults.
    </p><p>
      MC: I think in order to sustain this image the institution has to set up a complex system of operations - almost covering everything that an institution does.
    </p><p>
      TB: Very true.
    </p><p class="head">
      Institutional presence
    </p><p>
      ●	The state of affairs at an institution that exists but is suppressed by an institution due to its conflicting nature with an institution's public image.
    </p><p>
      Axioms for considering Image and Presence in our Research - Mingjia Chen
    </p><p>
      Axiom 1: The official image of the institution does not concern the present. It always anticipates the future (through strategic planning rather than tactical reaction ) and is always predicated on its accumulated past.
    </p><p>
      TB: i think it does concern itself with the present: anticipate and work within the present.
    </p><p>
      MC: Good point!
    </p><p>
      Axiom 2: The presence of the institution felt within the community serves to focus and change with every present moment - it produces historical traces of events and is influenced by its own history, but it is only partially recorded and scattered across different forms of the archives.
    </p><p>
      Axiom 3: The institution curates its image through various means and has partial control over it. Its presence for the people it serves (and denies to serve), on the other hand, cannot be produced deliberately by itself. Its presence can only be felt through its operations by both people operating and using it.
    </p><p>
      TB: maybe more than partial. since the institution is in cahoots with the state, the state helps maintain its image through media
    </p><p>
      Axiom 4: The presence of an institution can travel beyond the community it situates. During the transmittance process, it gradually flattens itself into an image.
    </p><p>
      TB: interesting, i would like to hear more about this
    </p><p>
      Axiom 5: The institution’s image and its presence are not always in opposition; their relationship is reciprocal, and they often override each other. The goal is to show their complicity as well as antagonism.
    </p><p>
      TB: well said
    </p><p>
      Axiom 6: Neither the image nor the presence of an institution necessarily carries a moral value, and their structural relationship is complex and multi-layered.
    </p><p>
      A note on the library as an architectural space: Although so far we concern the library only through its structural position within the community it serves, it is important to note that the architectural qualities of a particular library are important for studying its presence - as the architectural design of the library shapes its intended and unintended uses. For example, the sense of privacy of the stacks has historically provided a cruising space.  Another example is the dividers at the Lamont library, which have been creatively adopted by students during COVID to create a pod for taking their masks off.
    </p><p>
      TB: this will come in Part 2!
    </p><p>
      Please add more along the way!
    </p>
      <h3>Reflection 5: <i>The Popular and the Remix</i></h3>
      <img class="center" src="/images/minor_presence_5.png">
      <div class="footer">
        <h3>Bibliography</h3>
        <p>
        Ahmed, Sara. “Orientations.” GLQ 12, no. 4 (2006): 543–574.
        </p><p>Baudrillard, Jean. <i>America</i>. London: Verso, 1988.
          </p><p>
        Campt, Tina. <i>Listening to Images</i>. Durham: Duke University Press, 2017.
          </p><p>
        Certeau, Michel de. <i>The Practice of Everyday Life</i>. Berkeley: University of California
        Press, 1984.
          </p><p>
        Freeman, Geoffrey T. <i>Library as Place: Rethinking Roles, Rethinking Space</i>.
        Washington, D.C: Council on Library and Information Resources, 2005.
          </p><p>
        Freeman, Lisa. “Public Libraries Are Becoming the New Social Safety Net.” Policy Note,
        September 28, 2017. <a target="_blank" href = "https://www.policynote.ca/public-libraries-are-becoming-the-new-social-safety-net/">link</a>.
          </p><p>
        Harney, Stefano, and Fred Moten. <i>The Undercommons: Fugitive Planning & Black Study. Wivenhoe</i>: Minor Compositions, 2013.
          </p><p>
        Heil, Emily. “Review | McDonald's Mashed-up Menu Hacks Might Be Better Left
        Unmashed.” The Washington Post. WP Company, February 9, 2022. <a target="_blank" href = "https://www.washingtonpost.com/food/2022/02/08/mcdonalds-menu-hacks-review/">link</a>. .
          </p><p>
        Marshall, Daniel, Kevin P. Murphy, and Zeb Tortorici. “Queering Archives: Historical Unravelings Introduction.” <i>Radical history review</i>, no. 120 (2014): 1–11.
          </p><p>
        Schwager, & Ulrich, L. T. (2004). <i>Yards and Gates: Gender in Harvard and Radcliffe history</i>. Palgrave Macmillan.
          </p><p>
        Spivak, Gayatri Chakravorty. <i>An Aesthetic Education in the Era of Globalization.</i> Cambridge, Mass: Harvard University Press, 2012.
          </p><p>
        Yapp, Hentyle. Minor China: <i>Method, Materialisms, and the Aesthetic.</i> Durham: Duke University Press, 2021.
        </p>
      </div>



    </section>

    <section v-if="index === 4">
    </section>

    <section v-if="index === 5">
    </section>
    <div class="footer">
      <div class="arrow-up" @click="$el.scrollTop = 0">
        <stud v-for="i in 4"
              :key="'arrow-up-right'+i"
              :x="50-(i-1)*10"
              :y="i*10"
        />
        <stud v-for="i in 4"
              :key="'arrow-up-left'+i"
              :x="50+(i-1)*10"
              :y="i*10"
        />
    </div>
</div>
  </article>
</template>

<script>
import Stud from "@/components/Blocks/Stud";
export default {
  name: "Projects",
  components: {Stud},
  props: {
    title: String,
    author: String,
    link: String,
    left: Number,
    width: Number,
    index: Number,
  },
  data() {
    return {
      imgSlide: 1,
    }
  },
  mounted() {
    // let ps = this.$el.querySelectorAll("p")
    // for (let i=0; i < 30; i++){
    //   let p = ps[i]
    //   console.log(p.innerText.slice(0, 3))
    //   if (p.innerText === "TB:") {
    //     ps[i].style.color = 'pink';
    //   }
    // }
  },
  methods: {
    loadMedia(path) {
      return require(path)
    }
  }
}
</script>

<style scoped>
.page-full {
  justify-content: center;
  justify-items: center;
  padding-left: 50px;
  overflow-x: hidden;
  scroll-behavior: smooth;
}
.page-full::-webkit-scrollbar {
  display: block;
  width: 0.6em;
  height: 0.5rem;
}
.page-full::-webkit-scrollbar-thumb {
  background: #000;
}
.arrow-down {
  cursor: pointer;
  position: relative;
  top: 90px;
  margin: 0 auto;
  height: 50px;
  width: 100px;
}
.arrow-up {
  cursor: pointer;
  position: relative;
  /*left: calc(50% - 50px);*/
  margin: 0 auto;
  align-self: center;
  bottom: 0;
  height: 50px;
  width: 100px;
}

p {
  text-indent: 60px;
  font-size: var(--font-med);
  margin: 0 9%;
  hyphens: none;
}
hr {
  align-self: center;
  width: 84%;
}
sup {
  text-decoration: underline;
}

.head {
  text-indent: 0;
  margin-top: 18px;
  margin-bottom: 6px;
}
h1 {
  /*font-family: "IBM Plex Mono", sans-serif;*/
  /*font-weight: 500;*/
  /*letter-spacing: -.15rem;*/
  text-align: center;
  margin-top: 150px;
  margin-bottom: 0;
}
h2 {
  text-align: center;
}
h2 > a {
  /*font-family: "IBM Plex Mono", sans-serif;*/
  /*color: white;*/
  /*text-shadow: 0 0 6px #757575;*/
  font-weight: 500;
  text-decoration: none;
}
h2 > a:hover {
  text-decoration: underline greenyellow;
}
h3 {
  margin: 60px 9% 25px;
  font-size: var(--font-big);
  color: #666;
  text-decoration: underline;
}

.footer {
  padding-bottom: 100px;
}

.footer > p {
  text-indent: 0;
  margin-bottom: 6px;
  font-size: var(--font-small-med);
}
.footnote {
  margin-top: 18px;
}

.footnote > p {
  text-indent: 0;
  margin-bottom: 6px;
  font-size: var(--font-small-med);
}

img {
  margin: 25px 9% 25px;
  width: 82%;
}

/*doris's image slider*/
.img-slider {
  margin: 25px 9% 25px;
}

.img-slider-inner > img {
  margin: 0;
  /*width: 100%;*/
  /*height: 100%;*/
  /*object-fit: contain;*/
}

.center {
  max-width:600px;
}

.caption {
  text-align: right;
  font-size: var(--font-small-med);
  color: #666;
  margin-bottom: 18px;
}
a {
  color: #666;
}
</style>
