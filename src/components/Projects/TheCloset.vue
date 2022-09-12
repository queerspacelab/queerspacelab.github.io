<template>
  <div class="project" id="the-closet">
    <div class="img-container">
      <transition name="fade">
        <div v-if="view === 1" class="img-container"
             @click="view = 2">
          <img src="/images/the_closet_1.jpeg" />
        </div>
        <div v-if="view === 2" class="click-overlay">
          <img src="/images/the_closet_2.jpeg" style="width: 100%; margin: 0;"/>
          <div class="click-zone"
               v-for="i in 9"
               :key="'clickZone'+i"
               :style="{
                 width: clickZone.width[i-1] + '%',
                 height: clickZone.height[i-1] + '%',
                 top: clickZone.top[i-1] + '%',
                 left: clickZone.left[i-1] + '%'
               }"
               @click="view = i+2" />
        </div>
        <div v-if="view > 2" class="img-container">
          <div class="click-zone-left"
               :style="{position: 'absolute', width:'100px', height: '50%'}"
               @click="view=2"/>
          <img :src="'/images/the_closet_' + view +'.jpeg'"
               :class="view===6 || view===8 || view===9? 'center-portrait': ''"/>
        </div>
      </transition>
    </div>

    <div v-if="view === 1" class="text">
      <p class="caption" style="text-align: center">
        click to open the closet
      </p>
    </div>

    <div v-if="view === 2" class="text">
      <p class="caption" style="text-align: center">
        click inside the closet to zoom in
      </p>
    </div>

    <div v-if="view === 3" class="text">
      <p class="caption">
        The Purple Box
      </p><p>
      The purple box contains the enormous rainbow flag customized by the professor who supported the founding of the Rainbow Club in Zhongshan University, the first LGBTQ dedicated official university club to exist in mainland China. Rainbow Club has the tradition of taking out and raising this enormous flag every May 17th, and Rainbow Club members have been passing down this purple box for over a decade. However, due to the increasing pressure and later direct suppression from the school, letting the flag out every year becomes a challenging feat.
      </p>
      <div class="footnote">
        <hr>
        <p>
        知乎.“让彩虹旗在校园飘扬：一个高校同志小组十二年纪实.” last modified May 14, 2018.
        <a target="_blank" href="https://zhuanlan.zhihu.com/p/36852164">link</a>
        </p>
      </div>
    </div>

    <div v-if="view === 4" class="text">
      <p class="caption">
      “LGBT学生组织生存指南”
      </p>
      <p class="caption">
      “LGBT Student Organization Survival Guide”
      </p><p class="bullet head">
      Content:
      </p><p class="bullet">
        1、可传承的品牌活动。一个有特色的活动可以提高小组的知名度以及对成员的凝聚力，保证组织活动的持续性。
      </p><p class="bullet">
        1、Create a branding activity that becomes a tradition. A special event helps the group become more well-known and the members more attracted and attached—ensuring the group to be more long-lasting.
      </p><p class="bullet">
        2、组织务必去官僚化。在活动的策划、举办和组织发展过程中，过分划分层级可能抑制新人的活力和创造力。我们始终是一群人在努力，而不是一个人。
      </p><p class="bullet">
        2、Eliminate hierarchy within the organization. During the process of planning and running events, an over-division of hierarchical levels can reduce the activeness and creativity of new members. We are a group of people working together, not a single person.
      </p><p class="bullet">
          3、不断完善组织架构。随着组织规模的壮大，搭建清晰的组织架构、明确各自的职责能提高组织运作的效率。
      </p><p class="bullet">
          3、Constantly improve the organization of the group. As the group grows, build clear organizational structure and establish clearly the responsibility of each member. This increases the group’s efficiency.
      </p><p class="bullet">
          4、团建和组培很重要。定期组织内部团建活动和性/别议题相关的培训，成员可以获得更好的支持，对于组织而言也能增强凝聚力、提高成员的性/别敏感度和行动力。
      </p><p class="bullet">
          4、Team building and group training is very important. Host teaming-bonding events and trainings on sex/gender-related topics regularly. Through this, members can receive better support, the group can become more unified, more sensitive to related topics on sex/gender, and more prone to action.
      </p><p class="bullet">
          5、不断拓展资金来源。在线下活动或线上传播中进行筹款，开发周边义卖，申请国内LGBT组织开放的小额资助都是不错的选择。毕竟有了钱，才能租场地、办活动。
      </p><p class="bullet">
          5、Constantly expand sources of funding. Fundraise through in-person activities or online advertising, charity sales, and small grants open to LGBT organizations. Only with funding, we can reserve space and host events.
      </p><p class="bullet">
          6、充分链接各方资源。如果你有一双善于发现的眼睛，会看见国内有着丰富的LGBT资源。你可以邀请在地的圈内大咖做活动嘉宾、远程嘉宾做线上分享，还可以申请各个机构/组织开发的学习资料、科普资料或彩虹周边。
      </p><p class="bullet">
          6、Connect with all possible resources. If you look hard and creative enough, you will find that there is an abundance of domestic LGBT resources. You can invite guests in the local or the greater LGBT community for in-person or remote talks. You can also ask to use other organizations' educational material or other rainbow-related products.
      </p><p class="bullet">
          7、利用好新媒体平台。通过微信公众号、微博等低成本、低门槛的新媒体平台进行人员招募、活动宣传，并请其他LGBT公众号转发。此外，还可以定期进行一些线上互动（如有奖故事征集），保证关注者的活跃度。
      </p><p class="bullet">
          7、Make good use of new media platforms. Recruit new members and publicize events through easy-to-use platforms such as Wechat official accounts or Weibo, and ask other LGBT accounts to forward. Moreover, keep up online interactions: events like personal story submission for prizes can keep followers active.
      </p><p class="bullet">
          8、和学校官方搞好关系/做一个只闻其声不见其人的“神秘组织”。如果学校对多元性/别议题态度较友好，可以考虑和学校社团合作、以各种名义申请场地，甚至试着申请成为注册社团。如果学校并不友好，避免让学校知道成员名单以规避风险，可在校内组织快闪活动，或向校外拓展LGBT友好的场地。
      </p><p class="bullet">
          8、Be on good terms with the admins of the school/be a heard-but-never-seen “mysterious organization.” If the school holds a relatively positive attitude toward diversity/gender issues, consider collaborating with existing school clubs, appling to use school property under any name, and even trying to register the group as an official student club. If the school is unfriendly, do not let the school know the member roster so as to avoid risks. Organize on-campus flash events if possible, or reach out to off-campus, LGBT-friendly space.
      </p><p>
          The majority of “LGBT Student Organization Survival Guide” seems applicable to almost any starting student organizations. However, as a guide written in pre-covid time, there is an overly strong reliance on online platforms, highly possibly due to the inaccessibility of physical spaces. Moreover, the last point on the guide reveals the difficulty that is specific to LGBTQ-related organizations. The attentiveness to the relationship with the school admins and the willingness to be a “mysterious organization” shows the unfriendliness of the public space toward the LGBTQ groups. Student LGBTQ organizations in Chinese universities often struggle to exist for they could face much discrimation and pressure from the school. In fact, many universities directly forbid the forming of LGBTQ organizations.
      </p><p class="bullet">
            “LGBT Student Organization Survival Guide” is written by a former Rainbow Club organizer  (see 彩虹社Rainbow Club).
      </p>
      <div class="footnote">
        <hr>
        <p>知乎.“让彩虹旗在校园飘扬：一个高校同志小组十二年纪实.” last modified May 14, 2018.
          <a target="_blank" href="https://zhuanlan.zhihu.com/p/36852164">link</a>
        </p>
      </div>
    </div>

    <div v-if="view === 5" class="text">
      <p class="caption">
      Calendar with May 17th marked
      </p>
      <p>
      May 17th is 世界彩虹日, International Day Against Homophobia, Transphobia and Biphobia. It is the most celebrated day among LGBTQ communities in China. Most organized Pride events take place on this day. However, this is also the day where uncomfortableness or even resistance toward LGBTQ expressions is strongly felt. According to a student blog post, carrying a pride flag on May 17th attracted many unwelcoming looks from strangers and the student felt pressure to hide the flag. In more extreme cases, organized university pride events can face serious warnings or even shutdowns.
      </p>
      <div class="footnote"><hr>
        <p>
      知乎.“北大清华LGBT是怎样的一种体验.” Accessed July 29, 2022.<br>
      北大清华 LGBT 是怎样的一种体验? - 知乎 (page no longer accessible*)
        </p>
        <p>
          *Like many contents that are considered sensitive on the web in China, LGBTQ-related pages or articles could be taken down or deleted anytime with no warning or explanation. I believe this shows the current attitude toward public LGBTQ expression in China.
        </p>
      </div>
    </div>

    <div v-if="view === 6" class="text">
      <p class="caption">
        10 rainbow flags in Tsinghua University
      </p><p>
        Two students in Tsinghua University, one of the most prestigious universities in China, were punished for placing 10 rainbow flags on May 14th, 2022 in the message area of the supermarket in the school. The students were asked to talk immediately by the university. When refused to talk,the two students were faced with graduation threats and the possibility of being expelled. The school advisor and professor eventually broke into the students’ dorm rooms, and the two students were forced to talk. Both received warning disciplinary decisions in mid July 2022. An article regarding this incident that was fastly circulating on WeChat was deleted within a day of posting.
      </p>
      <div class="footnote"><hr>
        <p>
      早报. “清华大学学生传因在校内放置彩虹旗被处分.” Last modified July 19, 2022.
          <a href="https://www.zaobao.com.sg/realtime/china/story20220719-1294297" target="_blank">link</a>
        </p>
      </div>
    </div>

    <div v-if="view === 7" class="text">
      <p class="caption">
        Identity keychains
      </p><p>
        In China, there is a system of categorizing the sub-groups within the LGBTQ community different from that of western countries. The broad categories for homosexual man is 1, 0.5, and 0, and for homosexual women is T, H, and P. The categorization is based on existing stereotypes of romantic relationships:  1 is someone who takes the lead and performs the active role, while 0 is someone who follows the lead and performs the passive role. A 0.5 is someone in between—sometimes leading and active, and other times following and passive. For homsexual women, the categories are based on gender stereotypes. T stands for tomboy, where the person presents themself like a man. P stands for pretty girl, princess, or 婆(pó, woman), where the person dresses more girlish and presents themself like a girl. H is between T and P, where the person sometimes dresses more girly and other times more boyish, or presents themself in gender neutral ways. When describing one’s identity in China, those six broad terms are most often used instead of the system of lesbian, gay, bisexual, etc. terminology.
      </p>
    </div>
    <div v-if="view === 8" class="text">
      <p class="caption">
        蝴蝶<br>
        Butterfly
      </p><p>
        Butterfly is 2004 Hong Kong film of a lesbian love story from the award-winning director Yan Yan Mak. The film was screened by numerous prominent film festivals across the world. Although Hong Kong was strongly advertised as an integrated part of China in the decade when film was made and the newly revived Chinese film industry desperately needs globally acclaimed films such as Butterfly to prove itself internationally, Butterfly was nonetheless never allowed in theater in mainland China due to its homosexual content.
      </p>
    </div>

    <div v-if="view === 9" class="text">
      <p class="caption">
        上海骄傲节<br>
        ShanghaiPRIDE
      </p><p>
        Shanghai Pride is the first and biggest annual pride festival in mainland China. Starting in 2009, it hosts events such as art exhibitions, film screenings and talks in private venues every second week of June. However, in August of 2020, the organizer suddenly announced that they are shutting down ShanghaiPRIDE, canceling all future events, with no explanation. Many involved refused to be interviewed on the matter, but it is widely speculated that the shutdown is due to pressure from local authorities.
      </p>
      <div class="footnote"><hr>
        <p>
        知乎. “上海骄傲节的关停和社群本土化的思考.” Last modified August 17, 2020.
          <a href="https://zhuanlan.zhihu.com/p/188308443?utm_source=weibo_article_bottom" target="_blank">link</a>
        </p><p>
        CNN. “'End of the Rainbow': Shanghai Pride shuts down amid shrinking space for China's LGBTQ community.” Last modified August 16, 2020.
        <a href="https://www.cnn.com/2020/08/14/asia/shanghai-pride-shutdown-intl-hnk/index.html" target="_blank">link</a>
        </p>
      </div>
    </div>

    <div v-if="view===10" class="text">
      <p class="caption">
        彩虹社 <br>
        Rainbow Club
      </p><p>
      Zhongshan University was the first to have a recognized club dedicated to LGBTQ topics in mainland China. Their club, Rainbow Club, was established in 2006 and organized many LGBTQ-related events. The forming of the club was covered by numerous news stories. However, Zhongshan University’s progressiveness did not last long. Shortly after its establishment, Rainbow club started to face much suppression and erasure: for years, its existence became a myth passed among students. Now, the club had long been erased from the school directory, but disassociated from the university, this student-run organization remains active in the local community.    </p>
    </div>

    <div v-if="view===11" class="text">
      <p class="caption">
        “革命尚未成功 同志仍需努力”<br>
        “The revolution is not yet successful. Comrade, keep fighting.”
      </p>
      <p>
        An extremely well-known phrase by the revolutionary Sun Yat-sen in 1923 proposing and fighting for a republic China against the monarchy. In the recent decades, the word 同志(comrade) has took on another meaning: it became another term for homosexual. Almost a hundred year after it was originally spoken, this phrase takes on a different meaning too. In suppressed pride events organized by college students in Guangzhou, the phrase is shouted to show the students’ willingness to continue their effort to advocate for the LGBTQ community in public despite the institutional resistance they faced.
      </p>
      <div class="footnote"><hr>
        <p>
          知乎.“让彩虹旗在校园飘扬：一个高校同志小组十二年纪实.” last modified May 14, 2018.
          <a href="https://zhuanlan.zhihu.com/p/36852164" target="_blank">link</a>
        </p>
      </div>
      <img class="center-portrait" src="/images/the_closet_12.jpeg">
      <p class="caption">
        李影与女友一周年<br>
        Li Ying’s anniversary post
      </p><p>
        Li Ying, a crucial player in China women’s national soccer team, posted images of her and her girlfriend in June of 2021 celebrating their one-year anniversary, as the chocolate cake in the picture clearly writes “Happy One-year Anniversary” with her and her girlfriend’s initials. This post was immediately deleted upon posting. Such a claim of her LGBTQ identity is extremely unusual for national athletes. Some suspect that the team hired to help Li Ying run her social media as a public figure deleted the post, for this post and thus her LGBT identity would be considered inappropriate for a national athlete.
      </p>
      <div class="footnote"><hr>
        <p>
          百度. “女足李影出柜！前脚官宣与女友相爱一年，下秒删动态被认可太难.” Last modified June 26, 2021.
          <a href="https://baijiahao.baidu.com/s?id=1703617325488877457&wfr=spider&for=pc" target="_blank">link</a>
        </p>
      </div>
      <img class="center-portrait" src="/images/the_closet_13.jpeg">
      <p class="caption">
        “橘里橘气”<br>
        “An air of citrus”
      </p>
      <p>
        Inspired from the 2018 anime TV series Citrus, a romance between two girls, 橘里橘气 is a neutral, informal adjective describing things that have lesbian connotation. It is a new phrase among many previously existing coded languages used when referring to LGBTQ-related or LGBTQ-leaning content.
      </p>
    </div>

    <div class="footer" />
  </div>

