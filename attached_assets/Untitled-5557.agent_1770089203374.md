# Complete Implementation Package: All 5 Components

This is a comprehensive implementation package covering JavaScript code, JSON data models, SWMM5 files, educational content, and CSS styling for the proposed interactive simulations.

---

# PART 1: DETAILED JAVASCRIPT/PSEUDOCODE

---

## 1.1 Dujiangyan Fish Mouth Diversion Simulator

```javascript
/**
 * DUJIANGYAN FISH MOUTH DIVERSION SIMULATOR
 * Ancient China • 256 BCE
 * 
 * Simulates the ingenious water diversion system that has operated
 * continuously for over 2,200 years
 */

class DujiangyanSimulator {
    constructor(canvasId, controlsId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.controls = document.getElementById(controlsId);
        
        // Physical constants (scaled for visualization)
        this.config = {
            // River parameters
            minRiverBaseFlow: 500,      // m³/s - dry season
            minRiverFloodFlow: 3000,    // m³/s - flood season
            currentFlow: 1000,          // m³/s - current simulation
            
            // Fish Mouth division ratios (historically accurate)
            drySeasonInnerRatio: 0.6,   // 60% to inner river in dry season
            drySeasonOuterRatio: 0.4,   // 40% to outer river in dry season
            floodSeasonInnerRatio: 0.4, // 40% to inner river in flood season
            floodSeasonOuterRatio: 0.6, // 60% to outer river in flood season
            
            // Flying Sand Weir parameters
            weirHeight: 2.0,            // meters
            weirLength: 200,            // meters
            sedimentThreshold: 0.8,     // kg/m³ - triggers sediment flush
            
            // Bottle-neck Channel
            bottleneckWidth: 20,        // meters (宝瓶口)
            bottleneckMaxFlow: 500,     // m³/s maximum capacity
            
            // Chengdu Plain irrigation
            irrigationAreaHectares: 670000,  // 670,000 hectares served
            waterRequirementPerHa: 8000,     // m³/year/hectare
        };
        
        // State variables
        this.state = {
            season: 'dry',              // 'dry' | 'wet' | 'flood'
            riverLevel: 0.5,            // 0-1 normalized
            sedimentLoad: 0.3,          // 0-1 normalized
            innerRiverFlow: 0,
            outerRiverFlow: 0,
            bottleneckFlow: 0,
            irrigationSatisfied: 0,     // percentage
            flyingSandWeirActive: false,
            animationFrame: 0,
            particles: [],              // Water particles for animation
            sedimentParticles: [],      // Sediment particles
        };
        
        // Animation settings
        this.animationSpeed = 1;
        this.isRunning = false;
        
        this.init();
    }
    
    init() {
        this.createControls();
        this.createParticles();
        this.calculateFlows();
        this.render();
    }
    
    createControls() {
        const controlsHTML = `
            <div class="dujiangyan-controls">
                <h3>控制面板 (Control Panel)</h3>
                
                <div class="control-group">
                    <label>Season (季节):</label>
                    <select id="season-select">
                        <option value="dry">Dry Season (枯水期) - Winter</option>
                        <option value="wet">Normal (平水期) - Spring/Fall</option>
                        <option value="flood">Flood Season (洪水期) - Summer</option>
                    </select>
                </div>
                
                <div class="control-group">
                    <label>River Flow (河流流量): <span id="flow-value">1000</span> m³/s</label>
                    <input type="range" id="flow-slider" min="200" max="4000" value="1000" step="50">
                </div>
                
                <div class="control-group">
                    <label>Sediment Load (泥沙含量): <span id="sediment-value">30</span>%</label>
                    <input type="range" id="sediment-slider" min="0" max="100" value="30">
                </div>
                
                <div class="control-group">
                    <button id="play-pause-btn">▶ Start Simulation</button>
                    <button id="reset-btn">↺ Reset</button>
                </div>
                
                <div class="metrics-panel">
                    <h4>System Metrics (系统指标)</h4>
                    <div class="metric">
                        <span>Inner River (内江):</span>
                        <span id="inner-flow">0</span> m³/s
                        <div class="flow-bar inner-bar"></div>
                    </div>
                    <div class="metric">
                        <span>Outer River (外江):</span>
                        <span id="outer-flow">0</span> m³/s
                        <div class="flow-bar outer-bar"></div>
                    </div>
                    <div class="metric">
                        <span>Bottleneck (宝瓶口):</span>
                        <span id="bottleneck-flow">0</span> m³/s
                        <div class="flow-bar bottleneck-bar"></div>
                    </div>
                    <div class="metric">
                        <span>Irrigation Satisfied:</span>
                        <span id="irrigation-pct">0</span>%
                        <div class="satisfaction-bar"></div>
                    </div>
                    <div class="metric alert-metric">
                        <span>Flying Sand Weir:</span>
                        <span id="weir-status">Inactive</span>
                    </div>
                </div>
            </div>
        `;
        
        this.controls.innerHTML = controlsHTML;
        this.bindEvents();
    }
    
    bindEvents() {
        // Season selector
        document.getElementById('season-select').addEventListener('change', (e) => {
            this.state.season = e.target.value;
            this.autoAdjustForSeason();
            this.calculateFlows();
        });
        
        // Flow slider
        document.getElementById('flow-slider').addEventListener('input', (e) => {
            this.config.currentFlow = parseInt(e.target.value);
            document.getElementById('flow-value').textContent = e.target.value;
            this.calculateFlows();
        });
        
        // Sediment slider
        document.getElementById('sediment-slider').addEventListener('input', (e) => {
            this.state.sedimentLoad = parseInt(e.target.value) / 100;
            document.getElementById('sediment-value').textContent = e.target.value;
            this.calculateFlows();
        });
        
        // Play/Pause
        document.getElementById('play-pause-btn').addEventListener('click', () => {
            this.toggleAnimation();
        });
        
        // Reset
        document.getElementById('reset-btn').addEventListener('click', () => {
            this.reset();
        });
    }
    
    autoAdjustForSeason() {
        const seasonSettings = {
            dry: { flow: 500, sediment: 20 },
            wet: { flow: 1200, sediment: 40 },
            flood: { flow: 2800, sediment: 70 }
        };
        
        const settings = seasonSettings[this.state.season];
        this.config.currentFlow = settings.flow;
        this.state.sedimentLoad = settings.sediment / 100;
        
        // Update UI
        document.getElementById('flow-slider').value = settings.flow;
        document.getElementById('flow-value').textContent = settings.flow;
        document.getElementById('sediment-slider').value = settings.sediment;
        document.getElementById('sediment-value').textContent = settings.sediment;
    }
    
    calculateFlows() {
        const flow = this.config.currentFlow;
        const season = this.state.season;
        
        // The genius of Dujiangyan: automatic flow division based on water level
        // During low water: inner channel gets more (deeper channel)
        // During high water: outer channel gets more (surface flow)
        
        let innerRatio, outerRatio;
        
        if (season === 'dry' || flow < 800) {
            // Low water - inner river (deeper) captures more
            innerRatio = this.config.drySeasonInnerRatio;
            outerRatio = this.config.drySeasonOuterRatio;
        } else if (season === 'flood' || flow > 2000) {
            // Flood - outer river takes excess, protecting Chengdu
            innerRatio = this.config.floodSeasonInnerRatio;
            outerRatio = this.config.floodSeasonOuterRatio;
        } else {
            // Transitional - interpolate
            const t = (flow - 800) / (2000 - 800);
            innerRatio = this.lerp(this.config.drySeasonInnerRatio, 
                                   this.config.floodSeasonInnerRatio, t);
            outerRatio = 1 - innerRatio;
        }
        
        this.state.innerRiverFlow = flow * innerRatio;
        this.state.outerRiverFlow = flow * outerRatio;
        
        // Flying Sand Weir activation (sediment flushing)
        // When sediment load is high, the weir's design causes sediment
        // to be ejected to the outer river
        if (this.state.sedimentLoad > 0.5) {
            this.state.flyingSandWeirActive = true;
            // Sediment-laden water preferentially goes to outer river
            const sedimentAdjustment = (this.state.sedimentLoad - 0.5) * 0.2;
            this.state.innerRiverFlow *= (1 - sedimentAdjustment);
            this.state.outerRiverFlow = flow - this.state.innerRiverFlow;
        } else {
            this.state.flyingSandWeirActive = false;
        }
        
        // Bottleneck flow (宝瓶口) - limits maximum to irrigation system
        this.state.bottleneckFlow = Math.min(
            this.state.innerRiverFlow,
            this.config.bottleneckMaxFlow
        );
        
        // Calculate irrigation satisfaction
        const annualWaterNeeded = this.config.irrigationAreaHectares * 
                                   this.config.waterRequirementPerHa;
        const annualWaterAvailable = this.state.bottleneckFlow * 365 * 24 * 3600;
        this.state.irrigationSatisfied = Math.min(100, 
            (annualWaterAvailable / annualWaterNeeded) * 100);
        
        this.updateMetricsDisplay();
    }
    
    lerp(a, b, t) {
        return a + (b - a) * t;
    }
    
    updateMetricsDisplay() {
        document.getElementById('inner-flow').textContent = 
            Math.round(this.state.innerRiverFlow);
        document.getElementById('outer-flow').textContent = 
            Math.round(this.state.outerRiverFlow);
        document.getElementById('bottleneck-flow').textContent = 
            Math.round(this.state.bottleneckFlow);
        document.getElementById('irrigation-pct').textContent = 
            Math.round(this.state.irrigationSatisfied);
        document.getElementById('weir-status').textContent = 
            this.state.flyingSandWeirActive ? '🌊 ACTIVE (Flushing Sediment)' : 'Inactive';
        
        // Update flow bars
        const maxFlow = 2000;
        document.querySelector('.inner-bar').style.width = 
            `${(this.state.innerRiverFlow / maxFlow) * 100}%`;
        document.querySelector('.outer-bar').style.width = 
            `${(this.state.outerRiverFlow / maxFlow) * 100}%`;
        document.querySelector('.bottleneck-bar').style.width = 
            `${(this.state.bottleneckFlow / this.config.bottleneckMaxFlow) * 100}%`;
        document.querySelector('.satisfaction-bar').style.width = 
            `${this.state.irrigationSatisfied}%`;
    }
    
    createParticles() {
        // Create water particles for flow visualization
        this.state.particles = [];
        for (let i = 0; i < 200; i++) {
            this.state.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * 100,
                vx: 2 + Math.random() * 2,
                vy: 0,
                section: 'main',  // main, inner, outer, bottleneck
                size: 2 + Math.random() * 3,
                color: `rgba(30, 144, 255, ${0.5 + Math.random() * 0.5})`
            });
        }
        
        // Create sediment particles
        this.state.sedimentParticles = [];
        for (let i = 0; i < 50; i++) {
            this.state.sedimentParticles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * 100 + 50,
                vx: 1.5 + Math.random() * 1.5,
                vy: 0.5,
                size: 1 + Math.random() * 2,
                color: `rgba(139, 90, 43, ${0.3 + Math.random() * 0.4})`
            });
        }
    }
    
    render() {
        const ctx = this.ctx;
        const w = this.canvas.width;
        const h = this.canvas.height;
        
        // Clear canvas
        ctx.fillStyle = '#1a1a2e';
        ctx.fillRect(0, 0, w, h);
        
        // Draw system components
        this.drawMinRiver(ctx, w, h);
        this.drawFishMouth(ctx, w, h);
        this.drawInnerRiver(ctx, w, h);
        this.drawOuterRiver(ctx, w, h);
        this.drawFlyingSandWeir(ctx, w, h);
        this.drawBottleneck(ctx, w, h);
        this.drawIrrigationCanals(ctx, w, h);
        this.drawParticles(ctx);
        this.drawLabels(ctx, w, h);
        
        // Continue animation if running
        if (this.isRunning) {
            this.updateParticles();
            this.state.animationFrame++;
            requestAnimationFrame(() => this.render());
        }
    }
    
    drawMinRiver(ctx, w, h) {
        // Main Min River approaching the Fish Mouth
        ctx.fillStyle = '#1e90ff';
        ctx.globalAlpha = 0.8;
        
        // River width varies with flow
        const riverWidth = 80 + (this.config.currentFlow / 4000) * 60;
        
        ctx.beginPath();
        ctx.moveTo(0, h/2 - riverWidth/2);
        ctx.lineTo(w * 0.3, h/2 - riverWidth/2);
        ctx.lineTo(w * 0.3, h/2 + riverWidth/2);
        ctx.lineTo(0, h/2 + riverWidth/2);
        ctx.closePath();
        ctx.fill();
        
        // Flow direction arrows
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;
        ctx.globalAlpha = 0.6;
        for (let i = 0; i < 3; i++) {
            const x = 50 + i * 80;
            ctx.beginPath();
            ctx.moveTo(x, h/2);
            ctx.lineTo(x + 20, h/2 - 10);
            ctx.moveTo(x, h/2);
            ctx.lineTo(x + 20, h/2 + 10);
            ctx.stroke();
        }
        
        ctx.globalAlpha = 1;
    }
    
    drawFishMouth(ctx, w, h) {
        // The Fish Mouth (分水鱼嘴) - the central dividing structure
        const fmX = w * 0.35;
        const fmY = h / 2;
        
        // Draw the fish-shaped divider
        ctx.fillStyle = '#8b7355';
        ctx.beginPath();
        ctx.moveTo(fmX - 30, fmY);
        ctx.quadraticCurveTo(fmX, fmY - 25, fmX + 50, fmY);
        ctx.quadraticCurveTo(fmX, fmY + 25, fmX - 30, fmY);
        ctx.closePath();
        ctx.fill();
        
        // Stone texture
        ctx.strokeStyle = '#6b5344';
        ctx.lineWidth = 1;
        ctx.stroke();
        
        // Highlight
        ctx.fillStyle = '#a08060';
        ctx.beginPath();
        ctx.ellipse(fmX, fmY - 5, 15, 8, 0, 0, Math.PI * 2);
        ctx.fill();
    }
    
    drawInnerRiver(ctx, w, h) {
        // Inner River (内江) - goes to Chengdu Plain
        const flowRatio = this.state.innerRiverFlow / this.config.currentFlow;
        const riverWidth = 30 + flowRatio * 40;
        
        ctx.fillStyle = '#1e90ff';
        ctx.globalAlpha = 0.7 + flowRatio * 0.3;
        
        ctx.beginPath();
        ctx.moveTo(w * 0.4, h/2 - 40);
        ctx.quadraticCurveTo(w * 0.5, h/2 - 60, w * 0.6, h/2 - 80);
        ctx.lineTo(w * 0.6, h/2 - 80 + riverWidth);
        ctx.quadraticCurveTo(w * 0.5, h/2 - 60 + riverWidth, w * 0.4, h/2 - 40 + riverWidth);
        ctx.closePath();
        ctx.fill();
        
        ctx.globalAlpha = 1;
    }
    
    drawOuterRiver(ctx, w, h) {
        // Outer River (外江) - flood discharge
        const flowRatio = this.state.outerRiverFlow / this.config.currentFlow;
        const riverWidth = 30 + flowRatio * 50;
        
        ctx.fillStyle = '#1e90ff';
        ctx.globalAlpha = 0.7 + flowRatio * 0.3;
        
        ctx.beginPath();
        ctx.moveTo(w * 0.4, h/2 + 40);
        ctx.quadraticCurveTo(w * 0.5, h/2 + 70, w * 0.7, h/2 + 100);
        ctx.lineTo(w * 0.7, h/2 + 100 + riverWidth);
        ctx.quadraticCurveTo(w * 0.5, h/2 + 70 + riverWidth, w * 0.4, h/2 + 40 + riverWidth);
        ctx.closePath();
        ctx.fill();
        
        ctx.globalAlpha = 1;
    }
    
    drawFlyingSandWeir(ctx, w, h) {
        // Flying Sand Weir (飞沙堰) - sediment flushing spillway
        const weirX = w * 0.55;
        const weirY = h/2 - 50;
        
        // Weir structure
        ctx.fillStyle = this.state.flyingSandWeirActive ? '#ff6b6b' : '#8b7355';
        ctx.fillRect(weirX, weirY, 60, 15);
        
        // Overflow animation when active
        if (this.state.flyingSandWeirActive) {
            ctx.fillStyle = 'rgba(139, 90, 43, 0.6)';
            const overflow = Math.sin(this.state.animationFrame * 0.1) * 5 + 10;
            ctx.beginPath();
            ctx.moveTo(weirX, weirY + 15);
            ctx.quadraticCurveTo(weirX + 30, weirY + 15 + overflow, weirX + 60, weirY + 50);
            ctx.lineTo(weirX + 50, weirY + 50);
            ctx.quadraticCurveTo(weirX + 30, weirY + 15 + overflow - 5, weirX + 10, weirY + 15);
            ctx.closePath();
            ctx.fill();
        }
    }
    
    drawBottleneck(ctx, w, h) {
        // Bottleneck Channel (宝瓶口) - flow control point
        const bnX = w * 0.65;
        const bnY = h/2 - 90;
        
        // Cut through mountain (carved channel)
        ctx.fillStyle = '#4a4a4a';
        ctx.beginPath();
        ctx.moveTo(bnX - 10, bnY - 30);
        ctx.lineTo(bnX + 30, bnY - 30);
        ctx.lineTo(bnX + 30, bnY + 40);
        ctx.lineTo(bnX - 10, bnY + 40);
        ctx.closePath();
        ctx.fill();
        
        // Water through bottleneck
        const flowWidth = (this.state.bottleneckFlow / this.config.bottleneckMaxFlow) * 20;
        ctx.fillStyle = '#1e90ff';
        ctx.fillRect(bnX, bnY - 10, 20, flowWidth + 10);
        
        // Mountain sides
        ctx.fillStyle = '#5a5a5a';
        ctx.beginPath();
        ctx.moveTo(bnX - 40, bnY + 40);
        ctx.lineTo(bnX - 10, bnY - 30);
        ctx.lineTo(bnX - 10, bnY + 40);
        ctx.closePath();
        ctx.fill();
        
        ctx.beginPath();
        ctx.moveTo(bnX + 30, bnY - 30);
        ctx.lineTo(bnX + 60, bnY + 40);
        ctx.lineTo(bnX + 30, bnY + 40);
        ctx.closePath();
        ctx.fill();
    }
    
    drawIrrigationCanals(ctx, w, h) {
        // Chengdu Plain irrigation network
        ctx.strokeStyle = '#1e90ff';
        ctx.lineWidth = 2;
        ctx.globalAlpha = 0.5;
        
        const startX = w * 0.75;
        const startY = h/2 - 100;
        
        // Main canal
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(w - 20, startY - 50);
        ctx.stroke();
        
        // Branch canals
        for (let i = 0; i < 5; i++) {
            ctx.beginPath();
            ctx.moveTo(startX + i * 30, startY - i * 10);
            ctx.lineTo(startX + i * 30 + 40, startY - i * 10 - 30);
            ctx.stroke();
        }
        
        // Irrigated fields (green patches)
        ctx.fillStyle = '#228b22';
        ctx.globalAlpha = 0.3 * (this.state.irrigationSatisfied / 100);
        for (let i = 0; i < 8; i++) {
            ctx.fillRect(
                startX + 20 + (i % 4) * 40,
                startY - 80 + Math.floor(i / 4) * 35,
                30, 25
            );
        }
        
        ctx.globalAlpha = 1;
    }
    
    drawParticles(ctx) {
        // Water particles
        this.state.particles.forEach(p => {
            ctx.fillStyle = p.color;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
        });
        
        // Sediment particles (only visible if sediment load > 0.2)
        if (this.state.sedimentLoad > 0.2) {
            const visibleSediment = Math.floor(
                this.state.sedimentParticles.length * this.state.sedimentLoad
            );
            for (let i = 0; i < visibleSediment; i++) {
                const p = this.state.sedimentParticles[i];
                ctx.fillStyle = p.color;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }
    }
    
    drawLabels(ctx, w, h) {
        ctx.font = 'bold 14px Arial';
        ctx.fillStyle = '#ffffff';
        ctx.textAlign = 'center';
        
        // Component labels
        ctx.fillText('岷江 Min River', 100, h/2 - 60);
        ctx.fillText('分水鱼嘴 Fish Mouth', w * 0.35, h/2 - 50);
        ctx.fillText('内江 Inner River', w * 0.5, h/2 - 100);
        ctx.fillText('外江 Outer River', w * 0.55, h/2 + 130);
        ctx.fillText('飞沙堰 Flying Sand Weir', w * 0.55, h/2 - 70);
        ctx.fillText('宝瓶口 Bottleneck', w * 0.7, h/2 - 130);
        ctx.fillText('成都平原 Chengdu Plain', w * 0.85, h/2 - 80);
        
        // Flow percentages
        ctx.font = '12px Arial';
        ctx.fillStyle = '#ffff00';
        const innerPct = Math.round((this.state.innerRiverFlow / this.config.currentFlow) * 100);
        const outerPct = 100 - innerPct;
        ctx.fillText(`${innerPct}%`, w * 0.45, h/2 - 70);
        ctx.fillText(`${outerPct}%`, w * 0.45, h/2 + 80);
    }
    
    updateParticles() {
        const w = this.canvas.width;
        const h = this.canvas.height;
        const flowSpeed = this.config.currentFlow / 1000;
        
        this.state.particles.forEach(p => {
            // Move particle based on section
            p.x += p.vx * flowSpeed;
            p.y += p.vy;
            
            // Determine which section particle is in and adjust path
            if (p.x < w * 0.35) {
                // Main river section
                p.y = h/2 + (Math.random() - 0.5) * 60;
            } else if (p.x < w * 0.45) {
                // Fish mouth - split decision
                if (p.section === 'main') {
                    const innerRatio = this.state.innerRiverFlow / this.config.currentFlow;
                    p.section = Math.random() < innerRatio ? 'inner' : 'outer';
                }
            } else {
                // Follow assigned channel
                if (p.section === 'inner') {
                    p.y += (h/2 - 100 - p.y) * 0.05;
                } else {
                    p.y += (h/2 + 100 - p.y) * 0.05;
                }
            }
            
            // Reset particle when off screen
            if (p.x > w) {
                p.x = 0;
                p.y = h/2 + (Math.random() - 0.5) * 60;
                p.section = 'main';
            }
        });
        
        // Update sediment particles
        this.state.sedimentParticles.forEach(p => {
            p.x += p.vx * flowSpeed * 0.8;
            p.y += p.vy;
            
            // Sediment tends to go to outer river when weir is active
            if (p.x > w * 0.4 && this.state.flyingSandWeirActive) {
                p.y += 1;  // Push toward outer river
            }
            
            // Reset
            if (p.x > w || p.y > h) {
                p.x = Math.random() * w * 0.3;
                p.y = h/2 + (Math.random() - 0.5) * 40 + 30;
            }
        });
    }
    
    toggleAnimation() {
        this.isRunning = !this.isRunning;
        const btn = document.getElementById('play-pause-btn');
        btn.textContent = this.isRunning ? '⏸ Pause' : '▶ Start Simulation';
        
        if (this.isRunning) {
            this.render();
        }
    }
    
    reset() {
        this.state.season = 'dry';
        this.config.currentFlow = 1000;
        this.state.sedimentLoad = 0.3;
        this.isRunning = false;
        
        document.getElementById('season-select').value = 'dry';
        document.getElementById('flow-slider').value = 1000;
        document.getElementById('flow-value').textContent = '1000';
        document.getElementById('sediment-slider').value = 30;
        document.getElementById('sediment-value').textContent = '30';
        document.getElementById('play-pause-btn').textContent = '▶ Start Simulation';
        
        this.createParticles();
        this.calculateFlows();
        this.render();
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const simulator = new DujiangyanSimulator('dujiangyan-canvas', 'dujiangyan-controls');
});
```

