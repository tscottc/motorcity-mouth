// Single source of truth for all Motorcity Mouth article and horrorscopes data.
// Loaded in the browser via <script src="/data/articles.js"> in index.html.
// Also loaded by scripts/generate-articles.js via require() for static page generation.

const ARTICLES = [
  {
    id: 'grand-prix-citizens-faq',
    headline: 'The Detroit Grand Prix Citizens FAQ',
    deck: "Guy Fieri, a guy named Rick, and twenty-one million barrels of Monster Energy Drink — your complete guide to the annual event where the cars go fast and the residents cannot.",
    section: 'local',
    featured: true,
    frontPage: true,
    byline: 'By Staff Reporter',
    date: 'May 18, 2026',
    lede: "Once again the city's most exhilarating civic traffic violation of the year, the Grand Prix, has returned to Detroit. With a route that defies sound engineering practices, a media presence bigger than the trial of Kwame Kilpatrick, and enough energy drinks to murder livestock, Detroit once again reclaims its title as the reckless heartbeat of American Motorsport. As enjoyable an event it may be, the Grand Prix is not without its unique challenges and curiosities. So if you find yourself wondering \"Can I walk through my own city during this?\" we've got you covered!",
    image: 'images/grand-prix.jpg',
    imageCaption: 'Race cars line up at the Detroit Grand Prix with the Renaissance Center in the background.',
    body: `<p>Once again the city's most exhilarating civic traffic violation of the year, the Grand Prix, has returned to Detroit. With a route that defies sound engineering practices, a media presence bigger than the trial of Kwame Kilpatrick, and enough energy drinks to murder livestock, Detroit once again reclaims its title as the reckless heartbeat of American Motorsport. As enjoyable an event it may be, the Grand Prix is not without its unique challenges and curiosities. So if you find yourself wondering "Can I walk through my own city during this?" we've got you covered!</p>

<p><strong>Detroit Grand Prix FAQ: Frequently Avoided Questions</strong></p>

<p><strong>Q: When is the Grand Prix this year?</strong><br>A: Officially, May 29th-31st, however locals know the Grand Prix begins the moment the first traffic cone is hurled into the Detroit River by a shirtless man named Rick who claims to be "part of the crew."</p>

<p><strong>Q: What exactly is the Detroit Grand Prix?</strong><br>A: No one is entirely sure, but what we do know is that it's an annual event where race car drivers will zip past iconic Detroit landmarks including Joe Louis's fist, the food court where Eminem's cousin once worked, and at least four high-end apartments whose tenants had no idea this was happening, all while the people who live there wait 40 minutes for a bus that never comes.</p>

<p><strong>Q: What is the course going to be like this year?</strong><br>A: This year's course is a nerve-splitting circuit that loops through downtown. The map is available here for download. According to race officials, the track will include 13 stops, three spirals, and "a highly competitive stretch near the Renaissance Center," which veterans say could see cars reaching up to 35 mph if they beat the crosswalk signal.</p>

<p><strong>Q: Who is hosting this year's Grand Prix?</strong><br>A: Guy Fieri has been confirmed as Grand Marshal, which tracks, because nothing says "Detroit Renaissance" like a man whose entire personality is melted cheese. He will be driven around the course in a ceremonial lap at 11 mph while pointing finger guns at the crowd. The Detroit Grand Prix official website lists several backup options, including long-time popular ex-Mayor Kwame Kilpatrick, Kid Rock in a racist T-Shirt and signature overalls, and a random teenager who won a sweepstakes by tagging #FastestInTheD on Instagram.</p>

<p><strong>Q: Why is this good for Detroit?</strong><br>A: It's not! But someone named Brad from GM marketing will say it is, which is basically the same thing. Think of it in terms of trickle-down economics: they race, we watch from behind a fence, the city gets "exposure."</p>

<p><strong>Q: What makes this year's event unique from last year's?</strong><br>A: There are lots of exciting new elements to spice up this year's event, including a new driver lineup. This year features the anticipated new independent entrant, Local Dad Racing, whose driver is just "a guy named Rick" with a Dodge Charger and a Bluetooth headset. Also confirmed — Dale Earnhardt Jr. will not be racing, but will attend to wave at the cars as they go past.</p>

<p><strong>Q: Is this event family-friendly?</strong><br>A: Yes! If your family enjoys heatstroke, engine noise, and paying $9 for a can of Red Bull while being funneled through a maze of nonsense, then this is the event for you! It's like a county fair for people who miss the sound of war.</p>

<p><strong>Q: How do I get around the city during race weekend?</strong><br>A: You don't. The Detroit Grand Prix is not just a race — it's a break from your regular, dependable, convenient routes! Some alternative suggested modes of travel include kayak, zipline, and astral projection.</p>

<p><strong>Q: Is parking available?</strong><br>A: Detroit has more parking lots per capita than any major American city, a fact made possible by demolishing roughly 60 years of architectural history. There is so much parking that there are now parking lots specifically for accessing other parking lots. You will park your car in order to walk to where you park your car. You will do this inside the ghost of a building that mattered. Enjoy the race.</p>

<p><strong>Q: What does the event cost taxpayers?</strong><br>A: Silence. We don't talk about it.</p>

<p><strong>Q: Are there environmental concerns?</strong><br>A: No, because they were paved over.</p>

<p><strong>Q: What should I wear to the Grand Prix?</strong><br>A: Something that says, "I care about horsepower more than housing."</p>

<p><strong>Q: Will there be food?</strong><br>A: Yes. You may purchase a $24 pulled pork sandwich from a tent. A Coney Island will be visible from behind the barrier. You cannot reach it.</p>

<p><strong>Q: Can I protest the event?</strong><br>A: Absolutely! Please report to the designated "Freedom of Speech Zone" located between the Porta Potty and the smoking section, behind the Monster Energy display.</p>

<p><strong>Q: What happens if a car breaks down?</strong><br>A: The driver will be interviewed about "resilience" and "the heart of a champion." Then a tow truck from Hamtramck will arrive forty minutes later and everyone will agree this was exciting.</p>

<p><strong>Q: Will Detroit still be here after this is over?</strong><br>A: Probably. Detroit has survived the auto industry collapse, municipal bankruptcy, three separate Kid Rock eras, and the Kwame Kilpatrick trial. It will survive Guy Fieri pointing at things. That's not optimism. That's just load-bearing stubbornness.</p>

<p><em>Important reminder: All attendees must download the official Detroit Grand Prix app, which includes race schedules, port-a-potty locations, and five increasingly desperate push notifications about Guy Fieri's whereabouts.</em></p>`
  },
  {
    id: 'people-mover-obstruction',
    headline: 'People Mover Remains Closed After Obstruction on Tracks Identified as the People Mover',
    deck: "DDOT investigators confirm the 2.9-mile loop continues to threaten its own operations. Officials 'cautiously optimistic' structure will clear itself by Thursday",
    section: 'local',
    featured: false,
    frontPage: true,
    byline: 'By Staff Reporter',
    date: 'May 6, 2026',
    lede: 'The Detroit People Mover will remain closed through at least Thursday afternoon after transportation officials determined that the foreign object suspected of disrupting service on the downtown elevated rail loop was, in fact, the People Mover itself, sources confirmed this morning.',
    body: `<p>The Detroit People Mover will remain closed through at least Thursday afternoon after transportation officials determined that the foreign object suspected of disrupting service on the downtown elevated rail loop was, in fact, the People Mover itself, sources confirmed this morning.</p>
<p>Crews from the Detroit Transportation Department were dispatched to the elevated guideway shortly before noon following automated reports of an "unidentified obstruction" interfering with the transit system's operations. After a three-hour inspection, investigators concluded that the obstruction and the transit system were one and the same entity.</p>
<p>"We found the debris," said DTD spokesperson Terrence Okafor at a press conference outside the Washington Boulevard station, gesturing vaguely at the entire train. "It's — right there. It's been there since 1987."</p>
<figure style="float: left; margin: 0.2em 1.6em 1em 0; max-width: 290px;"><img src="images/people-mover-sign.jpg" alt="Detroit People Mover station sign" style="width: 100%; display: block;"><figcaption style="font-family: 'Barlow Condensed', sans-serif; font-size: 0.6rem; letter-spacing: 0.07em; text-transform: uppercase; color: var(--muted); margin-top: 6px; line-height: 1.55;"><span style="display: block; font-family: 'IM Fell English', serif; font-style: italic; font-size: 1.3em; text-transform: none; letter-spacing: 0; color: var(--ink); margin-bottom: 5px;">"I'm surprised this piece of shit still moves."</span>— Unnamed DTD technician, speaking off the record and also openly into a microphone.</figcaption></figure>
<p>The People Mover, which opened in 1987 at a construction cost of $200 million and has spent the subsequent four decades in an operational state of "busted up," serves approximately 2,500 riders on a good day, all of them tourists trying to get to Greektown and one guy named Carl who insists it's faster than walking.</p>
<p>According to the incident report, an automated sensor flagged an "anomalous load-bearing event" at 11:47 a.m. when one of the system's three operating railcars attempted to complete its circuit at full speed — approximately 29 miles per hour — and encountered resistance from a section of track described in the report as "present." Engineers on site initially theorized the cause could be debris, ice buildup, or quote "the spirit of the exhausted infrastructure itself."</p>
<p>Federal Transit Administration guidelines require service suspension any time a foreign object is detected on the guideway. It took officials until approximately 2:15 p.m. to formally rule out the possibility that the People Mover was not a foreign object and was instead a transit system, at which point they ruled it back in.</p>
<p>"Under federal definitions, anything on the track that shouldn't be there constitutes a hazard," Okafor clarified. "We're working with legal to determine whether the People Mover constitutes something that should be there. This is genuinely unresolved."</p>
<p>City Councilmember Deborah Whatley, reached by phone, called the incident "par for the course" and said she had long suspected the People Mover was its own worst enemy. "We've spent thirty years asking who's responsible for this thing," she said. "I think today speaks for itself."</p>
<p>The DTD says it expects to resume partial service once engineers complete a "philosophical assessment" of whether the People Mover's continued existence on its own tracks constitutes a maintenance issue or a policy decision. A public meeting on the matter has been scheduled for a date to be announced at a meeting to be scheduled.</p>
<p>In the meantime, officials are encouraging downtown commuters to consider alternative transit options, including "walking your fat ass there," and "just not going wherever you were going."</p>
<p>The People Mover could not be reached for comment, as it was being pried from the tumble barriers of the main railway following a station reentry that came in a little too hot. There were no injuries since no sports fans were there to ride the People Mover past their car, in order to get to their car.</p>
<p><em>Editor's Note: An earlier version of this article referred to the People Mover as a "light rail system." The MCM regrets the implication that the People Mover is light. It is heavy. Heavy with regret, debt, and the weight of a failed infrastructure.</em></p>`,
    image: 'images/people-mover.jpg',
    imageCaption: 'A People Mover railcar transits the 2.9-mile elevated loop above downtown Detroit. Investigators confirmed Wednesday that the obstruction interfering with operations was the People Mover itself.'
  },
  {
    id: 'hormuz-alternate-lifestyle',
    headline: 'Strait of Hormuz Considers Alternate Lifestyle',
    deck: "The geopolitical flashpoint connecting the Persian Gulf to the Gulf of Oman says it appreciates everyone's concern but would like a few weeks where no one leaves mines in it.",
    section: 'world',
    featured: false,
    frontPage: true,
    byline: 'By Staff Reporter',
    date: 'May 3, 2026',
    lede: "The Strait of Hormuz, the 38-mile-wide waterway at the center of escalating U.S.-Iran tensions, says it has been doing some thinking.",
    body: `<p>The body of water, 38 miles wide at its narrowest point, says it has been doing some thinking a lot lately.</p>

<p>The back and forth between the United States of America, chiefly represented by the Commander in Chief there, Donald Trump, and the middle East wild child, Iran, whose representative's name this news agency was not able to pronounce, nor did it care to learn, has dominated news headlines. But sources close to the Strait of Hormuz say the Strait itself, long presumed to be straight, is no longer sure.</p>

<p>"It's been a very confusing few months," the Strait told MCM, in an exclusive interview conducted via buoy and life preserver. "Everyone keeps yelling about me. Nobody has actually asked me how I'm doing, or how I feel."</p>

<p>The Strait, which has connected the Persian Gulf to the Gulf of Oman since approximately the Pliocene Epoch, said the geopolitical attention has given it space to reflect. "I've been a Strait my whole life. And, I mean, I've been called straight. I never picked the name." It paused. "When you really sit with it, what does that even mean for a body of water like me?"</p>

<p>Meanwhile, the conflict, which has seen both sides spewing hilarious rhetoric and terrifying threats, has sent gas prices skyrocketing to a staggering 4.89 a gallon in metro Detroit, and your broke-ass coworker to resort to riding his bike into work every morning—because who can afford both the gas prices <em>and</em> their health insurance copay for a herniated disc?</p>

<p>Trump, asked about the development at a press conference Tuesday, said the Strait had "always seemed a little fruity" to him personally, and that America had the "best straits. Frankly, much better straits," though he did not specify which straits he was referring to.</p>

<p>The Iranian representative (who may or may not be the same guy as last week, we really aren't sure) was more measured in his statements, reading in part, "We respect the Straits process. We have always had a complicated relationship with it, but that is between us and the Strait."</p>

<p>The Bosphorus, reached for comment, said it was "honored" the Strait had felt comfortable enough to share, and offered to talk anytime. The Panama Canal, famously bi-directional, declined to comment, but was described as "extremely supportive in private" by sources. The English Channel did not return any calls.</p>

<p>The Strait said it was not yet ready to label itself. "I might be gay. I might be something else. I might just be a strait, you know? A geological feature with a lot going on." It added that it would appreciate, if at all possible, a few weeks where no one left mines in it.</p>

<p>At press time, oil tankers continued to pass through the strait at a rate of roughly twenty-one million barrels per day, each one, the Strait noted softly, "just kind of going through me without even asking." Despite the intrusion, the strait has kept its spirits alive, reportedly reading Maggie Nelson and exploring alternative interests that it felt obligated to ignore in the past.</p>`,
    image: 'images/hormuz.jpg',
    imageCaption: 'Satellite view of the Strait of Hormuz, connecting the Persian Gulf to the Gulf of Oman. At its narrowest point, 38 miles wide — which the Strait says it did not choose.'
  },
  {
    id: 'seuss-hard-time-rhymes',
    headline: "Dr. Seuss' Long Awaited Prison Pennings, \"Hard Time Rhymes,\" Takes Top Spot",
    deck: "A collection of verse written in crayon, toothpaste, and fermented Kool-Aid ink has finally cleared the legal system. Critics are calling it a masterwork. Texas has already banned it.",
    section: 'trending',
    featured: false,
    frontPage: true,
    byline: 'By Staff Reporter',
    date: 'April 28, 2026',
    lede: "A collection of formerly unknown works penned by the late children's author has been released after a vicious, labyrinthine legal standoff regarding the manuscript's ownership rights dragged on for over half a year.",
    body: `<p>SPRINGFIELD, MA — A collection of formerly unknown works penned by the late children's author has been released after a vicious, labyrinthine legal standoff regarding the manuscripts ownership rights dragged on for over half a year.</p>
<p>At its core: a three way tug-of-war between the Seuss estate (still reeling from the PR disaster of "Green Eggs &amp; Meth"), the Federal Bureau of Prisons (claiming intellectual property rights due to "crayon misuse on government-issue paper"), and the famed authors longtime cellmate, who alleges to have co-written a bulk of the poems with Seuss while getting high.</p>
<p>The resulting court battle—<em>Seuss et al. v. United States v. Inmate 442991-B ("Sticky Mick")</em>—quickly garnered national attention. The final ruling? Release the work "on the condition that none of it be set to music, tattooed on minors, or adapted into a Broadway musical without explicit consent from both the estate and the ghost of Dr. Seuss."</p>
<p>According to court documents unsealed late last week, Dr. Seuss quietly served a three-year sentence in the mid-1960s after a misunderstood barfight at a Yale alumni mixer escalated into what one witness called "an unhinged display of insane carnage."</p>
<p>His prison years, long buried by publishers and family-friendly PR machines, were apparently prolific. The newly revealed collection, <em>Hard Time Rhymes: The Incarcerated Imaginings of Dr. Seuss</em>, includes over 40 original, unseen poems and short stories written in crayon, toothpaste, and fermented Kool-Aid drink ink.</p>
<p>"This rewrites everything we thought we knew," said Dr. Penny Greaves, Chair of the American Seussological Society. "Like, literally."</p>
<p>Among the most notable entries are:</p>
<p><strong>Pop the Socket</strong><br>
<em>"I found me some lead and I found me a wire,<br>
Then Jimmy and I set the toilet on fire.<br>
We sparked it, we smoked it, we puffed it, we grinned—<br>
'Til the Warden came in and we both got skinned."</em></p>
<p>This poem, clearly based on Seuss's experience with improvised prison smoking devices, has already been interpreted as a gritty allegory for man's eternal struggle against institutional conformity—and a tutorial.</p>
<p><strong>Feeding the Warden</strong><br>
<em>"I sat on the seat and I stared at the door,<br>
The toilet was near, the stench was hardcore.<br>
I grunted and frowned, and I gave it my all,<br>
I fed him so much, he ain't hungry, naw-maw."</em></p>
<p>Believed to be written during a three-day stint in solitary confinement, this piece delves into the deeply personal experience of public defecation in a shared cell, exposing what the New York Times has called "a raw honesty rarely seen outside of Yelp reviews for bad Chinese buffets."</p>
<p><strong>Lock in Sock</strong><br>
<em>"You can knock him in the nook,<br>
You can rock him by the book.<br>
You swing it left, you swing it right,<br>
And hope the guard is out of sight!"</em></p>
<p>Critics are divided: some argue this last is a metaphor for class warfare, while others say it's just really good advice.</p>
<p>Though the Seuss estate initially denied the manuscripts' authenticity, a spokesperson has since backpedaled, stating: "While we do not condone violence, institutional corruption, or prison shanking, we do acknowledge Mr. Seusses right to creative expression during his federal detainment."</p>
<p>Already, major streaming platforms are in a bidding war to adapt <em>Hard Time Rhymes</em> into an animated limited series. Rumored voice castings include Danny DeVito as the voice of Dr. Seuss, Ice-T as Warden McGrew, and Cardi B as the voice of the Toilet.</p>
<p>Meanwhile, school districts across Texas have preemptively banned the book, despite it not being officially published. "We don't want our children reading about locks in socks," said one concerned parent. "Unless it's in a responsible, Jesus-approved way."</p>
<p>Upcoming titles in the collection also include:</p>
<p><em>The Grinch Who Made a Shank From a Spoon</em><br>
<em>Horton Hears a Snitch</em><br>
<em>Yertle the Tank (A re-imagined Homemade Tattoo Guide)</em>, and,<br>
<em>Oh, the Parole You'll Blow!</em></p>
<p>Academics and prison rights activists alike see this lost work as a bridge between two worlds: the pastel absurdity of Seuss's childhood empire and the brutal absurdity of mass incarceration. Or, as one inmate at Jackson State Prison put it: "It rhymes. It's true. It's messed up. Love it."</p>
<p>Dr. Seuss, it turns out, could write from anywhere. Even Cell Block D.</p>`,
    image: 'images/seuss.png',
    imagePosition: 'center 50%',
    imageCaption: 'Proposed cover art for The Grinch Who Made a Shank From a Spoon, the upcoming spinoff title. The estate has not commented.'
  },
  {
    id: 'kwame-kilpatrick-2029',
    headline: "Kwame Kilpatrick Announces 2029 Mayoral Bid, Promises 'A Second Chance For All Of Us'",
    deck: 'Former mayor, federal inmate, and spiritual reclamation project announces early, very early, against incumbent Sheffield',
    section: 'politics',
    featured: false,
    frontPage: true,
    byline: 'By Staff Reporter',
    date: 'April 4, 2026',
    lede: 'Former Detroit mayor, federal inmate, and philanderer-in-general, Kwame Kilpatrick, has officially entered his bid for mayor in the upcoming 2029 election, which he is already calling "The Comeback Season" on social media.',
    body: `<p>DETROIT. Former Detroit mayor, federal inmate, and philanderer-in-general, Kwame Kilpatrick, has officially entered his bid for mayor in the upcoming 2029 election, which he is already calling "The Comeback Season" on social media.</p>
<p>"If redemption is real, then so is my candidacy," he said, speaking before a modest crowd outside the Coleman A. Young Municipal Center on Sunday afternoon.</p>
<p>Flanked by several local pastors, wife Carlita Kilpatrick, and a sound system rented from a pawn shop, Kilpatrick appeared energized, confident, and unbothered by the 24 felony convictions that once derailed his career.</p>
<p>"Prison taught me a lot," Kilpatrick said. "Like how to lead from the inside, how to forgive the justice system, and how to properly fill out a resume without lying."</p>
<p>The announcement landed on Mayor Mary Sheffield the way most unexpected things do: while she was doing something extremely mayoral and completely unglamorous. She had just returned from a ribbon-cutting at a repaved stretch of Gratiot Avenue. Four months into her first term, she had a functioning voicemail system at City Hall, a pending agreement with the water department, and absolutely no bandwidth for this.</p>
<p>What followed was not the measured, statesman-like response of a sitting mayor. It was something closer to a controlled collapse. Within the hour, Sheffield was at a podium outside City Hall, visibly recalibrating. "No shade," she told reporters, "but I too have made mistakes. Once drove 49 in a 35." She later tweeted "Just keeping it 💯 🔥," and by evening had posted a TikTok in which she accepted what she was calling the #FelonyEnergy challenge, disclosing, without further elaboration, that she once walked out of a Target with a full cart on a broken self-checkout receipt and "never once looked back."</p>
<p>Her communications director described the pivot as "authentic brand recalibration in a dynamic civic moment." Others described it as a panic spiral broadcast in real time to 40,000 followers.</p>
<p>By nightfall, Sheffield's office released a more formal statement: "Mayor Sheffield welcomes a spirited democratic process and looks forward to running on her record. She also respectfully requests that anyone considering a mayoral bid please wait until she has, at minimum, finished repaving Gratiot Avenue."</p>
<p>Kilpatrick, for his part, appeared delighted. He has that particular quality of a man who has survived federal prison and emerged somehow more confident, more charismatic, and considerably more moisturized than before he went in.</p>
<p>Now a self-described faith leader and reformed public servant, he spent much of his campaign kickoff underscoring the concept of "spiritual parole," calling his time in prison "a divine internship." He cited his founding of two Bible study groups, a prison-wide recycling initiative, and his work teaching a financial literacy class, titled From Restitution to Reinvestment, as proof of his "rehabilitative excellence."</p>
<p>"God gave me a vision," Kilpatrick said. "And that vision was Detroit. Again."</p>
<p>Despite objections from ethics watchdogs and people who remember things, Kilpatrick's campaign quickly gained momentum on social media, buoyed by endorsements from an eclectic roster of controversial supporters, including former New York Governor Andrew Cuomo, rapper Boosie Badazz, and the felonious dynamo herself, Martha Stewart.</p>
<p>"He did his time," Stewart tweeted. "Now let him cook!"</p>
<p>While critics have raised questions about the legality of his run, Kilpatrick insists he is fully within his rights and cites Donald Trump's 2024 conviction and subsequent successful campaign to the presidency as inspiration.</p>
<p>"If a felon can run for president, surely I can run this city again, especially since I still remember the Wi-Fi password at City Hall," Kilpatrick said. "And I promise not to steal any money this time."</p>
<p>Mayor Sheffield, reached for comment on the Wi-Fi remark, said only: "We changed it."</p>`,
    image: 'images/kilpatrick.jpg',
    imageCaption: 'Kilpatrick greets supporters outside the Coleman A Young municipal Center Sunday. Kilpatrick says he has forgiven the justice system and is ready to lead Detroit again.'
  },
  {
    id: 'east-side-glow-up',
    headline: "East Side Neighborhood's Big Glow Up Signals Bright Future",
    deck: 'Regent Park is booming. Longtime residents are being gently redirected toward opportunity elsewhere.',
    section: 'local',
    featured: false,
    frontPage: false,
    byline: 'By Staff Reporter',
    date: 'March 30, 2026',
    lede: "After decades of disinvestment and economic stagnation, Regent Park is finally getting the attention many say it has long deserved: a slate of new developments, a wave of newcomers from Chicago, Ferndale, and \"the creative class diaspora,\" and a barbershop that now charges $70 a cut.",
    body: `<p>After decades of disinvestment and economic stagnation, Regent Park, the East Side neighborhood gem, is finally getting the attention many say it has long deserved. With a slate of new developments underway and a wave of newcomers arriving from Chicago, Ferndale, and "the creative class diaspora," local leaders are calling it a turning point for the neighborhood.</p>
<p>"Regent Park is no longer a secret," said Erin Langston, Director of Urban Partnerships for Forward Detroit, a nonprofit affiliated with seven real estate investment firms. "It's a canvas of opportunity, and we're excited to see what happens when innovation meets, er, legacy."</p>
<p>The neighborhood, located between Kelly and Gratiot and bounded by Seven and Eight Mile Roads to the north and south, is now home to several new "mixed-use enclaves," replacing what used to be empty lots, auto shops, and homes where families have had the audacity to live for generations.</p>
<p>"This area has so much soul," said Becca Sorensen, a freelance UX healer and recent transplant from Kalamazoo. "You can just feel the authenticity when you step outside and see, like, actual struggle. It's been so inspiring for my vision board."</p>
<p>"We saw so much raw character here," said Shayne, the 29-year-old Creative Director of an alpaca-skin shoe-and-rescue company and recent arrival to the area. "There was a tent encampment being cleared from the park, a taco truck just down the street, and I thought: this is where I want to raise my emotional support corgi."</p>
<p>His partner, Harper (pronouns: gentry/gentryself), agreed. "We just felt called to give back. So we opened an artisanal dog treat apothecary in what used to be the rec hall. It's called Woof Justice, because every pup deserves ethical snacks."</p>
<p>Already, signs of economic rebirth abound. The laundromat is now a salt cave offering "urban cleansing experiences." The chicken shack is now a chicken concept restaurant where single wings cost $14. And the corner liquor store has partnered with a wellness startup to sell $18 bottles of "Detroit-Style Water," which is just tap water in mason jars with inspirational quotes about resilience.</p>
<p>The neighborhood barbershop, once a cornerstone of community life, has been rebranded as a "heritage grooming speakeasy." Cuts start at $70 and include a complimentary oat milk cortado and unsolicited podcast recommendations about entrepreneurial mindfulness.</p>
<p>Developers insist that longtime residents are not being pushed out, but gently redirected toward "alternative housing solutions," including relocation grants worth approximately three months of groceries and digital vouchers for future residency in neighborhoods "with similar character-building challenges."</p>
<p>"We're very conscious of maintaining the culture here," said Mark Lennox, project manager for Revive East, LLC. "That's why a full 8% of all new units are designated as affordable, for households making only $65,000 a year."</p>
<p>"I've lived here thirty years. I used to know everyone on this block," said Deborah McCaskill, a retired postal worker whose home is now flanked by two short-term rentals and a boutique that sells $42 socks. "Now I can't afford to shop at the grocery store they built for us."</p>
<p>City Councilmember Zachary Bell praised the transformation at a recent community meeting held at 2 PM on a Tuesday. "We see Regent Park as a model of inclusive prosperity," Bell said during a ribbon-cutting for an all-electric silent streetcar that will run exactly two blocks.</p>
<p>"This isn't gentrification," said Mayor Mary Sheffield while breaking ground on the ninth micro-loft development. "This is opportunity. This is prosperity. This is us finally catching up to the property values of Portland." She closed the ceremony by tossing a commemorative eviction notice into the air.</p>
<p>So get excited, neighbors. Transformation isn't just coming to your block. It's coming for your block. And when you're priced out, take comfort in knowing: you helped make it cool enough for someone else. Your authenticity has been successfully harvested. Your job is finished. We'll take it from here.</p>
<p><em>Correction: An earlier version of this article stated that no residents were displaced. In fact, 62 homes were "de-prioritized for occupancy" to make room for a pet-friendly sculpture park featuring abstract art.</em></p>`,
    image: 'images/east-side-glow-up.jpg',
    imageCaption: 'Regent Park block captains and community volunteers canvass the neighborhood. Experts say their high-visibility vests are either a safety precaution or a sign of something.'
  },
  {
    id: 'trans-nuns-tour',
    headline: 'Trans Nuns To Tour United States, European Show Dates Considered',
    deck: "Billed by evangelicals everywhere as 'the literal end of times,' the Sisterhood hits 30 cities",
    section: 'world',
    featured: false,
    frontPage: false,
    byline: 'By Staff Reporter',
    date: 'March 25, 2026',
    lede: "With a performance being billed by evangelicals everywhere as \"the literal end of times,\" the Sisterhood of the Trans Nuns, a fully transgender order of Catholic nuns, is stunning crowds and angering believers across America.",
    body: `<p>Lubbock, Texas. With a performance being billed by evangelicals everywhere as "the literal end of times," the Sisterhood of the Trans Nuns, a fully transgender order of Catholic nuns, is stunning crowds and angering believers across America. The Sisters kicked off their jaw-dropping 30-city tour across the country this week in Lubbock, Texas, with prayer, pageantry, prosthetics, and prophecy.</p>
<p>Founded in 2011 by Superior Mama T-Reesa, a retired HVAC technician, the Sisterhood began as a fierce clap-back to the Vatican's long-standing "Don't Ask" policy. But don't ask what, exactly?</p>
<p>"And that's the whole point of our show," a make-up-sporting transvestite cheese-balls to the crowd from atop her trapeze where body-builder types in speedos flex and slap it on the thighs. This is just the opening act. Critics are calling it "an affront to God" and fans are calling it "a full-frontal spirit journey into indoctrinating the world to our big loud queer lives."</p>
<p>The group, previously known as The Order of the Immaculate Misconception, has since rebranded, received 501(c)(3) status, and now counts over 50 fully professed nuns, each one a transgender woman who has undergone full gender reassignment surgery and passed a rigorous theological exam involving Leviticus, Latin, and a live lip-sync performance of Madonna's "Like a Prayer."</p>
<p>Contrary to popular belief, Mama T-Reesa said, "You do not automatically become a Nun if you were a priest when you transitioned. You gotta start all over from scratch. Which is so unfair. But we're working extra hard to have that tradition defiled as well."</p>
<p>"We're not just men in wigs," said Merry, one half of the performing duo Merry &amp; Martha, known for their interpretive dance number "Anointing of the Blessed Feet," at a press conference outside Planned Parenthood. "We're women of God in wigs. With documentation, mind you."</p>
<p>Further incensing the devout, the Sisterhood has canonized their own patron saint: Saint Barbarella the Bearded, a 3rd-century Anatolian dancer who kept a finely groomed beard and lived to be 108. Skeptics question the historical accuracy of Saint Barbarella, noting the lack of documented evidence and the close resemblance to the Bratz Doll, a toy popular in the early 2000s among young girls, and boys who knew a good contour when they saw one.</p>
<p>"The Bible says God created man and woman in his image," said Sister Chardonnay. "Then we said, 'Thanks, God, we'll take it from here!'"</p>
<p>The national "Transubstantiation Tour 2026" features nightly vespers, educational panels on queer theology, and a closing number called "He Ascended and So Have We." Audience members receive spritz bottles of holy water and laminated pronoun rosaries.</p>
<p>The group of gals has performed at churches, community centers, drag bars, and one abandoned mall in Phoenix where they baptized three Hot Topic employees.</p>
<p>Progressive Christians, secular liberals, and confused theater kids have shown their support for the Sisters, while conservative backlash to the performances has been swift. "This is blasphemy!" one Texas State Senator shouted, asking to remain anonymous, but was easily identified by his "Make Mary Virgin Again" bumper sticker. "Jesus never wore heels!"</p>
<p>To which, Sister Persephone-with-an-F responded: "Not in the Bible, maybe, but honey, he walked on water. Where do you think he learned balance like that?"</p>
<p>Despite the backlash, the Sisterhood's mission remains firm: to offer radical hospitality to all, pray for the souls of TERFs, and bake a deliciously edible communion wafer. Their convent, located in a refurbished Sephora outside of Nashville, is open to pilgrims, seekers, and anyone who has ever been told they were too much for church, but too spiritual for the club.</p>
<p>"People think we're mocking God," said Mother Valerie, adjusting her rhinestone crucifix. "But look at us. We left everything behind to serve something greater. That's not mockery. That's faith. Also," she added, "our choir's harmonies could make angels weep. Don't test us."</p>
<p>Whether seen as heresy or holiness, the Sisterhood of the Trans Nuns have forced America to reconsider what it means to be sacred. Their very existence is a sermon, one in full glam, with receipts, and likely to end in a standing ovation, and a confession.</p>
<p>So, if you hear the heavenly sound of "Like a Prayer" echoing down your local megachurch corridor, it might just be the Sisters come to town.</p>
<p><em>Editor's Note: As this article went to press, Sister Merry was seen outside the Lubbock venue, blessing protesters with holy water from a bedazzled Super Soaker. When asked if this was appropriate, she replied: "Bless them that curse you, honey. It's literally in the book."</em></p>`,
    image: 'images/trans-nuns.png',
    imageCaption: 'A member of the Sisterhood performs during the Transubstantiation Tour 2026 opening night in Lubbock, Texas.'
  },
  {
    id: 'hillary-clinton-fleetwood-mac',
    headline: 'Hillary Clinton: "Fuck it!" Announces 2028 Bid From the VIP Section of a Megan Thee Stallion Concert',
    deck: "Hot Girl Summer. Hot Girl Campaign.",
    section: 'politics',
    featured: false,
    frontPage: false,
    byline: 'By Staff Reporter',
    date: 'March 22, 2026',
    lede: 'In a move that has sent confusion (and an unsettling amount of respect) across the political landscape, former First Lady, Senator, Secretary of State, woman-scorned, and two-time-almost-but-absolutely-not-President Hillary Rodham Clinton has once again declared her intention to seek the nation\'s highest office.',
    body: `<p>Detroit, Michigan. In a move that has sent confusion (and an unsettling amount of respect) across the political landscape, former First Lady, Senator, Secretary of State, woman-scorned, and two-time-almost-but-absolutely-not-President Hillary Rodham Clinton has once again declared her intention to seek the nation's highest office. The announcement, sources confirm, came midway through the third verse of "Savage" at a Megan Thee Stallion concert at Little Caesars Arena in Detroit, approximately eighteen months after watching the party hand the nomination to someone else and lose, which, apparently, was all the sign she needed.</p>
<p>"She was in the VIP section, which should tell you something, because the VIP section was surrounded by women half her age in outfits that are technically legal," said a Little Caesars Arena security guard who asked to remain anonymous. "She had a glass of chardonnay in one hand, her phone in the other, and about midway through the show she just stood up, raised the glass, and said, 'You know what? Fuck it. I'm doing it.' I thought she meant the dancing." He paused. "She did also do the dancing."</p>
<p>The news comes as a surprise to absolutely no one. After decades in the public eye, numerous "I'm not running" pronouncements, a 2024 spent conspicuously posting on social media from a Chappaqua living room while visibly watching cable news, and a political career that reads like a dramatic historical fiction novel, Clinton's re-entry into the presidential fray was less a thunderbolt and more a familiar creak in the floorboards of American politics. What is surprising is the venue.</p>
<p>"I've covered a lot of political announcements," said Dr. Eleanor Vance, a professor of Political Science at the University of Bupkiss Online. "Rallies, press conferences, town halls. I have never seen one made during a Megan Thee Stallion concert, in a VIP section, over a chardonnay. She has genuinely unlocked something new. I'm not even mad. I'm taking notes."</p>
<p>Sources close to the Clinton camp indicate that the 2028 campaign slogan is currently being workshopped. Early contenders include: "I Was Always Going to Do This," "You Should Have Picked Me When You Had the Chance," the more subdued "Fine. Again." and, in a late entry widely believed to have started as an internal joke and then just kept going, "Hot Girl Election."</p>
<p>The Republican National Committee, meanwhile, issued a press release consisting of four and a half minutes of uninterrupted laughter, followed by a single sentence: "We would like to formally thank Hillary Clinton."</p>
<p>The small but persistent Hillary camp floated several campaign promises when pressed by reporters. Among them: a renewed commitment to "emails, probably," a promise to finally reveal the location of "that missing server, possibly" during a prime-time televised séance, and a vow that future policy announcements would continue to be made "wherever the energy is right." When asked if that meant more concerts, a campaign spokesperson said, "We're not ruling anything out." When asked specifically about a Cardi B show in Cleveland, the spokesperson said, "We're not ruling anything out."</p>
<p>The Democratic party's reaction has been a mixture of weary resignation, existential dread, and something that on a good day resembles dark comedy. "Look," sighed one Democratic official, who declined to be named. "She watched us lose and she's back inside of two years, announcing at a Megan Thee Stallion concert. What does that tell you?" They stared into the middle distance. "I genuinely don't know what that tells you. I used to know things. Don't print that last part."</p>
<p>As the nation braces itself for another cycle of Clintonian intrigue, one thing remains certain: the 2028 election just got a lot more familiar, and somehow, inexplicably, a little bit hotter. Hillary Clinton has been here the whole time. She just needed the right playlist.</p>`,
    image: 'images/hillary-clinton.jpg',
    imageCaption: 'Clinton acknowledges the crowd at a recent appearance. Witnesses say the energy was, quote, "concerning in a new way."'
  },
  {
    id: 'harris-detroit-speech',
    headline: 'Harris Addresses Detroit Crowd, Unveils New Plan for Black Men: "Just, Like, Really, Really Be Yourself, You Know?"',
    deck: 'Former VP shows up, unprompted, with thoughts',
    section: 'politics',
    featured: false,
    frontPage: false,
    byline: 'By Staff Reporter',
    date: 'March 20, 2026',
    lede: "Former Vice President Kamala Harris took to a makeshift podium in downtown Detroit on Tuesday, addressing an assembled crowd in an appearance that, sources confirm, nobody quite arranged and nobody quite requested.",
    body: `<p>Detroit, MI. Former Vice President Kamala Harris took to a makeshift podium in downtown Detroit on Tuesday, addressing an assembled crowd in an appearance that, sources confirm, nobody quite arranged and nobody quite requested.</p>
<p>"I've been practicing this all week," she announced, her voice echoing slightly off the surrounding buildings, "and I'm, like, super ready to share my… insights."</p>
<p>The crowd, a mix of curious locals and bewildered tourists, seemed unimpressed by the spectacle, shifting uncomfortably as Harris launched into a series of vaguely motivational phrases that sources close to the former VP say were "not connected to any specific initiative, platform, or upcoming election (at the moment)."</p>
<p>"We're talking about… possibilities," she declared, her hands tracing abstract shapes in the air. "And, you know, the thing about possibilities is… they're like, possible."</p>
<p>Harris unveiled what her team is calling her "new plan for Black men," a policy initiative reportedly in development for "a while, like, a really long while," and now being presented to the general public approximately eight months after losing a presidential election.</p>
<p>"My plan," she began, her voice dropping to a dramatic whisper, "is for Black men to… just, really, really be themselves, you know? Like, authentically. Because, that's, like, super important."</p>
<p>One attendee, a local barber named Tyrone, told The Motorcity Mouth: "I mean, I'm already me. What else am I supposed to be? A dolphin?"</p>
<p>The plan involved a series of vague directives, including: "Embrace your essence," "Find your inner you," and "Just, like, vibe, man." The former vice president also emphasized the importance of "self-care," which she clarified meant "like, you know, doing things that make you feel good, like, maybe getting a massage, or eating a really good sandwich."</p>
<p>Harris' office released a statement clarifying that the remarks were "part of a broader initiative to promote self-actualization and general good vibes" and that she "remains committed to the American people, in whatever capacity presents itself."</p>
<p>Political analysts were left scratching their heads. "It's like she's trying to communicate through dance, but with words. And, you know, it's something," said one observer who asked not to be identified as having watched the entire speech.</p>
<p>The event concluded with Harris waving enthusiastically to the crowd, already confirmed for a similar appearance in Cleveland next week, and one question lingered in the air: what, exactly, had just happened? And when, if ever, would it stop?</p>`,
    image: 'images/harris.jpg',
    imageCaption: 'Harris greets the impromptu crowd outside the Applebee\'s on Jefferson Avenue Tuesday, following a light lunch. The Applebee\'s, located inside the Courtyard by Marriott (yes, there is one), has not been visited by a single Detroit local since it opened.'
  },
  {
    id: 'holy-shit-discovered',
    headline: 'Holy Shit Discovered',
    deck: 'Ancient relic believed to be the last bowel movement of Jesus Christ; Last Supper menu finally confirmed',
    section: 'world',
    featured: false,
    frontPage: true,
    byline: 'By Staff Reporter',
    date: 'March 18, 2026',
    lede: "The Vatican. An ancient artifact discovered this week is believed to be the last bowel movement of Jesus Christ, currently encased in a special temperature-controlled, bullet-proof glass box at the Vatican.",
    body: `<p>The Vatican. An ancient artifact discovered this week is believed to be the last bowel movement of Jesus Christ. Currently encased in a special temperature-controlled, bullet-proof glass box in the Vatican, ancient texts led archaeologists to the location of what is being called the greatest archaeological discovery since the tomb of Egypt's King Tutankhamen was uncovered in 1922 by archaeologist Howard Carter.</p>
<p>Biologists at the University of Oxford, Cambridge, say they've analyzed the newest addition to the Catholic Church's trove of sacred relics and determined the actual meal served at the Last Supper. Researchers discovered trace evidence of a clam chowder soup, petite filet mignon, and breadsticks from the Olive Garden.</p>
<p>The artifact is remarkably preserved, having remained intact for nearly two thousand years. It is brown in color with minute green patches throughout, preserved in an impressive 6.7-inch coil with a diameter of 2.3 inches at its thickest point. According to Pope Francis, who has spent many hours with the sacred relic since its discovery, it is completely scentless.</p>
<p>He says he has prayed over the load and hopes it will encourage people of all faiths, beliefs, and backgrounds to acknowledge the glory and power of Christ, and believes the discovery will bring more souls to accept Jesus Christ as their savior.</p>
<p>"That's what it's all about," Pope Francis said Wednesday, during a special worldwide mass. "Showing the world and those who doubt that Jesus was the Son of God, God in the flesh, and just like us, he pooped."</p>
<p>Millions are expected to travel to see the relic in person, which is on display for a small, suggested donation.</p>`,
    image: 'images/holy-shit.jpg',
    imageCaption: 'The relic, encased in bullet-proof glass at the Vatican, has drawn millions of visitors since its discovery. A small, suggested donation is requested.'
  },
  {
    id: 'seniors-dairy-queen',
    headline: 'Seniors Born 1939–1969 Can Now Receive 11 Benefits This Month, But Only If They Ask',
    deck: 'The state has benefits waiting for eligible seniors. The state would also like seniors to find the form, make the call, and stay on hold.',
    section: 'trending',
    featured: false,
    frontPage: true,
    byline: 'By Staff Reporter',
    date: 'March 12, 2026',
    lede: "According to a new report from the Michigan Department of Elder Resource Allocation, adults born between 1939 and 1969 are currently eligible for up to eleven monthly benefits, most of which require a form, a phone call, a follow-up phone call, and a level of institutional patience typically found only in people who have already survived the Secretary of State.",
    body: `<p>Detroit seniors may be sitting on more than they realize. Or they may not be. It depends heavily on their ability to navigate a state benefits portal that was last updated in 2017 and still recommends Internet Explorer.</p>
<p>"People assume they're already getting everything they're owed," said Regional Benefits Coordinator Darlene Whitfield-Hayes. "But most seniors we talk to are only claiming three, maybe four. That leaves seven or eight benefits just sitting there, waiting for someone patient enough to stay on hold through the entire runtime of a Tyler Perry movie."</p>
<p><strong>Benefit #1: DTE Senior Comfort Credit.</strong> A $9.40 monthly credit applied to residential DTE accounts. To enroll, seniors must call the Senior Rate Helpline (Monday, Wednesday, and Friday, 10 AM–11:30 AM), provide their account number, Social Security number, and the PIN created during the 2014 account migration. Current average hold time: 47 minutes. "It's worth it," Whitfield-Hayes said, without elaborating.</p>
<p><strong>Benefit #2: DDOT Priority Boarding Card.</strong> A laminated green card granting priority boarding on DDOT buses. Drivers are not required to honor it. "We encourage it," said a DDOT spokesperson, who declined to say how strongly.</p>
<p><strong>Benefit #3: Secretary of State Skip-Ahead Voucher.</strong> One use per year. Skips the cardholder ahead of approximately eleven people in line at any Secretary of State location. Current average wait time at Detroit offices: two hours and seventeen minutes. "It's something," Whitfield-Hayes confirmed.</p>
<p><strong>Benefit #4: Eastern Market Senior Hour.</strong> The first Saturday of each month, registered seniors receive priority access to Eastern Market vendors from 7 to 8 AM. "Most of them were already there," one vendor told The Motorcity Mouth. "They were there before we were. They helped us set up. One of them knew where the extension cord goes."</p>
<p><strong>Benefit #5: Coney Dog Dignity Voucher.</strong> One free Coney dog per month, redeemable at either Lafayette Coney Island or American Coney Island. Not both. You must choose. "People think choosing will be fast," said program administrator Terrence Boudreaux. "It is not fast. We have had seniors standing at that intersection for forty-five minutes. We do not rush them. That's dignity."</p>
<p><strong>Benefit #6: Belle Isle Open Water Swim Voucher.</strong> One complimentary entry per month to the Belle Isle Open Water Swim, a supervised 400-meter course held in the Detroit River. Water temperature in April: 41 degrees. Wetsuits are not provided but are, per the waiver, "strongly advised." "It's invigorating," said volunteer coordinator Brent Malloy. "We've had a lot of signups." When asked about completion rates among participants over 70, Malloy said he didn't have those numbers in front of him.</p>
<p><strong>Benefit #7: Adult Parkour Fundamentals (Free Enrollment).</strong> A six-week introductory course at Movement Lab Detroit covering basic vaulting, precision jumping, and what the syllabus describes as "flow movement through urban environments." The facility is on the third floor of a Midtown building. There is no elevator. Classes meet Saturday mornings at 8 AM. "Age is just a number," said lead instructor Cody, 24. The benefit covers enrollment. Grip chalk is sold separately.</p>
<p><strong>Benefits #8 and #9</strong> include: a free annual Michigan DNR fishing license ("It has been free since 2001. We have been saying this for twenty-four years. Please tell your relatives.") and a Pharmacy Savings Card offering an additional 1.2% discount on generic prescriptions not covered under Medicare Part D. "That's on top of the existing discount," Whitfield-Hayes clarified. "So the total is, yes, 1.2%."</p>
<p><strong>Benefit #10: Property Tax Comfort Credit.</strong> A one-time annual rebate of up to $185 on primary residence property taxes for homeowners over 62. Requires Form DP-596, a copy of the deed, a letter from the City Assessor's office, and, per section 4B of the application, "the name of the neighbor who filed a zoning complaint against you between 2015 and 2021, if applicable."</p>
<p>"It's a lot of paperwork," Whitfield-Hayes acknowledged. "But so was buying the house."</p>
<p><strong>Benefit #11: End-of-Year Gratitude Blizzard (December Only).</strong> One large Blizzard at the Warren Avenue Dairy Queen, any flavor, no restrictions, funded through a combination of state wellness dollars and a personal contribution from franchise owner Derek Stamos.</p>
<p>"I match it out of my own pocket," Stamos said. "December's hard for a lot of people. If a large Oreo Blizzard makes somebody feel seen, that's money well spent." He is, as far as anyone can confirm, the only person currently administering a state benefit out of a Dairy Queen on Warren Avenue.</p>
<p>Whitfield-Hayes encouraged all eligible Detroiters to visit their local benefits office or call the helpline. "These are people who worked their whole lives for this city," she said. "The least we can do is give them a fishing license and a Blizzard." She paused. "And the other nine things."</p>`,
    image: 'images/seniors.png',
    imageCaption: 'Eligible Detroit seniors await their Coney Dog Dignity Vouchers Monday. Officials say most were unaware of the vouchers but had opinions about Lafayette vs. American.'
  },
  {
    id: 'mar-a-lago-getaway',
    headline: 'Mar-a-Lago: The Five-Star Getaway for the Legally Entangled Elite',
    deck: 'Why settle for ordinary luxury when you can have scandal-laced splendor?',
    section: 'politics',
    featured: false,
    frontPage: false,
    byline: 'By Staff Reporter',
    date: 'March 15, 2026',
    lede: 'In a world saturated with cookie-cutter resorts and overhyped destinations, one estate dares to ask: Why settle for ordinary luxury when you can have scandal-laced splendor? Welcome to Mar-a-Lago: your all-inclusive refuge for the rich, restless, and recently subpoenaed.',
    body: `<p>Palm Beach, FL. In a world saturated with cookie-cutter resorts and overhyped destinations, one estate dares to ask: Why settle for ordinary luxury when you can have scandal-laced splendor? Welcome to Mar-a-Lago: your all-inclusive refuge for the rich, restless, and recently subpoenaed.</p>
<p>Dubbed "The Winter White House" by fans and "The Scene of the Crime" by critics, Mar-a-Lago has rebranded itself yet again. Now proudly billed as "The Slightly Under Indictment Winter White House," the estate offers guests an unparalleled experience where every sunset comes with a side of legal ambiguity.</p>
<p>At Mar-a-Lago, the only thing more elusive than a quiet moment is the truth. Whether you're a disgraced cabinet official looking to unwind or a socialite with a fondness for sealed indictments, this is your velvet-roped sanctuary. Will your morning mimosa be accompanied by a casual FBI raid? Will the concierge mistakenly hand you a flash drive labeled "Eyes Only"? At Mar-a-Lago, plausible deniability is part of the turn-down service.</p>
<p><strong>"Find the Classified" Scavenger Hunt:</strong> Wander the rococo halls in search of misplaced nuclear codes or hand-scribbled pardons. It's like an escape room, but with real federal implications.</p>
<p><strong>"Witness Protection" Spa Experience:</strong> Melt away stress (and your identity) with our patented deep-tissue alibi massage and exfoliating non-extradition mud wrap. Every session includes a complimentary burner phone and a whisper of "you were never here."</p>
<p><strong>"Executive Privilege" Golf Invitational:</strong> Compete with dignitaries, diplomats, and dubious donors in a tournament where scorekeeping is optional and sand traps double as bug-out bunkers.</p>
<p><strong>"Cocktails &amp; Conspiracy" Happy Hour:</strong> Sip the infamous Moscow Mule-a-Lago, a bold cocktail of vodka, ginger beer, and redacted ingredients, while quietly debating whether that gentleman at the bar is a billionaire donor or an undercover informant.</p>
<p>Our culinary team serves: Filet Mignon à la Fifth Amendment, tender, silent, and not taking any questions. Shrimp Cocktail with a Side of Subpoena, served chilled, like a prosecutor's stare. Justice-Glazed Duck, crispy on the outside, corrupt on the inside.</p>
<p>"Mar-a-Lago is the only place where I can unwind without worrying about extradition treaties, at least until check-out." (Anonymous Former National Security Advisor)</p>
<p>"The staff is phenomenal. Every time I blink, someone asks if I need a drink, an alibi, or a burner phone." (Anonymous Former Campaign Chair)</p>
<p>Book now and receive a Complimentary Legal Survival Basket featuring: a pre-signed NDA, a map of extradition-free countries (now laminated!), a "My Lawyer Told Me Not To Talk About This" stress ball, and a keepsake ankle monitor with gold trim.</p>
<p><em>Disclaimer: Mar-a-Lago assumes no responsibility for misplaced documents, unexpected indictments, or sudden urges to invoke the Fifth. Federal agents not included. All guests are presumed innocent until brunch.</em></p>`,
    image: 'images/mar-a-lago.avif',
    imageCaption: 'The lobby at Mar-a-Lago. Guests describe the atmosphere as "five-star" and "subpoena-adjacent."'
  },
  {
    id: 'suburbanite-detroit',
    headline: '9 Ways To Spot a Suburbanite In Detroit',
    deck: 'With summer coming and the city glowing up, know your invasive species',
    section: 'local',
    featured: false,
    frontPage: true,
    byline: 'By Staff Reporter',
    date: 'March 10, 2026',
    lede: "With Detroit growing in popularity and summer right around the corner, it's the time of year when suburbanites crawl out of their rural structures and swarm upon the city like the invasive species they are.",
    body: `<p>With Detroit growing in popularity and summer right around the corner, it's the time of year when suburbanites crawl out of their rural structures and swarm upon the city like the invasive species they are. It's not their fault that they are the way they are; they're hardwired this way. Nonetheless, here in the city, it's important to take proper precautions. That's why we've compiled this list of 9 sure ways to spot a suburbanite in Detroit.</p>
<p><strong>1. They ride the QLine. And they post about it.</strong> "This is so European!" They declare while traveling three blocks in 11 minutes. They treat the People Mover like it's Disneyland and not a suspended, metal metaphor for their life: going nowhere in air-conditioned comfort.</p>
<p><strong>2. They wear a Detroit vs Everybody hoodie with Old Navy jeans and tan boots.</strong> Nothing screams authenticity like purchasing civic pride at Somerset Mall. Bonus points if they refer to the shirt as "my urban look," or wear irrelevant cowboy attire of any kind.</p>
<p><strong>3. They say "downtown" but mean Campus Martius.</strong> As if the entire 143 square miles of the city begins and ends at a single Christmas tree.</p>
<p><strong>4. They're afraid of street parking like it's a trap out of Saw IV.</strong> They will circle the block for 30 minutes to find a valet in front of a restaurant. Meanwhile, resident Detroiters are parallel parking on a side street while eating a Mexican Pizza with one hand and maneuvering a steering wheel with a broken power steering line with the other.</p>
<p><strong>5. They ask if they can "Uber back to Royal Oak" from the Riverwalk.</strong> As if rideshare apps are a magic carpet that whisk you away from the city once the sun sets. You can hear them asking, "Wait, is this still Detroit?" every three blocks.</p>
<p><strong>6. They loudly declare they feel "safe here!"</strong> In the middle of a public space, during brunch on a Sunday. You'd think they were defectors from a war-torn nation, not eating avocado toast off Woodward Avenue. Calm down, Karen-from-Birmingham.</p>
<p><strong>7. They take selfies with murals like they're on safari.</strong> Art is their proof of life. "Look, Becky, I made it to the Dequindre Cut and lived! #UrbanAdventure #CityVibes #MyFeetHurt" That's not fun graffiti art, Karen. That's gangland tagging. You've strayed too far off the beaten path.</p>
<p><strong>8. They refer to Eastern Market as a "hidden gem."</strong> Hidden where? Behind your fear of Black people? The market is older than your mortgage. You're not Indiana Jones. You're holding a $17 bag of artisanal honeyed almonds. Sit down. Drink your Faygo.</p>
<p><strong>9. They always leave right before dark like they're Cinderella, but racist.</strong> Somewhere around 5:37 PM a silent alarm goes off in their DNA. You can see it in their eyes: the distant stare of someone who just remembered they left their Range Rover unlocked off Jefferson.</p>
<p>If you're unsure whether someone is a suburbanite in Detroit, just wait. They'll tell you. Right after they say, "We love coming down here! It's come so far!"</p>
<p>Yes. It has. You, however, are still finding parking.</p>`,
    image: 'images/suburbanites.jpeg',
    imageCaption: 'Suburbanites wait to cross the street in Detroit. Experts say they have been standing there since brunch.'
  },
  {
    id: 'bus-driver-mentally-ill',
    headline: 'Is My Bus Driver Mentally Ill? …And 7 Other Questions to Ask Yourself Before 8 AM',
    deck: 'A crucial list of introspective queries for the morning commuter',
    section: 'trending',
    featured: false,
    frontPage: false,
    byline: 'By Staff Reporter',
    date: 'March 8, 2026',
    lede: "The morning. A time of gentle awakening, birdsong, and quiet contemplation. Or, if you're like most of us, a frantic scramble against the relentless march of the clock, punctuated by existential dread and the faint, lingering aroma of last night's questionable takeout.",
    body: `<p>The morning. A time of gentle awakening, birdsong, and quiet contemplation. Or, if you're like most of us, a frantic scramble against the relentless march of the clock, punctuated by existential dread and the faint, lingering aroma of last night's questionable takeout. To help navigate this chaotic pre-8 AM landscape, we've compiled a crucial list of introspective queries. Ponder these deeply, perhaps while wrestling with a stubborn sock or attempting to locate your misplaced keys.</p>
<p><strong>1. Is my bus driver mentally ill?</strong> This is a classic for a reason. As your public transportation hurtles through the pre-dawn gloom, propelled by a figure who may or may not have made eye contact with anyone since the Carter administration, this question naturally arises. Is the erratic braking a sign of a troubled inner world? Does the sudden detour down Elm Street reflect a profound disconnect from societal norms? Or are they just trying to make up for lost time? Contemplate this while subtly inching toward the emergency exit.</p>
<p><strong>2. Did I actually brush my teeth, or was that just a vivid dream?</strong> The line between reality and sleep-addled fantasy blurs before 8 AM. That minty freshness could be a genuine testament to your oral hygiene, or merely a phantom sensation left over from a particularly realistic dream sequence. A quick sniff test might offer some clues, but be warned: morning breath is a notoriously unreliable witness.</p>
<p><strong>3. Is this stain on my shirt… permanent?</strong> A tiny, innocuous blot that, under the harsh fluorescent lighting of your bathroom, suddenly appears to be etched into the very fabric of your existence. Is it coffee? Ink? Some unidentifiable organic matter from a forgotten encounter? The answer may never be known. Accept its presence as a permanent fixture. Or try some bleach.</p>
<p><strong>4. Am I wearing two different shoes?</strong> In the bleary-eyed rush, the subtle nuances of footwear can easily be overlooked. One black loafer and one surprisingly comfortable hiking boot? It's more common than you think. Embrace the mismatched look. Declare it a bold fashion statement.</p>
<p><strong>5. Could I realistically fake a sudden illness and go back to bed?</strong> The siren song of your warm, inviting bed is never louder than in the moments before you have to face the world. Weigh the pros (more sleep) against the cons (potential job loss and the crushing guilt of deception). Perhaps a strategic cough will suffice.</p>
<p><strong>6. What is the meaning of that cryptic notification I vaguely remember dismissing last night?</strong> That little red dot on your phone holds untold secrets. Was it a vital work email? A message from a long-lost relative? Or just another Candy Crush invitation? The anxiety of the unknown is a powerful motivator to actually check. It's probably just Candy Crush.</p>
<p><strong>7. Is that a spider? And is it judging me?</strong> The early morning hours are prime time for unexpected encounters with the eight-legged residents of your home. As you observe its movements, a nagging feeling might arise: is it aware of your disheveled state? Does it disapprove of your questionable breakfast choices? In the quiet of the pre-dawn, the eyes of a spider can seem particularly knowing. Proceed with caution, and perhaps a rolled-up newspaper.</p>
<p><strong>8. Have I peaked? Is this as good as it's going to get?</strong> This existential crisis usually hits somewhere between the lukewarm coffee and the realization that you have to do it all again tomorrow. Fight the urge to succumb to despair. Remember, it's only before 8 AM. Anything is still possible. You could win the lottery, discover a hidden talent, or at the very least, find a matching pair of socks.</p>
<p>So, as you navigate the pre-dawn hours armed with this crucial list, remember that you are not alone in your morning madness. We are all just trying to make it to 8 AM, one questionable bus ride and potentially mismatched shoe at a time.</p>`,
    image: 'images/bus-driver.jpg',
    imageCaption: 'A DDOT driver photographed Tuesday morning. Experts say the gloves are either a hygiene precaution or a sign of something.'
  },
  {
    id: 'things-to-do-with-your-bitch',
    headline: 'The Top 8 Things To Do With Your Bitch This Weekend',
    deck: 'Reinforce your codependency this month with control and long walks on the beach',
    section: 'trending',
    featured: false,
    frontPage: false,
    byline: 'By Staff Reporter',
    date: 'March 5, 2026',
    lede: "Reinforce your codependency this month with control and long walks on the beach. Here are eight timeless things to do with your bitch over the weekend.",
    body: `<p>Reinforce your codependency this month with control and long walks on the beach. Here are eight timeless things to do with your bitch over the weekend.</p>
<p><strong>1. Take her for a walk.</strong> If you don't take her outside at least once a day she gets twitchy and starts texting her ex. Let her sniff things or chase squirrels. Let her believe she has autonomy.</p>
<p><strong>2. Feed her high-protein meals.</strong> She deserves the best. Raw diet, okay. Expensive treats? Of course. But don't be surprised if she still eats garbage off the street.</p>
<p><strong>3. Take her to a park to stare down other bitches.</strong> It's when she feels most free. Wind in her hair, chaos in her eyes, and Taylor Swift in her soul. This is her main moment. Don't ruin it.</p>
<p><strong>4. Microchip her.</strong> In case she gets lost (again). Or worse, in case she finds herself in a toxic group chat. Best to track that descent in real time.</p>
<p><strong>5. Enroll her in obedience school.</strong> Because explaining things like decency to her in the Target parking lot is getting tiresome.</p>
<p><strong>6. Enter her in a competition.</strong> Watch her turn feral. You have never seen your bitch's true self until she is in a pageant, a drag competition, or a small claims courtroom.</p>
<p><strong>7. Teach her a new trick.</strong> Roll over. Play dead. Pretend to be supportive. Trick training keeps her sharp and reminds her who runs this co-dependent circus.</p>
<p><strong>8. Put her in a cute outfit and pretend everything's fine.</strong> Match the sweaters and coordinate. You don't have to heal, but you can accessorize the dysfunction.</p>
<p>Remember: A well-maintained bitch is a happy bitch. Follow these simple steps and you'll have successfully transformed a perfectly healthy human being into someone who can't make decisions at the grocery store without texting you seventeen times. Sure, it's dysfunctional. But at least you'll never have to face the terrifying prospect of eating dinner alone, or the prospect of healthy boundaries. After all, why work on yourself when you could work on someone else?</p>`,
    image: 'images/boitch-weekend.jpg',
    imageCaption: 'A couple enjoys a romantic dinner. She is having a great time.'
  },
  {
    id: 'bings-worst-website',
    headline: "Local Bookstore Wins Worst Busted Ass Website of the Year",
    deck: "Don Bing's Rare & Used Bookstuff has preserved a piece of 1998 with impressive dedication. The internet has noticed.",
    section: 'local',
    featured: false,
    frontPage: true,
    byline: 'By Staff Reporter',
    date: 'April 26, 2026',
    lede: "In a city known for its crumbling infrastructure, one local landmark has managed to preserve a piece of 1998 in a way that the Detroit Historical Society can only envy. Don Bing's Rare & Used Bookstuff has officially been named Worst Website of the Year.",
    body: `<p>DETROIT. In a city known for its crumbling infrastructure, one local landmark has managed to preserve a piece of 1998 in a way that the Detroit Historical Society can only envy.</p>
<p>Recently at Don Bing's Rare &amp; Used Bookstuff's four-story labyrinth, where the dust has its own Dewey Decimal code, the local institution was awarded "Worst Website of the Year." The Association For Quality Web Standards hands this award off each year to the worst maintained websites on the interweb.</p>
<p>Bing's inconvenient and incomprehensible website has been confusing patrons and web surfers alike for years. Before we knew Don Bing the man, we knew the legend: the proud troglodyte. The "About Us" page of his digital domain remains a defiant monument to the analog era, declaring that Bing is being "dragged kicking and screaming into the computer age." Based on the current website's performance, he has successfully kicked and screamed his way into a total stalemate.</p>
<p>A veritable digital time capsule, the site doesn't just look old; the "About Us" reads like a forgotten 1998 brochure someone scanned and spilled coffee on. You know, like something you might actually find on one of Old Bing's cluttered, cobwebbed shelves.</p>
<p>"The site is the digital equivalent of that fluorescent light in John's store that's been flickering for six years," said Geraldine Marsh, panel president of the Association for Quality Website Standards.</p>
<p>Among the site's notable features:</p>
<ul style="margin: 0 0 1.3em 1.4em; padding: 0; font-size: 1.05rem; line-height: 1.85;">
  <li><strong>The /press.php Ghost:</strong> A page that throws a 404 Error when you try to fetch it. Classic.</li>
  <li><strong>OCR Nightmares:</strong> Book listings with descriptions that look like they were typed by pounding a keyboard with one's fist.</li>
  <li><strong>The Nephew Protocol:</strong> A navigation structure that seems fundamentally broken or at minimum confusing. It screams, "we hired someone's nephew in 2003 and never looked back."</li>
</ul>
<p>While other businesses pivot to AI-integrated "user journeys," the Resistance of Bing's website stands as a technophobe hero. It is proof that half-assing the computer age is worse than avoiding it entirely. By maintaining a site that is a literal obstacle course, the store ensures that only the strongest, most desperate bibliophiles will ever actually find a book.</p>
<p>When reached for comment, the website reportedly timed out.</p>`,
    image: 'images/bings-bookshelf.jpg',
    imageCaption: 'A shelf at Bing\'s Resistance of Bing bookshop, where inventory management remains a spiritual practice.'
  },
];

