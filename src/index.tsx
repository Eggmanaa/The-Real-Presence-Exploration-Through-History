import { Hono } from 'hono'
import { renderer } from './renderer'

const app = new Hono()

app.use(renderer)

app.get('/', (c) => {
  return c.render(
    <div className="home-page">
      <header className="hero">
        <div className="hero-content">
          <h1>"My Flesh is True Food"</h1>
          <p className="subtitle">A Journey Through Scripture and Tradition to the Real Presence of Christ in the Eucharist</p>
        </div>
      </header>

      <nav className="main-nav">
        <a href="#introduction">Introduction</a>
        <a href="#old-testament">Old Testament</a>
        <a href="#didache">Didache</a>
        <a href="#john-6">John 6</a>
        <a href="#institution">Institution</a>
        <a href="#church-fathers">Church Fathers</a>
        <a href="#reservation">Reservation</a>
        <a href="#transubstantiation">Transubstantiation</a>
        <a href="#timeline">Timeline</a>
      </nav>

      <main className="content">
        <section id="introduction" className="section">
          <h2>Introduction</h2>
          <div className="card">
            <p className="lead">
              For centuries, Christians have confessed that in the Eucharist, they receive not merely bread and wine, 
              but the true Body and Blood of Jesus Christ. This doctrine—known as the Real Presence—stands at the 
              very heart of Christian worship and has been the consistent teaching of the Church from its earliest days.
            </p>
            <p>
              This treatise presents a comprehensive case for the Real Presence and the theological understanding of 
              transubstantiation by tracing three interconnected lines of evidence:
            </p>
            <ul className="evidence-list">
              <li><strong>Scriptural Foundation:</strong> From Old Testament prefigurements to Christ's explicit 
              teaching in John 6 and the institution at the Last Supper</li>
              <li><strong>Apostolic Witness:</strong> The unbroken testimony of the Church Fathers from the 
              first century through 1215 AD</li>
              <li><strong>Doctrinal Development:</strong> The organic growth from lived practice to theological 
              precision in the doctrine of transubstantiation</li>
            </ul>
            <blockquote className="key-quote">
              "For my flesh is true food, and my blood is true drink. He who eats my flesh and drinks my blood 
              abides in me, and I in him." — John 6:55-56
            </blockquote>
          </div>
        </section>

        <section id="old-testament" className="section">
          <h2>The Eucharist Foreshadowed: Old Testament Types</h2>
          
          <div className="card">
            <h3>1. Melchizedek's Bread and Wine</h3>
            <div className="scripture-box">
              <p className="verse">"And Melchizedek king of Salem brought out bread and wine. He was priest of God 
              Most High." — Genesis 14:18</p>
            </div>
            <p>
              The first prefigurement appears in Genesis with Melchizedek, the priest-king who offers bread and wine 
              to bless Abraham. This mysterious figure becomes crucial in the New Testament, where Christ is identified 
              as a priest forever "in the order of Melchizedek" (Hebrews 7:17).
            </p>
            <p className="insight">
              <strong>The Connection:</strong> The Levitical priesthood offered animal sacrifices. Christ's priesthood, 
              following Melchizedek's order, offers bread and wine—establishing the form of the Eucharistic sacrifice 
              from the very beginning of Scripture.
            </p>
          </div>

          <div className="card">
            <h3>2. The Manna in the Wilderness</h3>
            <div className="scripture-box">
              <p className="verse">"And the people of Israel ate the manna forty years... till they came to the 
              border of the land of Canaan." — Exodus 16:35</p>
            </div>
            <p>
              For forty years, God miraculously fed Israel with "bread from heaven"—a supernatural food that appeared 
              with the dew each morning. First-century Jews widely expected the Messiah to provide this manna again.
            </p>
            <p className="insight">
              <strong>The Greater Reality:</strong> Jesus explicitly identifies Himself as the true bread from heaven 
              in John 6. But notice the "greater than" logic: If the type (manna) was miraculous physical food 
              sustaining bodily life temporarily, the antitype (Eucharist) must be something far greater—supernatural 
              food bestowing eternal life. A mere symbol would be less than the manna, not greater.
            </p>
          </div>

          <div className="card">
            <h3>3. The Bread of the Presence</h3>
            <div className="scripture-box">
              <p className="verse">"You shall set the bread of the Presence on the table before me regularly." 
              — Exodus 25:30</p>
            </div>
            <p>
              In the Temple, twelve loaves of sacred bread (Hebrew: <em>Lechem haPanim</em>—"Bread of the Face") 
              were perpetually kept before God. This was considered "most holy," a continual covenant offering consumed 
              only by priests.
            </p>
            <p className="insight">
              <strong>The Fulfillment:</strong> Jewish tradition tells us priests would elevate this bread before 
              pilgrims declaring, "Behold, God's love for you!" The Eucharist fulfills this perfectly—the perpetual 
              presence of Christ in the tabernacle, elevated at Mass, consumed by the royal priesthood of believers.
            </p>
          </div>

          <div className="card">
            <h3>4. The Passover Lamb</h3>
            <div className="scripture-box">
              <p className="verse">"They shall eat the flesh that night, roasted on the fire... In this manner you 
              shall eat it: with your belt fastened, your sandals on your feet, and your staff in your hand." 
              — Exodus 12:8, 11</p>
            </div>
            <p>
              The original Passover required an unblemished lamb whose blood, applied to the doorposts, saved Israel 
              from death. But the sacrifice wasn't complete with the lamb's death—God commanded the flesh must be 
              eaten by the covenant family.
            </p>
            <p className="insight">
              <strong>The Pattern Established:</strong> This creates a biblical principle: participation in covenant 
              sacrifice requires physical consumption. St. Paul explicitly calls Christ "our paschal lamb" 
              (1 Corinthians 5:7). Therefore, when Jesus institutes the memorial of His sacrifice, the command to 
              eat His Body and drink His Blood is the necessary fulfillment of the Passover pattern, not an optional 
              symbol.
            </p>
          </div>
        </section>
        <section id="didache" className="section">
          <h2>The Didache: The Earliest Liturgical Witness</h2>
          
          <div className="intro-card card">
            <p className="lead">
              The Didache, or "Teaching of the Twelve Apostles," provides our earliest extant liturgical prayers 
              for the Eucharist (c. 50-125 AD). This first or early second-century document offers an invaluable 
              window into how the immediate post-apostolic Church understood and celebrated the sacred mysteries.
            </p>
          </div>

          <div className="card">
            <h3>Liturgical Prayers: Eucharistia as Thanksgiving</h3>
            <p>
              The prayers prescribed in the Didache center on the concept of <em>eucharistia</em>—thanksgiving. 
              This is not merely gratitude for food, but a profound recognition of God's salvific work:
            </p>
            <blockquote>
              "Celebrate the Eucharist as follows: Say over the cup: 'We give you thanks, Father, for the holy 
              vine of David, your servant, which you made known to us through Jesus your servant. To you be glory 
              for ever.'"
              <cite>— Didache 9:2</cite>
            </blockquote>
            <blockquote>
              "Over the broken bread: 'We give you thanks, Father, for the life and the knowledge which you have 
              revealed to us through Jesus your servant. To you be glory for ever.'"
              <cite>— Didache 9:3</cite>
            </blockquote>
            <p className="analysis">
              <strong>Analysis:</strong> The prayers emphasize what God has accomplished—creation and, preeminently, 
              salvation through Jesus. The meal is framed as grateful response to grace, not a means to earn favor. 
              This establishes the Eucharist as fundamentally oriented toward God's action, not human merit.
            </p>
          </div>

          <div className="card">
            <h3>The Eucharist as the "Pure Sacrifice"</h3>
            <div className="scripture-box">
              <p className="verse">"On the Lord's day, when you have been gathered together, break bread and 
              celebrate the Eucharist. But first confess your sins so that your offering may be pure... In this 
              regard, the Lord has said: In every place and time offer me a pure sacrifice." — Didache 14:1-3</p>
            </div>
            <p>
              The Didache is the <strong>earliest Christian text outside the New Testament</strong> to explicitly 
              identify the Eucharistic celebration as a "sacrifice" (Greek: <em>thysia</em>). It directly applies 
              the prophecy of Malachi 1:11 to the weekly Sunday gathering.
            </p>
            <p className="insight">
              <strong>The "Pure" Sacrifice:</strong> The purity of this sacrifice is linked to the moral and 
              spiritual state of the worshipers. Reconciliation is mandatory before participation: "If anyone has 
              a quarrel with his neighbor, that person should not join you until he has been reconciled. Your 
              sacrifice must not be defiled" (Didache 14:2).
            </p>
            <p>
              This reveals that the "pure sacrifice" encompasses both the sacred elements and the entire act of 
              worship offered by a purified and reconciled community. The horizontal (reconciliation with neighbor) 
              is inseparable from the vertical (acceptable worship to God).
            </p>
          </div>

          <div className="card">
            <h3>Unity Through the Eucharist</h3>
            <blockquote>
              "As this broken bread scattered on the mountains was gathered and became one, so too, may your Church 
              be gathered together from the ends of the earth into your kingdom."
              <cite>— Didache 9:4</cite>
            </blockquote>
            <p className="analysis">
              <strong>Analysis:</strong> This powerful image draws on the agricultural process—grain harvested from 
              scattered fields, ground into flour, and baked into a single loaf. The Eucharist is presented as both 
              symbol and agent of the Church's unity. The meal constitutes the community as one body, making visible 
              the spiritual reality of our union in Christ.
            </p>
          </div>

          <div className="card highlight">
            <h3>Baptism as Gateway to the Eucharist</h3>
            <div className="scripture-box critical">
              <p className="verse">"Do not let anyone eat or drink of your eucharist except those who have been 
              baptized in the name of the Lord. For the statement of the Lord applies here also: Do not give to 
              dogs what is holy." — Didache 9:5</p>
            </div>
            <p>
              From the very beginning, access to the Eucharist was strictly regulated. The sacrament is reserved 
              for the initiated—those incorporated into Christ's body through baptism. This isn't arbitrary 
              exclusion but recognition that the Eucharist presupposes sacramental union with Christ.
            </p>
            <p className="insight">
              <strong>Spiritual Food:</strong> The text refers to the Eucharist as "spiritual food and drink" 
              which God has favored the Church with, granting "eternal life" (Didache 10:3). This language points 
              to the supernatural effect of the meal—it nourishes the soul for immortality, not merely the body 
              for earthly life.
            </p>
          </div>

          <div className="card">
            <h3>Significance for the Real Presence</h3>
            <p>
              While the Didache's language is primarily liturgical and devotional rather than explicitly doctrinal, 
              several elements point toward belief in the Real Presence:
            </p>
            <ol>
              <li><strong>Sacrificial Language:</strong> Calling the Eucharist a "sacrifice" implies it's more 
              than a memorial meal—it's a sacred offering to God</li>
              <li><strong>Strict Access Control:</strong> The emphasis on purity and baptismal requirement suggests 
              something holy and powerful is being handled</li>
              <li><strong>Life-Giving Effect:</strong> Attributing eternal life to the "spiritual food" indicates 
              supernatural reality beyond mere symbolism</li>
              <li><strong>Unity-Creating Power:</strong> The Eucharist doesn't just symbolize unity—it effects it, 
              gathering scattered members into one body</li>
              <li><strong>Fulfillment of Prophecy:</strong> Applying Malachi 1:11 to the Eucharist suggests this 
              is the new and perfect sacrifice God foretold</li>
            </ol>
            <p className="analysis">
              <strong>Historical Context:</strong> The Didache represents the Church's worship before theological 
              controversies forced explicit doctrinal formulations. Its matter-of-fact treatment of Eucharistic 
              worship reveals what the earliest Christians simply did and believed, before they needed to defend 
              or explain it against heretics. This makes it an invaluable witness to the apostolic faith in its 
              most pristine form.
            </p>
          </div>
        </section>

        <section id="john-6" className="section">
          <h2>The Promise: John Chapter 6</h2>
          
          <div className="card">
            <h3>The Liturgical Stage: Passover, Manna, and New Exodus</h3>
            <div className="scripture-box">
              <p className="verse">"Now the Passover, the feast of the Jews, was at hand." — John 6:4</p>
            </div>
            <p>
              John deliberately sets the stage by noting the proximity of Passover. This is the interpretive key—
              everything Jesus says must be understood in light of the central salvific event of Israel's history: 
              deliverance through the blood of the lamb and the manna in the wilderness.
            </p>
          </div>

          <div className="card">
            <h3>The Bread of Life Discourse: From Metaphor to Scandal</h3>
            
            <h4>Phase 1: The Spiritual Metaphor (vv. 35-50)</h4>
            <div className="scripture-box">
              <p className="verse">"I am the bread of life; whoever comes to me shall never hunger, and whoever 
              believes in me shall never thirst." — John 6:35</p>
            </div>
            <p>
              Initially, Jesus uses language that can be understood metaphorically. "Coming to" and "believing in" 
              Him are spiritual acts. The audience grumbles, but not about eating His flesh—they object to His claim 
              to have come down from heaven.
            </p>

            <h4>Phase 2: The Shocking Turn (v. 51c)</h4>
            <div className="scripture-box critical">
              <p className="verse">"...and the bread that I will give for the life of the world is my flesh." 
              — John 6:51</p>
            </div>
            <p>
              Here the discourse pivots dramatically. Jesus moves from "I am the bread" (identity) to "the bread... 
              is my flesh" (institution). He uses the Greek word <em>sarx</em>—flesh—the same word John used for 
              the Incarnation: "The Word became flesh" (John 1:14).
            </p>
            <p className="reaction">
              <strong>The Crowd's Response:</strong> "The Jews then disputed among themselves, saying, 'How can 
              this man give us his flesh to eat?'" (John 6:52)
            </p>
            <p>
              Their question reveals literal understanding: not "What does this metaphor mean?" but "How is this 
              physically possible?" They're horrified because they understand Him literally.
            </p>

            <h4>Phase 3: The Intensification (vv. 53-58)</h4>
            <div className="scripture-box critical">
              <p className="verse">"Truly, truly, I say to you, unless you eat the flesh of the Son of Man and 
              drink his blood, you have no life in you... For my flesh is true food, and my blood is true drink." 
              — John 6:53, 55</p>
            </div>
            <p>
              When confronted with their literal objection, Jesus doesn't clarify a misunderstanding. Instead, 
              He escalates with:
            </p>
            <ul>
              <li>A solemn oath: "Truly, truly" (Amen, amen)</li>
              <li>An absolute requirement: "unless you eat... you have no life"</li>
              <li>Addition of drinking His blood—deeply offensive to Jews who were forbidden to consume blood</li>
              <li>Declaration: "my flesh is TRUE (alēthēs) food"—meaning real, actual, not figurative</li>
            </ul>
          </div>

          <div className="card highlight">
            <h3>The Linguistic Proof: From Phagein to Trōgein</h3>
            <p>
              Perhaps the most compelling evidence lies in the original Greek. When the crowd objects, Jesus makes 
              a deliberate change in vocabulary:
            </p>
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Before v. 52</th>
                  <th>After v. 52</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>phagein (φαγεῖν)</strong></td>
                  <td><strong>trōgein (τρώγειν)</strong></td>
                </tr>
                <tr>
                  <td>Common verb "to eat"</td>
                  <td>"To gnaw, chew, crunch"</td>
                </tr>
                <tr>
                  <td>Can be metaphorical</td>
                  <td>Visceral, physical, graphic</td>
                </tr>
                <tr>
                  <td>Used for general eating</td>
                  <td>Often describes how animals eat</td>
                </tr>
              </tbody>
            </table>
            <p className="insight">
              <strong>Why This Matters:</strong> A teacher whose metaphor has been misunderstood would use softer, 
              more abstract language to clarify. Jesus does the opposite—He switches to a more graphic, undeniably 
              physical verb. This is deliberate intensification, not clarification. He's removing ambiguity, not 
              creating it.
            </p>
          </div>

          <div className="card">
            <h3>The Great Defection and the Test of Faith</h3>
            <div className="scripture-box">
              <p className="verse">"After this many of his disciples turned back and no longer walked with him." 
              — John 6:66</p>
            </div>
            <p>
              The consequence is immediate and tragic. Not just skeptics, but committed disciples abandon Jesus over 
              this "hard saying" (John 6:60). This mass departure is unprecedented in the Gospels.
            </p>
            <p className="insight">
              <strong>The Uncorrected Misunderstanding:</strong> Elsewhere, when disciples misunderstand a metaphor, 
              Jesus clarifies (John 4:32-34 about "food"; Matthew 16:11-12 about "leaven"). Here, facing a massive 
              defection, He offers no clarification. Instead, He turns to the Twelve: "Do you also want to go away?" 
              (John 6:67).
            </p>
            <p>
              Peter's response reveals the nature of true faith: "Lord, to whom shall we go? You have the words of 
              eternal life" (John 6:68). He doesn't claim to understand how it's possible—he submits because of who 
              is teaching it. The Real Presence becomes a test of faith in Christ's person and authority.
            </p>
          </div>

          <div className="card">
            <h3>Addressing John 6:63: "The flesh is of no avail"</h3>
            <div className="scripture-box">
              <p className="verse">"It is the Spirit that gives life; the flesh is of no avail. The words that I 
              have spoken to you are spirit and life." — John 6:63</p>
            </div>
            <p>
              This is the primary objection to the Real Presence from John 6. Critics argue Jesus is saying His 
              previous literal language was wrong—that "the flesh" profits nothing.
            </p>
            <p className="rebuttal">
              <strong>The Refutation:</strong>
            </p>
            <ol>
              <li><strong>Internal Contradiction:</strong> Jesus cannot say His flesh is true food (v. 55) and then 
              say His flesh profits nothing (v. 63). That would make Him incoherent.</li>
              <li><strong>Biblical Usage of "Flesh vs. Spirit":</strong> Throughout Scripture (especially John and 
              Paul), "flesh" doesn't mean "literal" versus "symbolic." It means the fallen, natural human perspective 
              versus the supernatural, grace-filled perspective. "You judge according to the flesh" (John 8:15) means 
              judging by worldly standards.</li>
              <li><strong>The Diagnosis:</strong> Jesus is explaining why they can't accept His teaching—they're 
              understanding it "according to the flesh" (carnally, naturalistically) rather than "according to the 
              Spirit" (by supernatural faith). The verse explains the requirement for acceptance, not the nature of 
              the teaching.</li>
            </ol>
            <p className="insight">
              His words are "spirit and life" not because they're symbolic, but because they're divine truths that 
              require the Holy Spirit's grace to believe. This verse actually reinforces the supernatural character 
              of the Real Presence.
            </p>
          </div>
        </section>

        <section id="institution" className="section">
          <h2>The Institution: The Last Supper</h2>
          
          <div className="card">
            <h3>The Passover Context</h3>
            <p>
              The Last Supper occurs during the Passover meal—the annual commemoration of Israel's deliverance. 
              Significantly, the Gospel accounts mention no lamb on the table. Jesus Himself is the Lamb whose 
              sacrifice is being initiated.
            </p>
          </div>

          <div className="card highlight">
            <h3>"This IS My Body": The Words of Institution</h3>
            <div className="scripture-box critical">
              <p className="verse">"And he took bread, and when he had given thanks, he broke it and gave it to 
              them, saying, 'This is my body, which is given for you. Do this in remembrance of me.' And likewise 
              the cup after they had eaten, saying, 'This cup that is poured out for you is the new covenant in 
              my blood.'" — Luke 22:19-20</p>
            </div>
            
            <h4>The Greek Text: Touto Estin To Soma Mou</h4>
            <p>
              The Greek phrase is remarkably consistent across all four accounts (Matthew, Mark, Luke, 1 Corinthians):
            </p>
            <div className="greek-text">
              <p><strong>τοῦτό ἐστιν τὸ σῶμά μου</strong></p>
              <p><em>touto estin to sōma mou</em></p>
              <p>"This IS my body"</p>
            </div>
            
            <h4>Why "IS" Means "IS"</h4>
            <p>
              The verb <em>estin</em> is a copula—its primary meaning is identity, not representation. To read 
              it as "represents" or "symbolizes" requires:
            </p>
            <ol>
              <li>Changing the verb to a different word entirely</li>
              <li>Altering the grammatical structure</li>
              <li>Imposing a meaning not present in the text</li>
            </ol>

            <h4>How This Differs from Clear Metaphors</h4>
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Eucharistic Statements</th>
                  <th>"I Am" Metaphors</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Statement</strong></td>
                  <td>"This is my body"</td>
                  <td>"I am the door" / "I am the vine"</td>
                </tr>
                <tr>
                  <td><strong>Context</strong></td>
                  <td>Solemn covenant meal; Passover fulfillment</td>
                  <td>Teaching discourse or parable</td>
                </tr>
                <tr>
                  <td><strong>Clarity</strong></td>
                  <td>Clear predication of identity</td>
                  <td>Obvious metaphor (Jesus isn't wooden or plant)</td>
                </tr>
                <tr>
                  <td><strong>Response</strong></td>
                  <td>Disciples obey; no confusion recorded</td>
                  <td>Sometimes confusion, always explained</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="card">
            <h3>"The Blood of the New Covenant"</h3>
            <div className="scripture-box">
              <p className="verse">"This cup that is poured out for you is the new covenant in my blood." 
              — Luke 22:20</p>
            </div>
            <p>
              Jesus directly echoes Moses establishing the Old Covenant: "Behold the blood of the covenant" 
              (Exodus 24:8). In Jewish thought, blood is the sign and seal of covenant—it creates family bonds 
              with God.
            </p>
            <p className="insight">
              The Old Testament prohibition against drinking blood was absolute. By commanding His disciples to 
              drink His blood, Jesus isn't using a careless metaphor—He's instituting a new and superior covenant 
              that requires partaking of His divine life itself. To reduce this to "believing in His sacrifice" 
              misses the covenantal, familial, and incarnational depth of the command.
            </p>
          </div>
        </section>

        <section id="church-fathers" className="section">
          <h2>The Church Fathers: Apostolic Witness to the Real Presence</h2>
          
          <div className="intro-card card">
            <p className="lead">
              The testimony of the early Church Fathers is crucial: these were men who learned directly from the 
              Apostles or their immediate successors. Their unanimous witness to the Real Presence demonstrates 
              this wasn't a medieval invention but the original, apostolic faith.
            </p>
          </div>

          <div className="timeline-container">
            <div className="timeline-item card">
              <div className="date">c. 110 AD</div>
              <h3>St. Ignatius of Antioch</h3>
              <p className="context">Bishop of Antioch, disciple of the Apostle John, martyred in Rome</p>
              <blockquote>
                "They abstain from the Eucharist and from prayer because they do not confess that the Eucharist 
                is the flesh of our Savior Jesus Christ, flesh which suffered for our sins and which the Father, 
                in his goodness, raised up again."
                <cite>— Letter to the Smyrnaeans 7:1</cite>
              </blockquote>
              <p className="analysis">
                <strong>Analysis:</strong> Ignatius links denial of the Real Presence directly to the heresy of 
                Docetism (the belief Christ only appeared to have a body). For him, the reality of Christ's flesh 
                in the Eucharist is inseparable from the reality of the Incarnation. To deny one is to deny the other.
              </p>
              <blockquote>
                "I desire the bread of God, which is the flesh of Jesus Christ... and for drink I desire his blood, 
                which is love incorruptible."
                <cite>— Letter to the Romans 7:3</cite>
              </blockquote>
            </div>

            <div className="timeline-item card">
              <div className="date">c. 155 AD</div>
              <h3>St. Justin Martyr</h3>
              <p className="context">Philosopher and apologist, wrote to the Roman Emperor</p>
              <blockquote>
                "For not as common bread nor common drink do we receive these; but since Jesus Christ our Savior 
                was made incarnate by the word of God and had both flesh and blood for our salvation, so too, as 
                we have been taught, the food which has been made into the Eucharist by the Eucharistic prayer set 
                down by him, and by the change of which our blood and flesh is nourished, is the flesh and blood 
                of that incarnated Jesus."
                <cite>— First Apology 66</cite>
              </blockquote>
              <p className="analysis">
                <strong>Analysis:</strong> Justin draws a direct parallel between the Incarnation and the Eucharist. 
                Just as the Word truly became flesh, so bread and wine truly become that flesh. He also provides 
                the earliest evidence for reservation—deacons carry the Eucharist to the absent, proving belief 
                in an abiding presence.
              </p>
            </div>

            <div className="timeline-item card">
              <div className="date">c. 189 AD</div>
              <h3>St. Irenaeus of Lyons</h3>
              <p className="context">Disciple of St. Polycarp (who learned from John)</p>
              <blockquote>
                "When, therefore, the mixed cup and the baked bread receives the Word of God and becomes the 
                Eucharist, the body of Christ, and from these the substance of our flesh is increased and 
                supported, how can they say that the flesh is not capable of receiving the gift of God, which 
                is eternal life?"
                <cite>— Against Heresies 5.2.3</cite>
              </blockquote>
              <p className="analysis">
                <strong>Analysis:</strong> Irenaeus uses the Eucharist to refute Gnosticism. His argument: if our 
                physical bodies are nourished by the physical Body of Christ, then matter isn't evil and our bodies 
                are destined for resurrection. The Real Presence guarantees bodily resurrection.
              </p>
            </div>

            <div className="timeline-item card">
              <div className="date">c. 248 AD</div>
              <h3>Origen of Alexandria</h3>
              <p className="context">Scholar and theologian</p>
              <blockquote>
                "You who are wont to be present at the divine mysteries, know how, when you receive the body of 
                the Lord, you preserve it with all care and veneration, lest the smallest particle of it should 
                fall, lest a crumb fall from thee of what is more precious than gold and precious stones."
                <cite>— Homilies on Exodus 13:3</cite>
              </blockquote>
              <p className="analysis">
                <strong>Analysis:</strong> Origen testifies to universal practice—extreme care for every particle. 
                This reverence makes sense only if every fragment contains the whole Christ. This is implicit 
                adoration long before the term was formally defined.
              </p>
            </div>

            <div className="timeline-item card">
              <div className="date">c. 251 AD</div>
              <h3>St. Cyprian of Carthage</h3>
              <p className="context">Bishop of Carthage, martyr, confronting the crisis of the lapsi (Christians who denied Christ under persecution)</p>
              <blockquote>
                "He who eats my flesh and drinks my blood has eternal life. Therefore the Eucharist is our life."
                <cite>— St. Cyprian, On the Lapsed 16</cite>
              </blockquote>
              <p className="analysis">
                <strong>Context of the Lapsi Crisis:</strong> During the Decian persecution (250-251 AD), many Christians 
                denied Christ under threat of death. When these <em>lapsi</em> ("fallen ones") sought readmission to the 
                Church, a critical question arose: Should they be allowed to receive the Eucharist immediately, or must 
                they undergo penance first? Cyprian's answer reveals his profound belief in the Real Presence.
              </p>
              <blockquote>
                "Do not think, dearest brother, that either the courage of the brethren will be lessened, or that 
                martyrdoms will fail for this cause, that penance is relaxed to the lapsed, and that the hope of peace 
                is offered to the penitent... Some of the lapsed, either voluntarily or on being exhorted by us, have 
                not withdrawn from the Church... I am preserving them entire for thy sentence."
                <cite>— St. Cyprian, Epistle 10</cite>
              </blockquote>
              <p className="analysis">
                <strong>Unworthy Communion as Sacrilege:</strong> Cyprian insists the lapsi must undergo lengthy penance 
                before receiving communion again. Why such severity? Because he understood the Eucharist as the actual 
                Body and Blood of Christ—to receive unworthily was to commit a new act of violence against the Lord.
              </p>
              <blockquote>
                "They do violence to his body and blood, a sin more heinous against the Lord with their hands and mouths 
                than when they denied him."
                <cite>— St. Cyprian, On the Lapsed 16</cite>
              </blockquote>
              <p className="analysis">
                <strong>Analysis:</strong> This is extraordinary. Cyprian declares that unworthy reception of the Eucharist 
                is <em>worse than apostasy itself</em>—worse than denying Christ under threat of death. This makes sense 
                only if the Eucharist is truly Christ's Body and Blood. To approach His flesh with defiled hands and mouths 
                is to crucify Him again, to do violence to His very body.
              </p>
              <p className="analysis">
                Notice Cyprian's consistent appeal to John 6:53: "He who eats my flesh and drinks my blood." For him, this 
                verse is the key to understanding both the necessity and the danger of the Eucharist. It grants eternal 
                life to the worthy, but condemns the unworthy to an even graver sin than apostasy.
              </p>
              <blockquote>
                "For how can he who is himself unclean cleanse another? Or how can he who has lost the Holy Spirit 
                himself grant the Holy Spirit to another? Wherefore, with prayers and fasting, let us beg and entreat the 
                Lord, who is both merciful and patient, that, as He has condescended to number us among His people, He 
                may also be pleased to restore to us His grace."
                <cite>— St. Cyprian, Epistle 69</cite>
              </blockquote>
              <p className="analysis">
                <strong>Eucharist as Test of Communion:</strong> Throughout the crisis, Cyprian used the Eucharist as the 
                acid test of true communion with Christ. The lapsi could attend services and pray, but they could not 
                receive communion until properly reconciled. The Eucharist wasn't a symbol of membership—it was union with 
                Christ Himself, reserved only for those in a state of grace.
              </p>
            </div>

            <div className="timeline-item card">
              <div className="date">c. 350 AD</div>
              <h3>St. Cyril of Jerusalem</h3>
              <p className="context">Bishop, taught catechumens preparing for baptism</p>
              <blockquote>
                "Do not, therefore, regard the bread and wine as simply that; for they are, according to the 
                Master's declaration, the body and blood of Christ. Even though the senses suggest to you the 
                other, let faith make you firm."
                <cite>— Mystagogical Catechesis 4:6</cite>
              </blockquote>
              <blockquote>
                "Having learnt these things, and been fully assured that the seeming bread is not bread, though 
                sensible to taste, but the Body of Christ; and that the seeming wine is not wine, though the taste 
                will have it so, but the Blood of Christ... strengthen your heart."
                <cite>— Mystagogical Catechesis 4:9</cite>
              </blockquote>
              <p className="analysis">
                <strong>Analysis:</strong> Cyril explicitly teaches the distinction between appearance (what senses 
                perceive) and reality (what faith knows). This is the conceptual foundation for transubstantiation 
                centuries before the philosophical terminology was developed.
              </p>
            </div>

            <div className="timeline-item card">
              <div className="date">c. 390 AD</div>
              <h3>St. Ambrose of Milan</h3>
              <p className="context">Bishop, influential Western Father</p>
              <blockquote>
                "But if the word of Elijah had such power as to bring down fire from heaven, shall not the word 
                of Christ have power to change the nature of the elements? You may perhaps say: 'My bread is 
                ordinary.' But that bread is bread before the words of the Sacraments; where the consecration has 
                entered in, the bread becomes the flesh of Christ."
                <cite>— On the Mysteries 9:52</cite>
              </blockquote>
              <p className="analysis">
                <strong>Analysis:</strong> Ambrose explicitly teaches transformation of nature (natura) through 
                the words of consecration. The same divine word that creates ex nihilo can certainly transform 
                existing substances. This is direct preparation for transubstantiation theology.
              </p>
            </div>

            <div className="timeline-item card">
              <div className="date">c. 412 AD</div>
              <h3>St. Augustine of Hippo</h3>
              <p className="context">Greatest Western Father, Doctor of the Church</p>
              <blockquote>
                "[Christ] received earth from earth; because flesh is from the earth, and He took flesh from the 
                flesh of Mary. He walked here in the same flesh, and gave us the same flesh to be eaten unto 
                salvation. But no one eats that flesh unless he first adores it... and not only do we not sin by 
                adoring, we do sin by not adoring."
                <cite>— Explanations of the Psalms 98:9</cite>
              </blockquote>
              <p className="analysis">
                <strong>Analysis:</strong> This is the first explicit theological justification for Eucharistic 
                adoration. Augustine declares it's not merely permitted but obligatory to adore the Eucharist 
                before receiving. Why? Because it's the flesh of Christ, and Christ is God.
              </p>
              <blockquote>
                "That bread which you see on the altar, having been sanctified by the Word of God, is the body 
                of Christ. That chalice, or rather, what is in that chalice, having been sanctified by the Word 
                of God, is the blood of Christ."
                <cite>— Sermons 227</cite>
              </blockquote>
            </div>

            <div className="timeline-item card">
              <div className="date">c. 400 AD</div>
              <h3>St. John Chrysostom</h3>
              <p className="context">"Golden-mouthed" preacher, Patriarch of Constantinople</p>
              <blockquote>
                "Let us stir ourselves and be filled with horror. This is the body that he has given to us to 
                hold and to eat!... In order then that we may become one Body not only in love but in lived 
                reality, let us be blended into that flesh."
                <cite>— Homilies on John 46:3</cite>
              </blockquote>
              <blockquote>
                "This Blood, worthily received, drives away devils and keeps them far away from us, while it calls 
                to us Angels and the Lord of Angels. This Blood, poured forth, washed clean all the world."
                <cite>— Homilies on John 46:3</cite>
              </blockquote>
              <p className="analysis">
                <strong>Analysis:</strong> Chrysostom's vivid, almost shocking language expresses profound realism. 
                The Eucharist creates not just spiritual but physical unity with Christ—our flesh is "blended" with 
                His. This is visceral, incarnational theology.
              </p>
            </div>

            <div className="timeline-item card">
              <div className="date">c. 749 AD</div>
              <h3>St. John of Damascus</h3>
              <p className="context">Last of the great Eastern Fathers</p>
              <blockquote>
                "The bread and the wine are not merely figures of the body and blood of Christ (God forbid!) but 
                the deified body of the Lord itself: for the Lord has said, 'This is my Body,' not 'This is a 
                figure of my body'; and 'my Blood,' not 'a figure of my blood.'"
                <cite>— Exposition of the Orthodox Faith 4:13</cite>
              </blockquote>
              <blockquote>
                "The bread itself and the wine are changed into God's body and blood. But if you inquire how this 
                happens, it is enough to learn that it was through the Holy Spirit... and we know nothing further 
                save that the Word of God is true and energizes and is omnipotent, but the manner of this cannot 
                be searched out."
                <cite>— Exposition of the Orthodox Faith 4:13</cite>
              </blockquote>
              <p className="analysis">
                <strong>Analysis:</strong> John of Damascus, writing in the 8th century, explicitly rejects 
                symbolic interpretations and affirms real change through the Holy Spirit. He acknowledges the 
                mystery—we know that it changes, but the how transcends human understanding.
              </p>
            </div>
          </div>

          <div className="card summary-box">
            <h3>The Patristic Consensus</h3>
            <p>
              From the immediate disciples of the Apostles through eight centuries of Church teaching, we find:
            </p>
            <ul className="consensus-list">
              <li><strong>Universal Testimony:</strong> Not a single Church Father teaches a merely symbolic view</li>
              <li><strong>Liturgical Practice:</strong> Extreme reverence for particles, reservation for the sick, 
              careful handling—all indicating belief in real presence</li>
              <li><strong>Theological Development:</strong> From simple assertion to sophisticated explanation, 
              but always affirming the same reality</li>
              <li><strong>Defense of Orthodoxy:</strong> The Real Presence used to defend the Incarnation against 
              heresy (Ignatius vs. Docetism, Irenaeus vs. Gnosticism)</li>
              <li><strong>Foundation for Adoration:</strong> Augustine's explicit command to adore before consuming</li>
            </ul>
            <p className="insight">
              <strong>The Question for Protestants:</strong> If the "symbolic view" is correct, where is it in 
              the first 1,500 years of Christianity? The burden of proof lies with those claiming the entire early 
              Church was wrong about the central act of Christian worship.
            </p>
          </div>
        </section>

        <section id="reservation" className="section">
          <h2>Reservation Practices: Belief in the Abiding Presence</h2>
          
          <div className="intro-card card">
            <p className="lead">
              The early Church's practice of reserving the consecrated Eucharist—setting it aside after the liturgy 
              for later use—provides powerful testimony to belief in the Real and abiding Presence of Christ. These 
              practices reveal that the Church believed Christ remained present in the elements even after the 
              liturgical celebration concluded.
            </p>
          </div>

          <div className="card">
            <h3>The Pastoral Origin: Communion for the Absent</h3>
            <p>
              Reservation didn't begin as a devotional practice but arose from pastoral charity—the desire to bring 
              communion to those who couldn't attend the liturgy: the sick, the dying, the imprisoned, and those 
              unable to travel.
            </p>
          </div>

          <div className="card">
            <h3>St. Justin Martyr (c. 155 AD): Deacons Carry the Eucharist</h3>
            <p className="context">First detailed account of the Mass, written to the Roman Emperor</p>
            <blockquote>
              "When the president has given thanks and the people have assented, those whom we call deacons give 
              to each of those present a portion of the consecrated bread and wine and water, and they take it to 
              those who are absent."
              <cite>— St. Justin Martyr, First Apology 67</cite>
            </blockquote>
            <p className="analysis">
              <strong>Theological Significance:</strong> This is the earliest explicit documentary evidence for 
              reservation. The practice would be theologically incoherent if Christ's presence were believed to 
              be confined only to the moment of liturgical action or immediate reception. The fact that deacons 
              carried the Eucharist away from the assembly demonstrates belief that the consecrated elements 
              remained the Body and Blood of Christ after the liturgy concluded. This simple pastoral provision 
              contains a profound doctrinal affirmation: the Real Presence abides.
            </p>
          </div>

          <div className="card highlight">
            <h3>Tertullian (c. 210 AD): Home Reservation During Persecution</h3>
            <p className="context">North African theologian during the age of persecution</p>
            <blockquote>
              "The faithful know well the practice of taking part in the sacrifice before eating, and partaking 
              (accepto) of the Body of the Lord and reserving it (et reservato)."
              <cite>— Tertullian, Ad Uxorem 2:5</cite>
            </blockquote>
            <p>
              Tertullian provides crucial evidence for <strong>domestic reservation</strong>—the practice of 
              Christians taking the Eucharist to their homes for private communion. This was particularly common 
              on "station days" (days of fasting) when public liturgy might not be celebrated.
            </p>
            <blockquote>
              "Will your husband not know what it is which you secretly eat of before (taking) any food? And if 
              he knows it to be bread, then what will he think of you in his arrogance?"
              <cite>— Tertullian, Ad Uxorem 2:5</cite>
            </blockquote>
            <p className="insight">
              <strong>Historical Context:</strong> In this passage, Tertullian warns a Christian widow against 
              marrying a pagan, highlighting the practical difficulty it would pose for her Eucharistic devotion. 
              The pagan husband would notice her eating "bread" before any other food and question the practice. 
              This confirms not only home reservation but also self-communication by the laity—a necessity born 
              of persecution.
            </p>
          </div>

          <div className="card">
            <h3>St. Cyprian of Carthage (c. 251 AD): The Casket of Fire</h3>
            <p className="context">Bishop during Decian persecution, addressing the crisis of the lapsi</p>
            <blockquote>
              "Another woman, when she tried to open her box (arca), in which was the holy (body) of the Lord, 
              with unworthy hands, fire rising from it deterred her from daring to touch it."
              <cite>— St. Cyprian, On the Lapsed 26</cite>
            </blockquote>
            <p>
              Cyprian recounts miraculous divine judgments upon those who approached the reserved sacrament 
              unworthily. One woman kept the Eucharist in a personal chest or casket (<em>arca</em>) at home. 
              When she attempted to open it with "polluted hands" (having apostatized during persecution), flames 
              burst forth, preventing her from touching the sacred species.
            </p>
            <blockquote>
              "Another man who had secretly received communion while in a state of serious sin could not eat nor 
              handle the holy of the Lord; but he found in his hands when opened that he had a cinder."
              <cite>— St. Cyprian, On the Lapsed 26</cite>
            </blockquote>
            <p className="analysis">
              <strong>Theological Implications:</strong> Whether understood as literal history or powerful pastoral 
              warnings, these narratives communicate vital truths:
            </p>
            <ol>
              <li><strong>Objective Reality:</strong> The Eucharist is an objective, powerful reality—not a passive 
              symbol</li>
              <li><strong>Moral Requirement:</strong> Approaching unworthily brings judgment, not just symbolic 
              disrespect</li>
              <li><strong>Abiding Holiness:</strong> The reserved Sacrament retains its sacred power and requires 
              purity of heart</li>
              <li><strong>Home Preservation:</strong> The practice of domestic reservation was widespread enough 
              to be assumed in these warnings</li>
            </ol>
            <p className="insight">
              <strong>Cyprian's Conclusion:</strong> He explicitly declares that unworthy reception is violence 
              against Christ Himself: "They do violence to his body and blood, a sin more heinous against the Lord 
              with their hands and mouths than when they denied him" (On the Lapsed 15-16). The Eucharist isn't 
              just a sign of Christ—it is Christ, and to profane it is to assault the Lord directly.
            </p>
          </div>

          <div className="card highlight">
            <h3>St. Basil the Great (c. 379 AD): The Golden Dove</h3>
            <p className="context">Cappadocian Father, Bishop of Caesarea</p>
            <p>
              St. Basil's biography records a significant development in reservation practice. When celebrating 
              the liturgy, he would divide the consecrated Bread into three parts:
            </p>
            <ol>
              <li>One part he consumed himself</li>
              <li>One part he distributed to the monks</li>
              <li><strong>The third he placed in a golden container shaped like a dove (peristerium), which was 
              suspended over the altar</strong></li>
            </ol>
            <p className="analysis">
              <strong>Historical Significance:</strong> This marks a crucial transition:
            </p>
            <ul>
              <li><strong>From Private to Public:</strong> Reservation shifts from hidden necessity (home storage 
              during persecution) to honored visibility within the church</li>
              <li><strong>From Utilitarian to Devotional:</strong> While still practical (for communion of the sick), 
              the golden dove and prominent placement signal reverence beyond mere convenience</li>
              <li><strong>Symbolic Richness:</strong> The dove, symbol of the Holy Spirit, hovering over the altar 
              creates powerful visual theology—the Spirit overshadows the sacred elements just as He overshadowed 
              Mary at the Annunciation</li>
              <li><strong>Foundation for Adoration:</strong> Honored, visible reservation within the sanctuary 
              naturally leads to direct veneration and worship</li>
            </ul>
            <p className="insight">
              <strong>The Peristerium Tradition:</strong> This vessel—the golden dove suspended over the altar—
              became common in both East and West. Medieval churches often had elaborate dove-shaped tabernacles. 
              The practice demonstrates that well before formal definitions, the Church was already housing Christ 
              as an honored king in His temple.
            </p>
          </div>

          <div className="card">
            <h3>From Necessity to Devotion: The Arc of Development</h3>
            <table className="development-table">
              <thead>
                <tr>
                  <th>Period</th>
                  <th>Practice</th>
                  <th>Primary Location</th>
                  <th>Primary Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>100-313 AD</strong><br/>Persecution</td>
                  <td>Home reservation by faithful</td>
                  <td>Private homes, personal caskets</td>
                  <td>Self-communion, communion of sick</td>
                </tr>
                <tr>
                  <td><strong>313-500 AD</strong><br/>Legalization</td>
                  <td>Shift to church reservation</td>
                  <td>Sacristy, locked rooms (pastoforium)</td>
                  <td>Viaticum for dying, communion of sick</td>
                </tr>
                <tr>
                  <td><strong>500-1000 AD</strong><br/>Honored Presence</td>
                  <td>Visible sanctuary reservation</td>
                  <td>Golden dove (peristerium) over altar</td>
                  <td>Practical need + emerging devotion</td>
                </tr>
                <tr>
                  <td><strong>1000+ AD</strong><br/>Devotional Focus</td>
                  <td>Tabernacle, exposition, adoration</td>
                  <td>Prominent tabernacle on/near altar</td>
                  <td>Worship, adoration, Benediction</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="card">
            <h3>What Reservation Proves About Belief</h3>
            <p>
              The consistent practice of reservation across centuries and diverse circumstances provides 
              irrefutable evidence of the Church's unwavering belief in the Real and abiding Presence:
            </p>
            <ol>
              <li><strong>If Merely Symbolic:</strong> Why reserve blessed bread? Ordinary bread could serve 
              any symbolic purpose.</li>
              <li><strong>If Presence Temporary:</strong> Why take it to the absent if Christ's presence expired 
              after the liturgy?</li>
              <li><strong>If Just Memorial:</strong> Why such elaborate vessels and honored placement?</li>
              <li><strong>If No Real Presence:</strong> Why would unworthy approach bring divine judgment?</li>
            </ol>
            <p className="insight">
              <strong>The Logic is Inescapable:</strong> The Church reserved the Eucharist because it believed 
              the Eucharist was—and remained—Christ Himself. From Justin's deacons in the second century to 
              Basil's golden dove in the fourth, from Tertullian's domestic practice to Cyprian's caskets of 
              fire, one belief unifies all these practices: <strong>Christ abides in the consecrated species</strong>. 
              This abiding presence is the necessary foundation for any later development of Eucharistic adoration, 
              which St. Augustine would explicitly command: "No one eats that flesh unless he first adores it."
            </p>
          </div>
        </section>
        <section id="transubstantiation" className="section">
          <h2>The Doctrine of Transubstantiation</h2>
          
          <div className="card">
            <h3>What Is Transubstantiation?</h3>
            <p className="lead">
              <strong>Transubstantiation</strong> is the theological term, formally defined at the Fourth Lateran 
              Council (1215 AD), that explains how Christ is really present in the Eucharist.
            </p>
            
            <div className="definition-box">
              <h4>The Definition</h4>
              <p>
                "The change of the whole substance of bread into the substance of the Body of Christ and of the 
                whole substance of wine into the substance of the Blood of Christ. This change the holy Catholic 
                Church has fittingly and properly called transubstantiation."
                <cite>— Council of Trent, Session 13</cite>
              </p>
            </div>

            <h4>Understanding Substance and Accidents</h4>
            <p>
              The doctrine uses Aristotelian philosophical categories to explain the mystery:
            </p>
            
            <div className="philosophy-box">
              <div className="concept">
                <h5>Substance</h5>
                <p>The underlying reality of what something IS—its essential nature, what makes it what it is. 
                This is not visible or measurable.</p>
                <p className="example"><em>Example:</em> The "dogness" that makes a dog a dog, not a cat.</p>
              </div>
              
              <div className="concept">
                <h5>Accidents</h5>
                <p>The observable properties—appearance, taste, texture, chemical composition, weight. These are 
                what our senses perceive.</p>
                <p className="example"><em>Example:</em> The dog's color, size, breed characteristics.</p>
              </div>
            </div>

            <h4>What Changes at Consecration</h4>
            <table className="doctrine-table">
              <thead>
                <tr>
                  <th>Aspect</th>
                  <th>Before Consecration</th>
                  <th>After Consecration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Substance</strong><br/>(What it IS)</td>
                  <td>Bread and Wine</td>
                  <td><strong>Body and Blood of Christ</strong></td>
                </tr>
                <tr>
                  <td><strong>Accidents</strong><br/>(What it appears to be)</td>
                  <td>Looks, tastes, smells like bread and wine</td>
                  <td><strong>Still looks, tastes, smells like bread and wine</strong></td>
                </tr>
                <tr>
                  <td><strong>Reality</strong></td>
                  <td>Common food</td>
                  <td><strong>Christ Himself—Body, Blood, Soul, Divinity</strong></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="card highlight">
            <h3>Why This Terminology?</h3>
            <ol>
              <li>
                <strong>To Explain Christ's Words:</strong> When Jesus says "This IS my body," transubstantiation 
                explains how something can truly be His body while appearing as bread.
              </li>
              <li>
                <strong>To Avoid Two Errors:</strong>
                <ul>
                  <li><em>Mere Symbolism:</em> Reduces "is" to "represents"—denies the Real Presence</li>
                  <li><em>Gross Materialism:</em> Imagines crude, cannibalistic consumption—misunderstands the 
                  sacramental mode of presence</li>
                </ul>
              </li>
              <li>
                <strong>To Safeguard the Mystery:</strong> Acknowledges what changes (substance) while explaining 
                why we don't see the change (accidents remain).
              </li>
              <li>
                <strong>To Answer John 6's "How?":</strong> The crowd asked, "How can this man give us his flesh 
                to eat?" Transubstantiation answers: through a substantial change that transcends physical laws.
              </li>
            </ol>
          </div>

          <div className="card">
            <h3>Not an Invention, but a Development</h3>
            <p>
              Critics claim transubstantiation is a "medieval invention." But consider the evidence:
            </p>
            
            <table className="development-table">
              <thead>
                <tr>
                  <th>Century</th>
                  <th>What the Church Believed</th>
                  <th>What the Church Said</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>1st-2nd</strong></td>
                  <td>Real Presence</td>
                  <td>"The Eucharist is the flesh of Christ" (Ignatius)</td>
                </tr>
                <tr>
                  <td><strong>4th</strong></td>
                  <td>Real Presence through change</td>
                  <td>"The bread becomes the flesh of Christ" (Ambrose)</td>
                </tr>
                <tr>
                  <td><strong>4th</strong></td>
                  <td>Appearance vs. Reality</td>
                  <td>"The seeming bread is not bread... though sensible to taste" (Cyril)</td>
                </tr>
                <tr>
                  <td><strong>8th</strong></td>
                  <td>Substance changes</td>
                  <td>"The bread and wine are changed into God's body and blood" (John Damascene)</td>
                </tr>
                <tr>
                  <td><strong>13th</strong></td>
                  <td>Same belief, precise language</td>
                  <td>"Transubstantiation" formally defined (Lateran IV, 1215)</td>
                </tr>
              </tbody>
            </table>

            <p className="insight">
              <strong>The Pattern of Development:</strong> The doctrine doesn't change—the reality believed is 
              the same from Ignatius to Lateran IV. What develops is the theological precision and philosophical 
              vocabulary to defend and explain what was always believed. This is organic development, not innovation.
            </p>
          </div>

          <div className="card">
            <h3>The Deeper Meaning</h3>
            <p>
              Transubstantiation isn't just philosophical precision—it's profoundly biblical:
            </p>
            <ul>
              <li><strong>It Fulfills John 6:</strong> "My flesh is TRUE (alēthēs—real, actual) food" demands 
              more than symbolism</li>
              <li><strong>It Honors Christ's Words:</strong> "This IS" means substantial identity, not representation</li>
              <li><strong>It Completes the Incarnation:</strong> The Word became flesh (John 1:14); that flesh 
              becomes our food (John 6:51)</li>
              <li><strong>It Makes Possible Real Union:</strong> "He who eats my flesh... abides in me" (John 6:56) 
              requires real presence for real union</li>
              <li><strong>It Explains Paul's Warning:</strong> "Guilty of profaning the body and blood" 
              (1 Corinthians 11:27) makes sense only if the body and blood are really present to be profaned</li>
            </ul>
          </div>
        </section>

        <section id="timeline" className="section">
          <h2>Historical Timeline: From Promise to Definition</h2>
          
          <div className="timeline-wrapper">
            <div className="timeline-period card">
              <h3>c. 30 AD: The Institution</h3>
              <p><strong>Last Supper:</strong> Jesus institutes the Eucharist at the Passover meal</p>
              <p><strong>John 6:</strong> The Bread of Life discourse promises the gift</p>
              <p><strong>Acts 2:42:</strong> "They devoted themselves to... the breaking of bread"</p>
            </div>

            <div className="timeline-period card">
              <h3>50-100 AD: Apostolic Practice</h3>
              <p><strong>1 Corinthians 10-11 (c. 55 AD):</strong> Paul's teaching on the Real Presence and 
              unworthy reception</p>
              <p><strong>Didache (c. 70-90 AD):</strong> Early liturgical instructions for the Eucharist</p>
            </div>

            <div className="timeline-period card">
              <h3>100-325 AD: Early Fathers Defend the Faith</h3>
              <ul className="timeline-list">
                <li><strong>Ignatius (110 AD):</strong> Links Real Presence to Incarnation against Docetism</li>
                <li><strong>Justin Martyr (155 AD):</strong> First detailed Mass description; Incarnational analogy</li>
                <li><strong>Irenaeus (189 AD):</strong> Uses Eucharist to defend resurrection of the body</li>
                <li><strong>Tertullian (210 AD):</strong> Evidence for home reservation</li>
                <li><strong>Origen (248 AD):</strong> Extreme care for particles</li>
                <li><strong>Cyprian (251 AD):</strong> Eucharist as test of communion</li>
              </ul>
            </div>

            <div className="timeline-period card">
              <h3>325-600 AD: Golden Age of Doctrinal Clarity</h3>
              <ul className="timeline-list">
                <li><strong>Cyril of Jerusalem (350 AD):</strong> Appearance vs. reality distinction</li>
                <li><strong>Basil the Great (379 AD):</strong> Golden dove for reservation</li>
                <li><strong>Ambrose (390 AD):</strong> Change of nature (natura) through consecration</li>
                <li><strong>Augustine (412 AD):</strong> Command to adore before receiving</li>
                <li><strong>John Chrysostom (400 AD):</strong> Visceral, physical union with Christ</li>
              </ul>
            </div>

            <div className="timeline-period card">
              <h3>600-1000 AD: Liturgical Development</h3>
              <ul className="timeline-list">
                <li><strong>Gregory the Great (604 AD):</strong> Mass as unbloody sacrifice</li>
                <li><strong>John of Damascus (749 AD):</strong> Explicit rejection of symbolism</li>
                <li><strong>Paschasius Radbertus (9th c.):</strong> First systematic treatise on Eucharist</li>
              </ul>
            </div>

            <div className="timeline-period card highlight">
              <h3>1215 AD: Fourth Lateran Council</h3>
              <p className="major-event">
                <strong>Formal Definition of Transubstantiation</strong>
              </p>
              <blockquote>
                "There is one Universal Church of the faithful, outside of which there is absolutely no salvation. 
                In which there is the same priest and sacrifice, Jesus Christ, whose body and blood are truly 
                contained in the sacrament of the altar under the forms of bread and wine; the bread being changed 
                (transubstantiatis) by divine power into the body, and the wine into the blood, so that to realize 
                the mystery of unity we may receive of Him what He has received of us."
              </blockquote>
              <p className="analysis">
                <strong>Significance:</strong> After 1,200 years of consistent belief and practice, the Church 
                employs philosophical precision to formally define the teaching. This doesn't create new doctrine—
                it guards ancient faith with precise language.
              </p>
            </div>

            <div className="timeline-period card">
              <h3>1215-1517: Eucharistic Devotion Flourishes</h3>
              <ul className="timeline-list">
                <li><strong>Thomas Aquinas (1264):</strong> Writes "Pange Lingua" and Summa on Eucharist</li>
                <li><strong>Feast of Corpus Christi (1264):</strong> Established by Urban IV</li>
                <li><strong>Eucharistic Adoration:</strong> Benediction and Exposition become common</li>
              </ul>
            </div>

            <div className="timeline-period card">
              <h3>1545-1563: Council of Trent</h3>
              <p className="major-event">
                <strong>Reaffirmation Against Protestant Denials</strong>
              </p>
              <p>
                Trent reaffirms transubstantiation, the Real Presence, and Eucharistic sacrifice in response to 
                Reformation challenges. The doctrine remains unchanged—only reasserted with renewed clarity.
              </p>
            </div>
          </div>
        </section>

        <section id="conclusion" className="section conclusion">
          <h2>Conclusion: The Unbroken Thread</h2>
          
          <div className="card highlight">
            <p className="lead">
              From the Upper Room to the Fourth Lateran Council spans 1,185 years. Throughout this entire period, 
              we find an unbroken thread of belief, practice, and devotion centered on one reality: in the Eucharist, 
              Christ gives us His true Body and Blood.
            </p>
            
            <h3>The Weight of Evidence</h3>
            <ol className="conclusion-list">
              <li>
                <strong>Old Testament Preparation:</strong> Melchizedek's bread and wine, the manna from heaven, 
                the Bread of the Presence, and the Passover lamb all point forward to a supernatural food that must 
                be consumed.
              </li>
              <li>
                <strong>John 6's Explicit Promise:</strong> Jesus's deliberate escalation from metaphor to stark 
                literalism, His use of the graphic verb trōgein, and His refusal to clarify when disciples abandon 
                Him—all indicate He meant exactly what He said.
              </li>
              <li>
                <strong>The Institution's Solemn Words:</strong> "This IS my body" in the context of Passover 
                fulfillment and covenant-making cannot be reduced to symbolism without violence to the text.
              </li>
              <li>
                <strong>Apostolic Teaching:</strong> Paul's warning about profaning the body and blood, his teaching 
                on koinonia (real participation), and the severe consequences of unworthy reception all demand 
                real presence.
              </li>
              <li>
                <strong>Unanimous Patristic Witness:</strong> Not one Church Father in the first eight centuries 
                teaches a merely symbolic view. All affirm, defend, and clarify the Real Presence in increasingly 
                explicit terms.
              </li>
              <li>
                <strong>Liturgical Practice:</strong> The care for particles, reservation for the sick, instructions 
                for reverent reception, and explicit commands to adore—all flow naturally from belief in real presence.
              </li>
              <li>
                <strong>Theological Development:</strong> From Ignatius's simple assertion to Lateran's philosophical 
                precision is organic growth in understanding, not invention of new doctrine.
              </li>
            </ol>

            <h3>Questions for Reflection</h3>
            <div className="reflection-box">
              <p>For our Protestant brothers and sisters who hold to a symbolic view:</p>
              <ul>
                <li>If Jesus intended a symbol, why did He let disciples leave rather than clarify?</li>
                <li>Why did He switch to the graphic verb trōgein when challenged?</li>
                <li>Why does not a single Church Father in 1,500 years teach your view?</li>
                <li>Why did Ignatius, who learned from John, link it to the Incarnation?</li>
                <li>Why did the early Church handle particles with such extreme care?</li>
                <li>How do you explain Paul's teaching that unworthy reception profanes Christ's body?</li>
                <li>When did the "symbolic view" first appear in Church history?</li>
                <li>If the entire early Church was wrong about their central act of worship, how can we trust 
                their testimony about anything—including which books belong in the Bible?</li>
              </ul>
            </div>

            <h3>The Call to Faith</h3>
            <p>
              Like the disciples in John 6, we're presented with a teaching that transcends natural understanding. 
              We can respond in three ways:
            </p>
            <ol>
              <li><strong>Reject it as impossible</strong> (like the crowd in John 6:52)</li>
              <li><strong>Find it too hard and walk away</strong> (like the disciples in John 6:66)</li>
              <li><strong>Accept it through faith in Christ</strong> (like Peter in John 6:68-69)</li>
            </ol>
            
            <blockquote className="final-quote">
              "Lord, to whom shall we go? You have the words of eternal life. We have come to believe and to know 
              that you are the Holy One of God."
              <cite>— John 6:68-69</cite>
            </blockquote>

            <p>
              The Real Presence is not a peripheral doctrine but the beating heart of Christian worship. It's where 
              heaven touches earth, where the Incarnation continues, where we are fed with the Bread of Life. 
              Transubstantiation is simply the Church's careful explanation of what Christ promised and what the 
              Church has always believed: "This is my body... This is my blood."
            </p>

            <p className="closing">
              May this exploration of Scripture, Tradition, and reason lead us all to deeper faith in—and more 
              profound reverence for—the Real Presence of our Lord in the Blessed Sacrament.
            </p>
          </div>
        </section>

        <section id="resources" className="section">
          <h2>Further Reading & Resources</h2>
          
          <div className="card">
            <h3>Recommended Books</h3>
            <ul className="resources-list">
              <li><strong>Jesus and the Jewish Roots of the Eucharist</strong> by Brant Pitre</li>
              <li><strong>The Lamb's Supper</strong> by Scott Hahn</li>
              <li><strong>The Hidden Manna</strong> by James T. O'Connor</li>
              <li><strong>Corpus Christi: An Encyclopedia of the Eucharist</strong> edited by Michael O'Carroll</li>
            </ul>

            <h3>Key Church Documents</h3>
            <ul className="resources-list">
              <li>Catechism of the Catholic Church, paragraphs 1322-1419</li>
              <li>Council of Trent, Session 13 (On the Eucharist)</li>
              <li>Pope Paul VI, <em>Mysterium Fidei</em> (1965)</li>
              <li>Pope John Paul II, <em>Ecclesia de Eucharistia</em> (2003)</li>
            </ul>

            <h3>Primary Sources</h3>
            <ul className="resources-list">
              <li>The Letters of St. Ignatius of Antioch</li>
              <li>St. Justin Martyr's First Apology</li>
              <li>St. Irenaeus, <em>Against Heresies</em></li>
              <li>St. Cyril of Jerusalem, <em>Mystagogical Catecheses</em></li>
              <li>St. Augustine, <em>Explanations of the Psalms</em></li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>"Do this in remembrance of me." — Luke 22:19</p>
        <p className="copyright">Built to defend and proclaim the Real Presence of Christ in the Eucharist</p>
      </footer>
    </div>
  )
})

export default app