---

## 1.2 Aztec Tenochtitlan Dike System Simulator

```javascript
/**
 * AZTEC TENOCHTITLAN DIKE SYSTEM SIMULATOR
 * Albarradón de Nezahualcóyotl • 1449 CE
 * 
 * Simulates the 16km dike that separated fresh and salt water
 * in Lake Texcoco, enabling Tenochtitlan to thrive
 */

class TenochtitlanDikeSimulator {
    constructor(canvasId, controlsId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.controls = document.getElementById(controlsId);
        
        this.config = {
            // Lake parameters
            lakeTexcocoSalinity: 8.5,      // g/L (brackish)
            freshwaterSpringSalinity: 0.3,  // g/L (fresh)
            targetDrinkingSalinity: 1.0,    // g/L (potable threshold)
            
            // Dike specifications
            dikeLength: 16000,              // meters
            dikeHeight: 4,                  // meters above lake level
            dikeWidth: 20,                  // meters at base
            numberOfSluices: 12,            // control gates
            
            // City water needs
            populationPeak: 200000,         // Tenochtitlan population
            waterPerPersonPerDay: 50,       // liters
            chinampasArea: 9000,            // hectares of floating gardens
            
            // Seasonal variation
            rainySeasonMonths: [6, 7, 8, 9, 10],  // June-October
            drySeasonInflow: 500000,        // m³/day
            rainySeasonInflow: 2000000,     // m³/day
        };
        
        this.state = {
            month: 1,
            sluiceOpenings: Array(12).fill(0.5),  // 0-1 for each sluice
            westernLakeLevel: 0.5,     // 0-1 normalized (fresh side)
            easternLakeLevel: 0.6,     // 0-1 normalized (salt side)
            westernSalinity: 0.5,      // g/L
            easternSalinity: 8.5,      // g/L
            floodRisk: 0,              // 0-100%
            waterQuality: 100,         // 0-100%
            chinampasHealth: 100,      // 0-100%
            dikeIntegrity: 100,        // 0-100%
            isAnimating: false,
            waveOffset: 0,
        };
        
        this.init();
    }
    
    init() {
        this.createControls();
        this.calculateSystemState();
        this.render();
    }
    
    createControls() {
        const controlsHTML = `
            <div class="tenochtitlan-controls">
                <h3>🏛️ Dike Control System</h3>
                
                <div class="control-group">
                    <label>Month (Meztli):</label>
                    <select id="month-select">
                        <option value="1">1 - Atlcahualo (Feb-Mar) Dry</option>
                        <option value="2">2 - Tlacaxipehualiztli (Mar-Apr) Dry</option>
                        <option value="3">3 - Tozoztontli (Apr-May) Dry</option>
                        <option value="4">4 - Huey Tozoztli (May-Jun) Transition</option>
                        <option value="5">5 - Toxcatl (Jun-Jul) Rainy</option>
                        <option value="6">6 - Etzalcualiztli (Jul-Aug) Rainy</option>
                        <option value="7">7 - Tecuilhuitontli (Aug-Sep) Rainy</option>
                        <option value="8">8 - Huey Tecuilhuitl (Sep-Oct) Rainy</option>
                        <option value="9">9 - Miccailhuitontli (Oct-Nov) Transition</option>
                        <option value="10">10 - Huey Miccailhuitl (Nov-Dec) Dry</option>
                    </select>
                </div>
                
                <div class="control-group">
                    <label>Master Sluice Control: <span id="sluice-value">50</span>%</label>
                    <input type="range" id="sluice-slider" min="0" max="100" value="50">
                    <small>Controls all 12 sluice gates simultaneously</small>
                </div>
                
                <div class="control-group">
                    <label>Spring Inflow Rate:</label>
                    <select id="spring-select">
                        <option value="low">Low (Drought)</option>
                        <option value="normal" selected>Normal</option>
                        <option value="high">High (Abundant)</option>
                    </select>
                </div>
                
                <div class="emergency-controls">
                    <h4>⚠️ Emergency Actions</h4>
                    <button id="close-all-btn">🚫 Close All Sluices</button>
                    <button id="open-all-btn">🌊 Open All Sluices</button>
                    <button id="repair-btn">🔧 Repair Dike</button>
                </div>
                
                <div class="metrics-panel">
                    <h4>System Status</h4>
                    
                    <div class="metric">
                        <span>Western Lake (Fresh):</span>
                        <span id="west-level">50</span>% full
                        <div class="level-bar west-bar"></div>
                    </div>
                    
                    <div class="metric">
                        <span>Eastern Lake (Salt):</span>
                        <span id="east-level">60</span>% full
                        <div class="level-bar east-bar"></div>
                    </div>
                    
                    <div class="metric">
                        <span>Water Salinity:</span>
                        <span id="salinity-value">0.5</span> g/L
                        <div class="salinity-indicator"></div>
                    </div>
                    
                    <div class="metric">
                        <span>Flood Risk:</span>
                        <span id="flood-risk">0</span>%
                        <div class="risk-bar"></div>
                    </div>
                    
                    <div class="metric">
                        <span>Water Quality:</span>
                        <span id="water-quality">100</span>%
                        <div class="quality-bar"></div>
                    </div>
                    
                    <div class="metric">
                        <span>Chinampas Health:</span>
                        <span id="chinampa-health">100</span>%
                        <div class="chinampa-bar"></div>
                    </div>
                    
                    <div class="metric">
                        <span>Dike Integrity:</span>
                        <span id="dike-integrity">100</span>%
                        <div class="integrity-bar"></div>
                    </div>
                </div>
                
                <div class="advisory-panel">
                    <h4>📜 Royal Advisory</h4>
                    <p id="advisory-text">System operating normally.</p>
                </div>
                
                <button id="animate-year-btn">▶ Simulate Full Year</button>
            </div>
        `;
        
        this.controls.innerHTML = controlsHTML;
        this.bindEvents();
    }
    
    bindEvents() {
        document.getElementById('month-select').addEventListener('change', (e) => {
            this.state.month = parseInt(e.target.value);
            this.calculateSystemState();
            this.render();
        });
        
        document.getElementById('sluice-slider').addEventListener('input', (e) => {
            const value = parseInt(e.target.value) / 100;
            this.state.sluiceOpenings = Array(12).fill(value);
            document.getElementById('sluice-value').textContent = e.target.value;
            this.calculateSystemState();
            this.render();
        });
        
        document.getElementById('spring-select').addEventListener('change', () => {
            this.calculateSystemState();
            this.render();
        });
        
        document.getElementById('close-all-btn').addEventListener('click', () => {
            this.state.sluiceOpenings = Array(12).fill(0);
            document.getElementById('sluice-slider').value = 0;
            document.getElementById('sluice-value').textContent = '0';
            this.calculateSystemState();
            this.render();
        });
        
        document.getElementById('open-all-btn').addEventListener('click', () => {
            this.state.sluiceOpenings = Array(12).fill(1);
            document.getElementById('sluice-slider').value = 100;
            document.getElementById('sluice-value').textContent = '100';
            this.calculateSystemState();
            this.render();
        });
        
        document.getElementById('repair-btn').addEventListener('click', () => {
            this.state.dikeIntegrity = Math.min(100, this.state.dikeIntegrity + 20);
            this.calculateSystemState();
            this.render();
        });
        
        document.getElementById('animate-year-btn').addEventListener('click', () => {
            this.animateYear();
        });
    }
    
    isRainySeason() {
        return this.config.rainySeasonMonths.includes(this.state.month);
    }
    
    calculateSystemState() {
        const isRainy = this.isRainySeason();
        const springSelect = document.getElementById('spring-select');
        const springRate = springSelect ? springSelect.value : 'normal';
        
        // Calculate inflow based on season and springs
        let baseInflow = isRainy ? this.config.rainySeasonInflow : this.config.drySeasonInflow;
        const springMultiplier = { low: 0.5, normal: 1.0, high: 1.5 }[springRate];
        const totalInflow = baseInflow * springMultiplier;
        
        // Calculate outflow through sluices
        const avgSluiceOpening = this.state.sluiceOpenings.reduce((a, b) => a + b, 0) / 12;
        const outflowCapacity = avgSluiceOpening * 1500000;  // m³/day max
        
        // Water balance in western (fresh) lake
        const netFlow = totalInflow - outflowCapacity;
        this.state.westernLakeLevel += netFlow / 10000000;  // Normalize
        this.state.westernLakeLevel = Math.max(0.1, Math.min(1.0, this.state.westernLakeLevel));
        
        // Salinity calculation
        // If sluices are open and eastern lake water mixes, salinity increases
        const mixingRate = avgSluiceOpening * 0.1;
        this.state.westernSalinity = this.lerp(
            this.config.freshwaterSpringSalinity,
            this.config.lakeTexcocoSalinity,
            mixingRate
        );
        
        // Flood risk
        if (this.state.westernLakeLevel > 0.85) {
            this.state.floodRisk = (this.state.westernLakeLevel - 0.85) * 666;  // 0-100%
        } else {
            this.state.floodRisk = 0;
        }
        
        // Water quality (inverse of salinity for drinking)
        this.state.waterQuality = Math.max(0, 100 - (this.state.westernSalinity / this.config.targetDrinkingSalinity) * 50);
        
        // Chinampas health (need fresh water, but not too much flooding)
        if (this.state.westernSalinity > 2.0) {
            this.state.chinampasHealth = Math.max(0, this.state.chinampasHealth - 5);
        } else if (this.state.floodRisk > 50) {
            this.state.chinampasHealth = Math.max(0, this.state.chinampasHealth - 3);
        } else if (this.state.westernLakeLevel < 0.3) {
            this.state.chinampasHealth = Math.max(0, this.state.chinampasHealth - 2);
        } else {
            this.state.chinampasHealth = Math.min(100, this.state.chinampasHealth + 1);
        }
        
        // Dike integrity (stressed by high water differential)
        const levelDifferential = Math.abs(this.state.westernLakeLevel - this.state.easternLakeLevel);
        if (levelDifferential > 0.3 || this.state.floodRisk > 30) {
            this.state.dikeIntegrity = Math.max(0, this.state.dikeIntegrity - 0.5);
        }
        
        // Generate advisory
        this.generateAdvisory();
        
        // Update display
        this.updateMetrics();
    }
    
    lerp(a, b, t) {
        return a + (b - a) * Math.min(1, Math.max(0, t));
    }
    
    generateAdvisory() {
        let advisory = '';
        
        if (this.state.floodRisk > 70) {
            advisory = '🚨 CRITICAL: Flood imminent! Open all sluices immediately!';
        } else if (this.state.floodRisk > 30) {
            advisory = '⚠️ WARNING: Water levels rising. Increase sluice openings.';
        } else if (this.state.westernSalinity > 1.5) {
            advisory = '⚠️ WARNING: Salinity too high. Close sluices to reduce mixing.';
        } else if (this.state.chinampasHealth < 50) {
            advisory = '⚠️ ALERT: Chinampas suffering. Check water levels and salinity.';
        } else if (this.state.dikeIntegrity < 30) {
            advisory = '🔧 URGENT: Dike requires immediate repair!';
        } else if (this.isRainySeason()) {
            advisory = '🌧️ Rainy season: Monitor water levels closely.';
        } else {
            advisory = '✅ System operating normally. Tlaloc smiles upon us.';
        }
        
        document.getElementById('advisory-text').textContent = advisory;
    }
    
    updateMetrics() {
        document.getElementById('west-level').textContent = Math.round(this.state.westernLakeLevel * 100);
        document.getElementById('east-level').textContent = Math.round(this.state.easternLakeLevel * 100);
        document.getElementById('salinity-value').textContent = this.state.westernSalinity.toFixed(1);
        document.getElementById('flood-risk').textContent = Math.round(this.state.floodRisk);
        document.getElementById('water-quality').textContent = Math.round(this.state.waterQuality);
        document.getElementById('chinampa-health').textContent = Math.round(this.state.chinampasHealth);
        document.getElementById('dike-integrity').textContent = Math.round(this.state.dikeIntegrity);
        
        // Update bars
        document.querySelector('.west-bar').style.width = `${this.state.westernLakeLevel * 100}%`;
        document.querySelector('.east-bar').style.width = `${this.state.easternLakeLevel * 100}%`;
        document.querySelector('.risk-bar').style.width = `${this.state.floodRisk}%`;
        document.querySelector('.risk-bar').style.backgroundColor = 
            this.state.floodRisk > 50 ? '#ff4444' : '#ffaa00';
        document.querySelector('.quality-bar').style.width = `${this.state.waterQuality}%`;
        document.querySelector('.chinampa-bar').style.width = `${this.state.chinampasHealth}%`;
        document.querySelector('.integrity-bar').style.width = `${this.state.dikeIntegrity}%`;
    }
    
    render() {
        const ctx = this.ctx;
        const w = this.canvas.width;
        const h = this.canvas.height;
        
        // Clear
        ctx.fillStyle = '#0a1628';
        ctx.fillRect(0, 0, w, h);
        
        this.drawLakes(ctx, w, h);
        this.drawDike(ctx, w, h);
        this.drawTenochtitlan(ctx, w, h);
        this.drawChinampas(ctx, w, h);
        this.drawSluices(ctx, w, h);
        this.drawLabels(ctx, w, h);
        
        if (this.state.isAnimating) {
            this.state.waveOffset += 0.05;
            requestAnimationFrame(() => this.render());
        }
    }
    
    drawLakes(ctx, w, h) {
        // Eastern Lake (Salt - Lake Texcoco)
        const eastLevel = this.state.easternLakeLevel;
        ctx.fillStyle = '#2d5a7b';  // Darker blue for salt water
        ctx.globalAlpha = 0.8;
        ctx.fillRect(w * 0.6, h * (1 - eastLevel * 0.7), w * 0.4, h * eastLevel * 0.7);
        
        // Wave effect for eastern lake
        ctx.beginPath();
        ctx.moveTo(w * 0.6, h * (1 - eastLevel * 0.7));
        for (let x = w * 0.6; x < w; x += 10) {
            const waveY = Math.sin((x + this.state.waveOffset * 50) * 0.05) * 3;
            ctx.lineTo(x, h * (1 - eastLevel * 0.7) + waveY);
        }
        ctx.lineTo(w, h);
        ctx.lineTo(w * 0.6, h);
        ctx.closePath();
        ctx.fill();
        
        // Western Lake (Fresh)
        const westLevel = this.state.westernLakeLevel;
        const salinityColor = this.state.westernSalinity < 1.0 ? '#4a90d9' : '#3d7a9e';
        ctx.fillStyle = salinityColor;
        ctx.fillRect(0, h * (1 - westLevel * 0.7), w * 0.4, h * westLevel * 0.7);
        
        // Wave effect for western lake
        ctx.beginPath();
        ctx.moveTo(0, h * (1 - westLevel * 0.7));
        for (let x = 0; x < w * 0.4; x += 10) {
            const waveY = Math.sin((x + this.state.waveOffset * 50) * 0.05) * 3;
            ctx.lineTo(x, h * (1 - westLevel * 0.7) + waveY);
        }
        ctx.lineTo(w * 0.4, h);
        ctx.lineTo(0, h);
        ctx.closePath();
        ctx.fill();
        
        ctx.globalAlpha = 1;
    }
    
    drawDike(ctx, w, h) {
        // Main dike structure
        const dikeX = w * 0.4;
        const dikeWidth = w * 0.2;
        
        // Dike color based on integrity
        const integrityColor = this.state.dikeIntegrity > 70 ? '#8b7355' : 
                               this.state.dikeIntegrity > 30 ? '#9b8365' : '#ab6355';
        
        ctx.fillStyle = integrityColor;
        ctx.fillRect(dikeX, h * 0.1, dikeWidth, h * 0.8);
        
        // Stone texture
        ctx.strokeStyle = '#6b5344';
        ctx.lineWidth = 1;
        for (let y = h * 0.1; y < h * 0.9; y += 15) {
            ctx.beginPath();
            ctx.moveTo(dikeX, y);
            ctx.lineTo(dikeX + dikeWidth, y);
            ctx.stroke();
        }
        for (let x = dikeX; x < dikeX + dikeWidth; x += 20) {
            ctx.beginPath();
            ctx.moveTo(x, h * 0.1);
            ctx.lineTo(x, h * 0.9);
            ctx.stroke();
        }
        
        // Cracks if integrity is low
        if (this.state.dikeIntegrity < 50) {
            ctx.strokeStyle = '#ff6b6b';
            ctx.lineWidth = 2;
            const numCracks = Math.floor((50 - this.state.dikeIntegrity) / 10);
            for (let i = 0; i < numCracks; i++) {
                const crackY = h * 0.2 + i * (h * 0.6 / numCracks);
                ctx.beginPath();
                ctx.moveTo(dikeX + Math.random() * dikeWidth * 0.3, crackY);
                ctx.lineTo(dikeX + dikeWidth * 0.3 + Math.random() * dikeWidth * 0.4, crackY + 20);
                ctx.stroke();
            }
        }
    }
    
    drawTenochtitlan(ctx, w, h) {
        // Island city center
        const cityX = w * 0.15;
        const cityY = h * 0.35;
        
        // Main temple (Templo Mayor)
        ctx.fillStyle = '#d4a574';
        ctx.beginPath();
        ctx.moveTo(cityX, cityY + 40);
        ctx.lineTo(cityX + 15, cityY);
        ctx.lineTo(cityX + 30, cityY);
        ctx.lineTo(cityX + 45, cityY + 40);
        ctx.closePath();
        ctx.fill();
        
        // Temple steps
        ctx.strokeStyle = '#8b6914';
        ctx.lineWidth = 1;
        for (let i = 0; i < 5; i++) {
            ctx.beginPath();
            ctx.moveTo(cityX + i * 3, cityY + 40 - i * 8);
            ctx.lineTo(cityX + 45 - i * 3, cityY + 40 - i * 8);
            ctx.stroke();
        }
        
        // Twin temples at top
        ctx.fillStyle = '#c41e3a';
        ctx.fillRect(cityX + 10, cityY - 10, 10, 10);
        ctx.fillStyle = '#1e90ff';
        ctx.fillRect(cityX + 25, cityY - 10, 10, 10);
        
        // City buildings
        ctx.fillStyle = '#d4a574';
        for (let i = 0; i < 8; i++) {
            const bx = cityX - 30 + (i % 4) * 25;
            const by = cityY + 50 + Math.floor(i / 4) * 20;
            ctx.fillRect(bx, by, 20, 15);
        }
        
        // Causeways
        ctx.fillStyle = '#a08060';
        ctx.fillRect(0, h * 0.5, w * 0.08, 10);  // West causeway
        ctx.fillRect(cityX + 45, cityY + 20, w * 0.15, 8);  // East causeway
    }
    
    drawChinampas(ctx, w, h) {
        // Floating gardens
        const healthAlpha = this.state.chinampasHealth / 100;
        
        ctx.fillStyle = `rgba(34, 139, 34, ${healthAlpha * 0.8})`;
        
        // Multiple chinampa plots
        const chinampaPositions = [
            { x: w * 0.02, y: h * 0.6 },
            { x: w * 0.08, y: h * 0.65 },
            { x: w * 0.05, y: h * 0.75 },
            { x: w * 0.12, y: h * 0.7 },
            { x: w * 0.25, y: h * 0.55 },
            { x: w * 0.3, y: h * 0.6 },
            { x: w * 0.28, y: h * 0.7 },
            { x: w * 0.22, y: h * 0.75 },
        ];
        
        chinampaPositions.forEach(pos => {
            // Rectangular floating garden
            ctx.fillRect(pos.x, pos.y, 25, 15);
            
            // Willow trees at corners
            ctx.fillStyle = `rgba(107, 142, 35, ${healthAlpha})`;
            ctx.beginPath();
            ctx.arc(pos.x, pos.y, 5, 0, Math.PI * 2);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(pos.x + 25, pos.y, 5, 0, Math.PI * 2);
            ctx.fill();
            
            ctx.fillStyle = `rgba(34, 139, 34, ${healthAlpha * 0.8})`;
        });
    }
    
    drawSluices(ctx, w, h) {
        const dikeX = w * 0.4;
        const dikeWidth = w * 0.2;
        const avgOpening = this.state.sluiceOpenings.reduce((a, b) => a + b, 0) / 12;
        
        // Draw 12 sluice gates along the dike
        for (let i = 0; i < 12; i++) {
            const sluiceY = h * 0.15 + i * (h * 0.7 / 12);
            const opening = this.state.sluiceOpenings[i];
            
            // Sluice frame
            ctx.fillStyle = '#4a4a4a';
            ctx.fillRect(dikeX + dikeWidth/2 - 10, sluiceY, 20, 12);
            
            // Gate (position indicates opening)
            ctx.fillStyle = opening > 0.5 ? '#228b22' : '#8b4513';
            const gateHeight = 10 * (1 - opening);
            ctx.fillRect(dikeX + dikeWidth/2 - 8, sluiceY + 1, 16, gateHeight);
            
            // Water flow through open sluices
            if (opening > 0.2) {
                ctx.fillStyle = `rgba(30, 144, 255, ${opening * 0.6})`;
                const flowWidth = opening * 15;
                ctx.fillRect(dikeX + dikeWidth/2 - flowWidth/2, sluiceY + 2, flowWidth, 8);
            }
        }
    }
    
    drawLabels(ctx, w, h) {
        ctx.font = 'bold 14px Arial';
        ctx.fillStyle = '#ffffff';
        ctx.textAlign = 'center';
        
        // Lake labels
        ctx.fillText('Lake Xochimilco', w * 0.2, h * 0.15);
        ctx.fillText('(Fresh Water)', w * 0.2, h * 0.18);
        ctx.fillText('Lake Texcoco', w * 0.8, h * 0.15);
        ctx.fillText('(Salt Water)', w * 0.8, h * 0.18);
        
        // Dike label
        ctx.save();
        ctx.translate(w * 0.5, h * 0.5);
        ctx.rotate(-Math.PI / 2);
        ctx.fillText('Albarradón de Nezahualcóyotl', 0, 0);
        ctx.restore();
        
        // City label
        ctx.fillText('TENOCHTITLAN', w * 0.17, h * 0.28);
        
        // Chinampas label
        ctx.font = '11px Arial';
        ctx.fillText('Chinampas', w * 0.15, h * 0.85);
        ctx.fillText('(Floating Gardens)', w * 0.15, h * 0.88);
    }
    
    animateYear() {
        this.state.isAnimating = true;
        let month = 1;
        
        const advanceMonth = () => {
            this.state.month = month;
            document.getElementById('month-select').value = month;
            this.calculateSystemState();
            this.render();
            
            month++;
            if (month <= 10) {
                setTimeout(advanceMonth, 1000);  // 1 second per month
            } else {
                this.state.isAnimating = false;
            }
        };
        
        advanceMonth();
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    const simulator = new TenochtitlanDikeSimulator('tenochtitlan-canvas', 'tenochtitlan-controls');
});
```

