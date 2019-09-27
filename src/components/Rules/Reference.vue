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
                Version 11
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
                        <b>Related:</b> <a href="#cost">Cost</a>, 
										<a href="#effects">Effects</a>, 
                                        <a href="#forced">Forced</a>, 
										<a href="#target">Target</a>, 
                                        <a href="#triggered-abilities">Triggered Abilities</a>
                    </p>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Action, Action Ability</anchored-heading>
                    <p>
                        An action ability is a triggered card ability that contains the boldface "<b>Action:</b>"
                        precursor. An action ability may be triggered by its controller during any action window 
                        (see <a href="#appendix-i-timing-and-gameplay">"Appendix I: Timing and Gameplay"</a>).
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
					<anchored-heading @heading="add" :level="2">Additional Conflicts</anchored-heading>
					<p>
					    Some card abilities allow a player to declare an additional conflict during the conflict phase. 
						The additional conflict created by such an effect is in addition to a player’s two normal conflict 
						opportunities. It does not replace the normal <span class="icon icon-conflict-military"></span> or 
                        <span class="icon icon-conflict-political"></span> conflict opportunity that player has each conflict 
						phase.
					</P>
				</article>
				<article>
					<anchored-heading @heading="add" :level="2">Additional Cost</anchored-heading>
					<p>
						Some card abilities require an additional cost to be played to play a card, trigger an ability, or 
						perform a framework step. If the additional cost cannot be paid, the game action cannot be initiated.
					</p>
					<ul>
						<li>
							All costs are paid simultaneously, including additional ones.
						</li>
					</ul>
					<p>
                        <b>Related:</b> <a href="#cost">Cost</a>
                    </p>
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
                            An attachment can only attach to a character in play, unless otherwise specified by the 
                            attachment's text.
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
                        Anatomy</a>".
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
                        <li>
                            If a card ability references a player’s honor bid, the ability is referencing the current setting 
                            on the player’s honor dial.
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
                            If three of a player's non-stronghold provinces are broken, that player's stronghold becomes 
                            an eligible province against which attacks may be made. If a player's stronghold province is 
                            broken, that player loses the game.
                        </li>
                        <li>
                            If a province breaks for any reason other than through standard conflict resolution, the 
                            opponent of the player who controls that province is considered to have broken the province.
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
                        abilities have timing priority over <em>all</em> other interrupts to the effect that is attempting
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
                            href="#appendix-ii-card-anatomy">Appendix II: Card Anatomy</a>".
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
                        Some card abilities use the word "challenge" to begin the process of resolving a duel between 
                        two characters. For the rules on how to resolve a duel, see 
                        "<a href="#duel-timing">Duel timing</a>".
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
                            Characters played from a player’s provinces can only be played during the dynasty phase. 
                            Characters played from a player’s hand can only be played during any action window
                            outside of the dynasty phase.
                        </li>
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
                        Anatomy</a>".
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
                    <anchored-heading @heading="add" :level="2">Composure</anchored-heading>
                    <p>
                        Composure is a variable keyword ability. A card with this keyword gains an additional ability 
                        while its controller’s honor bid is lower than that of one of his or her opponents.
                    </p>
                    <ul>
                        <li>
                            Most uses of the composure keyword grant a constant ability that modifies a character’s skills 
                            or glory. Some may grant triggered abilities that can only be used while a player has composure.
                        </li>
                        <li>
                            “You have composure” is the phrase indicating that a player’s composure keyword is active. It is 
                            used in reminder text to indicate that a player’s card has the ability granted by composure while 
                            their honor bid is lower than an opponent’s.
                        </li>
                    </ul>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Conflict</anchored-heading>
                    <p>
                        During the conflict phase, each player has two opportunities to declare a conflict against an opponent. 
                        For the rules on how to resolve conflicts, see <a href="#framework-details">Framework Details</a>.
                    </p>
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
						<li>
                            If a constant ability would cause a card to leave play, interrupt abilities cannot be used to 
							replace or prevent that constant ability.
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
                        copy, regardless of card type, text, deck of origin, artwork, or any other characteristic(s) of
                        the card(s).
                    </p>
					          <ul>
                        <li>
                            A card is considered to be a copy of itself, as it shares its own title.
                        </li>
                    </ul>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Copy (of a character)</anchored-heading>
                    <p>
                        Some card abilities may cause a character to become a copy of another character. When that happens, 
                        the character that is changing loses its name, cost, base skills and glory, traits, clan affiliation,
						and ability text. It gains the name, cost, base skills and glory, traits, clan affiliation,and ability 
						text of the copied character for the duration indicated by the card ability.
                    </p>
					<ul>
                        <li>
                            Cards that refer to a character’s printed text (skills, traits, abilities, etc.) still refer to 
                            the text physically printed on the card.
                        </li>
                        <li>
                            When a character becomes a copy of another character, only the base skills and printed characteristics 
                            are copied. If the character that is changing gains characteristics (such as traits or ability text) 
                            from another non-copy card ability (such as an event or attachment) then those characteristics are 
                            not lost.
                        </li>
                        <li>
                            A character can only become a copy of a unique character if its owner and/or controller does not also 
                            own or control a copy (by title) of that unique character.
                        </li>
                        <li>
                            Becoming a copy of another character replaces the character’s base skills and glory. This is not 
                            applying a modifier (dashes can be replaced).
                        </li>
                        <li>
                            A character cannot become a copy of another character if both characters have the same title.
                        </li>
                    </ul>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Cost</anchored-heading>
                    <p>
                        A card's cost is the numerical value that dictates how much fate must be paid to play the card 
                        from a player's hand or provinces.
                    </p>
                    <p>
                        Some triggered card abilities also have an ability cost. Any imperative instruction (other than 
                        "choose...," which denotes one or more targets must be chosen, or "select...," which denotes that 
                        one or more of a number of effects must be selected) that appears before the dash of a triggered 
                        ability is considered a part of that ability's cost. Some examples of ability cost instructions 
                        are: "Bow...," "Spend...," "Sacrifice...," "Lose...," "Dishonor...," and "Discard...." 
                    </p>
                    <ul>
						<li>
							Unless otherwise specified, a card effect that modifies a cost only modifies the fate cost.
						</li>
                        <li>
                            If a card has a dash as its printed fate cost, the card cannot be played. Its printed fate cost 
                            is considered to be 0 for the purposes of card abilities which require a numerical value.
                        </li>
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
					 <p>
                        <b>Related:</b> <a href="#additional-cost">Additional Cost</a>
                    </p>
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
                            When a conflict is initiated against a facedown province, resolve the covert keyword before 
							revealing that province.
                        </li>
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
                            When resolving an ability that references a "current" skill or glory count during a conflict, 
                            count the skill or glory values that would be used if the conflict were currently resolving.
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
                        be played into, or be put into play in conflicts of that type.
                    </p>
                    <ul>
                        <li>
                            Should a character with a dash skill value somehow end up participating in a conflict of the
                            corresponding type, that character is immediately removed from the conflict, and placed in
                            its controller's home area in a bowed state.
                        </li>
                        <li>
                            If a character has a dash for a skill value, that skill value cannot be modified by card abilities.
                        </li>
                        <li>
                            If a character has a dash for a skill value and a card ability requires a numerical value for that 
                            skill, treat the card as if it had an unmodifiable skill value of 0.
                        </li>
                        <li>
                            A character with a dash skill value cannot be involved in a duel of that skill type.
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
                            A player cannot include more than 1 card (by card title) from
                            the <a href="#appendix-v-restricted-list">Restricted List</a> in their decks and set of
                            provinces. Up to a full legal playset (usually 3 copies) of that card may be included in 
                            the appropriate deck or provinces.
                        </li>
                        <li>
                            A player's set of provinces must include exactly 5 provinces. For each element, that player 
                            must choose one province associated with that element, such that all five elements are
							represented among their set of provinces. (Each province has a ring symbol in the lower right
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
                        If a card has the text "Limit X per deck" no more than X copies of that
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
                            When a delayed effect resolves, it is still considered to be an
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
                    <anchored-heading @heading="add" :level="2">Disguised</anchored-heading>
                    <p>
                        The disguised keyword appears on unique characters. When a character is played using the disguised keyword, 
                        it replaces a non-unique character of the correct <em>Trait</em> or clan affiliation, inheriting all of that 
                        character’s attachments, fate, and status tokens. This is an alternate means by which to play a character
                        and carries a number of unique rules including, but not limited to, an additional cost of choosing and 
                        discarding a non-unique character to discard when the disguised character enters play.
                    </p>
                    <ul>
                        <li>
                            When playing a character using the disguised keyword, you may play that character during the conflict 
                            phase, following all timing rules which apply to playing characters from hand.
                        </li>
                        <li>
                            To play a character using the disguised keyword, you must choose a non-unique character you control of 
                            the appropriate <em>Trait</em> or clan affiliation as an additional cost to play the character. Reduce 
                            the cost to play the disguised character by the printed cost of the chosen character, pay that cost and 
							put the disguised into play, then move all attachments and tokens (fate, status, etc.) from the chosen 
							character to the disguised character. Finally, discard the chosen character from play. Interrupts cannot 
							be used to replace or prevent this discard.
                        </li>
                        <li>
                            A character played using the disguised keyword cannot be played into a conflict unless the character 
                            chosen by the keyword was also participating in the conflict, and fate from your fate pool cannot be 
                            put on it.
                        </li>
                        <li>
                            A character played using this keyword enters play ready.
                        </li>
                        
                    </ul>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Dishonored, Dishonored Status Token</anchored-heading>
                    <p>
                        See "<a href="#personal-honor-personal-dishonor">Personal Honor, Personal Dishonor</a>".
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
                        Some card abilities initiate a duel between two (or more) characters. For the
                        rules on how to initiate and resolve a duel, see "<a href="#duel-timing">D. Duel Timing</a>".
                    </p>
                    <ul>
						<li>
							Most card abilities that initiate a duel use the phrase “initiate a [type] duel.” The characters chosen 
							during duel initiation are considered to be chosen as targets of the ability that initiates the duel.
						</li>
                    </ul>
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
                        <b>Related:</b> <a href="#unique-cards">Unique Cards</a>
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
                            If an ability instructs a player to pick among multiple effects, an effect that has the
                            potential to change the game state must be picked.
                        </li>
						<li>
							Unless an effect uses the word “then” or the phrase “if you do,” all effects of a card ability 
							are resolved simultaneously. The decision whether to resolve any optional effects (usually
							indicated by the word “may”) is made before applying the results of the ability’s effects.
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
                            Lasting effects, including those created by event cards engage the game 
                            state at the time they resolve. If an event card creates a
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
                        For event card anatomy, see "<a href="#appendix-ii-card-anatomy">Appendix II: Card Anatomy</a>".
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
                            A facedown province is considered to be a different entity than its faceup side. 
                            While a province is facedown, its faceup side is considered to be out of play. When a 
                            province is turned faceup, the "faceup province" and "facedown province" simultaneously 
                            exchange positions, such that the facedown province is now out of play and the faceup 
                            province is now in play. The opposite is true when a province is turned facedown.
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
                            Whenever a player plays a character from his or her hand or provinces, after that character 
                            enters play, that player has the option of placing any number of fate from his or her
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
                            If two or more forced and/or mandatory abilities (such as keywords) would initiate at the 
                            same moment, the first player determines the order in which the abilities initiate, 
                            regardless of who controls the cards bearing those abilities.
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
                            If a player gains fate or honor, that player takes the specified amount of fate or honor and adds 
                            it to their fate pool or honor pool. Unless that player is gaining the fate or honor from a specific 
                            source, the token is taken from the general token pool.
                        </li>
                        <li>
                            If a card gains a characteristic (such as a <em>Trait</em>, a keyword, or ability text), the
                            card functions as if it possesses the gained characteristic. Gained characteristics are not
                            considered to be printed on the card.
                        </li>
                    </ul>
                    <p>
                        <b>Related:</b> <a href="#give">Give</a>, <a href="#loses">Loses</a>, <a href="#printed">Printed</a>, 
					<a href="#take">Take</a>
                    </p>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Give</anchored-heading>
                    <p>
                        If a player is instructed to give tokens to another player, those tokens are removed from the giving 
                        player’s pool of tokens (or specified game area), and are added to the other player’s token pool.
                    </p>
                    <ul>
                        The player giving the tokens is considered to be losing the tokens and the other player is considered 
                        to be gaining the tokens.
                    </ul>
                    <p>
                        <b>Related:</b> <a href="#gains">Gains</a>, <a href="#loses">Loses</a>, <a href="#take">Take</a>
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
                        <b>Related:</b> <a href="#personal-honor-personal-dishonor">Personal Honor, Personal Dishonor</a>, 
                                        <a href="#glory-count">Glory Count</a>
                    </p>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Glory Count</anchored-heading>
                    <p>
                        When the players are asked to perform a glory count, each player counts the total glory value among 
                        the ready characters he or she controls, and adds 1 to the total for each ring in his or her claimed
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
                            Some card abilities may require the players to perform a glory count. Glory counts required by card
                            abilities are made in the same manner, and the ability will detail how to process the
                            result. Such counts do not affect the status of the Imperial Favor, unless the ability text
                            causes the Imperial Favor status to change.
                        </li>
                        <li>
                          Other card abilities may require players to count current glory among their characters, or a subset 
                          of their characters. This is different from a glory count, and rings in a player's claimed ring pool 
                          are not added. For such card abilities, players count current glory among their specified characters 
                          in the same way they would count current <span class="icon icon-conflict-military"></span> or 
                          <span class="icon icon-conflict-political"></span> skill.
                        </li>
                    </ul>
                    <p>
                        <b>Related:</b> <a href="#imperial-favor-imperial-favor-contest">Imperial Favor</a>, 
                                        <a href="#current">Current</a>
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
                        For holding card anatomy, see "<a href="#appendix-ii-card-anatomy">Appendix II: Card Anatomy</a>".
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
                            href="#2-2-honor-bid">2.2. Honor bid</a>") and during duels. Honor also serves as
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
                        See "<a href="#personal-honor-personal-dishonor">Personal Honor, Personal Dishonor</a>".
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
                            applies to the <em>player's</em> total skill that is counted for the conflict, but does not
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
                        <li>
                            If a card enters or leaves play, any lasting effects, delayed effects, or pending effects that are 
                            currently or about to interact with that card no longer do so. This is also true if a card transitions 
                            from one out-of-play area to another (such as going from hand to discard pile).
                        </li>
                        <li>
                            If a card would enter a deck of the incorrect deck type (conflict or dynasty), it is put into the 
                            discard pile of its owner corresponding to its correct deck type instead.
                        </li>
                        <li>
                            If a dynasty card would enter a player’s hand of conflict cards, it is put into its owner’s discard 
                            pile instead.
                        </li>
                    </ul>
                    <p>
                        <b>Related:</b> <a href="#enters-play">Enters Play</a>, <a href="#leaves-play">Leaves Play</a>,
                        <a href="#play-and-put-into-play">Play and Put Into Play</a>
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
                        <i><b>Example:</b> Tom is building a Lion Clan deck, and has 10 influence to spend on
                            out-of-clan cards, as indicated by the Lion stronghold, Shiro no Yojin. He must spend all of
                            his influence on cards from a single clan. He chooses to select cards from the Crane Clan.
                            Tom decides to include 3 copies of Admit Defeat (2 influence cost each), 3 copies of The
                            Perfect Gift (1 influence cost each), and 1 copy of Duelist Training (1 influence cost). As
                            this is all of Tom's influence, he cannot include any other Crane Clan cards in his conflict
                            deck. All of the other cards in Tom's conflict deck must either be from the Lion Clan, or be
                            neutral.</i>
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
                            there are not enough eligible targets for the ability, the process cannot proceed.
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
                            interrupt ability that cancels this initiation may be used at this time. 
                        </li>
                        <li>
                            The card enters play, or the effects of the ability (if not canceled in step 6) complete their 
                            initiation, and resolve.
                        </li>
                        <li>
                            At this time the card is considered "played" or the ability "triggered."
                        </li>
                    </ol>
                    <p>
                        Interrupts and reactions may be used throughout this process as normal, should their triggering
                        conditions occur.
                    </p>
                    <p>
                        <b>Related:</b> <a href="#ability">Ability</a>, 
										<a href="#cost">Cost</a>, 
										<a href="#effects">Effects</a>, 
										<a href="#resolve-an-ability">Resolve an Ability</a>, 
										<a href="#target">Target</a>
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
                        A keyword is a card ability which conveys specific rules to its card. The keywords in the game
                        are: <a href="#ancestral">Ancestral</a>, <a href="#composure">Composure</a>,
                             <a href="#courtesy">Courtesy</a>, <a href="#covert">Covert</a>, 
                             <a href="#disguised">Disguised</a>, <a href="#limited">Limited</a>, 
                             <a href="#no-attachments">No Attachments</a>, <a href="#pride">Pride</a>, 
                             <a href="#restricted">Restricted</a>, and <a href="#sincerity">Sincerity</a>.
                    </p>
                    <ul>
                        <li>
                            Sometimes a keyword is followed by reminder text, which is presented in italics. Reminder
                            text is a shorthand explanation of how a keyword works, but it is not rules text and does
                            not replace the rules for that keyword in this glossary.
                        </li>
                        <li>
                            A card can have multiple instances of the same keyword. However, a card that does so functions as 
                            if it has one instance of that keyword, and the keyword will only resolve once per triggering condition.
                            Variable keywords (see below) are an exception: if a card has multiple instances of a variable 
                            keyword, each of those instances acts on the card independently.
                        </li>
                        <li>
                            Some keywords, such as Composure, are variable keywords. Variable keywords operate in the same 
                            way as other keywords, but their effects are unique on a card-by-card basis. Each variable keyword 
                            has the same condition in which they become active, but different effects based on the individual 
                            card’s text.
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
                            If a card leaves play and re-enters play during the same period, or if a card transitions from one 
                            out-of-play area to another (such as going from hand to discard pile), it is considered a new instance 
                            of the card. There is no memory of having used the ability during the specified period for any new 
                            instance of a card. (This rule also applies to any ability with no specified limit.)
                        </li>
                        <li>
                            If a card triggers its ability from a hidden out-of-play area (such as a hand or deck) but does not 
                            leave that hidden area, that ability may be triggered again because it is considered a new instance 
                            of the card.
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
                        <b>Related:</b> <a href="#limits-of-triggered-abilities">Limits of Triggered Abilities</a>, 
                                        <a href="#max-x-per-period">Max X per [period]</a>
                    </p>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Limits of Triggered Abilities</anchored-heading>
                    <p>
                        Unless otherwise specified, each triggered ability can only be used once per game round. This general 
                        restriction applies to any triggered ability that does not have “Limit X per [period]” printed as part 
                        of the ability’s text.
                    </p>
                    <ul>
                        <li>
                            If a card leaves play and re-enters play during the same period, or if a card transitions from one 
                            out-of-play area to another (such as going from hand to discard pile), it is considered a new instance 
                            of the card. There is no memory of having used the ability for any new instance of a card for the purposes 
                            of this general restriction.
                        </li>
                        <li>
                            If a card triggers its ability from a hidden out-of-play area (such as a hand or deck) but does not leave 
                            that hidden area, that ability may be triggered again because it is considered a new instance of the card.
                        </li>
                        <li>
                            All limits are player specific.
                        </li>
                        <li>
                            If the effects of an ability are canceled, the use of the ability is still counted against the general 
                            restriction of only once per game round.
                        </li>
                    </ul>
                    <p>
                        <b>Related:</b> <a href="#limit-x-per-period">Limit X per [period]</a> 
                                        <a href="#max-x-per-period">Max X per [period]</a>
                    </p>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Loses</anchored-heading>
                    <p>
                        If a player loses fate or honor, that player takes the specified amount of fate or honor and removes it 
                        from their fate pool or honor pool. Unless that player is moving the fate or honor to a specific 
                        destination, the token is returned to the general token pool.
                    </p>
                    <ul>
                        When tokens are removed from a card, that card is considered to lose those tokens. If the tokens are not
                        moved to a specific destination, return them to the general token pool.
                    </ul>
                    <p>
                        <b>Related:</b> <a href="#gains">Gains</a>, <a href="#give">Give</a>, <a href="#take">Take</a>
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
                            An ability's maximum value cannot be modified.
                        </li>
                    </ul>
                    <p>
                        <b>Related:</b> <a href="#limit-x-per-period">Limit X per [period]</a>,
                                        <a href="#limits-of-triggered-abilities">Limits of Triggered Abilities</a>
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
                        <li>
                            If a value “cannot be increased/decreased,” any modifiers to that value that would increase/decrease 
							it are ignored for the duration of the “cannot be increased/decreased” effect, even if those 
							modifiers were applied before applying the “cannot be increased/decreased” effect.
                        </li>
                        <ul>
                            <li>
                                “Set” modifiers are not ignored, as they do not directly increase/decrease the value.
                            </li>
                        </ul>
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
                            After a player mulligans the cards in their provinces, they may look at the new cards before drawing 
                            their conflict hand.
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
                    <anchored-heading @heading="add" :level="2">Ordinary</anchored-heading>
                    <p>
                        See "<a href="#personal-honor-personal-dishonor">Personal Honor, Personal Dishonor</a>".
                    </p>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Own, Ownership</anchored-heading>
                    <p>
                        See "<a href="#control-and-ownership">Control and Ownership</a>".
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
                            attacker or defender for, move into, be played into, or put into play in that conflict. If an 
                            already participating character gains "cannot participate" status during a conflict, move it 
							home bowed.
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
                            Should a character have both an honored status token and a dishonored status token at the same time, 
                            discard both tokens. The character returns to the ordinary state.
                        </li>
			<li>
			    If a character enters play honored or dishonored, abilities cannot be triggered from that character 
                            becoming honored or dishonored, as it enters play already with that status.
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
                            In order to <em>play</em> a card, its fate cost (after modifiers) must be paid.
                        </li>
                        <li>
                            When a card is <em>put into play</em>, its fate cost is ignored.
                        </li>
                        <li>
                            Unless otherwise instructed by the put into play effect, characters that enter play in this 
                            manner do so ready and at home. Non-character cards that enter play in this
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
                            If a province has more than one card in it, those cards are considered to all be in the same province. 
                            Characters can be played and holdings provide their bonuses. Do not refill a province until it is empty.
                        </li>
                        <li>
                            Each player’s non-stronghold provinces are placed in a linear row in front of that player. Each of 
                            those provinces is adjacent to the province immediately to its left and right. A player’s stronghold 
                            province is not adjacent to any other province.
                        </li>
                        <li>
                            Each province has one or more elements associated with it. A province with a fivefold <i>tomoe</i> symbol 
                            in place of a single element, such as Toshi Ranbo (Inheritance Cycle, 1), counts as a province of all five 
                            elements at all times and can be selected during deck construction to fulfill the province slot of any 
                            element.
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
					<li>
						Cards that have been removed from the game are faceup, open information that is available 
						to both players, unless otherwise specified.
					</li>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Replacement Effects</anchored-heading>
                    <p>
                        A replacement effect is an effect (usually an interrupt) that replaces the resolution of a
                        triggering condition with a different means of resolving the same triggering condition, but in
                        such a manner that the triggering condition is still considered to occur for the purposes of paying 
                        non-sacrifice costs. The word "instead" is frequently indicative of such an effect. After all interrupts 
                        to the triggering condition have resolved and it is time to resolve the triggering condition itself, 
                        the replacement effect resolves instead.
                    </p>
                    <ul>
                        <li>
                            If multiple replacement effects are initiated against the same triggering condition, the
                            most recently initiated replacement effect is the one used for the resolution of the
                            triggering condition.
                        </li>
                        <li>
                            If the new resolution of a triggering condition caused by a replacement effect would not change the 
                            game state, that replacement effect cannot be initiated.
                        </li>
                    </ul>
                    <p>
                        <b>Related:</b> <a href="#would">"Would"</a>
                    </p>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">"Resolve an Ability"</anchored-heading>
					<p>
						Some abilities instruct a player to “resolve an ability” or “resolve this ability twice.” To resolve 
						a triggered ability, resolve all text after the bold timing word (action, reaction, or interrupt),
						paying all ability costs, choosing any relevant targets, and resolving the ability’s effect.
					</p>
					<ul>
						<li>
							When resolving a card’s ability, that card is not being played, and its fate cost (or other costs 
							associated with playing the card) are not paid.
						</li>
					</ul>
                    <p>
                        <b>Related:</b> <a href="#initiating-abilities-playing-cards">Initiating Abilities / Playing Cards</a>
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
                            A player may choose to play a third restricted attachment onto a character, but that character's 
                            controller must immediately choose and discard one of its restricted attachments when the new attachment 
                            enters play.
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
			<li>
			    When a province is revealed by a card effect, it remains faceup until a card or game effect turns it facedown.
			</li>
                    </ul>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Rings</anchored-heading>
                    <p>
                        Rings, represented by double-sided tokens, are used to determine the type and element of
                        conflicts. Each ring exists in one or more of three states, as follows:
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
                        Each ring in a player's claimed ring pool is a claimed ring.
                    </p>
                    <ul>
                        <li>
                            While performing a glory count, each player adds 1 to his or her total for each ring in his or her 
							claimed ring pool.
                        </li>
                        <li>
                            During the fate phase, place 1 fate on each unclaimed ring.
                        </li>
                        <li>
                            When a ring becomes the contested ring in a conflict, move all fate on that ring to the
                            attacking player's fate pool.
                        </li>
                        <li>
                            When a ring is claimed, it is still considered to be contested until all reactions to its claiming 
							have resolved.
                        </li>
						<li>
							A card effect that refers to “the [ELEMENT] ring” refers to any ring that has that element.
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
                            When a player is instructed to resolve multiple ring effects, they resolve each effect 
							(or pass on that effect) in its entirety before resolving the next ring effect.
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
                            Cards that are printed as the role card type cannot be removed from
                            the game by other card abilities.
                        </li>
                        <li>
                            In sanctioned tournament play, eligibility for Keeper and Seeker roles for each clan is 
							determined by the Clan Roles webpage found at 
							<a href="https://www.fantasyflightgames.com/en/op/l5r-lcg/roles/" target="_blank">
                            https://www.fantasyflightgames.com/en/op/l5r-lcg/roles/</a>
                        </li>
						<li>
							Each non-Keeper, non-Seeker role is available to all clans regardless of the clan role eligibility. 
                            This is in addition to any Keeper or Seeker role(s) available to that clan.
						</li>
                        <li>
                            Some cards have the text, "___ role only." This is a deckbuilding restriction, and is not active 
                            during gameplay.
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
                            If the selected card does not leave play, the sacrifice is considered to have been prevented.
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
                        See "<a href="#modifiers">Modifiers</a>".
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
                                href="#deckbuilding">Deckbuilding</a>".
                        </li>
                        <li>
                            <b>Create token bank and unclaimed ring pool</b>. Place all fate tokens, honor tokens,
                            status tokens, and the Imperial Favor in a pile within reach of each player. This area is
                            known as the token bank. Place the rings near the token bank. This area is known as the
                            unclaimed ring pool.
                        </li>
                        <li>
                            <b>Determine first player</b>. Randomly select a player. That player will be the first
                            player. Place the first player token in front of this player.
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
                            onto each of their empty non-stronghold provinces. In player order, each player looks at each 
                            of his or her cards placed in this manner and has one opportunity to mulligan any number of them.
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
                        See <a href="#personal-honor-personal-dishonor">Personal Honor</a>.
                    </p>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Stronghold</anchored-heading>
                    <p>
                        A player's stronghold is considered in play. A stronghold card cannot leave play, move from the 
                        stronghold province, be turned facedown, or change control.
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
                    <ul>
                        The player taking the tokens is considered to be gaining the tokens and the other player is 
                        considered to be losing the tokens.
                    </ul>
                    <p>
                        <b>Related:</b> <a href="#gains">Gains</a>, <a href="#give">Give</a>, <a href="#loses">Loses</a>
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
                            Most card abilities that initiate a duel (see <a href="#duel-timing">Duel Timing</a>) use the phrase 
                            “initiate a [type] duel.” The characters chosen during duel initiation are considered to be chosen 
                            as targets of the ability that initiates the duel.
                        </li>
                        <li>
                            An ability that can choose “any number” of targets, or “up to X” targets, can successfully 
                            resolve if zero such targets are chosen, unless choosing zero such targets would cause the 
                            resolution of the ability’s effect to not change the game state in any way.
                        </li>
                        <li>
                            Some abilities require the choice of a target that is not directly affected by the ability — the 
                            target is instead chosen as a reference point for the resolution of the ability. This is referred 
                            to as a “referential target.”
                        </li>
                        <li>
                            A card is not an eligible target for an ability if the resolution of that ability's effect
                            could not affect the target at all, unless it is a referential target. <em>(For example, a bowed 
                            character cannot be chosen as the target for an ability that reads "<b>Action:</b> Choose a 
                            character &ndash; bow that character.")</em>
                        </li>
                        <li>
                            A card is only eligible to be chosen as a referential target for an ability if that ability’s 
                            effect (using the referential target) would result in a change of game state. <em>(For example, a
                            character with no attachments cannot be chosen as the target for an ability that reads “<b>Action:</b>
                            Choose a character — discard each attachment on that character.”)</em>
                        </li>
                        <li>
                            The resolution of some effects (such as post-then effects, or delayed effects) requires that targets 
                            are chosen after the initiation of the effect. Such targets need not be verified when checking play 
                            restrictions and determining whether or not the entire ability may initiate. If there are no valid 
                            targets at the time such targets would be chosen, that aspect of the effect fails to resolve.
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
                    <anchored-heading @heading="add" :level="2">The word "To"</anchored-heading>
                    <p>
                        If the effect text of a card ability includes the word "to," then the text that follows the word 
						“to” can only be resolved if the preceding text was successfully resolved in full.
                    </p>
                    <ul>
                        <li>
                            If the pre-to aspect of an effect successfully resolves in full, the post-to aspect of that 
							effect resolves simultaneously with all other effects of that card ability.
                        </li>
                        <li>
                            If the pre-to aspect of an effect does not successfully resolve in full, the post-to
                            aspect’s resolution is canceled.
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
                            once per round. This limit is player specific.
                        </li>
                        <li>
                            Triggered abilities are written in a <i>"triggering condition (and/or) cost (and/or)
                            targeting requirements &ndash; effect"</i> template. Ability text before the dash consists
                            of triggering conditions (and/or) costs (and/or) targeting requirements. Ability text after
                            the dash consists of effects. and may sometimes include targeting requirements that come
                            into play as the effect is being resolved.
                        </li>
                        <li>
                            If a triggered ability has no dash, the ability has no pre-dash content, and the entirety of
                            the ability is considered an effect.
                        </li>
                        <li>
                            A triggered ability can only be initiated if its <i>effect</i> has the potential to change the game
                            state on its own. This potential is assessed without taking into account the consequences of
                            the cost payment or the consequences of any other ability
                            interactions.
                        </li>
                        <li>
                            A triggered ability can only be initiated if its cost (after modifiers) has the potential to
                            be paid in full.
                        </li>
                    </ul>
                    <p>
                        <b>Related:</b> <a href="#ability">Ability</a>, <a href="#action">Action</a>, 
                                        <a href="#cost">Cost</a>, <a href="#effect">Effect</a>, <a href="#interrupts">Interrupts</a>,
                                        <a href="#limits-of-triggered-abilities">Limits of Triggered Abilities</a>,
                                        <a href="#reactions">Reactions</a>, <a href="#target">Target</a>
                    </p>
                </article>
                <article>
                    <anchored-heading @heading="add" :level="2">Triggering Condition</anchored-heading>
                    <p>
                        A triggering condition is a condition which dictates when an ability can be triggered.
                        On card abilities, the triggering condition is the element of the ability that references such a 
                        condition, which most often comes in the form of a specific occurrence that takes place
                        during the game. This indicates the timing point at which the ability may 
                        be used. The description of an ability's triggering condition often follows the word "when" (for interrupt 
                        abilities) or the word "after" (for reaction abilities), or the word "if" (for action 
                        abilities.
                    </p>
                    <p>
                        If a single occurrence creates multiple triggering conditions for reactions or interrupts 
                        (such as a single Earth ring effect causing a player to draw a card and another player to discard a card), those 
                        triggering conditions are handled in shared interrupt/reaction windows, in which abilities that refer to
                        any of the triggering conditions created by that occurrence may be used in any order.
                    </p>
                    <p>
                        The following is a sequence of possible interrupt and reaction opportunities that exists around
                        each triggering condition that may arise in a game:
                    </p>
                    <ol>
                        <li>
                            The triggering condition becomes imminent. (Meaning that if it is not canceled, 
                            changed, or otherwise preempted by interrupt abilities, the triggering condition is the next thing
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
                            controls or owns another in-play card with the same title or printed title.
                        </li>
                        <li>
                            A player cannot bring into play a unique card owned by his or her opponent if that opponent 
                            controls an in-play card with the same title or printed title.
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
                            If a player's stronghold province is broken, that player loses the game.
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
                        <td><b>3.2.3</b> Compare skill values and determine result.</td>
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
                
		<ul>
                <li>
		    Declare a military conflict.
		</li>
                <li>
		    Declare a political conflict.
		</li>
                <li>
                    Pass.
                </li>
                </ul>
		<p>
		    If a conflict opportunity is passed, the player forfeits his or her right to use that opportunity this phase.
		</p>
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
                <anchored-heading @heading="add" :level="3">3.2.3. Compare skill values and determine result</anchored-heading>
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
                <p>
                  The ring continues to define the conflict type and element(s) until the end of the conflict even after it 
                  ceases to be contested.
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
                    characters are discarded one at a time, in the order of the discarding player's choosing. Only 
					characters with no fate on them during the initation of this step are discarded, and each character 
					is only discarded once.
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
                    Each province that becomes empty in this way is refilled with a facedown card from the top of its owner’s 
                    dynasty deck.
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
                        <td><b>D.1</b> Initiate a duel.</td>
                    </tr>
                    <tr>
                        <td><b>D.2</b> Establish the challenge.</td>
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
                        <td><b>D.6</b> Calculate dueling statistic.</td>
                    </tr>
                    <tr>
                        <td><b>D.7</b> Add honor bid, compare values, and determine result.</td>
                    </tr>
                    <tr>
                        <td><b>D.8</b> Apply duel results.</td>
                    </tr>
                    <tr>
                        <td><b>D.9</b> Duel ends.</td>
                    </tr>
                </table>
                <anchored-heading @heading="add" :level="3">D.1. Initiate a duel</anchored-heading>
                <p>
                    When a card ability initiates a duel, part of the cost of that ability may use the phrase, 
                    “initiate a [type] duel.” This opens the duel timing window.
                </p>
                <p>
                    To initiate a duel, the player resolving the card ability must choose two characters to duel 
                    against each other: one they control and one controlled by an opponent. The following parameters 
                    exist on which characters can be chosen for the duel:
                </p>
                <ul>
                    <li>
                        One character must be controlled by the player whose card ability initiates the duel, and one 
                        character must be controlled by an opponent of that player.
                    </li>
                    <li>
                        If a duel is initiated during a conflict, both characters chosen must be participating.
                    </li>
                    <li>
                        If a duel is initiated by an ability on a character card, that character must be chosen to be 
                        involved in the duel. The character chosen to duel against that character is controlled by an 
                        opponent of the player initiating the duel.
                    </li>
                </ul>
                <p>
                    If this process is completed, a duel has been initiated. Otherwise, the duel fails to initiate and cannot 
                    resolve.
                </p>
                <anchored-heading @heading="add" :level="3">Resolve the duel</anchored-heading>
                <p>
                    A duel is resolved during the successful resolution of any triggered ability that instructs players to 
                    “resolve the duel,” or that their “character challenges the opponent’s character to a [type] duel.” 
                    To resolve a duel, perform the following steps:
                </p>
                <anchored-heading @heading="add" :level="3">D.2. Establish the challenge</anchored-heading>
                <p>
                    The process of initiating the duel (in step D.1) will have identified the two characters that are
                    involved in the duel, as well as the kind of duel that will take place. This statistic 
                    (<span class="icon icon-conflict-military"></span> skill, <span class="icon icon-conflict-political"></span> 
                    skill, or glory) will be used to determine the results of the duel.
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
                <anchored-heading @heading="add" :level="3">D.6. Calculate dueling statistic</anchored-heading>
                <p>
                    The process of initiating the duel (in step D.1) will have established which statistic 
                    (<span class="icon icon-conflict-military"></span> skill, <span class="icon icon-conflict-political"></span> 
                    skill, or glory) is being used to determine the results of the duel.  Each player calculates the current 
                    value of that statistic for their character involved in the duel. Any skill modifiers that were active 
                    at the time the duel was initiated are still applicable during the duel.
                </p>
                <ul>
                    <li>
                        If multiple characters are involved in the duel on the same side, add their dueling statistics together. 
                        The value calculated in this step is treated as the skill value of a single character for the purposes 
                        of determining duel results. Those characters win or lose the duel together
                    </li>
                </ul>
                <anchored-heading @heading="add" :level="3">D.7. Add honor bid, compare values, and determine result
                </anchored-heading>
                <p>
                    Each player adds their duel honor bid to the statistic value they calculated in step D.6. 
                    Compare the new totals on each side of the duel to determine the results.
                </p>
                <ul>
                    <li>
                        The character with the higher value is the duel’s winner.
                    </li>
                    <li>
                        The character with the lower value is the duel’s loser.
                    </li>
                    <li>
                        If the values are the same, neither character is the duel’s winner and neither character is the 
                        duel’s loser
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
                <anchored-heading @heading="add" :level="1">Appendix III: Card Clarifications
                </anchored-heading>
                <p>
                    This section provides answers to a number of common questions that are asked about cards in the game. 
					These answers are organized by the expansion and collector number of the card whose rules interaction 
					has raised the question.
                </p>
				<anchored-heading @heading="add" :level="2">Core Set</anchored-heading>
				<h5>
                    <a href="https://fiveringsdb.com/card/shameful-display" target="_blank">Shameful Display</a> (24)
                </h5>
                <ul>
					<li>
						Neither the honoring nor the dishonoring aspect of Shameful Display’s ability is dependent upon the 
						other. Additionally, targets for the ability may be chosen even if one or both of those characters 
						could be either honored or dishonored (you do not need to select which character is receiving which 
						aspect when choosing targets). If Shameful Display honors/dishonors one character and fails to 
						honor/dishonor the other, it has still resolved successfully, even though it failed to affect one of 
						the chosen characters. That character is still a valid target for the ability as it could have been 
						affected by either aspect at the time it was chosen.
					</li>
                </ul>
				<h5>
                    <a href="https://fiveringsdb.com/card/savvy-politician" target="_blank">Savvy Politician</a> (45)
                </h5>
                <ul>
					<li>
						Savvy Politician’s ability does not trigger if an honored status token is moved to it by a card ability. 
						It only triggers if an effect “honors” it.
					</li>
                </ul>
				<h5>
                    <a href="https://fiveringsdb.com/card/doji-hotaru" target="_blank">Doji Hotaru</a> (52)
                </h5>
                <ul>
					<li>
						This character’s ability can be triggered while it is defending, but per page 16, resolving the ring’s 
						effect instructs the attacking player to choose a target, draw cards, or gain honor. The <u>attacking 
						player</u> would resolve the ring’s effect, not Doji Hotaru’s controller.
					</li>
                </ul>
				<h5>
                    <a href="https://fiveringsdb.com/card/akodo-toturi" target="_blank">Akodo Toturi</a> (79)
                </h5>
                <ul>
					<li>
						This character’s ability can be triggered while it is defending, but per page 16, resolving the ring’s 
						effect instructs the attacking player to choose a target, draw cards, or gain honor. The <u>attacking 
						player</u> would resolve the ring’s effect, not Akodo Toturi’s controller.
					</li>
                </ul>
				<h5>
                    <a href="https://fiveringsdb.com/card/young-rumormonger" target="_blank">Young Rumormonger</a> (101)
                </h5>
                <ul>
					<li>
						Young Rumormonger’s ability does not trigger if an honored or dishonored status token is moved to a 
						character by a card ability. It only triggers if an effect “honors” or “dishonors” a character.
					</li>
                </ul>
				<h5>
                    <a href="https://fiveringsdb.com/card/reprieve" target="_blank">Reprieve</a> (132)
                </h5>
                <ul>
					<li>
						Reprieve’s effect can prevent a character from being sacrificed.
					</li>
					<ul>
						<li>
							If that occurs during the payment of a <u>cost</u>, then that cost is not considered to have been paid 
							as the sacrifice was prevented (see page 5). If the sacrifice while paying an event’s cost is 
							prevented, the effects do not initiate and that event remains unplayed in its owner’s hand.
						</li>
						<li>
							If that occurs during the resolution of an <u>effect</u>, then nothing is dependent upon whether or not 
							the sacrifice resolved successfully. In the same way that an event whose effects were canceled by 
							Voice of Honor (Core, 145) is still considered to have been played, a card like Way of the Crab 
							(Core, 137) is still considered to have been played even if its effects are prevented by Reprieve.
						</li>
					</ul>
                </ul>
				<h5>
                    <a href="https://fiveringsdb.com/card/watch-commander" target="_blank">Watch Commander</a> (133)
                </h5>
                <ul>
					<li>
						If a player plays a card whose effects result in Watch Commander being discarded, its ability cannot 
						be triggered as it is no longer in play.
					</li>
                </ul>
				<h5>
                    <a href="https://fiveringsdb.com/card/steward-of-law" target="_blank">Steward of Law</a> (139)
                </h5>
                <ul>
					<li>
						If a character “cannot receive dishonored status tokens,” then those tokens cannot be placed on or 
						moved to that character. That character cannot be dishonored if it is ordinary. (See page 32.)
					</li>
                </ul>
				<h5>
                    <a href="https://fiveringsdb.com/card/above-question" target="_blank">Above Question</a> (141)
                </h5>
                <ul>
					<li>
						If Above Question is played on an opponent’s character, that opponent cannot choose the attached 
						character as a target for their own events.
					</li>
					<ul>
						<li>
							If the attached character is the only participating character controlled by that opponent, 
							Court Games’s honoring effect (Core, 206) cannot be selected, as the attached character cannot 
							be chosen as a target.
						</li>
					</ul>
                </ul>
				<h5>
                    <a href="https://fiveringsdb.com/card/way-of-the-lion" target="_blank">Way of the Lion</a> (167)
                </h5>
                <ul>
					<li>
						When you play two copies of Way of the Lion on the same character during a conflict, that character’s 
						<span class="icon icon-conflict-military"></span> skill will be doubled twice (to now be quadruple the 
						original skill value). The new base skill value continues to double if additional copies are played.
					</li>
                </ul>
				<h5>
                    <a href="https://fiveringsdb.com/card/display-of-power" target="_blank">Display of Power</a> (179)
                </h5>
                <ul>
					<li>
						When Display of Power is played, it produces a delayed effect that cancels the normal effects of ring 
						resolution during step 3.2.6 “Resolve Ring Effects” and replaces it with “resolve the ring effect as 
						if you had won the conflict as the attacking player.” Losing honor for unopposed and breaking the 
						province will occur before resolving Display of Power’s effect.
					</li>
					<ul>
						<li>
							Should Pilgrimage (Core, 22) not be broken when Display of Power resolves, the delayed effect of 
							Display takes precedence over Pilgrimage, canceling the normal resolution of “Resolve Ring Effects” 
							and replacing it with the adjusted means of resolution. However, the Pilgrimage effect (“cancel all 
							ring effects”) still cancels the Display of Power’s attempt to resolve the ring for the defender. 
							The defender claims the ring.
						</li>
						<li>
							Because Display of Power interacts with the “Resolve Ring Effects” step rather than the specific 
							effect chosen by the attacker, the attacker does not have the option to choose a specific ring effect 
							to resolve when Seeker of Knowledge (Core, 171) is attacking (or whether they would like to resolve a 
							ring effect at all). When Display of Power resolves the ring effect, the defender has the opportunity 
							to choose which ring effect they would like to resolve instead, and may choose to not resolve the 
							ring’s effect if they desire.
						</li>
					</ul>
                </ul>
				<h5>
                    <a href="https://fiveringsdb.com/card/banzai" target="_blank">Banzai!</a> (204)
                </h5>
                <ul>
					<li>
						When Banzai! is played, a player can choose to cancel Banzai!’s entire card effect, just the second part 
						of its effect, or none of its effect.
					</li>
					<ul>
						<li>
							When Banzai!’s effect initiates during the step 6 of playing the card (see page 11), the effects that 
							initiate are: “you may lose 1 honor, the chosen character gets +2<span class="icon icon-conflict-military">
							</span>, and if you lost 1 honor resolve this ability twice.” If Banzai!’s effects are canceled at this 
							time, none of those things happen and the card’s effects do not resolve at all.
							<br><br>
							If those effects resolve, and the 1 honor is lost, “resolve this ability twice” causes the ability’s 
							resolution to return to step 5 (“choose a participating character”). This causes the effects to 
							initiate a second time, and thus they can be canceled a second time to prevent the second 
							+2<span class="icon icon-conflict-military"></span> and optional honor loss.
						</li>
					</ul>
                </ul>
				<anchored-heading @heading="add" :level="2">Disciples of the Void</anchored-heading>
				<h5>
                    <a href="https://fiveringsdb.com/card/secluded-shrine" target="_blank">Secluded Shrine</a> (12)
                </h5>
                <ul>
					<li>
						The ring chosen for Secluded Shrine’s effect can be in multiple states at once. For example, while 
						unclaimed, the chosen ring simultaneously counts as being in both the unclaimed ring pool and in 
						your claimed ring pool.
					</li>
					<ul>
						<li>
							You cannot move the chosen ring out of your claimed ring pool due to the cost or effect of a 
							card ability unless the physical ring token is in your claimed ring pool.
						</li>
					</ul>
                </ul>
				<anchored-heading @heading="add" :level="2">Warriors of the Wind</anchored-heading>
				<h5>
                    <a href="https://fiveringsdb.com/card/agasha-taiko" target="_blank">Agasha Taiko</a> (14)
                </h5>
                <ul>
					<li>
						The province that is chosen by Agasha Taiko’s ability cannot be declared as the attacked province 
						and the conflict cannot be moved to it.
					</li>
					<ul>
						<li>
							If Agasha Taiko is played during a conflict and chooses the currently attacked province for her 
							ability, the conflict immediately ends with no winner and all participating characters are moved 
							home bowed.
						</li>
					</ul>
                </ul>
				<anchored-heading @heading="add" :level="2">Masters of the Court</anchored-heading>
				<h5>
                    <a href="https://fiveringsdb.com/card/maker-of-keepsakes" target="_blank">Maker of Keepsakes</a> (7)
                </h5>
                <ul>
					<li>
						If a character “cannot receive dishonored status tokens,” then those tokens cannot be placed on or 
						moved to that character. That character cannot be dishonored if it is ordinary.
					</li>
                </ul>
				<anchored-heading @heading="add" :level="2">Imperial Cycle</anchored-heading>
				<h5>
                    <a href="https://fiveringsdb.com/card/test-of-skill" target="_blank">Test of Skill</a> (93)
                </h5>
                <ul>
					<li>
						If you play Test of Skill from the top of your deck (with a card such as Artisan Academy (Core, 53) 
						or Pillow Book (Imperial, 93)), it will take up one of the “revealed card slots” in its cost, but be 
						ineligible to be put into your hand by its effect.
					</li>
					<ul>
						<li>
							When an event card is played, it is considered to remain in its original zone until its cost 
							has successfully been payed, at which point it gets placed onto the table in a state of “being 
							played” before being placed in its owner’s discard pile after its effects resolve. Therefore,
							during the payment of the Test of Skill’s cost, it is still on top of your deck and will be 
							revealed as part of the cost of playing the event.
						</li>
						<li>
							While it is already revealed by the Academy or Pillow Book, it can still be revealed again to 
							satisfy its own cost. However, once it leaves the top of your deck (after paying costs and 
							choosing targets in step 5—see ‘Initiating Abilities’ on page 11), it no longer becomes “one 
							of the revealed cards” and cannot be put back into your hand. For more information, see ‘In 
							Play and Out of Play’ on page 10.
						</li>
					</ul>
                </ul>
				<h5>
                    <a href="https://fiveringsdb.com/card/waning-hostilities" target="_blank">Waning Hostilities</a> (100)
                </h5>
                <ul>
					<li>
						Waning Hostilities limits each player to one conflict opportunity for the phase. Because Waning 
						Hostilities sets a hard limit, no amount of additional conflicts gained through card effects can 
						allow players to declare more than one conflict in that phase.
					</li>
                </ul>
				<anchored-heading @heading="add" :level="2">Elemental Cycle</anchored-heading>
				<h5>
                    <a href="https://fiveringsdb.com/card/the-mirror-s-gaze" target="_blank">The Mirror's Gaze</a> (15)
                </h5>
                <ul>
					<li>
						The Mirror’s Gaze cannot be used to copy interrupts or reactions whose effects cancel a card effect 
						or framework step.
					</li>
					<ul>
						<li>
							The following cards are some examples of some events that cannot by copied by this attachment for 
							this reason: Voice of Honor (Core, 145), Display of Power (Core, 179), Forged Edict (Core, 184), 
							Censure (Imperial Cycle, 60)
						</li>
					</ul>
					<li>
						The Mirror’s Gaze cannot be used to copy events whose effects reference their triggering conditions 
						(which are ignored).
					</li>
					<ul>
						<li>
							The following cards are some examples of some events that cannot be copied by this attachment for
							this reason: Indomitable Will (Core, 158), Ready for Battle (Core, 165), I Can Swim (Core, 187), 
							Way of the Chrysanthemum (Imperial Cycle, 80)
						</li>
					</ul>
                </ul>
				<h5>
                    <a href="https://fiveringsdb.com/card/master-alchemist" target="_blank">Master Alchemist</a> (44)
                </h5>
                <ul>
					<li>
						Master Alchemist can be used to place fate on the <span class="icon icon-element-fire"></span> ring
						while it is contested or claimed. Fate will stay on rings up until the point at which they become 
						contested. If the ring is already being contested when fate is added to it, the attacker will not 
						gain that fate.
					</li>
                </ul>
				<anchored-heading @heading="add" :level="2">Children of the Empire</anchored-heading>
				<h5>
                    <a href="https://fiveringsdb.com/card/kakita-toshimoko" target="_blank">Kakita Toshimoko</a> (14)
                </h5>
                <ul>
					<li>
						If a participating character’s skill values are dependent upon players’ honor bids, Kakita 
						Toshimoko’s interrupt ability can alter the calculation of skill totals in step 3.2.3 before fully
						resolving that step by changing those players’ bids and potentially changing which player wins or 
						loses the conflict due to the change in skill values.
					</li>
					<ul>
						<li>
							Because interrupts resolve before their triggering condition (page 11), and because “would” 
							effects have the capability to change the triggering condition (page 20), Toshimoko’s ability 
							has the potential to change the outcome of step 3.2.3. Therefore, if: a character’s skill values 
							are dependent upon the players’ honor bids, Toshimoko’s duel changes those bids, and he loses 
							the duel, then it is possible that Toshimoko could lose the duel but win the conflict (if up 
							against a Sincere Challenger (Children of the Empire, 27) who loses composure in a political 
							conflict, for example, or by being honored by Kyūden Kakita (Masters of the Court, 1)). It is 
							also possible that recalculating skill values for step 3.2.3 due to Toshimoko’s ability could cause 
							a province that would originally be breaking to no longer be breaking if the loss of skill (or 
							increase of Toshimoko’s skill) causes the attacking player to not have the excess skill necessary 
							to cause the province to break.
						</li>
					</ul>
                </ul>
				<h5>
                    <a href="https://fiveringsdb.com/card/unmatched-expertise" target="_blank">Unmatched Expertise</a> (65)
                </h5>
                <ul>
					<li>
						If a character “cannot receive dishonored status tokens,” then those tokens cannot be placed on or 
						moved to that character. That character cannot be dishonored if it is ordinary. (See page 32.)
					</li>
                </ul>
				<anchored-heading @heading="add" :level="2">Inheritance Cycle</anchored-heading>
				<h5>
                    <a href="https://fiveringsdb.com/card/command-respect" target="_blank">Command Respect</a> (18)
                </h5>
                <ul>
					<li>
						When an event card is played, it is considered to still be in its owner’s hand while determining 
						whether a card’s play restrictions are met. Command Respect cannot be played if both players have 
						the same number of cards in hand.
					</li>
                </ul>
				<h5>
                    <a href="https://fiveringsdb.com/card/akodo-kaede" target="_blank">Akodo Kaede</a> (28)
                </h5>
                <ul>
					<li>
						Akodo Kaede’s effect can prevent a character from being sacrificed. (See Reprieve, page 29)
					</li>
                </ul>
				<h5>
                    <a href="https://fiveringsdb.com/card/steward-of-the-rich-frog" target="_blank">Steward of the Rich Frog</a> (54)
                </h5>
                <ul>
					<li>
						When an event card is played, it is considered to still be in its owner’s hand until after all costs and 
						selections have been made.
					</li>
					<ul>
						<li>
							While choosing targets during Step 5 of the process of playing For Shame (Core, 207) on a Steward 
							of the Rich Frog, the Steward’s text prevents characters from receiving dishonored status tokens. 
							Because selecting options happens during the same step as choosing targets, the For Shame is still 
							in the opponent’s hand when the selection is made, and an option whose effect would fail to change 
							the game state cannot be selected.
						</li>
					</ul>
					<li>
						If a character “cannot receive dishonored status tokens,” then those tokens cannot be placed on or moved to 
						that character. That character cannot be dishonored if it is ordinary.
					</li>
                </ul>
            </section>
            <section>
                <anchored-heading @heading="add" :level="1">Appendix IV: Card Errata</anchored-heading>
                <p>
                    This section contains the official errata that have been made on individual cards in Legend of the
                    Five Rings: The Card Game. Errata overrides the originally printed information on the card it
                    applies to. Unless errata for a card appears below, the original English printing of that card and
                    all of its information is considered accurate, and overrides all other printings. This includes
                    translated cards, promotional cards, and printings which may appear in alternate products.
                </p>
                <h5>
                    <a href="https://fiveringsdb.com/card/city-of-the-open-hand" target="_blank">City of the Open Hand</a> 
                    (Core Set, 6)
                </h5>
                <p>
                    Should read: “...bow this stronghold and select one – either that opponent loses 1 honor, or you gain 1 honor.”
                    <br>
                    <i>(Replaces “...bow this stronghold – take 1 honor from that player.”)</i>
                </p>
                <h5>
                    <a href="https://fiveringsdb.com/card/restoration-of-balance" target="_blank">Restoration of Balance</a> 
                    (Core Set, 10)
                </h5>
                <p>
                    Should read: “<em>Interrupt</em>: When this province is broken...”
                    <br>
                    <i>(Replaces “<em>Reaction</em>: After this province is revealed...”)</i>
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
                    Should read: "Attach to a character. Play only on an attacking character." <br> <i>(Replaces
                    "Attach to an attacking character.")</i>
                </p>
                <h5>
                    <a href="https://fiveringsdb.com/card/ride-them-down" target="_blank">Ride Them Down</a> (Imperial
                    Cycle, 99)
                </h5>
                <p>
                    Should read: "...set the base strength of the attacked province to 1 until the end of the conflict."
                    <br> 
                    <i>(Added "until the end of the conflict.")</i>
                </p>
                <h5>
                    <a href="https://fiveringsdb.com/card/isawa-tadaka" target="_blank">Isawa Tadaka</a> (Disciples of the
                    Void, 10)
                </h5>
                <p>
                    Should read: “While the <span class="icon icon-element-earth"></span> ring is contested or in your claimed 
                    ring pool, each opponent cannot play copies of event cards that are in their conflict discard pile.”
                    <br>
                    <i>(Replaces “Each opponent cannot play copies of event cards that are in his or her conflict discard pile 
                    unless the <span class="icon icon-element-earth"></span> ring is in that player’s claimed ring pool.”)</i>
                </p>
				        <h5>
                    <a href="https://fiveringsdb.com/card/kaito-kosori" target="_blank">Kaito Kosori</a> (Disciples of the Void, 18)
                </h5>
                <p>
                    Should read: "During each <span class="icon icon-element-air"></span> conflict, if you control at least 1 
                    participating character and if this character is in your home area and ready, it contributes its skill to your side."
                    <br> 
                    <i>(Added "and ready.")</i>
                </p>
				        <h5>
                    <a href="https://fiveringsdb.com/card/yogo-kikuyo" target="_blank">Yogo Kikuyo</a> (Disciples of the Void, 25)
                </h5>
                <p>
                    Should read: "When the effects of a <em>Spell</em> event your opponent plays during a conflict would initiate, 
					put this character into play from your hand – cancel its effects."
                    <br> 
                    <i>(Added "from your hand.")</i>
                </p>
				        <h5>
                    <a href="https://fiveringsdb.com/card/oracle-of-stone" target="_blank">Oracle of Stone</a> (Elemental Cycle, 37)
                </h5>
				        <p>
					          Should read: “Then, each player discards 2 cards from his or her hand.”
					          <br> 
                    <i>(Added “from his or her hand.”)</i>
                </p>
                <h5>
                    <a href="https://fiveringsdb.com/card/ikebana-artisan" target="_blank">Ikebana Artisan</a> (Elemental Cycle, 63)
                </h5>
				        <p>
					          The text after the dash should read: “cancel that honor loss. Then, lose 1 fate. (Unlimited.)”
					          <br> 
                    <i>(Replaces “lose 1 fate instead. (Unlimited.)”)</i>
                </p>
                <h5>
                    <a href="https://fiveringsdb.com/card/hidden-moon-dojo" target="_blank">Hidden Moon Dojo</a> (Elemental Cycle, 68)
                </h5>
				        <p>
					          The title should be spelled Hidden Moon Dōjō.
                    <br> 
                    Should have the <b>Dōjō</b> trait.
					          <br> 
                    <i>(Updated the spelling of the title and trait.)</i>
                </p>
				        <h5>
                    <a href="https://fiveringsdb.com/card/hawk-tattoo" target="_blank">Hawk Tattoo</a> (Elemental Cycle, 75)
                </h5>
				        <p>
					          Should read: "Attach to a character you control."
					          <br> 
                    <i>(Added "Attach to a character you control.")</i>
                </p>
                <h5>
                    <a href="https://fiveringsdb.com/card/mantra-of-earth" target="_blank">Mantra of Earth</a> (Elemental Cycle, 116)
                </h5>
				        <p>
					          Should read: “opponents’ card abilities cannot choose that character as a target.”
					          <br> 
                    <i>(Replaces “opponents’ card effects cannot target that character.”)</i>
                </p>
                <h5>
                    <a href="https://fiveringsdb.com/card/paragon-of-grace" target="_blank">Paragon of Grace</a> 
                    (Children of the Empire, 13)
                </h5>
				        <p>
					          Should read: “During a conflict in which this character is participating on your side alone”
					          <br> 
                    <i>(Added “on your side”)</i>
                </p>
                <h5>
                    <a href="https://fiveringsdb.com/card/stay-your-hand" target="_blank">Stay Your Hand</a> (Children of the Empire, 80)
                </h5>
				        <p>
					          Should read: “When a duel that targets a character you control would resolve”
					          <br> <i>(Replaces “When an opponent initiates a duel that targets a character you control”)</i>
                </p>
                <h5>
                    <a href="https://fiveringsdb.com/card/the-spear-rushes-forth" target="_blank">The Spear Rushes Forth</a> 
                    (Masters of the Court, 23)
                </h5>
				        <p>
					          Should read: “discard an honored status token”
					          <br> 
                    <i>(Replaces “discard an honor token”)</i>
                </p>

      </section>
			<section>
        <anchored-heading @heading="add" :level="1" class="new">Appendix V: Restricted List</anchored-heading>
				<p>
					  When deckbuilding, a player may select one card from the restricted list to include in their decks, and cannot 
            include any other restricted cards in their decks and set of provinces. A player may run as many copies of his 
            or her chosen restricted card in a deck as the regular game rules (or card text) allow.
				</p>
				<ul>
          <li>
              <a href="https://fiveringsdb.com/card/guest-of-honor" target="_blank">Guest of Honor</a> (Core Set, 51)
          </li>
          <li>
              <a href="https://fiveringsdb.com/card/niten-master" target="_blank">Niten Master</a> (Core Set, 64)
          </li>
          <li>
              <a href="https://fiveringsdb.com/card/young-rumormonger" target="_blank">Young Rumormonger</a> (Core Set, 101)
          </li>
          <li>
              <a href="https://fiveringsdb.com/card/rebuild" target="_blank">Rebuild</a> (Core Set, 136)
          </li>
          <li>
              <a href="https://fiveringsdb.com/card/steward-of-law" target="_blank">Steward of Law</a> (Core Set, 139)
          </li>
					<li>
						  <a href="https://fiveringsdb.com/card/mirumoto-s-fury" target="_blank">Mirumoto's Fury</a> (Core Set, 159)
					</li>
					<li>
						  <a href="https://fiveringsdb.com/card/for-greater-glory" target="_blank">For Greater Glory</a> (Core Set, 168)
					</li>
					<li>
						  <a href="https://fiveringsdb.com/card/forged-edict" target="_blank">Forged Edict</a> (Core Set, 184)
					</li>
					<li>
						  <a href="https://fiveringsdb.com/card/spyglass" target="_blank">Spyglass</a> (Core Set, 193)
					</li>
					<li>
						  <a href="https://fiveringsdb.com/card/charge" target="_blank">Charge!</a> (Core Set, 210)
					</li>
          <li>
              <a href="https://fiveringsdb.com/card/embrace-the-void" target="_blank">Embrace the Void</a> (Imperial Cycle, 16)
          </li>
					<li>
						  <a href="https://fiveringsdb.com/card/pathfinder-s-blade" target="_blank">Pathfinder's Blade</a> (Imperial Cycle, 31)
					</li>
          <li>
              <a href="https://fiveringsdb.com/card/feast-or-famine" target="_blank">Feast or Famine</a> (Imperial Cycle, 41)
          </li>
					<li>
 						  <a href="https://fiveringsdb.com/card/policy-debate" target="_blank">Policy Debate</a> (Imperial Cycle, 40)
					</li>
					<li>
						  <a href="https://fiveringsdb.com/card/a-fate-worse-than-death" target="_blank">A Fate Worse than Death</a> (Imperial Cycle, 98)
					</li>
          <li>
              <a href="https://fiveringsdb.com/card/isawa-tadaka" target="_blank">Isawa Tadaka</a> (Disciples of the Void, 10)
          </li>
          <li>
              <a href="https://fiveringsdb.com/card/secluded-shrine" target="_blank">Secluded Shrine</a> (Disciples of the Void, 12)
          </li>
          <li>
              <a href="https://fiveringsdb.com/card/void-fist" target="_blank">Void Fist</a> (Elemental Cycle, 94)
          </li>
				</ul>
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
