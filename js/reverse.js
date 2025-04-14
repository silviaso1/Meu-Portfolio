// Easter Egg Cibernético Avançado TURBO
const konamiCode = ['s', 'i', 'l', 'v', 'i', 'a'];
let konamiIndex = 0;
let cyberModeActive = false;
let binaryInterval;
let matrixInterval;
let neonInterval;

// Sequências binárias para o efeito de chuva
const binaryStrings = [
    '010011000110010101100111011001010110111001100100',
    '101000010111010101100101011100100111001101110100',
    '11001010110110001100101011000110111010001110010',
    '011011110110111001100101011100110010000001110100',
    '011101110110111100100000011010000111010101101101',
    '011000010110111000100000011000100110100101101110',
    '011000010111001001111001001000000110001101101111',
    '011001000110010100100000011100110110100101101100',
    '011101100110100101100001001000000110001101101100',
    '011011110111001101110011011010010110001101101011'
];

document.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === konamiCode[konamiIndex]) {
        konamiIndex++;
        
        // Efeito sonoro (simulado)
        if (cyberModeActive) {
            console.log('%c[SFX: cyber_click.wav]', 'color: #888;');
        }
        
        if (konamiIndex === konamiCode.length) {
            cyberModeActive = !cyberModeActive;
            toggleCyberMode();
            konamiIndex = 0;
            
            // Feedback visual ultra turbinado
            const feedback = document.createElement('div');
            feedback.className = 'cyber-feedback';
            feedback.innerHTML = cyberModeActive 
                ? 'SYSTEM OVERDRIVE <span>システム・オーバードライブ 起動</span>' 
                : 'SYSTEM SHUTDOWN <span>システム・シャットダウン</span>';
            
            // Efeito de glitch no feedback
            feedback.style.animation = 'glitch-effect 0.5s linear 2';
            document.body.appendChild(feedback);
            
            // Adiciona ruído estático
            if (cyberModeActive) {
                const staticOverlay = document.createElement('div');
                staticOverlay.className = 'cyber-static';
                staticOverlay.style.animation = 'static-flicker 0.1s linear 10';
                document.body.appendChild(staticOverlay);
                setTimeout(() => staticOverlay.remove(), 1000);
            }
            
            setTimeout(() => {
                feedback.style.animation = 'cyber-fade 2s forwards';
                setTimeout(() => feedback.remove(), 2000);
            }, 500);
        }
    } else {
        konamiIndex = 0;
    }
});

let mobileTapCount = 0;
let lastMobileTapTime = 0;

// Event listener para ativação mobile (3 toques)
document.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) { // Toque único
        const currentTime = Date.now();
        
        // Reset após 1 segundo de inatividade
        if (currentTime - lastMobileTapTime > 1000) {
            mobileTapCount = 0;
        }
        
        mobileTapCount++;
        lastMobileTapTime = currentTime;
        
        if (mobileTapCount === 30) {
            cyberModeActive = !cyberModeActive;
            toggleCyberMode();
            mobileTapCount = 0;
            
            
            setTimeout(() => tapFeedback.remove(), 1000);
        }
    }
});

function toggleCyberMode() {
    // Remove feedbacks existentes
    document.querySelectorAll('.cyber-feedback').forEach(el => el.remove());

    if (cyberModeActive) {
        // ========== ATIVAÇÃO ==========
        document.body.classList.add('cyber-mode');
        
        // Console log
        console.log('%c>>> SYSTEM_OS BOOT <<<', 'color: #0ff; font-family: monospace; font-size: 24px;');
        console.log('%c> モジュールをロードしています...', 'color: #0f0;');

        // Mensagem visual
        const activationMsg = document.createElement('div');
        activationMsg.className = 'cyber-feedback';
        activationMsg.innerHTML = `
            SYSTEM OVERDRIVE <span>システム・オーバードライブ</span>
        `;
        document.body.appendChild(activationMsg);
        
        // Animação de entrada
        setTimeout(() => {
            activationMsg.style.opacity = '1';
            
            // Ruído estático (apenas desktop)
            if (!isMobile()) {
                const staticOverlay = document.createElement('div');
                staticOverlay.className = 'cyber-static';
                document.body.appendChild(staticOverlay);
                setTimeout(() => staticOverlay.remove(), 1000);
            }
        }, 50);

        // Remove mensagem após 2s
        setTimeout(() => {
            activationMsg.style.opacity = '0';
            setTimeout(() => activationMsg.remove(), 500);
        }, 2000);

        // Ativa efeitos visuais
        activateCyberEffects();

    } else {
        // ========== DESATIVAÇÃO ==========
        document.body.classList.remove('cyber-mode');
        
        // Mensagem visual
        const shutdownMsg = document.createElement('div');
        shutdownMsg.className = 'cyber-feedback';
        shutdownMsg.innerHTML = `
            SYSTEM SHUTDOWN <span>システム・シャットダウン</span>
        `;
        document.body.appendChild(shutdownMsg);
        
        // Animação de entrada
        setTimeout(() => {
            shutdownMsg.style.opacity = '1';
        }, 50);
        
        // Remove mensagem após 2s
        setTimeout(() => {
            shutdownMsg.style.opacity = '0';
            setTimeout(() => shutdownMsg.remove(), 500);
        }, 2000);

        // Desativa efeitos
        deactivateCyberEffects();
        
        // Console log
        console.log('%c<<< SYSTEM OFFLINE >>>', 'color: #f88; font-size: 18px;');
    }
}

