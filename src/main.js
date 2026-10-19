import './style.css'

const app = document.querySelector('#app')

app.innerHTML = `
  <div class="site-shell" id="top">
    <header class="browser-bar wrap" aria-label="Pip's website header">
      <a class="brand" href="#top" aria-label="Back to Pip's nursery home">
        <span class="brand-mark" aria-hidden="true">P</span>
        <span><strong>pip.exe</strong><small>midnight nursery / online</small></span>
      </a>
      <div class="browser-actions">
        <span class="status-dot" aria-hidden="true"></span><span class="tiny-label">dreams: open</span>
        <button class="theme-toggle" id="theme-toggle" type="button" aria-pressed="false"><span aria-hidden="true">☼</span> day mode</button>
        <button class="utility-toggle" id="sound-toggle" type="button" aria-pressed="false">sound off</button>
        <button class="utility-toggle" id="chaos-toggle" type="button" aria-pressed="false">chaos mode</button>
      </div>
    </header>

    <main>
      <section class="hero wrap" aria-labelledby="hero-title">
        <div class="hero-copy">
          <p class="eyebrow"><span>✦</span> junior dream engineer · midnight nursery <span>✦</span></p>
          <h1 id="hero-title">Pip builds the<br /><em>dreams</em> you fall<br />asleep inside.</h1>
          <p class="hero-intro">Tonight, one tiny creature has lost its favorite dream. Follow Pip's trail before sunrise.</p>
          <div class="hero-actions">
            <button class="primary-button" id="enter-button" type="button">Begin the night shift <span aria-hidden="true">↘</span></button>
            <a class="text-link" href="#story">follow the stars <span aria-hidden="true">↓</span></a>
          </div>
          <p class="micro-note"><span aria-hidden="true">⌁</span> currently awake, probably <span class="blink">●</span></p>
        </div>
        <div class="hero-art hero-asset-art">
          <span class="asset-orbit" aria-hidden="true"></span>
          <img id="pip-portrait" src="/assets/pip_avatar_cloud.png" alt="Pip waving from a cozy dream cloud; activate for a little surprise" width="896" height="1090" decoding="async" fetchpriority="high" tabindex="0" role="button" />
          <span class="art-caption">PIP / SHIFT: 00:00—06:00</span>
        </div>
      </section>

      <div class="marquee" aria-hidden="true"><div>WELCOME, SLEEPY VISITOR · PLEASE MIND THE CLOUDS · WELCOME, SLEEPY VISITOR · PLEASE MIND THE CLOUDS · </div></div>

      <section class="story wrap section-rule" id="story" aria-labelledby="story-title">
        <div class="section-kicker"><span>01</span><span class="rule"></span><span>tonight's assignment</span></div>
        <div class="section-heading story-heading"><div><h2 id="story-title">A dream is<br /><em>missing.</em></h2></div><p>Four quiet moments from Pip's night shift. Move at your own pace; each scene leaves a small clue for the next.</p></div>
        <div class="story-progress" aria-label="Story progress"><span class="progress-fill" id="progress-fill"></span></div>
        <div class="scene-player story-player" aria-live="polite">
          <div class="scene-art" id="scene-art">
            <span class="scene-sky-star star-1">✦</span><span class="scene-sky-star star-2">✧</span>
            <div class="scene-moon-small"></div><div class="scene-cloud cloud-scene-one"></div><div class="scene-cloud cloud-scene-two"></div>
            <img class="scene-asset scene-pip-asset" src="/assets/pip_portrait.png" alt="" width="682" height="1024" loading="lazy" />
            <img class="scene-asset scene-object-asset" src="/assets/pip_lullaby_box.jpg" alt="" width="1024" height="924" loading="lazy" />
            <img class="scene-lantern-asset" src="/assets/pip_dream_lantern.png" alt="" width="1024" height="914" loading="lazy" />
            <span class="scene-delivery-star">✦</span>
          </div>
          <div class="scene-copy">
            <span class="scene-count" id="scene-count">scene 01 / 04</span>
            <h3 id="scene-title">The nursery at midnight</h3>
            <p id="scene-text">“The nursery is quiet, so I can hear every dream that needs me.”</p>
            <p class="scene-bridge" id="scene-bridge">A soft blue flicker leads Pip beyond the crib room.</p>
            <div class="scene-controls">
              <button class="scene-arrow" id="scene-prev" type="button" aria-label="Previous story scene">←</button>
              <div class="scene-dots" id="scene-dots">
                <button class="scene-dot active" type="button" aria-label="Show scene 1"></button>
                <button class="scene-dot" type="button" aria-label="Show scene 2"></button>
                <button class="scene-dot" type="button" aria-label="Show scene 3"></button>
                <button class="scene-dot" type="button" aria-label="Show scene 4"></button>
              </div>
              <button class="scene-arrow" id="scene-next" type="button" aria-label="Next story scene">→</button>
            </div>
          </div>
        </div>
      </section>

      <section class="intro wrap section-rule" id="about" aria-labelledby="about-title">
        <div class="section-kicker"><span>02</span><span class="rule"></span><span>the small print</span></div>
        <div class="intro-grid">
          <div><h2 id="about-title">Meet Pip,<br /><em>softly.</em></h2><p class="section-lede">Pip is a junior dream engineer: part listener, part fixer, and always the last one awake when a little heart needs help.</p></div>
          <div class="traits">
            <div class="trait"><span class="trait-icon">☾</span><div><strong>listens closely</strong><p>Finds the one quiet wish hiding under the noise.</p></div></div>
            <div class="trait"><span class="trait-icon">⋒</span><div><strong>repairs gently</strong><p>Uses music, light, and a little field research.</p></div></div>
            <div class="trait"><span class="trait-icon">✦</span><div><strong>delivers on time</strong><p>Every good dream should arrive before morning.</p></div></div>
          </div>
        </div>
      </section>

      <section class="work wrap section-rule" id="work" aria-labelledby="work-title">
        <div class="section-kicker"><span>03</span><span class="rule"></span><span>evidence from the shift</span></div>
        <div class="section-heading"><div><h2 id="work-title">The dream<br /><em>drawer.</em></h2></div><p>Real artifacts from tonight's rescue. Open gently; some are still napping.</p></div>
        <div class="project-grid">
          <article class="project project-lullaby">
            <div class="project-visual asset-visual"><span class="project-number">01 / 03</span><img src="/assets/pip_lullaby_box.jpg" alt="The Lullaby Lab music box" width="1024" height="924" loading="lazy" /><span class="visual-note">choose the repair note</span></div>
            <div class="project-info"><p class="project-type">repair log / 00:47</p><h3>The Lullaby Lab</h3><p>The missing dream has a cracked melody. Pick a mood to tune the final note.</p><div class="mood-controls" role="group" aria-label="Choose a lullaby mood"><button class="mood active" data-mood="hush" type="button">hush</button><button class="mood" data-mood="glow" type="button">glow</button><button class="mood" data-mood="bounce" type="button">bounce</button></div><p class="project-response" id="music-response">the room is listening.</p></div>
          </article>
          <article class="project project-lantern">
            <div class="project-visual asset-visual"><span class="project-number">02 / 03</span><img src="/assets/pip_dream_lantern.png" alt="Pip's glowing crescent moon dream lantern" width="1024" height="914" loading="lazy" /><span class="visual-note">choose a warm escort</span></div>
            <div class="project-info"><p class="project-type">light study / 01:32</p><h3>Nightlight Collection</h3><p>Choose the little light that will guard the repaired dream on its way home.</p><button class="inline-button" id="lantern-button" type="button">light another <span aria-hidden="true">✦</span></button><p class="project-response" id="lantern-response">marigold is glowing.</p></div>
          </article>
          <article class="project project-routes">
            <div class="project-visual route-visual"><span class="project-number">03 / 03</span><div class="map-grid"></div><svg class="route-map" viewBox="0 0 300 190" role="img" aria-label="A hand drawn dream delivery route"><path d="M28 152 C52 128, 45 88, 85 101 S117 160, 144 120 S177 53, 205 72 S229 128, 272 33"/><circle cx="28" cy="152" r="7"/><circle cx="85" cy="101" r="5"/><circle cx="144" cy="120" r="5"/><circle cx="205" cy="72" r="5"/><circle cx="272" cy="33" r="8"/></svg><span class="map-label label-start">nursery</span><span class="map-label label-end">cloud nine</span><span class="visual-note">trace the safe route</span></div>
            <div class="project-info"><p class="project-type">delivery log / 04:18</p><h3>Dream Delivery Routes</h3><p>A hand-drawn map for getting one repaired dream safely across the sleeping neighborhood.</p><button class="inline-button" id="route-button" type="button">trace a route <span aria-hidden="true">↗</span></button><p class="project-response" id="route-response">route 07 is clear.</p></div>
          </article>
        </div>
      </section>

      <section class="logbook wrap section-rule" id="logbook" aria-labelledby="logbook-title">
        <div class="section-kicker"><span>04</span><span class="rule"></span><span>notes from a soft shift</span></div>
        <div class="section-heading"><div><h2 id="logbook-title">Pip's tiny<br /><em>checklist.</em></h2></div><p>Good dream engineering is mostly noticing the small things: a missing hum, a cold corner, a sleepy friend who needs one more minute.</p></div>
        <div class="logbook-grid">
          <article class="log-note log-note-pink"><span class="log-time">00:12 / crib room</span><h3>listen first</h3><p>Before fixing anything, Pip puts one tiny ear to the quiet.</p><span class="log-doodle" aria-hidden="true">◌</span></article>
          <article class="log-note log-note-blue"><span class="log-time">02:08 / lab bench</span><h3>make it warm</h3><p>A good repair should feel like a blanket, not a bandage.</p><span class="log-doodle" aria-hidden="true">☁</span></article>
          <article class="log-note log-note-yellow"><span class="log-time">05:56 / window ledge</span><h3>stay until sunrise</h3><p>Pip never leaves before the first little breath says: safe.</p><span class="log-doodle" aria-hidden="true">✦</span></article>
        </div>
      </section>

      <section class="bedtime wrap section-rule" id="bedtime" aria-labelledby="bedtime-title">
        <div class="section-kicker"><span>05</span><span class="rule"></span><span>the bedtime routine</span></div>
        <div class="bedtime-grid">
          <div class="bedtime-copy">
            <h2 id="bedtime-title">Tiny hands.<br /><em>Big care.</em></h2>
            <p class="section-lede">Pip's best tool is not a gadget. It is the promise to stay close until the scary bit feels small again.</p>
            <div class="routine-list" aria-label="Pip's bedtime routine">
              <div><span class="routine-number">01</span><strong>check the blanket</strong><small>corners tucked, toes warm</small></div>
              <div><span class="routine-number">02</span><strong>count the stars</strong><small>one for every brave breath</small></div>
              <div><span class="routine-number">03</span><strong>whisper goodnight</strong><small>softly enough for dreams</small></div>
            </div>
          </div>
          <div class="crib-card" aria-label="A small bedtime card from Pip">
            <span class="crib-moon" aria-hidden="true">☾</span>
            <span class="crib-cloud" aria-hidden="true">☁</span>
            <span class="crib-bunny" aria-hidden="true">ʕ•ᴥ•ʔ</span>
            <p>dear little dreamer,</p>
            <strong>you are safe<br />to fall asleep now.</strong>
            <span class="crib-signoff">love, Pip ✦</span>
          </div>
        </div>
      </section>

      <section class="guestbook wrap section-rule" id="guestbook" aria-labelledby="guestbook-title">
        <div class="guestbook-card"><div><div class="section-kicker"><span>06</span><span class="rule"></span><span>first light</span></div><h2 id="guestbook-title">The dream<br /><em>arrives.</em></h2><p>By sunrise, the tiny creature is sleeping soundly. Pip's work matters because everyone deserves a safe place to dream.</p></div><form id="wish-form"><label for="wish-input">leave Pip a wish for tomorrow</label><div class="wish-row"><input id="wish-input" name="wish" maxlength="72" placeholder="a warm cloud, maybe..." required /><button type="submit">send <span aria-hidden="true">↗</span></button></div><p class="form-response" id="form-response" aria-live="polite"></p><p class="guestbook-note">local-only guestbook · nothing is uploaded</p></form></div>
      </section>
    </main>

    <footer class="footer wrap"><div class="footer-top"><a class="brand footer-brand" href="#top"><span class="brand-mark" aria-hidden="true">P</span><span><strong>pip.exe</strong><small>made after bedtime</small></span></a><div class="footer-note">© 2026 Pip's Midnight Nursery<br />built with care & a little stardust<br />created by Lovely Sharma</div><div class="counter"><span>visitors / local demo</span><strong aria-live="polite">000<span id="visitor-count">417</span></strong></div></div><div class="footer-bottom"><span>✦ created by Lovely Sharma · official Pip asset pack · Fraunces + DM Mono</span><span><a href="#about">about</a> · <a href="#work">work</a> · <a href="#story">story</a> · <a href="#logbook">notes</a> · <a href="#bedtime">bedtime</a></span></div></footer>
  </div>
  <div class="sparkle-layer" id="sparkle-layer" aria-hidden="true"></div>
  <div class="toast" id="toast" role="status" aria-live="polite"></div>
`

