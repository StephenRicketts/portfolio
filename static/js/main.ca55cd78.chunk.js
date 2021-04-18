(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{253:function(e,t,s){},257:function(e,t,s){"use strict";s.r(t);var i=s(63),a=s.n(i),c=s(3),r=s.n(c),n=(s(78),s(14)),l=s(8),o=s(0);function d(e){return Object(o.jsx)("button",{className:"p-4  border-b-2 border-gray-800 hover:text-green-300 hover:border-green-300 focus:border-green-300 focus:text-green-300 cursor-pointer focus:outline-none transition duration-150 ease-in-out",children:e.children})}var j=s(26);var h=function(){return Object(o.jsx)("nav",{className:"fixed w-full justify-center z-10 text-gray-200 bg-gray-800 content-center",children:Object(o.jsxs)("ul",{className:"flex flex-row justify-center",children:[Object(o.jsx)("li",{className:"mx-1",children:Object(o.jsx)(j.a,{smooth:!0,to:"/#top",children:Object(o.jsx)(d,{children:"Home"})})}),Object(o.jsx)("li",{className:"mx-1",children:Object(o.jsx)(j.a,{smooth:!0,to:"/#portfolio",scroll:function(e){return function(e){var t=e.getBoundingClientRect().top+window.pageYOffset;window.scrollTo({top:t+-180,behavior:"smooth"})}(e)},children:Object(o.jsx)(d,{children:"Portfolio"})})}),Object(o.jsx)("li",{className:"mx-1",children:Object(o.jsx)(j.a,{smooth:!0,to:"/#skills",scroll:function(e){return function(e){var t=e.getBoundingClientRect().top+window.pageYOffset;window.scrollTo({top:t+40,behavior:"smooth"})}(e)},children:Object(o.jsx)(d,{children:"Skills"})})}),Object(o.jsx)("li",{className:"mx-1",children:Object(o.jsx)(j.a,{scroll:function(e){return function(e){var t=e.getBoundingClientRect().top+window.pageYOffset;window.scrollTo({top:t+35,behavior:"smooth"})}(e)},smooth:!0,to:"/#about",children:Object(o.jsx)(d,{children:"About"})})}),Object(o.jsx)("li",{className:"mx-1 ",children:Object(o.jsx)(n.b,{to:"/resume",children:Object(o.jsx)(d,{children:"Resume"})})})]})})};function b(){return Object(o.jsxs)("div",{id:"home",style:{borderBottomLeftRadius:"50%",borderBottomRightRadius:"50%"},className:"bg-gray-700 text-green-300 p-6 w-full h-1/6 text-center z-10 border-b border-green-300",children:[Object(o.jsx)("p",{className:"text-2xl md:text-4xl tracking-widest",children:"Stephen Ricketts"}),Object(o.jsx)("p",{className:" my-8 md:text-2xl tracking-wide ",children:"Full Stack Developer"})]})}function m(){return Object(o.jsx)(n.b,{to:"/projects/cd",children:Object(o.jsx)("button",{className:"p-6 m-8 rounded-lg bg-yellow-300 border-green-400 border-2",children:Object(o.jsx)("img",{className:"h-24 rounded-full",src:"/images/CDlogo.png",alt:"Code Display"})})})}function x(){return Object(o.jsx)(n.b,{to:"/projects/wg",children:Object(o.jsx)("button",{className:"p-6 m-8 rounded-lg bg-blue-400 border-green-300 border-2",children:Object(o.jsx)("img",{className:"h-24 ",src:"/images/WGlogo.png",alt:"Writer's Guild"})})})}function u(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{id:"portfolio",className:"text-grey-200 text-center w-3/5 md:w-1/5  m-auto text-3xl border-gray-200 border-b-2",children:"Recent Projects"}),Object(o.jsxs)("div",{children:[Object(o.jsx)(x,{}),Object(o.jsx)(m,{})]}),Object(o.jsxs)("p",{className:"px-2",children:["An exhaustive list of my projects can be found on my"," ",Object(o.jsx)("a",{className:"text-green-400",href:"https://github.com/StephenRicketts?tab=repositories",target:"_blank",rel:"noreferrer",children:"GitHub Repositories Page."})]})]})}var p=s(65),g=s(66),O=s(73),f=s(70),w=s(67),v=s.n(w),y=function(e){Object(O.a)(s,e);var t=Object(f.a)(s);function s(){return Object(p.a)(this,s),t.apply(this,arguments)}return Object(g.a)(s,[{key:"render",value:function(){return Object(o.jsx)(v.a,{height:window.outerHeight,id:"tsparticles",options:{background:{color:{value:"rgba(17, 24, 39)"}},fpsLimit:60,interactivity:{detectsOn:"window",events:{onClick:{enable:!1},onHover:{enable:!1},resize:!0},modes:{bubble:{distance:400,duration:2,opacity:.8,size:40}}},particles:{color:{value:"rgba(110, 231, 183)"},collisions:{enable:!0},move:{direction:"left",enable:!0,outMode:"out",random:!1,speed:2,straight:!1},number:{density:{enable:!0,value_area:800},value:40},opacity:{value:1},shape:{type:"circle"},size:{random:!0,value:3}},detectRetina:!0}})}}]),s}(c.Component),k={position:"absolute",top:0,left:0,width:"100%",height:"100%",zIndex:"-1"};function N(e){return Object(o.jsx)("div",{className:"font-mono",style:k,children:Object(o.jsx)(y,{})})}function S(e){return Object(o.jsxs)("div",{className:"w-3/5 flex justify-between items-center",children:[Object(o.jsx)("h2",{className:"p-4 text-right",children:e.skillName}),Object(o.jsx)("img",{className:"h-8",src:e.skillSvgPath,alt:e.skillName})]})}function I(){return Object(o.jsxs)("div",{className:"text-gray-200 w-4/5 md:w-3/5 m-auto",children:[Object(o.jsx)("h1",{id:"skills",className:"md:w-1/5 pt-32 pb-8 mx-auto text-center text-3xl border-gray-200 border-b-2",children:"Skills"}),Object(o.jsxs)("div",{className:"p-8 mt-8 flex flex-col md:grid md:grid-rows-6 grid-flow-col gap-4 bg-gray-700 items-center border-green-300 border-2 rounded-lg",children:[Object(o.jsx)(S,{skillName:"React/React Native",skillSvgPath:"/images/skills-icons/react.svg"}),Object(o.jsx)(S,{skillName:"JavaScript",skillSvgPath:"/images/skills-icons/javascript.svg"}),Object(o.jsx)(S,{skillName:"CSS-3",skillSvgPath:"/images/skills-icons/css-3.svg"}),Object(o.jsx)(S,{skillName:"Firebase",skillSvgPath:"/images/skills-icons/firebase.svg"}),Object(o.jsx)(S,{skillName:"MongoDB",skillSvgPath:"/images/skills-icons/mongodb.svg"}),Object(o.jsx)(S,{skillName:"node.js",skillSvgPath:"/images/skills-icons/nodejs.svg"}),Object(o.jsx)(S,{skillName:"React Router",skillSvgPath:"/images/skills-icons/react-router.svg"}),Object(o.jsx)(S,{skillName:"Redux",skillSvgPath:"/images/skills-icons/redux.svg"}),Object(o.jsx)(S,{skillName:"Tailwind CSS",skillSvgPath:"/images/skills-icons/tailwindcss.svg"}),Object(o.jsx)(S,{skillName:"TypeScript",skillSvgPath:"/images/skills-icons/typescript.svg"}),Object(o.jsx)(S,{skillName:"JavaScript",skillSvgPath:"/images/skills-icons/javascript.svg"}),Object(o.jsx)(S,{skillName:"Vue js",skillSvgPath:"/images/skills-icons/vue.svg"})]}),Object(o.jsx)("p",{className:"pt-4  text-justify",children:"Like any good developer I am constantly picking up new skills. Right now I am working on courses in AWS and nextJS."})]})}function R(){return Object(o.jsxs)("div",{className:"px-8",children:[Object(o.jsx)("h1",{id:"about",className:"w-3/5 md:w-1/6 pt-32 pb-8 m-auto text-3xl border-gray-200 border-b-2",children:"About"}),Object(o.jsx)("p",{className:"lg:w-1/3 text-justify pt-8 mx-auto ",children:'I currently live and work in Montr\xe9al, Quebec. In December 2019 I graduated from an intensive web development bootcamp through Concordia university. I have since continued to improve my skills as a developer through additional courses, personal projects, and freelancing. I feel confident to say that I am getting pretty good! I find programming to be very rewarding. When I finally figure out a tough bug or successfully implement a cool feature to a website I will often clap my hands and say "wooo!" \ud83d\udc4f.'}),Object(o.jsx)("p",{className:"lg:w-1/3 text-justify pt-4 mx-auto ",children:"My background is unique among most other developers. Prior to 2019 I worked in social work and Education. I worked in high stress environments with a broad range of different people and always did my best to improve their lives in any way I could. Through this work I acquired patience and excellent people skills. In 5 or so years, once I have become very proficient in the technical side of things, I could see myself being a team lead to make use of my soft skills and technical skills."})]})}function T(){return Object(o.jsxs)("div",{className:"font-mono pt-14",children:[Object(o.jsx)(N,{}),Object(o.jsx)(b,{}),Object(o.jsxs)("div",{className:"text-gray-200 pt-20",children:[Object(o.jsx)("img",{className:"h-36 m-auto cursor-pointer",src:"/images/avatar.png",alt:"avatar"}),Object(o.jsx)("h1",{className:"text-center text-2xl p-10",children:"Welcome to my Portfolio."}),Object(o.jsx)("p",{className:"md:w-2/4 lg:w-1/4 px-4 m-auto text-justify",children:"I am a full-stack web developer with a unique background in social work and education. I am passionate about tech and people and that makes me an ideal candidate for any team."}),Object(o.jsxs)("div",{className:"py-36 text-center",children:[Object(o.jsx)(u,{}),Object(o.jsx)(I,{}),Object(o.jsx)(R,{})]})]})]})}function C(){var e="stephen.ricketts12@gmail.com";return Object(o.jsxs)("footer",{style:{borderTopLeftRadius:"50%",borderTopRightRadius:"50%"},className:"bg-gray-700 text-green-300 p-6 w-full h-1/6 text-center z-10 border-t border-green-300",children:[Object(o.jsxs)("div",{className:"p-4",children:[Object(o.jsx)("a",{className:" hover:text-green-200 hover:underline",href:"mailto:".concat(e),children:e}),Object(o.jsx)("p",{className:"py-6",children:"514-233-4793"})]}),Object(o.jsxs)("div",{className:"flex py-4 justify-center",children:[Object(o.jsx)("a",{href:"https://github.com/StephenRicketts",children:Object(o.jsx)("img",{className:"mr-10",src:"/images/social-media-icons/github.svg",alt:"github"})}),Object(o.jsx)("a",{href:"https://www.linkedin.com/in/stephenricketts5/",children:Object(o.jsx)("img",{className:"",src:"/images/social-media-icons/linkedIn.svg",alt:"linkedIn"})})]}),Object(o.jsx)("div",{className:"text-center",children:Object(o.jsx)("small",{children:"\xa92021 Stephen Ricketts"})})]})}var P=s(68),W=s.n(P),G=(s(253),[{original:"/images/WGlanding.png",description:"This is the landing page for Writer's Guild"},{original:"/images/WGstacks.png",description:"This is the stacks page, where works that have been written and published by other authors will show up. Clicking on one of these 'bookspines' will open up the publication and allow the user to read the publication."},{original:"/images/WGread.png",description:"This is an open publication. A user can read the work and then endorse it or leave a comment for the author."},{original:"/images/WGwrite.png",description:"This is the writing section of the application. The text editor is called TinyMCE, it is a WYSIWYG HTML editor which means it stores saved content as HTML to account for font and formatting specifics. The saved content is stored in a Firebase firestore."},{original:"/images/WGprofile.png",description:"This is the profile page, where all of your current works are stored in your 'bookshelf'. Here you can choose to publish your work when it is done and it will be added to the stacks page."}]),D=[{original:"/images/CDshow.png",description:"The built-in 'show' function allows the javascript code to be displayed."},{original:"/images/CDbulma.png",description:"Outside libraries can be imported and used within the environment. There is also a text editor that allows you to document the code you are writing."}];function B(e){var t;return"WG"===e.project&&(t=G),"CD"===e.project&&(t=D),Object(o.jsx)(W.a,{showPlayButton:!1,items:t})}var A=s(33),E=s(34);function F(){return Object(o.jsxs)("div",{className:"flex flex-col lg:flex-row",children:[Object(o.jsxs)("div",{className:" mt-32 py-16 w-4/5 md:w-3/5 lg:w-1/3 m-auto text-gray-200 bg-gray-700 border-green-300 border-2 rounded-lg",children:[Object(o.jsx)("h1",{className:" text-center text-indigo-400 text-3xl",children:"Writer's Guild"}),Object(o.jsx)("div",{className:"pt-4 w-1/2 mx-auto",children:Object(o.jsxs)("h2",{className:"text-center",children:["Technologies:",Object(o.jsx)("br",{})," ",Object(o.jsx)("span",{className:" text-blue-300",children:"React"}),","," ",Object(o.jsx)("span",{className:"text-purple-300",children:"TailwindCSS"}),","," ",Object(o.jsx)("span",{className:"text-red-400",children:"Firebase"})]})}),Object(o.jsx)("p",{className:"py-8 px-14 mx-auto",children:"Writer's Guild is a React App I built to be used in the browser. Writer's Guild provides amateur authors with a space to write, share their work, and allows feedback from other writers. The backend and user authentication is built using Firebase. Styling is done with Tailwind css. Writer's guild includes an embedded text editor called TinyMCE that allows for easy and convenient creation of spell checked and formatted text documents."}),Object(o.jsxs)("h2",{className:"text-center pb-4",children:["View the github repository"," ",Object(o.jsx)("a",{href:"https://github.com/StephenRicketts/writers-guild-production",children:Object(o.jsx)("u",{className:"text-blue-600",children:"here."})})," "]}),Object(o.jsxs)("h2",{className:"text-center pb-4",children:["Writer's Guild is hosted"," ",Object(o.jsx)("a",{href:"https://writers-guild.ca/",children:Object(o.jsx)("u",{className:"text-blue-600",children:"here."})})]}),Object(o.jsxs)("div",{className:"text-center lg:hidden",children:[Object(o.jsx)("p",{className:"pb-4",children:"Check out some screenshots below"}),Object(o.jsx)(A.a,{icon:E.a})]})]}),Object(o.jsx)("div",{className:"w-full lg:w-1/2 my-20 mx-auto",children:Object(o.jsx)(B,{project:"WG"})})]})}function M(){return Object(o.jsxs)("div",{className:"flex flex-col lg:flex-row",children:[Object(o.jsxs)("div",{className:" mt-32 py-16 w-4/5 md:w-3/5 lg:w-1/3 m-auto text-gray-200 bg-gray-700 border-green-300 border-2 rounded-lg",children:[Object(o.jsx)("h1",{className:" text-center text-indigo-400 text-3xl",children:"Code Display"}),Object(o.jsx)("div",{className:"pt-4 w-1/2 mx-auto",children:Object(o.jsxs)("h2",{className:"text-center",children:["Technologies:",Object(o.jsx)("br",{})," ",Object(o.jsx)("span",{className:" text-blue-300",children:"React"}),","," ",Object(o.jsx)("span",{className:"text-purple-300",children:"Bulma"}),","," ",Object(o.jsx)("span",{className:"text-red-400",children:"ESBuild"}),","," ",Object(o.jsx)("span",{className:"text-indigo-400",children:"Lerna"}),","," ",Object(o.jsx)("span",{className:"text-yellow-400",children:"Commander"})]})}),Object(o.jsxs)("div",{className:"text-center",children:[Object(o.jsx)("p",{className:"py-8 px-14 text-justify mx-auto",children:"Code display is a command-line interface for a browser based interactive coding environment. It uses ESbuild to bundle, execute, and display JavaScript code you have written in the browser. There is also a built in text editor that allows the user to document their code while they write it."}),Object(o.jsx)("h2",{children:"Try it out on the command line by running:"}),Object(o.jsx)("h2",{className:"text-green-300 py-4",children:"npx codedisplay serve"}),Object(o.jsxs)("h2",{className:"text-center pb-4",children:["View the github repository"," ",Object(o.jsx)("a",{href:"https://github.com/StephenRicketts/codedisplay",children:Object(o.jsx)("u",{className:"text-blue-600",children:"here."})})," "]})]}),Object(o.jsxs)("div",{className:"text-center lg:hidden",children:[Object(o.jsx)("p",{className:"pb-4",children:"Check out some screenshots below"}),Object(o.jsx)(A.a,{icon:E.a})]})]}),Object(o.jsx)("div",{className:"w-full lg:w-1/2 my-20 mx-auto",children:Object(o.jsx)(B,{project:"CD"})})]})}var V=s(69),z=s(28),H=s(72),J=s(71),L=function(e){var t,s=e.children,i=e.wrapperElement,a=void 0===i?"div":i,r=e.direction,n=void 0===r?null:r,l=e.delay,d=void 0===l?.5:l,j=Object(H.a)(e,["children","wrapperElement","direction","delay"]),h=a,b=Object(c.useRef)(null),m=200;switch(n){case"left":t={x:-200};break;case"right":t={x:m};break;case"up":t={y:m};break;case"down":t={y:-200};break;default:t={x:0}}return Object(c.useEffect)((function(){J.a.from(b.current,1,Object(z.a)(Object(z.a)({},t),{},{opacity:0,delay:d}))}),[b,t,d]),Object(o.jsx)(h,Object(z.a)(Object(z.a)({ref:b},j),{},{children:s}))};function q(){var e=Object(c.useState)(!1),t=Object(V.a)(e,2),s=t[0],i=t[1];return Object(o.jsxs)("div",{className:"mx-10  text-center  text-gray-300",children:[Object(o.jsx)("h1",{className:"pt-14 pb-2 text-2xl",children:"Stephen Ricketts"}),Object(o.jsx)("div",{className:"flex mx-auto ",children:Object(o.jsxs)("div",{className:" mx-auto space-x-6",children:[Object(o.jsx)("h2",{className:"pb-8 text-xl text-green-300",children:"Full Stack Developer"}),Object(o.jsx)("h2",{className:"pb-2",children:"stephen.ricketts12@gmail.com"}),Object(o.jsx)("h2",{children:"514-233-4794"})]})}),Object(o.jsx)("h1",{className:"my-12 mx-auto py-2 w-3/5 md:w-1/5 text-5xl font-thin",children:"Resume"}),Object(o.jsx)("h2",{className:"text-3xl pb-10  mx-auto  w-3/5 md:w-1/5 border-b-2 border-green-300",children:"Employment"}),Object(o.jsx)("h3",{className:"py-10 text-3xl",children:"Freelance"}),Object(o.jsx)("p",{className:"text-xl",children:"Full-stack web development | App development"}),Object(o.jsxs)("div",{className:"pt-2 mb-24 mx-auto md:w-1/2 lg:w-1/3 text-justify space-y-4",children:[Object(o.jsx)("p",{children:"I am currently working a 2 month contract for a small start-up called SeonVision. This project entails building a website and hooking it up to a React admin panel template and then doing the necessary customizations to the template. I am using React, tailwindCSS for styling, and for the back end we are using Firebase."}),Object(o.jsxs)("p",{children:[" ","While I am enjoying my work as a freelancer, it is my goal to land a junior position with a larger team. I have a lot to offer as an employee and think that joining a larger team would allow me to learn from more experienced developers."]})]}),Object(o.jsx)("h2",{className:"text-3xl pb-10  mx-auto  w-3/5 md:w-1/5 border-b-2 border-green-300",children:"Skills"}),Object(o.jsxs)("div",{className:"pt-12 mb-24 mx-auto md:w-1/2 lg:w-1/3 text-justify space-y-4",children:[Object(o.jsx)("p",{children:"I use React and tailwindCSS every day, so I try to keep up with the latest features in both. As React is currently my favorite framework, I've written a lot of JavaScript so I like to think I've gotten pretty good with it. I've worked with other styling frameworks (Sass and Bulma) and I am always open to learning new ways of doing things. I also have experience working with React Native, TypeScript, Vue.js, MongoDB, Firebase, and Node.js."}),Object(o.jsx)("p",{children:"I am a quick learner and I love picking up new skills so I am open to learning any language or framework. Being a good Dev means constantly learning, so I am currently working on courses in AWS and Next js."})]}),Object(o.jsx)("h2",{className:"text-3xl pb-10  mx-auto  w-3/5 md:w-1/5 border-b-2 border-green-300",children:"Education"}),Object(o.jsx)("h2",{className:"text-2xl py-8",children:"Diploma in Full-Stack Development - Concordia University 2019"}),Object(o.jsxs)("div",{className:" mb-24 mx-auto md:w-1/2 lg:w-1/3 text-justify space-y-4",children:[Object(o.jsx)("p",{children:"Completed 480+ hours of intensive full-stack web development course focused on programming fundamentals including test-driven development, object-oriented programming, MVC, SCRUM, Agile methodologies, pair-programming, algorithms and databases, etc."}),Object(o.jsxs)("div",{className:"text-center",children:[Object(o.jsx)("button",{onClick:function(){i(!s)},className:"my-8 py-2 px-4 border-2 border-green-300 text-green-300 hover:bg-green-300 hover:text-black transition duration-150 ease-in-out",children:"View Diploma"}),s&&Object(o.jsx)(L,{direction:"left",className:"py-8 px-4",distance:100,children:Object(o.jsx)("img",{className:"mx-auto",src:"/images/diploma.jpg",alt:"diploma"})})]}),Object(o.jsxs)("div",{children:[Object(o.jsxs)("h2",{className:"text-2xl text-center",children:["React Native - The Practical Guide ",Object(o.jsx)("br",{})," [2020 edition]"]}),Object(o.jsx)("p",{children:"This course covers using React Native to build native iOS and Android Apps - incl. Push Notifications, Hooks, Redux. (32 hours of lectures, 4 projects)"}),Object(o.jsxs)("p",{className:"pt-6",children:["View Certificate"," ",Object(o.jsx)("a",{className:" text-green-300 underline",href:"https://www.udemy.com/certificate/UC-c5e16da5-af95-4246-a4e6-f89131bb84a3/ ",children:"here"})]})]}),Object(o.jsxs)("div",{className:"pt-12",children:[Object(o.jsx)("h2",{className:"pb-6 text-2xl text-center",children:"React and TypeScript: Build a Portfolio Project"}),Object(o.jsx)("p",{children:"This course covers using React and TypeScript to build a complex application. The project uses other tools such as Commander and ESbuild to an interactive web-based coding environment much like CodePen. (29.5 hours of lectures)"}),Object(o.jsxs)("p",{className:"pt-6",children:["View Certificate"," ",Object(o.jsx)("a",{className:" text-green-300 underline",href:"https://www.udemy.com/certificate/UC-f89a249f-1af7-4f45-b3a8-dd85a0e8581c/",children:"here"})]})]})]})]})}var Y=Object(l.g)((function(e){var t=Object(l.f)().pathname;return Object(c.useEffect)((function(){window.scrollTo(0,0)}),[t]),e.children})),U=function(){return Object(o.jsx)(c.Fragment,{children:Object(o.jsx)(n.a,{children:Object(o.jsxs)(Y,{children:[Object(o.jsx)(h,{}),Object(o.jsxs)(l.c,{children:[Object(o.jsx)(l.a,{exact:!0,path:"/",children:Object(o.jsx)(T,{})}),Object(o.jsx)(l.a,{exact:!0,path:"/projects/wg",children:Object(o.jsx)(F,{})}),Object(o.jsx)(l.a,{exact:!0,path:"/projects/cd",children:Object(o.jsx)(M,{})}),Object(o.jsx)(l.a,{exact:!0,path:"/resume",children:Object(o.jsx)(q,{})})]}),Object(o.jsx)(C,{})]})})})};a.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(U,{})}),document.querySelector("#root"))},78:function(e,t,s){}},[[257,1,2]]]);
//# sourceMappingURL=main.ca55cd78.chunk.js.map