</template>

<script>
export default {
  name: "TheCloset",
  data() {
    return {
      view: 1,
      clickZone: {
        'width': [
          11.949464,
          11.460827,
          11.64037,
          10.62296,
          11.700218,
          6.972252,
          3.351469,
          7.42111,
          3.501088
        ],
        'height': [
          19.834195,
          14.722524,
          17.754806,
          35.469713,
          17.196228,
          22.26333,
          22.143634,
          7.101922,
          15.879579
        ],
        'left': [
          37.790624,
          38.479178,
          38.17994,
          51.22673,
          38.239788,
          51.077111,
          59.156545,
          51.196806,
          59.186469,
        ],
        'top': [
          68.105107,
          11.774293,
          48.041975,
          11.814191,
          28.850825,
          61.767039,
          48.401061,
          53.54796,
          71.302766
        ]
      }
    }
  }
}
</script>

<style scoped>
.text {
  display: flex;
  flex-direction: column;
}

.img-container {
  display: flex;
  flex-direction: column;
}


.bullet {
  text-indent: 0;
  margin-top: 12px;
  margin-bottom: 12px;
}
.head {
  text-indent: 0;
  margin-top: 24px;
  margin-bottom: 6px;
  text-decoration: underline;
  color: #666;
}

h3 {
  margin: 60px 9% 25px;
  font-size: var(--font-big);
  color: #666;
  text-decoration: underline;
}
p {
  text-indent: 60px;
  font-size: var(--font-med);
  margin: 0 9%;
  hyphens: none;
}
hr {
  align-self: center;
  color: #666;
  width: 84%;
}
sup {
  text-decoration: underline;
}

