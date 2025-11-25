// ========================================================
// PAGE NAVIGATION
// ========================================================
function showPage(pageId, linkElement) {
    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
    document.getElementById(pageId).classList.add("active");
    document.querySelectorAll(".navbar a").forEach(a => a.classList.remove("active"));
    linkElement.classList.add("active");
}

// ========================================================
// COLORED TEXT GENERATOR
// ========================================================

// Color set definitions
const colorSets = {
    "Rainbow": [
        "#FF0000", "#FF4500", "#FF8C00", "#FFA500", "#FFD700", "#FFFF00",
        "#9ACD32", "#32CD32", "#008000", "#00CED1", "#1E90FF", "#0000FF",
        "#4B0082", "#8B00FF", "#9400D3", "#EE82EE", "#FF1493"
    ],
    "Blues": [
        "#4A90E2", "#3579D6", "#2467C9", "#1657BC", "#0D47A1", "#0B3E8A",
        "#093676", "#072D62", "#062652", "#051F42", "#041A36", "#031428"
    ],
    "Greens": [
        "#4CAF50", "#43A047", "#388E3C", "#2E7D32", "#276C2B", "#205C24",
        "#1A4D1E", "#144018", "#0F3413", "#0B2A0F", "#081F0B", "#051706"
    ],
    "Reds": [
        "#FF6F61", "#FF574A", "#F44336", "#E53935", "#D32F2F", "#C62828",
        "#B71C1C", "#A11919", "#8B1616", "#751212", "#5E0E0E", "#470A0A"
    ],
    "Purples": [
        "#DDA0DD", "#C586E8", "#B06FE3", "#9B59D0", "#8E44AD", "#7D3C98",
        "#6C3483", "#5B2C6F", "#4A245A", "#3A1D46", "#2A1633", "#1B0E20"
    ],
    "Oranges": [
        "#FF4500", "#FF5722", "#FF6347", "#FF7043", "#FF8C00", "#FFA500",
        "#FFB347", "#FFC000", "#FFD700", "#FFAA00", "#FF9500", "#FF8000"
    ],
    "BluePurple": [
        "#0078FF", "#1464FF", "#2850FF", "#3C3CFF", "#5028FF", "#6414FF", "#7800FF"
    ],
    "Custom": []
};

let customColors = [];

// Get DOM elements
const textInput = document.getElementById('textInput');
const colorSetRadios = document.getElementsByName('colorSet');
const copyButton = document.getElementById('copyButton');
const displayPanel = document.getElementById('displayPanel');
const notification = document.getElementById('notification');
const customColorsControls = document.getElementById('customColorsControls');
const colorPicker = document.getElementById('colorPicker');
const addColorBtn = document.getElementById('addColorBtn');
const clearColorsBtn = document.getElementById('clearColorsBtn');
const customColorsList = document.getElementById('customColorsList');
const sizeSelect = document.getElementById('sizeSelect');
const waveCheckbox = document.getElementById('waveCheckbox');

// Get selected color set
function getSelectedColorSet() {
    for (const radio of colorSetRadios) {
        if (radio.checked) {
            return radio.value;
        }
    }
    return "Rainbow";
}

// Calculate color index
function getColorIndex(index, n) {
    if (n === 0) return 0;
    const p = index % (2 * n);
    return (p <= n) ? p : (2 * n - p);
}

// Create colored label text
function createColoredLabel(text, colors) {
    const container = document.createElement('span');
    container.className = 'color-label';
    
    const charArray = text.split('');
    for (let i = 0; i < charArray.length; i++) {
        const colorIndex = getColorIndex(i, colors.length - 1);
        const charSpan = document.createElement('span');
        charSpan.className = 'char-span';
        charSpan.textContent = charArray[i];
        charSpan.style.color = colors[colorIndex];
        container.appendChild(charSpan);
    }
    
    return container;
}