// Detecta mobile (usado apenas para ajustes internos)
function isMobile() {
    return ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
}

function activateCyberEffects() {
    // 1. Efeito de digitalização melhorado
    const scanlines = document.createElement('div');
    scanlines.id = 'cyber-scanlines';
    document.body.appendChild(scanlines);
    
    // 2. Grade hexagonal com animação
    const hexGrid = document.createElement('div');
    hexGrid.id = 'cyber-hexgrid';
    document.body.appendChild(hexGrid);
    
    // 3. HUD holográfico ultra avançado
    const hud = document.createElement('div');
    hud.id = 'cyber-hud';
    hud.innerHTML = `
        <div class="hud-line"></div>
        <div class="hud-data">
            SILVIA_OS v3.1.7 - オーバードライブ<br>
            <span class="hud-jp">セキュリティ: <span class="security-level">暗号化</span></span><br>
            接続: ${navigator.onLine ? 'オンライン' : 'オフライン'}<br>
            CPU: ${Math.floor(Math.random() * 30) + 70}%<br>
            RAM: ${Math.floor(Math.random() * 20) + 80}%<br>
            ${new Date().toLocaleTimeString()}<br>
            <span class="hud-jp">${new Date().getHours()}時${new Date().getMinutes()}分</span>
        </div>
        <div class="hud-radar"></div>
    `;
    document.body.appendChild(hud);
    
    // 4. Binários caindo em velocidade turbo
    binaryInterval = setInterval(createBinaryRain, 150);
    
    // 5. Efeitos neon piscando
    neonInterval = setInterval(createNeonFlash, 3000);
    
    // 6. Atualiza o HUD a cada segundo
    setInterval(updateHUD, 1000);
    
    // 7. Adiciona efeito de partículas
    createParticles();
    
    // 8. Adiciona reflexos de neon
    createNeonReflections();
}

function deactivateCyberEffects() {
    // Remove todos os efeitos
    ['cyber-scanlines', 'cyber-hexgrid', 'cyber-hud', 'cyber-matrix', 'cyber-particles', 'cyber-neon'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.remove();
    });
    
    // Limpa os intervalos
    clearInterval(binaryInterval);
    clearInterval(matrixInterval);
    clearInterval(neonInterval);
    
    // Remove todos os elementos de efeito
    document.querySelectorAll('.binary-rain, .matrix-column').forEach(el => el.remove());
}

// ... (mantenha todo o código anterior até a função createBinaryRain)

function createBinaryRain() {
    const binaryContainer = document.createElement('div');
    binaryContainer.className = 'binary-container';
    binaryContainer.style.left = `${10 + Math.random() * 80}vw`;
    
    // Cria uma sequência binária aleatória (7-15 dígitos)
    const length = 7 + Math.floor(Math.random() * 8);
    let binaryString = '';
    for (let i = 0; i < length; i++) {
        binaryString += Math.round(Math.random()) + '\n'; // Adiciona quebra de linha
    }
    
    // Remove a última quebra de linha
    binaryString = binaryString.trim();
    
    binaryContainer.textContent = binaryString;
    binaryContainer.style.animationDuration = `${8 + Math.random() * 5}s`;
    document.body.appendChild(binaryContainer);
    
    // Remove após a animação
    setTimeout(() => binaryContainer.remove(), 13000);
}

// ... (mantenha o resto do código original)

function createNeonFlash() {
    const flash = document.createElement('div');
    flash.className = 'cyber-neon-flash';
    flash.style.background = neonColors[Math.floor(Math.random() * neonColors.length)];
    flash.style.top = `${Math.random() * 100}vh`;
    flash.style.left = `${Math.random() * 100}vw`;
    document.body.appendChild(flash);
    
    setTimeout(() => {
        flash.style.opacity = '0';
        setTimeout(() => flash.remove(), 1000);
    }, 100);
}

