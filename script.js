const LINKS = {
  promoVideo: "https://youtu.be/3QHOD67hg80?si=r7dJp3Cn0_Y9RipA",
  homepage: "https://school.busanedu.net/daeyang-h/main.do",
  department: "https://school.busanedu.net/daeyang-h/cm/cntnts/cntntsView.do?mi=1046664&cntntsId=15554",
  instagram: "https://www.instagram.com/daeyang_hs/",
  youtubeChannel: "https://youtube.com/channel/UCbHzVW-liDPY7DdGY6rLi9w?si=nAysBTLRmhNkETtf"
};

const USER_MESSAGES = {
  student: "예비 대양고 학생님, 반갑습니다!",
  parent: "학부모님, 반갑습니다!",
  teacher: "중학교 선생님, 반갑습니다!"
};

const SEARCH_DATA = [
  {
    title: "학교 홍보영상",
    description: "대양고 홍보영상",
    keywords: ["홍보", "영상", "학교영상", "유튜브"],
    action: "video"
  },
  {
    title: "학교 홈페이지",
    description: "대양고 공식 홈페이지",
    keywords: ["홈페이지", "학교", "공식", "사이트"],
    action: "homepage"
  },
  {
    title: "학과 소개",
    description: "학과 및 전공 안내",
    keywords: ["학과", "전공", "e스포츠", "이스포츠", "게임", "AI", "소프트웨어", "전기", "전자", "통신"],
    action: "department"
  },
  {
    title: "학교소식",
    description: "공식 인스타그램 · 유튜브",
    keywords: ["소식", "인스타", "인스타그램", "유튜브", "SNS", "학교생활"],
    action: "news"
  },
  {
    title: "학사일정",
    description: "학교 주요 일정 확인",
    keywords: ["학사", "일정", "달력", "시험", "방학", "개학"],
    action: "schedule"
  },
  {
    title: "행사 안내",
    description: "현재 진행 중인 행사",
    keywords: ["행사", "체험", "입학설명회", "설명회", "신청", "오픈캠퍼스"],
    action: "events"
  },
  {
    title: "FAQ",
    description: "자주 묻는 질문",
    keywords: ["faq", "질문", "입학", "교복", "취업", "진학", "지원"],
    action: "faq"
  },
  {
    title: "문의",
    description: "학교 전화 · 홍보부 상담",
    keywords: ["문의", "전화", "상담", "연락처"],
    action: "contact"
  }
];

const userSelectScreen = document.getElementById("userSelectScreen");
const mainApp = document.getElementById("mainApp");
const welcomeMessage = document.getElementById("welcomeMessage");
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");
const socialModal = document.getElementById("socialModal");

/* 사용자 선택 */
function showMain(userType) {
  welcomeMessage.textContent = USER_MESSAGES[userType] || USER_MESSAGES.student;
  userSelectScreen.classList.add("is-hidden");
  mainApp.classList.remove("is-hidden");
}

function resetUser() {
  mainApp.classList.add("is-hidden");
  userSelectScreen.classList.remove("is-hidden");
}

document.querySelectorAll(".user-type-btn").forEach((button) => {
  button.addEventListener("click", () => showMain(button.dataset.user));
});

document.getElementById("changeUserBtn").addEventListener("click", resetUser);



/* 배너 슬라이드 */
const slides = [...document.querySelectorAll(".banner-slide")];
const dots = [...document.querySelectorAll(".dot")];
let currentSlide = 0;
let slideTimer;

function goToSlide(index) {
  currentSlide = index;
  slides.forEach((slide, i) => slide.classList.toggle("active", i === index));
  dots.forEach((dot, i) => dot.classList.toggle("active", i === index));
}

function startSlider() {
  clearInterval(slideTimer);
  slideTimer = setInterval(() => {
    goToSlide((currentSlide + 1) % slides.length);
  }, 3600);
}

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    goToSlide(Number(dot.dataset.slide));
    startSlider();
  });
});

startSlider();

/* 메뉴 이동 */
function openExternal(url) {
  window.open(url, "_blank", "noopener,noreferrer");
}

function goToPage(page) {
  window.location.href = page;
}