---

## 1.3 Roman Castellum Divisorium (Distribution Castle) Simulator

```javascript
/**
 * ROMAN CASTELLUM DIVISORIUM SIMULATOR
 * Water Distribution Castle • 1st Century CE
 * 
 * Simulates the sophisticated water distribution system that served
 * Roman cities, dividing aqueduct water to different user classes
 */

class CastellumDivisoriumSimulator {
    constructor(canvasId, controlsId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.controls = document.getElementById(controlsId);
        
        this.config = {
            // Aqueduct supply (based on Aqua Claudia)
            maxAqueductFlow: 185000,      // m³/day (quinaria units)
            normalAqueductFlow: 150000,    // m³/day
            
            // Distribution priorities (by Roman law)
            priorities: {
                imperial: { share: 0.15, minGuaranteed: 20000 },
                public: { share: 0.45, minGuaranteed: 50000 },   // Baths, fountains
                private: { share: 0.40, minGuaranteed: 30000 },  // Wealthy citizens
            },
            
            // Pipe sizes (in quinaria - Roman standard unit)
            pipeSizes: {
                quinaria: 0.48,      // ~0.48 L/s flow capacity
                senaria: 0.69,
                septenaria: 0.81,
                octonaria: 0.95,
                denaria: 1.18,
                vicenaria: 2.36,
                centenaria: 11.8,
            },
            
            // Consumer types
            consumers: {
                imperialPalace: { demand: 15000, priority: 1 },
                publicBaths: { demand: 40000, priority: 2 },
                publicFountains: { demand: 25000, priority: 2 },
                privateBaths: { demand: 20000, priority: 3 },
                gardens: { demand: 15000, priority: 3 },
                workshops: { demand: 10000, priority: 3 },
            }
        };
        
        this.state = {
            aqueductFlow: 150000,
            valveSettings: {
                imperial: 1.0,
                public: 1.0,
                private: 1.0,
            },
            distributedFlow: {
                imperial: 0,
                public: 0,
                private: 0,
            },
            overflow: 0,
            isAnimating: false,
            waterLevel: 0.7,
            particleGroups: {
                imperial: [],
                public: [],
                private: [],
            }
        };
        
        this.init();
    }
    
    init() {
        this.createControls();
        this.createParticles();
        this.calculateDistribution();
        this.render();
    }
    
    createControls() {
        const controlsHTML = `
            <div class="castellum-controls">
                <h3>⚱️ Castellum Divisorium Control</h3>
                
                <div class="control-group">
                    <label>Aqueduct Supply: <span id="supply-value">150,000</span> m³/day</label>
                    <input type="range" id="supply-slider" min="50000" max="200000" value="150000" step="5000">
                    <small>Seasonal variation in spring sources</small>
                </div>
                
                <div class="valve-controls">
                    <h4>🔧 Valve Controls (Epitonium)</h4>
                    
                    <div class="control-group">
                        <label>🏛️ Imperial Supply: <span id="imperial-pct">100</span>%</label>
                        <input type="range" id="imperial-valve" min="0" max="100" value="100">
                        <span class="pipe-label">Via Centenaria pipes</span>
                    </div>
                    
                    <div class="control-group">
                        <label>🏺 Public Supply: <span id="public-pct">100</span>%</label>
                        <input type="range" id="public-valve" min="0" max="100" value="100">
                        <span class="pipe-label">Via Vicenaria pipes</span>
                    </div>
                    
                    <div class="control-group">
                        <label>🏠 Private Supply: <span id="private-pct">100</span>%</label>
                        <input type="range" id="private-valve" min="0" max="100" value="100">
                        <span class="pipe-label">Via Quinaria pipes</span>
                    </div>
                </div>
                
                <div class="emergency-controls">
                    <button id="drought-btn">☀️ Simulate Drought</button>
                    <button id="normal-btn">💧 Normal Supply</button>
                    <button id="abundant-btn">🌊 Abundant Supply</button>
                </div>
                
                <div class="metrics-panel">
                    <h4>Distribution Status</h4>
                    
                    <div class="metric imperial-metric">
                        <span>🏛️ Imperial:</span>
                        <span id="imperial-flow">0</span> m³/day
                        <div class="flow-bar imperial-bar"></div>
                        <span class="status" id="imperial-status">✓</span>
                    </div>
                    
                    <div class="metric public-metric">
                        <span>🏺 Public:</span>
                        <span id="public-flow">0</span> m³/day
                        <div class="flow-bar public-bar"></div>
                        <span class="status" id="public-status">✓</span>
                    </div>
                    
                    <div class="metric private-metric">
                        <span>🏠 Private:</span>
                        <span id="private-flow">0</span> m³/day
                        <div class="flow-bar private-bar"></div>
                        <span class="status" id="private-status">✓</span>
                    </div>
                    
                    <div class="metric overflow-metric">
                        <span>🌊 Overflow to Cloaca:</span>
                        <span id="overflow-flow">0</span> m³/day
                    </div>
                    
                    <div class="metric basin-metric">
                        <span>Basin Level:</span>
                        <span id="basin-level">70</span>%
                        <div class="basin-indicator"></div>
                    </div>
                </div>
                
                <div class="law-panel">
                    <h4>📜 Roman Water Law (Lex Aquaria)</h4>
                    <p id="law-text">All supplies adequate. Citizens satisfied.</p>
                </div>
                
                <button id="animate-btn">▶ Start Flow Animation</button>
            </div>
        `;
        
        this.controls.innerHTML = controlsHTML;
        this.bindEvents();
    }
    
    bindEvents() {
        document.getElementById('supply-slider').addEventListener('input', (e) => {
            this.state.aqueductFlow = parseInt(e.target.value);
            document.getElementById('supply-value').textContent = 
                parseInt(e.target.value).toLocaleString();
            this.calculateDistribution();
            this.render();
        });
        
        ['imperial', 'public', 'private'].forEach(type => {
            document.getElementById(`${type}-valve`).addEventListener('input', (e) => {
                this.state.valveSettings[type] = parseInt(e.target.value) / 100;
                document.getElementById(`${type}-pct`).textContent = e.target.value;
                this.calculateDistribution();
                this.render();
            });
        });
        
        document.getElementById('drought-btn').addEventListener('click', () => {
            this.state.aqueductFlow = 80000;
            document.getElementById('supply-slider').value = 80000;
            document.getElementById('supply-value').textContent = '80,000';
            this.calculateDistribution();
            this.render();
        });
        
        document.getElementById('normal-btn').addEventListener('click', () => {
            this.state.aqueductFlow = 150000;
            document.getElementById('supply-slider').value = 150000;
            document.getElementById('supply-value').textContent = '150,000';
            this.calculateDistribution();
            this.render();
        });
        
        document.getElementById('abundant-btn').addEventListener('click', () => {
            this.state.aqueductFlow = 190000;
            document.getElementById('supply-slider').value = 190000;
            document.getElementById('supply-value').textContent = '190,000';
            this.calculateDistribution();
            this.render();
        });
        
        document.getElementById('animate-btn').addEventListener('click', () => {
            this.toggleAnimation();
        });
    }
    
    calculateDistribution() {
        const totalSupply = this.state.aqueductFlow;
        const priorities = this.config.priorities;
        const valves = this.state.valveSettings;
        
        // Calculate available supply for each category based on valve settings
        let imperialDemand = totalSupply * priorities.imperial.share * valves.imperial;
        let publicDemand = totalSupply * priorities.public.share * valves.public;
        let privateDemand = totalSupply * priorities.private.share * valves.private;
        
        // Roman priority system: during shortage, cut private first, then public
        if (totalSupply < 100000) {
            // Drought conditions - enforce minimums
            const shortage = 150000 - totalSupply;
            
            // Cut private first
            privateDemand = Math.max(
                priorities.private.minGuaranteed * 0.5,
                privateDemand - shortage * 0.6
            );
            
            // Then public if necessary
            const remainingShortage = Math.max(0, shortage * 0.4);
            publicDemand = Math.max(
                priorities.public.minGuaranteed,
                publicDemand - remainingShortage
            );
            
            // Imperial always gets priority
            imperialDemand = Math.max(priorities.imperial.minGuaranteed, imperialDemand);
        }
        
        // Apply valve restrictions
        this.state.distributedFlow.imperial = imperialDemand;
        this.state.distributedFlow.public = publicDemand;
        this.state.distributedFlow.private = privateDemand;
        
        // Calculate overflow (excess goes to Cloaca Maxima)
        const totalDistributed = imperialDemand + publicDemand + privateDemand;
        this.state.overflow = Math.max(0, totalSupply - totalDistributed);
        
        // Update basin level
        this.state.waterLevel = Math.min(1, totalSupply / this.config.maxAqueductFlow);
        
        this.updateMetrics();
        this.generateLawText();
    }
    
    updateMetrics() {
        const dist = this.state.distributedFlow;
        const priorities = this.config.priorities;
        
        document.getElementById('imperial-flow').textContent = 
            Math.round(dist.imperial).toLocaleString();
        document.getElementById('public-flow').textContent = 
            Math.round(dist.public).toLocaleString();
        document.getElementById('private-flow').textContent = 
            Math.round(dist.private).toLocaleString();
        document.getElementById('overflow-flow').textContent = 
            Math.round(this.state.overflow).toLocaleString();
        document.getElementById('basin-level').textContent = 
            Math.round(this.state.waterLevel * 100);
        
        // Update bars
        const maxFlow = 80000;
        document.querySelector('.imperial-bar').style.width = 
            `${(dist.imperial / maxFlow) * 100}%`;
        document.querySelector('.public-bar').style.width = 
            `${(dist.public / maxFlow) * 100}%`;
        document.querySelector('.private-bar').style.width = 
            `${(dist.private / maxFlow) * 100}%`;
        
        // Update status indicators
        document.getElementById('imperial-status').textContent = 
            dist.imperial >= priorities.imperial.minGuaranteed ? '✓' : '⚠️';
        document.getElementById('public-status').textContent = 
            dist.public >= priorities.public.minGuaranteed ? '✓' : '⚠️';
        document.getElementById('private-status').textContent = 
            dist.private >= priorities.private.minGuaranteed ? '✓' : '⚠️';
    }
    
    generateLawText() {
        const dist = this.state.distributedFlow;
        const priorities = this.config.priorities;
        let text = '';
        
        if (dist.private < priorities.private.minGuaranteed * 0.5) {
            text = '⚠️ EDICT: Private water rations in effect. Public fountains remain open.';
        } else if (dist.public < priorities.public.minGuaranteed) {
            text = '🚨 CRISIS: Public baths operating reduced hours. Seek water at fountains.';
        } else if (this.state.overflow > 50000) {
            text = '💧 ABUNDANCE: Excess water cleaning the streets via Cloaca Maxima.';
        } else {
            text = '✅ Aqua publica flows freely. The Curator Aquarum is pleased.';
        }
        
        document.getElementById('law-text').textContent = text;
    }
    
    createParticles() {
        ['imperial', 'public', 'private'].forEach(type => {
            this.state.particleGroups[type] = [];
            for (let i = 0; i < 30; i++) {
                this.state.particleGroups[type].push({
                    x: Math.random() * 100,
                    y: 0,
                    speed: 1 + Math.random(),
                    size: 2 + Math.random() * 2,
                });
            }
        });
    }
    
    render() {
        const ctx = this.ctx;
        const w = this.canvas.width;
        const h = this.canvas.height;
        
        // Clear
        ctx.fillStyle = '#1a1a2e';
        ctx.fillRect(0, 0, w, h);
        
        this.drawAqueduct(ctx, w, h);
        this.drawCastellum(ctx, w, h);
        this.drawDistributionPipes(ctx, w, h);
        this.drawConsumers(ctx, w, h);
        this.drawParticles(ctx, w, h);
        this.drawLabels(ctx, w, h);
        
        if (this.state.isAnimating) {
            this.updateParticles();
            requestAnimationFrame(() => this.render());
        }
    }
    
    drawAqueduct(ctx, w, h) {
        // Incoming aqueduct channel
        ctx.fillStyle = '#8b7355';
        
        // Aqueduct structure (arched)
        ctx.beginPath();
        ctx.moveTo(0, h * 0.2);
        ctx.lineTo(w * 0.35, h * 0.2);
        ctx.lineTo(w * 0.35, h * 0.35);
        ctx.lineTo(0, h * 0.35);
        ctx.closePath();
        ctx.fill();
        
        // Water channel
        const waterHeight = this.state.waterLevel * 0.1 * h;
        ctx.fillStyle = '#1e90ff';
        ctx.globalAlpha = 0.8;
        ctx.fillRect(0, h * 0.22, w * 0.35, waterHeight);
        ctx.globalAlpha = 1;
        
        // Arches
        ctx.strokeStyle = '#6b5344';
        ctx.lineWidth = 3;
        for (let x = 30; x < w * 0.35; x += 60) {
            ctx.beginPath();
            ctx.arc(x, h * 0.35, 20, Math.PI, 0);
            ctx.stroke();
        }
    }
    
    drawCastellum(ctx, w, h) {
        // Main distribution basin
        const cx = w * 0.5;
        const cy = h * 0.3;
        const radius = 60;
        
        // Circular basin structure
        ctx.fillStyle = '#a08060';
        ctx.beginPath();
        ctx.arc(cx, cy, radius + 10, 0, Math.PI * 2);
        ctx.fill();
        
        // Inner basin (water)
        ctx.fillStyle = '#1e90ff';
        ctx.globalAlpha = 0.9;
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.fill();
        
        // Water level indicator
        const levelHeight = this.state.waterLevel * radius * 1.5;
        ctx.fillStyle = '#0066cc';
        ctx.globalAlpha = 0.5;
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
        
        // Outlet holes (three)
        const outletAngles = [-Math.PI/6, Math.PI/2, Math.PI + Math.PI/6];
        const outletColors = ['#ffd700', '#c0c0c0', '#cd7f32'];  // Gold, Silver, Bronze
        
        outletAngles.forEach((angle, i) => {
            const ox = cx + Math.cos(angle) * radius;
            const oy = cy + Math.sin(angle) * radius;
            
            ctx.fillStyle = outletColors[i];
            ctx.beginPath();
            ctx.arc(ox, oy, 8, 0, Math.PI * 2);
            ctx.fill();
            
            ctx.fillStyle = '#1e90ff';
            ctx.globalAlpha = this.state.valveSettings[['imperial', 'private', 'public'][i]];
            ctx.beginPath();
            ctx.arc(ox, oy, 5, 0, Math.PI * 2);
            ctx.fill();
            ctx.globalAlpha = 1;
        });
        
        // Overflow drain to Cloaca
        if (this.state.overflow > 0) {
            ctx.fillStyle = 'rgba(30, 144, 255, 0.5)';
            ctx.beginPath();
            ctx.moveTo(cx, cy + radius);
            ctx.lineTo(cx - 10, h * 0.9);
            ctx.lineTo(cx + 10, h * 0.9);
            ctx.closePath();
            ctx.fill();
        }
    }
    
    drawDistributionPipes(ctx, w, h) {
        const cx = w * 0.5;
        const cy = h * 0.3;
        const radius = 60;
        
        // Imperial pipe (to right-top) - largest
        this.drawPipe(ctx, cx + radius, cy - 30, w * 0.85, h * 0.15, 
                     this.state.valveSettings.imperial, '#ffd700', 12);
        
        // Public pipe (to bottom) - medium
        this.drawPipe(ctx, cx, cy + radius, cx, h * 0.7, 
                     this.state.valveSettings.public, '#c0c0c0', 10);
        
        // Private pipe (to left-bottom) - smallest
        this.drawPipe(ctx, cx - radius, cy + 20, w * 0.15, h * 0.6, 
                     this.state.valveSettings.private, '#cd7f32', 6);
    }
    
    drawPipe(ctx, x1, y1, x2, y2, flowRate, color, width) {
        // Pipe casing
        ctx.strokeStyle = '#4a4a4a';
        ctx.lineWidth = width + 4;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        
        // Lead pipe
        ctx.strokeStyle = '#6b6b6b';
        ctx.lineWidth = width;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        
        // Water flow
        if (flowRate > 0) {
            ctx.strokeStyle = `rgba(30, 144, 255, ${flowRate})`;
            ctx.lineWidth = width - 2;
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
        }
        
        // Valve indicator
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc((x1 + x2) / 2, (y1 + y2) / 2, 6, 0, Math.PI * 2);
        ctx.fill();
    }
    
    drawConsumers(ctx, w, h) {
        // Imperial Palace
        ctx.fillStyle = '#d4a574';
        ctx.fillRect(w * 0.78, h * 0.05, 50, 35);
        ctx.fillStyle = '#ffd700';
        ctx.beginPath();
        ctx.moveTo(w * 0.78, h * 0.05);
        ctx.lineTo(w * 0.78 + 25, h * 0.02);
        ctx.lineTo(w * 0.78 + 50, h * 0.05);
        ctx.closePath();
        ctx.fill();
        
        // Public Baths
        ctx.fillStyle = '#87ceeb';
        ctx.fillRect(w * 0.42, h * 0.72, 70, 40);
        ctx.strokeStyle = '#4682b4';
        ctx.lineWidth = 2;
        ctx.strokeRect(w * 0.42, h * 0.72, 70, 40);
        
        // Steam/vapor effect
        ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
        ctx.beginPath();
        ctx.arc(w * 0.48, h * 0.7, 8, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(w * 0.55, h * 0.68, 10, 0, Math.PI * 2);
        ctx.fill();
        
        // Private Houses
        ctx.fillStyle = '#d4a574';
        for (let i = 0; i < 3; i++) {
            ctx.fillRect(w * 0.08 + i * 25, h * 0.55 + (i % 2) * 15, 20, 18);
        }
        
        // Public Fountain
        ctx.fillStyle = '#a08060';
        ctx.fillRect(w * 0.55, h * 0.75, 25, 15);
        ctx.fillStyle = '#1e90ff';
        ctx.beginPath();
        ctx.arc(w * 0.55 + 12, h * 0.72, 8, Math.PI, 0);
        ctx.fill();
    }
    
    drawParticles(ctx, w, h) {
        if (!this.state.isAnimating) return;
        
        const cx = w * 0.5;
        const cy = h * 0.3;
        
        // Draw particles for each pipe
        // Imperial particles
        ctx.fillStyle = 'rgba(255, 215, 0, 0.8)';
        this.state.particleGroups.imperial.forEach(p => {
            const progress = p.y / 100;
            const x = cx + 60 + progress * (w * 0.35 - 60);
            const y = cy - 30 + progress * (h * 0.15 - cy + 30);
            ctx.beginPath();
            ctx.arc(x, y, p.size, 0, Math.PI * 2);
            ctx.fill();
        });
        
        // Public particles
        ctx.fillStyle = 'rgba(192, 192, 192, 0.8)';
        this.state.particleGroups.public.forEach(p => {
            const progress = p.y / 100;
            const x = cx;
            const y = cy + 60 + progress * (h * 0.4);
            ctx.beginPath();
            ctx.arc(x, y, p.size, 0, Math.PI * 2);
            ctx.fill();
        });
        
        // Private particles
        ctx.fillStyle = 'rgba(205, 127, 50, 0.8)';
        this.state.particleGroups.private.forEach(p => {
            const progress = p.y / 100;
            const x = cx - 60 - progress * (w * 0.35 - 60);
            const y = cy + 20 + progress * (h * 0.3);
            ctx.beginPath();
            ctx.arc(x, y, p.size, 0, Math.PI * 2);
            ctx.fill();
        });
    }
    
    updateParticles() {
        ['imperial', 'public', 'private'].forEach(type => {
            const flowRate = this.state.valveSettings[type];
            this.state.particleGroups[type].forEach(p => {
                p.y += p.speed * flowRate * 2;
                if (p.y > 100) {
                    p.y = 0;
                    p.x = Math.random() * 100;
                }
            });
        });
    }
    
    drawLabels(ctx, w, h) {
        ctx.font = 'bold 12px Arial';
        ctx.fillStyle = '#ffffff';
        ctx.textAlign = 'center';
        
        ctx.fillText('AQUEDUCT', w * 0.15, h * 0.15);
        ctx.fillText('(Aqua Claudia)', w * 0.15, h * 0.18);
        
        ctx.fillText('CASTELLUM', w * 0.5, h * 0.45);
        ctx.fillText('DIVISORIUM', w * 0.5, h * 0.48);
        
        ctx.fillText('🏛️ Imperial', w * 0.85, h * 0.12);
        ctx.fillText('Palace', w * 0.85, h * 0.15);
        
        ctx.fillText('🏺 Public', w * 0.5, h * 0.85);
        ctx.fillText('Thermae', w * 0.5, h * 0.88);
        
        ctx.fillText('🏠 Private', w * 0.15, h * 0.75);
        ctx.fillText('Domus', w * 0.15, h * 0.78);
        
        if (this.state.overflow > 0) {
            ctx.fillText('→ Cloaca Maxima', w * 0.5, h * 0.95);
        }
    }
    
    toggleAnimation() {
        this.state.isAnimating = !this.state.isAnimating;
        document.getElementById('animate-btn').textContent = 
            this.state.isAnimating ? '⏸ Stop Animation' : '▶ Start Flow Animation';
        
        if (this.state.isAnimating) {
            this.render();
        }
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    const simulator = new CastellumDivisoriumSimulator('castellum-canvas', 'castellum-controls');
});
```