function createParticles() {
    const particles = document.createElement('div');
    particles.id = 'cyber-particles';
    document.body.appendChild(particles);
    
    for (let i = 0; i < 100; i++) {
        const particle = document.createElement('div');
        particle.className = 'cyber-particle';
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.top = `${Math.random() * 100}vh`;
        particle.style.width = particle.style.height = `${1 + Math.random() * 3}px`;
        particle.style.background = neonColors[Math.floor(Math.random() * neonColors.length)];
        particle.style.animationDuration = `${10 + Math.random() * 20}s`;
        particles.appendChild(particle);
    }
}

function createNeonReflections() {
    const reflections = document.createElement('div');
    reflections.id = 'cyber-neon';
    document.body.appendChild(reflections);
    
    // Cria reflexos de neon nas bordas
    for (let i = 0; i < 8; i++) {
        const reflection = document.createElement('div');
        reflection.className = 'cyber-neon-reflection';
        reflection.style.background = neonColors[i % neonColors.length];
        reflection.style.animationDelay = `${i * 0.5}s`;
        reflections.appendChild(reflection);
    }
}

function updateHUD() {
    const hud = document.getElementById('cyber-hud');
    if (hud) {
        const time = new Date();
        const securityLevels = ['緑', '黄色', '赤', '暗号化', '超暗号化'];
        const securityColors = ['#0f0', '#ff0', '#f00', '#0ff', '#f0f'];
        const randomLevel = Math.floor(Math.random() * securityLevels.length);
        
        hud.innerHTML = `
            <div class="hud-line"></div>
            <div class="hud-data">
                SILVIA_OS v3.1.7 - オーバードライブ<br>
                <span class="hud-jp">セキュリティ: <span class="security-level" style="color: ${securityColors[randomLevel]}">${securityLevels[randomLevel]}</span></span><br>
                接続: ${navigator.onLine ? 'オンライン' : 'オフライン'}<br>
                CPU: ${Math.floor(Math.random() * 30) + 70}%<br>
                RAM: ${Math.floor(Math.random() * 20) + 80}%<br>
                VRAM: ${Math.floor(Math.random() * 15) + 85}%<br>
                ${time.toLocaleTimeString()}<br>
                <span class="hud-jp">${time.getHours()}時${time.getMinutes()}分${time.getSeconds()}秒</span>
            </div>
            <div class="hud-radar"></div>
        `;
    }
}

// Terminal secreto melhorado
document.addEventListener('keydown', (e) => {
    if (cyberModeActive && e.ctrlKey && e.altKey && e.key.toLowerCase() === 't') {
        toggleTerminal();
    }
});

function toggleTerminal() {
    const terminal = document.getElementById('cyber-terminal') || createTerminal();
    terminal.style.display = terminal.style.display === 'flex' ? 'none' : 'flex';
    
    if (terminal.style.display === 'flex') {
        console.log('%c[TERMINAL ACCESS GRANTED]', 'color: #0f0;');
    }
}

function createTerminal() {
    const terminal = document.createElement('div');
    terminal.id = 'cyber-terminal';
    
    terminal.innerHTML = `
        <div id="cyber-terminal-header">
            <div>SILVIA_OS TERMINAL v3.1.7</div>
            <div id="cyber-terminal-controls">
                <button class="cyber-terminal-btn" id="cyber-terminal-minimize">─</button>
                <button class="cyber-terminal-btn" id="cyber-terminal-close">✕</button>
            </div>
        </div>
        <div id="cyber-terminal-content">
            > サイバーパンク・ターミナル v3.1.7 へようこそ<br><br>
            > システム・オーバードライブ・モード: アクティブ<br>
            > メモリ: ${Math.floor(Math.random() * 20) + 80}% 使用中<br>
            > 暗号化レベル: 超暗号化<br><br>
            > 利用可能なコマンド:<br>
            > - help: ヘルプを表示<br>
            > - clear: 画面をクリア<br>
            > - date: 現在の日時を表示<br>
            > - jp: 日本語モード<br>
            > - hack: ハッキング・ツールを起動<br>
            > - neon: ネオン効果を調整<br><br>
            > <span class="cyber-cursor">_</span>
        </div>
        <div id="cyber-terminal-status">
            <span>READY</span>
            <span>${new Date().toLocaleTimeString()}</span>
        </div>
    `;
    
    document.body.appendChild(terminal);
    
    // Adiciona funcionalidade aos botões
    terminal.querySelector('#cyber-terminal-close').addEventListener('click', () => {
        terminal.style.display = 'none';
    });
    
    terminal.querySelector('#cyber-terminal-minimize').addEventListener('click', () => {
        terminal.classList.toggle('minimized');
    });
    
    return terminal;
}