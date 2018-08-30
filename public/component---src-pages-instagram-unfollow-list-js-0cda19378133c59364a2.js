webpackJsonp([3632645560645],{1286:function(e,t,l){e.exports=l.p+"static/InstagramUnfollowList.d1015ea2.mp4"},259:function(e,t,l){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=l(1),n=o(a),r=(l(12),l(1286)),s=o(r),u=function(){return n.default.createElement("section",{id:"portfolio"},n.default.createElement("div",{className:"row"},n.default.createElement("div",{className:"twelve columns collapsed"},n.default.createElement("h2",null,"Instagram: Unfollow List"),n.default.createElement("h3",null,"It's always heartbreaking to find out when someone you follow doesn't follow you back 😢"),n.default.createElement("p",null,"This idea is similar my other project: ",n.default.createElement("a",{href:"Twitter-Unfollow-List"}," "," "," Twitter: Unfollow List"),". Here's how it works: Selenium with python is used to launch a session of Instagram. After the login credentials are entered, the program navigates to the user's page and extracts the number of following and followers. The program then clicks on the followers link to see who you follow and does the same with the following button on the user's page. The program finishes by comparing the two lists (followers vs following) and prints the Instagram handles that don't follow you back to a file.",n.default.createElement("br",null)," ",n.default.createElement("br",null),n.default.createElement("h3",null," Takeaways"),"Unlike twitter however, Instagram doesn't indicate who follows you when looking at your following list. This small change introduced many challenges for me while developing. One of the most interesting finds while debugging was figuring out that the instagram UI doesn't always accurately show your followers/following. For instance, I tested my program with 3 different account: one with ~ 50 followers, another with ~135 followers, and the last with ~550 followers. The account with the smallest number of followers worked flawlessly and as expected. The second account, for some reason, displayed one more than the actual number of people following. This was confirmed by me manually counting each follower as well as using Control+Find to see how many people the account was \"Following\". The last account found 1 more follower than what was displayed by the UI. There is a work around for this bug in the code but I am currently trying to figure out why that issue persists. Instagram's popup window of followers and following also posed as a challenge, as I was having difficulty trying to scroll down all the way to load all the followers/following.",n.default.createElement("br",null)," ",n.default.createElement("center",null," Check out the code for it on my ",n.default.createElement("a",{target:"_blank",href:"https://github.com/Aml5ha/InstagramUnfollowList"}," "," "," github"),"! ")),n.default.createElement("center",null," ",n.default.createElement("b",null," See it in action! ")),n.default.createElement("center",null,n.default.createElement("video",{width:"800",autoPlay:!0,muted:!0,loop:!0},n.default.createElement("source",{src:s.default,type:"video/mp4"}))))))};t.default=u,e.exports=t.default},272:function(e,t,l){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=l(1),n=o(a),r=l(26);o(r);l(25);var s=l(259),u=o(s),i=l(30),f=o(i),d=l(22),c=(o(d),l(23)),h=o(c),w=function(){return n.default.createElement("div",null,n.default.createElement(f.default,null),n.default.createElement(h.default,null),n.default.createElement(u.default,null))};t.default=w,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-instagram-unfollow-list-js-0cda19378133c59364a2.js.map