// Update all color labels
function updateColorLabels() {
    const labels = {
        "Rainbow": document.getElementById('labelRainbow'),
        "Blues": document.getElementById('labelBlues'),
        "Greens": document.getElementById('labelGreens'),
        "Reds": document.getElementById('labelReds'),
        "Purples": document.getElementById('labelPurples'),
        "Oranges": document.getElementById('labelOranges'),
        "BluePurple": document.getElementById('labelBluePurple'),
        "Custom": document.getElementById('labelCustom')
    };

    for (const [setName, labelElement] of Object.entries(labels)) {
        const colors = colorSets[setName];
        const text = labelElement.textContent || labelElement.innerText;
        labelElement.innerHTML = '';
        const coloredText = createColoredLabel(text, colors);
        labelElement.appendChild(coloredText);
    }
}

// Calculate wave size for a character
function getWaveSize(index, baseSize, waveAmplitude = 10) {
    const waveFrequency = 0.3;
    const sizeVariation = Math.sin(index * waveFrequency) * waveAmplitude;
    return Math.round(baseSize + sizeVariation);
}

// Refresh displayed text
function refreshText() {
    displayPanel.innerHTML = '';
    
    const text = textInput.value;
    if (!text) return;
    
    const selectedSet = getSelectedColorSet();
    const colors = selectedSet === "Custom" ? customColors : colorSets[selectedSet];
    if (colors.length === 0) return;
    
    const selectedSize = parseInt(sizeSelect.value);
    const isWaveMode = waveCheckbox.checked;
    const lines = text.split('\n');
    
    for (let lineIndex = 0; lineIndex < lines.length; lineIndex++) {
        const line = lines[lineIndex];
        const charArray = line.split('');
        let currentLine = document.createElement('div');
        displayPanel.appendChild(currentLine);
        
        for (let i = 0; i < charArray.length; i++) {
            const colorIndex = getColorIndex(i, colors.length - 1);
            const char = charArray[i];
            const charSpan = document.createElement('span');
            charSpan.className = 'char-span';
            
            if (char === ' ') {
                charSpan.className += ' space-char';
                charSpan.innerHTML = '&nbsp;';
            } else {
                charSpan.textContent = char;
            }
            
            charSpan.style.color = colors[colorIndex];
            
            let factor = 0.7;
            if (isWaveMode) {
                const waveSize = getWaveSize(i, selectedSize);
                charSpan.style.fontSize = waveSize * factor + 'px';
            } else {
                charSpan.style.fontSize = selectedSize * factor + 'px';
            }
            
            currentLine.appendChild(charSpan);
        }
        
        handleLineWrapping(currentLine);
    }
}

// Handle line wrapping
function handleLineWrapping(lineElement) {
    const panelWidth = displayPanel.clientWidth - 30;
    const chars = lineElement.querySelectorAll('.char-span');
    let currentWidth = 0;
    let wrapIndex = -1;
    
    for (let i = 0; i < chars.length; i++) {
        const charWidth = chars[i].offsetWidth;
        
        if (currentWidth + charWidth > panelWidth) {
            for (let j = i - 1; j >= 0; j--) {
                if (chars[j].classList.contains('space-char')) {
                    wrapIndex = j;
                    break;
                }
            }
            if (wrapIndex === -1) wrapIndex = i - 1;
            break;
        }
        currentWidth += charWidth;
    }
    
    if (wrapIndex !== -1 && wrapIndex < chars.length - 1) {
        const newLine = document.createElement('div');
        const charsToMove = Array.from(chars).slice(wrapIndex + 1);
        
        charsToMove.forEach(char => {
            lineElement.removeChild(char);
            newLine.appendChild(char);
        });
        
        displayPanel.insertBefore(newLine, lineElement.nextSibling);
        handleLineWrapping(newLine);
    }
}

// Add custom color
function addCustomColor(color) {
    customColors.push(color);
    colorSets.Custom = customColors;
    updateCustomColorsDisplay();
    updateColorLabels();
    refreshText();
}

