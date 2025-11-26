// FROM CHATGPT:
const reels = [
  {
    isMuted: true,
    username: "stylewithnida",
    likeCount: 15200,
    isLiked: true,
    commentCount: 340,
    caption: "Color grading hits different in natural light.",
    userProfile: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    shareCount: 120,
    isFollowed: false,
    video: "./reels/video1.mp4",
  },
  {
    isMuted: true,
    username: "dailywitharsh",
    likeCount: 8790,
    isLiked: false,
    commentCount: 210,
    caption: "Small steps every day.",
    userProfile: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    shareCount: 90,
    isFollowed: true,
    video: "./reels/video2.mp4",
  },
  {
    isMuted: true,
    username: "anokyai.fan",
    likeCount: 54200,
    isLiked: false,
    commentCount: 780,
    caption: "Anok Yai walking like art.",
    userProfile: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    shareCount: 350,
    isFollowed: true,
    video: "./reels/video3.mp4",
  },
  {
    isMuted: true,
    username: "codebyhassan",
    likeCount: 3200,
    isLiked: false,
    commentCount: 65,
    caption: "This JS tip will save your time.",
    userProfile: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    shareCount: 30,
    isFollowed: true,
    video: "./reels/video4.mp4",
  },
  {
    isMuted: true,
    username: "travelwithmina",
    likeCount: 22400,
    isLiked: true,
    commentCount: 530,
    caption: "Sunrise in Bali is unreal.",
    userProfile: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    shareCount: 180,
    isFollowed: true,
    video: "./reels/video5.mp4",
  },
  {
    isMuted: true,
    username: "editorial.zone",
    likeCount: 9100,
    isLiked: false,
    commentCount: 145,
    caption: "Aesthetic transitions for your reels.",
    userProfile: "https://images.unsplash.com/photo-1548142813-c348350df52b",
    shareCount: 60,
    isFollowed: false,
    video: "./reels/video2.mp4",
  },
  {
    isMuted: true,
    username: "fitnessbymahnoor",
    likeCount: 13300,
    isLiked: false,
    commentCount: 270,
    caption: "New week, new grind.",
    userProfile: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7",
    shareCount: 110,
    isFollowed: false,
    video: "./reels/video1.mp4",
  },
  {
    isMuted: true,
    username: "foodie_shaiz",
    likeCount: 17800,
    isLiked: true,
    commentCount: 390,
    caption: "This spicy ramen is crazy good.",
    userProfile: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
    shareCount: 95,
    isFollowed: true,
    video: "./reels/video4.mp4",
  },
  {
    isMuted: true,
    username: "minimalvibes",
    likeCount: 7600,
    isLiked: true,
    commentCount: 130,
    caption: "Clean spaces, clear mind.",
    userProfile: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    shareCount: 40,
    isFollowed: false,
    video: "./reels/video3.mp4",
  },
  {
    isMuted: true,
    username: "shutterstories",
    likeCount: 28400,
    isLiked: true,
    commentCount: 610,
    caption: "Portrait photography magic.",
    userProfile: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    shareCount: 200,
    isFollowed: true,
    video: "./reels/video5.mp4",
  },
];

let allReels = document.querySelector(".all-reels");
let observer = null; // single observer instance we reuse


// function addData() {
//   let sum = "";
//   reels.forEach(function (elem, idx) {
//     sum += `<div class="reel">
//                 <video src="${elem.video}" autoplay ${
//       elem.isMuted ? "muted" : ""
//     } loop playsinline ></video>
//                 <div id=${idx} class="mute">
//                   ${elem.isMuted ? '<i class="ri-volume-mute-fill"></i>' : '<i class="ri-volume-up-line"></i>'}
//                 </div>
//                 <div class="bottom">
//                     <div class="user">
//                         <img src="${elem.userProfile}" alt="Profile pic">
//                         <h4>${elem.username}</h4>
//                         <button id=${idx} class='follow'>${
//       elem.isFollowed ? "Following" : "Follow"
//     }</button>

//                     </div>
//                     <h3>${elem.caption}</h3>
//                 </div>

//                 <div class="right">
//                     <div id=${idx} class="like">
//                         <h4 class="like-icon">${
//                           elem.isLiked
//                             ? '<i class="love ri-heart-fill"></i>'
//                             : '<i class="ri-heart-line"></i>'
//                         }</h4>
//                         <h6>${elem.likeCount}</h6>
//                     </div>

//                      <div class="comment">
//                         <h4 class="comment-icon"><i class="ri-chat-3-line"></i></h4>
//                         <h6>${elem.commentCount}</h6>
//                     </div>

//                      <div class="share">
//                         <h4 class="share-icon"><i class="ri-share-forward-line"></i></h4>
//                         <h6>${elem.shareCount}</h6>
//                     </div>
                    
//                     <!-- menu -->
//                     <div class="menu">
//                         <h4 class="menu-icon"><i class="ri-more-2-fill"></i></h4>
                        
//                     </div>
//                 </div>
//             </div>`;
//   });

//   allReels.innerHTML = sum;
// }
// addData(); //function call

// // ON CLICK WE WILL DO CHANGE LIKE, FOLLOW:
// allReels.addEventListener("click", function (dets) {
//   let idx = dets.target.id;

//   // like toggle
//   if (dets.target.className == "like") {
//     if (!reels[idx].isLiked) {
//       reels[idx].isLiked = true;
//       reels[idx].likeCount++;
//     } else {
//       reels[idx].isLiked = false;
//       reels[idx].likeCount--;
//     }
//     addData();
//   }

//   // follow toggle
//   if (dets.target.className == "follow") {
//     reels[idx].isFollowed = !reels[idx].isFollowed;
//     addData();
//   }

