<template>
  <div class="project" id="the-skin-i-visibly-live-in">
    <div class="img-container"
          v-for="i in 91"
          :key="'merve'+i">
      <img :src="'/images/merve/the_skin_i_visibly_live_inwt' + i + '.jpg'">
    </div>
  <div class="footer">
    <h3>Bibliography</h3>
    <p>
      Pitts, Victoria. “Visibly Queer: Body Technologies and Sexual Politics.” The Sociological Quarterly 41, no. 3 (2000): 443–63.
      <a target="_blank" href="http://www.jstor.org/ stable/4121386">link</a>
    </p><p>
      Martha Few; “That Monster of Nature”: Gender, Sexuality, and the Medicalization of a “Hermaphrodite” in Late Colonial Guatemala. Ethnohistory 1 January 2007; 54 (1): 159–
      176. doi:
    <a target="_blank" href="https://doi.org/10.1215/00141801-2006-042">link</a>

  </p><p>
      Hammerr, Karen. A Scar Is More than a Wound: Rethinking Community and Intimacy through Queer and Disability Theory, n.d.
    </p><p>
      Freeman, Elizabeth. Time Binds: Queer Temporalities, Queer Histories. North Carolina: Duke University Press, 2011.
    </p><p>
      Nash, C.J. (2010). Queer Methods and Methodologies: Intersecting Queer Theories and Social Science Research (K. Browne, Ed.) (1st ed.). Routledge.
    <a target="_blank" href="https://doi.org/10.4324/9781315603223">link</a>

    </p><p>
      Gorkemli, Serkan. “‘Coming Out of the Internet’: Lesbian and Gay Activism and the Internet as a ‘Digital Closet’ in Turkey.” Journal of Middle East Women’s Studies 8, no. 3 (2012): 63–88.
    <a target="_blank" href="https://doi.org/10.2979/jmiddeastwomstud.8.3.63">link</a>

    </p><p>
      Laqueur, Thomas W. “Sex in the Flesh.” Isis 94, no. 2 (2003): 300–306.
    <a target="_blank" href="https://doi.org/10.1086/379388">link</a>

  </p><p>
      Making Sex: Body and Gender From the Greeks to Freud, Thomas Laqueur, 1990. Harvard University Press, Cambridge, MA. 352 pages. ISBN: 0-674-54349-1. $27.95. Bulletin of Science, Technology & Society. 1993;13(3):162-162. doi:
    <a href="https://doi.org/10.1177/027046769301300330" target="_blank">link</a>

    </p><p>
      Queer Archives: Between the Institutional and the Personal (YouTube video recording of a symposium)
      Carlos Motta works :
    <a target="_blank" href="https://www.mor-charpentier.com/artist/carlos-motta/">link</a>
  </p><p>
    Queer Tattoos: Histories and their meanings
    <a target="_blank" href="https://myweb.students.wwu.edu/~vowelsa2/360/project-2/">link</a>

    </p>
  </div>

  </div>
</template>

<script>
export default {
  name: "TheSkinIVisiblyLiveIn"
}
</script>

<style scoped>
.project {
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

img {
  margin: 0 auto;
  width: 100%;
}

.img-container {
  scroll-snap-align: start;
  scroll-snap-type: y mandatory;
  margin: -4px 6%;
  width: 88%;
}

.footer {
  padding-bottom: 100px;
}
.footer > p {
  text-indent: 0;
  margin-bottom: 6px;
  font-size: var(--font-small-med);
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
.caption {
  text-align: right;
  margin-right: 11%;
  letter-spacing: -0.05rem;
  font-size: var(--font-small);
  color: #666;
  margin-bottom: 18px;
  margin-top: -10px;
}

</style>
