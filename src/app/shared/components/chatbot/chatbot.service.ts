import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface ChatMessage {
  text: string;
  sender: 'user' | 'bot';
  options?: string[];
}

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {
  private messagesSubject = new BehaviorSubject<ChatMessage[]>([]);
  messages$ = this.messagesSubject.asObservable();

  private step = 0;
  private userData: { sports?: string; durations?: string; intensities?: string } = {};

  private gelRecommendations = {
    "1:0.8": "Ideal para entrenamientos largos. Contiene glucosa y fructosa para una mejor absorción.",
    "2:1": "Buena opción para intensidad media. Proporciona energía constante sin picos de azúcar.",
    "1:1": "Recomendada para esfuerzos cortos y explosivos, ayudando a una rápida recuperación."
  };

  constructor() {
    this.addBotMessage('Bienvenid@ al recomendador de geles. Para poder ayudarte, ¿cuál es tu deporte favorito?', ['Cycling', 'Running', 'Swimming']);
  }

  addBotMessage(text: string, options?: string[]) {
    this.updateMessages({ text, sender: 'bot', options });
  }

  addUserMessage(userInput: string) {
    this.updateMessages({ text: userInput, sender: 'user' });
    this.processUserResponse(userInput.trim());
  }

  private updateMessages(message: ChatMessage) {
    const updatedMessages = [...this.messagesSubject.value, message];
    this.messagesSubject.next(updatedMessages);
  }

  private processUserResponse(response: string) {
    switch (this.step) {
      case 0:
        this.userData.sports = response;
        this.addBotMessage(`You chose ${response}. Do you want information about gels first?`, ['Yes', 'No']);
        this.step++;
        break;
      case 1:
        if (response.toLowerCase() === 'yes') {
          this.addBotMessage(`Here is the list of recommended gels for ${this.userData.sports}:`);
          this.showGelRecommendations();
        } else {
          this.addBotMessage('How long is your workout?', ['30 min', '1 hour', '2 hours']);
        }
        this.step++;
        break;
      case 2:
        this.userData.durations = response;
        this.addBotMessage('What is your training intensity?', ['Low', 'Medium', 'High']);
        this.step++;
        break;
      case 3:
        this.userData.intensities = response;
        this.addBotMessage(`Summary: Sport: ${this.userData.sports}, Duration: ${this.userData.durations}, Intensity: ${this.userData.intensities}.`);
        this.showGelRecommendations();
        break;
    }
  }

  private showGelRecommendations() {
    let text = "Here are the recommended gels:\n\n";
    Object.entries(this.gelRecommendations).forEach(([ratio, explanation]) => {
      text += `- **${ratio}**: ${explanation}\n\n`;
    });
    this.addBotMessage(text, Object.keys(this.gelRecommendations));
  }
}