//   //mute toggle
//   if (dets.target.className == "mute") {
//     reels[idx].isMuted = !reels[idx].isMuted;
//     addData();
//   }

  
// });
function addData() {
  let sum = "";
  reels.forEach((elem, idx) => {
    sum += `<div class="reel" data-idx="${idx}">
                <video src="${elem.video}" autoplay ${elem.isMuted ? "muted" : ""} loop playsinline></video>

                <div id="${idx}" class="mute">
                  ${elem.isMuted ? '<i class="ri-volume-mute-fill"></i>' : '<i class="ri-volume-up-line"></i>'}
                </div>

                <div class="bottom">
                  <div class="user">
                    <img src="${elem.userProfile}" alt="Profile pic">
                    <h4>${elem.username}</h4>
                    <button id="${idx}" class="follow">${elem.isFollowed ? "Following" : "Follow"}</button>
                  </div>
                  <h3>${elem.caption}</h3>
                </div>

                <div class="right">
                  <div id="${idx}" class="like">
                    <h4 class="like-icon">${elem.isLiked ? '<i class="love ri-heart-fill"></i>' : '<i class="ri-heart-line"></i>'}</h4>
                    <h6>${elem.likeCount}</h6>
                  </div>

                  <div class="comment">
                    <h4 class="comment-icon"><i class="ri-chat-3-line"></i></h4>
                    <h6>${elem.commentCount}</h6>
                  </div>

                  <div class="share">
                    <h4 class="share-icon"><i class="ri-share-forward-line"></i></h4>
                    <h6>${elem.shareCount}</h6>
                  </div>

                  <div class="menu">
                    <h4 class="menu-icon"><i class="ri-more-2-fill"></i></h4>
                  </div>
                </div>
            </div>`;
  });

  allReels.innerHTML = sum;
  // after DOM updated, (re)start the observer
  setupObservers();
}

// make sure we only have one observer at a time
function setupObservers() {
  // disconnect old observer if exists
  if (observer) {
    observer.disconnect();
    observer = null;
  }

  const videos = document.querySelectorAll(".reel video");

  // guard: if no videos, nothing to observe
  if (!videos.length) return;

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const video = entry.target;
        const reelEl = video.closest(".reel");
        const idx = Number(reelEl?.dataset?.idx);

        // guard against invalid index
        if (isNaN(idx)) return;

        if (entry.isIntersecting) {
          // visible reel: play and apply its mute state from JSON
          // pause other videos first (optional but safe)
          document.querySelectorAll(".reel video").forEach((v) => {
            if (v !== video) {
              v.pause();
              v.muted = true; // ensure others are muted
            }
          });

          // ensure correct mute state and play
          video.muted = !!reels[idx].isMuted;
          video.play().catch(() => {
            // ignore play promise rejection
          });
        } else {
          // not visible: pause and mute
          video.pause();
          video.muted = true;
        }
      });
    },
    { threshold: 0.7 } // 70% visible to count as active
  );

  // attach dataset index and observe
  videos.forEach((v, i) => {
    const parent = v.closest(".reel");
    if (parent) parent.dataset.idx = i;
    observer.observe(v);
  });
}

// Delegated click handling (robust: works if icon or text is clicked)
allReels.addEventListener("click", function (e) {
  // LIKE
  const likeBtn = e.target.closest(".like");
  if (likeBtn) {
    const idx = Number(likeBtn.id);
    if (!isNaN(idx)) {
      reels[idx].isLiked = !reels[idx].isLiked;
      reels[idx].isLiked ? reels[idx].likeCount++ : reels[idx].likeCount--;
      addData();
    }
    return;
  }

  // FOLLOW
  const followBtn = e.target.closest(".follow");
  if (followBtn) {
    const idx = Number(followBtn.id);
    if (!isNaN(idx)) {
      reels[idx].isFollowed = !reels[idx].isFollowed;
      addData();
    }
    return;
  }

  // MUTE (toggle and make sure only this one can be unmuted)
  const muteBtn = e.target.closest(".mute");
  if (muteBtn) {
    const idx = Number(muteBtn.id);
    if (!isNaN(idx)) {
      // flip JSON state
      reels[idx].isMuted = !reels[idx].isMuted;

      // apply to DOM video nodes now (without waiting for addData)
      const reelEl = muteBtn.closest(".reel");
      const video = reelEl.querySelector("video");

      if (video) {
        // If unmuting this one, mute all others first
        if (!reels[idx].isMuted) {
          document.querySelectorAll(".reel video").forEach((v, i) => {
            if (v !== video) {
              v.muted = true;
              reels[i].isMuted = true; // keep JSON consistent
            }
          });
        }

        video.muted = !!reels[idx].isMuted;
      }

      // re-render to update icons and reattach observers
      addData();
    }
    return;
  }
});

// initial render + observer start
addData();
// har like wale div ko id dedi by giving idx.
// let sum ='', reels ka data sum m dalo or append krao all-reels m. Is sb ko copy kr k 1 function banao addData or us m daldo.
// qk pore process ko store krna tha kahin.
// all-reels pe hi addEventListener lagado click ka
// dets.target -> isse hame wo dikhega jispe hamne click kia hua target ki wajah se.
// dets.target.id -> isse id mil jaegi targetted element ki.
// id q nikalni ha?
// yeh id array k index jesi ha. so if we do: reels[dets.target.id] -> to yeh reels array m jaa k us object ko nikale ga jispe click hua ha.
//  reels[dets.target.id] -> THIS IS A GOLDEN NUMBER
// reels[dets.target.id].likeCount++  -> isse like plus 1 ho k show honge but hame screen pe show krana ha to uske lie again sum m reel bane gi or usme updadted data jaega which is already done in the functionso we will just call the function. Isko event listener ma call krdo.

//
