const customCursor = document.querySelector('.custom-cursor');

if (customCursor) {
    document.addEventListener('mousemove', (event) => {
        customCursor.style.display = 'block';
        customCursor.style.left = `${event.clientX}px`;
        customCursor.style.top = `${event.clientY}px`;
    });

    document.addEventListener('mouseleave', () => {
        customCursor.style.display = 'none';
    });

    document.addEventListener('mouseenter', () => {
        customCursor.style.display = 'block';
    });
}

const cardTemplate = document.getElementById("card-template");
const container = document.querySelector('.container');

const popupEdit = document.getElementById('popup__edit');
const popupAdd = document.getElementById('popup__add-card');

const popupCardViewer = document.getElementById('popup__card-viewer');
const popupCardClose = document.getElementById('popup__card-close');
const popupCardPrev = document.getElementById('popup__card-prev');
const popupCardNext = document.getElementById('popup__card-next');
const popupCardImage = document.getElementById('popup__card-image');
const popupCardTitle = document.getElementById('popup__card-title');
const popupCardDescription = document.getElementById('popup__card-description');
const popupCardCounter = document.getElementById('popup__card-counter');

const userInfoEdit = document.getElementById('user-info__edit');
const userInfoAddCard = document.getElementById('user-info__add-card');

const popupCloseEdit = document.getElementById('popup__close-edit');
const popupCloseAddCard = document.getElementById('popup__close-add-card');

const formUsername = document.getElementById('form__username');
const formUserDescription = document.getElementById('form__userDescription');

const topUserName = document.getElementById('top__user-name');
const topUserDescription = document.getElementById('top__user-description');

const formEdit = document.getElementById('form__edit');
const formAddCard = document.getElementById('form__add-card');

const formMemberInput = document.querySelectorAll('#form__add-card .form__input');

