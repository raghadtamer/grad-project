

<script setup>
import { ref } from 'vue';
import { Zap, Send, Code, Database, Brain, Feather, Lightbulb } from 'lucide-vue-next';

// المطالبات السريعة (Quick Prompts)
const quickPrompts = ref([
    { text: 'Explain binary search', icon: Code, color: '#4a54e1' },
    { text: 'What is machine learning?', icon: Brain, color: '#FF69B4' },
    { text: 'Help with calculus', icon: Feather, color: '#3CB371' },
    { text: "Newton's laws", icon: Lightbulb, color: '#FF4500' },
    { text: 'Study tips', icon: Zap, color: '#FFA07A' },
    { text: 'Database concepts', icon: Database, color: '#6A5ACD' },
]);

const chatMessage = ref('');
const messages = ref([
    {
        sender: 'AI',
        text: "Hello! I'm your AI study assistant. I can help you with questions about Computer Science, AI, Mathematics, Physics, Database Management, and Web Development. What would you like to explore today?",
        icon: Zap,
        color: '#7b68ee'
    },
     {
        sender: 'User',
        text: "Great! Can you summarize the key concepts of Linear Algebra?",
        icon: null,
        color: '#333'
    }
]);

const sendMessage = () => {
    if (chatMessage.value.trim() === '') return;
    
    // إضافة رسالة المستخدم
    messages.value.push({
        sender: 'User',
        text: chatMessage.value,
        icon: null,
        color: '#333'
    });
    chatMessage.value = '';

    // رسالة رد وهمية من AI
     setTimeout(() => {
        messages.value.push({
            sender: 'AI',
            text: "Linear Algebra deals with linear equations, linear functions, and their representation through matrices and vector spaces. Key concepts include vectors, matrices, determinants, eigenvalues, and eigenvectors.",
            icon: Zap,
            color: '#7b68ee'
        });
    }, 500); 
};
</script>

<template>
    <div class="chat-container">
        <div class="quick-questions">
            <p class="quick-title">Quick questions to get started:</p>
            <div class="prompt-chips">
                <div 
                    v-for="prompt in quickPrompts" 
                    :key="prompt.text" 
                    class="prompt-chip" 
                    :style="{ backgroundColor: prompt.color + '15', color: prompt.color, borderColor: prompt.color }"
                    @click="chatMessage = prompt.text"
                >
                    {{ prompt.text }}
                </div>
            </div>
        </div>

        <div class="chat-area">
            <div 
                v-for="(msg, index) in messages" 
                :key="index" 
                :class="['message-bubble', msg.sender === 'AI' ? 'ai-message' : 'user-message']"
            >
                <div v-if="msg.sender === 'AI'" class="icon-wrapper" :style="{ color: msg.color }">
                    <component :is="msg.icon" size="20" />
                </div>
                <p>{{ msg.text }}</p>
            </div>
        </div>

        <div class="input-box">
            <input 
                type="text" 
                v-model="chatMessage" 
                placeholder="Ask me anything about your studies..."
                @keyup.enter="sendMessage"
            />
            <button @click="sendMessage">
                <Send size="20" color="white" />
            </button>
            <p class="input-note">Press Enter to send • AI responses are for educational guidance</p>
        </div>
    </div>
</template>

<style scoped>
.chat-container { background-color: white; border-radius: 16px; padding: 30px; box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05); }
.quick-questions { margin-bottom: 30px; }
.quick-title { font-weight: 600; color: #555; margin-bottom: 15px; }
.prompt-chips { display: flex; flex-wrap: wrap; gap: 10px; }
.prompt-chip { padding: 8px 15px; border-radius: 20px; font-size: 0.9em; cursor: pointer; border: 1px solid; transition: transform 0.1s; }
.prompt-chip:hover { transform: translateY(-2px); }

.chat-area { height: 400px; overflow-y: auto; padding: 15px 10px; border-radius: 12px; background-color: #fcfcfc; margin-bottom: 20px; }
/* هذا هو التعديل الذي يضمن وجود مسافة بين الرسائل */
.message-bubble { 
    display: flex; 
    align-items: flex-start; 
    margin-bottom: 20px; /* زيادة المسافة هنا */
    padding: 10px 15px; 
    border-radius: 15px; 
    max-width: 85%; 
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
}
.ai-message { background-color: #e6e9ff; color: #333; align-self: flex-start; margin-right: auto; }
.user-message { background-color: #7b68ee; color: white; align-self: flex-end; margin-left: auto; justify-content: flex-end; }
.ai-message .icon-wrapper { margin-right: 10px; background-color: white; border-radius: 50%; padding: 5px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); }
.message-bubble p { margin: 0; line-height: 1.5; }

.input-box { position: relative; display: flex; align-items: center; padding-top: 15px; border-top: 1px solid #eee; }
.input-box input { flex-grow: 1; padding: 15px 50px 15px 20px; border: 1px solid #ddd; border-radius: 25px; font-size: 1em; }
.input-box button { background-color: #7b68ee; border: none; width: 40px; height: 40px; border-radius: 50%; position: absolute; right: 8px; cursor: pointer; transition: opacity 0.2s; }
.input-box button:hover { opacity: 0.9; }
.input-note { position: absolute; bottom: -30px; left: 20px; font-size: 0.75em; color: #999; }
</style>