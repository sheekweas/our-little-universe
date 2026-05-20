const returnDate = new Date(2026, 8, 12, 0, 0, 0);

const wishes = [
  {
    title: "Ты справишься",
    text: "Даже если день будет тяжёлым, помни: ты сильнее, чем кажется в усталые моменты. Я горжусь тобой каждый день."
  },
  {
    title: "Я рядом",
    text: "Между нами сейчас километры, но в моих мыслях ты очень близко. Пусть сегодня тебя обнимет всё хорошее."
  },
  {
    title: "Моя любимая",
    text: "Пусть Америка подарит тебе опыт, красивые воспоминания и уверенность. А я буду ждать тебя с самым тёплым сердцем."
  },
  {
    title: "Один день ближе",
    text: "Сегодня мы ещё на один день ближе к встрече. Я верю, что всё это расстояние потом станет нашей красивой историей."
  },
  {
    title: "Береги себя",
    text: "Не забывай кушать, отдыхать и улыбаться. Ты для меня очень важна, и я хочу, чтобы ты чувствовала себя любимой."
  },
  {
    title: "Ты моё солнце",
    text: "Даже когда у нас разные дни и разные часовые пояса, ты всё равно делаешь мой мир теплее."
  },
  {
    title: "Я жду тебя",
    text: "Когда ты вернёшься, я хочу обнять тебя так, чтобы все эти месяцы расстояния просто исчезли."
  },
  {
    title: "Доброе утро",
    text: "Надеюсь, сегодня у тебя будет хотя бы один момент, когда ты улыбнёшься и вспомнишь обо мне."
  },
  {
    title: "Ты невероятная",
    text: "Мне нравится в тебе всё: твой голос, смех, взгляд и даже то, как ты устаёшь после долгого дня."
  },
  {
    title: "Наша встреча",
    text: "Я уже представляю момент, когда снова увижу тебя в аэропорту и наконец смогу взять за руку."
  },
  {
    title: "Горжусь тобой",
    text: "Ты сейчас далеко, работаешь, стараешься и становишься сильнее. И я правда очень тобой горжусь."
  },
  {
    title: "Ты мой уют",
    text: "Даже просто переписка с тобой делает мой день спокойнее и теплее."
  },
  {
    title: "Маленькое напоминание",
    text: "Ты заслуживаешь любви, заботы, отдыха и счастья. Не забывай об этом."
  },
  {
    title: "Скоро",
    text: "Каждый новый день - это минус один день до того момента, когда мы снова будем рядом."
  },
  {
    title: "Спасибо тебе",
    text: "Спасибо, что появилась в моей жизни именно такой - настоящей, доброй и любимой."
  },
  {
    title: "Улыбнись",
    text: "Если вдруг день идёт не так - просто представь, как я сейчас пытаюсь тебя рассмешить."
  },
  {
    title: "Ты особенная",
    text: "Ты умеешь делать обычные моменты красивыми. Это редкий дар."
  },
  {
    title: "Для тебя",
    text: "Я бы очень хотел сейчас принести тебе кофе, укутать в плед и просто побыть рядом."
  },
  {
    title: "Не сдавайся",
    text: "Даже если иногда тяжело, помни: ты уже проходила через многое и справлялась."
  },
  {
    title: "Моё спокойствие",
    text: "Когда я думаю о тебе, внутри становится спокойнее."
  },
  {
    title: "Твои глаза",
    text: "Иногда я просто вспоминаю твой взгляд и понимаю, насколько сильно скучаю."
  },
  {
    title: "Самая красивая",
    text: "Ты красивая не только внешне. У тебя очень красивое сердце."
  },
  {
    title: "Наша история",
    text: "Мне нравится, что у нас есть своя история, свои песни и свои воспоминания."
  },
  {
    title: "Отдыхай",
    text: "Пожалуйста, не забывай отдыхать. Ты не обязана быть сильной каждую секунду."
  },
  {
    title: "Я верю в тебя",
    text: "У тебя всё получится. Даже больше, чем ты сама сейчас думаешь."
  },
  {
    title: "Ты дома для меня",
    text: "Не место делает дом домом. Для меня дом - это ты."
  },
  {
    title: "Тёплый вечер",
    text: "Надеюсь, сегодняшний вечер будет мягким, спокойным и уютным для тебя."
  },
  {
    title: "Я скучаю",
    text: "Иногда очень хочется просто молча сидеть рядом с тобой."
  },
  {
    title: "Твои мечты",
    text: "Я хочу, чтобы у тебя получилось всё, о чём ты мечтаешь."
  },
  {
    title: "Спасибо за тебя",
    text: "Мир стал лучше с того момента, как ты появилась в моей жизни."
  },
  {
    title: "Твоя улыбка",
    text: "Твоя улыбка - одна из моих самых любимых вещей в этом мире."
  },
  {
    title: "Маленькая просьба",
    text: "Сегодня обязательно поешь что-нибудь вкусное и порадуй себя."
  },
  {
    title: "Скучаю по голосу",
    text: "Мне иногда очень не хватает твоего голоса рядом."
  },
  {
    title: "Ты важна",
    text: "Ты правда очень важный человек для меня."
  },
  {
    title: "Дыши глубже",
    text: "Если вдруг тревожно - просто остановись на секунду и вспомни, что ты не одна."
  },
  {
    title: "Скоро обниму",
    text: "Я обязательно ещё долго не отпущу тебя, когда ты вернёшься."
  },
  {
    title: "Мой человек",
    text: "Среди миллиардов людей я очень рад, что встретил именно тебя."
  },
  {
    title: "Ты сильная",
    text: "Иногда ты не замечаешь, насколько много выдерживаешь."
  },
  {
    title: "Милый момент",
    text: "Представь, как мы гуляем вечером, держимся за руки и никуда не спешим."
  },
  {
    title: "Ты вдохновляешь",
    text: "С тобой хочется становиться лучше."
  },
  {
    title: "Спокойной ночи заранее",
    text: "Пусть сегодня тебе приснится что-нибудь очень хорошее."
  },
  {
    title: "Наше будущее",
    text: "Мне нравится думать о том, сколько всего нас ещё ждёт впереди."
  },
  {
    title: "Ты чудо",
    text: "Иногда мне кажется, что ты появилась в моей жизни слишком идеально."
  },
  {
    title: "Я думаю о тебе",
    text: "Даже в самые обычные моменты дня я вспоминаю тебя."
  },
  {
    title: "Нежность",
    text: "Хочется просто прижать тебя к себе и никуда не отпускать."
  },
  {
    title: "Ты заслуживаешь счастья",
    text: "И я надеюсь, что смогу делать тебя счастливой ещё очень долго."
  },
  {
    title: "Моя поддержка",
    text: "Если тебе тяжело - опирайся на меня, даже через расстояние."
  },
  {
    title: "Милый день",
    text: "Пусть сегодня у тебя случится хотя бы один очень тёплый момент."
  },
  {
    title: "Я рядом сердцем",
    text: "Даже на другом конце мира ты всё равно близко для меня."
  },
  {
    title: "С тобой спокойно",
    text: "Ты человек, рядом с которым я чувствую себя собой."
  },
  {
    title: "Не переживай",
    text: "Ты делаешь достаточно. Не требуй от себя невозможного."
  },
  {
    title: "Твои объятия",
    text: "Очень скучаю по твоим объятиям."
  },
  {
    title: "Любимая девочка",
    text: "Я надеюсь, ты сегодня улыбалась хотя бы немного."
  },
  {
    title: "Всё получится",
    text: "Даже если сейчас неидеально - всё постепенно станет лучше."
  },
  {
    title: "Ты красивая всегда",
    text: "Уставшая, сонная, без настроения - всё равно самая красивая."
  },
  {
    title: "Для души",
    text: "Надеюсь, сегодня ты найдёшь время для себя и своего спокойствия."
  },
  {
    title: "Наши песни",
    text: "Иногда включаю наши песни и сразу становится теплее."
  },
  {
    title: "Твоя доброта",
    text: "Мне очень нравится, какая ты добрая к людям."
  },
  {
    title: "Маленькое счастье",
    text: "Пусть сегодня тебя порадует что-нибудь совсем простое и милое."
  },
  {
    title: "Ты справляешься",
    text: "Даже если кажется, что нет - ты справляешься."
  },
  {
    title: "Твои мечты важны",
    text: "Не забывай мечтать и верить в себя."
  },
  {
    title: "Я всегда выберу тебя",
    text: "Снова и снова."
  },
  {
    title: "Ты не одна",
    text: "Даже в самые одинокие дни помни, что я думаю о тебе."
  },
  {
    title: "Тёплые мысли",
    text: "Надеюсь, сегодня тебе будет спокойно на душе."
  },
  {
    title: "Ты моя радость",
    text: "Ты делаешь мою жизнь светлее."
  },
  {
    title: "Береги сердце",
    text: "Не позволяй плохим дням убедить тебя, что ты недостаточно хороша."
  },
  {
    title: "Ты невероятно милая",
    text: "Особенно когда смеёшься."
  },
  {
    title: "Наши моменты",
    text: "Мне очень дороги даже самые маленькие воспоминания с тобой."
  },
  {
    title: "Моё счастье",
    text: "Ты - одна из лучших вещей, которые случались со мной."
  },
  {
    title: "Новая встреча",
    text: "Я уже думаю о том, куда мы пойдём вместе, когда ты вернёшься."
  },
  {
    title: "Светлый человек",
    text: "У тебя очень тёплая энергия."
  },
  {
    title: "Ты умничка",
    text: "Просто хотел напомнить тебе об этом."
  },
  {
    title: "Пусть всё получится",
    text: "Я очень хочу, чтобы у тебя всё было хорошо."
  },
  {
    title: "Скучаю по тебе",
    text: "Иногда особенно сильно."
  },
  {
    title: "Мягкий вечер",
    text: "Пусть сегодняшний вечер будет спокойным и уютным."
  },
  {
    title: "Ты достойна любви",
    text: "И очень большой."
  },
  {
    title: "Ты прекрасна",
    text: "Даже когда сама в это не веришь."
  },
  {
    title: "Ты вдохновляешь жить",
    text: "С тобой хочется строить планы и будущее."
  },
  {
    title: "Надеюсь, ты улыбаешься",
    text: "Хотя бы чуть-чуть прямо сейчас."
  },
  {
    title: "Я очень ценю тебя",
    text: "И всё, что между нами есть."
  },
  {
    title: "Ты стала частью меня",
    text: "И это очень красиво."
  },
  {
    title: "Люблю твой смех",
    text: "Он делает всё вокруг легче."
  },
  {
    title: "Один день меньше",
    text: "До нашей встречи осталось ещё меньше времени."
  },
  {
    title: "Будь к себе добрее",
    text: "Ты иногда слишком строга к себе."
  },
  {
    title: "Ты заслужила отдых",
    text: "Сегодня обязательно найди минутку выдохнуть."
  },
  {
    title: "Ты очень ценная",
    text: "И как человек, и как девушка."
  },
  {
    title: "С тобой тепло",
    text: "Даже через экран."
  },
  {
    title: "Ты чудесная",
    text: "И я надеюсь, что ты никогда не забудешь об этом."
  },
  {
    title: "Для тебя",
    text: "Я бы сейчас очень хотел просто держать тебя за руку."
  },
  {
    title: "Скоро домой",
    text: "И я встречу тебя с самой счастливой улыбкой."
  },
  {
    title: "Ты - мой комфорт",
    text: "Рядом с тобой всё кажется легче."
  },
  {
    title: "Надеюсь, ты выспалась",
    text: "А если нет - обязательно отдохни сегодня."
  },
  {
    title: "Ты заслуживаешь заботы",
    text: "И я хочу давать тебе её каждый день."
  },
  {
    title: "Люблю твой характер",
    text: "Даже твои вредности."
  },
  {
    title: "Смотри на небо",
    text: "Иногда мы смотрим на одни и те же облака, просто из разных стран."
  },
  {
    title: "Ты очень красивая",
    text: "И я никогда не устану тебе это повторять."
  },
  {
    title: "Я верю в нас",
    text: "И в то, что расстояние нас только укрепит."
  },
  {
    title: "Маленькая пауза",
    text: "Сделай глубокий вдох. Всё обязательно наладится."
  },
  {
    title: "Твои старания важны",
    text: "Ты делаешь очень много, и это видно."
  },
  {
    title: "Ты не обязана быть идеальной",
    text: "Ты уже замечательная."
  },
  {
    title: "Надеюсь, день был хорошим",
    text: "А если нет - завтра будет новый шанс."
  },
  {
    title: "Ты мой любимый человек",
    text: "И это не меняется ни из-за расстояния, ни из-за времени."
  },
  {
    title: "Спасибо за твое сердце",
    text: "Оно очень доброе."
  },
  {
    title: "Обнимаю мысленно",
    text: "Очень крепко."
  },
  {
    title: "Пусть тебе повезёт",
    text: "Сегодня и во всём, что ты делаешь."
  },
  {
    title: "Я скучаю по нашим прогулкам",
    text: "И очень хочу снова гулять рядом с тобой."
  },
  {
    title: "Ты делаешь меня счастливее",
    text: "Просто своим существованием."
  },
  {
    title: "Твоё присутствие важно",
    text: "Ты даже не представляешь насколько."
  },
  {
    title: "Я очень тебя ценю",
    text: "Каждый разговор, каждую эмоцию и каждую минуту вместе."
  },
  {
    title: "Ты прекрасный человек",
    text: "И я рад, что могу любить тебя."
  },
  {
    title: "Держись",
    text: "Ты уже так далеко дошла. Не останавливайся."
  },
  {
    title: "Надеюсь, ты счастлива",
    text: "Хотя бы в маленьких моментах сегодняшнего дня."
  },
  {
    title: "Ты важнее, чем работа",
    text: "Не забывай заботиться о себе."
  },
  {
    title: "Очень жду встречи",
    text: "Наверное, сильнее, чем ты думаешь."
  },
  {
    title: "Ты - моя нежность",
    text: "И моё спокойствие."
  },
  {
    title: "Хорошего дня",
    text: "Пусть сегодня всё будет немного легче и добрее к тебе."
  },
  {
    title: "Моя любимая девочка",
    text: "Спасибо, что ты есть."
  },
  {
    title: "Последнее на сегодня",
    text: "Я люблю тебя. Очень."
  }
];

