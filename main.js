// import { htmlString } from "./htmlString.mjs";
const html = `
<section>
<p id='p09' class='para'>
<span id='p09-ln00' class='line'>In the bullpen there's this big guy that likes to launch me into</span>
<span id='p09-ln01' class='line'>the air like a missile. That's what they call me and my friends,</span>
<span id='p09-ln02' class='line'>missiles,’cause they take one of our feet in their cupped hands</span>
<span id='p09-ln03' class='line'>and launch us through the air to see how high they can throw</span>
<span id='p09-ln04' class='line'>us. Abe is the best launcher—he's the biggest human being I've</span>
<span id='p09-ln05' class='line'>ever seen, and when he launches me I can see over the fence of</span>
<span id='p09-ln06' class='line'>the club all the way to the steeple of Meridian Street</span>
<span id='p09-ln07' class='line'>Methodist Church. My friends don't believe me, but it's true—</span>
<span id='p09-ln08' class='line'>I mean, it's not like I can prove it or anything—but I can see the</span>
<span id='p09-ln09' class='line'>steeple, and the Baskin Robbins sign right over the canal</span>
<span id='p09-ln10' class='line'>behind Rivi. I'm probably the lightest one out of all my friends,</span>
<span id='p09-ln11' class='line'>and that's why I go the highest. The funny thing is though,</span>
<span id='p09-ln12' class='line'>whenever I'm a missile I never get the urge to twitch or bark—</span>
<span id='p09-ln13' class='line'>I guess it's just because I'm too busy worrying about the flips</span>
<span id='p09-ln14' class='line'>and somersaults that I'm gonna' do. One time when Abe</span>
<span id='p09-ln15' class='line'>launched me I did three somersaults before I straightened out</span>
<span id='p09-ln16' class='line'>for a perfect dive into the water. I'm thinking I'll tell this to</span>
<span id='p09-ln17' class='line'>that doctor I'm gonna' see today, since that is practically the</span>
<span id='p09-ln18' class='line'>only time that I don't do it.</span>
</p>
</section>
`;

const main = document.createElement('main');
document.body.appendChild(main);

main.innerHTML = html;