// Remove custom color
function removeCustomColor(index) {
    customColors.splice(index, 1);
    colorSets.Custom = customColors;
    updateCustomColorsDisplay();
    updateColorLabels();
    refreshText();
}

// Clear all custom colors
function clearCustomColors() {
    customColors = [];
    colorSets.Custom = customColors;
    updateCustomColorsDisplay();
    updateColorLabels();
    refreshText();
}

// Update custom colors display
function updateCustomColorsDisplay() {
    customColorsList.innerHTML = '';
    customColors.forEach((color, index) => {
        const swatch = document.createElement('div');
        swatch.className = 'color-swatch';
        swatch.style.backgroundColor = color;
        swatch.title = `Click to remove ${color}`;
        swatch.addEventListener('click', () => removeCustomColor(index));
        customColorsList.appendChild(swatch);
    });
}

// Copy to clipboard
function copyToClipboard() {
	gtag('event', 'copy_colored_text_to_clipboard', {
  		event_category: 'squad_calculator',
  		event_label: 'Copy to clipboard clicked'
	});
    const text = textInput.value;
    if (!text) return;
    
    const selectedSet = getSelectedColorSet();
    const colors = selectedSet === "Custom" ? customColors : colorSets[selectedSet];
    
    if (colors.length === 0) {
		showModalConfirm("Please add at least one color to the custom set first!", "Error");
        return;
    }
    
    const selectedSize = parseInt(sizeSelect.value);
    const actualSize = selectedSize;
    const isWaveMode = waveCheckbox.checked;
    const lines = text.split('\n');
    let result = '';
    
    for (let lineIndex = 0; lineIndex < lines.length; lineIndex++) {
        const line = lines[lineIndex];
        const charArray = line.split('');
        
        for (let i = 0; i < charArray.length; i++) {
            const colorIndex = getColorIndex(i, colors.length - 1);
            const char = charArray[i];
            const color = colors[colorIndex];
            
            if (char.match(/\S/)) {
                if (isWaveMode) {
                    const waveSize = getWaveSize(i, actualSize);
                    result += `<size=${waveSize}><${color}>${char}</size>`;
                } else {
                    result += `<${color}>${char}`;
                }
            } else {
                result += char;
            }
        }
        
        if (lineIndex < lines.length - 1) {
            result += '\n';
        }
    }
    
    if (!isWaveMode && selectedSize > 6) {
        result = `<size=${actualSize}>${result}</size>`;
    }
    
    navigator.clipboard.writeText(result).then(() => {
        notification.classList.add('show');
        setTimeout(() => {
            notification.classList.remove('show');
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
		showModalConfirm('Failed to copy to clipboard. Please try again.', "Error");
    });
}

// Event listeners for text generator
sizeSelect.addEventListener('change', refreshText);
waveCheckbox.addEventListener('change', refreshText);
textInput.addEventListener('input', refreshText);

for (const radio of colorSetRadios) {
    radio.addEventListener('change', function() {
        customColorsControls.style.display = this.value === "Custom" ? 'block' : 'none';
        refreshText();
    });
}

addColorBtn.addEventListener('click', () => addCustomColor(colorPicker.value));
clearColorsBtn.addEventListener('click', clearCustomColors);
copyButton.addEventListener('click', copyToClipboard);
window.addEventListener('resize', refreshText);

// ========================================================
// SQUAD CALCULATOR
// ========================================================

const STORAGE_KEY = 'palmonPals';

function formatNumber(num) {
    return num.toLocaleString('en-US'); // 1,234,567
}

// Load pals from localStorage
function loadPals() {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
}

// Save pals to localStorage
function savePals(pals) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(pals));
}

// Get element icon
function getElementIcon(element) {
    const lcElement = element.toLowerCase();
    const icons = {
        'water': '💧',
        'fire': '🔥',
        'earth': '🌍',
        'electric': '⚡'
    };
    return icons[lcElement] || '';
}

