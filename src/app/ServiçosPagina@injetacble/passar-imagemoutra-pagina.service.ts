import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PassarImagemoutraPaginaService {

  caminhoImagem: string = 'assets/Imagens/imagem-inicial.avif';
  caminhoImagemModal: string = 'assets/Imagens/hamburguertra.avif';

  carregarImagemLanche() {
    // Definir a imagem no modal como a imagem inicial
    this.caminhoImagemModal = this.caminhoImagem;

    // Abrir o modal
    const modal = document.getElementById("exampleModal");
    if (modal) {
      modal.style.display = "block";
    }
  }

  fecharModal() {
    // Fechar o modal
    const modal = document.getElementById("exampleModal");
    if (modal) {
      modal.style.display = "none";
    }
  }

  constructor() { }
}