const data = [
    {
        link: "./images/HeeJin1.jpg",
        title: "official_artms",
        description: "ARTMS <Hyper-Ego> Concept Photo (Aura Ver.1) HeeJin 2026.08.07 1PM KST #ARTMS #아르테미스 #HeeJin #희진 #Hyper_Ego"  
    },
    {
        link: "./images/Ego1.jpg",
        title: "official_artms",
        description: "ARTMS <Hyper-Ego> 2026.08.07 1PM KST #ARTMS #아르테미스 #OURII #Hyper_Ego"
    },
    {
        link: "./images/KimLip1.jpg",
        title: "official_artms",
        description: "ARTMS <Hyper-Ego> Concept Photo (Aura Ver.1) Kim Lip 2026.08.07 1PM KST #ARTMS #아르테미스 #KimLip #김립 #Hyper_Ego"
    },
    {
        link: "./images/Jinsoul1.jpg",
        title: "official_artms",
        description: "ARTMS <Hyper-Ego> Concept Photo (Aura Ver.1) JinSoul 2026.08.07 1PM KST #ARTMS #아르테미스 #JinSoul #진솔 #Hyper_Ego"
    },
    {
        link: "./images/Hyper1.jpg",
        title: "official_artms",
        description: "ARTMS <Hyper-Ego> 2026.08.07 1PM KST #ARTMS #아르테미스 #OURI #Hyper_Ego"
    },
    {
        link: "./images/Choerry1.jpg",
        title: "official_artms",
        description: "ARTMS <Hyper-Ego> Concept Photo (Aura Ver.1) Choerry 2026.08.07 1PM KST #ARTMS #아르테미스 #OURII #Choerry #최리 #Hyper_Ego"
    },
    {
        link: "./images/Aura1.jpg",
        title: "official_artms",
        description: "ARTMS <Hyper-Ego> Concept Photo (Aura Ver.1) - Group 2026.08.07 1PM KST #ARTMS #아르테미스 #OURI #Hyper_Ego"
    },
    {
        link: "./images/Aura2.jpg",
        title: "official_artms",
        description: "ARTMS <Hyper-Ego> Concept Photo (Aura Ver.1) - Group 2026.08.07 1PM KST #ARTMS #아르테미스 #OURI #Hyper_Ego"
    },
    {
        link: "./images/Aura3.jpg",
        title: "official_artms",
        description: "ARTMS <Hyper-Ego> Concept Photo (Aura Ver.1) - Group 2026.08.07 1PM KST #ARTMS #아르테미스 #OURI #Hyper_Ego"
    },
    {
        link: "./images/Aura4.jpg",
        title: "official_artms",
        description: "ARTMS <Hyper-Ego> Concept Photo (Aura Ver.1) - Group 2026.08.07 1PM KST #ARTMS #아르테미스 #OURI #Hyper_Ego"
    },
    {
        link: "./images/Aura5.jpg",
        title: "official_artms",
        description: "ARTMS <Hyper-Ego> Concept Photo (Aura Ver.1) - Group 2026.08.07 1PM KST #ARTMS #아르테미스 #OURI #Hyper_Ego"
    },
    {
        link: "./images/Aura6.jpg",
        title: "official_artms",
        description: "ARTMS <Hyper-Ego> Concept Photo (Aura Ver.1) - Group 2026.08.07 1PM KST #ARTMS #아르테미스 #OURI #Hyper_Ego"
    },
    {
        link: "./images/HeeJin2.jpg",
        title: "official_artms",
        description: "ARTMS <Hyper-Ego> Concept Photo (Trauma Ver.1) HeeJin 2026.08.07 1PM KST #ARTMS #아르테미스 #HeeJin #희진 #Hyper_Ego"
    },
    {
        link: "./images/Ego2.jpg",
        title: "official_artms",
        description: "ARTMS <Hyper-Ego> 2026.08.07 1PM KST #ARTMS #아르테미스 #OURII #Ego #에고 #Hyper_Ego"
    },
    {
        link: "./images/KimLip2.jpg",
        title: "official_artms",
        description: "ARTMS <Hyper-Ego> Concept Photo (Trauma Ver.1) Kim Lip 2026.08.07 1PM KST #ARTMS #아르테미스 #OURII #Kim_Lip #김립 #Hyper_Ego"
    },
    {
        link: "./images/Jinsoul2.jpg",
        title: "official_artms",
        description: "ARTMS <Hyper-Ego> Concept Photo (Trauma Ver.1) Jinsoul 2026.08.07 1PM KST #ARTMS #아르테미스 #OURII #Jinsoul #진솔 #Hyper_Ego"
    },
    {
        link: "./images/Hyper2.jpg",
        title: "official_artms",
        description: "ARTMS <Hyper-Ego> 2026.08.07 1PM KST #ARTMS #아르테미스 #OURII #Hyper_Ego #하이퍼 에고"
    },
    {
        link: "./images/Choerry2.jpg",
        title: "official_artms",
        description: "ARTMS <Hyper-Ego> Concept Photo (Trauma Ver.1) Choerry 2026.08.07 1PM KST #ARTMS #아르테미스 #OURII #Choerry #최리 #Hyper_Ego"
    },
    {
        link: "./images/Trauma1.jpg",
        title: "official_artms",
        description: "ARTMS <Hyper-Ego> Concept Photo (Trauma Ver.1) - Group 2026.08.07 1PM KST #ARTMS #아르테미스 #OURI #Hyper_Ego"
    },
    {
        link: "./images/Trauma2.jpg",
        title: "official_artms",
        description: "ARTMS <Hyper-Ego> Concept Photo (Trauma Ver.1) - Group 2026.08.07 1PM KST #ARTMS #아르테미스 #OURI #Hyper_Ego"
    },
    {
        link: "./images/Trauma3.jpg",
        title: "official_artms",
        description: "ARTMS <Hyper-Ego> Concept Photo (Trauma Ver.1) - Group 2026.08.07 1PM KST #ARTMS #아르테미스 #OURI #Hyper_Ego"
    },
    {
        link: "./images/Trauma4.jpg",
        title: "official_artms",
        description: "ARTMS <Hyper-Ego> Concept Photo (Trauma Ver.1) - Group 2026.08.07 1PM KST #ARTMS #아르테미스 #OURI #Hyper_Ego"
    },
    {
        link: "./images/Trauma5.jpg",
        title: "official_artms",
        description: "ARTMS <Hyper-Ego> Concept Photo (Trauma Ver.1) - Group 2026.08.07 1PM KST #ARTMS #아르테미스 #OURI #Hyper_Ego"
    },
    {
        link: "./images/Trauma6.jpg",
        title: "official_artms",
        description: "ARTMS <Hyper-Ego> Concept Photo (Trauma Ver.1) - Group 2026.08.07 1PM KST #ARTMS #아르테미스 #OURI #Hyper_Ego"
    }
]

let currentCardIndex = 0;

const getImageSource = (member) => member.link || member.image || '';

const renderCardPopup = () => {
    if (!data.length) return;

    const member = data[currentCardIndex];
    const imageSource = getImageSource(member);

    popupCardImage.src = imageSource;
    popupCardImage.alt = member.title || 'Imagen del post';
    popupCardTitle.textContent = member.title || '';
    popupCardDescription.textContent = member.description || '';
    popupCardCounter.textContent = `${currentCardIndex + 1} / ${data.length}`;

    popupCardPrev.disabled = data.length <= 1;
    popupCardNext.disabled = data.length <= 1;
};

