import './style.css'

export function App () {
  return (
    <section className='main'>
      <header>
        <nav>
          <img src='/images/logo.svg' alt='logo' />
          <ul>
            <li>Home</li>
            <li>New</li>
            <li>Popular</li>
            <li>Trending</li>
            <li>Categories</li>
          </ul>
        </nav>
      </header>

      <main>
        <section className='hero'>
          <article>
            <div className='content'>
              <h1>The Bright Future of Web 3.0?</h1>
              <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
            </div>
            <a href='#' className='button'>Read more</a>
          </article>
        </section>

        <section className='sidebar'>
          <h2>New</h2>
          <article>
            <h3><a href='#'>Hydrogen VS Electric Cars</a></h3>
            <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
          </article>
          <hr />
          <article>
            <h3><a href='#'>The Downsides of AI Artistry</a></h3>
            <p>What are the possible adverse effects of on-demand AI image generation?</p>
          </article>
          <hr />
          <article>
            <h3><a href='#'>Is VC Funding Drying Up?</a></h3>
            <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
          </article>
        </section>

        <section className='popular'>
          <article>
            <h4>01</h4>
            <h3><a href='#'>Reviving Retro PCs</a></h3>
            <p>What happens when old PCs are given modern upgrades?</p>
          </article>

          <article className='popular-02'>
            <h4>02</h4>
            <h3><a href='#'>Top 10 Laptops of 2022</a></h3>
            <p>Our best picks for various needs and budgets.</p>
          </article>

          <article className='popular-03'>
            <h4>03</h4>
            <h3><a href='#'>The Growth of Gaming</a></h3>
            <p>How the pandemic has sparked fresh opportunities.</p>
          </article>
        </section>
      </main>
    </section>
  )
}