---

## 1.4 Chinese Chain Pump (Dragon Backbone) Simulator

```javascript
/**
 * CHINESE CHAIN PUMP (DRAGON BACKBONE) SIMULATOR
 * 龙骨水车 (Lónggǔ Shuǐchē) • Han Dynasty onwards
 * 
 * Simulates the ingenious chain-driven water lifting device
 * that revolutionized Chinese agriculture
 */

class ChainPumpSimulator {
    constructor(canvasId, controlsId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.controls = document.getElementById(controlsId);
        
        this.config = {
            // Pump specifications
            pumpLength: 5,              // meters
            pumpAngle: 25,              // degrees from horizontal
            numberOfPaddles: 20,
            paddleSpacing: 0.25,        // meters
            troughWidth: 0.3,           // meters
            troughDepth: 0.15,          // meters
            
            // Performance parameters
            maxRPM: 30,                 // cranks per minute (human power)
            waterPerPaddleML: 500,      // milliliters per paddle
            efficiency: 0.75,           // mechanical efficiency
            
            // Power sources
            powerSources: {
                human: { rpm: 20, fatigue: true },
                ox: { rpm: 15, fatigue: false },
                water: { rpm: 25, fatigue: false },
            },
            
            // Lift heights
            minLift: 1,                 // meters
            maxLift: 5,                 // meters
        };
        
        this.state = {
            rpm: 15,
            powerSource: 'human',
            liftHeight: 3,
            chainPosition: 0,          // 0-360 degrees
            waterOutput: 0,            // L/minute
            fatigueLevel: 0,           // 0-100%
            isRunning: false,
            paddles: [],
        };
        
        this.init();
    }
    
    init() {
        this.createPaddles();
        this.createControls();
        this.calculateOutput();
        this.render();
    }
    
    createPaddles() {
        this.state.paddles = [];
        for (let i = 0; i < this.config.numberOfPaddles; i++) {
            this.state.paddles.push({
                position: (i / this.config.numberOfPaddles) * 360,
                hasWater: false,
            });
        }
    }
    
    createControls() {
        const controlsHTML = `
            <div class="chainpump-controls">
                <h3>🐉 Dragon Backbone Pump (龙骨水车)</h3>
                
                <div class="control-group">
                    <label>Power Source:</label>
                    <select id="power-select">
                        <option value="human">👤 Human (Foot Pedal)</option>
                        <option value="ox">🐂 Ox (Animal Power)</option>
                        <option value="water">💧 Water Wheel</option>
                    </select>
                </div>
                
                <div class="control-group">
                    <label>Crank Speed: <span id="rpm-value">15</span> RPM</label>
                    <input type="range" id="rpm-slider" min="5" max="35" value="15">
                </div>
                
                <div class="control-group">
                    <label>Lift Height: <span id="lift-value">3</span> meters</label>
                    <input type="range" id="lift-slider" min="1" max="5" value="3" step="0.5">
                </div>
                
                <div class="power-controls">
                    <button id="start-btn">▶ Start Pump</button>
                    <button id="stop-btn">⏹ Stop</button>
                    <button id="turbo-btn">⚡ Maximum Speed</button>
                </div>
                
                <div class="metrics-panel">
                    <h4>Performance Metrics</h4>
                    
                    <div class="metric">
                        <span>Water Output:</span>
                        <span id="output-value">0</span> L/min
                        <div class="output-bar"></div>
                    </div>
                    
                    <div class="metric">
                        <span>Daily Capacity:</span>
                        <span id="daily-value">0</span> m³/day
                    </div>
                    
                    <div class="metric">
                        <span>Irrigable Area:</span>
                        <span id="area-value">0</span> hectares
                    </div>
                    
                    <div class="metric fatigue-metric">
                        <span>Operator Fatigue:</span>
                        <span id="fatigue-value">0</span>%
                        <div class="fatigue-bar"></div>
                    </div>
                    
                    <div class="metric efficiency-metric">
                        <span>Mechanical Efficiency:</span>
                        <span id="efficiency-value">75</span>%
                    </div>
                </div>
                
                <div class="history-panel">
                    <h4>📜 Historical Note</h4>
                    <p id="history-text">The dragon backbone pump could raise water up to 5 meters and remained in use for over 1,700 years.</p>
                </div>
            </div>
        `;
        
        this.controls.innerHTML = controlsHTML;
        this.bindEvents();
    }
    
    bindEvents() {
        document.getElementById('power-select').addEventListener('change', (e) => {
            this.state.powerSource = e.target.value;
            const powerConfig = this.config.powerSources[e.target.value];
            this.state.rpm = powerConfig.rpm;
            document.getElementById('rpm-slider').value = powerConfig.rpm;
            document.getElementById('rpm-value').textContent = powerConfig.rpm;
            this.updateHistoryText();
            this.calculateOutput();
        });
        
        document.getElementById('rpm-slider').addEventListener('input', (e) => {
            this.state.rpm = parseInt(e.target.value);
            document.getElementById('rpm-value').textContent = e.target.value;
            this.calculateOutput();
        });
        
        document.getElementById('lift-slider').addEventListener('input', (e) => {
            this.state.liftHeight = parseFloat(e.target.value);
            document.getElementById('lift-value').textContent = e.target.value;
            this.calculateOutput();
        });
        
        document.getElementById('start-btn').addEventListener('click', () => {
            this.state.isRunning = true;
            this.animate();
        });
        
        document.getElementById('stop-btn').addEventListener('click', () => {
            this.state.isRunning = false;
            this.state.fatigueLevel = Math.max(0, this.state.fatigueLevel - 20);
            this.updateMetrics();
        });
        
        document.getElementById('turbo-btn').addEventListener('click', () => {
            this.state.rpm = 30;
            document.getElementById('rpm-slider').value = 30;
            document.getElementById('rpm-value').textContent = '30';
            this.calculateOutput();
        });
    }
    
    calculateOutput() {
        // Water output = paddles × water/paddle × RPM × efficiency
        // Adjusted for lift height (higher lift = lower efficiency)
        const liftFactor = 1 - (this.state.liftHeight - 1) * 0.1;
        const baseOutput = (this.config.numberOfPaddles * 
                          this.config.waterPerPaddleML * 
                          this.state.rpm * 
                          this.config.efficiency * 
                          liftFactor) / 1000;  // Convert to liters
        
        this.state.waterOutput = Math.round(baseOutput * 10) / 10;
        this.updateMetrics();
    }
    
    updateMetrics() {
        document.getElementById('output-value').textContent = this.state.waterOutput;
        
        // Daily capacity (8 hours of operation)
        const dailyCapacity = (this.state.waterOutput * 60 * 8) / 1000;  // m³
        document.getElementById('daily-value').textContent = dailyCapacity.toFixed(1);
        
        // Irrigable area (assuming 50 m³/hectare/day for rice)
        const irrigableArea = dailyCapacity / 50;
        document.getElementById('area-value').textContent = irrigableArea.toFixed(2);
        
        // Fatigue (only for human power)
        document.getElementById('fatigue-value').textContent = Math.round(this.state.fatigueLevel);
        document.querySelector('.fatigue-bar').style.width = `${this.state.fatigueLevel}%`;
        document.querySelector('.fatigue-bar').style.backgroundColor = 
            this.state.fatigueLevel > 80 ? '#ff4444' : 
            this.state.fatigueLevel > 50 ? '#ffaa00' : '#44aa44';
        
        // Output bar
        document.querySelector('.output-bar').style.width = 
            `${(this.state.waterOutput / 200) * 100}%`;
        
        // Efficiency adjusted for fatigue
        const effectiveEfficiency = this.config.efficiency * (1 - this.state.fatigueLevel / 200);
        document.getElementById('efficiency-value').textContent = 
            Math.round(effectiveEfficiency * 100);
    }
    
    updateHistoryText() {
        const texts = {
            human: 'Foot-operated pumps allowed farmers to work rice paddies efficiently. One person could operate for several hours before needing rest.',
            ox: 'Animal-powered pumps could operate continuously, irrigating larger areas. Common in wealthy farming communities.',
            water: 'Water wheel-driven pumps used river current to power the chain, requiring no human or animal labor.',
        };
        document.getElementById('history-text').textContent = texts[this.state.powerSource];
    }
    
    animate() {
        if (!this.state.isRunning) return;
        
        // Update chain position
        this.state.chainPosition = (this.state.chainPosition + this.state.rpm * 0.5) % 360;
        
        // Update paddle positions
        this.state.paddles.forEach((paddle, i) => {
            paddle.position = (paddle.position + this.state.rpm * 0.5) % 360;
            // Paddle picks up water at bottom (270°) and releases at top (90°)
            paddle.hasWater = paddle.position > 270 || paddle.position < 90;
        });
        
        // Update fatigue for human power
        if (this.state.powerSource === 'human' && this.config.powerSources.human.fatigue) {
            this.state.fatigueLevel = Math.min(100, this.state.fatigueLevel + 0.1);
            
            // Reduce output when fatigued
            if (this.state.fatigueLevel > 50) {
                const fatigueMultiplier = 1 - (this.state.fatigueLevel - 50) / 100;
                this.state.rpm = Math.max(5, this.state.rpm * fatigueMultiplier);
            }
        }
        
        this.calculateOutput();
        this.render();
        
        requestAnimationFrame(() => this.animate());
    }
    
    render() {
        const ctx = this.ctx;
        const w = this.canvas.width;
        const h = this.canvas.height;
        
        // Clear
        ctx.fillStyle = '#1a1a2e';
        ctx.fillRect(0, 0, w, h);
        
        this.drawWaterSource(ctx, w, h);
        this.drawPumpStructure(ctx, w, h);
        this.drawChainAndPaddles(ctx, w, h);
        this.drawPowerSource(ctx, w, h);
        this.drawOutput(ctx, w, h);
        this.drawLabels(ctx, w, h);
    }
    
    drawWaterSource(ctx, w, h) {
        // Lower water reservoir/river
        ctx.fillStyle = '#1e4a6e';
        ctx.fillRect(0, h * 0.75, w * 0.4, h * 0.25);
        
        // Water surface with ripples
        ctx.strokeStyle = '#3a7ca5';
        ctx.lineWidth = 1;
        for (let i = 0; i < 5; i++) {
            const y = h * 0.75 + i * 10;
            ctx.beginPath();
            ctx.moveTo(0, y);
            for (let x = 0; x < w * 0.4; x += 20) {
                ctx.lineTo(x + 10, y + Math.sin((x + this.state.chainPosition) * 0.1) * 3);
            }
            ctx.stroke();
        }
    }
    
    drawPumpStructure(ctx, w, h) {
        // Wooden trough (the "dragon backbone")
        const angle = this.config.pumpAngle * Math.PI / 180;
        const startX = w * 0.2;
        const startY = h * 0.8;
        const endX = w * 0.7;
        const endY = h * 0.35;
        
        // Trough sides
        ctx.fillStyle = '#8b4513';
        ctx.lineWidth = 4;
        
        // Calculate trough corners
        const troughWidth = 30;
        
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.lineTo(endX, endY + troughWidth);
        ctx.lineTo(startX, startY + troughWidth);
        ctx.closePath();
        ctx.fill();
        
        // Trough interior (darker)
        ctx.fillStyle = '#654321';
        ctx.beginPath();
        ctx.moveTo(startX + 5, startY + 5);
        ctx.lineTo(endX - 5, endY + 5);
        ctx.lineTo(endX - 5, endY + troughWidth - 5);
        ctx.lineTo(startX + 5, startY + troughWidth - 5);
        ctx.closePath();
        ctx.fill();
        
        // Support frame
        ctx.strokeStyle = '#8b4513';
        ctx.lineWidth = 6;
        
        // Support legs
        ctx.beginPath();
        ctx.moveTo(w * 0.3, h * 0.7);
        ctx.lineTo(w * 0.3, h * 0.95);
        ctx.moveTo(w * 0.5, h * 0.55);
        ctx.lineTo(w * 0.5, h * 0.95);
        ctx.stroke();
        
        // Cross braces
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(w * 0.3, h * 0.8);
        ctx.lineTo(w * 0.5, h * 0.7);
        ctx.stroke();
    }
    
    drawChainAndPaddles(ctx, w, h) {
        const startX = w * 0.2;
        const startY = h * 0.8;
        const endX = w * 0.7;
        const endY = h * 0.35;
        
        // Chain links
        ctx.strokeStyle = '#4a4a4a';
        ctx.lineWidth = 2;
        
        // Upper chain (going up with water)
        ctx.beginPath();
        ctx.moveTo(startX + 5, startY + 10);
        ctx.lineTo(endX - 5, endY + 10);
        ctx.stroke();
        
        // Lower chain (returning empty)
        ctx.beginPath();
        ctx.moveTo(startX + 5, startY + 20);
        ctx.lineTo(endX - 5, endY + 20);
        ctx.stroke();
        
        // Draw paddles
        this.state.paddles.forEach((paddle, i) => {
            const progress = (paddle.position % 180) / 180;
            const onUpperPath = paddle.position < 180;
            
            let px, py;
            if (onUpperPath) {
                // Going up (with water)
                px = startX + 5 + progress * (endX - startX - 10);
                py = startY + 10 - progress * (startY - endY);
            } else {
                // Going down (empty, returning)
                const returnProgress = (paddle.position - 180) / 180;
                px = endX - 5 - returnProgress * (endX - startX - 10);
                py = endY + 20 + returnProgress * (startY - endY);
            }
            
            // Paddle board
            ctx.fillStyle = '#d2691e';
            ctx.fillRect(px - 8, py - 3, 16, 6);
            
            // Water on paddle (if carrying water)
            if (paddle.hasWater && onUpperPath) {
                ctx.fillStyle = 'rgba(30, 144, 255, 0.7)';
                ctx.beginPath();
                ctx.arc(px, py - 6, 5, Math.PI, 0);
                ctx.fill();
            }
        });
        
        // Sprocket wheels at each end
        ctx.fillStyle = '#4a4a4a';
        
        // Bottom sprocket
        ctx.beginPath();
        ctx.arc(startX + 10, startY + 15, 15, 0, Math.PI * 2);
        ctx.fill();
        
        // Top sprocket
        ctx.beginPath();
        ctx.arc(endX - 10, endY + 15, 15, 0, Math.PI * 2);
        ctx.fill();
        
        // Sprocket teeth
        ctx.strokeStyle = '#6a6a6a';
        ctx.lineWidth = 2;
        for (let i = 0; i < 8; i++) {
            const angle = (i / 8) * Math.PI * 2 + this.state.chainPosition * Math.PI / 180;
            
            // Bottom sprocket teeth
            ctx.beginPath();
            ctx.moveTo(startX + 10, startY + 15);
            ctx.lineTo(startX + 10 + Math.cos(angle) * 18, startY + 15 + Math.sin(angle) * 18);
            ctx.stroke();
            
            // Top sprocket teeth
            ctx.beginPath();
            ctx.moveTo(endX - 10, endY + 15);
            ctx.lineTo(endX - 10 + Math.cos(angle) * 18, endY + 15 + Math.sin(angle) * 18);
            ctx.stroke();
        }
    }
    
    drawPowerSource(ctx, w, h) {
        const crankX = w * 0.75;
        const crankY = h * 0.4;
        
        // Crank wheel
        ctx.fillStyle = '#8b4513';
        ctx.beginPath();
        ctx.arc(crankX, crankY, 25, 0, Math.PI * 2);
        ctx.fill();
        
        // Crank handle
        const handleAngle = this.state.chainPosition * Math.PI / 180;
        ctx.strokeStyle = '#654321';
        ctx.lineWidth = 6;
        ctx.beginPath();
        ctx.moveTo(crankX, crankY);
        ctx.lineTo(crankX + Math.cos(handleAngle) * 35, crankY + Math.sin(handleAngle) * 35);
        ctx.stroke();
        
        // Handle grip
        ctx.fillStyle = '#4a4a4a';
        ctx.beginPath();
        ctx.arc(crankX + Math.cos(handleAngle) * 35, crankY + Math.sin(handleAngle) * 35, 8, 0, Math.PI * 2);
        ctx.fill();
        
        // Power source indicator
        if (this.state.powerSource === 'human') {
            // Stick figure operator
            ctx.strokeStyle = '#ffa500';
            ctx.lineWidth = 3;
            // Body
            ctx.beginPath();
            ctx.moveTo(crankX + 50, crankY - 30);  // Head
            ctx.lineTo(crankX + 50, crankY + 20);  // Body
            ctx.stroke();
            // Head
            ctx.beginPath();
            ctx.arc(crankX + 50, crankY - 40, 10, 0, Math.PI * 2);
            ctx.stroke();
            // Arms reaching to crank
            ctx.beginPath();
            ctx.moveTo(crankX + 50, crankY - 10);
            ctx.lineTo(crankX + Math.cos(handleAngle) * 35, crankY + Math.sin(handleAngle) * 35);
            ctx.stroke();
            // Legs (foot pedal motion)
            ctx.beginPath();
            ctx.moveTo(crankX + 50, crankY + 20);
            ctx.lineTo(crankX + 40, crankY + 50);
            ctx.lineTo(crankX + 35, crankY + 60);
            ctx.moveTo(crankX + 50, crankY + 20);
            ctx.lineTo(crankX + 60, crankY + 50);
            ctx.lineTo(crankX + 65, crankY + 60);
            ctx.stroke();
        } else if (this.state.powerSource === 'ox') {
            // Simple ox representation
            ctx.fillStyle = '#8b4513';
            ctx.fillRect(crankX + 40, crankY - 10, 40, 25);
            ctx.beginPath();
            ctx.arc(crankX + 85, crankY, 12, 0, Math.PI * 2);
            ctx.fill();
            // Horns
            ctx.strokeStyle = '#d2b48c';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(crankX + 85, crankY - 5);
            ctx.lineTo(crankX + 95, crankY - 15);
            ctx.moveTo(crankX + 85, crankY - 5);
            ctx.lineTo(crankX + 75, crankY - 15);
            ctx.stroke();
        } else {
            // Water wheel
            ctx.strokeStyle = '#8b4513';
            ctx.lineWidth = 4;
            ctx.beginPath();
            ctx.arc(crankX + 60, crankY + 30, 30, 0, Math.PI * 2);
            ctx.stroke();
            // Paddles
            for (let i = 0; i < 8; i++) {
                const angle = (i / 8) * Math.PI * 2 + this.state.chainPosition * Math.PI / 180;
                ctx.beginPath();
                ctx.moveTo(crankX + 60, crankY + 30);
                ctx.lineTo(crankX + 60 + Math.cos(angle) * 30, crankY + 30 + Math.sin(angle) * 30);
                ctx.stroke();
            }
        }
    }
    
    drawOutput(ctx, w, h) {
        // Upper irrigation channel
        ctx.fillStyle = '#654321';
        ctx.fillRect(w * 0.65, h * 0.25, w * 0.35, 15);
        
        // Water flowing out
        if (this.state.isRunning) {
            ctx.fillStyle = 'rgba(30, 144, 255, 0.8)';
            ctx.fillRect(w * 0.68, h * 0.27, w * 0.3, 8);
            
            // Water drops animation
            const dropOffset = (this.state.chainPosition % 60) / 60;
            ctx.fillStyle = '#1e90ff';
            ctx.beginPath();
            ctx.arc(w * 0.68 + dropOffset * 50, h * 0.32, 4, 0, Math.PI * 2);
            ctx.fill();
        }
        
        // Rice paddy indication
        ctx.fillStyle = 'rgba(34, 139, 34, 0.4)';
        ctx.fillRect(w * 0.75, h * 0.1, w * 0.2, h * 0.12);
        ctx.strokeStyle = '#228b22';
        ctx.lineWidth = 1;
        ctx.strokeRect(w * 0.75, h * 0.1, w * 0.2, h * 0.12);
    }
    
    drawLabels(ctx, w, h) {
        ctx.font = 'bold 12px Arial';
        ctx.fillStyle = '#ffffff';
        ctx.textAlign = 'center';
        
        ctx.fillText('Water Source', w * 0.15, h * 0.7);
        ctx.fillText('(River/Pond)', w * 0.15, h * 0.73);
        
        ctx.fillText('龙骨', w * 0.45, h * 0.5);
        ctx.fillText('Dragon Backbone', w * 0.45, h * 0.53);
        
        ctx.fillText('Irrigation', w * 0.85, h * 0.08);
        ctx.fillText('Channel', w * 0.85, h * 0.11);
        
        ctx.font = '11px Arial';
        ctx.fillStyle = '#ffff00';
        ctx.fillText(`Lift: ${this.state.liftHeight}m`, w * 0.45, h * 0.6);
        ctx.fillText(`${this.state.waterOutput} L/min`, w * 0.45, h * 0.63);
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    const simulator = new ChainPumpSimulator('chainpump-canvas', 'chainpump-controls');
});
```

