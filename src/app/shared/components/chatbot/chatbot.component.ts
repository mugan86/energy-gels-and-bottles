import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { ChatbotService } from './chatbot.service';
import { AsyncPipe, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [AsyncPipe, CommonModule, FormsModule],
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.css',
})
export class ChatbotComponent {
  private chatbotService = inject(ChatbotService);

  messages$ = this.chatbotService.messages$;
  userInput: string = '';
  @Input() isOpen = false;
  @Output() isChatOpen: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  toggleChat() {
    this.isOpen = !this.isOpen;
    this.isChatOpen.emit(this.isOpen);
  }

  sendMessage(option?: string) {
    if (option) {
      this.chatbotService.addUserMessage(option);
    } else if (this.userInput.trim()) {
      this.chatbotService.addUserMessage(this.userInput);
      this.userInput = '';
    }
  }
}