const playlist = [
  { title: "From The Start", artist: "Laufey", file: "https://fine.sunproxy.net/file/NE9wa0RHanpad1pUT01jZlhBSTRhVTBVbks1L25lSStXeVVFYzFueURXOEtqK0NZT1RjYkdjbmExYWM0Rm15NzZoNEJuRXZ2L1RERjNjZTRZMkxWbEZ1NTk3aU4vdUJwUlN4UzM0RzlOc3c9/Laufey_-_From_The_Start_(SkySound.cc).mp3" },
  { title: "Die With A Smile", artist: "Bruno Mars & Lady Gaga", file: "music/Die With A Smile.mp3" },
  { title: "Understand", artist: "Keshi", file: "music/Understand.mp3" },
  { title: "Love", artist: "Wave to Earth", file: "music/Love.mp3" },
  { title: "Seasons", artist: "Wave to Earth", file: "music/Seasons.mp3" },
  { title: "Seni Oilai", artist: "Sadraddin", file: "music/Seni Oilai.mp3" },
  { title: "Zharygym", artist: "Sadraddin", file: "music/Zharygym.mp3" },
  { title: "Zhalgyz Zhuldyz", artist: "Zhasulan Kopbergen", file: "music/Zhalgyz Zhuldyz.mp3" }
];

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

