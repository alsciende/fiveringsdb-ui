<template>
    <div class="row">
        <div class="table-of-contents order-sm-2 col-12 col-sm-4">
            <b-btn v-b-toggle.toc variant="primary" class="d-sm-none">Table of Contents</b-btn>
            <b-collapse id="toc" class="mt-2 d-sm-block">
                <ul>
                    <li v-for="heading in headings" :class="['item-size-'+heading.level]">
                        <a :href="heading.href">{{ heading.text }}</a>
                    </li>
                </ul>
            </b-collapse>
        </div>
        <div class="contents order-sm-1 col-sm-8 mt-3">
            <h2>RULES REFERENCE</h2>
            <p>
                Version 1.2 with correction
            </p>
            <h3>SUMMARY OF CHANGES</h3>
            <p>
                New entries and changes from previous editions will be noted in this space. Changes are noted in <span
                    class="new">red text</span>.
            </p>
            <p>
                <a href="#breaking-a-province-broken-province">Breaking a Province</a>, <a href="#current">Current</a>,
                <a href="#dash">Dash</a>, <a href="#deck-limits">Deck Limits</a>, <a href="#facedown-province">Facedown
                Provinces</a>, <a href="#initiating-abilities-playing-cards">Initiating Abilities / Playing Cards</a>,
                <a href="#max-x-per-period">Max X per [period]</a>, <a href="#mulligan">Mulligan</a>, <a
                    href="#participating-and-cannot-participate">Participating and Cannot Participate</a>, <a
                    href="#personal-honor-personal-dishonor">Personal Honor, Personal Dishonor</a>, <a
                    href="#provinces-province-cards">Provinces, Province Cards</a>, <a href="#restricted">Restricted</a>,
                <a href="#rings">Rings</a>, <a href="#ring-effects">Ring Effects</a>, <a href="#role-cards">Role
                Cards</a>, <a href="#sacrifice">Sacrifice</a>, <a href="#set">Set</a>, <a href="#setup">Setup</a>, <a
                    href="#stronghold">Stronghold</a>, <a href="#triggered-abilities">Triggered Abilities</a>, <a
                    href="#unique-cards">Unique Cards</a>, <a href="#winning-the-game">Winning the Game</a>, <a
                    href="#3-2-declare-conflict">3.2. Declare conflict</a>, <a
                    href="#appendix-iii-questions-and-answers">Appendix III: FAQ</a>, <a
                    href="#appendix-iv-card-errata">Appendix IV: Errata</a>
            </p>
            <hr>
            <section>
                <anchored-heading @heading="add" :level="1">Rules Reference</anchored-heading>
                <p>
                    This document is intended as the definitive source for rules information, but does not teach players
                    how to play the game. Players should first read the Learn to Play book in its entirety and use this
                    Rules Reference as needed while playing the game.
                </p>
                <p>
                    The majority of this guide consists of the glossary, which provides an alphabetical listing of terms
                    and situations a player might encounter during a game. This section should be the first destination
                    for players who have a rules question.
                </p>
                <p>
                    The latter part of this guide contains two appendices. The first appendix provides detailed timing
                    diagrams that illustrate the structure of an entire game round, as well as how to handle each game
                    step presented in those diagrams. The second provides a detailed anatomy of each card type.
                </p>
            </section>
            <section>
                <anchored-heading @heading="add" :level="1">The Jade Rule</anchored-heading>
                <p>
                    If the text of this Rules Reference directly contradicts the text of the Learn to Play book, the
                    text of the Rules Reference takes precedence.
                </p>
                <p>
                    If the text of a card directly contradicts the text of either the Rules Reference or the Learn to
                    play book, the text of the card takes precedence.
                </p>
            </section>
            <section>
                <anchored-heading @heading="add" :level="1">Glossary</anchored-heading>
                <p>
                    The following is an alphabetical list of entries for game rules, terms, and situations that may
                    occur during play.
                </p>
                <article>
                    <anchored-heading @heading="add" :level="2">Ability</anchored-heading>
                    <p>
                        An ability is the special game text that a card contributes to the game. Card abilities fall
                        into one of the following types: actions, constant abilities, interrupts, keywords, and
                        reactions. Some interrupt and reaction abilities are also forced.
                    </p>
                    <ul>
                        <li>
                            Card abilities only interact with, and can only target, cards that are in play, unless the
                            ability specifically refers to an out-of-play area or element. Card abilities on characters,
                            attachments, holdings, strongholds, and provinces can only be initiated or affect the game
                            while they are in play unless the ability specifically refers to being used from an
                            out-of-play area, or require that the card be out of play for the ability to resolve. Event
                            cards and role cards implicitly interact with the game from an out-of-play area, as
                            established by the rules of their cardtypes.
                        </li>
                        <li>
                            The application or initiation of the following types of abilities is mandatory: constant
                            abilities, forced interrupt abilities, and forced reaction abilities.
                        </li>
                        <li>
                            The initiation of any keyword which uses the word "may" in its keyword description is
                            optional. The application of all other keywords is mandatory.
                        </li>
                        <li>
                            The initiation of action, interrupt, and reaction abilities is optional. The word "may" also
                            incorporates a player option into the resolution of an ability. The player who controls the
                            card on which an optional ability exists determines whether or not he or she wishes to use
                            that ability at the appropriate time.
                        </li>
                        <li>
                            An ability prefaced by a bold-face timing trigger followed by a colon is referred to as a
                            "triggered ability."
                        </li>
                        <li>
                            The controller of the card from which an ability is resolving makes all decisions required
                            by that ability's resolution unless another player is specifed by the ability's text.
                        </li>
                    </ul>
                    <p>
                        <b>Related:</b> <a href="#cost">Cost</a>, <a href="#effects">Effects</a>, <a
                            href="#forced">Forced</a>, <a href="#target">Target</a>, <a href="#triggered-abilities">Triggered
                        Abilities</a>
                    </p>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Action, Action Ability</anchored-heading>
                    <p>
                        An action ability is a triggered card ability that contains the boldface "<b>Action:</b>"
                        precursor. An action ability may be triggered by its controller during any action window (see <a
                            href="#appendix-i-timing-and-gameplay">"Appendix I: Timing and Gameplay"</a> on page 18).
                    </p>
                    <ul>
                        <li>
                            Unless otherwise noted by the ability, each action ability may be initiated only once each
                            round.
                        </li>
                        <li>
                            An action that has been initiated must be resolved before the next action can be initiated.
                        </li>
                    </ul>
                    <p>
                        <b>Related:</b> <a href="#ability">Ability</a>, <a href="#triggered-abilities">Triggered
                        Abilities</a>
                    </p>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Active Player</anchored-heading>
                    <p>
                        In some phases, the game creates an active player, who is granted permission to perform a
                        specified task.
                    </p>
                    <ul>
                        <li>
                            During the dynasty phase, the active player is the player who is permitted to play character
                            cards from his or her provinces or initiate an action ability. The status of active player
                            alternates between players in this phase until one player passes, after which the remaining
                            player remains the active player until he or she also passes.
                        </li>
                        <li>
                            During the conflict phase, the active player is the player with the opportunity to initiate
                            a conflict, or the player who is resolving a conflict he or she has initiated.
                        </li>
                    </ul>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Against</anchored-heading>
                    <p>
                        During a conflict, the attacking player and the defending player are considered to be taking
                        part in the conflict against each other.
                    </p>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Ancestral</anchored-heading>
                    <p>
                        Ancestral is a keyword ability that appears on attachments. If the card or game element to which
                        an ancestral attachment is attached leaves play, the ancestral attachment is returned to its
                        owner's hand instead of being discarded.
                    </p>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Attachment Cards</anchored-heading>
                    <p>
                        Attachment cards represent weapons, armor, items, skills, spells, conditions, and titles. An
                        attachment card enters play ready and attached to another card or game element, and remains in
                        play unless it is removed by an ability, or unless the attached card leaves play.
                    </p>
                    <ul>
                        <li>
                            An attachment cannot enter play if there is no eligible card or game element to which it can
                            attach.
                        </li>
                        <li>
                            An attachment can only attach to a character, unless otherwise specified by the attachment's
                            text.
                        </li>
                        <li>
                            There is no limit on the number of attachments that may be attached to a card or game
                            element.
                        </li>
                        <li>
                            If the card to which an attachment is attached leaves play, simultaneously discard the
                            attachment.
                        </li>
                        <li>
                            If a situation arises in which an attachment is not legally attached, discard the
                            attachment.
                        </li>
                        <li>
                            An attachment a player controls remains under his or her control even if the card or game
                            element to which it is attached is under an opponent's control.
                        </li>
                        <li>
                            An attachment card bows and readies independently of the card to which it is attached.
                        </li>
                        <li>
                            If an attachment has skill modifiers, those modifiers apply to the skill of the attached
                            character. Such modifiers apply to the character even while the attachment is bowed.
                        </li>
                        <li>
                            If a character card is in play as an attachment, the skill values on that
                            character-as-attachment are not treated as skill modifiers (as they lack the "+" or "-"
                            symbol before the value) for the character to which the card is attached.
                        </li>
                    </ul>
                    <p>
                        For attachment card anatomy, see "<a href="#appendix-ii-card-anatomy">Appendix II: Card
                        Anatomy</a>" on page 24.
                    </p>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Attacker, Attacking Character, Attacking Player
                    </anchored-heading>
                    <p>
                        The term "attacking character" refers to a character that is participating in a conflict on the
                        side of the player who initiated the conflict. The term "attacker" is also used as shorthand for
                        "attacking character."
                    </p>
                    <p>
                        The term "attacking player" refers to the player that initiated the conflict that is currently
                        resolving.
                    </p>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Base Value</anchored-heading>
                    <p>
                        The value of a quantity before other modifiers are applied. For most quantities, it is also the
                        printed value.
                    </p>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Bid Value</anchored-heading>
                    <p>
                        If the value of an honor bid is modified, resolve that bid as if the modified value is that
                        player's bid. The value of a bid may exceed five (the highest number on the honor dial), or may
                        be reduced to zero.
                    </p>
                    <ul>
                        <li>
                            When the value of an honor bid is modified, the setting on the dial is not itself adjusted.
                        </li>
                    </ul>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Blank</anchored-heading>
                    <p>
                        If an ability causes a card's printed text box to be considered "blank," that text box is
                        treated as if it did not have any of its printed <em>Traits</em> or card abilities. Text gained
                        from another source is not blanked.
                    </p>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Breaking a Province, Broken Province</anchored-heading>
                    <p>
                        If the attacking player wins a conflict with a total skill difference (between the attacking
                        player and the defending player) equal to or greater than the defense strength of the attacked
                        province, the province breaks.
                    </p>
                    <ul>
                        <li>
                            Rotate a broken province 180 degrees to indicate it is broken.
                        </li>
                        <li>
                            When a province is broken, the attacking player has the option of discarding any dynasty
                            cards in that province. If this option is taken, the province is refilled facedown.
                        </li>
                        <li>
                            Ability text on a broken province is not active.
                        </li>
                        <li>
                            Dynasty cards may still be played from broken provinces, and broken provinces still refill
                            following the standard game rules.
                        </li>
                        <li>
                            If three of a player's non-stronghold provinces are broken, <span class="new">that player's stronghold becomes an eligible province against which attacks may be made</span>.
                            If a player's stronghold province is broken, that player loses the game.
                        </li>
                        <li>
                            <span class="new">If a province breaks for any reason other than through standard conflict resolution, the opponent of the player who controls that province is considered to have broken the province.</span>
                        </li>
                    </ul>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Bow, Bowed</anchored-heading>
                    <p>
                        Cards often bow after participating in a conflict, to use card abilities, or as the result of
                        card or game effects. When a card is bowed, it is rotated 90 degrees. A card in this latter
                        state is considered bowed.
                    </p>
                    <ul>
                        <li>
                            A bowed card cannot bow again until it is ready. Cards are typically readied by a game step
                            or card ability.
                        </li>
                        <li>
                            During conflicts, bowed characters do not contribute their skill.
                        </li>
                        <li>
                            A bowed attachment with skill modifiers still modifies the skill of the attached character.
                        </li>
                        <li>
                            A card ability on a bowed card is active and can still engage with the game state. However,
                            if a bowed card must bow as part of its cost to trigger an ability, it cannot bow again
                            until it is readied, so the ability could not be triggered.
                        </li>
                    </ul>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Cancel</anchored-heading>
                    <p>
                        Some card abilities can "cancel" other card or game effects. Cancel abilities interrupt the
                        initiation of an effect, and prevent the effect from initiating. Because of this, cancel
                        abilities have timing priority over <b>all</b> other interrupts to the effect that is attempting
                        to initiate.
                    </p>
                    <ul>
                        <li>
                            If an effect is canceled, that effect is no longer imminent, and further interrupts
                            (including cancels) cannot be initiated in reference to the canceled effect.
                        </li>
                        <li>
                            If the effects of an ability are canceled, the ability is still considered to have been
                            used, and any costs have still been paid.
                        </li>
                        <li>
                            If the effects of an event card are canceled, the card is still considered to have been
                            played, and it is still placed in its owner's discard pile.
                        </li>
                        <li>
                            If a ring effect that is resolving for winning a conflict is canceled, the ring is still
                            claimed.
                        </li>
                    </ul>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Cannot</anchored-heading>
                    <p>
                        The word "cannot" is absolute, and cannot be countermanded by other abilities or effects.
                    </p>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Cardtypes</anchored-heading>
                    <p>
                        The game's cardtypes are: character, attachment, holding, event, province, stronghold, and role.
                        Each of these cardtypes, with a detailed card anatomy, is presented in "<a
                            href="#appendix-ii-card-anatomy">Appendix II: Card Anatomy</a>" on page 24.
                    </p>
                    <ul>
                        <li>
                            If an ability causes a card to change its cardtype, the card loses all other cardtypes it
                            might possess and functions as would any card of the new cardtype.
                        </li>
                    </ul>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Challenge</anchored-heading>
                    <p>
                        Some card abilities use the word "challenge" to initiate a duel between two characters
                        participating in a conflict. For the rules on how to resolve a duel, see "<a
                            href="#duel-timing">Duel timing</a>" on page 23.
                    </p>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Character Cards</anchored-heading>
                    <p>
                        Character cards represent the bushi, courtiers, shugenja, monks, shinobi, armies, creatures, and
                        other personalities and groups one might encounter in Rokugan.
                    </p>
                    <ul>
                        <li>
                            Character cards generally enter play ready and in a player's home area, and remain in play
                            unless removed by an ability or game step.
                        </li>
                        <li>
                            When a player plays a character from his or her hand during a conflict, the player has the
                            option to play it directly into the conflict, ready and participating on his or her side.
                        </li>
                    </ul>
                    <p>
                        For character card anatomy, see "<a href="#appendix-ii-card-anatomy">Appendix II: Card
                        Anatomy</a>" on page 24.
                    </p>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Choose</anchored-heading>
                    <p>
                        The word "choose" indicates that one or more targets must be chosen in order to resolve an
                        ability.
                    </p>
                    <p>
                        <b>Related:</b> <a href="#target">Target</a>
                    </p>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Clan</anchored-heading>
                    <p>
                        There are 7 clans in the core set, as depicted in the chart below.
                    </p>
                    <p>
                        A player's stronghold card signals which clan a player has chosen as the primary clan for his or
                        her deck. The clans and their associated symbols are listed below.
                    </p>
                    <ul>
                        <li>
                            An "in-clan" card bears a clan symbol that matches the clan symbol on its controller's
                            stronghold card.
                        </li>
                        <li>
                            An "out-of-clan" card bears one or more clan symbols that do not match the clan symbol on
                            its controller's stronghold card, and does not bear a clan symbol that matches the clan
                            symbol on its controller's stronghold card.
                        </li>
                    </ul>
                    <p>
                        <b>Related:</b> <a href="#deckbuilding">Deckbuilding</a>
                    </p>
                    <table style="width: 22em; border-spacing: 0.5em">
                        <thead>
                        <tr>
                            <th>Clan</th>
                            <th>In Text</th>
                            <th>On Card</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Crab Clan</td>
                            <td>[crab]</td>
                            <td><span class="icon icon-clan-crab"></span></td>
                        </tr>
                        <tr>
                            <td>Crane Clan</td>
                            <td>[crane]</td>
                            <td><span class="icon icon-clan-crane"></span></td>
                        </tr>
                        <tr>
                            <td>Dragon Clan</td>
                            <td>[dragon]</td>
                            <td><span class="icon icon-clan-dragon"></span></td>
                        </tr>
                        <tr>
                            <td>Lion Clan</td>
                            <td>[lion]</td>
                            <td><span class="icon icon-clan-lion"></span></td>
                        </tr>
                        <tr>
                            <td>Phoenix Clan</td>
                            <td>[phoenix]</td>
                            <td><span class="icon icon-clan-phoenix"></span></td>
                        </tr>
                        <tr>
                            <td>Scorpion Clan</td>
                            <td>[scorpion]</td>
                            <td><span class="icon icon-clan-scorpion"></span></td>
                        </tr>
                        <tr>
                            <td>Unicorn Clan</td>
                            <td>[unicorn]</td>
                            <td><span class="icon icon-clan-unicorn"></span></td>
                        </tr>
                        </tbody>
                    </table>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Constant Abilities</anchored-heading>
                    <p>
                        A constant ability is any non-keyword ability whose text contains no boldface timing trigger
                        defining its ability type. A constant ability becomes active as soon as its card enters play and
                        remains active while the card is in play.
                    </p>
                    <ul>
                        <li>
                            Some constant abilities continuously seek a specific condition (denoted by words such as
                            "during," "if," or "while"). The effects of such abilities are active any time the specified
                            condition is met.
                        </li>
                        <li>
                            If multiple instances of the same constant ability are in play, each instance affects the
                            game state independently.
                        </li>
                    </ul>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Control and Ownership</anchored-heading>
                    <p>
                        A card's owner is the player who included the card as a part of his or her deck (i.e. dynasty
                        deck, conflict deck, provinces, stronghold, role) at the beginning of the game.
                    </p>
                    <ul>
                        <li>
                            By default, cards enter play under their owner's control. Some abilities may cause cards to
                            change control during a game.
                        </li>
                        <li>
                            A player controls the cards in his or her out-of-play game areas (such as the hand, the
                            dynasty and conflict decks, and the dynasty and conflict discard piles).
                        </li>
                        <li>
                            If a card would enter an out-of-play area of a player who does not own the card, the card is
                            placed in its owner's equivalent out-of-play area instead. (For all associated card ability
                            and framework effect purposes, the card is considered to have entered that opponent's
                            out-of-play area, and only the physical placement of the card is adjusted.)
                        </li>
                        <li>
                            If a participating character changes control during a conflict, it is considered
                            participating in the same conflict on the side of its new controller.
                        </li>
                        <li>
                            When a character changes control while it is in play, it remains in the same state as it was
                            before (i.e., bowed or ready, participating or at home, etc.), and is now under the new
                            player's control.
                        </li>
                        <li>
                            Attachments on a card that changes control do not themselves change control.
                        </li>
                        <li>
                            Unless a duration is specified, a control change persists as long as the card remains in
                            play.
                        </li>
                    </ul>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Copy (of a card)</anchored-heading>
                    <p>
                        A copy of a card is defined by title: any other card that shares the same title is considered a
                        copy, regardless of cardtype, text, deck of origin, artwork, or any other characteristic(s) of
                        the card(s).
                    </p>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Cost</anchored-heading>
                    <p>
                        A card's fate cost is the numerical value that must be paid to play the card from a player's
                        hand or provinces.
                    </p>
                    <p>
                        Some triggered card abilities also have an ability cost. Any imperative instruction (other than
                        "choose...," which denotes one or more targets must be chosen) that appears before the dash of a
                        triggered ability is considered a part of that ability's cost. Some examples of ability cost
                        instructions are: "Bow...," "Spend...," "Sacrifice...," "Lose...," "Dishonor...," and
                        "Discard...."
                    </p>
                    <ul>
                        <li>
                            When a player is paying a cost, the payment must be made with cards and/or game elements
                            that player controls. The word "friendly" is used as a reminder of this in some costs.
                        </li>
                        <li>
                            If a cost requires a game element that is not in play, the player paying the cost may only
                            use game elements that are in his or her out-of-play areas or token pools to pay the cost.
                        </li>
                        <li>
                            If multiple costs for a single card or ability require payment, those costs must be paid
                            simultaneously.
                        </li>
                        <li>
                            If any part of a cost payment is prevented, once all costs that can be paid are paid, the
                            process of initiating the ability or playing the card immediately ends without further
                            resolution. (If this occurs while playing a card, the card remains unplayed in its owner's
                            hand or province.)
                        </li>
                        <li>
                            An ability cannot initiate (and therefore its costs cannot be paid) if its effect on its own
                            does not have the potential to change the game state.
                        </li>
                    </ul>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Count</anchored-heading>
                    <p>
                        When instructed to count a total of game values on a subset of characters, values on bowed
                        characters are not counted.
                    </p>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Courtesy</anchored-heading>
                    <p>
                        Courtesy is a keyword ability. When a card with the courtesy keyword leaves play, its controller
                        gains 1 fate.
                    </p>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Covert</anchored-heading>
                    <p>
                        Covert is a keyword ability. When a player initiates a conflict, for each character with the
                        covert keyword he or she declares as an attacker, that player may choose one character without
                        covert controlled by the defending player. Each chosen character is considered evaded by covert,
                        and cannot be declared as a defender for that conflict.
                    </p>
                    <ul>
                        <li>
                            Card abilities may be used to move characters that have been evaded by covert into a
                            conflict as defenders.
                        </li>
                        <li>
                            Covert may only be used when characters are declared as attackers. If a character with
                            covert is moved into or played into a conflict after the point at which the conflict was
                            declared, that character's covert ability does not resolve.
                        </li>
                    </ul>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Current</anchored-heading>
                    <p>
                        If an ability references a "current" skill or glory count, use the players' applicable specified
                        totals at the time the ability resolves.
                    </p>
                    <ul>
                        <li>
                            <span class="new">When resolving an ability that references a "current" skill or glory count during a conflict, count the skill or glory values that would be used if the conflict were currently resolving.</span>
                        </li>
                    </ul>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Dash (&ndash;)</anchored-heading>
                    <p>
                        In the text of a triggered ability, a dash (&ndash;) is used to separate the criteria that are
                        necessary to use the ability from the effect of the ability. Any triggering conditions, play
                        restrictions or permissions, costs, and targeting requirements are denoted before the dash. The
                        ability's effect is denoted after the dash.
                    </p>
                    <p>
                        If a character has a dash (&ndash;) for a skill value, that character cannot participate in,
                        <span
                                class="new">be played into, or be put into play in</span> conflicts of that type.
                    </p>
                    <ul>
                        <li>
                            Should a character with a dash skill value somehow end up participating in a conflict of the
                            corresponding type, that character is immediately removed from the conflict, and placed in
                            its controller's home area in a bowed state.
                        </li>
                        <li>
                            If a character has a dash for a skill value, that skill value cannot be modified or
                            otherwise changed by card abilities and effects.
                        </li>
                        <li>
                            If a skill value for a dash character is required to resolve a card ability, treat the card
                            as if it had an unmodifiable skill value of 0.
                        </li>
                        <li>
                            A character with a dash skill value cannot be a challenger or challengee in a duel of that
                            skill type. (see <a
                                href="#duel-timing">D.2</a> on page 23).
                        </li>
                    </ul>
                    <p>
                        <b>Related:</b> <a href="#participating-and-cannot-participate">Participating and Cannot
                        Participate</a>
                    </p>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Deckbuilding</anchored-heading>
                    <p>
                        To build custom decks for sanctioned tournament play:
                    </p>
                    <ul>
                        <li>
                            A player must choose exactly 1 stronghold.
                        </li>
                        <li>
                            A player may use 1 role card.
                        </li>
                        <li>
                            A player's dynasty deck must contain a minimum of 40 and a maximum of 45 cards. Each of
                            these cards must be in-clan or be neutral.
                        </li>
                        <li>
                            A player's conflict deck must contain a minimum of 40 and a maximum of 45 cards. Each of
                            these cards must be in-clan, be neutral, or be purchased from a <b>single</b> other clan by
                            using influence.
                        </li>
                        <ul>
                            <li>
                                A player's stronghold indicates the amount of influence that player may spend during
                                deckbuilding.
                            </li>
                            <li>
                                A player cannot include more than 10 character cards in his or her conflict deck.
                            </li>
                        </ul>
                        <li>
                            No more than 3 copies of a single card by title can be included in any combination in a
                            player's dynasty and conflict decks.
                        </li>
                        <li>
                            A player's set of provinces must include exactly 5 provinces, consisting of exactly 1
                            province associated with each ring. (Each province has a ring symbol in the lower right
                            corner of the card to indicate its association.) Each of these provinces must be in-clan or
                            be neutral.
                        </li>
                        <ul>
                            <li>
                                No more than 1 copy of each province, by title, may be included in a player's set of
                                provinces.
                            </li>
                        </ul>
                    </ul>
                    <p>
                        <b>Note:</b> When constructing a dynasty and conflict deck for out-of-the-box play from one core
                        set, the minimum size for each deck is 30 cards. To construct decks for two players from a
                        single core set, use all the cards and influence from the desired clan pairings and divide the
                        neutrals as in the tutorial game.
                    </p>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Deck Limits</anchored-heading>
                    <p>
                        Up to 3 total copies of most cards (by title) may be included in a player's dynasty and/or
                        conflict decks. Each copy of a card in either deck counts towards this limit.
                    </p>
                    <p>
                        If a card has the text "<span class="new">Limit X per deck</span>" no more than X copies of that
                        card may be included in that player's dynasty and/or conflict decks.
                    </p>
                    <ul>
                        <li>
                            If X is 2 or lower, this phrase acts as a deckbuilding restriction.
                        </li>
                        <li>
                            If X is 4 or higher, this phrase acts as a permission that enables a player to include more
                            than the standard 3 copies.
                        </li>
                    </ul>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Defender, Defending Character, Defending Player
                    </anchored-heading>
                    <p>
                        The term "defending character" refers to a character that is participating in a conflict on the
                        side of the player who controls the province that is being attacked. The term "defender" is also
                        used as shorthand for "defending character."
                    </p>
                    <p>
                        The term "defending player" refers to the opponent of the attacking player against whom (from
                        the attacking player's perspective) a conflict is resolving.
                    </p>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Delayed Effects</anchored-heading>
                    <p>
                        Some abilities contain delayed effects. Such abilities specify a future timing point, or
                        indicate a future condition that may arise, and dictate an effect that is to happen at that
                        time.
                    </p>
                    <ul>
                        <li>
                            Delayed effects resolve automatically and immediately after their specified timing point or
                            future condition occurs or becomes true, before reactions to that moment may be triggered.
                        </li>
                        <li>
                            When a delayed effect resolves, it is not treated as a new triggered ability, even if the
                            delayed effect was originally created by a triggered ability.
                        </li>
                        <li>
                            When a delayed <span class="new">effect</span> resolves, it is still considered to be an
                            ability originating from the cardtype of the card that created the delayed effect.
                        </li>
                    </ul>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Discard Piles</anchored-heading>
                    <p>
                        The discard piles are out-of-play areas. Each player has a dynasty discard pile and a conflict
                        discard pile.
                    </p>
                    <ul>
                        <li>
                            Any time a card is discarded (from play, or from an out-of-play area such as a hand or
                            deck), it is placed faceup on top of its owner's appropriate discard pile: dynasty cards are
                            discarded to the dynasty discard pile, and conflict cards are discarded to the conflict
                            discard pile.
                        </li>
                        <li>
                            Each player's discard pile is open information, and may be looked at by any player at any
                            time.
                        </li>
                        <li>
                            The order of cards in a discard pile may not be altered unless a player is instructed to do
                            so by a card ability.
                        </li>
                        <li>
                            If multiple cards are discarded simultaneously, the owner of the cards chooses the order in
                            which those cards are placed in the discard pile.
                        </li>
                    </ul>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Dishonored, Dishonored Status Token</anchored-heading>
                    <p>
                        See "<a href="#personal-honor-personal-dishonor">Personal Honor</a>" on page 12.
                    </p>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Drawing cards</anchored-heading>
                    <p>
                        When a player is instructed to draw one or more cards, those cards are drawn from the top of his
                        or her conflict deck.
                    </p>
                    <ul>
                        <li>
                            When a player draws 2 or more cards as the result of a single ability or game step, those
                            cards are drawn simultaneously.
                        </li>
                        <li>
                            Drawn cards are added to a player's hand.
                        </li>
                        <li>
                            There is no limit to the number of cards a player may draw each round.
                        </li>
                        <li>
                            There is no maximum hand size.
                        </li>
                    </ul>
                    <p>
                        <b>Related:</b> <a href="#running-out-of-cards">Running Out of Cards</a>
                    </p>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Duel</anchored-heading>
                    <p>
                        Some card abilities initiate a duel between two characters participating in a conflict. For the
                        rules on how to resolve a duel, see "<a
                            href="#duel-timing">Duel timing</a>" on page 23.
                    </p>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Duplicates</anchored-heading>
                    <p>
                        A duplicate is a copy (in a player's hand or provinces) of a unique character that is already in
                        play and under the same player's control. A player may, as a player action during step 1.4 of
                        the dynasty phase, discard a duplicate from his or her hand or provinces to place 1 fate on the
                        copy of the character in play.
                    </p>
                    <ul>
                        <li>
                            After discarding a duplicate from a province, the province refills face down.
                        </li>
                        <li>
                            A different version of a unique card (that shares the same title) may be discarded from a
                            player's hand or provinces as a duplicate.
                        </li>
                    </ul>
                    <p>
                        <b>Related:</b> <a href="#unique-cards">Unique</a>
                    </p>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Effects</anchored-heading>
                    <p>
                        A card effect is any effect that arises from the resolution of ability text printed on or gained
                        by a card. A framework effect is any effect that arises from the resolution of a framework step.
                    </p>
                    <ul>
                        <li>
                            Card effects might be preceded by costs, triggering conditions, play restrictions or
                            permissions, and/or targeting requirements. Such elements are not considered effects.
                        </li>
                        <li>
                            Once an ability is initiated, players must resolve as much of each aspect of its effect as
                            they are able, unless the effect uses the word "may."
                        </li>
                        <li>
                            When a non-targeting effect attempts to engage a number of entities (such as "search the top
                            10 cards of your conflict deck") that exceeds the number of entities that currently exist in
                            the specified game area, the effect engages as many entities as possible.
                        </li>
                        <li>
                            The expiration of a lasting effect (or the cessation of a constant ability) is not
                            considered to be generating a game state change by a card effect.
                        </li>
                        <li>
                            If an ability instructs a player to select among multiple effects, an effect that has the
                            potential to change the game state must be selected.
                        </li>
                    </ul>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Enters Play</anchored-heading>
                    <p>
                        The phrase "enters play" refers to any time a card makes a transition from an out-of-play area
                        or state into play. Playing a card and putting a card into play by using a card ability are two
                        means by which a card may enter play.
                    </p>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Event Cards</anchored-heading>
                    <p>
                        Event cards represent tactical acts and maneuvers, court intrigues, spells, supernatural
                        occurrences, and other unexpected developments that might occur during a game.
                    </p>
                    <ul>
                        <li>
                            Event cards are triggered from a player's hand. An event card's ability type, triggering
                            condition (if any), and play permissions/restrictions (if any) define when and how the card
                            may be played.
                        </li>
                        <li>
                            When an event card is played, its costs are paid, its effects are resolved (or canceled),
                            and it is placed in its owner's discard pile prior to opening the reaction window which
                            follows the ability's resolution.
                        </li>
                        <li>
                            Event cards engage the game state at the time they resolve. If an event card creates a
                            lasting effect on a set of cards, only cards that are in play (or in the affected game area
                            or game state) at the time the event is played are eligible to be affected. Cards that enter
                            play (or the affected game area or game state) after the resolution of the event are not
                            affected by its lasting effect.
                        </li>
                        <li>
                            If the effects of an event card are canceled, the card is still considered to have been
                            played, and its costs remain paid, and the card is still discarded. Only the effects have
                            been canceled.
                        </li>
                        <li>
                            Unless the ability that puts it into play also changes its cardtype to a cardtype that is
                            permitted in play, an event card cannot enter play.
                        </li>
                    </ul>
                    <p>
                        For event card anatomy, see "<a href="#appendix-ii-card-anatomy">Appendix II: Card Anatomy</a>"
                        on page 24.
                    </p>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Facedown Province</anchored-heading>
                    <p>
                        A facedown province has no inherent identity other than "facedown province." When a facedown
                        province is turned faceup, that province card is considered to be revealed.
                    </p>
                    <ul>
                        <li>
                            A facedown province is turned faceup when an attack is declared against it.
                        </li>
                        <li>
                            A player may look at the facedown provinces under his or her control at any time.
                            <b>Note:</b> this rule refers to the facedown province card itself. A player is not
                            permitted to look at facedown dynasty cards in his or her provinces.
                        </li>
                        <li>
                            If a facedown province becomes the attacked province in a manner other than the declaration
                            of an attack, immediately turn the province faceup.
                        </li>
                        <li>
                            <span class="new">A facedown province is considered to be a different entity than its faceup side. While a province is facedown, its faceup side is considered to be out of play. When a province is turned faceup, the "faceup province" and "facedown province" simultaneously exchange positions, such that the facedown province is now out of play and the faceup province is now in play. The opposite is true when a province is turned facedown.</span>
                        </li>
                    </ul>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Fate</anchored-heading>
                    <p>
                        Fate is the game's basic resource, and is used to pay for cards and some card abilities. The
                        amount of fate a player has available at any given time is represented (as open information) by
                        fate tokens in his or her fate pool.
                    </p>
                    <ul>
                        <li>
                            Fate begins the game in the general token pool. When a player gains fate, that player takes
                            that much fate from the general token pool and adds it to his or her fate pool.
                        </li>
                        <li>
                            When a player is instructed to place fate on a card, that fate comes from the general token
                            pool unless otherwise specified.
                        </li>
                        <li>
                            When fate is spent or lost, it is usually returned to the general token pool. If fate is
                            spent to a ring, it is placed on that ring.
                        </li>
                        <li>
                            Whenever a player plays a character from his or her hand or provinces, after paying the
                            character's cost, that player has the option of placing any number of fate from his or her
                            fate pool onto that character.
                        </li>
                        <li>
                            During the fate phase, each character with no fate on it is discarded. Subsequently, 1 fate
                            is removed from each character in play. Finally, 1 fate from the general token pool is
                            placed on each unclaimed ring.
                        </li>
                    </ul>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">First Player, First Player Token</anchored-heading>
                    <p>
                        A first player is chosen during setup, and the first player token is used to indicate that
                        player's status as the first player. The chosen player remains first player until the first
                        player token passes to the other player.
                    </p>
                    <ul>
                        <li>
                            The first player becomes the active player first during the dynasty phase and the conflict
                            phase.
                        </li>
                        <li>
                            The first player has the first opportunity to initiate actions or act first during all
                            non-conflict resolution action windows. While a conflict is resolving, the defending player
                            has the first opportunity to initiate actions during each conflict resolution action window.
                        </li>
                        <li>
                            The first player has the first opportunity to initiate interrupt or reaction abilities at
                            each appropriate game moment.
                        </li>
                        <li>
                            For any question as to who should perform an act or make a decision first, in the absence of
                            any other direction by card or rules text, the first player does so first, followed by the
                            opponent.
                        </li>
                    </ul>
                    <p>
                        <b>Related:</b> <a href="#active-player">Active Player</a>, <a href="#setup">Setup</a>, <a
                            href="#priority-of-simultaneous-resolution">Priority of Simultaneous Resolution</a>, <a
                            href="#appendix-i-timing-and-gameplay">Appendix I</a>
                    </p>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Forced (Forced Interrupts, Forced Reactions)
                    </anchored-heading>
                    <p>
                        While most triggered abilities are optional, some interrupt and reaction abilities are preceded
                        by the word "<b>Forced</b>." Such abilities must be resolved immediately whenever the triggering
                        condition specified in the ability text occurs.
                    </p>
                    <ul>
                        <li>
                            For any given triggering condition, forced interrupts take priority and initiate before
                            non-forced interrupts, and forced reactions take priority and initiate before non-forced
                            reactions.
                        </li>
                        <li>
                            If two or more forced abilities would initiate at the same moment, the first player
                            determines the order in which the abilities initiate, regardless of who controls the cards
                            bearing those abilities.
                        </li>
                        <li>
                            Each forced ability must resolve completely before the next forced ability to the same
                            triggering condition may initiate.
                        </li>
                    </ul>
                    <p>
                        <b>Related:</b> <a href="#interrupts">Interrupts</a>, <a href="#reactions">Reactions</a>
                    </p>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Framework Effects and Framework Steps</anchored-heading>
                    <p>
                        A framework step is a mandatory occurrence, dictated by the structure of the game. A framework
                        effect is any effect that arises from the resolution of a framework step.
                    </p>
                    <p>
                        <b>Related:</b> <a href="#appendix-i-timing-and-gameplay">Appendix I</a>
                    </p>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Gains</anchored-heading>
                    <p>
                        The word "gains" is used in multiple contexts.
                    </p>
                    <ul>
                        <li>
                            If a player gains fate or honor, that player takes the specified amount of fate or honor
                            from the general token pool and adds it to his or her fate pool or honor pool.
                        </li>
                        <li>
                            If a card gains a characteristic (such as a <em>Trait</em>, a keyword, or ability text), the
                            card functions as if it possesses the gained characteristic. Gained characteristics are not
                            considered to be printed on the card.
                        </li>
                    </ul>
                    <p>
                        <b>Related:</b> <a href="#printed">Printed</a>
                    </p>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Give</anchored-heading>
                    <p>
                        If a player is instructed to give tokens to an opponent, those tokens are removed from the
                        giving player's pool of tokens (or specified game area), and are added to that opponent's token
                        pool.
                    </p>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Glory</anchored-heading>
                    <p>
                        Glory is a character statistic that represents a character's reputation, and how much the
                        character cares about their reputation.
                    </p>
                    <ul>
                        <li>
                            While a character is honored or dishonored, that character's glory will modify its military
                            and political skill.
                        </li>
                        <li>
                            A player counts the glory value of each ready character he or she controls whenever a glory
                            count is required.
                        </li>
                    </ul>
                    <p>
                        <b>Related:</b> <a href="#personal-honor-personal-dishonor">Personal Honor and Dishonor</a>, <a
                            href="#glory-count">Glory Count</a>
                    </p>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Glory Count</anchored-heading>
                    <p>
                        When the players are asked to count glory, each player counts the total glory value among the
                        ready characters he or she controls, and adds 1 to the total for each ring in his or her claimed
                        ring pool. The player with the highest total wins the glory count.
                    </p>
                    <ul>
                        <li>
                            <a href="#3-4-1-glory-count">Step 3.4.1</a> of the conflict phase consists of a framework
                            glory count. The winner of this count claims the Imperial Favor and may set it to either
                            side.
                        </li>
                        <ul>
                            <li>
                                If players have the same total, the Imperial Favor remains in its current state (either
                                unclaimed or under the possession of the player who currently has it, remaining set on
                                its current side).
                            </li>
                        </ul>
                        <li>
                            Some card abilities may require the players to count glory. Glory counts required by card
                            abilities are made in the same manner, and the ability will detail how to process the
                            result. Such counts do not affect the status of the Imperial Favor, unless the ability text
                            causes the Imperial Favor status to change.
                        </li>
                    </ul>
                    <p>
                        <b>Related:</b> <a href="#imperial-favor-imperial-favor-contest">Imperial Favor</a>
                    </p>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Holding</anchored-heading>
                    <p>
                        When a holding is turned faceup in a player's province, its game text becomes active and that
                        holding is considered to be "in play." As long as a holding remains faceup in a player's
                        province, that player can use abilities or benefit from game text on that holding.
                    </p>
                    <ul>
                        <li>
                            Many holdings have a statistical value that modifies the defense strength of the province at
                            which the holding is located.
                        </li>
                        <li>
                            During the regroup phase, when discarding faceup cards from his or her provinces, a player
                            may choose to discard a faceup holding. When this occurs, the province is refilled,
                            facedown, with the top card of that player's Dynasty deck, as normal.
                        </li>
                        <li>
                            While a holding remains on a province, that province is not refilled.
                        </li>
                    </ul>
                    <p>
                        For holding card anatomy, see "<a href="#appendix-ii-card-anatomy">Appendix II: Card Anatomy</a>"
                        on page 24.
                    </p>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Home, Move Home</anchored-heading>
                    <p>
                        Character cards that are in play but not currently participating in a conflict are considered to
                        be in their controller's home area.
                    </p>
                    <ul>
                        <li>
                            If a character that is participating in a conflict is moved home, it is removed from the
                            conflict and placed in its controller's home area. A character that is moved home maintains
                            its status of bowed or readied.
                        </li>
                    </ul>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Honor</anchored-heading>
                    <p>
                        Honor represents the behavior of a player's clan, and the outward perception of that behavior.
                        It is bid during the draw phase (see framework step "<a
                            href="#2-2-honor-bid">2.2. Honor bid</a>" on page 20) and during duels. Honor also serves as
                        a victory track to measure an honor win or an honor loss. The amount of honor a player has at
                        any given time is represented (as open information) by honor tokens in his or her honor pool.
                    </p>
                    <ul>
                        <li>
                            A player's stronghold indicates that player's starting honor total.
                        </li>
                        <li>
                            Each time a player gains honor, that honor is taken from the general token pool and added to
                            the player's honor pool. Each time a player loses honor, that honor is taken from the
                            player's honor pool and returned to the general token pool.
                        </li>
                        <li>
                            If a card ability references a player who is more or less honorable than another player, the
                            players compare the amount of honor in each of their honor pools to determine if the ability
                            is applicable, or to whom the ability refers.
                        </li>
                        <li>
                            If a card ability references a player's honor bid, the ability is referencing the current
                            setting on the player's honor dial.
                        </li>
                    </ul>
                    <p>
                        <b>Related:</b> <a href="#winning-the-game">Winning the Game</a>
                    </p>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Honored, Honored Status Token</anchored-heading>
                    <p>
                        See "<a href="#personal-honor-personal-dishonor">Personal Honor</a>" on page 12.
                    </p>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Immune</anchored-heading>
                    <p>
                        If a card is immune to a specified set of effects (for example, "immune to ring effects" or
                        "immune to event card effects"), it cannot be targeted or affected by effects that belong to
                        that set.
                    </p>
                    <ul>
                        <li>
                            Immunity only protects the immune card itself. Peripheral entities associated with an immune
                            card (such as attachments, tokens on the card, and abilities that originate from the immune
                            card) are not themselves immune.
                        </li>
                        <li>
                            If a card gains immunity to an effect, pre-existing lasting effects that have been applied
                            to the card are not removed.
                        </li>
                        <li>
                            Immunity only protects a card from effects. It does not prevent a card from being used to
                            pay costs.
                        </li>
                    </ul>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Imperial Favor, Imperial Favor Contest
                    </anchored-heading>
                    <p>
                        The Imperial Favor represents which player currently holds the favor of the Emperor. <a
                            href="#3-4-1-glory-count">Step 3.4.1</a> of the conflict phase consists of a framework glory
                        count. The winner of this count claims the Imperial Favor and may set it to either side.
                    </p>
                    <ul>
                        <li>
                            The +1 skill modifier granted by the Imperial Favor applies to any conflict of the specified
                            type in which its bearer controls at least one participating character. This modifier
                            applies to the <b>player's</b> total skill that is counted for the conflict, but does not
                            modify the skill value of any of the characters participating in the conflict.
                        </li>
                        <li>
                            Once the Imperial Favor is set to its military or political side, it must remain on that
                            side until it is claimed again or changed by a card ability.
                        </li>
                        <li>
                            If a player in possession of the Imperial Favor wins the framework glory count in the
                            conflict phase, that player claims the Imperial Favor again and may set it to either side.
                        </li>
                        <li>
                            If players have the same total, the Imperial Favor remains in its current state (either
                            unclaimed or under the possession of the player who currently has it, remaining set on its
                            current side).
                        </li>
                        <li>
                            The game begins with the Imperial Favor unclaimed.
                        </li>
                        <li>
                            If a card ability causes the Imperial Favor to be claimed, it may be claimed from its
                            unclaimed status, or claimed from a player. Each time the Imperial Favor is claimed, it may
                            be set to either side.
                        </li>
                        <li>
                            If a player is instructed to discard the Imperial Favor, that player returns the Imperial
                            Favor to its unclaimed state in the token bank.
                        </li>
                    </ul>
                    <p>
                        <b>Related:</b> <a href="#glory-count">Glory Count</a>
                    </p>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">In Play and Out of Play</anchored-heading>
                    <p>
                        The cards (generally characters and attachments) that a player controls in his or her play area
                        (at home or participating in a conflict), a player's stronghold card, a player's faceup province
                        cards, and all holdings on a player's provinces are considered "in play." A player's facedown
                        provinces are considered in play only as "facedown provinces," and the ability text on such
                        cards is not considered active until the card is revealed.
                    </p>
                    <p>
                        "Out-of-play" refers to all other cards and areas involved in the game environment, including:
                        character cards in a player's provinces, role cards, cards in a player's hand, decks, discard
                        piles, and any cards that have been removed from the game.
                    </p>
                    <ul>
                        <li>
                            A card enters play when it transitions from an out-of-play origin to an in-play state.
                        </li>
                        <li>
                            A card leaves play when it transitions from an in-play state to an out-of-play destination.
                        </li>
                        <li>
                            A player's stronghold cannot leave play.
                        </li>
                    </ul>
                    <p>
                        <b>Related:</b> <a href="#enters-play">Enters Play</a>, <a href="#leaves-play">Leaves Play</a>,
                        <a
                                href="#play-and-put-into-play">Play and Put Into Play</a>
                    </p>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Influence, Influence Cost</anchored-heading>
                    <p>
                        Influence is a deckbuilding resource that is indicated by a player's chosen stronghold for that
                        deck. Many conflict deck cards have an influence cost, which makes them eligible for selection
                        as an out-of-clan card.
                    </p>
                    <ul>
                        <li>
                            A player may spend influence up to the amount indicated by his or her stronghold to include
                            out-of-clan cards from a <b>single</b> additional clan in his or her conflict deck.
                        </li>
                        <li>
                            Each copy of a card that is chosen reduces the amount of influence a player has at his or
                            her disposal to use in selecting other cards for the deck.
                        </li>
                        <li>
                            A clan-affiliated card that has no influence cost cannot be selected using influence for
                            inclusion in a deck.
                        </li>
                    </ul>
                    <p>
                        <em><b>Example:</b> Tom is building a Lion Clan deck, and has 10 influence to spend on
                            out-of-clan cards, as indicated by the Lion stronghold, Shiro no Yojin. He must spend all of
                            his influence on cards from a single clan. He chooses to select cards from the Crane Clan.
                            Tom decides to include 3 copies of Admit Defeat (2 influence cost each), 3 copies of The
                            Perfect Gift (1 influence cost each), and 1 copy of Duelist Training (1 influence cost). As
                            this is all of Tom's influence, he cannot include any other Crane Clan cards in his conflict
                            deck. All of the other cards in Tom's conflict deck must either be from the Lion Clan, or be
                            neutral.</em>
                    </p>
                    <anchored-heading @heading="add" :level="2">Initiating Abilities / Playing Cards</anchored-heading>
                    <p>
                        Whenever a player wishes to play a card or initiate a triggered ability, that player first
                        declares his or her intent (and shows the card to be used, if necessary). There are two
                        preliminary confirmations that must be made before the process may begin. These are:
                    </p>
                    <ol>
                        <li>
                            Check play restrictions and verify the existence of eligible targets: can the card be
                            played, or the ability initiated, at this time? If the play restrictions are not met, or
                            there are no eligible targets for the ability, the process cannot proceed.
                        </li>
                        <li>
                            Determine the cost (or costs, if multiple costs are required) to play the card or initiate
                            the ability. If it is established that the cost (taking modifiers into account) can be paid,
                            proceed with the remaining steps of this sequence.
                        </li>
                    </ol>
                    <p>
                        Once each of the preliminary confirmations has been made, follow these steps, in order:
                    </p>
                    <ol start="3">
                        <li>
                            Apply any modifiers to the cost(s).
                        </li>
                        <li>
                            Pay the cost(s).
                        </li>
                        <li>
                            Choose target(s), if applicable. Any pre-effect instructions to "select" among multiple
                            options in the ability are made at this time as well.
                        </li>
                        <li>
                            The card attempts to enter play, or the effects of the ability attempt to initiate. An
                            interrupt ability that cancels this initiation may be used at this time. <span class="new">At this time the card is considered "played" or the ability "triggered."</span>
                        </li>
                        <li>
                            The effects of the ability (if not canceled in step 6) complete their initiation, and
                            resolve.
                        </li>
                    </ol>
                    <p>
                        Interrupts and reactions may be used throughout this process as normal, should their triggering
                        conditions occur.
                    </p>
                    <ul>
                        <li>
                            If an ability instructs a player to "resolve this ability twice," repeat steps 5&ndash;7 of
                            this process immediately after the first resolution of the ability's effect (i.e., resolve
                            the ability again before any reactions to the first resolution of the effect may be
                            triggered). Costs are not paid a second time when an ability is resolved twice.
                        </li>
                    </ul>
                    <p>
                        <b>Related:</b> <a href="#ability">Ability</a>, <a href="#cost">Cost</a>, <a
                            href="#target">Target</a>
                    </p>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">In Player Order</anchored-heading>
                    <p>
                        If the players are instructed to perform a sequence "in player order," the first player performs
                        his or her part of the sequence first, followed by the other player.
                    </p>
                    <ul>
                        <li>
                            If a sequence performed in player order does not conclude after each player has performed
                            his or her aspect of the sequence once, the sequence of opportunities continues to alternate
                            back and forth between the players until it is complete.
                        </li>
                    </ul>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Interrupts</anchored-heading>
                    <p>
                        An interrupt is a triggered ability whose text is prefaced by a boldface "<b>Interrupt:</b>"
                        precursor. An interrupt ability interrupts the resolution of its triggering condition, sometimes
                        canceling or changing the resolution of that condition. Always resolve interrupts to a
                        triggering condition before resolving the consequences of the triggering condition itself.
                    </p>
                    <p>
                        Unlike actions, which are resolved during action windows, an interrupt may be initiated only if
                        its specified triggering condition occurs, as described in the interrupt ability's text.
                    </p>
                    <p>
                        When a triggering condition initiates (but before it completes its resolution), an interrupt
                        window for that triggering condition opens.
                    </p>
                    <p>
                        Within the interrupt window, the first player always has the first opportunity to initiate an
                        eligible interrupt (to the triggering condition that opened the window), or pass. Opportunities
                        to initiate an eligible interrupt, or pass, continue to alternate between the players until all
                        players consecutively pass, at which point the interrupt window closes. Passing does not prevent
                        a player from initiating an eligible interrupt later in that same interrupt window.
                    </p>
                    <p>
                        Once an interrupt window closes, further interrupts to that specific triggering condition cannot
                        be initiated. The triggering condition now completes its resolution (as long as its effects have
                        not been canceled).
                    </p>
                    <ul>
                        <li>
                            Unless otherwise noted by the ability, each interrupt ability may be initiated once each
                            round. (This includes forced interrupts.)
                        </li>
                        <li>
                            An interrupt with specified limit that enables it to be triggered more than once per round
                            may only be initiated once each time its specified triggering condition occurs.
                        </li>
                    </ul>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Keywords</anchored-heading>
                    <p>
                        A keyword is a card ability which conveys specific rules to its card. The keywords in the core
                        set are: <a href="#ancestral">Ancestral</a>, <a href="#courtesy">Courtesy</a>, <a
                            href="#covert">Covert</a>, <a href="#limited">Limited</a>, <a href="#no-attachments">No
                        Attachments</a>, <a href="#pride">Pride</a>, <a href="#restricted">Restricted</a>, and <a
                            href="#sincerity">Sincerity</a>.
                    </p>
                    <ul>
                        <li>
                            Sometimes a keyword is followed by reminder text, which is presented in italics. Reminder
                            text is a shorthand explanation of how a keyword works, but it is not rules text and does
                            not replace the rules for that keyword in this glossary.
                        </li>
                        <li>
                            A card is considered to have a keyword or to not have that keyword. A single card that has
                            and/or is gaining the same keyword from multiple sources functions as if it has one instance
                            of that keyword.
                        </li>
                    </ul>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Lasting Effects</anchored-heading>
                    <p>
                        Some abilities create conditions that affect the game state for a specified duration. Such
                        effects are known as lasting effects.
                    </p>
                    <ul>
                        <li>
                            A lasting effect persists beyond the resolution of the ability that created it, for the
                            duration specified by the effect. The effect continues to affect the game state for the
                            specified duration regardless of whether the card that created the lasting effect is or
                            remains in play.
                        </li>
                        <li>
                            If a lasting effect affects in-play cards (or a specified set of cards), it is only applied
                            to cards that are in play (or that meet the specifications of the set) at the time the
                            lasting effect is established. Cards that enter play (or change status to meet the criteria
                            of the specified set) after a lasting effect's establishment are not affected by that
                            lasting effect.
                        </li>
                        <li>
                            A lasting effect expires as soon as the timing point specified by its duration is reached.
                            This means that an "until the end of the phase" lasting effect expires before an "at the end
                            of the phase" ability or delayed effect may initiate.
                        </li>
                        <li>
                            A lasting effect that expires at the end of a specified time period can only be initiated
                            during that time period.
                        </li>
                    </ul>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Leaves Play</anchored-heading>
                    <p>
                        The phrase "leaves play" refers to any time a card makes a transition from an in-play state to
                        an out-of-play destination.
                    </p>
                    <p>
                        If a card leaves play, the following consequences occur simultaneously with the card leaving
                        play:
                    </p>
                    <ul>
                        <li>
                            All tokens on the card are returned to the general token pool.
                        </li>
                        <li>
                            All non-ancestral attachments on the card are discarded. All ancestral attachments on the
                            card are returned to their owners' hands.
                        </li>
                        <li>
                            All lasting effects and/or delayed effects affecting the card while it was in play expire
                            for that card.
                        </li>
                    </ul>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Limited</anchored-heading>
                    <p>
                        Limited is a keyword ability. No more than one card in total with the limited keyword can be
                        played by each player each round. Cards played from hand and played from a player's provinces
                        are restricted by and count toward this limit.
                    </p>
                    <li>
                        Limited cards that are "put into play" via card abilities ignore and are ignored by this
                        restriction.
                    </li>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Limit X per [period]</anchored-heading>
                    <p>
                        This phrase specifies the number of times a triggered ability can be used during the designated
                        period. This replaces the general restriction of using a triggered ability once per game round.
                    </p>
                    <ul>
                        <li>
                            Each copy of an ability with a specified limit may be used the specified number of times
                            during the specified period.
                        </li>
                        <li>
                            If a card leaves play and re-enters play during the same period, it is considered a new
                            instance of the card and there is no memory of having used the ability during the specified
                            period. (This rule also applies to any ability with no specified limit.)
                        </li>
                        <li>
                            All limits are player specific.
                        </li>
                        <li>
                            If the effects of an ability with a limit are canceled, the use of the ability is still
                            counted against the limit.
                        </li>
                    </ul>
                    <p>
                        <b>Related:</b> <a href="#max-x-per-period">Max X per [period]</a>
                    </p>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Max X per [period]</anchored-heading>
                    <p>
                        This phrase imposes a maximum number of times that an ability may be initiated from all copies
                        (by title) of cards bearing the ability (including itself), during the designated period.
                        Initiating an ability on a card counts toward the maximum for all copies of that card.
                    </p>
                    <ul>
                        <li>
                            Each maximum is player specific.
                        </li>
                        <li>
                            If the effects of a card or ability with a maximum are canceled, the use of the card or
                            ability is still counted against the maximum.
                        </li>
                        <li>
                            <span class="new">An ability's maximum value cannot be modified.</span>
                        </li>
                    </ul>
                    <p>
                        <b>Related:</b> <a href="#limit-x-per-period">Limit X per [period]</a>
                    </p>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">May</anchored-heading>
                    <p>
                        The word "may" indicates that a specified player has the option to do that which follows. If no
                        player is specified, the option is granted to the controller of the card with the ability in
                        question.
                    </p>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Modifiers</anchored-heading>
                    <p>
                        Some abilities may ask players to modify values. The game state constantly checks and (if
                        necessary) updates the count of any variable quantity that is being modified.
                    </p>
                    <p>
                        Any time a new modifier is applied (or removed), the entire quantity is recalculated from the
                        start, considering the unmodified base value and all active modifiers.
                    </p>
                    <ul>
                        <li>
                            The calculation of a value treats all modifiers as being applied simultaneously. However
                            while performing the calculation, all additive and subtractive modifiers should be
                            calculated before doubling and/or halving modifiers are calculated.
                        </li>
                        <li>
                            Fractional values are rounded up after all modifiers have been applied.
                        </li>
                        <li>
                            When a value is "set" to a specific number, the set modifier overrides all non-set modifiers
                            (including any new non-set modifiers that are added during the duration of the set value).
                            If multiple set modifiers are in conflict, the most recently applied set modifier takes
                            precedence.
                        </li>
                        <li>
                            A quantity cannot be reduced so that it functions with a value below zero: a card cannot
                            have negative icons, political or military skill, glory, traits, cost, or keywords. Negative
                            modifiers that would take a value below zero can be applied, but, after all active modifiers
                            have been applied, any resultant value below zero is treated as zero.
                        </li>
                    </ul>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Move</anchored-heading>
                    <p>
                        Some abilities allow players to move cards or tokens.
                    </p>
                    <ul>
                        <li>
                            When an entity moves, it cannot move to its same (current) placement. If there is no valid
                            destination for a move, the move attempt cannot be made.
                        </li>
                        <li>
                            When a character is moved into a conflict, that character is considered participating in the
                            conflict on its controller's side.
                        </li>
                    </ul>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Mulligan</anchored-heading>
                    <p>
                        During setup, each player has a single opportunity to mulligan any number of cards in his or her
                        provinces, and a single opportunity to mulligan any number of cards in his or her hand. When a
                        player decides to mulligan, the mulliganed cards are set aside, replaced with an equal number of
                        cards from the top of the appropriate deck(s), and then shuffled back into the deck(s) from
                        which they originated.
                    </p>
                    <ul>
                        <li>
                            Players mulligan (or pass the opportunity to do so) in player order. If the first player
                            passes an opportunity to mulligan, that player cannot change his or her mind and then decide
                            to mulligan during that step after seeing the opponent's decision.
                        </li>
                        <li>
                            <span class="new">After a player mulligans the cards in their provinces, they may look at the new cards before drawing their conflict hand.</span>
                        </li>
                    </ul>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Nested Ability Sequences</anchored-heading>
                    <p>
                        Each time a triggering condition occurs, the following sequence is followed: (1) execute any
                        interrupts to that triggering condition, (2) resolve the triggering condition itself, and then,
                        (3) execute any reactions to that triggering condition.
                    </p>
                    <p>
                        Within this sequence, if the use of an interrupt or reaction leads to a new triggering
                        condition, the game pauses and starts a new sequence: (1) execute interrupts to the new
                        triggering condition, (2) resolve the new triggering condition itself, and then, (3) execute
                        reactions to the new triggering condition. This is called a nested sequence. Once this nested
                        sequence is completed, the game returns to where it left off, continuing with the original
                        triggering condition's sequence.
                    </p>
                    <p>
                        It is possible that a nested sequence generates further triggering conditions (and hence more
                        nested sequences). There is no limit to the number of nested sequences that may occur, but each
                        nested sequence must complete before returning to the sequence that spawned it. In effect, these
                        sequences are resolved in a Last In, First Out (LIFO) manner.
                    </p>
                    <p>
                        <b>Related:</b> <a href="#interrupts">Interrupts</a>, <a href="#reactions">Reactions</a>
                    </p>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Neutral</anchored-heading>
                    <p>
                        Some cards are not affiliated with any clan, these cards are neutral. Any deck may include
                        neutral cards.
                    </p>
                    <ul>
                        <li>
                            Neutral cards are not considered to be in-clan or out-of-clan.
                        </li>
                    </ul>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">No Attachments</anchored-heading>
                    <p>
                        No attachments is a keyword ability. A card with this keyword cannot have an attachment card
                        attached.
                    </p>
                    <ul>
                        <li>
                            If one or more traits precedes the word "attachments" (for example, "No <em>Weapon</em> or
                            <i>Armor</i> attachments"), the card cannot have an attachment that possess one or more of
                            the specified traits, but it can have attachments possessing none of those traits.
                        </li>
                        <li>
                            If the word "attachments" is followed by the word "except" and one or more traits (for
                            example, "No attachments except <em>Weapon</em>"), the card can have attachments that
                            possess one or more of the specified traits, but it cannot have attachments possessing none
                            of those traits.
                        </li>
                        <li>
                            If a card has multiple variants of the "No attachments" keyword, any variant that would
                            prevent a card from having a given attachment prevails.
                        </li>
                    </ul>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Own, Ownership</anchored-heading>
                    <p>
                        See "<a href="#control-and-ownership">Control and Ownership</a>" on page 4.
                    </p>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Participating and Cannot Participate</anchored-heading>
                    <p>
                        Any character that has been declared as an attacker or defender for a conflict is considered
                        participating in that conflict through its resolution, unless it is removed by an ability or
                        game effect.
                    </p>
                    <ul>
                        <li>
                            Each character that is in play is either participating or not participating in each
                            conflict.
                        </li>
                        <li>
                            If an ability removes a character from a conflict or moves a character home, that character
                            is no longer participating in the conflict and is returned to its controller's home area.
                        </li>
                        <li>
                            If a non-participating character is moved into a conflict, it is considered participating on
                            its controller's side.
                        </li>
                        <li>
                            If a participating character is bowed, it is still considered participating, but will not
                            contribute its skill toward the resolution of the conflict while in a bowed state.
                        </li>
                        <li>
                            If a participating character leaves play for any reason, it is no longer participating in
                            the conflict.
                        </li>
                        <li>
                            A character played directly into a conflict from a player's hand is participating in the
                            conflict. The controller of the character must indicate that this is the case when the
                            character is played.
                        </li>
                        <li>
                            If a character "cannot participate" in a conflict, that character cannot be declared as an
                            attacker or defender for, move into, be played into, <span
                                class="new">or put into play in</span> that conflict. If an already participating
                            character gains "cannot participate" status during a conflict, move it home bowed.
                        </li>
                    </ul>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Pass</anchored-heading>
                    <p>
                        There are times in the game at which a player has an option to perform an act (such as taking an
                        action, triggering an ability, or executing a game step), or to pass. Passing in such a
                        situation forfeits the player's right to perform that act in that moment.
                    </p>
                    <ul>
                        <li>
                            The first player to pass the opportunity to use an action or play a card during the dynasty
                            phase forfeits the opportunity to do so for the remainder of the phase, and gains one fate.
                        </li>
                        <li>
                            Other game sequences in which players have the option to pass continue until both players
                            pass consecutively. If the first player passes, and the second player does not, the
                            opportunity returns to the first player in the sequence. The sequence only ends when both
                            players have passed in succession. (In other words, passing in such a sequence does not
                            prevent a player from re-entering the sequence should the opponent not also pass in
                            succession.)
                        </li>
                        <li>
                            When passing an opportunity to declare a conflict, a player is not required to specify which
                            type of conflict he or she is passing.
                        </li>
                    </ul>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Personal Honor, Personal Dishonor</anchored-heading>
                    <p>
                        Personal honor is a means of tracking the honored or dishonored status of individual character
                        cards. Each character exists in one of three states:
                    </p>
                    <ul>
                        <li>
                            Honored
                        </li>
                        <li>
                            Ordinary
                        </li>
                        <li>
                            Dishonored
                        </li>
                    </ul>
                    <p>
                        Characters enter play with ordinary status. Honored status tokens and dishonored status tokens
                        are used to track the state of a character that receives a status other than ordinary.
                    </p>
                    <ul>
                        <li>
                            When a character is honored, it receives an honored status token to indicate its honored
                            status. An honored character adds its glory value to both its military and political skill
                            so long as it possesses that token. When an honored character leaves play its controller
                            gains 1 honor.
                        </li>
                        <li>
                            When a character is dishonored, it receives a dishonored status token to indicate its
                            dishonored status. A dishonored character subtracts its glory value from both its military
                            and political skill so long as it possesses that token. When a dishonored character leaves
                            play its controller loses 1 honor.
                        </li>
                        <li>
                            When an honored character is dishonored, it loses its honored status, discards the status
                            token, and returns to ordinary status. Likewise, when a dishonored character is honored, it
                            loses its dishonored status, discards the status token, and returns to ordinary status.
                        </li>
                        <li>
                            A character with an honored status token cannot become honored. A character with a
                            dishonored status token cannot become dishonored.
                        </li>
                        <li>
                            <span class="new">Should a character have both an honored status token and a dishonored status token at the same time, discard both tokens. The character returns to the ordinary state.</span>
                        </li>
                    </ul>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Play and Put into Play</anchored-heading>
                    <p>
                        <b>Play</b>ing a character or attachment card involves paying the card's fate cost and placing
                        the card in the play area. This causes the card to enter play. Cards are played from a player's
                        hand or provinces. Any time a character card is played, its controller has the option of placing
                        additional fate from his or her fate pool on the card.
                    </p>
                    <p>
                        Some card abilities <b>put</b> cards <b>into play</b>. This bypasses the need to pay the card's
                        cost, as well as the opportunity to place additional fate on the card. A card that is put into
                        play bypasses any restrictions or prohibitions regarding the potential of playing that card. A
                        card that is put into play enters play in its controller's play area.
                    </p>
                    <ul>
                        <li>
                            A card that has been put into play is not considered to have been "played."
                        </li>
                        <li>
                            In order to <b>play</b> a card, its fate cost (after modifiers) must be paid.
                        </li>
                        <li>
                            When a card is <b>put into play</b>, its fate cost is ignored.
                        </li>
                        <li>
                            Unless otherwise instructed by the put into play effect, cards that enter play in this
                            manner must do so in a play area or state that matches the rules of playing the card.
                        </li>
                        <li>
                            When an event card is played, place it on the table, resolve its ability, and place the card
                            in its owner's discard pile.
                        </li>
                    </ul>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Play Restrictions and Permissions</anchored-heading>
                    <p>
                        Many cards or abilities contain specific instructions pertaining to when or how they may or may
                        not be used, or to specific conditions that must be true in order to use them. In order to use
                        such an ability or to play such a card, all play restrictions must be observed.
                    </p>
                    <p>
                        A permission is a variant of a play restriction that provides a player with additional options
                        as to how the card may be played or used, outside of the game's general specification regarding
                        how the card or ability would normally be used.
                    </p>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Pride</anchored-heading>
                    <p>
                        Pride is a keyword ability. After a character with the pride keyword wins a conflict, honor that
                        character. After a character with the pride keyword loses a conflict, dishonor that character.
                    </p>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Printed</anchored-heading>
                    <p>
                        The word printed refers to the text, characteristic, icon, or value that is physically printed
                        on the card.
                    </p>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Priority of Simultaneous Resolution</anchored-heading>
                    <p>
                        If a single effect affects multiple players simultaneously, but the players must individually
                        make choices to resolve the effect, the first player chooses first, followed by his or her
                        opponent. Once all necessary choices have been made, the effect resolves simultaneously upon all
                        affected entities.
                    </p>
                    <ul>
                        <li>
                            If the resolution of two or more delayed effects or forced abilities would resolve at the
                            same time, the first player decides the order in which the abilities resolve, regardless of
                            who controls the cards bearing the conflicting abilities.
                        </li>
                        <li>
                            If two or more constant abilities and/or lasting effects can be applied simultaneously, they
                            are. If two or more constant abilities and/or lasting effects cannot be applied
                            simultaneously, the first player determines the order in which they are applied.
                        </li>
                    </ul>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Provinces, Province Cards</anchored-heading>
                    <p>
                        A player's provinces represent the lands surrounding his or her stronghold. When a province is
                        under attack and turned faceup, the card represents what the enemy finds or encounters upon
                        first entering that province.
                    </p>
                    <ul>
                        <li>
                            A face-down province card is considered to be in play only as a face down province, and its
                            faceup side is unable to engage with the game state until the province is revealed.
                        </li>
                        <li>
                            A non-broken, faceup province is considered to be in play, and is engaged with the game
                            state.
                        </li>
                        <li>
                            A broken province is considered to have a blank text box, and its ability cannot be used.
                        </li>
                        <li>
                            <span class="new">If a province has more than one card in it, those cards are considered to all be in the same province. Characters can be played and holdings provide their bonuses. Do not refill a province until it is empty.</span>
                        </li>
                    </ul>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Qualifiers</anchored-heading>
                    <p>
                        If card text includes a qualifier followed by multiple terms, the qualifier applies to each item
                        in the list, if it is applicable. For example, in the phrase "each unique character and
                        attachment," the word "unique" applies both to "character" and to "attachment."
                    </p>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Reactions</anchored-heading>
                    <p>
                        A reaction is a triggered ability whose text is prefaced by a boldface "<b>Reaction:</b>"
                        precursor. Always resolve a triggering condition before initiating any reactions to that
                        triggering condition.
                    </p>
                    <p>
                        Unlike actions, which are resolved during action windows, a reaction may be initiated only if
                        its specified triggering condition occurs, as described in the reaction ability's text.
                    </p>
                    <p>
                        After a triggering condition resolves, a reaction window for that triggering condition opens.
                    </p>
                    <p>
                        Within the reaction window, the first player always has the first opportunity to initiate an
                        eligible reaction (to the triggering condition that opened the window), or pass. Opportunities
                        to initiate an eligible reaction, or pass, continue to alternate between the players until all
                        players consecutively pass, at which point the reaction window closes. Passing does not prevent
                        a player from initiating an eligible reaction later in that same reaction window.
                    </p>
                    <p>
                        Once a reaction window closes, further reactions to that specific triggering condition cannot be
                        initiated.
                    </p>
                    <ul>
                        <li>
                            Unless otherwise noted by the ability, each reaction ability may be initiated once each
                            round. (This includes forced reactions.)
                        </li>
                        <li>
                            A reaction with a specified limit that enables it to be triggered more than once per round
                            may only be initiated once each time its specified triggering condition occurs.
                        </li>
                    </ul>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Ready</anchored-heading>
                    <p>
                        A card that is in an upright state so that its controller can read its text from left to right
                        is considered ready.
                    </p>
                    <ul>
                        <li>
                            The default state in which cards enter play is ready.
                        </li>
                        <li>
                            A ready card is bowed by rotating it 90 degrees to the side.
                        </li>
                    </ul>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Refill a Province</anchored-heading>
                    <p>
                        If a player is instructed to refill a province, that player takes the top card of his or her
                        dynasty deck and places it facedown (without looking at it) on the province.
                    </p>
                    <ul>
                        <li>
                            After a card is removed from a province for any reason (and after all reaction opportunities
                            to that card leaving the province are passed), a player automatically refills the province
                            from which the card was removed if that province is still empty (i.e., if there is no
                            dynasty card there).
                        </li>
                        <li>
                            If a player is instructed to refill a province faceup, the dynasty card is placed in the
                            province faceup rather than facedown.
                        </li>
                    </ul>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Removed from Game</anchored-heading>
                    <p>
                        "Removed from the game" is an out-of-play state. A card that has been removed from the game is
                        set aside and has no further interaction with the game in any manner for the duration of its
                        removal. If there is no specified duration, a card that has been removed from the game is
                        considered removed until the end of the game.
                    </p>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Replacement Effects</anchored-heading>
                    <p>
                        A replacement effect is an effect (usually an interrupt) that replaces the resolution of a
                        triggering condition with a different means of resolving the same triggering condition, but in
                        such a manner that the triggering condition is still considered to occur. The word "instead" is
                        frequently indicative of such an effect. After all interrupts to the triggering condition have
                        resolved and it is time to resolve the triggering condition itself, the replacement effect
                        resolves instead.
                    </p>
                    <ul>
                        <li>
                            If multiple replacement effects are initiated against the same triggering condition, the
                            most recently initiated replacement effect is the one used for the resolution of the
                            triggering condition.
                        </li>
                    </ul>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">"Resolve this ability twice"</anchored-heading>
                    <p>
                        See "<a href="#initiating-abilities-playing-cards">Initiating Abilities / Playing Cards</a>" on
                        page 9.
                    </p>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Restricted</anchored-heading>
                    <p>
                        Restricted is a keyword ability. A character may not have more than two attachments with the
                        restricted keyword attached to it at any time.
                    </p>
                    <ul>
                        <li>
                            If at any time a character has three or more restricted attachments, that character's
                            controller must immediately choose and discard one of the restricted attachments on the
                            character as soon as the illegal game state occurs.
                        </li>
                        <li>
                            <span class="new">A player may choose to play a third restricted attachment onto a character, but must immediately choose and discard one of the other restricted attachments as the new attachment enters play.</span>
                        </li>
                    </ul>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Reveal</anchored-heading>
                    <p>
                        When a player is instructed to reveal cards, that player is required to show those cards to his
                        or her opponent to that opponent's satisfaction. If there is no specified duration for the
                        reveal, the cards remain revealed until they reach a new destination (as specified by the
                        ability), or through the ability's resolution.
                    </p>
                    <ul>
                        <li>
                            While a card is revealed, it is still considered to be located in the game area (such as a
                            player's hand or deck) from which it is revealed.
                        </li>
                    </ul>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Rings</anchored-heading>
                    <p>
                        Rings, represented by double-sided tokens, are used to determine the type and element of
                        conflicts. Each ring exists in one of three states, as follows:
                    </p>
                    <p>
                        <b>Unclaimed</b>
                        &ndash;
                        Each ring in the unclaimed ring pool is an unclaimed ring, and is eligible to be selected by a
                        player as a part of the process of declaring a conflict.
                    </p>
                    <p>
                        <b>Contested</b>
                        &ndash;
                        While a conflict is resolving, the ring that has been selected by the attacker when the conflict
                        was declared is placed on the attacked province. This ring is known as the contested ring.
                    </p>
                    <p>
                        <b>Claimed</b>
                        &ndash;
                        When a player wins a conflict, that player claims the contested ring and places it into his or
                        her claimed ring pool.
                    </p>
                    <ul>
                        <li>
                            Each claimed ring adds 1 to the glory count of the player who controls it.
                        </li>
                        <li>
                            During the fate phase, place 1 fate on each unclaimed ring.
                        </li>
                        <li>
                            When a ring becomes the contested ring in a conflict, move all fate on that ring to the
                            attacking player's fate pool.
                        </li>
                        <li>
                            <span class="new">When a ring is claimed, it is still considered to be contested until all reactions to its claiming have resolved.</span>
                        </li>
                    </ul>
                    <p>
                        <b>Related:</b> <a href="#ring-effects">Ring Effects</a>
                    </p>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Ring Effects</anchored-heading>
                    <p>
                        Each time a player wins a conflict as the attacking player, he or she may resolve the ring
                        effect associated with the contested ring's element. The ring effects are as follows:
                    </p>
                    <p>
                        <b>Air</b>: The attacking player takes 1 honor from his or her opponent, or gains 2 honor from
                        the general token pool.
                    </p>
                    <p>
                        <b>Earth</b>: The attacking player draws 1 card from his or her conflict deck and discards 1
                        card at random from his or her opponent's hand.
                    </p>
                    <p>
                        <b>Fire</b>: The attacking player chooses a character in play and chooses to honor or dishonor
                        that character.
                    </p>
                    <p>
                        <b>Water</b>: The attacking player either chooses a character and readies it, or chooses a
                        character with no fate on it and bows it.
                    </p>
                    <p>
                        <b>Void</b>: The attacking player chooses a character and removes 1 fate from that character.
                    </p>
                    <ul>
                        <li>
                            Whenever a player resolves a ring effect for a ring that has multiple elements, that player
                            may choose among those elements when the conflict's ring effect resolves.
                        </li>
                        <li>
                            <span class="new">When a player is instructed to resolve multiple ring effects, they resolve each effect (or pass on that effect) in its entirety before resolving the next ring effect.</span>
                        </li>
                    </ul>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Role Cards</anchored-heading>
                    <p>
                        A role card is placed alongside a player's stronghold, and provides specialized abilities and
                        limitations for that player's deck. A player may use a single role card in conjunction with his
                        or her stronghold while assembling a deck. The role card starts the game next to its owner's
                        stronghold and is revealed along with the stronghold during setup.
                    </p>
                    <ul>
                        <li>
                            Role cards are not considered in play. Their text affects the game state from the
                            out-of-play area while they are active beside a player's stronghold.
                        </li>
                        <li>
                            Cards <span class="new">that are printed as the</span> role card type cannot be removed from
                            the game by other card abilities.
                        </li>
                        <li>
                            In sanctioned tournament play, role card eligibility for each clan is determined by the
                            <span
                                    class="new"> Clan Roles webpage found at <a
                                    href="https://www.fantasyflightgames.com/en/op/l5r-lcg/roles/" target="_blank">https://www.fantasyflightgames.com/en/op/l5r-lcg/roles/</a></span>
                        </li>
                        <li>
                            <span class="new">Some cards have the text, "___ role only." This is a deckbuilding restriction, and is not active during gameplay.</span>
                        </li>
                    </ul>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Running Out of Cards</anchored-heading>
                    <p>
                        If a player attempts to replace a card on a province from his or her dynasty deck or draw a card
                        from his or her conflict deck and no cards remain in the deck, that player loses 5 honor, then
                        shuffles the corresponding discard pile and places it facedown to form a new dynasty or conflict
                        deck. That player then continues to replace the dynasty card or draw the conflict card.
                    </p>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Sacrifice</anchored-heading>
                    <p>
                        When a player is instructed to sacrifice a card, that player must select a card in play that he
                        or she controls and that matches the requirements of the sacrifice, and place it in his or her
                        discard pile.
                    </p>
                    <ul>
                        <li>
                            If the selected card does not leave play, the sacrifice is <span class="new">considered to have been prevented</span>.
                        </li>
                        <li>
                            Sacrificing a card does not satisfy other means (such as "discard") of a card leaving play.
                        </li>
                    </ul>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Search</anchored-heading>
                    <p>
                        When a player is instructed to search for a card, that player is permitted to look at all of the
                        cards in the searched area without revealing those cards to his or her opponent.
                    </p>
                    <ul>
                        <li>
                            If an effect searches an entire deck, the deck must be shuffled to the satisfaction of the
                            opponent upon completion of the search.
                        </li>
                        <li>
                            A player is not obliged to find the object of a search effect, even if the searched cards
                            contain a card that meets the eligibility requirements of the search.
                        </li>
                        <li>
                            If a search effect would add a card with specified characteristics to a hidden game area,
                            the player fulfilling the search must reveal the card to his or her opponent to verify that
                            the card is eligible to be found by the search.
                        </li>
                        <li>
                            While a game area (or a part of a game area) is being searched, the cards being searched are
                            considered to still be in that game area.
                        </li>
                    </ul>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Select</anchored-heading>
                    <p>
                        Some abilities instruct a player to select among multiple options.
                    </p>
                    <ul>
                        <li>
                            If a selection is required before the effect of the ability resolves (i.e., before the
                            dash), the selection is made during the same timing step in which targets are chosen.
                        </li>
                        <li>
                            If a selection is indicated after the dash of an ability's text, that selection is made
                            during the resolution of the effect.
                        </li>
                        <li>
                            Unless otherwise indicated by the ability, the controller of the ability is the player who
                            makes the selection.
                        </li>
                        <li>
                            For all selections, an option that has the potential to change the game state must be
                            chosen, if able.
                        </li>
                    </ul>
                    <p>
                        <b>Related:</b> <a href="#initiating-abilities-playing-cards">Initiating Abilities</a>
                    </p>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Self-referential Text</anchored-heading>
                    <p>
                        When a card's ability text refers to itself ("this character," "this province," etc.), the text
                        is referring to that copy only, and not to other copies (by title) of the card.
                    </p>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Set</anchored-heading>
                    <p>
                        <span class="new">See "<a href="#modifiers">Modifiers</a>" on page 11.</span>
                    </p>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Setup</anchored-heading>
                    <p>
                        To set up a game, perform the following steps in order:
                    </p>
                    <ol>
                        <li>
                            <b>Select decks</b>. Each player selects a deck using the deckbuilding rules. See "<a
                                href="#deckbuilding">Deckbuilding</a>" on page 5.
                        </li>
                        <li>
                            <b>Create token bank and unclaimed ring pool</b>. Place all fate tokens, honor tokens,
                            status tokens, and the Imperial Favor in a pile within reach of each player. This area is
                            known as the token bank. Place the rings near the token bank. This area is known as the
                            unclaimed ring pool.
                        </li>
                        <li>
                            <b>Determine first player</b>. Randomly select a player. That player will be the first
                            player. Place the first player token in front of this player. The player that is not
                            randomly selected to be the first player gains 1 fate from the general token pool and adds
                            it to their fate pool.
                        </li>
                        <li>
                            <b>Shuffle dynasty and conflict decks</b>. Each player shuffles both their dynasty and
                            conflict decks separately and presents them to the opponent for additional shuffling and/or
                            a final cut. Then each player places their dynasty deck to the left of their play area and
                            their conflict deck to the right.
                        </li>
                        <li>
                            <b>Place provinces and stronghold</b>. In player order, each player secretly selects one of
                            their provinces, places it facedown above their dynasty deck, and places their stronghold
                            card on top of it. If a player is using a role card, it is placed next to his or her
                            stronghold during this step. Each player then places their other four provinces facedown
                            between their dynasty and conflict decks, in any order.
                        </li>
                        <li>
                            <b>Fill provinces</b>. Each player places a card from the top of their dynasty deck facedown
                            onto each of their empty non-stronghold provinces. In player order, each player <span
                                class="new">looks at each of his or her cards placed in this manner and has one opportunity to</span>
                            mulligan any number of them.
                        </li>
                        <ul>
                            <li>
                                <b>Note:</b> After this step, a player may not look at facedown cards in his or her
                                provinces.
                            </li>
                        </ul>
                        <li>
                            <b>Draw starting hand</b>. Each player draws 4 cards from their conflict deck. In player
                            order, each player has one opportunity to mulligan any number of these cards.
                        </li>
                        <li>
                            <b>Gain starting honor</b>. Each player gains honor tokens equal to the honor value on their
                            stronghold.
                        </li>
                    </ol>
                    <p>
                        The game is now ready to begin.
                    </p>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Shuffle</anchored-heading>
                    <p>
                        The word "shuffle" is used as a shorthand that instructs a player to shuffle a deck that was
                        just searched. When a player is instructed to shuffle, only shuffle the deck or decks that were
                        affected by the ability.
                    </p>
                    <ul>
                        <li>
                            Each time a deck is shuffled, it must be randomized to the satisfaction of the opponent, and
                            upon completion of the shuffle presented to the opponent for additional shuffling and/or a
                            final cut.
                        </li>
                    </ul>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Sincerity</anchored-heading>
                    <p>
                        Sincerity is a keyword ability. When a card with the sincerity keyword leaves play, its
                        controller draws 1 card.
                    </p>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Skill</anchored-heading>
                    <p>
                        A character's effectiveness in various endeavors is measured by its skill. There are two types
                        of skill in the game, military skill and political skill.
                    </p>
                    <p>
                        Military skill (<span class="icon icon-conflict-military"></span>) is used to determine the
                        victor during military conflicts.
                    </p>
                    <p>
                        Political skill (<span class="icon icon-conflict-political"></span>) is used to determine the
                        victor during political conflicts.
                    </p>
                    <ul>
                        <li>
                            Total attacking skill is the sum of each ready participating character's skill (for the
                            appropriate conflict type) on the attacking player's side, plus any relevant modifiers.
                        </li>
                        <li>
                            Total defending skill is the sum of each ready participating character's skill (for the
                            appropriate conflict type) on the defending player's side, plus any relevant modifiers.
                        </li>
                        <li>
                            A player is not able to win a conflict if that player has a total attacking or defending
                            skill of zero.
                        </li>
                    </ul>
                    <p>
                        <em>A character's printed military skill can be found at the top of the banner beneath the cost,
                            in red.</em>
                    </p>
                    <p>
                        <em>A character's printed political skill can be found at the bottom of the banner beneath the
                            cost, in blue.</em>
                    </p>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Status Token</anchored-heading>
                    <p>
                        See <a href="#personal-honor-personal-dishonor">Personal Honor</a> on page 12.
                    </p>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Stronghold</anchored-heading>
                    <p>
                        A player's stronghold is considered in play. A stronghold card cannot leave play, <span
                            class="new">move from the stronghold province, be turned facedown</span>, or change control.
                    </p>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Switch</anchored-heading>
                    <p>
                        Some abilities use the word "switch." In order to use such an ability, switched items must exist
                        on each side of the switch.
                    </p>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Take</anchored-heading>
                    <p>
                        If a player is instructed to take a token (such as honor or fate) from another player, that
                        element is removed from the other player's token pool and added to the taking player's token
                        pool.
                    </p>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Target</anchored-heading>
                    <p>
                        The word "choose" indicates that one or more targets must be chosen in order for an ability to
                        resolve. The player resolving the effect must choose a game element (usually a card) that meets
                        the targeting requirements of the ability.
                    </p>
                    <ul>
                        <li>
                            The controller of a targeting ability chooses all targets for the effect unless otherwise
                            specified by the card.
                        </li>
                        <li>
                            If an ability requires the choosing of one or more targets, and there are not enough valid
                            targets to meet all of its targeting requirements, the ability cannot be initiated. This
                            initiation check is made at the same time the ability's play restrictions are checked.
                        </li>
                        <li>
                            At the time targets are chosen, any currently valid targets are eligible to be chosen. (This
                            choice is not restricted only to targets that were present during the initiation check.)
                        </li>
                        <li>
                            If multiple targets are required to be chosen by the same player, these are chosen
                            simultaneously.
                        </li>
                        <li>
                            An ability that can choose "any number" of targets does not successfully resolve (and cannot
                            change the game state) if zero of those targets are chosen. If there are zero eligible
                            targets for an ability that can choose "any number" of targets, the ability cannot initiate.
                        </li>
                        <li>
                            The resolution of some effects (such as post-then effects, or delayed effects) requires that
                            targets are chosen after the initiation of the effect. Such targets need not be verified
                            when checking play restrictions and determining whether or not the entire ability may
                            initiate. If there are no valid targets at the time such targets would be chosen, that
                            aspect of the effect fails to resolve.
                        </li>
                        <li>
                            A card is not an eligible target for an ability if the resolution of that ability's effect
                            could not affect the target at all. <em>(For example, a bowed character cannot be chosen as
                            the target for an ability that reads "<b>Action:</b> Choose a character &ndash; bow that
                            character.")</em>
                        </li>
                        <li>
                            Some abilities require the choice of a target that is not directly affected by the ability
                            &ndash;
                            the target is instead chosen as a reference point while resolving the ability. When choosing
                            referential targets, a player is not bound by the rule that a target is ineligible if the
                            resolution of the effect would not affect the chosen target.
                        </li>
                    </ul>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">The word "Then"</anchored-heading>
                    <p>
                        If the effect text of a card ability includes the word "then," the text preceding the word then
                        must be successfully resolved in full (i.e. the game state must change to reflect the intent of
                        the pre-then aspect of the effect in its entirety) before the remainder of the effect described
                        after the word "then" can be resolved.
                    </p>
                    <ul>
                        <li>
                            If the pre-then aspect of an effect does successfully resolve in full, the resolution of the
                            post-then aspect of the effect must also attempt to resolve.
                        </li>
                        <li>
                            If the pre-then aspect of an effect does not successfully resolve in full, the post-then
                            aspect does not attempt to resolve.
                        </li>
                    </ul>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Token Pool, General Token Pool</anchored-heading>
                    <p>
                        The token pool (also referred to as the general token pool) is created during setup and contains
                        all of the tokens and counters not currently controlled by any player.
                    </p>
                    <ul>
                        <li>
                            When a player gains fate or honor, that fate or honor is taken from the token pool and added
                            to that player's fate or honor pool. When a player spends or loses fate or honor, those
                            tokens are returned to the token pool.
                        </li>
                        <li>
                            When a card with any tokens or counters on it leaves play, those tokens and counters are
                            returned to the token pool.
                        </li>
                    </ul>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Tokens, Running Out of</anchored-heading>
                    <p>
                        There is no limit to the number of fate, honor, and personal status tokens which can be in the
                        game area at a given time. If players run out of the provided tokens, other tokens, counters, or
                        coins may be used to track the game state.
                    </p>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Traits</anchored-heading>
                    <p>
                        Most cards have one or more traits listed at the top of the text box and printed in <em>Bold
                        Italics</em>.
                    </p>
                    <ul>
                        <li>
                            <em>Traits</em> have no inherent effect on the game. Instead, some card abilities reference
                            cards that possess specific traits.
                        </li>
                    </ul>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Triggered Abilities</anchored-heading>
                    <p>
                        A boldface timing command followed by a colon indicates that an ability is a triggered ability.
                        Triggered abilities fall into one of the following types: actions, interrupts, and reactions.
                        Some interrupt and reaction abilities are also forced.
                    </p>
                    <ul>
                        <li>
                            Unless the timing command is prefaced by the word "Forced," all triggered abilities are
                            optional. They can be triggered (or not) by their controller at the ability's appropriate
                            timing point. Forced triggered abilities are triggered automatically by the game at the
                            ability's appropriate timing point.
                        </li>
                        <li>
                            Unless otherwise specified by the ability itself, each triggered ability may be triggered
                            once per round.
                        </li>
                        <li>
                            Triggered abilities are written in a <em>"triggering condition (and/or) cost (and/or)
                            targeting requirements &ndash; effect"</em> template. Ability text before the dash consists
                            of triggering conditions (and/or) costs (and/or) targeting requirements. Ability text after
                            the dash consists of effects. and may sometimes include targeting requirements that come
                            into play as the effect is being resolved.
                        </li>
                        <li>
                            If a triggered ability has no dash, the ability has no pre-dash content, and the entirety of
                            the ability is considered an effect.
                        </li>
                        <li>
                            A triggered ability can only be initiated if its effect has the potential to change the game
                            state on its own. This potential is assessed without taking into account the consequences of
                            the cost payment or <span class="new">the consequences of</span> any other ability
                            interactions.
                        </li>
                        <li>
                            A triggered ability can only be initiated if its cost (after modifiers) has the potential to
                            be paid in full.
                        </li>
                    </ul>
                    <p>
                        <b>Related:</b> <a href="#ability">Ability</a>, <a href="#action">Action</a>, <a
                            href="#cost">Cost</a>, <a href="#effect">Effect</a>, <a href="#interrupts">Interrupts</a>,
                        <a
                                href="#reactions">Reactions</a>, <a href="#target">Target</a>
                    </p>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Triggering Condition</anchored-heading>
                    <p>
                        A triggering condition is a specific occurrence that takes place in the game. On card abilities,
                        the triggering condition is the element of the ability that references such an occurrence,
                        indicating the timing point at which the ability may be used. The description of an ability's
                        triggering condition often follows the word "when" (for interrupt abilities) or the word "after"
                        (for reaction abilities).
                    </p>
                    <p>
                        If a single occurrence creates multiple triggering conditions (such as a single Earth ring
                        effect causing a player to draw a card and another player to discard a card), those triggering
                        conditions are handled in shared interrupt/reaction windows, in which abilities that refer to
                        any of the triggering conditions created by that occurrence may be used in any order.
                    </p>
                    <p>
                        The following is a sequence of possible interrupt and reaction opportunities that exists around
                        each triggering condition that may arise in a game:
                    </p>
                    <ol>
                        <li>
                            The triggering condition becomes imminent. (In other words, if it is not canceled, changed,
                            or otherwise preempted by interrupt abilities, the triggering condition is the next thing
                            that will occur in the game.)
                        </li>
                        <li>
                            Interrupt abilities that reference when the imminent triggering condition "would" occur may
                            be used. (<b>Note</b>: For effects, a "cancel" interrupt may prevent the effect from
                            initiating, and the initiation of the effect is a separate triggering condition that
                            precedes the effect's resolution. "Cancel" interrupts are the only type that will reference
                            the initiation of an effect.) If the imminent triggering condition is canceled, none of the
                            subsequent steps in this sequence occur. If the triggering condition is changed, the
                            original condition is no longer imminent, but the new triggering condition is now imminent.
                        </li>
                        <li>
                            Forced interrupts that reference the imminent triggering condition must resolve, in the
                            order determined by the first player. The standard interrupt window to the imminent
                            triggering condition opens. It closes after all players consecutively pass.
                        </li>
                        <li>
                            The triggering condition itself occurs.
                        </li>
                        <li>
                            Forced reactions that reference the triggering condition must resolve, in the order
                            determined by the first player.
                        </li>
                        <li>
                            The reaction window to the triggering condition opens. It closes after all players
                            consecutively pass.
                        </li>
                    </ol>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Unique Cards</anchored-heading>
                    <p>
                        A card with the ◦ symbol in front of its title is a unique card. Each player may only have a
                        maximum of one instance of each unique card, by title, in play.
                    </p>
                    <ul>
                        <li>
                            A player cannot take control of or bring into play a unique card if he or she already
                            controls or owns an in-play copy of that card.
                        </li>
                        <li>
                            <span class="new">A player cannot bring into play a unique card owned by his or her opponent if that opponent controls an in-play copy of that card.</span>
                        </li>
                        <li>
                            As a player action during the dynasty phase, a player may discard a copy (by title) of a
                            unique character from his or her hand or provinces to place 1 fate on an in-play copy of
                            that unique character he or she controls.
                        </li>
                    </ul>
                    <p>
                        <b>Related:</b> <a href="#duplicates">Duplicates</a>
                    </p>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Unopposed, Unopposed Conflict</anchored-heading>
                    <p>
                        A conflict is unopposed if the attacking player wins the conflict and the defending player
                        controls no participating characters at the time the conflict winner is determined.
                    </p>
                    <ul>
                        <li>
                            Each time the defending player loses an unopposed conflict, that player loses 1 honor. The
                            lost honor is returned to the general token pool. This occurs during framework <a
                                href="#3-2-4-apply-unopposed">step 3.2.4</a>.
                        </li>
                    </ul>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Winning a Conflict</anchored-heading>
                    <p>
                        Each conflict is won by the player who counts the highest total skill applicable for that
                        conflict type for his or her side when the conflict result is determined.
                    </p>
                    <ul>
                        <li>
                            A player's total skill is the sum of the skill matching the conflict type of each ready
                            participating character on his or her side of the conflict, along with any other modifiers
                            that are affecting the amount of skill the player counts for the conflict.
                        </li>
                        <li>
                            A player must count at least 1 total skill and there must be at least one participating
                            character on his or her side in order to win a conflict.
                        </li>
                        <li>
                            If the total skill counted on each side is tied at a value of 1 or greater (and the
                            attacking player controls at least one participating character), the attacking player wins
                            the conflict.
                        </li>
                        <li>
                            If neither player can meet the requirements of winning a conflict, neither player wins (or
                            loses) that conflict. When this occurs, return the contested ring to the unclaimed ring
                            pool.
                        </li>
                        <li>
                            Some card abilities reference a character "winning" a conflict. In order for a character to
                            be considered to have "won" a conflict, that character must be participating in the conflict
                            on the winning side at the time the ability resolves.
                        </li>
                        <li>
                            Some card abilities reference a character "losing" a conflict. In order for a character to
                            be considered to have "lost" a conflict, that character must be participating in the
                            conflict on the losing side at the time the ability resolves.
                        </li>
                    </ul>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Winning the Game</anchored-heading>
                    <p>
                        There are three primary paths to victory in the game. The game ends immediately if a player
                        meets one (or more) of these victory conditions:
                    </p>
                    <ul>
                        <li>
                            The first player to break the province protecting his or her opponent's stronghold wins the
                            game.
                        </li>
                        <li>
                            <span class="new">If a player's stronghold province is broken, that player loses the game.</span>
                        </li>
                        <li>
                            The first player to meet the condition of having 25 or more honor in his or her honor pool
                            wins the game.
                        </li>
                        <li>
                            The first player to have 0 honor in his or her honor pool is eliminated from the game,
                            causing that player's opponent to win.
                        </li>
                        <li>
                            Some card abilities can introduce additional victory conditions to the game. Such a
                            condition immediately ends the game if it is met.
                        </li>
                        <li>
                            If both players would reach a victory condition simultaneously, the first player wins the
                            game.
                        </li>
                    </ul>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Would</anchored-heading>
                    <p>
                        The word "would" is used to define the triggering condition of some interrupt abilities, and
                        establishes a higher priority for those abilities than interrupts to the same triggering
                        condition that lack the word "would."
                    </p>
                    <p>
                        All "would be X" interrupts are eligible to be used before any "is X" interrupts. This means
                        that an interrupt with the word "would" (such as "when a character would leave play") has timing
                        priority over an interrupt without the word "would" that references that same occurrence (such
                        as "when a character leaves play").
                    </p>
                    <ul>
                        <li>
                            If an interrupt to a triggering condition that would occur changes the nature of that which
                            is about to occur, no further interrupts to the original triggering condition may be used,
                            as that triggering condition is no longer imminent.
                        </li>
                    </ul>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">The letter "X"</anchored-heading>
                    <p>
                        Unless specified by a card ability or granted player choice, the letter X is always equal to 0.
                    </p>
                    <ul>
                        <li>
                            For costs involving the letter X, the value of X is defined by card ability or player
                            choice, after which the amount paid may be modified by effects without altering the value of
                            X.
                        </li>
                    </ul>
                </article>
            </section>
            <section>
                <anchored-heading @heading="add" :level="1">Appendix I: Timing and Gameplay</anchored-heading>
                <p>
                    This section provides a detailed overview of the phases and framework steps of an entire game round.
                    The "Phase Sequence Timing Chart" depicts each framework step and action window that occurs
                    throughout a game round. The "Framework Details" section explains how to handle each framework step
                    presented on the game's flow chart, in the order that the frameworks steps occur throughout the
                    round.
                </p>
                <anchored-heading @heading="add" :level="2">Framework Steps</anchored-heading>
                <p>
                    Numbered (or lettered) items presented in the darker <b>grey</b> boxes are known as framework steps.
                    Framework steps are mandatory occurrences dictated by the structure of the game. <b>Purple</b>
                    windows are special framework steps that indicate the possibility of the game returning to an
                    earlier framework step in the chart. These repetitive sequences can end in various ways, such as
                    when all players have performed the steps in a sequence, or when a player makes a specific decision.
                    Each purple window explains when and how the game either loops back or progresses to a later
                    framework step.
                </p>
                <anchored-heading @heading="add" :level="2">Action Windows</anchored-heading>
                <p>
                    An action ability may only be triggered during an action window. Action windows are presented in
                    lighter <b>orange</b> boxes on the chart. When most action windows open, the first player has the
                    first opportunity to initiate an action, or pass. The one exception to this is the action window
                    during the conflict phase, in which the defending player has the first opportunity to initiate an
                    action, or pass. Opportunities to initiate actions alternate between the players in player order
                    until all players consecutively pass, at which point the action window closes and the game advances
                    to the next step on the timing chart. Note that if a player passes his or her opportunity to act,
                    but the other opponent does not consecutively pass in sequence, the original player may still take
                    an action when the alternation of action opportunities returns to the player who had passed.
                </p>
                <p>
                    Resolve each action completely before the next action opportunity.
                </p>
                <p>
                    During each action window, players are permitted to play character and attachment cards from hand.
                    The one exception to this is step 1.4, during which playing character and attachment cards from hand
                    is prohibited.
                </p>
                <anchored-heading @heading="add" :level="2">Reactions and Interrupts</anchored-heading>
                <p>
                    A reaction ability to a framework effect may be initiated immediately after the completion of any
                    framework step.
                </p>
                <p>
                    An interrupt ability to a framework effect may be initiated during the resolution of that step,
                    interrupting the process of that step.
                </p>
                <anchored-heading @heading="add" :level="2">Phase Sequence Timing Chart</anchored-heading>
                <table class="chart">
                    <tr>
                        <td class="top">I. Dynasty Phase</td>
                    </tr>
                    <tr>
                        <td><b>1.1</b> Dynasty phase begins.</td>
                    </tr>
                    <tr>
                        <td><b>1.2</b> Reveal facedown dynasty cards.</td>
                    </tr>
                    <tr>
                        <td><b>1.3</b> Collect fate.</td>
                    </tr>
                    <tr>
                        <td class="action"><b>&diamond; 1.4 SPECIAL ACTION WINDOW</b><br><br> Players alternate playing
                            cards from provinces and/or triggering <b>Action</b> abilities.
                        </td>
                    </tr>
                    <tr>
                        <td><b>1.5</b> Dynasty phase ends.</td>
                    </tr>
                    <tr>
                        <td class="bottom">Proceed to Draw Phase.</td>
                    </tr>
                </table>
                <br>
                <table class="chart">
                    <tr>
                        <td class="top">II. Draw Phase</td>
                    </tr>
                    <tr>
                        <td><b>2.1</b> Draw phase begins.</td>
                    </tr>
                    <tr>
                        <td><b>2.2</b> Honor bid.</td>
                    </tr>
                    <tr>
                        <td><b>2.3</b> Reveal honor dials.</td>
                    </tr>
                    <tr>
                        <td><b>2.4</b> Transfer honor.</td>
                    </tr>
                    <tr>
                        <td><b>2.5</b> Draw cards.</td>
                    </tr>
                    <tr>
                        <td class="action"><b>&diamond; ACTION WINDOW</b></td>
                    </tr>
                    <tr>
                        <td><b>2.6</b> Draw phase ends.</td>
                    </tr>
                    <tr>
                        <td class="bottom">Proceed to Conflict Phase.</td>
                    </tr>
                </table>
                <br>
                <table class="chart">
                    <tr>
                        <td class="top">III. Conflict Phase</td>
                    </tr>
                    <tr>
                        <td><b>3.1</b> Conflict phase begins.</td>
                    </tr>
                    <tr>
                        <td class="action"><b>&diamond; ACTION WINDOW</b><br><br> <b>NOTE</b>: <em>After</em> this
                            action window, if no conflict opportunities remain, proceed to (<b>3.4</b>).
                        </td>
                    </tr>
                    <tr>
                        <td><b>3.2</b> Next player in player order declares a conflict (go to <b>Conflict Resolution</b>),
                            or passes (go to (<b>3.3</b>).
                        </td>
                    </tr>
                    <tr>
                        <td style="background-color: #DDA0DD"><b>3.3</b> Conflict Ends / Conflict was passed. Return to
                            the action window following step (<b>3.1</b>).
                        </td>
                    </tr>
                    <tr>
                        <td><b>3.4</b> Determine Imperial Favor.</td>
                    </tr>
                    <tr>
                        <td><b>3.4.1</b> Glory count.</td>
                    </tr>
                    <tr>
                        <td><b>3.4.2</b> Claim Imperial Favor.</td>
                    </tr>
                    <tr>
                        <td><b>3.5</b> Conflict phase ends.</td>
                    </tr>
                    <tr>
                        <td class="bottom">Proceed to Fate Phase.</td>
                    </tr>
                </table>
                <br>
                <table class="chart">
                    <tr>
                        <td class="top">Conflict Resolution</td>
                    </tr>
                    <tr>
                        <td><b>3.2</b> Declare conflict.</td>
                    </tr>
                    <tr>
                        <td><b>3.2.1</b> Declare defenders.</td>
                    </tr>
                    <tr>
                        <td class="action"><b>&diamond; 3.2.2 CONFLICT ACTION WINDOW</b><br> (Defender has first
                            opportunity)
                        </td>
                    </tr>
                    <tr>
                        <td><b>3.2.3</b> Compare skill values.</td>
                    </tr>
                    <tr>
                        <td><b>3.2.4</b> Apply unopposed.</td>
                    </tr>
                    <tr>
                        <td><b>3.2.5</b> Break province.</td>
                    </tr>
                    <tr>
                        <td><b>3.2.6</b> Resolve ring effects.</td>
                    </tr>
                    <tr>
                        <td><b>3.2.7</b> Claim ring.</td>
                    </tr>
                    <tr>
                        <td><b>3.2.8</b> Return home. Go to (<b>3.3</b>).</td>
                    </tr>
                </table>
                <br>
                <table class="chart">
                    <tr>
                        <td class="top">IV. Fate Phase</td>
                    </tr>
                    <tr>
                        <td><b>4.1</b> Fate phase begins.</td>
                    </tr>
                    <tr>
                        <td><b>4.2</b> Discard characters with no fate.</td>
                    </tr>
                    <tr>
                        <td><b>4.3</b> Remove fate from characters.</td>
                    </tr>
                    <tr>
                        <td><b>4.4</b> Place fate on unclaimed rings.</td>
                    </tr>
                    <tr>
                        <td class="action"><b>&diamond; ACTION WINDOW</b></td>
                    </tr>
                    <tr>
                        <td><b>4.5</b> Fate phase ends.</td>
                    </tr>
                    <tr>
                        <td class="bottom">Proceed to Regroup Phase.</td>
                    </tr>
                </table>
                <br>
                <table class="chart">
                    <tr>
                        <td class="top">V. Regroup Phase</td>
                    </tr>
                    <tr>
                        <td><b>5.1</b> Regroup phase begins.</td>
                    </tr>
                    <tr>
                        <td class="action"><b>&diamond; ACTION WINDOW</b></td>
                    </tr>
                    <tr>
                        <td><b>5.2</b> Ready cards.</td>
                    </tr>
                    <tr>
                        <td><b>5.3</b> Discard from provinces.</td>
                    </tr>
                    <tr>
                        <td><b>5.4</b> Return rings.</td>
                    </tr>
                    <tr>
                        <td><b>5.5</b> Pass first player token.</td>
                    </tr>
                    <tr>
                        <td><b>5.6</b> Regroup phase ends.</td>
                    </tr>
                    <tr>
                        <td class="bottom">Proceed to Dynasty Phase.</td>
                    </tr>
                </table>
                <anchored-heading @heading="add" :level="1">Framework Details</anchored-heading>
                <p>
                    Each of the following entries corresponds to the framework step of the same number on the Phase
                    Sequence Timing Chart.
                </p>
                <anchored-heading @heading="add" :level="2">1. Dynasty Phase</anchored-heading>
                <anchored-heading @heading="add" :level="3">1.1. Dynasty phase begins</anchored-heading>
                <p>
                    This step formalizes the beginning of the dynasty phase. As this is the first framework step of the
                    round, it also formalizes the beginning of a new game round.
                </p>
                <p>
                    The beginning of a phase is an important game milestone that may be referenced in card text, either
                    as a point at which an ability may or must resolve, or as a point at which a lasting effect or
                    constant ability begins or expires.
                </p>
                <anchored-heading @heading="add" :level="3">1.2. Reveal facedown dynasty cards</anchored-heading>
                <p>
                    In player order, each player turns each facedown dynasty card in each of his or her provinces
                    faceup. A player's cards are turned over one at a time, from the player's leftmost province to his
                    or her rightmost province.
                </p>
                <anchored-heading @heading="add" :level="3">1.3. Collect fate</anchored-heading>
                <p>
                    In player order, each player collects fate equal to the fate value on his or her stronghold card,
                    incorporating all active fate modifiers. This fate is taken from the general token pool and added to
                    the player's fate pool.
                </p>
                <anchored-heading @heading="add" :level="3">1.4. Play cards from provinces</anchored-heading>
                <p>
                    This is a special action window in which the opportunity to act alternates back and forth between
                    the players, in player order.
                </p>
                <p>
                    With his or her opportunity to act, a player may do one of the following:
                </p>
                <ul>
                    <li>
                        Play one character from his or her provinces.
                    </li>
                    <li>
                        Trigger an eligible action ability.
                    </li>
                    <li>
                        Discard a duplicate of a character from his or her hand or from one of his or her provinces to
                        place 1 fate on a copy of that character under his or her control.
                    </li>
                    <li>
                        Pass.
                    </li>
                </ul>
                <p>
                    <b>NOTE</b>: During this window, a player is not permitted to play character or attachment cards
                    from his or her hand.
                </p>
                <p>
                    To play a character from a province, a player removes a number of fate equal to the character's fate
                    cost from his or her fate pool, and returns that fate to the general token pool. The character
                    enters play and is placed in the player's home area. The player then has the option to place any
                    number of additional fate from his or her fate pool onto that character. Once this option to place
                    additional fate has been completed or passed, the province from which the character was played is
                    refilled facedown from the dynasty deck.
                </p>
                <p>
                    When a player passes, that player relinquishes all further opportunities to act during this phase.
                    (A player who has passed may still trigger interrupts and reactions to any eligible occurrence.) The
                    player to pass first gains 1 fate from the general token pool and adds it to his or her fate pool.
                    After one player has passed, the other player may continue to use action opportunities until he or
                    she also passes. Once both players have passed, this step is complete.
                </p>
                <anchored-heading @heading="add" :level="3">1.5. Dynasty phase ends</anchored-heading>
                <p>
                    This step formalizes the end of the dynasty phase.
                </p>
                <p>
                    The end of a phase is an important game milestone that may be referenced in card text, either as a
                    point at which an ability may or must resolve, or as a point at which a lasting effect or constant
                    ability expires or begins.
                </p>
                <anchored-heading @heading="add" :level="2">2. Draw Phase</anchored-heading>
                <anchored-heading @heading="add" :level="3">2.1. Draw phase begins</anchored-heading>
                <p>
                    This step formalizes the beginning of the draw phase.
                </p>
                <anchored-heading @heading="add" :level="3">2.2. Honor bid</anchored-heading>
                <p>
                    Each player secretly selects a number from 1 to 5 on his or her honor dial as his or her honor bid
                    for this round. Once both players have confirmed that they are ready, proceed to the next step.
                </p>
                <anchored-heading @heading="add" :level="3">2.3. Reveal honor dials</anchored-heading>
                <p>
                    The players simultaneously reveal their bids.
                </p>
                <p>
                    Once a player reveals an honor bid, the dial is placed next to the player's stronghold and remains
                    as a reference point until the next honor bid occurs.
                </p>
                <anchored-heading @heading="add" :level="3">2.4. Transfer honor</anchored-heading>
                <p>
                    The player with the higher honor bid must give an amount of honor to the player with the lower honor
                    bid that is equal to the difference between the two bids. If the bids are equal, no honor is
                    transferred during this step.
                </p>
                <anchored-heading @heading="add" :level="3">2.5. Draw cards</anchored-heading>
                <p>
                    Each player simultaneously draws X cards from his or her conflict deck. For each player, X is equal
                    to his or her honor bid.
                </p>
                <anchored-heading @heading="add" :level="3">2.6. Draw phase ends</anchored-heading>
                <p>
                    This step formalizes the end of the draw phase.
                </p>
                <anchored-heading @heading="add" :level="2">3. Conflict Phase</anchored-heading>
                <anchored-heading @heading="add" :level="3">3.1. Conflict phase begins</anchored-heading>
                <p>
                    This step formalizes the beginning of the conflict phase.
                </p>
                <anchored-heading @heading="add" :level="3">3.2. Declare conflict</anchored-heading>
                <p>
                    (Shares 3.2 with conflict resolution chart.)
                </p>
                <p>
                    During the conflict phase, each player is granted one opportunity to declare a military conflict and
                    one opportunity to declare a political conflict. These conflict opportunities alternate between
                    players with remaining conflict opportunities in player order until each player has declared a
                    conflict or passed on each of his or her conflict opportunities. A player's military and political
                    conflicts may be declared in either order during the round.
                </p>
                <p>
                    When a player has an opportunity to declare a conflict, that player may:
                </p>
                <span class="new">
			<ul>
                <li>
Declare a military conflict.</li>
                <li>
Declare a political conflict.</li>
				<li>
Pass.</li>
            </ul>
			<p>
If a conflict opportunity is passed, the player forfeits his or her right to use that opportunity this phase.
</p>
            </span>
                <p>
                    In order to declare a conflict, the attacking player must:
                </p>
                <ul>
                    <li>
                        Declare the type and element of the conflict to be initiated. This is indicated by selecting a
                        ring from the unclaimed ring pool (this ring is known as the contested ring, and defines the
                        element of the conflict), and placing it on an opponent's eligible unbroken province (this
                        indicates which province is being attacked) with either the military side or the political side
                        faceup (the faceup side of the contested ring defines the type of the conflict).
                    </li>
                </ul>
                <p>
                    If a player selects an unclaimed ring with fate on it to become the contested ring, that fate is
                    moved from the ring to the attacking player's fate pool.
                </p>
                <ul>
                    <li>
                        Declare which <b>ready</b> characters (under his or her control) are being committed as
                        attackers. The attacking player may declare any number of eligible characters under his or her
                        control as attackers. Slide these characters toward the center of the play area, away from the
                        attacking player's home area. At least one character must be declared as an attacker at this
                        time in order to initiate a conflict. If any of the attackers have the covert keyword, the
                        targets for covert are chosen at this time.
                    </li>
                </ul>
                <p>
                    Each of the above items are considered to be performed simultaneously. If any of the above cannot be
                    completed, the conflict cannot be initiated.
                </p>
                <p>
                    If the province being attacked is facedown, turn it faceup as soon as a conflict is successfully
                    declared against it. This occurs before any reactions to the process of conflict declaration may be
                    triggered.
                </p>
                <p>
                    Once a conflict has been declared, resolve that conflict before the next conflict is declared.
                </p>
                <p>
                    If no player has a conflict opportunity remaining when this step is reached, advance to step 3.4.
                </p>
                <anchored-heading @heading="add" :level="3">3.2.1. Declare defenders</anchored-heading>
                <p>
                    The defending player declares which &ndash; if any &ndash; ready characters (under his or her
                    control) are being committed as defenders. The defending player may declare any number of eligible
                    characters under his or her control as defenders. Slide these characters toward the center of the
                    play area, away from the defending player's home area. Declaring "no defenders" is also an option.
                </p>
                <anchored-heading @heading="add" :level="3">3.2.2. Conflict action window</anchored-heading>
                <p>
                    This is a special action window in which the defending player (rather than the first player) has the
                    first action opportunity. These opportunities then alternate between the players until both players
                    consecutively pass.
                </p>
                <p>
                    With an action opportunity, a player may:
                </p>
                <ul>
                    <li>
                        Activate an eligible action ability on a card he or she controls.
                    </li>
                    <li>
                        Play an event card with an action trigger from his or her hand.
                    </li>
                    <li>
                        Play an attachment card from hand, and attach it to any eligible character in play.
                    </li>
                    <li>
                        Play a character from hand, into the conflict, participating on that player's side. (Additional
                        fate from the player's fate pool may be placed on the character at this time.)
                    </li>
                    <li>
                        Play a character from hand into his or her home area. (Additional fate from the player's fate
                        pool may be placed on the character at this time.)
                    </li>
                    <li>
                        Pass.
                    </li>
                </ul>
                <p>
                    After using an action opportunity, a player must announce the total relevant skill present on both
                    sides of the conflict that would be counted if the conflict were to resolve with no further actions.
                </p>
                <p>
                    Once both players consecutively pass their action opportunities, proceed to the next step.
                </p>
                <anchored-heading @heading="add" :level="3">3.2.3. Compare skill values</anchored-heading>
                <p>
                    The conflict type indicates which skill value is used to resolve the conflict. During a military
                    conflict use military skill. During a political conflict use political skill.
                </p>
                <p>
                    First, determine the attacking player's total skill in the conflict by adding together the skill
                    (that matches the conflict type) of each ready attacking character and factor in all active
                    modifiers. Then determine the defending player's total skill in the conflict by adding together the
                    skill (that matches the conflict type) of each ready defending character and factor in all active
                    modifiers.
                </p>
                <p>
                    The player whose side has the higher total skill wins the conflict. In order to win a conflict, a
                    player must count a total skill of 1 or higher. In the case of a tie, the conflict is won by the
                    attacking player. If both players count 0 skill, the conflict resolves with no winner, and the ring
                    is returned to the pool of unclaimed rings.
                </p>
                <anchored-heading @heading="add" :level="3">3.2.4. Apply unopposed</anchored-heading>
                <p>
                    If the attacking player won the conflict and the defending player controls no participating
                    characters (in step 3.2.3), the conflict is considered "unopposed." The defending player loses 1
                    honor and returns it to the general token pool.
                </p>
                <p>
                    If the defending player or no player won the conflict, nothing happens during this step.
                </p>
                <anchored-heading @heading="add" :level="3">3.2.5. Break province</anchored-heading>
                <p>
                    If the attacking player won the conflict by an amount equal to or greater than the strength of the
                    attacked province (in step 3.2.3), the province is broken. Rotate the province 180 degrees to
                    indicate this.
                </p>
                <p>
                    If the attacking player wins a conflict and breaks a province, he or she may immediately discard any
                    dynasty card on that province. The card is replaced facedown from its controller's dynasty deck.
                </p>
                <p>
                    If the defending player or no player won the conflict, nothing happens during this step.
                </p>
                <anchored-heading @heading="add" :level="3">3.2.6. Resolve ring effects</anchored-heading>
                <p>
                    If the attacking player won the conflict (in step 3.2.3), that player may resolve the ring effect of
                    the contested ring. The ring effects are as follows:
                </p>
                <p>
                    <b>Air</b>: The attacking player takes 1 honor from his or her opponent, or gains 2 honor from the
                    general token pool.
                </p>
                <p>
                    <b>Earth</b>: The attacking player draws 1 card from his or her conflict deck and discards 1 card at
                    random from his or her opponent's hand.
                </p>
                <p>
                    <b>Fire</b>: The attacking player chooses a character in play, and chooses to honor or dishonor that
                    character.
                </p>
                <p>
                    <b>Water</b>: The attacker either chooses a character and readies it, or chooses a character with no
                    fate on it and bows it.
                </p>
                <p>
                    <b>Void</b>: The attacking player chooses a character and removes 1 fate from that character.
                </p>
                <p>
                    If the defending player or no player won the conflict, nothing happens during this step.
                </p>
                <anchored-heading @heading="add" :level="3">3.2.7. Claim ring</anchored-heading>
                <p>
                    The player who won the conflict (in step 3.2.3) claims the contested ring and adds it to his or her
                    claimed ring pool.
                </p>
                <p>
                    If no player won the conflict (in step 3.2.3), the ring is returned to the unclaimed ring pool.
                </p>
                <anchored-heading @heading="add" :level="3">3.2.8. Return home</anchored-heading>
                <p>
                    Simultaneously bow each ready participating character in the conflict. Return each participating
                    character to its controller's home area. These characters are no longer participating in the
                    conflict.
                </p>
                <anchored-heading @heading="add" :level="3">3.3. Conflict ends / Conflict was passed</anchored-heading>
                <p>
                    This step formalizes the end of a conflict, or that a conflict opportunity has been passed. Return
                    to the action window following step 3.1.
                </p>
                <anchored-heading @heading="add" :level="3">3.4. Determine Imperial Favor</anchored-heading>
                <p>
                    This step marks the beginning of the contest for the Imperial Favor.
                </p>
                <anchored-heading @heading="add" :level="3">3.4.1. Glory count</anchored-heading>
                <p>
                    Each player counts the total glory value of all ready characters he or she controls, factors in all
                    active modifiers, and adds 1 to this count for each ring in his or her claimed ring pool.
                </p>
                <p>
                    The players then compare their totals. The player with the higher total wins the glory count. If the
                    totals are tied, neither player wins the glory count.
                </p>
                <anchored-heading @heading="add" :level="3">3.4.2. Claim Imperial favor</anchored-heading>
                <p>
                    The player who won the glory count (in step 3.4.1) claims the Imperial Favor by taking the Imperial
                    Favor card, setting it to its military side or to its political side, and placing it next to his or
                    her stronghold. That player is said to "have the Imperial Favor," and the card may influence the
                    following game round. If a player who already has the Imperial Favor claims it again, the player may
                    set it to either side.
                </p>
                <p>
                    If players have the same total, the Imperial Favor remains in its current state (either unclaimed or
                    under the possession of the player who currently has it, remaining set on its current side).
                </p>
                <p>
                    This step also marks the end of the contest for the Imperial Favor.
                </p>
                <anchored-heading @heading="add" :level="3">3.5. Conflict phase ends</anchored-heading>
                <p>
                    This step formalizes the end of the conflict phase.
                </p>
                <anchored-heading @heading="add" :level="2">4. Fate Phase</anchored-heading>
                <anchored-heading @heading="add" :level="3">4.1. Fate phase begins</anchored-heading>
                <p>
                    This step formalizes the beginning of the fate phase.
                </p>
                <anchored-heading @heading="add" :level="3">4.2. Discard characters with no fate</anchored-heading>
                <p>
                    In player order, each player discards each character he or she controls with no fate on it. These
                    characters are discarded one at a time, in the order of the discarding player's choosing.
                </p>
                <anchored-heading @heading="add" :level="3">4.3. Remove fate from characters</anchored-heading>
                <p>
                    Simultaneously remove 1 fate from each character in play.
                </p>
                <anchored-heading @heading="add" :level="3">4.4. Place fate on unclaimed rings</anchored-heading>
                <p>
                    Simultaneously place 1 fate from the general token pool on each unclaimed ring.
                </p>
                <anchored-heading @heading="add" :level="3">4.5. Fate phase ends</anchored-heading>
                <p>
                    This step formalizes the end of the fate phase.
                </p>
                <anchored-heading @heading="add" :level="2">5. Regroup Phase</anchored-heading>
                <anchored-heading @heading="add" :level="3">5.1. Regroup phase begins</anchored-heading>
                <p>
                    This step formalizes the beginning of the regroup phase.
                </p>
                <anchored-heading @heading="add" :level="3">5.2. Ready cards</anchored-heading>
                <p>
                    Simultaneously ready each bowed card in play.
                </p>
                <anchored-heading @heading="add" :level="3">5.3. Discard from provinces</anchored-heading>
                <p>
                    In player order, each player must discard each faceup card from each his or her broken provinces,
                    and also has the opportunity to choose and discard any number of faceup dynasty cards from his or
                    her unbroken provinces.
                </p>
                <p>
                    Each card discarded in this manner is replaced facedown from its owner's dynasty deck.
                </p>
                <anchored-heading @heading="add" :level="3">5.4. Return rings</anchored-heading>
                <p>
                    Simultaneously return each claimed ring to the unclaimed ring pool.
                </p>
                <anchored-heading @heading="add" :level="3">5.5. Pass first player token</anchored-heading>
                <p>
                    The player with the first player token passes it to his or her opponent. That player becomes the
                    first player.
                </p>
                <anchored-heading @heading="add" :level="3">5.6. Regroup phase ends</anchored-heading>
                <p>
                    This step formalizes the end of the regroup phase.
                </p>
                <p>
                    As the regroup phase is the final phase in the round, this step also formalizes the end of the
                    round. Any active "until the end of the round" lasting effects expire at this time.
                </p>
                <p>
                    After this step is complete, play proceeds to the beginning of the dynasty phase of the next game
                    round.
                </p>
                <anchored-heading @heading="add" :level="2">Duel Timing</anchored-heading>
                <table class="chart">
                    <tr>
                        <td id="Duel_Timing" class="top">D. Duel Timing</td>
                    </tr>
                    <tr>
                        <td><b>D.1</b> Duel begins.</td>
                    </tr>
                    <tr>
                        <td><b>D.2</b> Establish challenger and challengee.</td>
                    </tr>
                    <tr>
                        <td><b>D.3</b> Duel honor bid.</td>
                    </tr>
                    <tr>
                        <td><b>D.4</b> Reveal honor dials.</td>
                    </tr>
                    <tr>
                        <td><b>D.5</b> Transfer honor.</td>
                    </tr>
                    <tr>
                        <td><b>D.6</b> Modify dueling skill.</td>
                    </tr>
                    <tr>
                        <td><b>D.7</b> Compare skill value and determine results.</td>
                    </tr>
                    <tr>
                        <td><b>D.8</b> Apply duel results.</td>
                    </tr>
                    <tr>
                        <td><b>D.9</b> Duel ends.</td>
                    </tr>
                </table>
                <anchored-heading @heading="add" :level="3">D.1. Duel begins</anchored-heading>
                <p>
                    A duel is initiated by the successful resolution of any action ability that challenges another
                    character to a duel. When such an ability resolves, this timing window opens.
                </p>
                <p>
                    This step formalizes the beginning of the duel.
                </p>
                <anchored-heading @heading="add" :level="3">D.2. Establish challenger and challengee</anchored-heading>
                <p>
                    The ability that initiated the duel (in step D.1) will have identified two characters that are
                    involved in the duel. The character controlled by the player who initiated the ability is the
                    challenger. The character controlled by his or her opponent is the challengee.
                </p>
                <anchored-heading @heading="add" :level="3">D.3. Duel honor bid</anchored-heading>
                <p>
                    Each player secretly selects a number from 1 to 5 on his or her honor dial as his or her honor bid
                    for this duel. Once both players have confirmed that they are ready, proceed to the next step.
                </p>
                <anchored-heading @heading="add" :level="3">D.4. Reveal honor dials</anchored-heading>
                <p>
                    The players simultaneously reveal their bids.
                </p>
                <p>
                    Once a player reveals an honor bid, the dial is placed next to the player's stronghold and remains
                    as a reference point until the next honor bid occurs.
                </p>
                <anchored-heading @heading="add" :level="3">D.5. Transfer honor</anchored-heading>
                <p>
                    The player with the higher honor bid must give an amount of honor to the player with the lower honor
                    bid that is equal to the difference between the two bids. If the bids are equal, no honor is
                    transferred during this step.
                </p>
                <anchored-heading @heading="add" :level="3">D.6. Modify dueling skill</anchored-heading>
                <p>
                    The ability that initiated the duel (in step D.1) established which type of skill (military or
                    political) is being used to determine the results of the duel. Each player adds his or her honor bid
                    to the specified skill of his or her character that is involved in the duel. This modification
                    persists until the end of the duel.
                </p>
                <ul>
                    <li>
                        <b>NOTE</b>: Any skill modifiers that were active at the time the duel was initiated are still
                        applicable during the duel.
                    </li>
                </ul>
                <anchored-heading @heading="add" :level="3">D.7. Compare skill values and determine result
                </anchored-heading>
                <p>
                    Compare the modified skill values of each character involved in the duel to determine the results.
                </p>
                <ul>
                    <li>
                        The player controlling the character with the higher skill value wins the duel.
                    </li>
                    <li>
                        The player controlling the character with the lower skill value loses the duel.
                    </li>
                    <li>
                        If the skill values are the same, neither player wins the duel, and neither player loses the
                        duel.
                    </li>
                </ul>
                <anchored-heading @heading="add" :level="3">D.8. Apply duel results</anchored-heading>
                <p>
                    The ability that initiated the duel (in step D.1) specified the consequences of this duel for the
                    winning and/or losing characters, or for the player(s) controlling those characters. Apply those
                    consequences during this step.
                </p>
                <anchored-heading @heading="add" :level="3">D.9. Duel ends</anchored-heading>
                <p>
                    This step formalizes the end of the duel. Return to the action window in which the duel was
                    initiated, with the next player in the sequence of actions having the next opportunity to act.
                </p>
                <p>
                    <b>NOTE</b>: There are no action windows during a duel, so players are not able to initiate actions
                    or play characters and attachments from their hands during the resolution of a duel. Applicable
                    interrupt and/or reaction abilities may be triggered during a duel.
                </p>
            </section>
            <section>
                <anchored-heading @heading="add" :level="1">Appendix II: Card Anatomy</anchored-heading>
                <p>
                    This section presents a detailed anatomy of each cardtype. Definitions of each element can be found
                    in the glossary.
                </p>
                <anchored-heading @heading="add" :level="3">Card Anatomy Key</anchored-heading>
                <ol>
                    <li>
                        <b>Title</b>: The name of the card.
                    </li>
                    <li>
                        <b>Cost</b>: The fate cost to play the card.
                    </li>
                    <li>
                        <b>Cardtype</b>: Indicates how a card is played or used during the course of the game.
                    </li>
                    <li>
                        <b>Clan Symbol</b>: The card's clan affiliation.
                    </li>
                    <li>
                        <b>Military Skill</b>: The character's military skill value.
                    </li>
                    <li>
                        <b>Bonus Military Skill</b>: The bonus value this card provides to the attached character's
                        military skill.
                    </li>
                    <li>
                        <b>Political Skill</b>: The character's political skill value.
                    </li>
                    <li>
                        <b>Bonus Political Skill</b>: The bonus value this card provides to the attached character's
                        political skill.
                    </li>
                    <li>
                        <b>Glory</b>: The card's glory value.
                    </li>
                    <li>
                        <b>Element</b>: This indicates the province's elemental affiliation.
                    </li>
                    <li>
                        <b>Strength</b>: The province's strength value.
                    </li>
                    <li>
                        <b>Bonus Strength</b>: The bonus strength provided to a province or stronghold if this holding
                        is in it.
                    </li>
                    <li>
                        <b>Starting Honor</b>: The amount of honor this stronghold provides at the start of the game.
                    </li>
                    <li>
                        <b>Fate Value</b>: The amount of fate this stronghold provides each dynasty phase.
                    </li>
                    <li>
                        <b>Influence Value</b>: The amount of influence this stronghold provides for deckbuilding.
                    </li>
                    <li>
                        <b>Traits</b>: Descriptive attributes that may be referenced by card abilities.
                    </li>
                    <li>
                        <b>Ability</b>: The card's special means of interacting with the game.
                    </li>
                    <li>
                        <b>Influence Cost</b>: The influence cost required to include this card in a conflict deck.
                    </li>
                    <li>
                        <b>Product Set Information</b>: Indicates this card's product of origin.
                    </li>
                </ol>
            </section>
            <section>
                <anchored-heading @heading="add" :level="1" class="new">Appendix III: Questions and Answers
                </anchored-heading>
                <p>
                    This section provides answers to a number of common questions that are asked about the game. The
                    entries are presented in a "question and answer" format, with the newest questions at the end of the
                    list.
                </p>
                <p class="question">
                    Can I trigger <a href="https://fiveringsdb.com/card/shameful-display" target="_blank">Shameful
                    Display</a> (Core, 24) if only one of the two chosen characters would change their honored status?
                </p>
                <p class="answer">
                    Yes. The rules state that you cannot trigger an ability if its effect would fail to change the game
                    state, but one of the chosen characters is changing their status so a game state change occurs.
                    Neither the honoring nor the dishonoring aspect of Shameful Display is dependent upon the other.
                </p>
                <p class="question">
                    Can I trigger the ability of <a href="https://fiveringsdb.com/card/akodo-toturi" target="_blank">Akodo
                    Toturi</a> (Core, 79) or <a
                        href="https://fiveringsdb.com/card/doji-hotaru" target="_blank">Doji Hotaru</a> (Core, 52) when
                    I win a corresponding challenge as the defender?
                </p>
                <p>
                    You can trigger the ability as the defender, but per <a href="#ring-effects">RRG "Ring Effects"</a>,
                    resolving the ring's effect instructs the attacking player to choose a target, draw cards, or gain
                    honor. Your opponent would resolve the ring's effect, not you.
                </p>
                <p class="question">
                    If I play <a href="https://fiveringsdb.com/card/let-go" target="_blank">Let Go</a> (Core, 155)
                    targeting my opponent's <a
                        href="https://fiveringsdb.com/card/watch-commander" target="_blank">Watch Commander</a> (Core,
                    133), does my opponent get to trigger their Watch Commander before it goes to the discard pile?
                </p>
                <p>
                    Yes. A card is considered to have been played when it reaches step 6 of the process of initiating
                    abilities (see <a
                        href="#initiating-abilities-playing-cards">RRG "Initiating Abilities / Playing Cards"</a>). The
                    effects of an event resolve at step 7. Therefore, when you play Let Go targeting your opponent's
                    Watch Commander, they will react to you playing Let Go before you resolve its effects.
                </p>
                <p class="question">
                    Can I use <a href="https://fiveringsdb.com/card/reprieve" target="_blank">Reprieve</a> (Core, 132)
                    to prevent a character from being sacrificed for a cost, such as that of <a
                        href="https://fiveringsdb.com/card/shosuro-actress" target="_blank">Shosuro Actress</a> (Core,
                    103) or <a
                        href="https://fiveringsdb.com/card/steadfast-witch-hunter"
                        target="_blank">Steadfast Witch Hunter</a> (Core, 35)? What about <a
                        href="https://fiveringsdb.com/card/way-of-the-crab" target="_blank">Way of the Crab</a> (Core,
                    137)?
                </p>
                <p>
                    Reprieve will prevent a character from being sacrificed. If that occurs during the payment of a cost
                    (Actress, Witch Hunter, Way of the Crab, etc.) then that cost is not considered to have been paid as
                    the sacrifice was prevented (see <a
                        href="#sacrifice">RRG "Sacrifice"</a>). However, this occurs during step 4 of the process of
                    initiating abilities (<a
                        href="#initiating-abilities-playing-cards">RRG "Initiating Abilities / Playing Cards"</a>),
                    which is before step 6 when the game determines whether an ability has been triggered. Therefore,
                    because the ability is not considered to have been used, it could be triggered again in the next
                    available action window. If an event is canceled in this way, it will remain unplayed in its owner's
                    hand (<a
                        href="#cost">RRG "Cost"</a>).
                </p>
                <p>
                    This is different from using Reprieve to prevent a character from being sacrificed to Way of the
                    Crab's effect. Because nothing is dependent upon whether or not the effect of Way of the Crab
                    resolved successfully, it does not matter that the sacrifice was prevented by Reprieve. In the same
                    way that an event whose effects were canceled by <a
                        href="https://fiveringsdb.com/card/voice-of-honor" target="_blank">Voice of Honor</a> (Core,
                    145) is still considered to have been played, Way of the Crab is still considered to have "resolved"
                    (albeit unsuccessfully) even if its effect is prevented by Reprieve.
                </p>
                <p class="question">
                    If my opponent plays <a href="https://fiveringsdb.com/card/banzai"
                                            target="_blank">Banzai!</a> (Core, 204) and I wish to cancel it with <a
                        href="https://fiveringsdb.com/card/voice-of-honor" target="_blank">Voice of Honor</a> (Core,
                    145), can I cancel the whole effect, or just half of it?
                </p>
                <p>
                    When your opponent plays Banzai!, they will select a target to receive +2<span
                        class="icon icon-conflict-military"></span>. You may interrupt to cancel this effect, which
                    would also cancel the option to repeat the ability. If you do not, and they choose to pay 1 honor to
                    resolve the ability again, then you have another opportunity to interrupt to cancel the (new) set of
                    effects that give +2<span
                        class="icon icon-conflict-military"></span> to a character. Thus, you can choose to cancel
                    either the entire card effect, just the second part of the card effect, or none of the card effect.
                </p>
                <p class="question">
                    Can I play <a href="https://fiveringsdb.com/card/way-of-the-crab" target="_blank">Way of the
                    Crab</a> (Core, 137) during the Dynasty Phase?
                </p>
                <p>
                    Yes. During the Dynasty Phase, you may play a character from a province or take an action, which
                    includes playing events from your hand.
                </p>
                <p class="question">
                    How does <a href="https://fiveringsdb.com/card/display-of-power" target="_blank">Display of
                    Power</a> (Core, 179) interact with cards such as <a
                        href="https://fiveringsdb.com/card/seeker-of-knowledge" target="_blank">Seeker of Knowledge</a>
                    (Core, 171) and <a
                        href="https://fiveringsdb.com/card/pilgrimage" target="_blank">Pilgrimage</a> (Core, 22)?
                </p>
                <p>
                    Display of Power is played during step 3.2.3 of conflict resolution, when the defending player loses
                    the conflict (see <a
                        href="#3-2-3-compare-skill-values">RRG "3.2.3. Compare skill values"</a>). It produces a delayed
                    effect that takes place during step 3.2.6, "Resolve Ring Effects" that cancels the normal effects of
                    ring resolution and replaces it with "resolve the ring effect as if you had won the conflict as the
                    attacking player." Losing honor for unopposed and breaking the province will occur before resolving
                    Display of Power's effect.
                </p>
                <p>
                    Should the Pilgrimage province not be broken when Display of Power resolves, the delayed effect of
                    Display takes precedence over Pilgrimage, canceling the normal resolution of Resolve Ring Effects
                    and replacing it with the adjusted means of resolution. However, the Pilgrimage effect ("cancel all
                    ring effects") still cancels the Display of Power's attempt to resolve the ring for the defender.
                    The defender claims the ring.
                </p>
                <p>
                    Because Display of Power interacts with the Resolve Ring Effects step rather than the specific
                    effect chosen by the attacker, the attacker does not have the option to choose a specific ring
                    effect to resolve when Seeker of Knowledge is attacking (or whether they would like to resolve a
                    ring effect at all). When Display of Power resolves the ring effect, the defender has the
                    opportunity to choose which ring effect they would like to resolve instead.
                </p>
                <p class="question">
                    If <a href="https://fiveringsdb.com/card/steward-of-law" target="_blank">Steward of Law</a> (Core,
                    139) is in a conflict, can an honored character be dishonored?
                </p>
                <p>
                    Yes. Steward of Law prevents characters from "becoming dishonored," which means "gaining the
                    dishonored status token." Most of the time this occurs through the act of dishonoring, but it would
                    also prevent the use of an ability that moved or placed a dishonored status token. If a character
                    could be dishonored without gaining a dishonored token (such as an honored character being
                    dishonored and returning to ordinary state), they will still do so.
                </p>
                <p class="question">
                    If I play <a href="https://fiveringsdb.com/card/way-of-the-lion" target="_blank">Way of the Lion</a>
                    (Core, 167) to double my character's base <span
                        class="icon icon-conflict-military"></span> skill, and then play a second Way of the Lion, what
                    is my character's new base <span
                        class="icon icon-conflict-military"></span> skill?
                </p>
                <p>
                    Way of the Lion doubles a character's base <span class="icon icon-conflict-military"></span> skill
                    and sets it to the new value. When you play a second copy of Way of the Lion, the new value will be
                    doubled (to now be quadruple the original skill value).
                </p>
                <p class="question">
                    If I use <a href="https://fiveringsdb.com/card/origami-master" target="_blank">Origami Master</a>'s
                    ability (Imperial Cycle, 84) to move an honored status token to another character, is that character
                    being honored? Does it allow <a
                        href="https://fiveringsdb.com/card/savvy-politician" target="_blank">Savvy Politician</a>'s
                    ability (Core, 45) to trigger?
                </p>
                <p>
                    If a character gains an honored status token through a card effect, it is "becoming honored,"
                    (gaining the honored status) which is different from "being honored" (going through the process of
                    honoring). This will not trigger effects such as that of Savvy Politician or <a
                        href="https://fiveringsdb.com/card/young-rumormonger" target="_blank">Young Rumormonger</a>
                    (Core Set, 101).
                </p>
                <p>
                    Note: If a character has both an honored status token and a dishonored status token, both are
                    discarded and the character is returned to an ordinary state. See <a
                        href="#personal-honor-personal-dishonor">RRG "Personal Honor, Personal Dishonor"</a>.
                </p>
            </section>
            <section>
                <anchored-heading @heading="add" :level="1" class="new">Appendix IV: Card Errata</anchored-heading>
                <p>
                    This section contains the official errata that have been made on individual cards in Legend of the
                    Five Rings: The Card Game. Errata overrides the originally printed information on the card it
                    applies to. Unless errata for a card appears below, the original English printing of that card and
                    all of its information is considered accurate, and overrides all other printings. This includes
                    translated cards, promotional cards, and printings which may appear in alternate products.
                </p>
                <h5>
                    <a href="https://fiveringsdb.com/card/kaiu-inventor" target="_blank">Kaiu Inventor</a> (Imperial
                    Cycle, 63)
                </h5>
                <p>
                    Should read: "...an additional time this round (or specified period)." <br> <i>(Changed "each" to
                    "this")</i>
                </p>
                <h5>
                    <a href="https://fiveringsdb.com/card/pit-trap" target="_blank">Pit Trap</a> (Imperial Cycle, 73)
                </h5>
                <p>
                    Should read: "Attach to a character. Play only on a character that is attacking." <br> <i>(Replaces
                    "Attach to an attacking character.")</i>
                </p>
                <h5>
                    <a href="https://fiveringsdb.com/card/ride-them-down" target="_blank">Ride Them Down</a> (Imperial
                    Cycle, 99)
                </h5>
                <p>
                    Should read: "...set the base strength of the attacked province to 1 until the end of the conflict."
                    <br> <i>(Added "until the end of the conflict.")</i>
                </p>
            </section>
        </div>
    </div>
</template>

<script>
  import defer from 'lodash/defer';

  const getChildrenTextContent = children => children.map(node => (node.children ? getChildrenTextContent(node.children) : node.text))
    .join('');

  export default {
    name: 'rules-reference',
    props: [],
    data() {
      return {
        headings: [],
      };
    },
    components: {
      AnchoredHeading: {
        props: {
          level: {
            type: Number,
            required: true,
          },
        },
        data() {
          const text = getChildrenTextContent(this.$slots.default);
          const shorttext = text.indexOf('(') > -1 ? text.substring(0, text.indexOf('(')).trim() : text;
          const headingId = shorttext
            .toLowerCase()
            .replace(/\W+/g, '-')
            .replace(/(^-|-$)/g, '')
          ;
          return {
            text,
            headingId,
          };
        },
        render(createElement) {
          return createElement(
            `h${this.level}`,
            [
              this.$slots.default,
              createElement('a', {
                attrs: {
                  name: this.headingId,
                  href: `#${this.headingId}`,
                  title: this.text,
                  class: 'anchor',
                  'data-level': this.level,
                },
                domProps: {
                  innerHTML: '&para;',
                },
              }),
              createElement('a', {
                attrs: {
                  href: '#top',
                  title: 'Back to Top',
                  class: 'back-to-top float-right',
                },
                domProps: {
                  innerHTML: '&uarr;',
                },
              }),
            ],
          );
        },
        mounted() {
          this.$emit('heading', {
            level: this.level,
            text: this.text,
            href: `#${this.headingId}`,
          });
        },
      },
    },
    methods: {
      add(heading) {
        this.headings.push(heading);
      },
      scroll(hashbang) {
        if (hashbang) {
          location.href = hashbang;
        }
      },
    },
    mounted() {
      this.$store.commit('changeDocumentTitle', 'Rules Reference');
      defer(this.scroll, this.$route.hash);
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped="scoped">
    .table-of-contents li {
        list-style: none;
    }

    .table-of-contents li.item-size-1 {
        font-size: 14px;
    }

    .table-of-contents li.item-size-2 {
        font-size: 12px;
        padding-left: 1em;
    }

    .table-of-contents li.item-size-3 {
        font-size: 10px;
        padding-left: 2em;
    }

    .contents {
        line-height: 1.6;
    }

    .contents .new {
        color: red;
    }

    .contents em {
        font-style: italic;
        font-weight: bold;
    }

    .contents table.chart {
        background-color: #dddddd;
        width: 22em;
        border-spacing: 0.5em;
    }

    .contents table.chart td {
        background-color: #bbbbbb;
        padding: 0.5em;
    }

    .contents table.chart td.top {
        background-color: #dddddd;
        font-size: 1.2em;
        font-weight: bold;
    }

    .contents table.chart td.bottom {
        background-color: #dddddd;
        text-align: center;
        font-weight: bold;
        font-style: italic;
    }

    .contents table.chart td.action {
        background-color: orange;
    }

    .contents p.question {
        font-style: italic;
        list-style: square;
        display: list-item;
        margin-left: 2rem;
    }
</style>
<style>
    .contents a.anchor, .contents a.back-to-top {
        color: lightgrey;
        padding-left: 5px;
    }

    .contents a.anchor:hover, .contents a.back-to-top:hover {
        color: #007bff;
        text-decoration: none;
    }

</style>
