document.addEventListener("DOMContentLoaded", () => {
  const painel = document.querySelector(".blackconfig"); //serve pra iniciar tudo

  // ======== estilo basico das coisas ========
  Object.assign(painel.style, {
    backgroundColor: "black",
    color: "#00FF00",
    fontFamily: "'Press Start 2P', monospace",
    fontSize: "1.25vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "stretch",
    padding: "3.4vh",
    boxSizing: "border-box",
    lineHeight: "1.8",
  });

  function cabecalho(titulo) {
    return `<div style="text-align:center; margin-bottom:3.1vh;">
      <span style="font-size:2.2vh;">${titulo.toUpperCase()}</span>
    </div>`;
  }

  function inputRetro(placeholder) {
    return `<input type="text" placeholder="${placeholder}" style="background:black; border:0.1vh solid #00ff00; color:#00ff00; padding:1.6vh; font-family:'Press Start 2P', monospace; font-size:1.6vh; width:100%;">`;
  }

  // Cria um input range binário (0/1), começando desativado (0)
  function rangeBinario(id) {
    const slider = `<input type="range" id="${id}" min="0" max="1" step="1" value="0" style="width:4.8vh; height:1vh; -webkit-appearance:none; background:black; border:0.1vh solid #00ff00; outline:none; cursor:pointer; vertical-align:middle;">
      <style>
        input[type=range]::-webkit-slider-thumb {
          -webkit-appearance:none;
          width:1.3vh;
          height:1.3vh;
          background:#00ff00;
          border-radius:0.1vh;
          cursor:pointer;
        }
        input[type=range]:active::-webkit-slider-thumb {
          transform: scale(1.2);
        }
      </style>`;
    return slider;
  }

  // Torna os ranges clicáveis (mudam de 0 → 1 ou 1 → 0 no click)
  function ativarToggleAutomatico() {
    document.querySelectorAll('input[type="range"]').forEach((range) => {
      range.addEventListener("click", () => {
        range.value = range.value === "1" ? "0" : "1";
      });
    });
  }

  // ======== troca de telas ========
  function mostrar(opcao) {
    switch (opcao) {
      case "conta":
        painel.innerHTML = `${cabecalho("CONFIGURAÇÕES DE CONTA")}
          <div style="display:flex; flex-direction:column; justify-content:space-evenly; height:100%;">
            <div><label>Usuário:</label><br>${inputRetro("AretiUser_42")}</div>
            <div><label>Email:</label><br>${inputRetro("areti.user@vitae.net")}</div>
            <div><label>Senha:</label><br>${inputRetro("************")}</div>
            <div style="text-align:center; margin-top:3.2vh;">
              <button style="background:black; border:0.1vh solid #00ff00; color:#00ff00; padding:1.3vh 2.6vh; font-family:'Press Start 2P', monospace; font-size:1.6vh; cursor:pointer;">
                SALVAR ALTERAÇÕES
              </button>
            </div>
          </div>`;
        break;

      case "privacidade":
        painel.innerHTML = `${cabecalho("PRIVACIDADE")}
          <div style="display:flex; flex-direction:column; justify-content:space-evenly; height:100%; gap:3.5vh;">
            <div>${rangeBinario("p1")} <span style="margin-left:2.5vh;">Visibilidade pública</span></div>
            <div>${rangeBinario("p2")} <span style="margin-left:2.5vh;">Membros da network podem ver sua árvore</span></div>
            <div>${rangeBinario("p3")} <span style="margin-left:2.5vh;">Membros da network podem ver suas lembranças</span></div>
            <div>${rangeBinario("p4")} <span style="margin-left:2.5vh;">Membros da network podem ver suas contribuições</span></div>
            <div style="text-align:center; margin-top:7vh;">
              <button style="background:black; border:0.2vh solid #00ff00; color:#00ff00; padding:2vh 4vh; font-family:'Press Start 2P', monospace; font-size:1.6vh; cursor:pointer;">
                SALVAR PRIVACIDADE
              </button>
            </div>
          </div>`;
        break;

      case "notificacoes":
        painel.innerHTML = `${cabecalho("NOTIFICAÇÕES")}
          <div style="display:flex; flex-direction:column; justify-content:space-evenly; height:100%; gap:3.5vh;">
            <div>${rangeBinario("n1")} <span style="margin-left:2.5vh;">Notificações de árvore pessoal</span></div>
            <div>${rangeBinario("n2")} <span style="margin-left:2.5vh;">Notificações de árvore network</span></div>
            <div>${rangeBinario("n3")} <span style="margin-left:2.5vh;">Notificações do líder de sua network</span></div>
            <div>${rangeBinario("n4")} <span style="margin-left:2.5vh;">Notificações gerais</span></div>
            <div style="text-align:center; margin-top:7vh;">
              <button style="background:black; border:0.2vh solid #00ff00; color:#00ff00; padding:2vh 4vh; font-family:'Press Start 2P', monospace; font-size:1.6vh; cursor:pointer;">
                ATUALIZAR NOTIFICAÇÕES
              </button>
            </div>
          </div>`;
        break;

      case "assinaturas":
        painel.innerHTML = `${cabecalho("ASSINATURAS")}
          <div style="display:flex; flex-direction:column; justify-content:center; align-items:center; height:100%;">
            <div style="text-align:center; padding:4.5vh; border:0.3vh solid #00ff00; width:92%; border-radius:0;">
              <div style="font-size:2.6vh; margin-bottom:2.5vh;">Network Empresas</div>
              <div style="font-size:1.5vh;">Plano de imersão Areti Vitae Empresas</div>
              <div style="margin-top:2.5vh; font-size:1.8vh;">R$ 295,95</div>
            </div>
          </div>`;
        break;
    }

    ativarToggleAutomatico(); // reativa o toggle
  }

  // ======== events! ========
  document.querySelector(".r")?.addEventListener("click", () => mostrar("conta"));
  document.querySelector(".r1")?.addEventListener("click", () => mostrar("privacidade"));
  document.querySelector(".r3")?.addEventListener("click", () => mostrar("notificacoes"));
  document.querySelector(".r4")?.addEventListener("click", () => mostrar("assinaturas"));
});
