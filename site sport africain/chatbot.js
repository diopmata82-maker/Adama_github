// Chatbot Sport Africain
// Widget de chat moderne avec réponses automatiques

class SportAfricainChatbot {
    constructor() {
        this.isOpen = false;
        this.messages = [];
        this.init();
    }

    init() {
        this.createChatWidget();
        this.setupEventListeners();
        this.addWelcomeMessage();
    }

    createChatWidget() {
        const chatHTML = `
            <!-- Bouton flottant -->
            <div id="chat-button" class="chat-button">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
                <span class="chat-badge">1</span>
            </div>

            <!-- Widget de chat -->
            <div id="chat-widget" class="chat-widget">
                <div class="chat-header">
                    <div class="chat-header-info">
                        <div class="chat-avatar">
                            <img src="version logo sport africain_logo original.png" alt="Sport Africain">
                        </div>
                        <div class="chat-header-text">
                            <h3>Sport Africain</h3>
                            <p class="chat-status">
                                <span class="status-dot"></span>
                                En ligne
                            </p>
                        </div>
                    </div>
                    <button id="chat-close" class="chat-close-btn">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>

                <div id="chat-messages" class="chat-messages">
                    <!-- Messages apparaîtront ici -->
                </div>

                <div class="chat-quick-replies" id="quick-replies">
                    <!-- Réponses rapides -->
                </div>

                <div class="chat-input-container">
                    <input 
                        type="text" 
                        id="chat-input" 
                        class="chat-input" 
                        placeholder="Écrivez votre message..."
                        autocomplete="off"
                    >
                    <button id="chat-send" class="chat-send-btn">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="22" y1="2" x2="11" y2="13"></line>
                            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                        </svg>
                    </button>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', chatHTML);
    }

    setupEventListeners() {
        const chatButton = document.getElementById('chat-button');
        const chatClose = document.getElementById('chat-close');
        const chatSend = document.getElementById('chat-send');
        const chatInput = document.getElementById('chat-input');

        chatButton.addEventListener('click', () => this.toggleChat());
        chatClose.addEventListener('click', () => this.toggleChat());
        chatSend.addEventListener('click', () => this.sendMessage());
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendMessage();
        });
    }

    toggleChat() {
        this.isOpen = !this.isOpen;
        const widget = document.getElementById('chat-widget');
        const button = document.getElementById('chat-button');
        const badge = button.querySelector('.chat-badge');

        if (this.isOpen) {
            widget.classList.add('active');
            button.classList.add('hidden');
            if (badge) badge.style.display = 'none';
            document.getElementById('chat-input').focus();
        } else {
            widget.classList.remove('active');
            button.classList.remove('hidden');
        }
    }

    addWelcomeMessage() {
        setTimeout(() => {
            this.addBotMessage(
                "Bonjour ! 👋 Bienvenue sur Sport Africain. Comment puis-je vous aider aujourd'hui ?",
                true
            );
        }, 500);
    }

    addBotMessage(text, showQuickReplies = false) {
        const messagesContainer = document.getElementById('chat-messages');
        const messageDiv = document.createElement('div');
        messageDiv.className = 'chat-message bot-message';
        
        messageDiv.innerHTML = `
            <div class="message-avatar">
                <img src="version logo sport africain_logo original.png" alt="Bot">
            </div>
            <div class="message-bubble">
                <p>${text}</p>
                <span class="message-time">${this.getCurrentTime()}</span>
            </div>
        `;

        messagesContainer.appendChild(messageDiv);
        this.scrollToBottom();

        if (showQuickReplies) {
            setTimeout(() => this.showQuickReplies(), 500);
        }
    }

    addUserMessage(text) {
        const messagesContainer = document.getElementById('chat-messages');
        const messageDiv = document.createElement('div');
        messageDiv.className = 'chat-message user-message';
        
        messageDiv.innerHTML = `
            <div class="message-bubble">
                <p>${text}</p>
                <span class="message-time">${this.getCurrentTime()}</span>
            </div>
        `;

        messagesContainer.appendChild(messageDiv);
        this.scrollToBottom();
    }

    showQuickReplies() {
        const quickReplies = document.getElementById('quick-replies');
        const replies = [
            { text: "📰 Dernières actualités", action: "actualites" },
            { text: "⚽ Football", action: "football" },
            { text: "🏀 Basketball", action: "basketball" },
            { text: "📞 Contact", action: "contact" }
        ];

        quickReplies.innerHTML = replies.map(reply => 
            `<button class="quick-reply-btn" data-action="${reply.action}">${reply.text}</button>`
        ).join('');

        quickReplies.style.display = 'flex';

        // Ajouter les événements
        quickReplies.querySelectorAll('.quick-reply-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const action = e.target.dataset.action;
                this.handleQuickReply(action, e.target.textContent);
            });
        });
    }

    hideQuickReplies() {
        const quickReplies = document.getElementById('quick-replies');
        quickReplies.style.display = 'none';
    }

    handleQuickReply(action, text) {
        this.addUserMessage(text);
        this.hideQuickReplies();
        
        setTimeout(() => {
            this.handleBotResponse(action);
        }, 500);
    }

    sendMessage() {
        const input = document.getElementById('chat-input');
        const message = input.value.trim();

        if (!message) return;

        this.addUserMessage(message);
        input.value = '';
        this.hideQuickReplies();

        setTimeout(() => {
            this.processUserMessage(message);
        }, 500);
    }

    processUserMessage(message) {
        const lowerMessage = message.toLowerCase();

        // Détection des intentions
        if (lowerMessage.includes('bonjour') || lowerMessage.includes('salut') || lowerMessage.includes('hello')) {
            this.addBotMessage("Bonjour ! Comment puis-je vous aider ?", true);
        }
        else if (lowerMessage.includes('actualité') || lowerMessage.includes('news') || lowerMessage.includes('article')) {
            this.handleBotResponse('actualites');
        }
        else if (lowerMessage.includes('football') || lowerMessage.includes('foot')) {
            this.handleBotResponse('football');
        }
        else if (lowerMessage.includes('basketball') || lowerMessage.includes('basket')) {
            this.handleBotResponse('basketball');
        }
        else if (lowerMessage.includes('athlétisme') || lowerMessage.includes('athletisme')) {
            this.handleBotResponse('athletisme');
        }
        else if (lowerMessage.includes('lutte')) {
            this.handleBotResponse('lutte');
        }
        else if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('téléphone')) {
            this.handleBotResponse('contact');
        }
        else if (lowerMessage.includes('abonnement') || lowerMessage.includes('abonner') || lowerMessage.includes('newsletter')) {
            this.handleBotResponse('abonnement');
        }
        else if (lowerMessage.includes('merci')) {
            this.addBotMessage("De rien ! N'hésitez pas si vous avez d'autres questions. 😊", true);
        }
        else if (lowerMessage.includes('aide') || lowerMessage.includes('help')) {
            this.addBotMessage(
                "Je peux vous aider avec :\n• Les dernières actualités sportives\n• Informations sur les disciplines\n• Coordonnées de contact\n• Abonnement à la newsletter",
                true
            );
        }
        else {
            this.addBotMessage(
                "Je ne suis pas sûr de comprendre. Puis-je vous aider avec autre chose ?",
                true
            );
        }
    }

    handleBotResponse(action) {
        switch(action) {
            case 'actualites':
                this.addBotMessage(
                    "Voici nos dernières actualités ! 📰\n\nVous pouvez consulter :\n• <a href='actualites.html'>Toutes les actualités</a>\n• <a href='actualites-football.html'>Football</a>\n• <a href='actualites-basketball.html'>Basketball</a>\n• <a href='actualites-athletisme.html'>Athlétisme</a>\n• <a href='actualites-lutte.html'>Lutte</a>",
                    true
                );
                break;

            case 'football':
                this.addBotMessage(
                    "⚽ Football africain !\n\nDécouvrez :\n• <a href='actualites-football.html'>Actualités Football</a>\n• <a href='classement-football.html'>Classement des joueurs</a>\n• Interviews exclusives",
                    true
                );
                break;

            case 'basketball':
                this.addBotMessage(
                    "🏀 Basketball africain !\n\nDécouvrez :\n• <a href='actualites-basketball.html'>Actualités Basketball</a>\n• <a href='classement-basketball.html'>Top joueurs NBA</a>\n• Profils des stars",
                    true
                );
                break;

            case 'athletisme':
                this.addBotMessage(
                    "🏃 Athlétisme africain !\n\nDécouvrez :\n• <a href='actualites-athletisme.html'>Actualités Athlétisme</a>\n• <a href='classement-athletisme.html'>Records et classements</a>\n• Profils des champions",
                    true
                );
                break;

            case 'lutte':
                this.addBotMessage(
                    "🤼 Lutte sénégalaise !\n\nDécouvrez :\n• <a href='actualites-lutte.html'>Actualités Lutte</a>\n• <a href='classement-lutte.html'>Top lutteurs</a>\n• Combats à venir",
                    true
                );
                break;

            case 'contact':
                this.addBotMessage(
                    "📞 Contactez-nous !\n\n• Email : <a href='mailto:sportafricainpro@gmail.com'>sportafricainpro@gmail.com</a>\n• Téléphone : <a href='tel:+221778211748'>+221 77 821 17 48</a>\n• WhatsApp : <a href='https://wa.me/221778211748' target='_blank'>+221 77 821 17 48</a>\n\nOu visitez notre <a href='contact.html'>page contact</a>",
                    true
                );
                break;

            case 'abonnement':
                this.addBotMessage(
                    "📧 Newsletter Sport Africain\n\nRecevez nos actualités directement par email !\n\n<a href='abonnement.html' class='chat-cta-btn'>S'abonner maintenant</a>",
                    true
                );
                break;

            default:
                this.addBotMessage("Comment puis-je vous aider ?", true);
        }
    }

    scrollToBottom() {
        const messagesContainer = document.getElementById('chat-messages');
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    getCurrentTime() {
        const now = new Date();
        return now.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
    }
}

// Initialiser le chatbot quand le DOM est chargé
document.addEventListener('DOMContentLoaded', () => {
    new SportAfricainChatbot();
});
