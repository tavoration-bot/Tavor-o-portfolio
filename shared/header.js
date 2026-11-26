/* Shared site header (logo, Work, AbouTavor, ContacTavor + contact bubble).
   Every page loads this file in <head> and puts one line where the header goes:
     <site-header current="home" root=""></site-header>       (home page)
     <site-header current="about" root="../"></site-header>   (a page one folder down)
   current: which page this is (home, about, or a case-study name).
   root: the path from this page back to the site root. */
(function(){
  var TEMPLATE="<header class=\"site-header\">\n  <a class=\"site-logo\" id=\"site-logo\" href=\"{{home}}\" aria-label=\"Tavor Olivier, home\">\n    <span class=\"nlin\" aria-hidden=\"true\">\n      <span class=\"nlini\"><span class=\"nlav\"><span class=\"nlt\">avor</span></span></span>\n      <span class=\"nlli\"><span class=\"nlt\">livier</span></span>\n      <svg class=\"nlfin\" width=\"307\" height=\"38\" viewBox=\"0 0 307 38\" fill=\"none\" aria-hidden=\"true\"><path transform=\"translate(56.47 8)\" d=\"M12 24.5V3H0V0.5H27V3H15V24.5H12ZM31.0088 24.8438C28.8525 24.8438 27.0713 24.7292 25.665 24.5C24.2692 24.2812 23.2275 23.7917 22.54 23.0312C21.8629 22.2708 21.5244 21.0885 21.5244 19.4844C21.5244 17.849 21.8421 16.651 22.4775 15.8906C23.1233 15.1198 24.139 14.6198 25.5244 14.3906C26.9202 14.1615 28.7483 14.0469 31.0088 14.0469C32.8421 14.0469 34.3785 14.0885 35.6181 14.1719C36.8577 14.2552 37.9671 14.401 38.9463 14.6094C38.9254 13.224 38.8317 12.1354 38.665 11.3438C38.4983 10.5417 38.1858 9.94792 37.7275 9.5625C37.2692 9.17708 36.5973 8.93229 35.7119 8.82812C34.8369 8.71354 33.6702 8.65625 32.2119 8.65625C30.5452 8.65625 29.2379 8.69271 28.29 8.76562C27.3525 8.83854 26.6702 8.96875 26.2431 9.15625C25.816 9.34375 25.5452 9.61458 25.4306 9.96875C25.3265 10.3229 25.2744 10.7812 25.2744 11.3438H22.2744C22.2744 10.2188 22.4254 9.3125 22.7275 8.625C23.04 7.9375 23.566 7.41667 24.3056 7.0625C25.0452 6.70833 26.0556 6.46875 27.3369 6.34375C28.6285 6.21875 30.2535 6.15625 32.2119 6.15625C34.316 6.15625 36.0088 6.29167 37.29 6.5625C38.5817 6.83333 39.5608 7.32292 40.2275 8.03125C40.9046 8.72917 41.3577 9.70833 41.5869 10.9688C41.8265 12.2292 41.9463 13.8542 41.9463 15.8438V24.5H38.9463V23.2656C38.5921 23.6406 38.1025 23.9427 37.4775 24.1719C36.8525 24.401 36.0192 24.5677 34.9775 24.6719C33.9463 24.7865 32.6233 24.8438 31.0088 24.8438ZM31.0088 22.4062C32.79 22.4062 34.2119 22.3854 35.2744 22.3438C36.3369 22.3021 37.1285 22.1875 37.6494 22C38.1806 21.8125 38.5296 21.5104 38.6963 21.0938C38.8629 20.6771 38.9463 20.0938 38.9463 19.3438V16.5781L31.0088 16.4844C29.6025 16.4635 28.4671 16.4844 27.6025 16.5469C26.7483 16.599 26.0973 16.724 25.6494 16.9219C25.2015 17.1094 24.8994 17.4115 24.7431 17.8281C24.5973 18.2344 24.5244 18.7865 24.5244 19.4844C24.5244 20.1615 24.5973 20.6979 24.7431 21.0938C24.8994 21.4896 25.2015 21.7812 25.6494 21.9688C26.0973 22.1562 26.7483 22.276 27.6025 22.3281C28.4671 22.3802 29.6025 22.4062 31.0088 22.4062ZM54.29 24.5L44.8838 6.5H48.415L56.29 22.25H56.3213L64.3525 6.5H67.6963L58.29 24.5H54.29ZM80.2119 24.8438C78.2015 24.8438 76.4931 24.7396 75.0869 24.5312C73.6806 24.3333 72.5452 23.9219 71.6806 23.2969C70.816 22.6615 70.1858 21.7135 69.79 20.4531C69.3942 19.1927 69.1963 17.5104 69.1963 15.4062C69.1963 13.3646 69.3942 11.7292 69.79 10.5C70.1858 9.27083 70.816 8.34375 71.6806 7.71875C72.5452 7.09375 73.6806 6.67708 75.0869 6.46875C76.4931 6.26042 78.2015 6.15625 80.2119 6.15625C82.2327 6.15625 83.941 6.26042 85.3369 6.46875C86.7431 6.67708 87.8785 7.09375 88.7431 7.71875C89.6077 8.34375 90.2379 9.27083 90.6338 10.5C91.0296 11.7292 91.2275 13.3646 91.2275 15.4062C91.2275 17.5104 91.0296 19.1927 90.6338 20.4531C90.2379 21.7135 89.6077 22.6615 88.7431 23.2969C87.8785 23.9219 86.7431 24.3333 85.3369 24.5312C83.941 24.7396 82.2327 24.8438 80.2119 24.8438ZM88.2275 15.4062C88.2275 13.9167 88.1494 12.724 87.9931 11.8281C87.8473 10.9323 87.5192 10.2604 87.0088 9.8125C86.4983 9.35417 85.7015 9.04688 84.6181 8.89062C83.5452 8.73438 82.0765 8.65625 80.2119 8.65625C78.3577 8.65625 76.889 8.73438 75.8056 8.89062C74.7223 9.04688 73.9254 9.35417 73.415 9.8125C72.9046 10.2604 72.5713 10.9323 72.415 11.8281C72.2692 12.724 72.1963 13.9167 72.1963 15.4062C72.1963 16.9479 72.2692 18.1823 72.415 19.1094C72.5713 20.0365 72.9046 20.7344 73.415 21.2031C73.9254 21.6615 74.7223 21.9688 75.8056 22.125C76.889 22.2708 78.3577 22.3438 80.2119 22.3438C82.0765 22.3438 83.5452 22.2708 84.6181 22.125C85.7015 21.9688 86.4983 21.6615 87.0088 21.2031C87.5192 20.7344 87.8473 20.0365 87.9931 19.1094C88.1494 18.1823 88.2275 16.9479 88.2275 15.4062ZM95.04 24.5V6.5H98.04V8.98438C98.3733 8.45312 98.7067 8.01042 99.04 7.65625C99.3838 7.30208 99.8265 7.02083 100.368 6.8125C100.92 6.60417 101.665 6.45833 102.603 6.375C103.54 6.28125 104.774 6.23438 106.306 6.23438V8.75C104.243 8.75 102.644 8.82292 101.509 8.96875C100.384 9.11458 99.5765 9.36458 99.0869 9.71875C98.5973 10.0625 98.3004 10.5417 98.1963 11.1562C98.0921 11.7708 98.04 12.5521 98.04 13.5V24.5H95.04ZM130.837 25C128.493 25 126.566 24.8385 125.056 24.5156C123.545 24.2031 122.363 23.6198 121.509 22.7656C120.665 21.9115 120.071 20.6823 119.728 19.0781C119.394 17.474 119.228 15.3854 119.228 12.8125V12.1875C119.228 10.0625 119.332 8.28125 119.54 6.84375C119.748 5.39583 120.108 4.21875 120.618 3.3125C121.129 2.40625 121.821 1.71354 122.696 1.23438C123.582 0.755208 124.691 0.432292 126.024 0.265625C127.358 0.0885417 128.962 0 130.837 0H137.134C139.009 0 140.613 0.0885417 141.946 0.265625C143.28 0.432292 144.384 0.755208 145.259 1.23438C146.144 1.71354 146.842 2.40625 147.353 3.3125C147.863 4.21875 148.222 5.39583 148.431 6.84375C148.639 8.28125 148.743 10.0625 148.743 12.1875V12.8125C148.743 15.3854 148.571 17.474 148.228 19.0781C147.894 20.6823 147.3 21.9115 146.446 22.7656C145.603 23.6198 144.425 24.2031 142.915 24.5156C141.405 24.8385 139.478 25 137.134 25H130.837ZM130.837 22.4062H137.134C138.623 22.4062 139.879 22.3542 140.899 22.25C141.92 22.1458 142.748 21.9219 143.384 21.5781C144.03 21.2344 144.519 20.7135 144.853 20.0156C145.196 19.3177 145.431 18.3854 145.556 17.2188C145.681 16.0521 145.743 14.5833 145.743 12.8125V12.1875C145.743 10.3542 145.681 8.84375 145.556 7.65625C145.431 6.46875 145.196 5.53125 144.853 4.84375C144.519 4.15625 144.03 3.65625 143.384 3.34375C142.748 3.02083 141.92 2.81771 140.899 2.73438C139.879 2.64062 138.623 2.59375 137.134 2.59375H130.837C129.347 2.59375 128.092 2.64062 127.071 2.73438C126.05 2.81771 125.217 3.02083 124.571 3.34375C123.936 3.65625 123.446 4.15625 123.103 4.84375C122.769 5.53125 122.54 6.46875 122.415 7.65625C122.29 8.84375 122.228 10.3542 122.228 12.1875V12.8125C122.228 14.5833 122.29 16.0521 122.415 17.2188C122.54 18.3854 122.769 19.3177 123.103 20.0156C123.446 20.7135 123.936 21.2344 124.571 21.5781C125.217 21.9219 126.05 22.1458 127.071 22.25C128.092 22.3542 129.347 22.4062 130.837 22.4062ZM153.759 24.5V0.5H156.759V24.5H153.759ZM161.759 24.5V7.5H164.759V24.5H161.759ZM161.759 3.5V0.5H164.759V3.5H161.759ZM177.165 24.5L167.759 6.5H171.29L179.165 22.25H179.196L187.227 6.5H190.571L181.165 24.5H177.165ZM193.571 24.5V7.5H196.571V24.5H193.571ZM193.571 3.5V0.5H196.571V3.5H193.571ZM221.181 19.1562C221.181 20.5 220.977 21.5573 220.571 22.3281C220.175 23.099 219.566 23.6615 218.743 24.0156C217.92 24.3698 216.868 24.5938 215.587 24.6875C214.316 24.7917 212.8 24.8438 211.04 24.8438C209.03 24.8438 207.321 24.7396 205.915 24.5312C204.519 24.3333 203.389 23.9219 202.524 23.2969C201.67 22.6615 201.045 21.7135 200.649 20.4531C200.264 19.1927 200.071 17.5104 200.071 15.4062C200.071 13.3646 200.259 11.7292 200.634 10.5C201.019 9.27083 201.639 8.34375 202.493 7.71875C203.347 7.09375 204.467 6.67708 205.852 6.46875C207.248 6.26042 208.951 6.15625 210.962 6.15625C213.264 6.15625 215.17 6.31771 216.681 6.64062C218.191 6.96354 219.316 7.57812 220.056 8.48438C220.806 9.39062 221.181 10.7188 221.181 12.4688V16.3281H203.087C203.097 17.6615 203.191 18.7292 203.368 19.5312C203.545 20.3333 203.899 20.9375 204.431 21.3438C204.962 21.75 205.754 22.0208 206.806 22.1562C207.868 22.2812 209.28 22.3438 211.04 22.3438C212.623 22.3438 213.899 22.3125 214.868 22.25C215.847 22.1875 216.587 22.0521 217.087 21.8438C217.597 21.625 217.941 21.3021 218.118 20.875C218.295 20.4479 218.384 19.875 218.384 19.1562H221.181ZM210.962 8.65625C209.264 8.65625 207.894 8.71875 206.852 8.84375C205.821 8.96875 205.035 9.21354 204.493 9.57812C203.951 9.93229 203.582 10.4635 203.384 11.1719C203.196 11.8802 203.097 12.8125 203.087 13.9688H218.306V12.4688C218.306 11.7188 218.217 11.099 218.04 10.6094C217.873 10.1094 217.54 9.71875 217.04 9.4375C216.54 9.14583 215.8 8.94271 214.821 8.82812C213.852 8.71354 212.566 8.65625 210.962 8.65625ZM225.384 24.5V6.5H228.384V8.98438C228.717 8.45312 229.05 8.01042 229.384 7.65625C229.727 7.30208 230.17 7.02083 230.712 6.8125C231.264 6.60417 232.009 6.45833 232.946 6.375C233.884 6.28125 235.118 6.23438 236.649 6.23438V8.75C234.587 8.75 232.988 8.82292 231.852 8.96875C230.727 9.11458 229.92 9.36458 229.431 9.71875C228.941 10.0625 228.644 10.5417 228.54 11.1562C228.436 11.7708 228.384 12.5521 228.384 13.5V24.5H225.384Z\" fill=\"#fff\"/></svg>\n      <svg class=\"nlT\" width=\"307\" height=\"38\" viewBox=\"0 0 307 38\" fill=\"none\" aria-hidden=\"true\"><path d=\"M12 32V10.5H0V8H27V10.5H15V32H12Z\" fill=\"#fff\"/></svg>\n      <svg class=\"nlO\" width=\"307\" height=\"38\" viewBox=\"0 0 307 38\" fill=\"none\" aria-hidden=\"true\"><path d=\"M37.4362 8C39.3112 8 40.9154 8.08854 42.2488 8.26562C43.5821 8.43229 44.6862 8.75521 45.5612 9.23438C46.4467 9.71354 47.1446 10.4062 47.655 11.3125C48.1654 12.2188 48.5248 13.3958 48.7331 14.8438C48.9415 16.2812 49.0456 18.0625 49.0456 20.1875V20.8125C49.0456 23.3854 48.8738 25.474 48.53 27.0781C48.1967 28.6823 47.6029 29.9115 46.7488 30.7656C45.905 31.6198 44.7279 32.2031 43.2175 32.5156C41.7071 32.8385 39.78 33 37.4362 33H31.1394C28.7956 33 26.8685 32.8385 25.3581 32.5156C23.8477 32.2031 22.6654 31.6198 21.8112 30.7656C20.9675 29.9115 20.3737 28.6823 20.03 27.0781C19.6967 25.474 19.53 23.3854 19.53 20.8125V20.1875C19.53 18.0625 19.6342 16.2812 19.8425 14.8438C19.9694 13.9618 20.1541 13.1809 20.3933 12.5H23.6042C23.5339 12.6091 23.4656 12.7225 23.405 12.8438C23.0717 13.5312 22.8425 14.4688 22.7175 15.6562C22.5925 16.8438 22.53 18.3542 22.53 20.1875V20.8125C22.53 22.5833 22.5925 24.0521 22.7175 25.2188C22.8425 26.3854 23.0717 27.3177 23.405 28.0156C23.7487 28.7135 24.2383 29.2344 24.8737 29.5781C25.5196 29.9219 26.3529 30.1458 27.3737 30.25C28.3946 30.3542 29.6498 30.4062 31.1394 30.4062H37.4362C38.9258 30.4062 40.181 30.3542 41.2019 30.25C42.2227 30.1458 43.0508 29.9219 43.6862 29.5781C44.3321 29.2344 44.8217 28.7135 45.155 28.0156C45.4988 27.3177 45.7331 26.3854 45.8581 25.2188C45.9831 24.0521 46.0456 22.5833 46.0456 20.8125V20.1875C46.0456 18.3542 45.9831 16.8438 45.8581 15.6562C45.7331 14.4688 45.4988 13.5312 45.155 12.8438C44.8217 12.1562 44.3321 11.6562 43.6862 11.3438C43.0508 11.0208 42.2227 10.8177 41.2019 10.7344C40.181 10.6406 38.9258 10.5938 37.4362 10.5938H31.1394C30.5685 10.5938 30.032 10.6017 29.53 10.6162V8.02637C30.0422 8.00991 30.5787 8 31.1394 8H37.4362Z\" fill=\"#fff\"/></svg>\n    </span>\n  </a>\n  <nav class=\"site-nav\" aria-label=\"Main\">\n    <a href=\"{{work}}\">Work</a>\n    <a href=\"{{about}}\"{{aboutCurrent}}>AbouTavor</a>\n    <div class=\"site-nav__contact\">\n      <button type=\"button\" class=\"site-nav__btn\" id=\"site-contact-btn\" aria-expanded=\"false\" aria-controls=\"site-contact-bubble\" aria-haspopup=\"dialog\">ContacTavor</button>\n      <div class=\"site-bubble\" id=\"site-contact-bubble\" role=\"dialog\" aria-label=\"Contact\" aria-hidden=\"true\">\n        <span class=\"site-bubble__bg\" aria-hidden=\"true\"><svg class=\"site-bubble__tail\" width=\"46\" height=\"23\" viewBox=\"0 0 46 23\" aria-hidden=\"true\"><path d=\"M0 23 C9 18 14 8 19.5 2.2 Q23 -0.8 26.5 2.2 C32 8 37 18 46 23 Z\"/></svg></span><span class=\"site-bubble__ring\" aria-hidden=\"true\"></span><svg class=\"site-bubble__line\" width=\"46\" height=\"23\" viewBox=\"0 0 46 23\" aria-hidden=\"true\"><path d=\"M0 23 C9 18 14 8 19.5 2.2 Q23 -0.8 26.5 2.2 C32 8 37 18 46 23\"/></svg>\n        <h2>What'ya waiting for?</h2>\n        <ul>\n          <li><a href=\"mailto:tavoration@gmail.com\">Email</a></li>\n          <li><a href=\"https://www.linkedin.com/in/tavorolivier/\">LinkedIn</a></li>\n          <li><a href=\"{{cv}}\" download=\"Tavor-Olivier-CV.pdf\">CV</a></li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n</header>";

  function build(current,root){
    var onHome=current==='home';
    var html=TEMPLATE
      .replace('{{home}}',root||'./')
      .replace('{{work}}',onHome?'#work':root+'#work')
      .replace('{{about}}',root+'about/')
      .replace('{{aboutCurrent}}',current==='about'?' aria-current="page"':'')
      .replace('{{cv}}',root+'shared/cv/Tavor-Olivier-CV.pdf');
    var isCase=current!=='home'&&current!=='about';
    if(isCase)html=html.replace(/<a href="[^"]*">Work<\/a>\s*/,'');
    var t=document.createElement('template');
    t.innerHTML=html;
    var el=t.content.firstElementChild;
    if(isCase)el.classList.add('site-header--case');
    return el;
  }

  /* Case-study pages: the header takes the page's own colors (text color and background, from <body>),
     so it blends into dark and light pages alike. */
  function themeFromPage(header){
    var cs=getComputedStyle(document.body),bg=cs.backgroundColor,m=bg.match(/[\d.]+/g);
    if(!m||(m.length>3&&+m[3]===0)){m=(getComputedStyle(document.documentElement).backgroundColor.match(/[\d.]+/g))||['15','15','26']}
    header.style.setProperty('--sh-bg-rgb',(+m[0])+','+(+m[1])+','+(+m[2]));
    header.style.setProperty('--sh-fg',cs.color);
  }

  function initBubble(header){
    var btn=header.querySelector('#site-contact-btn'),box=header.querySelector('#site-contact-bubble');
    if(!btn||!box)return;
    function place(){
      var hr=header.getBoundingClientRect(),r=btn.getBoundingClientRect();
      var vw=document.documentElement.clientWidth,edge=12,w=box.offsetWidth;
      var cx=r.left-hr.left+r.width/2;
      /* the open tab is scaled up (--sh-grow); the bubble points at the bottom of the grown tab */
      var grow=parseFloat(getComputedStyle(header).getPropertyValue('--sh-grow'))||1;
      var bottom=r.top+r.height/2+btn.offsetHeight*grow/2;
      var left=Math.max(edge-hr.left,Math.min(cx-w/2,vw-hr.left-edge-w));
      box.style.left=left+'px';
      box.style.top=(bottom-hr.top+(vw<=720?1:8)+23)+'px';
      box.style.setProperty('--ax',Math.max(40,Math.min(w-40,cx-left))+'px');
    }
    function setOpen(o,focus){
      if(o)place();
      box.classList.toggle('is-open',o);
      box.setAttribute('aria-hidden',o?'false':'true');
      btn.setAttribute('aria-expanded',o?'true':'false');
      if(!o&&focus)btn.focus();
    }
    btn.addEventListener('click',function(e){e.stopPropagation();setOpen(!box.classList.contains('is-open'));});
    document.addEventListener('click',function(e){if(box.classList.contains('is-open')&&!box.contains(e.target)&&e.target!==btn)setOpen(false);});
    document.addEventListener('keydown',function(e){if(e.key==='Escape'&&box.classList.contains('is-open'))setOpen(false,true);});
    window.addEventListener('resize',function(){if(box.classList.contains('is-open'))place();});
  }

  /* Logo: TO monogram -> Tavor Olivier. Plays once the Michroma font has loaded.
     On the home page a click replays it; on other pages the logo leads home. */
  function initLogo(header,onHome){
    var logo=header.querySelector('#site-logo');
    if(!logo)return;
    var still=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    function play(){logo.classList.remove('anim');void logo.offsetWidth;logo.classList.add('anim');}
    if(onHome)logo.addEventListener('click',function(e){e.preventDefault();if(!still)play();});
    if(!still&&document.fonts&&document.fonts.load){
      Promise.race([document.fonts.load('32px "Michroma"'),new Promise(function(r){setTimeout(r,2500)})]).then(function(){
        if(document.fonts.check('32px "Michroma"'))play();
      });
    }
  }

  customElements.define('site-header',class extends HTMLElement{
    connectedCallback(){
      var current=this.getAttribute('current')||'',root=this.getAttribute('root')||'';
      var header=build(current,root);
      this.replaceWith(header);
      initBubble(header);
      initLogo(header,current==='home');
      if(header.classList.contains('site-header--case')){themeFromPage(header)}
      else{
        var mark=function(){header.classList.toggle('is-scrolled',window.scrollY>4)};
        window.addEventListener('scroll',mark,{passive:true});window.addEventListener('pageshow',mark);mark();
      }
    }
  });
})();