---

## 1.5 Additional Simulators (Abbreviated)

Due to length constraints, I'll provide the key logic for remaining simulators:

```javascript
/**
 * ADDITIONAL SIMULATOR CLASSES - KEY METHODS ONLY
 */

// ===========================================
// 5. Inca Fountain Cascade Simulator
// ===========================================
class IncaFountainSimulator {
    // Key calculation: stepped fountain hydraulics
    calculateFountainFlow(sourceElevation, fountainIndex, totalFountains) {
        const elevationDrop = sourceElevation / totalFountains;
        const fountainElevation = sourceElevation - (fountainIndex * elevationDrop);

        // Torricelli's law: v = √(2gh)
        const velocity = Math.sqrt(2 * 9.81 * elevationDrop);

        // Flow through orifice: Q = Cd * A * v
        const dischargeCoefficient = 0.62;
        const orificeArea = 0.001;  // m² (approximately 3.5cm diameter)
        const flowRate = dischargeCoefficient * orificeArea * velocity * 1000;  // L/s

        return {
            elevation: fountainElevation,
            velocity: velocity,
            flowRate: flowRate,
            pressure: 9810 * elevationDrop  // Pascals
        };
    }

    // Ceremonial water distribution
    distributeCeremonialWater(totalFlow, ceremonies) {
        // Inca hierarchy: Sapa Inca gets first water, then nobles, then commoners
        const distribution = {
            sapaInca: totalFlow * 0.1,      // 10% - purest, first
            highPriests: totalFlow * 0.15,   // 15% - temple use
            nobles: totalFlow * 0.25, // 25% - elite households
            commoners: totalFlow * 0.3,      // 30% - public fountains
            agriculture: totalFlow * 0.2     // 20% - terrace irrigation
        };
        return distribution;
    }
}

// ===========================================
// 6. Angkor Baray Reservoir Simulator
// ===========================================
class AngkorBaraySimulator {
    constructor() {
        this.config = {
            // West Baray dimensions
            length: 8000, // meters
            width: 2100, // meters
            depth: 5, // meters average
            volume: 50000000,    // m³ (50 million cubic meters)

            // Monsoon parameters
            monsoonMonths: [5, 6, 7, 8, 9, 10],  // May-October
            avgMonsoonRainfall: 250,  // mm/month
            avgDryRainfall: 20,       // mm/month
            evaporationRate: 5,       // mm/day

            // Irrigation network
            canalLength: 1000, // km total canal network
            irrigatedArea: 100000,    // hectares
        };
    }

    calculateWaterBalance(month, sluiceOpening) {
        const isMonsoon = this.config.monsoonMonths.includes(month);

        // Inflow
        const rainfall = isMonsoon ? this.config.avgMonsoonRainfall : this.config.avgDryRainfall;
        const catchmentArea = this.config.length * this.config.width;
        const rainfallInflow = (rainfall / 1000) * catchmentArea;  // m³

        // River inflow (Siem Reap River)
        const riverInflow = isMonsoon ? 5000000 : 500000;  // m³/month

        // Outflow
        const evaporation = (this.config.evaporationRate * 30 / 1000) * catchmentArea;
        const irrigationOutflow = sluiceOpening * 2000000;  // m³/month max

        return {
            inflow: rainfallInflow + riverInflow,
            evaporation: evaporation,
            irrigation: irrigationOutflow,
            netChange: rainfallInflow + riverInflow - evaporation - irrigationOutflow
        };
    }

    simulateClimateCollapse(droughtYears) {
        // Simulates the multi-decade drought that contributed to Angkor's decline
        let waterLevel = 1.0;  // Full
        const history = [];

        for (let year = 0; year < droughtYears; year++) {
            // Reduced monsoon intensity
            const monsoonReduction = 0.7 + Math.random() * 0.2;  // 70-90% of normal

            for (let month = 1; month <= 12; month++) {
                const balance = this.calculateWaterBalance(month, 0.5);
                const adjustedInflow = balance.inflow * monsoonReduction;
                const netChange = adjustedInflow - balance.evaporation - balance.irrigation;

                waterLevel += netChange / this.config.volume;
                waterLevel = Math.max(0, Math.min(1, waterLevel));

                history.push({
                    year: year,
                    month: month,
                    level: waterLevel,
                    monsoonStrength: monsoonReduction
                });
            }
        }

        return history;
    }
}

// ===========================================
// 7. Venice Cistern Filling Simulator
// ===========================================
class VeniceCisternSimulator {
    constructor() {
        this.config = {
            // Typical Venetian cistern
            cisternVolume: 50,       // m³
            filtrationArea: 100,     // m² of campo (square) draining to cistern
            sandFilterDepth: 1.5,    // meters

            // Venice rainfall (Mediterranean climate)
            monthlyRainfall: [60, 55, 60, 70, 80, 75, 55, 65, 70, 80, 90, 70],  // mm

            // Water quality parameters
            initialTurbidity: 100,    // NTU (after rain)
            sandFilterEfficiency: 0.95,  // 95% turbidity removal
            targetTurbidity: 5,       // NTU for drinking
        };
    }

    calculateFiltration(rainfallMm, currentLevel) {
        // Rainwater collection
        const collectedWater = (rainfallMm / 1000) * this.config.filtrationArea;  // m³

        // Filtration rate through sand
        // Darcy's Law: Q = K * A * (h/L)
        const hydraulicConductivity = 0.0001;  // m/s for fine sand
        const filterArea = this.config.filtrationArea * 0.3;  // 30% is filter
        const hydraulicGradient = 0.5;  // meters head / meters filter depth

        const filtrationRate = hydraulicConductivity * filterArea * hydraulicGradient * 3600;  // m³/hour

        // Time to filter all collected water
        const filtrationTime = collectedWater / filtrationRate;

        // Water quality improvement
        const outputTurbidity = this.config.initialTurbidity * (1 - this.config.sandFilterEfficiency);

        return {
            collected: collectedWater,
            filtered: Math.min(collectedWater, filtrationRate * 24),  // Daily max
            turbidity: outputTurbidity,
            fillTime: filtrationTime,
            newLevel: Math.min(1, currentLevel + collectedWater / this.config.cisternVolume)
        };
    }
}

// ===========================================
// 8. Shaduf vs Modern Pump Comparison
// ===========================================
class WaterLiftingComparator {
    constructor() {
        this.devices = {
            shaduf: {
                name: 'Egyptian Shaduf',
                era: '1500 BCE',
                liftHeight: 3, // meters
                outputLPH: 2500, // liters per hour
                powerSource: 'human',
                efficiency: 0.6,
                cost: 'Low (wood, rope, clay)',
                maintenance: 'Simple repairs'
            },
            archimedesScrew: {
                name: 'Archimedes Screw',
                era: '250 BCE',
                liftHeight: 2,
                outputLPH: 8000,
                powerSource: 'human/animal',
                efficiency: 0.7,
                cost: 'Medium (wood, metal)',
                maintenance: 'Bearing replacement'
            },
            noria: {
                name: 'Noria Water Wheel',
                era: '200 BCE',