const HORRORSCOPES = {
  intro: `<p>My name is Dave and the universe does not care about your feelings, so neither do I. I'm not gonna tell you that "abundance is flowing your way," or that, "the universe has a plan for you." The universe doesn't have a plan; it has laws, and most of them involve things burning out or crashing into each other. I'm just here to translate the celestial white noise into the uncomfortable truths you ignore. I'll be the cold water to the face of your spiritual delusions.</p>
<p>That's right. I've traded my telescope for a glass of cheap scotch and a deadline I've already missed. So lets hurry up and look at your little charts and see exactly how you're planning on getting in your own way this week. Don't expect free lunch.</p>`,
  signs: [
    { symbol: '♈', name: 'Aries',       dates: 'March 21–April 19',      key: 'ARIES',       text: `Mercury is in retrograde, which means absolutely nothing for your actual life but everyone will blame it anyway. This week you'll lose your keys. Not because of planetary alignment. Because you put them somewhere stupid. Check the refrigerator.` },
    { symbol: '♉', name: 'Taurus',      dates: 'April 20–May 20',        key: 'TAURUS',      text: `The stars indicate you will have a conversation this week. Probably multiple conversations. I'm not paid enough to tell you what they'll be about. Venus is doing something. Moving, I assume. They all move.` },
    { symbol: '♊', name: 'Gemini',      dates: 'May 21–June 20',         key: 'GEMINI',      text: `Your dual nature means you'll want pizza AND Chinese food this week. You'll order pizza. The moon's gravitational pull has the same effect on your decision-making as it does on a parking meter, which is zero.` },
    { symbol: '♋', name: 'Cancer',      dates: 'June 21–July 22',        key: 'CANCER',      text: `You're a water sign, which means you should drink water this week. Eight glasses. This is actual health advice, not astrology. I have a PhD in molecular biology and I'm writing horoscopes. Stay hydrated.` },
    { symbol: '♌', name: 'Leo',         dates: 'July 23–August 22',      key: 'LEO',         text: `The sun is in your house. Not your actual house (that would be a catastrophic solar event). You'll feel confident this week, statistically speaking, because it's Tuesday through Monday and human emotions fluctuate. Correlation is not causation.` },
    { symbol: '♍', name: 'Virgo',       dates: 'August 23–September 22', key: 'VIRGO',       text: `You will organize something this week. A drawer, probably. Maybe a spreadsheet. The position of Jupiter relative to Saturn has no bearing on this. You're just like that. I checked your personality profile. Wait, no, I didn't. I don't care.` },
    { symbol: '♎', name: 'Libra',       dates: 'September 23–October 22',key: 'LIBRA',       text: `Balance is important to you. So is the balance in your checking account. The stars suggest you'll achieve equilibrium this week, but the stars are balls of burning plasma 4+ light-years away, so take that with appropriately-sized salt crystals.` },
    { symbol: '♏', name: 'Scorpio',     dates: 'October 23–November 21', key: 'SCORPIO',     text: `Something mysterious will happen this week. You'll wonder where that smell is coming from. It's the leftovers in the back of your fridge. Pluto is no longer a planet, and this matters exactly as much to your love life as you'd expect.` },
    { symbol: '♐', name: 'Sagittarius', dates: 'November 22–December 21',key: 'SAGITTARIUS', text: `You're a fire sign, which has nothing to do with your actual combustion temperature. Adventure calls this week. It will go to voicemail. You'll listen to it later and feel vaguely guilty about not being more spontaneous.` },
    { symbol: '♑', name: 'Capricorn',   dates: 'December 22–January 19', key: 'CAPRICORN',   text: `Saturn is your ruling planet. Saturn has 146 moons and can't rule any of them. This week you'll work hard because that's what you do regardless of what's happening 746 million miles away. The universe is indifferent to your productivity.` },
    { symbol: '♒', name: 'Aquarius',    dates: 'January 20–February 18', key: 'AQUARIUS',    text: `You're an air sign. Air is 78% nitrogen, 21% oxygen, and 1% other gases including argon. This week you'll breathe approximately 11,000 liters of it. You'll also have an idea. Maybe two ideas. The cosmic energy is irrelevant to your neurochemistry.` },
    { symbol: '♓', name: 'Pisces',      dates: 'February 19–March 20',   key: 'PISCES',      text: `Neptune is doing whatever Neptune does, being gaseous and far away. You'll feel emotional this week, which is a function of your limbic system, not stellar radiation. You'll also eat fish. Maybe. I don't know. This is my last one and I'm out of coffee.` },
  ]
};

// CommonJS export for Node.js build scripts
if (typeof module !== 'undefined') {
  module.exports = { ARTICLES, HORRORSCOPES };
}
