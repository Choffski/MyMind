const initialState = {
  currentNews:[],
  followingThis:false
}
export default newsReducer = (state = initialState, action) =>{
  switch (action.type) {
    case "GET_NEWS_WITH_CATEGORY": {
      return {...state, currentNews: articles.filter(item => item.category === action.payload.name)}
    }

    default: return state;
  }
}


const articles = [
  {
    headline: 'Arctic sea ice hits record low for winter maximum',
    network: 'CNN',
    timestamp: '1427807325',
    category: 'Entertainment',
    article: `
Eat and than sleep on your face. Loves cheeseburgers stretch, and sweet beast, or inspect anything brought into the house, yet lick butt, or lay on arms while you're using the keyboard licks your face. Poop in the plant pot lick the curtain just to be annoying or toy mouse squeak roll over.

so wake up wander around the house making large amounts of noise jump on top of your human's bed and fall asleep again or steal the warm chair right after you get up.

Need to chase tail meow all night having their mate disturbing sleeping humans and with tail in the air. Hopped up on catnip intently sniff hand, or flop over, or pee in human's bed until he cleans the litter box and lie on your belly and purr when you are asleep for please stop looking at your phone and pet me and man running from cops stops to pet cats, goes to jail.

Climb leg go into a room to decide you didn't want to be in there anyway meow for food, then when human fills food dish, take a few bites of food and continue meowing hide when guests come over. Stand in front of the computer screen eat and than sleep on your face.
`
  },
  {
    headline: 'Archaelogist discover lost city in  Honduran jungle',
    network: 'CNN',
    timestamp: '1427807325',
    category: 'Entertainment',
    article: `
Eat and than sleep on your face. Loves cheeseburgers stretch, and sweet beast, or inspect anything brought into the house, yet lick butt, or lay on arms while you're using the keyboard licks your face. Poop in the plant pot lick the curtain just to be annoying or toy mouse squeak roll over.

 So wake up wander around the house making large amounts of noise jump on top of your human's bed and fall asleep again or steal the warm chair right after you get up.

Need to chase tail meow all night having their mate disturbing sleeping humans and with tail in the air. Hopped up on catnip intently sniff hand, or flop over, or pee in human's bed until he cleans the litter box and lie on your belly and purr when you are asleep for please stop looking at your phone and pet me and man running from cops stops to pet cats, goes to jail. `
  },
  {
    headline: 'The balloons that could fly tourists to the edge of space',
    network: 'CNN',
    timestamp: '1427807325',
    category: 'Entertainment',
    article: `
Eat and than sleep on your face. Loves cheeseburgers stretch, and sweet beast, or inspect anything brought into the house, yet lick butt, or lay on arms while you're using the keyboard licks your face. Poop in the plant pot lick the curtain just to be annoying or toy mouse squeak roll over.

 So wake up wander around the house making large amounts of noise jump on top of your human's bed and fall asleep again or steal the warm chair right after you get up.

Need to chase tail meow all night having their mate disturbing sleeping humans and with tail in the air. Hopped up on catnip intently sniff hand, or flop over, or pee in human's bed until he cleans the litter box and lie on your belly and purr when you are asleep for please stop looking at your phone and pet me and man running from cops stops to pet cats, goes to jail. `
  },
  {
    headline: 'In the Prawn Nebula, a nursery for newborn stars',
    network: 'The New York Times',
    timestamp: '1427807325',
    category: 'Entertainment',
    article: `
Eat and than sleep on your face. Loves cheeseburgers stretch, and sweet beast, or inspect anything brought into the house, yet lick butt, or lay on arms while you're using the keyboard licks your face. Poop in the plant pot lick the curtain just to be annoying or toy mouse squeak roll over.

 So wake up wander around the house making large amounts of noise jump on top of your human's bed and fall asleep again or steal the warm chair right after you get up.

Need to chase tail meow all night having their mate disturbing sleeping humans and with tail in the air. Hopped up on catnip intently sniff hand, or flop over, or pee in human's bed until he cleans the litter box and lie on your belly and purr when you are asleep for please stop looking at your phone and pet me and man running from cops stops to pet cats, goes to jail. `
  },
  {
    headline: 'What will the battleship of Future look like?',
    network: 'Popular Science',
    timestamp: '1427807325',
    category: 'Entertainment',
    article: `
Eat and than sleep on your face. Loves cheeseburgers stretch, and sweet beast, or inspect anything brought into the house, yet lick butt, or lay on arms while you're using the keyboard licks your face. Poop in the plant pot lick the curtain just to be annoying or toy mouse squeak roll over.

 So wake up wander around the house making large amounts of noise jump on top of your human's bed and fall asleep again or steal the warm chair right after you get up.

Need to chase tail meow all night having their mate disturbing sleeping humans and with tail in the air. Hopped up on catnip intently sniff hand, or flop over, or pee in human's bed until he cleans the litter box and lie on your belly and purr when you are asleep for please stop looking at your phone and pet me and man running from cops stops to pet cats, goes to jail. `
  },
  {
    headline: 'Arctic sea ice hits record low for winter maximum',
    network: 'CNN',
    timestamp: '1427807325',
    category: 'Entertainment',
    article: `
Eat and than sleep on your face. Loves cheeseburgers stretch, and sweet beast, or inspect anything brought into the house, yet lick butt, or lay on arms while you're using the keyboard licks your face. Poop in the plant pot lick the curtain just to be annoying or toy mouse squeak roll over.

so wake up wander around the house making large amounts of noise jump on top of your human's bed and fall asleep again or steal the warm chair right after you get up.

Need to chase tail meow all night having their mate disturbing sleeping humans and with tail in the air. Hopped up on catnip intently sniff hand, or flop over, or pee in human's bed until he cleans the litter box and lie on your belly and purr when you are asleep for please stop looking at your phone and pet me and man running from cops stops to pet cats, goes to jail.

Climb leg go into a room to decide you didn't want to be in there anyway meow for food, then when human fills food dish, take a few bites of food and continue meowing hide when guests come over. Stand in front of the computer screen eat and than sleep on your face.
`
  },
  {
    headline: 'Archaelogist discover lost city in  Honduran jungle',
    network: 'CNN',
    timestamp: '1427807325',
    category: 'Entertainment',
    article: `
Eat and than sleep on your face. Loves cheeseburgers stretch, and sweet beast, or inspect anything brought into the house, yet lick butt, or lay on arms while you're using the keyboard licks your face. Poop in the plant pot lick the curtain just to be annoying or toy mouse squeak roll over.

 So wake up wander around the house making large amounts of noise jump on top of your human's bed and fall asleep again or steal the warm chair right after you get up.

Need to chase tail meow all night having their mate disturbing sleeping humans and with tail in the air. Hopped up on catnip intently sniff hand, or flop over, or pee in human's bed until he cleans the litter box and lie on your belly and purr when you are asleep for please stop looking at your phone and pet me and man running from cops stops to pet cats, goes to jail. `
  },
  {
    headline: 'The balloons that could fly tourists to the edge of space',
    network: 'CNN',
    timestamp: '1427807325',
    category: 'Entertainment',
    article: `
Eat and than sleep on your face. Loves cheeseburgers stretch, and sweet beast, or inspect anything brought into the house, yet lick butt, or lay on arms while you're using the keyboard licks your face. Poop in the plant pot lick the curtain just to be annoying or toy mouse squeak roll over.

 So wake up wander around the house making large amounts of noise jump on top of your human's bed and fall asleep again or steal the warm chair right after you get up.

Need to chase tail meow all night having their mate disturbing sleeping humans and with tail in the air. Hopped up on catnip intently sniff hand, or flop over, or pee in human's bed until he cleans the litter box and lie on your belly and purr when you are asleep for please stop looking at your phone and pet me and man running from cops stops to pet cats, goes to jail. `
  },
  {
    headline: 'In the Prawn Nebula, a nursery for newborn stars',
    network: 'The New York Times',
    timestamp: '1427807325',
    category: 'Auto',
    article: `
Eat and than sleep on your face. Loves cheeseburgers stretch, and sweet beast, or inspect anything brought into the house, yet lick butt, or lay on arms while you're using the keyboard licks your face. Poop in the plant pot lick the curtain just to be annoying or toy mouse squeak roll over.

 So wake up wander around the house making large amounts of noise jump on top of your human's bed and fall asleep again or steal the warm chair right after you get up.

Need to chase tail meow all night having their mate disturbing sleeping humans and with tail in the air. Hopped up on catnip intently sniff hand, or flop over, or pee in human's bed until he cleans the litter box and lie on your belly and purr when you are asleep for please stop looking at your phone and pet me and man running from cops stops to pet cats, goes to jail. `
  },
  {
    headline: 'What will the battleship of Future look like?',
    network: 'Popular Science',
    category: 'Auto',
    timestamp: '1427807325',
    article: `
Eat and than sleep on your face. Loves cheeseburgers stretch, and sweet beast, or inspect anything brought into the house, yet lick butt, or lay on arms while you're using the keyboard licks your face. Poop in the plant pot lick the curtain just to be annoying or toy mouse squeak roll over.

 So wake up wander around the house making large amounts of noise jump on top of your human's bed and fall asleep again or steal the warm chair right after you get up.

Need to chase tail meow all night having their mate disturbing sleeping humans and with tail in the air. Hopped up on catnip intently sniff hand, or flop over, or pee in human's bed until he cleans the litter box and lie on your belly and purr when you are asleep for please stop looking at your phone and pet me and man running from cops stops to pet cats, goes to jail. `
  },

  {
    headline: 'Arctic sea ice hits record low for winter maximum',
    network: 'CNN',
    timestamp: '1427807325',
    category: 'Entertainment',
    article: `
Eat and than sleep on your face. Loves cheeseburgers stretch, and sweet beast, or inspect anything brought into the house, yet lick butt, or lay on arms while you're using the keyboard licks your face. Poop in the plant pot lick the curtain just to be annoying or toy mouse squeak roll over.

so wake up wander around the house making large amounts of noise jump on top of your human's bed and fall asleep again or steal the warm chair right after you get up.

Need to chase tail meow all night having their mate disturbing sleeping humans and with tail in the air. Hopped up on catnip intently sniff hand, or flop over, or pee in human's bed until he cleans the litter box and lie on your belly and purr when you are asleep for please stop looking at your phone and pet me and man running from cops stops to pet cats, goes to jail.

Climb leg go into a room to decide you didn't want to be in there anyway meow for food, then when human fills food dish, take a few bites of food and continue meowing hide when guests come over. Stand in front of the computer screen eat and than sleep on your face.
`
  },
  {
    headline: 'Archaelogist discover lost city in  Honduran jungle',
    network: 'CNN',
    timestamp: '1427807325',
    category: 'Science',
    article: `
Eat and than sleep on your face. Loves cheeseburgers stretch, and sweet beast, or inspect anything brought into the house, yet lick butt, or lay on arms while you're using the keyboard licks your face. Poop in the plant pot lick the curtain just to be annoying or toy mouse squeak roll over.

 So wake up wander around the house making large amounts of noise jump on top of your human's bed and fall asleep again or steal the warm chair right after you get up.

Need to chase tail meow all night having their mate disturbing sleeping humans and with tail in the air. Hopped up on catnip intently sniff hand, or flop over, or pee in human's bed until he cleans the litter box and lie on your belly and purr when you are asleep for please stop looking at your phone and pet me and man running from cops stops to pet cats, goes to jail. `
  },
  {
    headline: 'The balloons that could fly tourists to the edge of space',
    network: 'CNN',
    timestamp: '1427807325',
    category: 'Science',
    article: `
Eat and than sleep on your face. Loves cheeseburgers stretch, and sweet beast, or inspect anything brought into the house, yet lick butt, or lay on arms while you're using the keyboard licks your face. Poop in the plant pot lick the curtain just to be annoying or toy mouse squeak roll over.

 So wake up wander around the house making large amounts of noise jump on top of your human's bed and fall asleep again or steal the warm chair right after you get up.

Need to chase tail meow all night having their mate disturbing sleeping humans and with tail in the air. Hopped up on catnip intently sniff hand, or flop over, or pee in human's bed until he cleans the litter box and lie on your belly and purr when you are asleep for please stop looking at your phone and pet me and man running from cops stops to pet cats, goes to jail. `
  },
  {
    headline: 'In the Prawn Nebula, a nursery for newborn stars',
    network: 'The New York Times',
    timestamp: '1427807325',
    category: 'Science',
    article: `
Eat and than sleep on your face. Loves cheeseburgers stretch, and sweet beast, or inspect anything brought into the house, yet lick butt, or lay on arms while you're using the keyboard licks your face. Poop in the plant pot lick the curtain just to be annoying or toy mouse squeak roll over.

 So wake up wander around the house making large amounts of noise jump on top of your human's bed and fall asleep again or steal the warm chair right after you get up.

Need to chase tail meow all night having their mate disturbing sleeping humans and with tail in the air. Hopped up on catnip intently sniff hand, or flop over, or pee in human's bed until he cleans the litter box and lie on your belly and purr when you are asleep for please stop looking at your phone and pet me and man running from cops stops to pet cats, goes to jail. `
  },
  {
    headline: 'What will the battleship of Future look like?',
    network: 'Popular Science',
    timestamp: '1427807325',
    category: 'Science',
    article: `
Eat and than sleep on your face. Loves cheeseburgers stretch, and sweet beast, or inspect anything brought into the house, yet lick butt, or lay on arms while you're using the keyboard licks your face. Poop in the plant pot lick the curtain just to be annoying or toy mouse squeak roll over.

 So wake up wander around the house making large amounts of noise jump on top of your human's bed and fall asleep again or steal the warm chair right after you get up.

Need to chase tail meow all night having their mate disturbing sleeping humans and with tail in the air. Hopped up on catnip intently sniff hand, or flop over, or pee in human's bed until he cleans the litter box and lie on your belly and purr when you are asleep for please stop looking at your phone and pet me and man running from cops stops to pet cats, goes to jail. `
  },
  {
    headline: 'Arctic sea ice hits record low for winter maximum',
    network: 'CNN',
    timestamp: '1427807325',
    category: 'Science',
    article: `
Eat and than sleep on your face. Loves cheeseburgers stretch, and sweet beast, or inspect anything brought into the house, yet lick butt, or lay on arms while you're using the keyboard licks your face. Poop in the plant pot lick the curtain just to be annoying or toy mouse squeak roll over.

so wake up wander around the house making large amounts of noise jump on top of your human's bed and fall asleep again or steal the warm chair right after you get up.

Need to chase tail meow all night having their mate disturbing sleeping humans and with tail in the air. Hopped up on catnip intently sniff hand, or flop over, or pee in human's bed until he cleans the litter box and lie on your belly and purr when you are asleep for please stop looking at your phone and pet me and man running from cops stops to pet cats, goes to jail.

Climb leg go into a room to decide you didn't want to be in there anyway meow for food, then when human fills food dish, take a few bites of food and continue meowing hide when guests come over. Stand in front of the computer screen eat and than sleep on your face.
`
  },
  {
    headline: 'Archaelogist discover lost city in  Honduran jungle',
    network: 'CNN',
    timestamp: '1427807325',
    category: 'Science',
    article: `
Eat and than sleep on your face. Loves cheeseburgers stretch, and sweet beast, or inspect anything brought into the house, yet lick butt, or lay on arms while you're using the keyboard licks your face. Poop in the plant pot lick the curtain just to be annoying or toy mouse squeak roll over.

 So wake up wander around the house making large amounts of noise jump on top of your human's bed and fall asleep again or steal the warm chair right after you get up.

Need to chase tail meow all night having their mate disturbing sleeping humans and with tail in the air. Hopped up on catnip intently sniff hand, or flop over, or pee in human's bed until he cleans the litter box and lie on your belly and purr when you are asleep for please stop looking at your phone and pet me and man running from cops stops to pet cats, goes to jail. `
  },
  {
    headline: 'The balloons that could fly tourists to the edge of space',
    network: 'CNN',
    timestamp: '1427807325',
    category: 'Fashion',
    article: `
Eat and than sleep on your face. Loves cheeseburgers stretch, and sweet beast, or inspect anything brought into the house, yet lick butt, or lay on arms while you're using the keyboard licks your face. Poop in the plant pot lick the curtain just to be annoying or toy mouse squeak roll over.

 So wake up wander around the house making large amounts of noise jump on top of your human's bed and fall asleep again or steal the warm chair right after you get up.

Need to chase tail meow all night having their mate disturbing sleeping humans and with tail in the air. Hopped up on catnip intently sniff hand, or flop over, or pee in human's bed until he cleans the litter box and lie on your belly and purr when you are asleep for please stop looking at your phone and pet me and man running from cops stops to pet cats, goes to jail. `
  },
  {
    headline: 'In the Prawn Nebula, a nursery for newborn stars',
    network: 'The New York Times',
    timestamp: '1427807325',
    category: 'Fashion',
    article: `
Eat and than sleep on your face. Loves cheeseburgers stretch, and sweet beast, or inspect anything brought into the house, yet lick butt, or lay on arms while you're using the keyboard licks your face. Poop in the plant pot lick the curtain just to be annoying or toy mouse squeak roll over.

 So wake up wander around the house making large amounts of noise jump on top of your human's bed and fall asleep again or steal the warm chair right after you get up.

Need to chase tail meow all night having their mate disturbing sleeping humans and with tail in the air. Hopped up on catnip intently sniff hand, or flop over, or pee in human's bed until he cleans the litter box and lie on your belly and purr when you are asleep for please stop looking at your phone and pet me and man running from cops stops to pet cats, goes to jail. `
  },
  {
    headline: 'What will the battleship of Future look like?',
    network: 'Popular Science',
    category: 'Fashion',
    timestamp: '1427807325',
    article: `
Eat and than sleep on your face. Loves cheeseburgers stretch, and sweet beast, or inspect anything brought into the house, yet lick butt, or lay on arms while you're using the keyboard licks your face. Poop in the plant pot lick the curtain just to be annoying or toy mouse squeak roll over.

 So wake up wander around the house making large amounts of noise jump on top of your human's bed and fall asleep again or steal the warm chair right after you get up.

Need to chase tail meow all night having their mate disturbing sleeping humans and with tail in the air. Hopped up on catnip intently sniff hand, or flop over, or pee in human's bed until he cleans the litter box and lie on your belly and purr when you are asleep for please stop looking at your phone and pet me and man running from cops stops to pet cats, goes to jail. `
  },
];
