// FROM CHATGPT: 
const reels = [
  {
    username: "stylewithnida",
    likeCount: 15200,
    isLiked: true,
    commentCount: 340,
    caption: "Color grading hits different in natural light.",
    userProfile: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    shareCount: 120,
    isFollowed: false,
    video: "./reels/video1.mp4"
  },
  {
    username: "dailywitharsh",
    likeCount: 8790,
    isLiked: false,
    commentCount: 210,
    caption: "Small steps every day.",
    userProfile: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    shareCount: 90,
    isFollowed: true,
    video: "./reels/video2.mp4"
  },
  {
    username: "anokyai.fan",
    likeCount: 54200,
    isLiked: false,
    commentCount: 780,
    caption: "Anok Yai walking like art.",
    userProfile: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    shareCount: 350,
    isFollowed: true,
    video: "./reels/video3.mp4"
  },
  {
    username: "codebyhassan",
    likeCount: 3200,
    isLiked: false,
    commentCount: 65,
    caption: "This JS tip will save your time.",
    userProfile: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    shareCount: 30,
    isFollowed: true,
    video: "./reels/video4.mp4"
  },
  {
    username: "travelwithmina",
    likeCount: 22400,
    isLiked: true,
    commentCount: 530,
    caption: "Sunrise in Bali is unreal.",
    userProfile: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
,
    shareCount: 180,
    isFollowed: true,
    video: "./reels/video5.mp4"
  },
  {
    username: "editorial.zone",
    likeCount: 9100,
    isLiked: false,
    commentCount: 145,
    caption: "Aesthetic transitions for your reels.",
    userProfile: "https://images.unsplash.com/photo-1548142813-c348350df52b",
    shareCount: 60,
    isFollowed: false,
    video: "./reels/video2.mp4"
  },
  {
    username: "fitnessbymahnoor",
    likeCount: 13300,
    isLiked: false,
    commentCount: 270,
    caption: "New week, new grind.",
    userProfile: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7",
    shareCount: 110,
    isFollowed: false,
    video: "./reels/video1.mp4"
  },
  {
    username: "foodie_shaiz",
    likeCount: 17800,
    isLiked: true,
    commentCount: 390,
    caption: "This spicy ramen is crazy good.",
    userProfile: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
    shareCount: 95,
    isFollowed: true,
    video: "./reels/video4.mp4"
  },
  {
    username: "minimalvibes",
    likeCount: 7600,
    isLiked: true,
    commentCount: 130,
    caption: "Clean spaces, clear mind.",
    userProfile: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    shareCount: 40,
    isFollowed: false,
    video: "./reels/video3.mp4"
  },
  {
    username: "shutterstories",
    likeCount: 28400,
    isLiked: true,
    commentCount: 610,
    caption: "Portrait photography magic.",
    userProfile: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    shareCount: 200,
    isFollowed: true,
    video: "./reels/video5.mp4"
  }
];


let allReels = document.querySelector('.all-reels');

let sum = ''
reels.forEach(function(elem){
    sum+= `<div class="reel">
                <video src="${elem.video}" autoplay muted loop playsinline ></video>
                <div class="bottom">
                    <div class="user">
                        <img src="${elem.userProfile}" alt="Profile pic">
                        <h4>${elem.username}</h4>
                        <button>${elem.isFollowed?"Following" : "Follow"}</button>

                    </div>
                    <h3>${elem.caption}</h3>
                </div>

                <div class="right">
                    <div class="like">
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
                    
                    <!-- menu -->
                    <div class="menu">
                        <h4 class="menu-icon"><i class="ri-more-2-fill"></i></h4>
                        
                    </div>
                </div>
            </div>`
})


allReels.innerHTML = sum;


