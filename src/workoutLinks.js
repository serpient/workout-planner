const LENGTH = {
    short: 0,
    medium: 1,
    long: 2,
    extra_long: 3
}

const Workouts = {
    yoga: [
        {
            link: 'https://www.youtube.com/embed/kBZgtvy8gKs',
            length: LENGTH.medium,
            title: '30 Minute Total Body Yoga Workout (For Strength) | Fightmaster Yoga Videos',
        },
        {
            link: 'https://www.youtube.com/embed/LhYHgV56tOo',
            length: LENGTH.long,
            title: '45 Minute Yoga Total body workout (vinyasa flow 45 min class) | Fightmaster Yoga Videos'
        },
        {
            link: 'https://www.youtube.com/embed/PUaAb8s7sdU',
            length: LENGTH.long,
            title: 'Yoga for Weight Loss Class (40 minute Workout) | Fightmaster Yoga Videos'
        },
        {
            link: 'https://www.youtube.com/embed/qJzfZ6w0s4g',
            length: LENGTH.extra_long,
            title: '1 1/2 Hour Ashtanga Yoga Primary Series with Jessica Kass and Fightmaster Yoga Videos'
        },
        {
            link: 'https://www.youtube.com/embed/rPd_TQWZSUQ',
            length: LENGTH.extra_long,
            title: '1 Hour Yoga (Total Body Workout) One Hour Vinyasa Flow | Fightmaster Yoga Videos'
        },
        {
            link: 'https://www.youtube.com/embed/17W-DG7iJyI',
            length: LENGTH.extra_long,
            title: '1 Hour Total Body Yoga Workout (for Flexibility and Strength) | Fightmaster Yoga Videos'
        },
        {
            link: 'https://www.youtube.com/embed/VMoB_K94hjA',
            length: LENGTH.medium,
            title: '30 Minute Yoga for Strength (Abs and Strengthen Core) Day 67 Yoga Fix 90 | Fightmaster Yoga Videos'
        }, 
        {
            link: 'https://www.youtube.com/embed/J3H4IiyD6fA',
            length: LENGTH.medium,
            title: '30 Minute Yoga Flow Vinyasa Class (Total Body Workout!) Day 83 Yoga Fix 90 | Fightmaster Yoga Videos'
        },
        {
            link: 'https://www.youtube.com/embed/SXzFwb9jmOs',
            length: LENGTH.medium,
            title: '30 Minute Cardio Yoga (HIIT workout) 62 Yoga Fix 90 | Fightmaster Yoga Videos'
        }
    ],
    full_body: [
        {
            link: 'https://www.youtube.com/embed/RGbWWLHolEI',
            length: LENGTH.medium,
            title: '20 Minute Complete Full Body Workout (REAL TIME)'
        },
        {
            link: 'https://www.youtube.com/embed/rnrFmCSNhQ8',
            length: LENGTH.medium,
            title: 'Real Time Challenge HIIT Workout (24 MINUTES...WILL YOU MAKE IT?)'
        },
        {
            link: 'https://www.youtube.com/embed/J_0p8Zizwao',
            length: LENGTH.medium,
            title: 'Home Fat Burn Workout (EXHAUSTED WITH JUST 2 EXERCISES!!)'
        },
        {
            link: 'https://www.youtube.com/embed/bpOgps_XRAw',
            length: LENGTH.medium,
            title: 'Fat Melting Cardio Workout (REALTIME WORKOUT!)'
        },
        {
            link: 'https://www.youtube.com/embed/agGhLxiPuMc',
            length: LENGTH.medium,
            title: 'Full Body Workout Routine | Fat Burning Workout At Home'
        },
        {
            link: 'https://www.youtube.com/embed/UBMk30rjy0o',
            length: LENGTH.medium,
            title: '20 MIN FULL BODY WORKOUT // No Equipment | Pamela Reif'
        },
        {
            link: 'https://www.youtube.com/embed/Lscqihirc3c',
            length: LENGTH.medium,
            title: 'Intense 25 min Full Body FAT BURNING Workout 🙋‍♀️| No Jumping Beginner Friendly'
        },
        {
            link: 'https://www.youtube.com/embed/QRxy56s8e5Y',
            length: LENGTH.medium,
            title: 'Total Body HIIT WORKOUT // With Weights'
        },
        {
            link: 'https://www.youtube.com/embed/F9PXg7NeVP0',
            length: LENGTH.medium,
            title: '30 Minute Full Body Dumbbell Workout'
        },
        {
            link: 'https://www.youtube.com/embed/nM-Z3axdxUg',
            length: LENGTH.medium,
            title: `Kelli's Superset Total Body Strength Workout: Calorie Torching, Muscle Building, Fat Burning Workout`
        },
        {
            link: 'https://www.youtube.com/embed/0jHtQ5aJRMw',
            length: LENGTH.medium,
            title: '40 Minute Full Body HIIT Workout with Dumbbells! 🔥Burn 540 Calories!* 🔥Sydney Cummings'
        }

    ],
    abs: [
        {
            link: 'https://www.youtube.com/embed/4KUuyAlS1DQ',
            length: LENGTH.medium,
            title: 'Flat BELLY Round BOOTY Workout (20 MINUTE ABS & GLUTES)'
        },
        {
            link: 'https://www.youtube.com/embed/4b8BhrxX1zc',
            length: LENGTH.medium,
            title: '30 Minute Abs and Shoulders Workout for Women (FOLLOW ALONG REAL TIME!)'
        },
        {
            link: 'https://www.youtube.com/embed/IjEBfs35HSc',
            length: LENGTH.medium,
            title: 'Abs, Butt and Thighs | HOT BODY EXPRESS DVD (Full 30 minute workout)'
        },
        {
            link: 'https://www.youtube.com/embed/NfvD5yEFh28',
            length: LENGTH.medium,
            title: 'The Best Victoria Secret Ab Workout'
        }
    ],
    arms: [
        {
            link:  'https://www.youtube.com/embed/7_k7bwKU9YM',
            length: LENGTH.short,
            title: '15 Minute SCULPTED ARMS (Complete Arm Workout!!)'
        }
       
    ],
    legs: [
        {
            link: 'https://www.youtube.com/embed/zLBFQ_mFl2E',
            length: LENGTH.medium,
            title: '15 min BURN THIGH FAT WORKOUT (NO JUMPING!) TO SLIM INNER THIGHS & LEGS'
        }
    ],
    dance: [
        {
            link: 'https://www.youtube.com/embed/ULrcDcQabdA',
            length: LENGTH.medium,
            title: '15 minute Dance Workout. cardio. Choreo by Sunny. Sunny Funny Zumba'
        },
        {
            link: 'https://www.youtube.com/embed/kaIgbgcAPGw',
            length: LENGTH.short,
            title: 'Dalla Dalla. ITZY. 달라달라. 있지. Choreo by Sunny. Zumba. Dance. K-pop.'
        },
        {
            link: 'https://www.youtube.com/embed/JAtBXSA4aLg',
            length: LENGTH.medium,
            title: '15 minute BTS Diet Dance Workout. cardio.'
        },
        {
            link: 'https://www.youtube.com/embed/JAtBXSA4aLg',
            length: LENGTH.medium,
            title: '15 minute BTS Diet Dance Workout. cardio.'
        },
        {
            link: 'https://www.youtube.com/embed/uUWxteM9xUU',
            length: LENGTH.long,
            title: 'Sunny Routin. 36 minute Diet Dance. cardio.'
        },
        {
            link: 'https://www.youtube.com/embed/KAjcquskMVc',
            length: LENGTH.long,
            title: 'Sunny Routin. 44 minute Diet Dance.'
        },
        {
            link: 'https://www.youtube.com/embed/BOZm57dZZf0',
            length: LENGTH.long,
            title: 'Sunny Routine. 37minute Dance Workout.'
        },
        {
            link: 'https://www.youtube.com/embed/iOoW_Y_lto8',
            length: LENGTH.medium,
            title: '15 minute Dance Workout. Cardio. Zumba.'
        }
    ]
}

export default Workouts;