// Challenge: You’re taking care of a friend’s house whilst he’s on vacation. In one room you pull the chain on a ceiling fan, and when it doesn’t respond you realize the house has temporarily lost power. Doh! Unfortunately, you have to leave now, and you’ll be away for several days.

// You know that the fan was in the “off” position before you pulled the chain, and that pulling the chain successively will cycle it through its remaining settings (“off,” “high”, “medium”. etc.). You don’t know how many settings there are, but you are sure there aren’t more than four.

// How can you ensure the fan will be in the “off” positions when power is restored?



// If you know it has no more than 4 settings, you need to pull it enough times that it'll end up in the off position if it has 4, 3, 2 or 1 settings. 4 * 3 * 2 * 1 = 12. Pull it a total of 12 times and no matter how many settings it has, it'll end up in the off position.