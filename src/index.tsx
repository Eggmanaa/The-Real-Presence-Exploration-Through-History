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

      <div className="nav-container">
        <div className="nav-header">
          <span className="nav-title">Navigation</span>
          <button className="nav-toggle" onclick="toggleNav()" aria-label="Toggle navigation menu">☰</button>
        </div>
        <nav className="main-nav">
          <a href="#introduction">Introduction</a>
          <a href="#old-testament">Old Testament</a>
          <a href="#john-6">John 6</a>
          <a href="#institution">Institution</a>
          <a href="#church-fathers">Church Fathers</a>
          <a href="#reservation">Reservation</a>
          <a href="#transubstantiation">Transubstantiation</a>
          <a href="#timeline">Timeline</a>
          <a href="#reformation">Reformation</a>
        </nav>
      </div>

      <main className="content">
        <section id="introduction" className="section">
          <h2>Introduction</h2>
          <div className="card">
            <p className="lead">
              For centuries, Christians have confessed that in the Eucharist, they receive not merely bread and wine, 
              but the true Body and Blood of Jesus Christ. This doctrine—known as the Real Presence—stands at the 
              very heart of Christian worship and has been the consistent teaching of the Church from its earliest days. 
              The phrase "the Eucharist" comes from the Didache, an early collection of the apostles' teachings, and 
              has been used in the Church from the start.
            </p>
            <p>
              This treatise presents a comprehensive case for the Real Presence and the theological understanding of 
              transubstantiation by tracing three interconnected lines of evidence:
            </p>
            <ul className="evidence-list">
              <li><strong>Scriptural Foundation:</strong> From Old Testament prefigurements to Christ's explicit 
              teaching in John 6 and the institution at the Last Supper</li>
              <li><strong>Apostolic Witness:</strong> The unbroken testimony of the Church Fathers from the 
              first century through 1517 AD</li>
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
              <p className="verse">"Tell the whole congregation of Israel that on the tenth of this month they are to 
              take a lamb for each family, a lamb for each household. If a household is too small for a whole lamb, it 
              shall join its closest neighbor in obtaining one; the lamb shall be divided in proportion to the number 
              of people who eat of it. Your lamb shall be without blemish, a year-old male; you may take it from the 
              sheep or from the goats... They shall take some of the blood and put it on the two doorposts and the 
              lintel of the houses in which they eat it. They shall eat the lamb that same night... You shall let none 
              of it remain until the morning; anything that remains until the morning you shall burn... The blood shall 
              be a sign for you on the houses where you live: when I see the blood, I will pass over you, and no plague 
              shall destroy you when I strike the land of Egypt." — Exodus 12:3-5, 7, 8a, 10, 13</p>
              <p className="verse">"This day will be a day of remembrance for you, which your future generations will celebrate 
              with pilgrimage to the LORD; you will celebrate it as a statute forever." — Exodus 12:14</p>
            </div>
            <p>
              The original Passover required an unblemished lamb whose blood, applied to the doorposts, saved Israel 
              from death. But the sacrifice wasn't complete with the lamb's death—God commanded the flesh must be 
              eaten by the covenant family. The instructions are remarkably specific and reveal profound theological 
              principles.
            </p>
            <p>
              Critically, God declares this Passover meal to be "a day of remembrance" that future generations must 
              celebrate "as a statute forever." The Hebrew word for remembrance (<em>zikkaron</em>) carries far more 
              weight than mere mental recollection—it signifies a liturgical memorial that makes the past salvific 
              event present again. When Israel celebrated Passover in subsequent generations, they weren't simply 
              thinking about the Exodus; they were participating in it anew, as if they themselves had been delivered 
              from Egypt. This is the biblical pattern for liturgical memorial: not a mere reminder of what happened 
              once, but a making-present of God's saving action.
            </p>
            <p className="insight">
              <strong>The Eucharistic Connection:</strong> When Jesus institutes the New Covenant memorial at the Last 
              Supper—itself a Passover meal—He uses identical language: "Do this in remembrance (<em>anamnesis</em>) 
              of me" (Luke 22:19). The Greek <em>anamnesis</em> parallels the Hebrew <em>zikkaron</em>, signifying 
              the same liturgical reality: not merely recalling the past, but making Christ's once-for-all sacrifice 
              on Calvary sacramentally present in the celebration. Just as eating the Passover lamb made Israel's 
              deliverance present across generations, so eating Christ's Body and drinking His Blood makes His 
              redemptive sacrifice present to us. This is why the Church has always understood the Eucharist as both 
              memorial and real presence—the memorial is real precisely because Christ Himself becomes present through 
              the liturgical action. A symbolic memorial could not fulfill the biblical pattern established in Exodus 
              12:14; only the Real Presence makes the Eucharist the true "statute forever" that brings Christ's saving 
              death to every generation.
            </p>
            <p>
              Notice God's concern that the lamb be properly proportioned to the household: "If a household is too 
              small for a whole lamb, it shall join its closest neighbor in obtaining one; the lamb shall be divided 
              in proportion to the number of people who eat of it." This wasn't merely practical advice—it ensured 
              complete consumption. The command continues: "You shall let none of it remain until the morning; anything 
              that remains until the morning you shall burn." Why this emphasis on total consumption? Because the lamb's 
              saving power wasn't accessed through its death alone, but through eating its flesh. The blood on the 
              doorposts marked participation in the covenant, but eating the lamb unified the family as covenant members.
            </p>
            <p>
              This establishes a pattern that echoes through Scripture: covenant participation requires consumption of 
              the sacrifice. The family was to size the lamb correctly so that nothing remained—every bit was to be 
              consumed by the covenant community that very night. What couldn't be eaten was burned, never left to decay, 
              for this was holy food that mediated God's saving action.
            </p>
            <p className="insight">
              <strong>The Pattern Established:</strong> This creates a biblical principle: participation in covenant 
              sacrifice requires physical consumption of the victim. The careful sizing of the lamb, the mandate for 
              complete consumption, the prohibition against letting it remain until morning—all emphasize that the 
              sacrifice is completed not just by death and blood, but by eating. St. Paul explicitly calls Christ "our 
              paschal lamb" (1 Corinthians 5:7). Therefore, when Jesus institutes the memorial of His sacrifice, the 
              command to eat His Body and drink His Blood is the necessary fulfillment of the Passover pattern, not an 
              optional symbol. Just as the Israelites had to eat the lamb to participate in the covenant of deliverance, 
              so we must eat Christ's flesh to participate in the New Covenant of eternal salvation.
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
                whole substance of wine into the substance of the Blood of Christ. This change has been fittingly 
                and properly called transubstantiation."
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
              <p>
                Following the Fourth Lateran Council's formal definition of transubstantiation, the medieval Church 
                experienced an unprecedented flowering of Eucharistic devotion. This wasn't the creation of a new 
                doctrine, but the natural outpouring of love and adoration for the Real Presence that had always 
                been believed.
              </p>
              
              <h4>St. Thomas Aquinas (1225-1274)</h4>
              <p>
                The greatest theologian of the medieval period devoted much of his scholarly work to articulating 
                and defending the Real Presence. His contributions include:
              </p>
              <ul className="timeline-list">
                <li><strong>Summa Theologica (1266-1273):</strong> Provides the most comprehensive philosophical 
                and theological explanation of transubstantiation using Aristotelian categories of substance and 
                accidents. Thomas explains how Christ's Body and Blood become truly present while the appearances 
                of bread and wine remain.</li>
                <li><strong>Pange Lingua (1264):</strong> Composed this sublime Eucharistic hymn at Pope Urban IV's 
                request for the new Feast of Corpus Christi. The final two stanzas, "Tantum Ergo," remain one of 
                the Church's most beloved hymns of adoration.</li>
                <li><strong>Adoro Te Devote:</strong> A deeply personal prayer expressing faith in Christ's hidden 
                presence: "Seeing, touching, tasting are in thee deceived; How says trusty hearing? That shall be 
                believed; What God's Son has told me, take for truth I do; Truth himself speaks truly or there's 
                nothing true."</li>
              </ul>
              
              <h4>Feast of Corpus Christi (Established 1264)</h4>
              <p>
                Pope Urban IV established this universal feast day in response to a Eucharistic miracle at Bolsena 
                (1263) and the visions of St. Juliana of Liège. The feast celebrates the Real Presence with:
              </p>
              <ul className="timeline-list">
                <li><strong>Solemn Processions:</strong> The Blessed Sacrament is carried through streets in a 
                monstrance, allowing public adoration and demonstrating the Church's belief that Christ Himself 
                is present in the consecrated Host.</li>
                <li><strong>Liturgical Office:</strong> Thomas Aquinas composed the entire liturgy, including the 
                sequence "Lauda Sion" and the hymns "Pange Lingua," "Sacris Solemniis," and "Verbum Supernum."</li>
                <li><strong>Popular Devotion:</strong> The feast became one of the most elaborate celebrations in 
                the Church's calendar, with entire cities participating in honoring Christ in the Eucharist.</li>
              </ul>
              
              <h4>Eucharistic Adoration Practices</h4>
              <p>
                The late medieval period saw the development and spread of devotional practices that could only 
                make sense if the Real Presence were true:
              </p>
              <ul className="timeline-list">
                <li><strong>Benediction of the Blessed Sacrament:</strong> The practice of exposing the consecrated 
                Host in a monstrance for public veneration, concluding with the priest blessing the people with 
                the Sacrament itself. This demonstrates belief that Christ's presence continues beyond the Mass.</li>
                <li><strong>Perpetual Adoration:</strong> Communities of religious (especially women) dedicated 
                themselves to continuous prayer before the exposed Blessed Sacrament, believing they were literally 
                keeping vigil before the living Christ.</li>
                <li><strong>Tabernacle Devotion:</strong> Elaborate tabernacles were constructed to house the 
                reserved Sacrament, with perpetual lamps burning to signify Christ's presence. Churches were left 
                unlocked so the faithful could visit Christ at any hour.</li>
                <li><strong>Eucharistic Miracles:</strong> Reports of visible manifestations—hosts bleeding, 
                transforming into visible flesh—occurred across Europe. Whether or not one accepts specific miracle 
                claims, their very existence proves the universal belief that the substance of Christ's Body was 
                truly present.</li>
              </ul>
              
              <p className="insight">
                <strong>The Significance:</strong> This explosion of Eucharistic devotion demonstrates that 
                transubstantiation wasn't an abstract theological novelty imposed from above, but the formal 
                articulation of what Christians had always believed and increasingly wanted to express through 
                worship and devotion. You don't compose love songs to a symbol. You don't spend hours in adoration 
                before a metaphor. These practices reveal the heart of medieval faith: the absolute conviction that 
                Jesus Christ, true God and true man, is really, truly, and substantially present in the Eucharist.
              </p>
            </div>

            <div className="timeline-period card">
              <h3>1545-1563: Council of Trent</h3>
              <p className="major-event">
                <strong>Reaffirmation Against Protestant Denials</strong>
              </p>
              <p>
                The Protestant Reformation brought the first major challenge to the doctrine of the Real Presence 
                in over a millennium. Various reformers proposed different understandings—from Luther's 
                consubstantiation to Zwingli's pure symbolism. In response, the Council of Trent (1545-1563) 
                solemnly reaffirmed the ancient faith.
              </p>
              
              <h4>What Trent Defined (Sessions 13 & 22)</h4>
              <div className="scripture-box">
                <p><strong>Canon 1:</strong> "If anyone denies that in the sacrament of the most Holy Eucharist 
                are contained truly, really and substantially the body and blood together with the soul and divinity 
                of our Lord Jesus Christ, and consequently the whole Christ, but says that He is in it only as in 
                a sign, or figure or force, let him be anathema."</p>
              </div>
              
              <ul className="timeline-list">
                <li><strong>Real Presence:</strong> Christ is present "truly, really, and substantially"—not 
                symbolically, not spiritually only, but in His full divine and human nature.</li>
                <li><strong>Transubstantiation:</strong> The Council explicitly used this term, defining it as the 
                conversion of the whole substance of bread into Christ's Body and the whole substance of wine into 
                His Blood, while only the accidents (appearances) of bread and wine remain.</li>
                <li><strong>Eucharistic Sacrifice:</strong> The Mass is not merely a memorial but a true propitiatory 
                sacrifice, the same sacrifice as Calvary, re-presented (made present again) in an unbloody manner.</li>
                <li><strong>Adoration:</strong> The Eucharist is to be adored with latria—the worship due to God 
                alone—because Christ Himself is present. This directly refuted Protestant claims that Eucharistic 
                adoration was idolatry.</li>
                <li><strong>Reservation and Procession:</strong> The practice of reserving the Blessed Sacrament 
                and carrying it in procession was defended as an ancient and laudable custom flowing from belief 
                in the Real Presence.</li>
              </ul>
              
              <h4>Key Clarifications</h4>
              <p>
                Trent carefully explained what the Church had always taught:
              </p>
              <ul className="timeline-list">
                <li><strong>Whole Christ in Each Species:</strong> Christ is entirely present under the appearance 
                of bread alone and entirely under the appearance of wine alone. The faithful receive the whole 
                Christ even when receiving under one kind only.</li>
                <li><strong>Permanence of Presence:</strong> Christ remains present as long as the Eucharistic 
                species remain. The Real Presence doesn't depend on the moment of consumption or the faith of the 
                recipient.</li>
                <li><strong>Objective Reality:</strong> The Eucharist is Christ's Body and Blood because of the 
                consecration and Christ's promise—not because of the recipient's faith or the minister's worthiness.</li>
              </ul>
              
              <div className="card highlight">
                <h4>The Critical Point: Nothing New</h4>
                <p>
                  Trent did not invent new doctrine. The Council fathers explicitly stated they were defining what 
                  had "always been believed" from the beginning. Every doctrine Trent proclaimed can be traced 
                  directly through the medieval theologians, back through the Church Fathers, to the Apostles 
                  themselves.
                </p>
                <p className="insight">
                  <strong>The Historical Reality:</strong> The evidence demonstrates that the Real Presence was not 
                  a late medieval innovation but the consistent, unbroken teaching from the beginning. The question 
                  was not "Is this in Scripture?" (the evidence clearly shows it is) but rather "Will we accept 
                  what Scripture and early Christian Tradition consistently teach?"
                </p>
              </div>
              
              <p>
                The Council of Trent's definitions represent the historic Christian understanding of the apostolic 
                faith concerning the greatest of all mysteries: the Real Presence of Jesus Christ in the Eucharist.
              </p>
            </div>
          </div>
        </section>


        <section id="reformation" className="section">
          <h2>Unity Then Division: The Reformation Challenge</h2>
          
          <div className="intro-card card">
            <p className="lead">
              For fifteen centuries—from the Apostles through the medieval period—the Christian Church maintained 
              remarkable unity on the Real Presence. East and West, through schism and controversy, never disputed 
              this central truth. The first major fracture came in the 16th century with the Protestant Reformation.
            </p>
          </div>

          <div className="card highlight">
            <h3>The Unbroken Consensus (30-1517 AD)</h3>
            <p>
              Despite countless theological debates over Christology, the Trinity, grace, and ecclesiology, no 
              major Christian body before the 16th century denied the Real Presence:
            </p>
            <ul className="consensus-list">
              <li><strong>The Apostolic Fathers</strong> uniformly testified to Christ's true flesh and blood in 
              the Eucharist</li>
              <li><strong>The Great Schism (1054 AD)</strong> between Rome and Constantinople involved authority, 
              the Filioque, and liturgical practices—but both sides affirmed the Real Presence and continue to 
              do so today</li>
              <li><strong>Medieval Heresies</strong> challenged papal authority, priestly celibacy, and Church 
              corruption—but even the Waldensians, Albigensians, and pre-Reformation reformers like Wycliffe and 
              Hus, despite their criticisms, did not universally deny transubstantiation</li>
              <li><strong>East and West</strong> used different philosophical language (the East generally avoiding 
              Aristotelian terminology), but both traditions celebrated the Divine Liturgy believing the bread and 
              wine truly became the Body and Blood of Christ</li>
            </ul>
            <p className="insight">
              <strong>The Significance:</strong> This remarkable consensus across fifteen centuries, multiple 
              languages, diverse cultures, and even ecclesiastical division demonstrates that the Real Presence 
              was not one theological opinion among many—it was the faith of the Church, believed everywhere, 
              by everyone, always.
            </p>
          </div>

          <div className="card">
            <h3>The 16th Century Shift: New Theological Starting Points</h3>
            <p>
              The Protestant Reformation brought the first systematic challenge to the Real Presence. This wasn't 
              primarily a matter of discovering "new evidence" but rather applying different theological principles, 
              especially <em>Sola Scriptura</em> (Scripture Alone), which led reformers to re-evaluate traditional 
              doctrines.
            </p>
          </div>

          <div className="timeline-container">
            <div className="timeline-item card">
              <h3>1. Sola Scriptura vs. Philosophical Definition</h3>
              <p>
                Reformers like Huldrych Zwingli and John Calvin insisted all doctrine must be explicitly stated 
                in Scripture, not derived from tradition or philosophy.
              </p>
              <p className="analysis">
                <strong>Their Argument:</strong> Transubstantiation relies on Aristotelian categories of "substance" 
                and "accidents"—philosophical terms not found in Scripture. They viewed this as a "medieval invention" 
                that obscured rather than clarified Christ's simple command to remember Him.
              </p>
              <blockquote>
                "Do this in remembrance of me." — Luke 22:19
              </blockquote>
              <p>
                The reformers shifted focus from a metaphysical change in the elements to the act of remembering 
                and proclaiming Christ's finished work on the cross.
              </p>
            </div>

            <div className="timeline-item card">
              <h3>2. "Is" Means "Signifies"</h3>
              <p>
                At the Marburg Colloquy (1529), Zwingli famously debated Luther on the meaning of Christ's words 
                of institution.
              </p>
              <p className="analysis">
                <strong>Zwingli's Position:</strong> The verb "is" (<em>estin</em>) in "This is my body" should 
                be understood as "signifies" or "represents," just as in other biblical passages:
              </p>
              <ul>
                <li>"I am the vine" (John 15:5) — Jesus isn't literally a plant</li>
                <li>"The seed is the word of God" (Luke 8:11) — The seed represents the word</li>
                <li>"The seven heads are seven mountains" (Revelation 17:9) — Symbolic language</li>
              </ul>
              <p>
                For Zwingli and Anabaptists, the bread and wine are <strong>symbols</strong> that direct believers' 
                hearts toward Christ's sacrifice—a memorial and public profession of faith, not physical reception 
                of Christ.
              </p>
            </div>

            <div className="timeline-item card">
              <h3>3. The Ascended Body of Christ</h3>
              <p>
                Both Zwingli and Calvin raised a Christological objection based on the Ascension:
              </p>
              <div className="scripture-box">
                <p className="verse">
                  "He sat down at the right hand of God... waiting until his enemies should be made a footstool 
                  for his feet." — Hebrews 10:12-13
                </p>
              </div>
              <p className="analysis">
                <strong>Their Argument:</strong> Christ's true human body is in heaven, seated at the Father's 
                right hand. A genuine human body must be <em>localized</em>—it cannot simultaneously be in heaven 
                and physically present on thousands of altars on earth. To claim otherwise would:
              </p>
              <ul>
                <li>Deny the reality of Christ's human nature</li>
                <li>Confuse His human and divine natures (a form of Eutychianism)</li>
                <li>Attribute the divine quality of omnipresence to His human body</li>
              </ul>
              <p className="insight">
                <strong>Calvin's Solution:</strong> Christ is truly present but remains bodily in heaven. During 
                communion, the Holy Spirit "lifts up" the believer's soul through faith to heaven to spiritually 
                feast on Christ. The presence is real but spiritual, not physical.
              </p>
            </div>

            <div className="timeline-item card">
              <h3>4. Reinterpreting John 6</h3>
              <p>
                The reformers inverted the Catholic interpretation of the Bread of Life discourse:
              </p>
              <div className="scripture-box critical">
                <p className="verse">
                  "It is the Spirit that gives life; the flesh is of no avail. The words that I have spoken to 
                  you are spirit and life." — John 6:63
                </p>
              </div>
              <p className="analysis">
                <strong>Protestant Reading:</strong> This verse is the interpretive key to the entire chapter. 
                Jesus deliberately corrected the crowd's "carnal, cannibalistic" misunderstanding. The "eating" 
                He described is not physical consumption but the spiritual act of believing in Him.
              </p>
              <p>
                <strong>Faith as the Mouth:</strong> For Calvin, "eating" Christ's flesh means believing in Him. 
                The "food" is His atoning work, which the soul receives through faith alone. Physical eating of 
                consecrated bread is merely the external sign of this interior, spiritual reality.
              </p>
            </div>

            <div className="timeline-item card">
              <h3>5. Rejection of Ex Opere Operato</h3>
              <p>
                The reformers universally rejected the doctrine that sacraments confer grace <em>ex opere operato</em> 
                ("by the work having been worked")—the teaching that the sacrament is effective through Christ's 
                instituted action, regardless of the minister's worthiness.
              </p>
              <p className="analysis">
                <strong>Their Concern:</strong> This seemed to make the sacrament work "automatically," like magic, 
                undermining <em>Sola Fide</em> (Faith Alone). They insisted:
              </p>
              <ul>
                <li>The benefits of communion are received <strong>only through personal faith</strong></li>
                <li>Without faith, the participant receives only bread and wine, not Christ</li>
                <li>The believer's disposition is more critical than the minister's words of consecration</li>
                <li>The sacrament confirms and strengthens faith but doesn't create it or work independently of it</li>
              </ul>
            </div>
          </div>

          <div className="card highlight">
            <h3>A Note on Martin Luther</h3>
            <p>
              It's important to note that Luther himself never denied the Real Presence. He fiercely defended 
              it against Zwingli at Marburg, insisting Christ's words "This is my body" must be taken literally.
            </p>
            <p>
              Luther's position, called <strong>Sacramental Union</strong> or sometimes <strong>Consubstantiation</strong> 
              (though he disliked the term), taught that Christ's body and blood are present "in, with, and under" 
              the bread and wine—truly present but without the substance of the bread and wine ceasing to exist.
            </p>
            <p className="insight">
              Even Luther's affirmation of Real Presence, however, differed from the historic understanding by 
              rejecting transubstantiation and the sacrificial nature of the Mass. His view represents a middle 
              position but still marks a departure from the consistent teaching of the previous fifteen centuries.
            </p>
          </div>

          <div className="card">
            <h3>The Catholic Response</h3>
            <p>
              The Council of Trent (1545-1563) responded to these Protestant challenges by solemnly reaffirming 
              what the Church had always taught:
            </p>
            <ul className="conclusion-list">
              <li><strong>Scripture and Tradition:</strong> The Church receives divine revelation from both 
              Scripture and Sacred Tradition, with the Church's teaching authority (Magisterium) guided by the 
              Holy Spirit to interpret both correctly.</li>
              
              <li><strong>Literal Interpretation:</strong> Christ's words "This is my body" must be taken at 
              face value, as the Church Fathers uniformly did. Philosophical terminology (like transubstantiation) 
              doesn't add to Scripture but clarifies and defends what Scripture teaches.</li>
              
              <li><strong>The Whole Christ:</strong> Christ can make Himself sacramentally present while 
              remaining bodily in heaven because His mode of sacramental presence transcends physical laws. 
              He is not "located" in the Host but truly, really, and substantially present under the appearances 
              of bread and wine.</li>
              
              <li><strong>John 6 Vindicated:</strong> The chapter cannot mean "believe in me" because Jesus 
              already used "believe" earlier (v. 35) and then deliberately switched to the graphic language of 
              eating and drinking (v. 53-56). The Spirit gives life precisely through the flesh of Christ that 
              we consume.</li>
              
              <li><strong>Grace and Faith:</strong> The sacrament is effective through Christ's promise and 
              power, not human faith. However, to receive its benefits <em>fruitfully</em>, one must be in a 
              state of grace and receive with faith and reverence. The sacrament doesn't work "magically"—it 
              works because Christ instituted it and promised to work through it.</li>
            </ul>
          </div>

          <div className="card summary-box">
            <h3>The Critical Question</h3>
            <p className="lead">
              The Reformation challenge forces us to ask: Does the unanimous testimony of the Church for fifteen 
              centuries carry weight? When every Church Father, every ecumenical council before Trent, both 
              Eastern and Western traditions, and the consistent practice of the faithful all agree—can we 
              confidently set aside this witness based on a new theological system?
            </p>
            <p>
              The Catholic Church answers: No. The faith "once for all delivered to the saints" (Jude 3) has 
              been carefully guarded and faithfully transmitted. To accept the Reformation's reinterpretation 
              would mean that the Holy Spirit allowed the entire Church—including those who learned directly 
              from the Apostles—to fundamentally misunderstand the Eucharist for 1,500 years.
            </p>
            <p className="insight">
              The Real Presence is not a "Roman Catholic invention" or a "medieval corruption." It is the 
              apostolic faith, believed by the undivided Church, affirmed by the Fathers, celebrated in the 
              liturgy, and now challenged for the first time in history. The question is not whether we will 
              follow Scripture, but whether we will follow Scripture as the Church has always understood it, 
              guided by the Holy Spirit through the centuries.
            </p>
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
              profound reverence for—the Real Presence of our Lord in the Eucharist.
            </p>
          </div>
        </section>

        <section id="resources" className="section">
          <h2>Further Reading</h2>
          
          <div className="card">
            <h3>Recommended Book</h3>
            <ul className="resources-list">
              <li><strong>Jesus and the Jewish Roots of the Eucharist</strong> by Brant Pitre — An excellent scholarly 
              exploration of how Jewish Passover traditions illuminate Christ's institution of the Eucharist and the 
              early Christian understanding of the Real Presence.</li>
            </ul>

            <h3>Primary Sources</h3>
            <p>The following primary sources are quoted throughout this treatise and provide direct testimony to the early Church's belief in the Real Presence:</p>
            <ul className="resources-list">
              <li><strong>The Didache</strong> — <em>The Teaching of the Twelve Apostles</em> (c. 50-125 AD)</li>
              <li><strong>St. Ignatius of Antioch</strong> — <em>Letter to the Smyrnaeans</em> and <em>Letter to the Romans</em> (c. 110 AD)</li>
              <li><strong>St. Justin Martyr</strong> — <em>First Apology</em> (c. 155 AD)</li>
              <li><strong>St. Irenaeus of Lyons</strong> — <em>Against Heresies</em> (c. 189 AD)</li>
              <li><strong>Tertullian</strong> — <em>On the Resurrection of the Flesh</em> (c. 210 AD)</li>
              <li><strong>Origen of Alexandria</strong> — <em>Homilies on Exodus</em> (c. 248 AD)</li>
              <li><strong>St. Cyprian of Carthage</strong> — <em>On the Lapsed</em> and <em>Epistles</em> (c. 251 AD)</li>
              <li><strong>St. Cyril of Jerusalem</strong> — <em>Mystagogical Catecheses</em> (c. 350 AD)</li>
              <li><strong>St. Basil the Great</strong> — <em>Letter to Caesaria</em> (c. 372 AD)</li>
              <li><strong>St. Ambrose of Milan</strong> — <em>On the Mysteries</em> (c. 390 AD)</li>
              <li><strong>St. Augustine of Hippo</strong> — <em>Explanations of the Psalms</em> and <em>Sermons</em> (c. 400 AD)</li>
              <li><strong>St. John Chrysostom</strong> — <em>Homilies on John</em> and <em>Homilies on 1 Corinthians</em> (c. 400 AD)</li>
              <li><strong>St. John of Damascus</strong> — <em>Exposition of the Orthodox Faith</em> (c. 749 AD)</li>
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