const openCardPopup = (index) => {
    if (!data.length) return;

    currentCardIndex = (index + data.length) % data.length;
    renderCardPopup();
    popupCardViewer.classList.add('popup__open');
    popupCardViewer.setAttribute('aria-hidden', 'false');
    document.body.classList.add('popup__body-lock');
};

const closeCardPopup = () => {
    popupCardViewer.classList.remove('popup__open');
    popupCardViewer.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('popup__body-lock');
};

const showPreviousCard = () => {
    if (!data.length) return;
    currentCardIndex = (currentCardIndex - 1 + data.length) % data.length;
    renderCardPopup();
};

const showNextCard = () => {
    if (!data.length) return;
    currentCardIndex = (currentCardIndex + 1) % data.length;
    renderCardPopup();
};

const createCard = (member, dataIndex) => {
    const card = cardTemplate.content.cloneNode(true);

    const cardElement = card.querySelector('.card');
    const cardTitle = card.querySelector('.card__title');
    const cardImage = card.querySelector('.card__image');
    const cardDescription = card.querySelector('.card__description');
    const cardButton = card.querySelector('.card__like');
    const cardDeleteButton = card.querySelector('.card__delete');
    
    cardDeleteButton.addEventListener('click', (event) => {
    event.stopPropagation();

    const confirmed = confirm('¿Quieres eliminar esta publicación?');

    if (!confirmed) return;

    const cardElement = event.currentTarget.closest('.card');

    const dataIndex = Array.from(
        container.querySelectorAll('.card')
    ).indexOf(cardElement);

    if (dataIndex !== -1) {
        data.splice(dataIndex, 1);
    }

    cardElement.remove();
});

    const imageSource = getImageSource(member);

    console.log(`Creating card ${dataIndex + 1}:`, member);

    cardTitle.textContent = member.title || '';
    cardImage.src = imageSource;
    cardImage.alt = member.title || 'Imagen del post';
    cardDescription.textContent = member.description || '';

    cardButton.addEventListener('click', (event) => {
        event.stopPropagation();
        cardButton.classList.toggle('liked');
        cardButton.setAttribute(
            'aria-label',
            cardButton.classList.contains('liked') ? 'Quitar me gusta' : 'Me gusta'
        );

        console.log(`Card ${dataIndex + 1} liked status: ${cardButton.classList.contains('liked')}`);
    });

    cardElement.addEventListener('click', () => {
        openCardPopup(dataIndex);
    });

    container.prepend(card);
};

data.forEach((member, index) => {
    createCard(member, index);
});

userInfoEdit.addEventListener("click", () => {
    popupEdit.classList.add("popup__open");
});

formEdit.addEventListener("submit", (e) => {
    e.preventDefault();

    topUserName.textContent = formUsername.value;
    topUserDescription.textContent = formUserDescription.value;

    popupEdit.classList.remove("popup__open");
});

userInfoAddCard.addEventListener("click", () => {
    popupAdd.classList.add("popup__open");
});

popupCloseEdit.addEventListener("click", () => {
    popupEdit.classList.remove("popup__open");
});

popupCloseAddCard.addEventListener("click", () => {
    popupAdd.classList.remove("popup__open");
});


popupCardClose.addEventListener('click', closeCardPopup);
popupCardPrev.addEventListener('click', showPreviousCard);
popupCardNext.addEventListener('click', showNextCard);

popupCardViewer.addEventListener('click', (event) => {
    if (event.target === popupCardViewer) {
        closeCardPopup();
    }
});

document.addEventListener('keydown', (event) => {
    if (!popupCardViewer.classList.contains('popup__open')) return;

    if (event.key === 'Escape') closeCardPopup();
    if (event.key === 'ArrowLeft') showPreviousCard();
    if (event.key === 'ArrowRight') showNextCard();
});

formAddCard.addEventListener("submit", (e) => {
    e.preventDefault();

    const card = {}

    formMemberInput.forEach((input) => {
        card[input.name] = input.value;
    });

    data.push(card);
    createCard(card, data.length - 1);
    
    popupAdd.classList.remove("popup__open");

    console.log(data);
    console.log(card);
});

/* =========================================
   STORIES
========================================= */
const storyButton = document.getElementById("storyButton");
const storyModal = document.getElementById("storyModal");

const storyVideo = document.getElementById("storyVideo");
const storyVolume = document.getElementById("storyVolume");

let storyMuted = true;

const storyClose = document.getElementById("storyClose");

const storyPrev = document.getElementById("storyPrev");
const storyNext = document.getElementById("storyNext");

const storyLike = document.getElementById("storyLike");
const likeIcon = document.getElementById("likeIcon");

const progressContainer =
    document.getElementById("storyProgressContainer");