img {
  margin: 25px 9% 25px;
  width: 82%;
}

.center-portrait {
  width: 400px;
  max-width:400px;
  align-self: center;
}

.center-landscape {
  width: 600px;
  max-width:600px;
  align-self: center;
}

.click-overlay {
  position: relative;
  margin: 25px 9% 25px;
  width: 82%;
  aspect-ratio: 4/3;
}

.click-zone {
  cursor: pointer;
  position: absolute;
  float: left;
  transition: 200ms ease-in-out;
}
.click-zone:hover {
  background: rgb(239, 239, 239, 0.5);
}
.footer {
  padding-bottom: 100px;
}

.footer > p {
  text-indent: 0;
  margin-bottom: 6px;
  font-size: var(--font-small-med);
}
a {
  color: #666;
}

.footnote {
  margin-top: 18px;
}

.footnote > p {
  text-indent: 0;
  margin-bottom: 6px;
  font-size: var(--font-small);
  text-justify: newspaper;
  /*color: #666;*/
}
.click-zone-left {
  cursor: pointer;
}
.caption {
  text-align: center;
  text-indent: 0;
  margin-right: 11%;
  letter-spacing: -0.05rem;
  font-size: var(--font-small);
  text-decoration: underline;
  color: #666;
  margin-bottom: 18px;
  margin-top: -10px;
}

</style>