const root = document.documentElement
const toast = document.querySelector('#toast')
const showToast = (message) => { toast.textContent = message; toast.classList.add('show'); window.setTimeout(() => toast.classList.remove('show'), 2800) }

document.querySelector('#theme-toggle').addEventListener('click', (event) => {
  const isDay = root.dataset.theme === 'day'
  root.dataset.theme = isDay ? 'night' : 'day'
  event.currentTarget.setAttribute('aria-pressed', String(!isDay))
  event.currentTarget.innerHTML = isDay ? '<span aria-hidden="true">☼</span> day mode' : '<span aria-hidden="true">☾</span> night mode'
})

document.querySelector('#enter-button').addEventListener('click', () => { document.querySelector('#story').scrollIntoView({ behavior: 'smooth' }); showToast('night shift started ✦') })

document.querySelectorAll('.mood').forEach((button) => button.addEventListener('click', () => {
  document.querySelectorAll('.mood').forEach((item) => item.classList.remove('active'))
  button.classList.add('active')
  document.querySelector('#music-response').textContent = { hush: 'the room is listening.', glow: 'a warm note found you.', bounce: 'even the stars are wiggling.' }[button.dataset.mood]
}))

document.querySelector('#lantern-button').addEventListener('click', () => { document.querySelector('.project-lantern .asset-visual').classList.toggle('lit'); document.querySelector('#lantern-response').textContent = document.querySelector('.project-lantern .asset-visual').classList.contains('lit') ? 'all five are glowing.' : 'marigold is glowing.' })
document.querySelector('#route-button').addEventListener('click', () => { document.querySelector('.route-map').classList.toggle('tracing'); document.querySelector('#route-response').textContent = document.querySelector('.route-map').classList.contains('tracing') ? 'delivery complete ✦' : 'route 07 is clear.' })

