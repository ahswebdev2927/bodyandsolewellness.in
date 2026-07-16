import { Heart, ShieldAlert, Flame, Sparkles, Zap, Wind, Shield, Sunrise, Activity, Scroll, Users, Coins } from "lucide-react";

export interface ServiceDetail {
  id: string;
  name: string;
  shortDesc: string;
  longDesc: string;
  benefits: string[];
  howItWorks: string;
  duration: string;
  price: string;
  whoItIsFor: string;
  icon: any;
  image: string;
}

export const servicesData: ServiceDetail[] = [
  {
    id: "reiki",
    name: "Reiki Healing",
    shortDesc: "Reiki Healing channels divine energy to restore balance, peace, and vitality. Experience deep relaxation as your mind, body, and soul realign in harmony.",
    longDesc: "Traditional Usui Reiki is a Japanese energetic practice where the practitioner channels life force energy (Qi/Ki) into the client's body. By laying hands gently on or slightly above energy centers (Chakras), it breaks up energetic stagna, relieves stress, and facilitates the body's natural self-healing capabilities.",
    benefits: [
      "Dissolves stress, mental fatigue, and deep tension",
      "Accelerates physical healing and supports recovery from illnesses",
      "Restores emotional balance and clears stagnant grief or worry",
      "Improves sleep quality and immune response"
    ],
    howItWorks: "During a session, you remain fully clothed while lying on a massage table. The practitioner applies soft touch or hovers hands over energy nodes, channeling warmth and rejuvenating light to clear blockages.",
    duration: "45 Minutes",
    price: "$120 / $165",
    whoItIsFor: "Anyone seeking stress relief, recovery support, mental clarity, or a deep sense of peaceful grounding.",
    icon: Heart,
    image: "/devine-imgs/reik.png",
  },
  {
    id: "karmic",
    name: "Karmic Reiki",
    shortDesc: "Karmic Reiki helps release past life and karmic blockages that limit your growth. It brings deep emotional cleansing, forgiveness, and spiritual freedom.",
    longDesc: "Karmic Reiki target patterns, cycles, and energetic blockages rooted in past experiences or inherited ancestral lines. By identifying these shadow-imprints in the aura, we break repeating toxic cycles and reclaim emotional liberty.",
    benefits: [
      "Identifies and severs repetitive toxic relationship cycles",
      "Clears ancestral or multi-generational trauma loops",
      "Brings deep, liberating self-forgiveness and closure",
      "Speeds up spiritual growth and clarity regarding life purpose"
    ],
    howItWorks: "Using specialized karmic symbols, the practitioner scans your energy aura to pinpoint karmic anchors, gently vaporizing old emotional debris to free your current path.",
    duration: "6 Weeks",
    price: "$145",
    whoItIsFor: "Those who feel stuck in repeating patterns, self-sabotaging habits, or negative life dynamics that seem beyond logical explanation.",
    icon: ShieldAlert,
    image: "/devine-imgs/karm.png",
  },
  {
    id: "twin-flame",
    name: "Twin Flame Healing",
    shortDesc: "Twin Flame Healing harmonizes the divine masculine and feminine energies within. It clears emotional blocks, restoring love, balance, and soul union.",
    longDesc: "This energy alignment focuses on stabilizing the inner polarity of the masculine (creative/doing) and feminine (receptive/being) forces. Ideal for healing relationship dynamics, it dissolves codependency and aligns your energetic frequency with unconditional love.",
    benefits: [
      "Balances inner polarities of masculine and feminine energy",
      "Heals emotional core wounds like fear of abandonment or rejection",
      "Dissolves codependency patterns, fostering sovereign self-love",
      "Harmonizes high-vibrational relationship connections"
    ],
    howItWorks: "We work directly with the Heart and Sacral chakras, clearing communication channels and healing emotional triggers to bring balance to your relationships.",
    duration: "45 Minutes",
    price: "$180",
    whoItIsFor: "Individuals going through intense relationship shifts, seeking conscious love, or wanting to unite their own inner polarities.",
    icon: Flame,
    image: "/devine-imgs/twin.png",
  },
  {
    id: "violet-flame",
    name: "Violet Flame Healing",
    shortDesc: "Transforms negative energy into peace, clarity, and spiritual purification using the alchemical energy of St. Germain.",
    longDesc: "The Violet Flame is a high-frequency spiritual energy that penetrates cells, releasing negative patterns, emotional baggage, and heavy vibrations. It acts as an energetic purifier, converting dense emotions into peace, clarity, and love.",
    benefits: [
      "Transmutes low-frequency energies, fear, and anger into higher states",
      "Cleanses the aura and energy field of psychic pollution",
      "Elevates your consciousness and spiritual alignment",
      "Speeds up recovery from toxic situations or environments"
    ],
    howItWorks: "Through guided visual alignment and energetic channeling, the practitioner wraps your auric field in the transmutational violet spectrum, dissolving blockages at a sub-atomic level.",
    duration: "45 Minutes",
    price: "$130",
    whoItIsFor: "People feeling weighed down by heavy environments, toxic work situations, or chronic negative thoughts.",
    icon: Sparkles,
    image: "/devine-imgs/viol.png",
  },
  {
    id: "cord-cutting",
    name: "Cord Cutting",
    shortDesc: "Releases unhealthy emotional attachments and restores personal energy to reclaim your sovereignty.",
    longDesc: "Over time, we establish invisible energy cords to partners, family members, or old situations. Unhealthy cords can drain our energy. This session carefully detaches these cords, returning your energy to you.",
    benefits: [
      "Stops energetic drain from past partners or toxic friends",
      "Reestablishes strong personal boundaries and sovereignty",
      "Reduces emotional rumination or constant thoughts about an ex",
      "Restores energy and vitality back to your own aura"
    ],
    howItWorks: "The practitioner locates attachment cords in your energetic body (most commonly in the solar plexus or heart) and uses gentle energy shears to release them, sealing the aura with protective gold light.",
    duration: "45 Minutes",
    price: "$95",
    whoItIsFor: "Those struggling to move on from a past relationship, divorce, friendship, or old workplace.",
    icon: Zap,
    image: "/devine-imgs/cord.png",
  },
  {
    id: "karuna",
    name: "Karuna Reiki",
    shortDesc: "Compassion-based healing system for deep emotional, mental, and spiritual wellbeing and cellular recovery.",
    longDesc: "Karuna is a Sanskrit word meaning 'compassionate action'. This branch of Reiki has a much stronger frequency, focusing specifically on healing deep wounds, cellular memory, child abuse, and emotional shadows.",
    benefits: [
      "Heals subconscious patterns and shadow-self issues",
      "Alleviates cellular-level emotional trauma and abuse memories",
      "Fosters deep compassion for oneself and other beings",
      "Connects the mind to spiritual guides and higher wisdom"
    ],
    howItWorks: "Using advanced sonic chanting, tonings, and sacred symbols, the practitioner directs compassionate light to target specific, deep-seated emotional pain points.",
    duration: "45 Minutes",
    price: "$150",
    whoItIsFor: "Individuals undergoing therapy, deep inner-child healing, or recovering from serious life traumas.",
    icon: Wind,
    image: "/devine-imgs/karu.png",
  },
  {
    id: "melchizedek",
    name: "Melchizedek Healing",
    shortDesc: "Activates divine light codes for awakening, DNA clearing, and higher multi-dimensional consciousness.",
    longDesc: "A multi-dimensional technique that works with the Order of Melchizedek. It introduces sacred geometry (Merkaba) to align the physical body with cosmic grids, activating dormant spiritual DNA and elevating awareness.",
    benefits: [
      "Activates dormant spiritual light codes and pineal gland",
      "Aligns physical body with Earth's grid and cosmic geometry",
      "Clears long-standing spiritual blockages in the lightbody",
      "Expands awareness to access multi-dimensional guidance"
    ],
    howItWorks: "The session utilizes Merkaba visualizations, holographic geometric grids, and high-frequency channeling to shift your light body into high-alignment.",
    duration: "45 Minutes",
    price: "$190",
    whoItIsFor: "Experienced spiritual seekers looking to expand their consciousness and connect with galactic grids.",
    icon: Shield,
    image: "/devine-imgs/melc.png",
  },
  {
    id: "humkara",
    name: "Humkara with Haleem",
    shortDesc: "Powerful spiritual sound and symbol healing that purifies the aura, removes negativity, and balances chakras.",
    longDesc: "Humkara with Haleem is a highly intensive technique using the power of ancient symbols and mantras. It quickly cleanses negative thought forms, warding off external heavy energy and realigning the chakras.",
    benefits: [
      "Quickly clears heavy or dark negative energies from the aura",
      "Realigns and fully balances all major chakras",
      "Enhances willpower, confidence, and voice expression",
      "Creates a powerful protective shield around your body"
    ],
    howItWorks: "The practitioner uses vocal toning, sound frequencies, and dynamic hand mudras to clear out blockages and fill the body with defensive light.",
    duration: "45 Minutes",
    price: "$140",
    whoItIsFor: "People who feel under energetic attack, constantly fatigued, or unable to focus due to energetic overload.",
    icon: Sunrise,
    image: "/devine-imgs/humk.png",
  },
  {
    id: "soul-contract",
    name: "Soul Contract Translation",
    shortDesc: "Translate and decode the energetic blueprint of your soul's primary incarnation contract, revealing your life path agreements, challenges, and destiny templates.",
    longDesc: "A deep energetic reading and translation of your soul's pre-birth choices and contracts. By decoding your auric field and quantum blueprint, we highlight the specific lessons, karmic challenges, and latent talents your soul agreed to experience in this lifetime, allowing you to align with your highest timeline.",
    benefits: [
      "Decodes pre-birth agreements and major life lessons",
      "Reveals the deeper spiritual purpose behind chronic life obstacles",
      "Unlocks dormant gifts and intuitive abilities",
      "Provides a clear roadmap for personal and spiritual alignment"
    ],
    howItWorks: "Using your photo and full birth details, we tune into your Akashic records and auric templates to translate your contract, delivering a comprehensive alignment summary.",
    duration: "45 Minutes",
    price: "$155",
    whoItIsFor: "Seekers looking for deep clarity on their life purpose, repeating roadblocks, and spiritual destiny.",
    icon: Scroll,
    image: "/devine-imgs/soul.png",
  },
  {
    id: "ancestral",
    name: "Ancestral Healing",
    shortDesc: "Clear inherited blockages, genetic emotional cycles, and ancestral patterns to release baggage from your family lineage.",
    longDesc: "Ancestral Healing works directly on the epistructural genetic lineage of your energy field. It identifies and releases unresolved traumatic imprints, vows, and behavioral conditioning inherited from your ancestors, restoring the flowing river of lineage blessings.",
    benefits: [
      "Clears inherited emotional burdens and fear patterns",
      "Releases family lineage vows, curses, and energetic debts",
      "Restores the flow of wisdom, strength, and ancestral support",
      "Facilitates healing for future generations in your family line"
    ],
    howItWorks: "We establish connection with your ancestral grid using your photograph, clearing dense blockages down seven generations of lineage consciousness.",
    duration: "45 Minutes",
    price: "$160",
    whoItIsFor: "Anyone aware of repeating family traumas, genetic illnesses, or systemic blocks in relationships or wealth.",
    icon: Users,
    image: "/devine-imgs/ancestral.png",
  },
  {
    id: "money-reiki",
    name: "Money Reiki Healing",
    shortDesc: "Align your personal energetic frequency with the vibration of abundance, clearing scarcity programming and financial blocks.",
    longDesc: "Money Reiki works specifically with the 'Spiritual Energy of Money' to clear financial karma, scarcity mindset grids, and negative energy surrounding wealth. It realigns your energetic fields to receive, manage, and multiply divine abundance in perfect alignment with your soul path.",
    benefits: [
      "Clears deep-seated subconscious scarcity programming",
      "Transmutes negative energetic blocks surrounding wealth and money",
      "Aligns your auric field with frequencies of financial opportunity",
      "Establishes a healthy, high-vibe relationship with abundance"
    ],
    howItWorks: "The session focuses heavily on realigning the Solar Plexus, Root, and Crown chakras, dissolving blocks and anchoring abundance frequencies using your photograph.",
    duration: "45 Minutes",
    price: "$145",
    whoItIsFor: "Individuals experiencing financial stress, money blocks, career stagnation, or those wanting to scale their wealth consciousness.",
    icon: Coins,
    image: "/devine-imgs/money.png",
  }
];
