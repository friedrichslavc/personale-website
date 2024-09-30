function showNotes() {
    // 隐藏其他部分
    document.getElementById('portfolio').style.display = 'none';
    document.getElementById('resources').style.display = 'none';
    document.getElementById('skills').style.display = 'none';
    document.getElementById('ai-chat').style.display = 'none';

    // 显示笔记部分
    document.getElementById('notes').style.display = 'block';

    // 加载笔记内容
    fetch('projects/java_notes.md')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(text => {
            const notesContent = document.getElementById('notesContent');
            notesContent.innerHTML = marked.parse(text);
            // 应用 Prism.js 代码高亮
            Prism.highlightAllUnder(notesContent);
        })
        .catch(error => {
            console.error('Error loading notes:', error);
            document.getElementById('notesContent').innerHTML = `<p>加载笔记时出错。错误信息: ${error.message}</p>`;
        });
}

document.getElementById('closeNotes').addEventListener('click', function() {
    // 隐藏笔记部分
    document.getElementById('notes').style.display = 'none';

    // 显示其他部分
    document.getElementById('portfolio').style.display = 'block';
    document.getElementById('resources').style.display = 'block';
    document.getElementById('skills').style.display = 'block';
    document.getElementById('ai-chat').style.display = 'block';
});

// AI 聊天功能
const chatHistory = document.getElementById('chatHistory');
const userInput = document.getElementById('userInput');
const sendMessage = document.getElementById('sendMessage');
const clearChat = document.getElementById('clearChat');

sendMessage.addEventListener('click', () => {
    const message = userInput.value.trim();
    if (message) {
        addMessage('user', message);
        userInput.value = '';
        // 模拟 AI 响应（替换为实际的 API 调用）
        setTimeout(() => {
            addMessage('ai', '这是一个模拟的 AI 响应。请替换为实际的 API 集成。');
        }, 1000);
    }
});

clearChat.addEventListener('click', () => {
    chatHistory.innerHTML = '';
});

function addMessage(sender, content) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `p-2 mb-2 rounded ${sender === 'user' ? 'user-message' : 'ai-message'}`;
    messageDiv.innerHTML = marked.parse(content);
    chatHistory.appendChild(messageDiv);
    chatHistory.scrollTop = chatHistory.scrollHeight;
}

// 初始化 AOS
AOS.init({
    duration: 1000,
    once: true
});

// 返回顶部按钮功能
const backToTopButton = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});
backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// 初始化 Swiper
new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true, // 启用循环模式
});