// Get role icon
function getRoleIcon(role) {
    const lcRole = role.toLowerCase();
    const icons = {
        'dps': '⚔️',
        'tank': '🛡️'
    };
    return icons[lcRole] || '';
}

// Render pals table
function renderPalsTable() {
    const pals = loadPals();
    const tbody = document.getElementById('palsTableBody');
    
    if (pals.length === 0) {
        tbody.innerHTML = '<tr><td colspan="8" class="empty-state">No pals added yet. Add your first pal above!</td></tr>';
        return;
    }
    
    tbody.innerHTML = '';
    pals.forEach((pal, index) => {
        const row = document.createElement('tr');
        const elementClass = pal.element.toLowerCase();
        row.innerHTML = `
            <td class="name">${pal.name}</td>
            <td class="center">${formatNumber(pal.attack)}</td>
            <td class="center">${formatNumber(pal.defense)}</td>
            <td class="center">${formatNumber(pal.hp)}</td>
            <td class="center">${formatNumber(pal.power)}</td>
            <td class="center"><span class="role-badge ${pal.role.toLowerCase()}">${getRoleIcon(pal.role)} ${pal.role}</span></td>
            <td class="center"><span class="element-badge ${elementClass}">${getElementIcon(pal.element)} ${pal.element}</span></td>
            <td class="center">
                <button class="delete-btn" onclick="deletePal(${index})">Delete</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

// Add pal
function addPal() {
    const name = document.getElementById('palName').value.trim();
    const attack = parseInt(document.getElementById('palAttack').value) || 0;
    const defense = parseInt(document.getElementById('palDefense').value) || 0;
    const hp = parseInt(document.getElementById('palHP').value) || 0;
    const power = parseInt(document.getElementById('palPower').value) || 0;
    const role = document.querySelector('input[name="pal_role"]:checked').value;
    const element = document.querySelector('input[name="pal_element"]:checked').value;
    
    if (!name) {
		showModalConfirm('Please enter a pal name!', "Error");
        return;
    }
    
    const pals = loadPals();
    pals.push({ name, attack, defense, hp, power, role, element });
    savePals(pals);
    renderPalsTable();
    
    // Clear form
    document.getElementById('palName').value = '';
    document.getElementById('palAttack').value = '';
    document.getElementById('palDefense').value = '';
    document.getElementById('palHP').value = '';
    document.getElementById('palPower').value = '';
    document.getElementById('radio-tank').checked = false;
    document.getElementById('radio-dps').checked = true;
    document.getElementById('radio-water').checked = true;
    document.getElementById('radio-fire').checked = false;
    document.getElementById('radio-earth').checked = false;
    document.getElementById('radio-electric').checked = false;
    
    document.getElementById('palName').focus();
}

// Delete pal
async function deletePal(index) {
	const ok = await showModalConfirm("Delete this pal?", "Delete Pal");
	if (!ok) return;
	
    const pals = loadPals();
    pals.splice(index, 1);
    savePals(pals);
    renderPalsTable();    
}

// Calculate combinations count
function calculateCombinationsCount(n, k) {
    if (k > n) return 0;
    if (k === 0 || k === n) return 1;
    
    let result = 1;
    for (let i = 0; i < k; i++) {
        result *= (n - i);
        result /= (i + 1);
    }
    return Math.round(result);
}

// Fill squad list element with stats
function fillSquadListElement(squad, listElement, statsElement, stats) {
    listElement.innerHTML = '';
    squad.forEach(pal => {
        const li = document.createElement('li');
        li.textContent = pal.name;
        listElement.appendChild(li);
    });
    
    // Add stats display
    statsElement.innerHTML = `
        <div class="stat-row">
            <span class="stat-label">⚔️ Total Attack:</span>
            <span class="stat-value">${formatNumber(Math.round(stats.attack))}</span>
        </div>
        <div class="stat-row">
            <span class="stat-label">🛡️ Total Defense:</span>
            <span class="stat-value">${formatNumber(Math.round(stats.defense))}</span>
        </div>
        <div class="stat-row">
            <span class="stat-label">❤️ Total HP:</span>
            <span class="stat-value">${formatNumber(Math.round(stats.hp))}</span>
        </div>
        <div class="stat-row">
            <span class="stat-label">⚡ Total Power:</span>
            <span class="stat-value">${formatNumber(Math.round(stats.power))}</span>
        </div>
    `;
}

// Find optimal squad
function findOptimalSquad(pals) {
    const SQUAD_SIZE = 7;
    
    const elementBonusMap = {
        0: 0.0, 1: 0.0, 2: 0.0, 3: 0.05, 4: 0.10, 5: 0.20, 6: 0.25, 7: 0.30
    };
    
    function applyRoleBonus(pal) {
        const stats = { ...pal };
        if (pal.role === 'DPS') {
            stats.attack *= 1.30;
        } else if (pal.role === 'Tank') {
            stats.defense *= 1.20;
            stats.hp *= 1.20;
        }
        return stats;
    }
    
    function getElementBonus(squad) {
        const elementCounts = {};
        squad.forEach(pal => {
            elementCounts[pal.element] = (elementCounts[pal.element] || 0) + 1;
        });
        const maxCount = Math.max(...Object.values(elementCounts));
        return elementBonusMap[maxCount] || 0;
    }
    
    function applyElementBonus(squad) {
        const bonus = getElementBonus(squad);
        return squad.map(pal => ({
            ...pal,
            attack: pal.attack * (1 + bonus),
            defense: pal.defense * (1 + bonus),
            hp: pal.hp * (1 + bonus),
            power: pal.power * (1 + bonus)
        }));
    }
    
    function calculateSquadStats(squad) {
        const squadWithBonuses = applyElementBonus(squad);
        return squadWithBonuses.reduce((total, pal) => ({
            power: total.power + pal.power,
            attack: total.attack + pal.attack,
            defense: total.defense + pal.defense,
            hp: total.hp + pal.hp
        }), { power: 0, attack: 0, defense: 0, hp: 0 });
    }
    
    function* generateCombinations(arr, size) {
        function* helper(start, combo) {
            if (combo.length === size) {
                yield combo;
                return;
            }
            for (let i = start; i < arr.length; i++) {
                yield* helper(i + 1, [...combo, arr[i]]);
            }
        }
        yield* helper(0, []);
    }
    
    const uniquePals = [];
    const seenNames = new Set();
    
    for (const pal of pals) {
        if (!seenNames.has(pal.name)) {
            seenNames.add(pal.name);
            uniquePals.push(applyRoleBonus(pal));
        }
    }
    
    if (uniquePals.length < SQUAD_SIZE) {
        return null;
    }
    
    let bestAttack = null;
    let bestDefense = null;
    let bestPower = null;
    let bestOverall = null;
    
    let maxAttack = -Infinity;
    let maxDefense = -Infinity;
    let maxPower = -Infinity;
    let maxOverall = -Infinity;
    
    for (const combo of generateCombinations(uniquePals, SQUAD_SIZE)) {
        const stats = calculateSquadStats(combo);
        const overallScore = stats.power + stats.attack + stats.defense;
        
        if (stats.attack > maxAttack) {
            maxAttack = stats.attack;
            bestAttack = { squad: applyElementBonus(combo), stats: stats };
        }
        
        if (stats.defense > maxDefense) {
            maxDefense = stats.defense;
            bestDefense = { squad: applyElementBonus(combo), stats: stats };
        }
        
        if (stats.power > maxPower) {
            maxPower = stats.power;
            bestPower = { squad: applyElementBonus(combo), stats: stats };
        }
        
        if (overallScore > maxOverall) {
            maxOverall = overallScore;
            bestOverall = { squad: applyElementBonus(combo), stats: stats };
        }
    }
    
    return { bestAttack, bestDefense, bestPower, bestOverall };
}

// Calculate squads
async function calculateSquads() {
	gtag('event', 'calculate_squads', {
  		event_category: 'squad_calculator',
  		event_label: 'Calculate Optimal Squads clicked'
	});
    const pals = loadPals();
    
    if (pals.length < 7) {
		showModalConfirm('You need at least 7 pals to generate squads!', "Warning");
        return;
    }
    
    const combCount = calculateCombinationsCount(pals.length, 7);
    const warningDiv = document.getElementById('calculationWarning');
    
    if (combCount > 100000) {
        warningDiv.style.display = 'block';
		
		const ok = await showModalConfirm(`This will calculate ${combCount.toLocaleString()} combinations and may take a while. Continue?`, "Warning");
		if (!ok) {
            warningDiv.style.display = 'none';
            return;
        }
    }
    
    warningDiv.textContent = '⏳ Calculating optimal squads...';
    warningDiv.style.display = 'block';
    
    setTimeout(() => {
        const squads = findOptimalSquad(pals);
        
        if (!squads) {
			showModalConfirm('Not enough unique pals to generate squads!', "Error");
            warningDiv.style.display = 'none';
            return;
        }
        
        fillSquadListElement(
            squads.bestAttack.squad,
            document.getElementById('squadByAttackList'),
            document.getElementById('squadByAttackStats'),
            squads.bestAttack.stats
        );
        
        fillSquadListElement(
            squads.bestDefense.squad,
            document.getElementById('squadByDefenseList'),
            document.getElementById('squadByDefenseStats'),
            squads.bestDefense.stats
        );
        
        fillSquadListElement(
            squads.bestPower.squad,
            document.getElementById('squadByPowerList'),
            document.getElementById('squadByPowerStats'),
            squads.bestPower.stats
        );
        
        fillSquadListElement(
            squads.bestOverall.squad,
            document.getElementById('squadByOverallList'),
            document.getElementById('squadByOverallStats'),
            squads.bestOverall.stats
        );
        
        document.getElementById('squadsResults').style.display = 'block';
        warningDiv.style.display = 'none';
        
        document.getElementById('squadsResults').scrollIntoView({ 
            behavior: 'smooth', 
            block: 'nearest' 
        });
    }, 100);
}

function showModalConfirm(message, title = "Confirm") {
    return new Promise(resolve => {
        const overlay = document.getElementById("modalOverlay");
        const msg = document.getElementById("modalMessage");
        const ttl = document.getElementById("modalTitle");

        ttl.textContent = title;
        msg.textContent = message;

        overlay.style.display = "flex";

        const confirmBtn = document.getElementById("modalConfirm");
        const cancelBtn = document.getElementById("modalCancel");

        const close = (value) => {
            overlay.style.display = "none";
            confirmBtn.onclick = null;
            cancelBtn.onclick = null;
            resolve(value);
        };

        confirmBtn.onclick = () => close(true);
        cancelBtn.onclick = () => close(false);
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Initialize text generator
    textInput.focus();
    updateColorLabels();
    refreshText();
    
    // Initialize squad calculator
    renderPalsTable();
    
    document.getElementById('addPalBtn').addEventListener('click', addPal);
    document.getElementById('calculateSquadsBtn').addEventListener('click', calculateSquads);
    
    // Allow Enter key to add pal
    ['palName', 'palAttack', 'palDefense', 'palHP', 'palPower'].forEach(id => {
        document.getElementById(id).addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                addPal();
            }
        });
    });
    
    document.getElementById('palName').focus();
});

document.querySelectorAll('.collapsible-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
        const content = btn.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            btn.textContent = "Show Calculation Details ▼";
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
            btn.textContent = "Hide Calculation Details ▲";
        }
    });
});