function updateCountdown() {
  const now = new Date();
  const diff = returnDate - now;

  if (diff <= 0) {
    daysEl.textContent = "0";
    hoursEl.textContent = "0";
    minutesEl.textContent = "0";
    secondsEl.textContent = "0";
    return;
  }

  const seconds = Math.floor(diff / 1000);
  const days = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  daysEl.textContent = days;
  hoursEl.textContent = hours;
  minutesEl.textContent = minutes;
  secondsEl.textContent = secs;
}

setInterval(updateCountdown, 1000);
updateCountdown();

function setDailyWish() {
  const start = new Date(2026, 0, 1);
  const today = new Date();
  const dayNumber = Math.floor((today - start) / 86400000);
  const wish = wishes[Math.abs(dayNumber) % wishes.length];

  document.getElementById("wishTitle").textContent = wish.title;
  document.getElementById("wishText").textContent = wish.text;
  // document.getElementById("wishImage").src = wish.image;
}

setDailyWish();

const audio = document.getElementById("audio");
const playBtn = document.getElementById("playBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const trackTitle = document.getElementById("trackTitle");
const playlistEl = document.getElementById("playlist");
const progress = document.getElementById("progress");
const currentTimeEl = document.getElementById("currentTime");
const durationEl = document.getElementById("duration");

let currentTrack = 0;
let isPlaying = false;

function formatTime(time) {
  if (Number.isNaN(time)) return "0:00";
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function renderPlaylist() {
  playlistEl.innerHTML = "";
  playlist.forEach((track, index) => {
    const item = document.createElement("div");
    item.className = "track" + (index === currentTrack ? " active" : "");
    item.innerHTML = `<span>${track.title}</span><small>${track.artist}</small>`;
    item.addEventListener("click", () => {
      loadTrack(index);
      playTrack();
    });
    playlistEl.appendChild(item);
  });
}

function loadTrack(index) {
  currentTrack = index;
  const track = playlist[currentTrack];
  audio.src = track.file;
  trackTitle.textContent = track.title;
  renderPlaylist();
}

function playTrack() {
  audio.play().then(() => {
    isPlaying = true;
    playBtn.textContent = "❚❚";
    document.body.classList.add("playing");
  }).catch(() => {
    alert("Файл песни не найден. Добавь mp3 в папку music и проверь название в script.js");
  });
}

function pauseTrack() {
  audio.pause();
  isPlaying = false;
  playBtn.textContent = "▶";
  document.body.classList.remove("playing");
}

playBtn.addEventListener("click", () => {
  if (isPlaying) pauseTrack();
  else playTrack();
});

prevBtn.addEventListener("click", () => {
  const nextIndex = (currentTrack - 1 + playlist.length) % playlist.length;
  loadTrack(nextIndex);
  playTrack();
});

nextBtn.addEventListener("click", () => {
  const nextIndex = (currentTrack + 1) % playlist.length;
  loadTrack(nextIndex);
  playTrack();
});

audio.addEventListener("timeupdate", () => {
  if (!audio.duration) return;
  progress.value = (audio.currentTime / audio.duration) * 100;
  currentTimeEl.textContent = formatTime(audio.currentTime);
  durationEl.textContent = formatTime(audio.duration);
});

progress.addEventListener("input", () => {
  if (!audio.duration) return;
  audio.currentTime = (progress.value / 100) * audio.duration;
});

audio.addEventListener("ended", () => {
  const nextIndex = (currentTrack + 1) % playlist.length;
  loadTrack(nextIndex);
  playTrack();
});

loadTrack(0);
renderPlaylist();