const scenes = [
  ['The nursery at midnight', '“The nursery is quiet, so I can hear every dream that needs me.”', 'A soft blue flicker leads Pip beyond the crib room.'],
  ['The discovery', '“Oh no. Someone left their favorite dream out in the cold.”', 'A trail of forgotten stars points toward the Lullaby Lab.'],
  ['The repair', '“Hold still, little dream. I know just the note you need.”', 'The music box turns, and a warm nightlight chooses the way home.'],
  ['The first light', '“There you are. Sleep well; I will keep watch until morning.”', 'The repaired dream lands safely. Pip has done the work that matters.']
]
let currentScene = 0
const renderScene = () => {
  const [title, text, bridge] = scenes[currentScene]
  document.querySelector('#scene-count').textContent = `scene 0${currentScene + 1} / 04`
  document.querySelector('#scene-title').textContent = title
  document.querySelector('#scene-text').textContent = text
  document.querySelector('#scene-bridge').textContent = bridge
  document.querySelectorAll('.scene-dot').forEach((dot, index) => { dot.classList.toggle('active', index === currentScene); dot.setAttribute('aria-current', index === currentScene ? 'step' : 'false') })
  document.querySelector('#scene-art').dataset.scene = currentScene + 1
  document.querySelector('#progress-fill').style.width = `${((currentScene + 1) / scenes.length) * 100}%`
}
const moveScene = (direction) => { currentScene = (currentScene + direction + scenes.length) % scenes.length; renderScene() }
document.querySelector('#scene-next').addEventListener('click', () => moveScene(1))
document.querySelector('#scene-prev').addEventListener('click', () => moveScene(-1))
document.querySelectorAll('.scene-dot').forEach((dot, index) => dot.addEventListener('click', () => { currentScene = index; renderScene() }))