const stories = [
    {
        video: "images/Teaser.mp4",
        liked: false
    },
    {
        video: "images/OutNow.mp4",
        liked: false
    },
    {
        video: "images/Okok.mp4",
        liked: false
    },
    {
        video: "images/Stunner.mp4",
        liked: false
    }
];
let currentStory = 0;

function createProgressBars() {

    progressContainer.innerHTML = "";
    stories.forEach(() => {
        const progress = document.createElement("div");
        progress.classList.add("story-progress");
        const fill = document.createElement("div");
        fill.classList.add("story-progress-fill");
        progress.appendChild(fill);
        progressContainer.appendChild(progress);
    });
}

function updateProgressBars() {
    const bars =
        document.querySelectorAll(".story-progress");
    bars.forEach((bar, index) => {
        const fill =
            bar.querySelector(".story-progress-fill");
        if (index < currentStory) {
            fill.style.width = "100%";
        } else {
            fill.style.width = "0%";
        }
    });
}

function openStory(index) {
    if (
        index < 0 ||
        index >= stories.length
    ) {
        return;
    }

    currentStory = index;
    const story = stories[currentStory];

    storyModal.classList.add("active");

    storyVideo.pause();
    storyVideo.src = story.video;
    storyVideo.currentTime = 0;
    storyVideo.muted = storyMuted;
    storyVideo.load();

    updateProgressBars();
    updateLike();

    storyVideo.play().catch(error => {
        console.log(
            "Autoplay bloqueado:",
            error
        );
    });
    updateNavigation();
}
storyVideo.addEventListener(
    "timeupdate",
    () => {
        if (!storyVideo.duration) {
            return;
        }
        const percentage =
            (
                storyVideo.currentTime /
                storyVideo.duration
            ) * 100;
        const bars =
            document.querySelectorAll(
                ".story-progress"
            );
        const currentBar =
            bars[currentStory];
        if (!currentBar) {
            return;
        }
        const fill =
            currentBar.querySelector(
                ".story-progress-fill"
            );

        fill.style.width =
            `${percentage}%`;
    }
);

storyVideo.addEventListener(
    "ended",
    () => {
        nextStory();
    }
);

function nextStory() {
    if (
        currentStory <
        stories.length - 1
    ) {
        openStory(
            currentStory + 1);
    } else {
        closeStory();
    }
}

function previousStory() {
    if (currentStory > 0) {
        openStory(currentStory - 1);
    }
}

function updateNavigation() {
    if (currentStory === 0) {
        storyPrev.style.display = "none";
    } else {
        storyPrev.style.display = "flex";
    }
    if (currentStory === stories.length - 1) {
        storyNext.style.display = "none";
    } else {
        storyNext.style.display = "flex";
    }
}

storyButton.addEventListener(
    "click",
    () => {
        openStory(0);
    }
);

storyNext.addEventListener(
    "click",
    (event) => {
        event.stopPropagation();
        nextStory();
    }
);

storyPrev.addEventListener(
    "click",
    (event) => {
        event.stopPropagation();
        previousStory();
    }
);

function closeStory() {
    storyVideo.pause();
    storyVideo.currentTime = 0;
    storyModal.classList.remove(
        "active"
    );
}

storyClose.addEventListener(
    "click",
    (event) => {
        event.stopPropagation();
        closeStory();
    }
);

storyModal.addEventListener(
    "click",
    (event) => {
        if (event.target === storyModal) {
            closeStory();
        }
    });

function updateLike() {
    const liked =
        stories[currentStory].liked;
    if (liked) {
        likeIcon.textContent = "♥";
        storyLike.classList.add(
            "liked"
        );
    } else {
        likeIcon.textContent = "♡";
        storyLike.classList.remove(
            "liked"
        );
    }
}

storyLike.addEventListener(
    "click",
    (event) => {
        event.stopPropagation();
        stories[currentStory].liked =
            !stories[currentStory].liked;
        updateLike();
    }
);

storyVideo.addEventListener(
    "dblclick",
    () => {
        stories[currentStory].liked =
            true;
        updateLike();
    });
document.addEventListener(
    "keydown",
    (event) => {
        if (
            !storyModal.classList.contains("active")) {
            return;
        }
        if (event.key === "Escape") {
            closeStory();
        }
        if (
            event.key === "ArrowRight"
        ) {
            nextStory();
        }
        if (event.key === "ArrowLeft") {
            previousStory();
        }
    });

createProgressBars();

storyVolume.addEventListener('click', (event) => {
    event.stopPropagation();

    storyMuted = !storyMuted;

    storyVideo.muted = storyMuted;

    if (storyMuted) {
        storyVolume.textContent = '🔇';
        storyVolume.setAttribute('aria-label', 'Activar sonido');
    } else {
        storyVolume.textContent = '🔊';
        storyVolume.setAttribute('aria-label', 'Silenciar');
    }
});