function runAction(action) {
  hideSearchResults();

  const actions = {
    video: () => openExternal(LINKS.promoVideo),
    homepage: () => openExternal(LINKS.homepage),
    department: () => openExternal(LINKS.department),
    news: () => socialModal.classList.remove("is-hidden"),
    schedule: () => goToPage("schedule.html"),
    events: () => goToPage("events.html"),
    faq: () => goToPage("faq.html"),
    contact: () => goToPage("contact.html")
  };

  actions[action]?.();
}

document.querySelectorAll(".menu-card").forEach((card) => {
  card.addEventListener("click", () => runAction(card.dataset.action));
});

/* 검색 */
function normalize(text) {
  return text.toLowerCase().replace(/\s+/g, "");
}

function hideSearchResults() {
  searchResults.classList.add("is-hidden");
}

function renderSearchResults(query) {
  const keyword = normalize(query);

  if (!keyword) {
    searchResults.innerHTML = "";
    hideSearchResults();
    return;
  }

  const results = SEARCH_DATA.filter((item) => {
    const searchableText = [item.title, item.description, ...item.keywords].join(" ");
    return normalize(searchableText).includes(keyword);
  });

  if (!results.length) {
    searchResults.innerHTML = '<div class="no-result">검색 결과가 없습니다.<br>FAQ 또는 문의 메뉴를 이용해주세요.</div>';
    searchResults.classList.remove("is-hidden");
    return;
  }

  searchResults.innerHTML = results.map((item) => `
    <button class="search-result-btn" data-result-action="${item.action}">
      <strong>${item.title}</strong>
      <small>${item.description}</small>
    </button>
  `).join("");

  searchResults.classList.remove("is-hidden");

  document.querySelectorAll("[data-result-action]").forEach((button) => {
    button.addEventListener("click", () => {
      runAction(button.dataset.resultAction);
      searchInput.value = "";
    });
  });
}

searchInput.addEventListener("input", (event) => {
  renderSearchResults(event.target.value);
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".search-wrap")) {
    hideSearchResults();
  }
});

/* 학교소식 모달 */
document.getElementById("closeSocialModal").addEventListener("click", () => {
  socialModal.classList.add("is-hidden");
});

socialModal.addEventListener("click", (event) => {
  if (event.target === socialModal) {
    socialModal.classList.add("is-hidden");
  }
});

document.getElementById("instagramBtn").addEventListener("click", () => {
  openExternal(LINKS.instagram);
});

document.getElementById("youtubeChannelBtn").addEventListener("click", () => {
  openExternal(LINKS.youtubeChannel);
});

/* 하단 메뉴 */
document.querySelector('[data-nav="home"]').addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.querySelector('[data-nav="faq"]').addEventListener("click", () => {
  goToPage("faq.html");
});

document.querySelector('[data-nav="contact"]').addEventListener("click", () => {
  goToPage("contact.html");
});

/* 일반 접속은 사용자 선택부터, 서브페이지의 홈 버튼은 메인으로 복귀 */
window.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const returnHome = params.get("home") === "1";

  if (returnHome) {
    userSelectScreen.classList.add("is-hidden");
    mainApp.classList.remove("is-hidden");
    history.replaceState(null, "", "index.html");
  } else {
    mainApp.classList.add("is-hidden");
    userSelectScreen.classList.remove("is-hidden");
  }

  window.scrollTo(0, 0);
});


/* 메인에서 서브페이지로 이동 후 뒤로가기 시 사용자 선택이 아닌 메인 유지 */
window.addEventListener("pageshow", () => {
  const params = new URLSearchParams(window.location.search);
  const returnHome = params.get("home") === "1";
  const hasSelectedUser = sessionStorage.getItem("daeyangUserSelected") === "1";

  if (returnHome || hasSelectedUser) {
    userSelectScreen.classList.add("is-hidden");
    mainApp.classList.remove("is-hidden");
    if (returnHome) history.replaceState({screen:"main"}, "", "index.html");
  }
});

/* 사용자 선택을 완료한 현재 탭에서는 메인 상태 기억 */
document.addEventListener("click", (e) => {
  const userButton = e.target.closest("[data-user]");
  if (userButton) {
    sessionStorage.setItem("daeyangUserSelected", "1");
    history.replaceState({screen:"main"}, "", "index.html");
  }
});