const visitorCount = document.querySelector('#visitor-count')
const bumpVisitorCount = () => {
  const nextCount = Number(visitorCount.textContent) + 1
  visitorCount.textContent = String(nextCount).padStart(3, '0')
  visitorCount.parentElement.classList.remove('counter-tick')
  window.requestAnimationFrame(() => visitorCount.parentElement.classList.add('counter-tick'))
}
document.querySelector('#wish-form').addEventListener('submit', (event) => { event.preventDefault(); const input = document.querySelector('#wish-input'); document.querySelector('#form-response').textContent = `Pip tucked “${input.value}” under the pillow. thank you.`; input.value = ''; bumpVisitorCount() })

let soundEnabled = false
let audioContext
const playClick = (pitch = 520) => {
  if (!soundEnabled) return
  const AudioContextClass = window.AudioContext || window.webkitAudioContext
  if (!AudioContextClass) return
  audioContext ||= new AudioContextClass()
  const oscillator = audioContext.createOscillator()
  const gain = audioContext.createGain()
  oscillator.type = 'sine'
  oscillator.frequency.value = pitch
  gain.gain.setValueAtTime(0.0001, audioContext.currentTime)
  gain.gain.exponentialRampToValueAtTime(0.035, audioContext.currentTime + 0.01)
  gain.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 0.08)
  oscillator.connect(gain).connect(audioContext.destination)
  oscillator.start()
  oscillator.stop(audioContext.currentTime + 0.09)
}
document.querySelector('#sound-toggle').addEventListener('click', (event) => {
  soundEnabled = !soundEnabled
  event.currentTarget.setAttribute('aria-pressed', String(soundEnabled))
  event.currentTarget.textContent = soundEnabled ? 'sound on' : 'sound off'
  if (soundEnabled) playClick(660)
})
document.addEventListener('click', (event) => {
  if (event.target.closest('button:not(#sound-toggle), a')) playClick()
})

const chaosToggle = document.querySelector('#chaos-toggle')
chaosToggle.addEventListener('click', () => {
  const enabled = document.body.classList.toggle('chaos-mode')
  chaosToggle.setAttribute('aria-pressed', String(enabled))
  chaosToggle.textContent = enabled ? 'calm mode' : 'chaos mode'
  showToast(enabled ? 'the nursery got gloriously untidy ✦' : 'everything is tucked back in ✦')
})

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
const sparkleLayer = document.querySelector('#sparkle-layer')
const spawnSparkle = (x, y) => {
  if (prefersReducedMotion.matches || window.innerWidth < 700) return
  const sparkle = document.createElement('span')
  sparkle.className = 'cursor-sparkle'
  sparkle.textContent = Math.random() > 0.5 ? '✦' : '✧'
  sparkle.style.left = `${x}px`
  sparkle.style.top = `${y}px`
  sparkleLayer.append(sparkle)
  window.setTimeout(() => sparkle.remove(), 650)
}
let lastSparkle = 0
window.addEventListener('pointermove', (event) => {
  if (event.pointerType === 'touch' || event.timeStamp - lastSparkle < 55) return
  lastSparkle = event.timeStamp
  spawnSparkle(event.clientX, event.clientY)
}, { passive: true })

let pipClicks = 0
const surprise = () => {
  pipClicks += 1
  if (pipClicks !== 5) return
  showToast('secret found: Pip is afraid of silence, too ✦')
  document.querySelector('#pip-portrait').classList.add('celebrate')
  pipClicks = 0
  window.setTimeout(() => document.querySelector('#pip-portrait').classList.remove('celebrate'), 1400)
}
document.querySelector('#pip-portrait').addEventListener('click', surprise)
document.querySelector('#pip-portrait').addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault()
    surprise()
  }
})

renderScene()

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return
    entry.target.classList.add('is-visible')
    revealObserver.unobserve(entry.target)
  })
}, { threshold: 0.12 })
document.querySelectorAll('.reveal, .project, .trait, .log-note').forEach((element) => revealObserver.observe(element))
